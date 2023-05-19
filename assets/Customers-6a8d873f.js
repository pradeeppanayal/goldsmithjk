import{o as c,h as f,i as h,A as p,b as t,j as r,w as i,e as m,t as g,f as l,g as b}from"./index-8a337015.js";import{_ as v}from"./DynamicTable-f7ec0263.js";import{D as w}from"./DynamicDialog-1aa5fbce.js";import{s as C,c as u}from"./dao-0a59864c.js";import{S,A as n}from"./ApplicationConstants-909446ca.js";import{_ as D}from"./CAlert-8d6317ac.js";const A={class:"pricing-header p-3 pb-md-4 mx-auto"},y={class:"row"},E=t("div",{class:"col"},[t("div",{class:"mb-3 row text-start"},[t("div",{class:"col-sm-10"},[t("span",{class:"display-6 fw-normal"},"Customers")])])],-1),M={class:"col text-end"},I=t("span",{class:"material-icons"},"add",-1),O={class:"text-center"},R=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),j={class:"d-flex d-flex p-3 border-top"},T={data:function(){return{showDialog:!1,selectedObject:null,dialogTitle:"Customer info",items:[],fields:[],allowRowAction:!0,actionMapper:{},alertmode:"",alertmsg:"",loadingmsg:"",searchword:""}},mounted:function(){this.loadFields(),this.loadCustomers()},methods:{loadFields:function(){var s=this;C.getById(S.CUSTOMER_SETTINGS).then(e=>{s.fields=e.fields??[]})},getActionsItems:function(s){var e=[{identifier:"editClick",materialicon:"edit",title:"Edit"}];return s.status==this.$statusLabelMapper.enabled&&e.push({identifier:"disableItem",materialicon:"visibility_off",title:"Disable"}),s.status==this.$statusLabelMapper.disabled&&e.push({identifier:"enableItem",materialicon:"visibility",title:"Enable"}),e},enableCustomer:function(s){this.changeStatus(s,this.$statusLabelMapper.enabled)},disableCustomer:function(s){this.changeStatus(s,this.$statusLabelMapper.disabled)},changeStatus:function(s,e){s.status=e,this.performSave(s)},loadCustomers:function(s){s&&s.preventDefault();var e=this,a={};e.loadingmsg="Fetching customer info...",u.list(e.searchword).then(o=>{_.each(o,function(d){a[d.id]=e.getActionsItems(d)}),e.items=o,e.actionMapper=a}).catch(o=>{console.log(o),e.alertmode=n.ERROR,e.alertmsg="Could not load the customers"}).finally(()=>{e.loadingmsg=""})},showAddDialog:function(s){s&&s.preventDefault(),this.selectedObject=null,this.showDialog=!0},performSave:function(s){s.status=s.status??this.$statusLabelMapper.enabled;var e=this;e.showDialog=!1,e.loadingmsg="Saving customer info...",u.addOrUpdate(s).then(()=>{e.alertmode=n.SUCCESS,e.alertmsg="Changes saved",e.loadCustomers()}).catch(a=>{console.log(a),e.alertmode=n.ERROR,e.alertmsg="Could save the customer info"}).finally(()=>{e.loadingmsg=""})},editEntry:function(s){this.selectedObject=s,this.showDialog=!0}}},V=Object.assign(T,{__name:"Customers",setup(s){return(e,a)=>(c(),f(p,null,{default:h(()=>[t("div",A,[t("div",y,[E,t("div",M,[t("button",{class:"btn btn-outline-success",onClick:a[0]||(a[0]=(...o)=>e.showAddDialog&&e.showAddDialog(...o))},[r(" Add"),I])])]),i(t("div",null,[t("div",O,[r(g(e.loadingmsg)+" ",1),R])],512),[[m,e.loadingmsg]]),i(t("div",null,[l(D,{msg:e.alertmsg,mode:e.alertmode},null,8,["msg","mode"]),t("form",j,[i(t("input",{class:"form-control me-2",type:"search",placeholder:"Search","onUpdate:modelValue":a[1]||(a[1]=o=>e.searchword=o),"aria-label":"Search"},null,512),[[b,e.searchword]]),t("button",{class:"btn btn-outline-success",type:"submit",onClick:a[2]||(a[2]=(...o)=>e.loadCustomers&&e.loadCustomers(...o))},"Search")]),l(v,{items:e.items,columns:e.fields,allowaction:e.allowRowAction,actionmapper:e.actionMapper,actionmapperidentifier:"id",onEditClick:e.editEntry,onDisableItem:e.disableCustomer,onEnableItem:e.enableCustomer},null,8,["items","columns","allowaction","actionmapper","onEditClick","onDisableItem","onEnableItem"])],512),[[m,!e.loadingmsg]])]),l(w,{show:e.showDialog,fields:e.fields,title:e.dialogTitle,actualobj:e.selectedObject,onSave:e.performSave,onCancel:a[3]||(a[3]=o=>e.showDialog=!1)},null,8,["show","fields","title","actualobj","onSave"])]),_:1}))}});export{V as default};
