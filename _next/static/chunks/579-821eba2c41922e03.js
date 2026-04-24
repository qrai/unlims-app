"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{473:(e,r,t)=>{t.d(r,{UC:()=>eS,In:()=>eX,q7:()=>eT,p4:()=>ej,ZL:()=>eY,bL:()=>eH,wn:()=>eO,PP:()=>eE,l9:()=>eW,WT:()=>eC,LM:()=>eR});var a=t(8047),o=t(1918);function i(e,[r,t]){return Math.min(t,Math.max(r,e))}var s=t(7665),n=t(8431),l=t(1395),c=t(7939),p=t(9388),f=t(2692),b=t(280),d=t(1571),g=t(5686),u=t(3102),m=t(6322),x=t(4932),h=t(9821),v=t(9698),$=t(1526),z=t(4510),y=t(4248),w=t(6133),k=t(941),H=t(4039),W=[" ","Enter","ArrowUp","ArrowDown"],C=[" ","Enter"],X="Select",[Y,S,R]=(0,n.N)(X),[T,j]=(0,c.A)(X,[R,u.Bk]),E=(0,u.Bk)(),[O,M]=T(X),[L,F]=T(X),N=e=>{let{__scopeSelect:r,children:t,open:o,defaultOpen:i,onOpenChange:s,value:n,defaultValue:l,onValueChange:c,dir:f,name:b,autoComplete:d,disabled:m,required:x,form:h}=e,v=E(r),[z,y]=a.useState(null),[w,k]=a.useState(null),[W,C]=a.useState(!1),S=(0,p.jH)(f),[R,T]=(0,$.i)({prop:o,defaultProp:null!=i&&i,onChange:s,caller:X}),[j,M]=(0,$.i)({prop:n,defaultProp:l,onChange:c,caller:X}),F=a.useRef(null),N=!z||h||!!z.closest("form"),[A,P]=a.useState(new Set),I=Array.from(A).map(e=>e.props.value).join(";");return(0,H.jsx)(u.bL,{...v,children:(0,H.jsxs)(O,{required:x,scope:r,trigger:z,onTriggerChange:y,valueNode:w,onValueNodeChange:k,valueNodeHasChildren:W,onValueNodeHasChildrenChange:C,contentId:(0,g.B)(),value:j,onValueChange:M,open:R,onOpenChange:T,dir:S,triggerPointerDownPosRef:F,disabled:m,children:[(0,H.jsx)(Y.Provider,{scope:r,children:(0,H.jsx)(L,{scope:e.__scopeSelect,onNativeOptionAdd:a.useCallback(e=>{P(r=>new Set(r).add(e))},[]),onNativeOptionRemove:a.useCallback(e=>{P(r=>{let t=new Set(r);return t.delete(e),t})},[]),children:t})}),N?(0,H.jsxs)(ez,{"aria-hidden":!0,required:x,tabIndex:-1,name:b,autoComplete:d,value:j,onChange:e=>M(e.target.value),disabled:m,form:h,children:[void 0===j?(0,H.jsx)("option",{value:""}):null,Array.from(A)]},I):null]})})};N.displayName=X;var A="SelectTrigger",P=a.forwardRef((e,r)=>{let{__scopeSelect:t,disabled:o=!1,...i}=e,n=E(t),c=M(A,t),p=c.disabled||o,f=(0,l.s)(r,c.onTriggerChange),b=S(t),d=a.useRef("touch"),[g,m,h]=ew(e=>{let r=b().filter(e=>!e.disabled),t=r.find(e=>e.value===c.value),a=ek(r,e,t);void 0!==a&&c.onValueChange(a.value)}),v=e=>{p||(c.onOpenChange(!0),h()),e&&(c.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,H.jsx)(u.Mz,{asChild:!0,...n,children:(0,H.jsx)(x.sG.button,{type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:p,"data-disabled":p?"":void 0,"data-placeholder":ey(c.value)?"":void 0,...i,ref:f,onClick:(0,s.mK)(i.onClick,e=>{e.currentTarget.focus(),"mouse"!==d.current&&v(e)}),onPointerDown:(0,s.mK)(i.onPointerDown,e=>{d.current=e.pointerType;let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(v(e),e.preventDefault())}),onKeyDown:(0,s.mK)(i.onKeyDown,e=>{let r=""!==g.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!r||" "!==e.key)&&W.includes(e.key)&&(v(),e.preventDefault())})})})});P.displayName=A;var I="SelectValue",D=a.forwardRef((e,r)=>{let{__scopeSelect:t,className:a,style:o,children:i,placeholder:s="",...n}=e,c=M(I,t),{onValueNodeHasChildrenChange:p}=c,f=void 0!==i,b=(0,l.s)(r,c.onValueNodeChange);return(0,z.N)(()=>{p(f)},[p,f]),(0,H.jsx)(x.sG.span,{...n,ref:b,style:{pointerEvents:"none"},children:ey(c.value)?(0,H.jsx)(H.Fragment,{children:s}):i})});D.displayName=I;var K=a.forwardRef((e,r)=>{let{__scopeSelect:t,children:a,...o}=e;return(0,H.jsx)(x.sG.span,{"aria-hidden":!0,...o,ref:r,children:a||"▼"})});K.displayName="SelectIcon";var _=e=>(0,H.jsx)(m.Z,{asChild:!0,...e});_.displayName="SelectPortal";var B="SelectContent",V=a.forwardRef((e,r)=>{let t=M(B,e.__scopeSelect),[i,s]=a.useState();return((0,z.N)(()=>{s(new DocumentFragment)},[]),t.open)?(0,H.jsx)(Z,{...e,ref:r}):i?o.createPortal((0,H.jsx)(G,{scope:e.__scopeSelect,children:(0,H.jsx)(Y.Slot,{scope:e.__scopeSelect,children:(0,H.jsx)("div",{children:e.children})})}),i):null});V.displayName=B;var[G,U]=T(B),q=(0,h.TL)("SelectContent.RemoveScroll"),Z=a.forwardRef((e,r)=>{let{__scopeSelect:t,position:o="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:n,onPointerDownOutside:c,side:p,sideOffset:g,align:u,alignOffset:m,arrowPadding:x,collisionBoundary:h,collisionPadding:v,sticky:$,hideWhenDetached:z,avoidCollisions:y,...W}=e,C=M(B,t),[X,Y]=a.useState(null),[R,T]=a.useState(null),j=(0,l.s)(r,e=>Y(e)),[E,O]=a.useState(null),[L,F]=a.useState(null),N=S(t),[A,P]=a.useState(!1),I=a.useRef(!1);a.useEffect(()=>{if(X)return(0,w.Eq)(X)},[X]),(0,b.Oh)();let D=a.useCallback(e=>{let[r,...t]=N().map(e=>e.ref.current),[a]=t.slice(-1),o=document.activeElement;for(let t of e)if(t===o||(null==t||t.scrollIntoView({block:"nearest"}),t===r&&R&&(R.scrollTop=0),t===a&&R&&(R.scrollTop=R.scrollHeight),null==t||t.focus(),document.activeElement!==o))return},[N,R]),K=a.useCallback(()=>D([E,X]),[D,E,X]);a.useEffect(()=>{A&&K()},[A,K]);let{onOpenChange:_,triggerPointerDownPosRef:V}=C;a.useEffect(()=>{if(X){let e={x:0,y:0},r=r=>{var t,a,o,i;e={x:Math.abs(Math.round(r.pageX)-(null!=(o=null==(t=V.current)?void 0:t.x)?o:0)),y:Math.abs(Math.round(r.pageY)-(null!=(i=null==(a=V.current)?void 0:a.y)?i:0))}},t=t=>{e.x<=10&&e.y<=10?t.preventDefault():X.contains(t.target)||_(!1),document.removeEventListener("pointermove",r),V.current=null};return null!==V.current&&(document.addEventListener("pointermove",r),document.addEventListener("pointerup",t,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",t,{capture:!0})}}},[X,_,V]),a.useEffect(()=>{let e=()=>_(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[_]);let[U,Z]=ew(e=>{let r=N().filter(e=>!e.disabled),t=r.find(e=>e.ref.current===document.activeElement),a=ek(r,e,t);a&&setTimeout(()=>a.ref.current.focus())}),ee=a.useCallback((e,r,t)=>{let a=!I.current&&!t;(void 0!==C.value&&C.value===r||a)&&(O(e),a&&(I.current=!0))},[C.value]),er=a.useCallback(()=>null==X?void 0:X.focus(),[X]),et=a.useCallback((e,r,t)=>{let a=!I.current&&!t;(void 0!==C.value&&C.value===r||a)&&F(e)},[C.value]),ea="popper"===o?J:Q,eo=ea===J?{side:p,sideOffset:g,align:u,alignOffset:m,arrowPadding:x,collisionBoundary:h,collisionPadding:v,sticky:$,hideWhenDetached:z,avoidCollisions:y}:{};return(0,H.jsx)(G,{scope:t,content:X,viewport:R,onViewportChange:T,itemRefCallback:ee,selectedItem:E,onItemLeave:er,itemTextRefCallback:et,focusSelectedItem:K,selectedItemText:L,position:o,isPositioned:A,searchRef:U,children:(0,H.jsx)(k.A,{as:q,allowPinchZoom:!0,children:(0,H.jsx)(d.n,{asChild:!0,trapped:C.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,s.mK)(i,e=>{var r;null==(r=C.trigger)||r.focus({preventScroll:!0}),e.preventDefault()}),children:(0,H.jsx)(f.qW,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:n,onPointerDownOutside:c,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>C.onOpenChange(!1),children:(0,H.jsx)(ea,{role:"listbox",id:C.contentId,"data-state":C.open?"open":"closed",dir:C.dir,onContextMenu:e=>e.preventDefault(),...W,...eo,onPlaced:()=>P(!0),ref:j,style:{display:"flex",flexDirection:"column",outline:"none",...W.style},onKeyDown:(0,s.mK)(W.onKeyDown,e=>{let r=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),r||1!==e.key.length||Z(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let r=N().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(r=r.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let t=e.target,a=r.indexOf(t);r=r.slice(a+1)}setTimeout(()=>D(r)),e.preventDefault()}})})})})})})});Z.displayName="SelectContentImpl";var Q=a.forwardRef((e,r)=>{let{__scopeSelect:t,onPlaced:o,...s}=e,n=M(B,t),c=U(B,t),[p,f]=a.useState(null),[b,d]=a.useState(null),g=(0,l.s)(r,e=>d(e)),u=S(t),m=a.useRef(!1),h=a.useRef(!0),{viewport:v,selectedItem:$,selectedItemText:y,focusSelectedItem:w}=c,k=a.useCallback(()=>{if(n.trigger&&n.valueNode&&p&&b&&v&&$&&y){let e=n.trigger.getBoundingClientRect(),r=b.getBoundingClientRect(),t=n.valueNode.getBoundingClientRect(),a=y.getBoundingClientRect();if("rtl"!==n.dir){let o=a.left-r.left,s=t.left-o,n=e.left-s,l=e.width+n,c=Math.max(l,r.width),f=i(s,[10,Math.max(10,window.innerWidth-10-c)]);p.style.minWidth=l+"px",p.style.left=f+"px"}else{let o=r.right-a.right,s=window.innerWidth-t.right-o,n=window.innerWidth-e.right-s,l=e.width+n,c=Math.max(l,r.width),f=i(s,[10,Math.max(10,window.innerWidth-10-c)]);p.style.minWidth=l+"px",p.style.right=f+"px"}let s=u(),l=window.innerHeight-20,c=v.scrollHeight,f=window.getComputedStyle(b),d=parseInt(f.borderTopWidth,10),g=parseInt(f.paddingTop,10),x=parseInt(f.borderBottomWidth,10),h=d+g+c+parseInt(f.paddingBottom,10)+x,z=Math.min(5*$.offsetHeight,h),w=window.getComputedStyle(v),k=parseInt(w.paddingTop,10),H=parseInt(w.paddingBottom,10),W=e.top+e.height/2-10,C=$.offsetHeight/2,X=d+g+($.offsetTop+C);if(X<=W){let e=s.length>0&&$===s[s.length-1].ref.current;p.style.bottom="0px";let r=Math.max(l-W,C+(e?H:0)+(b.clientHeight-v.offsetTop-v.offsetHeight)+x);p.style.height=X+r+"px"}else{let e=s.length>0&&$===s[0].ref.current;p.style.top="0px";let r=Math.max(W,d+v.offsetTop+(e?k:0)+C);p.style.height=r+(h-X)+"px",v.scrollTop=X-W+v.offsetTop}p.style.margin="".concat(10,"px 0"),p.style.minHeight=z+"px",p.style.maxHeight=l+"px",null==o||o(),requestAnimationFrame(()=>m.current=!0)}},[u,n.trigger,n.valueNode,p,b,v,$,y,n.dir,o]);(0,z.N)(()=>k(),[k]);let[W,C]=a.useState();(0,z.N)(()=>{b&&C(window.getComputedStyle(b).zIndex)},[b]);let X=a.useCallback(e=>{e&&!0===h.current&&(k(),null==w||w(),h.current=!1)},[k,w]);return(0,H.jsx)(ee,{scope:t,contentWrapper:p,shouldExpandOnScrollRef:m,onScrollButtonChange:X,children:(0,H.jsx)("div",{ref:f,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:W},children:(0,H.jsx)(x.sG.div,{...s,ref:g,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});Q.displayName="SelectItemAlignedPosition";var J=a.forwardRef((e,r)=>{let{__scopeSelect:t,align:a="start",collisionPadding:o=10,...i}=e,s=E(t);return(0,H.jsx)(u.UC,{...s,...i,ref:r,align:a,collisionPadding:o,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});J.displayName="SelectPopperPosition";var[ee,er]=T(B,{}),et="SelectViewport",ea=a.forwardRef((e,r)=>{let{__scopeSelect:t,nonce:o,...i}=e,n=U(et,t),c=er(et,t),p=(0,l.s)(r,n.onViewportChange),f=a.useRef(0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),(0,H.jsx)(Y.Slot,{scope:t,children:(0,H.jsx)(x.sG.div,{"data-radix-select-viewport":"",role:"presentation",...i,ref:p,style:{position:"relative",flex:1,overflow:"hidden auto",...i.style},onScroll:(0,s.mK)(i.onScroll,e=>{let r=e.currentTarget,{contentWrapper:t,shouldExpandOnScrollRef:a}=c;if((null==a?void 0:a.current)&&t){let e=Math.abs(f.current-r.scrollTop);if(e>0){let a=window.innerHeight-20,o=Math.max(parseFloat(t.style.minHeight),parseFloat(t.style.height));if(o<a){let i=o+e,s=Math.min(a,i),n=i-s;t.style.height=s+"px","0px"===t.style.bottom&&(r.scrollTop=n>0?n:0,t.style.justifyContent="flex-end")}}}f.current=r.scrollTop})})})]})});ea.displayName=et;var eo="SelectGroup",[ei,es]=T(eo);a.forwardRef((e,r)=>{let{__scopeSelect:t,...a}=e,o=(0,g.B)();return(0,H.jsx)(ei,{scope:t,id:o,children:(0,H.jsx)(x.sG.div,{role:"group","aria-labelledby":o,...a,ref:r})})}).displayName=eo;var en="SelectLabel";a.forwardRef((e,r)=>{let{__scopeSelect:t,...a}=e,o=es(en,t);return(0,H.jsx)(x.sG.div,{id:o.id,...a,ref:r})}).displayName=en;var el="SelectItem",[ec,ep]=T(el),ef=a.forwardRef((e,r)=>{let{__scopeSelect:t,value:o,disabled:i=!1,textValue:n,...c}=e,p=M(el,t),f=U(el,t),b=p.value===o,[d,u]=a.useState(null!=n?n:""),[m,h]=a.useState(!1),v=(0,l.s)(r,e=>{var r;return null==(r=f.itemRefCallback)?void 0:r.call(f,e,o,i)}),$=(0,g.B)(),z=a.useRef("touch"),y=()=>{i||(p.onValueChange(o),p.onOpenChange(!1))};if(""===o)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,H.jsx)(ec,{scope:t,value:o,disabled:i,textId:$,isSelected:b,onItemTextChange:a.useCallback(e=>{u(r=>{var t;return r||(null!=(t=null==e?void 0:e.textContent)?t:"").trim()})},[]),children:(0,H.jsx)(Y.ItemSlot,{scope:t,value:o,disabled:i,textValue:d,children:(0,H.jsx)(x.sG.div,{role:"option","aria-labelledby":$,"data-highlighted":m?"":void 0,"aria-selected":b&&m,"data-state":b?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1,...c,ref:v,onFocus:(0,s.mK)(c.onFocus,()=>h(!0)),onBlur:(0,s.mK)(c.onBlur,()=>h(!1)),onClick:(0,s.mK)(c.onClick,()=>{"mouse"!==z.current&&y()}),onPointerUp:(0,s.mK)(c.onPointerUp,()=>{"mouse"===z.current&&y()}),onPointerDown:(0,s.mK)(c.onPointerDown,e=>{z.current=e.pointerType}),onPointerMove:(0,s.mK)(c.onPointerMove,e=>{if(z.current=e.pointerType,i){var r;null==(r=f.onItemLeave)||r.call(f)}else"mouse"===z.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,s.mK)(c.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var r;null==(r=f.onItemLeave)||r.call(f)}}),onKeyDown:(0,s.mK)(c.onKeyDown,e=>{var r;((null==(r=f.searchRef)?void 0:r.current)===""||" "!==e.key)&&(C.includes(e.key)&&y()," "===e.key&&e.preventDefault())})})})})});ef.displayName=el;var eb="SelectItemText",ed=a.forwardRef((e,r)=>{let{__scopeSelect:t,className:i,style:s,...n}=e,c=M(eb,t),p=U(eb,t),f=ep(eb,t),b=F(eb,t),[d,g]=a.useState(null),u=(0,l.s)(r,e=>g(e),f.onItemTextChange,e=>{var r;return null==(r=p.itemTextRefCallback)?void 0:r.call(p,e,f.value,f.disabled)}),m=null==d?void 0:d.textContent,h=a.useMemo(()=>(0,H.jsx)("option",{value:f.value,disabled:f.disabled,children:m},f.value),[f.disabled,f.value,m]),{onNativeOptionAdd:v,onNativeOptionRemove:$}=b;return(0,z.N)(()=>(v(h),()=>$(h)),[v,$,h]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(x.sG.span,{id:f.textId,...n,ref:u}),f.isSelected&&c.valueNode&&!c.valueNodeHasChildren?o.createPortal(n.children,c.valueNode):null]})});ed.displayName=eb;var eg="SelectItemIndicator";a.forwardRef((e,r)=>{let{__scopeSelect:t,...a}=e;return ep(eg,t).isSelected?(0,H.jsx)(x.sG.span,{"aria-hidden":!0,...a,ref:r}):null}).displayName=eg;var eu="SelectScrollUpButton",em=a.forwardRef((e,r)=>{let t=U(eu,e.__scopeSelect),o=er(eu,e.__scopeSelect),[i,s]=a.useState(!1),n=(0,l.s)(r,o.onScrollButtonChange);return(0,z.N)(()=>{if(t.viewport&&t.isPositioned){let e=function(){s(r.scrollTop>0)},r=t.viewport;return e(),r.addEventListener("scroll",e),()=>r.removeEventListener("scroll",e)}},[t.viewport,t.isPositioned]),i?(0,H.jsx)(ev,{...e,ref:n,onAutoScroll:()=>{let{viewport:e,selectedItem:r}=t;e&&r&&(e.scrollTop=e.scrollTop-r.offsetHeight)}}):null});em.displayName=eu;var ex="SelectScrollDownButton",eh=a.forwardRef((e,r)=>{let t=U(ex,e.__scopeSelect),o=er(ex,e.__scopeSelect),[i,s]=a.useState(!1),n=(0,l.s)(r,o.onScrollButtonChange);return(0,z.N)(()=>{if(t.viewport&&t.isPositioned){let e=function(){let e=r.scrollHeight-r.clientHeight;s(Math.ceil(r.scrollTop)<e)},r=t.viewport;return e(),r.addEventListener("scroll",e),()=>r.removeEventListener("scroll",e)}},[t.viewport,t.isPositioned]),i?(0,H.jsx)(ev,{...e,ref:n,onAutoScroll:()=>{let{viewport:e,selectedItem:r}=t;e&&r&&(e.scrollTop=e.scrollTop+r.offsetHeight)}}):null});eh.displayName=ex;var ev=a.forwardRef((e,r)=>{let{__scopeSelect:t,onAutoScroll:o,...i}=e,n=U("SelectScrollButton",t),l=a.useRef(null),c=S(t),p=a.useCallback(()=>{null!==l.current&&(window.clearInterval(l.current),l.current=null)},[]);return a.useEffect(()=>()=>p(),[p]),(0,z.N)(()=>{var e;let r=c().find(e=>e.ref.current===document.activeElement);null==r||null==(e=r.ref.current)||e.scrollIntoView({block:"nearest"})},[c]),(0,H.jsx)(x.sG.div,{"aria-hidden":!0,...i,ref:r,style:{flexShrink:0,...i.style},onPointerDown:(0,s.mK)(i.onPointerDown,()=>{null===l.current&&(l.current=window.setInterval(o,50))}),onPointerMove:(0,s.mK)(i.onPointerMove,()=>{var e;null==(e=n.onItemLeave)||e.call(n),null===l.current&&(l.current=window.setInterval(o,50))}),onPointerLeave:(0,s.mK)(i.onPointerLeave,()=>{p()})})});a.forwardRef((e,r)=>{let{__scopeSelect:t,...a}=e;return(0,H.jsx)(x.sG.div,{"aria-hidden":!0,...a,ref:r})}).displayName="SelectSeparator";var e$="SelectArrow";a.forwardRef((e,r)=>{let{__scopeSelect:t,...a}=e,o=E(t),i=M(e$,t),s=U(e$,t);return i.open&&"popper"===s.position?(0,H.jsx)(u.i3,{...o,...a,ref:r}):null}).displayName=e$;var ez=a.forwardRef((e,r)=>{let{__scopeSelect:t,value:o,...i}=e,s=a.useRef(null),n=(0,l.s)(r,s),c=function(e){let r=a.useRef({value:e,previous:e});return a.useMemo(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}(o);return a.useEffect(()=>{let e=s.current;if(!e)return;let r=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(c!==o&&r){let t=new Event("change",{bubbles:!0});r.call(e,o),e.dispatchEvent(t)}},[c,o]),(0,H.jsx)(x.sG.select,{...i,style:{...y.Qg,...i.style},ref:n,defaultValue:o})});function ey(e){return""===e||void 0===e}function ew(e){let r=(0,v.c)(e),t=a.useRef(""),o=a.useRef(0),i=a.useCallback(e=>{let a=t.current+e;r(a),function e(r){t.current=r,window.clearTimeout(o.current),""!==r&&(o.current=window.setTimeout(()=>e(""),1e3))}(a)},[r]),s=a.useCallback(()=>{t.current="",window.clearTimeout(o.current)},[]);return a.useEffect(()=>()=>window.clearTimeout(o.current),[]),[t,i,s]}function ek(e,r,t){var a,o;let i=r.length>1&&Array.from(r).every(e=>e===r[0])?r[0]:r,s=t?e.indexOf(t):-1,n=(a=e,o=Math.max(s,0),a.map((e,r)=>a[(o+r)%a.length]));1===i.length&&(n=n.filter(e=>e!==t));let l=n.find(e=>e.textValue.toLowerCase().startsWith(i.toLowerCase()));return l!==t?l:void 0}ez.displayName="SelectBubbleInput";var eH=N,eW=P,eC=D,eX=K,eY=_,eS=V,eR=ea,eT=ef,ej=ed,eE=em,eO=eh},508:(e,r,t)=>{t.d(r,{Kq:()=>K,UC:()=>G,ZL:()=>V,bL:()=>_,i3:()=>U,l9:()=>B});var a=t(8047),o=t(7665),i=t(1395),s=t(7939),n=t(2692),l=t(5686),c=t(3102),p=t(6322),f=t(5873),b=t(4932),d=t(9821),g=t(1526),u=t(4248),m=t(4039),[x,h]=(0,s.A)("Tooltip",[c.Bk]),v=(0,c.Bk)(),$="TooltipProvider",z="tooltip.open",[y,w]=x($),k=e=>{let{__scopeTooltip:r,delayDuration:t=700,skipDelayDuration:o=300,disableHoverableContent:i=!1,children:s}=e,n=a.useRef(!0),l=a.useRef(!1),c=a.useRef(0);return a.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,m.jsx)(y,{scope:r,isOpenDelayedRef:n,delayDuration:t,onOpen:a.useCallback(()=>{window.clearTimeout(c.current),n.current=!1},[]),onClose:a.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>n.current=!0,o)},[o]),isPointerInTransitRef:l,onPointerInTransitChange:a.useCallback(e=>{l.current=e},[]),disableHoverableContent:i,children:s})};k.displayName=$;var H="Tooltip",[W,C]=x(H),X=e=>{let{__scopeTooltip:r,children:t,open:o,defaultOpen:i,onOpenChange:s,disableHoverableContent:n,delayDuration:p}=e,f=w(H,e.__scopeTooltip),b=v(r),[d,u]=a.useState(null),x=(0,l.B)(),h=a.useRef(0),$=null!=n?n:f.disableHoverableContent,y=null!=p?p:f.delayDuration,k=a.useRef(!1),[C,X]=(0,g.i)({prop:o,defaultProp:null!=i&&i,onChange:e=>{e?(f.onOpen(),document.dispatchEvent(new CustomEvent(z))):f.onClose(),null==s||s(e)},caller:H}),Y=a.useMemo(()=>C?k.current?"delayed-open":"instant-open":"closed",[C]),S=a.useCallback(()=>{window.clearTimeout(h.current),h.current=0,k.current=!1,X(!0)},[X]),R=a.useCallback(()=>{window.clearTimeout(h.current),h.current=0,X(!1)},[X]),T=a.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>{k.current=!0,X(!0),h.current=0},y)},[y,X]);return a.useEffect(()=>()=>{h.current&&(window.clearTimeout(h.current),h.current=0)},[]),(0,m.jsx)(c.bL,{...b,children:(0,m.jsx)(W,{scope:r,contentId:x,open:C,stateAttribute:Y,trigger:d,onTriggerChange:u,onTriggerEnter:a.useCallback(()=>{f.isOpenDelayedRef.current?T():S()},[f.isOpenDelayedRef,T,S]),onTriggerLeave:a.useCallback(()=>{$?R():(window.clearTimeout(h.current),h.current=0)},[R,$]),onOpen:S,onClose:R,disableHoverableContent:$,children:t})})};X.displayName=H;var Y="TooltipTrigger",S=a.forwardRef((e,r)=>{let{__scopeTooltip:t,...s}=e,n=C(Y,t),l=w(Y,t),p=v(t),f=a.useRef(null),d=(0,i.s)(r,f,n.onTriggerChange),g=a.useRef(!1),u=a.useRef(!1),x=a.useCallback(()=>g.current=!1,[]);return a.useEffect(()=>()=>document.removeEventListener("pointerup",x),[x]),(0,m.jsx)(c.Mz,{asChild:!0,...p,children:(0,m.jsx)(b.sG.button,{"aria-describedby":n.open?n.contentId:void 0,"data-state":n.stateAttribute,...s,ref:d,onPointerMove:(0,o.mK)(e.onPointerMove,e=>{"touch"!==e.pointerType&&(u.current||l.isPointerInTransitRef.current||(n.onTriggerEnter(),u.current=!0))}),onPointerLeave:(0,o.mK)(e.onPointerLeave,()=>{n.onTriggerLeave(),u.current=!1}),onPointerDown:(0,o.mK)(e.onPointerDown,()=>{n.open&&n.onClose(),g.current=!0,document.addEventListener("pointerup",x,{once:!0})}),onFocus:(0,o.mK)(e.onFocus,()=>{g.current||n.onOpen()}),onBlur:(0,o.mK)(e.onBlur,n.onClose),onClick:(0,o.mK)(e.onClick,n.onClose)})})});S.displayName=Y;var R="TooltipPortal",[T,j]=x(R,{forceMount:void 0}),E=e=>{let{__scopeTooltip:r,forceMount:t,children:a,container:o}=e,i=C(R,r);return(0,m.jsx)(T,{scope:r,forceMount:t,children:(0,m.jsx)(f.C,{present:t||i.open,children:(0,m.jsx)(p.Z,{asChild:!0,container:o,children:a})})})};E.displayName=R;var O="TooltipContent",M=a.forwardRef((e,r)=>{let t=j(O,e.__scopeTooltip),{forceMount:a=t.forceMount,side:o="top",...i}=e,s=C(O,e.__scopeTooltip);return(0,m.jsx)(f.C,{present:a||s.open,children:s.disableHoverableContent?(0,m.jsx)(P,{side:o,...i,ref:r}):(0,m.jsx)(L,{side:o,...i,ref:r})})}),L=a.forwardRef((e,r)=>{let t=C(O,e.__scopeTooltip),o=w(O,e.__scopeTooltip),s=a.useRef(null),n=(0,i.s)(r,s),[l,c]=a.useState(null),{trigger:p,onClose:f}=t,b=s.current,{onPointerInTransitChange:d}=o,g=a.useCallback(()=>{c(null),d(!1)},[d]),u=a.useCallback((e,r)=>{let t=e.currentTarget,a={x:e.clientX,y:e.clientY},o=function(e,r){let t=Math.abs(r.top-e.y),a=Math.abs(r.bottom-e.y),o=Math.abs(r.right-e.x),i=Math.abs(r.left-e.x);switch(Math.min(t,a,o,i)){case i:return"left";case o:return"right";case t:return"top";case a:return"bottom";default:throw Error("unreachable")}}(a,t.getBoundingClientRect());c(function(e){let r=e.slice();return r.sort((e,r)=>e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:1*!!(e.y>r.y)),function(e){if(e.length<=1)return e.slice();let r=[];for(let t=0;t<e.length;t++){let a=e[t];for(;r.length>=2;){let e=r[r.length-1],t=r[r.length-2];if((e.x-t.x)*(a.y-t.y)>=(e.y-t.y)*(a.x-t.x))r.pop();else break}r.push(a)}r.pop();let t=[];for(let r=e.length-1;r>=0;r--){let a=e[r];for(;t.length>=2;){let e=t[t.length-1],r=t[t.length-2];if((e.x-r.x)*(a.y-r.y)>=(e.y-r.y)*(a.x-r.x))t.pop();else break}t.push(a)}return(t.pop(),1===r.length&&1===t.length&&r[0].x===t[0].x&&r[0].y===t[0].y)?r:r.concat(t)}(r)}([...function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,a=[];switch(r){case"top":a.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":a.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":a.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":a.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t})}return a}(a,o),...function(e){let{top:r,right:t,bottom:a,left:o}=e;return[{x:o,y:r},{x:t,y:r},{x:t,y:a},{x:o,y:a}]}(r.getBoundingClientRect())])),d(!0)},[d]);return a.useEffect(()=>()=>g(),[g]),a.useEffect(()=>{if(p&&b){let e=e=>u(e,b),r=e=>u(e,p);return p.addEventListener("pointerleave",e),b.addEventListener("pointerleave",r),()=>{p.removeEventListener("pointerleave",e),b.removeEventListener("pointerleave",r)}}},[p,b,u,g]),a.useEffect(()=>{if(l){let e=e=>{let r=e.target,t={x:e.clientX,y:e.clientY},a=(null==p?void 0:p.contains(r))||(null==b?void 0:b.contains(r)),o=!function(e,r){let{x:t,y:a}=e,o=!1;for(let e=0,i=r.length-1;e<r.length;i=e++){let s=r[e],n=r[i],l=s.x,c=s.y,p=n.x,f=n.y;c>a!=f>a&&t<(p-l)*(a-c)/(f-c)+l&&(o=!o)}return o}(t,l);a?g():o&&(g(),f())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[p,b,l,f,g]),(0,m.jsx)(P,{...e,ref:n})}),[F,N]=x(H,{isInside:!1}),A=(0,d.Dc)("TooltipContent"),P=a.forwardRef((e,r)=>{let{__scopeTooltip:t,children:o,"aria-label":i,onEscapeKeyDown:s,onPointerDownOutside:l,...p}=e,f=C(O,t),b=v(t),{onClose:d}=f;return a.useEffect(()=>(document.addEventListener(z,d),()=>document.removeEventListener(z,d)),[d]),a.useEffect(()=>{if(f.trigger){let e=e=>{let r=e.target;(null==r?void 0:r.contains(f.trigger))&&d()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[f.trigger,d]),(0,m.jsx)(n.qW,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:e=>e.preventDefault(),onDismiss:d,children:(0,m.jsxs)(c.UC,{"data-state":f.stateAttribute,...b,...p,ref:r,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,m.jsx)(A,{children:o}),(0,m.jsx)(F,{scope:t,isInside:!0,children:(0,m.jsx)(u.bL,{id:f.contentId,role:"tooltip",children:i||o})})]})})});M.displayName=O;var I="TooltipArrow",D=a.forwardRef((e,r)=>{let{__scopeTooltip:t,...a}=e,o=v(t);return N(I,t).isInside?null:(0,m.jsx)(c.i3,{...o,...a,ref:r})});D.displayName=I;var K=k,_=X,B=S,V=E,G=M,U=D},4248:(e,r,t)=>{t.d(r,{Qg:()=>s,bL:()=>l});var a=t(8047),o=t(4932),i=t(4039),s=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),n=a.forwardRef((e,r)=>(0,i.jsx)(o.sG.span,{...e,ref:r,style:{...s,...e.style}}));n.displayName="VisuallyHidden";var l=n},4412:(e,r,t)=>{t.d(r,{A:()=>a});let a=(0,t(7479).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},4795:(e,r,t)=>{t.d(r,{Ab:()=>d});var a=t(4039),o=t(8047);let i={sm:{borderRadius:18,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1}},s={sm:{dark:{strokeOpacity:.48,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.33,innerOpacity:.46,bloomOpacity:.54,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:.96}},md:{dark:{strokeOpacity:.48,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.33,innerOpacity:.46,bloomOpacity:.54,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:.96}},line:{dark:{strokeOpacity:.72,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.72,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.2}}},n=(s.md.dark,s.md.light,{colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}}}),l={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]}},c={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}},p={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]},f={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}}};function b(e,r){let t=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(t)return`rgba(${t[1]}, ${t[2]}, ${t[3]}, ${r})`;let a=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return a?`rgba(${a[1]}, ${a[2]}, ${a[3]}, ${r})`:e}let d=(0,o.forwardRef)(function({children:e,size:r="md",colorVariant:t="colorful",theme:d="dark",staticColors:g=!1,duration:u,active:m=!0,borderRadius:x,brightness:h=1.3,saturation:v,hueRange:$=30,strength:z=1,className:y,style:w,onActivate:k,onDeactivate:H,onAnimationEnd:W,...C},X){let Y=(0,o.useId)().replace(/:/g,"-"),S=function(){let[e,r]=(0,o.useState)(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return(0,o.useEffect)(()=>{if(typeof window>"u")return;let e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{r(e.matches?"dark":"light")};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),e}(),R=(0,o.useRef)(null),[T,j]=(0,o.useState)(m),[E,O]=(0,o.useState)(!1),[M,L]=(0,o.useState)(null);(0,o.useEffect)(()=>{if(null!=x)return;let e=R.current;if(!e)return;let r=()=>{let r=e.firstElementChild;if(!r)return;let t=parseFloat(getComputedStyle(r).borderTopLeftRadius);!isNaN(t)&&t>0&&L(t)};r();let t=new MutationObserver(r);return t.observe(e,{childList:!0,subtree:!1}),()=>t.disconnect()},[x,e]),(0,o.useEffect)(()=>{!m||T||E?m||!T||E||O(!0):j(!0)},[m,T,E]);let F=(0,o.useCallback)(e=>{let r=e.animationName;r.includes("fade-out")?(j(!1),O(!1),null==H||H()):r.includes("fade-in")&&(null==k||k()),null==W||W(e)},[k,H,W]),N="auto"===d?S:d,A=s[r][N],P=i[r],I=x??M??P.borderRadius,D=u??("line"===r?2.4:1.96),K=v??A.saturation,_="line"===r?Math.min($,13):$,B="mono"===t||g,V=(0,o.useMemo)(()=>(function(e){let{size:r}=e;return"line"===r?function(e){let{id:r,borderRadius:t,borderWidth:a,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:l,innerShadow:d,colorVariant:g,staticColors:u,brightness:m,saturation:x,hueRange:h,theme:v}=e,$=Math.max(0,t-a),z="dark"===v,y=u?"":`animation: beam-hue-shift-${r} 12s ease-in-out infinite;`,w=u?"":`animation: beam-hue-shift-bloom-${r} 8s ease-in-out infinite;`,k=u?"":`
@keyframes beam-hue-shift-${r} {
  0% { filter: hue-rotate(-${h}deg) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
  50% { filter: hue-rotate(${h}deg) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
  100% { filter: hue-rotate(-${h}deg) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${r} {
  0% { filter: blur(8px) hue-rotate(-${h+10}deg) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
  50% { filter: blur(8px) hue-rotate(${h+10}deg) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
  100% { filter: blur(8px) hue-rotate(-${h+10}deg) brightness(${m.toFixed(2)}) saturate(${x.toFixed(2)}); }
}`,H=z?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${r})) calc(28px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${r})) calc(28px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,W=c[g][z?"dark":"light"].map(e=>{let t=0===e.offsetX?"":e.offsetX>0?` + ${e.offsetX}px`:` - ${Math.abs(e.offsetX)}px`,a=0===e.offsetY?"":e.offsetY>0?` + ${e.offsetY}px`:` - ${Math.abs(e.offsetY)}px`;return`radial-gradient(ellipse calc(${e.sizeW}px * var(--beam-w-${r})) calc(${e.sizeH}px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%${t}) calc(100%${a}), ${e.color}, transparent)`}).join(`,
       `),C=p[g].map(e=>{let t=0===e.offsetX?"":e.offsetX>0?` + ${e.offsetX}px`:` - ${Math.abs(e.offsetX)}px`,a=0===e.offsetY?"":` - ${Math.abs(e.offsetY)}px`;return`radial-gradient(ellipse calc(${e.sizeW}px * var(--beam-w-${r})) calc(${e.sizeH}px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%${t}) calc(100%${a}), ${e.color}, transparent)`}).join(`,
    `),X=function(e,r,t){let a=function(e,r){let t=n[e];return r?t.spike:t.spikeLt}(e,r),o=a.primary,i=a.secondary,s=f[e][r?"dark":"light"].spikes;if("mono"===e){var l,c;return l=r,c=t,l?`radial-gradient(ellipse calc(18px * var(--beam-spike-${c})) calc(30px * var(--beam-h-${c})) at 8% calc(100% - 2px), rgba(200, 200, 200, 0.35), rgba(200, 200, 200, 0.12) 50%, transparent 100%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${c})) calc(28px * var(--beam-h-${c})) at 22% calc(100% - 4px), rgba(170, 170, 170, 0.3), rgba(170, 170, 170, 0.1) 50%, transparent 100%),
       radial-gradient(ellipse calc(16px * var(--beam-spike-${c})) calc(32px * var(--beam-h-${c})) at 36% calc(100% - 3px), rgba(190, 190, 190, 0.35), rgba(190, 190, 190, 0.12) 50%, transparent 100%),
       radial-gradient(ellipse calc(20px * var(--beam-spike2-${c})) calc(25px * var(--beam-h-${c})) at 50% calc(100% - 2px), rgba(180, 180, 180, 0.25), rgba(180, 180, 180, 0.08) 55%, transparent 100%),
       radial-gradient(ellipse calc(15px * var(--beam-spike2-${c})) calc(30px * var(--beam-h-${c})) at 64% calc(100% - 4px), rgba(185, 185, 185, 0.32), rgba(185, 185, 185, 0.1) 50%, transparent 100%),
       radial-gradient(ellipse calc(12px * var(--beam-spike-${c})) calc(28px * var(--beam-h-${c})) at 78% calc(100% - 2px), rgba(175, 175, 175, 0.28), rgba(175, 175, 175, 0.09) 50%, transparent 100%),
       radial-gradient(ellipse calc(17px * var(--beam-spike-${c})) calc(26px * var(--beam-h-${c})) at 92% calc(100% - 3px), rgba(195, 195, 195, 0.3), rgba(195, 195, 195, 0.1) 50%, transparent 100%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${c})) calc(15px * var(--beam-spike2-${c})) at calc(var(--beam-x-${c}) * 100%) calc(100% + 1px), rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${c})) calc(40px * var(--beam-h-${c})) at calc(var(--beam-x-${c}) * 100%) 100%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.03) 55%, transparent 80%)`:`radial-gradient(ellipse calc(18px * var(--beam-spike-${c})) calc(30px * var(--beam-h-${c})) at 8% calc(100% - 2px), rgba(80, 80, 80, 0.3), rgba(80, 80, 80, 0.1) 50%, transparent 100%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${c})) calc(28px * var(--beam-h-${c})) at 22% calc(100% - 4px), rgba(100, 100, 100, 0.25), rgba(100, 100, 100, 0.08) 50%, transparent 100%),
       radial-gradient(ellipse calc(16px * var(--beam-spike-${c})) calc(32px * var(--beam-h-${c})) at 36% calc(100% - 3px), rgba(70, 70, 70, 0.3), rgba(70, 70, 70, 0.1) 50%, transparent 100%),
       radial-gradient(ellipse calc(20px * var(--beam-spike2-${c})) calc(25px * var(--beam-h-${c})) at 50% calc(100% - 2px), rgba(90, 90, 90, 0.22), rgba(90, 90, 90, 0.07) 55%, transparent 100%),
       radial-gradient(ellipse calc(15px * var(--beam-spike2-${c})) calc(30px * var(--beam-h-${c})) at 64% calc(100% - 4px), rgba(85, 85, 85, 0.28), rgba(85, 85, 85, 0.09) 50%, transparent 100%),
       radial-gradient(ellipse calc(12px * var(--beam-spike-${c})) calc(28px * var(--beam-h-${c})) at 78% calc(100% - 2px), rgba(95, 95, 95, 0.24), rgba(95, 95, 95, 0.08) 50%, transparent 100%),
       radial-gradient(ellipse calc(17px * var(--beam-spike-${c})) calc(26px * var(--beam-h-${c})) at 92% calc(100% - 3px), rgba(75, 75, 75, 0.26), rgba(75, 75, 75, 0.08) 50%, transparent 100%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${c})) calc(32px * var(--beam-h-${c})) at calc(var(--beam-x-${c}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}if(r){let e=b(i,.49);return`radial-gradient(ellipse calc(0.8px * var(--beam-spike-${t})) calc(92px * var(--beam-h-${t})) at 8% calc(100% - 2px), ${o}, ${o} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${t})) calc(35px * var(--beam-h-${t})) at 22% calc(100% - 4px), ${i}, ${e} 50%, transparent 95%),
       radial-gradient(ellipse calc(2px * (2 - var(--beam-spike-${t}))) calc(72px * var(--beam-h-${t})) at 36% calc(100% - 3px), ${s[0].color1}, ${s[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${t})) calc(28px * var(--beam-h-${t})) at 50% calc(100% - 2px), ${s[1].color1}, ${s[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(1.2px * (2 - var(--beam-spike2-${t}))) calc(85px * var(--beam-h-${t})) at 64% calc(100% - 4px), ${s[2].color1}, ${s[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${t})) calc(45px * var(--beam-h-${t})) at 78% calc(100% - 2px), ${s[3].color1}, ${s[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(0.6px * (2 - var(--beam-spike-${t}))) calc(60px * var(--beam-h-${t})) at 92% calc(100% - 3px), ${s[4].color1}, ${s[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${t})) calc(15px * var(--beam-spike2-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100% + 1px), rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${t})) calc(40px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) 100%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.03) 55%, transparent 80%)`}{let e=b(o,.85),r=b(i,.7);return`radial-gradient(ellipse calc(0.8px * var(--beam-spike-${t})) calc(92px * var(--beam-h-${t})) at 8% calc(100% - 2px), ${o}, ${e} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${t})) calc(35px * var(--beam-h-${t})) at 22% calc(100% - 4px), ${i}, ${r} 50%, transparent 95%),
       radial-gradient(ellipse calc(2px * (2 - var(--beam-spike-${t}))) calc(72px * var(--beam-h-${t})) at 36% calc(100% - 3px), ${s[0].color1}, ${s[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${t})) calc(28px * var(--beam-h-${t})) at 50% calc(100% - 2px), ${s[1].color1}, ${s[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(1.2px * (2 - var(--beam-spike2-${t}))) calc(85px * var(--beam-h-${t})) at 64% calc(100% - 4px), ${s[2].color1}, ${s[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${t})) calc(45px * var(--beam-h-${t})) at 78% calc(100% - 2px), ${s[3].color1}, ${s[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(1px * (2 - var(--beam-spike-${t}))) calc(60px * var(--beam-h-${t})) at 92% calc(100% - 3px), ${s[4].color1}, ${s[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${t})) calc(32px * var(--beam-h-${t})) at calc(var(--beam-x-${t}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}(g,z,r);return`
@property --beam-x-${r} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${r} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${r} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${r} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${r} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${r} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${r} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${r}"] {
  position: relative;
  border-radius: ${t}px;
  overflow: hidden;
}

[data-beam="${r}"][data-active] {
  animation:
    beam-travel-${r} ${o}s linear infinite,
    beam-edge-fade-${r} ${o}s linear infinite,
    beam-breathe-${r} ${(1.3*o).toFixed(1)}s ease-in-out infinite,
    beam-spike-${r} ${(1.33*o).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${r} ${(1.7*o).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${r} 0.6s ease forwards;
}

[data-beam="${r}"][data-fading] {
  animation:
    beam-travel-${r} ${o}s linear infinite,
    beam-edge-fade-${r} ${o}s linear infinite,
    beam-breathe-${r} ${(1.3*o).toFixed(1)}s ease-in-out infinite,
    beam-spike-${r} ${(1.33*o).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${r} ${(1.7*o).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${r} 0.5s ease forwards;
}

[data-beam="${r}"][data-active]::after,
[data-beam="${r}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  padding: ${a}px;
  clip-path: inset(0 round ${t}px);
  background: ${H}, ${W};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${r})) calc(60px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${r})) calc(60px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${r}) * var(--beam-edge-${r}) * ${i.toFixed(2)} * var(--beam-strength, 1));
  ${y}
}

[data-beam="${r}"][data-active]::before,
[data-beam="${r}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  background: ${C};
  box-shadow: inset 0 0 9px 1px ${d};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${r})) calc(60px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${r})) calc(60px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${r}) * var(--beam-edge-${r}) * ${s.toFixed(2)} * var(--beam-strength, 1));
  clip-path: inset(0 round ${t}px);
  ${y}
}

[data-beam="${r}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  clip-path: inset(0 round ${t}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${r})) calc(110px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${r})) calc(110px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${X};
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${r}"][data-active] [data-beam-bloom],
[data-beam="${r}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${r}) * var(--beam-edge-${r}) * ${l.toFixed(2)} * var(--beam-strength, 1));
  ${w}
}

@keyframes beam-travel-${r} {
  0%   { --beam-x-${r}: 0.06;  --beam-w-${r}: 0.5; }
  10%  { --beam-x-${r}: 0.15;  --beam-w-${r}: 0.8; }
  20%  { --beam-x-${r}: 0.25;  --beam-w-${r}: 1.1; }
  30%  { --beam-x-${r}: 0.35;  --beam-w-${r}: 1.3; }
  40%  { --beam-x-${r}: 0.44;  --beam-w-${r}: 1.45; }
  50%  { --beam-x-${r}: 0.5;   --beam-w-${r}: 1.5; }
  60%  { --beam-x-${r}: 0.56;  --beam-w-${r}: 1.45; }
  70%  { --beam-x-${r}: 0.65;  --beam-w-${r}: 1.3; }
  80%  { --beam-x-${r}: 0.75;  --beam-w-${r}: 1.1; }
  90%  { --beam-x-${r}: 0.85;  --beam-w-${r}: 0.8; }
  100% { --beam-x-${r}: 0.94;  --beam-w-${r}: 0.5; }
}

@keyframes beam-edge-fade-${r} {
  0%    { --beam-edge-${r}: 0; }
  12.5% { --beam-edge-${r}: 0; }
  32.5% { --beam-edge-${r}: 1; }
  67.5% { --beam-edge-${r}: 1; }
  87.5% { --beam-edge-${r}: 0; }
  100%  { --beam-edge-${r}: 0; }
}

@keyframes beam-breathe-${r} {
  0%, 100% { --beam-h-${r}: 0.8; }
  25%      { --beam-h-${r}: 1.25; }
  55%      { --beam-h-${r}: 0.85; }
  80%      { --beam-h-${r}: 1.3; }
}

@keyframes beam-spike-${r} {
  0%   { --beam-spike-${r}: 0.8; }
  25%  { --beam-spike-${r}: 1.3; }
  50%  { --beam-spike-${r}: 0.9; }
  75%  { --beam-spike-${r}: 1.4; }
  100% { --beam-spike-${r}: 0.8; }
}

@keyframes beam-spike2-${r} {
  0%   { --beam-spike2-${r}: 1.2; }
  25%  { --beam-spike2-${r}: 0.7; }
  50%  { --beam-spike2-${r}: 1.4; }
  75%  { --beam-spike2-${r}: 0.8; }
  100% { --beam-spike2-${r}: 1.2; }
}

@keyframes beam-fade-in-${r} {
  to { --beam-opacity-${r}: 1; }
}

@keyframes beam-fade-out-${r} {
  from { --beam-opacity-${r}: 1; }
  to { --beam-opacity-${r}: 0; }
}
${k}
`}(e):"sm"===r?function(e){let{id:r,borderRadius:t,borderWidth:a,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:n,innerShadow:c,colorVariant:p,staticColors:f,brightness:b,saturation:d,hueRange:g,theme:u}=e,m=Math.max(0,t-a),x="mono"===p?.5:1,h=f?"":`animation: beam-hue-shift-${r} 12s ease-in-out infinite;`,v=f?"":`
@keyframes beam-hue-shift-${r} {
  0% { filter: hue-rotate(-${g}deg) brightness(${b.toFixed(2)}) saturate(${d.toFixed(2)}); }
  50% { filter: hue-rotate(${g}deg) brightness(${b.toFixed(2)}) saturate(${d.toFixed(2)}); }
  100% { filter: hue-rotate(-${g}deg) brightness(${b.toFixed(2)}) saturate(${d.toFixed(2)}); }
}`,$="dark"===u,z=$?`conic-gradient(
        from var(--beam-angle-${r}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${r}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,y=l[p].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),w=l[p].inner.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),k=$?`conic-gradient(
        from var(--beam-angle-${r}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${r}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`,H=`conic-gradient(
    from var(--beam-angle-${r}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${r} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${r} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${r}"] {
  position: relative;
  border-radius: ${t}px;
  overflow: hidden;
}

[data-beam="${r}"][data-active] {
  animation:
    beam-spin-${r} ${o}s linear infinite,
    beam-fade-in-${r} 0.6s ease forwards;
}

[data-beam="${r}"][data-fading] {
  animation:
    beam-spin-${r} ${o}s linear infinite,
    beam-fade-out-${r} 0.5s ease forwards;
}

[data-beam="${r}"][data-active]::after,
[data-beam="${r}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  padding: ${a}px;
  clip-path: inset(0 round ${t}px);
  background: ${z},${y};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${r}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${r}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${r}) * ${(i*x).toFixed(2)} * var(--beam-strength, 1));
  ${h}
}

[data-beam="${r}"][data-active]::before,
[data-beam="${r}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  clip-path: inset(0 round ${t}px);
  background: ${w};
  box-shadow: inset 0 0 5px 1px ${c};
  -webkit-mask-image: ${H};
  -webkit-mask-composite: source-over;
  mask-image: ${H};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${r}) * ${(s*x).toFixed(2)} * var(--beam-strength, 1));
  ${h}
}

[data-beam="${r}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  clip-path: inset(0 round ${t}px);
  background: ${k};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${a}px;
  filter: blur(8px) brightness(${b.toFixed(2)}) saturate(${d.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${r}"][data-active] [data-beam-bloom],
[data-beam="${r}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${r}) * ${(n*x).toFixed(2)} * var(--beam-strength, 1));
}

@keyframes beam-spin-${r} {
  to { --beam-angle-${r}: 360deg; }
}

@keyframes beam-fade-in-${r} {
  to { --beam-opacity-${r}: 1; }
}

@keyframes beam-fade-out-${r} {
  from { --beam-opacity-${r}: 1; }
  to { --beam-opacity-${r}: 0; }
}
${v}
`}(e):function(e){let{id:r,borderRadius:t,borderWidth:a,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:l,innerShadow:c,colorVariant:p,staticColors:f,brightness:b,saturation:d,hueRange:g,theme:u}=e,m=Math.max(0,t-a),x="mono"===p?.5:1,h=f?"":`animation: beam-hue-shift-${r} 12s ease-in-out infinite;`,v=f?"":`
@keyframes beam-hue-shift-${r} {
  0% { filter: hue-rotate(-${g}deg) brightness(${b.toFixed(2)}) saturate(${d.toFixed(2)}); }
  50% { filter: hue-rotate(${g}deg) brightness(${b.toFixed(2)}) saturate(${d.toFixed(2)}); }
  100% { filter: hue-rotate(-${g}deg) brightness(${b.toFixed(2)}) saturate(${d.toFixed(2)}); }
}`,$="dark"===u,z=$?`conic-gradient(
        from var(--beam-angle-${r}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${r}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,y=n[p].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),w=function(e){let r=n[e],t="mono"===e?.225:.45;return r.border.map(e=>{let r=e.color.replace("rgb(","rgba(").replace(")",`, ${t})`);return`radial-gradient(ellipse ${e.size.split(" ").map(e=>{let r=parseInt(e);return`${Math.round(.9*r)}px`}).join(" ")} at ${e.pos}, ${r}, transparent)`}).join(`,
    `)}(p),k=$?`conic-gradient(
        from var(--beam-angle-${r}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${r}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;return`
@property --beam-angle-${r} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${r} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${r}"] {
  position: relative;
  border-radius: ${t}px;
  overflow: hidden;
}

[data-beam="${r}"][data-active] {
  animation:
    beam-spin-${r} ${o}s linear infinite,
    beam-fade-in-${r} 0.6s ease forwards;
}

[data-beam="${r}"][data-fading] {
  animation:
    beam-spin-${r} ${o}s linear infinite,
    beam-fade-out-${r} 0.5s ease forwards;
}

[data-beam="${r}"][data-active]::after,
[data-beam="${r}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  padding: ${a}px;
  clip-path: inset(0 round ${t}px);
  background: ${z},${y};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${r}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${r}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${r}) * ${(i*x).toFixed(2)} * var(--beam-strength, 1));
  ${h}
}

[data-beam="${r}"][data-active]::before,
[data-beam="${r}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${t}px;
  background: ${w};
  box-shadow: inset 0 0 9px 1px ${c};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${r}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${r}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${r}) * ${(s*x).toFixed(2)} * var(--beam-strength, 1));
  clip-path: inset(0 round ${t}px);
  ${h}
}

[data-beam="${r}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${m}px;
  clip-path: inset(0 round ${t}px);
  background: ${k};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${a}px;
  filter: blur(8px) brightness(${b.toFixed(2)}) saturate(${d.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${r}"][data-active] [data-beam-bloom],
[data-beam="${r}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${r}) * ${(l*x).toFixed(2)} * var(--beam-strength, 1));
}

@keyframes beam-spin-${r} {
  to { --beam-angle-${r}: 360deg; }
}

@keyframes beam-fade-in-${r} {
  to { --beam-opacity-${r}: 1; }
}

@keyframes beam-fade-out-${r} {
  from { --beam-opacity-${r}: 1; }
  to { --beam-opacity-${r}: 0; }
}
${v}
`}(e)})({id:Y,borderRadius:I,borderWidth:P.borderWidth,duration:D,strokeOpacity:A.strokeOpacity,innerOpacity:A.innerOpacity,bloomOpacity:A.bloomOpacity,innerShadow:A.innerShadow,size:r,colorVariant:t,staticColors:B,brightness:h,saturation:K,hueRange:_,theme:N}),[Y,I,P.borderWidth,D,A.strokeOpacity,A.innerOpacity,A.bloomOpacity,A.innerShadow,r,t,B,h,K,_,N]),G=(0,o.useCallback)(e=>{R.current=e,"function"==typeof X?X(e):X&&(X.current=e)},[X]),U={...w??{},"--beam-strength":Math.max(0,Math.min(1,z))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:V}),(0,a.jsxs)("div",{...C,ref:G,"data-beam":Y,"data-active":T&&!E?"":void 0,"data-fading":E?"":void 0,className:y,style:U,onAnimationEnd:F,children:[e,(0,a.jsx)("div",{"data-beam-bloom":!0})]})]})})},4893:(e,r,t)=>{t.d(r,{A:()=>a});let a=(0,t(7479).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},8431:(e,r,t)=>{function a(e,r,t){if(!r.has(e))throw TypeError("attempted to "+t+" private field on non-instance");return r.get(e)}function o(e,r){var t=a(e,r,"get");return t.get?t.get.call(e):t.value}function i(e,r,t){var o=a(e,r,"set");if(o.set)o.set.call(e,t);else{if(!o.writable)throw TypeError("attempted to set read only private field");o.value=t}return t}t.d(r,{N:()=>b});var s,n=t(8047),l=t(7939),c=t(1395),p=t(9821),f=t(4039);function b(e){let r=e+"CollectionProvider",[t,a]=(0,l.A)(r),[o,i]=t(r,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:r,children:t}=e,a=n.useRef(null),i=n.useRef(new Map).current;return(0,f.jsx)(o,{scope:r,itemMap:i,collectionRef:a,children:t})};s.displayName=r;let b=e+"CollectionSlot",d=(0,p.TL)(b),g=n.forwardRef((e,r)=>{let{scope:t,children:a}=e,o=i(b,t),s=(0,c.s)(r,o.collectionRef);return(0,f.jsx)(d,{ref:s,children:a})});g.displayName=b;let u=e+"CollectionItemSlot",m="data-radix-collection-item",x=(0,p.TL)(u),h=n.forwardRef((e,r)=>{let{scope:t,children:a,...o}=e,s=n.useRef(null),l=(0,c.s)(r,s),p=i(u,t);return n.useEffect(()=>(p.itemMap.set(s,{ref:s,...o}),()=>void p.itemMap.delete(s))),(0,f.jsx)(x,{...{[m]:""},ref:l,children:a})});return h.displayName=u,[{Provider:s,Slot:g,ItemSlot:h},function(r){let t=i(e+"CollectionConsumer",r);return n.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},a]}var d=new WeakMap;function g(e,r){if("at"in Array.prototype)return Array.prototype.at.call(e,r);let t=function(e,r){let t=e.length,a=u(r),o=a>=0?a:t+a;return o<0||o>=t?-1:o}(e,r);return -1===t?void 0:e[t]}function u(e){return e!=e||0===e?0:Math.trunc(e)}s=new WeakMap,class e extends Map{set(e,r){return d.get(this)&&(this.has(e)?o(this,s)[o(this,s).indexOf(e)]=e:o(this,s).push(e)),super.set(e,r),this}insert(e,r,t){let a,i=this.has(r),n=o(this,s).length,l=u(e),c=l>=0?l:n+l,p=c<0||c>=n?-1:c;if(p===this.size||i&&p===this.size-1||-1===p)return this.set(r,t),this;let f=this.size+ +!i;l<0&&c++;let b=[...o(this,s)],d=!1;for(let e=c;e<f;e++)if(c===e){let o=b[e];b[e]===r&&(o=b[e+1]),i&&this.delete(r),a=this.get(o),this.set(r,t)}else{d||b[e-1]!==r||(d=!0);let t=b[d?e:e-1],o=a;a=this.get(t),this.delete(t),this.set(t,o)}return this}with(r,t,a){let o=new e(this);return o.insert(r,t,a),o}before(e){let r=o(this,s).indexOf(e)-1;if(!(r<0))return this.entryAt(r)}setBefore(e,r,t){let a=o(this,s).indexOf(e);return -1===a?this:this.insert(a,r,t)}after(e){let r=o(this,s).indexOf(e);if(-1!==(r=-1===r||r===this.size-1?-1:r+1))return this.entryAt(r)}setAfter(e,r,t){let a=o(this,s).indexOf(e);return -1===a?this:this.insert(a+1,r,t)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return i(this,s,[]),super.clear()}delete(e){let r=super.delete(e);return r&&o(this,s).splice(o(this,s).indexOf(e),1),r}deleteAt(e){let r=this.keyAt(e);return void 0!==r&&this.delete(r)}at(e){let r=g(o(this,s),e);if(void 0!==r)return this.get(r)}entryAt(e){let r=g(o(this,s),e);if(void 0!==r)return[r,this.get(r)]}indexOf(e){return o(this,s).indexOf(e)}keyAt(e){return g(o(this,s),e)}from(e,r){let t=this.indexOf(e);if(-1===t)return;let a=t+r;return a<0&&(a=0),a>=this.size&&(a=this.size-1),this.at(a)}keyFrom(e,r){let t=this.indexOf(e);if(-1===t)return;let a=t+r;return a<0&&(a=0),a>=this.size&&(a=this.size-1),this.keyAt(a)}find(e,r){let t=0;for(let a of this){if(Reflect.apply(e,r,[a,t,this]))return a;t++}}findIndex(e,r){let t=0;for(let a of this){if(Reflect.apply(e,r,[a,t,this]))return t;t++}return -1}filter(r,t){let a=[],o=0;for(let e of this)Reflect.apply(r,t,[e,o,this])&&a.push(e),o++;return new e(a)}map(r,t){let a=[],o=0;for(let e of this)a.push([e[0],Reflect.apply(r,t,[e,o,this])]),o++;return new e(a)}reduce(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];let[a,o]=r,i=0,s=null!=o?o:this.at(0);for(let e of this)s=0===i&&1===r.length?e:Reflect.apply(a,this,[s,e,i,this]),i++;return s}reduceRight(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];let[a,o]=r,i=null!=o?o:this.at(-1);for(let e=this.size-1;e>=0;e--){let t=this.at(e);i=e===this.size-1&&1===r.length?t:Reflect.apply(a,this,[i,t,e,this])}return i}toSorted(r){return new e([...this.entries()].sort(r))}toReversed(){let r=new e;for(let e=this.size-1;e>=0;e--){let t=this.keyAt(e),a=this.get(t);r.set(t,a)}return r}toSpliced(){for(var r=arguments.length,t=Array(r),a=0;a<r;a++)t[a]=arguments[a];let o=[...this.entries()];return o.splice(...t),new e(o)}slice(r,t){let a=new e,o=this.size-1;if(void 0===r)return a;r<0&&(r+=this.size),void 0!==t&&t>0&&(o=t-1);for(let e=r;e<=o;e++){let r=this.keyAt(e),t=this.get(r);a.set(r,t)}return a}every(e,r){let t=0;for(let a of this){if(!Reflect.apply(e,r,[a,t,this]))return!1;t++}return!0}some(e,r){let t=0;for(let a of this){if(Reflect.apply(e,r,[a,t,this]))return!0;t++}return!1}constructor(e){super(e),function(e,r,t){if(r.has(e))throw TypeError("Cannot initialize the same private elements twice on an object");r.set(e,t)}(this,s,{writable:!0,value:void 0}),i(this,s,[...super.keys()]),d.set(this,!0)}}},9388:(e,r,t)=>{t.d(r,{jH:()=>i});var a=t(8047);t(4039);var o=a.createContext(void 0);function i(e){let r=a.useContext(o);return e||r||"ltr"}}}]);