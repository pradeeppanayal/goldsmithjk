import{i as w,o as c,h as v,f as u,A as b,a as o,e as d,d as l,w as i,v as p,t as r,g as m,c as y,u as h,b as k}from"./index-a9977b16.js";import{_ as f}from"./CAlert-49effe02.js";import{_ as A}from"./DynamicTable-d9e06a7b.js";import{i as C,C as g}from"./dao-0a59864c.js";import{A as V}from"./ApplicationConstants-909446ca.js";const I={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},N={class:"row"},R=o("div",{class:"col"},[o("div",{class:"mb-3 row text-start"},[o("div",{class:"col-sm-10"},[o("span",{class:"display-6 fw-normal"},"Invoices")])])],-1),M={class:"col text-end"},S=o("span",{class:"material-icons"},"add",-1),D={class:"text-center"},T=o("div",{class:"spinner-grow",role:"status"},[o("span",{class:"visually-hidden"},"Loading...")],-1),B={class:"d-flex d-flex p-3 border-top"},F=o("label",{class:"form-label me-2"},"From",-1),U=o("label",{class:"form-label form-label me-2"},"to",-1),L={key:0,class:"row"},O={class:"col text-start"},E={class:"col"},$={class:"col"},j={data:function(){return{items:[],allowaction:!0,columns:[{name:"invoiceNumber",show:!0},{name:"purchaseDate",show:!0,type:"date"},{name:"customer",show:!0},{name:"products",show:!0},{name:"weight",show:!0,type:"amount"},{name:"amount",show:!0,type:"amount"}],actions:[{identifier:"viewClick",materialicon:"print",title:"View and Print Invoice"}],actionMapper:[],loadingmsg:"",alertmsg:"",alertmode:"",searchkeyword:"",datefrom:"",dateto:"",totals:{}}},mounted:function(){this.loadItems()},methods:{loadItems:function(n){n&&n.preventDefault();var t=this,s={};t.loadingmsg="Fetching invoices..",t.totals={weight:0,amount:0},C.list(this.datefrom,this.dateto,this.searchkeyword).then(a=>{_.each(a,function(e){s[e.invoiceNumber]=t.actions,e.products=e.items.length,e.weight=e.totals?e.totals.weight:0,e.amount=e.totals?e.totals.totalAmount:0,e.weight&&e.amount&&(t.totals.weight+=e.weight,t.totals.amount+=e.amount)}),t.actionMapper=s,t.items=a}).catch(a=>{console.log(a),t.alertmode=V.ERROR,t.alertmsg="Could not load the invoices"}).finally(()=>{t.loadingmsg=""})},showInvoiceReport:function(n){var t="/invoices/"+n.invoiceNumber;window.open(t,"_blank")}},components:{CAlert:f}},H=Object.assign(j,{__name:"Invoices",setup(n){return(t,s)=>{const a=w("RouterLink");return c(),v(b,null,{default:u(()=>[o("div",I,[o("div",N,[R,o("div",M,[d(a,{to:"/invoice",class:"btn btn-outline-success"},{default:u(()=>[l(" Add"),S]),_:1})])]),i(o("div",null,[o("div",D,[l(r(t.loadingmsg)+" ",1),T])],512),[[p,t.loadingmsg]]),i(o("div",null,[d(f,{msg:t.alertmsg,mode:t.alertmode},null,8,["msg","mode"]),o("form",B,[F,i(o("input",{type:"date",class:"form-control me-2","onUpdate:modelValue":s[0]||(s[0]=e=>t.datefrom=e)},null,512),[[m,t.datefrom]]),U,i(o("input",{type:"date",class:"form-control me-2","onUpdate:modelValue":s[1]||(s[1]=e=>t.dateto=e)},null,512),[[m,t.dateto]]),i(o("input",{class:"form-control me-2",type:"search","onUpdate:modelValue":s[2]||(s[2]=e=>t.searchkeyword=e),placeholder:"Search","aria-label":"Search"},null,512),[[m,t.searchkeyword]]),o("button",{class:"btn btn-outline-success",type:"submit",onClick:s[3]||(s[3]=(...e)=>t.loadItems&&t.loadItems(...e))},"Search")]),d(A,{onViewClick:t.showInvoiceReport,items:t.items,columns:t.columns,allowaction:t.allowaction,actionmapper:t.actionMapper,actionmapperidentifier:"invoiceNumber"},null,8,["onViewClick","items","columns","allowaction","actionmapper"]),t.items?(c(),y("div",L,[o("div",O,[o("strong",null,r(t.items.length),1),l(" record(s).")]),o("div",E,[l("Total Weight:"),o("strong",null,r(h(g).getAsFormattedAmount(t.totals.weight)),1)]),o("div",$,[l("Total Amount: "),o("strong",null,r(h(g).getAsFormattedAmount(t.totals.amount)),1)])])):k("",!0)],512),[[p,!t.loadingmsg]])])]),_:1})}}});export{H as default};
