import{D as W,E as q,Ha as X,I as Y,Ib as J,Ma as m,Oa as I,Ub as K,Vb as Z,Yb as tt,Zb as et,_b as nt,ea as G,ia as D}from"./chunk-7GPB2QO2.js";import{$b as B,D as b,Da as f,Ea as _,Fa as R,L as A,M as w,Mc as U,Ob as u,Pb as v,Qb as r,Rb as F,Sb as C,Wb as g,Xa as H,Xb as l,Yb as k,Zb as N,_b as V,dc as M,ec as p,ed as y,fc as P,gc as x,hc as Q,ic as z,id as $,jc as E,ka as S,kc as L,kd as T,sa as h,sc as O,wb as c,xb as d,zb as j}from"./chunk-C3KKHK7H.js";var at=["tuiLink",""],rt=["*"];function st(e,o){if(e&1&&k(0,"tui-svg",3),e&2){let t=p();r("src",t.icon||"")}}function dt(e,o){if(e&1&&k(0,"tui-svg",4),e&2){let t=p();r("src",t.icon||"")}}var Dt=(()=>{class e{constructor(t,n,a){this.el=t,this.mode$=n,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=w(D(this.el.nativeElement,"focusin").pipe(b(q)),D(this.el.nativeElement,"focusout").pipe(b(W))),a.subscribe(s=>{this.focusVisible=s})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return G(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&this.iconAlign==="left"}get iconAlignRight(){return this.hasIcon&&this.iconAlign==="right"}}return e.\u0275fac=function(t){return new(t||e)(d(H),d(J),d(I))},e.\u0275cmp=f({type:e,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(t,n){t&1&&M("$.data-mode.attr",function(){return n.mode$}),t&2&&(v("data-host-mode",n.mode),C("_pseudo",n.pseudo)("_icon-rotated",n.iconRotated)("_focus-visible",n.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[O([X(e),I,m,tt])],attrs:at,ngContentSelectors:rt,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(t,n){t&1&&(P(),u(0,st,1,1,"tui-svg",0),g(1,"span",1),x(2),l(),u(3,dt,1,1,"tui-svg",2)),t&2&&(r("ngIf",n.iconAlignLeft),c(3),r("ngIf",n.iconAlignRight))},dependencies:[K,y],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})(),It=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_({type:e}),e.\u0275inj=h({imports:[[T,Z]]}),e})();var ct=["wrapper"],ut=["*"];function pt(e,o){if(e&1&&(g(0,"tui-loader",4),B(1,5),l()),e&2){let t=p(2);r("overlay",!0)("showLoader",t.loading),c(),r("ngTemplateOutlet",t.content)}}function gt(e,o){if(e&1&&(N(0),x(1),u(2,pt,2,3,"tui-loader",3),V()),e&2){let t=p();c(2),r("ngIf",t.async)("ngIfElse",t.content)}}var lt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=R({type:e,selectors:[["","tuiExpandContent",""]]}),e})(),i={Idle:0,Loading:1,Prepared:2,Animated:3},mt=48,Jt=(()=>{class e{constructor(t,n){this.cdr=t,this.destroy$=n,this.state=i.Idle,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(t){if(this.expanded===null){this.expanded=t;return}if(this.state!==i.Idle){this.expanded=t,this.state=i.Animated;return}this.expanded=t,this.retrigger(this.async&&t?i.Loading:i.Animated)}get overflow(){return this.state!==i.Idle}get loading(){return!!this.expanded&&this.async&&this.state===i.Loading}get height(){let{expanded:t,state:n,contentWrapper:a}=this;return t&&n===i.Prepared||!t&&n===i.Animated?0:a&&(!t&&n===i.Prepared||t&&n===i.Animated)?a.nativeElement.offsetHeight:a&&t&&n===i.Loading?Math.max(a.nativeElement.offsetHeight,mt):null}get contentVisible(){return this.expanded||this.state!==i.Idle}onTransitionEnd({propertyName:t,pseudoElement:n}){t==="opacity"&&!n&&this.state===i.Animated&&(this.state=i.Idle)}onExpandLoaded(t){t.stopPropagation(),this.state===i.Loading&&this.retrigger(i.Animated)}retrigger(t){this.state=i.Prepared,A(0).pipe(S(this.destroy$)).subscribe(()=>{this.state===i.Prepared&&(this.state=t,this.cdr.markForCheck())})}}return e.\u0275fac=function(t){return new(t||e)(d(U),d(m,2))},e.\u0275cmp=f({type:e,selectors:[["tui-expand"]],contentQueries:function(t,n,a){if(t&1&&Q(a,lt,5,j),t&2){let s;E(s=L())&&(n.content=s.first)}},viewQuery:function(t,n){if(t&1&&z(ct,5),t&2){let a;E(a=L())&&(n.contentWrapper=a.first)}},hostVars:9,hostBindings:function(t,n){t&1&&M("transitionend.self",function(s){return n.onTransitionEnd(s)})("tui-expand-loaded",function(s){return n.onExpandLoaded(s)}),t&2&&(v("aria-expanded",n.expanded),F("height",n.height,"px"),C("_expanded",n.expanded)("_overflow",n.overflow)("_loading",n.loading))},inputs:{async:"async",expandedSetter:[0,"expanded","expandedSetter"]},features:[O([m])],ngContentSelectors:ut,decls:3,vars:3,consts:[["wrapper",""],[1,"t-wrapper"],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(t,n){t&1&&(P(),g(0,"div",1,0),u(2,gt,3,2,"ng-container",2),l()),t&2&&(r("@tuiParentAnimation",void 0)("@.disabled",n.overflow),c(2),r("ngIf",n.contentVisible))},dependencies:[et,y,$],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[Y]},changeDetection:0}),e})(),Kt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_({type:e}),e.\u0275inj=h({imports:[[T,nt]]}),e})();export{Dt as a,It as b,Jt as c,Kt as d};
