import{o as d,c,w as n,e as i,b as e,g as y,a as b,F as g,f as r,i as w,j as m,t as u}from"./index-5f94e7fe.js";import{_ as S}from"./DynamicTable-1115036a.js";import{C as p,A as C,r as f}from"./dao-56b0e64b.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as D}from"./CAlert-2de6e069.js";import{A as h}from"./ApplicationConstants-909446ca.js";const k={props:["show","currentrate"],emits:["cancel","save"],data:function(){return{rate:0,lockprice:!1,currentdate:""}},mounted:function(){this.currentdate=p.getTodayAsString()},watch:{currentrate:function(a){this.rate=this.currentrate??0},show:function(){this.rate=this.currentrate??0}},methods:{performClose:function(a){a&&a.preventDefault(),this.$emit("cancel")},performSave:function(a){a&&a.preventDefault(),this.$emit("save",{rate:this.rate})}}},A={class:"modal show",style:{display:"block"}},T={class:"modal-dialog"},$={class:"modal-content"},N={class:"modal-header"},V=e("h5",{class:"modal-title",id:"staticBackdropLabel"},"Today's Rate",-1),B={class:"modal-body"},O={class:"form-floating mb-3"},U=["value"],E=e("label",{for:"date",class:"form-label"},"Date",-1),F={class:"form-floating mb-3"},j=e("label",{for:"rate",class:"form-label"},"Rate",-1),I={class:"modal-footer"},L={key:0,class:"modal-backdrop show"};function M(a,t,s,v,X,l){return d(),c(g,null,[n(e("div",null,[e("div",A,[e("div",T,[e("div",$,[e("div",N,[V,e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:t[0]||(t[0]=(...o)=>l.performClose&&l.performClose(...o))})]),e("div",B,[e("form",null,[e("div",O,[e("input",{type:"text",id:"date",class:"form-control-plaintext",readonly:"",value:a.currentdate},null,8,U),E]),e("div",F,[n(e("input",{type:"number",id:"rate","onUpdate:modelValue":t[1]||(t[1]=o=>a.rate=o),class:"form-control"},null,512),[[y,a.rate]]),j])])]),e("div",I,[e("button",{type:"button",class:"btn btn-secondary",onClick:t[2]||(t[2]=(...o)=>l.performClose&&l.performClose(...o))},"Close"),e("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=(...o)=>l.performSave&&l.performSave(...o))},"Save")])])])])],512),[[i,s.show]]),s.show?(d(),c("div",L)):b("",!0)],64)}const z=R(k,[["render",M]]),H={class:"text-center"},q=e("div",{class:"spinner-grow",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),G={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},J={class:"display-3 fw-normal"},K=e("hr",null,null,-1),P=e("h1",{class:"display-6 fw-normal"},"History",-1),Q=e("hr",null,null,-1),W={data:function(){return{loading:!1,showRateSetDialog:!1,items:[],columns:[{name:"date",show:!0},{name:"rate",show:!0}],todaysRate:"NA",currentDate:null,loadingmsg:"",alertmsg:"",alertmode:""}},mounted:function(){this.loadRates()},methods:{loadRates:function(){var a=this;a.loading=!0,this.loadingmsg="Fetching rates...",f.list().then(t=>{a.items=t,a.loadTodaysIfAvailable()}).catch(t=>{console.log(t),a.alertmsg="Something went wrong",a.alertmode="error"}).finally(()=>a.loading=!1)},closeDialog:function(){this.showRateSetDialog=!1},loadTodaysIfAvailable:function(){this.todaysRate="";var a=p.getTodayAsString(),t=_.find(this.items,function(s){return s.date==a});t&&t.rate&&(this.todaysRate=t.rate)},performSave:function(a){var t=this;t.loading=!0,this.loadingmsg="Saving rate...",f.addOrUpdate(a).then(()=>{this.closeDialog(),t.loadRates(),t.alertmsg="Changes saved.",t.alertmode=h.SUCCESS}).catch(s=>{console.log(s),t.alertmsg="Something went wrong",t.alertmode=h.ERROR}).finally(()=>t.loading=!1)}}},st=Object.assign(W,{__name:"Rates",setup(a){return(t,s)=>(d(),c(g,null,[r(C,null,{default:w(()=>[n(e("div",null,[e("div",H,[m(u(t.loadingmsg)+" ",1),q])],512),[[i,t.loading]]),n(r(D,{msg:t.alertmsg,mode:t.alertmode},null,8,["msg","mode"]),[[i,!t.loading]]),n(e("div",G,[e("h1",J,[m("Today's Rate : "+u(t.todaysRate??"--")+" ",1),e("span",{onClick:s[0]||(s[0]=v=>t.showRateSetDialog=!0),class:"material-icons btn",title:"Set today's rate",style:{"font-size":"3rem"}},"edit")]),K,P,Q,r(S,{items:t.items,columns:t.columns},null,8,["items","columns"])],512),[[i,!t.loading]])]),_:1}),r(z,{show:t.showRateSetDialog,currentrate:t.todaysRate,onCancel:t.closeDialog,onSave:t.performSave},null,8,["show","currentrate","onCancel","onSave"])],64))}});export{st as default};
