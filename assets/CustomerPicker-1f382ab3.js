import{c as i}from"./dao-0a59864c.js";import{_ as c,o as r,c as n,h as d}from"./index-8a337015.js";const l={props:["selected","readonly","items","placeholder"],emits:["selected"],data:function(){return{ready:!1,ref_id:"sel2"}},mounted:function(){},watch:{items:function(){var e=this;e.items&&($(this.$refs[this.ref_id]).select2({placeholder:{id:"",text:e.placeholder??"Select an item"},data:e.items}),$(this.$refs[this.ref_id]).on("select2:select",function(t){e.$emit("selected",t.params.data.id)}),$(this.$refs[this.ref_id]).val(this.selected),$(this.$refs[this.ref_id]).trigger("change"),this.ready=!0)},selected:function(){this.ready&&($(this.$refs[this.ref_id]).val(this.selected),$(this.$refs[this.ref_id]).trigger("change"))}}},o=["disabled"];function a(e,t,s,h,u,p){return r(),n("select",{ref:e.ref_id,class:"form-control",disabled:s.readonly},null,8,o)}const f=c(l,[["render",a]]),m={props:["seleceted"],emits:["selected"],data:function(){return{customers:[],items:[],placeholder:"Select a customer"}},mounted:function(){this.loadCustomers()},methods:{loadCustomers:function(){var e=this;i.list().then(t=>{e.customers=t,e.items=_.map(t,function(s){return{id:s.id,text:s.Name}})})},itemSelected:function(e){var t=_.find(this.customers,function(s){return s.id==e});this.$emit("selected",t)}}},k=Object.assign(m,{__name:"CustomerPicker",setup(e){return(t,s)=>(r(),d(f,{ref_id:"customer",items:t.items,selected:e.seleceted,onSelected:t.itemSelected,placeholder:t.placeholder},null,8,["items","selected","onSelected","placeholder"]))}});export{k as _};
