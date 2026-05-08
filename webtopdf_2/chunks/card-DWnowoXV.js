import{$t as e,Bt as t,D as n,E as r,Lt as i,Zt as a,qt as o,zt as s}from"./app-DLfkwyB2.js";var c={name:`Card`,extends:{name:`BaseCard`,extends:r,style:n.extend({name:`card`,style:`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function l(n,r,c,l,u,d){return a(),t(`div`,o({class:n.cx(`root`)},n.ptmi(`root`)),[n.$slots.header?(a(),t(`div`,o({key:0,class:n.cx(`header`)},n.ptm(`header`)),[e(n.$slots,`header`)],16)):s(``,!0),i(`div`,o({class:n.cx(`body`)},n.ptm(`body`)),[n.$slots.title||n.$slots.subtitle?(a(),t(`div`,o({key:0,class:n.cx(`caption`)},n.ptm(`caption`)),[n.$slots.title?(a(),t(`div`,o({key:0,class:n.cx(`title`)},n.ptm(`title`)),[e(n.$slots,`title`)],16)):s(``,!0),n.$slots.subtitle?(a(),t(`div`,o({key:1,class:n.cx(`subtitle`)},n.ptm(`subtitle`)),[e(n.$slots,`subtitle`)],16)):s(``,!0)],16)):s(``,!0),i(`div`,o({class:n.cx(`content`)},n.ptm(`content`)),[e(n.$slots,`content`)],16),n.$slots.footer?(a(),t(`div`,o({key:1,class:n.cx(`footer`)},n.ptm(`footer`)),[e(n.$slots,`footer`)],16)):s(``,!0)],16)],16)}c.render=l;export{c as t};