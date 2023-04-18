import{G as F,H as g,I as k,J as V,f as M,K as C,o as b,h as v,u as l,w as h,v as _,j as x,i as $,F as y,L as I}from"./entry.0447124f.js";var d=new Map,p=new Map,w=!0,c=!1;function E(e){return e.replace(/[\s,]+/g," ").trim()}function R(e){return E(e.source.body.substring(e.start,e.end))}function A(e){var t=new Set,a=[];return e.definitions.forEach(function(n){if(n.kind==="FragmentDefinition"){var r=n.name.value,s=R(n.loc),i=p.get(r);i&&!i.has(s)?w&&console.warn("Warning: fragment with name "+r+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):i||p.set(r,i=new Set),i.add(s),t.has(s)||(t.add(s),a.push(n))}else a.push(n)}),g(g({},e),{definitions:a})}function S(e){var t=new Set(e.definitions);t.forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(r){var s=n[r];s&&typeof s=="object"&&t.add(s)})});var a=e.loc;return a&&(delete a.startToken,delete a.endToken),e}function T(e){var t=E(e);if(!d.has(t)){var a=F(e,{experimentalFragmentVariables:c,allowLegacyFragmentVariables:c});if(!a||a.kind!=="Document")throw new Error("Not a valid GraphQL document.");d.set(t,S(A(a)))}return d.get(t)}function o(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];typeof e=="string"&&(e=[e]);var n=e[0];return t.forEach(function(r,s){r&&r.kind==="Document"?n+=r.loc.source.body:n+=r,n+=e[s+1]}),T(n)}function W(){d.clear(),p.clear()}function B(){w=!1}function L(){c=!0}function Q(){c=!1}var u={gql:o,resetCaches:W,disableFragmentWarnings:B,enableExperimentalFragmentVariables:L,disableExperimentalFragmentVariables:Q};(function(e){e.gql=u.gql,e.resetCaches=u.resetCaches,e.disableFragmentWarnings=u.disableFragmentWarnings,e.enableExperimentalFragmentVariables=u.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=u.disableExperimentalFragmentVariables})(o||(o={}));o.default=o;async function j(e){const t=o`
    query MyQuery($id: Int!) {
      ingredient_by_pk(id: $id) {
        id
        name
        standard_unit
      }
    }
  `,a={id:e},n=t.definitions[0].selectionSet.selections[0].name.value,{data:r}=await k(t,a);if(r!=null&&r.value&&r.value[n])return r.value[n]}const q=async(e,t,a)=>{const n=o`
    mutation MyMutation($id: Int!, $standard_unit: String!, $name: String!) {
      update_ingredient_by_pk(
        pk_columns: { id: $id }
        _set: { name: $name, standard_unit: $standard_unit }
      ) {
        id
        name
        standard_unit
      }
    }
  `,r={id:e,name:t,standard_unit:a},{mutate:s,onDone:i}=V(n,{variables:r});return s(),{mutate:s,onDone:i}},D={class:"text-white"},P={key:0,class:"flex flex-col"},N=M({__name:"[id]",async setup(e){let t,a;const n=([t,a]=C(()=>j(Number(y().params.id))),t=await t,a(),t),r=async()=>{const{onDone:s}=await q(Number(y().params.id),n.name,n.standard_unit);s(()=>{console.log("Ingrediens uppdaterad")})};return(s,i)=>{const f=I("debounce");return b(),v("div",D,[l(n)?(b(),v("div",P,[h(x("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=m=>l(n).name=m),class:"bg-transparent text-white"},null,512),[[_,l(n).name],[f,r,"1s"]]),h(x("input",{type:"text","onUpdate:modelValue":i[1]||(i[1]=m=>l(n).standard_unit=m),class:"bg-transparent text-white"},null,512),[[_,l(n).standard_unit],[f,r,"1s"]])])):$("",!0)])}}});export{N as default};
