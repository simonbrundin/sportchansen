import{u as i}from"./auth.5299dc98.js";import{h as s,j as t,i as a,w as n,t as d,u as l,o,m as c}from"./entry.2894e846.js";import{_}from"./_plugin-vue_export-helper.c27b6911.js";const u={},f={class:"flex flex-col items-center justify-center h-screen"},p={class:"login-form p-16 w-96 flex flex-col gap-4 rounded-xl"},g={class:"text-center text-white text-2xl mb-4"},h={key:0},m={key:1};function v(e,r){return o(),s("div",f,[t("div",p,[t("div",g,[e.showRegister?(o(),s("div",h,"Logga in")):a("",!0),e.showRegister?a("",!0):(o(),s("div",m,"Verifiera epostadress"))]),t("button",{onClick:r[0]||(r[0]=()=>{}),class:"bg-slate-700 px-4 py-4 rounded-lg text-slate-50"}," Öppna epostkonto "),n(t("div",{class:"text-slate-700 bg-red-200 border-red-300 border-4 p-4 rounded-lg"},d(("useAuthStore"in e?e.useAuthStore:l(i))().signInErrorMessage),513),[[c,!1]])])])}const w=_(u,[["render",v],["__scopeId","data-v-b573ea16"]]);export{w as default};