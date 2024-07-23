import{a as O,d as U,X as M,w as C,o as $,g as D,e as q,p,l as a,z as j,Y as F,Z as N}from"./index.6aa2f477.js";import{v as _,f as W,g as I,i as K}from"./QBtn.49c90918.js";const re={dark:{type:Boolean,default:null}};function ie(e,o){return O(()=>e.dark===null?o.dark.isActive:e.dark)}function ne(e,o,t){let l;function i(){l!==void 0&&(M.remove(l),l=void 0)}return U(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>t.value===!0,handler:o},M.add(l)}}}const se={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ue=["beforeShow","show","beforeHide","hide"];function de({showing:e,canShow:o,hideOnRouteChange:t,handleShow:l,handleHide:i,processOnMount:m}){const n=D(),{props:s,emit:u,proxy:L}=n;let d;function B(r){e.value===!0?g(r):S(r)}function S(r){if(s.disable===!0||r!==void 0&&r.qAnchorHandled===!0||o!==void 0&&o(r)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!0),d=r,q(()=>{d===r&&(d=void 0)})),(s.modelValue===null||f===!1)&&V(r)}function V(r){e.value!==!0&&(e.value=!0,u("beforeShow",r),l!==void 0?l(r):u("show",r))}function g(r){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!1),d=r,q(()=>{d===r&&(d=void 0)})),(s.modelValue===null||f===!1)&&H(r)}function H(r){e.value!==!1&&(e.value=!1,u("beforeHide",r),i!==void 0?i(r):u("hide",r))}function P(r){s.disable===!0&&r===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):r===!0!==e.value&&(r===!0?V:H)(d)}C(()=>s.modelValue,P),t!==void 0&&_(n)===!0&&C(()=>L.$route.fullPath,()=>{t.value===!0&&e.value===!0&&g()}),m===!0&&$(()=>{P(s.modelValue)});const x={show:S,hide:g,toggle:B};return Object.assign(L,x),x}const ae=[Element,String],R=[null,document,document.body,document.scrollingElement,document.documentElement];function ce(e,o){let t=I(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return R.includes(t)?window:t}function Z(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function G(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function fe(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");W(e,{width:"100%",height:"200px"}),W(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return t===l&&(l=o.clientWidth),o.remove(),h=t-l,h}function J(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let w=0,b,T,v,E=!1,k,A,X,c=null;function Q(e){ee(e)&&j(e)}function ee(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=F(e),t=e.shiftKey&&!e.deltaX,l=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=t||l?e.deltaY:e.deltaX;for(let m=0;m<o.length;m++){const n=o[m];if(J(n,l))return l?i<0&&n.scrollTop===0?!0:i>0&&n.scrollTop+n.clientHeight===n.scrollHeight:i<0&&n.scrollLeft===0?!0:i>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function Y(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){E!==!0&&(E=!0,requestAnimationFrame(()=>{E=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:l}=document.scrollingElement;(v===void 0||o!==window.innerHeight)&&(v=t-o,document.scrollingElement.scrollTop=l),l>v&&(document.scrollingElement.scrollTop-=Math.ceil((l-v)/8))}))}function z(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(o);b=G(window),T=Z(window),k=o.style.left,A=o.style.top,X=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${T}px`,i!=="hidden"&&(i==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,a.passiveCapture),window.visualViewport.addEventListener("scroll",y,a.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Y,a.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",Q,a.notPassive),e==="remove"&&(p.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",y,a.passiveCapture),window.visualViewport.removeEventListener("scroll",y,a.passiveCapture)):window.removeEventListener("scroll",Y,a.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=k,o.style.top=A,window.location.href===X&&window.scrollTo(b,T),v=void 0)}function oe(e){let o="add";if(e===!0){if(w++,c!==null){clearTimeout(c),c=null;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){c!==null&&clearTimeout(c),c=setTimeout(()=>{z(o),c=null},100);return}}z(o)}function pe(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,oe(o))}}}function me(){let e=null;const o=D();function t(){e!==null&&(clearTimeout(e),e=null)}return N(t),U(t),{removeTimeout:t,registerTimeout(l,i){t(),K(o)===!1&&(e=setTimeout(()=>{e=null,l()},i))}}}function we(e,o,t){return t<=o?o:Math.min(t,Math.max(o,e))}function ve(e,o=2,t="0"){if(e==null)return e;const l=""+e;return l.length>=o?l:new Array(o-l.length+1).join(t)+l}export{ie as a,se as b,ue as c,me as d,de as e,ne as f,we as g,pe as h,ce as i,Z as j,G as k,fe as l,ve as p,ae as s,re as u};
