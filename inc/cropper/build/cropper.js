!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=5)}([function(t,e){!function(){t.exports=this.wp.media}()},function(t,e){!function(){t.exports=this.wp.template}()},function(t,e){!function(){t.exports=this.jQuery}()},function(t,e){!function(){t.exports=this.wp.ajax}()},function(t,e,n){var i;!function(){"use strict";var r={};function o(t,e,n){for(var i=n.data,r=n.width,o=~~t.x,a=~~(t.x+t.width),s=~~t.y,h=~~(t.y+t.height),u=255*t.weight,l=s;l<h;l++)for(var c=o;c<a;c++){i[4*(l*r+c)+3]+=u}}function a(t,e,n){for(var i={detail:0,saturation:0,skin:0,boost:0,total:0},r=e.data,o=t.scoreDownSample,a=1/o,h=e.height*o,u=e.width*o,l=e.width,c=0;c<h;c+=o)for(var d=0;d<u;d+=o){var f=4*(~~(c*a)*l+~~(d*a)),p=s(t,n,d,c),m=r[f+1]/255;i.skin+=r[f]/255*(m+t.skinBias)*p,i.detail+=m*p,i.saturation+=r[f+2]/255*(m+t.saturationBias)*p,i.boost+=r[f+3]/255*p}return i.total=(i.detail*t.detailWeight+i.skin*t.skinWeight+i.saturation*t.saturationWeight+i.boost*t.boostWeight)/(n.width*n.height),i}function s(t,e,n,i){if(e.x>n||n>=e.x+e.width||e.y>i||i>=e.y+e.height)return t.outsideImportance;n=(n-e.x)/e.width,i=(i-e.y)/e.height;var r=2*m(.5-n),o=2*m(.5-i),a=Math.max(r-1+t.edgeRadius,0),s=Math.max(o-1+t.edgeRadius,0),h=(a*a+s*s)*t.edgeWeight,u=1.41-g(r*r+o*o);return t.ruleOfThirds&&(u+=1.2*Math.max(0,u+h+.5)*(b(r)+b(o))),u+h}function h(t,e,n,i){var r=g(e*e+n*n+i*i),o=e/r-t.skinColor[0],a=n/r-t.skinColor[1],s=i/r-t.skinColor[2];return 1-g(o*o+a*a+s*s)}function u(t,e,n){this.width=t,this.height=e,this.data=n?new Uint8ClampedArray(n):new Uint8ClampedArray(t*e*4)}function l(t,e){for(var n=t.data,i=t.width,r=Math.floor(t.width/e),o=Math.floor(t.height/e),a=new u(r,o),s=a.data,h=1/(e*e),l=0;l<o;l++)for(var c=0;c<r;c++){for(var d=4*(l*r+c),f=0,p=0,m=0,g=0,v=0,b=0,w=0;w<e;w++)for(var x=0;x<e;x++){var y=4*((l*e+w)*i+(c*e+x));f+=n[y],p+=n[y+1],m+=n[y+2],g+=n[y+3],v=Math.max(v,n[y]),b=Math.max(b,n[y+1])}s[d]=f*h*.5+.5*v,s[d+1]=p*h*.7+.3*b,s[d+2]=m*h,s[d+3]=g*h}return a}function c(t,e){var n=document.createElement("canvas");return n.width=t,n.height=e,n}function d(t){return{open:function(e){var n=e.naturalWidth||e.width,i=e.naturalHeight||e.height,o=t(n,i),a=o.getContext("2d");return!e.naturalWidth||e.naturalWidth==e.width&&e.naturalHeight==e.height?(o.width=e.width,o.height=e.height):(o.width=e.naturalWidth,o.height=e.naturalHeight),a.drawImage(e,0,0),r.Promise.resolve(o)},resample:function(e,n,i){return Promise.resolve(e).then(function(e){var o=t(~~n,~~i);return o.getContext("2d").drawImage(e,0,0,e.width,e.height,0,0,o.width,o.height),r.Promise.resolve(o)})},getData:function(t){return Promise.resolve(t).then(function(t){var e=t.getContext("2d").getImageData(0,0,t.width,t.height);return new u(t.width,t.height,e.data)})}}}r.Promise="undefined"!=typeof Promise?Promise:function(){throw new Error("No native promises and smartcrop.Promise not set.")},r.DEFAULTS={width:0,height:0,aspect:0,cropWidth:0,cropHeight:0,detailWeight:.2,skinColor:[.78,.57,.44],skinBias:.01,skinBrightnessMin:.2,skinBrightnessMax:1,skinThreshold:.8,skinWeight:1.8,saturationBrightnessMin:.05,saturationBrightnessMax:.9,saturationThreshold:.4,saturationBias:.2,saturationWeight:.1,scoreDownSample:8,step:8,scaleStep:.1,minScale:1,maxScale:1,edgeRadius:.4,edgeWeight:-20,outsideImportance:-.5,boostWeight:100,ruleOfThirds:!0,prescale:!0,imageOperations:null,canvasFactory:c,debug:!1},r.crop=function(t,e,n){var i=v({},r.DEFAULTS,e);i.aspect&&(i.width=i.aspect,i.height=1),null===i.imageOperations&&(i.imageOperations=d(i.canvasFactory));var s=i.imageOperations,c=1,m=1;return s.open(t,i.input).then(function(t){return i.width&&i.height&&(c=f(t.width/i.width,t.height/i.height),i.cropWidth=~~(i.width*c),i.cropHeight=~~(i.height*c),i.minScale=f(i.maxScale,p(1/c,i.minScale)),!1!==i.prescale&&((m=f(p(256/t.width,256/t.height),1))<1?(t=s.resample(t,t.width*m,t.height*m),i.cropWidth=~~(i.cropWidth*m),i.cropHeight=~~(i.cropHeight*m),i.boost&&(i.boost=i.boost.map(function(t){return{x:~~(t.x*m),y:~~(t.y*m),width:~~(t.width*m),height:~~(t.height*m),weight:t.weight}}))):m=1)),t}).then(function(t){return s.getData(t).then(function(t){for(var e=function(t,e){var n={},i=new u(e.width,e.height);(function(t,e){for(var n=t.data,i=e.data,r=t.width,o=t.height,a=0;a<o;a++)for(var s=0;s<r;s++){var h,u=4*(a*r+s);h=0===s||s>=r-1||0===a||a>=o-1?x(n,u):4*x(n,u)-x(n,u-4*r)-x(n,u-4)-x(n,u+4)-x(n,u+4*r),i[u+1]=h}})(e,i),function(t,e,n){for(var i=e.data,r=n.data,o=e.width,a=e.height,s=0;s<a;s++)for(var u=0;u<o;u++){var l=4*(s*o+u),c=w(i[l],i[l+1],i[l+2])/255,d=h(t,i[l],i[l+1],i[l+2]),f=d>t.skinThreshold,p=c>=t.skinBrightnessMin&&c<=t.skinBrightnessMax;r[l]=f&&p?(d-t.skinThreshold)*(255/(1-t.skinThreshold)):0}}(t,e,i),function(t,e,n){for(var i=e.data,r=n.data,o=e.width,a=e.height,s=0;s<a;s++)for(var h=0;h<o;h++){var u=4*(s*o+h),l=w(i[u],i[u+1],i[u+2])/255,c=y(i[u],i[u+1],i[u+2]),d=c>t.saturationThreshold,f=l>=t.saturationBrightnessMin&&l<=t.saturationBrightnessMax;r[u+2]=f&&d?(c-t.saturationThreshold)*(255/(1-t.saturationThreshold)):0}}(t,e,i),function(t,e){if(!t.boost)return;for(var n=e.data,i=0;i<e.width;i+=4)n[i+3]=0;for(i=0;i<t.boost.length;i++)o(t.boost[i],t,e)}(t,i);for(var r=l(i,t.scoreDownSample),s=-1/0,c=null,d=function(t,e,n){for(var i=[],r=f(e,n),o=t.cropWidth||r,a=t.cropHeight||r,s=t.maxScale;s>=t.minScale;s-=t.scaleStep)for(var h=0;h+a*s<=n;h+=t.step)for(var u=0;u+o*s<=e;u+=t.step)i.push({x:u,y:h,width:o*s,height:a*s});return i}(t,e.width,e.height),p=0,m=d.length;p<m;p++){var g=d[p];g.score=a(t,r,g),g.score.total>s&&(c=g,s=g.score.total)}n.topCrop=c,t.debug&&c&&(n.crops=d,n.debugOutput=i,n.debugOptions=t,n.debugTopCrop=v({},n.topCrop));return n}(i,t),r=e.crops||[e.topCrop],s=0,c=r.length;s<c;s++){var d=r[s];d.x=~~(d.x/m),d.y=~~(d.y/m),d.width=~~(d.width/m),d.height=~~(d.height/m)}return n&&n(e),e})})},r.isAvailable=function(t){if(!r.Promise)return!1;if((t?t.canvasFactory:c)===c&&!document.createElement("canvas").getContext("2d"))return!1;return!0},r.importance=s,r.ImgData=u,r._downSample=l,r._canvasImageOperations=d;var f=Math.min,p=Math.max,m=Math.abs,g=Math.sqrt;function v(t){for(var e=1,n=arguments.length;e<n;e++){var i=arguments[e];if(i)for(var r in i)t[r]=i[r]}return t}function b(t){return t=16*((t-1/3+1)%2*.5-.5),Math.max(1-t*t,0)}function w(t,e,n){return.5126*n+.7152*e+.0722*t}function x(t,e){return w(t[e],t[e+1],t[e+2])}function y(t,e,n){var i=p(t/255,e/255,n/255),r=f(t/255,e/255,n/255);if(i===r)return 0;var o=i-r;return(i+r)/2>.5?o/(2-i-r):o/(i+r)}void 0===(i=function(){return r}.call(e,n,e,t))||(t.exports=i),e.smartcrop=r,t.exports=r}()},function(t,e,n){"use strict";n.r(e);var i=n(2),r=n.n(i),o=n(0),a=n.n(o),s=n(1),h=n.n(s),u=n(3),l=n.n(u),c=n(4),d=n.n(c),f=(n(6),r.a),p=a.a.view.MediaFrame;a.a.view.MediaFrame=p.extend({initialize:function(){p.prototype.initialize.apply(this,arguments),a.a.events.trigger("frame:init",this)}}),a.a.events.on("frame:init",function(){a.a.view.Attachment.Details.TwoColumn=a.a.view.Attachment.Details.TwoColumn.extend({template:h()("hm-attachment-details-two-column"),initialize:function(){var t=this;a.a.view.Attachment.Details.prototype.initialize.apply(this,arguments),this.listenTo(this.model,"change:url",function(){t.render(),m.load(t.controller)}),this.controller.on("ready refresh",function(){return m.load(t.controller)})}})});var m=a.a.View.extend({template:h()("hm-thumbnail-container"),initialize:function(){this.model.get("size")||this.model.set({size:"full"}),this.listenTo(this.model,"change",this.onUpdate),this.views.add([new g({controller:this.controller,model:this.model,priority:10}),new v({controller:this.controller,model:this.model,priority:50})]),this.render()}});m.load=function(t){return new m({controller:t,model:t.model,el:document.querySelector(".media-image-edit")})};var g=a.a.View.extend({tagName:"div",className:"hm-thumbnail-sizes",template:h()("hm-thumbnail-sizes"),events:{"click button":"setSize"},initialize:function(){this.listenTo(this.model,"change:sizes",this.render)},setSize:function(t){this.model.set({size:t.currentTarget.dataset.size}),t.currentTarget.parentNode.parentNode.querySelectorAll("button").forEach(function(t){t.className=""}),t.currentTarget.className="current"}}),v=a.a.View.extend({tagName:"div",className:"hm-thumbnail-editor",template:h()("hm-thumbnail-editor"),events:{"click .button-apply-changes":"saveCrop","click .button-reset":"reset"},initialize:function(){this.listenTo(this.model,"change:size",this.loadEditor),window.imageEdit&&(window.imageEdit._view=this)},loadEditor:function(){this.render();var t=this.model.get("size");"full"!==t&&"full-orig"!==t&&this.initCropper()},refresh:function(){this.update()},back:function(){},save:function(){this.update()},update:function(){var t=this;this.model.fetch({success:function(){return t.loadEditor()},error:function(){}})},reset:function(){var t=this,e=f('img[id^="image-preview-"]'),n=this.model.get("size"),i=this.model.get("sizes")[n]||null;if(i){var r=i.cropData;r.x?this.setSelection(r):d.a.crop(e.get(0),{width:i.width,height:i.height}).then(function(e){var n=e.topCrop;t.setSelection(n)})}},saveCrop:function(){var t=this,e=this.cropper.getSelection();this.onSelectStart(),l.a.post("hm_save_crop",{_ajax_nonce:this.model.get("nonces").edit,id:this.model.get("id"),crop:{x:e.x1,y:e.y1,width:e.width,height:e.height},size:this.model.get("size")}).always(function(){t.onSelectEnd()}).done(function(){t.update()}).fail(function(t){return console.log(t)})},setSelection:function(t){if(this.onSelectStart(),!t||void 0===t.x)return this.cropper.setOptions({show:!0}),void this.cropper.update();this.cropper.setSelection(t.x,t.y,t.x+t.width,t.y+t.height),this.cropper.setOptions({show:!0}),this.cropper.update()},onSelectStart:function(){f(".button-apply-changes, .button-reset").attr("disabled","disabled")},onSelectEnd:function(){f(".button-apply-changes, .button-reset").removeAttr("disabled")},onSelectChange:function(){f(".button-apply-changes:disabled, .button-reset:disabled").removeAttr("disabled")},initCropper:function(){var t=this,e=f('img[id^="image-preview-"]'),n=e.parent(),i=this.model.get("size"),r=this.model.get("sizes")[i]||null;if(r){var o=r.width+":"+r.height;this.cropper=e.imgAreaSelect({parent:n,instance:!0,handles:!0,keys:!0,imageWidth:this.model.get("width"),imageHeight:this.model.get("height"),minWidth:r.width,minHeight:r.height,aspectRatio:o,onInit:function(e){f(e).next().css("position","absolute").nextAll(".imgareaselect-outer").css("position","absolute"),t.reset()},onSelectStart:function(){t.onSelectStart.apply(t,arguments)},onSelectEnd:function(){t.onSelectEnd.apply(t,arguments)},onSelectChange:function(){t.onSelectChange.apply(t,arguments)}})}}})},function(t,e,n){var i=n(7);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(9)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(8)(!1)).push([t.i,'/* Hide built in image editor */\n.wp-core-ui .edit-attachment,\n.wp-core-ui .button[id^="imgedit-open-btn-"] {\n  display: none; }\n\n.media-image-edit {\n  display: flex;\n  align-items: stretch; }\n\n.hm-thumbnail-sizes {\n  flex: 0 0 200px;\n  max-height: 100%;\n  overflow: auto;\n  background: #fafafa; }\n  .hm-thumbnail-sizes h2 {\n    margin: 16px;\n    padding: 0; }\n  .hm-thumbnail-sizes__list {\n    margin: 0;\n    padding: 0; }\n    .hm-thumbnail-sizes__list li {\n      width: 100%;\n      margin: 0;\n      padding: 0; }\n    .hm-thumbnail-sizes__list li:first-child button {\n      border-top: 0; }\n    .hm-thumbnail-sizes__list button {\n      background: none;\n      border: 0;\n      border-right: 1px solid #ddd;\n      margin: 0;\n      padding: 16px;\n      box-sizing: border-box;\n      cursor: pointer;\n      display: block;\n      width: 100%;\n      text-align: left; }\n    .hm-thumbnail-sizes__list button.current {\n      border: 1px solid #ddd;\n      border-width: 1px 0;\n      padding: 15px 16px;\n      background: #fff;\n      position: relative; }\n    .hm-thumbnail-sizes__list h3 {\n      text-transform: capitalize;\n      margin: 0 0 8px;\n      padding: 0; }\n      .hm-thumbnail-sizes__list h3 small {\n        font-weight: 300;\n        white-space: nowrap; }\n    .hm-thumbnail-sizes__list img {\n      display: block;\n      width: auto;\n      height: auto;\n      max-width: 100%;\n      max-height: 80px; }\n\n.hm-thumbnail-editor {\n  padding: 16px;\n  overflow: auto;\n  flex: 1; }\n  .hm-thumbnail-editor h2 {\n    margin: 0 0 16px; }\n    .hm-thumbnail-editor h2 small {\n      font-weight: normal;\n      white-space: nowrap; }\n  .hm-thumbnail-editor__image-crop {\n    position: relative; }\n  .hm-thumbnail-editor__image img {\n    display: block;\n    max-width: 100%;\n    max-height: 500px;\n    width: auto;\n    height: auto; }\n  .hm-thumbnail-editor__actions {\n    margin: 16px 0 8px; }\n',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var i={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),a=null,s=0,h=[],u=n(10);function l(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function c(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function d(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=h[h.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),h.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=o(t.insertAt.before,n);n.insertBefore(e,r)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function p(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return m(e,t.attrs),d(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var h=s++;n=a||(a=p(e)),i=b.bind(null,n,h,!1),r=b.bind(null,n,h,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),d(t,e),e}(e),i=function(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){f(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=c(t,e);return l(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&l(c(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var h=0;h<s.parts.length;h++)s.parts[h]();delete i[s.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]));