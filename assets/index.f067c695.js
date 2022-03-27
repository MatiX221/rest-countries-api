import{j as L,W as y,s as M,r as w,F as A,R as B,a as T}from"./vendor.9c61cf47.js";const F=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function d(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(n){if(n.ep)return;n.ep=!0;const l=d(n);fetch(n.href,l)}};F();const a=L.exports.jsx,t=L.exports.jsxs;function I(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:a("path",{d:"M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"})})}function R(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:a("path",{fill:"white",d:"M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"})})}const z=({theme:e,onclick:o,homePage:d})=>t("header",{className:"container__header",children:[a("h1",{onClick:d,children:"Where in the world?"}),a("div",{className:"container__themeChanger",children:t("div",{className:"changeTheme",onClick:o,children:[a("div",{className:"holder__image",children:e==="light"?a(I,{}):a(R,{})}),a("div",{className:"holder__text",children:e==="light"?"Dark Mode":"Light Mode"})]})})]});function D({png:e,name:o}){var d=[];return o.nativeName!=null?Object.keys(o.nativeName).forEach((c,n)=>d[n]=o.nativeName[c]):d[0]=o.common,t("div",{className:"card__image",children:[a("div",{className:"image__front",children:a("img",{src:e,alt:"country flag"})}),t("div",{className:"image__back",children:[a("p",{children:"Native Name:"}),a("p",{children:a("span",{className:"bolder",children:d[0].common})})]})]})}const $=({png:e,name:o,nameList:d,population:c,region:n,capital:l,getClickedCountry:p})=>{function v(h){h=h.toString();for(var g=/(-?\d+)(\d{3})/;g.test(h);)h=h.replace(g,"$1,$2");return h}const r=v(c);var m="";return l!=null&&(Object.keys(l).forEach(h=>m+=`, ${l[h]}`),m=m.replace(",","")),t("div",{className:"card",onClick:()=>{p(o)},children:[a(D,{png:e,name:d}),t("div",{className:"card__text",children:[a("h2",{children:o}),t("div",{className:"text__info",children:[t("p",{children:[a("span",{className:"bolder",children:"Population:"})," ",r]}),t("p",{children:[a("span",{className:"bolder",children:"Region:"})," ",n]}),t("p",{children:[a("span",{className:"bolder",children:"Capital:"})," ",m]})]})]})]})};$.defaultProps={png:"???",name:"???",population:"???",region:"???"};function x({region:e,content:o,filterValue:d}){const c=e===d;return a("option",{value:e,id:e,className:"option",hidden:c,children:e==="region"&&c?"Filter by region":o})}function P(){return a("svg",{className:"search__image",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:a("path",{d:"M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"})})}function W({inputChange:e,filterChange:o,inputValue:d,filterValue:c}){return t("div",{className:"container__search",children:[t("div",{className:"search",children:[a(P,{}),a("input",{className:"search__input",type:"text",value:d,onInput:e,placeholder:"Search for a country..."})]}),t("select",{name:"Filter",id:"filter",onChange:o,value:c,children:[a(x,{region:"region",content:"All",filterValue:c}),a(x,{region:"Africa",content:"Africa",filterValue:c}),a(x,{region:"Americas",content:"America",filterValue:c}),a(x,{region:"Asia",content:"Asia",filterValue:c}),a(x,{region:"Europe",content:"Europe",filterValue:c}),a(x,{region:"Oceania",content:"Oceania",filterValue:c})]})]})}function H({inputValue:e,filterValue:o,inputChange:d,filterChange:c,countries:n,getClickedCountry:l}){const p=e.toLowerCase(),v=r=>{var m=[],h=[],g=[],N=[];r.name.nativeName!=null&&Object.keys(r.name.nativeName).forEach((s,b)=>{m[b]=r.name.nativeName[s].common,h[b]=r.name.nativeName[s].official}),r.translations!=null&&Object.keys(r.translations).forEach((s,b)=>{g[b]=r.translations[s].common,N[b]=r.translations[s].official});var i="";return Object.keys(m).forEach(s=>{m[s].toLowerCase().includes(p)&&(i="true")}),Object.keys(h).forEach(s=>{h[s].toLowerCase().includes(p)&&(i="true")}),Object.keys(g).forEach(s=>{g[s].toLowerCase().includes(p)&&(i="true")}),Object.keys(N).forEach(s=>{N[s].toLowerCase().includes(p)&&(i="true")}),!!(r.name.common.toLowerCase().includes(p)||r.cca2.toLowerCase().includes(p)||r.cca3.toLowerCase().includes(p)||i==="true")};return t("div",{className:"container__grid",children:[a(W,{inputValue:e,inputChange:d,filterChange:c,filterValue:o}),a("div",{className:"card__grid",children:o==="region"?n.filter(r=>v(r)).map((r,m)=>a($,{png:r.flags.png,name:r.name.common,population:r.population,region:r.region,capital:r.capital,nameList:r.name,getClickedCountry:l},m)):n.filter(r=>v(r)).filter(r=>r.region.includes(o)).map((r,m)=>a($,{png:r.flags.png,name:r.name.common,population:r.population,region:r.region,capital:r.capital,nameList:r.name,getClickedCountry:l},m))})]})}const u="all 250ms linear",q={background:"hsl(0, 0%, 88%)",color:"hsl(200, 15%, 8%)",cardbg:"white",shadow:"hsl(0, 0%, 52%)",searchbg:"white",searchimg:"black",searchshadow:"hsl(0, 0%, 52%)"},G={background:"hsl(207, 26%, 17%)",color:"hsl(0, 0%, 100%)",cardbg:"hsl(209, 23%, 22%)",shadow:"hsl(209, 23%, 32%)",searchbg:"hsl(209, 23%, 22%)",searchimg:"white",searchshadow:"hsl(200, 15%, 8%)"},K=y`

    body {
        transition: ${u};
        background-color: ${e=>e.theme.background};
        color: ${e=>e.theme.color};
    };
    
    .container__header {
        transition: ${u};
        background-color: ${e=>e.theme.cardbg};
        box-shadow: 0 0 5px 1px ${e=>e.theme.shadow};
    }
    
    .card {
        transition: ${u};
        background-color: ${e=>e.theme.cardbg};
        box-shadow: 0 0 5px 1px ${e=>e.theme.shadow};
    };

    .card__image img {
        transition: ${u};
        box-shadow: 0 0 10px 1px ${e=>e.theme.shadow};
    }
    
    #filter {
        transition: ${u};
        background-color: ${e=>e.theme.searchbg};
        color: ${e=>e.theme.color};
        box-shadow: 0 0 5px 1px ${e=>e.theme.searchshadow};
    }
    
    .search {
        transition: ${u};
        background-color: ${e=>e.theme.searchbg};
        color: ${e=>e.theme.color};
        box-shadow: 0px 0px 5px 1px ${e=>e.theme.searchshadow};
    }

    .search__input {
        transition: ${u};
        background-color: ${e=>e.theme.searchbg};
        color: ${e=>e.theme.color};
    }
    
    .search__image {
        transition: ${u};
        fill: ${e=>e.theme.searchimg};
    }
    
    .button__back {
        transition: ${u};
        fill: ${e=>e.theme.searchimg};
        background-color: ${e=>e.theme.searchbg};
        box-shadow: 0 0 5px 1px ${e=>e.theme.shadow};
    }
    
    .border__btn {
        transition: ${u};
        background-color: ${e=>e.theme.cardbg};
    }
    
    .image__front {
        transition: ${u};
        box-shadow: 0 0 5px 1px ${e=>e.theme.shadow};
    }
    
    .image__back {
        transition: ${u};
        background-color: ${e=>e.theme.background};
        box-shadow: 0 0 5px 1px ${e=>e.theme.shadow};
    }
`;function J({url:e}){return a("div",{className:"details__flag",children:a("img",{src:e,alt:"country flag"})})}function Q(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:a("path",{d:"M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"})})}function U({name:e,getBorder:o}){return a("div",{className:"border__btn",onClick:()=>o(e),children:e})}function X({onclickfunc:e,country:o,getBorder:d,allCountries:c}){const n=o[0];function l(i){i=i.toString();for(var s=/(-?\d+)(\d{3})/;s.test(i);)i=i.replace(s,"$1,$2");return i}const p=l(n.population);var v=[],r=[];n.name.nativeName!=null?(Object.keys(n.name.nativeName).forEach((i,s)=>v[s]=n.name.nativeName[i].common),Object.keys(n.name.nativeName).forEach((i,s)=>r[s]=n.name.nativeName[i].official)):n.name.common;var m="";n.currencies!=null&&(Object.keys(n.currencies).forEach(i=>m+=`, ${n.currencies[i].name} ( ${n.currencies[i].symbol} )`),m=m.replace(",",""));var h="";n.languages!=null&&(Object.keys(n.languages).forEach(i=>h+=`, ${n.languages[i]}`),h=h.replace(",",""));var g="";n.capital!=null&&(Object.keys(n.capital).forEach(i=>g+=`, ${n.capital[i]}`),g=g.replace(",",""));var N=[];return n.borders!=null&&Object.keys(n.borders).forEach(i=>{var s=[];s[i]=c.filter(b=>b.cca3.includes(n.borders[i])),N[i]=s[i][0].name.common}),t("div",{className:"container__details",children:[t("div",{onClick:e,className:"button button__back",children:[a(Q,{}),a("p",{children:"Back"})]}),t("div",{className:"details",children:[a(J,{url:n.flags.png}),t("div",{className:"details__text",children:[t("div",{className:"text",children:[a("h2",{children:n.name.common}),t("div",{className:"text__information",children:[t("div",{className:"text__general",children:[a("div",{className:"general__native",children:t("p",{children:[a("span",{className:"bolder",children:"Native Name:"})," ",v[0]," "]})}),a("div",{className:"general__population",children:t("p",{children:[a("span",{className:"bolder",children:"Population:"})," ",p]})}),a("div",{className:"general__region",children:t("p",{children:[a("span",{className:"bolder",children:"Region:"})," ",n.region]})}),a("div",{className:"general__subregion",children:t("p",{children:[a("span",{className:"bolder",children:"Sub Region:"})," ",n.subregion]})}),a("div",{className:"general__capital",children:t("p",{children:[a("span",{className:"bolder",children:"Capital:"})," ",g]})})]}),t("div",{className:"text__additional",children:[a("div",{className:"additional__tld",children:t("p",{children:[a("span",{className:"bolder",children:"Top Level Domain:"})," ",n.tld[0]]})}),a("div",{className:"additional__currencies",children:t("p",{children:[a("span",{className:"bolder",children:"Currencies:"})," ",m]})}),a("div",{className:"additional__languages",children:t("p",{children:[a("span",{className:"bolder",children:"Languages:"})," ",h]})})]})]})]}),t("div",{className:"text__borders",children:[t("p",{children:[a("span",{className:"bolder",children:"Border Countries:"})," "]}),a("div",{className:"border__container",children:N.map((i,s)=>a(U,{getBorder:d,name:i},s))})]})]})]})]})}const Y=M.div``;function Z(){const e=localStorage.getItem("theme"),[o,d]=w.exports.useState(e);localStorage.setItem("theme",`${o}`);const[c,n]=w.exports.useState("cards"),[l,p]=w.exports.useState(""),[v,r]=w.exports.useState("region"),[m,h]=w.exports.useState(""),g=()=>{d(o==="light"?"dark":"light")},N=f=>{const _=f.target.value;p(_)},i=f=>{const _=f.target.value;r(_)},s=()=>{n(c==="cards"?"details":"cards")},b=f=>{h(f),s()},O=f=>{h(f)},S=()=>{r("region"),p(""),n("cards")},[C,j]=w.exports.useState([]),E=()=>{fetch("https://restcountries.com/v3.1/all").then(function(_){return _.json()}).then(function(_){j(_)})};w.exports.useEffect(()=>{E()},[]);const k=C;return t(A,{theme:o==="light"?q:G,children:[a(K,{}),t(Y,{children:[a(z,{theme:o,onclick:()=>{g()},homePage:S}),c==="cards"?a(H,{countries:k,inputChange:N,filterChange:i,getClickedCountry:b,inputValue:l,filterValue:v}):a(X,{onclickfunc:()=>{s()},country:k.filter(f=>f.name.common===m),getBorder:O,allCountries:C})]})]})}B.render(a(T.StrictMode,{children:a(Z,{})}),document.getElementById("root"));
