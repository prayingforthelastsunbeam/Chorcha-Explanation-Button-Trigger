import{$ as e,$t as t,At as n,Bt as r,C as i,Ct as a,D as o,Dt as s,E as c,Et as l,F as u,Ft as d,G as f,Ht as p,It as m,J as h,Jt as g,K as _,Kt as v,L as y,Lt as b,M as ee,N as te,Ot as x,P as ne,Pt as re,Q as ie,Qt as S,R as ae,Rt as C,S as oe,T as se,Tt as ce,Ut as w,V as le,Vt as ue,W as de,Wt as T,X as E,Y as fe,Z as pe,Zt as D,_ as O,_t as me,at as he,b as ge,cn as k,ct as _e,d as A,dn as ve,en as j,et as M,f as ye,ft as be,g as xe,ht as Se,i as Ce,it as N,j as we,jt as Te,kt as Ee,ln as P,m as De,mt as Oe,n as ke,nn as Ae,nt as F,o as je,on as I,pn as L,q as Me,qt as R,rn as z,rt as Ne,sn as Pe,t as Fe,tn as Ie,u as Le,un as B,v as Re,vt as ze,w as Be,wt as Ve,x as He,y as Ue,yt as We,z as V,zt as H}from"./app-DLfkwyB2.js";import{t as Ge}from"./chevrondown-Cwi3YYxD.js";import{a as Ke,i as qe,n as Je,r as Ye,t as Xe}from"./Rating-DdyjqI0J.js";import{t as Ze}from"./check-Bfbwyvu9.js";import{n as Qe,t as $e}from"./settings-DsYrOBuw.js";var et=pe(),tt=o.extend({name:`virtualscroller`,css:`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}

.p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    inset-block-start: 0;
    inset-inline-start: 0;
}
`,style:`
    .p-virtualscroller-loader {
        background: dt('virtualscroller.loader.mask.background');
        color: dt('virtualscroller.loader.mask.color');
    }

    .p-virtualscroller-loading-icon {
        font-size: dt('virtualscroller.loader.icon.size');
        width: dt('virtualscroller.loader.icon.size');
        height: dt('virtualscroller.loader.icon.size');
    }
`}),nt={name:`BaseVirtualScroller`,extends:c,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:`vertical`},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:tt,provide:function(){return{$pcVirtualScroller:this,$parentInstance:this}},beforeMount:function(){var e;tt.loadCSS({nonce:(e=this.$primevueConfig)==null||(e=e.csp)==null?void 0:e.nonce})}};function U(e){"@babel/helpers - typeof";return U=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},U(e)}function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?rt(Object(n),!0).forEach(function(t){it(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function it(e,t,n){return(t=at(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function at(e){var t=ot(e,`string`);return U(t)==`symbol`?t:t+``}function ot(e,t){if(U(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(U(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var st={name:`VirtualScroller`,extends:nt,inheritAttrs:!1,emits:[`update:numToleratedItems`,`scroll`,`scroll-index-change`,`lazy-load`],data:function(){var e=this.isBoth();return{first:e?{rows:0,cols:0}:0,last:e?{rows:0,cols:0}:0,page:e?{rows:0,cols:0}:0,numItemsInViewport:e?{rows:0,cols:0}:0,lastScrollPos:e?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,resizeObserver:null,initialized:!1,watch:{numToleratedItems:function(e){this.d_numToleratedItems=e},loading:function(e,t){this.lazy&&e!==t&&e!==this.d_loading&&(this.d_loading=e)},items:{handler:function(e,t){(!t||t.length!==(e||[]).length)&&(this.init(),this.calculateAutoSize())},deep:!0},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){_(this.element)&&(this.setContentEl(this.content),this.init(),this.calculateAutoSize(),this.defaultWidth=y(this.element),this.defaultHeight=V(this.element),this.defaultContentWidth=y(this.content),this.defaultContentHeight=V(this.content),this.initialized=!0),this.element&&this.bindResizeListener()},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation===`vertical`},isHorizontal:function(){return this.orientation===`horizontal`},isBoth:function(){return this.orientation===`both`},scrollTo:function(e){this.element&&this.element.scrollTo(e)},scrollToIndex:function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`auto`,r=this.isBoth(),i=this.isHorizontal();if(r?e.every(function(e){return e>-1}):e>-1){var a=this.first,o=this.element,s=o.scrollTop,c=s===void 0?0:s,l=o.scrollLeft,u=l===void 0?0:l,d=this.calculateNumItems().numToleratedItems,f=this.getContentPosition(),p=this.itemSize,m=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return e<=(arguments.length>1?arguments[1]:void 0)?0:e},h=function(e,t,n){return e*t+n},g=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return t.scrollTo({left:e,top:r,behavior:n})},_=r?{rows:0,cols:0}:0,v=!1,y=!1;r?(_={rows:m(e[0],d[0]),cols:m(e[1],d[1])},g(h(_.cols,p[1],f.left),h(_.rows,p[0],f.top)),y=this.lastScrollPos.top!==c||this.lastScrollPos.left!==u,v=_.rows!==a.rows||_.cols!==a.cols):(_=m(e,d),i?g(h(_,p,f.left),c):g(u,h(_,p,f.top)),y=this.lastScrollPos!==(i?u:c),v=_!==a),this.isRangeChanged=v,y&&(this.first=_)}},scrollInView:function(e,t){var n=this,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`auto`;if(t){var i=this.isBoth(),a=this.isHorizontal();if(i?e.every(function(e){return e>-1}):e>-1){var o=this.getRenderedRange(),s=o.first,c=o.viewport,l=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.scrollTo({left:e,top:t,behavior:r})},u=t===`to-start`,d=t===`to-end`;if(u){if(i)c.first.rows-s.rows>e[0]?l(c.first.cols*this.itemSize[1],(c.first.rows-1)*this.itemSize[0]):c.first.cols-s.cols>e[1]&&l((c.first.cols-1)*this.itemSize[1],c.first.rows*this.itemSize[0]);else if(c.first-s>e){var f=(c.first-1)*this.itemSize;a?l(f,0):l(0,f)}}else if(d){if(i)c.last.rows-s.rows<=e[0]+1?l(c.first.cols*this.itemSize[1],(c.first.rows+1)*this.itemSize[0]):c.last.cols-s.cols<=e[1]+1&&l((c.first.cols+1)*this.itemSize[1],c.first.rows*this.itemSize[0]);else if(c.last-s<=e+1){var p=(c.first+1)*this.itemSize;a?l(p,0):l(0,p)}}}}else this.scrollToIndex(e,r)},getRenderedRange:function(){var e=function(e,t){return Math.floor(e/(t||e))},t=this.first,n=0;if(this.element){var r=this.isBoth(),i=this.isHorizontal(),a=this.element,o=a.scrollTop,s=a.scrollLeft;r?(t={rows:e(o,this.itemSize[0]),cols:e(s,this.itemSize[1])},n={rows:t.rows+this.numItemsInViewport.rows,cols:t.cols+this.numItemsInViewport.cols}):(t=e(i?s:o,this.itemSize),n=t+this.numItemsInViewport)}return{first:this.first,last:this.last,viewport:{first:t,last:n}}},calculateNumItems:function(){var e=this.isBoth(),t=this.isHorizontal(),n=this.itemSize,r=this.getContentPosition(),i=this.element?this.element.offsetWidth-r.left:0,a=this.element?this.element.offsetHeight-r.top:0,o=function(e,t){return Math.ceil(e/(t||e))},s=function(e){return Math.ceil(e/2)},c=e?{rows:o(a,n[0]),cols:o(i,n[1])}:o(t?i:a,n);return{numItemsInViewport:c,numToleratedItems:this.d_numToleratedItems||(e?[s(c.rows),s(c.cols)]:s(c))}},calculateOptions:function(){var e=this,t=this.isBoth(),n=this.first,r=this.calculateNumItems(),i=r.numItemsInViewport,a=r.numToleratedItems,o=function(t,n,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return e.getLast(t+n+(t<r?2:3)*r,i)},s=t?{rows:o(n.rows,i.rows,a[0]),cols:o(n.cols,i.cols,a[1],!0)}:o(n,i,a);this.last=s,this.numItemsInViewport=i,this.d_numToleratedItems=a,this.$emit(`update:numToleratedItems`,this.d_numToleratedItems),this.showLoader&&(this.loaderArr=t?Array.from({length:i.rows}).map(function(){return Array.from({length:i.cols})}):Array.from({length:i})),this.lazy&&Promise.resolve().then(function(){e.lazyLoadState={first:e.step?t?{rows:0,cols:n.cols}:0:n,last:Math.min(e.step?e.step:s,e.items?.length||0)},e.$emit(`lazy-load`,e.lazyLoadState)})},calculateAutoSize:function(){var e=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(e.content){var t=e.isBoth(),n=e.isHorizontal(),r=e.isVertical();e.content.style.minHeight=e.content.style.minWidth=`auto`,e.content.style.position=`relative`,e.element.style.contain=`none`;var i=[y(e.element),V(e.element)],a=i[0],o=i[1];(t||n)&&(e.element.style.width=a<e.defaultWidth?a+`px`:e.scrollWidth||e.defaultWidth+`px`),(t||r)&&(e.element.style.height=o<e.defaultHeight?o+`px`:e.scrollHeight||e.defaultHeight+`px`),e.content.style.minHeight=e.content.style.minWidth=``,e.content.style.position=``,e.element.style.contain=``}})},getLast:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(t?(this.columns||this.items[0])?.length||0:this.items?.length||0,e):0},getContentPosition:function(){if(this.content){var e=getComputedStyle(this.content),t=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),n=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),r=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),i=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:t,right:n,top:r,bottom:i,x:t+n,y:r+i}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var e=this;if(this.element){var t=this.isBoth(),n=this.isHorizontal(),r=this.element.parentElement,i=this.scrollWidth||`${this.element.offsetWidth||r.offsetWidth}px`,a=this.scrollHeight||`${this.element.offsetHeight||r.offsetHeight}px`,o=function(t,n){return e.element.style[t]=n};t||n?(o(`height`,a),o(`width`,i)):o(`height`,a)}},setSpacerSize:function(){var e=this,t=this.items;if(t){var n=this.isBoth(),r=this.isHorizontal(),i=this.getContentPosition(),a=function(t,n,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.spacerStyle=W(W({},e.spacerStyle),it({},`${t}`,(n||[]).length*r+i+`px`))};n?(a(`height`,t,this.itemSize[0],i.y),a(`width`,this.columns||t[1],this.itemSize[1],i.x)):r?a(`width`,this.columns||t,this.itemSize,i.x):a(`height`,t,this.itemSize,i.y)}},setContentPosition:function(e){var t=this;if(this.content&&!this.appendOnly){var n=this.isBoth(),r=this.isHorizontal(),i=e?e.first:this.first,a=function(e,t){return e*t},o=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return t.contentStyle=W(W({},t.contentStyle),{transform:`translate3d(${e}px, ${n}px, 0)`})};if(n)o(a(i.cols,this.itemSize[1]),a(i.rows,this.itemSize[0]));else{var s=a(i,this.itemSize);r?o(s,0):o(0,s)}}},onScrollPositionChange:function(e){var t=this,n=e.target,r=this.isBoth(),i=this.isHorizontal(),a=this.getContentPosition(),o=function(e,t){return e?e>t?e-t:e:0},s=function(e,t){return Math.floor(e/(t||e))},c=function(e,t,n,r,i,a){return e<=i?i:a?n-r-i:t+i-1},l=function(e,n,r,i,a,o,s,c){if(e<=o)return 0;var l=Math.max(0,s?e<n?r:e-o:e>n?r:e-2*o),u=t.getLast(l,c);return l>u?u-a:l},u=function(e,n,r,i,a,o){var s=n+i+2*a;return e>=a&&(s+=a+1),t.getLast(s,o)},d=o(n.scrollTop,a.top),f=o(n.scrollLeft,a.left),p=r?{rows:0,cols:0}:0,m=this.last,h=!1,g=this.lastScrollPos;if(r){var _=this.lastScrollPos.top<=d,v=this.lastScrollPos.left<=f;if(!this.appendOnly||this.appendOnly&&(_||v)){var y={rows:s(d,this.itemSize[0]),cols:s(f,this.itemSize[1])},b={rows:c(y.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],_),cols:c(y.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],v)};p={rows:l(y.rows,b.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],_),cols:l(y.cols,b.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],v,!0)},m={rows:u(y.rows,p.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:u(y.cols,p.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},h=p.rows!==this.first.rows||m.rows!==this.last.rows||p.cols!==this.first.cols||m.cols!==this.last.cols||this.isRangeChanged,g={top:d,left:f}}}else{var ee=i?f:d,te=this.lastScrollPos<=ee;if(!this.appendOnly||this.appendOnly&&te){var x=s(ee,this.itemSize);p=l(x,c(x,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,te),this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,te),m=u(x,p,this.last,this.numItemsInViewport,this.d_numToleratedItems),h=p!==this.first||m!==this.last||this.isRangeChanged,g=ee}}return{first:p,last:m,isRangeChanged:h,scrollPos:g}},onScrollChange:function(e){var t=this.onScrollPositionChange(e),n=t.first,r=t.last,i=t.isRangeChanged,a=t.scrollPos;if(i){var o={first:n,last:r};if(this.setContentPosition(o),this.first=n,this.last=r,this.lastScrollPos=a,this.$emit(`scroll-index-change`,o),this.lazy&&this.isPageChanged(n)){var s={first:this.step?Math.min(this.getPageByFirst(n)*this.step,(this.items?.length||0)-this.step):n,last:Math.min(this.step?(this.getPageByFirst(n)+1)*this.step:r,this.items?.length||0)};(this.lazyLoadState.first!==s.first||this.lazyLoadState.last!==s.last)&&this.$emit(`lazy-load`,s),this.lazyLoadState=s}}},onScroll:function(e){var t=this;this.$emit(`scroll`,e),this.delay?(this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.isPageChanged()&&(!this.d_loading&&this.showLoader&&(this.onScrollPositionChange(e).isRangeChanged||this.step&&this.isPageChanged())&&(this.d_loading=!0),this.scrollTimeout=setTimeout(function(){t.onScrollChange(e),t.d_loading&&t.showLoader&&(!t.lazy||t.loading===void 0)&&(t.d_loading=!1,t.page=t.getPageByFirst())},this.delay))):this.onScrollChange(e)},onResize:function(){var e=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(_(e.element)){var t=e.isBoth(),n=e.isVertical(),r=e.isHorizontal(),i=[y(e.element),V(e.element)],a=i[0],o=i[1],s=a!==e.defaultWidth,c=o!==e.defaultHeight;(t?s||c:r?s:n&&c)&&(e.d_numToleratedItems=e.numToleratedItems,e.defaultWidth=a,e.defaultHeight=o,e.defaultContentWidth=y(e.content),e.defaultContentHeight=V(e.content),e.init())}},this.resizeDelay)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener(`resize`,this.resizeListener),window.addEventListener(`orientationchange`,this.resizeListener),this.resizeObserver=new ResizeObserver(function(){e.onResize()}),this.resizeObserver.observe(this.element))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),window.removeEventListener(`orientationchange`,this.resizeListener),null),this.resizeObserver&&=(this.resizeObserver.disconnect(),null)},getOptions:function(e){var t=(this.items||[]).length,n=this.isBoth()?this.first.rows+e:this.first+e;return{index:n,count:t,first:n===0,last:n===t-1,even:n%2==0,odd:n%2!=0}},getLoaderOptions:function(e,t){var n=this.loaderArr.length;return W({index:e,count:n,first:e===0,last:e===n-1,even:e%2==0,odd:e%2!=0},t)},getPageByFirst:function(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(e){return this.step&&!this.lazy?this.page!==this.getPageByFirst(e??this.first):!0},setContentEl:function(e){this.content=e||this.content||fe(this.element,`[data-pc-section="content"]`)},elementRef:function(e){this.element=e},contentRef:function(e){this.content=e}},computed:{containerClass:function(){return[`p-virtualscroller`,this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return[`p-virtualscroller-content`,{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return[`p-virtualscroller-loader`,{"p-virtualscroller-loader-mask":!this.$slots.loader}]},loadedItems:function(){var e=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(t){return e.columns?t:t.slice(e.appendOnly?0:e.first.cols,e.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var e=this.isBoth(),t=this.isHorizontal();if(e||t)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:oe}},ct=[`tabindex`];function lt(e,n,i,a,o,s){var c=j(`SpinnerIcon`);return e.disabled?(D(),r(d,{key:1},[t(e.$slots,`default`),t(e.$slots,`content`,{items:e.items,rows:e.items,columns:s.loadedColumns})],64)):(D(),r(`div`,R({key:0,ref:s.elementRef,class:s.containerClass,tabindex:e.tabindex,style:e.style,onScroll:n[0]||=function(){return s.onScroll&&s.onScroll.apply(s,arguments)}},e.ptmi(`root`)),[t(e.$slots,`content`,{styleClass:s.contentClass,items:s.loadedItems,getItemOptions:s.getOptions,loading:o.d_loading,getLoaderOptions:s.getLoaderOptions,itemSize:e.itemSize,rows:s.loadedRows,columns:s.loadedColumns,contentRef:s.contentRef,spacerStyle:o.spacerStyle,contentStyle:o.contentStyle,vertical:s.isVertical(),horizontal:s.isHorizontal(),both:s.isBoth()},function(){return[b(`div`,R({ref:s.contentRef,class:s.contentClass,style:o.contentStyle},e.ptm(`content`)),[(D(!0),r(d,null,S(s.loadedItems,function(n,r){return t(e.$slots,`item`,{key:r,item:n,options:s.getOptions(r)})}),128))],16)]}),e.showSpacer?(D(),r(`div`,R({key:0,class:`p-virtualscroller-spacer`,style:o.spacerStyle},e.ptm(`spacer`)),null,16)):H(``,!0),!e.loaderDisabled&&e.showLoader&&o.d_loading?(D(),r(`div`,R({key:1,class:s.loaderClass},e.ptm(`loader`)),[e.$slots&&e.$slots.loader?(D(!0),r(d,{key:0},S(o.loaderArr,function(n,r){return t(e.$slots,`loader`,{key:r,options:s.getLoaderOptions(r,s.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})}),128)):H(``,!0),t(e.$slots,`loadingicon`,{},function(){return[w(c,R({spin:``,class:`p-virtualscroller-loading-icon`},e.ptm(`loadingIcon`)),null,16)]})],16)):H(``,!0)],16,ct))}st.render=lt;var ut={name:`ButtonGroup`,extends:{name:`BaseButtonGroup`,extends:c,style:o.extend({name:`buttongroup`,style:`
    .p-buttongroup {
        display: inline-flex;
    }

    .p-buttongroup .p-button {
        margin: 0;
    }

    .p-buttongroup .p-button:not(:last-child),
    .p-buttongroup .p-button:not(:last-child):hover {
        border-inline-end: 0 none;
    }

    .p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

    .p-buttongroup .p-button:first-of-type:not(:only-of-type) {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup .p-button:last-of-type:not(:only-of-type) {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-buttongroup .p-button:focus {
        position: relative;
        z-index: 1;
    }
`,classes:{root:`p-buttongroup p-component`}}),provide:function(){return{$pcButtonGroup:this,$parentInstance:this}}},inheritAttrs:!1};function dt(e,n,i,a,o,s){return D(),r(`span`,R({class:e.cx(`root`),role:`group`},e.ptmi(`root`)),[t(e.$slots,`default`)],16)}ut.render=dt;var ft={name:`MinusIcon`,extends:se};function pt(e){return _t(e)||gt(e)||ht(e)||mt()}function mt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(e,t){if(e){if(typeof e==`string`)return vt(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vt(e,t):void 0}}function gt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function _t(e){if(Array.isArray(e))return vt(e)}function vt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function yt(e,t,n,i,a,o){return D(),r(`svg`,R({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),pt(t[0]||=[b(`path`,{d:`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,fill:`currentColor`},null,-1)]),16)}ft.render=yt;var bt=o.extend({name:`checkbox`,style:`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-checkbox p-component`,{"p-checkbox-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$pcCheckboxGroup?t.$pcCheckboxGroup.$invalid:t.$invalid,"p-variant-filled":t.$variant===`filled`,"p-checkbox-sm p-inputfield-sm":n.size===`small`,"p-checkbox-lg p-inputfield-lg":n.size===`large`}]},box:`p-checkbox-box`,input:`p-checkbox-input`,icon:`p-checkbox-icon`}}),xt={name:`BaseCheckbox`,extends:Ue,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:bt,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function G(e){"@babel/helpers - typeof";return G=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},G(e)}function St(e,t,n){return(t=Ct(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ct(e){var t=wt(e,`string`);return G(t)==`symbol`?t:t+``}function wt(e,t){if(G(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(G(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Tt(e){return kt(e)||Ot(e)||Dt(e)||Et()}function Et(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dt(e,t){if(e){if(typeof e==`string`)return At(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?At(e,t):void 0}}function Ot(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function kt(e){if(Array.isArray(e))return At(e)}function At(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var jt={name:`Checkbox`,extends:xt,inheritAttrs:!1,emits:[`change`,`focus`,`blur`,`update:indeterminate`],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(e){this.d_indeterminate=e,this.updateIndeterminate()}},mounted:function(){this.updateIndeterminate()},updated:function(){this.updateIndeterminate()},methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(e){var t=this;if(!this.disabled&&!this.readonly){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,r=this.binary?this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?n.filter(function(e){return!M(e,t.value)}):n?[].concat(Tt(n),[this.value]):[this.value];this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit(`update:indeterminate`,this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(r,e):this.writeValue(r,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)},updateIndeterminate:function(){this.$refs.input&&(this.$refs.input.indeterminate=this.d_indeterminate)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var e=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?e===this.trueValue:Ne(this.value,e)},dataP:function(){return E(St({invalid:this.$invalid,checked:this.checked,disabled:this.disabled,filled:this.$variant===`filled`},this.size,this.size))}},components:{CheckIcon:Ze,MinusIcon:ft}},Mt=[`data-p-checked`,`data-p-indeterminate`,`data-p-disabled`,`data-p`],Nt=[`id`,`value`,`name`,`checked`,`tabindex`,`disabled`,`readonly`,`required`,`aria-labelledby`,`aria-label`,`aria-invalid`],Pt=[`data-p`];function Ft(e,n,i,a,o,s){var c=j(`CheckIcon`),l=j(`MinusIcon`);return D(),r(`div`,R({class:e.cx(`root`)},s.getPTOptions(`root`),{"data-p-checked":s.checked,"data-p-indeterminate":o.d_indeterminate||void 0,"data-p-disabled":e.disabled,"data-p":s.dataP}),[b(`input`,R({ref:`input`,id:e.inputId,type:`checkbox`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,value:e.value,name:s.groupName,checked:s.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:n[0]||=function(){return s.onFocus&&s.onFocus.apply(s,arguments)},onBlur:n[1]||=function(){return s.onBlur&&s.onBlur.apply(s,arguments)},onChange:n[2]||=function(){return s.onChange&&s.onChange.apply(s,arguments)}},s.getPTOptions(`input`)),null,16,Nt),b(`div`,R({class:e.cx(`box`)},s.getPTOptions(`box`),{"data-p":s.dataP}),[t(e.$slots,`icon`,{checked:s.checked,indeterminate:o.d_indeterminate,class:B(e.cx(`icon`)),dataP:s.dataP},function(){return[s.checked?(D(),C(c,R({key:0,class:e.cx(`icon`)},s.getPTOptions(`icon`),{"data-p":s.dataP}),null,16,[`class`,`data-p`])):o.d_indeterminate?(D(),C(l,R({key:1,class:e.cx(`icon`)},s.getPTOptions(`icon`),{"data-p":s.dataP}),null,16,[`class`,`data-p`])):H(``,!0)]})],16,Pt)],16,Mt)}jt.render=Ft;var It={name:`BlankIcon`,extends:se};function Lt(e){return Vt(e)||Bt(e)||zt(e)||Rt()}function Rt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zt(e,t){if(e){if(typeof e==`string`)return Ht(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ht(e,t):void 0}}function Bt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Vt(e){if(Array.isArray(e))return Ht(e)}function Ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ut(e,t,n,i,a,o){return D(),r(`svg`,R({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),Lt(t[0]||=[b(`rect`,{width:`1`,height:`1`,fill:`currentColor`,"fill-opacity":`0`},null,-1)]),16)}It.render=Ut;var Wt={name:`SearchIcon`,extends:se};function Gt(e){return Yt(e)||Jt(e)||qt(e)||Kt()}function Kt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qt(e,t){if(e){if(typeof e==`string`)return Xt(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Xt(e,t):void 0}}function Jt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Yt(e){if(Array.isArray(e))return Xt(e)}function Xt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Zt(e,t,n,i,a,o){return D(),r(`svg`,R({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),Gt(t[0]||=[b(`path`,{"fill-rule":`evenodd`,"clip-rule":`evenodd`,d:`M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z`,fill:`currentColor`},null,-1)]),16)}Wt.render=Zt;var Qt={name:`IconField`,extends:{name:`BaseIconField`,extends:c,style:o.extend({name:`iconfield`,style:`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`,classes:{root:`p-iconfield`}}),provide:function(){return{$pcIconField:this,$parentInstance:this}}},inheritAttrs:!1};function $t(e,n,i,a,o,s){return D(),r(`div`,R({class:e.cx(`root`)},e.ptmi(`root`)),[t(e.$slots,`default`)],16)}Qt.render=$t;var en={name:`InputIcon`,extends:{name:`BaseInputIcon`,extends:c,style:o.extend({name:`inputicon`,classes:{root:`p-inputicon`}}),props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},inheritAttrs:!1,computed:{containerClass:function(){return[this.cx(`root`),this.class]}}};function tn(e,n,i,a,o,s){return D(),r(`span`,R({class:s.containerClass},e.ptmi(`root`),{"aria-hidden":`true`}),[t(e.$slots,`default`)],16)}en.render=tn;var nn=o.extend({name:`select`,style:`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        align-self: center;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
        transform-origin: inherit;
        will-change: transform;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled):hover {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }
   
    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }

    .p-floatlabel-in .p-select-filter {
        padding-block-start: dt('select.padding.y');
        padding-block-end: dt('select.padding.y');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props,r=e.state;return[`p-select p-component p-inputwrapper`,{"p-disabled":n.disabled,"p-invalid":t.$invalid,"p-variant-filled":t.$variant===`filled`,"p-focus":r.focused,"p-inputwrapper-filled":t.$filled,"p-inputwrapper-focus":r.focused||r.overlayVisible,"p-select-open":r.overlayVisible,"p-select-fluid":t.$fluid,"p-select-sm p-inputfield-sm":n.size===`small`,"p-select-lg p-inputfield-lg":n.size===`large`}]},label:function(e){var t=e.instance,n=e.props;return[`p-select-label`,{"p-placeholder":!n.editable&&t.label===n.placeholder,"p-select-label-empty":!n.editable&&!t.$slots.value&&(t.label===`p-emptylabel`||t.label?.length===0)}]},clearIcon:`p-select-clear-icon`,dropdown:`p-select-dropdown`,loadingicon:`p-select-loading-icon`,dropdownIcon:`p-select-dropdown-icon`,overlay:`p-select-overlay p-component`,header:`p-select-header`,pcFilter:`p-select-filter`,listContainer:`p-select-list-container`,list:`p-select-list`,optionGroup:`p-select-option-group`,optionGroupLabel:`p-select-option-group-label`,option:function(e){var t=e.instance,n=e.props,r=e.state,i=e.option,a=e.focusedOption;return[`p-select-option`,{"p-select-option-selected":t.isSelected(i)&&n.highlightOnSelect,"p-focus":r.focusedOptionIndex===a,"p-disabled":t.isOptionDisabled(i)}]},optionLabel:`p-select-option-label`,optionCheckIcon:`p-select-option-check-icon`,optionBlankIcon:`p-select-option-blank-icon`,emptyMessage:`p-select-empty-message`}}),rn={name:`BaseSelect`,extends:Ue,props:{options:Array,optionLabel:[String,Function],optionValue:[String,Function],optionDisabled:[String,Function],optionGroupLabel:[String,Function],optionGroupChildren:[String,Function],scrollHeight:{type:String,default:`14rem`},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:`contains`},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},labelId:{type:String,default:null},labelClass:{type:[String,Object],default:null},labelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},appendTo:{type:[String,Object],default:`body`},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},resetFilterOnHide:{type:Boolean,default:!1},resetFilterOnClear:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!0},checkmark:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:nn,provide:function(){return{$pcSelect:this,$parentInstance:this}}};function K(e){"@babel/helpers - typeof";return K=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},K(e)}function an(e){return ln(e)||cn(e)||sn(e)||on()}function on(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sn(e,t){if(e){if(typeof e==`string`)return un(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?un(e,t):void 0}}function cn(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ln(e){if(Array.isArray(e))return un(e)}function un(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function dn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function fn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?dn(Object(n),!0).forEach(function(t){q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function q(e,t,n){return(t=pn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pn(e){var t=mn(e,`string`);return K(t)==`symbol`?t:t+``}function mn(e,t){if(K(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(K(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var hn={name:`Select`,extends:rn,inheritAttrs:!1,emits:[`change`,`focus`,`blur`,`before-show`,`before-hide`,`show`,`hide`,`filter`],outsideClickListener:null,scrollHandler:null,resizeListener:null,labelClickListener:null,matchMediaOrientationListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1,queryOrientation:null}},watch:{modelValue:function(){this.isModelValueChanged=!0},options:function(){this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel(),this.bindLabelClickListener(),this.bindMatchMediaOrientationListener()},updated:function(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindLabelClickListener(),this.unbindMatchMediaOrientationListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.overlay&&=(we.clear(this.overlay),null)},methods:{getOptionIndex:function(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel:function(e){return this.optionLabel?F(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?F(e,this.optionValue):e},getOptionRenderKey:function(e,t){return(this.dataKey?F(e,this.dataKey):this.getOptionLabel(e))+`_`+t},getPTItemOptions:function(e,t,n,r){return this.ptm(r,{context:{option:e,index:n,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(n,t),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?F(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return F(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return F(e,this.optionGroupChildren)},getAriaPosInset:function(e){var t=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(e){return t.isOptionGroup(e)}).length:e)+1},show:function(e){this.$emit(`before-show`),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex===-1?this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex():this.focusedOptionIndex,e&&f(this.$refs.focusInput)},hide:function(e){var t=this,n=function(){t.$emit(`before-hide`),t.overlayVisible=!1,t.clicked=!1,t.focusedOptionIndex=-1,t.searchValue=``,t.resetFilterOnHide&&(t.filterValue=null),e&&f(t.$refs.focusInput)};setTimeout(function(){n()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex===-1?this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex():this.focusedOptionIndex,this.scrollInView(this.focusedOptionIndex)),this.$emit(`focus`,e))},onBlur:function(e){var t=this;setTimeout(function(){var n,r;t.focused=!1,t.focusedOptionIndex=-1,t.searchValue=``,t.$emit(`blur`,e),(n=(r=t.formField).onBlur)==null||n.call(r,e)},100)},onKeyDown:function(e){var t=this;if(this.disabled){e.preventDefault();return}if(ee())switch(e.code){case`Backspace`:this.onBackspaceKey(e,this.editable);break;case`Enter`:case`NumpadDecimal`:this.onEnterKey(e);break;default:e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e,this.editable);break;case`ArrowLeft`:case`ArrowRight`:this.onArrowLeftKey(e,this.editable);break;case`Home`:this.onHomeKey(e,this.editable);break;case`End`:this.onEndKey(e,this.editable);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Space`:this.onSpaceKey(e,this.editable);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`Backspace`:this.onBackspaceKey(e,this.editable);break;case`ShiftLeft`:case`ShiftRight`:break;default:!n&&ie(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key),this.filter&&this.$nextTick(function(){t.$refs.filterInput&&f(t.$refs.filterInput.$el)}));break}this.clicked=!1},onEditableInput:function(e){var t=e.target.value;this.searchValue=``,!this.searchOptions(e,t)&&(this.focusedOptionIndex=-1),this.updateModel(e,t),!this.overlayVisible&&N(t)&&this.show()},onContainerClick:function(e){this.disabled||this.loading||e.target.tagName===`INPUT`||e.target.getAttribute(`data-pc-section`)===`clearicon`||e.target.closest(`[data-pc-section="clearicon"]`)||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(e){this.updateModel(e,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(e){f(e.relatedTarget===this.$refs.focusInput?h(this.overlay,`:not([data-p-hidden-focusable="true"])`):this.$refs.focusInput)},onLastHiddenFocus:function(e){f(e.relatedTarget===this.$refs.focusInput?u(this.overlay,`:not([data-p-hidden-focusable="true"])`):this.$refs.focusInput)},onOptionSelect:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(this.overlayVisible){var r=this.getOptionValue(t);this.updateModel(e,r),n&&this.hide(!0)}},onOptionMouseMove:function(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)},onFilterChange:function(e){var t=e.target.value;this.filterValue=t,this.focusedOptionIndex=-1,this.$emit(`filter`,{originalEvent:e,value:t}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(e){if(!e.isComposing)switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e,!0);break;case`ArrowLeft`:case`ArrowRight`:this.onArrowLeftKey(e,!0);break;case`Home`:this.onHomeKey(e,!0);break;case`End`:this.onEndKey(e,!0);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(e){et.emit(`overlay-click`,{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case`Escape`:this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{var t=this.focusedOptionIndex===-1?this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex():this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e,t)}e.preventDefault()},onArrowUpKey:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e.altKey&&!t)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var n=this.focusedOptionIndex===-1?this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex():this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){arguments.length>1&&arguments[1]!==void 0&&arguments[1]&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){if(arguments.length>1&&arguments[1]!==void 0&&arguments[1]){var t=e.currentTarget;e.shiftKey?t.setSelectionRange(0,e.target.selectionStart):(t.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onEndKey:function(e){if(arguments.length>1&&arguments[1]!==void 0&&arguments[1]){var t=e.currentTarget;if(e.shiftKey)t.setSelectionRange(e.target.selectionStart,t.value.length);else{var n=t.value.length;t.setSelectionRange(n,n),this.focusedOptionIndex=-1}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide(!0)):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)),e.preventDefault()},onSpaceKey:function(e){!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault(),e.stopPropagation()},onTabKey:function(e){arguments.length>1&&arguments[1]!==void 0&&arguments[1]||(this.overlayVisible&&this.hasFocusableElements()?(f(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey:function(e){arguments.length>1&&arguments[1]!==void 0&&arguments[1]&&!this.overlayVisible&&this.show()},onOverlayEnter:function(e){var t=this;we.set(`overlay`,e,this.$primevue.config.zIndex.overlay),ae(e,{position:`absolute`,top:`0`}),this.alignOverlay(),this.scrollInView(),this.$attrSelector&&e.setAttribute(this.$attrSelector,``),setTimeout(function(){t.autoFilterFocus&&t.filter&&f(t.$refs.filterInput.$el),t.autoUpdateModel()},1)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit(`show`)},onOverlayLeave:function(e){var t=this;e.style.pointerEvents=`none`,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.autoFilterFocus&&this.filter&&!this.editable&&this.$nextTick(function(){t.$refs.filterInput&&f(t.$refs.filterInput.$el)}),this.$emit(`hide`),this.overlay=null},onOverlayAfterLeave:function(e){we.clear(e)},alignOverlay:function(){this.appendTo===`self`?ne(this.overlay,this.$el):this.overlay&&(this.overlay.style.minWidth=Me(this.$el)+`px`,te(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=t.composedPath();e.overlayVisible&&e.overlay&&!n.includes(e.$el)&&!n.includes(e.overlay)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new i(this.$refs.container,function(){e.overlayVisible&&e.hide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!le()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},bindLabelClickListener:function(){var e=this;if(!this.editable&&!this.labelClickListener){var t=document.querySelector(`label[for="${this.labelId}"]`);t&&_(t)&&(this.labelClickListener=function(){f(e.$refs.focusInput)},t.addEventListener(`click`,this.labelClickListener))}},unbindLabelClickListener:function(){if(this.labelClickListener){var e=document.querySelector(`label[for="${this.labelId}"]`);e&&_(e)&&e.removeEventListener(`click`,this.labelClickListener)}},bindMatchMediaOrientationListener:function(){var e=this;if(!this.matchMediaOrientationListener){var t=matchMedia(`(orientation: portrait)`);this.queryOrientation=t,this.matchMediaOrientationListener=function(){e.alignOverlay()},this.queryOrientation.addEventListener(`change`,this.matchMediaOrientationListener)}},unbindMatchMediaOrientationListener:function(){this.matchMediaOrientationListener&&=(this.queryOrientation.removeEventListener(`change`,this.matchMediaOrientationListener),this.queryOrientation=null,null)},hasFocusableElements:function(){return de(this.overlay,`:not([data-p-hidden-focusable="true"])`).length>0},isOptionExactMatched:function(e){return this.isValidOption(e)&&typeof this.getOptionLabel(e)==`string`&&this.getOptionLabel(e)?.toLocaleLowerCase(this.filterLocale)==this.searchValue.toLocaleLowerCase(this.filterLocale)},isOptionStartsWith:function(e){return this.isValidOption(e)&&typeof this.getOptionLabel(e)==`string`&&this.getOptionLabel(e)?.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption:function(e){return N(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return M(this.d_value,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(t){return e.isValidOption(t)})},findLastOptionIndex:function(){var t=this;return e(this.visibleOptions,function(e){return t.isValidOption(e)})},findNextOptionIndex:function(e){var t=this,n=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(e){return t.isValidOption(e)}):-1;return n>-1?n+e+1:e},findPrevOptionIndex:function(t){var n=this,r=t>0?e(this.visibleOptions.slice(0,t),function(e){return n.isValidOption(e)}):-1;return r>-1?r:t},findSelectedOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(t){return e.isValidSelectedOption(t)})},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,t){var n=this;this.searchValue=(this.searchValue||``)+t;var r=-1,i=!1;return N(this.searchValue)&&(r=this.visibleOptions.findIndex(function(e){return n.isOptionExactMatched(e)}),r===-1&&(r=this.visibleOptions.findIndex(function(e){return n.isOptionStartsWith(e)})),r!==-1&&(i=!0),r===-1&&this.focusedOptionIndex===-1&&(r=this.findFirstFocusedOptionIndex()),r!==-1&&this.changeFocusedOptionIndex(e,r)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){n.searchValue=``,n.searchTimeout=null},500),i},changeFocusedOptionIndex:function(e,t){this.focusedOptionIndex!==t&&(this.focusedOptionIndex=t,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[t],!1))},scrollInView:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var n=t===-1?e.focusedOptionId:`${e.$id}_${t}`,r=fe(e.list,`li[id="${n}"]`);r?r.scrollIntoView&&r.scrollIntoView({block:`nearest`,inline:`nearest`}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(t===-1?e.focusedOptionIndex:t)})},autoUpdateModel:function(){this.autoOptionFocus&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex()),this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1)},updateModel:function(e,t){this.writeValue(t,e),this.$emit(`change`,{originalEvent:e,value:t})},flatOptions:function(e){var t=this;return(e||[]).reduce(function(e,n,r){e.push({optionGroup:n,group:!0,index:r});var i=t.getOptionGroupChildren(n);return i&&i.forEach(function(t){return e.push(t)}),e},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,t){this.list=e,t&&t(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this,t=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var n=xe.filter(t,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var r=this.options||[],i=[];return r.forEach(function(t){var r=e.getOptionGroupChildren(t).filter(function(e){return n.includes(e)});r.length>0&&i.push(fn(fn({},t),{},q({},typeof e.optionGroupChildren==`string`?e.optionGroupChildren:`items`,an(r))))}),this.flatOptions(i)}return n}return t},hasSelectedOption:function(){return this.$filled},label:function(){var e=this.findSelectedOptionIndex();return e===-1?this.placeholder||`p-emptylabel`:this.getOptionLabel(this.visibleOptions[e])},editableInputValue:function(){var e=this.findSelectedOptionIndex();return e===-1?this.d_value||``:this.getOptionLabel(this.visibleOptions[e])},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return N(this.visibleOptions)?this.filterMessageText.replaceAll(`{0}`,this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||``},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||``},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||``},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||``},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||``},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll(`{0}`,`1`):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex===-1?null:`${this.$id}_${this.focusedOptionIndex}`},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(t){return!e.isOptionGroup(t)}).length},isClearIconVisible:function(){return this.showClear&&this.d_value!=null&&!this.disabled&&!this.loading},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},containerDataP:function(){return E(q({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant===`filled`},this.size,this.size))},labelDataP:function(){return E(q(q({placeholder:!this.editable&&this.label===this.placeholder,clearable:this.showClear,disabled:this.disabled,editable:this.editable},this.size,this.size),`empty`,!this.editable&&!this.$slots.value&&(this.label===`p-emptylabel`||this.label.length===0)))},dropdownIconDataP:function(){return E(q({},this.size,this.size))},overlayDataP:function(){return E(q({},`portal-`+this.appendTo,`portal-`+this.appendTo))}},directives:{ripple:Be},components:{InputText:Ke,VirtualScroller:st,Portal:Re,InputIcon:en,IconField:Qt,TimesIcon:He,ChevronDownIcon:Ge,SpinnerIcon:oe,SearchIcon:Wt,CheckIcon:Ze,BlankIcon:It}},gn=[`id`,`data-p`],_n=[`name`,`id`,`value`,`placeholder`,`tabindex`,`disabled`,`aria-label`,`aria-labelledby`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`aria-invalid`,`data-p`],vn=[`name`,`id`,`tabindex`,`aria-label`,`aria-labelledby`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`aria-invalid`,`aria-disabled`,`data-p`],yn=[`data-p`],bn=[`id`],xn=[`id`],Sn=[`id`,`aria-label`,`aria-selected`,`aria-disabled`,`aria-setsize`,`aria-posinset`,`onMousedown`,`onMousemove`,`data-p-selected`,`data-p-focused`,`data-p-disabled`];function Cn(e,n,i,a,o,s){var c=j(`SpinnerIcon`),l=j(`InputText`),u=j(`SearchIcon`),f=j(`InputIcon`),m=j(`IconField`),h=j(`CheckIcon`),g=j(`BlankIcon`),_=j(`VirtualScroller`),v=j(`Portal`),y=Ie(`ripple`);return D(),r(`div`,R({ref:`container`,id:e.$id,class:e.cx(`root`),onClick:n[12]||=function(){return s.onContainerClick&&s.onContainerClick.apply(s,arguments)},"data-p":s.containerDataP},e.ptmi(`root`)),[e.editable?(D(),r(`input`,R({key:0,ref:`focusInput`,name:e.name,id:e.labelId||e.inputId,type:`text`,class:[e.cx(`label`),e.inputClass,e.labelClass],style:[e.inputStyle,e.labelStyle],value:s.editableInputValue,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,disabled:e.disabled,autocomplete:`off`,role:`combobox`,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":`listbox`,"aria-expanded":o.overlayVisible,"aria-controls":o.overlayVisible?e.$id+`_list`:void 0,"aria-activedescendant":o.focused?s.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:n[0]||=function(){return s.onFocus&&s.onFocus.apply(s,arguments)},onBlur:n[1]||=function(){return s.onBlur&&s.onBlur.apply(s,arguments)},onKeydown:n[2]||=function(){return s.onKeyDown&&s.onKeyDown.apply(s,arguments)},onInput:n[3]||=function(){return s.onEditableInput&&s.onEditableInput.apply(s,arguments)},"data-p":s.labelDataP},e.ptm(`label`)),null,16,_n)):(D(),r(`span`,R({key:1,ref:`focusInput`,name:e.name,id:e.labelId||e.inputId,class:[e.cx(`label`),e.inputClass,e.labelClass],style:[e.inputStyle,e.labelStyle],tabindex:e.disabled?-1:e.tabindex,role:`combobox`,"aria-label":e.ariaLabel||(s.label===`p-emptylabel`?void 0:s.label),"aria-labelledby":e.ariaLabelledby,"aria-haspopup":`listbox`,"aria-expanded":o.overlayVisible,"aria-controls":e.$id+`_list`,"aria-activedescendant":o.focused?s.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,"aria-disabled":e.disabled,onFocus:n[4]||=function(){return s.onFocus&&s.onFocus.apply(s,arguments)},onBlur:n[5]||=function(){return s.onBlur&&s.onBlur.apply(s,arguments)},onKeydown:n[6]||=function(){return s.onKeyDown&&s.onKeyDown.apply(s,arguments)},"data-p":s.labelDataP},e.ptm(`label`)),[t(e.$slots,`value`,{value:e.d_value,placeholder:e.placeholder},function(){return[p(L(s.label===`p-emptylabel`?`\xA0`:s.label??`empty`),1)]})],16,vn)),s.isClearIconVisible?t(e.$slots,`clearicon`,{key:2,class:B(e.cx(`clearIcon`)),clearCallback:s.onClearClick},function(){return[(D(),C(Ae(e.clearIcon?`i`:`TimesIcon`),R({ref:`clearIcon`,class:[e.cx(`clearIcon`),e.clearIcon],onClick:s.onClearClick},e.ptm(`clearIcon`),{"data-pc-section":`clearicon`}),null,16,[`class`,`onClick`]))]}):H(``,!0),b(`div`,R({class:e.cx(`dropdown`)},e.ptm(`dropdown`)),[e.loading?t(e.$slots,`loadingicon`,{key:0,class:B(e.cx(`loadingIcon`))},function(){return[e.loadingIcon?(D(),r(`span`,R({key:0,class:[e.cx(`loadingIcon`),`pi-spin`,e.loadingIcon],"aria-hidden":`true`},e.ptm(`loadingIcon`)),null,16)):(D(),C(c,R({key:1,class:e.cx(`loadingIcon`),spin:``,"aria-hidden":`true`},e.ptm(`loadingIcon`)),null,16,[`class`]))]}):t(e.$slots,`dropdownicon`,{key:1,class:B(e.cx(`dropdownIcon`))},function(){return[(D(),C(Ae(e.dropdownIcon?`span`:`ChevronDownIcon`),R({class:[e.cx(`dropdownIcon`),e.dropdownIcon],"aria-hidden":`true`,"data-p":s.dropdownIconDataP},e.ptm(`dropdownIcon`)),null,16,[`class`,`data-p`]))]})],16),w(v,{appendTo:e.appendTo},{default:I(function(){return[w(Te,R({name:`p-anchored-overlay`,onEnter:s.onOverlayEnter,onAfterEnter:s.onOverlayAfterEnter,onLeave:s.onOverlayLeave,onAfterLeave:s.onOverlayAfterLeave},e.ptm(`transition`)),{default:I(function(){return[o.overlayVisible?(D(),r(`div`,R({key:0,ref:s.overlayRef,class:[e.cx(`overlay`),e.panelClass,e.overlayClass],style:[e.panelStyle,e.overlayStyle],onClick:n[10]||=function(){return s.onOverlayClick&&s.onOverlayClick.apply(s,arguments)},onKeydown:n[11]||=function(){return s.onOverlayKeyDown&&s.onOverlayKeyDown.apply(s,arguments)},"data-p":s.overlayDataP},e.ptm(`overlay`)),[b(`span`,R({ref:`firstHiddenFocusableElementOnOverlay`,role:`presentation`,"aria-hidden":`true`,class:`p-hidden-accessible p-hidden-focusable`,tabindex:0,onFocus:n[7]||=function(){return s.onFirstHiddenFocus&&s.onFirstHiddenFocus.apply(s,arguments)}},e.ptm(`hiddenFirstFocusableEl`),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),t(e.$slots,`header`,{value:e.d_value,options:s.visibleOptions}),e.filter?(D(),r(`div`,R({key:0,class:e.cx(`header`)},e.ptm(`header`)),[w(m,{unstyled:e.unstyled,pt:e.ptm(`pcFilterContainer`)},{default:I(function(){return[w(l,{ref:`filterInput`,type:`text`,value:o.filterValue,onVnodeMounted:s.onFilterUpdated,onVnodeUpdated:s.onFilterUpdated,class:B(e.cx(`pcFilter`)),placeholder:e.filterPlaceholder,variant:e.variant,unstyled:e.unstyled,role:`searchbox`,autocomplete:`off`,"aria-owns":e.$id+`_list`,"aria-activedescendant":s.focusedOptionId,onKeydown:s.onFilterKeyDown,onBlur:s.onFilterBlur,onInput:s.onFilterChange,pt:e.ptm(`pcFilter`),formControl:{novalidate:!0}},null,8,[`value`,`onVnodeMounted`,`onVnodeUpdated`,`class`,`placeholder`,`variant`,`unstyled`,`aria-owns`,`aria-activedescendant`,`onKeydown`,`onBlur`,`onInput`,`pt`]),w(f,{unstyled:e.unstyled,pt:e.ptm(`pcFilterIconContainer`)},{default:I(function(){return[t(e.$slots,`filtericon`,{},function(){return[e.filterIcon?(D(),r(`span`,R({key:0,class:e.filterIcon},e.ptm(`filterIcon`)),null,16)):(D(),C(u,ve(R({key:1},e.ptm(`filterIcon`))),null,16))]})]}),_:3},8,[`unstyled`,`pt`])]}),_:3},8,[`unstyled`,`pt`]),b(`span`,R({role:`status`,"aria-live":`polite`,class:`p-hidden-accessible`},e.ptm(`hiddenFilterResult`),{"data-p-hidden-accessible":!0}),L(s.filterResultMessageText),17)],16)):H(``,!0),b(`div`,R({class:e.cx(`listContainer`),style:{"max-height":s.virtualScrollerDisabled?e.scrollHeight:``}},e.ptm(`listContainer`)),[w(_,R({ref:s.virtualScrollerRef},e.virtualScrollerOptions,{items:s.visibleOptions,style:{height:e.scrollHeight},tabindex:-1,disabled:s.virtualScrollerDisabled,pt:e.ptm(`virtualScroller`)}),ue({content:I(function(i){var a=i.styleClass,c=i.contentRef,l=i.items,u=i.getItemOptions,f=i.contentStyle,m=i.itemSize;return[b(`ul`,R({ref:function(e){return s.listRef(e,c)},id:e.$id+`_list`,class:[e.cx(`list`),a],style:f,role:`listbox`},e.ptm(`list`)),[(D(!0),r(d,null,S(l,function(i,a){return D(),r(d,{key:s.getOptionRenderKey(i,s.getOptionIndex(a,u))},[s.isOptionGroup(i)?(D(),r(`li`,R({key:0,id:e.$id+`_`+s.getOptionIndex(a,u),style:{height:m?m+`px`:void 0},class:e.cx(`optionGroup`),role:`option`},{ref_for:!0},e.ptm(`optionGroup`)),[t(e.$slots,`optiongroup`,{option:i.optionGroup,index:s.getOptionIndex(a,u)},function(){return[b(`span`,R({class:e.cx(`optionGroupLabel`)},{ref_for:!0},e.ptm(`optionGroupLabel`)),L(s.getOptionGroupLabel(i.optionGroup)),17)]})],16,xn)):Pe((D(),r(`li`,R({key:1,id:e.$id+`_`+s.getOptionIndex(a,u),class:e.cx(`option`,{option:i,focusedOption:s.getOptionIndex(a,u)}),style:{height:m?m+`px`:void 0},role:`option`,"aria-label":s.getOptionLabel(i),"aria-selected":s.isSelected(i),"aria-disabled":s.isOptionDisabled(i),"aria-setsize":s.ariaSetSize,"aria-posinset":s.getAriaPosInset(s.getOptionIndex(a,u)),onMousedown:function(e){return s.onOptionSelect(e,i)},onMousemove:function(e){return s.onOptionMouseMove(e,s.getOptionIndex(a,u))},onClick:n[8]||=re(function(){},[`stop`]),"data-p-selected":!e.checkmark&&s.isSelected(i),"data-p-focused":o.focusedOptionIndex===s.getOptionIndex(a,u),"data-p-disabled":s.isOptionDisabled(i)},{ref_for:!0},s.getPTItemOptions(i,u,a,`option`)),[e.checkmark?(D(),r(d,{key:0},[s.isSelected(i)?(D(),C(h,R({key:0,class:e.cx(`optionCheckIcon`)},{ref_for:!0},e.ptm(`optionCheckIcon`)),null,16,[`class`])):(D(),C(g,R({key:1,class:e.cx(`optionBlankIcon`)},{ref_for:!0},e.ptm(`optionBlankIcon`)),null,16,[`class`]))],64)):H(``,!0),t(e.$slots,`option`,{option:i,selected:s.isSelected(i),index:s.getOptionIndex(a,u)},function(){return[b(`span`,R({class:e.cx(`optionLabel`)},{ref_for:!0},e.ptm(`optionLabel`)),L(s.getOptionLabel(i)),17)]})],16,Sn)),[[y]])],64)}),128)),o.filterValue&&(!l||l&&l.length===0)?(D(),r(`li`,R({key:0,class:e.cx(`emptyMessage`),role:`option`},e.ptm(`emptyMessage`),{"data-p-hidden-accessible":!0}),[t(e.$slots,`emptyfilter`,{},function(){return[p(L(s.emptyFilterMessageText),1)]})],16)):!e.options||e.options&&e.options.length===0?(D(),r(`li`,R({key:1,class:e.cx(`emptyMessage`),role:`option`},e.ptm(`emptyMessage`),{"data-p-hidden-accessible":!0}),[t(e.$slots,`empty`,{},function(){return[p(L(s.emptyMessageText),1)]})],16)):H(``,!0)],16,bn)]}),_:2},[e.$slots.loader?{name:`loader`,fn:I(function(n){var r=n.options;return[t(e.$slots,`loader`,{options:r})]}),key:`0`}:void 0]),1040,[`items`,`style`,`disabled`,`pt`])],16),t(e.$slots,`footer`,{value:e.d_value,options:s.visibleOptions}),!e.options||e.options&&e.options.length===0?(D(),r(`span`,R({key:1,role:`status`,"aria-live":`polite`,class:`p-hidden-accessible`},e.ptm(`hiddenEmptyMessage`),{"data-p-hidden-accessible":!0}),L(s.emptyMessageText),17)):H(``,!0),b(`span`,R({role:`status`,"aria-live":`polite`,class:`p-hidden-accessible`},e.ptm(`hiddenSelectedMessage`),{"data-p-hidden-accessible":!0}),L(s.selectedMessageText),17),b(`span`,R({ref:`lastHiddenFocusableElementOnOverlay`,role:`presentation`,"aria-hidden":`true`,class:`p-hidden-accessible p-hidden-focusable`,tabindex:0,onFocus:n[9]||=function(){return s.onLastHiddenFocus&&s.onLastHiddenFocus.apply(s,arguments)}},e.ptm(`hiddenLastFocusableEl`),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16,yn)):H(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`])],16,gn)}hn.render=Cn;var wn=o.extend({name:`togglebutton`,style:`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-togglebutton p-component`,{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-fluid":n.fluid,"p-togglebutton-sm p-inputfield-sm":n.size===`small`,"p-togglebutton-lg p-inputfield-lg":n.size===`large`}]},content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,label:`p-togglebutton-label`}}),Tn={name:`BaseToggleButton`,extends:ge,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:`Yes`},offLabel:{type:String,default:`No`},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:wn,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function J(e){"@babel/helpers - typeof";return J=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},J(e)}function En(e,t,n){return(t=Dn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dn(e){var t=On(e,`string`);return J(t)==`symbol`?t:t+``}function On(e,t){if(J(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(J(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var kn={name:`ToggleButton`,extends:Tn,inheritAttrs:!1,emits:[`change`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit(`change`,e))},onBlur:function(e){var t,n;(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return N(this.onLabel)&&N(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:`\xA0`},dataP:function(){return E(En({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:Be}},An=[`tabindex`,`disabled`,`aria-pressed`,`aria-label`,`aria-labelledby`,`data-p-checked`,`data-p-disabled`,`data-p`],jn=[`data-p`];function Mn(e,n,i,a,o,s){var c=Ie(`ripple`);return Pe((D(),r(`button`,R({type:`button`,class:e.cx(`root`),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:n[0]||=function(){return s.onChange&&s.onChange.apply(s,arguments)},onBlur:n[1]||=function(){return s.onBlur&&s.onBlur.apply(s,arguments)}},s.getPTOptions(`root`),{"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"data-p-checked":s.active,"data-p-disabled":e.disabled,"data-p":s.dataP}),[b(`span`,R({class:e.cx(`content`)},s.getPTOptions(`content`),{"data-p":s.dataP}),[t(e.$slots,`default`,{},function(){return[t(e.$slots,`icon`,{value:e.d_value,class:B(e.cx(`icon`))},function(){return[e.onIcon||e.offIcon?(D(),r(`span`,R({key:0,class:[e.cx(`icon`),e.d_value?e.onIcon:e.offIcon]},s.getPTOptions(`icon`)),null,16)):H(``,!0)]}),b(`span`,R({class:e.cx(`label`)},s.getPTOptions(`label`)),L(s.label),17)]})],16,jn)],16,An)),[[c]])}kn.render=Mn;var Nn=o.extend({name:`selectbutton`,style:`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`,classes:{root:function(e){var t=e.props;return[`p-selectbutton p-component`,{"p-invalid":e.instance.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),Pn={name:`BaseSelectButton`,extends:ge,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Nn,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Fn(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Rn(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function In(e){return Bn(e)||zn(e)||Rn(e)||Ln()}function Ln(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rn(e,t){if(e){if(typeof e==`string`)return Vn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Vn(e,t):void 0}}function zn(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Bn(e){if(Array.isArray(e))return Vn(e)}function Vn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Hn={name:`SelectButton`,extends:Pn,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?F(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?F(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?F(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?F(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t,n){var r=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),a=this.getOptionValue(t),o;if(this.multiple)if(i){if(o=this.d_value.filter(function(e){return!M(e,a,r.equalityKey)}),!this.allowEmpty&&o.length===0)return}else o=this.d_value?[].concat(In(this.d_value),[a]):[a];else{if(i&&!this.allowEmpty)return;o=i?null:a}this.writeValue(o,e),this.$emit(`change`,{originalEvent:e,value:o})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=Fn(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(M(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=M(this.d_value,n,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return E({invalid:this.$invalid})}},directives:{ripple:Be},components:{ToggleButton:kn}},Un=[`aria-labelledby`,`data-p`];function Wn(e,n,i,a,o,s){var c=j(`ToggleButton`);return D(),r(`div`,R({class:e.cx(`root`),role:`group`,"aria-labelledby":e.ariaLabelledby},e.ptmi(`root`),{"data-p":s.dataP}),[(D(!0),r(d,null,S(e.options,function(n,r){return D(),C(c,{key:s.getOptionRenderKey(n),modelValue:s.isSelected(n),onLabel:s.getOptionLabel(n),offLabel:s.getOptionLabel(n),disabled:e.disabled||s.isOptionDisabled(n),unstyled:e.unstyled,size:e.size,readonly:s.isOptionReadonly(n),onChange:function(e){return s.onOptionSelect(e,n,r)},pt:e.ptm(`pcToggleButton`)},ue({_:2},[e.$slots.option?{name:`default`,fn:I(function(){return[t(e.$slots,`option`,{option:n,index:r},function(){return[b(`span`,R({ref_for:!0},e.ptm(`pcToggleButton`).label),L(s.getOptionLabel(n)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,Un)}Hn.render=Wn;async function Gn(){let[e]=await n.tabs.query({active:!0,currentWindow:!0});if(!e)throw Error(`Tab not found`);return e}async function Kn(){let e=await Gn();if(!e.id)throw Error(`Tab not found`);return e.id}function qn(e){if(!e.url)return!1;let t=new URL(e.url);return t.hostname===`chatgpt.com`&&t.pathname.startsWith(`/c/`)}function Jn(e){if(!e.url)return!1;let t=new URL(e.url);return t.hostname===`gemini.google.com`&&t.pathname.startsWith(`/app/`)}function Yn(e){if(!e.url)return!1;let t=new URL(e.url);return t.hostname===`chat.deepseek.com`&&t.pathname.startsWith(`/a/chat/s/`)}function Xn(e){if(!e.url)return!1;let t=new URL(e.url);return t.hostname.replace(`www.`,``)===`reddit.com`&&t.pathname.startsWith(`/r/`)}function Zn(e){return e.url?new URL(e.url).hostname.endsWith(`notion.site`):!1}function Qn(e){if(!e.url)return!1;let t=new URL(e.url);return t.hostname===`pikabu.ru`&&t.pathname.startsWith(`/story/`)}async function $n(e){let t=e.url;if(!t)return!1;if(er(e)&&await _e())return!0;let n=[`https://chromewebstore.google.com`,`https://chrome.google.com/webstore`,`https://v6.gxcorner.games`].some(e=>t.startsWith(e));return t.startsWith(`http`)&&!n}function er(e){return e.url?e.url.startsWith(`file://`):!1}async function tr(e){if(!e.id)return!1;try{let t=await n.tabs.sendMessage(e.id,{command:s});return t.success&&t.supported}catch{return!1}}function nr(e,t={}){return n.runtime.sendMessage(rr(e,t)).catch(r=>{ke(r,{initiator:`sendRuntimeCommand()`,command:e,params:t,runtimeLastError:n.runtime.lastError})})}async function Y(e,t={}){return n.tabs.sendMessage(await Kn(),rr(e,t)).catch(r=>{ke(r,{initiator:`sendTabCommand()`,command:e,params:t,runtimeLastError:n.runtime.lastError})})}function rr(e,t={}){let n={command:e};return t&&Object.assign(n,{params:t}),n}var ir={class:`text-center mb-2`},ar={class:`text-center text-lg font-bold mb-6`},or=T({__name:`GeneratingLoader`,props:{modelValue:{},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),i=z(e,`modelValue`);n.runtime.onMessage.addListener(e=>{e.command===`SET_PDF_GENERATION_STATUS`&&(i.value=e.params.status)});async function a(){let e=await Kn();i.value=!1,await nr(me,{tabId:e}),await nr(Ee,{status:!1}),await n.tabs.reload(e)}return(e,n)=>(D(),r(`div`,ir,[b(`div`,ar,[p(L(P(t)(`generating1`)),1),n[0]||=b(`br`,null,null,-1),p(L(P(t)(`generating2`)),1)]),w(P(Ye),{strokeWidth:`5`,fill:`transparent`,class:`block w-10 h-10 mb-6`,animationDuration:`.5s`}),w(P(O),{onClick:a,severity:P(ye)===`dark`?void 0:`danger`,class:`dark-button-variant`,label:P(t)(`stopGeneration`)},null,8,[`severity`,`label`])]))}}),sr={class:`flex items-center gap-2`},cr={class:`leading-6`},lr=[`for`],ur={key:0,class:`ml-1`},dr={class:`pi pi-question-circle text-xs`},X=T({__name:`Checkbox`,props:v({id:{},label:{},disabled:{type:Boolean},hint:{}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=z(e,`modelValue`);return(n,i)=>{let a=Ie(`tooltip`);return D(),r(`div`,sr,[w(P(jt),{modelValue:t.value,"onUpdate:modelValue":i[0]||=e=>t.value=e,inputId:e.id,binary:``,disabled:e.disabled},null,8,[`modelValue`,`inputId`,`disabled`]),b(`div`,cr,[b(`label`,{for:e.id,class:`cursor-pointer`},L(e.label),9,lr),e.hint?(D(),r(`sup`,ur,[Pe(b(`i`,dr,null,512),[[a,e.hint,void 0,{bottom:!0}]])])):H(``,!0)])])}}}),fr={class:`mb-1`},pr={class:`flex place-content-between gap-2`},mr=[`for`],Z=Je(T({__name:`MarginsInput`,props:{modelValue:{required:!0},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`),i=[{label:t(`top`),key:`marginTop`},{label:t(`bottom`),key:`marginBottom`},{label:t(`left`),key:`marginLeft`},{label:t(`right`),key:`marginRight`}];function a(e){let t=n.value[e],r=Number(t);isNaN(r)||r<0?r=0:r>2&&(r=2),n.value[e]=r}return(e,o)=>(D(),r(`div`,null,[b(`div`,fr,L(P(t)(`margins`)),1),b(`div`,pr,[(D(),r(d,null,S(i,e=>b(`div`,null,[b(`label`,{for:e.key,class:`block font-medium text-xs mb-1 text-primary-500 dark:text-primary-300`},L(e.label),9,mr),w(P(Ke),{type:`number`,inputId:e.key,min:0,max:2,step:.01,allowEmpty:!1,format:!1,modelValue:n.value[e.key],"onUpdate:modelValue":t=>n.value[e.key]=t,modelModifiers:{number:!0},onBlur:t=>a(e.key),class:`w-full`},null,8,[`inputId`,`modelValue`,`onUpdate:modelValue`,`onBlur`])])),64))])]))}}),[[`__scopeId`,`data-v-79de214f`]]),hr={class:`block font-medium text-sm mb-1 text-primary-500 dark:text-primary-300`},gr=T({__name:`Select`,props:v({items:{},label:{}},{modelValue:{},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let t=z(e,`modelValue`),n=e;return(e,i)=>(D(),r(`div`,null,[b(`label`,hr,L(n.label),1),w(P(hn),{modelValue:t.value,"onUpdate:modelValue":i[0]||=e=>t.value=e,options:n.items,optionLabel:`name`,optionValue:`value`,class:`w-full`},null,8,[`modelValue`,`options`])]))}}),Q=T({__name:`PaperSizeSelect`,props:{modelValue:{},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`),r=m(()=>[{name:`A0`,value:`a0`},{name:`A1`,value:`a1`},{name:`A2`,value:`a2`},{name:`A3`,value:`a3`},{name:`A4`,value:`a4`},{name:`A5`,value:`a5`},{name:t(`paperSizeLetter`),value:`letter`},{name:t(`paperSizeLegal`),value:`legal`},{name:t(`paperSizeTabloid`),value:`tabloid`}]);return(e,i)=>(D(),C(gr,{modelValue:n.value,"onUpdate:modelValue":i[0]||=e=>n.value=e,items:r.value,label:P(t)(`paperSize`)},null,8,[`modelValue`,`items`,`label`]))}}),_r={class:`font-medium text-sm mb-1 text-primary-500 dark:text-primary-300`},$=T({__name:`OrientationSelect`,props:{modelValue:{},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`),i=m(()=>[{name:t(`orientationPortrait`),value:`portrait`},{name:t(`orientationLandscape`),value:`landscape`}]);return(e,a)=>(D(),r(`div`,null,[b(`div`,_r,L(P(t)(`orientation`)),1),w(P(Hn),{modelValue:n.value,"onUpdate:modelValue":a[0]||=e=>n.value=e,options:i.value,optionLabel:`name`,optionValue:`value`,allowEmpty:!1,pt:{root:`w-full`,pcToggleButton:{root:`flex-1`}}},null,8,[`modelValue`,`options`])]))}}),vr=T({__name:`FullpageSettings`,props:{modelValue:{required:!0},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`);return(e,i)=>(D(),r(d,null,[w(X,{modelValue:n.value.hideFixedElements,"onUpdate:modelValue":i[0]||=e=>n.value.hideFixedElements=e,id:`hideFixedElements`,label:P(t)(`hideFixedElements`),hint:P(t)(`hideFixedElementsHint`),class:`mb-2`},null,8,[`modelValue`,`label`,`hint`]),w(X,{modelValue:n.value.matchWindowSize,"onUpdate:modelValue":i[1]||=e=>n.value.matchWindowSize=e,id:`matchWindowSize`,label:P(t)(`matchWindowSize`)},null,8,[`modelValue`,`label`]),n.value.matchWindowSize?H(``,!0):(D(),r(d,{key:0},[w(Q,{modelValue:n.value.paperSize,"onUpdate:modelValue":i[2]||=e=>n.value.paperSize=e,class:`mt-4 mb-4`},null,8,[`modelValue`]),w($,{modelValue:n.value.orientation,"onUpdate:modelValue":i[3]||=e=>n.value.orientation=e,class:`mb-4`},null,8,[`modelValue`]),w(X,{modelValue:n.value.pageBreaks,"onUpdate:modelValue":i[4]||=e=>n.value.pageBreaks=e,id:`pageBreaks`,label:P(t)(`pageBreaks`)},null,8,[`modelValue`,`label`]),n.value.pageBreaks?(D(),r(d,{key:0},[w(X,{modelValue:n.value.headersAndFooters,"onUpdate:modelValue":i[5]||=e=>n.value.headersAndFooters=e,id:`headersAndFooters`,label:P(t)(`headersAndFooters`),hint:P(t)(`headersAndFootersHint`),class:`mt-2 mb-5`},null,8,[`modelValue`,`label`,`hint`]),w(Z,{modelValue:n.value,"onUpdate:modelValue":i[6]||=e=>n.value=e},null,8,[`modelValue`])],64)):H(``,!0)],64))],64))}}),yr=T({__name:`ArticleSettings`,props:{modelValue:{required:!0},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`),i=[{name:`10px`,value:10},{name:`11px`,value:11},{name:`12px`,value:12},{name:`13px`,value:13},{name:`14px`,value:14},{name:`15px`,value:15},{name:`16px`,value:16},{name:`17px`,value:17},{name:`18px`,value:18},{name:`19px`,value:19},{name:`20px`,value:20},{name:`21px`,value:21},{name:`22px`,value:22},{name:`23px`,value:23},{name:`24px`,value:24},{name:`25px`,value:25},{name:`26px`,value:26}];return(e,a)=>(D(),r(d,null,[w(Q,{modelValue:n.value.paperSize,"onUpdate:modelValue":a[0]||=e=>n.value.paperSize=e,class:`mb-3`},null,8,[`modelValue`]),w($,{modelValue:n.value.orientation,"onUpdate:modelValue":a[1]||=e=>n.value.orientation=e,class:`mb-3`},null,8,[`modelValue`]),w(gr,{label:P(t)(`fontSize`),modelValue:n.value.fontSize,"onUpdate:modelValue":a[2]||=e=>n.value.fontSize=e,items:i,class:`mb-4`},null,8,[`label`,`modelValue`]),w(X,{modelValue:n.value.pageBreaks,"onUpdate:modelValue":a[3]||=e=>n.value.pageBreaks=e,id:`pageBreaks`,label:P(t)(`pageBreaks`)},null,8,[`modelValue`,`label`]),n.value.pageBreaks?(D(),r(d,{key:0},[w(X,{modelValue:n.value.headersAndFooters,"onUpdate:modelValue":a[4]||=e=>n.value.headersAndFooters=e,id:`headersAndFooters`,label:P(t)(`headersAndFooters`),hint:P(t)(`headersAndFootersHint`),class:`mt-2 mb-5`},null,8,[`modelValue`,`label`,`hint`]),w(Z,{modelValue:n.value,"onUpdate:modelValue":a[5]||=e=>n.value=e},null,8,[`modelValue`])],64)):H(``,!0)],64))}}),br=T({__name:`ElementSettings`,props:v({isChatGpt:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`),i=e;return i.isChatGpt&&(n.value.pageBreaks=!1),(e,a)=>(D(),r(d,null,[w(X,{modelValue:n.value.hideFixedElements,"onUpdate:modelValue":a[0]||=e=>n.value.hideFixedElements=e,id:`hideFixedElements`,label:P(t)(`hideFixedElements`),hint:P(t)(`hideFixedElementsHint`),class:`mb-2`},null,8,[`modelValue`,`label`,`hint`]),w(X,{modelValue:n.value.hideBorders,"onUpdate:modelValue":a[1]||=e=>n.value.hideBorders=e,id:`hideBorders`,label:P(t)(`hideBorders`),hint:P(t)(`hideBordersHint`),class:`mb-2`},null,8,[`modelValue`,`label`,`hint`]),w(X,{modelValue:n.value.pageBreaks,"onUpdate:modelValue":a[2]||=e=>n.value.pageBreaks=e,id:`pageBreaks`,label:P(t)(`pageBreaks`),disabled:i.isChatGpt,class:`mb-2`},null,8,[`modelValue`,`label`,`disabled`]),n.value.pageBreaks?(D(),r(d,{key:0},[w(X,{modelValue:n.value.headersAndFooters,"onUpdate:modelValue":a[3]||=e=>n.value.headersAndFooters=e,id:`headersAndFooters`,label:P(t)(`headersAndFooters`),hint:P(t)(`headersAndFootersHint`),class:`mb-5`},null,8,[`modelValue`,`label`,`hint`]),w(Q,{modelValue:n.value.paperSize,"onUpdate:modelValue":a[4]||=e=>n.value.paperSize=e,class:`mb-4`},null,8,[`modelValue`]),w($,{modelValue:n.value.orientation,"onUpdate:modelValue":a[5]||=e=>n.value.orientation=e,class:`mb-4`},null,8,[`modelValue`])],64)):H(``,!0),w(Z,{modelValue:n.value,"onUpdate:modelValue":a[6]||=e=>n.value=e,class:`mt-4`},null,8,[`modelValue`])],64))}}),xr=T({__name:`ChatGptSettings`,props:{modelValue:{required:!0},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`);return(e,i)=>(D(),r(d,null,[w(X,{modelValue:n.value.pageBreaks,"onUpdate:modelValue":i[0]||=e=>n.value.pageBreaks=e,id:`pageBreaks`,label:P(t)(`pageBreaks`)},null,8,[`modelValue`,`label`]),n.value.pageBreaks?(D(),r(d,{key:0},[w(X,{modelValue:n.value.headersAndFooters,"onUpdate:modelValue":i[1]||=e=>n.value.headersAndFooters=e,id:`headersAndFooters`,label:P(t)(`headersAndFooters`),hint:P(t)(`headersAndFootersHint`),class:`mt-2 mb-5`},null,8,[`modelValue`,`label`,`hint`]),w(Q,{modelValue:n.value.paperSize,"onUpdate:modelValue":i[2]||=e=>n.value.paperSize=e,class:`mb-4`},null,8,[`modelValue`]),w($,{modelValue:n.value.orientation,"onUpdate:modelValue":i[3]||=e=>n.value.orientation=e,class:`mb-4`},null,8,[`modelValue`])],64)):H(``,!0),w(Z,{modelValue:n.value,"onUpdate:modelValue":i[4]||=e=>n.value=e,class:`mt-4`},null,8,[`modelValue`])],64))}}),Sr=T({__name:`GeminiSettings`,props:{modelValue:{required:!0},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`);return(e,i)=>(D(),r(d,null,[w(X,{modelValue:n.value.pageBreaks,"onUpdate:modelValue":i[0]||=e=>n.value.pageBreaks=e,id:`pageBreaks`,label:P(t)(`pageBreaks`)},null,8,[`modelValue`,`label`]),n.value.pageBreaks?(D(),r(d,{key:0},[w(X,{modelValue:n.value.headersAndFooters,"onUpdate:modelValue":i[1]||=e=>n.value.headersAndFooters=e,id:`headersAndFooters`,label:P(t)(`headersAndFooters`),hint:P(t)(`headersAndFootersHint`),class:`mt-2 mb-5`},null,8,[`modelValue`,`label`,`hint`]),w(Q,{modelValue:n.value.paperSize,"onUpdate:modelValue":i[2]||=e=>n.value.paperSize=e,class:`mb-4`},null,8,[`modelValue`]),w($,{modelValue:n.value.orientation,"onUpdate:modelValue":i[3]||=e=>n.value.orientation=e,class:`mb-4`},null,8,[`modelValue`])],64)):H(``,!0),w(Z,{modelValue:n.value,"onUpdate:modelValue":i[4]||=e=>n.value=e,class:`mt-4`},null,8,[`modelValue`])],64))}}),Cr=T({__name:`DeepSeekSettings`,props:{modelValue:{required:!0},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`);return(e,i)=>(D(),r(d,null,[w(X,{modelValue:n.value.pageBreaks,"onUpdate:modelValue":i[0]||=e=>n.value.pageBreaks=e,id:`pageBreaks`,label:P(t)(`pageBreaks`)},null,8,[`modelValue`,`label`]),n.value.pageBreaks?(D(),r(d,{key:0},[w(X,{modelValue:n.value.headersAndFooters,"onUpdate:modelValue":i[1]||=e=>n.value.headersAndFooters=e,id:`headersAndFooters`,label:P(t)(`headersAndFooters`),hint:P(t)(`headersAndFootersHint`),class:`mt-2 mb-5`},null,8,[`modelValue`,`label`,`hint`]),w(Q,{modelValue:n.value.paperSize,"onUpdate:modelValue":i[2]||=e=>n.value.paperSize=e,class:`mb-4`},null,8,[`modelValue`]),w($,{modelValue:n.value.orientation,"onUpdate:modelValue":i[3]||=e=>n.value.orientation=e,class:`mb-4`},null,8,[`modelValue`])],64)):H(``,!0),w(Z,{modelValue:n.value,"onUpdate:modelValue":i[4]||=e=>n.value=e,class:`mt-4`},null,8,[`modelValue`])],64))}}),wr=T({__name:`RedditSettings`,props:{modelValue:{required:!0},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`);return(e,i)=>(D(),r(d,null,[w(X,{modelValue:n.value.pageBreaks,"onUpdate:modelValue":i[0]||=e=>n.value.pageBreaks=e,id:`pageBreaks`,label:P(t)(`pageBreaks`)},null,8,[`modelValue`,`label`]),n.value.pageBreaks?(D(),r(d,{key:0},[w(X,{modelValue:n.value.headersAndFooters,"onUpdate:modelValue":i[1]||=e=>n.value.headersAndFooters=e,id:`headersAndFooters`,label:P(t)(`headersAndFooters`),hint:P(t)(`headersAndFootersHint`),class:`mt-2 mb-5`},null,8,[`modelValue`,`label`,`hint`]),w(Q,{modelValue:n.value.paperSize,"onUpdate:modelValue":i[2]||=e=>n.value.paperSize=e,class:`mb-4`},null,8,[`modelValue`]),w($,{modelValue:n.value.orientation,"onUpdate:modelValue":i[3]||=e=>n.value.orientation=e,class:`mb-4`},null,8,[`modelValue`])],64)):H(``,!0),w(Z,{modelValue:n.value,"onUpdate:modelValue":i[4]||=e=>n.value=e,class:`mt-4`},null,8,[`modelValue`])],64))}}),Tr=T({__name:`PikabuSettings`,props:{modelValue:{required:!0},modelModifiers:{}},emits:[`update:modelValue`],setup(e){let{t}=A(),n=z(e,`modelValue`);return(e,i)=>(D(),r(d,null,[w(X,{modelValue:n.value.pageBreaks,"onUpdate:modelValue":i[0]||=e=>n.value.pageBreaks=e,id:`pageBreaks`,label:P(t)(`pageBreaks`)},null,8,[`modelValue`,`label`]),n.value.pageBreaks?(D(),r(d,{key:0},[w(X,{modelValue:n.value.headersAndFooters,"onUpdate:modelValue":i[1]||=e=>n.value.headersAndFooters=e,id:`headersAndFooters`,label:P(t)(`headersAndFooters`),hint:P(t)(`headersAndFootersHint`),class:`mt-2 mb-5`},null,8,[`modelValue`,`label`,`hint`]),w(Q,{modelValue:n.value.paperSize,"onUpdate:modelValue":i[2]||=e=>n.value.paperSize=e,class:`mb-4`},null,8,[`modelValue`]),w($,{modelValue:n.value.orientation,"onUpdate:modelValue":i[3]||=e=>n.value.orientation=e,class:`mb-4`},null,8,[`modelValue`])],64)):H(``,!0),w(Z,{modelValue:n.value,"onUpdate:modelValue":i[4]||=e=>n.value=e,class:`mt-4`},null,8,[`modelValue`])],64))}}),Er={key:0,class:`settings mb-2`},Dr=Je(T({__name:`ActionButtons`,props:{settings:{},userProfile:{},isChatGpt:{type:Boolean},isGemini:{type:Boolean},isDeepSeek:{type:Boolean},isNotion:{type:Boolean},isReddit:{type:Boolean},isPikabu:{type:Boolean}},emits:[`generating`],setup(e,{emit:t}){let n=e,{t:i}=A(),o=t,s=k(null),c=k(null);async function u(e){s.value=null,c.value=e,await Qe(n.settings),await Y(x,{mode:e}),c.value=null,o(`generating`)}async function f(){s.value=null,c.value=`element`,n.userProfile.preferences.showSelectionModeGuide&&await Y(l),await Qe(n.settings),await Y(ce),window.close()}async function p(){c.value=`remove`,n.userProfile.preferences.showRemovalModeGuide&&await Y(Ve),await Qe(n.settings),await Y(a),window.close()}let m=[{key:`fullpage`,labelKey:`fullpage`,show:!n.isChatGpt&&!n.isGemini&&!n.isDeepSeek&&!n.isNotion,click:()=>u(`fullpage`),settingsComp:vr},{key:`element`,labelKey:`pageElement`,show:!n.isNotion,click:()=>f(),settingsComp:br},{key:`article`,labelKey:`article`,show:!n.isChatGpt&&!n.isGemini&&!n.isDeepSeek,click:()=>u(`article`),settingsComp:yr},{key:`chatgpt`,labelKey:`chatgptConversation`,show:n.isChatGpt,click:()=>u(`chatgpt`),settingsComp:xr},{key:`gemini`,labelKey:`geminiConversation`,show:n.isGemini,click:()=>u(`gemini`),settingsComp:Sr},{key:`deepseek`,labelKey:`deepseekConversation`,show:n.isDeepSeek,click:()=>u(`deepseek`),settingsComp:Cr},{key:`reddit`,labelKey:`redditPost`,show:n.isReddit,click:()=>u(`reddit`),settingsComp:wr},{key:`pikabu`,labelKey:`pikabuPost`,show:n.isPikabu,click:()=>u(`pikabu`),settingsComp:Tr}];function h(e){s.value=s.value===e?null:e}return(e,t)=>(D(),r(`div`,null,[(D(),r(d,null,S(m,e=>(D(),r(d,{key:e.key},[e.show?(D(),r(d,{key:0},[w(P(ut),{class:B([`w-full`,{"mb-2":s.value!==e.key}])},{default:I(()=>[w(P(O),{label:P(i)(e.labelKey),onClick:e.click,icon:`pi pi-download`,loading:c.value===e.key,outlined:``,severity:`secondary`,class:B([`action-button justify-start grow`,{"rounded-b-none":s.value===e.key}])},null,8,[`label`,`onClick`,`loading`,`class`]),w(P(O),{onClick:t=>h(e.key),disabled:c.value===e.key,icon:`pi pi-cog`,outlined:``,severity:`secondary`,class:B([`action-button`,{"active rounded-b-none":s.value===e.key}])},null,8,[`onClick`,`disabled`,`class`])]),_:2},1032,[`class`]),s.value===e.key?(D(),r(`div`,Er,[(D(),C(Ae(e.settingsComp),R({modelValue:n.settings.modes[e.key],"onUpdate:modelValue":t=>n.settings.modes[e.key]=t},{ref_for:!0},e.key===`element`?{isChatGpt:n.isChatGpt}:{}),null,16,[`modelValue`,`onUpdate:modelValue`]))])):H(``,!0)],64)):H(``,!0)],64))),64)),w(P(O),{label:P(i)(`removeElements`),onClick:p,loading:c.value===`remove`,outlined:``,severity:`secondary`,class:`action-button justify-start w-full`,icon:`pi pi-trash`},null,8,[`label`,`loading`])]))}}),[[`__scopeId`,`data-v-58d684a8`]]),Or=T({__name:`ShareDialog`,setup(e){let{t}=A(),n=k(!1);function i(e){let t=encodeURIComponent(ze),n=``;switch(e){case`facebook`:n=`https://www.facebook.com/sharer/sharer.php?u=${t}`;break;case`twitter`:n=`https://x.com/intent/post?url=${t}`;break;case`linkedin`:n=`https://www.linkedin.com/shareArticle?mini=true&url=${t}`;break;case`telegram`:n=`https://t.me/share/url?url=${t}`;break;case`whatsapp`:n=`https://api.whatsapp.com/send?text=${t}`;break;default:return}window.open(n,`_blank`)}function a(){navigator.clipboard.writeText(ze)}return(e,o)=>{let s=Ie(`tooltip`);return D(),r(d,null,[w(P(O),{variant:`text`,icon:`pi pi-share-alt`,class:`dark-popup-bottom-menu-button`,title:P(t)(`shareApp`),onClick:o[0]||=e=>n.value=!0},null,8,[`title`]),w(P(De),{visible:n.value,"onUpdate:visible":o[6]||=e=>n.value=e,header:P(t)(`shareApp`),draggable:!1,dismissableMask:!0,class:`mx-2`,modal:``,pt:{header:`pl-4 pr-2 pb-0 pt-2`,content:`p-1`}},{default:I(()=>[Pe(w(P(O),{icon:`pi pi-link`,variant:`text`,size:`large`,onClick:a},null,512),[[s,{value:P(t)(`copied`)},void 0,{focus:!0,top:!0}]]),w(P(O),{icon:`pi pi-telegram`,variant:`text`,size:`large`,onClick:o[1]||=e=>i(`telegram`)}),w(P(O),{icon:`pi pi-whatsapp`,variant:`text`,size:`large`,onClick:o[2]||=e=>i(`whatsapp`)}),w(P(O),{icon:`pi pi-facebook`,variant:`text`,size:`large`,onClick:o[3]||=e=>i(`facebook`)}),w(P(O),{icon:`pi pi-twitter`,variant:`text`,size:`large`,onClick:o[4]||=e=>i(`twitter`)}),w(P(O),{icon:`pi pi-linkedin`,variant:`text`,size:`large`,onClick:o[5]||=e=>i(`linkedin`)})]),_:1},8,[`visible`,`header`])],64)}}}),kr={class:`flex justify-between`},Ar=T({__name:`BottomMenu`,props:{userProfile:{}},setup(e){let{t}=A();function i(e){n.tabs.create({url:n.runtime.getURL(e)})}return(a,o)=>(D(),r(`div`,kr,[w(Or),w(P(O),{title:P(t)(`history`),variant:`text`,icon:`pi pi-history`,class:`dark-popup-bottom-menu-button`,onClick:o[0]||=e=>i(`/conversions.html`)},null,8,[`title`]),w(P(O),{title:P(t)(`support`),variant:`text`,icon:`pi pi-question-circle`,class:`dark-popup-bottom-menu-button`,onClick:o[1]||=e=>i(`/support.html`)},null,8,[`title`]),w(P(O),{title:P(t)(`settings`),variant:`text`,icon:`pi pi-cog`,class:`dark-popup-bottom-menu-button`,onClick:o[2]||=e=>i(`/settings.html`)},null,8,[`title`]),w(Le,{class:`dark-popup-bottom-menu-button`}),w(P(O),{variant:`text`,icon:`pi pi-user`,class:`dark-popup-bottom-menu-button`,onClick:o[3]||=e=>P(n).tabs.create({url:P(Ce)()})}),w(je,{adjustHeight:``,userProfile:e.userProfile},null,8,[`userProfile`])]))}}),jr=T({__name:`Footer`,props:{userProfile:{}},setup(e){let t=e,n=t.userProfile.meta.appRating===null;return(e,i)=>(D(),r(d,null,[w(Ar,{userProfile:t.userProfile,class:B([`text-center`,{"-mb-6":!n}])},null,8,[`userProfile`,`class`]),n?(D(),r(d,{key:0},[w(P(qe),{class:`m-0 mt-1 mb-3 p-0`}),w(Xe,{class:`-mb-2 justify-center`,userProfile:t.userProfile},null,8,[`userProfile`])],64)):H(``,!0)],64))}}),Mr={class:`text-xl text-center font-bold -mt-2 mb-3`},Nr=T({__name:`Header`,setup(e){let{t}=A();return(e,n)=>(D(),r(`h1`,Mr,L(P(t)(`popupHeader`)),1))}}),Pr={class:`mb-3`},Fr={class:`list-decimal pl-5 flex flex-col gap-2 mb-3`},Ir={key:1},Lr=T({__name:`FileAccessGuide`,setup(e){let{t}=A(),i=he(n.runtime.id);return(e,a)=>(D(),r(`div`,null,[b(`div`,Pr,L(P(t)(`localFileNotify`)),1),b(`ol`,Fr,[P(i)?(D(),r(d,{key:0},[b(`li`,null,[b(`span`,{onClick:a[0]||=e=>P(n).tabs.create({url:P(i)}),class:`link`},L(P(t)(`localFileGuideStep1`)),1)]),b(`li`,null,L(P(t)(`localFileGuideStep2`)),1)],64)):(D(),r(`li`,Ir,L(P(t)(`localFileGuideVariant`)),1)),b(`li`,null,[p(L(P(t)(`localFileGuideStep3`))+` `,1),a[1]||=b(`span`,{class:`text-lg`},`😊`,-1)])])]))}}),Rr={class:`main p-4`},zr={class:`mb-2`},Br={key:2,class:`card flex justify-center`};Fe(T({__name:`App`,props:{userProfile:{}},setup(e){let t=e,{t:i}=A(),a=k(null),o=k(!1),s=k(!1),c=k(!1),l=k(!1),u=k(!1),f=k(!1),p=k(!1),m=k(!1),h=k(!0),_=k(!1),v=k(!1),y=k(!1);return n.runtime.onMessage.addListener(e=>{e.command===`CONTENT_SCRIPT_INJECTED`&&(_.value=e.params.success&&e.params.supported)}),g(async()=>{let e=await Gn();a.value=await $e(),m.value=er(e)&&!await _e(),h.value=await $n(e),_.value=await tr(e),o.value=await nr(We),s.value=qn(e),c.value=Jn(e),l.value=Yn(e),u.value=Zn(e),f.value=Xn(e),p.value=Qn(e),v.value=!0,h.value&&!_.value&&(await be(5e3),_.value||(h.value=!1)),h.value&&(Y(Oe),Y(Se))}),(e,n)=>(D(),r(`main`,Rr,[m.value?(D(),r(d,{key:0},[w(Nr),w(Lr,{class:`mb-2`}),w(jr,{userProfile:t.userProfile},null,8,[`userProfile`])],64)):h.value?_.value?v.value&&a.value?(D(),r(d,{key:3},[o.value?(D(),C(or,{key:0,modelValue:o.value,"onUpdate:modelValue":n[0]||=e=>o.value=e},null,8,[`modelValue`])):(D(),r(d,{key:1},[w(Nr),w(Dr,{class:B([{"mt-3":y.value},`mb-1`]),settings:a.value,userProfile:t.userProfile,isChatGpt:s.value,isGemini:c.value,isDeepSeek:l.value,isNotion:u.value,isReddit:f.value,isPikabu:p.value,onGenerating:n[1]||=e=>o.value=!0},null,8,[`class`,`settings`,`userProfile`,`isChatGpt`,`isGemini`,`isDeepSeek`,`isNotion`,`isReddit`,`isPikabu`]),w(jr,{userProfile:t.userProfile},null,8,[`userProfile`])],64))],64)):H(``,!0):(D(),r(`div`,Br,[w(P(Ye),{strokeWidth:`5`,fill:`transparent`,class:`block w-10 h-10 my-16`,animationDuration:`.5s`})])):(D(),r(d,{key:1},[w(Nr),b(`div`,zr,L(P(i)(`notSupportedTab`)),1),w(jr,{userProfile:t.userProfile},null,8,[`userProfile`])],64))]))}}));