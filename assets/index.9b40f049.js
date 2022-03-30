var N=Object.defineProperty,w=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var x=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))T.call(t,s)&&x(e,s,t[s]);if(g)for(var s of g(t))O.call(t,s)&&x(e,s,t[s]);return e},b=(e,t)=>w(e,H(t));import{d as _,o as i,c as u,p as $,a as y,b as c,e as R,u as M,r as E,f as C,t as S,g as p,h as f,i as v,w as P,j as A,k as B,l as D,m as F,n as V,q as U,s as q,v as z,F as G,x as W,y as j,z as K,E as J,A as Q,B as X,C as Y,D as Z}from"./vendor.4af2f137.js";const ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}};ee();const te="modulepreload",k={},oe="./",se=function(t,s){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=`${oe}${n}`,n in k)return;k[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":te,o||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),o)return new Promise((d,m)=>{r.addEventListener("load",d),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};var ne="./assets/logo.5041849f.png";var l=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};const ae=_({name:"Home"}),L=e=>($("data-v-ef532574"),e=e(),y(),e),re={class:"home-container page-container"},ce=L(()=>c("img",{class:"vue-element-plus-logo",alt:"Vue logo",src:ne},null,-1)),ie=L(()=>c("div",{class:"page-title"},"Vite2.x + Vue3.x + TypeScript + Element Plus",-1)),ue=[ce,ie];function _e(e,t,s,n,o,a){return i(),u("div",re,ue)}var le=l(ae,[["render",_e],["__scopeId","data-v-ef532574"]]);const de={namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}},pe=R({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:de}}),I=Symbol("vue-store");function me(){return M(I)}const ve=_({name:"Vuex",setup(){const e=me(),t=E({text:C(()=>e.state.text),count:C(()=>e.state.numFactoryModule.count)}),s=()=>{e.commit("numFactoryModule/DOUBLE_COUNT")};return b(h({},S(t)),{double:s})}}),fe={class:"vuex-container page-container"},he=c("div",{class:"page-title"},"Vuex Test Page",-1),$e=A("double");function ye(e,t,s,n,o,a){const r=p("el-button");return i(),u("div",fe,[he,c("p",null,"store Root is: "+f(e.text),1),c("p",null,"store doubleCount is: "+f(e.count),1),v(r,{type:"primary",onClick:e.double},{default:P(()=>[$e]),_:1},8,["onClick"])])}var ge=l(ve,[["render",ye]]);const xe=_({name:"Vuex",setup(){const e=B(0);return{count:e,increment:()=>{e.value+=1}}}}),be=e=>($("data-v-d105b414"),e=e(),y(),e),Ce={class:"test-container page-container"},ke=be(()=>c("div",{class:"page-title"},"Unit Test Page",-1));function Ee(e,t,s,n,o,a){return i(),u("div",Ce,[ke,c("p",null,"count is: "+f(e.count),1),c("button",{onClick:t[0]||(t[0]=(...r)=>e.increment&&e.increment(...r))},"increment")])}var Se=l(xe,[["render",Ee],["__scopeId","data-v-d105b414"]]);const Ae=[{path:"/",name:"Home",component:le},{path:"/vuex",name:"Vuex",component:ge},{path:"/axios",name:"Axios",component:()=>se(()=>import("./Axios.cc372f7c.js"),["assets/Axios.cc372f7c.js","assets/Axios.e3f2f1d7.css","assets/vendor.4af2f137.js","assets/vendor.5a72bac0.css"])},{path:"/test",name:"Test",component:Se}],Ve=D({history:F(),routes:Ae});const Le=e=>($("data-v-572a94f0"),e=e(),y(),e),Ie={class:"header"},Ne=Le(()=>c("i",{class:"icon el-icon-s-promotion"},null,-1)),we=A(" GitHub "),He=[Ne,we],Te=_({setup(e){const t=V(),s=()=>{window.open("https://github.com/lzngithub/vue3-vite-ts")};return(n,o)=>(i(),u("div",Ie,[c("div",{class:"title",onClick:o[0]||(o[0]=a=>U(t).push("/"))},"Vite2.x + Vue3.x + TypeScript"),c("div",{class:"go-github",onClick:s},He)]))}});var Oe=l(Te,[["__scopeId","data-v-572a94f0"]]);const Re=_({name:"Nav",setup(){const e=V(),t=E({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"Test",isActive:!1,path:"/test"}],navClick(n){e.push(n.path)}}),s=n=>{t.navList.forEach(o=>{const a=o;return a.isActive=a.path===n,a})};return q(()=>e.currentRoute.value,n=>{s(n.path)}),z(()=>{e.isReady().then(()=>{s(e.currentRoute.value.path)})}),h({},S(t))}}),Me={class:"nav"},Pe={class:"nav-list"},Be=["onClick"];function De(e,t,s,n,o,a){return i(),u("aside",Me,[c("ul",Pe,[(i(!0),u(G,null,W(e.navList,(r,d)=>(i(),u("li",{class:j(["nav-item flex-center",{active:r.isActive}]),key:d,onClick:m=>e.navClick(r)},f(r.name),11,Be))),128))])])}var Fe=l(Re,[["render",De],["__scopeId","data-v-3ee757fd"]]);const Ue=_({name:"Main",components:{Header:Oe,Nav:Fe}}),qe={class:"main-container"},ze={class:"top"},Ge={class:"bottom"},We={class:"left"},je={class:"right"},Ke={class:"content"};function Je(e,t,s,n,o,a){const r=p("Header"),d=p("Nav"),m=p("router-view");return i(),u("main",qe,[c("div",ze,[v(r)]),c("div",Ge,[c("div",We,[v(d)]),c("div",je,[c("div",Ke,[v(m)])])])])}var Qe=l(Ue,[["render",Je],["__scopeId","data-v-61814ec4"]]);const Xe=_({name:"App",components:{Main:Qe}});function Ye(e,t,s,n,o,a){const r=p("Main");return i(),K(r)}var Ze=l(Xe,[["render",Ye]]);function et(e){return[J,Q,X,Y].forEach(t=>{e.use(t)}),e}const tt=Z(Ze);et(tt).use(Ve).use(pe,I).mount("#app");export{l as _};
