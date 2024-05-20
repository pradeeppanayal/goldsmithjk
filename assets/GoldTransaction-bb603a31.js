import{d as p,o as f,h,i as d,_ as b,C as a,I as _,A as i,y as v,b as t,f as n,w as r,g as m,l as g,t as y}from"./index-ab8a4c79.js";import{_ as w}from"./CustomerPicker-8d172ce4.js";import{_ as c}from"./CAlert-098161b8.js";import"./_plugin-vue_export-helper-c27b6911.js";const R={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},S=t("div",{class:"row"},[t("div",{class:"col"},[t("div",{class:"mb-3 row text-start"},[t("div",{class:"col-sm-10"},[t("span",{class:"display-6 fw-normal"},"Gold Transaction")])])]),t("div",{class:"col text-end"})],-1),A=t("hr",null,null,-1),D={class:"form-floating mb-3"},N=["value"],C=t("label",{for:"recNumber",class:"col-sm-2 col-form-label"},"Receipt Number",-1),I={class:"form-floating mb-3"},V=["value"],k=t("label",{for:"paymentdate",class:"col-sm-2 col-form-label"},"Date",-1),O={class:"form-floating mb-3"},U=t("label",{for:"amount",class:"col-sm-2 col-form-label"},"Weight",-1),E={class:"form-floating mb-3"},G=t("label",{for:"amount",class:"col-sm-2 col-form-label"},"Purity",-1),B={class:"form-floating mb-3"},T=["value"],$=t("label",{for:"amount",class:"col-sm-2 col-form-label"},"Pure Weight",-1),F={class:"mb-3 text-start"},M=t("label",{for:"customer",class:"col-sm-2 col-form-label"},"Customer",-1),P={class:"form-floating mb-3"},L=t("label",{for:"description",class:"col-sm-2 col-form-label"},"Description",-1),W={class:"text-end p-3"},j=["disabled"],q={data:function(){return{item:{receiptNumber:"",paymentDate:"",customer:"",description:"",amount:0},loading:!1,alertmsg:"",alertmode:""}},mounted:function(){this.loadInitialVals()},methods:{loadInitialVals:function(){this.item={paymentDate:a.getNowAsMilliSeconds(),receiptNumber:_.generateGoldReceiptNumber(),amount:0,description:""}},getAsFormattedDate:function(o){return a.getAsFormattedDate(o)},performSave:function(o){o&&o.preventDefault();var e=this;if(!this.item.purity||this.purity<=0){a.showAlert(e,"Invalid or no purity",i.ERROR);return}if(!this.item.weight||this.weight<=0){a.showAlert(e,"Invalid or no weight",i.ERROR);return}if(!this.item.customerId){a.showAlert(e,"Customer info required",i.ERROR);return}this.loading=!0;var e=this;v.addOrUpdate(this.item).then(()=>{a.showAlert(e,"Saved.",i.SUCCESS),e.loadInitialVals()}).catch(s=>{console.log(s),a.showAlert(e,"Could not save the payment info.",i.ERROR)}).finally(()=>{e.loading=!1})},customerSelected:function(o){this.item.customer=o.Name,this.item.customerId=o.id},showReceipt(o){var e=this.$basedomainname+"payments/"+o;window.open(e,"_blank")}},components:{CAlert:c}},K=Object.assign(q,{__name:"GoldTransaction",setup(o){return(e,s)=>{const u=p("RouterLink");return f(),h(b,null,{default:d(()=>[t("div",R,[S,A,n(c,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),t("form",null,[t("div",D,[t("input",{type:"text",id:"recNumber",class:"form-control-plaintext",readonly:"",value:e.item.receiptNumber},null,8,N),C]),t("div",I,[t("input",{type:"text",id:"paymentdate",class:"form-control-plaintext",readonly:"",value:e.getAsFormattedDate(e.item.paymentDate)},null,8,V),k]),t("div",O,[r(t("input",{type:"number",id:"amount","onUpdate:modelValue":s[0]||(s[0]=l=>e.item.weight=l),class:"form-control"},null,512),[[m,e.item.weight]]),U]),t("div",E,[r(t("input",{type:"number",id:"amount","onUpdate:modelValue":s[1]||(s[1]=l=>e.item.purity=l),class:"form-control"},null,512),[[m,e.item.purity]]),G]),t("div",B,[t("input",{type:"text",id:"amount",value:e.item.purity*e.item.weight*.001,class:"form-control",readonly:""},null,8,T),$]),t("div",F,[M,n(w,{id:"customer",onSelected:e.customerSelected},null,8,["onSelected"])]),t("div",P,[r(t("textarea",{type:"text",id:"description","onUpdate:modelValue":s[2]||(s[2]=l=>e.item.description=l),class:"form-control"},null,512),[[m,e.item.description]]),L])]),t("div",W,[n(u,{to:"/payments",class:"btn btn-secondary",title:"Go back to payments"},{default:d(()=>[g("Back")]),_:1}),t("button",{type:"button",class:"btn btn-primary left-spaced",onClick:s[3]||(s[3]=(...l)=>e.performSave&&e.performSave(...l)),disabled:e.loading},y(e.loading?"Saving...":"Save"),9,j)])])]),_:1})}}});export{K as default};
