import{_ as p}from"./DynamicTable-fbe5af17.js";import{_ as m,o,c as l,b as s,y as r,F as h,r as f,t as g,h as b,i as w,j as _,z as u,C as v,A as D,m as S,f as i}from"./index-1fb12b34.js";import{D as y}from"./DynamicDialog-ca741b45.js";import{_ as d}from"./CAlert-d3554d48.js";const N={props:["total","perpagerecords","currentpage"],data:function(){return{pageNumbers:[]}},mounted:function(){this.populatePageNumbers()},watch:{total:function(e){this.populatePageNumbers()},perpagerecords:function(e){this.populatePageNumbers()},currentpage:function(e){this.populatePageNumbers()}},methods:{populatePageNumbers:function(){if(this.pageNumbers=[],!(!this.total||!this.perpagerecords))for(var e=0;e<parseInt(this.total)/parseInt(this.perpagerecords);e++)this.pageNumbers.push(e+1)}}},$={"aria-label":"..."},U={class:"pagination justify-content-end"},A=s("span",{class:"page-link"},[s("span",{"aria-hidden":"true"},"«")],-1),C=[A],E={class:"page-link",href:"#"},j=s("a",{class:"page-link",href:"#"},[s("span",{"aria-hidden":"true"},"»")],-1),k=[j];function I(e,t,a,n,q,z){return o(),l("nav",$,[s("ul",U,[s("li",{class:r(["page-item",a.currentpage==1?"disabled":""])},C,2),(o(!0),l(h,null,f(e.pageNumbers,c=>(o(),l("li",{class:r(["page-item",c==a.currentpage?"active":""])},[s("a",E,g(c),1)],2))),256)),s("li",{class:r(["page-item",e.pageNumbers.length==a.currentpage?"disabled":""])},k,2)])])}const O=m(N,[["render",I]]),M={class:"pricing-header p-3 pb-md-4 mx-auto"},L={class:"row"},P=s("div",{class:"col"},[s("div",{class:"mb-3 row text-start"},[s("div",{class:"col-sm-10"},[s("span",{class:"display-6 fw-normal"},"Users")])])],-1),R={class:"col text-end"},B=s("span",{class:"material-icons"},"add",-1),T=s("form",{class:"d-flex d-flex p-3 border-top"},[s("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),s("button",{class:"btn btn-outline-success",type:"submit"},"Search")],-1),V={data:function(){return{showDialog:!1,selectedObject:null,dialogTitle:"User info",items:[],columns:[{name:"Name",show:!0,type:"string"},{name:"Email",show:!0,type:"string"},{name:"Contact",show:!0,type:"number"},{name:"Status",show:!0,type:"string"}],inputfields:[{name:"Name",show:!0,type:"string",required:!0},{name:"Email",show:!0,type:"string"},{name:"Contact",show:!0,type:"number",required:!0}],allowRowAction:!0,actionMapper:{},alertmode:"",alertmsg:""}},mounted:function(){this.loadUsers()},methods:{getActionsItems:function(e){var t=[{identifier:"editClick",materialicon:"edit",title:"Edit"}];return e.Status==this.$statusLabelMapper.enabled&&t.push({identifier:"disableItem",materialicon:"visibility_off",title:"Disable"}),e.Status==this.$statusLabelMapper.disabled&&t.push({identifier:"enableItem",materialicon:"visibility",title:"Enable"}),t},disableUser:function(e){this.setStatus(e,this.$statusLabelMapper.disabled)},enableUser:function(e){this.setStatus(e,this.$statusLabelMapper.enabled)},setStatus:function(e,t){u.setStatus(e,t),this.loadUsers()},showEditUserDialog:function(e){this.selectedObject=e,this.showDialog=!0},loadUsers:function(){this.items=[];var e=this;u.list().then(t=>{e.items=t}).catch(t=>{console.log(t),v.showAlert(e,"Could not fetch the users",D.ERROR)})},fillActions:function(e){},showAddDialog:function(e){e&&e.preventDefault(),this.selectedObject=null,this.showDialog=!0},performSave:function(e){e.Status=e.Status??this.$statusLabelMapper.enabled,u.addOrUpdate(e),this.loadUsers(),this.showDialog=!1},editEntry:function(e){this.selectedObject=e,this.showDialog=!0}},components:{CAlert:d}},K=Object.assign(V,{__name:"Users",setup(e){return(t,a)=>(o(),b(_,null,{default:w(()=>[s("div",M,[s("div",L,[P,s("div",R,[s("button",{class:"btn btn-outline-success",onClick:a[0]||(a[0]=(...n)=>t.showAddDialog&&t.showAddDialog(...n))},[S(" Add"),B])])]),i(d,{msg:t.alertmsg,mode:t.alertmode},null,8,["msg","mode"]),T,i(p,{allowaction:t.allowRowAction,items:t.items,columns:t.columns,actionmapper:t.actionMapper,actionmapperidentifier:"Name",onEditClick:t.showEditUserDialog,onDisableItem:t.disableUser,onEnableItem:t.enableUser},null,8,["allowaction","items","columns","actionmapper","onEditClick","onDisableItem","onEnableItem"])]),i(O,{currentpage:"3",perpagerecords:"10",total:"34"}),i(y,{show:t.showDialog,fields:t.inputfields,title:t.dialogTitle,actualobj:t.selectedObject,onSave:t.performSave,onCancel:a[1]||(a[1]=n=>t.showDialog=!1)},null,8,["show","fields","title","actualobj","onSave"])]),_:1}))}});export{K as default};
