import{f as u,r as c,o as _,h as g,w as p,v as m,u as n,j as r,k as x,l as v,m as f,t as y,b as h,x as w,y as b,z as k}from"./entry.5e808531.js";import{u as l}from"./auth.c2362ddb.js";const I=s=>(w("data-v-318d383d"),s=s(),b(),s),S={class:"flex flex-col gap-4 w-72"},E=I(()=>r("div",{class:"text-center text-white text-2xl mb-4"}," Återställ ditt lösenord ",-1)),M=u({__name:"reset",setup(s){const d=l(),t=c(""),i=async()=>{const{error:o}=await h.auth.resetPassword({email:t.value});if(o)throw d.signInErrorMessage=o.message,o;d.signInErrorMessage="Ett nytt lösenord har skickats till dig"};return(o,e)=>(_(),g("div",S,[E,p(r("input",{type:"email",name:"email","onUpdate:modelValue":e[0]||(e[0]=a=>x(t)?t.value=a:null),onKeyup:e[1]||(e[1]=v(a=>i(),["enter"])),autofocus:"",placeholder:"Epostadress",class:"px-4 py-4 rounded-lg text-gray-700"},null,544),[[m,n(t)]]),r("button",{onClick:e[2]||(e[2]=a=>i()),class:"bg-blue-500 px-4 py-4 rounded-lg text-slate-50"}," Skicka nytt lösenord "),p(r("div",{class:"text-slate-700 bg-red-200 border-red-300 border-4 p-4 rounded-lg"},y(n(l)().signInErrorMessage),513),[[f,n(l)().signInErrorMessage]])]))}});const D=k(M,[["__scopeId","data-v-318d383d"]]);export{D as default};