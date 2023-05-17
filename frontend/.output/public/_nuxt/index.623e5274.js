import{_ as y}from"./nuxt-link.627074fe.js";import{o as a,h as c,q as h,s as x,j as o,F as v,u,b as l,H as k,f as $,J as w,K as B,L as b,t as p,c as C,i as M}from"./entry.accd2e30.js";import{_ as g}from"./_plugin-vue_export-helper.c27b6911.js";import{g as q}from"./index.3a45b0b2.js";const D=""+new URL("default-user.8da67953.png",import.meta.url).href,E={},L={class:"flex justify-between items-center"},S=o("div",{class:"text-2xl font-extrabold"},"Välkommen!",-1);function U(n,e){const s=y;return a(),c("div",L,[S,h(s,{to:"/auth/profile"},{default:x(()=>[o("img",{src:D,width:48,quality:80,class:v({"bg-red-500":("nhost"in n?n.nhost:u(l)).auth.getUser()===null})},null,2)]),_:1})])}const A=g(E,[["render",U]]);async function N(n){const e=q`
    query MyQuery($user_id: uuid!) {
      booking(where: { user_id: { _eq: $user_id } }) {
        id
        start_time
        facility {
          name
        }
        duration
      }
    }
  `,s={user_id:n},i=e.definitions[0].selectionSet.selections[0].name.value,{data:t}=await k(e,s);if(t!=null&&t.value&&t.value[i])return t.value[i]}const R={class:"flex flex-col gap-4"},V=o("h1",{class:"font-extrabold"},"Mina bokningar",-1),j={class:"flex gap-4"},Q=["onClick"],T=$({__name:"MyBookings",async setup(n){var f;let e,s;const i=(f=l.auth.getUser())==null?void 0:f.id,t=([e,s]=w(()=>N(i)),e=await e,s(),e);function d(_){const m=new Date(_),r={month:"short",day:"numeric",hour:"numeric",minute:"numeric"};return m.toLocaleDateString("se-SE",r)}return(_,m)=>(a(),c("div",R,[V,o("div",j,[(a(!0),c(B,null,b(u(t),r=>(a(),c("div",{key:r.id,class:"flex flex-col p-4 w-40 bg-slate-600 rounded-lg",onClick:H=>_.$router.push(`/booking/${r.id}`)},[o("div",null,p(d(r.start_time)),1),o("div",null,p(r.facility.name),1)],8,Q))),128))])]))}});const F={},I={class:"text-white flex flex-col gap-4",id:"index-page"};function z(n,e){var t;const s=A,i=T;return a(),c("div",I,[h(s),((t=("nhost"in n?n.nhost:u(l)).auth.getUser())==null?void 0:t.id)!==void 0?(a(),C(i,{key:0})):M("",!0),o("button",{onClick:e[0]||(e[0]=d=>n.$router.push("/booking/confirm"))},"Boka tid")])}const G=g(F,[["render",z],["__scopeId","data-v-388f5e8f"]]);export{G as default};
