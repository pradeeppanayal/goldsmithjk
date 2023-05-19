import{o as l,c as i,w as r,e as c,b as t,j as o,t as n,f as u,i as _,u as a,F as m}from"./index-ee24f63c.js";import{A as p,s as h,a as g,c as y,C as d}from"./dao-4a6e8298.js";import{S as b}from"./ApplicationConstants-909446ca.js";import{_ as f}from"./CAlert-f05941e8.js";import"./_plugin-vue_export-helper-c27b6911.js";const v={class:"text-center"},A=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),S={key:0},N={key:1},C={class:"invoice-box"},w={cellpadding:"0",cellspacing:"0"},I={class:"top_rw"},k={colspan:"2"},D={style:{"margin-bottom":"0px"}},P={style:{width:"50%","margin-right":"10px"}},R=t("br",null,null,-1),B={class:"top"},O={colspan:"3"},F=t("br",null,null,-1),T={style:{}},$={key:0},L=t("br",null,null,-1),E=t("br",null,null,-1),V=t("br",null,null,-1),j={key:1},z={colspan:"3"},G=t("td",null,[t("b")],-1),H={style:{"text-align":"end"}},U={style:{"text-align":"end",width:"150px"}},W=t("td",{colspan:"3"},null,-1),q={class:"total",align:"right"},J={colspan:"3"},K={colspan:"3"},M={cellspacing:"0px",cellpadding:"2px"},Q=t("tr",null,null,-1),X={width:"50%"},Y=t("br",null,null,-1),Z=t("b",null," Customer Signature ",-1),x=t("br",null,null,-1),tt=t("br",null,null,-1),et=t("br",null,null,-1),nt=t("br",null,null,-1),st=t("td",null,[t("b",null," Authorized Signature "),t("br"),t("br"),o(" ................................... "),t("br"),t("br"),t("br")],-1),ot={data:function(){return{payment:{},updatecount:1,fraction_digits:2,allowdelete:!1,applicationSettings:{},loadingmsg:"",customer:{}}},mounted:function(){this.checkAndLoad(),this.loadInvoiceSettings()},methods:{loadInvoiceSettings:function(){var s=this;h.getById(b.APPLICATION_SETTINGS).then(e=>{s.applicationSettings=e})},checkAndLoad:function(){console.log("this.$route.params.receiptNumber",this.$route.params.receiptNumber);var s=this;s.loadingmsg="Fetching payment info...",g.getById(this.$route.params.receiptNumber).then(e=>{s.payment=e,s.loadCustomer()}).finally(()=>{s.loadingmsg=""})},loadCustomer:function(){var s=this;s.loadingmsg="Fetching customer info...",y.getById(this.payment.customerId).then(e=>{s.customer=e}).finally(()=>{s.loadingmsg=""})}}},ut=Object.assign(ot,{__name:"PaymentReport",setup(s){return(e,lt)=>(l(),i(m,null,[r(t("div",null,[t("div",v,[o(n(e.loadingmsg)+" ",1),A])],512),[[c,e.loadingmsg]]),r(t("div",null,[e.payment?(l(),i("div",N,[t("div",C,[t("table",w,[t("tr",I,[t("td",k,[t("h2",D,n(e.applicationSettings.paymentReceiptHeader),1)]),t("td",P,[o(" Receipt Number: "+n(e.payment.receiptNumber)+" ",1),R,o("Payment Date: "+n(a(d).getAsFormattedDate(e.payment.paymentDate)),1)])]),t("tr",B,[t("td",O,[t("table",null,[t("tr",null,[t("td",null,[t("b",null,n(e.$appname),1),o(),F,t("p",null,n(e.applicationSettings.companyAddress),1),t("span",T,"TRN: "+n(e.applicationSettings.trn),1)]),e.customer?(l(),i("td",$,[t("b",null,"Paid By: "+n(e.customer.Name),1),L,o(" "+n(e.customer.Address),1),E,o(" "+n(e.customer.Contact),1),V])):(l(),i("td",j,"No customer info"))])])])]),t("tr",null,[t("td",z,[t("table",null,[t("tr",null,[G,t("td",H,[t("b",null," Amount Paid: "+n(a(d).getAsFormattedAmount(e.payment.amount)),1)]),t("td",U,[t("b",null," Currency : "+n(e.applicationSettings.currency),1)])])])])]),W,t("tr",q,[t("td",J,[o(" Amount Paid in Words : "),t("b",null,n(a(d).doConvert(e.payment.amount))+" Only",1)])]),t("tr",null,[t("td",K,[t("table",M,[Q,t("tr",null,[t("td",X,[o(" Confirmed on behalf of "),t("b",null,n(e.payment.customer),1),Y,Z,x,o(" ................................... "),tt,et,nt]),st])])])])])])])):(l(),i("div",S,[u(p,null,{default:_(()=>[u(f,{alertmsg:"No payment info available",alertmode:"ERROR"})]),_:1})]))],512),[[c,!e.loadingmsg]])],64))}});export{ut as default};
