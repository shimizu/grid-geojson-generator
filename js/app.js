/*! For license information please see app.js.LICENSE.txt */
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),L_=qg(M_||(M_=O_`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),k_=qg(C_||(C_=O_`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),D_=Xd("span",{name:"MuiTouchRipple",slot:"Root",skipSx:!0})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),N_=Xd((function(t){const{className:e,classes:n,pulsate:r=!1,rippleX:i,rippleY:o,rippleSize:s,in:a,onExited:u,timeout:c}=t,[h,p]=l.useState(!1),f=Rf(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),d={width:s,height:s,top:-s/2+o,left:-s/2+i},g=Rf(n.child,h&&n.childLeaving,r&&n.childPulsate);return a||h||p(!0),l.useEffect((()=>{if(!a&&null!=u){const t=setTimeout(u,c);return()=>{clearTimeout(t)}}}),[u,a,c]),(0,cp.jsx)("span",{className:f,style:d,children:(0,cp.jsx)("span",{className:g})})}),{name:"MuiTouchRipple",slot:"Ripple"})(I_||(I_=O_`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),S_.rippleVisible,R_,550,(({theme:t})=>t.transitions.easing.easeInOut),S_.ripplePulsate,(({theme:t})=>t.transitions.duration.shorter),S_.child,S_.childLeaving,L_,550,(({theme:t})=>t.transitions.easing.easeInOut),S_.childPulsate,k_,(({theme:t})=>t.transitions.easing.easeInOut)),F_=l.forwardRef((function(t,e){const n=$d({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:i={},className:o}=n,s=Ne(n,T_),[a,u]=l.useState([]),c=l.useRef(0),h=l.useRef(null);l.useEffect((()=>{h.current&&(h.current(),h.current=null)}),[a]);const p=l.useRef(!1),f=l.useRef(null),d=l.useRef(null),g=l.useRef(null);l.useEffect((()=>()=>{clearTimeout(f.current)}),[]);const m=l.useCallback((t=>{const{pulsate:e,rippleX:n,rippleY:r,rippleSize:o,cb:s}=t;u((t=>[...t,(0,cp.jsx)(N_,{classes:{ripple:Rf(i.ripple,S_.ripple),rippleVisible:Rf(i.rippleVisible,S_.rippleVisible),ripplePulsate:Rf(i.ripplePulsate,S_.ripplePulsate),child:Rf(i.child,S_.child),childLeaving:Rf(i.childLeaving,S_.childLeaving),childPulsate:Rf(i.childPulsate,S_.childPulsate)},timeout:550,pulsate:e,rippleX:n,rippleY:r,rippleSize:o},c.current)])),c.current+=1,h.current=s}),[i]),A=l.useCallback(((t={},e={},n)=>{const{pulsate:i=!1,center:o=r||e.pulsate,fakeElement:s=!1}=e;if("mousedown"===t.type&&p.current)return void(p.current=!1);"touchstart"===t.type&&(p.current=!0);const a=s?null:g.current,l=a?a.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,h;if(o||0===t.clientX&&0===t.clientY||!t.clientX&&!t.touches)u=Math.round(l.width/2),c=Math.round(l.height/2);else{const{clientX:e,clientY:n}=t.touches?t.touches[0]:t;u=Math.round(e-l.left),c=Math.round(n-l.top)}if(o)h=Math.sqrt((2*l.width**2+l.height**2)/3),h%2==0&&(h+=1);else{const t=2*Math.max(Math.abs((a?a.clientWidth:0)-u),u)+2,e=2*Math.max(Math.abs((a?a.clientHeight:0)-c),c)+2;h=Math.sqrt(t**2+e**2)}t.touches?null===d.current&&(d.current=()=>{m({pulsate:i,rippleX:u,rippleY:c,rippleSize:h,cb:n})},f.current=setTimeout((()=>{d.current&&(d.current(),d.current=null)}),80)):m({pulsate:i,rippleX:u,rippleY:c,rippleSize:h,cb:n})}),[r,m]),y=l.useCallback((()=>{A({},{pulsate:!0})}),[A]),_=l.useCallback(((t,e)=>{if(clearTimeout(f.current),"touchend"===t.type&&d.current)return d.current(),d.current=null,void(f.current=setTimeout((()=>{_(t,e)})));d.current=null,u((t=>t.length>0?t.slice(1):t)),h.current=e}),[]);return l.useImperativeHandle(e,(()=>({pulsate:y,start:A,stop:_})),[y,A,_]),(0,cp.jsx)(D_,E({className:Rf(i.root,S_.root,o),ref:g},s,{children:(0,cp.jsx)(E_,{component:null,exit:!0,children:a})}))})),B_=F_;function z_(t){return Qd("MuiButtonBase",t)}const j_=Kd("MuiButtonBase",["root","disabled","focusVisible"]),U_=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","type"],V_=Xd("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${j_.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),G_=l.forwardRef((function(t,e){const n=$d({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:i=!1,children:o,className:s,component:a="button",disabled:u=!1,disableRipple:c=!1,disableTouchRipple:h=!1,focusRipple:p=!1,LinkComponent:f="a",onBlur:d,onClick:g,onContextMenu:m,onDragLeave:A,onFocus:y,onFocusVisible:_,onKeyDown:v,onKeyUp:b,onMouseDown:x,onMouseLeave:w,onMouseUp:S,onTouchEnd:T,onTouchMove:P,onTouchStart:M,tabIndex:C=0,TouchRippleProps:I,type:O}=n,R=Ne(n,U_),L=l.useRef(null),k=l.useRef(null),{isFocusVisibleRef:D,onFocus:N,onBlur:F,ref:B}=y_(),[z,j]=l.useState(!1);function U(t,e,n=h){return c_((r=>(e&&e(r),!n&&k.current&&k.current[t](r),!0)))}u&&z&&j(!1),l.useImperativeHandle(r,(()=>({focusVisible:()=>{j(!0),L.current.focus()}})),[]),l.useEffect((()=>{z&&p&&!c&&k.current.pulsate()}),[c,p,z]);const V=U("start",x),G=U("stop",m),Z=U("stop",A),q=U("stop",S),W=U("stop",(t=>{z&&t.preventDefault(),w&&w(t)})),H=U("start",M),X=U("stop",T),$=U("stop",P),Y=U("stop",(t=>{F(t),!1===D.current&&j(!1),d&&d(t)}),!1),Q=c_((t=>{L.current||(L.current=t.currentTarget),N(t),!0===D.current&&(j(!0),_&&_(t)),y&&y(t)})),K=()=>{const t=L.current;return a&&"button"!==a&&!("A"===t.tagName&&t.href)},J=l.useRef(!1),tt=c_((t=>{p&&!J.current&&z&&k.current&&" "===t.key&&(J.current=!0,k.current.stop(t,(()=>{k.current.start(t)}))),t.target===t.currentTarget&&K()&&" "===t.key&&t.preventDefault(),v&&v(t),t.target===t.currentTarget&&K()&&"Enter"===t.key&&!u&&(t.preventDefault(),g&&g(t))})),et=c_((t=>{p&&" "===t.key&&k.current&&z&&!t.defaultPrevented&&(J.current=!1,k.current.stop(t,(()=>{k.current.pulsate(t)}))),b&&b(t),g&&t.target===t.currentTarget&&K()&&" "===t.key&&!t.defaultPrevented&&g(t)}));let nt=a;"button"===nt&&(R.href||R.to)&&(nt=f);const rt={};"button"===nt?(rt.type=void 0===O?"button":O,rt.disabled=u):(R.href||R.to||(rt.role="button"),u&&(rt["aria-disabled"]=u));const it=Og(B,L),ot=Og(e,it),[st,at]=l.useState(!1);l.useEffect((()=>{at(!0)}),[]);const lt=st&&!c&&!u,ut=E({},n,{centerRipple:i,component:a,disabled:u,disableRipple:c,disableTouchRipple:h,focusRipple:p,tabIndex:C,focusVisible:z}),ct=(t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:i}=t,o=Lf({root:["root",e&&"disabled",n&&"focusVisible"]},z_,i);return n&&r&&(o.root+=` ${r}`),o})(ut);return(0,cp.jsxs)(V_,E({as:nt,className:Rf(ct.root,s),ownerState:ut,onBlur:Y,onClick:g,onContextMenu:G,onFocus:Q,onKeyDown:tt,onKeyUp:et,onMouseDown:V,onMouseLeave:W,onMouseUp:q,onDragLeave:Z,onTouchEnd:X,onTouchMove:$,onTouchStart:H,ref:ot,tabIndex:u?-1:C,type:O},rt,R,{children:[o,lt?(0,cp.jsx)(B_,E({ref:k,center:i},I)):null]}))})),Z_=G_,q_=Kd("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),W_=Kd("MuiListItemIcon",["root","alignItemsFlexStart"]),H_=Kd("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function X_(t){return Qd("MuiMenuItem",t)}const $_=Kd("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Y_=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],Q_=Xd(Z_,{shouldForwardProp:t=>qd(t)||"classes"===t,name:"MuiMenuItem",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.dense&&e.dense,n.divider&&e.divider,!n.disableGutters&&e.gutters]}})((({theme:t,ownerState:e})=>E({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${t.palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:t.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$_.selected}`]:{backgroundColor:ah(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${$_.focusVisible}`]:{backgroundColor:ah(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${$_.selected}:hover`]:{backgroundColor:ah(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:ah(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${$_.focusVisible}`]:{backgroundColor:t.palette.action.focus},[`&.${$_.disabled}`]:{opacity:t.palette.action.disabledOpacity},[`& + .${q_.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${q_.inset}`]:{marginLeft:52},[`& .${H_.root}`]:{marginTop:0,marginBottom:0},[`& .${H_.inset}`]:{paddingLeft:36},[`& .${W_.root}`]:{minWidth:36}},!e.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&E({minHeight:36},t.typography.body2,{[`& .${W_.root} svg`]:{fontSize:"1.25rem"}})))),K_=l.forwardRef((function(t,e){const n=$d({props:t,name:"MuiMenuItem"}),{autoFocus:r=!1,component:i="li",dense:o=!1,divider:s=!1,disableGutters:a=!1,focusVisibleClassName:u,role:c="menuitem",tabIndex:h}=n,p=Ne(n,Y_),f=l.useContext(Jm),d={dense:o||f.dense||!1,disableGutters:a},g=l.useRef(null);Lg((()=>{r&&g.current&&g.current.focus()}),[r]);const m=E({},n,{dense:d.dense,divider:s,disableGutters:a}),A=(t=>{const{disabled:e,dense:n,divider:r,disableGutters:i,selected:o,classes:s}=t;return E({},s,Lf({root:["root",n&&"dense",e&&"disabled",!i&&"gutters",r&&"divider",o&&"selected"]},X_,s))})(n),y=Og(g,e);let _;return n.disabled||(_=void 0!==h?h:-1),(0,cp.jsx)(Jm.Provider,{value:d,children:(0,cp.jsx)(Q_,E({ref:y,role:c,tabIndex:_,component:i,focusVisibleClassName:Rf(A.focusVisible,u)},p,{ownerState:m,classes:A}))})})),J_=(0,l.memo)((t=>{const{Selectors:e,value:n,setValue:r}=t;return l.createElement(mg,null,l.createElement(wg,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0},"Select Grid Type"),l.createElement(Wm,{sx:{},variant:"filled"},l.createElement(r_,{value:n,onChange:t=>{r(t.target.value)}},e.map((t=>l.createElement(K_,{key:t.label,value:t.value},t.label))))))})),tv=(0,l.memo)((t=>{const{defaultValue:e,setValue:n}=t;return l.createElement(mg,null,l.createElement(wg,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0},"CellSize"),l.createElement(Wm,{sx:{width:"10ch"},variant:"filled"},l.createElement(l_,{variant:"filled",id:"outlined-number",type:"number",label:"km",defaultValue:e,inputProps:{min:"0.1",max:"100",step:"0.1"},InputLabelProps:{shrink:!0},onChange:t=>{n(t.target.value)}})))}));var ev=n(1688);const nv=[];function rv(t){const{editGeojson:e,setEditGeojson:n}=t;return new ev.nk({id:"edit-layer",data:e,filled:!1,stroked:!1,mode:ev.By,selectedFeatureIndexes:nv,onEdit:t=>{const{updatedData:e}=t;e.features.length>1&&(e.features=[e.features[1]]),n((t=>e))}})}var iv=n(9026);function ov(t){const{gridGeojson:e,gridCellSize:n}=t;return new iv.Z({id:"geojson-layer",data:e,pickable:!0,stroked:!0,filled:!0,extruded:!1,pointType:"circle",lineWidthScale:1,lineWidthMinPixels:1,pointRadiusScale:40,getPointRadius:10*n,getFillColor:[160,160,180,200],getLineColor:[0,0,0,255],getLineWidth:1})}const sv=sp({palette:{mode:"dark"}}),av={latitude:35.73202612464274,longitude:137.53268402693763,zoom:7.5,minZoom:6},lv=[{label:"pointGrid",value:"pointGrid"},{label:"squareGrid",value:"squareGrid"},{label:"hexGrid",value:"hexGrid"},{label:"triangleGrid",value:"triangleGrid"}],uv=function({data:t}){const[e,n]=(0,l.useState)(av),[r,i]=(0,l.useState)({type:"FeatureCollection",features:[]}),[o,s]=(0,l.useState)({type:"FeatureCollection",features:[]}),[u,c]=(0,l.useState)("pointGrid"),[h,p]=(0,l.useState)(5);return(0,l.useEffect)((()=>{const t=Nr(r),e=a[u](t,h);s((()=>e))}),[r,u,h]),l.createElement("div",null,l.createElement(w,{initialViewState:e,controller:!0,layers:[rv({editGeojson:r,setEditGeojson:i}),ov({gridGeojson:o,gridCellSize:h})]},l.createElement(zt,{mapStyle:"mapbox://styles/shimizu/cjophihsq4qye2snwwz0i2pfa",mapboxApiAccessToken:"pk.eyJ1Ijoic2hpbWl6dSIsImEiOiJjajNsYW5qN2owMDQxMnducnRpdnZ3MW45In0.Sc-wkWbKtTc_wEk7AeuHxw"})),l.createElement(If,{theme:sv},l.createElement(pg,{sx:{position:"absolute",top:20,left:10}},l.createElement(ag,{sx:{display:"flex",width:"100%"},variant:"outlined"},l.createElement(J_,{Selectors:lv,value:u,setValue:c}),l.createElement(tv,{defaultValue:h,setValue:p}))),l.createElement(pg,{sx:{position:"absolute",bottom:20,right:10}},l.createElement(u_,{geojson:o}))))};var cv=n(3379),hv=n.n(cv),pv=n(7795),fv=n.n(pv),dv=n(569),gv=n.n(dv),mv=n(3565),Av=n.n(mv),yv=n(9216),_v=n.n(yv),vv=n(4589),bv=n.n(vv),xv=n(4120),wv={};function Ev(){return l.createElement(uv,null)}wv.styleTagTransform=bv(),wv.setAttributes=Av(),wv.insert=gv().bind(null,"head"),wv.domAPI=fv(),wv.insertStyleElement=_v(),hv()(xv.Z,wv),xv.Z&&xv.Z.locals&&xv.Z.locals,u.render(l.createElement(Ev,null),document.getElementById("app"))})()})();
//# sourceMappingURL=app.js.map