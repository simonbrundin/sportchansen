import{_ as q}from"./nuxt-link.a1317c68.js";import{A as C,u as e,B as D,C as N,D as V,f as A,r as i,E as F,o as k,h as x,j as a,p as L,t as r,i as P,q as R,s as O}from"./entry.645e6921.js";function T(u,l,m){const[t={},p]=typeof l=="string"?[{},l]:[l,m],s=t.key||C([p,e(t.baseURL),typeof u=="string"?u:"",e(t.params||t.query)]);if(!s||typeof s!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+s);if(!u)throw new Error("[nuxt] [useFetch] request is missing.");const _=s===p?"$f"+s:s,o=D(()=>{let f=u;return typeof f=="function"&&(f=f()),e(f)});if(!t.baseURL&&typeof o.value=="string"&&o.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:y,lazy:w,default:h,transform:g,pick:c,watch:d,immediate:E,...$}=t,v=N({...$,cache:typeof t.cache=="boolean"?void 0:t.cache}),B={server:y,lazy:w,default:h,transform:g,pick:c,immediate:E,watch:d===!1?[]:[v,o,...d||[]]};let n;return V(_,()=>{var b;return(b=n==null?void 0:n.abort)==null||b.call(n),n=typeof AbortController<"u"?new AbortController:{},typeof o.value=="string"&&o.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(o.value,{signal:n.signal,...v})},B)}const U={class:"bg-slate-700 m-4 p-8 h-full text-white"},j=a("h1",{class:"text-2xl"},"Tiden är bokad! Nu jävlar ska det funka",-1),W={class:"text-rose-400"},K=a("div",{class:"i-fluent-emoji-flat-woman-mechanic-light"},null,-1),S={key:0},z=a("button",{class:"bg-slate-500 p-4"},"Stäng",-1),Y=A({__name:"booked",setup(u){const l=i("00:00"),m=i("2022-01-01"),t=i("90"),p=i("WAP Birsta"),s=i("Bana 1 VUO"),_=i("1234"),y=F().query.paymentRequestId;return(async h=>{var d;const c=await T(`https://mss.cpc.getswish.net/swish-cpcapi/api/v1/paymentrequests/${h}`,"$sVBMYL7sEt");console.log("Gör så swish requesten fungerar"),console.log(h),console.log(c.data.value),console.log((d=c.error.value)==null?void 0:d.message)})(y),(h,g)=>{const c=q;return k(),x("div",U,[j,a("div",W,[K,a("div",null,[L(r(e(l))+" - "+r(e(m))+" ",1),a("b",null,r(e(t))+" min",1)]),a("div",null,r(e(p))+" - "+r(e(s)),1),e(_)!==""?(k(),x("div",S,"Kod: "+r(e(_)),1)):P("",!0)]),R(c,{to:"/"},{default:O(()=>[z]),_:1})])}}});export{Y as default};
