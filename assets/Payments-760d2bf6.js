import{d,o as p,h as u,i,A as f,b as t,f as n,j as l,w as c,e as r,t as h}from"./index-a4b22d57.js";import{_ as w}from"./DynamicTable-a6b91925.js";import{a as v}from"./dao-bd6f5c58.js";import{A as g,_ as b}from"./CAlert-750f3d14.js";const y={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},k={class:"row"},R=t("div",{class:"col"},[t("div",{class:"mb-3 row text-start"},[t("div",{class:"col-sm-10"},[t("span",{class:"display-6 fw-normal"},"Payments")])])],-1),D={class:"col text-end"},A=t("span",{class:"material-icons"},"add",-1),C={class:"text-center"},N=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),S=t("form",{class:"d-flex d-flex p-3 border-top"},[t("label",{class:"form-label me-2"},"From"),t("input",{type:"date",class:"form-control me-2"}),t("label",{class:"form-label form-label me-2"},"to"),t("input",{type:"date",class:"form-control me-2"}),t("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),t("button",{class:"btn btn-outline-success",type:"submit"},"Search")],-1),V={data:function(){return{items:[],columns:[{name:"receiptNumber",show:!0},{name:"paymentDate",show:!0,type:"date"},{name:"customer",show:!0},{name:"amount",show:!0,type:"amount"},{name:"description",show:!0}],allowaction:!0,actions:[{identifier:"viewClick",materialicon:"print",title:"View and Print Invoice"}],actionMapper:[],loadingmsg:"",alertmode:"",alertmsg:"",datefrom:"",dateto:""}},mounted:function(){this.loadDates(),this.loadPayments()},methods:{loadDates:function(){},loadPayments:function(a){a&&a.preventDefault();var e=this;e.loadingmsg="Fetching payments";var o={};v.list(this.datefrom,this.dateto).then(s=>{_.each(s,function(m){o[m.id]=e.actions}),e.actionMapper=o,e.items=s}).catch(s=>{console.log(s),e.alertmode=g.ERROR,e.alertmsg="Could not fetch payments"}).finally(()=>{e.loadingmsg=""})},showReceipt:function(a){if(a.amount>0){var e=this.$basedomainname+"payments/"+a.receiptNumber;window.open(e,"_blank")}else if(a.invoiceRef){var e=this.$basedomainname+"invoices/"+a.invoiceRef;window.open(e,"_blank")}}}},L=Object.assign(V,{__name:"Payments",setup(a){return(e,o)=>{const s=d("RouterLink");return p(),u(f,null,{default:i(()=>[t("div",y,[t("div",k,[R,t("div",D,[n(s,{to:"/payment",class:"btn btn-outline-success"},{default:i(()=>[l(" Add"),A]),_:1})])]),c(t("div",null,[t("div",C,[l(h(e.loadingmsg)+" ",1),N])],512),[[r,e.loadingmsg]]),c(t("div",null,[n(b,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),S,n(w,{onViewClick:e.showReceipt,items:e.items,columns:e.columns,allowaction:e.allowaction,actionmapper:e.actionMapper,actionmapperidentifier:"invoiceNum"},null,8,["onViewClick","items","columns","allowaction","actionmapper"])],512),[[r,!e.loadingmsg]])])]),_:1})}}});export{L as default};
