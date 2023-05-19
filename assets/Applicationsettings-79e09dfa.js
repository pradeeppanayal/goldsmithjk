import{o as g,h as f,i as p,A as u,b as t,w as o,e as i,j as c,t as y,f as h,g as a}from"./index-85703930.js";import{S as v,A as d,_ as m}from"./CAlert-213e15cc.js";import{s as r}from"./dao-bd6f5c58.js";const S={class:"pricing-header p-3 pb-md-4 mx-auto text-start"},b=t("h1",{class:"display-6 fw-normal"},"General Settings",-1),w=t("hr",null,null,-1),_={class:"text-center"},E=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),C={class:"form-floating mb-3"},A=["value"],R=t("label",{for:"companyname",class:"form-label"},"Company Name",-1),H={class:"form-floating mb-3"},V=["readonly"],T=t("label",{for:"comaddress",class:"form-label"},"Company Address",-1),U={class:"form-floating mb-3"},N=["readonly"],I=t("label",{for:"invHeader",class:"form-label"},"Invoice Header",-1),O={class:"form-floating mb-3"},k=["readonly"],B=t("label",{for:"paymentHeader",class:"form-label"},"Payment Receipt Header",-1),D={class:"form-floating mb-3"},P=["readonly"],$=t("label",{for:"vat",class:"form-label"},"VAT",-1),j={class:"form-floating mb-3"},G=["readonly"],L=t("label",{for:"trn",class:"form-label"},"TRN",-1),M={class:"form-floating mb-3"},F=["readonly"],q=t("label",{for:"currency",class:"form-label"},"Currency",-1),z={data:function(){return{generalSettings:{},allowEdit:!1,loadingmsg:"",alertmsg:"",alertmode:""}},mounted:function(){this.loadSettings()},methods:{discardChanges:function(){this.loadSettings(),this.allowEdit=!1},loadSettings:function(){var l=this;l.loadingmsg="Fetching settings...",r.getById(v.APPLICATION_SETTINGS).then(e=>{l.generalSettings=e}).catch(e=>{console.log(e),l.alertmode==d.ERROR,l.alertmsg="Something went wrong"}).finally(l.loadingmsg="")},saveReportSettings:function(l){l&&l.preventDefault();var e=this;e.loadingmsg="Saving...",r.addOrUpdate(this.generalSettings).then(()=>{e.alertmode==d.SUCCESS,e.alertmsg="Changes saved.",e.loadSettings(),e.allowEdit=!1}).catch(n=>{console.log(n),e.alertmode==d.ERROR,e.alertmsg="Something went wrong"}).finally(e.loadingmsg=!1)}},components:{CAlert:m}},W=Object.assign(z,{__name:"Applicationsettings",setup(l){return(e,n)=>(g(),f(u,null,{default:p(()=>[t("div",S,[b,w,o(t("div",null,[t("div",_,[c(y(e.loadingmsg)+" ",1),E])],512),[[i,e.loadingmsg]]),o(t("div",null,[h(m,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),t("form",null,[t("div",C,[t("input",{type:"text",id:"companyname",class:"form-control",readonly:"",value:e.$appname},null,8,A),R]),t("div",H,[o(t("textarea",{class:"form-control",id:"comaddress","onUpdate:modelValue":n[0]||(n[0]=s=>e.generalSettings.companyAddress=s),readonly:!e.allowEdit},null,8,V),[[a,e.generalSettings.companyAddress]]),T]),t("div",U,[o(t("input",{type:"text",id:"invHeader",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=s=>e.generalSettings.invoiceHeader=s),readonly:!e.allowEdit},null,8,N),[[a,e.generalSettings.invoiceHeader]]),I]),t("div",O,[o(t("input",{type:"text",id:"paymentHeader",class:"form-control","onUpdate:modelValue":n[2]||(n[2]=s=>e.generalSettings.paymentReceiptHeader=s),readonly:!e.allowEdit},null,8,k),[[a,e.generalSettings.paymentReceiptHeader]]),B]),t("div",D,[o(t("input",{type:"text",id:"vat",class:"form-control","onUpdate:modelValue":n[3]||(n[3]=s=>e.generalSettings.vat=s),readonly:!e.allowEdit},null,8,P),[[a,e.generalSettings.vat]]),$]),t("div",j,[o(t("input",{type:"text",id:"trn",class:"form-control","onUpdate:modelValue":n[4]||(n[4]=s=>e.generalSettings.trn=s),readonly:!e.allowEdit},null,8,G),[[a,e.generalSettings.trn]]),L]),t("div",M,[o(t("input",{type:"text",id:"currency",class:"form-control","onUpdate:modelValue":n[5]||(n[5]=s=>e.generalSettings.currency=s),readonly:!e.allowEdit},null,8,F),[[a,e.generalSettings.currency]]),q]),o(t("button",{type:"button",class:"btn btn-secondary",onClick:n[6]||(n[6]=s=>e.allowEdit=!0)},"Edit",512),[[i,!e.allowEdit]]),o(t("button",{type:"button",class:"btn btn-secondary",onClick:n[7]||(n[7]=(...s)=>e.discardChanges&&e.discardChanges(...s))},"Cancel",512),[[i,e.allowEdit]]),o(t("button",{type:"button",style:{"margin-left":"10px"},class:"btn btn-primary",onClick:n[8]||(n[8]=(...s)=>e.saveReportSettings&&e.saveReportSettings(...s))},"Save Changes",512),[[i,e.allowEdit]])])],512),[[i,!e.loadingmsg]])])]),_:1}))}});export{W as default};
