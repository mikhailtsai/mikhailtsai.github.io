(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1639:function(e,t,n){var o=n(30),a=n(1748);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const o=[];return n.querySelectorAll(t).forEach(e=>o.push(e)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&o.push(...e(t,n.shadowRoot))}),o}("apryse-webviewer"));const n=[];for(let o=0;o<t.length;o++){const a=t[o];if(0===o)a.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);a.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1};o(a,i);e.exports=a.locals||{}},1748:function(e,t,n){(t=e.exports=n(31)(!1)).push([e.i,".open.PageRedactionModal{visibility:visible}.closed.PageRedactionModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.PageRedactionModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.PageRedactionModal .modal-container .wrapper .modal-content{padding:10px}.PageRedactionModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.PageRedactionModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.PageRedactionModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.PageRedactionModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.PageRedactionModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.PageRedactionModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.PageRedactionModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.PageRedactionModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.PageRedactionModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.PageRedactionModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .footer .modal-button{padding:23px 8px}}.PageRedactionModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .swipe-indicator{display:none}}.PageRedactionModal .container{border-radius:4px;overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .PageRedactionModal .container,.PageRedactionModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .PageRedactionModal .container,.PageRedactionModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container,.PageRedactionModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container,.PageRedactionModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.PageRedactionModal .container{align-items:center;background:var(--component-background);box-shadow:0 0 3px 0 var(--document-box-shadow);width:888px}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container{width:480px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container{width:480px}}.PageRedactionModal .container .header{width:100%;display:flex;align-items:center;justify-content:space-between;padding:16px;border-bottom:1px solid var(--divider)}.PageRedactionModal .container .header .header-text{font-size:var(--font-size-large);font-weight:700}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .header .header-text{font-size:var(--font-size-medium)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .header .header-text{font-size:var(--font-size-medium)}}.PageRedactionModal .container .header .Button:hover{background-color:var(--popup-button-hover)}.PageRedactionModal .container .body{padding:16px;grid-gap:16px;gap:16px;display:flex;width:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .body{display:flex;grid-gap:5px;gap:5px;flex-direction:column}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .body{display:flex;grid-gap:5px;gap:5px;flex-direction:column}}.PageRedactionModal .container .body .canvas-container{border:1px solid var(--gray-5);height:448px;width:60%;background-color:var(--divider);display:flex;align-items:center;justify-content:space-between;flex-direction:column;overflow:auto;grid-gap:5px;gap:5px}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .body .canvas-container{width:55%;height:300px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .body .canvas-container{width:55%;height:300px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .body .canvas-container{width:100%;height:250px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .body .canvas-container{width:100%;height:250px}}.PageRedactionModal .container .body .selection-options{width:40%;grid-gap:8px;gap:8px;display:flex;flex-direction:column}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .body .selection-options{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .body .selection-options{width:100%}}.PageRedactionModal .container .body .selection-options .page-number-input{height:28px;width:90%;align-self:flex-end}.PageRedactionModal .container .body .selection-options .ui__choice--disabled{text-decoration:line-through}.PageRedactionModal .container .body .selection-options .ui__choice{font-size:13px}.PageRedactionModal .container .footer{margin-top:0;width:100%;display:flex;align-items:center;justify-content:flex-end;padding:16px;border-top:1px solid var(--divider)}.PageRedactionModal .container .footer .Button{margin-top:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .footer .Button{padding:8px 16px!important}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .footer .Button{padding:8px 16px!important}}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1856:function(e,t,n){"use strict";n.r(t);n(40),n(45),n(51),n(116),n(127),n(19),n(12),n(14),n(8),n(13),n(9),n(10),n(11),n(16),n(15),n(20),n(17);var o=n(0),a=n.n(o),i=n(5),r=n(6),d=n(3),c=n(2),l=n(1),p=n(1392),s=n(354),u=n(18),m=n.n(u),f=n(409),g=n(49),h=n(207),b=n(144),x=n(4),y=n.n(x),w=n(1376),v=n(355);n(1639);function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,i,r,d=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=i.call(n)).done)&&(d.push(o.value),d.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(l)throw a}}return d}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var P={closeModal:y.a.func,currentPage:y.a.number,pageLabels:y.a.array,selectedPages:y.a.array,markPages:y.a.func,redactPages:y.a.func,evenDisabled:y.a.bool,renderCanvases:y.a.func,isOpen:y.a.bool},A="current",k="specify",E="odd",O="even",j=function(e){var t=e.closeModal,n=e.pageLabels,r=e.selectedPages,d=e.currentPage,c=e.markPages,l=e.redactPages,p=e.evenDisabled,u=e.renderCanvases,x=e.isOpen,y=Object(f.a)().t,M=R(Object(o.useState)(A),2),P=M[0],j=M[1],S=R(Object(o.useState)(),2),C=S[0],D=S[1];Object(o.useEffect)((function(){D(r)}),[r]);var T=function(){var e=[];if(P===A)return[d];if(P===k)return C;if(P===E)for(var t=1;n.length>=t;t+=2)e.push(t);else if(P===O)for(var o=2;n.length>=o;o+=2)e.push(o);return e},L=Object(o.useRef)();Object(o.useEffect)((function(){x&&u(L,T())}),[P,x,C,u,T]);var _=function(e){var n=e.event.target;(L.current.clientHeight<L.current.scrollHeight||L.current.clientWidth<L.current.scrollWidth)&&(n===L.current||L.current.contains(n))?e.event.stopPropagation():t()};return a.a.createElement(b.a,{onSwipedUp:_,onSwipedDown:_,preventDefaultTouchmoveEvent:!0,focus:!0},a.a.createElement(w.a,{locked:x},a.a.createElement("div",{className:m()({Modal:!0,PageRedactionModal:!0,open:x,closed:!x}),"data-element":i.a.PAGE_REDACT_MODAL},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"swipe-indicator"}),a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"header-text"},y("option.pageRedactModal.header")),a.a.createElement(g.a,{onClick:t,img:"icon-close"})),a.a.createElement("div",{className:"body"},a.a.createElement("div",{className:"canvas-container",ref:L}),a.a.createElement("form",{className:"selection-options",onChange:function(e){e.target.classList.contains("page-number-input")||j(e.target.value)},onSubmit:function(e){return e.preventDefault()}},a.a.createElement("strong",null,y("option.pageRedactModal.pageSelection")),a.a.createElement(h.a,{checked:P===A,radio:!0,name:"page-redaction-option",label:y("option.pageRedactModal.current"),value:A}),a.a.createElement(h.a,{checked:P===k,radio:!0,name:"page-redaction-option",label:y("option.pageRedactModal.specify"),value:k}),"specify"===P&&a.a.createElement(v.a,{selectedPageNumbers:C,pageCount:n.length,onBlurHandler:function(e){return D(e)},placeHolder:s.a}),a.a.createElement(h.a,{checked:P===E,radio:!0,name:"page-redaction-option",label:y("option.pageRedactModal.odd"),value:E}),a.a.createElement(h.a,{checked:P===O,radio:!0,name:"page-redaction-option",label:y("option.pageRedactModal.even"),value:O,disabled:p}))),a.a.createElement("div",{className:"footer"},a.a.createElement(g.a,{className:"cancel modal-button",dataElement:"modalRedactButton",label:"annotation.redact",onClick:function(){return l(T())}}),a.a.createElement(g.a,{className:"confirm modal-button",dataElement:"modalMarkRedactButton",label:"option.pageRedactModal.addMark",onClick:function(){return c(T())}}))))))};j.propTypes=P;var S=j;function C(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,i,r,d=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=i.call(n)).done)&&(d.push(o.value),d.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(l)throw a}}return d}}(e,t)||T(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var _=function(){var e=Object(r.d)(),t=D(Object(r.e)((function(e){return[d.a.isElementOpen(e,i.a.PAGE_REDACT_MODAL),d.a.getCurrentPage(e),d.a.getSelectedThumbnailPageIndexes(e),d.a.getPageLabels(e),d.a.getActiveToolName(e),d.a.getActiveToolStyles(e)]})),6),n=t[0],s=t[1],u=t[2],m=t[3],f=t[4],g=t[5],h=Object(o.useRef)(0),b=u.map((function(e){return e+1}));Object(o.useEffect)((function(){n&&e(c.a.closeElements([i.a.PRINT_MODAL,i.a.LOADING_MODAL,i.a.PROGRESS_MODAL,i.a.ERROR_MODAL]))}),[n,e]);var x=function(){return e(c.a.closeElement(i.a.PAGE_REDACT_MODAL))},y=function(){return null!=f&&f.includes("AnnotationCreateRedaction")?g:{}},w=D(Object(o.useState)(!1),2),v=w[0],R=w[1];return Object(o.useEffect)((function(){var e=function(){var e=l.a.getDocument(),t=e.getDocumentCompletePromise();null==t||t.then((function(){var t=e.getPageCount();R(t<2)}))};return l.a.addEventListener("documentLoaded",e),function(){return l.a.removeEventListener("documentLoaded",e)}}),[]),a.a.createElement(S,{evenDisabled:v,closeModal:x,renderCanvases:function(e,t){var o;h.current++;for(var a=h.current,i=C(t),r=l.a.getDocument();e.current.firstChild;)e.current.removeChild(e.current.firstChild);if(i){(null===(o=i)||void 0===o?void 0:o.length)>10&&(i=i.splice(0,10));var d,c=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=T(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){d=!0,i=e},f:function(){try{r||null==n.return||n.return()}finally{if(d)throw i}}}}(i);try{for(c.s();!(d=c.n()).done;){var p=d.value,s=null==r?void 0:r.getPageInfo(p);if(n&&r&&e.current&&s){var u=1,m=e.current.getBoundingClientRect(),f=parseInt(window.getComputedStyle(e.current).borderWidth)+.1;m.height-=f,m.width-=f,(u=s.width>s.height?m.width/s.width:m.height/s.height)>0&&r.loadCanvas({pageNumber:p,zoom:u,pageRotation:0,drawComplete:function(t){var n;a===h.current&&(null===(n=e.current)||void 0===n||n.appendChild(t))},allowUseOfOptimizedThumbnail:!0})}}}catch(e){c.e(e)}finally{c.f()}}},redactPages:function(e){Object(p.l)(e,y()),x()},markPages:function(e){Object(p.a)(e,y()),x()},currentPage:s,selectedPages:b,pageLabels:m,isOpen:n})};t.default=_}}]);
//# sourceMappingURL=67.chunk.js.map