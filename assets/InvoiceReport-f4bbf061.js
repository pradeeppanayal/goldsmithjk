import{o as l,c as i,w as a,e as d,b as t,m as s,t as n,f as c,i as u,j as h,u as _,F as m,s as g,S as p,l as v,A as b,n as f,C as S}from"./index-6619cc03.js";import{_ as y}from"./InvoiceItemTable-b83711a5.js";import{_ as r}from"./CAlert-b391320e.js";const A={class:"text-center"},w=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),I={key:0},C=t("h3",null,"No invoice found. ",-1),N={key:1},D={class:"invoice-box"},B={cellpadding:"0",cellspacing:"0"},T={class:"top_rw"},R={colspan:"2"},k={style:{"margin-bottom":"0px"}},O={style:{width:"300px","padding-right":"10px"}},F=t("br",null,null,-1),L={class:"top"},$={colspan:"3"},E=t("br",null,null,-1),P={style:{}},V=t("br",null,null,-1),j=t("br",null,null,-1),M=t("br",null,null,-1),z={colspan:"3"},G=t("td",null,[t("b",null,"Accounts Copy")],-1),H={style:{"text-align":"end"}},U={style:{"text-align":"end",width:"150px"}},W={colspan:"3"},q=t("tr",{class:"total"},null,-1),J={colspan:"3"},K={cellspacing:"0px",cellpadding:"2px"},Q=t("tr",null,[t("td",{width:"100%"},[t("b",null," Declaration: "),s(),t("br"),s(" We declare that this invoice shows the actual price of the goods described above and that all particulars are true and correct. The goods sold are intended for end user consumption and not for resale. ")])],-1),X={width:"50%"},Y=t("br",null,null,-1),Z=t("b",null," Customer Signature ",-1),x=t("br",null,null,-1),tt=t("br",null,null,-1),et=t("br",null,null,-1),nt=t("br",null,null,-1),ot=t("td",null,[t("b",null," Authorized Signature "),t("br"),t("br"),s(" ................................... "),t("br"),t("br"),t("br")],-1),st={data:function(){return{invoice:{},updatecount:1,fraction_digits:2,allowdelete:!1,invoiceSettings:{},loadingmsg:"",alertmode:"",alertmsg:"",customer:{}}},mounted:function(){this.checkAndLoadInvoice(),this.loadInvoiceSettings()},methods:{loadInvoiceSettings:function(){var o=this;g.getById(p.APPLICATION_SETTINGS).then(e=>{o.invoiceSettings=e})},checkAndLoadInvoice:function(){var o=this;o.loadingmsg="Fetching invoice details...",v.getById(this.$route.params.invoicenumber).then(e=>{o.invoice=e,o.loadCustomer(),o.updatecount+=1}).catch(e=>{console.log(e),o.alertmode=b.ERROR,o.alertmsg="Could not fetch the invoice details"}).finally(()=>{o.loadingmsg=""})},loadCustomer:function(){var o=this;f.getById(this.invoice.customerId).then(e=>{o.customer=e})}},components:{CAlert:r}},ct=Object.assign(st,{__name:"InvoiceReport",setup(o){return(e,lt)=>(l(),i(m,null,[a(t("div",null,[t("div",A,[s(n(e.loadingmsg)+" ",1),w])],512),[[d,e.loadingmsg]]),a(t("div",null,[c(r,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),e.invoice?(l(),i("div",N,[t("div",D,[t("table",B,[t("tr",T,[t("td",R,[t("h2",k,n(e.invoiceSettings.invoiceHeader),1)]),t("td",O,[s(" Invoice Number: "+n(e.invoice.invoiceNumber)+" ",1),F,s("Purchase Date: "+n(_(S).getAsFormattedDate(e.invoice.purchaseDate)),1)])]),t("tr",L,[t("td",$,[t("table",null,[t("tr",null,[t("td",null,[t("b",null," Sold By: "+n(e.$appname),1),s(),E,t("pre",null,n(e.invoiceSettings.companyAddress),1),t("span",P,"TRN: "+n(e.invoiceSettings.trn),1)]),a(t("td",null,[t("b",null," Billing Address: "+n(e.customer.Name),1),V,s(" "+n(e.customer.Address),1),j,s(" "+n(e.customer.Contact),1),M,s(" "+n(e.customer.TRN),1)],512),[[d,e.customer]])])])])]),t("tr",null,[t("td",z,[t("table",null,[t("tr",null,[G,t("td",H,[t("b",null,"Metal Rate: "+n(e.invoice.rate),1)]),t("td",U,[t("b",null," Currency : "+n(e.invoiceSettings.currency),1)])])])])]),t("td",W,[c(y,{invoiceinfo:e.invoice,fraction_digits:e.invoiceSettings.fractionDigits,allowdelete:e.allowdelete,updatecount:e.updatecount},null,8,["invoiceinfo","fraction_digits","allowdelete","updatecount"])]),q,t("tr",null,[t("td",J,[t("table",K,[Q,t("tr",null,[t("td",X,[s(" Confirmed on behalf of "),t("b",null,n(e.invoice.customer),1),Y,Z,x,s(" ................................... "),tt,et,nt]),ot])])])])])])])):(l(),i("div",I,[c(h,null,{default:u(()=>[C]),_:1})]))],512),[[d,!e.loadingmsg]])],64))}});export{ct as default};
