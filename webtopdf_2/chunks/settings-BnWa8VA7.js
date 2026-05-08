import{$t as e,Bt as t,D as n,Ft as r,Ht as i,Jt as a,Lt as o,Qt as s,Ut as c,Wt as l,X as u,Zt as d,b as f,cn as p,d as m,ln as h,on as g,pn as _,qt as v,t as y,un as b,zt as x}from"./app-DLfkwyB2.js";import{t as S}from"./pages-Bz1ts7NU.js";import{t as C}from"./card-DWnowoXV.js";import{r as w,t as T}from"./settings-DsYrOBuw.js";var E=n.extend({name:`toggleswitch`,style:`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-toggleswitch p-component`,{"p-toggleswitch-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$invalid}]},input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`},inlineStyles:{root:{position:`relative`}}}),D={name:`ToggleSwitch`,extends:{name:`BaseToggleSwitch`,extends:f,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:E,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return u({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},O=[`data-p-checked`,`data-p-disabled`,`data-p`],k=[`id`,`checked`,`tabindex`,`disabled`,`readonly`,`aria-checked`,`aria-labelledby`,`aria-label`,`aria-invalid`],A=[`data-p`],j=[`data-p`];function M(n,r,i,a,s,c){return d(),t(`div`,v({class:n.cx(`root`),style:n.sx(`root`)},c.getPTOptions(`root`),{"data-p-checked":c.checked,"data-p-disabled":n.disabled,"data-p":c.dataP}),[o(`input`,v({id:n.inputId,type:`checkbox`,role:`switch`,class:[n.cx(`input`),n.inputClass],style:n.inputStyle,checked:c.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-checked":c.checked,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:r[0]||=function(){return c.onFocus&&c.onFocus.apply(c,arguments)},onBlur:r[1]||=function(){return c.onBlur&&c.onBlur.apply(c,arguments)},onChange:r[2]||=function(){return c.onChange&&c.onChange.apply(c,arguments)}},c.getPTOptions(`input`)),null,16,k),o(`div`,v({class:n.cx(`slider`)},c.getPTOptions(`slider`),{"data-p":c.dataP}),[o(`div`,v({class:n.cx(`handle`)},c.getPTOptions(`handle`),{"data-p":c.dataP}),[e(n.$slots,`handle`,{checked:c.checked})],16,j)],16,A)],16,O)}D.render=M;var N={key:0,class:`flex justify-center mt-10 mx-2`},P={class:`flex items-center gap-2 mt-4 mb-3`},F=[`for`],I={class:`text-primary-500 dark:text-primary-400`};y(l({__name:`App`,props:{userProfile:{}},setup(e){let{t:n}=m(),l=p(null);document.title=n(`settings`),a(async()=>{l.value=await T(),w(l)});let u=[{name:`enablePreScrollLazyLoading`,hint:`enablePreScrollLazyLoadingHint`},{name:`reloadPageAfterExport`,hint:`reloadPageAfterExportHint`},{name:`addDateTimeToFilename`,hint:`addDateTimeToFilenameHint`}];return(a,f)=>(d(),t(r,null,[c(S,{userProfile:e.userProfile},null,8,[`userProfile`]),l.value?(d(),t(`div`,N,[c(h(C),{class:`shadow-md max-w-2xl`},{title:g(()=>[f[0]||=o(`i`,{class:`pi pi-cog`},null,-1),i(` `+_(h(n)(`settings`)),1)]),content:g(()=>[(d(),t(r,null,s(u,(e,t)=>o(`div`,{class:b(t<u.length-1?`mb-6`:``)},[o(`div`,P,[c(h(D),{modelValue:l.value[e.name],"onUpdate:modelValue":t=>l.value[e.name]=t,inputId:e.name,binary:``},null,8,[`modelValue`,`onUpdate:modelValue`,`inputId`]),o(`label`,{for:e.name,class:`cursor-pointer text-primary`},_(h(n)(e.name)),9,F)]),o(`div`,I,_(h(n)(e.hint)),1)],2)),64))]),_:1})])):x(``,!0)],64))}}));