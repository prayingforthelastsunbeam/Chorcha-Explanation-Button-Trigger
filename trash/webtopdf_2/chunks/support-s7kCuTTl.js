import{$t as e,At as t,Bt as n,D as r,E as i,Ft as a,G as o,Ht as s,I as c,Lt as l,Nt as u,Qt as ee,Rt as d,T as f,Ut as p,Wt as m,X as h,Y as te,Zt as g,_,cn as v,d as y,en as b,jt as ne,ln as x,nn as S,on as C,pn as w,qt as T,r as E,sn as D,t as re,tn as ie,un as O,w as ae,zt as k}from"./app-DLfkwyB2.js";import{t as oe}from"./pages-Bz1ts7NU.js";import{t as se}from"./chevrondown-Cwi3YYxD.js";import{t as A}from"./card-DWnowoXV.js";import{t as j}from"./message-CJoxkkU_.js";var M={name:`ChevronRightIcon`,extends:f};function N(e){return L(e)||I(e)||F(e)||P()}function P(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(e,t){if(e){if(typeof e==`string`)return R(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}function I(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function L(e){if(Array.isArray(e))return R(e)}function R(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function z(e,t,r,i,a,o){return g(),n(`svg`,T({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),N(t[0]||=[l(`path`,{d:`M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z`,fill:`currentColor`},null,-1)]),16)}M.render=z;var B={name:`ChevronUpIcon`,extends:f};function V(e){return G(e)||W(e)||U(e)||H()}function H(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(e,t){if(e){if(typeof e==`string`)return K(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}function W(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function G(e){if(Array.isArray(e))return K(e)}function K(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ce(e,t,r,i,a,o){return g(),n(`svg`,T({width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},e.pti()),V(t[0]||=[l(`path`,{d:`M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z`,fill:`currentColor`},null,-1)]),16)}B.render=ce;var le=r.extend({name:`accordioncontent`,classes:{root:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`}}),q={name:`AccordionContent`,extends:{name:`BaseAccordionContent`,extends:i,props:{as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:le,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],computed:{id:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},ariaLabelledby:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},attrs:function(){return T(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{id:this.id,role:`region`,"aria-labelledby":this.ariaLabelledby,"data-pc-name":`accordioncontent`,"data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function ue(t,n,r,i,a,o){return t.asChild?e(t.$slots,`default`,{key:1,class:O(t.cx(`root`)),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs}):(g(),d(ne,T({key:0,name:`p-collapsible`},t.ptm(`transition`,o.ptParams)),{default:C(function(){return[!o.$pcAccordion.lazy||o.$pcAccordionPanel.active?D((g(),d(S(t.as),T({key:0,class:t.cx(`root`)},o.attrs),{default:C(function(){return[l(`div`,T({class:t.cx(`contentWrapper`)},t.ptm(`contentWrapper`,o.ptParams)),[l(`div`,T({class:t.cx(`content`)},t.ptm(`content`,o.ptParams)),[e(t.$slots,`default`)],16)],16)]}),_:3},16,[`class`])),[[u,o.$pcAccordion.lazy?!0:o.$pcAccordionPanel.active]]):k(``,!0)]}),_:3},16))}q.render=ue;var de=r.extend({name:`accordionheader`,classes:{root:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`}}),J={name:`AccordionHeader`,extends:{name:`BaseAccordionHeader`,extends:i,props:{as:{type:[String,Object],default:`BUTTON`},asChild:{type:Boolean,default:!1}},style:de,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`,`$pcAccordionPanel`],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onEnterKey(e);break}},onArrowDownKey:function(e){var t=this.findNextPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onHomeKey(e),e.preventDefault()},onArrowUpKey:function(e){var t=this.findPrevPanel(this.findPanel(e.currentTarget));t?this.changeFocusedPanel(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastPanel();this.changeFocusedPanel(e,t),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findPanel:function(e){return e?.closest(`[data-pc-name="accordionpanel"]`)},findHeader:function(e){return te(e,`[data-pc-name="accordionheader"]`)},findNextPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?c(t,`data-p-disabled`)?this.findNextPanel(t):this.findHeader(t):null},findPrevPanel:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?c(t,`data-p-disabled`)?this.findPrevPanel(t):this.findHeader(t):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(e,t){o(this.findHeader(t))}},computed:{id:function(){return`${this.$pcAccordion.$id}_accordionheader_${this.$pcAccordionPanel.value}`},ariaControls:function(){return`${this.$pcAccordion.$id}_accordioncontent_${this.$pcAccordionPanel.value}`},attrs:function(){return T(this.asAttrs,this.a11yAttrs,this.ptmi(`root`,this.ptParams))},asAttrs:function(){return this.as===`BUTTON`?{type:`button`,disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":`accordionheader`,"data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return h({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:B,ChevronDownIcon:se},directives:{ripple:ae}};function fe(t,n,r,i,a,o){var s=ie(`ripple`);return t.asChild?e(t.$slots,`default`,{key:1,class:O(t.cx(`root`)),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):D((g(),d(S(t.as),T({key:0,"data-p":o.dataP,class:t.cx(`root`),onClick:o.onClick},o.attrs),{default:C(function(){return[e(t.$slots,`default`,{active:o.$pcAccordionPanel.active}),e(t.$slots,`toggleicon`,{active:o.$pcAccordionPanel.active,class:O(t.cx(`toggleicon`))},function(){return[o.$pcAccordionPanel.active?(g(),d(S(o.$pcAccordion.$slots.collapseicon?o.$pcAccordion.$slots.collapseicon:o.$pcAccordion.collapseIcon?`span`:`ChevronUpIcon`),T({key:0,class:[o.$pcAccordion.collapseIcon,t.cx(`toggleicon`)],"aria-hidden":`true`},t.ptm(`toggleicon`,o.ptParams)),null,16,[`class`])):(g(),d(S(o.$pcAccordion.$slots.expandicon?o.$pcAccordion.$slots.expandicon:o.$pcAccordion.expandIcon?`span`:`ChevronDownIcon`),T({key:1,class:[o.$pcAccordion.expandIcon,t.cx(`toggleicon`)],"aria-hidden":`true`},t.ptm(`toggleicon`,o.ptParams)),null,16,[`class`]))]})]}),_:3},16,[`data-p`,`class`,`onClick`])),[[s]])}J.render=fe;var pe=r.extend({name:`accordionpanel`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-accordionpanel`,{"p-accordionpanel-active":t.active,"p-disabled":n.disabled}]}}}),Y={name:`AccordionPanel`,extends:{name:`BaseAccordionPanel`,extends:i,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:`DIV`},asChild:{type:Boolean,default:!1}},style:pe,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},inheritAttrs:!1,inject:[`$pcAccordion`],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return T(this.a11yAttrs,this.ptmi(`root`,this.ptParams))},a11yAttrs:function(){return{"data-pc-name":`accordionpanel`,"data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function me(t,n,r,i,a,o){return t.asChild?e(t.$slots,`default`,{key:1,class:O(t.cx(`root`)),active:o.active,a11yAttrs:o.a11yAttrs}):(g(),d(S(t.as),T({key:0,class:t.cx(`root`)},o.attrs),{default:C(function(){return[e(t.$slots,`default`)]}),_:3},16,[`class`]))}Y.render=me;var he=r.extend({name:`accordion`,style:`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,classes:{root:`p-accordion p-component`}}),X={name:`Accordion`,extends:{name:`BaseAccordion`,extends:i,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:he,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(e,t){var n=this;return{root:T({onClick:function(e){return n.onTabClick(e,t)}},this.getTabProp(e,`headerProps`),this.getTabPT(e,`header`,t)),toggleicon:T(this.getTabProp(e,`headeractionprops`),this.getTabPT(e,`headeraction`,t))}},getContentPT:function(e,t){return{root:T(this.getTabProp(e,`contentProps`),this.getTabPT(e,`toggleablecontent`,t)),transition:this.getTabPT(e,`transition`,t),content:this.getTabPT(e,`content`,t)}},getTabPT:function(e,t,n){var r=this.tabs.length,i={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:n,count:r,first:n===0,last:n===r-1,active:this.isItemActive(`${n}`)}};return T(this.ptm(`accordiontab.${t}`,i),this.ptmo(this.getTabProp(e,`pt`),t,i))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:Y,AccordionHeader:J,AccordionContent:q,ChevronUpIcon:B,ChevronRightIcon:M}};function ge(t,r,i,o,s,c){var l=b(`AccordionHeader`),u=b(`AccordionContent`),f=b(`AccordionPanel`);return g(),n(`div`,T({class:t.cx(`root`)},t.ptmi(`root`)),[c.hasAccordionTab?(g(!0),n(a,{key:0},ee(c.tabs,function(e,r){return g(),d(f,{key:c.getKey(e,r),value:`${r}`,pt:{root:c.getTabPT(e,`root`,r)},disabled:c.getTabProp(e,`disabled`)},{default:C(function(){return[p(l,{class:O(c.getTabProp(e,`headerClass`)),pt:c.getHeaderPT(e,r)},{toggleicon:C(function(n){return[n.active?(g(),d(S(t.$slots.collapseicon?t.$slots.collapseicon:t.collapseIcon?`span`:`ChevronDownIcon`),T({key:0,class:[t.collapseIcon,n.class],"aria-hidden":`true`},{ref_for:!0},c.getTabPT(e,`headericon`,r)),null,16,[`class`])):(g(),d(S(t.$slots.expandicon?t.$slots.expandicon:t.expandIcon?`span`:`ChevronUpIcon`),T({key:1,class:[t.expandIcon,n.class],"aria-hidden":`true`},{ref_for:!0},c.getTabPT(e,`headericon`,r)),null,16,[`class`]))]}),default:C(function(){return[e.children&&e.children.headericon?(g(),d(S(e.children.headericon),{key:0,isTabActive:c.isItemActive(`${r}`),active:c.isItemActive(`${r}`),index:r},null,8,[`isTabActive`,`active`,`index`])):k(``,!0),e.props&&e.props.header?(g(),n(`span`,T({key:1,ref_for:!0},c.getTabPT(e,`headertitle`,r)),w(e.props.header),17)):k(``,!0),e.children&&e.children.header?(g(),d(S(e.children.header),{key:2})):k(``,!0)]}),_:2},1032,[`class`,`pt`]),p(u,{pt:c.getContentPT(e,r)},{default:C(function(){return[(g(),d(S(e)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):e(t.$slots,`default`,{key:1})],16)}X.render=ge;var _e=r.extend({name:`tag`,style:`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,classes:{root:function(e){var t=e.props;return[`p-tag p-component`,{"p-tag-info":t.severity===`info`,"p-tag-success":t.severity===`success`,"p-tag-warn":t.severity===`warn`,"p-tag-danger":t.severity===`danger`,"p-tag-secondary":t.severity===`secondary`,"p-tag-contrast":t.severity===`contrast`,"p-tag-rounded":t.rounded}]},icon:`p-tag-icon`,label:`p-tag-label`}}),ve={name:`BaseTag`,extends:i,props:{value:null,severity:null,rounded:Boolean,icon:String},style:_e,provide:function(){return{$pcTag:this,$parentInstance:this}}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Z(e)}function ye(e,t,n){return(t=be(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e){var t=xe(e,`string`);return Z(t)==`symbol`?t:t+``}function xe(e,t){if(Z(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Z(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Q={name:`Tag`,extends:ve,inheritAttrs:!1,computed:{dataP:function(){return h(ye({rounded:this.rounded},this.severity,this.severity))}}},Se=[`data-p`];function Ce(t,r,i,a,o,s){return g(),n(`span`,T({class:t.cx(`root`),"data-p":s.dataP},t.ptmi(`root`)),[t.$slots.icon?(g(),d(S(t.$slots.icon),T({key:0,class:t.cx(`icon`)},t.ptm(`icon`)),null,16,[`class`])):t.icon?(g(),n(`span`,T({key:1,class:[t.cx(`icon`),t.icon]},t.ptm(`icon`)),null,16)):k(``,!0),t.value!=null||t.$slots.default?e(t.$slots,`default`,{key:2},function(){return[l(`span`,T({class:t.cx(`label`)},t.ptm(`label`)),w(t.value),17)]}):k(``,!0)],16,Se)}Q.render=Ce;var we={class:`flex justify-center mt-10 mx-2`},Te={class:`mt-3 mb-5`},Ee={class:`mt-3 mb-5`},De={class:`text-xl font-medium mt-12 px-4`},$={class:`list-decimal pl-5 flex flex-col gap-3`},Oe=[`innerHTML`],ke=[`innerHTML`],Ae={class:`list-decimal pl-5 flex flex-col gap-3`},je=[`innerHTML`],Me={class:`mb-2 font-bold`},Ne={class:`list-decimal pl-5 flex flex-col gap-3 mb-4`},Pe={class:`mb-2`};re(m({__name:`App`,props:{userProfile:{}},setup(e){let r=e,{t:i}=y();document.title=i(`support`);let o=v(t.runtime.getManifest().version);return(e,t)=>(g(),n(a,null,[p(oe,{userProfile:r.userProfile},null,8,[`userProfile`]),l(`div`,we,[p(x(A),{class:`shadow-md md:w-4xl`},{title:C(()=>[t[0]||=l(`i`,{class:`pi pi-question-circle`},null,-1),s(` `+w(x(i)(`support`)),1)]),content:C(()=>[l(`div`,Te,w(x(i)(`contactSupport`)),1),l(`div`,Ee,[p(x(_),{label:x(i)(`contactSupportButton`),as:`a`,target:`_blank`,href:x(E)(),class:`dark-button-variant`},null,8,[`label`,`href`])]),p(x(Q),{value:`${x(i)(`version`)}: ${o.value}`},null,8,[`value`]),l(`h2`,De,w(x(i)(`faq`)),1),p(x(X),null,{default:C(()=>[p(x(Y),{value:`0`},{default:C(()=>[p(x(J),null,{default:C(()=>[s(w(x(i)(`howToRemoveElements`)),1)]),_:1}),p(x(q),null,{default:C(()=>[p(x(j),{severity:`secondary`,class:`mt-1 mb-4 transition-none`},{default:C(()=>[s(w(x(i)(`howToRemoveElementsHint`)),1)]),_:1}),l(`ol`,$,[l(`li`,null,w(x(i)(`howToRemoveElements1`)),1),l(`li`,{innerHTML:x(i)(`howToRemoveElements2`,{shortcut:`<span class='tag'>CTRL+Z</span>`})},null,8,Oe),l(`li`,{innerHTML:x(i)(`howToRemoveElements3`,{shortcut:`<span class='tag'>ESC</span>`})},null,8,ke)])]),_:1})]),_:1}),p(x(Y),{value:`1`},{default:C(()=>[p(x(J),null,{default:C(()=>[s(w(x(i)(`howToExportElement`)),1)]),_:1}),p(x(q),null,{default:C(()=>[p(x(j),{severity:`secondary`,class:`mt-1 mb-4 transition-none`},{default:C(()=>[s(w(x(i)(`howToExportElementHint`)),1)]),_:1}),l(`ol`,Ae,[l(`li`,null,w(x(i)(`howToExportElement1`)),1),l(`li`,{innerHTML:x(i)(`howToExportElement2`,{shortcut:`<span class='tag'>ESC</span>`})},null,8,je)])]),_:1})]),_:1}),p(x(Y),{value:`2`},{default:C(()=>[p(x(J),null,{default:C(()=>[s(w(x(i)(`howToFixChineseCharacters`)),1)]),_:1}),p(x(q),null,{default:C(()=>[p(x(j),{severity:`secondary`,class:`mt-1 mb-4 transition-none`},{default:C(()=>[s(w(x(i)(`howToFixChineseCharactersHint`)),1)]),_:1}),l(`p`,Me,w(x(i)(`howToFixChineseCharactersStepsHeader`))+`:`,1),l(`ol`,Ne,[l(`li`,null,w(x(i)(`howToFixChineseCharacters1`)),1),l(`li`,null,w(x(i)(`howToFixChineseCharacters2`)),1),l(`li`,null,w(x(i)(`howToFixChineseCharacters3`)),1),l(`li`,null,w(x(i)(`howToFixChineseCharacters4`)),1),l(`li`,null,w(x(i)(`howToFixChineseCharacters5`)),1)]),l(`p`,Pe,w(x(i)(`howToFixChineseCharactersAfterwards`)),1),l(`p`,null,[s(w(x(i)(`howToFixChineseCharactersSeeMore`))+`: `,1),t[1]||=l(`a`,{href:`https://discussionschinese.apple.com/thread/255765808`,class:`link`,target:`_blank`,rel:`noopener noreferrer`},`https://discussionschinese.apple.com/thread/255765808`,-1)])]),_:1})]),_:1})]),_:1})]),_:1})])],64))}}));