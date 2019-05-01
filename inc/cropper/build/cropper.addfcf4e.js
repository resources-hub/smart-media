!function(t,e){for(var i in e)t[i]=e[i]}(this,function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=12)}([function(t,e){!function(){t.exports=this.wp.media}()},function(t,e){!function(){t.exports=this.wp.template}()},function(t,e){!function(){t.exports=this.wp.ajax}()},function(t,e){!function(){t.exports=this.jQuery}()},function(t,e,i){var n;!function(){"use strict";var o={};function r(t,e,i){for(var n=i.data,o=i.width,r=~~t.x,a=~~(t.x+t.width),s=~~t.y,l=~~(t.y+t.height),c=255*t.weight,h=s;h<l;h++)for(var u=r;u<a;u++){n[4*(h*o+u)+3]+=c}}function a(t,e,i){for(var n={detail:0,saturation:0,skin:0,boost:0,total:0},o=e.data,r=t.scoreDownSample,a=1/r,l=e.height*r,c=e.width*r,h=e.width,u=0;u<l;u+=r)for(var d=0;d<c;d+=r){var p=4*(~~(u*a)*h+~~(d*a)),f=s(t,i,d,u),m=o[p+1]/255;n.skin+=o[p]/255*(m+t.skinBias)*f,n.detail+=m*f,n.saturation+=o[p+2]/255*(m+t.saturationBias)*f,n.boost+=o[p+3]/255*f}return n.total=(n.detail*t.detailWeight+n.skin*t.skinWeight+n.saturation*t.saturationWeight+n.boost*t.boostWeight)/(i.width*i.height),n}function s(t,e,i,n){if(e.x>i||i>=e.x+e.width||e.y>n||n>=e.y+e.height)return t.outsideImportance;i=(i-e.x)/e.width,n=(n-e.y)/e.height;var o=2*m(.5-i),r=2*m(.5-n),a=Math.max(o-1+t.edgeRadius,0),s=Math.max(r-1+t.edgeRadius,0),l=(a*a+s*s)*t.edgeWeight,c=1.41-g(o*o+r*r);return t.ruleOfThirds&&(c+=1.2*Math.max(0,c+l+.5)*(w(o)+w(r))),c+l}function l(t,e,i,n){var o=g(e*e+i*i+n*n),r=e/o-t.skinColor[0],a=i/o-t.skinColor[1],s=n/o-t.skinColor[2];return 1-g(r*r+a*a+s*s)}function c(t,e,i){this.width=t,this.height=e,this.data=i?new Uint8ClampedArray(i):new Uint8ClampedArray(t*e*4)}function h(t,e){for(var i=t.data,n=t.width,o=Math.floor(t.width/e),r=Math.floor(t.height/e),a=new c(o,r),s=a.data,l=1/(e*e),h=0;h<r;h++)for(var u=0;u<o;u++){for(var d=4*(h*o+u),p=0,f=0,m=0,g=0,v=0,w=0,b=0;b<e;b++)for(var y=0;y<e;y++){var x=4*((h*e+b)*n+(u*e+y));p+=i[x],f+=i[x+1],m+=i[x+2],g+=i[x+3],v=Math.max(v,i[x]),w=Math.max(w,i[x+1])}s[d]=p*l*.5+.5*v,s[d+1]=f*l*.7+.3*w,s[d+2]=m*l,s[d+3]=g*l}return a}function u(t,e){var i=document.createElement("canvas");return i.width=t,i.height=e,i}function d(t){return{open:function(e){var i=e.naturalWidth||e.width,n=e.naturalHeight||e.height,r=t(i,n),a=r.getContext("2d");return!e.naturalWidth||e.naturalWidth==e.width&&e.naturalHeight==e.height?(r.width=e.width,r.height=e.height):(r.width=e.naturalWidth,r.height=e.naturalHeight),a.drawImage(e,0,0),o.Promise.resolve(r)},resample:function(e,i,n){return Promise.resolve(e).then(function(e){var r=t(~~i,~~n);return r.getContext("2d").drawImage(e,0,0,e.width,e.height,0,0,r.width,r.height),o.Promise.resolve(r)})},getData:function(t){return Promise.resolve(t).then(function(t){var e=t.getContext("2d").getImageData(0,0,t.width,t.height);return new c(t.width,t.height,e.data)})}}}o.Promise="undefined"!=typeof Promise?Promise:function(){throw new Error("No native promises and smartcrop.Promise not set.")},o.DEFAULTS={width:0,height:0,aspect:0,cropWidth:0,cropHeight:0,detailWeight:.2,skinColor:[.78,.57,.44],skinBias:.01,skinBrightnessMin:.2,skinBrightnessMax:1,skinThreshold:.8,skinWeight:1.8,saturationBrightnessMin:.05,saturationBrightnessMax:.9,saturationThreshold:.4,saturationBias:.2,saturationWeight:.1,scoreDownSample:8,step:8,scaleStep:.1,minScale:1,maxScale:1,edgeRadius:.4,edgeWeight:-20,outsideImportance:-.5,boostWeight:100,ruleOfThirds:!0,prescale:!0,imageOperations:null,canvasFactory:u,debug:!1},o.crop=function(t,e,i){var n=v({},o.DEFAULTS,e);n.aspect&&(n.width=n.aspect,n.height=1),null===n.imageOperations&&(n.imageOperations=d(n.canvasFactory));var s=n.imageOperations,u=1,m=1;return s.open(t,n.input).then(function(t){return n.width&&n.height&&(u=p(t.width/n.width,t.height/n.height),n.cropWidth=~~(n.width*u),n.cropHeight=~~(n.height*u),n.minScale=p(n.maxScale,f(1/u,n.minScale)),!1!==n.prescale&&((m=p(f(256/t.width,256/t.height),1))<1?(t=s.resample(t,t.width*m,t.height*m),n.cropWidth=~~(n.cropWidth*m),n.cropHeight=~~(n.cropHeight*m),n.boost&&(n.boost=n.boost.map(function(t){return{x:~~(t.x*m),y:~~(t.y*m),width:~~(t.width*m),height:~~(t.height*m),weight:t.weight}}))):m=1)),t}).then(function(t){return s.getData(t).then(function(t){for(var e=function(t,e){var i={},n=new c(e.width,e.height);(function(t,e){for(var i=t.data,n=e.data,o=t.width,r=t.height,a=0;a<r;a++)for(var s=0;s<o;s++){var l,c=4*(a*o+s);l=0===s||s>=o-1||0===a||a>=r-1?y(i,c):4*y(i,c)-y(i,c-4*o)-y(i,c-4)-y(i,c+4)-y(i,c+4*o),n[c+1]=l}})(e,n),function(t,e,i){for(var n=e.data,o=i.data,r=e.width,a=e.height,s=0;s<a;s++)for(var c=0;c<r;c++){var h=4*(s*r+c),u=b(n[h],n[h+1],n[h+2])/255,d=l(t,n[h],n[h+1],n[h+2]),p=d>t.skinThreshold,f=u>=t.skinBrightnessMin&&u<=t.skinBrightnessMax;o[h]=p&&f?(d-t.skinThreshold)*(255/(1-t.skinThreshold)):0}}(t,e,n),function(t,e,i){for(var n=e.data,o=i.data,r=e.width,a=e.height,s=0;s<a;s++)for(var l=0;l<r;l++){var c=4*(s*r+l),h=b(n[c],n[c+1],n[c+2])/255,u=x(n[c],n[c+1],n[c+2]),d=u>t.saturationThreshold,p=h>=t.saturationBrightnessMin&&h<=t.saturationBrightnessMax;o[c+2]=p&&d?(u-t.saturationThreshold)*(255/(1-t.saturationThreshold)):0}}(t,e,n),function(t,e){if(!t.boost)return;for(var i=e.data,n=0;n<e.width;n+=4)i[n+3]=0;for(n=0;n<t.boost.length;n++)r(t.boost[n],t,e)}(t,n);for(var o=h(n,t.scoreDownSample),s=-1/0,u=null,d=function(t,e,i){for(var n=[],o=p(e,i),r=t.cropWidth||o,a=t.cropHeight||o,s=t.maxScale;s>=t.minScale;s-=t.scaleStep)for(var l=0;l+a*s<=i;l+=t.step)for(var c=0;c+r*s<=e;c+=t.step)n.push({x:c,y:l,width:r*s,height:a*s});return n}(t,e.width,e.height),f=0,m=d.length;f<m;f++){var g=d[f];g.score=a(t,o,g),g.score.total>s&&(u=g,s=g.score.total)}i.topCrop=u,t.debug&&u&&(i.crops=d,i.debugOutput=n,i.debugOptions=t,i.debugTopCrop=v({},i.topCrop));return i}(n,t),o=e.crops||[e.topCrop],s=0,u=o.length;s<u;s++){var d=o[s];d.x=~~(d.x/m),d.y=~~(d.y/m),d.width=~~(d.width/m),d.height=~~(d.height/m)}return i&&i(e),e})})},o.isAvailable=function(t){if(!o.Promise)return!1;if((t?t.canvasFactory:u)===u&&!document.createElement("canvas").getContext("2d"))return!1;return!0},o.importance=s,o.ImgData=c,o._downSample=h,o._canvasImageOperations=d;var p=Math.min,f=Math.max,m=Math.abs,g=Math.sqrt;function v(t){for(var e=1,i=arguments.length;e<i;e++){var n=arguments[e];if(n)for(var o in n)t[o]=n[o]}return t}function w(t){return t=16*((t-1/3+1)%2*.5-.5),Math.max(1-t*t,0)}function b(t,e,i){return.5126*i+.7152*e+.0722*t}function y(t,e){return b(t[e],t[e+1],t[e+2])}function x(t,e,i){var n=f(t/255,e/255,i/255),o=p(t/255,e/255,i/255);if(n===o)return 0;var r=n-o;return(n+o)/2>.5?r/(2-n-o):r/(n+o)}void 0===(n=function(){return o}.call(e,i,e,t))||(t.exports=n),e.smartcrop=o,t.exports=o}()},function(t,e){!function(){t.exports=this._}()},function(t,e){!function(){t.exports=this.wp.BackBone}()},function(t,e,i){var n=i(8);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(10)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,i){(t.exports=i(9)(!1)).push([t.i,'/* Hide built in image editor */\n.wp-core-ui .edit-attachment,\n.wp-core-ui .button[id^="imgedit-open-btn-"] {\n  display: none; }\n\n.wp-core-ui .media-image-edit {\n  display: flex;\n  align-items: stretch;\n  max-height: 100%; }\n\n.wp-core-ui .media-frame.mode-edit-image .media-image-edit {\n  margin-right: 30%; }\n\n.wp-core-ui .media-frame.mode-edit-image .media-sidebar {\n  width: 30%;\n  box-sizing: border-box; }\n\n.wp-core-ui .hm-thumbnail-sizes {\n  flex: 0 0 200px;\n  max-height: 100%;\n  overflow: auto;\n  background: #e5e5e5; }\n  .wp-core-ui .hm-thumbnail-sizes h2 {\n    margin: 16px;\n    padding: 0; }\n  .wp-core-ui .hm-thumbnail-sizes__list {\n    margin: 0;\n    padding: 0; }\n    .wp-core-ui .hm-thumbnail-sizes__list li {\n      width: 100%;\n      margin: 0;\n      padding: 0; }\n    .wp-core-ui .hm-thumbnail-sizes__list li:first-child button {\n      border-top: 0; }\n    .wp-core-ui .hm-thumbnail-sizes__list button {\n      background: none;\n      border: 0;\n      border-right: 1px solid #ddd;\n      margin: 0;\n      padding: 16px;\n      box-sizing: border-box;\n      cursor: pointer;\n      display: block;\n      width: 100%;\n      text-align: left; }\n    .wp-core-ui .hm-thumbnail-sizes__list button.current {\n      border: 1px solid #ddd;\n      border-width: 1px 0;\n      padding: 15px 16px;\n      background: #fff;\n      position: relative; }\n    .wp-core-ui .hm-thumbnail-sizes__list h3 {\n      text-transform: capitalize;\n      margin: 0 0 8px;\n      padding: 0; }\n      .wp-core-ui .hm-thumbnail-sizes__list h3 small {\n        font-weight: 300;\n        white-space: nowrap; }\n    .wp-core-ui .hm-thumbnail-sizes__list img {\n      display: block;\n      width: auto;\n      height: 80px;\n      max-width: 100%;\n      max-height: 80px; }\n\n.wp-core-ui .hm-thumbnail-editor {\n  padding: 16px;\n  overflow: auto;\n  flex: 1; }\n  .wp-core-ui .hm-thumbnail-editor h2 {\n    margin: 0 0 16px; }\n    .wp-core-ui .hm-thumbnail-editor h2 small {\n      font-weight: normal;\n      white-space: nowrap; }\n  .wp-core-ui .hm-thumbnail-editor .imgedit-menu p {\n    margin-bottom: 0;\n    font-size: 16px; }\n  .wp-core-ui .hm-thumbnail-editor__image-wrap {\n    overflow: hidden; }\n  .wp-core-ui .hm-thumbnail-editor__image {\n    float: left;\n    position: relative; }\n    .wp-core-ui .hm-thumbnail-editor__image-crop {\n      position: relative; }\n    .wp-core-ui .hm-thumbnail-editor__image img {\n      display: block;\n      max-width: 100%;\n      max-height: 500px;\n      width: auto;\n      height: auto; }\n    .wp-core-ui .hm-thumbnail-editor__image .image-preview-full {\n      cursor: crosshair; }\n  .wp-core-ui .hm-thumbnail-editor__actions {\n    margin: 16px 0 8px; }\n  .wp-core-ui .hm-thumbnail-editor .imgedit-wait {\n    position: static;\n    width: 20px;\n    height: 20px;\n    vertical-align: middle;\n    float: right;\n    margin: 4px 0 4px 10px; }\n    .wp-core-ui .hm-thumbnail-editor .imgedit-wait::before {\n      margin: 0;\n      position: static; }\n  .wp-core-ui .hm-thumbnail-editor__focal-point {\n    position: absolute;\n    box-sizing: border-box;\n    width: 80px;\n    height: 80px;\n    margin-left: -40px;\n    margin-top: -40px;\n    left: 0;\n    top: 0;\n    background: rgba(200, 125, 125, 0.5);\n    border: 2.5px solid rgba(200, 50, 50, 0.5);\n    border-radius: 200px;\n    cursor: cell;\n    display: none; }\n',""])},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[i].concat(r).concat([o]).join("\n")}var a;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),e.push(a))}},e}},function(t,e,i){var n,o,r={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(t){var e={};return function(t,i){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,i);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,c=0,h=[],u=i(11);function d(t,e){for(var i=0;i<t.length;i++){var n=t[i],o=r[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(w(n.parts[a],e))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(w(n.parts[a],e));r[n.id]={id:n.id,refs:1,parts:s}}}}function p(t,e){for(var i=[],n={},o=0;o<t.length;o++){var r=t[o],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};n[a]?n[a].parts.push(s):i.push(n[a]={id:a,parts:[s]})}return i}function f(t,e){var i=s(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=h[h.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),h.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,i);i.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return i.nc}();n&&(t.attrs.nonce=n)}return v(e,t.attrs),f(t,e),e}function v(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function w(t,e){var i,n,o,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var a=c++;i=l||(l=g(e)),n=x.bind(null,i,a,!1),o=x.bind(null,i,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),f(t,e),e}(e),n=function(t,e,i){var n=i.css,o=i.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(n=u(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,i,e),o=function(){m(i),i.href&&URL.revokeObjectURL(i.href)}):(i=g(e),n=function(t,e){var i=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),o=function(){m(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=p(t,e);return d(i,e),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o];(s=r[a.id]).refs--,n.push(s)}t&&d(p(t,e),e);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var b,y=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,n=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?i+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),r=i(1),a=i.n(r),s=o.a.View.extend({tagName:"div",className:"hm-thumbnail-sizes",template:a()("hm-thumbnail-sizes"),events:{"click button":"setSize"},initialize:function(){this.listenTo(this.model,"change:sizes",this.render)},setSize:function(t){this.model.set({size:t.currentTarget.dataset.size}),t.currentTarget.parentNode.parentNode.querySelectorAll("button").forEach(function(t){t.className=""}),t.currentTarget.className="current"}}),l=i(2),c=i.n(l),h=i(3),u=i.n(h),d=i(4),p=i.n(d);i(5),i(6);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=u.a,g=o.a.View.extend({tagName:"div",className:"hm-thumbnail-editor",template:a()("hm-thumbnail-editor"),events:{"click .button-apply-changes":"saveCrop","click .button-reset":"reset","click .image-preview-full":"onClickPreview","click .focal-point":"removeFocalPoint","click .imgedit-menu button":"onEditImage"},initialize:function(){this.listenTo(this.model,"change:size",this.loadEditor),this.on("ready",this.loadEditor),window.imageEdit&&(window.imageEdit._view=this,window.imageEdit.initCrop=function(){},window.imageEdit.setCropSelection=function(){})},loadEditor:function(){this.render();var t=this.model.get("size");"full"!==t&&"full-orig"!==t?this.initCropper():this.initFocalPoint()},refresh:function(){this.update()},back:function(){},save:function(){this.update()},update:function(){var t=this;this.model.fetch({success:function(){return t.loadEditor()},error:function(){}})},reset:function(){var t=this,e=m('img[id^="image-preview-"]'),i=this.model.get("size"),n=this.model.get("sizes"),o=this.model.get("focalPoint"),r=this.model.get("width"),a=this.model.get("height"),s=n[i]||null;if(s){var l=s.cropData;if(l.hasOwnProperty("x"))this.setSelection(l);else if(o.hasOwnProperty("x")){var c=f(function(t,e,i,n){var o=t/i*n;return o<e?[t,Math.round(o)]:[Math.round(e/n*i),e]}(r,a,s.width,s.height),2),h=c[0],u=c[1];this.setSelection({x:Math.min(r-h,Math.max(0,o.x-h/2)),y:Math.min(a-u,Math.max(0,o.y-u/2)),width:h,height:u})}else p.a.crop(e.get(0),{width:s.width,height:s.height}).then(function(e){var i=e.topCrop;t.setSelection(i)})}},saveCrop:function(){var t=this,e=this.cropper.getSelection();this.onSelectStart(),c.a.post("hm_save_crop",{_ajax_nonce:this.model.get("nonces").edit,id:this.model.get("id"),crop:{x:e.x1,y:e.y1,width:e.width,height:e.height},size:this.model.get("size")}).always(function(){t.onSelectEnd()}).done(function(){t.update()}).fail(function(t){return console.log(t)})},setSelection:function(t){if(this.onSelectStart(),!t||void 0===t.x)return this.cropper.setOptions({show:!0}),void this.cropper.update();this.cropper.setSelection(t.x,t.y,t.x+t.width,t.y+t.height),this.cropper.setOptions({show:!0}),this.cropper.update()},onSelectStart:function(){m(".button-apply-changes, .button-reset").attr("disabled","disabled")},onSelectEnd:function(){m(".button-apply-changes, .button-reset").removeAttr("disabled")},onSelectChange:function(){m(".button-apply-changes:disabled, .button-reset:disabled").removeAttr("disabled")},initCropper:function(){var t=this,e=m('img[id^="image-preview-"]'),i=e.parent(),n=this.model.get("size"),o=this.model.get("sizes")[n]||null;if(o){var r="".concat(o.width,":").concat(o.height);this.cropper=e.imgAreaSelect({parent:i,instance:!0,handles:!0,keys:!0,imageWidth:this.model.get("width"),imageHeight:this.model.get("height"),minWidth:o.width,minHeight:o.height,aspectRatio:r,onInit:function(e){m(e).next().css("position","absolute").nextAll(".imgareaselect-outer").css("position","absolute"),t.reset()},onSelectStart:function(){t.onSelectStart.apply(t,arguments)},onSelectEnd:function(){t.onSelectEnd.apply(t,arguments)},onSelectChange:function(){t.onSelectChange.apply(t,arguments)}})}},initFocalPoint:function(){var t=this.model.get("width"),e=this.model.get("height"),i=this.model.get("focalPoint")||{},n=this.$el.find(".focal-point");i.hasOwnProperty("x")&&i.hasOwnProperty("y")&&n.css({left:"".concat(100/t*i.x,"%"),top:"".concat(100/e*i.y,"%"),display:"block"})},onClickPreview:function(t){var e=this.model.get("width"),i=this.model.get("height"),n=t.offsetX*(e/t.currentTarget.offsetWidth),o=t.offsetY*(i/t.currentTarget.offsetHeight);this.$el.find(".focal-point").css({left:"".concat(Math.round(100/e*n),"%"),top:"".concat(Math.round(100/i*o),"%"),display:"block"}),this.setFocalPoint({x:n,y:o})},setFocalPoint:function(t){var e=this;c.a.post("hm_save_focal_point",{_ajax_nonce:this.model.get("nonces").edit,id:this.model.get("id"),focalPoint:t}).done(function(){e.update()}).fail(function(t){return console.log(t)})},removeFocalPoint:function(t){this.$el.find(".focal-point").hide(),t.stopPropagation(),this.setFocalPoint(!1)},onEditImage:function(){this.$el.find(".focal-point, .note-focal-point").hide()}}),v=o.a.View.extend({template:a()("hm-thumbnail-container"),initialize:function(){this.model.get("size")||this.model.set({size:"full"}),this.listenTo(this.model,"change:url",this.onUpdate),this.onUpdate()},onUpdate:function(){this.model.get("uploading")||this.model.get("id")&&!this.model.get("url")?this.views.set([new o.a.view.Spinner]):this.views.set([new s({controller:this.controller,model:this.model,priority:10}),new g({controller:this.controller,model:this.model,priority:50})])}});v.load=function(t){return new v({controller:t,model:t.model,el:document.querySelector(".media-image-edit")})};var w=v,b=(i(7),o.a.view.MediaFrame);o.a.view.MediaFrame=b.extend({initialize:function(){b.prototype.initialize.apply(this,arguments),o.a.events.trigger("frame:init",this)}});var y=o.a.view.MediaFrame.Select;o.a.view.MediaFrame.Select=y.extend({initialize:function(t){var e=this;y.prototype.initialize.apply(this,arguments);var i=Object.assign({},t.button||{});o.a.events.trigger("frame:select:init",this),this.on("activate",function(){e.$el.hasClass("hide-menu")&&e.lastState()&&e.lastState().set("menu",!1)}),this.on("toolbar:create:select",function(){i&&(e.options.mutableButton=Object.assign({},e.options.button),e.options.button=Object.assign({},i))})}}),o.a.events.on("frame:init",function(){o.a.view.Attachment.Details.TwoColumn=o.a.view.Attachment.Details.TwoColumn.extend({template:a()("hm-attachment-details-two-column"),initialize:function(){var t=this;o.a.view.Attachment.Details.prototype.initialize.apply(this,arguments),this.listenTo(this.model,"change:url",function(){t.render(),w.load(t.controller)}),this.controller.on("ready refresh",function(){return w.load(t.controller)})}})}),o.a.events.on("frame:select:init",function(t){if(t.states.get("library")&&!t.states.get("edit")&&!t.states.get("cropper")){var e=t.state("library"),i=t.states.add({id:"edit",title:"Edit image",router:!1,menu:!1,uploader:!1,selection:t.state("library").get("selection"),library:t.state("library").get("library")});i.on("activate",function(){t.$el.toggleClass("mode-select mode-edit-image"),t.content.mode("edit"),t.toolbar.mode("edit")}),i.on("deactivate",function(){t.$el.toggleClass("mode-select mode-edit-image")}),i.sidebar=new o.a.view.Sidebar({controller:t}),t.on("content:create:edit",function(e){e.view=[new w({tagName:"div",className:"media-image-edit",controller:t,model:t.state("edit").get("selection").first()}),i.sidebar]}),t.on("toolbar:create:edit",function(e){e.view=new o.a.view.Toolbar({controller:t,requires:{selection:!0},reset:!1,event:"select",items:{change:{text:"Change image",click:function(){t.setState(t.lastState())},priority:20,requires:{selection:!0}},apply:{style:"primary",text:"Select",click:function(){var e=t.options.mutableButton||t.options.button||{},i=e.close,n=e.event,o=e.reset,r=e.state;i&&t.close(),n&&t.state().trigger(n||"select"),r&&t.setState(r),o&&t.reset()},priority:10,requires:{selection:!0}}}})}),i.get("selection").on("selection:single",function(){var n=i.sidebar,r=i.get("selection").single();r.get("uploading")||(t.setState("edit"),n.set("details",new o.a.view.Attachment.Details({controller:this.controller,model:r,priority:80})),n.set("compat",new o.a.view.AttachmentCompat({controller:this.controller,model:r,priority:120})),(e.has("display")?e.get("display"):e.get("displaySettings"))&&n.set("display",new o.a.view.Settings.AttachmentDisplay({controller:this.controller,model:this.model.display(r),attachment:r,priority:160,userSettings:this.model.get("displayUserSettings")})),"insert"===this.model.id&&n.$el.addClass("visible"))}),i.get("selection").on("selection:unsingle",function(){t.setState("library")})}})}]));