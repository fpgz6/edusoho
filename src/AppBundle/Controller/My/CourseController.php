<?php

namespace AppBundle\Controller\My;

use AppBundle\Common\ArrayToolkit;
use AppBundle\Common\Paginator;
use AppBundle\Controller\Course\CourseBaseController;
use Biz\Classroom\Service\ClassroomService;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\LearningDataAnalysisService;
use Biz\Task\Service\TaskResultService;
use Biz\Task\Service\TaskService;
use Symfony\Component\HttpFoundation\Request;

class CourseController extends CourseBaseController
{
    public function indexAction()
    {
        if ($this->getCurrentUser()->isTeacher()) {
            return $this->redirect($this->generateUrl('my_teaching_course_sets'));
        } else {
            return $this->redirect($this->generateUrl('my_courses_learning'));
        }
    }

    public function learningAction(Request $request)
    {
        $currentUser = $this->getUser();

        $courses = $this->getCourseService()->findUserLearningCourses($currentUser['id'], 0, PHP_INT_MAX);
        $courses = ArrayToolkit::group($courses, 'courseSetId');
        $courseSetIds = array_keys($courses);

        $conditions = array('ids' => $courseSetIds);

        $paginator = new Paginator(
            $request,
            $this->getCourseSetService()->countCourseSets($conditions),
            12
        );

        $courseSets = $this->getCourseSetService()->searchCourseSets(
            $conditions,
            array(),
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
        );

        $courseSets = ArrayToolkit::index($courseSets, 'id');

        $courseSets = $this->calculateCourseSetprogress($courseSets, $courses);
        $courseSets = $this->getClassrooms($courseSets);

        return $this->render(
            'my/learning/course/learning.html.twig',
            array(
                'courses' => $courses,
                'paginator' => $paginator,
                'courseSets' => $courseSets,
            )
        );
    }

    public function learnedAction(Request $request)
    {
        $currentUser = $this->getCurrentUser();

        $courses = $this->getCourseService()->findUserLearnedCourses($currentUser['id'], 0, PHP_INT_MAX);
        $courses = ArrayToolkit::group($courses, 'courseSetId');

        $courseSetIds = $this->checkLearnedCourseSetIds($courses);

        $conditions = array(
            'ids' => $courseSetIds,
        );
        $paginator = new Paginator(
            $request,
            $this->getCourseSetService()->countCourseSets($conditions),
            12
        );

        $courseSets = $this->getCourseSetService()->searchCourseSets(
            $conditions,
            array(),
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
        );

        $courseSets = $this->calculateCourseSetprogress($courseSets, $courses);
        $courseSets = $this->getClassrooms($courseSets);

        return $this->render(
            'my/learning/course/learned.html.twig',
            array(
                'courses' => $courses,
                'courseSets' => $courseSets,
                'paginator' => $paginator,
            )
        );
    }

    public function headerForMemberAction($course, $member)
    {
        $courseSet = $this->getCourseSetService()->getCourseSet($course['courseSetId']);
        $courses = $this->getCourseService()->findPublishedCoursesByCourseSetId($course['courseSetId']);

        $breadcrumbs = $this->getCategoryService()->findCategoryBreadcrumbs($courseSet['categoryId']);

        if (empty($member['previewAs'])) {
            $learnProgress = $this->getLearningDataAnalysisService()->getUserLearningSchedule($course['id'], $member['userId']);
        } else {
            $learnProgress = array(
                'taskCount' => 0,
                'progress' => 0,
                'taskResultCount' => 0,
                'toLearnTasks' => 0,
                'taskPerDay' => 0,
                'planStudyTaskCount' => 0,
                'planProgressProgress' => 0,
            );
        }

        $isUserFavorite = false;
        $user = $this->getUser();
        if ($user->isLogin()) {
            $isUserFavorite = $this->getCourseSetService()->isUserFavorite($user['id'], $course['courseSetId']);
        }

        return $this->render(
            'course/header/header-for-member.html.twig',
            array(
                'courseSet' => $courseSet,
                'courses' => $courses,
                'course' => $course,
                'member' => $member,
                'taskCount' => $learnProgress['taskCount'],
                'progress' => $learnProgress['progress'],
                'taskResultCount' => $learnProgress['taskResultCount'],
                'toLearnTasks' => $learnProgress['toLearnTasks'],
                'taskPerDay' => $learnProgress['taskPerDay'],
                'planStudyTaskCount' => $learnProgress['planStudyTaskCount'],
                'planProgressProgress' => $learnProgress['planProgressProgress'],
                'isUserFavorite' => $isUserFavorite,
                'marketingPage' => 0,
                'breadcrumbs' => $breadcrumbs,
            )
        );
    }

