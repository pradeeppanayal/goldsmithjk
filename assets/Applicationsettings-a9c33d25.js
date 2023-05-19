import{i as m,o as f,h as p,f as u,A as c,a as t,w as l,v as i,d as y,t as h,e as v,g as a}from"./index-a9977b16.js";import{s as d}from"./dao-0a59864c.js";import{S,A as r}from"./ApplicationConstants-909446ca.js";const b={class:"pricing-header p-3 pb-md-4 mx-auto text-start"},w=t("h1",{class:"display-6 fw-normal"},"General Settings",-1),C=t("hr",null,null,-1),E={class:"text-center"},_=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),A={class:"form-floating mb-3"},R=["value"],H=t("label",{for:"companyname",class:"form-label"},"Company Name",-1),V={class:"form-floating mb-3"},T=["readonly"],U=t("label",{for:"comaddress",class:"form-label"},"Company Address",-1),N={class:"form-floating mb-3"},I=["readonly"],O=t("label",{for:"invHeader",class:"form-label"},"Invoice Header",-1),k={class:"form-floating mb-3"},B=["readonly"],D=t("label",{for:"paymentHeader",class:"form-label"},"Payment Receipt Header",-1),P={class:"form-floating mb-3"},G=["readonly"],L=t("label",{for:"vat",class:"form-label"},"VAT",-1),M={class:"form-floating mb-3"},$=["readonly"],j=t("label",{for:"trn",class:"form-label"},"TRN",-1),F={class:"form-floating mb-3"},q=["readonly"],z=t("label",{for:"currency",class:"form-label"},"Currency",-1),J={data:function(){return{generalSettings:{},allowEdit:!1,loading:!1,loadingmsg:"",alertmsg:"",alertmode:""}},mounted:function(){this.loadSettings()},methods:{discardChanges:function(){this.loadSettings(),this.allowEdit=!1},loadSettings:function(){var s=this;s.loading=!0,s.loadingmsg="Fetching settings...",d.getById(S.APPLICATION_SETTINGS).then(e=>{s.generalSettings=e}).catch(e=>{console.log(e),s.alertmode==r.ERROR,s.alertmsg="Something went wrong"}).finally(s.loading=!1)},saveReportSettings:function(s){s&&s.preventDefault();var e=this;e.loading=!0,d.addOrUpdate(this.generalSettings).then(()=>{e.alertmode==r.SUCCESS,e.alertmsg="Changes saved.",e.loadSettings(),e.allowEdit=!1}).catch(o=>{console.log(o),e.alertmode==r.ERROR,e.alertmsg="Something went wrong"}).finally(e.loading=!1)}}},X=Object.assign(J,{__name:"Applicationsettings",setup(s){return(e,o)=>{const g=m("CAlert");return f(),p(c,null,{default:u(()=>[t("div",b,[w,C,l(t("div",null,[t("div",E,[y(h(e.loadingmsg)+" ",1),_])],512),[[i,e.loading]]),l(v(g,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),[[i,!e.loading]]),t("form",null,[t("div",A,[t("input",{type:"text",id:"companyname",class:"form-control",readonly:"",value:e.$appname},null,8,R),H]),t("div",V,[l(t("textarea",{class:"form-control",id:"comaddress","onUpdate:modelValue":o[0]||(o[0]=n=>e.generalSettings.companyAddress=n),readonly:!e.allowEdit},null,8,T),[[a,e.generalSettings.companyAddress]]),U]),t("div",N,[l(t("input",{type:"text",id:"invHeader",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=n=>e.generalSettings.invoiceHeader=n),readonly:!e.allowEdit},null,8,I),[[a,e.generalSettings.invoiceHeader]]),O]),t("div",k,[l(t("input",{type:"text",id:"paymentHeader",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=n=>e.generalSettings.paymentReceiptHeader=n),readonly:!e.allowEdit},null,8,B),[[a,e.generalSettings.paymentReceiptHeader]]),D]),t("div",P,[l(t("input",{type:"text",id:"vat",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=n=>e.generalSettings.vat=n),readonly:!e.allowEdit},null,8,G),[[a,e.generalSettings.vat]]),L]),t("div",M,[l(t("input",{type:"text",id:"trn",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=n=>e.generalSettings.trn=n),readonly:!e.allowEdit},null,8,$),[[a,e.generalSettings.trn]]),j]),t("div",F,[l(t("input",{type:"text",id:"currency",class:"form-control","onUpdate:modelValue":o[5]||(o[5]=n=>e.generalSettings.currency=n),readonly:!e.allowEdit},null,8,q),[[a,e.generalSettings.currency]]),z]),l(t("button",{type:"button",class:"btn btn-secondary",onClick:o[6]||(o[6]=n=>e.allowEdit=!0)},"Edit",512),[[i,!e.allowEdit]]),l(t("button",{type:"button",class:"btn btn-secondary",onClick:o[7]||(o[7]=(...n)=>e.discardChanges&&e.discardChanges(...n))},"Cancel",512),[[i,e.allowEdit]]),l(t("button",{type:"button",style:{"margin-left":"10px"},class:"btn btn-primary",onClick:o[8]||(o[8]=(...n)=>e.saveReportSettings&&e.saveReportSettings(...n))},"Save Changes",512),[[i,e.allowEdit]])])])]),_:1})}}});export{X as default};
