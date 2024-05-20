import{o as f,h as m,i as p,_ as h,s as g,S as b,p as u,C as n,A as d,b as e,l as r,w as i,e as c,t as w,f as l,g as v,u as S}from"./index-9ae72514.js";import{_ as D}from"./DynamicTable-438c85b5.js";import{D as P}from"./DynamicDialog-4dba98ea.js";import{_ as A}from"./CAlert-ab377059.js";import"./_plugin-vue_export-helper-c27b6911.js";const C={class:"pricing-header p-3 pb-md-4 mx-auto"},y={class:"row"},E=e("div",{class:"col"},[e("div",{class:"mb-3 row text-start"},[e("div",{class:"col-sm-10"},[e("span",{class:"display-6 fw-normal"},"Products")])])],-1),I={class:"col text-end"},M=e("span",{class:"material-icons"},"add",-1),O={class:"text-center"},$=e("div",{class:"spinner-grow",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),j={class:"d-flex d-flex p-3 border-top"},k={data:function(){return{showDialog:!1,selectedObject:null,dialogTitle:"Product info",items:[],fields:[],allowRowAction:!0,actionMapper:{},alertmode:"",alertmsg:"Saved",loadingmsg:"",searchword:""}},mounted:function(){this.loadFields(),this.loadProducts()},methods:{loadFields:function(){var t=this;g.getById(b.PRODUCT_SETTINGS).then(s=>{t.fields=s.fields??[]})},getActionsItems:function(t){var s=[{identifier:"editClick",materialicon:"edit",title:"Edit"}];return t.status==this.$statusLabelMapper.enabled&&s.push({identifier:"disableItem",materialicon:"visibility_off",title:"Disable"}),t.status==this.$statusLabelMapper.disabled&&s.push({identifier:"enableItem",materialicon:"visibility",title:"Enable"}),s},loadProducts:function(t){t&&t.preventDefault();var s=this;s.loadingmsg="Fetching products...",s.loadProductsSilently()},enableProduct:function(t){this.updateStatus(t,this.$statusLabelMapper.enabled)},disableProduct:function(t){this.updateStatus(t,this.$statusLabelMapper.disabled)},updateStatus:function(t,s){t.status=s,this.performSave(t)},showEditDialog:function(t){this.selectedObject=t,this.showDialog=!0},showAddDialog:function(t){t&&t.preventDefault(),this.selectedObject=null,this.showDialog=!0},loadProductsSilently:function(){var t={},s=this;u.list(s.searchword).then(a=>{_.each(a,function(o){t[o.id]=s.getActionsItems(o)}),s.items=a,s.actionMapper=t}).catch(a=>{console.log(a),n.showAlert(s,"Could not fetch the product info.",d.ERROR)}).finally(()=>{s.loadingmsg=""})},performSave:function(t){t.status=t.status??this.$statusLabelMapper.enabled;var s=this;s.showDialog=!1,n.showAlert(s,"Changes saved.",d.SUCCESS),s.loadProductsSilently()}}},U=Object.assign(k,{__name:"Products",setup(t){return(s,a)=>(f(),m(h,null,{default:p(()=>[e("div",C,[e("div",y,[E,e("div",I,[e("button",{class:"btn btn-outline-success",onClick:a[0]||(a[0]=(...o)=>s.showAddDialog&&s.showAddDialog(...o))},[r(" Add"),M])])]),i(e("div",null,[e("div",O,[r(w(s.loadingmsg)+" ",1),$])],512),[[c,s.loadingmsg]]),i(e("div",null,[l(A,{msg:s.alertmsg,mode:s.alertmode},null,8,["msg","mode"]),e("form",j,[i(e("input",{class:"form-control me-2","onUpdate:modelValue":a[1]||(a[1]=o=>s.searchword=o),type:"search",placeholder:"Search","aria-label":"Search"},null,512),[[v,s.searchword]]),e("button",{class:"btn btn-outline-success",type:"submit",onClick:a[2]||(a[2]=(...o)=>s.loadProducts&&s.loadProducts(...o))},"Search")]),l(D,{items:s.items,columns:s.fields,allowaction:s.allowRowAction,actionmapper:s.actionMapper,actionmapperidentifier:"id",onDisableItem:s.disableProduct,onEnableItem:s.enableProduct,onEditClick:s.showEditDialog},null,8,["items","columns","allowaction","actionmapper","onDisableItem","onEnableItem","onEditClick"])],512),[[c,!s.loadingmsg]])]),l(P,{show:s.showDialog,fields:s.fields,title:s.dialogTitle,actualobj:s.selectedObject,onSave:s.performSave,onCancel:a[3]||(a[3]=o=>s.showDialog=!1),dao:S(u)},null,8,["show","fields","title","actualobj","onSave","dao"])]),_:1}))}});export{U as default};
