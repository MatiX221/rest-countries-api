import{j as L,W as E,s as M,r as b,F as A,R as B,a as T}from"./vendor.9c61cf47.js";const F=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}};F();const a=L.exports.jsx,r=L.exports.jsxs;function R(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:a("path",{d:"M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"})})}function z(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:a("path",{fill:"white",d:"M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"})})}const D=({theme:e,onclick:c,homePage:l})=>r("header",{className:"container__header",children:[a("h1",{onClick:l,children:"Where in the world?"}),a("div",{className:"container__themeChanger",children:r("div",{className:"changeTheme",onClick:c,children:[a("div",{className:"holder__image",children:e==="light"?a(R,{}):a(z,{})}),a("div",{className:"holder__text",children:e==="light"?"Dark Mode":"Light Mode"})]})})]}),C=({png:e,name:c,population:l,region:s,capital:n,getClickedCountry:i})=>{function t(d){d=d.toString();for(var p=/(-?\d+)(\d{3})/;p.test(d);)d=d.replace(p,"$1,$2");return d}const m=t(l);var u="";return n!=null&&(Object.keys(n).forEach(d=>u+=`, ${n[d]}`),u=u.replace(",","")),r("div",{className:"card",onClick:()=>{i(c)},children:[a("div",{className:"card__image",children:a("img",{src:e})}),r("div",{className:"card__text",children:[a("h2",{children:c}),r("div",{className:"text__info",children:[r("p",{children:[a("span",{className:"bolder",children:"Population:"})," ",m]}),r("p",{children:[a("span",{className:"bolder",children:"Region:"})," ",s]}),r("p",{children:[a("span",{className:"bolder",children:"Capital:"})," ",u]})]})]})]})};C.defaultProps={png:"???",name:"???",population:"???",region:"???"};function N({region:e,content:c,filterValue:l}){const s=e===l;return a("option",{value:e,id:e,className:"option",hidden:s,children:e==="region"&&s?"Filter by region":c})}function I(){return a("svg",{className:"search__image",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:a("path",{d:"M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"})})}function P({inputChange:e,filterChange:c,inputValue:l,filterValue:s}){return r("div",{className:"container__search",children:[r("div",{className:"search",children:[a(I,{}),a("input",{className:"search__input",type:"text",value:l,onInput:e,placeholder:"Search for a country..."})]}),r("select",{name:"Filter",id:"filter",onChange:c,value:s,children:[a(N,{region:"region",content:"All",filterValue:s}),a(N,{region:"Africa",content:"Africa",filterValue:s}),a(N,{region:"Americas",content:"America",filterValue:s}),a(N,{region:"Asia",content:"Asia",filterValue:s}),a(N,{region:"Europe",content:"Europe",filterValue:s}),a(N,{region:"Oceania",content:"Oceania",filterValue:s})]})]})}function W({inputValue:e,filterValue:c,inputChange:l,filterChange:s,countries:n,getClickedCountry:i}){return r("div",{className:"container__grid",children:[a(P,{inputValue:e,inputChange:l,filterChange:s,filterValue:c}),a("div",{className:"card__grid",children:c==="region"?n.filter(t=>t.name.common.toLowerCase().includes(e.toLowerCase())||t.name.official.toLowerCase().includes(e.toLowerCase())).map((t,m)=>a(C,{png:t.flags.png,name:t.name.common,population:t.population,region:t.region,capital:t.capital,getClickedCountry:i},m)):n.filter(t=>t.name.common.toLowerCase().includes(e.toLowerCase())||t.name.official.toLowerCase().includes(e.toLowerCase())).filter(t=>t.region.includes(c)).map((t,m)=>a(C,{png:t.flags.png,name:t.name.common,population:t.population,region:t.region,capital:t.capital,getClickedCountry:i},m))})]})}const f="all 300ms linear",H={background:"hsl(0, 0%, 88%)",color:"hsl(200, 15%, 8%)",cardbg:"white",shadow:"hsl(0, 0%, 52%)",searchbg:"white",searchimg:"black",searchshadow:"hsl(0, 0%, 52%)"},q={background:"hsl(207, 26%, 17%)",color:"hsl(0, 0%, 100%)",cardbg:"hsl(209, 23%, 22%)",shadow:"hsl(209, 23%, 32%)",searchbg:"hsl(209, 23%, 22%)",searchimg:"white",searchshadow:"hsl(200, 15%, 8%)"},G=E`

    body {
        transition: ${f};
        background-color: ${e=>e.theme.background};
        color: ${e=>e.theme.color};
    };
    
    .container__header {
        transition: ${f};
        box-shadow: 0 0 5px 1px ${e=>e.theme.shadow};
    }
    
    .card {
        transition: ${f};
        background-color: ${e=>e.theme.cardbg};
        box-shadow: 0 0 5px 1px ${e=>e.theme.shadow};
    };

    .card__image img {
        transition: ${f};
        box-shadow: 0 0 10px 1px ${e=>e.theme.shadow};
    }
    
    #filter {
        transition: ${f};
        background-color: ${e=>e.theme.searchbg};
        color: ${e=>e.theme.color};
        box-shadow: 0 0 5px 1px ${e=>e.theme.searchshadow};
    }
    
    .search {
        transition: ${f};
        background-color: ${e=>e.theme.searchbg};
        color: ${e=>e.theme.color};
        box-shadow: 0px 0px 5px 1px ${e=>e.theme.searchshadow};
    }

    .search__input {
        transition: ${f};
        background-color: ${e=>e.theme.searchbg};
        color: ${e=>e.theme.color};
    }
    
    .search__image {
        transition: ${f};
        fill: ${e=>e.theme.searchimg};
    }
    
    .button__back {
        transition: ${f};
        fill: ${e=>e.theme.searchimg};
        background-color: ${e=>e.theme.searchbg};
        box-shadow: 0 0 5px 1px ${e=>e.theme.shadow};
    }

    .border__btn {
        background-color: ${e=>e.theme.cardbg};
    }
`;function K({url:e}){return a("div",{className:"details__flag",children:a("img",{src:e,alt:"country flag"})})}function J(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:a("path",{d:"M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"})})}function Q({name:e,getBorder:c}){return a("div",{className:"border__btn",onClick:()=>c(e),children:e})}function U({onclickfunc:e,country:c,getBorder:l,allCountries:s}){const n=c[0];console.log(n);function i(o){o=o.toString();for(var h=/(-?\d+)(\d{3})/;h.test(o);)o=o.replace(h,"$1,$2");return o}const t=i(n.population);var m=[],u=[];n.name.nativeName!=null?(Object.keys(n.name.nativeName).forEach((o,h)=>m[h]=n.name.nativeName[o].common),Object.keys(n.name.nativeName).forEach((o,h)=>u[h]=n.name.nativeName[o].official)):n.name.common;var d="";n.currencies!=null&&(Object.keys(n.currencies).forEach(o=>d+=`, ${n.currencies[o].name} ( ${n.currencies[o].symbol} )`),d=d.replace(",",""));var p="";n.languages!=null&&(Object.keys(n.languages).forEach(o=>p+=`, ${n.languages[o]}`),p=p.replace(",",""));var _="";n.capital!=null&&(Object.keys(n.capital).forEach(o=>_+=`, ${n.capital[o]}`),_=_.replace(",",""));var w=[];return n.borders!=null&&Object.keys(n.borders).forEach(o=>{var h=[];h[o]=s.filter(x=>x.cca3.includes(n.borders[o])),w[o]=h[o][0].name.common}),r("div",{className:"container__details",children:[r("div",{onClick:e,className:"button button__back",children:[a(J,{}),a("p",{children:"Back"})]}),r("div",{className:"details",children:[a(K,{url:n.flags.png}),r("div",{className:"details__text",children:[r("div",{className:"text",children:[a("h2",{children:n.name.common}),r("div",{className:"text__information",children:[r("div",{className:"text__general",children:[a("div",{className:"general__native",children:r("p",{children:[a("span",{className:"bolder",children:"Native Name:"})," ",m[0]," "]})}),a("div",{className:"general__population",children:r("p",{children:[a("span",{className:"bolder",children:"Population:"})," ",t]})}),a("div",{className:"general__region",children:r("p",{children:[a("span",{className:"bolder",children:"Region:"})," ",n.region]})}),a("div",{className:"general__subregion",children:r("p",{children:[a("span",{className:"bolder",children:"Sub Region:"})," ",n.subregion]})}),a("div",{className:"general__capital",children:r("p",{children:[a("span",{className:"bolder",children:"Capital:"})," ",_]})})]}),r("div",{className:"text__additional",children:[a("div",{className:"additional__tld",children:r("p",{children:[a("span",{className:"bolder",children:"Top Level Domain:"})," ",n.tld[0]]})}),a("div",{className:"additional__currencies",children:r("p",{children:[a("span",{className:"bolder",children:"Currencies:"})," ",d]})}),a("div",{className:"additional__languages",children:r("p",{children:[a("span",{className:"bolder",children:"Languages:"})," ",p]})})]})]})]}),r("div",{className:"text__borders",children:[r("p",{children:[a("span",{className:"bolder",children:"Border Countries:"})," "]}),a("div",{className:"border__container",children:w.map((o,h)=>a(Q,{getBorder:l,name:o},h))})]})]})]})]})}const X=M.div``;function Y(){const e=localStorage.getItem("theme"),[c,l]=b.exports.useState(e);localStorage.setItem("theme",`${c}`);const[s,n]=b.exports.useState("cards"),[i,t]=b.exports.useState(""),[m,u]=b.exports.useState("region"),[d,p]=b.exports.useState(""),_=()=>{l(c==="light"?"dark":"light")},w=g=>{const v=g.target.value;t(v)},o=g=>{const v=g.target.value;u(v)},h=()=>{n(s==="cards"?"details":"cards")},x=g=>{p(g),h()},S=g=>{p(g)},O=()=>{u("region"),t(""),n("cards")},[$,y]=b.exports.useState([]),j=()=>{fetch("https://restcountries.com/v3.1/all").then(function(v){return v.json()}).then(function(v){y(v)})};b.exports.useEffect(()=>{j()},[]);const k=$;return r(A,{theme:c==="light"?H:q,children:[a(G,{}),r(X,{children:[a(D,{theme:c,onclick:()=>{_()},homePage:O}),s==="cards"?a(W,{countries:k,inputChange:w,filterChange:o,getClickedCountry:x,inputValue:i,filterValue:m}):a(U,{onclickfunc:()=>{h()},country:k.filter(g=>g.name.common===d),getBorder:S,allCountries:$})]})]})}B.render(a(T.StrictMode,{children:a(Y,{})}),document.getElementById("root"));
