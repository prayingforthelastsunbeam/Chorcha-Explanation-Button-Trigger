import{$t as e,At as t,Bt as n,D as r,E as i,Ft as a,Ht as o,It as s,Lt as c,Qt as l,Rt as u,Ut as d,Wt as f,X as p,Xt as m,Zt as h,_ as g,cn as _,d as v,f as y,ln as b,nn as x,on as S,pn as C,qt as w,s as T,st as E,t as D,zt as O}from"./app-DLfkwyB2.js";import{t as k}from"./pages-Bz1ts7NU.js";import{c as A,d as j,l as M,n as N,o as P,s as F,t as I}from"./DownloadButton-Btm88D84.js";import{r as L}from"./Rating-DdyjqI0J.js";import{t as R}from"./card-DWnowoXV.js";var z=r.extend({name:`chip`,style:`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,classes:{root:`p-chip p-component`,image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`}}),B={name:`Chip`,extends:{name:`BaseChip`,extends:i,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:z,provide:function(){return{$pcChip:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`remove`],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)},close:function(e){this.visible=!1,this.$emit(`remove`,e)}},computed:{dataP:function(){return p({removable:this.removable})}},components:{TimesCircleIcon:j}},V=[`aria-label`,`data-p`],H=[`src`];function U(t,r,i,a,o,s){return o.visible?(h(),n(`div`,w({key:0,class:t.cx(`root`),"aria-label":t.label},t.ptmi(`root`),{"data-p":s.dataP}),[e(t.$slots,`default`,{},function(){return[t.image?(h(),n(`img`,w({key:0,src:t.image},t.ptm(`image`),{class:t.cx(`image`)}),null,16,H)):t.$slots.icon?(h(),u(x(t.$slots.icon),w({key:1,class:t.cx(`icon`)},t.ptm(`icon`)),null,16,[`class`])):t.icon?(h(),n(`span`,w({key:2,class:[t.cx(`icon`),t.icon]},t.ptm(`icon`)),null,16)):O(``,!0),t.label===null?O(``,!0):(h(),n(`div`,w({key:3,class:t.cx(`label`)},t.ptm(`label`)),C(t.label),17))]}),t.removable?e(t.$slots,`removeicon`,{key:0,removeCallback:s.close,keydownCallback:s.onKeydown},function(){return[(h(),u(x(t.removeIcon?`span`:`TimesCircleIcon`),w({class:[t.cx(`removeIcon`),t.removeIcon],onClick:s.close,onKeydown:s.onKeydown},t.ptm(`removeIcon`)),null,16,[`class`,`onClick`,`onKeydown`]))]}):O(``,!0)],16,V)):O(``,!0)}B.render=U;var W={class:`flex flex-col items-center mt-10 mx-2`},G={class:`text-center mb-15`},K={class:`text-4xl font-bold mb-3`},q={class:`text-xl mb-8`},J={class:`text-xl font-medium mb-4`},Y={class:`font-bold`},X={key:1},Z={key:1,class:`text-xl mt-5`},Q={key:0},$={class:`mt-3 mb-6`},ee={class:`flex justify-between gap-8`},te={class:`flex gap-2`},ne={class:`flex items-center gap-2`};D(f({__name:`App`,props:{userProfile:{}},setup(e){let r=e,{t:i}=v(),f=_(null),p=s(()=>f.value?.reduce((e,t)=>e+t.filesize,0)??0),x=s(()=>E(p.value)),w=s(()=>f.value&&f.value.length>0),D=_(!0),j=_(null);document.title=i(`historyHeader`);async function z(){D.value=!0,f.value=await M(),D.value=!1}async function V(e){await A(e.id),await z()}async function H(){await F(),await z()}return m(async()=>{j.value=await T(),await z()}),(e,s)=>(h(),n(a,null,[d(k,{userProfile:r.userProfile},null,8,[`userProfile`]),c(`div`,W,[c(`div`,G,[c(`h1`,K,C(b(i)(`historyHeader`)),1),w.value?(h(),n(a,{key:0},[c(`div`,q,C(b(i)(`historySubtitle`)),1),c(`div`,J,[o(C(b(i)(`historyTotalSize`))+`: `,1),c(`span`,Y,C(x.value),1)]),d(b(g),{onClick:H,label:b(i)(`clearHistory`),severity:b(y)===`dark`?`secondary`:`danger`,variant:b(y)===`dark`?`outlined`:void 0,icon:`pi pi-trash`},null,8,[`label`,`severity`,`variant`])],64)):(h(),n(`div`,X,[D.value?(h(),u(b(L),{key:0,strokeWidth:`2`,fill:`transparent`,class:`block w-30 h-30 mt-30`,animationDuration:`.5s`})):(h(),n(`div`,Z,C(b(i)(`emptyHistory`)),1))]))]),w.value&&j.value?(h(),n(`div`,Q,[(h(!0),n(a,null,l(f.value,e=>(h(),u(b(R),{class:`shadow-sm mb-4`},{title:S(()=>[o(C(e.title),1)]),content:S(()=>[c(`div`,$,C(new Date(e.createdAt).toLocaleString()),1),c(`div`,ee,[c(`div`,te,[d(b(g),{as:`a`,href:b(t).runtime.getURL(`/viewer.html?id=${e.id}`),icon:`pi pi-eye`,title:b(i)(`viewPDF`),severity:`secondary`,class:`dark-button-variant`},null,8,[`href`,`title`]),d(I,{pdf:e,userProfile:j.value,withText:!1,severity:`secondary`},null,8,[`pdf`,`userProfile`]),d(N,{pdf:e,withText:!1,severity:`secondary`},null,8,[`pdf`]),d(P,{pdf:e,userProfile:j.value,withText:!1,severity:`secondary`},null,8,[`pdf`,`userProfile`]),d(b(g),{as:`a`,href:e.url,icon:`pi pi-external-link`,title:b(i)(`openSourcePage`),severity:`secondary`,target:`_blank`,class:`dark-button-variant`},null,8,[`href`,`title`])]),c(`div`,ne,[d(b(B),{label:b(E)(e.filesize)},null,8,[`label`]),d(b(g),{severity:`danger`,variant:`text`,icon:`pi pi-trash`,onClick:t=>V(e),title:b(i)(`deleteFromHistory`)},null,8,[`onClick`,`title`])])])]),_:2},1024))),256))])):O(``,!0)])],64))}}));