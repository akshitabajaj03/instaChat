function TE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fg={exports:{}},vl={},Vg={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zs=Symbol.for("react.element"),CE=Symbol.for("react.portal"),NE=Symbol.for("react.fragment"),AE=Symbol.for("react.strict_mode"),RE=Symbol.for("react.profiler"),xE=Symbol.for("react.provider"),DE=Symbol.for("react.context"),PE=Symbol.for("react.forward_ref"),OE=Symbol.for("react.suspense"),LE=Symbol.for("react.memo"),$E=Symbol.for("react.lazy"),Xf=Symbol.iterator;function ME(t){return t===null||typeof t!="object"?null:(t=Xf&&t[Xf]||t["@@iterator"],typeof t=="function"?t:null)}var zg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jg=Object.assign,bg={};function Si(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||zg}Si.prototype.isReactComponent={};Si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bg(){}Bg.prototype=Si.prototype;function Mh(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||zg}var Uh=Mh.prototype=new Bg;Uh.constructor=Mh;jg(Uh,Si.prototype);Uh.isPureReactComponent=!0;var Jf=Array.isArray,Hg=Object.prototype.hasOwnProperty,Fh={current:null},Wg={key:!0,ref:!0,__self:!0,__source:!0};function qg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hg.call(e,r)&&!Wg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zs,type:t,key:s,ref:o,props:i,_owner:Fh.current}}function UE(t,e){return{$$typeof:Zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zs}function FE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zf=/\/+/g;function mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FE(""+t.key):e.toString(36)}function ia(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zs:case CE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+mu(o,0):r,Jf(i)?(n="",t!=null&&(n=t.replace(Zf,"$&/")+"/"),ia(i,e,n,"",function(u){return u})):i!=null&&(Vh(i)&&(i=UE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+mu(s,a);o+=ia(s,e,n,l,i)}else if(l=ME(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+mu(s,a++),o+=ia(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Do(t,e,n){if(t==null)return t;var r=[],i=0;return ia(t,r,"","",function(s){return e.call(n,s,i++)}),r}function VE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},sa={transition:null},zE={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:sa,ReactCurrentOwner:Fh};W.Children={map:Do,forEach:function(t,e,n){Do(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Do(t,function(){e++}),e},toArray:function(t){return Do(t,function(e){return e})||[]},only:function(t){if(!Vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Si;W.Fragment=NE;W.Profiler=RE;W.PureComponent=Mh;W.StrictMode=AE;W.Suspense=OE;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hg.call(e,l)&&!Wg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Zs,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:DE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xE,_context:t},t.Consumer=t};W.createElement=qg;W.createFactory=function(t){var e=qg.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:PE,render:t}};W.isValidElement=Vh;W.lazy=function(t){return{$$typeof:$E,_payload:{_status:-1,_result:t},_init:VE}};W.memo=function(t,e){return{$$typeof:LE,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=sa.transition;sa.transition={};try{t()}finally{sa.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return Xe.current.useCallback(t,e)};W.useContext=function(t){return Xe.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};W.useEffect=function(t,e){return Xe.current.useEffect(t,e)};W.useId=function(){return Xe.current.useId()};W.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Xe.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};W.useRef=function(t){return Xe.current.useRef(t)};W.useState=function(t){return Xe.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Xe.current.useTransition()};W.version="18.2.0";Vg.exports=W;var C=Vg.exports;const Kg=kE(C),jE=TE({__proto__:null,default:Kg},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bE=C,BE=Symbol.for("react.element"),HE=Symbol.for("react.fragment"),WE=Object.prototype.hasOwnProperty,qE=bE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KE={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WE.call(e,r)&&!KE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BE,type:t,key:s,ref:o,props:i,_owner:qE.current}}vl.Fragment=HE;vl.jsx=Gg;vl.jsxs=Gg;Fg.exports=vl;var j=Fg.exports,lc={},Qg={exports:{}},ct={},Yg={exports:{}},Xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,z){var b=x.length;x.push(z);e:for(;0<b;){var de=b-1>>>1,Se=x[de];if(0<i(Se,z))x[de]=z,x[b]=Se,b=de;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var z=x[0],b=x.pop();if(b!==z){x[0]=b;e:for(var de=0,Se=x.length,Ro=Se>>>1;de<Ro;){var Gn=2*(de+1)-1,pu=x[Gn],Qn=Gn+1,xo=x[Qn];if(0>i(pu,b))Qn<Se&&0>i(xo,pu)?(x[de]=xo,x[Qn]=b,de=Qn):(x[de]=pu,x[Gn]=b,de=Gn);else if(Qn<Se&&0>i(xo,b))x[de]=xo,x[Qn]=b,de=Qn;else break e}}return z}function i(x,z){var b=x.sortIndex-z.sortIndex;return b!==0?b:x.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=x)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function w(x){if(v=!1,m(x),!y)if(n(l)!==null)y=!0,du(T);else{var z=n(u);z!==null&&fu(w,z.startTime-x)}}function T(x,z){y=!1,v&&(v=!1,p(O),O=-1),g=!0;var b=d;try{for(m(z),h=n(l);h!==null&&(!(h.expirationTime>z)||x&&!Et());){var de=h.callback;if(typeof de=="function"){h.callback=null,d=h.priorityLevel;var Se=de(h.expirationTime<=z);z=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),m(z)}else r(l);h=n(l)}if(h!==null)var Ro=!0;else{var Gn=n(u);Gn!==null&&fu(w,Gn.startTime-z),Ro=!1}return Ro}finally{h=null,d=b,g=!1}}var R=!1,D=null,O=-1,J=5,B=-1;function Et(){return!(t.unstable_now()-B<J)}function Li(){if(D!==null){var x=t.unstable_now();B=x;var z=!0;try{z=D(!0,x)}finally{z?$i():(R=!1,D=null)}}else R=!1}var $i;if(typeof f=="function")$i=function(){f(Li)};else if(typeof MessageChannel<"u"){var Yf=new MessageChannel,IE=Yf.port2;Yf.port1.onmessage=Li,$i=function(){IE.postMessage(null)}}else $i=function(){_(Li,0)};function du(x){D=x,R||(R=!0,$i())}function fu(x,z){O=_(function(){x(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,du(T))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var b=d;d=z;try{return x()}finally{d=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,z){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var b=d;d=x;try{return z()}finally{d=b}},t.unstable_scheduleCallback=function(x,z,b){var de=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?de+b:de):b=de,x){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=b+Se,x={id:c++,callback:z,priorityLevel:x,startTime:b,expirationTime:Se,sortIndex:-1},b>de?(x.sortIndex=b,e(u,x),n(l)===null&&x===n(u)&&(v?(p(O),O=-1):v=!0,fu(w,b-de))):(x.sortIndex=Se,e(l,x),y||g||(y=!0,du(T))),x},t.unstable_shouldYield=Et,t.unstable_wrapCallback=function(x){var z=d;return function(){var b=d;d=z;try{return x.apply(this,arguments)}finally{d=b}}}})(Xg);Yg.exports=Xg;var GE=Yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg=C,lt=GE;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zg=new Set,gs={};function Sr(t,e){si(t,e),si(t+"Capture",e)}function si(t,e){for(gs[t]=e,t=0;t<e.length;t++)Zg.add(e[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=Object.prototype.hasOwnProperty,QE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ep={},tp={};function YE(t){return uc.call(tp,t)?!0:uc.call(ep,t)?!1:QE.test(t)?tp[t]=!0:(ep[t]=!0,!1)}function XE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JE(t,e,n,r){if(e===null||typeof e>"u"||XE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var zh=/[\-:]([a-z])/g;function jh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zh,jh);Oe[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zh,jh);Oe[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zh,jh);Oe[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function bh(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JE(e,n,i,r)&&(n=null),r||i===null?YE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cn=Jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),ey=Symbol.for("react.provider"),ty=Symbol.for("react.context"),Hh=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),dc=Symbol.for("react.suspense_list"),Wh=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),ny=Symbol.for("react.offscreen"),np=Symbol.iterator;function Mi(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,gu;function qi(t){if(gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gu=e&&e[1]||""}return`
`+gu+t}var yu=!1;function vu(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qi(t):""}function ZE(t){switch(t.tag){case 5:return qi(t.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 2:case 15:return t=vu(t.type,!1),t;case 11:return t=vu(t.type.render,!1),t;case 1:return t=vu(t.type,!0),t;default:return""}}function fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Or:return"Fragment";case Pr:return"Portal";case cc:return"Profiler";case Bh:return"StrictMode";case hc:return"Suspense";case dc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ty:return(t.displayName||"Context")+".Consumer";case ey:return(t._context.displayName||"Context")+".Provider";case Hh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wh:return e=t.displayName||null,e!==null?e:fc(t.type)||"Memo";case pn:e=t._payload,t=t._init;try{return fc(t(e))}catch{}}return null}function e_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ry(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t_(t){var e=ry(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oo(t){t._valueTracker||(t._valueTracker=t_(t))}function iy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ry(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ta(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pc(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Un(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sy(t,e){e=e.checked,e!=null&&bh(t,"checked",e,!1)}function mc(t,e){sy(t,e);var n=Un(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&gc(t,e.type,Un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gc(t,e,n){(e!=="number"||Ta(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ki=Array.isArray;function qr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Un(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Ki(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Un(n)}}function oy(t,e){var n=Un(e.value),r=Un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ay(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ay(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,ly=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n_=["Webkit","ms","Moz","O"];Object.keys(ts).forEach(function(t){n_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ts[e]=ts[t]})});function uy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ts.hasOwnProperty(t)&&ts[t]?(""+e).trim():e+"px"}function cy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var r_=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wc(t,e){if(e){if(r_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Ec(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _c=null;function qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sc=null,Kr=null,Gr=null;function ap(t){if(t=no(t)){if(typeof Sc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Il(e),Sc(t.stateNode,t.type,e))}}function hy(t){Kr?Gr?Gr.push(t):Gr=[t]:Kr=t}function dy(){if(Kr){var t=Kr,e=Gr;if(Gr=Kr=null,ap(t),e)for(t=0;t<e.length;t++)ap(e[t])}}function fy(t,e){return t(e)}function py(){}var wu=!1;function my(t,e,n){if(wu)return t(e,n);wu=!0;try{return fy(t,e,n)}finally{wu=!1,(Kr!==null||Gr!==null)&&(py(),dy())}}function vs(t,e){var n=t.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Ic=!1;if(en)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{Ic=!1}function i_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ns=!1,ka=null,Ca=!1,Tc=null,s_={onError:function(t){ns=!0,ka=t}};function o_(t,e,n,r,i,s,o,a,l){ns=!1,ka=null,i_.apply(s_,arguments)}function a_(t,e,n,r,i,s,o,a,l){if(o_.apply(this,arguments),ns){if(ns){var u=ka;ns=!1,ka=null}else throw Error(S(198));Ca||(Ca=!0,Tc=u)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lp(t){if(Ir(t)!==t)throw Error(S(188))}function l_(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return lp(i),t;if(s===r)return lp(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function yy(t){return t=l_(t),t!==null?vy(t):null}function vy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vy(t);if(e!==null)return e;t=t.sibling}return null}var wy=lt.unstable_scheduleCallback,up=lt.unstable_cancelCallback,u_=lt.unstable_shouldYield,c_=lt.unstable_requestPaint,fe=lt.unstable_now,h_=lt.unstable_getCurrentPriorityLevel,Kh=lt.unstable_ImmediatePriority,Ey=lt.unstable_UserBlockingPriority,Na=lt.unstable_NormalPriority,d_=lt.unstable_LowPriority,_y=lt.unstable_IdlePriority,wl=null,Ut=null;function f_(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:g_,p_=Math.log,m_=Math.LN2;function g_(t){return t>>>=0,t===0?32:31-(p_(t)/m_|0)|0}var $o=64,Mo=4194304;function Gi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Aa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Gi(a):(s&=o,s!==0&&(r=Gi(s)))}else o=n&~i,o!==0?r=Gi(o):s!==0&&(r=Gi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function y_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=y_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sy(){var t=$o;return $o<<=1,!($o&4194240)&&($o=64),t}function Eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function w_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Iy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ty,Qh,ky,Cy,Ny,Cc=!1,Uo=[],kn=null,Cn=null,Nn=null,ws=new Map,Es=new Map,gn=[],E_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cp(t,e){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(e.pointerId)}}function Fi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=no(e),e!==null&&Qh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function __(t,e,n,r,i){switch(e){case"focusin":return kn=Fi(kn,t,e,n,r,i),!0;case"dragenter":return Cn=Fi(Cn,t,e,n,r,i),!0;case"mouseover":return Nn=Fi(Nn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ws.set(s,Fi(ws.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Es.set(s,Fi(Es.get(s)||null,t,e,n,r,i)),!0}return!1}function Ay(t){var e=Zn(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=gy(n),e!==null){t.blockedOn=e,Ny(t.priority,function(){ky(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_c=r,n.target.dispatchEvent(r),_c=null}else return e=no(n),e!==null&&Qh(e),t.blockedOn=n,!1;e.shift()}return!0}function hp(t,e,n){oa(t)&&n.delete(e)}function S_(){Cc=!1,kn!==null&&oa(kn)&&(kn=null),Cn!==null&&oa(Cn)&&(Cn=null),Nn!==null&&oa(Nn)&&(Nn=null),ws.forEach(hp),Es.forEach(hp)}function Vi(t,e){t.blockedOn===e&&(t.blockedOn=null,Cc||(Cc=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,S_)))}function _s(t){function e(i){return Vi(i,t)}if(0<Uo.length){Vi(Uo[0],t);for(var n=1;n<Uo.length;n++){var r=Uo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kn!==null&&Vi(kn,t),Cn!==null&&Vi(Cn,t),Nn!==null&&Vi(Nn,t),ws.forEach(e),Es.forEach(e),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)Ay(n),n.blockedOn===null&&gn.shift()}var Qr=cn.ReactCurrentBatchConfig,Ra=!0;function I_(t,e,n,r){var i=Y,s=Qr.transition;Qr.transition=null;try{Y=1,Yh(t,e,n,r)}finally{Y=i,Qr.transition=s}}function T_(t,e,n,r){var i=Y,s=Qr.transition;Qr.transition=null;try{Y=4,Yh(t,e,n,r)}finally{Y=i,Qr.transition=s}}function Yh(t,e,n,r){if(Ra){var i=Nc(t,e,n,r);if(i===null)xu(t,e,r,xa,n),cp(t,r);else if(__(i,t,e,n,r))r.stopPropagation();else if(cp(t,r),e&4&&-1<E_.indexOf(t)){for(;i!==null;){var s=no(i);if(s!==null&&Ty(s),s=Nc(t,e,n,r),s===null&&xu(t,e,r,xa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xu(t,e,r,null,n)}}var xa=null;function Nc(t,e,n,r){if(xa=null,t=qh(r),t=Zn(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xa=t,null}function Ry(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h_()){case Kh:return 1;case Ey:return 4;case Na:case d_:return 16;case _y:return 536870912;default:return 16}default:return 16}}var _n=null,Xh=null,aa=null;function xy(){if(aa)return aa;var t,e=Xh,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return aa=i.slice(t,1<r?1-r:void 0)}function la(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function dp(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fo:dp,this.isPropagationStopped=dp,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),e}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=ht(Ii),to=le({},Ii,{view:0,detail:0}),k_=ht(to),_u,Su,zi,El=le({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zi&&(zi&&t.type==="mousemove"?(_u=t.screenX-zi.screenX,Su=t.screenY-zi.screenY):Su=_u=0,zi=t),_u)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),fp=ht(El),C_=le({},El,{dataTransfer:0}),N_=ht(C_),A_=le({},to,{relatedTarget:0}),Iu=ht(A_),R_=le({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),x_=ht(R_),D_=le({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P_=ht(D_),O_=le({},Ii,{data:0}),pp=ht(O_),L_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=M_[t])?!!e[t]:!1}function Zh(){return U_}var F_=le({},to,{key:function(t){if(t.key){var e=L_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zh,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V_=ht(F_),z_=le({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=ht(z_),j_=le({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zh}),b_=ht(j_),B_=le({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),H_=ht(B_),W_=le({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=ht(W_),K_=[9,13,27,32],ed=en&&"CompositionEvent"in window,rs=null;en&&"documentMode"in document&&(rs=document.documentMode);var G_=en&&"TextEvent"in window&&!rs,Dy=en&&(!ed||rs&&8<rs&&11>=rs),gp=String.fromCharCode(32),yp=!1;function Py(t,e){switch(t){case"keyup":return K_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function Q_(t,e){switch(t){case"compositionend":return Oy(e);case"keypress":return e.which!==32?null:(yp=!0,gp);case"textInput":return t=e.data,t===gp&&yp?null:t;default:return null}}function Y_(t,e){if(Lr)return t==="compositionend"||!ed&&Py(t,e)?(t=xy(),aa=Xh=_n=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dy&&e.locale!=="ko"?null:e.data;default:return null}}var X_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X_[t.type]:e==="textarea"}function Ly(t,e,n,r){hy(r),e=Da(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var is=null,Ss=null;function J_(t){Wy(t,0)}function _l(t){var e=Ur(t);if(iy(e))return t}function Z_(t,e){if(t==="change")return e}var $y=!1;if(en){var Tu;if(en){var ku="oninput"in document;if(!ku){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),ku=typeof wp.oninput=="function"}Tu=ku}else Tu=!1;$y=Tu&&(!document.documentMode||9<document.documentMode)}function Ep(){is&&(is.detachEvent("onpropertychange",My),Ss=is=null)}function My(t){if(t.propertyName==="value"&&_l(Ss)){var e=[];Ly(e,Ss,t,qh(t)),my(J_,e)}}function eS(t,e,n){t==="focusin"?(Ep(),is=e,Ss=n,is.attachEvent("onpropertychange",My)):t==="focusout"&&Ep()}function tS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(Ss)}function nS(t,e){if(t==="click")return _l(e)}function rS(t,e){if(t==="input"||t==="change")return _l(e)}function iS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var At=typeof Object.is=="function"?Object.is:iS;function Is(t,e){if(At(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uc.call(e,i)||!At(t[i],e[i]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sp(t,e){var n=_p(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_p(n)}}function Uy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fy(){for(var t=window,e=Ta();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ta(t.document)}return e}function td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sS(t){var e=Fy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uy(n.ownerDocument.documentElement,n)){if(r!==null&&td(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sp(n,s);var o=Sp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oS=en&&"documentMode"in document&&11>=document.documentMode,$r=null,Ac=null,ss=null,Rc=!1;function Ip(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rc||$r==null||$r!==Ta(r)||(r=$r,"selectionStart"in r&&td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ss&&Is(ss,r)||(ss=r,r=Da(Ac,"onSelect"),0<r.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$r)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},Cu={},Vy={};en&&(Vy=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Sl(t){if(Cu[t])return Cu[t];if(!Mr[t])return t;var e=Mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vy)return Cu[t]=e[n];return t}var zy=Sl("animationend"),jy=Sl("animationiteration"),by=Sl("animationstart"),By=Sl("transitionend"),Hy=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(t,e){Hy.set(t,e),Sr(e,[t])}for(var Nu=0;Nu<Tp.length;Nu++){var Au=Tp[Nu],aS=Au.toLowerCase(),lS=Au[0].toUpperCase()+Au.slice(1);bn(aS,"on"+lS)}bn(zy,"onAnimationEnd");bn(jy,"onAnimationIteration");bn(by,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(By,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function kp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,a_(r,e,void 0,t),t.currentTarget=null}function Wy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;kp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;kp(i,a,u),s=l}}}if(Ca)throw t=Tc,Ca=!1,Tc=null,t}function ee(t,e){var n=e[Lc];n===void 0&&(n=e[Lc]=new Set);var r=t+"__bubble";n.has(r)||(qy(e,t,2,!1),n.add(r))}function Ru(t,e,n){var r=0;e&&(r|=4),qy(n,t,r,e)}var zo="_reactListening"+Math.random().toString(36).slice(2);function Ts(t){if(!t[zo]){t[zo]=!0,Zg.forEach(function(n){n!=="selectionchange"&&(uS.has(n)||Ru(n,!1,t),Ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zo]||(e[zo]=!0,Ru("selectionchange",!1,e))}}function qy(t,e,n,r){switch(Ry(e)){case 1:var i=I_;break;case 4:i=T_;break;default:i=Yh}n=i.bind(null,e,n,t),i=void 0,!Ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}my(function(){var u=s,c=qh(n),h=[];e:{var d=Hy.get(t);if(d!==void 0){var g=Jh,y=t;switch(t){case"keypress":if(la(n)===0)break e;case"keydown":case"keyup":g=V_;break;case"focusin":y="focus",g=Iu;break;case"focusout":y="blur",g=Iu;break;case"beforeblur":case"afterblur":g=Iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=N_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=b_;break;case zy:case jy:case by:g=x_;break;case By:g=H_;break;case"scroll":g=k_;break;case"wheel":g=q_;break;case"copy":case"cut":case"paste":g=P_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=mp}var v=(e&4)!==0,_=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=vs(f,p),w!=null&&v.push(ks(f,w,m)))),_)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==_c&&(y=n.relatedTarget||n.fromElement)&&(Zn(y)||y[tn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Zn(y):null,y!==null&&(_=Ir(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=fp,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=mp,w="onPointerLeave",p="onPointerEnter",f="pointer"),_=g==null?d:Ur(g),m=y==null?d:Ur(y),d=new v(w,f+"leave",g,n,c),d.target=_,d.relatedTarget=m,w=null,Zn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=_,w=v),_=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=Ar(m))f++;for(m=0,w=p;w;w=Ar(w))m++;for(;0<f-m;)v=Ar(v),f--;for(;0<m-f;)p=Ar(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Ar(v),p=Ar(p)}v=null}else v=null;g!==null&&Cp(h,d,g,v,!1),y!==null&&_!==null&&Cp(h,_,y,v,!0)}}e:{if(d=u?Ur(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=Z_;else if(vp(d))if($y)T=rS;else{T=tS;var R=eS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=nS);if(T&&(T=T(t,u))){Ly(h,T,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&gc(d,"number",d.value)}switch(R=u?Ur(u):window,t){case"focusin":(vp(R)||R.contentEditable==="true")&&($r=R,Ac=u,ss=null);break;case"focusout":ss=Ac=$r=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Ip(h,n,c);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":Ip(h,n,c)}var D;if(ed)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Lr?Py(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Dy&&n.locale!=="ko"&&(Lr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Lr&&(D=xy()):(_n=c,Xh="value"in _n?_n.value:_n.textContent,Lr=!0)),R=Da(u,O),0<R.length&&(O=new pp(O,t,null,n,c),h.push({event:O,listeners:R}),D?O.data=D:(D=Oy(n),D!==null&&(O.data=D)))),(D=G_?Q_(t,n):Y_(t,n))&&(u=Da(u,"onBeforeInput"),0<u.length&&(c=new pp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}Wy(h,e)})}function ks(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Da(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vs(t,n),s!=null&&r.unshift(ks(t,s,i)),s=vs(t,e),s!=null&&r.push(ks(t,s,i))),t=t.return}return r}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=vs(n,s),l!=null&&o.unshift(ks(n,l,a))):i||(l=vs(n,s),l!=null&&o.push(ks(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function Np(t){return(typeof t=="string"?t:""+t).replace(cS,`
`).replace(hS,"")}function jo(t,e,n){if(e=Np(e),Np(t)!==e&&n)throw Error(S(425))}function Pa(){}var xc=null,Dc=null;function Pc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,fS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(t){return Ap.resolve(null).then(t).catch(pS)}:Oc;function pS(t){setTimeout(function(){throw t})}function Du(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_s(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_s(e)}function An(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Ti,Cs="__reactProps$"+Ti,tn="__reactContainer$"+Ti,Lc="__reactEvents$"+Ti,mS="__reactListeners$"+Ti,gS="__reactHandles$"+Ti;function Zn(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tn]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rp(t);t!==null;){if(n=t[Ot])return n;t=Rp(t)}return e}t=n,n=t.parentNode}return null}function no(t){return t=t[Ot]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Il(t){return t[Cs]||null}var $c=[],Fr=-1;function Bn(t){return{current:t}}function re(t){0>Fr||(t.current=$c[Fr],$c[Fr]=null,Fr--)}function Z(t,e){Fr++,$c[Fr]=t.current,t.current=e}var Fn={},He=Bn(Fn),tt=Bn(!1),hr=Fn;function oi(t,e){var n=t.type.contextTypes;if(!n)return Fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function Oa(){re(tt),re(He)}function xp(t,e,n){if(He.current!==Fn)throw Error(S(168));Z(He,e),Z(tt,n)}function Ky(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,e_(t)||"Unknown",i));return le({},n,r)}function La(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,hr=He.current,Z(He,t),Z(tt,tt.current),!0}function Dp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Ky(t,e,hr),r.__reactInternalMemoizedMergedChildContext=t,re(tt),re(He),Z(He,t)):re(tt),Z(tt,n)}var Wt=null,Tl=!1,Pu=!1;function Gy(t){Wt===null?Wt=[t]:Wt.push(t)}function yS(t){Tl=!0,Gy(t)}function Hn(){if(!Pu&&Wt!==null){Pu=!0;var t=0,e=Y;try{var n=Wt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wt=null,Tl=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(t+1)),wy(Kh,Hn),i}finally{Y=e,Pu=!1}}return null}var Vr=[],zr=0,$a=null,Ma=0,dt=[],ft=0,dr=null,Kt=1,Gt="";function Yn(t,e){Vr[zr++]=Ma,Vr[zr++]=$a,$a=t,Ma=e}function Qy(t,e,n){dt[ft++]=Kt,dt[ft++]=Gt,dt[ft++]=dr,dr=t;var r=Kt;t=Gt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kt=1<<32-Ct(e)+i|n<<i|r,Gt=s+t}else Kt=1<<s|n<<i|r,Gt=t}function nd(t){t.return!==null&&(Yn(t,1),Qy(t,1,0))}function rd(t){for(;t===$a;)$a=Vr[--zr],Vr[zr]=null,Ma=Vr[--zr],Vr[zr]=null;for(;t===dr;)dr=dt[--ft],dt[ft]=null,Gt=dt[--ft],dt[ft]=null,Kt=dt[--ft],dt[ft]=null}var ot=null,st=null,se=!1,Tt=null;function Yy(t,e){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ot=t,st=An(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ot=t,st=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=dr!==null?{id:Kt,overflow:Gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ot=t,st=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uc(t){if(se){var e=st;if(e){var n=e;if(!Pp(t,e)){if(Mc(t))throw Error(S(418));e=An(n.nextSibling);var r=ot;e&&Pp(t,e)?Yy(r,n):(t.flags=t.flags&-4097|2,se=!1,ot=t)}}else{if(Mc(t))throw Error(S(418));t.flags=t.flags&-4097|2,se=!1,ot=t}}}function Op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ot=t}function bo(t){if(t!==ot)return!1;if(!se)return Op(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pc(t.type,t.memoizedProps)),e&&(e=st)){if(Mc(t))throw Xy(),Error(S(418));for(;e;)Yy(t,e),e=An(e.nextSibling)}if(Op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){st=An(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}st=null}}else st=ot?An(t.stateNode.nextSibling):null;return!0}function Xy(){for(var t=st;t;)t=An(t.nextSibling)}function ai(){st=ot=null,se=!1}function id(t){Tt===null?Tt=[t]:Tt.push(t)}var vS=cn.ReactCurrentBatchConfig;function St(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ua=Bn(null),Fa=null,jr=null,sd=null;function od(){sd=jr=Fa=null}function ad(t){var e=Ua.current;re(Ua),t._currentValue=e}function Fc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yr(t,e){Fa=t,sd=jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(sd!==t)if(t={context:t,memoizedValue:e,next:null},jr===null){if(Fa===null)throw Error(S(308));jr=t,Fa.dependencies={lanes:0,firstContext:t}}else jr=jr.next=t;return e}var er=null;function ld(t){er===null?er=[t]:er.push(t)}function Jy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ld(e)):(n.next=i.next,i.next=n),e.interleaved=n,nn(t,r)}function nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mn=!1;function ud(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nn(t,n)}return i=r.interleaved,i===null?(e.next=e,ld(r)):(e.next=i.next,i.next=e),r.interleaved=e,nn(t,n)}function ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gh(t,n)}}function Lp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Va(t,e,n,r){var i=t.updateQueue;mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=le({},h,d);break e;case 2:mn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pr|=o,t.lanes=o,t.memoizedState=h}}function $p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var ev=new Jg.Component().refs;function Vc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Dn(t),s=Jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(Nt(e,t,i,r),ua(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Dn(t),s=Jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(Nt(e,t,i,r),ua(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=Dn(t),i=Jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rn(t,i,r),e!==null&&(Nt(e,t,r,n),ua(e,t,r))}};function Mp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Is(n,r)||!Is(i,s):!0}function tv(t,e,n){var r=!1,i=Fn,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=nt(e)?hr:He.current,r=e.contextTypes,s=(r=r!=null)?oi(t,i):Fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Up(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function zc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ev,ud(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=nt(e)?hr:He.current,i.context=oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kl.enqueueReplaceState(i,i.state,null),Va(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===ev&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Bo(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fp(t){var e=t._init;return e(t._payload)}function nv(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Pn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Vu(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var T=m.type;return T===Or?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pn&&Fp(T)===f.type)?(w=i(f,m.props),w.ref=ji(p,f,m),w.return=p,w):(w=ma(m.type,m.key,m.props,null,p.mode,w),w.ref=ji(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=zu(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,T){return f===null||f.tag!==7?(f=or(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Vu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Po:return m=ma(f.type,f.key,f.props,null,p.mode,m),m.ref=ji(p,null,f),m.return=p,m;case Pr:return f=zu(f,p.mode,m),f.return=p,f;case pn:var w=f._init;return h(p,w(f._payload),m)}if(Ki(f)||Mi(f))return f=or(f,p.mode,m,null),f.return=p,f;Bo(p,f)}return null}function d(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Po:return m.key===T?l(p,f,m,w):null;case Pr:return m.key===T?u(p,f,m,w):null;case pn:return T=m._init,d(p,f,T(m._payload),w)}if(Ki(m)||Mi(m))return T!==null?null:c(p,f,m,w,null);Bo(p,m)}return null}function g(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Po:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,T);case Pr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case pn:var R=w._init;return g(p,f,m,R(w._payload),T)}if(Ki(w)||Mi(w))return p=p.get(m)||null,c(f,p,w,T,null);Bo(f,w)}return null}function y(p,f,m,w){for(var T=null,R=null,D=f,O=f=0,J=null;D!==null&&O<m.length;O++){D.index>O?(J=D,D=null):J=D.sibling;var B=d(p,D,m[O],w);if(B===null){D===null&&(D=J);break}t&&D&&B.alternate===null&&e(p,D),f=s(B,f,O),R===null?T=B:R.sibling=B,R=B,D=J}if(O===m.length)return n(p,D),se&&Yn(p,O),T;if(D===null){for(;O<m.length;O++)D=h(p,m[O],w),D!==null&&(f=s(D,f,O),R===null?T=D:R.sibling=D,R=D);return se&&Yn(p,O),T}for(D=r(p,D);O<m.length;O++)J=g(D,p,O,m[O],w),J!==null&&(t&&J.alternate!==null&&D.delete(J.key===null?O:J.key),f=s(J,f,O),R===null?T=J:R.sibling=J,R=J);return t&&D.forEach(function(Et){return e(p,Et)}),se&&Yn(p,O),T}function v(p,f,m,w){var T=Mi(m);if(typeof T!="function")throw Error(S(150));if(m=T.call(m),m==null)throw Error(S(151));for(var R=T=null,D=f,O=f=0,J=null,B=m.next();D!==null&&!B.done;O++,B=m.next()){D.index>O?(J=D,D=null):J=D.sibling;var Et=d(p,D,B.value,w);if(Et===null){D===null&&(D=J);break}t&&D&&Et.alternate===null&&e(p,D),f=s(Et,f,O),R===null?T=Et:R.sibling=Et,R=Et,D=J}if(B.done)return n(p,D),se&&Yn(p,O),T;if(D===null){for(;!B.done;O++,B=m.next())B=h(p,B.value,w),B!==null&&(f=s(B,f,O),R===null?T=B:R.sibling=B,R=B);return se&&Yn(p,O),T}for(D=r(p,D);!B.done;O++,B=m.next())B=g(D,p,O,B.value,w),B!==null&&(t&&B.alternate!==null&&D.delete(B.key===null?O:B.key),f=s(B,f,O),R===null?T=B:R.sibling=B,R=B);return t&&D.forEach(function(Li){return e(p,Li)}),se&&Yn(p,O),T}function _(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Or&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Po:e:{for(var T=m.key,R=f;R!==null;){if(R.key===T){if(T=m.type,T===Or){if(R.tag===7){n(p,R.sibling),f=i(R,m.props.children),f.return=p,p=f;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pn&&Fp(T)===R.type){n(p,R.sibling),f=i(R,m.props),f.ref=ji(p,R,m),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}m.type===Or?(f=or(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=ma(m.type,m.key,m.props,null,p.mode,w),w.ref=ji(p,f,m),w.return=p,p=w)}return o(p);case Pr:e:{for(R=m.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=zu(m,p.mode,w),f.return=p,p=f}return o(p);case pn:return R=m._init,_(p,f,R(m._payload),w)}if(Ki(m))return y(p,f,m,w);if(Mi(m))return v(p,f,m,w);Bo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Vu(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return _}var li=nv(!0),rv=nv(!1),ro={},Ft=Bn(ro),Ns=Bn(ro),As=Bn(ro);function tr(t){if(t===ro)throw Error(S(174));return t}function cd(t,e){switch(Z(As,e),Z(Ns,t),Z(Ft,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vc(e,t)}re(Ft),Z(Ft,e)}function ui(){re(Ft),re(Ns),re(As)}function iv(t){tr(As.current);var e=tr(Ft.current),n=vc(e,t.type);e!==n&&(Z(Ns,t),Z(Ft,n))}function hd(t){Ns.current===t&&(re(Ft),re(Ns))}var oe=Bn(0);function za(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ou=[];function dd(){for(var t=0;t<Ou.length;t++)Ou[t]._workInProgressVersionPrimary=null;Ou.length=0}var ca=cn.ReactCurrentDispatcher,Lu=cn.ReactCurrentBatchConfig,fr=0,ae=null,we=null,Te=null,ja=!1,os=!1,Rs=0,wS=0;function Le(){throw Error(S(321))}function fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!At(t[n],e[n]))return!1;return!0}function pd(t,e,n,r,i,s){if(fr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ca.current=t===null||t.memoizedState===null?IS:TS,t=n(r,i),os){s=0;do{if(os=!1,Rs=0,25<=s)throw Error(S(301));s+=1,Te=we=null,e.updateQueue=null,ca.current=kS,t=n(r,i)}while(os)}if(ca.current=ba,e=we!==null&&we.next!==null,fr=0,Te=we=ae=null,ja=!1,e)throw Error(S(300));return t}function md(){var t=Rs!==0;return Rs=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ae.memoizedState=Te=t:Te=Te.next=t,Te}function wt(){if(we===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var e=Te===null?ae.memoizedState:Te.next;if(e!==null)Te=e,we=t;else{if(t===null)throw Error(S(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Te===null?ae.memoizedState=Te=t:Te=Te.next=t}return Te}function xs(t,e){return typeof e=="function"?e(t):e}function $u(t){var e=wt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=we,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((fr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,pr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,At(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,pr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mu(t){var e=wt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);At(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function sv(){}function ov(t,e){var n=ae,r=wt(),i=e(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,gd(uv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Ds(9,lv.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(S(349));fr&30||av(n,e,i)}return i}function av(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lv(t,e,n,r){e.value=n,e.getSnapshot=r,cv(e)&&hv(t)}function uv(t,e,n){return n(function(){cv(e)&&hv(t)})}function cv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!At(t,n)}catch{return!0}}function hv(t){var e=nn(t,1);e!==null&&Nt(e,t,1,-1)}function Vp(t){var e=Pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:t},e.queue=t,t=t.dispatch=SS.bind(null,ae,t),[e.memoizedState,t]}function Ds(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dv(){return wt().memoizedState}function ha(t,e,n,r){var i=Pt();ae.flags|=t,i.memoizedState=Ds(1|e,n,void 0,r===void 0?null:r)}function Cl(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(we!==null){var o=we.memoizedState;if(s=o.destroy,r!==null&&fd(r,o.deps)){i.memoizedState=Ds(e,n,s,r);return}}ae.flags|=t,i.memoizedState=Ds(1|e,n,s,r)}function zp(t,e){return ha(8390656,8,t,e)}function gd(t,e){return Cl(2048,8,t,e)}function fv(t,e){return Cl(4,2,t,e)}function pv(t,e){return Cl(4,4,t,e)}function mv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gv(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,mv.bind(null,e,t),n)}function yd(){}function yv(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vv(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wv(t,e,n){return fr&21?(At(n,e)||(n=Sy(),ae.lanes|=n,pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function ES(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Lu.transition;Lu.transition={};try{t(!1),e()}finally{Y=n,Lu.transition=r}}function Ev(){return wt().memoizedState}function _S(t,e,n){var r=Dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_v(t))Sv(e,n);else if(n=Jy(t,e,n,r),n!==null){var i=Qe();Nt(n,t,r,i),Iv(n,e,r)}}function SS(t,e,n){var r=Dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_v(t))Sv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,At(a,o)){var l=e.interleaved;l===null?(i.next=i,ld(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Jy(t,e,i,r),n!==null&&(i=Qe(),Nt(n,t,r,i),Iv(n,e,r))}}function _v(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function Sv(t,e){os=ja=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gh(t,n)}}var ba={readContext:vt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},IS={readContext:vt,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:zp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ha(4194308,4,mv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return ha(4,2,t,e)},useMemo:function(t,e){var n=Pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_S.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:Vp,useDebugValue:yd,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=Vp(!1),e=t[0];return t=ES.bind(null,t[1]),Pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Pt();if(se){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ke===null)throw Error(S(349));fr&30||av(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zp(uv.bind(null,r,s,t),[t]),r.flags|=2048,Ds(9,lv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pt(),e=ke.identifierPrefix;if(se){var n=Gt,r=Kt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TS={readContext:vt,useCallback:yv,useContext:vt,useEffect:gd,useImperativeHandle:gv,useInsertionEffect:fv,useLayoutEffect:pv,useMemo:vv,useReducer:$u,useRef:dv,useState:function(){return $u(xs)},useDebugValue:yd,useDeferredValue:function(t){var e=wt();return wv(e,we.memoizedState,t)},useTransition:function(){var t=$u(xs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:sv,useSyncExternalStore:ov,useId:Ev,unstable_isNewReconciler:!1},kS={readContext:vt,useCallback:yv,useContext:vt,useEffect:gd,useImperativeHandle:gv,useInsertionEffect:fv,useLayoutEffect:pv,useMemo:vv,useReducer:Mu,useRef:dv,useState:function(){return Mu(xs)},useDebugValue:yd,useDeferredValue:function(t){var e=wt();return we===null?e.memoizedState=t:wv(e,we.memoizedState,t)},useTransition:function(){var t=Mu(xs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:sv,useSyncExternalStore:ov,useId:Ev,unstable_isNewReconciler:!1};function ci(t,e){try{var n="",r=e;do n+=ZE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CS=typeof WeakMap=="function"?WeakMap:Map;function Tv(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ha||(Ha=!0,Xc=r),jc(t,e)},n}function kv(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jc(t,e),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zS.bind(null,t,e,n),e.then(t,t))}function bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,Rn(n,e,1))),n.lanes|=1),t)}var NS=cn.ReactCurrentOwner,et=!1;function Ke(t,e,n,r){e.child=t===null?rv(e,null,n,r):li(e,t.child,n,r)}function Hp(t,e,n,r,i){n=n.render;var s=e.ref;return Yr(e,i),r=pd(t,e,n,r,s,i),n=md(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(se&&n&&nd(e),e.flags|=1,Ke(t,e,r,i),e.child)}function Wp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cv(t,e,s,r,i)):(t=ma(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Is,n(o,r)&&t.ref===e.ref)return rn(t,e,i)}return e.flags|=1,t=Pn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Cv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Is(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,rn(t,e,i)}return bc(t,e,n,r,i)}function Nv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Br,it),it|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Br,it),it|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Br,it),it|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Br,it),it|=r;return Ke(t,e,i,n),e.child}function Av(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bc(t,e,n,r,i){var s=nt(n)?hr:He.current;return s=oi(e,s),Yr(e,i),n=pd(t,e,n,r,s,i),r=md(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(se&&r&&nd(e),e.flags|=1,Ke(t,e,n,i),e.child)}function qp(t,e,n,r,i){if(nt(n)){var s=!0;La(e)}else s=!1;if(Yr(e,i),e.stateNode===null)da(t,e),tv(e,n,r),zc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=nt(n)?hr:He.current,u=oi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Up(e,o,r,u),mn=!1;var d=e.memoizedState;o.state=d,Va(e,r,o,i),l=e.memoizedState,a!==r||d!==l||tt.current||mn?(typeof c=="function"&&(Vc(e,n,c,r),l=e.memoizedState),(a=mn||Mp(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Zy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:St(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=nt(n)?hr:He.current,l=oi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Up(e,o,r,l),mn=!1,d=e.memoizedState,o.state=d,Va(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||tt.current||mn?(typeof g=="function"&&(Vc(e,n,g,r),y=e.memoizedState),(u=mn||Mp(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Bc(t,e,n,r,s,i)}function Bc(t,e,n,r,i,s){Av(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dp(e,n,!1),rn(t,e,s);r=e.stateNode,NS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=li(e,t.child,null,s),e.child=li(e,null,a,s)):Ke(t,e,a,s),e.memoizedState=r.state,i&&Dp(e,n,!0),e.child}function Rv(t){var e=t.stateNode;e.pendingContext?xp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xp(t,e.context,!1),cd(t,e.containerInfo)}function Kp(t,e,n,r,i){return ai(),id(i),e.flags|=256,Ke(t,e,n,r),e.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function xv(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(oe,i&1),t===null)return Uc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rl(o,r,0,null),t=or(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wc(n),e.memoizedState=Hc,t):vd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return AS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Pn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pn(a,s):(s=or(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Wc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hc,r}return s=t.child,t=s.sibling,r=Pn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vd(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ho(t,e,n,r){return r!==null&&id(r),li(e,t.child,null,n),t=vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Uu(Error(S(422))),Ho(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rl({mode:"visible",children:r.children},i,0,null),s=or(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&li(e,t.child,null,o),e.child.memoizedState=Wc(o),e.memoizedState=Hc,s);if(!(e.mode&1))return Ho(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Uu(s,r,void 0),Ho(t,e,o,r)}if(a=(o&t.childLanes)!==0,et||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(t,i),Nt(r,t,i,-1))}return Td(),r=Uu(Error(S(421))),Ho(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=jS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,st=An(i.nextSibling),ot=e,se=!0,Tt=null,t!==null&&(dt[ft++]=Kt,dt[ft++]=Gt,dt[ft++]=dr,Kt=t.id,Gt=t.overflow,dr=e),e=vd(e,r.children),e.flags|=4096,e)}function Gp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fc(t.return,e,n)}function Fu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Dv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ke(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gp(t,n,e);else if(t.tag===19)Gp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&za(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&za(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fu(e,!0,n,null,s);break;case"together":Fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function da(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Pn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RS(t,e,n){switch(e.tag){case 3:Rv(e),ai();break;case 5:iv(e);break;case 1:nt(e.type)&&La(e);break;case 4:cd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(Ua,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?xv(t,e,n):(Z(oe,oe.current&1),t=rn(t,e,n),t!==null?t.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Dv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Nv(t,e,n)}return rn(t,e,n)}var Pv,qc,Ov,Lv;Pv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qc=function(){};Ov=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,tr(Ft.current);var s=null;switch(n){case"input":i=pc(t,i),r=pc(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=yc(t,i),r=yc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pa)}wc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Lv=function(t,e,n,r){n!==r&&(e.flags|=4)};function bi(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xS(t,e,n){var r=e.pendingProps;switch(rd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return nt(e.type)&&Oa(),$e(e),null;case 3:return r=e.stateNode,ui(),re(tt),re(He),dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tt!==null&&(eh(Tt),Tt=null))),qc(t,e),$e(e),null;case 5:hd(e);var i=tr(As.current);if(n=e.type,t!==null&&e.stateNode!=null)Ov(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return $e(e),null}if(t=tr(Ft.current),bo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ot]=e,r[Cs]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Qi.length;i++)ee(Qi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":rp(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":sp(r,s),ee("invalid",r)}wc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,a,t),i=["children",""+a]):gs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":Oo(r),ip(r,s,!0);break;case"textarea":Oo(r),op(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ay(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ot]=e,t[Cs]=r,Pv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ec(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qi.length;i++)ee(Qi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":rp(t,r),i=pc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ee("invalid",t);break;case"textarea":sp(t,r),i=yc(t,r),ee("invalid",t);break;default:i=r}wc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ly(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ys(t,l):typeof l=="number"&&ys(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&bh(t,s,l,o))}switch(n){case"input":Oo(t),ip(t,r,!1);break;case"textarea":Oo(t),op(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Un(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qr(t,!!r.multiple,s,!1):r.defaultValue!=null&&qr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)Lv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=tr(As.current),tr(Ft.current),bo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ot]=e,(s=r.nodeValue!==n)&&(t=ot,t!==null))switch(t.tag){case 3:jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=e,e.stateNode=r}return $e(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&st!==null&&e.mode&1&&!(e.flags&128))Xy(),ai(),e.flags|=98560,s=!1;else if(s=bo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Ot]=e}else ai(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else Tt!==null&&(eh(Tt),Tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?Ee===0&&(Ee=3):Td())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return ui(),qc(t,e),t===null&&Ts(e.stateNode.containerInfo),$e(e),null;case 10:return ad(e.type._context),$e(e),null;case 17:return nt(e.type)&&Oa(),$e(e),null;case 19:if(re(oe),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bi(s,!1);else{if(Ee!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=za(t),o!==null){for(e.flags|=128,bi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>hi&&(e.flags|=128,r=!0,bi(s,!1),e.lanes=4194304)}else{if(!r)if(t=za(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return $e(e),null}else 2*fe()-s.renderingStartTime>hi&&n!==1073741824&&(e.flags|=128,r=!0,bi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Id(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?it&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function DS(t,e){switch(rd(e),e.tag){case 1:return nt(e.type)&&Oa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ui(),re(tt),re(He),dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hd(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return ui(),null;case 10:return ad(e.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var Wo=!1,Fe=!1,PS=typeof WeakSet=="function"?WeakSet:Set,N=null;function br(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function Kc(t,e,n){try{n()}catch(r){ce(t,e,r)}}var Qp=!1;function OS(t,e){if(xc=Ra,t=Fy(),td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:t,selectionRange:n},Ra=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,_=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:St(e.type,v),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ce(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=Qp,Qp=!1,y}function as(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kc(e,n,s)}i=i.next}while(i!==r)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $v(t){var e=t.alternate;e!==null&&(t.alternate=null,$v(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ot],delete e[Cs],delete e[Lc],delete e[mS],delete e[gS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mv(t){return t.tag===5||t.tag===3||t.tag===4}function Yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pa));else if(r!==4&&(t=t.child,t!==null))for(Qc(t,e,n),t=t.sibling;t!==null;)Qc(t,e,n),t=t.sibling}function Yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}var Ae=null,It=!1;function dn(t,e,n){for(n=n.child;n!==null;)Uv(t,e,n),n=n.sibling}function Uv(t,e,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Fe||br(n,e);case 6:var r=Ae,i=It;Ae=null,dn(t,e,n),Ae=r,It=i,Ae!==null&&(It?(t=Ae,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(It?(t=Ae,n=n.stateNode,t.nodeType===8?Du(t.parentNode,n):t.nodeType===1&&Du(t,n),_s(t)):Du(Ae,n.stateNode));break;case 4:r=Ae,i=It,Ae=n.stateNode.containerInfo,It=!0,dn(t,e,n),Ae=r,It=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kc(n,e,o),i=i.next}while(i!==r)}dn(t,e,n);break;case 1:if(!Fe&&(br(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}dn(t,e,n);break;case 21:dn(t,e,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,dn(t,e,n),Fe=r):dn(t,e,n);break;default:dn(t,e,n)}}function Xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PS),e.forEach(function(r){var i=bS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,It=!1;break e;case 3:Ae=a.stateNode.containerInfo,It=!0;break e;case 4:Ae=a.stateNode.containerInfo,It=!0;break e}a=a.return}if(Ae===null)throw Error(S(160));Uv(s,o,i),Ae=null,It=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fv(e,t),e=e.sibling}function Fv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_t(e,t),Dt(t),r&4){try{as(3,t,t.return),Nl(3,t)}catch(v){ce(t,t.return,v)}try{as(5,t,t.return)}catch(v){ce(t,t.return,v)}}break;case 1:_t(e,t),Dt(t),r&512&&n!==null&&br(n,n.return);break;case 5:if(_t(e,t),Dt(t),r&512&&n!==null&&br(n,n.return),t.flags&32){var i=t.stateNode;try{ys(i,"")}catch(v){ce(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sy(i,s),Ec(a,o);var u=Ec(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?cy(i,h):c==="dangerouslySetInnerHTML"?ly(i,h):c==="children"?ys(i,h):bh(i,c,h,u)}switch(a){case"input":mc(i,s);break;case"textarea":oy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?qr(i,!!s.multiple,s.defaultValue,!0):qr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Cs]=s}catch(v){ce(t,t.return,v)}}break;case 6:if(_t(e,t),Dt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ce(t,t.return,v)}}break;case 3:if(_t(e,t),Dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_s(e.containerInfo)}catch(v){ce(t,t.return,v)}break;case 4:_t(e,t),Dt(t);break;case 13:_t(e,t),Dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_d=fe())),r&4&&Xp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Fe=(u=Fe)||c,_t(e,t),Fe=u):_t(e,t),Dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(d=N,g=d.child,d.tag){case 0:case 11:case 14:case 15:as(4,d,d.return);break;case 1:br(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ce(r,n,v)}}break;case 5:br(d,d.return);break;case 22:if(d.memoizedState!==null){Zp(h);continue}}g!==null?(g.return=d,N=g):Zp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uy("display",o))}catch(v){ce(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ce(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_t(e,t),Dt(t),r&4&&Xp(t);break;case 21:break;default:_t(e,t),Dt(t)}}function Dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mv(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ys(i,""),r.flags&=-33);var s=Yp(t);Yc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Yp(t);Qc(t,a,o);break;default:throw Error(S(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LS(t,e,n){N=t,Vv(t)}function Vv(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=Wo;var u=Fe;if(Wo=o,(Fe=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?em(i):l!==null?(l.return=o,N=l):em(i);for(;s!==null;)N=s,Vv(s),s=s.sibling;N=i,Wo=a,Fe=u}Jp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Jp(t)}}function Jp(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fe||Nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:St(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$p(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$p(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&_s(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Fe||e.flags&512&&Gc(e)}catch(d){ce(e,e.return,d)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Zp(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function em(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{Gc(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{Gc(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var $S=Math.ceil,Ba=cn.ReactCurrentDispatcher,wd=cn.ReactCurrentOwner,yt=cn.ReactCurrentBatchConfig,K=0,ke=null,ge=null,De=0,it=0,Br=Bn(0),Ee=0,Ps=null,pr=0,Al=0,Ed=0,ls=null,Ze=null,_d=0,hi=1/0,Ht=null,Ha=!1,Xc=null,xn=null,qo=!1,Sn=null,Wa=0,us=0,Jc=null,fa=-1,pa=0;function Qe(){return K&6?fe():fa!==-1?fa:fa=fe()}function Dn(t){return t.mode&1?K&2&&De!==0?De&-De:vS.transition!==null?(pa===0&&(pa=Sy()),pa):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Ry(t.type)),t):1}function Nt(t,e,n,r){if(50<us)throw us=0,Jc=null,Error(S(185));eo(t,n,r),(!(K&2)||t!==ke)&&(t===ke&&(!(K&2)&&(Al|=n),Ee===4&&yn(t,De)),rt(t,r),n===1&&K===0&&!(e.mode&1)&&(hi=fe()+500,Tl&&Hn()))}function rt(t,e){var n=t.callbackNode;v_(t,e);var r=Aa(t,t===ke?De:0);if(r===0)n!==null&&up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&up(n),e===1)t.tag===0?yS(tm.bind(null,t)):Gy(tm.bind(null,t)),fS(function(){!(K&6)&&Hn()}),n=null;else{switch(Iy(r)){case 1:n=Kh;break;case 4:n=Ey;break;case 16:n=Na;break;case 536870912:n=_y;break;default:n=Na}n=Kv(n,zv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zv(t,e){if(fa=-1,pa=0,K&6)throw Error(S(327));var n=t.callbackNode;if(Xr()&&t.callbackNode!==n)return null;var r=Aa(t,t===ke?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qa(t,r);else{e=r;var i=K;K|=2;var s=bv();(ke!==t||De!==e)&&(Ht=null,hi=fe()+500,sr(t,e));do try{FS();break}catch(a){jv(t,a)}while(1);od(),Ba.current=s,K=i,ge!==null?e=0:(ke=null,De=0,e=Ee)}if(e!==0){if(e===2&&(i=kc(t),i!==0&&(r=i,e=Zc(t,i))),e===1)throw n=Ps,sr(t,0),yn(t,r),rt(t,fe()),n;if(e===6)yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!MS(i)&&(e=qa(t,r),e===2&&(s=kc(t),s!==0&&(r=s,e=Zc(t,s))),e===1))throw n=Ps,sr(t,0),yn(t,r),rt(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Xn(t,Ze,Ht);break;case 3:if(yn(t,r),(r&130023424)===r&&(e=_d+500-fe(),10<e)){if(Aa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oc(Xn.bind(null,t,Ze,Ht),e);break}Xn(t,Ze,Ht);break;case 4:if(yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$S(r/1960))-r,10<r){t.timeoutHandle=Oc(Xn.bind(null,t,Ze,Ht),r);break}Xn(t,Ze,Ht);break;case 5:Xn(t,Ze,Ht);break;default:throw Error(S(329))}}}return rt(t,fe()),t.callbackNode===n?zv.bind(null,t):null}function Zc(t,e){var n=ls;return t.current.memoizedState.isDehydrated&&(sr(t,e).flags|=256),t=qa(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&eh(e)),t}function eh(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function MS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yn(t,e){for(e&=~Ed,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function tm(t){if(K&6)throw Error(S(327));Xr();var e=Aa(t,0);if(!(e&1))return rt(t,fe()),null;var n=qa(t,e);if(t.tag!==0&&n===2){var r=kc(t);r!==0&&(e=r,n=Zc(t,r))}if(n===1)throw n=Ps,sr(t,0),yn(t,e),rt(t,fe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xn(t,Ze,Ht),rt(t,fe()),null}function Sd(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(hi=fe()+500,Tl&&Hn())}}function mr(t){Sn!==null&&Sn.tag===0&&!(K&6)&&Xr();var e=K;K|=1;var n=yt.transition,r=Y;try{if(yt.transition=null,Y=1,t)return t()}finally{Y=r,yt.transition=n,K=e,!(K&6)&&Hn()}}function Id(){it=Br.current,re(Br)}function sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dS(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(rd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oa();break;case 3:ui(),re(tt),re(He),dd();break;case 5:hd(r);break;case 4:ui();break;case 13:re(oe);break;case 19:re(oe);break;case 10:ad(r.type._context);break;case 22:case 23:Id()}n=n.return}if(ke=t,ge=t=Pn(t.current,null),De=it=e,Ee=0,Ps=null,Ed=Al=pr=0,Ze=ls=null,er!==null){for(e=0;e<er.length;e++)if(n=er[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}er=null}return t}function jv(t,e){do{var n=ge;try{if(od(),ca.current=ba,ja){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ja=!1}if(fr=0,Te=we=ae=null,os=!1,Rs=0,wd.current=null,n===null||n.return===null){Ee=1,Ps=e,ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=bp(o);if(g!==null){g.flags&=-257,Bp(g,o,a,s,e),g.mode&1&&jp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){jp(s,u,e),Td();break e}l=Error(S(426))}}else if(se&&a.mode&1){var _=bp(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Bp(_,o,a,s,e),id(ci(l,a));break e}}s=l=ci(l,a),Ee!==4&&(Ee=2),ls===null?ls=[s]:ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Tv(s,l,e);Lp(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xn===null||!xn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=kv(s,a,e);Lp(s,w);break e}}s=s.return}while(s!==null)}Hv(n)}catch(T){e=T,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function bv(){var t=Ba.current;return Ba.current=ba,t===null?ba:t}function Td(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),ke===null||!(pr&268435455)&&!(Al&268435455)||yn(ke,De)}function qa(t,e){var n=K;K|=2;var r=bv();(ke!==t||De!==e)&&(Ht=null,sr(t,e));do try{US();break}catch(i){jv(t,i)}while(1);if(od(),K=n,Ba.current=r,ge!==null)throw Error(S(261));return ke=null,De=0,Ee}function US(){for(;ge!==null;)Bv(ge)}function FS(){for(;ge!==null&&!u_();)Bv(ge)}function Bv(t){var e=qv(t.alternate,t,it);t.memoizedProps=t.pendingProps,e===null?Hv(t):ge=e,wd.current=null}function Hv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DS(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ee=6,ge=null;return}}else if(n=xS(n,e,it),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);Ee===0&&(Ee=5)}function Xn(t,e,n){var r=Y,i=yt.transition;try{yt.transition=null,Y=1,VS(t,e,n,r)}finally{yt.transition=i,Y=r}return null}function VS(t,e,n,r){do Xr();while(Sn!==null);if(K&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(w_(t,s),t===ke&&(ge=ke=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,Kv(Na,function(){return Xr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=Y;Y=1;var a=K;K|=4,wd.current=null,OS(t,n),Fv(n,t),sS(Dc),Ra=!!xc,Dc=xc=null,t.current=n,LS(n),c_(),K=a,Y=o,yt.transition=s}else t.current=n;if(qo&&(qo=!1,Sn=t,Wa=i),s=t.pendingLanes,s===0&&(xn=null),f_(n.stateNode),rt(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ha)throw Ha=!1,t=Xc,Xc=null,t;return Wa&1&&t.tag!==0&&Xr(),s=t.pendingLanes,s&1?t===Jc?us++:(us=0,Jc=t):us=0,Hn(),null}function Xr(){if(Sn!==null){var t=Iy(Wa),e=yt.transition,n=Y;try{if(yt.transition=null,Y=16>t?16:t,Sn===null)var r=!1;else{if(t=Sn,Sn=null,Wa=0,K&6)throw Error(S(331));var i=K;for(K|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:as(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var d=c.sibling,g=c.return;if($v(c),c===u){N=null;break}if(d!==null){d.return=g,N=d;break}N=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:as(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,N=m;else e:for(o=f;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nl(9,a)}}catch(T){ce(a,a.return,T)}if(a===o){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if(K=i,Hn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(wl,t)}catch{}r=!0}return r}finally{Y=n,yt.transition=e}}return!1}function nm(t,e,n){e=ci(n,e),e=Tv(t,e,1),t=Rn(t,e,1),e=Qe(),t!==null&&(eo(t,1,e),rt(t,e))}function ce(t,e,n){if(t.tag===3)nm(t,t,n);else for(;e!==null;){if(e.tag===3){nm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){t=ci(n,t),t=kv(e,t,1),e=Rn(e,t,1),t=Qe(),e!==null&&(eo(e,1,t),rt(e,t));break}}e=e.return}}function zS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(De&n)===n&&(Ee===4||Ee===3&&(De&130023424)===De&&500>fe()-_d?sr(t,0):Ed|=n),rt(t,e)}function Wv(t,e){e===0&&(t.mode&1?(e=Mo,Mo<<=1,!(Mo&130023424)&&(Mo=4194304)):e=1);var n=Qe();t=nn(t,e),t!==null&&(eo(t,e,n),rt(t,n))}function jS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wv(t,n)}function bS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Wv(t,n)}var qv;qv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,RS(t,e,n);et=!!(t.flags&131072)}else et=!1,se&&e.flags&1048576&&Qy(e,Ma,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;da(t,e),t=e.pendingProps;var i=oi(e,He.current);Yr(e,n),i=pd(null,e,r,t,i,n);var s=md();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,La(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ud(e),i.updater=kl,e.stateNode=i,i._reactInternals=e,zc(e,r,t,n),e=Bc(null,e,r,!0,s,n)):(e.tag=0,se&&s&&nd(e),Ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(da(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HS(r),t=St(r,t),i){case 0:e=bc(null,e,r,t,n);break e;case 1:e=qp(null,e,r,t,n);break e;case 11:e=Hp(null,e,r,t,n);break e;case 14:e=Wp(null,e,r,St(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),bc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),qp(t,e,r,i,n);case 3:e:{if(Rv(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Zy(t,e),Va(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ci(Error(S(423)),e),e=Kp(t,e,r,n,i);break e}else if(r!==i){i=ci(Error(S(424)),e),e=Kp(t,e,r,n,i);break e}else for(st=An(e.stateNode.containerInfo.firstChild),ot=e,se=!0,Tt=null,n=rv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ai(),r===i){e=rn(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return iv(e),t===null&&Uc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pc(r,i)?o=null:s!==null&&Pc(r,s)&&(e.flags|=32),Av(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&Uc(e),null;case 13:return xv(t,e,n);case 4:return cd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=li(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Hp(t,e,r,i,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(Ua,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!tt.current){e=rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yr(e,n),i=vt(i),r=r(i),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,i=St(r,e.pendingProps),i=St(r.type,i),Wp(t,e,r,i,n);case 15:return Cv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),da(t,e),e.tag=1,nt(r)?(t=!0,La(e)):t=!1,Yr(e,n),tv(e,r,i),zc(e,r,i,n),Bc(null,e,r,!0,t,n);case 19:return Dv(t,e,n);case 22:return Nv(t,e,n)}throw Error(S(156,e.tag))};function Kv(t,e){return wy(t,e)}function BS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(t,e,n,r){return new BS(t,e,n,r)}function kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HS(t){if(typeof t=="function")return kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hh)return 11;if(t===Wh)return 14}return 2}function Pn(t,e){var n=t.alternate;return n===null?(n=gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ma(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Or:return or(n.children,i,s,e);case Bh:o=8,i|=8;break;case cc:return t=gt(12,n,e,i|2),t.elementType=cc,t.lanes=s,t;case hc:return t=gt(13,n,e,i),t.elementType=hc,t.lanes=s,t;case dc:return t=gt(19,n,e,i),t.elementType=dc,t.lanes=s,t;case ny:return Rl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ey:o=10;break e;case ty:o=9;break e;case Hh:o=11;break e;case Wh:o=14;break e;case pn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function or(t,e,n,r){return t=gt(7,t,r,e),t.lanes=n,t}function Rl(t,e,n,r){return t=gt(22,t,r,e),t.elementType=ny,t.lanes=n,t.stateNode={isHidden:!1},t}function Vu(t,e,n){return t=gt(6,t,null,e),t.lanes=n,t}function zu(t,e,n){return e=gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eu(0),this.expirationTimes=Eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cd(t,e,n,r,i,s,o,a,l){return t=new WS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ud(s),t}function qS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gv(t){if(!t)return Fn;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(nt(n))return Ky(t,n,e)}return e}function Qv(t,e,n,r,i,s,o,a,l){return t=Cd(n,r,!0,t,i,s,o,a,l),t.context=Gv(null),n=t.current,r=Qe(),i=Dn(n),s=Jt(r,i),s.callback=e??null,Rn(n,s,i),t.current.lanes=i,eo(t,i,r),rt(t,r),t}function xl(t,e,n,r){var i=e.current,s=Qe(),o=Dn(i);return n=Gv(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rn(i,e,o),t!==null&&(Nt(t,i,o,s),ua(t,i,o)),o}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nd(t,e){rm(t,e),(t=t.alternate)&&rm(t,e)}function KS(){return null}var Yv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}Dl.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));xl(t,e,null,null)};Dl.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){xl(null,t,null,null)}),e[tn]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gn.length&&e!==0&&e<gn[n].priority;n++);gn.splice(n,0,t),n===0&&Ay(t)}};function Rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function im(){}function GS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ka(o);s.call(u)}}var o=Qv(e,r,t,0,null,!1,!1,"",im);return t._reactRootContainer=o,t[tn]=o.current,Ts(t.nodeType===8?t.parentNode:t),mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ka(l);a.call(u)}}var l=Cd(t,0,!1,null,null,!1,!1,"",im);return t._reactRootContainer=l,t[tn]=l.current,Ts(t.nodeType===8?t.parentNode:t),mr(function(){xl(e,l,n,r)}),l}function Ol(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ka(o);a.call(l)}}xl(e,o,t,i)}else o=GS(n,e,t,i,r);return Ka(o)}Ty=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gi(e.pendingLanes);n!==0&&(Gh(e,n|1),rt(e,fe()),!(K&6)&&(hi=fe()+500,Hn()))}break;case 13:mr(function(){var r=nn(t,1);if(r!==null){var i=Qe();Nt(r,t,1,i)}}),Nd(t,1)}};Qh=function(t){if(t.tag===13){var e=nn(t,134217728);if(e!==null){var n=Qe();Nt(e,t,134217728,n)}Nd(t,134217728)}};ky=function(t){if(t.tag===13){var e=Dn(t),n=nn(t,e);if(n!==null){var r=Qe();Nt(n,t,e,r)}Nd(t,e)}};Cy=function(){return Y};Ny=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Sc=function(t,e,n){switch(e){case"input":if(mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Il(r);if(!i)throw Error(S(90));iy(r),mc(r,i)}}}break;case"textarea":oy(t,n);break;case"select":e=n.value,e!=null&&qr(t,!!n.multiple,e,!1)}};fy=Sd;py=mr;var QS={usingClientEntryPoint:!1,Events:[no,Ur,Il,hy,dy,Sd]},Bi={findFiberByHostInstance:Zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},YS={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yy(t),t===null?null:t.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||KS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{wl=Ko.inject(YS),Ut=Ko}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QS;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(e))throw Error(S(200));return qS(t,e,null,n)};ct.createRoot=function(t,e){if(!Rd(t))throw Error(S(299));var n=!1,r="",i=Yv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cd(t,1,!1,null,null,n,!1,r,i),t[tn]=e.current,Ts(t.nodeType===8?t.parentNode:t),new Ad(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=yy(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return mr(t)};ct.hydrate=function(t,e,n){if(!Pl(e))throw Error(S(200));return Ol(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!Rd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Yv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Qv(e,null,t,1,n??null,i,!1,s,o),t[tn]=e.current,Ts(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Dl(e)};ct.render=function(t,e,n){if(!Pl(e))throw Error(S(200));return Ol(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!Pl(t))throw Error(S(40));return t._reactRootContainer?(mr(function(){Ol(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1};ct.unstable_batchedUpdates=Sd;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Ol(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(t){console.error(t)}}Xv(),Qg.exports=ct;var XS=Qg.exports,sm=XS;lc.createRoot=sm.createRoot,lc.hydrateRoot=sm.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},JS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new ZS;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eI=function(t){const e=Jv(t);return Zv.encodeByteArray(e,!0)},Ga=function(t){return eI(t).replace(/\./g,"")},e0=function(t){try{return Zv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=()=>tI().__FIREBASE_DEFAULTS__,rI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&e0(t[1]);return e&&JSON.parse(e)},xd=()=>{try{return nI()||rI()||iI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},t0=t=>{var e,n;return(n=(e=xd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sI=t=>{const e=t0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},n0=()=>{var t;return(t=xd())===null||t===void 0?void 0:t.config},r0=t=>{var e;return(e=xd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ga(JSON.stringify(n)),Ga(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function uI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hI(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dI(){try{return typeof indexedDB=="object"}catch{return!1}}function fI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pI,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,r)}}function mI(t,e){return t.replace(gI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gI=/\{\$([^}]+)}/g;function yI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(om(s)&&om(o)){if(!Qa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function om(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vI(t,e){const n=new wI(t,e);return n.subscribe.bind(n)}class wI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ju),i.error===void 0&&(i.error=ju),i.complete===void 0&&(i.complete=ju);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ju(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(II(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SI(t){return t===Jn?void 0:t}function II(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _I(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const kI={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},CI=G.INFO,NI={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},AI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=NI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dd{constructor(e){this.name=e,this._logLevel=CI,this._logHandler=AI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const RI=(t,e)=>e.some(n=>t instanceof n);let am,lm;function xI(){return am||(am=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DI(){return lm||(lm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i0=new WeakMap,th=new WeakMap,s0=new WeakMap,bu=new WeakMap,Pd=new WeakMap;function PI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(On(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&i0.set(n,t)}).catch(()=>{}),Pd.set(e,t),e}function OI(t){if(th.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});th.set(t,e)}let nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||s0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LI(t){nh=t(nh)}function $I(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bu(this),e,...n);return s0.set(r,e.sort?e.sort():[e]),On(r)}:DI().includes(t)?function(...e){return t.apply(Bu(this),e),On(i0.get(this))}:function(...e){return On(t.apply(Bu(this),e))}}function MI(t){return typeof t=="function"?$I(t):(t instanceof IDBTransaction&&OI(t),RI(t,xI())?new Proxy(t,nh):t)}function On(t){if(t instanceof IDBRequest)return PI(t);if(bu.has(t))return bu.get(t);const e=MI(t);return e!==t&&(bu.set(t,e),Pd.set(e,t)),e}const Bu=t=>Pd.get(t);function UI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=On(o);return r&&o.addEventListener("upgradeneeded",l=>{r(On(o.result),l.oldVersion,l.newVersion,On(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FI=["get","getKey","getAll","getAllKeys","count"],VI=["put","add","delete","clear"],Hu=new Map;function um(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hu.get(e))return Hu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Hu.set(e,s),s}LI(t=>({...t,get:(e,n,r)=>um(e,n)||t.get(e,n,r),has:(e,n)=>!!um(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rh="@firebase/app",cm="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new Dd("@firebase/app"),bI="@firebase/app-compat",BI="@firebase/analytics-compat",HI="@firebase/analytics",WI="@firebase/app-check-compat",qI="@firebase/app-check",KI="@firebase/auth",GI="@firebase/auth-compat",QI="@firebase/database",YI="@firebase/database-compat",XI="@firebase/functions",JI="@firebase/functions-compat",ZI="@firebase/installations",eT="@firebase/installations-compat",tT="@firebase/messaging",nT="@firebase/messaging-compat",rT="@firebase/performance",iT="@firebase/performance-compat",sT="@firebase/remote-config",oT="@firebase/remote-config-compat",aT="@firebase/storage",lT="@firebase/storage-compat",uT="@firebase/firestore",cT="@firebase/firestore-compat",hT="firebase",dT="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="[DEFAULT]",fT={[rh]:"fire-core",[bI]:"fire-core-compat",[HI]:"fire-analytics",[BI]:"fire-analytics-compat",[qI]:"fire-app-check",[WI]:"fire-app-check-compat",[KI]:"fire-auth",[GI]:"fire-auth-compat",[QI]:"fire-rtdb",[YI]:"fire-rtdb-compat",[XI]:"fire-fn",[JI]:"fire-fn-compat",[ZI]:"fire-iid",[eT]:"fire-iid-compat",[tT]:"fire-fcm",[nT]:"fire-fcm-compat",[rT]:"fire-perf",[iT]:"fire-perf-compat",[sT]:"fire-rc",[oT]:"fire-rc-compat",[aT]:"fire-gcs",[lT]:"fire-gcs-compat",[uT]:"fire-fst",[cT]:"fire-fst-compat","fire-js":"fire-js",[hT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new Map,sh=new Map;function pT(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(sh.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;sh.set(e,t);for(const n of Ya.values())pT(n,t);return!0}function Od(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ln=new io("app","Firebase",mT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=dT;function o0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ih,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ln.create("bad-app-name",{appName:String(i)});if(n||(n=n0()),!n)throw Ln.create("no-options");const s=Ya.get(i);if(s){if(Qa(n,s.options)&&Qa(r,s.config))return s;throw Ln.create("duplicate-app",{appName:i})}const o=new TI(i);for(const l of sh.values())o.addComponent(l);const a=new gT(n,r,o);return Ya.set(i,a),a}function a0(t=ih){const e=Ya.get(t);if(!e&&t===ih&&n0())return o0();if(!e)throw Ln.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let i=(r=fT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(a.join(" "));return}di(new gr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="firebase-heartbeat-database",vT=1,Os="firebase-heartbeat-store";let Wu=null;function l0(){return Wu||(Wu=UI(yT,vT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Os)}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),Wu}async function wT(t){try{return await(await l0()).transaction(Os).objectStore(Os).get(u0(t))}catch(e){if(e instanceof hn)yr.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function hm(t,e){try{const r=(await l0()).transaction(Os,"readwrite");await r.objectStore(Os).put(e,u0(t)),await r.done}catch(n){if(n instanceof hn)yr.warn(n.message);else{const r=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function u0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=1024,_T=30*24*60*60*1e3;class ST{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=_T}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dm(),{heartbeatsToSend:n,unsentEntries:r}=IT(this._heartbeatsCache.heartbeats),i=Ga(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dm(){return new Date().toISOString().substring(0,10)}function IT(t,e=ET){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dI()?fI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fm(t){return Ga(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){di(new gr("platform-logger",e=>new zI(e),"PRIVATE")),di(new gr("heartbeat",e=>new ST(e),"PRIVATE")),$n(rh,cm,t),$n(rh,cm,"esm2017"),$n("fire-js","")}kT("");function Ld(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function c0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CT=c0,h0=new io("auth","Firebase",c0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Dd("@firebase/auth");function NT(t,...e){Xa.logLevel<=G.WARN&&Xa.warn(`Auth (${ki}): ${t}`,...e)}function ga(t,...e){Xa.logLevel<=G.ERROR&&Xa.error(`Auth (${ki}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw $d(t,...e)}function Vt(t,...e){return $d(t,...e)}function d0(t,e,n){const r=Object.assign(Object.assign({},CT()),{[e]:n});return new io("auth","Firebase",r).create(e,{appName:t.name})}function AT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),d0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h0.create(t,...e)}function F(t,e,...n){if(!t)throw $d(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ga(e),new Error(e)}function sn(t,e){t||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RT(){return pm()==="http:"||pm()==="https:"}function pm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RT()||uI()||"connection"in navigator)?navigator.onLine:!0}function DT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=lI()||cI()}get(){return xT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new oo(3e4,6e4);function p0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ao(t,e,n,r,i={}){return m0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=so(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),f0.fetch()(g0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function m0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PT),e);try{const i=new $T(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Go(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Go(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Go(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Go(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw d0(t,c,u);bt(t,c)}}catch(i){if(i instanceof hn)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function LT(t,e,n,r,i={}){const s=await ao(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function g0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Md(t.config,i):`${t.config.apiScheme}://${i}`}class $T{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),OT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(t,e){return ao(t,"POST","/v1/accounts:delete",e)}async function UT(t,e){return ao(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FT(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=Ud(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cs(qu(i.auth_time)),issuedAtTime:cs(qu(i.iat)),expirationTime:cs(qu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qu(t){return Number(t)*1e3}function Ud(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ga("JWT malformed, contained fewer than 3 sections"),null;try{const i=e0(n);return i?JSON.parse(i):(ga("Failed to decode base64 JWT payload"),null)}catch(i){return ga("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function VT(t){const e=Ud(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&zT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cs(this.lastLoginAt),this.creationTime=cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ls(t,UT(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HT(s.providerUserInfo):[],a=BT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new y0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function bT(t){const e=Ye(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HT(t){return t.map(e=>{var{providerId:n}=e,r=Ld(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e){const n=await m0(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=g0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",f0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $s;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ar{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new y0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FT(this,e)}reload(){return bT(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ls(this,MT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:R,stsTokenManager:D}=n;F(m&&D,e,"internal-error");const O=$s.fromJSON(this.name,D);F(typeof m=="string",e,"internal-error"),fn(h,e.name),fn(d,e.name),F(typeof w=="boolean",e,"internal-error"),F(typeof T=="boolean",e,"internal-error"),fn(g,e.name),fn(y,e.name),fn(v,e.name),fn(_,e.name),fn(p,e.name),fn(f,e.name);const J=new ar({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(J.providerData=R.map(B=>Object.assign({},B))),_&&(J._redirectEventId=_),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new $s;i.updateFromServerResponse(n);const s=new ar({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ja(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=new Map;function Yt(t){sn(t instanceof Function,"Expected a class definition");let e=mm.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}v0.type="NONE";const gm=v0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ya(this.userKey,i.apiKey,s),this.fullPersistenceKey=ya("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(Yt(gm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Yt(gm);const o=ya(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ar._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Jr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Jr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I0(e))return"Blackberry";if(T0(e))return"Webos";if(Fd(e))return"Safari";if((e.includes("chrome/")||E0(e))&&!e.includes("edge/"))return"Chrome";if(S0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function w0(t=We()){return/firefox\//i.test(t)}function Fd(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E0(t=We()){return/crios\//i.test(t)}function _0(t=We()){return/iemobile/i.test(t)}function S0(t=We()){return/android/i.test(t)}function I0(t=We()){return/blackberry/i.test(t)}function T0(t=We()){return/webos/i.test(t)}function Ll(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qT(t=We()){var e;return Ll(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KT(){return hI()&&document.documentMode===10}function k0(t=We()){return Ll(t)||S0(t)||T0(t)||I0(t)||/windows phone/i.test(t)||_0(t)}function GT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e=[]){let n;switch(t){case"Browser":n=ym(We());break;case"Worker":n=`${ym(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${r}`}async function N0(t,e){return ao(t,"GET","/v2/recaptchaConfig",p0(t,e))}function vm(t){return t!==void 0&&t.enterprise!==void 0}class A0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function R0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QT().appendChild(r)})}function YT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const XT="https://www.google.com/recaptcha/enterprise.js?render=",JT="recaptcha-enterprise",ZT="NO_RECAPTCHA";class ek{constructor(e){this.type=JT,this.auth=lo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{N0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new A0(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;vm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ZT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&vm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}R0(XT+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wm(this),this.idTokenSubscription=new wm(this),this.beforeStateQueue=new tk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}async initializeRecaptchaConfig(){const e=await N0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new A0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ek(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=C0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function lo(t){return Ye(t)}class wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=vI(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t,e){const n=Od(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qa(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function ik(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sk(t,e,n){const r=lo(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=x0(e),{host:o,port:a}=ok(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ak()}function x0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ok(t){const e=x0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Em(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Em(o)}}}function Em(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ak(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t,e){return LT(t,"POST","/v1/accounts:signInWithIdp",p0(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="http://localhost";class vr extends D0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ld(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:lk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends Vd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends uo{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends uo{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends uo{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return En.credential(n,r)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ar._fromIdTokenResponse(e,r,i),o=_m(r);return new fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_m(r);return new fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _m(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Za.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Za(e,n,r,i)}}function P0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Za._fromErrorAndOperation(t,s,e,r):s})}async function uk(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ls(t,P0(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Ud(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(t,e,n=!1){const r="signIn",i=await P0(t,r,e),s=await fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function dk(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function fk(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function pk(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function mk(t){return Ye(t).signOut()}const el="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(el,"1"),this.storage.removeItem(el),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(){const t=We();return Fd(t)||Ll(t)}const yk=1e3,vk=10;class L0 extends O0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gk()&&GT(),this.fallbackToPolling=k0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}L0.type="LOCAL";const wk=L0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0 extends O0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$0.type="SESSION";const M0=$0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Ek(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$l.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=zd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function Sk(t){zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function Ik(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kk(){return U0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="firebaseLocalStorageDb",Ck=1,tl="firebaseLocalStorage",V0="fbase_key";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ml(t,e){return t.transaction([tl],e?"readwrite":"readonly").objectStore(tl)}function Nk(){const t=indexedDB.deleteDatabase(F0);return new co(t).toPromise()}function ah(){const t=indexedDB.open(F0,Ck);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tl,{keyPath:V0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tl)?e(r):(r.close(),await Nk(),e(await ah()))})})}async function Sm(t,e,n){const r=Ml(t,!0).put({[V0]:e,value:n});return new co(r).toPromise()}async function Ak(t,e){const n=Ml(t,!1).get(e),r=await new co(n).toPromise();return r===void 0?null:r.value}function Im(t,e){const n=Ml(t,!0).delete(e);return new co(n).toPromise()}const Rk=800,xk=3;class z0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$l._getInstance(kk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ik(),!this.activeServiceWorker)return;this.sender=new _k(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ah();return await Sm(e,el,"1"),await Im(e,el),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ak(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Im(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ml(i,!1).getAll();return new co(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z0.type="LOCAL";const Dk=z0;new oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t,e){return e?Yt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends D0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pk(t){return hk(t.auth,new jd(t),t.bypassAuthState)}function Ok(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),ck(n,new jd(t),t.bypassAuthState)}async function Lk(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),uk(n,new jd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pk;case"linkViaPopup":case"linkViaRedirect":return Lk;case"reauthViaPopup":case"reauthViaRedirect":return Ok;default:bt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new oo(2e3,1e4);class Hr extends b0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$k.get())};e()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="pendingRedirect",va=new Map;class Uk extends b0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=va.get(this.auth._key());if(!e){try{const r=await Fk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}va.set(this.auth._key(),e)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fk(t,e){const n=H0(e),r=B0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Vk(t,e){return B0(t)._set(H0(e),"true")}function zk(t,e){va.set(t._key(),e)}function B0(t){return Yt(t._redirectPersistence)}function H0(t){return ya(Mk,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t,e,n){return bk(t,e,n)}async function bk(t,e,n){const r=lo(t);AT(t,e,Vd),await r._initializationPromise;const i=j0(r,n);return await Vk(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function Bk(t,e,n=!1){const r=lo(t),i=j0(r,e),o=await new Uk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=10*60*1e3;class Wk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!W0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tm(e))}saveEventToCache(e){this.cachedEventUids.add(Tm(e)),this.lastProcessedEventTime=Date.now()}}function Tm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function W0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e={}){return ao(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qk=/^https?/;async function Yk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kk(t);for(const n of e)try{if(Xk(n))return}catch{}bt(t,"unauthorized-domain")}function Xk(t){const e=oh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Qk.test(n))return!1;if(Gk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=new oo(3e4,6e4);function km(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Zk(t){return new Promise((e,n)=>{var r,i,s;function o(){km(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{km(),n(Vt(t,"network-request-failed"))},timeout:Jk.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)o();else{const a=YT("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},R0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wa=null,e})}let wa=null;function eC(t){return wa=wa||Zk(t),wa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=new oo(5e3,15e3),nC="__/auth/iframe",rC="emulator/auth/iframe",iC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oC(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Md(e,rC):`https://${t.config.authDomain}/${nC}`,r={apiKey:e.apiKey,appName:t.name,v:ki},i=sC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${so(r).slice(1)}`}async function aC(t){const e=await eC(t),n=zt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:oC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=zt().setTimeout(()=>{s(o)},tC.get());function l(){zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uC=500,cC=600,hC="_blank",dC="http://localhost";class Cm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fC(t,e,n,r=uC,i=cC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=We().toLowerCase();n&&(a=E0(u)?hC:n),w0(u)&&(e=e||dC,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(qT(u)&&a!=="_self")return pC(e||"",a),new Cm(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Cm(h)}function pC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="__/auth/handler",gC="emulator/auth/handler",yC=encodeURIComponent("fac");async function Nm(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ki,eventId:i};if(e instanceof Vd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof uo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${yC}=${encodeURIComponent(l)}`:"";return`${vC(t)}?${so(a).slice(1)}${u}`}function vC({config:t}){return t.emulator?Md(t,gC):`https://${t.authDomain}/${mC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="webStorageSupport";class wC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M0,this._completeRedirectFn=Bk,this._overrideRedirectResult=zk}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Nm(e,n,r,oh(),i);return fC(e,o,zd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Nm(e,n,r,oh(),i);return Sk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aC(e),r=new Wk(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ku,{type:Ku},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ku];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return k0()||Fd()||Ll()}}const EC=wC;var Am="@firebase/auth",Rm="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function IC(t){di(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C0(t)},u=new nk(r,i,s,l);return ik(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),di(new gr("auth-internal",e=>{const n=lo(e.getProvider("auth").getImmediate());return(r=>new _C(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(Am,Rm,SC(t)),$n(Am,Rm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=5*60,kC=r0("authIdTokenMaxAge")||TC;let xm=null;const CC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kC)return;const i=n==null?void 0:n.token;xm!==i&&(xm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function NC(t=a0()){const e=Od(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rk(t,{popupRedirectResolver:EC,persistence:[Dk,wk,M0]}),r=r0("authTokenSyncURL");if(r){const s=CC(r);fk(n,s,()=>s(n.currentUser)),dk(n,o=>s(o))}const i=t0("auth");return i&&sk(n,`http://${i}`),n}IC("Browser");var AC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,bd=bd||{},M=AC||self;function Ul(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ho(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function RC(t){return Object.prototype.hasOwnProperty.call(t,Gu)&&t[Gu]||(t[Gu]=++xC)}var Gu="closure_uid_"+(1e9*Math.random()>>>0),xC=0;function DC(t,e,n){return t.call.apply(t.bind,arguments)}function PC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=DC:je=PC,je.apply(null,arguments)}function Qo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ne(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Wn(){this.s=this.s,this.o=this.o}var OC=0;Wn.prototype.s=!1;Wn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),OC!=0)&&RC(this)};Wn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const q0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Dm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ul(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var LC=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{M.addEventListener("test",()=>{},e),M.removeEventListener("test",()=>{},e)}catch{}return t}();function Ms(t){return/^[\s\xa0]*$/.test(t)}function Fl(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function Lt(t){return Fl().indexOf(t)!=-1}function Hd(t){return Hd[" "](t),t}Hd[" "]=function(){};function $C(t,e){var n=NN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var MC=Lt("Opera"),pi=Lt("Trident")||Lt("MSIE"),K0=Lt("Edge"),lh=K0||pi,G0=Lt("Gecko")&&!(Fl().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),UC=Fl().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function Q0(){var t=M.document;return t?t.documentMode:void 0}var uh;e:{var Qu="",Yu=function(){var t=Fl();if(G0)return/rv:([^\);]+)(\)|;)/.exec(t);if(K0)return/Edge\/([\d\.]+)/.exec(t);if(pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(UC)return/WebKit\/(\S+)/.exec(t);if(MC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yu&&(Qu=Yu?Yu[1]:""),pi){var Xu=Q0();if(Xu!=null&&Xu>parseFloat(Qu)){uh=String(Xu);break e}}uh=Qu}var ch;if(M.document&&pi){var Pm=Q0();ch=Pm||parseInt(uh,10)||void 0}else ch=void 0;var FC=ch;function Us(t,e){if(be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G0){e:{try{Hd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:VC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Us.$.h.call(this)}}Ne(Us,be);var VC={2:"touch",3:"pen",4:"mouse"};Us.prototype.h=function(){Us.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var fo="closure_listenable_"+(1e6*Math.random()|0),zC=0;function jC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++zC,this.fa=this.ia=!1}function Vl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Wd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function bC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Y0(t){const e={};for(const n in t)e[n]=t[n];return e}const Om="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function X0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Om.length;s++)n=Om[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function zl(t){this.src=t,this.g={},this.h=0}zl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new jC(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function hh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=q0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Vl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var qd="closure_lm_"+(1e6*Math.random()|0),Ju={};function J0(t,e,n,r,i){if(r&&r.once)return ew(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)J0(t,e[s],n,r,i);return null}return n=Qd(n),t&&t[fo]?t.O(e,n,ho(r)?!!r.capture:!!r,i):Z0(t,e,n,!1,r,i)}function Z0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ho(i)?!!i.capture:!!i,a=Gd(t);if(a||(t[qd]=a=new zl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=BC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)LC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(nw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BC(){function t(n){return e.call(t.src,t.listener,n)}const e=HC;return t}function ew(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ew(t,e[s],n,r,i);return null}return n=Qd(n),t&&t[fo]?t.P(e,n,ho(r)?!!r.capture:!!r,i):Z0(t,e,n,!0,r,i)}function tw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)tw(t,e[s],n,r,i);else r=ho(r)?!!r.capture:!!r,n=Qd(n),t&&t[fo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dh(s,n,r,i),-1<n&&(Vl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Gd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dh(e,n,r,i)),(n=-1<t?e[t]:null)&&Kd(n))}function Kd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[fo])hh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(nw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Gd(e))?(hh(n,t),n.h==0&&(n.src=null,e[qd]=null)):Vl(t)}}}function nw(t){return t in Ju?Ju[t]:Ju[t]="on"+t}function HC(t,e){if(t.fa)t=!0;else{e=new Us(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Kd(t),t=n.call(r,e)}return t}function Gd(t){return t=t[qd],t instanceof zl?t:null}var Zu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qd(t){return typeof t=="function"?t:(t[Zu]||(t[Zu]=function(e){return t.handleEvent(e)}),t[Zu])}function Ce(){Wn.call(this),this.i=new zl(this),this.S=this,this.J=null}Ne(Ce,Wn);Ce.prototype[fo]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){tw(this,t,e,n,r)};function Pe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new be(e,t);else if(e instanceof be)e.target=e.target||t;else{var i=e;e=new be(r,t),X0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Yo(o,r,!0,e)&&i}if(o=e.g=t,i=Yo(o,r,!0,e)&&i,i=Yo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Yo(o,r,!1,e)&&i}Ce.prototype.N=function(){if(Ce.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Vl(n[r]);delete t.g[e],t.h--}}this.J=null};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&hh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Yd=M.JSON.stringify;class WC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function qC(){var t=Xd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class KC{constructor(){this.h=this.g=null}add(e,n){const r=rw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var rw=new WC(()=>new GC,t=>t.reset());class GC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function YC(t){M.setTimeout(()=>{throw t},0)}let Fs,Vs=!1,Xd=new KC,iw=()=>{const t=M.Promise.resolve(void 0);Fs=()=>{t.then(XC)}};var XC=()=>{for(var t;t=qC();){try{t.h.call(t.g)}catch(n){YC(n)}var e=rw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vs=!1};function jl(t,e){Ce.call(this),this.h=t||1,this.g=e||M,this.j=je(this.qb,this),this.l=Date.now()}Ne(jl,Ce);k=jl.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Pe(this,"tick"),this.ga&&(Jd(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){jl.$.N.call(this),Jd(this),delete this.g};function Zd(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function sw(t){t.g=Zd(()=>{t.g=null,t.i&&(t.i=!1,sw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JC extends Wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sw(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(t){Wn.call(this),this.h=t,this.g={}}Ne(zs,Wn);var Lm=[];function ow(t,e,n,r){Array.isArray(n)||(n&&(Lm[0]=n.toString()),n=Lm);for(var i=0;i<n.length;i++){var s=J0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function aw(t){Wd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kd(e)},t),t.g={}}zs.prototype.N=function(){zs.$.N.call(this),aw(this)};zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bl(){this.g=!0}bl.prototype.Ea=function(){this.g=!1};function ZC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function eN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Wr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nN(t,n)+(r?" "+r:"")})}function tN(t,e){t.info(function(){return"TIMEOUT: "+e})}bl.prototype.info=function(){};function nN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Yd(n)}catch{return e}}var Tr={},$m=null;function Bl(){return $m=$m||new Ce}Tr.Ta="serverreachability";function lw(t){be.call(this,Tr.Ta,t)}Ne(lw,be);function js(t){const e=Bl();Pe(e,new lw(e))}Tr.STAT_EVENT="statevent";function uw(t,e){be.call(this,Tr.STAT_EVENT,t),this.stat=e}Ne(uw,be);function Ge(t){const e=Bl();Pe(e,new uw(e,t))}Tr.Ua="timingevent";function cw(t,e){be.call(this,Tr.Ua,t),this.size=e}Ne(cw,be);function po(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var Hl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},hw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ef(){}ef.prototype.h=null;function Mm(t){return t.h||(t.h=t.i())}function dw(){}var mo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function tf(){be.call(this,"d")}Ne(tf,be);function nf(){be.call(this,"c")}Ne(nf,be);var fh;function Wl(){}Ne(Wl,ef);Wl.prototype.g=function(){return new XMLHttpRequest};Wl.prototype.i=function(){return{}};fh=new Wl;function go(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new zs(this),this.P=rN,t=lh?125:void 0,this.V=new jl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fw}function fw(){this.i=null,this.g="",this.h=!1}var rN=45e3,ph={},nl={};k=go.prototype;k.setTimeout=function(t){this.P=t};function mh(t,e,n){t.L=1,t.v=Kl(on(e)),t.s=n,t.S=!0,pw(t,null)}function pw(t,e){t.G=Date.now(),yo(t),t.A=on(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Sw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new fw,t.g=Bw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new JC(je(t.Pa,t,t.g),t.O)),ow(t.U,t.g,"readystatechange",t.nb),e=t.I?Y0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),js(),ZC(t.j,t.u,t.A,t.m,t.W,t.s)}k.nb=function(t){t=t.target;const e=this.M;e&&$t(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const c=$t(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||lh||this.g&&(this.h.h||this.g.ja()||zm(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?js(3):js(2)),ql(this);var n=this.g.da();this.ca=n;t:if(mw(this)){var r=zm(this.g);t="";var i=r.length,s=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),hs(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,eN(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ms(a)){var u=a;break t}}u=null}if(n=u)Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gh(this,n);else{this.i=!1,this.o=3,Ge(12),nr(this),hs(this);break e}}this.S?(gw(this,c,o),lh&&this.i&&c==3&&(ow(this.U,this.V,"tick",this.mb),this.V.start())):(Wr(this.j,this.m,o,null),gh(this,o)),c==4&&nr(this),this.i&&!this.J&&(c==4?Vw(this.l,this):(this.i=!1,yo(this)))}else TN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),nr(this),hs(this)}}}catch{}finally{}};function mw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function gw(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=iN(t,n),i==nl){e==4&&(t.o=4,Ge(14),r=!1),Wr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ph){t.o=4,Ge(15),Wr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wr(t.j,t.m,i,null),gh(t,i);mw(t)&&i!=nl&&i!=ph&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),uf(e),e.M=!0,Ge(11))):(Wr(t.j,t.m,n,"[Invalid Chunked Response]"),nr(t),hs(t))}k.mb=function(){if(this.g){var t=$t(this.g),e=this.g.ja();this.C<e.length&&(ql(this),gw(this,t,e),this.i&&t!=4&&yo(this))}};function iN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?nl:(n=Number(e.substring(n,r)),isNaN(n)?ph:(r+=1,r+n>e.length?nl:(e=e.slice(r,r+n),t.C=r+n,e)))}k.cancel=function(){this.J=!0,nr(this)};function yo(t){t.Y=Date.now()+t.P,yw(t,t.P)}function yw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=po(je(t.lb,t),e)}function ql(t){t.B&&(M.clearTimeout(t.B),t.B=null)}k.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(tN(this.j,this.A),this.L!=2&&(js(),Ge(17)),nr(this),this.o=2,hs(this)):yw(this,this.Y-t)};function hs(t){t.l.H==0||t.J||Vw(t.l,t)}function nr(t){ql(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Jd(t.V),aw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function gh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||yh(n.i,t))){if(!t.K&&yh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)sl(n),Yl(n);else break e;lf(n),Ge(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=po(je(n.ib,n),6e3));if(1>=kw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else rr(n,11)}else if((t.K||n.g==t)&&sl(n),!Ms(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(rf(s,s.h),s.h=null))}if(r.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,te(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=bw(r,r.J?r.pa:null,r.Y),o.K){Cw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ql(a),yo(a)),r.g=o}else Uw(r);0<n.j.length&&Xl(n)}else u[0]!="stop"&&u[0]!="close"||rr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?rr(n,7):af(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}js(4)}catch{}}function sN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ul(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function oN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ul(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function vw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ul(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oN(t),r=sN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ww=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function lr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof lr){this.h=t.h,rl(this,t.j),this.s=t.s,this.g=t.g,il(this,t.m),this.l=t.l;var e=t.i,n=new bs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Um(this,n),this.o=t.o}else t&&(e=String(t).match(ww))?(this.h=!1,rl(this,e[1]||"",!0),this.s=Yi(e[2]||""),this.g=Yi(e[3]||"",!0),il(this,e[4]),this.l=Yi(e[5]||"",!0),Um(this,e[6]||"",!0),this.o=Yi(e[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}lr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xi(e,Fm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xi(e,Fm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xi(n,n.charAt(0)=="/"?cN:uN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xi(n,dN)),t.join("")};function on(t){return new lr(t)}function rl(t,e,n){t.j=n?Yi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function il(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Um(t,e,n){e instanceof bs?(t.i=e,fN(t.i,t.h)):(n||(e=Xi(e,hN)),t.i=new bs(e,t.h))}function te(t,e,n){t.i.set(e,n)}function Kl(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fm=/[#\/\?@]/g,uN=/[#\?:]/g,cN=/[#\?]/g,hN=/[#\?@]/g,dN=/#/g;function bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qn(t){t.g||(t.g=new Map,t.h=0,t.i&&aN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=bs.prototype;k.add=function(t,e){qn(this),this.i=null,t=Ci(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ew(t,e){qn(t),e=Ci(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _w(t,e){return qn(t),e=Ci(t,e),t.g.has(e)}k.forEach=function(t,e){qn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};k.ta=function(){qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};k.Z=function(t){qn(this);let e=[];if(typeof t=="string")_w(this,t)&&(e=e.concat(this.g.get(Ci(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return qn(this),this.i=null,t=Ci(this,t),_w(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Sw(t,e,n){Ew(t,e),0<n.length&&(t.i=null,t.g.set(Ci(t,e),Bd(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ci(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fN(t,e){e&&!t.j&&(qn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Ew(this,r),Sw(this,i,n))},t)),t.j=e}var pN=class{constructor(t,e){this.g=t,this.map=e}};function Iw(t){this.l=t||mN,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mN=10;function Tw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kw(t){return t.h?1:t.g?t.g.size:0}function yh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rf(t,e){t.g?t.g.add(e):t.h=e}function Cw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Iw.prototype.cancel=function(){if(this.i=Nw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Nw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Bd(t.i)}var gN=class{stringify(t){return M.JSON.stringify(t,void 0)}parse(t){return M.JSON.parse(t,void 0)}};function yN(){this.g=new gN}function vN(t,e,n){const r=n||"";try{vw(t,function(i,s){let o=i;ho(i)&&(o=Yd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function wN(t,e){const n=new bl;if(M.Image){const r=new Image;r.onload=Qo(Xo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Qo(Xo,n,r,"TestLoadImage: error",!1,e),r.onabort=Qo(Xo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Qo(Xo,n,r,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function vo(t){this.l=t.fc||null,this.j=t.ob||!1}Ne(vo,ef);vo.prototype.g=function(){return new Gl(this.l,this.j)};vo.prototype.i=function(t){return function(){return t}}({});function Gl(t,e){Ce.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=sf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ne(Gl,Ce);var sf=0;k=Gl.prototype;k.open=function(t,e){if(this.readyState!=sf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bs(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||M).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wo(this)),this.readyState=sf};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bs(this)),this.g&&(this.readyState=3,Bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Aw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Aw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wo(this):Bs(this),this.readyState==3&&Aw(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,wo(this))};k.Ya=function(t){this.g&&(this.response=t,wo(this))};k.ka=function(){this.g&&wo(this)};function wo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bs(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var EN=M.JSON.parse;function he(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rw,this.L=this.M=!1}Ne(he,Ce);var Rw="",_N=/^https?$/i,SN=["POST","PUT"];k=he.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fh.g(),this.C=this.u?Mm(this.u):Mm(fh),this.g.onreadystatechange=je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Vm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=M.FormData&&t instanceof M.FormData,!(0<=q0(SN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Pw(this),0<this.B&&((this.L=IN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.ua,this)):this.A=Zd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Vm(this,s)}};function IN(t){return pi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof bd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function Vm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xw(t),Ql(t)}function xw(t){t.F||(t.F=!0,Pe(t,"complete"),Pe(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),Ql(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ql(this,!0)),he.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?Dw(this):this.kb())};k.kb=function(){Dw(this)};function Dw(t){if(t.h&&typeof bd<"u"&&(!t.C[1]||$t(t)!=4||t.da()!=2)){if(t.v&&$t(t)==4)Zd(t.La,0,t);else if(Pe(t,"readystatechange"),$t(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(ww)[1]||null;!i&&M.self&&M.self.location&&(i=M.self.location.protocol.slice(0,-1)),r=!_N.test(i?i.toLowerCase():"")}n=r}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var s=2<$t(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",xw(t)}}finally{Ql(t)}}}}function Ql(t,e){if(t.g){Pw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Pw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function $t(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),EN(e)}};function zm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Rw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function TN(t){const e={};t=(t.g&&2<=$t(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ms(t[r]))continue;var n=QC(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}bC(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ow(t){let e="";return Wd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function of(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ow(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function Hi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Lw(t){this.Ga=0,this.j=[],this.l=new bl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hi("baseRetryDelayMs",5e3,t),this.hb=Hi("retryDelaySeedMs",1e4,t),this.eb=Hi("forwardChannelMaxRetries",2,t),this.xa=Hi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Iw(t&&t.concurrentRequestLimit),this.Ja=new yN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=Lw.prototype;k.ra=8;k.H=1;function af(t){if($w(t),t.H==3){var e=t.W++,n=on(t.I);if(te(n,"SID",t.K),te(n,"RID",e),te(n,"TYPE","terminate"),Eo(t,n),e=new go(t,t.l,e),e.L=2,e.v=Kl(on(n)),n=!1,M.navigator&&M.navigator.sendBeacon)try{n=M.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&M.Image&&(new Image().src=e.v,n=!0),n||(e.g=Bw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),yo(e)}jw(t)}function Yl(t){t.g&&(uf(t),t.g.cancel(),t.g=null)}function $w(t){Yl(t),t.u&&(M.clearTimeout(t.u),t.u=null),sl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function Xl(t){if(!Tw(t.i)&&!t.m){t.m=!0;var e=t.Na;Fs||iw(),Vs||(Fs(),Vs=!0),Xd.add(e,t),t.C=0}}function kN(t,e){return kw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=po(je(t.Na,t,e),zw(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new go(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Y0(s),X0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Mw(this,i,e),n=on(this.I),te(n,"RID",t),te(n,"CVER",22),this.F&&te(n,"X-HTTP-Session-Id",this.F),Eo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Ow(s)))+"&"+e:this.o&&of(n,this.o,s)),rf(this.i,i),this.bb&&te(n,"TYPE","init"),this.P?(te(n,"$req",e),te(n,"SID","null"),i.aa=!0,mh(i,n,null)):mh(i,n,e),this.H=2}}else this.H==3&&(t?jm(this,t):this.j.length==0||Tw(this.i)||jm(this))};function jm(t,e){var n;e?n=e.m:n=t.W++;const r=on(t.I);te(r,"SID",t.K),te(r,"RID",n),te(r,"AID",t.V),Eo(t,r),t.o&&t.s&&of(r,t.o,t.s),n=new go(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Mw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),rf(t.i,n),mh(n,r,e)}function Eo(t,e){t.na&&Wd(t.na,function(n,r){te(e,r,n)}),t.h&&vw({},function(n,r){te(e,r,n)})}function Mw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?je(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{vN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Uw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Fs||iw(),Vs||(Fs(),Vs=!0),Xd.add(e,t),t.A=0}}function lf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=po(je(t.Ma,t),zw(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,Fw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=po(je(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ge(10),Yl(this),Fw(this))};function uf(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function Fw(t){t.g=new go(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=on(t.wa);te(e,"RID","rpc"),te(e,"SID",t.K),te(e,"AID",t.V),te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&te(e,"TO",t.qa),te(e,"TYPE","xmlhttp"),Eo(t,e),t.o&&t.s&&of(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Kl(on(e)),n.s=null,n.S=!0,pw(n,t)}k.ib=function(){this.v!=null&&(this.v=null,Yl(this),lf(this),Ge(19))};function sl(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function Vw(t,e){var n=null;if(t.g==e){sl(t),uf(t),t.g=null;var r=2}else if(yh(t.i,e))n=e.F,Cw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Bl(),Pe(r,new cw(r,n)),Xl(t)}else Uw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&kN(t,e)||r==2&&lf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:rr(t,5);break;case 4:rr(t,10);break;case 3:rr(t,6);break;default:rr(t,2)}}}function zw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function rr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=je(t.pb,t);n||(n=new lr("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||rl(n,"https"),Kl(n)),wN(n.toString(),r)}else Ge(2);t.H=0,t.h&&t.h.za(e),jw(t),$w(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ge(2)):(this.l.info("Failed to ping google.com"),Ge(1))};function jw(t){if(t.H=0,t.ma=[],t.h){const e=Nw(t.i);(e.length!=0||t.j.length!=0)&&(Dm(t.ma,e),Dm(t.ma,t.j),t.i.i.length=0,Bd(t.j),t.j.length=0),t.h.ya()}}function bw(t,e,n){var r=n instanceof lr?on(n):new lr(n);if(r.g!="")e&&(r.g=e+"."+r.g),il(r,r.m);else{var i=M.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new lr(null);r&&rl(s,r),e&&(s.g=e),i&&il(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&te(r,n,e),te(r,"VER",t.ra),Eo(t,r),r}function Bw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new he(new vo({ob:!0})):new he(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function Hw(){}k=Hw.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function ol(){if(pi&&!(10<=Number(FC)))throw Error("Environmental error: no available transport.")}ol.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Ce.call(this),this.g=new Lw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ms(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ms(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ni(this)}Ne(ut,Ce);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ge(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=bw(t,null,t.Y),Xl(t)};ut.prototype.close=function(){af(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yd(t),t=n);e.j.push(new pN(e.fb++,t)),e.H==3&&Xl(e)};ut.prototype.N=function(){this.g.h=null,delete this.j,af(this.g),delete this.g,ut.$.N.call(this)};function Ww(t){tf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ne(Ww,tf);function qw(){nf.call(this),this.status=1}Ne(qw,nf);function Ni(t){this.g=t}Ne(Ni,Hw);Ni.prototype.Ba=function(){Pe(this.g,"a")};Ni.prototype.Aa=function(t){Pe(this.g,new Ww(t))};Ni.prototype.za=function(t){Pe(this.g,new qw)};Ni.prototype.ya=function(){Pe(this.g,"b")};function CN(){this.blockSize=-1}function Rt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ne(Rt,CN);Rt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ec(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Rt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ec(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ec(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ec(this,r),i=0;break}}this.h=i,this.i+=e};Rt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function X(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var NN={};function cf(t){return-128<=t&&128>t?$C(t,function(e){return new X([e|0],0>e?-1:0)}):new X([t|0],0>t?-1:0)}function Mt(t){if(isNaN(t)||!isFinite(t))return ei;if(0>t)return xe(Mt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=vh;return new X(e,0)}function Kw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xe(Kw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Mt(Math.pow(e,8)),r=ei,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Mt(Math.pow(e,s)),r=r.R(s).add(Mt(o))):(r=r.R(n),r=r.add(Mt(o)))}return r}var vh=4294967296,ei=cf(0),wh=cf(1),bm=cf(16777216);k=X.prototype;k.ea=function(){if(pt(this))return-xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:vh+r)*e,e*=vh}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Xt(this))return"0";if(pt(this))return"-"+xe(this).toString(t);for(var e=Mt(Math.pow(t,6)),n=this,r="";;){var i=ll(n,e).g;n=al(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Xt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Xt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function pt(t){return t.h==-1}k.X=function(t){return t=al(this,t),pt(t)?-1:Xt(t)?0:1};function xe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new X(n,~t.h).add(wh)}k.abs=function(){return pt(this)?xe(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new X(n,n[n.length-1]&-2147483648?-1:0)};function al(t,e){return t.add(xe(e))}k.R=function(t){if(Xt(this)||Xt(t))return ei;if(pt(this))return pt(t)?xe(this).R(xe(t)):xe(xe(this).R(t));if(pt(t))return xe(this.R(xe(t)));if(0>this.X(bm)&&0>t.X(bm))return Mt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Jo(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Jo(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Jo(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Jo(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new X(n,0)};function Jo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Wi(t,e){this.g=t,this.h=e}function ll(t,e){if(Xt(e))throw Error("division by zero");if(Xt(t))return new Wi(ei,ei);if(pt(t))return e=ll(xe(t),e),new Wi(xe(e.g),xe(e.h));if(pt(e))return e=ll(t,xe(e)),new Wi(xe(e.g),e.h);if(30<t.g.length){if(pt(t)||pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=wh,r=e;0>=r.X(t);)n=Bm(n),r=Bm(r);var i=Rr(n,1),s=Rr(r,1);for(r=Rr(r,2),n=Rr(n,2);!Xt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Rr(r,1),n=Rr(n,1)}return e=al(t,i.R(e)),new Wi(i,e)}for(i=ei;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Mt(n),o=s.R(e);pt(o)||0<o.X(t);)n-=r,s=Mt(n),o=s.R(e);Xt(s)&&(s=wh),i=i.add(s),t=al(t,o)}return new Wi(i,t)}k.gb=function(t){return ll(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new X(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new X(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new X(n,this.h^t.h)};function Bm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new X(n,t.h)}function Rr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new X(i,t.h)}ol.prototype.createWebChannel=ol.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Hl.NO_ERROR=0;Hl.TIMEOUT=8;Hl.HTTP_ERROR=6;hw.COMPLETE="complete";dw.EventType=mo;mo.OPEN="a";mo.CLOSE="b";mo.ERROR="c";mo.MESSAGE="d";Ce.prototype.listen=Ce.prototype.O;he.prototype.listenOnce=he.prototype.P;he.prototype.getLastError=he.prototype.Sa;he.prototype.getLastErrorCode=he.prototype.Ia;he.prototype.getStatus=he.prototype.da;he.prototype.getResponseJson=he.prototype.Wa;he.prototype.getResponseText=he.prototype.ja;he.prototype.send=he.prototype.ha;he.prototype.setWithCredentials=he.prototype.Oa;Rt.prototype.digest=Rt.prototype.l;Rt.prototype.reset=Rt.prototype.reset;Rt.prototype.update=Rt.prototype.j;X.prototype.add=X.prototype.add;X.prototype.multiply=X.prototype.R;X.prototype.modulo=X.prototype.gb;X.prototype.compare=X.prototype.X;X.prototype.toNumber=X.prototype.ea;X.prototype.toString=X.prototype.toString;X.prototype.getBits=X.prototype.D;X.fromNumber=Mt;X.fromString=Kw;var AN=function(){return new ol},RN=function(){return Bl()},tc=Hl,xN=hw,DN=Tr,Hm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},PN=vo,Zo=dw,ON=he,LN=Rt,ti=X;const Wm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Dd("@firebase/firestore");function qm(){return wr.logLevel}function P(t,...e){if(wr.logLevel<=G.DEBUG){const n=e.map(hf);wr.debug(`Firestore (${Ai}): ${t}`,...n)}}function an(t,...e){if(wr.logLevel<=G.ERROR){const n=e.map(hf);wr.error(`Firestore (${Ai}): ${t}`,...n)}}function mi(t,...e){if(wr.logLevel<=G.WARN){const n=e.map(hf);wr.warn(`Firestore (${Ai}): ${t}`,...n)}}function hf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function ie(t,e){t||$()}function V(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class MN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UN{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ur,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new Gw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Ue(e)}}class FN{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class VN{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new FN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jN{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.T=n.token,new zN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=bN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function gi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new _e(0,0))}static max(){return new U(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends Hs{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const BN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Hs{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return BN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ne.fromString(e))}static fromName(e){return new L(ne.fromString(e).popFirst(5))}static empty(){return new L(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ne(e.slice()))}}function HN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new Vn(i,L.empty(),e)}function WN(t){return new Vn(t.readTime,t.key,-1)}class Vn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vn(U.min(),L.empty(),-1)}static max(){return new Vn(U.max(),L.empty(),-1)}}function qN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==KN)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function So(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}df.ct=-1;function Jl(t){return t==null}function ul(t){return t===0&&1/t==-1/0}function QN(t){return typeof t=="number"&&Number.isInteger(t)&&!ul(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.comparator=e,this.root=n||Re.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ea(this.root,e,this.comparator,!0)}}class ea{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Re.RED,this.left=i??Re.EMPTY,this.right=s??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Re(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Re(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gm(this.data.getIterator())}getIteratorFrom(e){return new Gm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Gm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Be(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xw("Invalid base64 string: "+i):i}}(e);return new qe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const YN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(ie(!!t),typeof t=="string"){let e=0;const n=YN.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pf(t){const e=t.mapValue.fields.__previous_value__;return ff(e)?pf(e):e}function Ws(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class qs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ff(t)?4:JN(t)?9007199254740991:10:$()}function Bt(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ws(t).isEqual(Ws(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=zn(r.timestampValue),o=zn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Er(r.bytesValue).isEqual(Er(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return me(r.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(r.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return me(r.integerValue)===me(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=me(r.doubleValue),o=me(i.doubleValue);return s===o?ul(s)===ul(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Km(s)!==Km(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Bt(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function Ks(t,e){return(t.values||[]).find(n=>Bt(n,e))!==void 0}function yi(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=me(i.integerValue||i.doubleValue),a=me(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Qm(t.timestampValue,e.timestampValue);case 4:return Qm(Ws(t),Ws(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Er(i),a=Er(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Q(o[l],a[l]);if(u!==0)return u}return Q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Q(me(i.latitude),me(s.latitude));return o!==0?o:Q(me(i.longitude),me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=yi(o[l],a[l]);if(u)return u}return Q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ta.mapValue&&s===ta.mapValue)return 0;if(i===ta.mapValue)return 1;if(s===ta.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Q(a[c],u[c]);if(h!==0)return h;const d=yi(o[a[c]],l[u[c]]);if(d!==0)return d}return Q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Qm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=zn(t),r=zn(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function vi(t){return Eh(t)}function Eh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=zn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Er(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Eh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Eh(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Ym(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _h(t){return!!t&&"integerValue"in t}function mf(t){return!!t&&"arrayValue"in t}function Xm(t){return!!t&&"nullValue"in t}function Jm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ea(t){return!!t&&"mapValue"in t}function ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ri(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ea(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ds(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ds(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ea(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ea(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ri(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(ds(this.value))}}function Jw(t){const e=[];return Ri(t.fields,(n,r)=>{const i=new ze([n]);if(Ea(r)){const s=Jw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ve(e,0,U.min(),U.min(),U.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ve(e,1,n,U.min(),r,i,0)}static newNoDocument(e,n){return new Ve(e,2,n,U.min(),U.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,U.min(),U.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.position=e,this.inclusive=n}}function Zm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=yi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function eg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{}class ye extends Zw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new t2(e,n,r):n==="array-contains"?new i2(e,r):n==="in"?new s2(e,r):n==="not-in"?new o2(e,r):n==="array-contains-any"?new a2(e,r):new ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new n2(e,r):new r2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yi(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class xt extends Zw{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new xt(e,n)}matches(e){return e1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function e1(t){return t.op==="and"}function t1(t){return e2(t)&&e1(t)}function e2(t){for(const e of t.filters)if(e instanceof xt)return!1;return!0}function Sh(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+vi(t.value);if(t1(t))return t.filters.map(e=>Sh(e)).join(",");{const e=t.filters.map(n=>Sh(n)).join(",");return`${t.op}(${e})`}}function n1(t,e){return t instanceof ye?function(n,r){return r instanceof ye&&n.op===r.op&&n.field.isEqual(r.field)&&Bt(n.value,r.value)}(t,e):t instanceof xt?function(n,r){return r instanceof xt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&n1(s,r.filters[o]),!0):!1}(t,e):void $()}function r1(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${vi(e.value)}`}(t):t instanceof xt?function(e){return e.op.toString()+" {"+e.getFilters().map(r1).join(" ,")+"}"}(t):"Filter"}class t2 extends ye{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class n2 extends ye{constructor(e,n){super(e,"in",n),this.keys=i1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class r2 extends ye{constructor(e,n){super(e,"not-in",n),this.keys=i1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function i1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class i2 extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mf(n)&&Ks(n.arrayValue,this.value)}}class s2 extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ks(this.value.arrayValue,n)}}class o2 extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ks(this.value.arrayValue,n)}}class a2 extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ks(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function tg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new l2(t,e,n,r,i,s,o)}function gf(t){const e=V(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),e.dt=n}return e.dt}function yf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!n1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!eg(t.startAt,e.startAt)&&eg(t.endAt,e.endAt)}function Ih(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function u2(t,e,n,r,i,s,o,a){return new xi(t,e,n,r,i,s,o,a)}function vf(t){return new xi(t)}function ng(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function s1(t){return t.collectionGroup!==null}function ri(t){const e=V(t);if(e.wt===null){e.wt=[];const n=Zl(e),r=wf(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new ni(n)),e.wt.push(new ni(ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ni(ze.keyField(),s))}}}return e.wt}function ln(t){const e=V(t);if(!e._t)if(e.limitType==="F")e._t=tg(e.path,e.collectionGroup,ri(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ri(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ni(s.field,o))}const r=e.endAt?new cl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new cl(e.startAt.position,e.startAt.inclusive):null;e._t=tg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Th(t,e){e.getFirstInequalityField(),Zl(t);const n=t.filters.concat([e]);return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hl(t,e,n){return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function eu(t,e){return yf(ln(t),ln(e))&&t.limitType===e.limitType}function o1(t){return`${gf(ln(t))}|lt:${t.limitType}`}function kh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>r1(r)).join(", ")}]`),Jl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),`Target(${n})`}(ln(t))}; limitType=${t.limitType})`}function tu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ri(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Zm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ri(n),r)||n.endAt&&!function(i,s,o){const a=Zm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ri(n),r))}(t,e)}function c2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function a1(t){return(e,n)=>{let r=!1;for(const i of ri(t)){const s=h2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function h2(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?yi(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ri(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Yw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=new ue(L.comparator);function un(){return d2}const l1=new ue(L.comparator);function Ji(...t){let e=l1;for(const n of t)e=e.insert(n.key,n);return e}function u1(t){let e=l1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ir(){return fs()}function c1(){return fs()}function fs(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const f2=new ue(L.comparator),p2=new Be(L.comparator);function H(...t){let e=p2;for(const n of t)e=e.add(n);return e}const m2=new Be(Q);function g2(){return m2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ul(e)?"-0":e}}function d1(t){return{integerValue:""+t}}function y2(t,e){return QN(e)?d1(e):h1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this._=void 0}}function v2(t,e,n){return t instanceof Gs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ff(i)&&(i=pf(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Qs?p1(t,e):t instanceof Ys?m1(t,e):function(r,i){const s=f1(r,i),o=rg(s)+rg(r.gt);return _h(s)&&_h(r.gt)?d1(o):h1(r.serializer,o)}(t,e)}function w2(t,e,n){return t instanceof Qs?p1(t,e):t instanceof Ys?m1(t,e):n}function f1(t,e){return t instanceof dl?_h(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Gs extends nu{}class Qs extends nu{constructor(e){super(),this.elements=e}}function p1(t,e){const n=g1(e);for(const r of t.elements)n.some(i=>Bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ys extends nu{constructor(e){super(),this.elements=e}}function m1(t,e){let n=g1(e);for(const r of t.elements)n=n.filter(i=>!Bt(i,r));return{arrayValue:{values:n}}}class dl extends nu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function rg(t){return me(t.integerValue||t.doubleValue)}function g1(t){return mf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n){this.field=e,this.transform=n}}function _2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Qs&&r instanceof Qs||n instanceof Ys&&r instanceof Ys?gi(n.elements,r.elements,Bt):n instanceof dl&&r instanceof dl?Bt(n.gt,r.gt):n instanceof Gs&&r instanceof Gs}(t.transform,e.transform)}class S2{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ru{}function y1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new w1(t.key,Zt.none()):new Io(t.key,t.data,Zt.none());{const n=t.data,r=mt.empty();let i=new Be(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new kr(t.key,r,new kt(i.toArray()),Zt.none())}}function I2(t,e,n){t instanceof Io?function(r,i,s){const o=r.value.clone(),a=sg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(r,i,s){if(!_a(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=sg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(v1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ps(t,e,n,r){return t instanceof Io?function(i,s,o,a){if(!_a(i.precondition,s))return o;const l=i.value.clone(),u=og(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(i,s,o,a){if(!_a(i.precondition,s))return o;const l=og(i.fieldTransforms,a,s),u=s.data;return u.setAll(v1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return _a(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function T2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=f1(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function ig(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&gi(n,r,(i,s)=>_2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends ru{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kr extends ru{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function v1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sg(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,w2(o,a,n[i]))}return r}function og(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,v2(s,o,e))}return r}class w1 extends ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k2 extends ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&I2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ps(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ps(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=c1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=y1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,r)=>ig(n,r))&&gi(this.baseMutations,e.baseMutations,(n,r)=>ig(n,r))}}class Ef{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=f2;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ef(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,q;function R2(t){switch(t){default:return $();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function E1(t){if(t===void 0)return an("GRPC error has no .code"),E.UNKNOWN;switch(t){case pe.OK:return E.OK;case pe.CANCELLED:return E.CANCELLED;case pe.UNKNOWN:return E.UNKNOWN;case pe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case pe.INTERNAL:return E.INTERNAL;case pe.UNAVAILABLE:return E.UNAVAILABLE;case pe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case pe.NOT_FOUND:return E.NOT_FOUND;case pe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case pe.ABORTED:return E.ABORTED;case pe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case pe.DATA_LOSS:return E.DATA_LOSS;default:return $()}}(q=pe||(pe={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return na}static getOrCreateInstance(){return na===null&&(na=new _f),na}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let na=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=new ti([4294967295,4294967295],0);function ag(t){const e=x2().encode(t),n=new LN;return n.update(e),new Uint8Array(n.digest())}function lg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ti([n,r],0),new ti([i,s],0)]}class Sf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zi(`Invalid padding: ${n}`);if(r<0)throw new Zi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zi(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ti.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(ti.fromNumber(r)));return i.compare(D2)===1&&(i=new ti([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=ag(e),[r,i]=lg(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Sf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=ag(e),[r,i]=lg(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,To.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new iu(U.min(),i,new ue(Q),un(),H())}}class To{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new To(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class _1{constructor(e,n){this.targetId=e,this.Vt=n}}class S1{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ug{constructor(){this.St=0,this.Dt=hg(),this.Ct=qe.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=H(),n=H(),r=H();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new To(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=hg()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class P2{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=un(),this.zt=cg(),this.Wt=new ue(Q)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Ih(o))if(i===0){const a=new L(o.path);this.Yt(r,a,Ve.newNoDocument(a,U.min()))}else ie(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=_f.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,g,y,v,_,p;const f={localCacheCount:c,existenceFilterCount:h.count},m=h.unchangedNames;return m&&(f.bloomFilter={applied:u===0,hashCount:(d=m==null?void 0:m.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(g=m==null?void 0:m.bits)===null||g===void 0?void 0:g.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(p=(_=m==null?void 0:m.bits)===null||_===void 0?void 0:_.padding)!==null&&p!==void 0?p:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Er(s).toUint8Array()}catch(c){if(c instanceof Xw)return mi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Sf(l,o,a)}catch(c){return mi(c instanceof Zi?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Ih(a.target)){const l=new L(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ve.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=H();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new iu(e,n,this.Wt,this.jt,r);return this.jt=un(),this.zt=cg(),this.Wt=new ue(Q),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new ug,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Be(Q),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ug),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function cg(){return new ue(L.comparator)}function hg(){return new ue(L.comparator)}const O2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),L2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$2=(()=>({and:"AND",or:"OR"}))();class M2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ch(t,e){return t.useProto3Json||Jl(e)?e:{value:e}}function fl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function I1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function U2(t,e){return fl(t,e.toTimestamp())}function jt(t){return ie(!!t),U.fromTimestamp(function(e){const n=zn(e);return new _e(n.seconds,n.nanos)}(t))}function If(t,e){return function(n){return new ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function T1(t){const e=ne.fromString(t);return ie(A1(e)),e}function Nh(t,e){return If(t.databaseId,e.path)}function nc(t,e){const n=T1(e);if(n.get(1)!==t.databaseId.projectId)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(k1(n))}function Ah(t,e){return If(t.databaseId,e)}function F2(t){const e=T1(t);return e.length===4?ne.emptyPath():k1(e)}function Rh(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function k1(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dg(t,e,n){return{name:Nh(t,e),fields:n.value.mapValue.fields}}function V2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ie(u===void 0||typeof u=="string"),qe.fromBase64String(u||"")):(ie(u===void 0||u instanceof Uint8Array),qe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:E1(l.code);return new A(u,l.message||"")}(o);n=new S1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nc(t,r.document.name),s=jt(r.document.updateTime),o=r.document.createTime?jt(r.document.createTime):U.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=Ve.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Sa(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nc(t,r.document),s=r.readTime?jt(r.readTime):U.min(),o=Ve.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Sa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nc(t,r.document),s=r.removedTargetIds||[];n=new Sa([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new A2(i,s),a=r.targetId;n=new _1(a,o)}}return n}function z2(t,e){let n;if(e instanceof Io)n={update:dg(t,e.key,e.value)};else if(e instanceof w1)n={delete:Nh(t,e.key)};else if(e instanceof kr)n={update:dg(t,e.key,e.data),updateMask:Q2(e.fieldMask)};else{if(!(e instanceof k2))return $();n={verify:Nh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Gs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Qs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ys)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof dl)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:U2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function j2(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?jt(r.updateTime):jt(i);return s.isEqual(U.min())&&(s=jt(i)),new S2(s,r.transformResults||[])}(n,e))):[]}function b2(t,e){return{documents:[Ah(t,e.path)]}}function B2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ah(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ah(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return N1(xt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:xr(c.field),direction:q2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ch(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function H2(t){let e=F2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=C1(c);return h instanceof xt&&t1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ni(Dr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Jl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new cl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new cl(d,h)}(n.endAt)),u2(e,i,o,s,a,"F",l,u)}function W2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Dr(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Dr(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Dr(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Dr(e.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(Dr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return xt.create(e.compositeFilter.filters.map(n=>C1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function q2(t){return O2[t]}function K2(t){return L2[t]}function G2(t){return $2[t]}function xr(t){return{fieldPath:t.canonicalString()}}function Dr(t){return ze.fromServerFormat(t.fieldPath)}function N1(t){return t instanceof ye?function(e){if(e.op==="=="){if(Jm(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NAN"}};if(Xm(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jm(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NOT_NAN"}};if(Xm(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xr(e.field),op:K2(e.op),value:e.value}}}(t):t instanceof xt?function(e){const n=e.getFilters().map(r=>N1(r));return n.length===1?n[0]:{compositeFilter:{op:G2(e.op),filters:n}}}(t):$()}function Q2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function A1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,r,i,s=U.min(),o=U.min(),a=qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new In(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.fe=e}}function X2(t){const e=H2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this.rn=new Z2}addToCollectionParentIndex(e,n){return this.rn.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Vn.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class Z2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new wi(0)}static Mn(){return new wi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ps(r.mutation,i,kt.empty(),_e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=ir();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ji();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=un();const o=fs(),a=fs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof kr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ps(c.mutation,u,c.mutation.getFieldMask(),_e.now())):o.set(u.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new tA(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fs();let i=new ue((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||kt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=c1();c.forEach(d=>{if(!s.has(d)){const g=y1(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):s1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(ir());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:u1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Ji();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ji();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new xi(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ve.newInvalidDocument(u)))});let o=Ji();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ps(u.mutation,l,kt.empty(),_e.now()),tu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return I.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:jt(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:X2(r.bundledQuery),readTime:jt(r.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.overlays=new ue(L.comparator),this.ls=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ir();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=ir(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ir(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ir(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new N2(n,r));let s=this.ls.get(n);s===void 0&&(s=H(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.fs=new Be(Ie.ds),this.ws=new Be(Ie._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Ie(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new L(new ne([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new L(new ne([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=H();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return L.comparator(e.key,n.key)||Q(e.As,n.As)}static _s(e,n){return Q(e.As,n.As)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Be(Ie.ds)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new C2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(Q);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),I.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new L(s),0);let a=new Be(Q);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),I.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return I.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Ie(n,0),i=this.Rs.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.Ds=e,this.docs=new ue(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ve.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=un();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||qN(WN(c),r)<=0||(i.has(c.key)||tu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Cs(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aA(this)}getSize(e){return I.resolve(this.size)}}class aA extends eA{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.persistence=e,this.xs=new Di(n=>gf(n),yf),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Tf,this.targetCount=0,this.Ms=wi.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),I.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new wi(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Fn(n),I.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n){this.$s={},this.overlays={},this.Os=new df(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new lA(this),this.indexManager=new J2,this.remoteDocumentCache=function(r){return new oA(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new Y2(n),this.qs=new rA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new sA(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new cA(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return I.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class cA extends GN{constructor(e){super(),this.currentSequenceNumber=e}}class kf{constructor(e){this.persistence=e,this.Qs=new Tf,this.js=null}static zs(e){return new kf(e)}get Ws(){if(this.js)return this.js;throw $()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),I.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ws,r=>{const i=L.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,U.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return I.or([()=>I.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Cf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(ng(n))return I.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hl(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,hl(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return ng(n)||i.isEqual(U.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(qm()<=G.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kh(n)),this.Wi(e,o,n,HN(i,-1)))})}ji(e,n){let r=new Be(a1(e));return n.forEach((i,s)=>{tu(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return qm()<=G.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",kh(n)),this.Ui.getDocumentsMatchingQuery(e,n,Vn.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ue(Q),this.Yi=new Di(s=>gf(s),yf),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nA(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function fA(t,e,n,r){return new dA(t,e,n,r)}async function R1(t,e){const n=V(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function pA(t,e){const n=V(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=I.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);ie(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function x1(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function mA(t,e){const n=V(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(qe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,_){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,g,c)&&a.push(n.Bs.updateTargetData(s,g))});let l=un(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(gA(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(U.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function gA(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=un();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function yA(t,e){const n=V(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vA(t,e){const n=V(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new In(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function xh(t,e,n){const r=V(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!So(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function fg(t,e,n){const r=V(t);let i=U.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=V(a),h=c.Yi.get(u);return h!==void 0?I.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:U.min(),n?s:H())).next(a=>(wA(r,c2(e),a),{documents:a,ir:s})))}function wA(t,e,n){let r=t.Xi.get(e)||U.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class pg{constructor(){this.activeTargetIds=g2()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EA{constructor(){this.Hr=new pg,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new pg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra=null;function rc(){return ra===null?ra=268435456+Math.round(2147483648*Math.random()):ra++,"0x"+ra.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class TA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=rc(),a=this.To(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(P("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw mi("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ai,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=SA[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=rc();return new Promise((o,a)=>{const l=new ON;l.setWithCredentials(!0),l.listenOnce(xN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case tc.NO_ERROR:const c=l.getResponseJson();P(Me,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case tc.TIMEOUT:P(Me,`RPC '${e}' ${s} timed out`),a(new A(E.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const h=l.getStatus();if(P(Me,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const y=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(_)>=0?_:E.UNKNOWN}(g.status);a(new A(y,g.message))}else a(new A(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new A(E.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{P(Me,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(Me,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=rc(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=AN(),a=RN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new PN({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");P(Me,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,g=!1;const y=new IA({ro:_=>{g?P(Me,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(P(Me,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),P(Me,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},oo:()=>h.close()}),v=(_,p,f)=>{_.listen(p,m=>{try{f(m)}catch(w){setTimeout(()=>{throw w},0)}})};return v(h,Zo.EventType.OPEN,()=>{g||P(Me,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Zo.EventType.CLOSE,()=>{g||(g=!0,P(Me,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,Zo.EventType.ERROR,_=>{g||(g=!0,mi(Me,`RPC '${e}' stream ${i} transport errored:`,_),y.wo(new A(E.UNAVAILABLE,"The operation could not be completed")))}),v(h,Zo.EventType.MESSAGE,_=>{var p;if(!g){const f=_.data[0];ie(!!f);const m=f,w=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(w){P(Me,`RPC '${e}' stream ${i} received error:`,w);const T=w.status;let R=function(O){const J=pe[O];if(J!==void 0)return E1(J)}(T),D=w.message;R===void 0&&(R=E.INTERNAL,D="Unknown error status: "+T+" with message "+w.message),g=!0,y.wo(new A(R,D)),h.close()}else P(Me,`RPC '${e}' stream ${i} received:`,f),y._o(f)}}),v(a,DN.STAT_EVENT,_=>{_.stat===Hm.PROXY?P(Me,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Hm.NOPROXY&&P(Me,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function ic(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){return new M2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new D1(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new A(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kA extends P1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=V2(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?U.min():s.readTime?jt(s.readTime):U.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Rh(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Ih(a)?{documents:b2(i,a)}:{query:B2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=I1(i,s.resumeToken);const l=Ch(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(U.min())>0){o.readTime=fl(i,s.snapshotVersion.toTimestamp());const l=Ch(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=W2(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Rh(this.serializer),n.removeTarget=e,this.Wo(n)}}class CA extends P1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=j2(e.writeResults,e.commitTime),r=jt(e.commitTime);return this.listener.cu(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Rh(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>z2(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(E.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(E.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class AA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(an(n),this.mu=!1):P("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Cr(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=V(a);l.vu.add(4),await ko(l),l.bu.set("Unknown"),l.vu.delete(4),await ou(l)}(this))})}),this.bu=new AA(r,i)}}async function ou(t){if(Cr(t))for(const e of t.Ru)await e(!0)}async function ko(t){for(const e of t.Ru)await e(!1)}function O1(t,e){const n=V(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Rf(n)?Af(n):Pi(n).Ko()&&Nf(n,e))}function L1(t,e){const n=V(t),r=Pi(n);n.Au.delete(e),r.Ko()&&$1(n,e),n.Au.size===0&&(r.Ko()?r.jo():Cr(n)&&n.bu.set("Unknown"))}function Nf(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Pi(t).su(e)}function $1(t,e){t.Vu.qt(e),Pi(t).iu(e)}function Af(t){t.Vu=new P2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Pi(t).start(),t.bu.gu()}function Rf(t){return Cr(t)&&!Pi(t).Uo()&&t.Au.size>0}function Cr(t){return V(t).vu.size===0}function M1(t){t.Vu=void 0}async function xA(t){t.Au.forEach((e,n)=>{Nf(t,e)})}async function DA(t,e){M1(t),Rf(t)?(t.bu.Iu(e),Af(t)):t.bu.set("Unknown")}async function PA(t,e,n){if(t.bu.set("Online"),e instanceof S1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pl(t,r)}else if(e instanceof Sa?t.Vu.Ht(e):e instanceof _1?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(U.min()))try{const r=await x1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(qe.EMPTY_BYTE_STRING,u.snapshotVersion)),$1(i,a);const c=new In(u.target,a,l,u.sequenceNumber);Nf(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await pl(t,r)}}async function pl(t,e,n){if(!So(e))throw e;t.vu.add(1),await ko(t),t.bu.set("Offline"),n||(n=()=>x1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await ou(t)})}function U1(t,e){return e().catch(n=>pl(t,n,e))}async function au(t){const e=V(t),n=jn(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;OA(e);)try{const i=await yA(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,LA(e,i)}catch(i){await pl(e,i)}F1(e)&&V1(e)}function OA(t){return Cr(t)&&t.Eu.length<10}function LA(t,e){t.Eu.push(e);const n=jn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function F1(t){return Cr(t)&&!jn(t).Uo()&&t.Eu.length>0}function V1(t){jn(t).start()}async function $A(t){jn(t).hu()}async function MA(t){const e=jn(t);for(const n of t.Eu)e.uu(n.mutations)}async function UA(t,e,n){const r=t.Eu.shift(),i=Ef.from(r,e,n);await U1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await au(t)}async function FA(t,e){e&&jn(t).ou&&await async function(n,r){if(i=r.code,R2(i)&&i!==E.ABORTED){const s=n.Eu.shift();jn(n).Qo(),await U1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await au(n)}var i}(t,e),F1(t)&&V1(t)}async function gg(t,e){const n=V(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Cr(n);n.vu.add(3),await ko(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await ou(n)}async function VA(t,e){const n=V(t);e?(n.vu.delete(2),await ou(n)):e||(n.vu.add(2),await ko(n),n.bu.set("Unknown"))}function Pi(t){return t.Su||(t.Su=function(e,n,r){const i=V(e);return i.fu(),new kA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:xA.bind(null,t),ao:DA.bind(null,t),nu:PA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Rf(t)?Af(t):t.bu.set("Unknown")):(await t.Su.stop(),M1(t))})),t.Su}function jn(t){return t.Du||(t.Du=function(e,n,r){const i=V(e);return i.fu(),new CA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:$A.bind(null,t),ao:FA.bind(null,t),au:MA.bind(null,t),cu:UA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await au(t)):(await t.Du.stop(),t.Eu.length>0&&(P("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new xf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Df(t,e){if(an("AsyncQueue",`${e}: ${t}`),So(t))return new A(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Ji(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.Cu=new ue(L.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):$():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ei{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ei(e,n,ii.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.Nu=void 0,this.listeners=[]}}class jA{constructor(){this.queries=new Di(e=>o1(e),eu),this.onlineState="Unknown",this.ku=new Set}}async function bA(t,e){const n=V(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new zA),i)try{s.Nu=await n.onListen(r)}catch(o){const a=Df(o,`Initialization of query '${kh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Pf(n)}async function BA(t,e){const n=V(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function HA(t,e){const n=V(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Pf(n)}function WA(t,e,n){const r=V(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Pf(t){t.ku.forEach(e=>{e.next()})}class qA{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.key=e}}class j1{constructor(e){this.key=e}}class KA{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=H(),this.mutatedKeys=H(),this.tc=a1(e),this.ec=new ii(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new yg,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=tu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),_=!0):this.rc(d,g)||(r.track({type:2,doc:g}),_=!0,(l&&this.tc(g,l)>0||u&&this.tc(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),_=!0):d&&!g&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return g(h)-g(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Ei(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new yg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=H(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new j1(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new z1(r))}),n}hc(e){this.Yu=e.ir,this.Zu=H();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Ei.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class GA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class QA{constructor(e){this.key=e,this.fc=!1}}class YA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Di(a=>o1(a),eu),this._c=new Map,this.mc=new Set,this.gc=new ue(L.comparator),this.yc=new Map,this.Ic=new Tf,this.Tc={},this.Ec=new Map,this.Ac=wi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function XA(t,e){const n=aR(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await vA(n.localStore,ln(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await JA(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&O1(n.remoteStore,o)}return i}async function JA(t,e,n,r,i){t.Rc=(h,d,g)=>async function(y,v,_,p){let f=v.view.sc(_);f.zi&&(f=await fg(y.localStore,v.query,!1).then(({documents:T})=>v.view.sc(T,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return wg(y,v.targetId,w.cc),w.snapshot}(t,h,d,g);const s=await fg(t.localStore,e,!0),o=new KA(e,s.ir),a=o.sc(s.documents),l=To.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);wg(t,n,u.cc);const c=new GA(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function ZA(t,e){const n=V(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!eu(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),L1(n.remoteStore,r.targetId),Dh(n,r.targetId)}).catch(_o)):(Dh(n,r.targetId),await xh(n.localStore,r.targetId,!0))}async function eR(t,e,n){const r=lR(t);try{const i=await function(s,o){const a=V(s),l=_e.now(),u=o.reduce((d,g)=>d.add(g.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=un(),y=H();return a.Zi.getEntries(d,u).next(v=>{g=v,g.forEach((_,p)=>{p.isValidDocument()||(y=y.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const _=[];for(const p of o){const f=T2(p,c.get(p.key).overlayedDocument);f!=null&&_.push(new kr(p.key,f,Jw(f.value.mapValue),Zt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:u1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new ue(Q)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Co(r,i.changes),await au(r.remoteStore)}catch(i){const s=Df(i,"Failed to persist write");n.reject(s)}}async function b1(t,e){const n=V(t);try{const r=await mA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ie(o.fc):i.removedDocuments.size>0&&(ie(o.fc),o.fc=!1))}),await Co(n,r,e)}catch(r){await _o(r)}}function vg(t,e,n){const r=V(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=V(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Pf(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tR(t,e,n){const r=V(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new ue(L.comparator);o=o.insert(s,Ve.newNoDocument(s,U.min()));const a=H().add(s),l=new iu(U.min(),new Map,new ue(Q),o,a);await b1(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Of(r)}else await xh(r.localStore,e,!1).then(()=>Dh(r,e,n)).catch(_o)}async function nR(t,e){const n=V(t),r=e.batch.batchId;try{const i=await pA(n.localStore,e);H1(n,r,null),B1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Co(n,i)}catch(i){await _o(i)}}async function rR(t,e,n){const r=V(t);try{const i=await function(s,o){const a=V(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ie(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);H1(r,e,n),B1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Co(r,i)}catch(i){await _o(i)}}function B1(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function H1(t,e,n){const r=V(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Dh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||W1(t,r)})}function W1(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(L1(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Of(t))}function wg(t,e,n){for(const r of n)r instanceof z1?(t.Ic.addReference(r.key,e),iR(t,r)):r instanceof j1?(P("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||W1(t,r.key)):$()}function iR(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.mc.add(r),Of(t))}function Of(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new L(ne.fromString(e)),r=t.Ac.next();t.yc.set(r,new QA(n)),t.gc=t.gc.insert(n,r),O1(t.remoteStore,new In(ln(vf(n.path)),r,"TargetPurposeLimboResolution",df.ct))}}async function Co(t,e,n){const r=V(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Cf.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=V(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,h=>I.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>I.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!So(c))throw c;P("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(h,y)}}}(r.localStore,s))}async function sR(t,e){const n=V(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await R1(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new A(E.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Co(n,r.er)}}function oR(t,e){const n=V(t),r=n.yc.get(e);if(r&&r.fc)return H().add(r.key);{let i=H();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function aR(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=b1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tR.bind(null,e),e.dc.nu=HA.bind(null,e.eventManager),e.dc.Pc=WA.bind(null,e.eventManager),e}function lR(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rR.bind(null,e),e}class Eg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=su(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return fA(this.persistence,new hA,e.initialUser,this.serializer)}createPersistence(e){return new uA(kf.zs,this.serializer)}createSharedClientState(e){return new EA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sR.bind(null,this.syncEngine),await VA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jA}createDatastore(e){const n=su(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new TA(i));var i;return function(s,o,a,l){return new NA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>vg(this.syncEngine,a,0),o=mg.D()?new mg:new _A,new RA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new YA(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=V(e);P("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await ko(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ue.UNAUTHENTICATED,this.clientId=Qw.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Df(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sc(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await R1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _g(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fR(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>gg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>gg(e.remoteStore,s)),t._onlineComponents=e}function dR(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function fR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await sc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dR(n))throw n;mi("Error using user provided cache. Falling back to memory cache: "+n),await sc(t,new Eg)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await sc(t,new Eg);return t._offlineComponents}async function q1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await _g(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await _g(t,new uR))),t._onlineComponents}function pR(t){return q1(t).then(e=>e.syncEngine)}async function Sg(t){const e=await q1(t),n=e.eventManager;return n.onListen=XA.bind(null,e.syncEngine),n.onUnlisten=ZA.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t,e,n){if(!n)throw new A(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mR(t,e,n,r){if(e===!0&&r===!0)throw new A(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tg(t){if(!L.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kg(t){if(L.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function ms(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lu(t);throw new A(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function gR(t,e){if(e<=0)throw new A(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new A(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=K1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class uu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $N;switch(n.type){case"firstParty":return new VN(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ig.get(e);n&&(P("ComponentProvider","Removing Datastore"),Ig.delete(e),n.terminate())}(this),Promise.resolve()}}function yR(t,e,n,r={}){var i;const s=(t=ms(t,uu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ue.MOCK_USER;else{a=aI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new A(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ue(u)}t._authCredentials=new MN(new Gw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class Kn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kn(this.firestore,e,this._query)}}class Mn extends Kn{constructor(e,n,r){super(e,n,vf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new L(e))}withConverter(e){return new Mn(this.firestore,e,this._path)}}function Q1(t,e,...n){if(t=Ye(t),G1("collection","path",e),t instanceof uu){const r=ne.fromString(e,...n);return kg(r),new Mn(t,null,r)}{if(!(t instanceof at||t instanceof Mn))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return kg(r),new Mn(t.firestore,null,r)}}function vR(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Qw.A()),G1("doc","path",e),t instanceof uu){const r=ne.fromString(e,...n);return Tg(r),new at(t,null,new L(r))}{if(!(t instanceof at||t instanceof Mn))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return Tg(r),new at(t.firestore,t instanceof Mn?t.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new D1(this,"async_queue_retry"),this.Xc=()=>{const n=ic();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=ic();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ur;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!So(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw an("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=xf.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&$()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Ng(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ml extends uu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new wR,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||X1(this),this._firestoreClient.terminate()}}function ER(t,e){const n=typeof t=="object"?t:a0(),r=typeof t=="string"?t:e||"(default)",i=Od(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sI("firestore");s&&yR(i,...s)}return i}function Y1(t){return t._firestoreClient||X1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function X1(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new XN(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,K1(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new hR(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(qe.fromBase64String(e))}catch(n){throw new A(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=/^__.*__$/;class SR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Io(e,this.data,n,this.fieldTransforms)}}function J1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Uf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return gl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(J1(this.ca)&&_R.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class IR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||su(e)}ya(e,n,r,i=!1){return new Uf({ca:e,methodName:n,ga:r,path:ze.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Z1(t){const e=t._freezeSettings(),n=su(t._databaseId);return new IR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TR(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);nE("Data must be an object, but it was:",o,r);const a=eE(r,o);let l,u;if(s.merge)l=new kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=CR(e,h,n);if(!o.contains(d))throw new A(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);AR(c,d)||c.push(d)}l=new kt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new SR(new mt(a),l,u)}class Ff extends $f{_toFieldTransform(e){return new E2(e.path,new Gs)}isEqual(e){return e instanceof Ff}}function kR(t,e,n,r=!1){return Vf(n,t.ya(r?4:3,e))}function Vf(t,e){if(tE(t=Ye(t)))return nE("Unsupported field value:",e,t),eE(t,e);if(t instanceof $f)return function(n,r){if(!J1(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Vf(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return y2(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=_e.fromDate(n);return{timestampValue:fl(r.serializer,i)}}if(n instanceof _e){const i=new _e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fl(r.serializer,i)}}if(n instanceof Mf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _i)return{bytesValue:I1(r.serializer,n._byteString)};if(n instanceof at){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:If(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${lu(n)}`)}(t,e)}function eE(t,e){const n={};return Yw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ri(t,(r,i)=>{const s=Vf(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof Mf||t instanceof _i||t instanceof at||t instanceof $f)}function nE(t,e,n){if(!tE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=lu(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function CR(t,e,n){if((e=Ye(e))instanceof Lf)return e._internalPath;if(typeof e=="string")return rE(t,e);throw gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const NR=new RegExp("[~\\*/\\[\\]]");function rE(t,e,n){if(e.search(NR)>=0)throw gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lf(...e.split("."))._internalPath}catch{throw gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(E.INVALID_ARGUMENT,a+t+l)}function AR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RR extends iE{data(){return super.data()}}function zf(t,e){return typeof e=="string"?rE(t,e):e instanceof Lf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jf{}class bf extends jf{}function DR(t,e,...n){let r=[];e instanceof jf&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Hf).length,o=i.filter(a=>a instanceof Bf).length;if(s>1||s>0&&o>0)throw new A(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bf extends bf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bf(e,n,r)}_apply(e){const n=this._parse(e);return sE(e._query,n),new Kn(e.firestore,e.converter,Th(e._query,n))}_parse(e){const n=Z1(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Rg(c,u);const d=[];for(const g of c)d.push(Ag(a,i,g));h={arrayValue:{values:d}}}else h=Ag(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Rg(c,u),h=kR(o,s,c,u==="in"||u==="not-in");return ye.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Hf extends jf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)sE(s,a),s=Th(s,a)}(e._query,n),new Kn(e.firestore,e.converter,Th(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wf extends bf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Wf(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ni(i,s);return function(a,l){if(wf(a)===null){const u=Zl(a);u!==null&&oE(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Kn(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new xi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function PR(t,e="asc"){const n=e,r=zf("orderBy",t);return Wf._create(r,n)}class qf extends bf{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new qf(e,n,r)}_apply(e){return new Kn(e.firestore,e.converter,hl(e._query,this._limit,this._limitType))}}function OR(t){return gR("limit",t),qf._create("limit",t,"F")}function Ag(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new A(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!s1(e)&&n.indexOf("/")!==-1)throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ne.fromString(n));if(!L.isDocumentKey(r))throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ym(t,new L(r))}if(n instanceof at)return Ym(t,n._key);throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lu(n)}.`)}function Rg(t,e){if(!Array.isArray(t)||t.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sE(t,e){if(e.isInequality()){const r=Zl(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=wf(t);s!==null&&oE(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function oE(t,e,n){if(!n.isEqual(e))throw new A(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class LR{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ri(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Mf(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ws(e));default:return null}}convertTimestamp(e){const n=zn(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);ie(A1(r));const i=new qs(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||an(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aE extends iE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ia extends aE{data(e={}){return super.data(e)}}class MR{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new es(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ia(this._firestore,this._userDataWriter,r.key,r,new es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ia(r._firestore,r._userDataWriter,o.doc.key,o.doc,new es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ia(r._firestore,r._userDataWriter,o.doc.key,o.doc,new es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:UR(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function UR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class lE extends LR{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function FR(t,e){const n=ms(t.firestore,ml),r=vR(t),i=$R(t.converter,e);return zR(n,[TR(Z1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function VR(t,...e){var n,r,i;t=Ye(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ng(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ng(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof at)u=ms(t.firestore,ml),c=vf(t._key.path),l={next:h=>{e[o]&&e[o](jR(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ms(t,Kn);u=ms(h.firestore,ml),c=h._query;const d=new lE(u);l={next:g=>{e[o]&&e[o](new MR(u,d,h,g))},error:e[o+1],complete:e[o+2]},xR(t._query)}return function(h,d,g,y){const v=new cR(y),_=new qA(d,v,g);return h.asyncQueue.enqueueAndForget(async()=>bA(await Sg(h),_)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>BA(await Sg(h),_))}}(Y1(u),c,a,l)}function zR(t,e){return function(n,r){const i=new ur;return n.asyncQueue.enqueueAndForget(async()=>eR(await pR(n),r,i)),i.promise}(Y1(t),e)}function jR(t,e,n){const r=n.docs.get(e._key),i=new lE(t);return new aE(t,i,e._key,r,new es(n.hasPendingWrites,n.fromCache),e.converter)}function bR(){return new Ff("serverTimestamp")}(function(t,e=!0){(function(n){Ai=n})(ki),di(new gr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ml(new UN(n.getProvider("auth-internal")),new jN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),$n(Wm,"3.13.0",t),$n(Wm,"3.13.0","esm2017")})();var BR="firebase",HR="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(BR,HR,"app");const WR={apiKey:"AIzaSyDHLehVbG35rcK6_VyTbsq01ldReuNl5mw",authDomain:"instantchat-ac7e6.firebaseapp.com",projectId:"instantchat-ac7e6",storageBucket:"instantchat-ac7e6.appspot.com",messagingSenderId:"64285868723",appId:"1:64285868723:web:e184c815b95339a59be6c6"},uE=o0(WR),oc=NC(uE),cE=ER(uE),hE=C.createContext(),qR=({children:t})=>{const[e,n]=C.useState(null),[r,i]=C.useState(!0),a={currentUser:e,setCurrentUser:n,signinWithGoogle:()=>{const l=new qt;jk(oc,l)},logout:()=>mk(oc)};return C.useEffect(()=>pk(oc,u=>{n(u),i(!1)}),[]),j.jsx(hE.Provider,{value:a,children:!r&&t})},No=()=>C.useContext(hE);/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xs(){return Xs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xs.apply(this,arguments)}var Tn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Tn||(Tn={}));const xg="popstate";function KR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ph("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:dE(i)}return QR(e,n,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Kf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GR(){return Math.random().toString(36).substr(2,8)}function Dg(t,e){return{usr:t.state,key:t.key,idx:e}}function Ph(t,e,n,r){return n===void 0&&(n=null),Xs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Oi(e):e,{state:n,key:e&&e.key||r||GR()})}function dE(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Oi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function QR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Tn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xs({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Tn.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:p})}function d(_,p){a=Tn.Push;let f=Ph(v.location,_,p);n&&n(f,_),u=c()+1;let m=Dg(f,u),w=v.createHref(f);try{o.pushState(m,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(_,p){a=Tn.Replace;let f=Ph(v.location,_,p);n&&n(f,_),u=c();let m=Dg(f,u),w=v.createHref(f);o.replaceState(m,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof _=="string"?_:dE(_);return ve(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(xg,h),l=_,()=>{i.removeEventListener(xg,h),l=null}},createHref(_){return e(i,_)},createURL:y,encodeLocation(_){let p=y(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(_){return o.go(_)}};return v}var Pg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Pg||(Pg={}));function YR(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Oi(e):e,i=mE(r.pathname||"/",n);if(i==null)return null;let s=fE(t);XR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=ox(s[a],ux(i));return o}function fE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=cr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),fE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ix(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of pE(s.path))i(s,o,l)}),e}function pE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=pE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function XR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JR=/^:\w+$/,ZR=3,ex=2,tx=1,nx=10,rx=-2,Og=t=>t==="*";function ix(t,e){let n=t.split("/"),r=n.length;return n.some(Og)&&(r+=rx),e&&(r+=ex),n.filter(i=>!Og(i)).reduce((i,s)=>i+(JR.test(s)?ZR:s===""?tx:nx),r)}function sx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ox(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=ax({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:cr([i,c.pathname]),pathnameBase:fx(cr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=cr([i,c.pathnameBase]))}return s}function ax(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=cx(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function lx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Kf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ux(t){try{return decodeURI(t)}catch(e){return Kf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function cx(t,e){try{return decodeURIComponent(t)}catch(n){return Kf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function mE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function hx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Oi(t):t;return{pathname:n?n.startsWith("/")?n:dx(n,e):e,search:px(r),hash:mx(i)}}function dx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ac(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function yE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Oi(t):(i=Xs({},t),ve(!i.pathname||!i.pathname.includes("?"),ac("?","pathname","search",i)),ve(!i.pathname||!i.pathname.includes("#"),ac("#","pathname","hash",i)),ve(!i.search||!i.search.includes("#"),ac("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=hx(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),fx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),px=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vE=["post","put","patch","delete"];new Set(vE);const yx=["get",...vE];new Set(yx);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yl(){return yl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yl.apply(this,arguments)}const Gf=C.createContext(null),vx=C.createContext(null),cu=C.createContext(null),hu=C.createContext(null),Nr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),wE=C.createContext(null);function Ao(){return C.useContext(hu)!=null}function Qf(){return Ao()||ve(!1),C.useContext(hu).location}function EE(t){C.useContext(cu).static||C.useLayoutEffect(t)}function _E(){let{isDataRoute:t}=C.useContext(Nr);return t?Dx():wx()}function wx(){Ao()||ve(!1);let t=C.useContext(Gf),{basename:e,navigator:n}=C.useContext(cu),{matches:r}=C.useContext(Nr),{pathname:i}=Qf(),s=JSON.stringify(gE(r).map(l=>l.pathnameBase)),o=C.useRef(!1);return EE(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=yE(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:cr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function Ex(t,e){return _x(t,e)}function _x(t,e,n){Ao()||ve(!1);let{navigator:r}=C.useContext(cu),{matches:i}=C.useContext(Nr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Qf(),u;if(e){var c;let v=typeof e=="string"?Oi(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||ve(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=YR(t,{pathname:d}),y=Cx(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:cr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:cr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?C.createElement(hu.Provider,{value:{location:yl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Tn.Pop}},y):y}function Sx(){let t=xx(),e=gx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}const Ix=C.createElement(Sx,null);class Tx extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(Nr.Provider,{value:this.props.routeContext},C.createElement(wE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kx(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Gf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Nr.Provider,{value:e},r)}function Cx(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ve(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Ix);let d=e.concat(s.slice(0,u+1)),g=()=>{let y;return c?y=h:l.route.Component?y=C.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,C.createElement(kx,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?C.createElement(Tx,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var Oh;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Oh||(Oh={}));var Js;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Js||(Js={}));function Nx(t){let e=C.useContext(Gf);return e||ve(!1),e}function Ax(t){let e=C.useContext(vx);return e||ve(!1),e}function Rx(t){let e=C.useContext(Nr);return e||ve(!1),e}function SE(t){let e=Rx(),n=e.matches[e.matches.length-1];return n.route.id||ve(!1),n.route.id}function xx(){var t;let e=C.useContext(wE),n=Ax(Js.UseRouteError),r=SE(Js.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Dx(){let{router:t}=Nx(Oh.UseNavigateStable),e=SE(Js.UseNavigateStable),n=C.useRef(!1);return EE(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,yl({fromRouteId:e},s)))},[t,e])}function Px(t){let{to:e,replace:n,state:r,relative:i}=t;Ao()||ve(!1);let{matches:s}=C.useContext(Nr),{pathname:o}=Qf(),a=_E(),l=yE(e,gE(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return C.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Lh(t){ve(!1)}function Ox(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Tn.Pop,navigator:s,static:o=!1}=t;Ao()&&ve(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Oi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,y=C.useMemo(()=>{let v=mE(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:g},navigationType:i}},[a,u,c,h,d,g,i]);return y==null?null:C.createElement(cu.Provider,{value:l},C.createElement(hu.Provider,{children:n,value:y}))}function Lx(t){let{children:e,location:n}=t;return Ex($h(e),n)}var Lg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Lg||(Lg={}));new Promise(()=>{});function $h(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,$h(r.props.children,s));return}r.type!==Lh&&ve(!1),!r.props.index||!r.props.children||ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$h(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const $x="startTransition",$g=jE[$x];function Mx(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=KR({window:i,v5Compat:!0}));let o=s.current,[a,l]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=C.useCallback(h=>{u&&$g?$g(()=>l(h)):l(h)},[l,u]);return C.useLayoutEffect(()=>o.listen(c),[o,c]),C.createElement(Ox,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var Mg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Mg||(Mg={}));var Ug;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ug||(Ug={}));const Ux=()=>{const t=_E(),{currentUser:e,signinWithGoogle:n}=No(),r=async()=>{try{await n()}catch(i){console.log(i)}};return C.useEffect(()=>{e&&t("/chat")},[e]),j.jsx("div",{className:"hero min-h-screen bg-base-200",children:j.jsx("div",{className:"hero-content text-center",children:j.jsxs("div",{className:"max-w-md",children:[j.jsx("h1",{className:"text-5xl font-bold",children:"Hello there👋🏻"}),j.jsx("p",{className:"py-6",children:"Join the conversation, meet new people, and make connections in one shared room."}),j.jsx("button",{onClick:r,className:"btn",children:"Login With Google"})]})})})},Fx=()=>{const{currentUser:t,logout:e}=No(),n=async()=>{try{await e()}catch(r){console.log(r)}};return j.jsx("div",{className:"navbar bg-primary text-primary-content",children:j.jsxs("div",{className:"containerWrap flex justify-between",children:[j.jsx("a",{className:"btn btn-ghost normal-case text-xl",children:"instantChat"}),t?j.jsx("button",{onClick:n,children:"Logout"}):""]})})},Vx=({message:t})=>{const{currentUser:e}=No();return console.log(t),j.jsx("div",{children:j.jsxs("div",{className:`chat ${t.uid===e.uid?"chat-end":"chat-start"}`,children:[j.jsx("div",{className:"chat-image avatar",children:j.jsx("div",{className:"w-10 rounded-full",children:j.jsx("img",{src:t.avatar})})}),j.jsx("div",{className:"chat-header",children:t.name}),j.jsx("div",{className:"chat-bubble",children:t.text})]})})},zx=()=>{const t=C.useRef(),[e,n]=C.useState([]),r=()=>{t.current.scrollIntoView({behavior:"smooth"})};return C.useEffect(r,[e]),C.useEffect(()=>{const i=DR(Q1(cE,"messages"),PR("createdAt"),OR(50)),s=VR(i,o=>{const a=[];o.forEach(l=>{a.push({...l.data(),id:l.id})}),n(a)});return()=>s},[]),j.jsxs("div",{className:"pb-44 pt-20 containerWrap",children:[e.map(i=>j.jsx(Vx,{message:i},i.id)),j.jsx("div",{ref:t})]})},jx=()=>{const[t,e]=C.useState(""),{currentUser:n}=No(),r=async i=>{if(i.preventDefault(),t.trim()===""){alert("Enter valid message!");return}try{const{uid:s,displayName:o,photoURL:a}=n;await FR(Q1(cE,"messages"),{text:t,name:o,avatar:a,createdAt:bR(),uid:s})}catch(s){console.log(s)}e("")};return j.jsx("div",{className:"bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg",children:j.jsxs("form",{onSubmit:r,className:"containerWrap flex px-2",children:[j.jsx("input",{value:t,onChange:i=>e(i.target.value),className:"input w-full focus:outline-none bg-gray-100 rounded-r-none",type:"text"}),j.jsx("button",{type:"submit",className:"w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm",children:"Send"})]})})},bx=()=>j.jsxs("div",{children:[j.jsx(zx,{}),j.jsx(jx,{})]}),Bx=({children:t})=>{const{currentUser:e}=No();return e?t:j.jsx(Px,{to:"/",replace:!0})};function Hx(){return j.jsxs(qR,{children:[j.jsx(Fx,{}),j.jsxs(Lx,{children:[j.jsx(Lh,{path:"/instaChat",element:j.jsx(Ux,{})}),j.jsx(Lh,{path:"/chat",element:j.jsx(Bx,{children:j.jsx(bx,{})})})]})]})}lc.createRoot(document.getElementById("root")).render(j.jsx(Kg.StrictMode,{children:j.jsx(Mx,{children:j.jsx(Hx,{})})}));
