import{_ as y}from"./nuxt-link.bee9b419.js";import{o as c,h as r,q as l,s as x,j as o,F as v,u as d,b as u,H as $,f as k,J as w,K as B,L as S,t as p,i as C,x as b,y as M}from"./entry.3217ecdb.js";import{_ as h}from"./_plugin-vue_export-helper.c27b6911.js";import{g as q}from"./index.f7477a57.js";const D=""+new URL("default-user.8da67953.png",import.meta.url).href,E={},I={class:"flex justify-between items-center"},L=o("div",{class:"text-2xl font-extrabold"},"Välkommen!",-1);function U(e,n){const s=y;return c(),r("div",I,[L,l(s,{to:"/auth/profile"},{default:x(()=>[o("img",{src:D,width:48,quality:80,class:v({"bg-red-500":("nhost"in e?e.nhost:d(u)).auth.getUser()===null})},null,2)]),_:1})])}const A=h(E,[["render",U]]);async function N(e){const n=q`
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
  `,s={user_id:e},a=n.definitions[0].selectionSet.selections[0].name.value,{data:t}=await $(n,s);if(t!=null&&t.value&&t.value[a])return t.value[a]}const R={class:"flex flex-col gap-4"},V=o("h1",null,"Mina bokningar",-1),j={class:"flex gap-4"},Q=["onClick"],T=k({__name:"MyBookings",async setup(e){var m;let n,s;const a=(m=u.auth.getUser())==null?void 0:m.id,t=([n,s]=w(()=>N(a)),n=await n,s(),n);function g(_){const f=new Date(_),i={month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return f.toLocaleDateString("se-SE",i)}return(_,f)=>(c(),r("div",R,[V,o("div",j,[(c(!0),r(B,null,S(d(t),i=>(c(),r("div",{key:i.id,class:"flex flex-col p-4 w-40 bg-slate-600 rounded-lg",onClick:Y=>_.$router.push(`/booking/${i.id}`)},[o("div",null,p(g(i.start_time)),1),o("div",null,p(i.facility.name),1)],8,Q))),128))])]))}});const F={},z=e=>(b("data-v-a3f257a2"),e=e(),M(),e),H={class:"text-white flex flex-col gap-4",id:"index-page"},J={key:0},K=z(()=>o("div",{class:"flex gap-4"},null,-1));function P(e,n){var t;const s=A,a=T;return c(),r("div",H,[l(s),((t=("nhost"in e?e.nhost:d(u)).auth.getUser())==null?void 0:t.id)!==void 0?(c(),r("div",J,[l(a)])):C("",!0),K])}const Z=h(F,[["render",P],["__scopeId","data-v-a3f257a2"]]);export{Z as default};
