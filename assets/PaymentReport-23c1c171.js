import{o as l,c as i,w as r,e as c,b as t,m as o,t as e,f as u,i as m,j as _,u as a,F as p,s as h,S as g,B as b,n as y,C as d}from"./index-26c07445.js";import{_ as f}from"./CAlert-ea983fd3.js";const v={class:"text-center"},A=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),S={key:0},N={key:1},C={class:"invoice-box"},w={cellpadding:"0",cellspacing:"0"},I={class:"top_rw"},k={colspan:"2"},B={style:{"margin-bottom":"0px"}},D={style:{width:"50%","margin-right":"10px"}},O=t("br",null,null,-1),P={class:"top"},R={colspan:"3"},F=t("br",null,null,-1),T={style:{}},$={key:0},L=t("br",null,null,-1),E=t("br",null,null,-1),V=t("br",null,null,-1),j={key:1},z={colspan:"3"},G=t("td",null,[t("b")],-1),H={style:{"text-align":"end"}},U={style:{"text-align":"end",width:"150px"}},W=t("td",{colspan:"3"},null,-1),q={class:"total",align:"right"},J={colspan:"3"},K={colspan:"3"},M={cellspacing:"0px",cellpadding:"2px"},Q=t("tr",null,null,-1),X={width:"50%"},Y=t("br",null,null,-1),Z=t("b",null," Customer Signature ",-1),x=t("br",null,null,-1),tt=t("br",null,null,-1),nt=t("br",null,null,-1),et=t("br",null,null,-1),st=t("td",null,[t("b",null," Authorized Signature "),t("br"),t("br"),o(" ................................... "),t("br"),t("br"),t("br")],-1),ot={data:function(){return{payment:{},updatecount:1,fraction_digits:2,allowdelete:!1,applicationSettings:{},loadingmsg:"",customer:{}}},mounted:function(){this.checkAndLoad(),this.loadInvoiceSettings()},methods:{loadInvoiceSettings:function(){var s=this;h.getById(g.APPLICATION_SETTINGS).then(n=>{s.applicationSettings=n})},checkAndLoad:function(){console.log("this.$route.params.receiptNumber",this.$route.params.receiptNumber);var s=this;s.loadingmsg="Fetching payment info...",b.getById(this.$route.params.receiptNumber).then(n=>{s.payment=n,s.loadCustomer()}).finally(()=>{s.loadingmsg=""})},loadCustomer:function(){var s=this;s.loadingmsg="Fetching customer info...",y.getById(this.payment.customerId).then(n=>{s.customer=n}).finally(()=>{s.loadingmsg=""})}}},dt=Object.assign(ot,{__name:"PaymentReport",setup(s){return(n,lt)=>(l(),i(p,null,[r(t("div",null,[t("div",v,[o(e(n.loadingmsg)+" ",1),A])],512),[[c,n.loadingmsg]]),r(t("div",null,[n.payment?(l(),i("div",N,[t("div",C,[t("table",w,[t("tr",I,[t("td",k,[t("h2",B,e(n.applicationSettings.paymentReceiptHeader),1)]),t("td",D,[o(" Receipt Number: "+e(n.payment.receiptNumber)+" ",1),O,o("Payment Date: "+e(a(d).getAsFormattedDate(n.payment.paymentDate)),1)])]),t("tr",P,[t("td",R,[t("table",null,[t("tr",null,[t("td",null,[t("b",null,e(n.$appname),1),o(),F,t("p",null,e(n.applicationSettings.companyAddress),1),t("span",T,"TRN: "+e(n.applicationSettings.trn),1)]),n.customer?(l(),i("td",$,[t("b",null,"Paid By: "+e(n.customer.Name),1),L,o(" "+e(n.customer.Address),1),E,o(" "+e(n.customer.Contact),1),V])):(l(),i("td",j,"No customer info"))])])])]),t("tr",null,[t("td",z,[t("table",null,[t("tr",null,[G,t("td",H,[t("b",null," Amount Paid: "+e(a(d).getAsFormattedAmount(n.payment.amount)),1)]),t("td",U,[t("b",null," Currency : "+e(n.applicationSettings.currency),1)])])])])]),W,t("tr",q,[t("td",J,[o(" Amount Paid in Words : "),t("b",null,e(a(d).doConvert(n.payment.amount))+" Only",1)])]),t("tr",null,[t("td",K,[t("table",M,[Q,t("tr",null,[t("td",X,[o(" Confirmed on behalf of "),t("b",null,e(n.payment.customer),1),Y,Z,x,o(" ................................... "),tt,nt,et]),st])])])])])])])):(l(),i("div",S,[u(_,null,{default:m(()=>[u(f,{alertmsg:"No payment info available",alertmode:"ERROR"})]),_:1})]))],512),[[c,!n.loadingmsg]])],64))}});export{dt as default};
