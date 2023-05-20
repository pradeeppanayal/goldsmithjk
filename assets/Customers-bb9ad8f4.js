import{o as m,h as c,i as f,A as h,b as t,j as n,w as i,e as d,t as p,f as l,g,u as b}from"./index-c1948af4.js";import{_ as v}from"./DynamicTable-4f5ba062.js";import{D as w}from"./DynamicDialog-8512195a.js";import{s as C,S,c as u,A as r,C as D,_ as y}from"./dao-4ad1f386.js";const A={class:"pricing-header p-3 pb-md-4 mx-auto"},E={class:"row"},M=t("div",{class:"col"},[t("div",{class:"mb-3 row text-start"},[t("div",{class:"col-sm-10"},[t("span",{class:"display-6 fw-normal"},"Customers")])])],-1),I={class:"col text-end"},O=t("span",{class:"material-icons"},"add",-1),j={class:"text-center"},T=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),$={class:"d-flex d-flex p-3 border-top"},k={data:function(){return{showDialog:!1,selectedObject:null,dialogTitle:"Customer info",items:[],fields:[],allowRowAction:!0,actionMapper:{},alertmode:"",alertmsg:"",loadingmsg:"",searchword:""}},mounted:function(){this.loadFields(),this.loadCustomers()},methods:{loadFields:function(){var s=this;C.getById(S.CUSTOMER_SETTINGS).then(e=>{s.fields=e.fields??[]})},getActionsItems:function(s){var e=[{identifier:"editClick",materialicon:"edit",title:"Edit"}];return s.status==this.$statusLabelMapper.enabled&&e.push({identifier:"disableItem",materialicon:"visibility_off",title:"Disable"}),s.status==this.$statusLabelMapper.disabled&&e.push({identifier:"enableItem",materialicon:"visibility",title:"Enable"}),e},enableCustomer:function(s){this.changeStatus(s,this.$statusLabelMapper.enabled)},disableCustomer:function(s){this.changeStatus(s,this.$statusLabelMapper.disabled)},changeStatus:function(s,e){s.status=e,this.performSave(s)},loadCustomers:function(s){s&&s.preventDefault();var e=this;e.loadingmsg="Fetching customer info...",e.loadCustomersSilently()},showAddDialog:function(s){s&&s.preventDefault(),this.selectedObject=null,this.showDialog=!0},loadCustomersSilently:function(){var s=this,e={};u.list(s.searchword).then(a=>{_.each(a,function(o){e[o.id]=s.getActionsItems(o)}),s.items=a,s.actionMapper=e}).catch(a=>{console.log(a),s.alertmode=r.ERROR,s.alertmsg="Could not load the customers"}).finally(()=>{s.loadingmsg=""})},performSave:function(s){s.status=s.status??this.$statusLabelMapper.enabled;var e=this;e.showDialog=!1,D.showAlert(e,"Changes saved.",r.SUCCESS),e.loadCustomersSilently()},editEntry:function(s){this.selectedObject=s,this.showDialog=!0}}},U=Object.assign(k,{__name:"Customers",setup(s){return(e,a)=>(m(),c(h,null,{default:f(()=>[t("div",A,[t("div",E,[M,t("div",I,[t("button",{class:"btn btn-outline-success",onClick:a[0]||(a[0]=(...o)=>e.showAddDialog&&e.showAddDialog(...o))},[n(" Add"),O])])]),i(t("div",null,[t("div",j,[n(p(e.loadingmsg)+" ",1),T])],512),[[d,e.loadingmsg]]),i(t("div",null,[l(y,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),t("form",$,[i(t("input",{class:"form-control me-2",type:"search",placeholder:"Search","onUpdate:modelValue":a[1]||(a[1]=o=>e.searchword=o),"aria-label":"Search"},null,512),[[g,e.searchword]]),t("button",{class:"btn btn-outline-success",type:"submit",onClick:a[2]||(a[2]=(...o)=>e.loadCustomers&&e.loadCustomers(...o))},"Search")]),l(v,{items:e.items,columns:e.fields,allowaction:e.allowRowAction,actionmapper:e.actionMapper,actionmapperidentifier:"id",onEditClick:e.editEntry,onDisableItem:e.disableCustomer,onEnableItem:e.enableCustomer},null,8,["items","columns","allowaction","actionmapper","onEditClick","onDisableItem","onEnableItem"])],512),[[d,!e.loadingmsg]])]),l(w,{show:e.showDialog,fields:e.fields,title:e.dialogTitle,actualobj:e.selectedObject,onSave:e.performSave,onCancel:a[3]||(a[3]=o=>e.showDialog=!1),dao:b(u)},null,8,["show","fields","title","actualobj","onSave","dao"])]),_:1}))}});export{U as default};
