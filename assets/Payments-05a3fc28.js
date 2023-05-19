import{d,o as p,h as u,i,b as t,f as n,j as l,w as r,e as c,t as h}from"./index-5f94e7fe.js";import{_ as f}from"./DynamicTable-1115036a.js";import{A as w,a as g}from"./dao-56b0e64b.js";import{_ as v}from"./CAlert-2de6e069.js";import{A as b}from"./ApplicationConstants-909446ca.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},k={class:"row"},D=t("div",{class:"col"},[t("div",{class:"mb-3 row text-start"},[t("div",{class:"col-sm-10"},[t("span",{class:"display-6 fw-normal"},"Payments")])])],-1),R={class:"col text-end"},A=t("span",{class:"material-icons"},"add",-1),C={class:"text-center"},N=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),S=t("form",{class:"d-flex d-flex p-3 border-top"},[t("label",{class:"form-label me-2"},"From"),t("input",{type:"date",class:"form-control me-2"}),t("label",{class:"form-label form-label me-2"},"to"),t("input",{type:"date",class:"form-control me-2"}),t("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),t("button",{class:"btn btn-outline-success",type:"submit"},"Search")],-1),V={data:function(){return{items:[],columns:[{name:"receiptNumber",show:!0},{name:"paymentDate",show:!0,type:"date"},{name:"customer",show:!0},{name:"amount",show:!0,type:"amount"},{name:"description",show:!0}],allowaction:!0,actions:[{identifier:"viewClick",materialicon:"print",title:"View and Print Invoice"}],actionMapper:[],loadingmsg:"",alertmode:"",alertmsg:"",datefrom:"",dateto:""}},mounted:function(){this.loadDates(),this.loadPayments()},methods:{loadDates:function(){},loadPayments:function(o){o&&o.preventDefault();var e=this;e.loadingmsg="Fetching payments";var s={};g.list(this.datefrom,this.dateto).then(a=>{_.each(a,function(m){s[m.id]=e.actions}),e.actionMapper=s,e.items=a}).catch(a=>{console.log(a),e.alertmode=b.ERROR,e.alertmsg="Could not fetch payments"}).finally(()=>{e.loadingmsg=""})},showReceipt:function(o){var e="/payments/"+o.receiptNumber;window.open(e,"_blank")}}},F=Object.assign(V,{__name:"Payments",setup(o){return(e,s)=>{const a=d("RouterLink");return p(),u(w,null,{default:i(()=>[t("div",y,[t("div",k,[D,t("div",R,[n(a,{to:"/payment",class:"btn btn-outline-success"},{default:i(()=>[l(" Add"),A]),_:1})])]),r(t("div",null,[t("div",C,[l(h(e.loadingmsg)+" ",1),N])],512),[[c,e.loadingmsg]]),r(t("div",null,[n(v,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),S,n(f,{onViewClick:e.showReceipt,items:e.items,columns:e.columns,allowaction:e.allowaction,actionmapper:e.actionMapper,actionmapperidentifier:"invoiceNum"},null,8,["onViewClick","items","columns","allowaction","actionmapper"])],512),[[c,!e.loadingmsg]])])]),_:1})}}});export{F as default};
