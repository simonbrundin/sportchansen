import{_ as x}from"./nuxt-img.f12b9ccf.js";import{_ as y}from"./nuxt-link.3b8f6eb9.js";import{o as i,h as c,q as _,s as v,z as $,u,b as d,j as r,B as k,f as w,D as B,F as S,E as C,t as f,i as b,x as D,y as E}from"./entry.88d7fc36.js";import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";import{g as M}from"./index.6b91311a.js";const q={},I={class:"flex justify-between items-center"},A=r("div",{class:"text-2xl font-extrabold"},"Välkommen!",-1);function N(e,n){const s=x,o=y;return i(),c("div",I,[A,_(o,{to:"/auth/profile"},{default:v(()=>[_(s,{src:"/default-user.png",width:48,quality:80,class:$({"bg-red-500":("nhost"in e?e.nhost:u(d)).auth.getUser()===null})},null,8,["class"])]),_:1})])}const U=h(q,[["render",N]]);async function V(e){const n=M`
    query MyQuery($user_id: uuid!) {
      booking(where: { user_id: { _eq: $user_id } }) {
        id
        start_time
        facility {
          name
        }
        duration
        door_code
        court_id
      }
    }
  `,s={user_id:e},o=n.definitions[0].selectionSet.selections[0].name.value,{data:t}=await k(n,s);if(t!=null&&t.value&&t.value[o])return t.value[o]}const j={class:"flex flex-col gap-4"},L=r("h1",null,"Mina bokningar",-1),Q={class:"flex gap-4"},R=["onClick"],T=w({__name:"MyBookings",async setup(e){var m;let n,s;const o=(m=d.auth.getUser())==null?void 0:m.id,t=([n,s]=B(()=>V(o)),n=await n,s(),n);function g(l){const p=new Date(l),a={month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return p.toLocaleDateString("se-SE",a)}return(l,p)=>(i(),c("div",j,[L,r("div",Q,[(i(!0),c(S,null,C(u(t),a=>(i(),c("div",{key:a.id,class:"flex flex-col p-4 w-40 bg-slate-600 rounded-lg",onClick:J=>l.$router.push(`/booking/${a.id}`)},[r("div",null,f(g(a.start_time)),1),r("div",null,f(a.facility.name),1)],8,R))),128))])]))}});const z={},F=e=>(D("data-v-a3f257a2"),e=e(),E(),e),P={class:"text-white flex flex-col gap-4",id:"index-page"},Y={key:0},G=F(()=>r("div",{class:"flex gap-4"},null,-1));function H(e,n){var t;const s=U,o=T;return i(),c("div",P,[_(s),((t=("nhost"in e?e.nhost:u(d)).auth.getUser())==null?void 0:t.id)!==void 0?(i(),c("div",Y,[_(o)])):b("",!0),G])}const ee=h(z,[["render",H],["__scopeId","data-v-a3f257a2"]]);export{ee as default};
