import{A as i}from"./ApplicationConstants-909446ca.js";import{o as t,c as l,u as o,a as e,t as r,b as a}from"./index-a9977b16.js";const n={key:0},c={key:0,class:"alert alert-danger d-flex align-items-center alert-dismissible fade show",role:"alert"},d=e("svg",{class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Danger:"},[e("use",{"xlink:href":"#exclamation-triangle-fill"})],-1),m=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),u={key:1,class:"alert alert-success d-flex align-items-center alert-dismissible fade show",role:"alert"},h=e("svg",{class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Success:"},[e("use",{"xlink:href":"#check-circle-fill"})],-1),b=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),g={props:["msg","mode"]},v=Object.assign(g,{__name:"CAlert",setup(s){return(f,_)=>s.msg&&s.mode?(t(),l("div",n,[s.mode==o(i).ERROR?(t(),l("div",c,[d,e("div",null,r(s.msg),1),m])):a("",!0),s.mode==o(i).SUCCESS?(t(),l("div",u,[h,e("div",null,r(s.msg),1),b])):a("",!0)])):a("",!0)}});export{v as _};
