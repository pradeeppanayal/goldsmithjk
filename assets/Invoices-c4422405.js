import{d as v,o as p,h as w,i as h,_ as b,k,C as u,A as C,b as t,f as d,l,w as i,e as g,t as r,g as c,u as m,D as y,c as A,a as I}from"./index-9ae72514.js";import{_ as f}from"./CAlert-ab377059.js";import{_ as V}from"./DynamicTable-438c85b5.js";const N={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},S={class:"row"},M=t("div",{class:"col"},[t("div",{class:"mb-3 row text-start"},[t("div",{class:"col-sm-10"},[t("span",{class:"display-6 fw-normal"},"Invoices")])])],-1),R={class:"col text-end"},D=t("span",{class:"material-icons"},"add",-1),O={class:"text-center"},U=t("div",{class:"spinner-grow",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),B={class:"d-flex d-flex p-3 border-top"},F=t("label",{class:"form-label me-2"},"From",-1),L=t("label",{class:"form-label form-label me-2"},"to",-1),T={key:0,class:"row"},$={class:"col text-start"},E={class:"col"},j={class:"col"},P={data:function(){return{items:[],allowaction:!0,actions:[{identifier:"viewClick",materialicon:"print",title:"View and Print Invoice"}],actionMapper:[],loadingmsg:"",alertmsg:"",alertmode:"",searchkeyword:"",datefrom:"",dateto:"",totals:{}}},mounted:function(){this.loadItems()},methods:{loadItems:function(n){n&&n.preventDefault();var o=this,s={};o.loadingmsg="Fetching invoices..",o.totals={weight:0,amount:0},k.list(this.datefrom,this.dateto,this.searchkeyword).then(a=>{_.each(a,function(e){s[e.invoiceNumber]=o.actions,e.products=e.items.length,e.weight=e.totals?e.totals.weight:0,e.amount=e.totals?e.totals.totalAmount:0,e.weight&&e.amount&&(o.totals.weight+=e.weight,o.totals.amount+=e.amount)}),o.actionMapper=s,o.items=a}).catch(a=>{console.log(a),u.showAlert(o,"Could not load the invoices.",C.ERROR)}).finally(()=>{o.loadingmsg=""})},showInvoiceReport:function(n){var o=this.$basedomainname+"invoices/"+n.invoiceNumber;window.open(o,"_blank")}},components:{CAlert:f}},G=Object.assign(P,{__name:"Invoices",setup(n){return(o,s)=>{const a=v("RouterLink");return p(),w(b,null,{default:h(()=>[t("div",N,[t("div",S,[M,t("div",R,[d(a,{to:"/invoice",class:"btn btn-outline-success"},{default:h(()=>[l(" Add"),D]),_:1})])]),i(t("div",null,[t("div",O,[l(r(o.loadingmsg)+" ",1),U])],512),[[g,o.loadingmsg]]),i(t("div",null,[d(f,{msg:o.alertmsg,mode:o.alertmode},null,8,["msg","mode"]),t("form",B,[F,i(t("input",{type:"date",class:"form-control me-2","onUpdate:modelValue":s[0]||(s[0]=e=>o.datefrom=e)},null,512),[[c,o.datefrom]]),L,i(t("input",{type:"date",class:"form-control me-2","onUpdate:modelValue":s[1]||(s[1]=e=>o.dateto=e)},null,512),[[c,o.dateto]]),i(t("input",{class:"form-control me-2",type:"search","onUpdate:modelValue":s[2]||(s[2]=e=>o.searchkeyword=e),placeholder:"Search","aria-label":"Search"},null,512),[[c,o.searchkeyword]]),t("button",{class:"btn btn-outline-success",type:"submit",onClick:s[3]||(s[3]=(...e)=>o.loadItems&&o.loadItems(...e))},"Search")]),d(V,{onViewClick:o.showInvoiceReport,items:o.items,columns:m(y).INVOICES_COLUMNS,allowaction:o.allowaction,actionmapper:o.actionMapper,actionmapperidentifier:"invoiceNumber"},null,8,["onViewClick","items","columns","allowaction","actionmapper"]),o.items&&o.items.length>0?(p(),A("div",T,[t("div",$,[t("strong",null,r(o.items.length),1),l(" record(s).")]),t("div",E,[l("Total Weight:"),t("strong",null,r(m(u).getAsFormattedAmount(o.totals.weight)),1)]),t("div",j,[l("Total Amount: "),t("strong",null,r(m(u).getAsFormattedAmount(o.totals.amount)),1)])])):I("",!0)],512),[[g,!o.loadingmsg]])])]),_:1})}}});export{G as default};
