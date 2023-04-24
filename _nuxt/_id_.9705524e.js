import{_ as h}from"./nuxt-link.5f8091b9.js";import{g as y}from"./index.9390388a.js";import{H as p,f as g,r as f,o as c,h as l,j as o,t as i,u as e,i as _,q as x,s as v,I as k}from"./entry.d6a6d026.js";async function b(u){const t=y`
    query MyQuery($id: Int!) {
      booking_by_pk(id: $id) {
        booking_time
        court_id
        door_code
        duration
        facility {
          id
          name
          image_url
        }
        start_time
        payment {
          id
        }
      }
    }
  `,m={id:u},r=t.definitions[0].selectionSet.selections[0].name.value,{data:s}=await p(t,m);if(s!=null&&s.value&&s.value[r])return s.value[r]}const w={class:"bg-slate-700 p-8 h-full text-white flex flex-col justify-between gap-4 rounded-lg"},B={class:"flex flex-col justify-between gap-4"},S={class:"flex justify-between"},j={class:"font-bold text-lg flex flex-row gap-2"},E={class:"font-normal text-slate-200"},D={class:"text-slate-400"},N=["src"],R={key:1,class:"text-white"},T=o("div",{class:"i-fluent-emoji-flat-woman-mechanic-light"},null,-1),q={class:"text-lg"},A={key:0,class:"text-slate-400"},C={key:0},L=o("h1",{class:"text-2xl text-red-500 mb-4"},"Tiden är inte betald!",-1),Q=[L],V=o("button",{class:"bg-slate-500"},"Stäng",-1),$=g({__name:"[id]",setup(u){f(!1);const t=f({});(async()=>{const n=await b(k().params.id);t.value=n})();function r(n){const d=new Date(n),a={weekday:"short",month:"numeric",day:"numeric"};return d.toLocaleDateString("se-SE",a)}function s(n){const d=new Date(n),a={hour:"numeric",minute:"numeric"};return d.toLocaleTimeString("se-SE",a)}return(n,d)=>{const a=h;return c(),l("div",w,[o("div",B,[o("div",S,[o("div",j,[o("div",null,i(s(e(t).start_time)),1),o("div",E,i(r(e(t).start_time)),1)]),o("div",D,i(e(t).duration)+" min",1)]),e(t).facility!==void 0?(c(),l("img",{key:0,src:e(t).facility.image_url,alt:"",class:"w-full rounded-md"},null,8,N)):_("",!0),e(t).start_time?(c(),l("div",R,[T,o("div",q,i(e(t).facility.name)+" - Bana "+i(e(t).court_id),1),e(t).door_code!==""?(c(),l("div",A," Dörrkod: "+i(e(t).door_code),1)):_("",!0)])):_("",!0)]),e(t).payment?_("",!0):(c(),l("div",C,Q)),x(a,{to:"/",class:"flex justify-center"},{default:v(()=>[V]),_:1})])}}});export{$ as default};
