import{o as r,h as u,i as p,_ as c,s as l,b as s,w as n,e as o,l as f,f as d}from"./index-ab8a4c79.js";import{_ as m}from"./DynamicTable-f7d14373.js";import{D as h}from"./DynamicDialog-9c98db01.js";import"./CAlert-098161b8.js";import"./_plugin-vue_export-helper-c27b6911.js";const g={class:"pricing-header p-3 pb-md-4 mx-auto text-start"},w={class:"row"},b=s("div",{class:"col"},[s("div",{class:"mb-1 row text-start"},[s("div",{class:"col-sm-10"},[s("span",{class:"display-6 fw-normal"},"Field Settings")])])],-1),v={class:"col text-end"},y=s("span",{class:"material-icons"},"add",-1),S=s("hr",null,null,-1),D={data:function(){return{productSettings:{identifier:"ProductSettings",fields:[]},defaultActions:[{identifier:"editClick",materialicon:"edit",title:"Edit"},{identifier:"deleteItem",materialicon:"delete",title:"delete"}],allowEdit:!1,columns:[{name:"name",displayText:"Field Name",type:"string",required:!0,show:!0},{name:"type",displayText:"Field Type",type:"option",options:[{value:"string",displayText:"Text"},{value:"number",displayText:"Number"},{value:"yesno",displayText:"Yes/No"},{value:"option",displayText:"Options"}],required:!0,show:!0},{name:"hidden",type:"boolean",required:!1,show:!0}],showFieldDialog:!1,selectedObject:null,actionMapper:[]}},mounted:function(){this.loadSettings()},methods:{showAddDialog:function(){this.showFieldDialog=!0},discardChanges:function(){this.loadSettings(),this.allowEdit=!1},loadSettings:function(){this.actionMapper=[];var i=this;l.getById(this.productSettings.identifier).then(t=>{var e=t;i.fillActions(e.fields),i.productSettings=e})},fillActions:function(i){var t=this;_.each(i,function(e){e.defaultField&&t.actionMapper[e.name]==[],t.actionMapper[e.name]==[...t.defaultActions]}),console.log("Action mapper",t.actionMapper)},addUpdateField:function(i){var t=_.filter(this.productSettings.fields,function(e){return e.name!=i.name});i.defaultField=!1,this.actionMapper[i.name]=[...this.defaultActions],t.push(i),this.productSettings.fields=t,this.showFieldDialog=!1},saveSettings:function(i){i&&i.preventDefault(),l.addOrUpdate(this.productSettings),this.loadSettings(),this.allowEdit=!1}}},k=Object.assign(D,{__name:"CustomerSettings",setup(i){return(t,e)=>(r(),u(c,null,{default:p(()=>[s("div",g,[s("div",w,[b,s("div",v,[n(s("button",{class:"btn btn-outline-success",onClick:e[0]||(e[0]=(...a)=>t.showAddDialog&&t.showAddDialog(...a))},[f(" Add"),y],512),[[o,t.allowEdit]])])]),S,d(m,{items:t.productSettings.fields,columns:t.columns,allowaction:t.allowEdit,actionmapper:t.actionMapper,actionmapperidentifier:"name"},null,8,["items","columns","allowaction","actionmapper"]),n(s("button",{type:"button",class:"btn btn-secondary",onClick:e[1]||(e[1]=a=>t.allowEdit=!0)},"Edit",512),[[o,!t.allowEdit]]),n(s("button",{type:"button",class:"btn btn-secondary",onClick:e[2]||(e[2]=(...a)=>t.discardChanges&&t.discardChanges(...a))},"Cancel",512),[[o,t.allowEdit]]),n(s("button",{type:"button",style:{"margin-left":"10px"},class:"btn btn-primary",onClick:e[3]||(e[3]=(...a)=>t.saveSettings&&t.saveSettings(...a))},"Save Changes",512),[[o,t.allowEdit]])]),d(h,{show:t.showFieldDialog,actualobj:t.selectedObject,fields:t.columns,onSave:t.addUpdateField,onCancel:e[4]||(e[4]=a=>t.showFieldDialog=!1)},null,8,["show","actualobj","fields","onSave"])]),_:1}))}});export{k as default};
