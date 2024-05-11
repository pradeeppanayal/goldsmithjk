import{o as m,h as f,i as p,j as h,s as g,S as b,p as c,C as n,A as d,b as e,m as r,w as i,e as u,t as w,f as l,g as v,u as S}from"./index-2c09f05d.js";import{_ as D}from"./DynamicTable-69364c84.js";import{D as A}from"./DynamicDialog-8066ab0c.js";import{_ as P}from"./CAlert-6c56d511.js";const C={class:"pricing-header p-3 pb-md-4 mx-auto"},y={class:"row"},E=e("div",{class:"col"},[e("div",{class:"mb-3 row text-start"},[e("div",{class:"col-sm-10"},[e("span",{class:"display-6 fw-normal"},"Products")])])],-1),I={class:"col text-end"},M=e("span",{class:"material-icons"},"add",-1),O={class:"text-center"},j=e("div",{class:"spinner-grow",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),T={class:"d-flex d-flex p-3 border-top"},$={data:function(){return{showDialog:!1,selectedObject:null,dialogTitle:"Product info",items:[],fields:[],allowRowAction:!0,actionMapper:{},alertmode:"",alertmsg:"Saved",loadingmsg:"",searchword:""}},mounted:function(){this.loadFields(),this.loadProducts()},methods:{loadFields:function(){var t=this;g.getById(b.PRODUCT_SETTINGS).then(s=>{t.fields=s.fields??[]})},getActionsItems:function(t){var s=[{identifier:"editClick",materialicon:"edit",title:"Edit"}];return t.status==this.$statusLabelMapper.enabled&&s.push({identifier:"disableItem",materialicon:"visibility_off",title:"Disable"}),t.status==this.$statusLabelMapper.disabled&&s.push({identifier:"enableItem",materialicon:"visibility",title:"Enable"}),s},loadProducts:function(t){t&&t.preventDefault();var s=this;s.loadingmsg="Fetching products...",s.loadProductsSilently()},enableProduct:function(t){this.updateStatus(t,this.$statusLabelMapper.enabled)},disableProduct:function(t){this.updateStatus(t,this.$statusLabelMapper.disabled)},updateStatus:function(t,s){t.status=s,this.performSave(t)},showEditDialog:function(t){this.selectedObject=t,this.showDialog=!0},showAddDialog:function(t){t&&t.preventDefault(),this.selectedObject=null,this.showDialog=!0},loadProductsSilently:function(){var t={},s=this;c.list(s.searchword).then(a=>{_.each(a,function(o){t[o.id]=s.getActionsItems(o)}),s.items=a,s.actionMapper=t}).catch(a=>{console.log(a),n.showAlert(s,"Could not fetch the product info.",d.ERROR)}).finally(()=>{s.loadingmsg=""})},performSave:function(t){t.status=t.status??this.$statusLabelMapper.enabled;var s=this;s.showDialog=!1,n.showAlert(s,"Changes saved.",d.SUCCESS),s.loadProductsSilently()}}},N=Object.assign($,{__name:"Products",setup(t){return(s,a)=>(m(),f(h,null,{default:p(()=>[e("div",C,[e("div",y,[E,e("div",I,[e("button",{class:"btn btn-outline-success",onClick:a[0]||(a[0]=(...o)=>s.showAddDialog&&s.showAddDialog(...o))},[r(" Add"),M])])]),i(e("div",null,[e("div",O,[r(w(s.loadingmsg)+" ",1),j])],512),[[u,s.loadingmsg]]),i(e("div",null,[l(P,{msg:s.alertmsg,mode:s.alertmode},null,8,["msg","mode"]),e("form",T,[i(e("input",{class:"form-control me-2","onUpdate:modelValue":a[1]||(a[1]=o=>s.searchword=o),type:"search",placeholder:"Search","aria-label":"Search"},null,512),[[v,s.searchword]]),e("button",{class:"btn btn-outline-success",type:"submit",onClick:a[2]||(a[2]=(...o)=>s.loadProducts&&s.loadProducts(...o))},"Search")]),l(D,{items:s.items,columns:s.fields,allowaction:s.allowRowAction,actionmapper:s.actionMapper,actionmapperidentifier:"id",onDisableItem:s.disableProduct,onEnableItem:s.enableProduct,onEditClick:s.showEditDialog},null,8,["items","columns","allowaction","actionmapper","onDisableItem","onEnableItem","onEditClick"])],512),[[u,!s.loadingmsg]])]),l(A,{show:s.showDialog,fields:s.fields,title:s.dialogTitle,actualobj:s.selectedObject,onSave:s.performSave,onCancel:a[3]||(a[3]=o=>s.showDialog=!1),dao:S(c)},null,8,["show","fields","title","actualobj","onSave","dao"])]),_:1}))}});export{N as default};
