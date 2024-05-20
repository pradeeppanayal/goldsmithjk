import{o as m,h as f,i as p,j as u,s as r,S as c,A as d,b as t,w as o,e as i,m as y,t as h,f as v,g as a}from"./index-b25e6acc.js";import{_ as g}from"./CAlert-5fafc70e.js";const S={class:"pricing-header p-3 pb-md-4 mx-auto text-start"},b=t("h1",{class:"display-6 fw-normal"},"General Settings",-1),w=t("hr",null,null,-1),_={class:"text-center"},E=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),C={class:"form-floating mb-3"},R=["value"],A=t("label",{for:"companyname",class:"form-label"},"Company Name",-1),H={class:"form-floating mb-3"},V=["readonly"],T=t("label",{for:"comaddress",class:"form-label"},"Company Address",-1),U={class:"form-floating mb-3"},N=["readonly"],I=t("label",{for:"invHeader",class:"form-label"},"Invoice Header",-1),O={class:"form-floating mb-3"},k=["readonly"],B=t("label",{for:"paymentHeader",class:"form-label"},"Payment Receipt Header",-1),D={class:"form-floating mb-3"},P=["readonly"],$=t("label",{for:"vat",class:"form-label"},"VAT",-1),j={class:"form-floating mb-3"},G=["readonly"],L=t("label",{for:"trn",class:"form-label"},"TRN",-1),M={class:"form-floating mb-3"},F=["readonly"],q=t("label",{for:"currency",class:"form-label"},"Currency",-1),z={data:function(){return{generalSettings:{},allowEdit:!1,loadingmsg:"",alertmsg:"",alertmode:""}},mounted:function(){this.loadSettings()},methods:{discardChanges:function(){this.loadSettings(),this.allowEdit=!1},loadSettings:function(){var l=this;l.loadingmsg="Fetching settings...",r.getById(c.APPLICATION_SETTINGS).then(e=>{l.generalSettings=e}).catch(e=>{console.log(e),l.alertmode==d.ERROR,l.alertmsg="Something went wrong"}).finally(l.loadingmsg="")},saveReportSettings:function(l){l&&l.preventDefault();var e=this;e.loadingmsg="Saving...",r.addOrUpdate(this.generalSettings).then(()=>{e.alertmode==d.SUCCESS,e.alertmsg="Changes saved.",e.loadSettings(),e.allowEdit=!1}).catch(s=>{console.log(s),e.alertmode==d.ERROR,e.alertmsg="Something went wrong"}).finally(e.loadingmsg=!1)}},components:{CAlert:g}},Q=Object.assign(z,{__name:"Applicationsettings",setup(l){return(e,s)=>(m(),f(u,null,{default:p(()=>[t("div",S,[b,w,o(t("div",null,[t("div",_,[y(h(e.loadingmsg)+" ",1),E])],512),[[i,e.loadingmsg]]),o(t("div",null,[v(g,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),t("form",null,[t("div",C,[t("input",{type:"text",id:"companyname",class:"form-control",readonly:"",value:e.$appname},null,8,R),A]),t("div",H,[o(t("textarea",{class:"form-control",id:"comaddress","onUpdate:modelValue":s[0]||(s[0]=n=>e.generalSettings.companyAddress=n),readonly:!e.allowEdit},null,8,V),[[a,e.generalSettings.companyAddress]]),T]),t("div",U,[o(t("input",{type:"text",id:"invHeader",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=n=>e.generalSettings.invoiceHeader=n),readonly:!e.allowEdit},null,8,N),[[a,e.generalSettings.invoiceHeader]]),I]),t("div",O,[o(t("input",{type:"text",id:"paymentHeader",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=n=>e.generalSettings.paymentReceiptHeader=n),readonly:!e.allowEdit},null,8,k),[[a,e.generalSettings.paymentReceiptHeader]]),B]),t("div",D,[o(t("input",{type:"text",id:"vat",class:"form-control","onUpdate:modelValue":s[3]||(s[3]=n=>e.generalSettings.vat=n),readonly:!e.allowEdit},null,8,P),[[a,e.generalSettings.vat]]),$]),t("div",j,[o(t("input",{type:"text",id:"trn",class:"form-control","onUpdate:modelValue":s[4]||(s[4]=n=>e.generalSettings.trn=n),readonly:!e.allowEdit},null,8,G),[[a,e.generalSettings.trn]]),L]),t("div",M,[o(t("input",{type:"text",id:"currency",class:"form-control","onUpdate:modelValue":s[5]||(s[5]=n=>e.generalSettings.currency=n),readonly:!e.allowEdit},null,8,F),[[a,e.generalSettings.currency]]),q]),o(t("button",{type:"button",class:"btn btn-secondary",onClick:s[6]||(s[6]=n=>e.allowEdit=!0)},"Edit",512),[[i,!e.allowEdit]]),o(t("button",{type:"button",class:"btn btn-secondary",onClick:s[7]||(s[7]=(...n)=>e.discardChanges&&e.discardChanges(...n))},"Cancel",512),[[i,e.allowEdit]]),o(t("button",{type:"button",style:{"margin-left":"10px"},class:"btn btn-primary",onClick:s[8]||(s[8]=(...n)=>e.saveReportSettings&&e.saveReportSettings(...n))},"Save Changes",512),[[i,e.allowEdit]])])],512),[[i,!e.loadingmsg]])])]),_:1}))}});export{Q as default};
