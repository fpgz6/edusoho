!function(e){function t(r,o){if(n[r])return n[r].exports;var i={i:r,l:!1,exports:{}};return 0!=o&&(n[r]=i),e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/static-dist/",t(t.s=28)}({"035e2a830061b35356fd":function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n("15eaa3b4c0f42b57884f"),i=n("9e3caf8318e7c4151c58"),a={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n("6a45052874d49cfc41a9"):void 0!==t&&(e=n("6a45052874d49cfc41a9")),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){c.headers[e]={}}),o.forEach(["post","put","patch"],function(e){c.headers[e]=o.merge(a)}),e.exports=c}).call(t,n("83923e6ec728b5df1e80"))},"15eaa3b4c0f42b57884f":function(e,t,n){"use strict";function r(e){return"[object Array]"===S.call(e)}function o(e){return"[object ArrayBuffer]"===S.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function c(e){return"string"==typeof e}function s(e){return"number"==typeof e}function u(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===S.call(e)}function l(e){return"[object File]"===S.call(e)}function p(e){return"[object Blob]"===S.call(e)}function h(e){return"[object Function]"===S.call(e)}function m(e){return f(e)&&h(e.pipe)}function b(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function g(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)g(arguments[n],e);return t}function x(e,t,n){return g(t,function(t,r){e[r]=n&&"function"==typeof t?E(t,n):t}),e}var E=n("8514d748e974d4c45f25"),T=n("c90b56d705882f963ca8"),S=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:T,isFormData:i,isArrayBufferView:a,isString:c,isNumber:s,isObject:f,isUndefined:u,isDate:d,isFile:l,isBlob:p,isFunction:h,isStream:m,isURLSearchParams:b,isStandardBrowserEnv:y,forEach:g,merge:w,extend:x,trim:v}},"20038773d238720defc7":function(e,t,n){"use strict";var r=n("15eaa3b4c0f42b57884f");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},"253b433b4d4e4d8ce722":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){e.length&&(n=n||document.getElementsByTagName("body")[0],function r(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.shift();e.length?o(i,r,n):o(i,t,n)}())},o=function(e,t,n){var r=document.createElement("script"),o=void 0;r.onload=r.onerror=r.onreadystatechange=function(){r.readyState&&!/^c|loade/.test(r.readyState)||o||(r.onload=r.onreadystatechange=null,o=1,t())},r.async=1,r.src=e,n.appendChild(r)};t.script=r},28:function(e,t,n){e.exports=n("495e5885544229675d33")},"2e9cb3c5f78e92355fb9":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},"33e2c297b95ae2c95e37":function(e,t,n){"use strict";var r=n("15eaa3b4c0f42b57884f");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var c=[];c.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),r.isString(o)&&c.push("path="+o),r.isString(i)&&c.push("domain="+i),!0===a&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"3594f7b88d84f6dbef4b":function(e,t,n){"use strict";var r=n("2e9cb3c5f78e92355fb9");e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},"3b801af84b8eca00645d":function(e,t,n){e.exports=n("5b39ade236bbc8c87a1e")},"469aa93abe9aee73f27a":function(e,t,n){"use strict";var r=n("15eaa3b4c0f42b57884f");e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},"479e9aebc91b05f97092":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"495e5885544229675d33":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("d367cd713de3c72d0e1a"),a=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n("db05cc07d7b1c1cd41c5"),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),u=function(){function e(){r(this,e),this.options={},this.handler={},this.isVerify=!1}return o(e,[{key:"passport",value:function(){var e=this;this.options.apiList instanceof Array&&this.options.apiList.forEach(function(t){if(!e[t])throw new Error("不存在 "+t+" 接口")}),this.isVerify=!0}},{key:"getMessenger",value:function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"activity-events",t=arguments[1];window.addEventListener("message",function(n){n.data.channel===e&&"function"==typeof t&&t(n.data)})};return{emit:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*";window.parent.postMessage(Object.assign({channel:"task-events"},e),t)},on:e}}},{key:"verify",value:function(){if(!this.isVerify)throw new Error("请先调用config方法，验证身份")}},{key:"config",value:function(e){var t={apiList:[],appId:null};return Object.assign(this.options,t,e),this.passport(),this}},{key:"getApi",value:function(e){return this.verify(),(0,a.default)(e)}},{key:"getUi",value:function(){return this.verify(),Object.assign({},s)}}]),e}(),f=new u;e.exports=window.ltcsdkserver=f},"560414f92274886e15f0":function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n("a855203b6696f2127de8");r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},"5b39ade236bbc8c87a1e":function(e,t,n){"use strict";function r(e){var t=new a(e),n=i(a.prototype.request,t);return o.extend(n,a.prototype,t),o.extend(n,t),n}var o=n("15eaa3b4c0f42b57884f"),i=n("8514d748e974d4c45f25"),a=n("dadad450e5df70f96065"),c=n("035e2a830061b35356fd"),s=r(c);s.Axios=a,s.create=function(e){return r(o.merge(c,e))},s.Cancel=n("a855203b6696f2127de8"),s.CancelToken=n("560414f92274886e15f0"),s.isCancel=n("997734206644405ccf52"),s.all=function(e){return Promise.all(e)},s.spread=n("e328ac05376912772af3"),e.exports=s,e.exports.default=s},"5c7460368a4cbf8dd811":function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),a="",c=0,s=i;o.charAt(0|c)||(s="=",c%1);a+=s.charAt(63&t>>8-c%1*8)){if((n=o.charCodeAt(c+=.75))>255)throw new r;t=t<<8|n}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},"667e4f54457480e27001":function(e,t,n){"use strict";var r=n("15eaa3b4c0f42b57884f"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},"66d92989dca02420352f":function(e,t,n){"use strict";var r=n("3594f7b88d84f6dbef4b");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"6a45052874d49cfc41a9":function(e,t,n){"use strict";var r=n("15eaa3b4c0f42b57884f"),o=n("66d92989dca02420352f"),i=n("a614bf51ff84f0c61400"),a=n("667e4f54457480e27001"),c=n("469aa93abe9aee73f27a"),s=n("3594f7b88d84f6dbef4b"),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("5c7460368a4cbf8dd811");e.exports=function(e){return new Promise(function(t,f){var d=e.data,l=e.headers;r.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||c(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var b=e.auth.username||"",v=e.auth.password||"";l.Authorization="Basic "+u(b+":"+v)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,i={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,f,i),p=null}},p.onerror=function(){f(s("Network Error",e,null,p)),p=null},p.ontimeout=function(){f(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=n("33e2c297b95ae2c95e37"),g=(e.withCredentials||c(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(l,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},"83923e6ec728b5df1e80":function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){m&&p&&(m=!1,p.length?h=p.concat(h):b=-1,h.length&&c())}function c(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(p=h,h=[];++b<t;)p&&p[b].run();b=-1,t=h.length}p=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var f,d,l=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var p,h=[],m=!1,b=-1;l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||m||o(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=u,l.addListener=u,l.once=u,l.off=u,l.removeListener=u,l.removeAllListeners=u,l.emit=u,l.prependListener=u,l.prependOnceListener=u,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},"8514d748e974d4c45f25":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"997734206644405ccf52":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"9e3caf8318e7c4151c58":function(e,t,n){"use strict";var r=n("15eaa3b4c0f42b57884f");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},a614bf51ff84f0c61400:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n("15eaa3b4c0f42b57884f");e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},a855203b6696f2127de8:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},b91c90e7cf509babfd26:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},c6979683c898f55becbf:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n("15eaa3b4c0f42b57884f");r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},c90b56d705882f963ca8:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},d329ca3e2998ea4d3a6a:function(e,t){e.exports={api:[{name:"getCourse",path:"/api/course_sets/:id",method:"GET"},{name:"getAnnouncements",method:"GET",path:"/api/announcements"}]}},d367cd713de3c72d0e1a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("3b801af84b8eca00645d"),o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n("d329ca3e2998ea4d3a6a").api)),i=function(e,t){var n=e.split("/");for(var r in n)-1!==n[r].indexOf(":")&&(n[r]=t[n[r].replace(":","")]);return n.join("/")},a={},c=void 0;o.map(function(e){a[e.name]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{params:{}},n=t.params,r=t.data,o=i(e.path,n),a={url:o};return r&&(a.data=r),c(a)}});var s=function(e){return c=r.create(e),a};t.default=s},dadad450e5df70f96065:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=n("035e2a830061b35356fd"),i=n("15eaa3b4c0f42b57884f"),a=n("c6979683c898f55becbf"),c=n("e87f802ca5f817a35445");r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[c,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},db05cc07d7b1c1cd41c5:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var a=t[o](i),c=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.ckeditorInit=t.ckeditor=void 0;var o=n("253b433b4d4e4d8ce722"),i={ckeditor:"/static-dist/libs/es-ckeditor/ckeditor.js"};t.ckeditor=function(e){(0,o.script)([i.ckeditor],e)},t.ckeditorInit=function(){var e=r(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,r={element:"#text-content-field",fileSingleSizeLimit:2,height:300,target:'[name="content"]',validator:""},Object.assign(r,t),e.next=5,new Promise(function(e,t){(0,o.script)([i.ckeditor],function(){n=CKEDITOR.replace(r.element.replace("#",""),{toolbar:"Task",fileSingleSizeLimit:r.fileSingleSizeLimit,filebrowserImageUploadUrl:$(r.element).data("imageUploadUrl"),filebrowserFlashUploadUrl:$(r.element).data("flashUploadUrl"),allowedContent:!0,height:r.height}),n.on("change",function(){$(r.target).val(n.getData()),r.validator&&r.validator.form()}),n.on("blur",function(){$(r.target).val(n.getData()),r.validator&&r.validator.form()}),e()})});case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()},e328ac05376912772af3:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},e87f802ca5f817a35445:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n("15eaa3b4c0f42b57884f"),i=n("20038773d238720defc7"),a=n("997734206644405ccf52"),c=n("035e2a830061b35356fd"),s=n("479e9aebc91b05f97092"),u=n("b91c90e7cf509babfd26");e.exports=function(e){return r(e),e.baseURL&&!s(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||c.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}}});