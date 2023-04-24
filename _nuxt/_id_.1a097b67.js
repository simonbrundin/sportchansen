import{_ as f}from"./nuxt-link.ba5219fa.js";import{g as p}from"./index.a5873994.js";import{H as y,f as h,r as m,o as a,h as c,j as n,u as o,i as r,t as s,q as g,s as x,I as k}from"./entry.96a45377.js";async function b(u){const t=p`
    query MyQuery($id: Int!) {
      booking_by_pk(id: $id) {
        booking_time
        court_id
        door_code
        duration
        facility {
          id
          name
        }
        start_time
        payment {
          id
        }
      }
    }
  `,d={id:u},i=t.definitions[0].selectionSet.selections[0].name.value,{data:e}=await y(t,d);if(e!=null&&e.value&&e.value[i])return e.value[i]}const v={class:"bg-slate-700 p-8 h-full text-white flex flex-col justify-between gap-4 rounded-lg h-full"},w={class:"flex flex-col justify-between"},B={key:0},j=n("h1",{class:"text-2xl text-red-500 mb-4"},"Tiden är inte betald!",-1),S=[j],E={key:1,class:"text-white"},D=n("div",{class:"i-fluent-emoji-flat-woman-mechanic-light"},null,-1),N={key:0},R=n("button",{class:"bg-slate-500"},"Stäng",-1),Q=h({__name:"[id]",setup(u){m(!1);const t=m({});(async()=>{const e=await b(k().params.id);t.value=e})();function i(e){const _=new Date(e),l={month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return _.toLocaleDateString("se-SE",l)}return(e,_)=>{const l=f;return a(),c("div",v,[n("div",w,[o(t).payment?r("",!0):(a(),c("div",B,S)),o(t).start_time?(a(),c("div",E,[D,n("div",null,s(i(o(t).start_time)),1),n("b",null,s(o(t).duration)+" min",1),n("div",null,s(o(t).facility.name)+" - Bana "+s(o(t).court_id),1),o(t).door_code!==""?(a(),c("div",N,"Kod: "+s(o(t).door_code),1)):r("",!0)])):r("",!0)]),g(l,{to:"/",class:"flex justify-center"},{default:x(()=>[R]),_:1})])}}});export{Q as default};
