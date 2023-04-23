import{_ as d}from"./nuxt-link.4611c440.js";import{g as u}from"./index.d035eea5.js";import{A as l,f as m,r as p,B as a,o as i,h as c,u as f,i as y,q as g,s as k,j as r}from"./entry.1967f3b0.js";async function h(s){const o=u`
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
  `,n={id:s},t=o.definitions[0].selectionSet.selections[0].name.value,{data:e}=await l(o,n);if(e!=null&&e.value&&e.value[t])return e.value[t]}const b={class:"bg-slate-700 m-4 p-8 h-full text-white"},x={key:0},B=r("h1",{class:"text-2xl"},"Tiden är bokad!",-1),v=[B],w=r("button",{class:"bg-slate-500 p-4"},"Stäng",-1),P=m({__name:"[id]",setup(s){const o=p(!1);return(async()=>{const t=await h(a().params.id);console.log(t)})(),a().params.id,(t,e)=>{const _=d;return i(),c("div",b,[f(o)?(i(),c("div",x,v)):y("",!0),g(_,{to:"/"},{default:k(()=>[w]),_:1})])}}});export{P as default};
