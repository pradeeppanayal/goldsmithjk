import{_ as l,o as r,c as d,a as s,w as n,g as i}from"./index-a9977b16.js";const m="/goldsmithjk/assets/logo-277e0e97.svg",p={data:function(){return{password:"",email:""}},methods:{performLogin:function(o){o&&o.preventDefault(),!(!this.email||!this.password)&&(this.$currentuser.email=this.email,this.$router.push("/"))}}},f={class:"form-signin w-100 m-auto"},u=s("img",{class:"mb-4",src:m,alt:"",width:"72",height:"57"},null,-1),c=s("h1",{class:"h3 mb-3 fw-normal"},"Please sign in",-1),g={class:"form-floating"},h=s("label",{for:"floatingInput"},"Email address",-1),w={class:"form-floating"},_=s("label",{for:"floatingPassword"},"Password",-1);function b(o,t,v,P,k,a){return r(),d("main",f,[s("form",null,[u,c,s("div",g,[n(s("input",{type:"email",class:"form-control",id:"floatingInput","onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e),placeholder:"name@example.com"},null,512),[[i,o.email]]),h]),s("div",w,[n(s("input",{type:"password",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e),id:"floatingPassword",placeholder:"Password"},null,512),[[i,o.password]]),_]),s("button",{class:"w-100 btn btn-lg btn-primary",type:"submit",onClick:t[2]||(t[2]=(...e)=>a.performLogin&&a.performLogin(...e))},"Sign in")])])}const L=l(p,[["render",b]]);export{L as default};
