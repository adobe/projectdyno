<<<<<<< HEAD
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e,n){"use strict";(function(e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function o(t,e,n,r,o,i){return{tag:t,key:e,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}o.normalize=function(t){return Array.isArray(t)?o("[",void 0,void 0,o.normalizeChildren(t),void 0,void 0):null!=t&&"object"!==(void 0===t?"undefined":r(t))?o("#",void 0,void 0,!1===t?"":t,void 0,void 0):t},o.normalizeChildren=function(t){for(var e=0;e<t.length;e++)t[e]=o.normalize(t[e]);return t};var i=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,u={},a={}.hasOwnProperty;function l(t){for(var e in t)if(a.call(t,e))return!1;return!0}function c(t){var e,n=arguments[1],c=2;if(null==t||"string"!=typeof t&&"function"!=typeof t&&"function"!=typeof t.view)throw Error("The selector must be either a string or a component.");if("string"==typeof t)var s=u[t]||function(t){for(var e,n="div",r=[],o={};e=i.exec(t);){var a=e[1],l=e[2];if(""===a&&""!==l)n=l;else if("#"===a)o.id=l;else if("."===a)r.push(l);else if("["===e[3][0]){var c=e[6];c&&(c=c.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===e[4]?r.push(c):o[e[4]]=""===c?c:c||!0}}return r.length>0&&(o.className=r.join(" ")),u[t]={tag:n,attrs:o}}(t);if(null==n?n={}:("object"!==(void 0===n?"undefined":r(n))||null!=n.tag||Array.isArray(n))&&(n={},c=1),arguments.length===c+1)e=arguments[c],Array.isArray(e)||(e=[e]);else for(e=[];c<arguments.length;)e.push(arguments[c++]);var f=o.normalizeChildren(e);return"string"==typeof t?function(t,e,n){var r,i,u=!1,c=e.className||e.class;if(!l(t.attrs)&&!l(e)){var s={};for(var f in e)a.call(e,f)&&(s[f]=e[f]);e=s}for(var f in t.attrs)a.call(t.attrs,f)&&(e[f]=t.attrs[f]);for(var f in void 0!==c&&(void 0!==e.class&&(e.class=void 0,e.className=c),null!=t.attrs.className&&(e.className=t.attrs.className+" "+c)),e)if(a.call(e,f)&&"key"!==f){u=!0;break}return Array.isArray(n)&&1===n.length&&null!=n[0]&&"#"===n[0].tag?i=n[0].children:r=n,o(t.tag,e.key,u?e:void 0,r,i)}(s,n,f):o(t,n.key,n,f)}c.trust=function(t){return null==t&&(t=""),o("<",void 0,void 0,t,void 0,void 0)},c.fragment=function(t,e){return o("[",t.key,t,o.normalizeChildren(e),void 0,void 0)};var s=c;if((f=function t(n){if(!(this instanceof t))throw new Error("Promise must be called with `new`");if("function"!=typeof n)throw new TypeError("executor must be a function");var o=this,i=[],u=[],a=f(i,!0),l=f(u,!1),c=o._instance={resolvers:i,rejectors:u},s="function"==typeof e?e:setTimeout;function f(t,e){return function n(a){var f;try{if(!e||null==a||"object"!==(void 0===a?"undefined":r(a))&&"function"!=typeof a||"function"!=typeof(f=a.then))s(function(){e||0!==t.length||console.error("Possible unhandled promise rejection:",a);for(var r=0;r<t.length;r++)t[r](a);i.length=0,u.length=0,c.state=e,c.retry=function(){n(a)}});else{if(a===o)throw new TypeError("Promise can't be resolved w/ itself");d(f.bind(a))}}catch(t){l(t)}}}function d(t){var e=0;function n(t){return function(n){e++>0||t(n)}}var r=n(l);try{t(n(a),r)}catch(t){r(t)}}d(n)}).prototype.then=function(t,e){var n,r,o=this._instance;function i(t,e,i,u){e.push(function(e){if("function"!=typeof t)i(e);else try{n(t(e))}catch(t){r&&r(t)}}),"function"==typeof o.retry&&u===o.state&&o.retry()}var u=new f(function(t,e){n=t,r=e});return i(t,o.resolvers,n,!0),i(e,o.rejectors,r,!1),u},f.prototype.catch=function(t){return this.then(null,t)},f.resolve=function(t){return t instanceof f?t:new f(function(e){e(t)})},f.reject=function(t){return new f(function(e,n){n(t)})},f.all=function(t){return new f(function(e,n){var o=t.length,i=0,u=[];if(0===t.length)e([]);else for(var a=0;a<t.length;a++)!function(a){function l(t){i++,u[a]=t,i===o&&e(u)}null==t[a]||"object"!==r(t[a])&&"function"!=typeof t[a]||"function"!=typeof t[a].then?l(t[a]):t[a].then(l,n)}(a)})},f.race=function(t){return new f(function(e,n){for(var r=0;r<t.length;r++)t[r].then(e,n)})},"undefined"!=typeof window){void 0===window.Promise&&(window.Promise=f);var f=window.Promise}else if(void 0!==n){void 0===n.Promise&&(n.Promise=f);f=n.Promise}var d=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return"";var e=[];for(var n in t)r(n,t[n]);return e.join("&");function r(t,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(t+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(t+"["+o+"]",n[o]);else e.push(encodeURIComponent(t)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}},p=new RegExp("^file://","i"),h=function(t,e){var n,r=0;function o(){var t=0;function e(){0==--t&&"function"==typeof n&&n()}return function n(r){var o=r.then;return r.then=function(){t++;var i=o.apply(r,arguments);return i.then(e,function(n){if(e(),0===t)throw n}),n(i)},r}}function i(t,e){if("string"==typeof t){var n=t;null==(t=e||{}).url&&(t.url=n)}return t}function u(t,e){if(null==e)return t;for(var n=t.match(/:[^\/]+/gi)||[],r=0;r<n.length;r++){var o=n[r].slice(1);null!=e[o]&&(t=t.replace(n[r],e[o]))}return t}function a(t,e){var n=d(e);return""!==n&&(t+=(t.indexOf("?")<0?"?":"&")+n),t}function l(t){try{return""!==t?JSON.parse(t):null}catch(e){throw new Error(t)}}function c(t){return t.responseText}function s(t,e){if("function"==typeof t){if(!Array.isArray(e))return new t(e);for(var n=0;n<e.length;n++)e[n]=new t(e[n])}return e}return{request:function(n,r){var f=o();n=i(n,r);var d=new e(function(e,r){null==n.method&&(n.method="GET"),n.method=n.method.toUpperCase();var o="GET"!==n.method&&"TRACE"!==n.method&&("boolean"!=typeof n.useBody||n.useBody);"function"!=typeof n.serialize&&(n.serialize="undefined"!=typeof FormData&&n.data instanceof FormData?function(t){return t}:JSON.stringify),"function"!=typeof n.deserialize&&(n.deserialize=l),"function"!=typeof n.extract&&(n.extract=c),n.url=u(n.url,n.data),o?n.data=n.serialize(n.data):n.url=a(n.url,n.data);var i=new t.XMLHttpRequest,f=!1,d=i.abort;for(var h in i.abort=function(){f=!0,d.call(i)},i.open(n.method,n.url,"boolean"!=typeof n.async||n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),n.serialize!==JSON.stringify||!o||n.headers&&n.headers.hasOwnProperty("Content-Type")||i.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.deserialize!==l||n.headers&&n.headers.hasOwnProperty("Accept")||i.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(i.withCredentials=n.withCredentials),n.headers)({}).hasOwnProperty.call(n.headers,h)&&i.setRequestHeader(h,n.headers[h]);"function"==typeof n.config&&(i=n.config(i,n)||i),i.onreadystatechange=function(){if(!f&&4===i.readyState)try{var t=n.extract!==c?n.extract(i,n):n.deserialize(n.extract(i,n));if(i.status>=200&&i.status<300||304===i.status||p.test(n.url))e(s(n.type,t));else{var o=new Error(i.responseText);for(var u in t)o[u]=t[u];r(o)}}catch(t){r(t)}},o&&null!=n.data?i.send(n.data):i.send()});return!0===n.background?d:f(d)},jsonp:function(n,l){var c=o();n=i(n,l);var f=new e(function(e,o){var i=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,l=t.document.createElement("script");t[i]=function(r){l.parentNode.removeChild(l),e(s(n.type,r)),delete t[i]},l.onerror=function(){l.parentNode.removeChild(l),o(new Error("JSONP request failed")),delete t[i]},null==n.data&&(n.data={}),n.url=u(n.url,n.data),n.data[n.callbackKey||"callback"]=i,l.src=a(n.url,n.data),t.document.documentElement.appendChild(l)});return!0===n.background?f:c(f)},setCompletionCallback:function(t){n=t}}}(window,f),v=function(t){var e,n=t.document,i=n.createDocumentFragment(),u={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function a(t){return t.attrs&&t.attrs.xmlns||u[t.tag]}function l(t,e,n,r,o,i,u){for(var a=n;a<r;a++){var l=e[a];null!=l&&c(t,l,o,u,i)}}function c(t,e,r,u,d){var p=e.tag;if("string"!=typeof p)return function(t,e,n,r,o){if(f(e,n),null!=e.instance){var u=c(t,e.instance,n,r,o);return e.dom=e.instance.dom,e.domSize=null!=e.dom?e.instance.domSize:0,y(t,u,o),u}return e.domSize=0,i}(t,e,r,u,d);switch(e.state={},null!=e.attrs&&T(e.attrs,e,r),p){case"#":return function(t,e,r){return e.dom=n.createTextNode(e.children),y(t,e.dom,r),e.dom}(t,e,d);case"<":return s(t,e,d);case"[":return function(t,e,r,o,i){var u=n.createDocumentFragment();if(null!=e.children){var a=e.children;l(u,a,0,a.length,r,null,o)}return e.dom=u.firstChild,e.domSize=u.childNodes.length,y(t,u,i),u}(t,e,r,u,d);default:return function(t,e,r,i,u){var c=e.tag,s=e.attrs,f=s&&s.is,d=(i=a(e)||i)?f?n.createElementNS(i,c,{is:f}):n.createElementNS(i,c):f?n.createElement(c,{is:f}):n.createElement(c);e.dom=d,null!=s&&function(t,e,n){for(var r in e)g(t,r,null,e[r],n)}(e,s,i);if(y(t,d,u),null!=e.attrs&&null!=e.attrs.contenteditable)O(e);else if(null!=e.text&&(""!==e.text?d.textContent=e.text:e.children=[o("#",void 0,void 0,e.text,void 0,void 0)]),null!=e.children){var p=e.children;l(d,p,0,p.length,r,null,i),function(t){var e=t.attrs;"select"===t.tag&&null!=e&&("value"in e&&g(t,"value",null,e.value,void 0),"selectedIndex"in e&&g(t,"selectedIndex",null,e.selectedIndex,void 0))}(e)}return d}(t,e,r,u,d)}}function s(t,e,r){var o={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(e.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div",i=n.createElement(o);i.innerHTML=e.children,e.dom=i.firstChild,e.domSize=i.childNodes.length;for(var u,a=n.createDocumentFragment();u=i.firstChild;)a.appendChild(u);return y(t,a,r),a}function f(t,e){var n;if("function"==typeof t.tag.view){if(t.state=Object.create(t.tag),null!=(n=t.state.view).$$reentrantLock$$)return i;n.$$reentrantLock$$=!0}else{if(t.state=void 0,null!=(n=t.tag).$$reentrantLock$$)return i;n.$$reentrantLock$$=!0,t.state=null!=t.tag.prototype&&"function"==typeof t.tag.prototype.view?new t.tag(t):t.tag(t)}if(t._state=t.state,null!=t.attrs&&T(t.attrs,t,e),T(t._state,t,e),t.instance=o.normalize(t._state.view.call(t.state,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument");n.$$reentrantLock$$=null}function d(t,e,n,r,o,i,u){if(e!==n&&(null!=e||null!=n))if(null==e)l(t,n,0,n.length,o,i,u);else if(null==n)m(e,0,e.length,n);else{if(e.length===n.length){for(var a=!1,s=0;s<n.length;s++)if(null!=n[s]&&null!=e[s]){a=null==n[s].key&&null==e[s].key;break}if(a){for(s=0;s<e.length;s++)e[s]!==n[s]&&(null==e[s]&&null!=n[s]?c(t,n[s],o,u,_(e,s+1,i)):null==n[s]?m(e,s,s+1,n):p(t,e[s],n[s],o,_(e,s+1,i),r,u));return}}if(r=r||function(t,e){if(null!=t.pool&&Math.abs(t.pool.length-e.length)<=Math.abs(t.length-e.length)){var n=t[0]&&t[0].children&&t[0].children.length||0,r=t.pool[0]&&t.pool[0].children&&t.pool[0].children.length||0,o=e[0]&&e[0].children&&e[0].children.length||0;if(Math.abs(r-o)<=Math.abs(n-o))return!0}return!1}(e,n)){var f=e.pool;e=e.concat(e.pool)}for(var d,O=0,E=0,b=e.length-1,g=n.length-1;b>=O&&g>=E;){if((R=e[O])!==(T=n[E])||r)if(null==R)O++;else if(null==T)E++;else if(R.key===T.key){var I=null!=f&&O>=e.length-f.length||null==f&&r;E++,p(t,R,T,o,_(e,++O,i),I,u),r&&R.tag===T.tag&&y(t,v(R),i)}else{if((R=e[b])!==T||r)if(null==R)b--;else if(null==T)E++;else{if(R.key!==T.key)break;I=null!=f&&b>=e.length-f.length||null==f&&r;p(t,R,T,o,_(e,b+1,i),I,u),(r||E<g)&&y(t,v(R),_(e,O,i)),b--,E++}else b--,E++}else O++,E++}for(;b>=O&&g>=E;){var R,T;if((R=e[b])!==(T=n[g])||r)if(null==R)b--;else if(null==T)g--;else if(R.key===T.key){I=null!=f&&b>=e.length-f.length||null==f&&r;p(t,R,T,o,_(e,b+1,i),I,u),r&&R.tag===T.tag&&y(t,v(R),i),null!=R.dom&&(i=R.dom),b--,g--}else{if(d||(d=h(e,b)),null!=T){var w=d[T.key];if(null!=w){var A=e[w];I=null!=f&&w>=e.length-f.length||null==f&&r;p(t,A,T,o,_(e,b+1,i),r,u),y(t,v(A),i),e[w].skip=!0,null!=A.dom&&(i=A.dom)}else{i=c(t,T,o,u,i)}}g--}else b--,g--;if(g<E)break}l(t,n,E,g+1,o,i,u),m(e,O,b+1,n)}}function p(t,e,n,r,i,u,l){var h=e.tag;if(h===n.tag){if(n.state=e.state,n._state=e._state,n.events=e.events,!u&&function(t,e){var n,r;null!=t.attrs&&"function"==typeof t.attrs.onbeforeupdate&&(n=t.attrs.onbeforeupdate.call(t.state,t,e));"string"!=typeof t.tag&&"function"==typeof t._state.onbeforeupdate&&(r=t._state.onbeforeupdate.call(t.state,t,e));if(!(void 0===n&&void 0===r||n||r))return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,!0;return!1}(n,e))return;if("string"==typeof h)switch(null!=n.attrs&&(u?(n.state={},T(n.attrs,n,r)):w(n.attrs,n,r)),h){case"#":!function(t,e){t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children);e.dom=t.dom}(e,n);break;case"<":!function(t,e,n,r){e.children!==n.children?(v(e),s(t,n,r)):(n.dom=e.dom,n.domSize=e.domSize)}(t,e,n,i);break;case"[":!function(t,e,n,r,o,i,u){d(t,e.children,n.children,r,o,i,u);var a=0,l=n.children;if(n.dom=null,null!=l){for(var c=0;c<l.length;c++){var s=l[c];null!=s&&null!=s.dom&&(null==n.dom&&(n.dom=s.dom),a+=s.domSize||1)}1!==a&&(n.domSize=a)}}(t,e,n,u,r,i,l);break;default:!function(t,e,n,r,i){var u=e.dom=t.dom;i=a(e)||i,"textarea"===e.tag&&(null==e.attrs&&(e.attrs={}),null!=e.text&&(e.attrs.value=e.text,e.text=void 0));(function(t,e,n,r){if(null!=n)for(var o in n)g(t,o,e&&e[o],n[o],r);if(null!=e)for(var o in e)null!=n&&o in n||("className"===o&&(o="class"),"o"!==o[0]||"n"!==o[1]||I(o)?"key"!==o&&t.dom.removeAttribute(o):R(t,o,void 0))})(e,t.attrs,e.attrs,i),null!=e.attrs&&null!=e.attrs.contenteditable?O(e):null!=t.text&&null!=e.text&&""!==e.text?t.text.toString()!==e.text.toString()&&(t.dom.firstChild.nodeValue=e.text):(null!=t.text&&(t.children=[o("#",void 0,void 0,t.text,void 0,t.dom.firstChild)]),null!=e.text&&(e.children=[o("#",void 0,void 0,e.text,void 0,void 0)]),d(u,t.children,e.children,n,r,null,i))}(e,n,u,r,l)}else!function(t,e,n,r,i,u,a){if(u)f(n,r);else{if(n.instance=o.normalize(n._state.view.call(n.state,n)),n.instance===n)throw Error("A view cannot return the vnode it received as argument");null!=n.attrs&&w(n.attrs,n,r),w(n._state,n,r)}null!=n.instance?(null==e.instance?c(t,n.instance,r,a,i):p(t,e.instance,n.instance,r,i,u,a),n.dom=n.instance.dom,n.domSize=n.instance.domSize):null!=e.instance?(E(e.instance,null),n.dom=void 0,n.domSize=0):(n.dom=e.dom,n.domSize=e.domSize)}(t,e,n,r,i,u,l)}else E(e,null),c(t,n,r,l,i)}function h(t,e){var n={},r=0;for(r=0;r<e;r++){var o=t[r];if(null!=o){var i=o.key;null!=i&&(n[i]=r)}}return n}function v(t){var e=t.domSize;if(null!=e||null==t.dom){var r=n.createDocumentFragment();if(e>0){for(var o=t.dom;--e;)r.appendChild(o.nextSibling);r.insertBefore(o,r.firstChild)}return r}return t.dom}function _(t,e,n){for(;e<t.length;e++)if(null!=t[e]&&null!=t[e].dom)return t[e].dom;return n}function y(t,e,n){n&&n.parentNode?t.insertBefore(e,n):t.appendChild(e)}function O(t){var e=t.children;if(null!=e&&1===e.length&&"<"===e[0].tag){var n=e[0].children;t.dom.innerHTML!==n&&(t.dom.innerHTML=n)}else if(null!=t.text||null!=e&&0!==e.length)throw new Error("Child node of a contenteditable must be trusted")}function m(t,e,n,r){for(var o=e;o<n;o++){var i=t[o];null!=i&&(i.skip?i.skip=!1:E(i,r))}}function E(t,e){var n,r=1,o=0;t.attrs&&"function"==typeof t.attrs.onbeforeremove&&(null!=(n=t.attrs.onbeforeremove.call(t.state,t))&&"function"==typeof n.then&&(r++,n.then(i,i)));"string"!=typeof t.tag&&"function"==typeof t._state.onbeforeremove&&(null!=(n=t._state.onbeforeremove.call(t.state,t))&&"function"==typeof n.then&&(r++,n.then(i,i)));function i(){if(++o===r&&(function t(e){e.attrs&&"function"==typeof e.attrs.onremove&&e.attrs.onremove.call(e.state,e);if("string"!=typeof e.tag)"function"==typeof e._state.onremove&&e._state.onremove.call(e.state,e),null!=e.instance&&t(e.instance);else{var n=e.children;if(Array.isArray(n))for(var r=0;r<n.length;r++){var o=n[r];null!=o&&t(o)}}}(t),t.dom)){var n=t.domSize||1;if(n>1)for(var i=t.dom;--n;)b(i.nextSibling);b(t.dom),null==e||null!=t.domSize||function(t){return null!=t&&(t.oncreate||t.onupdate||t.onbeforeremove||t.onremove)}(t.attrs)||"string"!=typeof t.tag||(e.pool?e.pool.push(t):e.pool=[t])}}i()}function b(t){var e=t.parentNode;null!=e&&e.removeChild(t)}function g(t,e,o,i,u){var a=t.dom;if("key"!==e&&"is"!==e&&(o!==i||function(t,e){return"value"===e||"checked"===e||"selectedIndex"===e||"selected"===e&&t.dom===n.activeElement}(t,e)||"object"===(void 0===i?"undefined":r(i)))&&void 0!==i&&!I(e)){var l=e.indexOf(":");if(l>-1&&"xlink"===e.substr(0,l))a.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(l+1),i);else if("o"===e[0]&&"n"===e[1]&&"function"==typeof i)R(t,e,i);else if("style"===e)!function(t,e,n){e===n&&(t.style.cssText="",e=null);if(null==n)t.style.cssText="";else if("string"==typeof n)t.style.cssText=n;else{for(var r in"string"==typeof e&&(t.style.cssText=""),n)t.style[r]=n[r];if(null!=e&&"string"!=typeof e)for(var r in e)r in n||(t.style[r]="")}}(a,o,i);else if(e in a&&!function(t){return"href"===t||"list"===t||"form"===t||"width"===t||"height"===t}(e)&&void 0===u&&!function(t){return t.attrs.is||t.tag.indexOf("-")>-1}(t)){if("value"===e){var c=""+i;if(("input"===t.tag||"textarea"===t.tag)&&t.dom.value===c&&t.dom===n.activeElement)return;if("select"===t.tag)if(null===i){if(-1===t.dom.selectedIndex&&t.dom===n.activeElement)return}else if(null!==o&&t.dom.value===c&&t.dom===n.activeElement)return;if("option"===t.tag&&null!=o&&t.dom.value===c)return}if("input"===t.tag&&"type"===e)return void a.setAttribute(e,i);a[e]=i}else"boolean"==typeof i?i?a.setAttribute(e,""):a.removeAttribute(e):a.setAttribute("className"===e?"class":e,i)}}function I(t){return"oninit"===t||"oncreate"===t||"onupdate"===t||"onremove"===t||"onbeforeremove"===t||"onbeforeupdate"===t}function R(t,n,r){var o=t.dom,i="function"!=typeof e?r:function(t){var n=r.call(o,t);return e.call(o,t),n};if(n in o)o[n]="function"==typeof r?i:null;else{var u=n.slice(2);if(void 0===t.events&&(t.events={}),t.events[n]===i)return;null!=t.events[n]&&o.removeEventListener(u,t.events[n],!1),"function"==typeof r&&(t.events[n]=i,o.addEventListener(u,t.events[n],!1))}}function T(t,e,n){"function"==typeof t.oninit&&t.oninit.call(e.state,e),"function"==typeof t.oncreate&&n.push(t.oncreate.bind(e.state,e))}function w(t,e,n){"function"==typeof t.onupdate&&n.push(t.onupdate.bind(e.state,e))}return{render:function(t,e){if(!t)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var r=[],i=n.activeElement,u=t.namespaceURI;null==t.vnodes&&(t.textContent=""),Array.isArray(e)||(e=[e]),d(t,t.vnodes,o.normalizeChildren(e),!1,r,null,"http://www.w3.org/1999/xhtml"===u?void 0:u),t.vnodes=e,null!=i&&n.activeElement!==i&&i.focus();for(var a=0;a<r.length;a++)r[a]()},setEventCallback:function(t){return e=t}}};var _=function(t){var e=v(t);e.setEventCallback(function(t){!1===t.redraw?t.redraw=void 0:o()});var n=[];function r(t){var e=n.indexOf(t);e>-1&&n.splice(e,2)}function o(){for(var t=1;t<n.length;t+=2)n[t]()}return{subscribe:function(t,e){r(t),n.push(t,function(t){var e=0,n=null,r="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var o=Date.now();0===e||o-e>=16?(e=o,t()):null===n&&(n=r(function(){n=null,t(),e=Date.now()},16-(o-e)))}}(e))},unsubscribe:r,redraw:o,render:e.render}}(window);h.setCompletionCallback(_.redraw);s.mount=function(t){return function(e,n){if(null===n)return t.render(e,[]),void t.unsubscribe(e);if(null==n.view&&"function"!=typeof n)throw new Error("m.mount(element, component) expects a component, not a vnode");t.subscribe(e,function(){t.render(e,o(n))}),t.redraw()}}(_);var y=f,O=function(t){if(""===t||null==t)return{};"?"===t.charAt(0)&&(t=t.slice(1));for(var e=t.split("&"),n={},r={},o=0;o<e.length;o++){var i=e[o].split("="),u=decodeURIComponent(i[0]),a=2===i.length?decodeURIComponent(i[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var l=u.split(/\]\[?|\[/),c=n;u.indexOf("[")>-1&&l.pop();for(var s=0;s<l.length;s++){var f=l[s],d=l[s+1],p=""==d||!isNaN(parseInt(d,10)),h=s===l.length-1;if(""===f)null==r[u=l.slice(0,s).join()]&&(r[u]=0),f=r[u]++;null==c[f]&&(c[f]=h?a:p?[]:{}),c=c[f]}}return n},m=function(t){var n,r="function"==typeof t.history.pushState,o="function"==typeof e?e:setTimeout;function i(e){var n=t.location[e].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===e&&"/"!==n[0]&&(n="/"+n),n}function u(t,e,n){var r=t.indexOf("?"),o=t.indexOf("#"),i=r>-1?r:o>-1?o:t.length;if(r>-1){var u=o>-1?o:t.length,a=O(t.slice(r+1,u));for(var l in a)e[l]=a[l]}if(o>-1){var c=O(t.slice(o+1));for(var l in c)n[l]=c[l]}return t.slice(0,i)}var a={prefix:"#!",getPath:function(){switch(a.prefix.charAt(0)){case"#":return i("hash").slice(a.prefix.length);case"?":return i("search").slice(a.prefix.length)+i("hash");default:return i("pathname").slice(a.prefix.length)+i("search")+i("hash")}},setPath:function(e,n,o){var i={},l={};if(e=u(e,i,l),null!=n){for(var c in n)i[c]=n[c];e=e.replace(/:([^\/]+)/g,function(t,e){return delete i[e],n[e]})}var s=d(i);s&&(e+="?"+s);var f=d(l);if(f&&(e+="#"+f),r){var p=o?o.state:null,h=o?o.title:null;t.onpopstate(),o&&o.replace?t.history.replaceState(p,h,a.prefix+e):t.history.pushState(p,h,a.prefix+e)}else t.location.href=a.prefix+e}};return a.defineRoutes=function(e,i,l){function c(){var n=a.getPath(),r={},o=u(n,r,r),c=t.history.state;if(null!=c)for(var s in c)r[s]=c[s];for(var f in e){var d=new RegExp("^"+f.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(o))return void o.replace(d,function(){for(var t=f.match(/:[^\/]+/g)||[],o=[].slice.call(arguments,1,-2),u=0;u<t.length;u++)r[t[u].replace(/:|\./g,"")]=decodeURIComponent(o[u]);i(e[f],r,n,f)})}l(n,r)}r?t.onpopstate=function(t){return function(){null==n&&(n=o(function(){n=null,t()}))}}(c):"#"===a.prefix.charAt(0)&&(t.onhashchange=c),c()},a};s.route=function(t,e){var n,r,i,u,a,l=m(t),c=function(t,c,s){if(null==t)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var f=function(){null!=n&&e.render(t,n(o(r,i.key,i)))},d=function(t){if(t===c)throw new Error("Could not resolve default route "+c);l.setPath(c,null,{replace:!0})};l.defineRoutes(s,function(t,e,o){var l=a=function(t,c){l===a&&(r=null==c||"function"!=typeof c.view&&"function"!=typeof c?"div":c,i=e,u=o,a=null,n=(t.render||function(t){return t}).bind(t),f())};t.view||"function"==typeof t?l({},t):t.onmatch?y.resolve(t.onmatch(e,o)).then(function(e){l(t,e)},d):l(t,"div")},d),e.subscribe(t,f)};return c.set=function(t,e,n){null!=a&&((n=n||{}).replace=!0),a=null,l.setPath(t,e,n)},c.get=function(){return u},c.prefix=function(t){l.prefix=t},c.link=function(t){t.dom.setAttribute("href",l.prefix+t.attrs.href),t.dom.onclick=function(t){if(!(t.ctrlKey||t.metaKey||t.shiftKey||2===t.which)){t.preventDefault(),t.redraw=!1;var e=this.getAttribute("href");0===e.indexOf(l.prefix)&&(e=e.slice(l.prefix.length)),c.set(e,void 0,void 0)}}},c.param=function(t){return void 0!==i&&void 0!==t?i[t]:i},c}(window,_),s.withAttr=function(t,e,n){return function(r){e.call(n||this,t in r.currentTarget?r.currentTarget[t]:r.currentTarget.getAttribute(t))}};var E=v(window);s.render=E.render,s.redraw=_.redraw,s.request=h.request,s.jsonp=h.jsonp,s.parseQueryString=O,s.buildQueryString=d,s.version="1.1.6",s.vnode=o,t.exports=s}()}).call(this,n(19).setImmediate,n(2))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.INFOBOX_ARROW=".___tour-guide-infobox-arrow",e.INFOBOX_BUTTON_PRIMARY=".___tour-guide-infobox-button-primary",e.INFOBOX_BUTTON_SECONDARY=".___tour-guide-infobox-button-secondary",e.INFOBOX_ACTION_BUTTON=".___tour-guide-infobox-button-action",e.INFOBOX_CARD=".___tour-guide-infobox-card",e.INFOBOX_DESCRIPTION=".___tour-guide-infobox-description",e.INFOBOX_DESCRIPTION_WRAPPER=".___tour-guide-infobox-description-wrapper",e.INFOBOX_FOOTER=".___tour-guide-infobox-footer",e.INFOBOX_WRAPPER=".___tour-guide-infobox-wrapper",e.INFOBOX_MAIN=".___tour-guide-infobox-main",e.INFOBOX_IMAGE_WRAPPER=".___tour-guide-infobox-image-wrapper",e.INFOBOX_IMAGE=".___tour-guide-infobox-image",e.INFOBOX_COUNTER=".___tour-guide-infobox-counter",e.BLUE_THEME_WRAPPER=".___tour-guide-blue-theme",e.SHIM=".___tour-guide-shim",e.SHIM_HOLE=".___tour-guide-shim-hole",e.SHIM_HOLE_BORDER_TL=".___tour-guide-shim-hole-border-tl",e.SHIM_HOLE_BORDER_TR=".___tour-guide-shim-hole-border-tr",e.SHIM_HOLE_BORDER_BL=".___tour-guide-shim-hole-border-bl",e.SHIM_HOLE_BORDER_BR=".___tour-guide-shim-hole-border-br",e.TINKERBELL=".___tour-guide-tinkerbell",e.TINKERBELL_CIRCLE=".___tour-guide-tinkerbell-circle",e.TINKERBELL_CIRCLE_ANIMATED=".___tour-guide-tinkerbell-circle-animated"},function(t,e,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.INFOBOX_WIDTH=320;var r=e.INFOBOX_ARROW_SIZE=10,o=(e.INFOBOX_ARROW_SIZE_DOUBLE=2*r,e.INFOBOX_ANIMATION_SPEED="150ms",e.INFOBOX_BORDER_RADIUS=5);e.INFOBOX_BORDER_RADIUS_DOUBLE=2*o,e.INFOBOX_MARGIN=16,e.INFOBOX_PLACEMENT_GAP=8,e.SHIM_MARGIN=8,e.TINKERBELL_SIZE=20,e.BLUE="#2173E8",e.TEXT="#4B4B4B",e.TEXT_BLUE="#EDEFF3",e.ORANGE="#E68619"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.WHITE_THEME="white",e.BLUE_THEME="blue"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){var e=window.innerWidth,n=window.innerHeight;return t.left<0||t.left+t.width>e||t.top<0||t.top+t.height>n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){if(!t)return!1;var e=t.getBoundingClientRect();return e.width*e.height>0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getCurrentTheme=e.getCurrentCoachMark=e.getCurrentCoachMarks=e.getCurrentTour=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(8);function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var u=function(t,e,n){var o=t.currentTourIndex,i=t.currentCoachMarkIndex,u=t.tours.map(function(t,e){return e===o?r({},t,{coachMarks:t.coachMarks.map(function(t,e){return e===i?r({},t,{isComplete:!0}):t})}):t});return r({},t,{currentCoachMarkIndex:n,currentTourIndex:e,tours:u})},a=e.getCurrentTour=function(t){return t.tours[t.currentTourIndex]},l=e.getCurrentCoachMarks=function(t){var e=a(t);return e?e.coachMarks:[]};e.getCurrentCoachMark=function(t){return l(t)[t.currentCoachMarkIndex]},e.getCurrentTheme=function(t){return a(t).theme};e.default=function(t,e){switch(e.type){case o.NEXT_COACHMARK:var n=t.tours[t.currentTourIndex],a=(t.currentCoachMarkIndex+1)%n.coachMarks.length;return u(t,t.currentTourIndex,a);case o.PREV_COACHMARK:var l=t.tours[t.currentTourIndex].coachMarks.length,c=(t.currentCoachMarkIndex-1)%l;return c=c<0?c+l:c,u(t,t.currentTourIndex,c);case o.SET_CURRENT_COACHMARK:return u(t,t.currentTourIndex,e.payload);case o.MODIFY_COACHMARK_ATTRIBUTES:var s=e.payload.coachMarkId||t.currentCoachMarkIndex,f=e.payload.tourId||t.currentTourIndex,d=r({},t.tours[f].coachMarks[s],e.payload.attributes),p=r({},t.tours[f],{coachMarks:t.tours[f].coachMarks.map(function(t,e){return e===s?d:t})});return r({},t,{tours:t.tours.map(function(t,e){return e===f?p:t})});case o.MODIFY_TOUR_ATTRIBUTES:var h=e.payload.tourId||t.currentTourIndex,v=r({},t.tours[h],e.payload.attributes),_=t.tours.map(function(t,e){return e===h?v:t});return r({},t,{tours:_});case o.REMOVE_COACHMARK_ATTRIBUTE:var y=e.payload.coachMarkId||t.currentCoachMarkIndex,O=e.payload.tourId||t.currentTourIndex,m=t.tours[O].coachMarks[y],E=(m[e.payload.attribute],function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(m,[e.payload.attribute])),b=r({},t.tours[O],{coachMarks:t.tours[O].coachMarks.map(function(t,e){return e===y?E:t})});return r({},t,{tours:t.tours.map(function(t,e){return e===O?b:t})});case o.NEXT_TOUR:var g=(t.currentTourIndex+1)%t.tours.length;return u(t,g,0);case o.PREV_TOUR:var I=t.tours.length,R=(t.currentTourIndex-1)%I;return u(t,R=R<0?R+I:R,0);case o.REMOVE_COACHMARK:var T=t.currentCoachMarkIndex,w=e.tourId?e.tourId:t.currentTourIndex,A=e.coachMarkId?e.coachMarkId:t.currentCoachMarkIndex,S=t.tours[w],M=S.coachMarks.filter(function(t,e){return e!==A}),x=r({},S,{coachMarks:M}),B=T>M.length-1?M.length-1:T;return r({},t,{currentCoachMarkIndex:B,tours:t.tours.map(function(t,e){return e===w?x:t})});case o.REMOVE_TOUR:var N=t.currentTourIndex,C=e.payload.tourId||N,k=t.tours.filter(function(t,e){return e!==C}),P=0===k.length?0:k.length-1;return r({},t,{currentTourIndex:N>P?P:N,tours:k});case o.SET_CURRENT_TOUR:return u(t,e.payload,0);case o.SHOW_TOUR_GUIDE:return r({},t,{infoBoxIsVisible:!0});case o.HIDE_TOUR_GUIDE:case o.TOUR_FINISHED:return r({},t,{infoBoxIsVisible:!1});case o.ADD_COACHMARK:var F=e.payload.tourId||t.currentTourIndex,j=t.tours[F].coachMarks,X=r({},t.tours[F],{coachMarks:[].concat(i(j),[r({},{id:null,title:null,description:null,anchorPosition:"bottom",align:"center"},e.payload.attributes)])});return r({},t,{tours:t.tours.map(function(t,e){return e===F?X:t})});case o.ADD_TOUR:var L=[].concat(i(t.tours),[e.payload.attributes]);return r({},t,{tours:L});case o.SET_STATE:return r({},t,e.payload);case o.COACH_MARK_POSITION_IS_ADJUSTED:return r({},t,{coachMarkPostionIsAdjusted:e.payload});default:return t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.PREV_COACHMARK="PREV_COACHMARK",e.NEXT_COACHMARK="NEXT_COACHMARK",e.SET_CURRENT_COACHMARK="SET_CURRENT_COACHMARK",e.PREV_TOUR="PREV_TOUR",e.NEXT_TOUR="NEXT_TOUR",e.SET_CURRENT_TOUR="SET_CURRENT_TOUR",e.SHOW_TOUR_GUIDE="SHOW_TOUR_GUIDE",e.HIDE_TOUR_GUIDE="HIDE_TOUR_GUIDE",e.TOUR_FINISHED="TOUR_FINISHED",e.MODIFY_COACHMARK_ATTRIBUTES="MODIFY_COACHMARK_ATTRIBUTES",e.MODIFY_TOUR_ATTRIBUTES="MODIFY_TOUR_ATTRIBUTES",e.REMOVE_COACHMARK_ATTRIBUTE="REMOVE_COACHMARK_ATTRIBUTE",e.ADD_COACHMARK="ADD_COACHMARK",e.ADD_TOUR="ADD_TOUR",e.REMOVE_COACHMARK="REMOVE_COACHMARK",e.REMOVE_TOUR="REMOVE_TOUR",e.SET_STATE="SET_STATE",e.TARGET_SELECTOR_IS_VALID="TARGET_SELECTOR_IS_VALID",e.PROGRESS_SELECTOR_IS_VALID="PROGRESS_SELECTOR_IS_VALID",e.COACH_MARK_POSITION_IS_ADJUSTED="COACH_MARK_POSITION_IS_ADJUSTED"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ActionTypes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function t(e,n,u){var l;"function"==typeof n&&void 0===u&&(u=n,n=void 0);if(void 0!==u){if("function"!=typeof u)throw new Error("Expected the enhancer to be a function.");return u(t)(e,n)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e;var s=n;var f=[];var d=f;var p=!1;function h(){d===f&&(d=f.slice())}function v(){return s}function _(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return h(),d.push(t),function(){if(e){e=!1,h();var n=d.indexOf(t);d.splice(n,1)}}}function y(t){if(!(0,o.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=c(s,t)}finally{p=!1}for(var e=f=d,n=0;n<e.length;n++){var r=e[n];r()}return t}y({type:a.INIT});return l={dispatch:y,subscribe:_,getState:v,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");c=t,y({type:a.INIT})}},l[i.default]=function(){var t,e=_;return(t={subscribe:function(t){if("object"!==(void 0===t?"undefined":r(t)))throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(v())}n();var o=e(n);return{unsubscribe:o}}})[i.default]=function(){return this},t},l};var o=u(n(10)),i=u(n(46));function u(t){return t&&t.__esModule?t:{default:t}}var a=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(38)),o=u(n(43)),i=u(n(45));function u(t){return t&&t.__esModule?t:{default:t}}var a="[object Object]",l=Function.prototype,c=Object.prototype,s=l.toString,f=c.hasOwnProperty,d=s.call(Object);e.default=function(t){if(!(0,i.default)(t)||(0,r.default)(t)!=a)return!1;var e=(0,o.default)(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==d}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(39)).default.Symbol;e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(t){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];return e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=u(n(15)),i=u(n(16));function u(t){return t&&t.__esModule?t:{default:t}}var a=function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.default;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o.default.polyfill();var a=r({},i.default,u),l=a.getRenderer,c=a.getStore;this.store=c(n),this.renderer=l(this.store),Object.keys(this.store.actions).forEach(function(t){e[t]=e.store.actions[t]}),this.addCallback=this.store.addCallback,this.removeCallback=this.store.removeCallback,this.removeAllCallbacks=this.store.removeAllCallbacks};window&&(window.TourGuide=a),e.default=a},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function n(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var n=t.HTMLElement||t.Element,o=468,i={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},u=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=function(t){return new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)}(t.navigator.userAgent)?1:0;t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):i.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==r(arguments[0])?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?i.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!==r(arguments[0])?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==r(arguments[0])?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=function(t){var n;do{n=(t=t.parentNode)===e.body}while(!1===n&&!1===d(t));return n=null,t}(this),r=n.getBoundingClientRect(),o=this.getBoundingClientRect();n!==e.body?(h.call(this,n,n.scrollLeft+o.left-r.left,n.scrollTop+o.top-r.top),"fixed"!==t.getComputedStyle(n).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!==(void 0===t?"undefined":r(t))||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"===(void 0===t?"undefined":r(t))&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function f(e,n){var r=t.getComputedStyle(e,null)["overflow"+n];return"auto"===r||"scroll"===r}function d(t){var e=s(t,"Y")&&f(t,"Y"),n=s(t,"X")&&f(t,"X");return e||n}function p(e){var n,r,i,a=(u()-e.startTime)/o;n=function(t){return.5*(1-Math.cos(Math.PI*t))}(a=a>1?1:a),r=e.startX+(e.x-e.startX)*n,i=e.startY+(e.y-e.startY)*n,e.method.call(e.scrollable,r,i),r===e.x&&i===e.y||t.requestAnimationFrame(p.bind(t,e))}function h(n,r,o){var a,c,s,f,d=u();n===e.body?(a=t,c=t.scrollX||t.pageXOffset,s=t.scrollY||t.pageYOffset,f=i.scroll):(a=n,c=n.scrollLeft,s=n.scrollTop,f=l),p({scrollable:a,method:f,startTime:d,startX:c,startY:s,x:r,y:o})}}"object"===r(e)&&void 0!==t?t.exports={polyfill:n}:n()}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(17)),o=i(n(36));function i(t){return t&&t.__esModule?t:{default:t}}e.default={getRenderer:r.default,getStore:o.default}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(18));var o=null;e.default=function(t){return o=o||new r.default(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=f(n(0)),i=f(n(5)),u=f(n(22)),a=f(n(29)),l=f(n(30)),c=n(7),s=f(n(35));function f(t){return t&&t.__esModule?t:{default:t}}var d=function(){function t(e){var n=e.subscribe,r=e.getState,o=e.dispatch,i=e.actions;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.render=this.render.bind(this),this.getState=r,this.dispatch=o,this.actions=i,this.state=r(),this.hasMounted=!1,this.targetElement=null,this.isScrolling=!1,this.willRender=null,this.createTourGuideElements(),this.createDomEventListeners(),n(this.render),this.render()}return r(t,[{key:"createTourGuideElements",value:function(){this.tourGuideElement=document.createElement("div"),this.tourGuideStyles=document.createElement("style"),this.tourGuideStaticStyles=document.createElement("style"),this.tourGuideElement.className="___tourguide",this.tourGuideStyles.id="___tourguide-dynamic-styles",this.tourGuideStaticStyles.id="___tourguide-static-styles",document.body.insertAdjacentElement("beforeend",this.tourGuideElement),document.head.insertAdjacentElement("beforeend",this.tourGuideStaticStyles),document.head.insertAdjacentElement("beforeend",this.tourGuideStyles),o.default.render(this.tourGuideStaticStyles,(0,o.default)(a.default))}},{key:"createDomEventListeners",value:function(){var t=this;window.addEventListener("scroll",function(){return t.render(!1)},!0),window.addEventListener("resize",function(){return t.render()},!0);var e=document;new MutationObserver(function(){t.willRender&&clearTimeout(t.willRender),t.willRender=setTimeout(function(){t.render(),t.willRender=null},10)}).observe(e,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["style","class","id"]})}},{key:"render",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.actions.nextCoachMark;if(e){this.tourGuideElement&&this.tourGuideElement.removeEventListener("transitionend",this.render);var n=(0,c.getCurrentCoachMark)(this.state);if(n){var r=n.progressOnDomEvent;if(r){var a=(0,s.default)(r.targetSelector);a&&a.removeEventListener(r.event,e)}}var f=this.getState(),d=!this.hasMounted||f.currentCoachMarkIndex!==this.state.currentCoachMarkIndex;this.state=f;var p=this.state,h=p.currentTourIndex,v=p.currentCoachMarkIndex,_=p.moreIsVisible,y=p.infoBoxIsVisible,O=p.coachMarkPostionIsAdjusted,m=(0,c.getCurrentCoachMarks)(this.state);if(m&&0!==m.length){var E=(0,c.getCurrentCoachMark)(this.state),b=(0,c.getCurrentTheme)(this.state);if(E)if(this.targetElement=(0,s.default)(E.targetSelector),this.targetElement){var g=E.progressOnDomEvent;if(g){var I=(0,s.default)(g.targetSelector);I&&I.addEventListener(g.event,e)}var R=this.targetElement.getBoundingClientRect(),T={actions:this.actions,coachMark:E,coachMarkCount:m.length,coachMarkPostionIsAdjusted:O,coachMarks:m,currentCoachMarkIndex:v,infoBoxIsVisible:y,moreIsVisible:_,targetElement:this.targetElement,targetBounds:R,willAnimate:t,theme:b},w=(0,i.default)(R);w&&y&&!this.isScrolling&&(this.targetElement.scrollIntoView({behavior:"smooth"}),this.isScrolling=!0),this.isScrolling&&!w&&(this.isScrolling=!1),y&&this.targetElement&&d&&(this.tourGuideElement.dispatchEvent(new CustomEvent("CoachMarkDisplayed",{detail:{coachMarkIndex:T.currentCoachMarkIndex,tourIndex:h}})),this.hasMounted=!0),this.targetElement.addEventListener("transitionend",this.render),o.default.render(this.tourGuideElement,(0,o.default)(u.default,T)),o.default.render(this.tourGuideStyles,(0,o.default)(l.default,T))}else o.default.render(this.tourGuideElement,null);else o.default.render(this.tourGuideElement,null)}else o.default.render(this.tourGuideElement,null)}else o.default.render(this.tourGuideElement,null)}}]),t}();e.default=d},function(t,e,n){"use strict";(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(20),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||void 0,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||void 0}).call(this,n(2))},function(t,e,n){"use strict";(function(t,e){!function(t,n){if(!t.setImmediate){var r,o=1,i={},u=!1,a=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t);l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){s(t)})}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&s(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),r=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){s(t.data)},r=function(e){t.port2.postMessage(e)}}():a&&"onreadystatechange"in a.createElement("script")?function(){var t=a.documentElement;r=function(e){var n=a.createElement("script");n.onreadystatechange=function(){s(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():r=function(t){setTimeout(s,0,t)},l.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var u={callback:t,args:e};return i[o]=u,r(o),o++},l.clearImmediate=c}function c(t){delete i[t]}function s(t){if(u)setTimeout(s,0,t);else{var e=i[t];if(e){u=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{c(t),u=!1}}}}}("undefined"==typeof self?void 0===t?void 0:t:self)}).call(this,n(2),n(21))},function(t,e,n){"use strict";var r,o,i=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(t){if(r===setTimeout)return setTimeout(t,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(t){r=u}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var c,s=[],f=!1,d=-1;function p(){f&&c&&(f=!1,c.length?s=c.concat(s):d=-1,s.length&&h())}function h(){if(!f){var t=l(p);f=!0;for(var e=s.length;e;){for(c=s,s=[];++d<e;)c&&c[d].run();d=-1,e=s.length}c=null,f=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function v(t,e){this.fun=t,this.array=e}function _(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new v(t,e)),1!==s.length||f||l(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=_,i.addListener=_,i.once=_,i.off=_,i.removeListener=_,i.removeAllListeners=_,i.emit=_,i.prependListener=_,i.prependOnceListener=_,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(0)),o=a(n(23)),i=a(n(24)),u=a(n(28));function a(t){return t&&t.__esModule?t:{default:t}}var l={view:function(t){return(0,r.default)("div",[(0,r.default)(u.default,t.attrs),(0,r.default)(o.default,t.attrs),(0,r.default)(i.default,t.attrs)])}};e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(0)),o=n(1);var i={view:function(t){return t.attrs.coachMark.dimBackground?[(0,r.default)(o.SHIM),(0,r.default)(o.SHIM_HOLE,(0,r.default)("svg"+o.SHIM_HOLE_BORDER_TL,{width:5,height:5,viewBox:"0 0 5 5"},(0,r.default)("path",{d:"M5,0A5,5,0,0,0,0,5V0Z"})),(0,r.default)("svg"+o.SHIM_HOLE_BORDER_TR,{width:5,height:5,viewBox:"0 0 5 5"},(0,r.default)("path",{d:"M5,5A5,5,0,0,0,0,0H5Z"})),(0,r.default)("svg"+o.SHIM_HOLE_BORDER_BL,{width:5,height:5,viewBox:"0 0 5 5"},(0,r.default)("path",{d:"M5,5A5,5,0,0,1,0,0V5Z"})),(0,r.default)("svg"+o.SHIM_HOLE_BORDER_BR,{width:5,height:5,viewBox:"0 0 5 5"},(0,r.default)("path",{d:"M0,5A5,5,0,0,0,5,0V5Z"})),(0,r.default)("div"))]:null}};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(n(0)),o=n(1),i=s(n(25)),u=s(n(26)),a=s(n(6)),l=n(27),c=n(4);function s(t){return t&&t.__esModule?t:{default:t}}var f={view:function(t){var e=t.attrs,n=e.coachMark,s=e.coachMarkCount,f=e.currentCoachMarkIndex,d=e.infoBoxIsVisible,p=e.targetElement,h=e.actions,v=e.theme,_=n.description,y=n.media,O=n.navButtons,m=h.hideTourGuide,E=(0,a.default)(p),b=v===c.BLUE_THEME?o.INFOBOX_WRAPPER+" "+o.BLUE_THEME_WRAPPER:o.INFOBOX_WRAPPER;return d&&E?(0,r.default)(b,[(0,r.default)(o.INFOBOX_CARD,[y&&!y.error&&""!==y.src&&(0,r.default)(o.INFOBOX_IMAGE_WRAPPER,(0,r.default)("img"+o.INFOBOX_IMAGE,{src:y.src})),(0,r.default)(o.INFOBOX_MAIN,[(0,r.default)(o.INFOBOX_DESCRIPTION_WRAPPER,(0,r.default)(o.INFOBOX_DESCRIPTION,r.default.trust(_)),(0,r.default)(i.default,{data:l.CLOSE_BUTTON,onclick:m})),(0,r.default)(o.INFOBOX_FOOTER,[(0,r.default)(u.default,{navButtons:O,actions:h,currentCoachMarkIndex:f,coachMarkCount:s})])])]),(0,r.default)(o.INFOBOX_ARROW)]):null}};e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(0)),o=n(1);var i={view:function(t){var e=t.attrs,n=e.data,i=e.onclick;return(0,r.default)("button."+o.INFOBOX_ACTION_BUTTON,(0,r.default)("svg",{width:12,height:12,viewBox:"0 0 12 12",onclick:i},(0,r.default)("path",{d:n})))}};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(0)),o=n(1);var i={view:function(t){var e=t.attrs,n=e.actions,i=e.coachMarkCount,u=e.currentCoachMarkIndex,a=e.navButtons,l=n.nextCoachMark,c=n.prevCoachMark,s=n.tourFinished,f=0===u,d=u+1===i,p=1===i,h=p||0===a.length,v=[];return p||v.push((0,r.default)(o.INFOBOX_COUNTER,u+1+" of "+i)),h||(f||v.push((0,r.default)("button."+o.INFOBOX_BUTTON_SECONDARY,{onclick:c},"Back")),d||v.push((0,r.default)("button."+o.INFOBOX_BUTTON_PRIMARY,{onclick:l},"Next"))),d&&v.push((0,r.default)("button."+o.INFOBOX_BUTTON_PRIMARY,{onclick:s},p?"Ok":"Done")),v}};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.PREV_BUTTON="M.49724,7.99981A1.23445,1.23445,0,0,1,.88255,7.106L7.8745.357A1.24705,1.24705,0,1,1,9.62794,2.13066L3.545,8.00244,9.6081,13.84956A1.24409,1.24409,0,0,1,8.74736,16a1.20458,1.20458,0,0,1-.85765-.343L.87975,8.9019A1.25021,1.25021,0,0,1,.49724,7.99981Z",e.NEXT_BUTTON="M11.5,8a1.23487,1.23487,0,0,0-.38531-.894L4.12273.357A1.247,1.247,0,0,0,2.3693,2.13066l6.083,5.87178L2.38913,13.84956A1.2459,1.2459,0,0,0,3.24988,16a1.20461,1.20461,0,0,0,.85765-.343l7.01-6.75513A1.24978,1.24978,0,0,0,11.5,8Z",e.CLOSE_BUTTON="M12,11.25684a.748.748,0,0,0-.23728-.54512l-4.707-4.707,4.707-4.707a.74892.74892,0,1,0-1.056-1.061l-4.707,4.707-4.707-4.707a.74712.74712,0,1,0-1.056,1.056l4.707,4.707-4.707,4.707a.74715.74715,0,1,0,1.056,1.056l4.707-4.707,4.707,4.707A.74715.74715,0,0,0,12,11.25684Z"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(0)),o=n(1),i=u(n(6));function u(t){return t&&t.__esModule?t:{default:t}}var a={view:function(t){var e=t.attrs,n=e.coachMark,u=e.infoBoxIsVisible,a=e.targetElement,l=n.progressOnDomEvent,c=(0,i.default)(a);return u&&c&&l?(0,r.default)(o.TINKERBELL,(0,r.default)(o.TINKERBELL_CIRCLE),(0,r.default)(o.TINKERBELL_CIRCLE+" "+o.TINKERBELL_CIRCLE_ANIMATED)):null}};e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=n(1),i={view:function(){return"\n    "+o.INFOBOX_CARD+" {\n      font-family: Adobe Clean, Arial, Helvetica;\n      font-size: 16px;\n      display: flex;\n      flex-direction: column;\n      color: "+r.TEXT+";\n      width: "+r.INFOBOX_WIDTH+"px ;\n      overflow: visible;\n      transform: none;\n      text-transform: none;\n      text-align: none;\n      text-decoration: none;\n      border-radius: "+r.INFOBOX_BORDER_RADIUS+"px;\n      background: white;\n    }\n\n    "+o.BLUE_THEME_WRAPPER+" "+o.INFOBOX_CARD+" {\n      background: "+r.BLUE+";\n      color: "+r.TEXT_BLUE+";\n    }\n\n    "+o.INFOBOX_CARD+" button {\n      outline: none;\n      cursor: pointer;\n      font-weight: bold;\n    }\n\n    "+o.INFOBOX_CLOSE_BUTTON_ACTIVE+" {\n      background: white;\n    }\n\n    "+o.INFOBOX_CLOSE_BUTTON+":hover {\n      background: white;\n    }\n\n    "+o.INFOBOX_CARD+" button {\n      text-decoration: none;\n      text-transform: none;\n      background: unset;\n    }\n\n    "+o.INFOBOX_BUTTON_PRIMARY+" {\n      border-width: 2px;\n      border-style: solid;\n      border-radius: 16px;\n      border-color: "+r.TEXT+";\n      color: "+r.TEXT+";\n      height: 32px;\n      padding: 0 14px;\n      font-family: inherit;\n      font-size: 15px;\n      font-weight: bold;\n      text-decoration: none;\n      cursor: pointer;\n      outline: none !important;\n      transition: background 125ms ease-out,\n          border-color 125ms ease-out,\n          color 125ms ease-out;\n    }\n\n    "+o.BLUE_THEME_WRAPPER+" "+o.INFOBOX_BUTTON_PRIMARY+" {\n      color: "+r.TEXT_BLUE+";\n      border-color: "+r.TEXT_BLUE+";\n    }\nc\n    "+o.BLUE_THEME_WRAPPER+" "+o.INFOBOX_BUTTON_PRIMARY+" {\n      border-color: "+r.TEXT_BLUE+";\n      color: "+r.TEXT_BLUE+";\n    }\n\n    "+o.INFOBOX_BUTTON_PRIMARY+":hover {\n      background-color: "+r.TEXT+";\n      color: white;\n    }\n\n    "+o.BLUE_THEME_WRAPPER+" "+o.INFOBOX_BUTTON_PRIMARY+":hover {\n      background-color: "+r.TEXT_BLUE+";\n      color: "+r.BLUE+";\n    }\n\n    "+o.INFOBOX_BUTTON_SECONDARY+" {\n      border-style: none;\n      border-radius: 16px;\n      color: "+r.TEXT+";\n      height: 32px;\n      font-family: inherit;\n      font-size: 15px;\n      font-weight: bold;\n      text-decoration: none;\n      cursor: pointer;\n      outline: none;\n      margin-right: 16px;\n      padding: 0 14px;\n      transition: background 125ms ease-out,\n          border-color 125ms ease-out,\n          color 125ms ease-out;\n    }\n\n    "+o.BLUE_THEME_WRAPPER+" "+o.INFOBOX_BUTTON_SECONDARY+" {\n      color: "+r.TEXT_BLUE+"\n    }\n\n    "+o.INFOBOX_BUTTON_SECONDARY+":hover {\n      color: white;\n      background: "+r.TEXT+";\n      border-sytle: 2px solid "+r.TEXT+";\n    }\n\n    "+o.BLUE_THEME_WRAPPER+" "+o.INFOBOX_BUTTON_SECONDARY+":hover {\n      color: "+r.BLUE+";\n      background: "+r.TEXT_BLUE+";\n      border-sytle: 2px solid "+r.TEXT+";\n    }\n\n    "+o.INFOBOX_COUNTER+" {\n      font-size: 14px;\n      font-weight: 200;\n      flex: 1 0 auto;\n      opacity: 0.75\n    }\n\n    "+o.INFOBOX_DESCRIPTION_WRAPPER+" {\n      display: flex;\n      align-items: flex-start;\n    }\n\n    "+o.INFOBOX_DESCRIPTION_WRAPPER+" > button {\n      outline: none;\n      border: none;\n      fill: "+r.TEXT+";\n      width: 12px;\n      height: 12px;\n      opacity: 0.75;\n      position: relative;\n    }\n\n    "+o.INFOBOX_DESCRIPTION_WRAPPER+" > button > svg {\n      display: block;\n      position: absolute;\n      left: 0px;\n    }\n\n    "+o.BLUE_THEME_WRAPPER+" "+o.INFOBOX_DESCRIPTION_WRAPPER+" > button {\n      fill: "+r.TEXT_BLUE+";\n    }\n\n    "+o.INFOBOX_DESCRIPTION+" {\n      font-family: Adobe Clean, Arial, Helvetica;\n      font-size: 14px;\n      line-height: 1.5em;\n      margin-right: 16px;\n      flex: 1 0 auto;\n      max-width: 260px;\n    }\n\n    "+o.BLUE_THEME_WRAPPER+" "+o.INFOBOX_DESCRIPTION+" {\n      font-weight: 200;\n    }\n\n    "+o.INFOBOX_DESCRIPTION+" p {\n      font-family: unset;\n      font-size: 14px;\n      font-weight: normal;\n      font-family: unset;\n      letter-spacing: unset;\n      line-height: 1.5em;\n      color: unset;\n      margin: 0px;\n    }\n\n    "+o.INFOBOX_DESCRIPTION+" ul {\n      list-style-position: inside;\n    }\n\n    "+o.INFOBOX_DESCRIPTION+" ol {\n      list-style-position: inside;\n    }\n\n    "+o.INFOBOX_DESCRIPTION+" strong {\n      font-family: unset;\n      font-weight: bold;\n      color: unset;\n    }\n\n    "+o.INFOBOX_DESCRIPTION+" em {\n      font-family: unset;\n      font-style: italic;\n      color: unset;\n    }\n\n    "+o.INFOBOX_DESCRIPTION+" a {\n      font-family: unset;\n      font-size: unset;\n    }\n\n    "+o.INFOBOX_FOOTER+" {\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      margin-top: 16px;\n    }\n\n    "+o.INFOBOX_MAIN+" {\n      padding: "+r.INFOBOX_MARGIN+"px;\n    }\n\n    "+o.INFOBOX_IMAGE+" {\n      width: 100%;\n      height: 100%;\n      border-radius: "+r.INFOBOX_BORDER_RADIUS+"px "+r.INFOBOX_BORDER_RADIUS+"px 0px 0px;\n    }\n\n    "+o.INFOBOX_FOOTER+" svg {\n      fill: "+r.TEXT+";\n      margin-right: 8px;\n    }\n\n    "+o.INFOBOX_FOOTER+" svg:last-child {\n      margin-right: 0px;\n    }\n\n    "+o.TINKERBELL_CIRCLE+" {\n      width: "+r.TINKERBELL_SIZE+"px;\n      height: "+r.TINKERBELL_SIZE+"px;\n      border-radius: "+.5*r.TINKERBELL_SIZE+"px;\n      background: orange;\n      position: absolute;\n    }\n\n    "+o.TINKERBELL_CIRCLE_ANIMATED+" {\n      opacity: 0;\n      animation: tinkerbellScale 2s infinite;\n    }\n\n    @keyframes tinkerbellScale {\n      from {\n        transform: scale(1, 1);\n        opacity: 1;\n      }\n      to {\n        transform: scale(3, 3);\n        opacity: 0;\n      }\n    }\n\n    @keyframes tinkerbellReveal {\n      from {\n        transform: scale(0, 0);\n        opacity: 0;\n      }\n      to {\n        transform: scale(1, 1);\n        opacity: 1;\n      }\n    }\n"}};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(3),i=n(1),u=n(4),a=function(t){return t&&t.__esModule?t:{default:t}}(n(31));var l=void 0,c={view:function(t){var e=document.querySelector(i.INFOBOX_MAIN),n=t.attrs,c=n.actions,s=n.coachMark,f=n.coachMarkCount,d=n.coachMarkPostionIsAdjusted,p=n.currentCoachMarkIndex,h=n.targetElement,v=n.willAnimate,_=n.theme;if(!e||!h)return null;var y=s.media,O=e.getBoundingClientRect();O.height+=y?y.height:0;var m=h.getBoundingClientRect(),E={left:Math.round(m.left-o.SHIM_MARGIN),top:Math.round(m.top-o.SHIM_MARGIN),width:Math.round(m.width+o.SHIM_MARGIN+o.SHIM_MARGIN),height:Math.round(m.height+o.SHIM_MARGIN+o.SHIM_MARGIN)},b=m.left+.5*m.width-.5*o.TINKERBELL_SIZE,g=m.top+.5*m.height-.5*o.TINKERBELL_SIZE,I=r({},s,{count:f,currentId:p,infoBoxBounds:O,targetBounds:m}),R=(0,a.default)(I),T=R.arrowPosition,w=R.infoBoxPosition,A=R.anchorPosition,S=R.wasAdjusted,M=v?o.INFOBOX_ANIMATION_SPEED:0;return d!==S&&(clearTimeout(l),l=setTimeout(function(){c.coachMarkPostionIsAdjusted(S)},50)),"\n      "+i.INFOBOX_WRAPPER+" {\n        position: fixed;\n        left: "+w.left+"px;\n        top: "+w.top+"px;\n        filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.2)) drop-shadow(0px 0px 40px rgba(0,0,0,0.1));\n        transition:\n          left "+M+",\n          top "+M+";\n      }\n\n      "+i.INFOBOX_IMAGE_WRAPPER+" {\n        width: 100%;\n        transition:\n          width "+M+",\n          height "+M+";\n      }\n\n      "+i.INFOBOX_ARROW+" {\n        background: transparent;\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-style: solid;\n        "+function(t,e,n){var r=n===u.BLUE_THEME?o.BLUE:"white";switch(t){case"left":return"\n      border-width:\n        "+o.INFOBOX_ARROW_SIZE+"px\n        0\n        "+o.INFOBOX_ARROW_SIZE+"px\n        "+o.INFOBOX_ARROW_SIZE+"px;\n      border-color:\n        transparent\n        transparent\n        transparent\n        "+r+";\n      left: 100%;\n      top: "+e.top+"px;\n    ";case"top":return"\n      border-width:\n        "+o.INFOBOX_ARROW_SIZE+"px\n        "+o.INFOBOX_ARROW_SIZE+"px\n        0\n        "+o.INFOBOX_ARROW_SIZE+"px;\n      border-color:\n        "+r+"\n        transparent\n        transparent\n        transparent;\n      left: "+e.left+"px;\n      top: 100%;\n    ";case"right":return"\n      border-width:\n        "+o.INFOBOX_ARROW_SIZE+"px\n        "+o.INFOBOX_ARROW_SIZE+"px\n        "+o.INFOBOX_ARROW_SIZE+"px\n        0;\n      border-color:\n        transparent\n        "+r+"\n        transparent\n        transparent;\n      left: "+-o.INFOBOX_ARROW_SIZE+"px;\n      top: "+e.top+"px;\n    ";default:return"\n      border-width:\n        0\n        "+o.INFOBOX_ARROW_SIZE+"px\n        "+o.INFOBOX_ARROW_SIZE+"px\n        "+o.INFOBOX_ARROW_SIZE+"px;\n      border-color:\n        transparent\n        transparent\n        "+r+"\n        transparent;\n      left: "+e.left+"px;\n      top: "+-o.INFOBOX_ARROW_SIZE+"px;\n    "}}(A,T,_)+"\n      }\n\n      "+i.SHIM+" {\n        display: block;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        background: black;\n        opacity: "+(I.dimBackground?.65:0)+";\n        pointer-events: "+(I.dimBackground?"auto":"none")+";\n        top: 0px;\n        left: 0px;\n        clip-path: "+function(t){var e=t.left,n=t.top,r=t.width,o=t.height;return"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, "+t.left+"px "+n+"px, "+e+"px "+(n+o)+"px, "+(e+r)+"px "+(n+o)+"px, "+(e+r)+"px "+n+"px, "+(e-1)+"px "+n+"px, 0% 0%)"}(E)+";\n        transition: clip-path "+M+", opacity "+M+";\n      }\n\n      "+i.SHIM_HOLE+" {\n        display: block;\n        position: fixed;\n        left: "+E.left+"px;\n        top: "+E.top+"px;\n        width: "+E.width+"px;\n        height: "+E.height+"px;\n        pointer-events: none;\n        opacity: "+(I.dimBackground?.65:0)+";\n        transition: top "+M+", left "+M+", width "+M+", height "+M+", opacity "+M+";\n      }\n\n      "+i.SHIM_HOLE_BORDER_TL+" {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        fill: black;\n      }\n\n      "+i.SHIM_HOLE_BORDER_TR+" {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        fill: black;\n      }\n\n      "+i.SHIM_HOLE_BORDER_BL+" {\n        position: absolute;\n        bottom: 0px;\n        left: 0px;\n        fill: black;\n      }\n\n      "+i.SHIM_HOLE_BORDER_BR+" {\n        position: absolute;\n        bottom: 0px;\n        right: 0px;\n        fill: black;\n      }\n\n      "+i.TINKERBELL+" {\n        display: block;\n        position: fixed;\n        left: "+b+"px;\n        top: "+g+"px;\n        width: "+o.TINKERBELL_SIZE+"px;\n        height: "+o.TINKERBELL_SIZE+"px;\n        pointer-events: none;\n        mix-blend-mode: hard-light;\n        opacity: 0.9;\n        animation: tinkerbellReveal 0.3S;\n      }\n      "}};e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=l(n(32)),i=l(n(33)),u=l(n(34)),a=l(n(5));function l(t){return t&&t.__esModule?t:{default:t}}var c=["top","right","bottom","left"],s=["start","center","end"];e.default=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=(0,o.default)(e),f=(0,i.default)(e),d=(0,u.default)(e,f,l),p=(0,a.default)(f),h={anchorPosition:e.anchorPosition,arrowPosition:r({},l,{left:l.left+d.left,top:l.top+d.top}),infoBoxPosition:r({},f,{left:f.left-d.left,top:f.top-d.top}),wasAdjusted:n>0};if(n<12&&p){var v=c.indexOf(e.anchorPosition),_=s.indexOf(e.align),y=c[(v+1)%c.length],O=n%4==3?s[(_+1)%s.length]:e.align;h=t(r({},e,{align:O,anchorPosition:y}),n+1)}return h}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(t){var e=t.targetBounds,n=t.infoBoxBounds;switch(t.align){case"end":return n.width-r.INFOBOX_ARROW_SIZE-.5*e.width;case"center":return.5*n.width-r.INFOBOX_ARROW_SIZE;default:return-r.INFOBOX_ARROW_SIZE+.5*e.width}},i=function(t){var e=t.targetBounds,n=t.infoBoxBounds;switch(t.align){case"end":return n.height-r.INFOBOX_ARROW_SIZE-.5*e.height;case"center":return.5*n.height-r.INFOBOX_ARROW_SIZE;default:return-r.INFOBOX_ARROW_SIZE+.5*e.height}};e.default=function(t){var e=t.anchorPosition,n=t.infoBoxBounds;switch(e){case"left":return{height:r.INFOBOX_ARROW_SIZE_DOUBLE,left:n.width-1,top:i(t),width:r.INFOBOX_ARROW_SIZE};case"top":return{height:r.INFOBOX_ARROW_SIZE,left:o(t),top:n.height-1,width:r.INFOBOX_ARROW_SIZE_DOUBLE};case"right":return{height:r.INFOBOX_ARROW_SIZE_DOUBLE,left:1-r.INFOBOX_ARROW_SIZE,top:i(t),width:r.INFOBOX_ARROW_SIZE};default:return{height:r.INFOBOX_ARROW_SIZE,left:o(t),top:1-r.INFOBOX_ARROW_SIZE,width:r.INFOBOX_ARROW_SIZE_DOUBLE}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(t){var e=t.targetBounds,n=t.infoBoxBounds;switch(t.align){case"end":return e.right-n.width;case"center":return e.right-.5*e.width-.5*n.width;default:return e.left}},i=function(t){var e=t.targetBounds,n=t.infoBoxBounds;switch(t.align){case"end":return e.bottom-n.height;case"center":return e.bottom-.5*e.height-.5*n.height;default:return e.top}};e.default=function(t){var e=t.targetBounds,n=t.infoBoxBounds;switch(t.anchorPosition){case"left":return{height:n.height,left:e.left-n.width-r.INFOBOX_ARROW_SIZE-r.INFOBOX_PLACEMENT_GAP,top:i(t),width:n.width};case"top":return{height:n.height,left:o(t),top:e.top-n.height-r.INFOBOX_ARROW_SIZE-r.INFOBOX_PLACEMENT_GAP,width:n.width};case"right":return{height:n.height,left:e.right+r.INFOBOX_ARROW_SIZE+r.INFOBOX_PLACEMENT_GAP,top:i(t),width:n.width};default:return{height:n.height,left:o(t),top:e.bottom+r.INFOBOX_ARROW_SIZE+r.INFOBOX_PLACEMENT_GAP,width:n.width}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3);e.default=function(t,e,n){var o=t.infoBoxBounds,i=t.anchorPosition;return"top"===i||"bottom"===i?{left:function(t,e){var n=r.INFOBOX_BORDER_RADIUS_DOUBLE,o=t.width-2*r.INFOBOX_ARROW_SIZE-r.INFOBOX_BORDER_RADIUS_DOUBLE,i=0;return e.left<n&&(i=n-e.left),e.left>o&&(i=o-e.left),i}(o,n),top:0}:{left:0,top:function(t,e){var n=r.INFOBOX_BORDER_RADIUS_DOUBLE,o=t.height-2*r.INFOBOX_ARROW_SIZE-r.INFOBOX_BORDER_RADIUS_DOUBLE,i=0;return e.top<n&&(i=n-e.top),e.top>o&&(i=o-e.top),i}(o,n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function o(t){return Array.isArray(t)?t:Array.from(t)}var i=function(t,e){try{return[].slice.call(t.querySelectorAll(e))}catch(t){return[]}},u=function t(e,n){if(e&&0===n.length)return!0;var u=o(n),a=u[0],l=u.slice(1),c=function(t,e){if(/^@.+=.+/.test(e)){var n=e.replace(/^@/,"").split(/=/),o=r(n,2),u=o[0],a=o[1];return new RegExp(a).test(String(t[u]))?t:null}return i(t,e)[0]}(e,a);return!!c&&t(c,l)},a=function(t){var e=o(t.split(/&/).filter(function(t){return""!==t})),n=e[0],r=e.slice(1);return i(document,n).filter(function(t){return u(t,r)})[0]};e.default=function(t){return t?t.split(/\|/).map(a).find(function(t){return void 0!==t}):null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(37),i=l(n(52)),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(55)),a=l(n(7));function l(t){return t&&t.__esModule?t:{default:t}}var c={currentCoachMarkIndex:0,currentTourIndex:0,infoBoxIsVisible:!1,tours:[{title:null,theme:n(4).WHITE,coachMarks:[]}],coachMarkPostionIsAdjusted:!1},s=null,f=function(t,e){return Object.keys(t).map(function(n){return function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return e(t[n].apply(null,o))})}).reduce(function(t,e){return r({},t,e)},{})};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!s){var n=e,l=r({},c,t,function(){var t=i.default.parse(window.location.search),e=t.showTour,n=t.showCoachMark,r={};if(e){var o=parseInt(e,10);isNaN(o)||(r.currentTourIndex=o,r.infoBoxIsVisible=!0)}if(n){var u=parseInt(n,10);isNaN(u)||(r.currentCoachMarkIndex=u,r.infoBoxIsVisible=!0)}return r}()),d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.compose,p=(s=(0,o.createStore)(a.default,l,d((0,o.applyMiddleware)(function(){return function(t){return function(e){n[e.type]&&n[e.type].forEach(function(t){t(e)}),t(e)}}})))).dispatch;s.actions=f(u,p),s.addCallback=function(t,e){n[t]||(n[t]=[]),n[t].push(e)},s.removeCallback=function(t,e){n[t]&&(n[t]=n[t].filter(function(t){return t!==e}))},s.removeAllCallbacks=function(t){n[t]&&delete n[t]}}return s}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var r=l(n(9)),o=l(n(49)),i=l(n(50)),u=l(n(51)),a=l(n(13));l(n(12));function l(t){return t&&t.__esModule?t:{default:t}}e.createStore=r.default,e.combineReducers=o.default,e.bindActionCreators=i.default,e.applyMiddleware=u.default,e.compose=a.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(11)),o=u(n(41)),i=u(n(42));function u(t){return t&&t.__esModule?t:{default:t}}var a="[object Null]",l="[object Undefined]",c=r.default?r.default.toStringTag:void 0;e.default=function(t){return null==t?void 0===t?l:a:c&&c in Object(t)?(0,o.default)(t):(0,i.default)(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t){return t&&t.__esModule?t:{default:t}}(n(40));var i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,u=o.default||i||Function("return this")();e.default=u},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r="object"==(void 0===t?"undefined":n(t))&&t&&t.Object===Object&&t;e.default=r}).call(this,n(2))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(11));var o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=r.default?r.default.toStringTag:void 0;e.default=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[a]=n:delete t[a]),o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.prototype.toString;e.default=function(t){return r.call(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(0,function(t){return t&&t.__esModule?t:{default:t}}(n(44)).default)(Object.getPrototypeOf,Object);e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(t){return null!=t&&"object"==(void 0===t?"undefined":r(t))}},function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0});var o,i=function(t){return t&&t.__esModule?t:{default:t}}(n(48));o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var u=(0,i.default)(o);e.default=u}).call(this,n(2),n(47)(t))},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e,n=t.Symbol;"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable";return e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=Object.keys(t),n={},o=0;o<e.length;o++){var u=e[o];0,"function"==typeof t[u]&&(n[u]=t[u])}var a=Object.keys(n);0;var l=void 0;try{!function(t){Object.keys(t).forEach(function(e){var n=t[e],o=n(void 0,{type:r.ActionTypes.INIT});if(void 0===o)throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");var i="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if(void 0===n(void 0,{type:i}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+r.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(t){l=t}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if(l)throw l;for(var r=!1,o={},u=0;u<a.length;u++){var c=a[u],s=n[c],f=t[c],d=s(f,e);if(void 0===d){var p=i(c,e);throw new Error(p)}o[c]=d,r=r||d!==f}return r?o:t}};var r=n(9);o(n(10)),o(n(12));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n=e&&e.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t,e){return function(){return e(t.apply(void 0,arguments))}}e.default=function(t,e){if("function"==typeof t)return o(t,e);if("object"!==(void 0===t?"undefined":r(t))||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":void 0===t?"undefined":r(t))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),i={},u=0;u<n.length;u++){var a=n[u],l=t[a];"function"==typeof l&&(i[a]=o(l,e))}return i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,i,u){var a=t(n,i,u),l=a.dispatch,c=[],s={getState:a.getState,dispatch:function(t){return l(t)}};return c=e.map(function(t){return t(s)}),l=r.default.apply(void 0,c)(a.dispatch),o({},a,{dispatch:l})}}};var r=function(t){return t&&t.__esModule?t:{default:t}}(n(13));var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){"use strict";var r=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(53),u=n(54);function a(t,e){return e.encode?e.strict?i(t):encodeURIComponent(t):t}function l(t,e){return e.decode?u(t):t}function c(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function s(t,e){var n=function(t){var e=void 0;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=Object.assign({decode:!0,arrayFormat:"none"},e)),i=Object.create(null);if("string"!=typeof t)return i;if(!(t=t.trim().replace(/^[?#&]/,"")))return i;var u=!0,a=!1,c=void 0;try{for(var s,f=t.split("&")[Symbol.iterator]();!(u=(s=f.next()).done);u=!0){var d=s.value.replace(/\+/g," ").split("="),p=r(d,2),h=p[0],v=p[1];v=void 0===v?null:l(v,e),n(l(h,e),v,i)}}catch(t){a=!0,c=t}finally{try{!u&&f.return&&f.return()}finally{if(a)throw c}}return Object.keys(i).sort().reduce(function(t,e){var n=i[e];return Boolean(n)&&"object"===(void 0===n?"undefined":o(n))&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"===(void 0===e?"undefined":o(e))?t(Object.keys(e)).sort(function(t,e){return Number(t)-Number(e)}).map(function(t){return e[t]}):e}(n):t[e]=n,t},Object.create(null))}e.extract=c,e.parse=s,e.stringify=function(t,e){!1===(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)).sort&&(e.sort=function(){});var n=function(t){switch(t.arrayFormat){case"index":return function(e,n,r){return null===n?[a(e,t),"[",r,"]"].join(""):[a(e,t),"[",a(r,t),"]=",a(n,t)].join("")};case"bracket":return function(e,n){return null===n?[a(e,t),"[]"].join(""):[a(e,t),"[]=",a(n,t)].join("")};default:return function(e,n){return null===n?a(e,t):[a(e,t),"=",a(n,t)].join("")}}}(e);return t?Object.keys(t).sort(e.sort).map(function(r){var o=t[r];if(void 0===o)return"";if(null===o)return a(r,e);if(Array.isArray(o)){var i=[],u=!0,l=!1,c=void 0;try{for(var s,f=o.slice()[Symbol.iterator]();!(u=(s=f.next()).done);u=!0){var d=s.value;void 0!==d&&i.push(n(r,d,i.length))}}catch(t){l=!0,c=t}finally{try{!u&&f.return&&f.return()}finally{if(l)throw c}}return i.join("&")}return a(r,e)+"="+a(o,e)}).filter(function(t){return t.length>0}).join("&"):""},e.parseUrl=function(t,e){return{url:t.split("?")[0]||"",query:s(c(t),e)}}},function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=new RegExp("%[a-f0-9]{2}","gi"),i=new RegExp("(%[a-f0-9]{2})+","gi");function u(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],u(n),u(r))}function a(t){try{return decodeURIComponent(t)}catch(r){for(var e=t.match(o),n=1;n<e.length;n++)e=(t=u(e,n).join("")).match(o);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+(void 0===t?"undefined":r(t))+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=i.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var r=a(n[0]);r!==n[0]&&(e[n[0]]=r)}n=i.exec(t)}e["%C2"]="�";for(var o=Object.keys(e),u=0;u<o.length;u++){var l=o[u];t=t.replace(new RegExp(l,"g"),e[l])}return t}(t)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.coachMarkPostionIsAdjusted=e.targetSelectorIsValid=e.progressSelectorIsValid=e.tourFinished=e.setState=e.modifyTourAttributes=e.modifyCoachMarkAttributes=e.removeCoachMarkAttribute=e.showTourGuide=e.hideTourGuide=e.removeTour=e.removeCoachMark=e.setCurrentTour=e.prevTour=e.nextTour=e.setCurrentCoachMark=e.prevCoachMark=e.nextCoachMark=e.addTour=e.addCoachMark=void 0;var r=n(8);e.addCoachMark=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:r.ADD_COACHMARK,payload:{attributes:t,tourId:e}}},e.addTour=function(t){return{type:r.ADD_TOUR,payload:{attributes:t}}},e.nextCoachMark=function(){return{type:r.NEXT_COACHMARK}},e.prevCoachMark=function(){return{type:r.PREV_COACHMARK}},e.setCurrentCoachMark=function(t){return{payload:t,type:r.SET_CURRENT_COACHMARK}},e.nextTour=function(){return{type:r.NEXT_TOUR}},e.prevTour=function(){return{type:r.PREV_TOUR}},e.setCurrentTour=function(t){return{payload:t,type:r.SET_CURRENT_TOUR}},e.removeCoachMark=function(){return{payload:{coachMarkId:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,tourId:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null},type:r.REMOVE_COACHMARK}},e.removeTour=function(){return{payload:{tourId:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null},type:r.REMOVE_TOUR}},e.hideTourGuide=function(){return{type:r.HIDE_TOUR_GUIDE}},e.showTourGuide=function(){return{type:r.SHOW_TOUR_GUIDE}},e.removeCoachMarkAttribute=function(t){return{payload:{attribute:t,coachMarkId:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,tourId:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null},type:r.REMOVE_COACHMARK_ATTRIBUTE}},e.modifyCoachMarkAttributes=function(t){return{payload:{attributes:t,coachMarkId:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,tourId:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null},type:r.MODIFY_COACHMARK_ATTRIBUTES}},e.modifyTourAttributes=function(t){return{payload:{attributes:t,tourId:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null},type:r.MODIFY_TOUR_ATTRIBUTES}},e.setState=function(t){return{payload:t,type:r.SET_STATE}},e.tourFinished=function(){return{type:r.TOUR_FINISHED}},e.progressSelectorIsValid=function(t){return{type:r.PROGRESS_SELECTOR_IS_VALID,payload:t}},e.targetSelectorIsValid=function(t){return{type:r.TARGET_SELECTOR_IS_VALID,payload:t}},e.coachMarkPostionIsAdjusted=function(t){return{type:r.COACH_MARK_POSITION_IS_ADJUSTED,payload:t}}}]);
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {
	"use strict";

	function Vnode(tag, key, attrs0, children, text, dom) {
		return { tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: undefined, _state: undefined, events: undefined, instance: undefined, skip: false };
	}
	Vnode.normalize = function (node) {
		if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined);
		if (node != null && (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined);
		return node;
	};
	Vnode.normalizeChildren = function normalizeChildren(children) {
		for (var i = 0; i < children.length; i++) {
			children[i] = Vnode.normalize(children[i]);
		}
		return children;
	};
	var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
	var selectorCache = {};
	var hasOwn = {}.hasOwnProperty;
	function isEmpty(object) {
		for (var key in object) {
			if (hasOwn.call(object, key)) return false;
		}return true;
	}
	function compileSelector(selector) {
		var match,
		    tag = "div",
		    classes = [],
		    attrs = {};
		while (match = selectorParser.exec(selector)) {
			var type = match[1],
			    value = match[2];
			if (type === "" && value !== "") tag = value;else if (type === "#") attrs.id = value;else if (type === ".") classes.push(value);else if (match[3][0] === "[") {
				var attrValue = match[6];
				if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
				if (match[4] === "class") classes.push(attrValue);else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true;
			}
		}
		if (classes.length > 0) attrs.className = classes.join(" ");
		return selectorCache[selector] = { tag: tag, attrs: attrs };
	}
	function execSelector(state, attrs, children) {
		var hasAttrs = false,
		    childList,
		    text;
		var className = attrs.className || attrs.class;
		if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
			var newAttrs = {};
			for (var key in attrs) {
				if (hasOwn.call(attrs, key)) {
					newAttrs[key] = attrs[key];
				}
			}
			attrs = newAttrs;
		}
		for (var key in state.attrs) {
			if (hasOwn.call(state.attrs, key)) {
				attrs[key] = state.attrs[key];
			}
		}
		if (className !== undefined) {
			if (attrs.class !== undefined) {
				attrs.class = undefined;
				attrs.className = className;
			}
			if (state.attrs.className != null) {
				attrs.className = state.attrs.className + " " + className;
			}
		}
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && key !== "key") {
				hasAttrs = true;
				break;
			}
		}
		if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
			text = children[0].children;
		} else {
			childList = children;
		}
		return Vnode(state.tag, attrs.key, hasAttrs ? attrs : undefined, childList, text);
	}
	function hyperscript(selector) {
		// Because sloppy mode sucks
		var attrs = arguments[1],
		    start = 2,
		    children;
		if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
			throw Error("The selector must be either a string or a component.");
		}
		if (typeof selector === "string") {
			var cached = selectorCache[selector] || compileSelector(selector);
		}
		if (attrs == null) {
			attrs = {};
		} else if ((typeof attrs === "undefined" ? "undefined" : _typeof(attrs)) !== "object" || attrs.tag != null || Array.isArray(attrs)) {
			attrs = {};
			start = 1;
		}
		if (arguments.length === start + 1) {
			children = arguments[start];
			if (!Array.isArray(children)) children = [children];
		} else {
			children = [];
			while (start < arguments.length) {
				children.push(arguments[start++]);
			}
		}
		var normalized = Vnode.normalizeChildren(children);
		if (typeof selector === "string") {
			return execSelector(cached, attrs, normalized);
		} else {
			return Vnode(selector, attrs.key, attrs, normalized);
		}
	}
	hyperscript.trust = function (html) {
		if (html == null) html = "";
		return Vnode("<", undefined, undefined, html, undefined, undefined);
	};
	hyperscript.fragment = function (attrs1, children) {
		return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined);
	};
	var m = hyperscript;
	/** @constructor */
	var PromisePolyfill = function PromisePolyfill(executor) {
		if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`");
		if (typeof executor !== "function") throw new TypeError("executor must be a function");
		var self = this,
		    resolvers = [],
		    rejectors = [],
		    resolveCurrent = handler(resolvers, true),
		    rejectCurrent = handler(rejectors, false);
		var instance = self._instance = { resolvers: resolvers, rejectors: rejectors };
		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
		function handler(list, shouldAbsorb) {
			return function execute(value) {
				var then;
				try {
					if (shouldAbsorb && value != null && ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
						if (value === self) throw new TypeError("Promise can't be resolved w/ itself");
						executeOnce(then.bind(value));
					} else {
						callAsync(function () {
							if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value);
							for (var i = 0; i < list.length; i++) {
								list[i](value);
							}resolvers.length = 0, rejectors.length = 0;
							instance.state = shouldAbsorb;
							instance.retry = function () {
								execute(value);
							};
						});
					}
				} catch (e) {
					rejectCurrent(e);
				}
			};
		}
		function executeOnce(then) {
			var runs = 0;
			function run(fn) {
				return function (value) {
					if (runs++ > 0) return;
					fn(value);
				};
			}
			var onerror = run(rejectCurrent);
			try {
				then(run(resolveCurrent), onerror);
			} catch (e) {
				onerror(e);
			}
		}
		executeOnce(executor);
	};
	PromisePolyfill.prototype.then = function (onFulfilled, onRejection) {
		var self = this,
		    instance = self._instance;
		function handle(callback, list, next, state) {
			list.push(function (value) {
				if (typeof callback !== "function") next(value);else try {
					resolveNext(callback(value));
				} catch (e) {
					if (rejectNext) rejectNext(e);
				}
			});
			if (typeof instance.retry === "function" && state === instance.state) instance.retry();
		}
		var resolveNext, rejectNext;
		var promise = new PromisePolyfill(function (resolve, reject) {
			resolveNext = resolve, rejectNext = reject;
		});
		handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false);
		return promise;
	};
	PromisePolyfill.prototype.catch = function (onRejection) {
		return this.then(null, onRejection);
	};
	PromisePolyfill.resolve = function (value) {
		if (value instanceof PromisePolyfill) return value;
		return new PromisePolyfill(function (resolve) {
			resolve(value);
		});
	};
	PromisePolyfill.reject = function (value) {
		return new PromisePolyfill(function (resolve, reject) {
			reject(value);
		});
	};
	PromisePolyfill.all = function (list) {
		return new PromisePolyfill(function (resolve, reject) {
			var total = list.length,
			    count = 0,
			    values = [];
			if (list.length === 0) resolve([]);else for (var i = 0; i < list.length; i++) {
				(function (i) {
					function consume(value) {
						count++;
						values[i] = value;
						if (count === total) resolve(values);
					}
					if (list[i] != null && (_typeof(list[i]) === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
						list[i].then(consume, reject);
					} else consume(list[i]);
				})(i);
			}
		});
	};
	PromisePolyfill.race = function (list) {
		return new PromisePolyfill(function (resolve, reject) {
			for (var i = 0; i < list.length; i++) {
				list[i].then(resolve, reject);
			}
		});
	};
	if (typeof window !== "undefined") {
		if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill;
		var PromisePolyfill = window.Promise;
	} else if (typeof global !== "undefined") {
		if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill;
		var PromisePolyfill = global.Promise;
	} else {}
	var buildQueryString = function buildQueryString(object) {
		if (Object.prototype.toString.call(object) !== "[object Object]") return "";
		var args = [];
		for (var key0 in object) {
			destructure(key0, object[key0]);
		}
		return args.join("&");
		function destructure(key0, value) {
			if (Array.isArray(value)) {
				for (var i = 0; i < value.length; i++) {
					destructure(key0 + "[" + i + "]", value[i]);
				}
			} else if (Object.prototype.toString.call(value) === "[object Object]") {
				for (var i in value) {
					destructure(key0 + "[" + i + "]", value[i]);
				}
			} else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
		}
	};
	var FILE_PROTOCOL_REGEX = new RegExp("^file://", "i");
	var _8 = function _8($window, Promise) {
		var callbackCount = 0;
		var oncompletion;
		function setCompletionCallback(callback) {
			oncompletion = callback;
		}
		function finalizer() {
			var count = 0;
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion();
			}
			return function finalize(promise0) {
				var then0 = promise0.then;
				promise0.then = function () {
					count++;
					var next = then0.apply(promise0, arguments);
					next.then(complete, function (e) {
						complete();
						if (count === 0) throw e;
					});
					return finalize(next);
				};
				return promise0;
			};
		}
		function normalize(args, extra) {
			if (typeof args === "string") {
				var url = args;
				args = extra || {};
				if (args.url == null) args.url = url;
			}
			return args;
		}
		function request(args, extra) {
			var finalize = finalizer();
			args = normalize(args, extra);
			var promise0 = new Promise(function (resolve, reject) {
				if (args.method == null) args.method = "GET";
				args.method = args.method.toUpperCase();
				var useBody = args.method === "GET" || args.method === "TRACE" ? false : typeof args.useBody === "boolean" ? args.useBody : true;
				if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function (value) {
					return value;
				} : JSON.stringify;
				if (typeof args.deserialize !== "function") args.deserialize = deserialize;
				if (typeof args.extract !== "function") args.extract = extract;
				args.url = interpolate(args.url, args.data);
				if (useBody) args.data = args.serialize(args.data);else args.url = assemble(args.url, args.data);
				var xhr = new $window.XMLHttpRequest(),
				    aborted = false,
				    _abort = xhr.abort;
				xhr.abort = function abort() {
					aborted = true;
					_abort.call(xhr);
				};
				xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined);
				if (args.serialize === JSON.stringify && useBody && !(args.headers && args.headers.hasOwnProperty("Content-Type"))) {
					xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				}
				if (args.deserialize === deserialize && !(args.headers && args.headers.hasOwnProperty("Accept"))) {
					xhr.setRequestHeader("Accept", "application/json, text/*");
				}
				if (args.withCredentials) xhr.withCredentials = args.withCredentials;
				for (var key in args.headers) {
					if ({}.hasOwnProperty.call(args.headers, key)) {
						xhr.setRequestHeader(key, args.headers[key]);
					}
				}if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr;
				xhr.onreadystatechange = function () {
					// Don't throw errors on xhr.abort().
					if (aborted) return;
					if (xhr.readyState === 4) {
						try {
							var response = args.extract !== extract ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args));
							if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 || FILE_PROTOCOL_REGEX.test(args.url)) {
								resolve(cast(args.type, response));
							} else {
								var error = new Error(xhr.responseText);
								for (var key in response) {
									error[key] = response[key];
								}reject(error);
							}
						} catch (e) {
							reject(e);
						}
					}
				};
				if (useBody && args.data != null) xhr.send(args.data);else xhr.send();
			});
			return args.background === true ? promise0 : finalize(promise0);
		}
		function jsonp(args, extra) {
			var finalize = finalizer();
			args = normalize(args, extra);
			var promise0 = new Promise(function (resolve, reject) {
				var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++;
				var script = $window.document.createElement("script");
				$window[callbackName] = function (data) {
					script.parentNode.removeChild(script);
					resolve(cast(args.type, data));
					delete $window[callbackName];
				};
				script.onerror = function () {
					script.parentNode.removeChild(script);
					reject(new Error("JSONP request failed"));
					delete $window[callbackName];
				};
				if (args.data == null) args.data = {};
				args.url = interpolate(args.url, args.data);
				args.data[args.callbackKey || "callback"] = callbackName;
				script.src = assemble(args.url, args.data);
				$window.document.documentElement.appendChild(script);
			});
			return args.background === true ? promise0 : finalize(promise0);
		}
		function interpolate(url, data) {
			if (data == null) return url;
			var tokens = url.match(/:[^\/]+/gi) || [];
			for (var i = 0; i < tokens.length; i++) {
				var key = tokens[i].slice(1);
				if (data[key] != null) {
					url = url.replace(tokens[i], data[key]);
				}
			}
			return url;
		}
		function assemble(url, data) {
			var querystring = buildQueryString(data);
			if (querystring !== "") {
				var prefix = url.indexOf("?") < 0 ? "?" : "&";
				url += prefix + querystring;
			}
			return url;
		}
		function deserialize(data) {
			try {
				return data !== "" ? JSON.parse(data) : null;
			} catch (e) {
				throw new Error(data);
			}
		}
		function extract(xhr) {
			return xhr.responseText;
		}
		function cast(type0, data) {
			if (typeof type0 === "function") {
				if (Array.isArray(data)) {
					for (var i = 0; i < data.length; i++) {
						data[i] = new type0(data[i]);
					}
				} else return new type0(data);
			}
			return data;
		}
		return { request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback };
	};
	var requestService = _8(window, PromisePolyfill);
	var coreRenderer = function coreRenderer($window) {
		var $doc = $window.document;
		var $emptyFragment = $doc.createDocumentFragment();
		var nameSpace = {
			svg: "http://www.w3.org/2000/svg",
			math: "http://www.w3.org/1998/Math/MathML"
		};
		var onevent;
		function setEventCallback(callback) {
			return onevent = callback;
		}
		function getNameSpace(vnode) {
			return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag];
		}
		//create
		function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
			for (var i = start; i < end; i++) {
				var vnode = vnodes[i];
				if (vnode != null) {
					createNode(parent, vnode, hooks, ns, nextSibling);
				}
			}
		}
		function createNode(parent, vnode, hooks, ns, nextSibling) {
			var tag = vnode.tag;
			if (typeof tag === "string") {
				vnode.state = {};
				if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
				switch (tag) {
					case "#":
						return createText(parent, vnode, nextSibling);
					case "<":
						return createHTML(parent, vnode, nextSibling);
					case "[":
						return createFragment(parent, vnode, hooks, ns, nextSibling);
					default:
						return createElement(parent, vnode, hooks, ns, nextSibling);
				}
			} else return createComponent(parent, vnode, hooks, ns, nextSibling);
		}
		function createText(parent, vnode, nextSibling) {
			vnode.dom = $doc.createTextNode(vnode.children);
			insertNode(parent, vnode.dom, nextSibling);
			return vnode.dom;
		}
		function createHTML(parent, vnode, nextSibling) {
			var match1 = vnode.children.match(/^\s*?<(\w+)/im) || [];
			var parent1 = { caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup" }[match1[1]] || "div";
			var temp = $doc.createElement(parent1);
			temp.innerHTML = vnode.children;
			vnode.dom = temp.firstChild;
			vnode.domSize = temp.childNodes.length;
			var fragment = $doc.createDocumentFragment();
			var child;
			while (child = temp.firstChild) {
				fragment.appendChild(child);
			}
			insertNode(parent, fragment, nextSibling);
			return fragment;
		}
		function createFragment(parent, vnode, hooks, ns, nextSibling) {
			var fragment = $doc.createDocumentFragment();
			if (vnode.children != null) {
				var children = vnode.children;
				createNodes(fragment, children, 0, children.length, hooks, null, ns);
			}
			vnode.dom = fragment.firstChild;
			vnode.domSize = fragment.childNodes.length;
			insertNode(parent, fragment, nextSibling);
			return fragment;
		}
		function createElement(parent, vnode, hooks, ns, nextSibling) {
			var tag = vnode.tag;
			var attrs2 = vnode.attrs;
			var is = attrs2 && attrs2.is;
			ns = getNameSpace(vnode) || ns;
			var element = ns ? is ? $doc.createElementNS(ns, tag, { is: is }) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, { is: is }) : $doc.createElement(tag);
			vnode.dom = element;
			if (attrs2 != null) {
				setAttrs(vnode, attrs2, ns);
			}
			insertNode(parent, element, nextSibling);
			if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
				setContentEditable(vnode);
			} else {
				if (vnode.text != null) {
					if (vnode.text !== "") element.textContent = vnode.text;else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)];
				}
				if (vnode.children != null) {
					var children = vnode.children;
					createNodes(element, children, 0, children.length, hooks, null, ns);
					setLateAttrs(vnode);
				}
			}
			return element;
		}
		function initComponent(vnode, hooks) {
			var sentinel;
			if (typeof vnode.tag.view === "function") {
				vnode.state = Object.create(vnode.tag);
				sentinel = vnode.state.view;
				if (sentinel.$$reentrantLock$$ != null) return $emptyFragment;
				sentinel.$$reentrantLock$$ = true;
			} else {
				vnode.state = void 0;
				sentinel = vnode.tag;
				if (sentinel.$$reentrantLock$$ != null) return $emptyFragment;
				sentinel.$$reentrantLock$$ = true;
				vnode.state = vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function" ? new vnode.tag(vnode) : vnode.tag(vnode);
			}
			vnode._state = vnode.state;
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
			initLifecycle(vnode._state, vnode, hooks);
			vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode));
			if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
			sentinel.$$reentrantLock$$ = null;
		}
		function createComponent(parent, vnode, hooks, ns, nextSibling) {
			initComponent(vnode, hooks);
			if (vnode.instance != null) {
				var element = createNode(parent, vnode.instance, hooks, ns, nextSibling);
				vnode.dom = vnode.instance.dom;
				vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
				insertNode(parent, element, nextSibling);
				return element;
			} else {
				vnode.domSize = 0;
				return $emptyFragment;
			}
		}
		//update
		function updateNodes(parent, old, vnodes, recycling, hooks, nextSibling, ns) {
			if (old === vnodes || old == null && vnodes == null) return;else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns);else if (vnodes == null) removeNodes(old, 0, old.length, vnodes);else {
				if (old.length === vnodes.length) {
					var isUnkeyed = false;
					for (var i = 0; i < vnodes.length; i++) {
						if (vnodes[i] != null && old[i] != null) {
							isUnkeyed = vnodes[i].key == null && old[i].key == null;
							break;
						}
					}
					if (isUnkeyed) {
						for (var i = 0; i < old.length; i++) {
							if (old[i] === vnodes[i]) continue;else if (old[i] == null && vnodes[i] != null) createNode(parent, vnodes[i], hooks, ns, getNextSibling(old, i + 1, nextSibling));else if (vnodes[i] == null) removeNodes(old, i, i + 1, vnodes);else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), recycling, ns);
						}
						return;
					}
				}
				recycling = recycling || isRecyclable(old, vnodes);
				if (recycling) {
					var pool = old.pool;
					old = old.concat(old.pool);
				}
				var oldStart = 0,
				    start = 0,
				    oldEnd = old.length - 1,
				    end = vnodes.length - 1,
				    map;
				while (oldEnd >= oldStart && end >= start) {
					var o = old[oldStart],
					    v = vnodes[start];
					if (o === v && !recycling) oldStart++, start++;else if (o == null) oldStart++;else if (v == null) start++;else if (o.key === v.key) {
						var shouldRecycle = pool != null && oldStart >= old.length - pool.length || pool == null && recycling;
						oldStart++, start++;
						updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), shouldRecycle, ns);
						if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling);
					} else {
						var o = old[oldEnd];
						if (o === v && !recycling) oldEnd--, start++;else if (o == null) oldEnd--;else if (v == null) start++;else if (o.key === v.key) {
							var shouldRecycle = pool != null && oldEnd >= old.length - pool.length || pool == null && recycling;
							updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns);
							if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling));
							oldEnd--, start++;
						} else break;
					}
				}
				while (oldEnd >= oldStart && end >= start) {
					var o = old[oldEnd],
					    v = vnodes[end];
					if (o === v && !recycling) oldEnd--, end--;else if (o == null) oldEnd--;else if (v == null) end--;else if (o.key === v.key) {
						var shouldRecycle = pool != null && oldEnd >= old.length - pool.length || pool == null && recycling;
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns);
						if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling);
						if (o.dom != null) nextSibling = o.dom;
						oldEnd--, end--;
					} else {
						if (!map) map = getKeyMap(old, oldEnd);
						if (v != null) {
							var oldIndex = map[v.key];
							if (oldIndex != null) {
								var movable = old[oldIndex];
								var shouldRecycle = pool != null && oldIndex >= old.length - pool.length || pool == null && recycling;
								updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns);
								insertNode(parent, toFragment(movable), nextSibling);
								old[oldIndex].skip = true;
								if (movable.dom != null) nextSibling = movable.dom;
							} else {
								var dom = createNode(parent, v, hooks, ns, nextSibling);
								nextSibling = dom;
							}
						}
						end--;
					}
					if (end < start) break;
				}
				createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
				removeNodes(old, oldStart, oldEnd + 1, vnodes);
			}
		}
		function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
			var oldTag = old.tag,
			    tag = vnode.tag;
			if (oldTag === tag) {
				vnode.state = old.state;
				vnode._state = old._state;
				vnode.events = old.events;
				if (!recycling && shouldNotUpdate(vnode, old)) return;
				if (typeof oldTag === "string") {
					if (vnode.attrs != null) {
						if (recycling) {
							vnode.state = {};
							initLifecycle(vnode.attrs, vnode, hooks);
						} else updateLifecycle(vnode.attrs, vnode, hooks);
					}
					switch (oldTag) {
						case "#":
							updateText(old, vnode);break;
						case "<":
							updateHTML(parent, old, vnode, nextSibling);break;
						case "[":
							updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns);break;
						default:
							updateElement(old, vnode, recycling, hooks, ns);
					}
				} else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns);
			} else {
				removeNode(old, null);
				createNode(parent, vnode, hooks, ns, nextSibling);
			}
		}
		function updateText(old, vnode) {
			if (old.children.toString() !== vnode.children.toString()) {
				old.dom.nodeValue = vnode.children;
			}
			vnode.dom = old.dom;
		}
		function updateHTML(parent, old, vnode, nextSibling) {
			if (old.children !== vnode.children) {
				toFragment(old);
				createHTML(parent, vnode, nextSibling);
			} else vnode.dom = old.dom, vnode.domSize = old.domSize;
		}
		function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
			updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns);
			var domSize = 0,
			    children = vnode.children;
			vnode.dom = null;
			if (children != null) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i];
					if (child != null && child.dom != null) {
						if (vnode.dom == null) vnode.dom = child.dom;
						domSize += child.domSize || 1;
					}
				}
				if (domSize !== 1) vnode.domSize = domSize;
			}
		}
		function updateElement(old, vnode, recycling, hooks, ns) {
			var element = vnode.dom = old.dom;
			ns = getNameSpace(vnode) || ns;
			if (vnode.tag === "textarea") {
				if (vnode.attrs == null) vnode.attrs = {};
				if (vnode.text != null) {
					vnode.attrs.value = vnode.text; //FIXME handle0 multiple children
					vnode.text = undefined;
				}
			}
			updateAttrs(vnode, old.attrs, vnode.attrs, ns);
			if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
				setContentEditable(vnode);
			} else if (old.text != null && vnode.text != null && vnode.text !== "") {
				if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text;
			} else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)];
				if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)];
				updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns);
			}
		}
		function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
			if (recycling) {
				initComponent(vnode, hooks);
			} else {
				vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode));
				if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
				if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
				updateLifecycle(vnode._state, vnode, hooks);
			}
			if (vnode.instance != null) {
				if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling);else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns);
				vnode.dom = vnode.instance.dom;
				vnode.domSize = vnode.instance.domSize;
			} else if (old.instance != null) {
				removeNode(old.instance, null);
				vnode.dom = undefined;
				vnode.domSize = 0;
			} else {
				vnode.dom = old.dom;
				vnode.domSize = old.domSize;
			}
		}
		function isRecyclable(old, vnodes) {
			if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
				var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0;
				var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0;
				var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0;
				if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
					return true;
				}
			}
			return false;
		}
		function getKeyMap(vnodes, end) {
			var map = {},
			    i = 0;
			for (var i = 0; i < end; i++) {
				var vnode = vnodes[i];
				if (vnode != null) {
					var key2 = vnode.key;
					if (key2 != null) map[key2] = i;
				}
			}
			return map;
		}
		function toFragment(vnode) {
			var count0 = vnode.domSize;
			if (count0 != null || vnode.dom == null) {
				var fragment = $doc.createDocumentFragment();
				if (count0 > 0) {
					var dom = vnode.dom;
					while (--count0) {
						fragment.appendChild(dom.nextSibling);
					}fragment.insertBefore(dom, fragment.firstChild);
				}
				return fragment;
			} else return vnode.dom;
		}
		function getNextSibling(vnodes, i, nextSibling) {
			for (; i < vnodes.length; i++) {
				if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom;
			}
			return nextSibling;
		}
		function insertNode(parent, dom, nextSibling) {
			if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling);else parent.appendChild(dom);
		}
		function setContentEditable(vnode) {
			var children = vnode.children;
			if (children != null && children.length === 1 && children[0].tag === "<") {
				var content = children[0].children;
				if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content;
			} else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted");
		}
		//remove
		function removeNodes(vnodes, start, end, context) {
			for (var i = start; i < end; i++) {
				var vnode = vnodes[i];
				if (vnode != null) {
					if (vnode.skip) vnode.skip = false;else removeNode(vnode, context);
				}
			}
		}
		function removeNode(vnode, context) {
			var expected = 1,
			    called = 0;
			if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
				var result = vnode.attrs.onbeforeremove.call(vnode.state, vnode);
				if (result != null && typeof result.then === "function") {
					expected++;
					result.then(continuation, continuation);
				}
			}
			if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeremove === "function") {
				var result = vnode._state.onbeforeremove.call(vnode.state, vnode);
				if (result != null && typeof result.then === "function") {
					expected++;
					result.then(continuation, continuation);
				}
			}
			continuation();
			function continuation() {
				if (++called === expected) {
					onremove(vnode);
					if (vnode.dom) {
						var count0 = vnode.domSize || 1;
						if (count0 > 1) {
							var dom = vnode.dom;
							while (--count0) {
								removeNodeFromDOM(dom.nextSibling);
							}
						}
						removeNodeFromDOM(vnode.dom);
						if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") {
							//TODO test custom elements
							if (!context.pool) context.pool = [vnode];else context.pool.push(vnode);
						}
					}
				}
			}
		}
		function removeNodeFromDOM(node) {
			var parent = node.parentNode;
			if (parent != null) parent.removeChild(node);
		}
		function onremove(vnode) {
			if (vnode.attrs && typeof vnode.attrs.onremove === "function") vnode.attrs.onremove.call(vnode.state, vnode);
			if (typeof vnode.tag !== "string") {
				if (typeof vnode._state.onremove === "function") vnode._state.onremove.call(vnode.state, vnode);
				if (vnode.instance != null) onremove(vnode.instance);
			} else {
				var children = vnode.children;
				if (Array.isArray(children)) {
					for (var i = 0; i < children.length; i++) {
						var child = children[i];
						if (child != null) onremove(child);
					}
				}
			}
		}
		//attrs2
		function setAttrs(vnode, attrs2, ns) {
			for (var key2 in attrs2) {
				setAttr(vnode, key2, null, attrs2[key2], ns);
			}
		}
		function setAttr(vnode, key2, old, value, ns) {
			var element = vnode.dom;
			if (key2 === "key" || key2 === "is" || old === value && !isFormAttribute(vnode, key2) && (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object" || typeof value === "undefined" || isLifecycleMethod(key2)) return;
			var nsLastIndex = key2.indexOf(":");
			if (nsLastIndex > -1 && key2.substr(0, nsLastIndex) === "xlink") {
				element.setAttributeNS("http://www.w3.org/1999/xlink", key2.slice(nsLastIndex + 1), value);
			} else if (key2[0] === "o" && key2[1] === "n" && typeof value === "function") updateEvent(vnode, key2, value);else if (key2 === "style") updateStyle(element, old, value);else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
				if (key2 === "value") {
					var normalized0 = "" + value; // eslint-disable-line no-implicit-coercion
					//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
					if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return;
					//setting select[value] to same value while having select open blinks select dropdown in Chrome
					if (vnode.tag === "select") {
						if (value === null) {
							if (vnode.dom.selectedIndex === -1 && vnode.dom === $doc.activeElement) return;
						} else {
							if (old !== null && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return;
						}
					}
					//setting option[value] to same value while having select open blinks select dropdown in Chrome
					if (vnode.tag === "option" && old != null && vnode.dom.value === normalized0) return;
				}
				// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error0 will occur.
				if (vnode.tag === "input" && key2 === "type") {
					element.setAttribute(key2, value);
					return;
				}
				element[key2] = value;
			} else {
				if (typeof value === "boolean") {
					if (value) element.setAttribute(key2, "");else element.removeAttribute(key2);
				} else element.setAttribute(key2 === "className" ? "class" : key2, value);
			}
		}
		function setLateAttrs(vnode) {
			var attrs2 = vnode.attrs;
			if (vnode.tag === "select" && attrs2 != null) {
				if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined);
				if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined);
			}
		}
		function updateAttrs(vnode, old, attrs2, ns) {
			if (attrs2 != null) {
				for (var key2 in attrs2) {
					setAttr(vnode, key2, old && old[key2], attrs2[key2], ns);
				}
			}
			if (old != null) {
				for (var key2 in old) {
					if (attrs2 == null || !(key2 in attrs2)) {
						if (key2 === "className") key2 = "class";
						if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined);else if (key2 !== "key") vnode.dom.removeAttribute(key2);
					}
				}
			}
		}
		function isFormAttribute(vnode, attr) {
			return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement;
		}
		function isLifecycleMethod(attr) {
			return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate";
		}
		function isAttribute(attr) {
			return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"; // || attr === "type"
		}
		function isCustomElement(vnode) {
			return vnode.attrs.is || vnode.tag.indexOf("-") > -1;
		}
		function hasIntegrationMethods(source) {
			return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove);
		}
		//style
		function updateStyle(element, old, style) {
			if (old === style) element.style.cssText = "", old = null;
			if (style == null) element.style.cssText = "";else if (typeof style === "string") element.style.cssText = style;else {
				if (typeof old === "string") element.style.cssText = "";
				for (var key2 in style) {
					element.style[key2] = style[key2];
				}
				if (old != null && typeof old !== "string") {
					for (var key2 in old) {
						if (!(key2 in style)) element.style[key2] = "";
					}
				}
			}
		}
		//event
		function updateEvent(vnode, key2, value) {
			var element = vnode.dom;
			var callback = typeof onevent !== "function" ? value : function (e) {
				var result = value.call(element, e);
				onevent.call(element, e);
				return result;
			};
			if (key2 in element) element[key2] = typeof value === "function" ? callback : null;else {
				var eventName = key2.slice(2);
				if (vnode.events === undefined) vnode.events = {};
				if (vnode.events[key2] === callback) return;
				if (vnode.events[key2] != null) element.removeEventListener(eventName, vnode.events[key2], false);
				if (typeof value === "function") {
					vnode.events[key2] = callback;
					element.addEventListener(eventName, vnode.events[key2], false);
				}
			}
		}
		//lifecycle
		function initLifecycle(source, vnode, hooks) {
			if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode);
			if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode));
		}
		function updateLifecycle(source, vnode, hooks) {
			if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode));
		}
		function shouldNotUpdate(vnode, old) {
			var forceVnodeUpdate, forceComponentUpdate;
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old);
			if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeupdate === "function") forceComponentUpdate = vnode._state.onbeforeupdate.call(vnode.state, vnode, old);
			if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
				vnode.dom = old.dom;
				vnode.domSize = old.domSize;
				vnode.instance = old.instance;
				return true;
			}
			return false;
		}
		function render(dom, vnodes) {
			if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
			var hooks = [];
			var active = $doc.activeElement;
			var namespace = dom.namespaceURI;
			// First time0 rendering into a node clears it out
			if (dom.vnodes == null) dom.textContent = "";
			if (!Array.isArray(vnodes)) vnodes = [vnodes];
			updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace);
			dom.vnodes = vnodes;
			// document.activeElement can return null in IE https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
			if (active != null && $doc.activeElement !== active) active.focus();
			for (var i = 0; i < hooks.length; i++) {
				hooks[i]();
			}
		}
		return { render: render, setEventCallback: setEventCallback };
	};
	function throttle(callback) {
		//60fps translates to 16.6ms, round it down since setTimeout requires int
		var time = 16;
		var last = 0,
		    pending = null;
		var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout;
		return function () {
			var now = Date.now();
			if (last === 0 || now - last >= time) {
				last = now;
				callback();
			} else if (pending === null) {
				pending = timeout(function () {
					pending = null;
					callback();
					last = Date.now();
				}, time - (now - last));
			}
		};
	}
	var _11 = function _11($window) {
		var renderService = coreRenderer($window);
		renderService.setEventCallback(function (e) {
			if (e.redraw === false) e.redraw = undefined;else redraw();
		});
		var callbacks = [];
		function subscribe(key1, callback) {
			unsubscribe(key1);
			callbacks.push(key1, throttle(callback));
		}
		function unsubscribe(key1) {
			var index = callbacks.indexOf(key1);
			if (index > -1) callbacks.splice(index, 2);
		}
		function redraw() {
			for (var i = 1; i < callbacks.length; i += 2) {
				callbacks[i]();
			}
		}
		return { subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render };
	};
	var redrawService = _11(window);
	requestService.setCompletionCallback(redrawService.redraw);
	var _16 = function _16(redrawService0) {
		return function (root, component) {
			if (component === null) {
				redrawService0.render(root, []);
				redrawService0.unsubscribe(root);
				return;
			}

			if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode");

			var run0 = function run0() {
				redrawService0.render(root, Vnode(component));
			};
			redrawService0.subscribe(root, run0);
			redrawService0.redraw();
		};
	};
	m.mount = _16(redrawService);
	var Promise = PromisePolyfill;
	var parseQueryString = function parseQueryString(string) {
		if (string === "" || string == null) return {};
		if (string.charAt(0) === "?") string = string.slice(1);
		var entries = string.split("&"),
		    data0 = {},
		    counters = {};
		for (var i = 0; i < entries.length; i++) {
			var entry = entries[i].split("=");
			var key5 = decodeURIComponent(entry[0]);
			var value = entry.length === 2 ? decodeURIComponent(entry[1]) : "";
			if (value === "true") value = true;else if (value === "false") value = false;
			var levels = key5.split(/\]\[?|\[/);
			var cursor = data0;
			if (key5.indexOf("[") > -1) levels.pop();
			for (var j = 0; j < levels.length; j++) {
				var level = levels[j],
				    nextLevel = levels[j + 1];
				var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
				var isValue = j === levels.length - 1;
				if (level === "") {
					var key5 = levels.slice(0, j).join();
					if (counters[key5] == null) counters[key5] = 0;
					level = counters[key5]++;
				}
				if (cursor[level] == null) {
					cursor[level] = isValue ? value : isNumber ? [] : {};
				}
				cursor = cursor[level];
			}
		}
		return data0;
	};
	var coreRouter = function coreRouter($window) {
		var supportsPushState = typeof $window.history.pushState === "function";
		var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout;
		function normalize1(fragment0) {
			var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent);
			if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data;
			return data;
		}
		var asyncId;
		function debounceAsync(callback0) {
			return function () {
				if (asyncId != null) return;
				asyncId = callAsync0(function () {
					asyncId = null;
					callback0();
				});
			};
		}
		function parsePath(path, queryData, hashData) {
			var queryIndex = path.indexOf("?");
			var hashIndex = path.indexOf("#");
			var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length;
			if (queryIndex > -1) {
				var queryEnd = hashIndex > -1 ? hashIndex : path.length;
				var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd));
				for (var key4 in queryParams) {
					queryData[key4] = queryParams[key4];
				}
			}
			if (hashIndex > -1) {
				var hashParams = parseQueryString(path.slice(hashIndex + 1));
				for (var key4 in hashParams) {
					hashData[key4] = hashParams[key4];
				}
			}
			return path.slice(0, pathEnd);
		}
		var router = { prefix: "#!" };
		router.getPath = function () {
			var type2 = router.prefix.charAt(0);
			switch (type2) {
				case "#":
					return normalize1("hash").slice(router.prefix.length);
				case "?":
					return normalize1("search").slice(router.prefix.length) + normalize1("hash");
				default:
					return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash");
			}
		};
		router.setPath = function (path, data, options) {
			var queryData = {},
			    hashData = {};
			path = parsePath(path, queryData, hashData);
			if (data != null) {
				for (var key4 in data) {
					queryData[key4] = data[key4];
				}path = path.replace(/:([^\/]+)/g, function (match2, token) {
					delete queryData[token];
					return data[token];
				});
			}
			var query = buildQueryString(queryData);
			if (query) path += "?" + query;
			var hash = buildQueryString(hashData);
			if (hash) path += "#" + hash;
			if (supportsPushState) {
				var state = options ? options.state : null;
				var title = options ? options.title : null;
				$window.onpopstate();
				if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path);else $window.history.pushState(state, title, router.prefix + path);
			} else $window.location.href = router.prefix + path;
		};
		router.defineRoutes = function (routes, resolve, reject) {
			function resolveRoute() {
				var path = router.getPath();
				var params = {};
				var pathname = parsePath(path, params, params);
				var state = $window.history.state;
				if (state != null) {
					for (var k in state) {
						params[k] = state[k];
					}
				}
				for (var route0 in routes) {
					var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$");
					if (matcher.test(pathname)) {
						pathname.replace(matcher, function () {
							var keys = route0.match(/:[^\/]+/g) || [];
							var values = [].slice.call(arguments, 1, -2);
							for (var i = 0; i < keys.length; i++) {
								params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i]);
							}
							resolve(routes[route0], params, path, route0);
						});
						return;
					}
				}
				reject(path, params);
			}
			if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute);else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute;
			resolveRoute();
		};
		return router;
	};
	var _20 = function _20($window, redrawService0) {
		var routeService = coreRouter($window);
		var identity = function identity(v) {
			return v;
		};
		var render1, component, attrs3, currentPath, _lastUpdate;
		var route = function route(root, defaultRoute, routes) {
			if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");
			var run1 = function run1() {
				if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)));
			};
			var bail = function bail(path) {
				if (path !== defaultRoute) routeService.setPath(defaultRoute, null, { replace: true });else throw new Error("Could not resolve default route " + defaultRoute);
			};
			routeService.defineRoutes(routes, function (payload, params, path) {
				var update = _lastUpdate = function lastUpdate(routeResolver, comp) {
					if (update !== _lastUpdate) return;
					component = comp != null && (typeof comp.view === "function" || typeof comp === "function") ? comp : "div";
					attrs3 = params, currentPath = path, _lastUpdate = null;
					render1 = (routeResolver.render || identity).bind(routeResolver);
					run1();
				};
				if (payload.view || typeof payload === "function") update({}, payload);else {
					if (payload.onmatch) {
						Promise.resolve(payload.onmatch(params, path)).then(function (resolved) {
							update(payload, resolved);
						}, bail);
					} else update(payload, "div");
				}
			}, bail);
			redrawService0.subscribe(root, run1);
		};
		route.set = function (path, data, options) {
			if (_lastUpdate != null) {
				options = options || {};
				options.replace = true;
			}
			_lastUpdate = null;
			routeService.setPath(path, data, options);
		};
		route.get = function () {
			return currentPath;
		};
		route.prefix = function (prefix0) {
			routeService.prefix = prefix0;
		};
		route.link = function (vnode1) {
			vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href);
			vnode1.dom.onclick = function (e) {
				if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return;
				e.preventDefault();
				e.redraw = false;
				var href = this.getAttribute("href");
				if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length);
				route.set(href, undefined, undefined);
			};
		};
		route.param = function (key3) {
			if (typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3];
			return attrs3;
		};
		return route;
	};
	m.route = _20(window, redrawService);
	m.withAttr = function (attrName, callback1, context) {
		return function (e) {
			callback1.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName));
		};
	};
	var _28 = coreRenderer(window);
	m.render = _28.render;
	m.redraw = redrawService.redraw;
	m.request = requestService.request;
	m.jsonp = requestService.jsonp;
	m.parseQueryString = parseQueryString;
	m.buildQueryString = buildQueryString;
	m.version = "1.1.6";
	m.vnode = Vnode;
	if (true) module["exports"] = m;else {}
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(17).setImmediate, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INFOBOX_ARROW = exports.INFOBOX_ARROW = '.___tour-guide-infobox-arrow';
var INFOBOX_ARROW_BORDER = exports.INFOBOX_ARROW_BORDER = '.___tour-guide-infobox-arrow-border';
var INFOBOX_BUTTON_PRIMARY = exports.INFOBOX_BUTTON_PRIMARY = '.___tour-guide-infobox-button-primary';
var INFOBOX_BUTTON_SECONDARY = exports.INFOBOX_BUTTON_SECONDARY = '.___tour-guide-infobox-button-secondary';
var INFOBOX_CARD = exports.INFOBOX_CARD = '.___tour-guide-infobox-card';
var INFOBOX_DESCRIPTION = exports.INFOBOX_DESCRIPTION = '.__tour-guide-infobox-description';
var INFOBOX_FOOTER = exports.INFOBOX_FOOTER = '.___tour-guide-infobox-footer';
var INFOBOX_HEADER = exports.INFOBOX_HEADER = '.___tour-guide-infobox-header';
var INFOBOX_STEPS = exports.INFOBOX_STEPS = '.___tour-guide-infobox-steps';
var INFOBOX_TITLE = exports.INFOBOX_TITLE = '.___tour-guide-infobox-title';
var INFOBOX_WRAPPER = exports.INFOBOX_WRAPPER = '.___tour-guide-infobox-wrapper';
var INFOBOX_MAIN = exports.INFOBOX_MAIN = '.___tour-guide-infobox-main';
var INFOBOX_IMAGE_WRAPPER = exports.INFOBOX_IMAGE_WRAPPER = '.___tour-guide-infobox-image-wrapper';
var INFOBOX_IMAGE = exports.INFOBOX_IMAGE = '.___tour-guide-infobox-image';
var INFOBOX_DIVIDER = exports.INFOBOX_DIVIDER = '.___tour-guide-infobox-divider';

var SHIM = exports.SHIM = '.___tour-guide-shim';
var SHIM_HOLE = exports.SHIM_HOLE = '.___tour-guide-shim-hole';
var SHIM_HOLE_BORDER_TL = exports.SHIM_HOLE_BORDER_TL = '.___tour-guide-shim-hole-border-tl';
var SHIM_HOLE_BORDER_TR = exports.SHIM_HOLE_BORDER_TR = '.___tour-guide-shim-hole-border-tr';
var SHIM_HOLE_BORDER_BL = exports.SHIM_HOLE_BORDER_BL = '.___tour-guide-shim-hole-border-bl';
var SHIM_HOLE_BORDER_BR = exports.SHIM_HOLE_BORDER_BR = '.___tour-guide-shim-hole-border-br';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INFOBOX_WIDTH = exports.INFOBOX_WIDTH = 280;
var INFOBOX_HEIGHT = exports.INFOBOX_HEIGHT = 165;
var INFOBOX_ARROW_SIZE = exports.INFOBOX_ARROW_SIZE = 10;
var INFOBOX_ARROW_SIZE_DOUBLE = exports.INFOBOX_ARROW_SIZE_DOUBLE = INFOBOX_ARROW_SIZE * 2;
var INFOBOX_ANIMATION_SPEED = exports.INFOBOX_ANIMATION_SPEED = '150ms';
var INFOBOX_BORDER_RADIUS = exports.INFOBOX_BORDER_RADIUS = 5;
var INFOBOX_BORDER_RADIUS_DOUBLE = exports.INFOBOX_BORDER_RADIUS_DOUBLE = INFOBOX_BORDER_RADIUS * 2;
var INFOBOX_BORDER_WIDTH = exports.INFOBOX_BORDER_WIDTH = 1;
var INFOBOX_MARGIN = exports.INFOBOX_MARGIN = 24;
var INFOBOX_PLACEMENT_GAP = exports.INFOBOX_PLACEMENT_GAP = 8;

// Shim
var SHIM_MARGIN = exports.SHIM_MARGIN = 8;

// Colors
var GREY_VERY_LIGHT = exports.GREY_VERY_LIGHT = '#F2F2F2';
var GREY_LIGHT = exports.GREY_LIGHT = '#959595';
var GREY_MEDIUM = exports.GREY_MEDIUM = '#4B4B4B';
var GREY_DARK = exports.GREY_DARK = '#2C2C2C';
var GREY_BORDER = exports.GREY_BORDER = '#CACACA';
var BLUE = exports.BLUE = '#486EC2';
var BLUE_LIGHT = exports.BLUE_LIGHT = '#718DCF';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isOffScreen = function isOffScreen(bounds) {
  var hMin = 0;
  var hMax = window.innerWidth;
  var vMin = 0;
  var vMax = window.innerHeight;

  if (bounds.left < hMin) {
    return true;
  }
  if (bounds.left + bounds.width > hMax) {
    return true;
  }
  if (bounds.top < vMin) {
    return true;
  }
  if (bounds.top + bounds.height > vMax) {
    return true;
  }

  return false;
};

exports.default = isOffScreen;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentCoachMark = exports.getCurrentCoachMarks = exports.getCurrentTour = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(6);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var handleNavigationAction = function handleNavigationAction(state, currentTourIndex, currentCoachMarkIndex) {
  var oldTourIndex = state.currentTourIndex,
      oldCoachMarkIndex = state.currentCoachMarkIndex;

  var newTours = state.tours.map(function (tour, i) {
    return i === oldTourIndex ? _extends({}, tour, {
      coachMarks: tour.coachMarks.map(function (coachMark, j) {
        return j === oldCoachMarkIndex ? _extends({}, coachMark, {
          isComplete: true
        }) : coachMark;
      })
    }) : tour;
  });

  return _extends({}, state, {
    currentCoachMarkIndex: currentCoachMarkIndex,
    currentTourIndex: currentTourIndex,
    tours: newTours
  });
};

var root = function root(state, action) {
  switch (action.type) {
    case _actionTypes.NEXT_COACHMARK:
      {
        var currentTourIndex = state.tours[state.currentTourIndex];
        var currentCoachMarkIndex = (state.currentCoachMarkIndex + 1) % currentTourIndex.coachMarks.length;

        return handleNavigationAction(state, state.currentTourIndex, currentCoachMarkIndex);
      }
    case _actionTypes.PREV_COACHMARK:
      {
        var _currentTourIndex = state.tours[state.currentTourIndex];
        var coachMarkLength = _currentTourIndex.coachMarks.length;
        var _currentCoachMarkIndex = (state.currentCoachMarkIndex - 1) % coachMarkLength;

        _currentCoachMarkIndex = _currentCoachMarkIndex < 0 ? _currentCoachMarkIndex + coachMarkLength : _currentCoachMarkIndex;

        return handleNavigationAction(state, state.currentTourIndex, _currentCoachMarkIndex);
      }
    case _actionTypes.SET_CURRENT_COACHMARK:
      {
        return handleNavigationAction(state, state.currentTourIndex, action.payload);
      }
    case _actionTypes.MODIFY_COACHMARK_ATTRIBUTES:
      {
        var coachMarkId = action.payload.coachMarkId || state.currentCoachMarkIndex;
        var tourId = action.payload.tourId || state.currentTourIndex;
        var newCoachMark = _extends({}, state.tours[tourId].coachMarks[coachMarkId], action.payload.attributes);
        var newTour = _extends({}, state.tours[tourId], {
          coachMarks: state.tours[tourId].coachMarks.map(function (coachmark, id) {
            return id === coachMarkId ? newCoachMark : coachmark;
          })
        });
        var newState = _extends({}, state, {
          tours: state.tours.map(function (tour, id) {
            return id === tourId ? newTour : tour;
          })
        });

        return newState;
      }
    case _actionTypes.MODIFY_TOUR_ATTRIBUTES:
      {
        var _tourId = action.payload.tourId || state.currentTourIndex;
        var _newTour = _extends({}, state.tours[_tourId], action.payload.attributes);
        var newTours = state.tours.map(function (tour, id) {
          return id === _tourId ? _newTour : tour;
        });
        var _newState = _extends({}, state, {
          tours: newTours
        });

        return _newState;
      }
    case _actionTypes.REMOVE_COACHMARK_ATTRIBUTE:
      {
        var _coachMarkId = action.payload.coachMarkId || state.currentCoachMarkIndex;
        var _tourId2 = action.payload.tourId || state.currentTourIndex;

        var _state$tours$_tourId = state.tours[_tourId2].coachMarks[_coachMarkId],
            removed = _state$tours$_tourId[action.payload.attribute],
            _newCoachMark = _objectWithoutProperties(_state$tours$_tourId, [action.payload.attribute]);

        var _newTour2 = _extends({}, state.tours[_tourId2], {
          coachMarks: state.tours[_tourId2].coachMarks.map(function (coachmark, id) {
            return id === _coachMarkId ? _newCoachMark : coachmark;
          })
        });
        var _newState2 = _extends({}, state, {
          tours: state.tours.map(function (tour, id) {
            return id === _tourId2 ? _newTour2 : tour;
          })
        });

        return _newState2;
      }
    case _actionTypes.NEXT_TOUR:
      {
        var _currentTourIndex2 = (state.currentTourIndex + 1) % state.tours.length;

        return handleNavigationAction(state, _currentTourIndex2, 0);
      }
    case _actionTypes.PREV_TOUR:
      {
        var tourLength = state.tours.length;
        var _currentTourIndex3 = (state.currentTourIndex - 1) % tourLength;

        _currentTourIndex3 = _currentTourIndex3 < 0 ? _currentTourIndex3 + tourLength : _currentTourIndex3;

        return handleNavigationAction(state, _currentTourIndex3, 0);
      }
    case _actionTypes.REMOVE_COACHMARK:
      {
        var _currentCoachMarkIndex2 = state.currentCoachMarkIndex;

        var _tourId3 = action.tourId ? action.tourId : state.currentTourIndex;
        var _coachMarkId2 = action.coachMarkId ? action.coachMarkId : state.currentCoachMarkIndex;
        var activeTour = state.tours[_tourId3];
        var coachMarks = activeTour.coachMarks;

        var newCoachMarks = coachMarks.filter(function (coachMark, id) {
          return id !== _coachMarkId2;
        });
        var _newTour3 = _extends({}, activeTour, {
          coachMarks: newCoachMarks
        });
        var newCurrentCoachMarkIndex = _currentCoachMarkIndex2 > newCoachMarks.length - 1 ? newCoachMarks.length - 1 : _currentCoachMarkIndex2;
        var _newState3 = _extends({}, state, {
          currentCoachMarkIndex: newCurrentCoachMarkIndex,
          tours: state.tours.map(function (tour, id) {
            return id === _tourId3 ? _newTour3 : tour;
          })
        });

        return _newState3;
      }
    case _actionTypes.REMOVE_TOUR:
      {
        var _currentTourIndex4 = state.currentTourIndex;

        var _tourId4 = action.payload.tourId || _currentTourIndex4;
        var _newTours = state.tours.filter(function (tour, id) {
          return id !== _tourId4;
        });
        var maxIndex = _newTours.length === 0 ? 0 : _newTours.length - 1;
        var newCurrentTourIndex = _currentTourIndex4 > maxIndex ? maxIndex : _currentTourIndex4;
        var _newState4 = _extends({}, state, {
          currentTourIndex: newCurrentTourIndex,
          tours: _newTours
        });
        return _newState4;
      }
    case _actionTypes.SET_CURRENT_TOUR:
      {
        return handleNavigationAction(state, action.payload, 0);
      }
    case _actionTypes.SHOW_TOUR_GUIDE:
      {
        return _extends({}, state, {
          infoBoxIsVisible: true
        });
      }
    case _actionTypes.HIDE_TOUR_GUIDE:
      {
        return _extends({}, state, {
          infoBoxIsVisible: false
        });
      }
    case _actionTypes.TOUR_FINISHED:
      {
        return _extends({}, state, {
          infoBoxIsVisible: false
        });
      }
    case _actionTypes.ADD_COACHMARK:
      {
        var _tourId5 = action.payload.tourId || state.currentTourIndex;
        var tours = state.tours[_tourId5];
        var _coachMarks = tours.coachMarks;

        var _newCoachMark2 = {
          id: null,
          title: null,
          description: null,
          anchorPosition: 'bottom',
          align: 'center'
        };
        var _newTour4 = _extends({}, state.tours[_tourId5], {
          coachMarks: [].concat(_toConsumableArray(_coachMarks), [_extends({}, _newCoachMark2, action.payload.attributes)])
        });
        var _newState5 = _extends({}, state, {
          tours: state.tours.map(function (tour, id) {
            return id === _tourId5 ? _newTour4 : tour;
          })
        });

        return _newState5;
      }
    case _actionTypes.ADD_TOUR:
      {
        var _newTours2 = [].concat(_toConsumableArray(state.tours), [action.payload.attributes]);
        var _newState6 = _extends({}, state, {
          tours: _newTours2
        });

        return _newState6;
      }
    case _actionTypes.SET_STATE:
      {
        return _extends({}, state, action.payload);
      }
    case _actionTypes.COACH_MARK_POSITION_IS_ADJUSTED:
      {
        return _extends({}, state, {
          coachMarkPostionIsAdjusted: action.payload
        });
      }
    default:
      {
        return state;
      }
  }
};

var getCurrentTour = exports.getCurrentTour = function getCurrentTour(state) {
  return state.tours[state.currentTourIndex];
};
var getCurrentCoachMarks = exports.getCurrentCoachMarks = function getCurrentCoachMarks(state) {
  var currentTour = getCurrentTour(state);

  return currentTour ? currentTour.coachMarks : [];
};
var getCurrentCoachMark = exports.getCurrentCoachMark = function getCurrentCoachMark(state) {
  return getCurrentCoachMarks(state)[state.currentCoachMarkIndex];
};

exports.default = root;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PREV_COACHMARK = exports.PREV_COACHMARK = 'PREV_COACHMARK';
var NEXT_COACHMARK = exports.NEXT_COACHMARK = 'NEXT_COACHMARK';
var SET_CURRENT_COACHMARK = exports.SET_CURRENT_COACHMARK = 'SET_CURRENT_COACHMARK';
var PREV_TOUR = exports.PREV_TOUR = 'PREV_TOUR';
var NEXT_TOUR = exports.NEXT_TOUR = 'NEXT_TOUR';
var SET_CURRENT_TOUR = exports.SET_CURRENT_TOUR = 'SET_CURRENT_TOUR';
var SHOW_TOUR_GUIDE = exports.SHOW_TOUR_GUIDE = 'SHOW_TOUR_GUIDE';
var HIDE_TOUR_GUIDE = exports.HIDE_TOUR_GUIDE = 'HIDE_TOUR_GUIDE';
var TOUR_FINISHED = exports.TOUR_FINISHED = 'TOUR_FINISHED';
var MODIFY_COACHMARK_ATTRIBUTES = exports.MODIFY_COACHMARK_ATTRIBUTES = 'MODIFY_COACHMARK_ATTRIBUTES';
var MODIFY_TOUR_ATTRIBUTES = exports.MODIFY_TOUR_ATTRIBUTES = 'MODIFY_TOUR_ATTRIBUTES';
var REMOVE_COACHMARK_ATTRIBUTE = exports.REMOVE_COACHMARK_ATTRIBUTE = 'REMOVE_COACHMARK_ATTRIBUTE';
var ADD_COACHMARK = exports.ADD_COACHMARK = 'ADD_COACHMARK';
var ADD_TOUR = exports.ADD_TOUR = 'ADD_TOUR';
var REMOVE_COACHMARK = exports.REMOVE_COACHMARK = 'REMOVE_COACHMARK';
var REMOVE_TOUR = exports.REMOVE_TOUR = 'REMOVE_TOUR';
var SET_STATE = exports.SET_STATE = 'SET_STATE';
var TARGET_SELECTOR_IS_VALID = exports.TARGET_SELECTOR_IS_VALID = 'TARGET_SELECTOR_IS_VALID';
var PROGRESS_SELECTOR_IS_VALID = exports.PROGRESS_SELECTOR_IS_VALID = 'PROGRESS_SELECTOR_IS_VALID';
var COACH_MARK_POSITION_IS_ADJUSTED = exports.COACH_MARK_POSITION_IS_ADJUSTED = 'COACH_MARK_POSITION_IS_ADJUSTED';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(8);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(42);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(34);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(39);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(41);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(35);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _smoothscrollPolyfill = __webpack_require__(13);

var _smoothscrollPolyfill2 = _interopRequireDefault(_smoothscrollPolyfill);

var _defaultOptions = __webpack_require__(14);

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TourGuide = function TourGuide() {
  var _this = this;

  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaultOptions2.default;

  _classCallCheck(this, TourGuide);

  // poly fills for smooth scroll functionality
  _smoothscrollPolyfill2.default.polyfill();

  var appOptions = _extends({}, _defaultOptions2.default, options);
  var getRenderer = appOptions.getRenderer,
      getStore = appOptions.getStore;


  this.store = getStore(initialState);
  this.renderer = getRenderer(this.store);

  // alias action dispatchers on the root tourguide object
  Object.keys(this.store.actions).forEach(function (key) {
    _this[key] = _this.store.actions[key];
  });

  // add aliases for callback functions
  this.addCallback = this.store.addCallback;
  this.removeCallback = this.store.removeCallback;
  this.removeAllCallbacks = this.store.removeAllCallbacks;
};

if (window) {
  window.TourGuide = TourGuide;
}

exports.default = TourGuide;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* smoothscroll v0.4.0 - 2018 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill

  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (firstArg === null || (typeof firstArg === 'undefined' ? 'undefined' : _typeof(firstArg)) !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if ((typeof firstArg === 'undefined' ? 'undefined' : _typeof(firstArg)) === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      var isBody;

      do {
        el = el.parentNode;

        isBody = el === d.body;
      } while (isBody === false && isScrollable(el) === false);

      isBody = null;

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset,
        // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
    };

    // w.scrollBy
    w.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(this,
        // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined ? ~~arguments[0].left : _typeof(arguments[0]) !== 'object' ? ~~arguments[0] : this.scrollLeft,
        // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {
    // global
    polyfill();
  }
})();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getRenderer = __webpack_require__(15);

var _getRenderer2 = _interopRequireDefault(_getRenderer);

var _getStore = __webpack_require__(32);

var _getStore2 = _interopRequireDefault(_getStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getRenderer: _getRenderer2.default,
  getStore: _getStore2.default
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderer = __webpack_require__(16);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rendererRef = null;

var getRenderer = function getRenderer(store) {
  rendererRef = rendererRef || new _renderer2.default(store);

  return rendererRef;
};

exports.default = getRenderer;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _isOffscreen = __webpack_require__(4);

var _isOffscreen2 = _interopRequireDefault(_isOffscreen);

var _TourGuide = __webpack_require__(20);

var _TourGuide2 = _interopRequireDefault(_TourGuide);

var _TourGuideStaticStyles = __webpack_require__(25);

var _TourGuideStaticStyles2 = _interopRequireDefault(_TourGuideStaticStyles);

var _TourGuideStyles = __webpack_require__(26);

var _TourGuideStyles2 = _interopRequireDefault(_TourGuideStyles);

var _reducer = __webpack_require__(5);

var _getElement = __webpack_require__(31);

var _getElement2 = _interopRequireDefault(_getElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(_ref) {
    var subscribe = _ref.subscribe,
        getState = _ref.getState,
        dispatch = _ref.dispatch,
        actions = _ref.actions;

    _classCallCheck(this, Renderer);

    // Bind methods to class scope.
    this.render = this.render.bind(this);

    // Assign store methods to class.
    this.getState = getState;
    this.dispatch = dispatch;
    this.actions = actions;
    this.state = getState();
    this.hasMounted = false;
    this.targetElement = null;
    this.isScrolling = false;
    this.willRender = null;

    this.createTourGuideElements();
    this.createDomEventListeners();

    subscribe(this.render);
    this.render();
  }

  _createClass(Renderer, [{
    key: 'createTourGuideElements',
    value: function createTourGuideElements() {
      // Create tour guide elements and mount mithril components
      this.tourGuideElement = document.createElement('div');
      this.tourGuideStyles = document.createElement('style');
      this.tourGuideStaticStyles = document.createElement('style');

      this.tourGuideElement.className = '___tourguide';
      this.tourGuideStyles.id = '___tourguide-dynamic-styles';
      this.tourGuideStaticStyles.id = '___tourguide-static-styles';
      document.body.insertAdjacentElement('beforeend', this.tourGuideElement);
      document.head.insertAdjacentElement('beforeend', this.tourGuideStaticStyles);
      document.head.insertAdjacentElement('beforeend', this.tourGuideStyles);

      _mithril2.default.render(this.tourGuideStaticStyles, (0, _mithril2.default)(_TourGuideStaticStyles2.default));
    }
  }, {
    key: 'createDomEventListeners',
    value: function createDomEventListeners() {
      var _this = this;

      window.addEventListener('scroll', function () {
        return _this.render(false);
      }, true);
      window.addEventListener('resize', function () {
        return _this.render();
      }, true);

      // Mutation observers monitor the DOM for changes.
      // If there are changes a render is triggered.
      var mutationConfig = {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['style', 'class', 'id']
      };
      var mutationTarget = document;
      var mutationCallback = function mutationCallback() {
        if (_this.willRender) {
          clearTimeout(_this.willRender);
        }

        _this.willRender = setTimeout(function () {
          _this.render();
          _this.willRender = null;
        }, 10);
        // this.render()
      };
      var mutationObserver = new MutationObserver(mutationCallback);

      mutationObserver.observe(mutationTarget, mutationConfig);
    }

    /**
     * The render function triggers a render of the Tour Guide DOM elemets.
     * This is a three step process.
     * First the applicaton state is retrived from the store.
     * Second a reference to the target DOM element is retrieved.
     * Then target's bounds are established.
     * Third an attributes object is created.
     * This is used to pass the state and target variables to the view components.
     * Fourth the new attributes are passed to the view components.
     * The mithril render function is called.
     * @param {boolean} willAnimate - Determines if coach mark transitions will be animated or not.
     */

  }, {
    key: 'render',
    value: function render() {
      var willAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // remove old event handlers before the new state get propigated to the new views
      var nextCoachMark = this.actions.nextCoachMark;


      if (!nextCoachMark) {
        _mithril2.default.render(this.tourGuideElement, null);
        return;
      }

      if (this.tourGuideElement) {
        this.tourGuideElement.removeEventListener('transitionend', this.render);
      }

      var oldCoachMark = (0, _reducer.getCurrentCoachMark)(this.state);

      if (oldCoachMark) {
        var oldProgressOnDomEvent = oldCoachMark.progressOnDomEvent;


        if (oldProgressOnDomEvent) {
          var eventTarget = (0, _getElement2.default)(oldProgressOnDomEvent.targetSelector);

          if (eventTarget) {
            eventTarget.removeEventListener(oldProgressOnDomEvent.event, nextCoachMark);
          }
        }
      }

      // Retrieves and normailizes the state.
      var newState = this.getState();

      var isNewCoachMark = !this.hasMounted || newState.currentCoachMarkIndex !== this.state.currentCoachMarkIndex;

      this.state = newState;

      var _state = this.state,
          currentTourIndex = _state.currentTourIndex,
          currentCoachMarkIndex = _state.currentCoachMarkIndex,
          moreIsVisible = _state.moreIsVisible,
          infoBoxIsVisible = _state.infoBoxIsVisible,
          coachMarkPostionIsAdjusted = _state.coachMarkPostionIsAdjusted;


      var coachMarks = (0, _reducer.getCurrentCoachMarks)(this.state);

      if (!coachMarks || coachMarks.length === 0) {
        _mithril2.default.render(this.tourGuideElement, null);
        return;
      }

      var coachMark = (0, _reducer.getCurrentCoachMark)(this.state);

      if (!coachMark) {
        _mithril2.default.render(this.tourGuideElement, null);
        return;
      }

      this.targetElement = (0, _getElement2.default)(coachMark.targetSelector);

      // if coachMark or this.targetElement is undefined abort the render process
      if (!this.targetElement) {
        _mithril2.default.render(this.tourGuideElement, null);
        return;
      }

      var progressOnDomEvent = coachMark.progressOnDomEvent;


      if (progressOnDomEvent) {
        var _eventTarget = (0, _getElement2.default)(progressOnDomEvent.targetSelector);

        if (_eventTarget) {
          _eventTarget.addEventListener(progressOnDomEvent.event, nextCoachMark);
        }
      }

      var targetBounds = this.targetElement.getBoundingClientRect();
      var attrs = {
        actions: this.actions,
        coachMark: coachMark,
        coachMarkCount: coachMarks.length,
        coachMarkPostionIsAdjusted: coachMarkPostionIsAdjusted,
        coachMarks: coachMarks,
        currentCoachMarkIndex: currentCoachMarkIndex,
        infoBoxIsVisible: infoBoxIsVisible,
        moreIsVisible: moreIsVisible,
        targetElement: this.targetElement,
        targetBounds: targetBounds,
        willAnimate: willAnimate
      };
      var isTargetOffscreen = (0, _isOffscreen2.default)(targetBounds);

      // scroll target element into view if needed
      if (isTargetOffscreen && infoBoxIsVisible && !this.isScrolling) {
        // const scrollTarget = targetBounds.top - window.scrollY

        this.targetElement.scrollIntoView({ behavior: 'smooth' });
        this.isScrolling = true;
      }

      if (this.isScrolling && !isTargetOffscreen) {
        this.isScrolling = false;
      }

      // dispatch a custom dom event if the current coach mark has changed
      // this is useful for monitoring coach mark changes
      // it was implemented to make it easy to impliment analyitics
      if (infoBoxIsVisible && this.targetElement && isNewCoachMark) {
        this.tourGuideElement.dispatchEvent(new CustomEvent('CoachMarkDisplayed', {
          detail: {
            coachMarkIndex: attrs.currentCoachMarkIndex,
            tourIndex: currentTourIndex
          }
        }));
        this.hasMounted = true;
      }

      // add event listenders to the current targetElement
      this.targetElement.addEventListener('transitionend', this.render);

      // perform the render/rerender
      _mithril2.default.render(this.tourGuideElement, (0, _mithril2.default)(_TourGuide2.default, attrs));
      _mithril2.default.render(this.tourGuideStyles, (0, _mithril2.default)(_TourGuideStyles2.default, attrs));
    }
  }]);

  return Renderer;
}();

exports.default = Renderer;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(18);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(19)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _Shim = __webpack_require__(21);

var _Shim2 = _interopRequireDefault(_Shim);

var _InfoBox = __webpack_require__(22);

var _InfoBox2 = _interopRequireDefault(_InfoBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The root component for Tour Guide.
 */
var TourGuide = {
  view: function view(node) {
    return (0, _mithril2.default)('div', [
    // m(Pulse, node.attrs),
    (0, _mithril2.default)(_Shim2.default, node.attrs), (0, _mithril2.default)(_InfoBox2.default, node.attrs)]);
  }
};

exports.default = TourGuide;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _CSSSelectors = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tlCorner = 'M5,0A5,5,0,0,0,0,5V0Z';
var trCorner = 'M5,5A5,5,0,0,0,0,0H5Z';
var blCorner = 'M5,5A5,5,0,0,1,0,0V5Z';
var brCorner = 'M0,5A5,5,0,0,0,5,0V5Z';

var Shim = {
  view: function view(node) {
    if (!node.attrs.coachMark.dimBackground) {
      return null;
    }

    return [(0, _mithril2.default)(_CSSSelectors.SHIM), (0, _mithril2.default)(_CSSSelectors.SHIM_HOLE, (0, _mithril2.default)('svg' + _CSSSelectors.SHIM_HOLE_BORDER_TL, {
      width: 5,
      height: 5,
      viewBox: '0 0 5 5'
    }, (0, _mithril2.default)('path', {
      d: tlCorner
    })), (0, _mithril2.default)('svg' + _CSSSelectors.SHIM_HOLE_BORDER_TR, {
      width: 5,
      height: 5,
      viewBox: '0 0 5 5'
    }, (0, _mithril2.default)('path', {
      d: trCorner
    })), (0, _mithril2.default)('svg' + _CSSSelectors.SHIM_HOLE_BORDER_BL, {
      width: 5,
      height: 5,
      viewBox: '0 0 5 5'
    }, (0, _mithril2.default)('path', {
      d: blCorner
    })), (0, _mithril2.default)('svg' + _CSSSelectors.SHIM_HOLE_BORDER_BR, {
      width: 5,
      height: 5,
      viewBox: '0 0 5 5'
    }, (0, _mithril2.default)('path', {
      d: brCorner
    })), (0, _mithril2.default)('div'))];
  }
};

exports.default = Shim;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _CSSSelectors = __webpack_require__(2);

var _NavigationButtons = __webpack_require__(23);

var _NavigationButtons2 = _interopRequireDefault(_NavigationButtons);

var _validateTargetElement = __webpack_require__(24);

var _validateTargetElement2 = _interopRequireDefault(_validateTargetElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoBox = {
  view: function view(node) {
    var _node$attrs = node.attrs,
        coachMark = _node$attrs.coachMark,
        coachMarkCount = _node$attrs.coachMarkCount,
        currentCoachMarkIndex = _node$attrs.currentCoachMarkIndex,
        infoBoxIsVisible = _node$attrs.infoBoxIsVisible,
        targetElement = _node$attrs.targetElement,
        actions = _node$attrs.actions;
    var title = coachMark.title,
        description = coachMark.description,
        media = coachMark.media,
        navButtons = coachMark.navButtons;

    var isTargetElementValid = (0, _validateTargetElement2.default)(targetElement);

    if (!infoBoxIsVisible || !isTargetElementValid) {
      return null;
    }

    return (0, _mithril2.default)(_CSSSelectors.INFOBOX_WRAPPER, [(0, _mithril2.default)(_CSSSelectors.INFOBOX_CARD, [media && !media.error && media.src !== '' && (0, _mithril2.default)(_CSSSelectors.INFOBOX_IMAGE_WRAPPER, (0, _mithril2.default)('img' + _CSSSelectors.INFOBOX_IMAGE, {
      src: media.src
    })), (0, _mithril2.default)(_CSSSelectors.INFOBOX_MAIN, [(0, _mithril2.default)(_CSSSelectors.INFOBOX_HEADER, [(0, _mithril2.default)(_CSSSelectors.INFOBOX_TITLE, title), coachMarkCount > 1 && (0, _mithril2.default)(_CSSSelectors.INFOBOX_STEPS, currentCoachMarkIndex + 1 + ' of ' + coachMarkCount)]), (0, _mithril2.default)(_CSSSelectors.INFOBOX_DESCRIPTION, _mithril2.default.trust(description)), (0, _mithril2.default)(_CSSSelectors.INFOBOX_FOOTER, [(0, _mithril2.default)(_NavigationButtons2.default, {
      navButtons: navButtons,
      actions: actions,
      currentCoachMarkIndex: currentCoachMarkIndex,
      coachMarkCount: coachMarkCount
    })])])]), (0, _mithril2.default)(_CSSSelectors.INFOBOX_ARROW_BORDER), (0, _mithril2.default)(_CSSSelectors.INFOBOX_ARROW)]);
  }
};

exports.default = InfoBox;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _CSSSelectors = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationButtons = {
  view: function view(node) {
    var _node$attrs = node.attrs,
        actions = _node$attrs.actions,
        coachMarkCount = _node$attrs.coachMarkCount,
        currentCoachMarkIndex = _node$attrs.currentCoachMarkIndex,
        navButtons = _node$attrs.navButtons;
    var nextCoachMark = actions.nextCoachMark,
        hideTourGuide = actions.hideTourGuide,
        tourFinished = actions.tourFinished;

    var isLast = currentCoachMarkIndex + 1 === coachMarkCount;
    var onlyOne = coachMarkCount === 1;
    var renderedButtons = [];
    var hasDependantAction = !navButtons.includes('next');

    if (!onlyOne && !isLast) {
      renderedButtons.push((0, _mithril2.default)('button.' + _CSSSelectors.INFOBOX_BUTTON_SECONDARY, {
        onclick: hideTourGuide
      }, 'Skip Tour'));
    }

    if (!isLast && !hasDependantAction) {
      renderedButtons.push((0, _mithril2.default)('button.' + _CSSSelectors.INFOBOX_BUTTON_PRIMARY, {
        onclick: nextCoachMark
      }, 'Next'));
    }

    if (isLast) {
      renderedButtons.push((0, _mithril2.default)('button.' + _CSSSelectors.INFOBOX_BUTTON_PRIMARY, {
        onclick: tourFinished
      }, onlyOne ? 'OK' : 'Finish'));
    }

    return renderedButtons;
  }
};

exports.default = NavigationButtons;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var validateTargetElement = function validateTargetElement(targetElement) {
  if (!targetElement) return false;

  var bounds = targetElement.getBoundingClientRect();
  var targetArea = bounds.width * bounds.height;

  if (targetArea > 0) return true;

  return false;
};

exports.default = validateTargetElement;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CARD_BORDER_BACKGROUND = undefined;

var _CSSConfig = __webpack_require__(3);

var _CSSSelectors = __webpack_require__(2);

var CARD_BORDER_BACKGROUND = exports.CARD_BORDER_BACKGROUND = 'border-radius: ' + _CSSConfig.INFOBOX_BORDER_RADIUS + 'px;\n  background: white;\n  border: solid ' + _CSSConfig.INFOBOX_BORDER_WIDTH + 'px lightgrey;\n';

// TODO rename to TourGuideStaticStyles
// TODO remove pulse css
var InfoBoxStaticStyles = {
  view: function view() {
    return '\n    ' + _CSSSelectors.INFOBOX_CARD + ' {\n      font-family: adobe-clean, Arial, Helvetica;\n      font-size: 16px;\n      color: #4b4b4b;\n      width: ' + _CSSConfig.INFOBOX_WIDTH + 'px ;\n      overflow: visible;\n      ' + CARD_BORDER_BACKGROUND + '\n      transform: none;\n      text-transform: none;\n      text-align: none;\n      text-decoration: none;\n    }\n\n    ' + _CSSSelectors.INFOBOX_CARD + ' button {\n      outline: none;\n    }\n\n    ' + _CSSSelectors.INFOBOX_HEADER + ' {\n      display: flex;\n      margin: 24px 24px 0px 24px;\n    }\n\n    ' + _CSSSelectors.INFOBOX_CLOSE_BUTTON + ' {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      outline: none;\n      cursor: pointer;\n      border-radius: ' + _CSSConfig.INFOBOX_BORDER_RADIUS + 'px;\n      border-style: none;\n      background: transparent;\n      width: 100%;\n      height: 100%;\n      transition: background 125ms ease-out,\n          border-color 125ms ease-out,\n          color 125ms ease-out,\n          box-shadow 125ms ease-out;\n    }\n\n    ' + _CSSSelectors.INFOBOX_CLOSE_BUTTON_ACTIVE + ' {\n      background: ' + _CSSConfig.GREY_VERY_LIGHT + ';\n    }\n\n    ' + _CSSSelectors.INFOBOX_CLOSE_BUTTON + ':hover {\n      background: ' + _CSSConfig.GREY_LIGHT + ';\n    }\n\n    ' + _CSSSelectors.INFOBOX_CLOSE_BUTTON_ICON + ' {\n      fill: ' + _CSSConfig.GREY_MEDIUM + ';\n      width: 18px;\n      height: 18px;\n    }\n\n    ' + _CSSSelectors.INFOBOX_CARD + ' button {\n      text-decoration: none;\n      text-transform: none;\n      background: unset;\n    }\n\n    ' + _CSSSelectors.INFOBOX_BUTTON_PRIMARY + '{\n      display: inline-block;\n      box-sizing: border-box;\n      border-width: 2px;\n      border-style: solid;\n      border-radius: 16px;\n      border-color: #4b4b4b;\n      background: white;\n      color: ' + _CSSConfig.GREY_DARK + ';\n      height: 32px;\n      padding: 0 14px 1px;\n      font-family: inherit;\n      line-height: 1.75rem;\n      font-weight: bold;\n      font-size: 15px;\n      text-decoration: none;\n      -webkit-font-smoothing: antialiased;\n      vertical-align: top;\n      cursor: pointer;\n      outline: none !important;\n      transition: background 125ms ease-out,\n          border-color 125ms ease-out,\n          color 125ms ease-out,\n          box-shadow 125ms ease-out;\n    }\n\n    ' + _CSSSelectors.INFOBOX_BUTTON_PRIMARY + ':hover {\n      background-color: rgb(75, 75, 75);\n      border-color: rgb(75, 75, 75);\n      color: rgb(255, 255, 255);\n    }\n\n    ' + _CSSSelectors.INFOBOX_BUTTON_SECONDARY + '{\n      display: inline-block;\n      box-sizing: border-box;\n      border-style: none;\n      border-radius: 0px;\n      color: ' + _CSSConfig.GREY_LIGHT + ';\n      height: 32px;\n      margin: 0px;\n      padding: 0px;\n      font-family: inherit;\n      line-height: 1.75rem;\n      font-weight: bold;\n      font-size: 15px;\n      text-decoration: none;\n      -webkit-font-smoothing: antialiased;\n      vertical-align: top;\n      cursor: pointer;\n      outline: none;\n      margin-right: auto;\n      transition: background 125ms ease-out,\n          border-color 125ms ease-out,\n          color 125ms ease-out,\n          box-shadow 125ms ease-out;\n    }\n\n    ' + _CSSSelectors.INFOBOX_BUTTON_SECONDARY + ':hover {\n      color: ' + _CSSConfig.GREY_MEDIUM + ';\n    }\n\n    ' + _CSSSelectors.INFOBOX_TITLE + ' {\n      font-weight: bold;\n      flex: 1 1 auto;\n    }\n\n    ' + _CSSSelectors.INFOBOX_DESCRIPTION + ' {\n      font-family: adobe-clean, Arial, Helvetica;\n      margin: 16px 24px;\n      font-size: 14px;\n\n      line-height: 1.5em;\n    }\n\n    ' + _CSSSelectors.INFOBOX_DESCRIPTION + ' p {\n      font-family: unset;\n      font-size: 14px;\n      font-weight: normal;\n      font-family: unset;\n      letter-spacing: unset;\n      line-height: 1.5em;\n      color: unset;\n    }\n\n    ' + _CSSSelectors.INFOBOX_DESCRIPTION + ' ul {\n      list-style-position: inside;\n    }\n\n    ' + _CSSSelectors.INFOBOX_DESCRIPTION + ' ol {\n      list-style-position: inside;\n    }\n\n    ' + _CSSSelectors.INFOBOX_DESCRIPTION + ' strong {\n      font-family: unset;\n      font-weight: bold;\n      color: unset;\n    }\n\n    ' + _CSSSelectors.INFOBOX_DESCRIPTION + ' em {\n      font-family: unset;\n      font-style: italic;\n      color: unset;\n    }\n\n    ' + _CSSSelectors.INFOBOX_DESCRIPTION + ' a {\n      font-family: unset;\n      font-size: unset;\n    }\n\n    ' + _CSSSelectors.INFOBOX_FOOTER + ' {\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      margin:\n        0px\n        ' + _CSSConfig.INFOBOX_MARGIN + 'px\n        ' + _CSSConfig.INFOBOX_MARGIN + 'px\n        ' + _CSSConfig.INFOBOX_MARGIN + 'px;\n    }\n\n    ' + _CSSSelectors.INFOBOX_STEPS + ' {\n      color: ' + _CSSConfig.GREY_LIGHT + ';\n      display: flex;\n      font-size: 14px;\n      justify-content: flex-start;\n      align-items: center;\n      flex: 0 0 auto;\n    }\n\n    ' + _CSSSelectors.INFOBOX_MAIN + ' {\n      display: inline-block;\n      width: 100%;\n    }\n\n    ' + _CSSSelectors.INFOBOX_CLOSE_WRAPPER + ' {\n      flex: 0 0 auto;\n      position: relative;\n      width: 40px;\n      height: 40px;\n    }\n\n    ' + _CSSSelectors.INFOBOX_IMAGE + ' {\n      width: 100%;\n      height: 100%;\n      border-radius: ' + _CSSConfig.INFOBOX_BORDER_RADIUS + 'px ' + _CSSConfig.INFOBOX_BORDER_RADIUS + 'px 0px 0px;\n    }\n\n    ' + _CSSSelectors.INFOBOX_DIVIDER + ' {\n      border: solid 1px ' + _CSSConfig.GREY_LIGHT + ';\n      margin: 0px 10px;\n    }\n\n    .___tourguide {\n      position: fixed;\n      left: 0px;\n      top: 0px;\n      width: 0px;\n      height: 0px;\n      z-index: 20000;\n      transform: none;\n      all: revert;\n    }\n';
  }
};

exports.default = InfoBoxStaticStyles;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CSSConfig = __webpack_require__(3);

var _CSSSelectors = __webpack_require__(2);

var _calcPositions2 = __webpack_require__(27);

var _calcPositions3 = _interopRequireDefault(_calcPositions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrowStyles = function arrowStyles(anchorPosition, arrowPosition) {
  switch (anchorPosition) {
    case 'left':
      return '\n      border-width:\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px\n        0\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px;\n      border-color:\n        transparent\n        transparent\n        transparent\n        white;\n      left: calc(100% - 1px);\n      top: ' + arrowPosition.top + 'px;\n    ';
    case 'top':
      return '\n      border-width:\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px\n        0\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px;\n      border-color:\n        white\n        transparent\n        transparent\n        transparent;\n      left: ' + arrowPosition.left + 'px;\n      top: calc(100% - 1px);\n    ';
    case 'right':
      return '\n      border-width:\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px\n        0;\n      border-color:\n        transparent\n        white\n        transparent\n        transparent;\n      left: ' + (-_CSSConfig.INFOBOX_ARROW_SIZE + 1) + 'px;\n      top: ' + arrowPosition.top + 'px;\n    ';
    default:
      return '\n      border-width:\n        0\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px\n        ' + _CSSConfig.INFOBOX_ARROW_SIZE + 'px;\n      border-color:\n        transparent\n        transparent\n        white\n        transparent;\n      left: ' + arrowPosition.left + 'px;\n      top: ' + (-_CSSConfig.INFOBOX_ARROW_SIZE + 1) + 'px;\n    ';
  }
};

var arrowBorderStyles = function arrowBorderStyles(anchorPosition, arrowPosition) {
  switch (anchorPosition) {
    case 'left':
      return '\n      border-width:\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px\n        0\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px;\n      border-color:\n        transparent\n        transparent\n        transparent\n        ' + _CSSConfig.GREY_BORDER + ';\n      left: calc(100% - 1px);\n      top: ' + (arrowPosition.top - 2) + 'px;\n    ';
    case 'top':
      return '\n      border-width:\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px\n        0\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px;\n      border-color:\n        ' + _CSSConfig.GREY_BORDER + '\n        transparent\n        transparent\n        transparent;\n      left: ' + (arrowPosition.left - 2) + 'px;\n      top: calc(100% - 1px);\n    ';
    case 'right':
      return '\n      border-width:\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px\n        0;\n      border-color:\n        transparent\n        ' + _CSSConfig.GREY_BORDER + '\n        transparent\n        transparent;\n      left: ' + (-_CSSConfig.INFOBOX_ARROW_SIZE - 1) + 'px;\n      top: ' + (arrowPosition.top - 2) + 'px;\n    ';
    default:
      return '\n      border-width:\n        0\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px\n        ' + (_CSSConfig.INFOBOX_ARROW_SIZE + 2) + 'px;\n      border-color:\n        transparent\n        transparent\n        ' + _CSSConfig.GREY_BORDER + '\n        transparent;\n      left: ' + (arrowPosition.left - 2) + 'px;\n      top: ' + (-_CSSConfig.INFOBOX_ARROW_SIZE - 1) + 'px;\n    ';
  }
};

var generateClipMapPolygon = function generateClipMapPolygon(shimBounds) {
  var shimX = shimBounds.left;
  var shimY = shimBounds.top;
  var shimWidth = shimBounds.width;
  var shimHeight = shimBounds.height;

  return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ' + shimBounds.left + 'px ' + shimY + 'px, ' + shimX + 'px ' + (shimY + shimHeight) + 'px, ' + (shimX + shimWidth) + 'px ' + (shimY + shimHeight) + 'px, ' + (shimX + shimWidth) + 'px ' + shimY + 'px, ' + (shimX - 1) + 'px ' + shimY + 'px, 0% 0%)';
};

var actionDispatchTimer = void 0;

var TourGuideStyles = {
  view: function view(node) {
    var infoBoxElement = document.querySelector(_CSSSelectors.INFOBOX_MAIN);
    var _node$attrs = node.attrs,
        actions = _node$attrs.actions,
        coachMark = _node$attrs.coachMark,
        coachMarkCount = _node$attrs.coachMarkCount,
        coachMarkPostionIsAdjusted = _node$attrs.coachMarkPostionIsAdjusted,
        currentCoachMarkIndex = _node$attrs.currentCoachMarkIndex,
        targetElement = _node$attrs.targetElement,
        willAnimate = _node$attrs.willAnimate;


    if (!infoBoxElement || !targetElement) {
      return null;
    }
    var media = coachMark.media;

    var rawInfoBoxBounds = infoBoxElement.getBoundingClientRect();
    var infoBoxBounds = _extends({}, rawInfoBoxBounds, {
      height: rawInfoBoxBounds.height + (media ? media.height : 0) + _CSSConfig.INFOBOX_BORDER_WIDTH * 2,
      width: rawInfoBoxBounds.width + _CSSConfig.INFOBOX_BORDER_WIDTH * 2
    });

    var targetBounds = targetElement.getBoundingClientRect();
    var shimBounds = {
      left: Math.round(targetBounds.left - _CSSConfig.SHIM_MARGIN),
      top: Math.round(targetBounds.top - _CSSConfig.SHIM_MARGIN),
      width: Math.round(targetBounds.width + _CSSConfig.SHIM_MARGIN + _CSSConfig.SHIM_MARGIN),
      height: Math.round(targetBounds.height + _CSSConfig.SHIM_MARGIN + _CSSConfig.SHIM_MARGIN)
    };
    var data = _extends({}, coachMark, {
      count: coachMarkCount,
      currentId: currentCoachMarkIndex,
      infoBoxBounds: infoBoxBounds,
      targetBounds: targetBounds
    });

    var _calcPositions = (0, _calcPositions3.default)(data),
        arrowPosition = _calcPositions.arrowPosition,
        infoBoxPosition = _calcPositions.infoBoxPosition,
        anchorPosition = _calcPositions.anchorPosition,
        wasAdjusted = _calcPositions.wasAdjusted;

    var animationSpeed = willAnimate ? _CSSConfig.INFOBOX_ANIMATION_SPEED : 0;

    // dispatch actions to update the status of
    // wether or not the coach mark postion needed to be adjusted
    // this is one here because the postion of the coach mark needed
    // to be calculated in order for this be determined
    if (coachMarkPostionIsAdjusted !== wasAdjusted) {
      clearTimeout(actionDispatchTimer);

      // this action dispatch is debounced to reduce render calls.
      actionDispatchTimer = setTimeout(function () {
        actions.coachMarkPostionIsAdjusted(wasAdjusted);
      }, 50);
    }

    return '\n      ' + _CSSSelectors.INFOBOX_WRAPPER + ' {\n        position: fixed;\n        left: ' + infoBoxPosition.left + 'px;\n        top: ' + infoBoxPosition.top + 'px;\n        filter: drop-shadow(0 1px 4px rgba(0,0,0,0.1));\n        transition:\n          left ' + animationSpeed + ',\n          top ' + animationSpeed + ';\n      }\n\n      ' + _CSSSelectors.INFOBOX_IMAGE_WRAPPER + ' {\n        width: 278px;\n        margin: 1px;\n        transition:\n          width ' + animationSpeed + ',\n          height ' + animationSpeed + ';\n      }\n\n      ' + _CSSSelectors.INFOBOX_IMAGE_WRAPPER + ' img {\n        margin: -1px;\n      }\n\n      ' + _CSSSelectors.INFOBOX_ARROW_BORDER + ' {\n        background: transparent;\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-style: solid;\n        ' + arrowBorderStyles(anchorPosition, arrowPosition) + '\n      }\n\n      ' + _CSSSelectors.INFOBOX_ARROW + ' {\n        background: transparent;\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-style: solid;\n        ' + arrowStyles(anchorPosition, arrowPosition) + '\n      }\n\n      ' + _CSSSelectors.SHIM + ' {\n        display: block;\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        background: black;\n        opacity: ' + (data.dimBackground ? 0.65 : 0) + ';\n        pointer-events: ' + (data.dimBackground ? 'auto' : 'none') + ';\n        top: 0px;\n        left: 0px;\n        clip-path: ' + generateClipMapPolygon(shimBounds) + ';\n        transition: clip-path ' + animationSpeed + ', opacity ' + animationSpeed + ';\n      }\n\n      ' + _CSSSelectors.SHIM_HOLE + ' {\n        display: block;\n        position: fixed;\n        left: ' + shimBounds.left + 'px;\n        top: ' + shimBounds.top + 'px;\n        width: ' + shimBounds.width + 'px;\n        height: ' + shimBounds.height + 'px;\n        pointer-events: none;\n        opacity: ' + (data.dimBackground ? 0.65 : 0) + ';\n        transition: top ' + animationSpeed + ', left ' + animationSpeed + ', width ' + animationSpeed + ', height ' + animationSpeed + ', opacity ' + animationSpeed + ';\n      }\n\n      ' + _CSSSelectors.SHIM_HOLE_BORDER_TL + ' {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        fill: black;\n      }\n\n      ' + _CSSSelectors.SHIM_HOLE_BORDER_TR + ' {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        fill: black;\n      }\n\n      ' + _CSSSelectors.SHIM_HOLE_BORDER_BL + ' {\n        position: absolute;\n        bottom: 0px;\n        left: 0px;\n        fill: black;\n      }\n\n      ' + _CSSSelectors.SHIM_HOLE_BORDER_BR + ' {\n        position: absolute;\n        bottom: 0px;\n        right: 0px;\n        fill: black;\n      }';
  }
};

exports.default = TourGuideStyles;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _calcInfoBoxArrowPosition = __webpack_require__(28);

var _calcInfoBoxArrowPosition2 = _interopRequireDefault(_calcInfoBoxArrowPosition);

var _calcInfoBoxPosition = __webpack_require__(29);

var _calcInfoBoxPosition2 = _interopRequireDefault(_calcInfoBoxPosition);

var _calcPositionOffset = __webpack_require__(30);

var _calcPositionOffset2 = _interopRequireDefault(_calcPositionOffset);

var _isOffscreen = __webpack_require__(4);

var _isOffscreen2 = _interopRequireDefault(_isOffscreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anchorPositions = ['top', 'right', 'bottom', 'left'];
var alignments = ['start', 'center', 'end'];

var calcPositions = function calcPositions(data) {
  var retryCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var arrowPosition = (0, _calcInfoBoxArrowPosition2.default)(data);
  var infoBoxPosition = (0, _calcInfoBoxPosition2.default)(data);
  var offset = (0, _calcPositionOffset2.default)(data, infoBoxPosition, arrowPosition);
  var willRetry = (0, _isOffscreen2.default)(infoBoxPosition);
  var positions = {
    anchorPosition: data.anchorPosition,
    arrowPosition: _extends({}, arrowPosition, {
      left: arrowPosition.left + offset.left,
      top: arrowPosition.top + offset.top
    }),
    infoBoxPosition: _extends({}, infoBoxPosition, {
      left: infoBoxPosition.left - offset.left,
      top: infoBoxPosition.top - offset.top
    }),
    wasAdjusted: retryCount > 0
  };

  if (retryCount < 12 && willRetry) {
    var anchorIndex = anchorPositions.indexOf(data.anchorPosition);
    var alignmentIndex = alignments.indexOf(data.align);
    var newAnchorPosition = anchorPositions[(anchorIndex + 1) % anchorPositions.length];
    var newAlignment = retryCount % 4 === 3 ? alignments[(alignmentIndex + 1) % alignments.length] : data.align;
    var newData = _extends({}, data, {
      align: newAlignment,
      anchorPosition: newAnchorPosition
    });

    positions = calcPositions(newData, retryCount + 1);
  }

  return positions;
};

exports.default = calcPositions;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSConfig = __webpack_require__(3);

var calcHorizontalPosition = function calcHorizontalPosition(_ref) {
  var targetBounds = _ref.targetBounds,
      infoBoxBounds = _ref.infoBoxBounds,
      align = _ref.align;

  switch (align) {
    case 'end':
      {
        return infoBoxBounds.width - _CSSConfig.INFOBOX_ARROW_SIZE - targetBounds.width * 0.5;
      }
    case 'center':
      {
        return infoBoxBounds.width * 0.5 - _CSSConfig.INFOBOX_ARROW_SIZE;
      }
    default:
      {
        return -_CSSConfig.INFOBOX_ARROW_SIZE + targetBounds.width * 0.5;
      }
  }
};

var calcVerticalPosition = function calcVerticalPosition(_ref2) {
  var targetBounds = _ref2.targetBounds,
      infoBoxBounds = _ref2.infoBoxBounds,
      align = _ref2.align;

  switch (align) {
    case 'end':
      {
        return infoBoxBounds.height - _CSSConfig.INFOBOX_ARROW_SIZE - targetBounds.height * 0.5;
      }
    case 'center':
      {
        return infoBoxBounds.height * 0.5 - _CSSConfig.INFOBOX_ARROW_SIZE;
      }
    default:
      {
        return -_CSSConfig.INFOBOX_ARROW_SIZE + targetBounds.height * 0.5;
      }
  }
};

var calcInfoBoxArrowPosition = function calcInfoBoxArrowPosition(data) {
  var anchorPosition = data.anchorPosition,
      infoBoxBounds = data.infoBoxBounds;


  switch (anchorPosition) {
    case 'left':
      {
        return {
          height: _CSSConfig.INFOBOX_ARROW_SIZE_DOUBLE,
          left: infoBoxBounds.width - 1,
          top: calcVerticalPosition(data),
          width: _CSSConfig.INFOBOX_ARROW_SIZE
        };
      }
    case 'top':
      {
        return {
          height: _CSSConfig.INFOBOX_ARROW_SIZE,
          left: calcHorizontalPosition(data),
          top: infoBoxBounds.height - 1,
          width: _CSSConfig.INFOBOX_ARROW_SIZE_DOUBLE
        };
      }
    case 'right':
      {
        return {
          height: _CSSConfig.INFOBOX_ARROW_SIZE_DOUBLE,
          left: -_CSSConfig.INFOBOX_ARROW_SIZE + 1,
          top: calcVerticalPosition(data),
          width: _CSSConfig.INFOBOX_ARROW_SIZE
        };
      }
    default:
      {
        return {
          height: _CSSConfig.INFOBOX_ARROW_SIZE,
          left: calcHorizontalPosition(data),
          top: -_CSSConfig.INFOBOX_ARROW_SIZE + 1,
          width: _CSSConfig.INFOBOX_ARROW_SIZE_DOUBLE
        };
      }
  }
};

exports.default = calcInfoBoxArrowPosition;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSConfig = __webpack_require__(3);

var calcAlignedHorizontalPosition = function calcAlignedHorizontalPosition(_ref) {
  var targetBounds = _ref.targetBounds,
      infoBoxBounds = _ref.infoBoxBounds,
      align = _ref.align;

  switch (align) {
    case 'end':
      {
        return targetBounds.right - infoBoxBounds.width;
      }
    case 'center':
      {
        return targetBounds.right - targetBounds.width * 0.5 - infoBoxBounds.width * 0.5;
      }
    default:
      {
        return targetBounds.left;
      }
  }
};

var calcAlignedVerticalPosition = function calcAlignedVerticalPosition(_ref2) {
  var targetBounds = _ref2.targetBounds,
      infoBoxBounds = _ref2.infoBoxBounds,
      align = _ref2.align;

  switch (align) {
    case 'end':
      {
        return targetBounds.bottom - infoBoxBounds.height;
      }
    case 'center':
      {
        return targetBounds.bottom - targetBounds.height * 0.5 - infoBoxBounds.height * 0.5;
      }
    default:
      {
        return targetBounds.top;
      }
  }
};

var calcInfoBoxPosition = function calcInfoBoxPosition(data) {
  var targetBounds = data.targetBounds,
      infoBoxBounds = data.infoBoxBounds,
      anchorPosition = data.anchorPosition;


  switch (anchorPosition) {
    case 'left':
      {
        return {
          height: infoBoxBounds.height,
          left: targetBounds.left - infoBoxBounds.width - _CSSConfig.INFOBOX_ARROW_SIZE - _CSSConfig.INFOBOX_PLACEMENT_GAP,
          top: calcAlignedVerticalPosition(data),
          width: infoBoxBounds.width
        };
      }
    case 'top':
      {
        return {
          height: infoBoxBounds.height,
          left: calcAlignedHorizontalPosition(data),
          top: targetBounds.top - infoBoxBounds.height - _CSSConfig.INFOBOX_ARROW_SIZE - _CSSConfig.INFOBOX_PLACEMENT_GAP,
          width: infoBoxBounds.width
        };
      }
    case 'right':
      {
        return {
          height: infoBoxBounds.height,
          left: targetBounds.right + _CSSConfig.INFOBOX_ARROW_SIZE + _CSSConfig.INFOBOX_PLACEMENT_GAP,
          top: calcAlignedVerticalPosition(data),
          width: infoBoxBounds.width
        };
      }
    default:
      {
        return {
          height: infoBoxBounds.height,
          left: calcAlignedHorizontalPosition(data),
          top: targetBounds.bottom + _CSSConfig.INFOBOX_ARROW_SIZE + _CSSConfig.INFOBOX_PLACEMENT_GAP,
          width: infoBoxBounds.width
        };
      }
  }
};

exports.default = calcInfoBoxPosition;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSConfig = __webpack_require__(3);

var calcHorizontalOffset = function calcHorizontalOffset(infoBoxBounds, arrowPosition) {
  var min = _CSSConfig.INFOBOX_BORDER_RADIUS_DOUBLE;
  var max = infoBoxBounds.width - _CSSConfig.INFOBOX_ARROW_SIZE * 2 - _CSSConfig.INFOBOX_BORDER_RADIUS_DOUBLE;
  var offset = 0;

  if (arrowPosition.left < min) {
    offset = min - arrowPosition.left;
  }
  if (arrowPosition.left > max) {
    offset = max - arrowPosition.left;
  }

  return offset;
};

var calcVerticalOffset = function calcVerticalOffset(infoBoxBounds, arrowPosition) {
  var min = _CSSConfig.INFOBOX_BORDER_RADIUS_DOUBLE;
  var max = infoBoxBounds.height - _CSSConfig.INFOBOX_ARROW_SIZE * 2 - _CSSConfig.INFOBOX_BORDER_RADIUS_DOUBLE;
  var offset = 0;

  if (arrowPosition.top < min) {
    offset = min - arrowPosition.top;
  }
  if (arrowPosition.top > max) {
    offset = max - arrowPosition.top;
  }

  return offset;
};

var calcPositionOffset = function calcPositionOffset(data, position, arrowPosition) {
  var infoBoxBounds = data.infoBoxBounds,
      anchorPosition = data.anchorPosition;


  if (anchorPosition === 'top' || anchorPosition === 'bottom') {
    var _offset = calcHorizontalOffset(infoBoxBounds, arrowPosition);

    return {
      left: _offset,
      top: 0
    };
  }

  var offset = calcVerticalOffset(infoBoxBounds, arrowPosition);

  return {
    left: 0,
    top: offset
  };
};

exports.default = calcPositionOffset;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * The "querySelectorAll" function wrapped in a try catch statement.
 * It was wrapped in a try catch because querySelectorAll throws and error if a valid
 * match is not found.
 * @param {Element} context - The DOM Element that querySelectorAll will be called on.
 * @param {string} statement - A standart CSS selector.
 */
var selectElement = function selectElement(context, statement) {
  try {
    return [].slice.call(context.querySelectorAll(statement));
  } catch (err) {
    return [];
  }
};

/**
 * Evaluates standard CSS selectors and "@" selectors.
 * @param {Element} element - The DOM Element that the selectors will be matched against.
 * @param {string} selector - A standard CSS selector or "@" selector
 * @returns {}
 */
var validateSelector = function validateSelector(element, selector) {
  var isAttributeSelector = /^@.+=.+/;

  if (isAttributeSelector.test(selector)) {
    var _selector$replace$spl = selector.replace(/^@/, '').split(/=/),
        _selector$replace$spl2 = _slicedToArray(_selector$replace$spl, 2),
        attribute = _selector$replace$spl2[0],
        regex = _selector$replace$spl2[1];

    var tester = new RegExp(regex);

    if (tester.test(String(element[attribute]))) {
      return element;
    }

    return null;
  }

  return selectElement(element, selector)[0];
};

/**
 * Evaluates a selector split on the "&" selector.
 * @param {Element} element - The DOM Element that the selectors will be matched against.
 * @param {string[]} testSelectors - An array of selectors split on "&".
 * @returns {boolean} - True if the selector is valid.
 */
var validateSelectorArray = function validateSelectorArray(element, testSelectors) {
  if (element && testSelectors.length === 0) {
    return true;
  }

  var _testSelectors = _toArray(testSelectors),
      firstSelector = _testSelectors[0],
      trimmedSelector = _testSelectors.slice(1);

  var testElement = validateSelector(element, firstSelector);

  if (testElement) {
    return validateSelectorArray(testElement, trimmedSelector);
  }

  return false;
};

/**
 * A function used to evaluate selectors split on the "|" selector.
 * @param {string[]} selectors - A selector that was split on "|".
 * @returns {Element||null[]} - An array containing either a DOM element or a null value.
 */
var evaluateSelectors = function evaluateSelectors(selectors) {
  var _selectors$split$filt = selectors.split(/&/).filter(function (e) {
    return e !== '';
  }),
      _selectors$split$filt2 = _toArray(_selectors$split$filt),
      firstSelector = _selectors$split$filt2[0],
      trimmedSelectors = _selectors$split$filt2.slice(1);

  var rootElements = selectElement(document, firstSelector);
  var validElements = rootElements.filter(function (element) {
    return validateSelectorArray(element, trimmedSelectors);
  });

  return validElements[0];
};

/**
 * A helper function for getting a reference to a page elements based on CSS selectors
 * or Tour Guide's exetended CSS selectors. For more information on how Tour Guide extends
 * CSS selectors visit the [CSS Selctor Documentation](https://git.corp.adobe.com/OMEGA/tour_guide#css-selectors).
 * @param {string} selector - A CSS selector or Tour Guide selector.
 * @returns {Element||null} - A reference to the DOM element matching the selctor.
 */
var getTargetElement = function getTargetElement(selector) {
  if (!selector) return null;

  var splitSelectors = selector.split(/\|/);
  var evaluatedStatements = splitSelectors.map(evaluateSelectors);

  return evaluatedStatements.find(function (e) {
    return e !== undefined;
  });
};

exports.default = getTargetElement;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(33);

var _queryString = __webpack_require__(48);

var _queryString2 = _interopRequireDefault(_queryString);

var _actions = __webpack_require__(51);

var actionCreators = _interopRequireWildcard(_actions);

var _reducer = __webpack_require__(5);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint no-underscore-dangle: 0 */

var defaultState = {
  currentCoachMarkIndex: 0,
  currentTourIndex: 0,
  infoBoxIsVisible: false,
  tours: [{
    title: null,
    coachMarks: []
  }],
  coachMarkPostionIsAdjusted: false
};

var store = null;

var stateFromQueryString = function stateFromQueryString() {
  var _queryString$parse = _queryString2.default.parse(window.location.search),
      showTour = _queryString$parse.showTour,
      showCoachMark = _queryString$parse.showCoachMark;

  var queryState = {};

  if (showTour) {
    var value = parseInt(showTour, 10);

    if (!isNaN(value)) {
      queryState.currentTourIndex = value;
      queryState.infoBoxIsVisible = true;
    }
  }

  if (showCoachMark) {
    var _value = parseInt(showCoachMark, 10);

    if (!isNaN(_value)) {
      queryState.currentCoachMarkIndex = _value;
      queryState.infoBoxIsVisible = true;
    }
  }

  return queryState;
};

// wraps action creators in a dispatch call
var wrapDispatch = function wrapDispatch(actions, dispatch) {
  return Object.keys(actions).map(function (key) {
    return _defineProperty({}, key, function () {
      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      return dispatch(actions[key].apply(null, params));
    });
  }).reduce(function (prev, current) {
    return _extends({}, prev, current);
  }, {});
};

/**
 * This function determines what the app's initial state will be.
 * The apps's initial state can come from state passed from the init() function and URL parameters.
 * It then returns an instance of the redux store with an 'actions' parameter.
 * The 'actions' parameter contains all the action creators wrapped in a dispatch statement.
 * This makes passing action dispatcher to the view components easier.
 * @param {*} stateFromConfig - The initial application state.
 * @returns {*} - An instance of a redux store with an 'actions' parameter
 */
var getStore = function getStore() {
  var stateFromConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var callbackConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!store) {
    // TODO validate callbackConfig
    var callbacks = callbackConfig;
    var initialState = _extends({}, defaultState, stateFromConfig, stateFromQueryString());
    var callbackMiddleware = function callbackMiddleware() {
      return function (next) {
        return function (action) {
          if (callbacks[action.type]) {
            callbacks[action.type].forEach(function (cb) {
              cb(action);
            });
          }
          next(action);
        };
      };
    };
    var composeMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

    store = (0, _redux.createStore)(_reducer2.default, initialState, composeMiddleware((0, _redux.applyMiddleware)(callbackMiddleware)));

    var _store = store,
        dispatch = _store.dispatch;


    store.actions = wrapDispatch(actionCreators, dispatch);

    /**
     * Add a callback that will respond to a redux action.
     * @param {string} - The action type that the callback will respond to.
     * @param {function} - The callback that will be executed.
     */
    store.addCallback = function (action, cb) {
      if (!callbacks[action]) {
        callbacks[action] = [];
      }

      callbacks[action].push(cb);
    };

    /**
     * Removes a callback from a redux event.
     * @param {string} action - The action type that will have a callback removed.
     * @param {functioin} cb - The callback function that will be removed.
     */
    store.removeCallback = function (action, cb) {
      if (callbacks[action]) {
        callbacks[action] = callbacks[action].filter(function (callback) {
          return callback !== cb;
        });
      }
    };

    /**
     * Removes all callbacks from an action.
     * @param {string} action - The action type that will have all callbacks removed.
     */
    store.removeAllCallbacks = function (action) {
      if (callbacks[action]) {
        delete callbacks[action];
      }
    };
  }

  return store;
};

exports.default = getStore;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(7);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(45);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(46);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(47);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(11);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(10);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(9);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(37);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(38);

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(36);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(9);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(40);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(44);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = (0, _ponyfill2.default)(root);
exports.default = result;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(43)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(7);

var _isPlainObject = __webpack_require__(8);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(10);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {}

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(11);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var strictUriEncode = __webpack_require__(49);
var decodeComponent = __webpack_require__(50);

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [encode(key, options), '[', index, ']'].join('') : [encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('');
			};
		case 'bracket':
			return function (key, value) {
				return value === null ? [encode(key, options), '[]'].join('') : [encode(key, options), '[]=', encode(value, options)].join('');
			};
		default:
			return function (key, value) {
				return value === null ? encode(key, options) : [encode(key, options), '=', encode(value, options)].join('');
			};
	}
}

function parserForArrayFormat(options) {
	var result = void 0;

	switch (options.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};
		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(input) {
	var queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return input.slice(queryStart + 1);
}

function parse(input, options) {
	options = Object.assign({ decode: true, arrayFormat: 'none' }, options);

	var formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	var ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = input.split('&')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var param = _step.value;

			var _param$replace$split = param.replace(/\+/g, ' ').split('='),
			    _param$replace$split2 = _slicedToArray(_param$replace$split, 2),
			    key = _param$replace$split2[0],
			    value = _param$replace$split2[1];

			// Missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters


			value = value === undefined ? null : decode(value, options);

			formatter(decode(key, options), value, ret);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return Object.keys(ret).sort().reduce(function (result, key) {
		var value = ret[key];
		if (Boolean(value) && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, options) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	options = Object.assign(defaults, options);

	if (options.sort === false) {
		options.sort = function () {};
	}

	var formatter = encoderForArrayFormat(options);

	return obj ? Object.keys(obj).sort(options.sort).map(function (key) {
		var value = obj[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			var result = [];

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = value.slice()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var value2 = _step2.value;

					if (value2 === undefined) {
						continue;
					}

					result.push(formatter(key, value2, result.length));
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return result.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (input, options) {
	return {
		url: input.split('?')[0] || '',
		query: parse(extract(input), options)
	};
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (x) {
    return '%' + x.charCodeAt(0).toString(16).toUpperCase();
  });
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + (typeof encodedURI === 'undefined' ? 'undefined' : _typeof(encodedURI)) + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coachMarkPostionIsAdjusted = exports.targetSelectorIsValid = exports.progressSelectorIsValid = exports.tourFinished = exports.setState = exports.modifyTourAttributes = exports.modifyCoachMarkAttributes = exports.removeCoachMarkAttribute = exports.showTourGuide = exports.hideTourGuide = exports.removeTour = exports.removeCoachMark = exports.setCurrentTour = exports.prevTour = exports.nextTour = exports.setCurrentCoachMark = exports.prevCoachMark = exports.nextCoachMark = exports.addTour = exports.addCoachMark = undefined;

var _actionTypes = __webpack_require__(6);

/**
 * This action adds a new coach mark to the tour.
 * The new coach mark will be appeneded to the end of the tour.
 * @param {CoachMarkProperties} properties - An object that defines the coach mark properties.
 * @param {number=} tourId - An integer, the index of the tour that the coach mark will be added to.
 * @returns {Action} - The addCoachMark action that was just crated.
 */
var addCoachMark = exports.addCoachMark = function addCoachMark(attributes) {
  var tourId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    type: _actionTypes.ADD_COACHMARK,
    payload: {
      attributes: attributes,
      tourId: tourId
    }
  };
};

/**
 * This actions adds a to tour.
 * @param {*} attributes - The new tour's attributes.
 * @returns {Action}
 */
/**
 * @module actions
 */

/**
 * @typedef {Object} CoachMarkMedia
 * @property {string} src - The url to the coach mark's media file.
 * @property {number} width - The width of the media in pixels.
 * @property {number} height - The height of the media in pixels.
 */

/**
  * A plain javaScript object that specificies the properties of a coach mark.
  * @typedef {Object} CoachMarkProperties
  * @property {string|undefined} targetSelector - A css selector for the page element
  * that the coach mark will target.
  * @property {string|undefined} title - The coach mark's title.
  * @property {string|undefined} description - The coach mark's description.
  * @property {string|undefined} anchorPosition - The coach mark's anchor position.
  * @property {string|undefined} align - The alignment of the coach mark.
  * @property {CoachMarkMedia|undefined} media - The coachmark's media.
  */

/**
 * A flux standard action
 * @typedef {Object} Action
 * @property {string} type - The action's type.
 * @property {*} payload - The action's payload.
 */

var addTour = exports.addTour = function addTour(attributes) {
  return {
    type: _actionTypes.ADD_TOUR,
    payload: {
      attributes: attributes
    }
  };
};

/**
 * This triggers the next coach mark.
 * If the current coach mark is the last coach mark in the tour,
 * the tour will proceed at the first coach mark.
 * @returns {Action}
 */
var nextCoachMark = exports.nextCoachMark = function nextCoachMark() {
  return {
    type: _actionTypes.NEXT_COACHMARK
  };
};

/**
 * This action triggers the previous coach mark.
 * If the current coach mark is the first coach mark in the tour,
 * the tour will proceed at the last coach mark.
 * @returns {Action}
 */
var prevCoachMark = exports.prevCoachMark = function prevCoachMark() {
  return {
    type: _actionTypes.PREV_COACHMARK
  };
};

/**
 * This action triggers the specified coach mark.
 * The provided coach mark id must be valid or an error will be thrown.
 * @param {number} id An integer specifying the index of the coach mark
 * that will be made current.
 * @returns {Action}
 */
var setCurrentCoachMark = exports.setCurrentCoachMark = function setCurrentCoachMark(id) {
  return {
    payload: id,
    type: _actionTypes.SET_CURRENT_COACHMARK
  };
};

/**
 * This action triggers the next available tour.
 * The next tour will start at the first coach mark.
 * @returns {Action}
 */
var nextTour = exports.nextTour = function nextTour() {
  return {
    type: _actionTypes.NEXT_TOUR
  };
};

/**
 * This action triggers the previous tour.
 * The tour will start at the first coach mark.
 * @returns {Action}
 */
var prevTour = exports.prevTour = function prevTour() {
  return {
    type: _actionTypes.PREV_TOUR
  };
};

/**
 * This action activates the specified tour.
 * The tour will start at the first coach mark.
 * The provided tour id must be valid or an error will be thrown.
 * @param {number} id - An integer specifying the index of the tour that will be made active.
 * @returns {Action}
 */
var setCurrentTour = exports.setCurrentTour = function setCurrentTour(id) {
  return {
    payload: id,
    type: _actionTypes.SET_CURRENT_TOUR
  };
};

/**
 * This action removes the specified coach mark from the specified tour.
 * @param {number} coachMarkId - An integer specifying the index of the coach mark to be removed.
 * If not provided, the current coach mark will be used.
 * @param {number} tourId - An integer specifying the index of the tour containing the coach
 * mark to be removed.  If not provided, the current tour will be used.
 * @returns {Action}
 */
var removeCoachMark = exports.removeCoachMark = function removeCoachMark() {
  var coachMarkId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var tourId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    payload: {
      coachMarkId: coachMarkId,
      tourId: tourId
    },
    type: _actionTypes.REMOVE_COACHMARK
  };
};

/**
 * This action removes the specified tour.
 * @param {integer} tourId - The index of the tour to be removed.
 * If not provided, the current tour will be removed.
 * @returns {Action}
 */
var removeTour = exports.removeTour = function removeTour() {
  var tourId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    payload: {
      tourId: tourId
    },
    type: _actionTypes.REMOVE_TOUR
  };
};

/**
 * This action hides the tour guide UI.
 * If the UI is already hidden, nothing will happen.
 * @returns {Action}
 */
var hideTourGuide = exports.hideTourGuide = function hideTourGuide() {
  return {
    type: _actionTypes.HIDE_TOUR_GUIDE
  };
};

/**
 * This action shows the tour guide UI.
 * If the UI is already visible, nothing will happen.
 * @returns {Action}
 */
var showTourGuide = exports.showTourGuide = function showTourGuide() {
  return {
    type: _actionTypes.SHOW_TOUR_GUIDE
  };
};

/**
 * This action removes an attribute from a coach mark.  If a required attribute is removed,
 * and error will be thrown.
 * @param {CoachMarkProperties} attributes - The attribute to be removed.
 * @param {number} coachmarkId - An integer specifying the index of the coachmark to be altered.
 * If not provided, the current coach mark will be used.
 * @param {number} tourId - An integer specifying the index of the tour containing the coach mark
 * that will be altered. If not provided, the current tour will be used.
 * @returns {Action}
 */
var removeCoachMarkAttribute = exports.removeCoachMarkAttribute = function removeCoachMarkAttribute(attribute) {
  var coachMarkId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var tourId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    payload: {
      attribute: attribute,
      coachMarkId: coachMarkId,
      tourId: tourId
    },
    type: _actionTypes.REMOVE_COACHMARK_ATTRIBUTE
  };
};

/**
 * This action modifies the attributes of an exisiting coach mark.
 * @param {CoachMarkProperties} attributes - An object containing the attributes to be altered.
 * @param {number} coachmarkId - An integer specifying the index of the coachmark to be altered.
 * If not provided, the current coach mark will be used.
 * @param {number} tourId - An integer specifying the index of the tour containing the coach mark
 * that will be altered. If not provided, the current tour will be used.
 * @returns {Action}
 */
var modifyCoachMarkAttributes = exports.modifyCoachMarkAttributes = function modifyCoachMarkAttributes(attributes) {
  var coachMarkId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var tourId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    payload: {
      attributes: attributes,
      coachMarkId: coachMarkId,
      tourId: tourId
    },
    type: _actionTypes.MODIFY_COACHMARK_ATTRIBUTES
  };
};

/**
 * This action modifies the attributes of an existing tour.
 * @param {*} attributes - An object containing the attributes to be altered.
 * @param {integer} tourId - An integer specifying the index of the tour to be altered.
 * @returns {Action}
 */
var modifyTourAttributes = exports.modifyTourAttributes = function modifyTourAttributes(attributes) {
  var tourId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    payload: {
      attributes: attributes,
      tourId: tourId
    },
    type: _actionTypes.MODIFY_TOUR_ATTRIBUTES
  };
};

/**
 * This action is used to quickly replace large sections of app state.
 * For example it can be used to replace the old batch of tours with a new one.
 * The submitted state is a plain javascript with the same shape/schema at the app state.
 * The submitted state is shallowly merged with the old state.
 * @param {*} state - The apps state
 * @returns {Action}
 */
var setState = exports.setState = function setState(state) {
  return {
    payload: state,
    type: _actionTypes.SET_STATE
  };
};

/**
 * Behaves the same as the hideTourGuide action.
 * It is dispatched when the user clicks the 'Finish' button.
 * This action is used instead of hideTourGuide so that a callback can
 * be used for when a user completes a tour.
 * @returns {Action}
 */
var tourFinished = exports.tourFinished = function tourFinished() {
  return {
    type: _actionTypes.TOUR_FINISHED
  };
};

var progressSelectorIsValid = exports.progressSelectorIsValid = function progressSelectorIsValid(isValid) {
  return {
    type: _actionTypes.PROGRESS_SELECTOR_IS_VALID,
    payload: isValid
  };
};

var targetSelectorIsValid = exports.targetSelectorIsValid = function targetSelectorIsValid(isValid) {
  return {
    type: _actionTypes.TARGET_SELECTOR_IS_VALID,
    payload: isValid
  };
};

var coachMarkPostionIsAdjusted = exports.coachMarkPostionIsAdjusted = function coachMarkPostionIsAdjusted(isAdjusted) {
  return {
    type: _actionTypes.COACH_MARK_POSITION_IS_ADJUSTED,
    payload: isAdjusted
  };
};

/***/ })
/******/ ]);
>>>>>>> master
