import{_ as f,o as s,c as a,w as i,e as c,b as o,t as m,a as h,F as u,r as p,g as v,v as b}from"./index-85703930.js";const _={props:["show","fields","actualobj","title"],emits:["cancel","save"],data:function(){return{item:{},errMsg:""}},watch:{show:function(e){this.item={...this.actualobj}},actualobj:function(e){if(!e){this.item={};return}this.item={...this.actualobj}}},methods:{performClose:function(e){e&&e.preventDefault(),this.$emit("cancel")},validate:function(){var e=this;for(var n of this.fields)if(n.required&&!this.item[n.name])return this.errMsg='The field "'+n.name+'" is required',setTimeout(()=>{e.errMsg=""},e.$alertShowDuration),!1;return!0},performSave:function(e){e&&e.preventDefault(),this.errMsg="",this.validate()&&this.$emit("save",this.item)}}},k={class:"modal show",style:{display:"block"}},g={class:"modal-dialog"},w={class:"modal-content"},C={class:"modal-header"},V={class:"modal-title",id:"staticBackdropLabel"},D={key:0,class:"alert alert-danger alert-dismissible fade show",role:"alert"},M={class:"modal-body"},S=["id","onUpdate:modelValue"],U=["onUpdate:modelValue","id"],j=["value"],B=["onUpdate:modelValue","id"],q=o("option",{value:"yes"},"Yes",-1),N=o("option",{value:"yes"},"No",-1),T=[q,N],F=["onUpdate:modelValue","id"],L=["for"],O={class:"modal-footer"},E={key:0,class:"modal-backdrop show"};function Y(e,n,d,z,A,l){return s(),a(u,null,[i(o("div",null,[o("div",k,[o("form",null,[o("div",g,[o("div",w,[o("div",C,[o("h5",V,m(d.title),1),o("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n[0]||(n[0]=(...t)=>l.performClose&&l.performClose(...t))})]),e.errMsg?(s(),a("div",D,m(e.errMsg),1)):h("",!0),o("div",M,[(s(!0),a(u,null,p(d.fields,(t,y)=>i((s(),a("div",{class:"form-floating mb-3",key:y},[t.type=="number"?i((s(),a("input",{key:0,type:"number",id:e.item[t.name],"onUpdate:modelValue":r=>e.item[t.name]=r,class:"form-control"},null,8,S)),[[v,e.item[t.name]]]):t.type=="option"?i((s(),a("select",{key:1,"onUpdate:modelValue":r=>e.item[t.name]=r,id:e.item[t.name],class:"form-control"},[(s(!0),a(u,null,p(t.options,r=>(s(),a("option",{value:r.value},m(r.name),9,j))),256))],8,U)),[[b,e.item[t.name]]]):t.type=="yesno"?i((s(),a("select",{key:2,"onUpdate:modelValue":r=>e.item[t.name]=r,id:e.item[t.name],class:"form-control"},T,8,B)),[[b,e.item[t.name]]]):i((s(),a("input",{key:3,type:"text","onUpdate:modelValue":r=>e.item[t.name]=r,id:e.item[t.name],class:"form-control"},null,8,F)),[[v,e.item[t.name]]]),o("label",{for:e.item[t.name],class:"form-label"},m(t.name)+" "+m(t.required?"":"(Optional)"),9,L)])),[[c,!t.readOnly]])),128))]),o("div",O,[o("button",{type:"button",class:"btn btn-secondary",onClick:n[1]||(n[1]=(...t)=>l.performClose&&l.performClose(...t))},"Close"),o("button",{type:"submit",class:"btn btn-primary",onClick:n[2]||(n[2]=(...t)=>l.performSave&&l.performSave(...t))},"Save")])])])])])],512),[[c,d.show]]),d.show?(s(),a("div",E)):h("",!0)],64)}const H=f(_,[["render",Y]]);export{H as D};
