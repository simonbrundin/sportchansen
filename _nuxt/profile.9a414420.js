import{z as N,A as o,B as f,f as k,r as S,C as w,D as B,E as q,b as _,e as x,o as y,h as b,j as h,u as l,c as O,F as C,i as p,t as z,q as j,s as A}from"./entry.3217ecdb.js";import{_ as I}from"./nuxt-link.bee9b419.js";const U=()=>N().$img,$={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},E=e=>{const i=o(()=>({provider:e.provider,preset:e.preset})),s=o(()=>({width:f(e.width),height:f(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),a=o(()=>({...e.modifiers,width:f(e.width),height:f(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:i,attrs:s,modifiers:a}},L={...$,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},V=k({name:"NuxtImg",props:L,emits:["load"],setup:(e,i)=>{const s=U(),a=E(e),v=S(!1),n=o(()=>s.getSizes(e.src,{...a.options.value,sizes:e.sizes,modifiers:{...a.modifiers.value,width:f(e.width),height:f(e.height)}})),m=o(()=>{const t={...a.attrs.value,"data-nuxt-img":""};return e.sizes&&(t.sizes=n.value.sizes,t.srcset=n.value.srcset),t}),u=o(()=>{let t=e.placeholder;if(t===""&&(t=!0),!t||v.value)return!1;if(typeof t=="string")return t;const r=Array.isArray(t)?t:typeof t=="number"?[t,t]:[10,10];return s(e.src,{...a.modifiers.value,width:r[0],height:r[1],quality:r[2]||50},a.options.value)}),d=o(()=>e.sizes?n.value.src:s(e.src,a.modifiers.value,a.options.value)),c=o(()=>u.value?u.value:d.value);if(e.preload){const t=Object.values(n.value).every(r=>r);w({link:[{rel:"preload",as:"image",...t?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:c.value}}]})}const g=S();return B(()=>{if(u.value){const t=new Image;t.src=d.value,t.onload=r=>{g.value.src=d.value,v.value=!0,i.emit("load",r)}}else g.value.onload=t=>{i.emit("load",t)}}),()=>q("img",{ref:g,key:c.value,src:c.value,...m.value,...i.attrs})}}),D=()=>{_.auth.signOut(),x("/auth/login")},P={class:"flex flex-col gap-4"},T={class:"flex justify-center"},F={key:0},H=h("button",null,"Tillbaka",-1),G=k({__name:"profile",setup(e){const i=_.auth.getUser();return(s,a)=>{var m,u,d,c,g;const v=V,n=I;return y(),b("div",P,[h("div",T,[(m=l(i))!=null&&m.avatarUrl?(y(),O(v,{key:0,src:(u=l(i))==null?void 0:u.avatarUrl,width:128,quality:80,format:"png",class:C([{"bg-red-500":("nhost"in s?s.nhost:l(_)).auth.getUser()===null},"rounded-full bg-slate-700"])},null,8,["src","class"])):p("",!0)]),h("div",null,z((d=l(i))==null?void 0:d.email),1),(c=l(i))!=null&&c.phoneNumber?(y(),b("div",F,z((g=l(i))==null?void 0:g.phoneNumber),1)):p("",!0),h("button",{onClick:a[0]||(a[0]=t=>("signOut"in s?s.signOut:l(D))())},"Logga ut"),j(n,{to:"/"},{default:A(()=>[H]),_:1})])}}});export{G as default};
