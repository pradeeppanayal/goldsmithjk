import{d as p,o as f,h as b,i,A as h,b as t,f as n,w as r,g as m,j as _,t as v}from"./index-8a15da17.js";import{C as d,I as g,a as y}from"./dao-bd6f5c58.js";import{_ as R}from"./CustomerPicker-1bd2664a.js";import{A as l,_ as c}from"./CAlert-89f5cc9e.js";const S={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},D=t("div",{class:"row"},[t("div",{class:"col"},[t("div",{class:"mb-3 row text-start"},[t("div",{class:"col-sm-10"},[t("span",{class:"display-6 fw-normal"},"Payment")])])]),t("div",{class:"col text-end"})],-1),N=t("hr",null,null,-1),w={class:"form-floating mb-3"},A=["value"],C=t("label",{for:"recNumber",class:"col-sm-2 col-form-label"},"Receipt Number",-1),k={class:"form-floating mb-3"},I=["value"],V=t("label",{for:"paymentdate",class:"col-sm-2 col-form-label"},"Date",-1),O={class:"form-floating mb-3"},U=t("label",{for:"amount",class:"col-sm-2 col-form-label"},"Amount",-1),B={class:"mb-3 text-start"},E=t("label",{for:"customer",class:"col-sm-2 col-form-label"},"Customer",-1),x={class:"form-floating mb-3"},F=t("label",{for:"description",class:"col-sm-2 col-form-label"},"Description",-1),M={class:"text-end p-3"},P=["disabled"],T={data:function(){return{item:{receiptNumber:"",paymentDate:"",customer:"",description:"",amount:0},loading:!1,alertmsg:"",alertmode:""}},mounted:function(){this.loadInitialVals()},methods:{loadInitialVals:function(){this.item={paymentDate:d.getNowAsMilliSeconds(),receiptNumber:g.generateReceiptNumber(),amount:0,description:""}},getAsFormattedDate:function(o){return d.getAsFormattedDate(o)},performSave:function(o){if(o&&o.preventDefault(),!this.item.amount||this.amount<=0){this.alertmode=l.ERROR,this.alertmsg="Invalid amount";return}if(!this.item.customerId){this.alertmode=l.ERROR,this.alertmsg="Customet info required";return}this.loading=!0;var e=this;y.addOrUpdate(this.item).then(()=>{e.alertmode=l.SUCCESS,e.alertmsg="Payment saved.",e.showReceipt(e.item.receiptNumber),e.loadInitialVals()}).catch(s=>{console.log(s),e.alertmode=l.ERROR,e.alertmsg="Could save the payment info"}).finally(()=>{e.loading=!1})},customerSelected:function(o){this.item.customer=o.Name,this.item.customerId=o.id},showReceipt(o){var e=this.$basedomainname+"payments/"+o;window.open(e,"_blank")}},components:{CAlert:c}},q=Object.assign(T,{__name:"Payment",setup(o){return(e,s)=>{const u=p("RouterLink");return f(),b(h,null,{default:i(()=>[t("div",S,[D,N,n(c,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),t("form",null,[t("div",w,[t("input",{type:"text",id:"recNumber",class:"form-control-plaintext",readonly:"",value:e.item.receiptNumber},null,8,A),C]),t("div",k,[t("input",{type:"text",id:"paymentdate",class:"form-control-plaintext",readonly:"",value:e.getAsFormattedDate(e.item.paymentDate)},null,8,I),V]),t("div",O,[r(t("input",{type:"number",id:"amount","onUpdate:modelValue":s[0]||(s[0]=a=>e.item.amount=a),class:"form-control"},null,512),[[m,e.item.amount]]),U]),t("div",B,[E,n(R,{id:"customer",onSelected:e.customerSelected},null,8,["onSelected"])]),t("div",x,[r(t("textarea",{type:"text",id:"description","onUpdate:modelValue":s[1]||(s[1]=a=>e.item.description=a),class:"form-control"},null,512),[[m,e.item.description]]),F])]),t("div",M,[n(u,{to:"/payments",class:"btn btn-secondary",title:"Go back to payments"},{default:i(()=>[_("Back")]),_:1}),t("button",{type:"button",class:"btn btn-primary left-spaced",onClick:s[2]||(s[2]=(...a)=>e.performSave&&e.performSave(...a)),disabled:e.loading},v(e.loading?"Saving...":"Save"),9,P)])])]),_:1})}}});export{q as default};
