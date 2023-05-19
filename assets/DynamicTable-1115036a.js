import{o as e,c as n,b as a,F as s,r as c,w as m,e as u,t as d}from"./index-5f94e7fe.js";import{C as h}from"./dao-56b0e64b.js";const f={key:0,class:"table"},p={scope:"col",style:{width:"15em"}},y=["title","onClick"],w={key:1},b=a("div",{class:"text-center display-10"},"No data to show",-1),g=[b],A={props:["items","columns","allowaction","actionmapper","actionmapperidentifier"],emits:["rowEdit","rowDelete"],methods:{getActionsIfAny:function(t){return!this.actionmapper||this.actionmapper.length==0||!this.actionmapperidentifier?[]:this.actionmapper[t[this.actionmapperidentifier]]},formattedColumnName:function(t){return h.capitalizeFirstLetterOfEveryWordForVariableName(t)},formattedValue(t,i){const l=t[i.name];return l?i.type=="date"?h.getAsFormattedDate(l):i.type=="amount"?h.getAsFormattedAmount(l):l:"-"}}},F=Object.assign(A,{__name:"DynamicTable",setup(t){return(i,l)=>t.items&&t.columns&&t.items.length>0?(e(),n("table",f,[a("thead",null,[a("tr",null,[(e(!0),n(s,null,c(t.columns,o=>m((e(),n("th",{scope:"col"},d(i.formattedColumnName(o.name)),513)),[[u,!o.hidden]])),256)),m(a("th",p,"Actions",512),[[u,t.allowaction]])])]),a("tbody",null,[(e(!0),n(s,null,c(t.items,o=>(e(),n("tr",null,[(e(!0),n(s,null,c(t.columns,r=>m((e(),n("td",null,d(i.formattedValue(o,r)),513)),[[u,!r.hidden]])),256)),m(a("td",null,[(e(!0),n(s,null,c(i.getActionsIfAny(o),r=>(e(),n("span",null,[a("button",{class:"btn material-icons",title:r.title,onClick:v=>i.$emit(r.identifier,o)},d(r.materialicon),9,y)]))),256))],512),[[u,t.allowaction]])]))),256))])])):(e(),n("div",w,g))}});export{F as _};
