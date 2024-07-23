import{h as H,a as He,b as Ee,c as ut,u as st,d as ct,Q as dt,e as ft}from"./QBtn.49c90918.js";import{c as O,a as d,h as C,r as L,i as Ve,o as U,d as X,n as Ce,e as te,g as R,l as ye,f as Se,j as P,w as k,k as ie,P as vt,m as mt,p as j,q as ht,s as J,t as fe,u as Oe,v as ve,x as pe,y as me,z as Ne,A as bt,B as We,C as gt,D as Z,E as yt,F as pt,G as Ie,_ as je,H as K,I as ae,J as z,K as $,L as wt,M as ne,N as we,O as Qe,Q as qt,R as kt,S as Ct,T as St,U as _t}from"./index.6aa2f477.js";import{u as _e,a as Le,b as Lt,c as Bt,d as xt,e as Tt,f as $t,g as ee,h as zt,s as Et,i as Ot,j as Qt,k as Pt,l as he}from"./format.b21ff09c.js";var Dt=O({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const n=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:n.value},H(i.default))}}),Mt=O({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:n.value,role:"toolbar"},H(i.default))}});function Rt(){const e=L(!Ve.value);return e.value===!1&&U(()=>{e.value=!0}),{isHydrated:e}}const Ke=typeof ResizeObserver!="undefined",Pe=Ke===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var qe=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let n=null,r,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:c,offsetHeight:u}=r;(c!==t.width||u!==t.height)&&(t={width:c,height:u},i("resize",t))}}const{proxy:m}=R();if(m.trigger=a,Ke===!0){let c;const u=o=>{r=m.$el.parentNode,r?(c=new ResizeObserver(a),c.observe(r),s()):o!==!0&&te(()=>{u(!0)})};return U(()=>{u()}),X(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),Ce}else{let o=function(){n!==null&&(clearTimeout(n),n=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",a,ye.passive),u=void 0)},w=function(){o(),r&&r.contentDocument&&(u=r.contentDocument.defaultView,u.addEventListener("resize",a,ye.passive),s())};const{isHydrated:c}=Rt();let u;return U(()=>{te(()=>{r=m.$el,r&&w()})}),X(o),()=>{if(c.value===!0)return C("object",{class:"q--avoid-card-border",style:Pe.style,tabindex:-1,type:"text/html",data:Pe.url,"aria-hidden":"true",onLoad:w})}}}}),At=O({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:n}){const{proxy:{$q:r}}=R(),t=Se(ie,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=L(parseInt(e.heightHint,10)),s=L(!0),m=d(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||r.platform.is.ios&&t.isContainer.value===!0),c=d(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return s.value===!0?a.value:0;const v=a.value-t.scroll.value.position;return v>0?v:0}),u=d(()=>e.modelValue!==!0||m.value===!0&&s.value!==!0),o=d(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),w=d(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=d(()=>{const v=t.rows.value.top,g={};return v[0]==="l"&&t.left.space===!0&&(g[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(g[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),g});function f(v,g){t.update("header",v,g)}function h(v,g){v.value!==g&&(v.value=g)}function B({height:v}){h(a,v),f("size",v)}function _(v){o.value===!0&&h(s,!0),n("focusin",v)}k(()=>e.modelValue,v=>{f("space",v),h(s,!0),t.animate()}),k(c,v=>{f("offset",v)}),k(()=>e.reveal,v=>{v===!1&&h(s,e.modelValue)}),k(s,v=>{t.animate(),n("reveal",v)}),k(t.scroll,v=>{e.reveal===!0&&h(s,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&f("size",a.value),f("space",e.modelValue),f("offset",c.value),X(()=>{t.instances.header===p&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const v=He(i.default,[]);return e.elevated===!0&&v.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(C(qe,{debounce:0,onResize:B})),C("header",{class:w.value,style:q.value,onFocusin:_},v)}}}),ke=O({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:i}){const n=d(()=>parseInt(e.lines,10)),r=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=d(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>C("div",{style:t.value,class:r.value},H(i.default))}}),Ft=O({name:"QList",props:{..._e,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:i}){const n=R(),r=Le(e,n.proxy.$q),t=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},H(i.default))}});const Be={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ht=Object.keys(Be);Be.all=!0;function De(e){const i={};for(const n of Ht)e[n]===!0&&(i[n]=!0);return Object.keys(i).length===0?Be:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}const Vt=["INPUT","TEXTAREA"];function Me(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&Vt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function Nt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),vt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function be(e,i,n){const r=pe(e);let t,a=r.left-i.event.x,s=r.top-i.event.y,m=Math.abs(a),c=Math.abs(s);const u=i.direction;u.horizontal===!0&&u.vertical!==!0?t=a<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",m>c&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.down===!0&&s>0?(t="down",m>c&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.left===!0&&a<0?(t="left",m<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&a>0&&(t="right",m<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let o=!1;if(t===void 0&&n===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,o=!0,t==="left"||t==="right"?(r.left-=a,m=0,a=0):(r.top-=s,c=0,s=0)}return{synthetic:o,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:r,direction:t,isFirst:i.event.isFirst,isFinal:n===!0,duration:Date.now()-i.event.time,distance:{x:m,y:c},offset:{x:a,y:s},delta:{x:r.left-i.event.lastX,y:r.top-i.event.lastY}}}}let Wt=0;var ge=mt({name:"touch-pan",beforeMount(e,{value:i,modifiers:n}){if(n.mouse!==!0&&j.has.touch!==!0)return;function r(a,s){n.mouse===!0&&s===!0?Ne(a):(n.stop===!0&&ve(a),n.prevent===!0&&Oe(a))}const t={uid:"qvtp_"+Wt++,handler:i,modifiers:n,direction:De(n),noop:Ce,mouseStart(a){Me(a,t)&&ht(a)&&(J(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Me(a,t)){const s=a.target;J(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(j.is.firefox===!0&&fe(e,!0),t.lastEvt=a,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Oe(u),a.cancelBubble===!0&&ve(u),Object.assign(u,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:u}}ve(a)}const{left:m,top:c}=pe(a);t.event={x:m,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:c}},move(a){if(t.event===void 0)return;const s=pe(a),m=s.left-t.event.x,c=s.top-t.event.y;if(m===0&&c===0)return;t.lastEvt=a;const u=t.event.mouse===!0,o=()=>{r(a,u);let f;n.preserveCursor!==!0&&n.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Nt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),u===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{B(),h()},50):B()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:f,synthetic:h}=be(a,t,!1);f!==void 0&&(t.handler(f)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&o(),t.event.lastX=f.position.left,t.event.lastY=f.position.top,t.event.lastDir=h===!0?void 0:f.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){o(),t.event.detected=!0,t.move(a);return}const w=Math.abs(m),q=Math.abs(c);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&c<0||t.direction.down===!0&&w<q&&c>0||t.direction.left===!0&&w>q&&m<0||t.direction.right===!0&&w>q&&m>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(me(t,"temp"),j.is.firefox===!0&&fe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(be(a===void 0?t.lastEvt:a,t).payload);const{payload:m}=be(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";J(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}j.has.touch===!0&&J(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const n=e.__qtouchpan;n!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&n.end(),n.handler=i.value),n.direction=De(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),me(i,"main"),me(i,"temp"),j.is.firefox===!0&&fe(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const Re=150;var It=O({name:"QDrawer",inheritAttrs:!1,props:{...Lt,..._e,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Bt,"onLayout","miniState"],setup(e,{slots:i,emit:n,attrs:r}){const t=R(),{proxy:{$q:a}}=t,s=Le(e,a),{preventBodyScroll:m}=zt(),{registerTimeout:c,removeTimeout:u}=xt(),o=Se(ie,P);if(o===P)return console.error("QDrawer needs to be child of QLayout"),P;let w,q=null,f;const h=L(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),B=d(()=>e.mini===!0&&h.value!==!0),_=d(()=>B.value===!0?e.miniWidth:e.width),p=L(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),v=d(()=>e.persistent!==!0&&(h.value===!0||Ue.value===!0));function g(l,y){if(A(),l!==!1&&o.animate(),E(0),h.value===!0){const x=o.instances[Y.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),D(1),o.isContainer.value!==!0&&m(!0)}else D(0),l!==!1&&se(!1);c(()=>{l!==!1&&se(!0),y!==!0&&n("show",l)},Re)}function b(l,y){W(),l!==!1&&o.animate(),D(0),E(V.value*_.value),ce(),y!==!0?c(()=>{n("hide",l)},Re):u()}const{show:S,hide:T}=Tt({showing:p,hideOnRouteChange:v,handleShow:g,handleHide:b}),{addToHistory:A,removeFromHistory:W}=$t(p,T,v),F={belowBreakpoint:h,hide:T},Q=d(()=>e.side==="right"),V=d(()=>(a.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),xe=L(0),N=L(!1),le=L(!1),Te=L(_.value*V.value),Y=d(()=>Q.value===!0?"left":"right"),oe=d(()=>p.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),re=d(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(Q.value?"R":"L")!==-1||a.platform.is.ios===!0&&o.isContainer.value===!0),I=d(()=>e.overlay===!1&&p.value===!0&&h.value===!1),Ue=d(()=>e.overlay===!0&&p.value===!0&&h.value===!1),Xe=d(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&N.value===!1?" hidden":"")),Ye=d(()=>({backgroundColor:`rgba(0,0,0,${xe.value*.4})`})),$e=d(()=>Q.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Ge=d(()=>Q.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Je=d(()=>{const l={};return o.header.space===!0&&$e.value===!1&&(re.value===!0?l.top=`${o.header.offset}px`:o.header.space===!0&&(l.top=`${o.header.size}px`)),o.footer.space===!0&&Ge.value===!1&&(re.value===!0?l.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(l.bottom=`${o.footer.size}px`)),l}),Ze=d(()=>{const l={width:`${_.value}px`,transform:`translateX(${Te.value}px)`};return h.value===!0?l:Object.assign(l,Je.value)}),et=d(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),tt=d(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(re.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+($e.value===!0?" q-drawer--top-padding":""))),at=d(()=>{const l=a.lang.rtl===!0?e.side:Y.value;return[[ge,ot,void 0,{[l]:!0,mouse:!0}]]}),nt=d(()=>{const l=a.lang.rtl===!0?Y.value:e.side;return[[ge,ze,void 0,{[l]:!0,mouse:!0}]]}),it=d(()=>{const l=a.lang.rtl===!0?Y.value:e.side;return[[ge,ze,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ue(){rt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}k(h,l=>{l===!0?(w=p.value,p.value===!0&&T(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(p.value===!0?(E(0),D(0),ce()):S(!1))}),k(()=>e.side,(l,y)=>{o.instances[y]===F&&(o.instances[y]=void 0,o[y].space=!1,o[y].offset=0),o.instances[l]=F,o[l].size=_.value,o[l].space=I.value,o[l].offset=oe.value}),k(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&ue()}),k(()=>e.behavior+e.breakpoint,ue),k(o.isContainer,l=>{p.value===!0&&m(l!==!0),l===!0&&ue()}),k(o.scrollbarWidth,()=>{E(p.value===!0?0:void 0)}),k(oe,l=>{M("offset",l)}),k(I,l=>{n("onLayout",l),M("space",l)}),k(Q,()=>{E()}),k(_,l=>{E(),de(e.miniToOverlay,l)}),k(()=>e.miniToOverlay,l=>{de(l,_.value)}),k(()=>a.lang.rtl,()=>{E()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(lt(),o.animate())}),k(B,l=>{n("miniState",l)});function E(l){l===void 0?te(()=>{l=p.value===!0?0:_.value,E(V.value*l)}):(o.isContainer.value===!0&&Q.value===!0&&(h.value===!0||Math.abs(l)===_.value)&&(l+=V.value*o.scrollbarWidth.value),Te.value=l)}function D(l){xe.value=l}function se(l){const y=l===!0?"remove":o.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function lt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,q=setTimeout(()=>{q=null,le.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ot(l){if(p.value!==!1)return;const y=_.value,x=ee(l.distance.x,0,y);if(l.isFinal===!0){x>=Math.min(75,y)===!0?S():(o.animate(),D(0),E(V.value*y)),N.value=!1;return}E((a.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(y-x,0):Math.min(0,x-y)),D(ee(x/y,0,1)),l.isFirst===!0&&(N.value=!0)}function ze(l){if(p.value!==!0)return;const y=_.value,x=l.direction===e.side,G=(a.lang.rtl===!0?x!==!0:x)?ee(l.distance.x,0,y):0;if(l.isFinal===!0){Math.abs(G)<Math.min(75,y)===!0?(o.animate(),D(1),E(0)):T(),N.value=!1;return}E(V.value*G),D(ee(1-G/y,0,1)),l.isFirst===!0&&(N.value=!0)}function ce(){m(!1),se(!0)}function M(l,y){o.update(e.side,l,y)}function rt(l,y){l.value!==y&&(l.value=y)}function de(l,y){M("size",l===!0?e.miniWidth:y)}return o.instances[e.side]=F,de(e.miniToOverlay,_.value),M("space",I.value),M("offset",oe.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("onLayout",I.value),n("miniState",B.value),w=e.showIfAbove===!0;const l=()=>{(p.value===!0?g:b)(!1,!0)};if(o.totalWidth.value!==0){te(l);return}f=k(o.totalWidth,()=>{f(),f=void 0,p.value===!1&&e.showIfAbove===!0&&h.value===!1?S(!1):l()})}),X(()=>{f!==void 0&&f(),q!==null&&(clearTimeout(q),q=null),p.value===!0&&ce(),o.instances[e.side]===F&&(o.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const l=[];h.value===!0&&(e.noSwipeOpen===!1&&l.push(bt(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),at.value)),l.push(Ee("div",{ref:"backdrop",class:Xe.value,style:Ye.value,"aria-hidden":"true",onClick:T},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>it.value)));const y=B.value===!0&&i.mini!==void 0,x=[C("div",{...r,key:""+y,class:[et.value,r.class]},y===!0?i.mini():H(i.default))];return e.elevated===!0&&p.value===!0&&x.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Ee("aside",{ref:"content",class:tt.value,style:Ze.value},x,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>nt.value)),C("div",{class:"q-drawer-container"},l)}}}),jt=O({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:n}}=R(),r=Se(ie,P);if(r===P)return console.error("QPageContainer needs to be child of QLayout"),P;We(gt,!0);const t=d(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>C("div",{class:"q-page-container",style:t.value},H(i.default))}});const{passive:Ae}=ye,Kt=["both","horizontal","vertical"];var Ut=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Kt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Et},emits:["scroll"],setup(e,{emit:i}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,a;k(()=>e.scrollTarget,()=>{c(),m()});function s(){r!==null&&r();const w=Math.max(0,Qt(t)),q=Pt(t),f={top:w-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const h=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:w,left:q},n.directionChanged=n.direction!==h,n.delta=f,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),i("scroll",{...n})}function m(){t=Ot(a,e.scrollTarget),t.addEventListener("scroll",u,Ae),u(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",u,Ae),t=void 0)}function u(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[q,f]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{f(q),r=null}}}const{proxy:o}=R();return k(()=>o.$q.lang.rtl,s),U(()=>{a=o.$el.parentNode,m()}),X(()=>{r!==null&&r(),c()}),Object.assign(o,{trigger:u,getPosition:()=>n}),Ce}}),Xt=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:n}){const{proxy:{$q:r}}=R(),t=L(null),a=L(r.screen.height),s=L(e.container===!0?0:r.screen.width),m=L({position:0,direction:"down",inflectionPoint:0}),c=L(0),u=L(Ve.value===!0?0:he()),o=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=d(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),q=d(()=>u.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),f=d(()=>u.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function h(b){if(e.container===!0||document.qScrollPrevented!==!0){const S={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};m.value=S,e.onScroll!==void 0&&n("scroll",S)}}function B(b){const{height:S,width:T}=b;let A=!1;a.value!==S&&(A=!0,a.value=S,e.onScrollHeight!==void 0&&n("scrollHeight",S),p()),s.value!==T&&(A=!0,s.value=T),A===!0&&e.onResize!==void 0&&n("resize",b)}function _({height:b}){c.value!==b&&(c.value=b,p())}function p(){if(e.container===!0){const b=a.value>c.value?he():0;u.value!==b&&(u.value=b)}}let v=null;const g={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:u,totalWidth:d(()=>s.value+u.value),rows:d(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:m,animate(){v!==null?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{v=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,S,T){g[b][S]=T}};if(We(ie,g),he()>0){let T=function(){b=null,S.classList.remove("hide-scrollbar")},A=function(){if(b===null){if(S.scrollHeight>r.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(T,300)},W=function(F){b!==null&&F==="remove"&&(clearTimeout(b),T()),window[`${F}EventListener`]("resize",A)},b=null;const S=document.body;k(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),yt(()=>{W("remove")})}return()=>{const b=ut(i.default,[C(Ut,{onScroll:h}),C(qe,{onResize:B})]),S=C("div",{class:o.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(qe,{onResize:_}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:f.value},[S])])]):S}}}),Fe=O({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const n=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},H(i.default))}}),Yt=O({name:"QItem",props:{..._e,...st,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:n}){const{proxy:{$q:r}}=R(),t=Le(e,r),{hasLink:a,linkAttrs:s,linkClass:m,linkTag:c,navigateOnClick:u}=ct(),o=L(null),w=L(null),q=d(()=>e.clickable===!0||a.value===!0||e.tag==="label"),f=d(()=>e.disable!==!0&&q.value===!0),h=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(a.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=d(()=>{if(e.insetLevel===void 0)return null;const g=r.lang.rtl===!0?"Right":"Left";return{["padding"+g]:16+e.insetLevel*56+"px"}});function _(g){f.value===!0&&(w.value!==null&&(g.qKeyEvent!==!0&&document.activeElement===o.value?w.value.focus():document.activeElement===w.value&&o.value.focus()),u(g))}function p(g){if(f.value===!0&&pt(g,[13,32])===!0){Ne(g),g.qKeyEvent=!0;const b=new MouseEvent("click",g);b.qKeyEvent=!0,o.value.dispatchEvent(b)}n("keyup",g)}function v(){const g=He(i.default,[]);return f.value===!0&&g.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:w})),g}return()=>{const g={ref:o,class:h.value,style:B.value,role:"listitem",onClick:_,onKeyup:p};return f.value===!0?(g.tabindex=e.tabindex||"0",Object.assign(g,s.value)):q.value===!0&&(g["aria-disabled"]="true"),C(c.value,g,v())}}});const Gt=Ie({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Jt(e,i,n,r,t,a){return K(),ae(Yt,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:z(()=>[e.icon?(K(),ae(Fe,{key:0,avatar:""},{default:z(()=>[$(dt,{name:e.icon},null,8,["name"])]),_:1})):wt("",!0),$(Fe,null,{default:z(()=>[$(ke,null,{default:z(()=>[ne(we(e.title),1)]),_:1}),$(ke,{caption:""},{default:z(()=>[ne(we(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Zt=je(Gt,[["render",Jt]]);const ea=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],ta=Ie({name:"MainLayout",components:{EssentialLink:Zt},setup(){const e=L(!1);return{essentialLinks:ea,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function aa(e,i,n,r,t,a){const s=Qe("EssentialLink"),m=Qe("router-view");return K(),ae(Xt,{view:"lHh Lpr lFf"},{default:z(()=>[$(At,{elevated:""},{default:z(()=>[$(Mt,null,{default:z(()=>[$(ft,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),$(Dt,null,{default:z(()=>[ne(" Quasar App ")]),_:1}),qt("div",null,"Quasar v"+we(e.$q.version),1)]),_:1})]),_:1}),$(It,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[0]||(i[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:z(()=>[$(Ft,null,{default:z(()=>[$(ke,{header:""},{default:z(()=>[ne(" Essential Links ")]),_:1}),(K(!0),kt(St,null,Ct(e.essentialLinks,c=>(K(),ae(s,_t({key:c.title,ref_for:!0},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),$(jt,null,{default:z(()=>[$(m)]),_:1})]),_:1})}var ra=je(ta,[["render",aa]]);export{ra as default};
