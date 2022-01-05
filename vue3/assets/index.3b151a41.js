var F=Object.defineProperty,P=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(e,o,l)=>o in e?F(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,A=(e,o)=>{for(var l in o||(o={}))M.call(o,l)&&w(e,l,o[l]);if(S)for(var l of S(o))j.call(o,l)&&w(e,l,o[l]);return e},I=(e,o)=>P(e,U(o));import{r as p,w as E,v as q,d as y,a as T,o as r,c as v,b as t,e as $,f as L,g as D,h as u,i as m,j as f,k as h,p as z,l as J,u as c,P as K,m as x,C as R,n as Y,t as _,q as G,T as H,s as C,x as Q,F as W,y as X,B as Z,z as ee,I as te}from"./vendor.9c66c9c7.js";const oe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}};oe();var se="/vue3/assets/logo.03d6d6da.png";const d=p([]),le={uuid:"",title:"",content:"",createdAt:"",completedAt:""},O=e=>(e.createdAt||(e.createdAt=new Date().toISOString()),e.uuid||(e.uuid=q()),A(A({},le),e));(()=>{const e=localStorage.getItem("todos");e&&(d.value=JSON.parse(e))})();E([d,d.value],()=>{console.log("Update todoList"),localStorage.setItem("todos",JSON.stringify(d.value))});const ne=e=>(d.value.push(O(e)),d.value),ae=e=>(d.value=d.value.filter(o=>o.uuid!==e),d.value),de=e=>{const o=d.value.findIndex(l=>l.uuid===e.uuid);return d.value[o]=O(e),d.value},N=()=>(d.value=d.value.filter(e=>!e.completedAt),d.value);var b=(e,o)=>{const l=e.__vccOpts||e;for(const[n,s]of o)l[n]=s;return l};const V=e=>(z("data-v-7facf3f0"),e=e(),J(),e),ie={class:"add-todo-container"},ce=["onSubmit"],re=h("Title"),ue=V(()=>t("sup",null,"*",-1)),ve={key:0,class:"error"},_e=V(()=>t("strong",null,"Content",-1)),pe={class:"submit-btn"},me=y({setup(e){const o=p(""),l=p(""),n=p(!1);function s(){if(!o.value.trim()){n.value=!0;return}ne({title:o.value,content:l.value}),o.value="",l.value=""}return(i,a)=>{const k=T("icon");return r(),v("div",ie,[t("form",{class:"add-todo-form",onSubmit:f(s,["prevent"]),onChange:a[2]||(a[2]=g=>n.value=!1)},[t("label",null,[t("strong",null,[re,ue,n.value?(r(),v("em",ve,"\xA0Please at least input a title")):$("",!0)]),L(t("input",{id:"title","onUpdate:modelValue":a[0]||(a[0]=g=>o.value=g)},null,512),[[D,o.value]])]),t("label",null,[_e,L(t("textarea",{id:"content","onUpdate:modelValue":a[1]||(a[1]=g=>l.value=g)},null,512),[[D,l.value]])]),t("div",pe,[t("button",null,[u(k,null,{default:m(()=>[u(c(K))]),_:1})])])],40,ce)])}}});var fe=b(me,[["__scopeId","data-v-7facf3f0"]]);const he={class:"todo-check"},ge={class:"todo-main"},Ae={class:"todo-title"},ye={class:"todo-content"},$e={class:"todo-time"},Ce={class:"todo-time-created"},ke={key:0,class:"todo-time-complated"},Te={class:"todo-actions"},xe={class:"edit-btn"},be=y({props:{todo:null},setup(e){return(o,l)=>{const n=T("icon");return r(),v("li",{class:C(["todo-card",e.todo.completedAt?"complated":"active"])},[t("div",he,[t("a",{class:"todo-check-btn",onClick:l[0]||(l[0]=s=>c(de)(I(A({},e.todo),{completedAt:e.todo.completedAt?"":new Date().toISOString()})))},[u(n,null,{default:m(()=>[e.todo.completedAt?(r(),x(c(R),{key:0})):(r(),x(c(Y),{key:1}))]),_:1})])]),t("div",ge,[t("div",Ae,_(e.todo.title),1),t("div",ye,_(e.todo.content),1),t("div",$e,[t("em",Ce,"Created at: "+_(new Date(e.todo.createdAt).toLocaleString()),1),h(_(e.todo.completedAt?"\xA0|\xA0":""),1),e.todo.completedAt?(r(),v("em",ke,"Complated at: "+_(new Date(e.todo.completedAt).toLocaleString()),1)):$("",!0)]),t("div",Te,[t("a",xe,[u(n,null,{default:m(()=>[u(c(G))]),_:1})]),t("a",{class:"delete-btn",onClick:l[1]||(l[1]=s=>c(ae)(e.todo.uuid))},[u(n,{color:"darkred"},{default:m(()=>[u(c(H))]),_:1})])])])],2)}}});var Se=b(be,[["__scopeId","data-v-408f379e"]]);const we={class:"todo-list-container"},Ie={class:"todo-filter"},Le={class:"tabs"},De={class:"todo-main"},Oe={key:0,class:"todo-empty"},Ne={class:"todo-list"},Ve={class:"todo-extra"},Be=h("Clear completed todos"),Fe=y({setup(e){const o=p("all"),l=Q(()=>[...(()=>{switch(o.value){case"active":return d.value.filter(n=>!n.completedAt);case"completed":return d.value.filter(n=>!!n.completedAt);default:return d.value}})()].sort((n,s)=>new Date(s.createdAt).getTime()-new Date(n.createdAt).getTime()));return(n,s)=>{const i=T("icon");return r(),v("div",we,[t("div",Ie,[t("ul",Le,[t("li",{class:C({"is-active":o.value==="all"})},[t("a",{onClick:s[0]||(s[0]=f(a=>o.value="all",["prevent"]))},"All")],2),t("li",{class:C({"is-active":o.value==="active"})},[t("a",{onClick:s[1]||(s[1]=f(a=>o.value="active",["prevent"]))},"Active")],2),t("li",{class:C({"is-active":o.value==="completed"})},[t("a",{onClick:s[2]||(s[2]=f(a=>o.value="completed",["prevent"]))},"Completed")],2)])]),t("div",De,[t("h2",null,_(o.value.charAt(0).toUpperCase()+o.value.slice(1))+" todos",1),c(l).length?$("",!0):(r(),v("div",Oe,[t("em",null,"Oops, no "+_(o.value==="all"?"":o.value)+" todo. Add one!",1)])),t("ul",Ne,[(r(!0),v(W,null,X(c(l),(a,k)=>(r(),x(Se,{key:k,todo:a},null,8,["todo"]))),128))])]),t("div",Ve,[c(d).find(a=>!!a.completedAt)?(r(),v("a",{key:0,class:"clear-completed",onClick:s[3]||(s[3]=f((...a)=>c(N)&&c(N)(...a),["prevent"]))},[u(i,null,{default:m(()=>[u(c(Z))]),_:1}),Be])):$("",!0)])])}}});var Pe=b(Fe,[["__scopeId","data-v-0fc5a9e1"]]);const Ue={id:"app-container"},Me={href:"/"},je=["src"],Ee=t("span",null,"Learn Vue3: ToDo",-1),qe=t("p",null,[h("A simple todo app built with Vue.js and Vite. "),t("a",{href:"/"},"Back to home \u2192")],-1),ze=t("a",{href:"https://github.com/Dragon-Fish/learn-frontend",target:"_blank",rel:"noopener noreferrer"},"Dragon-Fish",-1),Je=y({setup(e){return(o,l)=>(r(),v("div",Ue,[t("header",null,[t("h1",null,[t("a",Me,[t("img",{class:"logo",src:c(se)},null,8,je),Ee])])]),t("main",null,[u(fe),u(Pe)]),t("footer",null,[qe,t("p",null,[h("Copyright \xA9 "+_(new Date().getFullYear())+" ",1),ze])])]))}}),B=ee(Je);B.component("Icon",te);B.mount("#app");