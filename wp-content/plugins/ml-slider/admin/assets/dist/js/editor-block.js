/*! For license information please see editor-block.js.LICENSE.txt */
(()=>{"use strict";var e={20:(e,t,r)=>{var i=r(609),n=60103;if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),o("react.fragment")}var s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var i,o={},c=null,d=null;for(i in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,i)&&!a.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:d,props:o,_owner:s.current}}t.jsx=c,t.jsxs=c},848:(e,t,r)=>{e.exports=r(20)},609:e=>{e.exports=window.React}},t={};var r=function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}(848);const i=(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 255.8 255.8",xmlSpace:"preserve",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"M127.9,0C57.3,0,0,57.3,0,127.9c0,70.6,57.3,127.9,127.9,127.9c70.6,0,127.9-57.3,127.9-127.9C255.8,57.3,198.5,0,127.9,0z M16.4,177.1l92.5-117.5L124.2,79l-77.3,98.1H16.4z M170.5,177.1l-38.9-49.4l15.5-19.6l54.4,69H170.5z M208.5,177.1L146.9,99 l-61.6,78.2h-31l92.5-117.5l92.5,117.5H208.5z"})})});function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,s(i.key),i)}}function s(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}function l(e,t,r){return t=c(t),function(e,t){if(t&&("object"==n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,a()?Reflect.construct(t,r||[],c(e).constructor):t.apply(e,r))}function a(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(a=function(){return!!e})()}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}var u=window.wp,p=window.React,h=u.components,f=h.Placeholder,w=h.Spinner,m=u.i18n.__,v=u.apiRequest;const b=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=l(this,t,[e])).state={height:200,previewIsLoading:!0,slideshowId:null,html:"",previewErrorMessage:""},r.handleOnLoad=r.handleOnLoad.bind(r),r.setHeight=r.setHeight.bind(r),r.getPreview=r.getPreview.bind(r),r.handleResize=r.handleResize.bind(r),r.iframe=p.createRef(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(t,e),n=t,(s=[{key:"componentDidMount",value:function(){this.getPreview(),window.addEventListener("resize",this.handleResize),this.props.componentDidMount&&this.props.componentDidMount(this)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),this.props.componentWillUnmount&&this.props.componentWillUnmount()}},{key:"componentDidUpdate",value:function(e){this.props.slideshowId===e.slideshowId&&this.props.refresh===e.refresh||(this.setHeight(200),this.getPreview(),this.iframe.current.contentDocument.location.reload(!0))}},{key:"handleOnLoad",value:function(e){var t=this;this.state.html&&(this.iframe.current.contentDocument.editor_block=this,setTimeout((function(){clearInterval(t.loadInterval),t.setHeight(t.iframe.current.contentDocument.body.clientHeight)}),50),this.setState({previewIsLoading:!1}))}},{key:"handleResize",value:function(e){this.setHeight(this.iframe.current.contentDocument.body.clientHeight)}},{key:"setHeight",value:function(e){this.setState({height:e>200?e:200})}},{key:"getPreview",value:function(){var e=this;try{this.setState({html:"",previewIsLoading:!0,previewErrorMessage:""}),v({path:"/metaslider/v1/slideshow/preview",data:{action:"ms_get_preview",slideshow_id:this.props.slideshowId,override_preview_style:!0}}).then((function(t){e.setState({html:t.data}),e.setHeight(e.iframe.current.contentDocument.body.clientHeight)})).fail((function(t){410===t.status?(e.setState({previewIsLoading:!1,previewErrorMessage:t.responseJSON.data.message}),console.error("MetaSlider (Gutenberg): Slideshow not found:",t)):console.error("MetaSlider (Gutenberg): Could not load the preview:",t)}))}catch(e){console.error("MetaSlider (Gutenberg): A general error occured:",e)}}},{key:"render",value:function(){return(0,r.jsxs)("div",{className:this.props.className+(this.state.previewIsLoading?"":" loading")+" ms-preview",children:[(0,r.jsx)("iframe",{height:this.state.height,srcDoc:this.state.html||"",onLoad:this.handleOnLoad,ref:this.iframe},"preview-iframe"),(0,r.jsx)("div",{className:"ms-preview__trigger"},"trigger"),this.state.previewIsLoading&&(0,r.jsxs)(f,{className:"ms-loader",label:[i," MetaSlider"],children:[(0,r.jsx)(w,{})," ",m("Loading slideshow","ml-slider")]},"ms-loader"),this.state.previewErrorMessage&&(0,r.jsx)(f,{className:"ms-loader",label:[i," MetaSlider"],children:this.state.previewErrorMessage},"ms-preview-empty")]})}}])&&o(n.prototype,s),a&&o(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,s,a}(p.Component);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=g(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=g(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==g(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=window.wp,x=_.i18n.__,O=_.components.Toolbar,P={normal:{icon:"align-center",title:x("Normal width","ml-slider")},wide:{icon:"align-wide",title:x("Wide width","ml-slider")},full:{icon:"align-full-width",title:x("Full width","ml-slider")}},E=["normal","wide","full"];function C(e){var t=e.value,i=e.onChange,n=e.controls;var o=void 0===n?E:n;return(0,r.jsx)(O,{controls:o.map((function(e){return S(S({},P[e]),{},{isActive:t===e,onClick:(r=e,function(){return i(t===r?void 0:r)})});var r}))})}var k=window.wp,I=k.i18n.__,L=k.components.SelectControl;function M(e){var t=e.props,i=t.attributes.slideshowId,n=t.slideshows;return(0,r.jsx)(L,{label:I("Select a slideshow","ml-slider"),value:i,options:[{label:"-- "+I("Select a slideshow","ml-slider")+" --",value:0}].concat(n.items.map((function(e){return{key:e.id,label:k.htmlEntities.decodeEntities(e.title)+" (#"+e.id+")",value:e.id}}))),onChange:function(e){e=parseInt(e),t.setAttributes({slideshowId:e})}})}var N=window.wp,R=N.i18n.__,D=N.components.Toolbar;function T(e){e.value,e.onChange;var t=e.onClick;return(0,r.jsx)(D,{controls:[{icon:"update",title:R("Update preview","ml-slider"),isActive:!1,onClick:t}]})}const H=window.wp.blockEditor;var z=window.wp,A=z.i18n.__,W=z.element.Fragment,B=z.data.withSelect,U=z.components,q=U.TextControl,F=U.Placeholder,G=U.Spinner,$=U.PanelBody,J=U.BaseControl,X=window.metaslider_block_config||{};const Y=B((function(e){return{wideControlsEnabled:e("core/editor")&&"post"===e("core/editor").getCurrentPostType()&&e("core/editor").getEditorSettings().alignWide}}))((function(e){var t=e.slideshows,n=e.className,o=e.isSelected,s=e.wideControlsEnabled,l=void 0!==s&&s,a=e.attributes.slideshowId,c=e.attributes.stretch,d=e.attributes.containerClass,u=t.isLoading,p=t.items.length||!1,h=e.attributes.refreshPreview,f=o&&(0,r.jsxs)(W,{children:[(0,r.jsx)(H.InspectorControls,{children:(0,r.jsxs)($,{title:A("Slideshow settings","ml-slider"),children:[p&&(0,r.jsx)(M,{props:e}),0!==a&&(0,r.jsx)("a",{href:X.plugin_page+"&id="+a,target:"_blank",className:"ms-edit-current-slideshow",children:A("Edit slideshow","ml-slider")}),l&&(0,r.jsx)(J,{label:A("Slideshow width","ml-slider"),children:(0,r.jsx)(C,{value:c,onChange:function(t){setTimeout((function(){window.dispatchEvent(new Event("resize"))}),50),e.setAttributes({stretch:t})}})})]})},"inspector"),(0,r.jsx)(H.InspectorAdvancedControls,{children:(0,r.jsx)(J,{label:A("Additional CSS Class","ml-slider"),children:(0,r.jsx)(q,{value:d,onChange:function(t){e.setAttributes({containerClass:t})}})})}),(0,r.jsxs)(H.BlockControls,{children:[l&&(0,r.jsx)(C,{label:A("Slideshow width","ml-slider"),value:c,onChange:function(t){setTimeout((function(){window.dispatchEvent(new Event("resize"))}),50),e.setAttributes({stretch:t})}}),0!==a&&(0,r.jsx)(T,{label:A("Refresh preview","ml-slider"),onClick:function(){e.setAttributes({refreshPreview:!h})}},"refresh")]},"controls")]},"inspectorControls");return p||a||!u?p||a||u?[f,!!a&&(0,r.jsx)(b,{className:n,src:X.preview_url+"&slideshow_id="+a,slideshowId:a,isSelected:o,refresh:h},"preview"),!a&&(0,r.jsx)(F,{className:e.className,label:[i," MetaSlider"],children:(0,r.jsx)(M,{props:e},"slidehow-selector")},"instructions")]:(0,r.jsxs)(F,{className:n,label:[i," MetaSlider"],children:[A("No slideshows found.","ml-slider")," ",(0,r.jsx)("a",{target:"_blank",href:X.plugin_page,children:A("Create one now!","ml-slider")})]}):(0,r.jsxs)(F,{className:n,label:[i," MetaSlider"],children:[(0,r.jsx)(G,{},"spinner")," ",A("Loading slideshows list...","ml-slider")]})}));var K=window.wp.element.Fragment;const Q=function(e){var t=e.attributes,i=t.slideshowId,n=t.stretch,o=(t.containerClass,n?"align"+n:"");return!!i&&(0,r.jsx)(K,{children:(0,r.jsxs)("div",{class:o,children:['[metaslider id="',i,'"]']})})||""};var V=window.wp,Z=V.i18n.__,ee=V.blocks.registerBlockType,te=V.data,re=te.registerStore,ie=te.dispatch,ne=te.withSelect,oe=V.apiRequest,se={items:[],isLoading:!0};re("metaslider",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return"SET_SLIDESHOWS"===t.type?{items:t.items,isLoading:!1}:e},actions:{setSlideshows:function(e){return{type:"SET_SLIDESHOWS",items:e}}},selectors:{getSlideshows:function(e){return e}},resolvers:{getSlideshows:function(e,t){try{oe({path:"/metaslider/v1/slideshow/list"}).then((function(e){!0===e.success?ie("metaslider").setSlideshows(e.data):(console.warn("MetaSlider: API Request error:",e.data.message),ie("metaslider").setSlideshows([]))}))}catch(e){console.warn("MetaSlider: API Request error:",e),ie("metaslider").setSlideshows([])}}}}),ee("metaslider/slider",{title:"MetaSlider",description:Z("Use MetaSlider to insert slideshows and sliders in your page","ml-slider"),icon:i,category:"common",keywords:[Z("slider","ml-slider"),Z("slideshow","ml-slider"),Z("gallery","ml-slider")],attributes:{slideshowId:{type:"number",default:0},stretch:{type:"string",default:"normal"},containerClass:{type:"string",default:""}},supports:{customClassName:!1},edit:ne((function(e,t){return{slideshows:(0,e("metaslider").getSlideshows)()}}))(Y),save:function(e){return Q(e)},getEditWrapperProps:function(e){var t=e.stretch;if(-1!==["wide","full","normal"].indexOf(t))return{"data-align":t}}})})();