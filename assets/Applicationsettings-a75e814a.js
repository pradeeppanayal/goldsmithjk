import{o as d,h as m,i as f,_ as y,s as g,S as p,A as r,b as t,w as a,e as l,l as c,t as v,f as S,a as h,g as i,v as b}from"./index-ab8a4c79.js";import{_ as u}from"./CAlert-098161b8.js";import{_ as w}from"./TwoColumnTable-df93af8a.js";const _={class:"pricing-header p-3 pb-md-4 mx-auto text-start"},C=t("h1",{class:"display-6 fw-normal"},"General Settings",-1),E=t("hr",null,null,-1),H={class:"text-center"},R=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),k={class:"form-floating mb-3"},A=["readonly"],V=t("label",{for:"comaddress",class:"form-label"},"Company Address",-1),N={class:"form-floating mb-3"},T=["readonly"],U=t("label",{for:"invHeader",class:"form-label"},"Invoice Header",-1),I={class:"form-floating mb-3"},O=["readonly"],M=t("label",{for:"paymentHeader",class:"form-label"},"Payment Receipt Header",-1),$={class:"form-floating mb-3"},B=["readonly"],D=t("label",{for:"vat",class:"form-label"},"VAT",-1),P={class:"form-floating mb-3"},G=["readonly"],L=t("label",{for:"trn",class:"form-label"},"TRN",-1),j={class:"form-floating mb-3"},F=["readonly"],Y=t("label",{for:"currency",class:"form-label"},"Currency",-1),q={class:"form-floating mb-3"},z=["readonly"],J=t("option",{value:"yes"},"Yes",-1),K=t("option",{value:"no"},"No",-1),Q=[J,K],W=t("label",{for:"currency",class:"form-label"},"History Mode",-1),X={data:function(){return{generalSettings:{},allowEdit:!1,loadingmsg:"",alertmsg:"",alertmode:"",formattedSettings:[]}},mounted:function(){this.loadSettings()},methods:{discardChanges:function(){this.loadSettings(),this.allowEdit=!1},loadSettings:function(){var n=this;n.loadingmsg="Fetching settings...",g.getById(p.APPLICATION_SETTINGS).then(e=>{n.generalSettings=e,n.formattedSettings=n.formatSettings(e)}).catch(e=>{console.log(e),n.alertmode==r.ERROR,n.alertmsg="Something went wrong"}).finally(n.loadingmsg="")},formatSettings:function(n){return[{key:"Company Name",value:this.$appname},{key:"Company Address",value:n.companyAddress},{key:"Invoice Header",value:n.invoiceHeader},{key:"Payment Receipt Header",value:n.paymentReceiptHeader},{key:"VAT",value:n.vat},{key:"TRN",value:n.trn},{key:"Currency",value:n.currency},{key:"History Mode",value:n.historymode}]},saveReportSettings:function(n){n&&n.preventDefault();var e=this;e.loadingmsg="Saving...",g.addOrUpdate(this.generalSettings).then(()=>{e.alertmode==r.SUCCESS,e.alertmsg="Changes saved.",e.loadSettings(),e.allowEdit=!1}).catch(o=>{console.log(o),e.alertmode==r.ERROR,e.alertmsg="Something went wrong"}).finally(e.loadingmsg=!1)}},components:{CAlert:u}},te=Object.assign(X,{__name:"Applicationsettings",setup(n){return(e,o)=>(d(),m(y,null,{default:f(()=>[t("div",_,[C,E,a(t("div",null,[t("div",H,[c(v(e.loadingmsg)+" ",1),R])],512),[[l,e.loadingmsg]]),a(t("div",null,[S(u,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),a(t("div",null,[e.formattedSettings?(d(),m(w,{key:0,items:e.formattedSettings},null,8,["items"])):h("",!0),t("button",{type:"button",class:"btn btn-secondary",onClick:o[0]||(o[0]=s=>e.allowEdit=!0)},"Edit")],512),[[l,!e.allowEdit]]),a(t("form",null,[t("div",k,[a(t("textarea",{class:"form-control",id:"comaddress","onUpdate:modelValue":o[1]||(o[1]=s=>e.generalSettings.companyAddress=s),readonly:!e.allowEdit},null,8,A),[[i,e.generalSettings.companyAddress]]),V]),t("div",N,[a(t("input",{type:"text",id:"invHeader",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=s=>e.generalSettings.invoiceHeader=s),readonly:!e.allowEdit},null,8,T),[[i,e.generalSettings.invoiceHeader]]),U]),t("div",I,[a(t("input",{type:"text",id:"paymentHeader",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=s=>e.generalSettings.paymentReceiptHeader=s),readonly:!e.allowEdit},null,8,O),[[i,e.generalSettings.paymentReceiptHeader]]),M]),t("div",$,[a(t("input",{type:"text",id:"vat",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=s=>e.generalSettings.vat=s),readonly:!e.allowEdit},null,8,B),[[i,e.generalSettings.vat]]),D]),t("div",P,[a(t("input",{type:"text",id:"trn",class:"form-control","onUpdate:modelValue":o[5]||(o[5]=s=>e.generalSettings.trn=s),readonly:!e.allowEdit},null,8,G),[[i,e.generalSettings.trn]]),L]),t("div",j,[a(t("input",{type:"text",id:"currency",class:"form-control","onUpdate:modelValue":o[6]||(o[6]=s=>e.generalSettings.currency=s),readonly:!e.allowEdit},null,8,F),[[i,e.generalSettings.currency]]),Y]),t("div",q,[a(t("select",{class:"form-control","onUpdate:modelValue":o[7]||(o[7]=s=>e.generalSettings.historymode=s),readonly:!e.allowEdit},Q,8,z),[[b,e.generalSettings.historymode]]),W]),a(t("button",{type:"button",class:"btn btn-secondary",onClick:o[8]||(o[8]=(...s)=>e.discardChanges&&e.discardChanges(...s))},"Cancel",512),[[l,e.allowEdit]]),a(t("button",{type:"button",style:{"margin-left":"10px"},class:"btn btn-primary",onClick:o[9]||(o[9]=(...s)=>e.saveReportSettings&&e.saveReportSettings(...s))},"Save Changes",512),[[l,e.allowEdit]])],512),[[l,e.allowEdit]])],512),[[l,!e.loadingmsg]])])]),_:1}))}});export{te as default};
