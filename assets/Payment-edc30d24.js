import{d as p,o as f,h as _,i as r,_ as b,C as a,I as h,A as n,x as v,b as t,f as i,w as m,g as d,l as g,t as y}from"./index-ab8a4c79.js";import{_ as S}from"./CustomerPicker-8d172ce4.js";import{_ as c}from"./CAlert-098161b8.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},R=t("div",{class:"row"},[t("div",{class:"col"},[t("div",{class:"mb-3 row text-start"},[t("div",{class:"col-sm-10"},[t("span",{class:"display-6 fw-normal"},"Payment")])])]),t("div",{class:"col text-end"})],-1),A=t("hr",null,null,-1),D={class:"form-floating mb-3"},N=["value"],C=t("label",{for:"recNumber",class:"col-sm-2 col-form-label"},"Receipt Number",-1),k={class:"form-floating mb-3"},I=["value"],V=t("label",{for:"paymentdate",class:"col-sm-2 col-form-label"},"Date",-1),O={class:"form-floating mb-3"},U=t("label",{for:"amount",class:"col-sm-2 col-form-label"},"Amount",-1),x={class:"mb-3 text-start"},B=t("label",{for:"customer",class:"col-sm-2 col-form-label"},"Customer",-1),E={class:"form-floating mb-3"},$=t("label",{for:"description",class:"col-sm-2 col-form-label"},"Description",-1),F={class:"text-end p-3"},M=["disabled"],G={data:function(){return{item:{receiptNumber:"",paymentDate:"",customer:"",description:"",amount:0},loading:!1,alertmsg:"",alertmode:""}},mounted:function(){this.loadInitialVals()},methods:{loadInitialVals:function(){this.item={paymentDate:a.getNowAsMilliSeconds(),receiptNumber:h.generateReceiptNumber(),amount:0,description:""}},getAsFormattedDate:function(o){return a.getAsFormattedDate(o)},performSave:function(o){o&&o.preventDefault();var e=this;if(!this.item.amount||this.amount<=0){a.showAlert(e,"Invalid or no amount specified",n.ERROR);return}if(!this.item.customerId){a.showAlert(e,"Customer info required",n.ERROR);return}this.loading=!0;var e=this;v.addOrUpdate(this.item).then(()=>{a.showAlert(e,"Saved.",n.SUCCESS),e.showReceipt(e.item.receiptNumber),e.loadInitialVals()}).catch(s=>{console.log(s),a.showAlert(e,"Could not save the payment info.",n.ERROR)}).finally(()=>{e.loading=!1})},customerSelected:function(o){this.item.customer=o.Name,this.item.customerId=o.id},showReceipt(o){var e=this.$basedomainname+"payments/"+o;window.open(e,"_blank")}},components:{CAlert:c}},q=Object.assign(G,{__name:"Payment",setup(o){return(e,s)=>{const u=p("RouterLink");return f(),_(b,null,{default:r(()=>[t("div",w,[R,A,i(c,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),t("form",null,[t("div",D,[t("input",{type:"text",id:"recNumber",class:"form-control-plaintext",readonly:"",value:e.item.receiptNumber},null,8,N),C]),t("div",k,[t("input",{type:"text",id:"paymentdate",class:"form-control-plaintext",readonly:"",value:e.getAsFormattedDate(e.item.paymentDate)},null,8,I),V]),t("div",O,[m(t("input",{type:"number",id:"amount","onUpdate:modelValue":s[0]||(s[0]=l=>e.item.amount=l),class:"form-control"},null,512),[[d,e.item.amount]]),U]),t("div",x,[B,i(S,{id:"customer",onSelected:e.customerSelected},null,8,["onSelected"])]),t("div",E,[m(t("textarea",{type:"text",id:"description","onUpdate:modelValue":s[1]||(s[1]=l=>e.item.description=l),class:"form-control"},null,512),[[d,e.item.description]]),$])]),t("div",F,[i(u,{to:"/payments",class:"btn btn-secondary",title:"Go back to payments"},{default:r(()=>[g("Back")]),_:1}),t("button",{type:"button",class:"btn btn-primary left-spaced",onClick:s[2]||(s[2]=(...l)=>e.performSave&&e.performSave(...l)),disabled:e.loading},y(e.loading?"Saving...":"Save"),9,M)])])]),_:1})}}});export{q as default};
