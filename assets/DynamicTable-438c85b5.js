import{o as n,c as i,b as r,F as o,r as c,w as u,e as m,t as d,z as h,C as f}from"./index-9ae72514.js";const p={key:0,class:"table"},y={scope:"col",style:{width:"15em"}},b=["title","onClick"],g={key:1},S=r("div",{class:"text-center display-10"},"No data to show",-1),C=[S],w={props:["items","columns","allowaction","actionmapper","actionmapperidentifier"],emits:["rowEdit","rowDelete"],methods:{getActionsIfAny:function(t){return!this.actionmapper||this.actionmapper.length==0||!this.actionmapperidentifier?[]:this.actionmapper[t[this.actionmapperidentifier]]},formattedColumnName:function(t){return f.capitalizeFirstLetterOfEveryWordForVariableName(t)},formattedValue(t,e){const a=t[e.name];return a?e.type=="date"?f.getAsFormattedDate(a):e.type=="amount"?f.getAsFormattedAmount(a):a:"-"},getValueSpecificStyle:function(t){return t.status&&t.status==this.$statusLabelMapper.disabled?"table-secondary":""},getValueSpecificCellStyle:function(t,e){const a=e.name;return(a=="amount"||a=="balance")&&t[a]?t[a]<0?"table-cell-sale":"table-cell-pay":""}}},v=Object.assign(w,{__name:"DynamicTable",setup(t){return(e,a)=>t.items&&t.columns&&t.items.length>0?(n(),i("table",p,[r("thead",null,[r("tr",null,[(n(!0),i(o,null,c(t.columns,l=>u((n(),i("th",{scope:"col"},d(e.formattedColumnName(l.name)),513)),[[m,!l.hidden]])),256)),u(r("th",y,"Actions",512),[[m,t.allowaction]])])]),r("tbody",null,[(n(!0),i(o,null,c(t.items,l=>(n(),i("tr",{class:h(e.getValueSpecificStyle(l))},[(n(!0),i(o,null,c(t.columns,s=>u((n(),i("td",{class:h(e.getValueSpecificCellStyle(l,s))},d(e.formattedValue(l,s)),3)),[[m,!s.hidden]])),256)),u(r("td",null,[(n(!0),i(o,null,c(e.getActionsIfAny(l),s=>(n(),i("span",null,[r("button",{class:"btn material-icons",title:s.title,onClick:A=>e.$emit(s.identifier,l)},d(s.materialicon),9,b)]))),256))],512),[[m,t.allowaction]])],2))),256))])])):(n(),i("div",g,C))}});export{v as _};
