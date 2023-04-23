import{_ as h}from"./nuxt-link.aaf41e43.js";import{g as y}from"./index.543e6d59.js";import{A as g,f as k,r as p,B as f,o as c,h as r,u as e,i as l,j as n,p as v,t as a,q as x,s as b}from"./entry.baa27d9c.js";async function B(_){const i=y`
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
  `,t={id:_},d=i.definitions[0].selectionSet.selections[0].name.value,{data:o}=await g(i,t);if(o!=null&&o.value&&o.value[d])return o.value[d]}const w={class:"bg-slate-700 m-4 p-8 h-full text-white flex flex-col gap-4"},S={key:0},E=n("h1",{class:"text-2xl"},"Tiden är bokad!",-1),N=[E],A={key:1,class:"text-white"},D=n("div",{class:"i-fluent-emoji-flat-woman-mechanic-light"},null,-1),P={key:0},R=n("button",{class:"bg-slate-500 p-4"},"Stäng",-1),q=k({__name:"[id]",setup(_){const i=p(!1),t=p({});(async()=>{const s=await B(f().params.id);console.log(s.duration),t.value=s})(),f().params.id;function o(s){const m=new Date(s),u={month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return m.toLocaleDateString("se-SE",u)}return(s,m)=>{const u=h;return c(),r("div",w,[e(i)?(c(),r("div",S,N)):l("",!0),e(t).start_time?(c(),r("div",A,[D,n("div",null,[v(a(o(e(t).start_time))+" - ",1),n("b",null,a(e(t).duration)+" min",1)]),n("div",null,a(e(t).facility.name)+" - Bana "+a(e(t).court_id),1),e(t).code!==""?(c(),r("div",P,"Kod: "+a(e(t).code),1)):l("",!0)])):l("",!0),x(u,{to:"/"},{default:b(()=>[R]),_:1})])}}});export{q as default};
