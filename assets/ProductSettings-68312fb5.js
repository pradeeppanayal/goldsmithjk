import{o as l,h as d,i as r,j as c,s as o,b as s,w as u,e as p,m as f,f as n}from"./index-2c09f05d.js";import{_ as m}from"./DynamicTable-69364c84.js";import{D as h}from"./DynamicDialog-8066ab0c.js";import"./CAlert-6c56d511.js";const g={class:"pricing-header p-3 pb-md-4 mx-auto text-start"},w={class:"row"},v=s("div",{class:"col"},[s("div",{class:"mb-1 row text-start"},[s("div",{class:"col-sm-10"},[s("span",{class:"display-6 fw-normal"},"Field Settings")])])],-1),S={class:"col text-end"},y=s("span",{class:"material-icons"},"add",-1),b=s("hr",null,null,-1),D={data:function(){return{productSettings:{identifier:"ProductSettings",fields:[]},defaultActions:[{identifier:"editClick",materialicon:"edit",title:"Edit"},{identifier:"deleteItem",materialicon:"delete",title:"delete"}],allowEdit:!1,columns:[{name:"name",displayText:"Field Name",type:"string",required:!0,show:!0},{name:"type",displayText:"Field Type",type:"option",options:[{value:"string",displayText:"Text"},{value:"number",displayText:"Number"},{value:"yesno",displayText:"Yes/No"},{value:"option",displayText:"Options"}],required:!0,show:!0},{name:"hidden",type:"boolean",required:!1,show:!0}],showFieldDialog:!1,selectedObject:null,actionMapper:[]}},mounted:function(){this.loadSettings()},methods:{showAddDialog:function(){this.showFieldDialog=!0},discardChanges:function(){this.loadSettings(),this.allowEdit=!1},loadSettings:function(){this.actionMapper=[];var e=this;o.getById(this.productSettings.identifier).then(t=>{var i=t;e.fillActions(i.fields),e.productSettings=i})},fillActions:function(e){var t=this;_.each(e,function(i){i.defaultField&&t.actionMapper[i.name]==[],t.actionMapper[i.name]==[...t.defaultActions]}),console.log("Action mapper",t.actionMapper)},addUpdateField:function(e){var t=_.filter(this.productSettings.fields,function(i){return i.name!=e.name});e.defaultField=!1,this.actionMapper[e.name]=[...this.defaultActions],t.push(e),this.productSettings.fields=t,this.showFieldDialog=!1},saveSettings:function(e){e&&e.preventDefault(),o.addOrUpdate(this.productSettings),this.loadSettings(),this.allowEdit=!1}}},j=Object.assign(D,{__name:"ProductSettings",setup(e){return(t,i)=>(l(),d(c,null,{default:r(()=>[s("div",g,[s("div",w,[v,s("div",S,[u(s("button",{class:"btn btn-outline-success",onClick:i[0]||(i[0]=(...a)=>t.showAddDialog&&t.showAddDialog(...a))},[f(" Add"),y],512),[[p,t.allowEdit]])])]),b,n(m,{items:t.productSettings.fields,columns:t.columns,allowaction:t.allowEdit,actionmapper:t.actionMapper,actionmapperidentifier:"name"},null,8,["items","columns","allowaction","actionmapper"])]),n(h,{show:t.showFieldDialog,actualobj:t.selectedObject,fields:t.columns,onSave:t.addUpdateField,onCancel:i[1]||(i[1]=a=>t.showFieldDialog=!1)},null,8,["show","actualobj","fields","onSave"])]),_:1}))}});export{j as default};