    public function showAction(Request $request, $id, $tab = 'tasks')
    {
        $course = $this->getCourseService()->getCourse($id);
        $member = $this->getCourseMember($request, $course);

        $classroom = array();
        if ($course['parentId'] > 0) {
            $classroom = $this->getClassroomService()->getClassroomByCourseId($course['id']);
        }

        // 访问班级课程时确保将用户添加到课程member中
        if (!empty($classroom) && empty($member)) {
            $this->joinCourseMemberByClassroomId($course['id'], $classroom['id']);
        }

        if (empty($member)) {
            return $this->redirect(
                $this->generateUrl(
                    'course_show',
                    array(
                        'id' => $id,
                        'tab' => $tab,
                    )
                )
            );
        }

        if ($course['expiryMode'] == 'date' && $course['expiryStartDate'] >= time()) {
            return $this->redirectToRoute('course_show', array('id' => $course['id']));
        }

        $tags = $this->findCourseSetTagsByCourseSetId($course['courseSetId']);

        return $this->render(
            'course/course-show.html.twig',
            array(
                'tab' => $tab,
                'tags' => $tags,
                'member' => $member,
                'isCourseTeacher' => $member['role'] == 'teacher',
                'course' => $course,
                'classroom' => $classroom,
            )
        );
    }

    public function tasksAction($course, $member = array())
    {
        $toLearnTasks = $this->getTaskService()->findToLearnTasksByCourseId($course['id']);

        $offsetTaskId = !empty($toLearnTasks) ? $toLearnTasks[0]['id'] : 0;

        list($courseItems, $nextOffsetSeq) = $this->getCourseService()->findCourseItemsByPaging($course['id'], array('offsetTaskId' => $offsetTaskId));

        return $this->render(
            'course/tabs/tasks.html.twig',
            array(
                'course' => $course,
                'courseItems' => $courseItems,
                'nextOffsetSeq' => $nextOffsetSeq,
                'member' => $member,
            )
        );
    }

    /**
     * 当用户是班级学员却不在课程学员中时，将学员添加到课程学员中.
     *
     * @param $courseId
     * @param $classroomId
     */
    protected function joinCourseMemberByClassroomId($courseId, $classroomId)
    {
        $classroom = $this->getClassroomService()->getClassroom($classroomId);
        $user = $this->getCurrentUser();

        $classroomMember = $this->getClassroomService()->getClassroomMember($classroom['id'], $user['id']);

        if (empty($classroomMember) || !in_array('student', $classroomMember['role'])) {
            return;
        }

        $info = array(
            'levelId' => empty($classroomMember['levelId']) ? 0 : $classroomMember['levelId'],
            'deadline' => $classroomMember['deadline'],
        );

        $this->getMemberService()->createMemberByClassroomJoined($courseId, $user['id'], $classroom['id'], $info);
    }

    protected function calculateCourseSetprogress($courseSets, $courses)
    {
        if (empty($courseSets)) {
            return array();
        }

        foreach ($courseSets as $courseSetId => $courseSet) {
            $currentCourses = $courses[$courseSet['id']];

            $totalUserLearned = 0;
            $totalTaskNum = 0;
            array_map(function ($course) use (&$totalUserLearned, &$totalTaskNum) {
                $totalUserLearned += $course['memberLearnedNum'];
                $totalTaskNum += $course['compulsoryTaskNum'];
            }, $currentCourses);

            $courseSets[$courseSetId]['totalUserLearned'] = $totalUserLearned;
            $courseSets[$courseSetId]['totalTaskNum'] = $totalTaskNum;
        }

        return $courseSets;
    }

    protected function getClassrooms($courseSets)
    {
        if (empty($courseSets)) {
            return array();
        }

        $courseSetIds = ArrayToolkit::column($courseSets, 'id');
        $classroomCourses = $this->getClassroomService()->findClassroomsByCourseSetIds($courseSetIds);
        $classroomCourses = ArrayToolkit::index($classroomCourses, 'courseSetId');
        $classroomIds = ArrayToolkit::column($classroomCourses, 'classroomId');

        $classrooms = $this->getClassroomService()->findClassroomsByIds($classroomIds);

        foreach ($courseSets as $courseSetId => $courseSet) {
            if ($courseSet['parentId'] > 0) {
                $classroomCourse = $classroomCourses[$courseSet['id']];
                $classroom = $classrooms[$classroomCourse['classroomId']];
                $courseSets[$courseSetId]['classroom'] = array(
                    'id' => $classroom['id'],
                    'title' => $classroom['title'],
                );
            }
        }

        return $courseSets;
    }

    protected function checkLearnedCourseSetIds($groupCourses)
    {
        if (empty($groupCourses)) {
            return array(-1);
        }

        $courseSetIds = array();
        foreach ($groupCourses as $courseSetId => $courses) {
            $isLearned = 1;
            $isLearned = array_map(function ($course) {
                if ($course['memberLearnedNum'] < $course['compulsoryTaskNum']) {
                    return 0;
                }
            }, $courses);

            if ($isLearned) {
                array_push($courseSetIds, $courseSetId);
            }
        }

        return empty($courseSetIds) ? array(-1) : $courseSetIds;
    }

    /**
     * @return TaskResultService
     */
    protected function getTaskResultService()
    {
        return $this->createService('Task:TaskResultService');
    }

    /**
     * @return TaskService
     */
    protected function getTaskService()
    {
        return $this->createService('Task:TaskService');
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->createService('Course:CourseService');
    }

    /**
     * @return ClassroomService
     */
    protected function getClassroomService()
    {
        return $this->createService('Classroom:ClassroomService');
    }

    /**
     * @return CategoryService
     */
    private function getCategoryService()
    {
        return $this->createService('Taxonomy:CategoryService');
    }

    /**
     * @return LearningDataAnalysisService
     */
    private function getLearningDataAnalysisService()
    {
        return $this->createService('Course:LearningDataAnalysisService');
    }
}
