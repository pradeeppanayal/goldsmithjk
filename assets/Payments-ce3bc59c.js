import{d as m,o as p,h as u,i,j as f,y as h,A as g,b as e,f as n,m as l,w as c,e as d,t as v,u as w,D as y}from"./index-ed30ecb5.js";import{_ as C}from"./DynamicTable-5851fb55.js";import{_ as b}from"./CAlert-5e5ba56f.js";const R={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},k={class:"row"},A=e("div",{class:"col"},[e("div",{class:"mb-3 row text-start"},[e("div",{class:"col-sm-10"},[e("span",{class:"display-6 fw-normal"},"Cash Transactions")])])],-1),D={class:"col text-end"},N=e("span",{class:"material-icons"},"add",-1),M={class:"text-center"},S=e("div",{class:"spinner-grow",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),V={data:function(){return{items:[],allowaction:!0,actions:[{identifier:"viewClick",materialicon:"print",title:"View and Print Invoice"}],actionMapper:[],loadingmsg:"",alertmode:"",alertmsg:"",datefrom:"",dateto:""}},mounted:function(){this.loadDates(),this.loadPayments()},methods:{loadDates:function(){},loadPayments:function(t){t&&t.preventDefault();var a=this;a.loadingmsg="Fetching payments";var o={};h.list(this.datefrom,this.dateto).then(s=>{_.each(s,function(r){o[r.id]=a.actions}),a.actionMapper=o,a.items=s}).catch(s=>{console.log(s),a.alertmode=g.ERROR,a.alertmsg="Could not fetch payments"}).finally(()=>{a.loadingmsg=""})},showReceipt:function(t){if(t.amount>0){var a=this.$basedomainname+"payments/"+t.receiptNumber;window.open(a,"_blank")}else if(t.invoiceRef){var a=this.$basedomainname+"invoices/"+t.invoiceRef;window.open(a,"_blank")}}}},P=Object.assign(V,{__name:"Payments",setup(t){return(a,o)=>{const s=m("RouterLink");return p(),u(f,null,{default:i(()=>[e("div",R,[e("div",k,[A,e("div",D,[n(s,{to:"/payment",class:"btn btn-outline-success"},{default:i(()=>[l(" Add"),N]),_:1})])]),c(e("div",null,[e("div",M,[l(v(a.loadingmsg)+" ",1),S])],512),[[d,a.loadingmsg]]),c(e("div",null,[n(b,{msg:a.alertmsg,mode:a.alertmode},null,8,["msg","mode"]),n(C,{onViewClick:a.showReceipt,items:a.items,columns:w(y).CASH_TRANSACTION_COLUMNS,allowaction:a.allowaction,actionmapper:a.actionMapper,actionmapperidentifier:"invoiceNum"},null,8,["onViewClick","items","columns","allowaction","actionmapper"])],512),[[d,!a.loadingmsg]])])]),_:1})}}});export{P as default};
