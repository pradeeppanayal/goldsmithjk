import{o as i,c as l,w as a,e as d,b as t,j as s,t as n,f as c,i as u,A as h,F as _}from"./index-c1948af4.js";import{_ as r,s as m,S as g,i as v,A as p,c as b}from"./dao-4ad1f386.js";import{_ as f}from"./InvoiceItemTable-758d624a.js";const S={class:"text-center"},y=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),A={key:0},w=t("h3",null,"No invoice found. ",-1),I={key:1},C={class:"invoice-box"},N={cellpadding:"0",cellspacing:"0"},D={class:"top_rw"},B={colspan:"2"},T={style:{"margin-bottom":"0px"}},R={style:{width:"30%","margin-right":"10px"}},k=t("br",null,null,-1),O={class:"top"},L={colspan:"3"},$=t("br",null,null,-1),E={style:{}},F=t("br",null,null,-1),P=t("br",null,null,-1),V=t("br",null,null,-1),j={colspan:"3"},M=t("td",null,[t("b",null,"Accounts Copy")],-1),z={style:{"text-align":"end"}},G={style:{"text-align":"end",width:"150px"}},H={colspan:"3"},W=t("tr",{class:"total"},null,-1),q={colspan:"3"},J={cellspacing:"0px",cellpadding:"2px"},K=t("tr",null,[t("td",{width:"100%"},[t("b",null," Declaration: "),s(),t("br"),s(" We declare that this invoice shows the actual price of the goods described above and that all particulars are true and correct. The goods sold are intended for end user consumption and not for resale. ")])],-1),Q={width:"50%"},U=t("br",null,null,-1),X=t("b",null," Customer Signature ",-1),Y=t("br",null,null,-1),Z=t("br",null,null,-1),x=t("br",null,null,-1),tt=t("br",null,null,-1),et=t("td",null,[t("b",null," Authorized Signature "),t("br"),t("br"),s(" ................................... "),t("br"),t("br"),t("br")],-1),nt={data:function(){return{invoice:{},updatecount:1,fraction_digits:2,allowdelete:!1,invoiceSettings:{},loadingmsg:"",alertmode:"",alertmsg:"",customer:{}}},mounted:function(){this.checkAndLoadInvoice(),this.loadInvoiceSettings()},methods:{loadInvoiceSettings:function(){var o=this;m.getById(g.APPLICATION_SETTINGS).then(e=>{o.invoiceSettings=e})},checkAndLoadInvoice:function(){var o=this;o.loadingmsg="Fetching invoice details...",v.getById(this.$route.params.invoicenumber).then(e=>{o.invoice=e,o.loadCustomer(),o.updatecount+=1}).catch(e=>{console.log(e),o.alertmode=p.ERROR,o.alertmsg="Could not fetch the invoice details"}).finally(()=>{o.loadingmsg=""})},loadCustomer:function(){var o=this;b.getById(this.invoice.customerId).then(e=>{o.customer=e})}},components:{CAlert:r}},at=Object.assign(nt,{__name:"InvoiceReport",setup(o){return(e,ot)=>(i(),l(_,null,[a(t("div",null,[t("div",S,[s(n(e.loadingmsg)+" ",1),y])],512),[[d,e.loadingmsg]]),a(t("div",null,[c(r,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),e.invoice?(i(),l("div",I,[t("div",C,[t("table",N,[t("tr",D,[t("td",B,[t("h2",T,n(e.invoiceSettings.invoiceHeader),1)]),t("td",R,[s(" Invoice Number: "+n(e.invoice.invoiceNumber)+" ",1),k,s("Purchase Date: "+n(e.invoice.purchaseDate),1)])]),t("tr",O,[t("td",L,[t("table",null,[t("tr",null,[t("td",null,[t("b",null," Sold By: "+n(e.$appname),1),s(),$,t("pre",null,n(e.invoiceSettings.companyAddress),1),t("span",E,"TRN: "+n(e.invoiceSettings.trn),1)]),a(t("td",null,[t("b",null," Billing Address: "+n(e.customer.Name),1),F,s(" "+n(e.customer.Address),1),P,s(" "+n(e.customer.Contact),1),V,s(" "+n(e.customer.TRN),1)],512),[[d,e.customer]])])])])]),t("tr",null,[t("td",j,[t("table",null,[t("tr",null,[M,t("td",z,[t("b",null,"Metal Rate: "+n(e.invoice.rate),1)]),t("td",G,[t("b",null," Currency : "+n(e.invoiceSettings.currency),1)])])])])]),t("td",H,[c(f,{invoiceinfo:e.invoice,fraction_digits:e.invoiceSettings.fractionDigits,allowdelete:e.allowdelete,updatecount:e.updatecount},null,8,["invoiceinfo","fraction_digits","allowdelete","updatecount"])]),W,t("tr",null,[t("td",q,[t("table",J,[K,t("tr",null,[t("td",Q,[s(" Confirmed on behalf of "),t("b",null,n(e.invoice.customer),1),U,X,Y,s(" ................................... "),Z,x,tt]),et])])])])])])])):(i(),l("div",A,[c(h,null,{default:u(()=>[w]),_:1})]))],512),[[d,!e.loadingmsg]])],64))}});export{at as default};
