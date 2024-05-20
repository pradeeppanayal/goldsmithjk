import{o as c,h,i as f,j as p,s as g,S as b,x as C,n as m,A as d,C as v,b as t,m as r,w as l,e as u,t as w,f as n,g as S,u as D}from"./index-00e45d0b.js";import{_ as A}from"./DynamicTable-62835890.js";import{D as y}from"./DynamicDialog-233dd02e.js";import{_ as M}from"./CAlert-b221f23b.js";const E={class:"pricing-header p-3 pb-md-4 mx-auto"},I={class:"row"},L=t("div",{class:"col"},[t("div",{class:"mb-3 row text-start"},[t("div",{class:"col-sm-10"},[t("span",{class:"display-6 fw-normal"},"Customers")])])],-1),O={class:"col text-end"},T=t("span",{class:"material-icons"},"add",-1),B={class:"text-center"},$=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),j={class:"d-flex d-flex p-3 border-top"},N={data:function(){return{showDialog:!1,selectedObject:null,dialogTitle:"Customer info",items:[],fields:[],allowRowAction:!0,actionMapper:{},alertmode:"",alertmsg:"",loadingmsg:"",searchword:""}},mounted:function(){this.loadFields(),this.loadCustomers()},methods:{loadFields:function(){var s=this;g.getById(b.CUSTOMER_SETTINGS).then(e=>{s.fields=e.fields??[]})},getActionsItems:function(s){var e=[{identifier:"editClick",materialicon:"edit",title:"Edit"}];return s.status==this.$statusLabelMapper.enabled&&e.push({identifier:"disableItem",materialicon:"visibility_off",title:"Disable"}),s.status==this.$statusLabelMapper.disabled&&e.push({identifier:"enableItem",materialicon:"visibility",title:"Enable"}),e.push({identifier:"timeLine",materialicon:"timeline",title:"See details"}),e},enableCustomer:function(s){this.changeStatus(s,this.$statusLabelMapper.enabled)},disableCustomer:function(s){this.changeStatus(s,this.$statusLabelMapper.disabled)},changeStatus:function(s,e){s.status=e,this.performSave(s)},showTimeLine:function(s){this.$router.push("/customers/"+s.id)},loadCustomers:function(s){s&&s.preventDefault();var e=this;e.loadingmsg="Fetching customer info...",e.loadCustomersSilently()},showAddDialog:function(s){s&&s.preventDefault(),this.selectedObject=null,this.showDialog=!0},loadCustomersSilently:function(){var s=this,e={};const o=C.getCurrentUser().email==this.$adminMailId;m.list(s.searchword,!1,o).then(i=>{_.each(i,function(a){e[a.id]=s.getActionsItems(a),a["Cash Balance"]=(a.CashCredit??0)-(a.CashDebit??0),a["Gold Balance"]=(a.GoldCredit??0)-(a.GoldDebit??0),a["Cash Balance"]=Math.round((a["Cash Balance"]+Number.EPSILON)*100)/100,a["Gold Balance"]=Math.round((a["Gold Balance"]+Number.EPSILON)*100)/100}),s.items=i,s.actionMapper=e}).catch(i=>{console.log(i),s.alertmode=d.ERROR,s.alertmsg="Could not load the customers"}).finally(()=>{s.loadingmsg=""})},performSave:function(s){s.status=s.status??this.$statusLabelMapper.enabled;var e=this;e.showDialog=!1,v.showAlert(e,"Changes saved.",d.SUCCESS),e.loadCustomersSilently()},editEntry:function(s){this.selectedObject=s,this.showDialog=!0}}},V=Object.assign(N,{__name:"Customers",setup(s){return(e,o)=>(c(),h(p,null,{default:f(()=>[t("div",E,[t("div",I,[L,t("div",O,[t("button",{class:"btn btn-outline-success",onClick:o[0]||(o[0]=(...i)=>e.showAddDialog&&e.showAddDialog(...i))},[r(" Add"),T])])]),l(t("div",null,[t("div",B,[r(w(e.loadingmsg)+" ",1),$])],512),[[u,e.loadingmsg]]),l(t("div",null,[n(M,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),t("form",j,[l(t("input",{class:"form-control me-2",type:"search",placeholder:"Search","onUpdate:modelValue":o[1]||(o[1]=i=>e.searchword=i),"aria-label":"Search"},null,512),[[S,e.searchword]]),t("button",{class:"btn btn-outline-success",type:"submit",onClick:o[2]||(o[2]=(...i)=>e.loadCustomers&&e.loadCustomers(...i))},"Search")]),n(A,{items:e.items,columns:e.fields,allowaction:e.allowRowAction,actionmapper:e.actionMapper,actionmapperidentifier:"id",onEditClick:e.editEntry,onDisableItem:e.disableCustomer,onEnableItem:e.enableCustomer,onTimeLine:e.showTimeLine},null,8,["items","columns","allowaction","actionmapper","onEditClick","onDisableItem","onEnableItem","onTimeLine"])],512),[[u,!e.loadingmsg]])]),n(y,{show:e.showDialog,fields:e.fields,title:e.dialogTitle,actualobj:e.selectedObject,onSave:e.performSave,onCancel:o[3]||(o[3]=i=>e.showDialog=!1),dao:D(m)},null,8,["show","fields","title","actualobj","onSave","dao"])]),_:1}))}});export{V as default};
