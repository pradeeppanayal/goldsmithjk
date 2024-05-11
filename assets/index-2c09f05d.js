var Wd=Object.defineProperty;var Kd=(t,e,n)=>e in t?Wd(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ze=(t,e,n)=>(Kd(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */(function(t){typeof define=="function"&&define.amd?define(["jquery"],t):typeof module=="object"&&module.exports?module.exports=function(e,n){return n===void 0&&(n=typeof window<"u"?require("jquery"):require("jquery")(e)),t(n),n}:t(jQuery)})(function(t){var e,n,K,r,s,i,o,l,c,h,m,b,A,k,V,K=((z=t&&t.fn&&t.fn.select2&&t.fn.select2.amd?t.fn.select2.amd:z)&&z.requirejs||(z?n=z:z={},c={},h={},m={},b={},A=Object.prototype.hasOwnProperty,k=[].slice,V=/\.js$/,o=function(v,f){var g,d,u=le(v),a=u[0],f=f[1];return v=u[1],a&&(g=J(a=G(a,f))),a?v=g&&g.normalize?g.normalize(v,(d=f,function(p){return G(p,d)})):G(v,f):(a=(u=le(v=G(v,f)))[0],v=u[1],a&&(g=J(a))),{f:a?a+"!"+v:v,n:v,pr:a,p:g}},l={require:function(v){return ee(v)},exports:function(v){var w=c[v];return w!==void 0?w:c[v]={}},module:function(v){return{id:v,uri:"",exports:c[v],config:(w=v,function(){return m&&m.config&&m.config[w]||{}})};var w}},s=function(v,w,g,d){var u,a,f,p,T,E=[],C=typeof g,M=Se(d=d||v);if(C=="undefined"||C=="function"){for(w=!w.length&&g.length?["require","exports","module"]:w,p=0;p<w.length;p+=1)if((a=(f=o(w[p],M)).f)==="require")E[p]=l.require(v);else if(a==="exports")E[p]=l.exports(v),T=!0;else if(a==="module")u=E[p]=l.module(v);else if(X(c,a)||X(h,a)||X(b,a))E[p]=J(a);else{if(!f.p)throw new Error(v+" missing "+a);f.p.load(f.n,ee(d,!0),function(L){return function(oe){c[L]=oe}}(a),{}),E[p]=c[a]}C=g?g.apply(c[v],E):void 0,v&&(u&&u.exports!==r&&u.exports!==c[v]?c[v]=u.exports:C===r&&T||(c[v]=C))}else v&&(c[v]=g)},e=n=i=function(v,w,g,d,u){if(typeof v=="string")return l[v]?l[v](w):J(o(v,Se(w)).f);if(!v.splice){if((m=v).deps&&i(m.deps,m.callback),!w)return;w.splice?(v=w,w=g,g=null):v=r}return w=w||function(){},typeof g=="function"&&(g=d,d=u),d?s(r,v,w,g):setTimeout(function(){s(r,v,w,g)},4),i},i.config=function(v){return i(v)},e._defined=c,(K=function(v,w,g){if(typeof v!="string")throw new Error("See almond README: incorrect module build, no module name");w.splice||(g=w,w=[]),X(c,v)||X(h,v)||(h[v]=[v,w,g])}).amd={jQuery:!0},z.requirejs=e,z.require=n,z.define=K),z.define("almond",function(){}),z.define("jquery",[],function(){var v=t||$;return v==null&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),v}),z.define("select2/utils",["jquery"],function(v){var w={};function g(a){var f,p=a.prototype,T=[];for(f in p)typeof p[f]=="function"&&f!=="constructor"&&T.push(f);return T}w.Extend=function(a,f){var p,T={}.hasOwnProperty;function E(){this.constructor=a}for(p in f)T.call(f,p)&&(a[p]=f[p]);return E.prototype=f.prototype,a.prototype=new E,a.__super__=f.prototype,a},w.Decorate=function(a,f){var p=g(f),T=g(a);function E(){var pe=Array.prototype.unshift,Ce=f.prototype.constructor.length,Xe=a.prototype.constructor;0<Ce&&(pe.call(arguments,a.prototype.constructor),Xe=f.prototype.constructor),Xe.apply(this,arguments)}f.displayName=a.displayName,E.prototype=new function(){this.constructor=E};for(var C=0;C<T.length;C++){var M=T[C];E.prototype[M]=a.prototype[M]}for(var L=0;L<p.length;L++){var oe=p[L];E.prototype[oe]=function(pe){var Ce=function(){};pe in E.prototype&&(Ce=E.prototype[pe]);var Xe=f.prototype[pe];return function(){return Array.prototype.unshift.call(arguments,Ce),Xe.apply(this,arguments)}}(oe)}return E};function d(){this.listeners={}}d.prototype.on=function(a,f){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(f):this.listeners[a]=[f]},d.prototype.trigger=function(a){var f=Array.prototype.slice,p=f.call(arguments,1);this.listeners=this.listeners||{},(p=p??[]).length===0&&p.push({}),(p[0]._type=a)in this.listeners&&this.invoke(this.listeners[a],f.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,f){for(var p=0,T=a.length;p<T;p++)a[p].apply(this,f)},w.Observable=d,w.generateChars=function(a){for(var f="",p=0;p<a;p++)f+=Math.floor(36*Math.random()).toString(36);return f},w.bind=function(a,f){return function(){a.apply(f,arguments)}},w._convertData=function(a){for(var f in a){var p=f.split("-"),T=a;if(p.length!==1){for(var E=0;E<p.length;E++){var C=p[E];(C=C.substring(0,1).toLowerCase()+C.substring(1))in T||(T[C]={}),E==p.length-1&&(T[C]=a[f]),T=T[C]}delete a[f]}}return a},w.hasScroll=function(a,f){var p=v(f),T=f.style.overflowX,E=f.style.overflowY;return(T!==E||E!=="hidden"&&E!=="visible")&&(T==="scroll"||E==="scroll"||p.innerHeight()<f.scrollHeight||p.innerWidth()<f.scrollWidth)},w.escapeMarkup=function(a){var f={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return typeof a!="string"?a:String(a).replace(/[&<>"'\/\\]/g,function(p){return f[p]})},w.__cache={};var u=0;return w.GetUniqueElementId=function(a){var f=a.getAttribute("data-select2-id");return f!=null||(f=a.id?"select2-data-"+a.id:"select2-data-"+(++u).toString()+"-"+w.generateChars(4),a.setAttribute("data-select2-id",f)),f},w.StoreData=function(a,f,p){a=w.GetUniqueElementId(a),w.__cache[a]||(w.__cache[a]={}),w.__cache[a][f]=p},w.GetData=function(a,f){var p=w.GetUniqueElementId(a);return f?w.__cache[p]&&w.__cache[p][f]!=null?w.__cache[p][f]:v(a).data(f):w.__cache[p]},w.RemoveData=function(a){var f=w.GetUniqueElementId(a);w.__cache[f]!=null&&delete w.__cache[f],a.removeAttribute("data-select2-id")},w.copyNonInternalCssClasses=function(a,T){var p=(p=a.getAttribute("class").trim().split(/\s+/)).filter(function(E){return E.indexOf("select2-")===0}),T=(T=T.getAttribute("class").trim().split(/\s+/)).filter(function(E){return E.indexOf("select2-")!==0}),T=p.concat(T);a.setAttribute("class",T.join(" "))},w}),z.define("select2/results",["jquery","./utils"],function(v,w){function g(d,u,a){this.$element=d,this.data=a,this.options=u,g.__super__.constructor.call(this)}return w.Extend(g,w.Observable),g.prototype.render=function(){var d=v('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&d.attr("aria-multiselectable","true"),this.$results=d},g.prototype.clear=function(){this.$results.empty()},g.prototype.displayMessage=function(d){var u=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var a=v('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),f=this.options.get("translations").get(d.message);a.append(u(f(d.args))),a[0].className+=" select2-results__message",this.$results.append(a)},g.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},g.prototype.append=function(d){this.hideLoading();var u=[];if(d.results!=null&&d.results.length!==0){d.results=this.sort(d.results);for(var a=0;a<d.results.length;a++){var f=d.results[a],f=this.option(f);u.push(f)}this.$results.append(u)}else this.$results.children().length===0&&this.trigger("results:message",{message:"noResults"})},g.prototype.position=function(d,u){u.find(".select2-results").append(d)},g.prototype.sort=function(d){return this.options.get("sorter")(d)},g.prototype.highlightFirstItem=function(){var d=this.$results.find(".select2-results__option--selectable"),u=d.filter(".select2-results__option--selected");(0<u.length?u:d).first().trigger("mouseenter"),this.ensureHighlightVisible()},g.prototype.setClasses=function(){var d=this;this.data.current(function(u){var a=u.map(function(f){return f.id.toString()});d.$results.find(".select2-results__option--selectable").each(function(){var f=v(this),p=w.GetData(this,"data"),T=""+p.id;p.element!=null&&p.element.selected||p.element==null&&-1<a.indexOf(T)?(this.classList.add("select2-results__option--selected"),f.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),f.attr("aria-selected","false"))})})},g.prototype.showLoading=function(d){this.hideLoading(),d={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(d)},d=this.option(d),d.className+=" loading-results",this.$results.prepend(d)},g.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},g.prototype.option=function(d){var u=document.createElement("li");u.classList.add("select2-results__option"),u.classList.add("select2-results__option--selectable");var a,f={role:"option"},p=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(a in(d.element!=null&&p.call(d.element,":disabled")||d.element==null&&d.disabled)&&(f["aria-disabled"]="true",u.classList.remove("select2-results__option--selectable"),u.classList.add("select2-results__option--disabled")),d.id==null&&u.classList.remove("select2-results__option--selectable"),d._resultId!=null&&(u.id=d._resultId),d.title&&(u.title=d.title),d.children&&(f.role="group",f["aria-label"]=d.text,u.classList.remove("select2-results__option--selectable"),u.classList.add("select2-results__option--group")),f){var T=f[a];u.setAttribute(a,T)}if(d.children){var E=v(u),C=document.createElement("strong");C.className="select2-results__group",this.template(d,C);for(var M=[],L=0;L<d.children.length;L++){var oe=d.children[L],oe=this.option(oe);M.push(oe)}p=v("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"}),p.append(M),E.append(C),E.append(p)}else this.template(d,u);return w.StoreData(u,"data",d),u},g.prototype.bind=function(d,u){var a=this,f=d.id+"-results";this.$results.attr("id",f),d.on("results:all",function(p){a.clear(),a.append(p.data),d.isOpen()&&(a.setClasses(),a.highlightFirstItem())}),d.on("results:append",function(p){a.append(p.data),d.isOpen()&&a.setClasses()}),d.on("query",function(p){a.hideMessages(),a.showLoading(p)}),d.on("select",function(){d.isOpen()&&(a.setClasses(),a.options.get("scrollAfterSelect")&&a.highlightFirstItem())}),d.on("unselect",function(){d.isOpen()&&(a.setClasses(),a.options.get("scrollAfterSelect")&&a.highlightFirstItem())}),d.on("open",function(){a.$results.attr("aria-expanded","true"),a.$results.attr("aria-hidden","false"),a.setClasses(),a.ensureHighlightVisible()}),d.on("close",function(){a.$results.attr("aria-expanded","false"),a.$results.attr("aria-hidden","true"),a.$results.removeAttr("aria-activedescendant")}),d.on("results:toggle",function(){var p=a.getHighlightedResults();p.length!==0&&p.trigger("mouseup")}),d.on("results:select",function(){var p,T=a.getHighlightedResults();T.length!==0&&(p=w.GetData(T[0],"data"),T.hasClass("select2-results__option--selected")?a.trigger("close",{}):a.trigger("select",{data:p}))}),d.on("results:previous",function(){var p,T=a.getHighlightedResults(),E=a.$results.find(".select2-results__option--selectable"),C=E.index(T);C<=0||(p=C-1,T.length===0&&(p=0),(C=E.eq(p)).trigger("mouseenter"),T=a.$results.offset().top,E=C.offset().top,C=a.$results.scrollTop()+(E-T),p===0?a.$results.scrollTop(0):E-T<0&&a.$results.scrollTop(C))}),d.on("results:next",function(){var p,T=a.getHighlightedResults(),E=a.$results.find(".select2-results__option--selectable"),C=E.index(T)+1;C>=E.length||((p=E.eq(C)).trigger("mouseenter"),T=a.$results.offset().top+a.$results.outerHeight(!1),E=p.offset().top+p.outerHeight(!1),p=a.$results.scrollTop()+E-T,C===0?a.$results.scrollTop(0):T<E&&a.$results.scrollTop(p))}),d.on("results:focus",function(p){p.element[0].classList.add("select2-results__option--highlighted"),p.element[0].setAttribute("aria-selected","true")}),d.on("results:message",function(p){a.displayMessage(p)}),v.fn.mousewheel&&this.$results.on("mousewheel",function(p){var T=a.$results.scrollTop(),E=a.$results.get(0).scrollHeight-T+p.deltaY,T=0<p.deltaY&&T-p.deltaY<=0,E=p.deltaY<0&&E<=a.$results.height();T?(a.$results.scrollTop(0),p.preventDefault(),p.stopPropagation()):E&&(a.$results.scrollTop(a.$results.get(0).scrollHeight-a.$results.height()),p.preventDefault(),p.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(p){var T=v(this),E=w.GetData(this,"data");T.hasClass("select2-results__option--selected")?a.options.get("multiple")?a.trigger("unselect",{originalEvent:p,data:E}):a.trigger("close",{}):a.trigger("select",{originalEvent:p,data:E})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(p){var T=w.GetData(this,"data");a.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),a.trigger("results:focus",{data:T,element:v(this)})})},g.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},g.prototype.destroy=function(){this.$results.remove()},g.prototype.ensureHighlightVisible=function(){var d,u,a,f,p=this.getHighlightedResults();p.length!==0&&(d=this.$results.find(".select2-results__option--selectable").index(p),f=this.$results.offset().top,u=p.offset().top,a=this.$results.scrollTop()+(u-f),f=u-f,a-=2*p.outerHeight(!1),d<=2?this.$results.scrollTop(0):(f>this.$results.outerHeight()||f<0)&&this.$results.scrollTop(a))},g.prototype.template=function(p,u){var a=this.options.get("templateResult"),f=this.options.get("escapeMarkup"),p=a(p,u);p==null?u.style.display="none":typeof p=="string"?u.innerHTML=f(p):v(u).append(p)},g}),z.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),z.define("select2/selection/base",["jquery","../utils","../keys"],function(v,w,g){function d(u,a){this.$element=u,this.options=a,d.__super__.constructor.call(this)}return w.Extend(d,w.Observable),d.prototype.render=function(){var u=v('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,w.GetData(this.$element[0],"old-tabindex")!=null?this._tabindex=w.GetData(this.$element[0],"old-tabindex"):this.$element.attr("tabindex")!=null&&(this._tabindex=this.$element.attr("tabindex")),u.attr("title",this.$element.attr("title")),u.attr("tabindex",this._tabindex),u.attr("aria-disabled","false"),this.$selection=u},d.prototype.bind=function(u,a){var f=this,p=u.id+"-results";this.container=u,this.$selection.on("focus",function(T){f.trigger("focus",T)}),this.$selection.on("blur",function(T){f._handleBlur(T)}),this.$selection.on("keydown",function(T){f.trigger("keypress",T),T.which===g.SPACE&&T.preventDefault()}),u.on("results:focus",function(T){f.$selection.attr("aria-activedescendant",T.data._resultId)}),u.on("selection:update",function(T){f.update(T.data)}),u.on("open",function(){f.$selection.attr("aria-expanded","true"),f.$selection.attr("aria-owns",p),f._attachCloseHandler(u)}),u.on("close",function(){f.$selection.attr("aria-expanded","false"),f.$selection.removeAttr("aria-activedescendant"),f.$selection.removeAttr("aria-owns"),f.$selection.trigger("focus"),f._detachCloseHandler(u)}),u.on("enable",function(){f.$selection.attr("tabindex",f._tabindex),f.$selection.attr("aria-disabled","false")}),u.on("disable",function(){f.$selection.attr("tabindex","-1"),f.$selection.attr("aria-disabled","true")})},d.prototype._handleBlur=function(u){var a=this;window.setTimeout(function(){document.activeElement==a.$selection[0]||v.contains(a.$selection[0],document.activeElement)||a.trigger("blur",u)},1)},d.prototype._attachCloseHandler=function(u){v(document.body).on("mousedown.select2."+u.id,function(a){var f=v(a.target).closest(".select2");v(".select2.select2-container--open").each(function(){this!=f[0]&&w.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(u){v(document.body).off("mousedown.select2."+u.id)},d.prototype.position=function(u,a){a.find(".selection").append(u)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(u){throw new Error("The `update` method must be defined in child classes.")},d.prototype.isEnabled=function(){return!this.isDisabled()},d.prototype.isDisabled=function(){return this.options.get("disabled")},d}),z.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(v,w,g,d){function u(){u.__super__.constructor.apply(this,arguments)}return g.Extend(u,w),u.prototype.render=function(){var a=u.__super__.render.call(this);return a[0].classList.add("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},u.prototype.bind=function(a,f){var p=this;u.__super__.bind.apply(this,arguments);var T=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",T).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",T),this.$selection.attr("aria-controls",T),this.$selection.on("mousedown",function(E){E.which===1&&p.trigger("toggle",{originalEvent:E})}),this.$selection.on("focus",function(E){}),this.$selection.on("blur",function(E){}),a.on("focus",function(E){a.isOpen()||p.$selection.trigger("focus")})},u.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},u.prototype.display=function(a,f){var p=this.options.get("templateSelection");return this.options.get("escapeMarkup")(p(a,f))},u.prototype.selectionContainer=function(){return v("<span></span>")},u.prototype.update=function(a){var f,p;a.length!==0?(p=a[0],f=this.$selection.find(".select2-selection__rendered"),a=this.display(p,f),f.empty().append(a),(p=p.title||p.text)?f.attr("title",p):f.removeAttr("title")):this.clear()},u}),z.define("select2/selection/multiple",["jquery","./base","../utils"],function(v,w,g){function d(u,a){d.__super__.constructor.apply(this,arguments)}return g.Extend(d,w),d.prototype.render=function(){var u=d.__super__.render.call(this);return u[0].classList.add("select2-selection--multiple"),u.html('<ul class="select2-selection__rendered"></ul>'),u},d.prototype.bind=function(u,a){var f=this;d.__super__.bind.apply(this,arguments);var p=u.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",p),this.$selection.on("click",function(T){f.trigger("toggle",{originalEvent:T})}),this.$selection.on("click",".select2-selection__choice__remove",function(T){var E;f.isDisabled()||(E=v(this).parent(),E=g.GetData(E[0],"data"),f.trigger("unselect",{originalEvent:T,data:E}))}),this.$selection.on("keydown",".select2-selection__choice__remove",function(T){f.isDisabled()||T.stopPropagation()})},d.prototype.clear=function(){var u=this.$selection.find(".select2-selection__rendered");u.empty(),u.removeAttr("title")},d.prototype.display=function(u,a){var f=this.options.get("templateSelection");return this.options.get("escapeMarkup")(f(u,a))},d.prototype.selectionContainer=function(){return v('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},d.prototype.update=function(u){if(this.clear(),u.length!==0){for(var a=[],f=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",p=0;p<u.length;p++){var T=u[p],E=this.selectionContainer(),C=this.display(T,E),M=f+g.generateChars(4)+"-";T.id?M+=T.id:M+=g.generateChars(4),E.find(".select2-selection__choice__display").append(C).attr("id",M);var L=T.title||T.text;L&&E.attr("title",L),C=this.options.get("translations").get("removeItem"),L=E.find(".select2-selection__choice__remove"),L.attr("title",C()),L.attr("aria-label",C()),L.attr("aria-describedby",M),g.StoreData(E[0],"data",T),a.push(E)}this.$selection.find(".select2-selection__rendered").append(a)}},d}),z.define("select2/selection/placeholder",[],function(){function v(w,g,d){this.placeholder=this.normalizePlaceholder(d.get("placeholder")),w.call(this,g,d)}return v.prototype.normalizePlaceholder=function(w,g){return g=typeof g=="string"?{id:"",text:g}:g},v.prototype.createPlaceholder=function(w,g){var d=this.selectionContainer();return d.html(this.display(g)),d[0].classList.add("select2-selection__placeholder"),d[0].classList.remove("select2-selection__choice"),g=g.title||g.text||d.text(),this.$selection.find(".select2-selection__rendered").attr("title",g),d},v.prototype.update=function(w,g){var d=g.length==1&&g[0].id!=this.placeholder.id;if(1<g.length||d)return w.call(this,g);this.clear(),g=this.createPlaceholder(this.placeholder),this.$selection.find(".select2-selection__rendered").append(g)},v}),z.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(v,w,g){function d(){}return d.prototype.bind=function(u,a,f){var p=this;u.call(this,a,f),this.placeholder==null&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(T){p._handleClear(T)}),a.on("keypress",function(T){p._handleKeyboardClear(T,a)})},d.prototype._handleClear=function(u,a){if(!this.isDisabled()){var f=this.$selection.find(".select2-selection__clear");if(f.length!==0){a.stopPropagation();var p=g.GetData(f[0],"data"),T=this.$element.val();this.$element.val(this.placeholder.id);var E={data:p};if(this.trigger("clear",E),E.prevented)this.$element.val(T);else{for(var C=0;C<p.length;C++)if(E={data:p[C]},this.trigger("unselect",E),E.prevented)return void this.$element.val(T);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},d.prototype._handleKeyboardClear=function(u,a,f){f.isOpen()||a.which!=w.DELETE&&a.which!=w.BACKSPACE||this._handleClear(a)},d.prototype.update=function(u,a){var f,p;u.call(this,a),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),0<this.$selection.find(".select2-selection__placeholder").length||a.length===0||(f=this.$selection.find(".select2-selection__rendered").attr("id"),p=this.options.get("translations").get("removeAllItems"),(u=v('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title",p()),u.attr("aria-label",p()),u.attr("aria-describedby",f),g.StoreData(u[0],"data",a),this.$selection.prepend(u),this.$selection[0].classList.add("select2-selection--clearable"))},d}),z.define("select2/selection/search",["jquery","../utils","../keys"],function(v,w,g){function d(u,a,f){u.call(this,a,f)}return d.prototype.render=function(u){var a=this.options.get("translations").get("search"),f=v('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');return this.$searchContainer=f,this.$search=f.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",a()),u=u.call(this),this._transferTabIndex(),u.append(this.$searchContainer),u},d.prototype.bind=function(u,C,f){var p=this,T=C.id+"-results",E=C.id+"-container";u.call(this,C,f),p.$search.attr("aria-describedby",E),C.on("open",function(){p.$search.attr("aria-controls",T),p.$search.trigger("focus")}),C.on("close",function(){p.$search.val(""),p.resizeSearch(),p.$search.removeAttr("aria-controls"),p.$search.removeAttr("aria-activedescendant"),p.$search.trigger("focus")}),C.on("enable",function(){p.$search.prop("disabled",!1),p._transferTabIndex()}),C.on("disable",function(){p.$search.prop("disabled",!0)}),C.on("focus",function(L){p.$search.trigger("focus")}),C.on("results:focus",function(L){L.data._resultId?p.$search.attr("aria-activedescendant",L.data._resultId):p.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(L){p.trigger("focus",L)}),this.$selection.on("focusout",".select2-search--inline",function(L){p._handleBlur(L)}),this.$selection.on("keydown",".select2-search--inline",function(L){var oe;L.stopPropagation(),p.trigger("keypress",L),p._keyUpPrevented=L.isDefaultPrevented(),L.which!==g.BACKSPACE||p.$search.val()!==""||0<(oe=p.$selection.find(".select2-selection__choice").last()).length&&(oe=w.GetData(oe[0],"data"),p.searchRemoveChoice(oe),L.preventDefault())}),this.$selection.on("click",".select2-search--inline",function(L){p.$search.val()&&L.stopPropagation()});var C=document.documentMode,M=C&&C<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(L){M?p.$selection.off("input.search input.searchcheck"):p.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(L){var oe;M&&L.type==="input"?p.$selection.off("input.search input.searchcheck"):(oe=L.which)!=g.SHIFT&&oe!=g.CTRL&&oe!=g.ALT&&oe!=g.TAB&&p.handleSearch(L)})},d.prototype._transferTabIndex=function(u){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(u,a){this.$search.attr("placeholder",a.text)},d.prototype.update=function(u,a){var f=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),u.call(this,a),this.resizeSearch(),f&&this.$search.trigger("focus")},d.prototype.handleSearch=function(){var u;this.resizeSearch(),this._keyUpPrevented||(u=this.$search.val(),this.trigger("query",{term:u})),this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(u,a){this.trigger("unselect",{data:a}),this.$search.val(a.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var u="100%";this.$search.attr("placeholder")===""&&(u=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",u)},d}),z.define("select2/selection/selectionCss",["../utils"],function(v){function w(){}return w.prototype.render=function(u){var d=u.call(this),u=this.options.get("selectionCssClass")||"";return u.indexOf(":all:")!==-1&&(u=u.replace(":all:",""),v.copyNonInternalCssClasses(d[0],this.$element[0])),d.addClass(u),d},w}),z.define("select2/selection/eventRelay",["jquery"],function(v){function w(){}return w.prototype.bind=function(g,d,u){var a=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],p=["opening","closing","selecting","unselecting","clearing"];g.call(this,d,u),d.on("*",function(T,E){var C;f.indexOf(T)!==-1&&(E=E||{},C=v.Event("select2:"+T,{params:E}),a.$element.trigger(C),p.indexOf(T)!==-1&&(E.prevented=C.isDefaultPrevented()))})},w}),z.define("select2/translation",["jquery","require"],function(v,w){function g(d){this.dict=d||{}}return g.prototype.all=function(){return this.dict},g.prototype.get=function(d){return this.dict[d]},g.prototype.extend=function(d){this.dict=v.extend({},d.all(),this.dict)},g._cache={},g.loadPath=function(d){var u;return d in g._cache||(u=w(d),g._cache[d]=u),new g(g._cache[d])},g}),z.define("select2/diacritics",[],function(){return{"Ⓐ":"A",Ａ:"A",À:"A",Á:"A",Â:"A",Ầ:"A",Ấ:"A",Ẫ:"A",Ẩ:"A",Ã:"A",Ā:"A",Ă:"A",Ằ:"A",Ắ:"A",Ẵ:"A",Ẳ:"A",Ȧ:"A",Ǡ:"A",Ä:"A",Ǟ:"A",Ả:"A",Å:"A",Ǻ:"A",Ǎ:"A",Ȁ:"A",Ȃ:"A",Ạ:"A",Ậ:"A",Ặ:"A",Ḁ:"A",Ą:"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA",Æ:"AE",Ǽ:"AE",Ǣ:"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B",Ｂ:"B",Ḃ:"B",Ḅ:"B",Ḇ:"B","Ƀ":"B",Ƃ:"B",Ɓ:"B","Ⓒ":"C",Ｃ:"C",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",Ç:"C",Ḉ:"C",Ƈ:"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D",Ｄ:"D",Ḋ:"D",Ď:"D",Ḍ:"D",Ḑ:"D",Ḓ:"D",Ḏ:"D",Đ:"D",Ƌ:"D",Ɗ:"D",Ɖ:"D","Ꝺ":"D",Ǳ:"DZ",Ǆ:"DZ",ǲ:"Dz",ǅ:"Dz","Ⓔ":"E",Ｅ:"E",È:"E",É:"E",Ê:"E",Ề:"E",Ế:"E",Ễ:"E",Ể:"E",Ẽ:"E",Ē:"E",Ḕ:"E",Ḗ:"E",Ĕ:"E",Ė:"E",Ë:"E",Ẻ:"E",Ě:"E",Ȅ:"E",Ȇ:"E",Ẹ:"E",Ệ:"E",Ȩ:"E",Ḝ:"E",Ę:"E",Ḙ:"E",Ḛ:"E",Ɛ:"E",Ǝ:"E","Ⓕ":"F",Ｆ:"F",Ḟ:"F",Ƒ:"F","Ꝼ":"F","Ⓖ":"G",Ｇ:"G",Ǵ:"G",Ĝ:"G",Ḡ:"G",Ğ:"G",Ġ:"G",Ǧ:"G",Ģ:"G",Ǥ:"G",Ɠ:"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H",Ｈ:"H",Ĥ:"H",Ḣ:"H",Ḧ:"H",Ȟ:"H",Ḥ:"H",Ḩ:"H",Ḫ:"H",Ħ:"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I",Ｉ:"I",Ì:"I",Í:"I",Î:"I",Ĩ:"I",Ī:"I",Ĭ:"I",İ:"I",Ï:"I",Ḯ:"I",Ỉ:"I",Ǐ:"I",Ȉ:"I",Ȋ:"I",Ị:"I",Į:"I",Ḭ:"I",Ɨ:"I","Ⓙ":"J",Ｊ:"J",Ĵ:"J","Ɉ":"J","Ⓚ":"K",Ｋ:"K",Ḱ:"K",Ǩ:"K",Ḳ:"K",Ķ:"K",Ḵ:"K",Ƙ:"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L",Ｌ:"L",Ŀ:"L",Ĺ:"L",Ľ:"L",Ḷ:"L",Ḹ:"L",Ļ:"L",Ḽ:"L",Ḻ:"L",Ł:"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L",Ǉ:"LJ",ǈ:"Lj","Ⓜ":"M",Ｍ:"M",Ḿ:"M",Ṁ:"M",Ṃ:"M","Ɱ":"M",Ɯ:"M","Ⓝ":"N",Ｎ:"N",Ǹ:"N",Ń:"N",Ñ:"N",Ṅ:"N",Ň:"N",Ṇ:"N",Ņ:"N",Ṋ:"N",Ṉ:"N","Ƞ":"N",Ɲ:"N","Ꞑ":"N","Ꞥ":"N",Ǌ:"NJ",ǋ:"Nj","Ⓞ":"O",Ｏ:"O",Ò:"O",Ó:"O",Ô:"O",Ồ:"O",Ố:"O",Ỗ:"O",Ổ:"O",Õ:"O",Ṍ:"O",Ȭ:"O",Ṏ:"O",Ō:"O",Ṑ:"O",Ṓ:"O",Ŏ:"O",Ȯ:"O",Ȱ:"O",Ö:"O",Ȫ:"O",Ỏ:"O",Ő:"O",Ǒ:"O",Ȍ:"O",Ȏ:"O",Ơ:"O",Ờ:"O",Ớ:"O",Ỡ:"O",Ở:"O",Ợ:"O",Ọ:"O",Ộ:"O",Ǫ:"O",Ǭ:"O",Ø:"O",Ǿ:"O",Ɔ:"O",Ɵ:"O","Ꝋ":"O","Ꝍ":"O",Œ:"OE",Ƣ:"OI","Ꝏ":"OO",Ȣ:"OU","Ⓟ":"P",Ｐ:"P",Ṕ:"P",Ṗ:"P",Ƥ:"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q",Ｑ:"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R",Ｒ:"R",Ŕ:"R",Ṙ:"R",Ř:"R",Ȑ:"R",Ȓ:"R",Ṛ:"R",Ṝ:"R",Ŗ:"R",Ṟ:"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S",Ｓ:"S","ẞ":"S",Ś:"S",Ṥ:"S",Ŝ:"S",Ṡ:"S",Š:"S",Ṧ:"S",Ṣ:"S",Ṩ:"S",Ș:"S",Ş:"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T",Ｔ:"T",Ṫ:"T",Ť:"T",Ṭ:"T",Ț:"T",Ţ:"T",Ṱ:"T",Ṯ:"T",Ŧ:"T",Ƭ:"T",Ʈ:"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U",Ｕ:"U",Ù:"U",Ú:"U",Û:"U",Ũ:"U",Ṹ:"U",Ū:"U",Ṻ:"U",Ŭ:"U",Ü:"U",Ǜ:"U",Ǘ:"U",Ǖ:"U",Ǚ:"U",Ủ:"U",Ů:"U",Ű:"U",Ǔ:"U",Ȕ:"U",Ȗ:"U",Ư:"U",Ừ:"U",Ứ:"U",Ữ:"U",Ử:"U",Ự:"U",Ụ:"U",Ṳ:"U",Ų:"U",Ṷ:"U",Ṵ:"U","Ʉ":"U","Ⓥ":"V",Ｖ:"V",Ṽ:"V",Ṿ:"V",Ʋ:"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W",Ｗ:"W",Ẁ:"W",Ẃ:"W",Ŵ:"W",Ẇ:"W",Ẅ:"W",Ẉ:"W","Ⱳ":"W","Ⓧ":"X",Ｘ:"X",Ẋ:"X",Ẍ:"X","Ⓨ":"Y",Ｙ:"Y",Ỳ:"Y",Ý:"Y",Ŷ:"Y",Ỹ:"Y",Ȳ:"Y",Ẏ:"Y",Ÿ:"Y",Ỷ:"Y",Ỵ:"Y",Ƴ:"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z",Ｚ:"Z",Ź:"Z",Ẑ:"Z",Ż:"Z",Ž:"Z",Ẓ:"Z",Ẕ:"Z",Ƶ:"Z",Ȥ:"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a",ａ:"a",ẚ:"a",à:"a",á:"a",â:"a",ầ:"a",ấ:"a",ẫ:"a",ẩ:"a",ã:"a",ā:"a",ă:"a",ằ:"a",ắ:"a",ẵ:"a",ẳ:"a",ȧ:"a",ǡ:"a",ä:"a",ǟ:"a",ả:"a",å:"a",ǻ:"a",ǎ:"a",ȁ:"a",ȃ:"a",ạ:"a",ậ:"a",ặ:"a",ḁ:"a",ą:"a","ⱥ":"a",ɐ:"a","ꜳ":"aa",æ:"ae",ǽ:"ae",ǣ:"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b",ｂ:"b",ḃ:"b",ḅ:"b",ḇ:"b",ƀ:"b",ƃ:"b",ɓ:"b","ⓒ":"c",ｃ:"c",ć:"c",ĉ:"c",ċ:"c",č:"c",ç:"c",ḉ:"c",ƈ:"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d",ｄ:"d",ḋ:"d",ď:"d",ḍ:"d",ḑ:"d",ḓ:"d",ḏ:"d",đ:"d",ƌ:"d",ɖ:"d",ɗ:"d","ꝺ":"d",ǳ:"dz",ǆ:"dz","ⓔ":"e",ｅ:"e",è:"e",é:"e",ê:"e",ề:"e",ế:"e",ễ:"e",ể:"e",ẽ:"e",ē:"e",ḕ:"e",ḗ:"e",ĕ:"e",ė:"e",ë:"e",ẻ:"e",ě:"e",ȅ:"e",ȇ:"e",ẹ:"e",ệ:"e",ȩ:"e",ḝ:"e",ę:"e",ḙ:"e",ḛ:"e","ɇ":"e",ɛ:"e",ǝ:"e","ⓕ":"f",ｆ:"f",ḟ:"f",ƒ:"f","ꝼ":"f","ⓖ":"g",ｇ:"g",ǵ:"g",ĝ:"g",ḡ:"g",ğ:"g",ġ:"g",ǧ:"g",ģ:"g",ǥ:"g",ɠ:"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h",ｈ:"h",ĥ:"h",ḣ:"h",ḧ:"h",ȟ:"h",ḥ:"h",ḩ:"h",ḫ:"h",ẖ:"h",ħ:"h","ⱨ":"h","ⱶ":"h",ɥ:"h",ƕ:"hv","ⓘ":"i",ｉ:"i",ì:"i",í:"i",î:"i",ĩ:"i",ī:"i",ĭ:"i",ï:"i",ḯ:"i",ỉ:"i",ǐ:"i",ȉ:"i",ȋ:"i",ị:"i",į:"i",ḭ:"i",ɨ:"i",ı:"i","ⓙ":"j",ｊ:"j",ĵ:"j",ǰ:"j","ɉ":"j","ⓚ":"k",ｋ:"k",ḱ:"k",ǩ:"k",ḳ:"k",ķ:"k",ḵ:"k",ƙ:"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l",ｌ:"l",ŀ:"l",ĺ:"l",ľ:"l",ḷ:"l",ḹ:"l",ļ:"l",ḽ:"l",ḻ:"l",ſ:"l",ł:"l",ƚ:"l",ɫ:"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l",ǉ:"lj","ⓜ":"m",ｍ:"m",ḿ:"m",ṁ:"m",ṃ:"m",ɱ:"m",ɯ:"m","ⓝ":"n",ｎ:"n",ǹ:"n",ń:"n",ñ:"n",ṅ:"n",ň:"n",ṇ:"n",ņ:"n",ṋ:"n",ṉ:"n",ƞ:"n",ɲ:"n",ŉ:"n","ꞑ":"n","ꞥ":"n",ǌ:"nj","ⓞ":"o",ｏ:"o",ò:"o",ó:"o",ô:"o",ồ:"o",ố:"o",ỗ:"o",ổ:"o",õ:"o",ṍ:"o",ȭ:"o",ṏ:"o",ō:"o",ṑ:"o",ṓ:"o",ŏ:"o",ȯ:"o",ȱ:"o",ö:"o",ȫ:"o",ỏ:"o",ő:"o",ǒ:"o",ȍ:"o",ȏ:"o",ơ:"o",ờ:"o",ớ:"o",ỡ:"o",ở:"o",ợ:"o",ọ:"o",ộ:"o",ǫ:"o",ǭ:"o",ø:"o",ǿ:"o",ɔ:"o","ꝋ":"o","ꝍ":"o",ɵ:"o",œ:"oe",ƣ:"oi",ȣ:"ou","ꝏ":"oo","ⓟ":"p",ｐ:"p",ṕ:"p",ṗ:"p",ƥ:"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q",ｑ:"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r",ｒ:"r",ŕ:"r",ṙ:"r",ř:"r",ȑ:"r",ȓ:"r",ṛ:"r",ṝ:"r",ŗ:"r",ṟ:"r","ɍ":"r",ɽ:"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s",ｓ:"s",ß:"s",ś:"s",ṥ:"s",ŝ:"s",ṡ:"s",š:"s",ṧ:"s",ṣ:"s",ṩ:"s",ș:"s",ş:"s","ȿ":"s","ꞩ":"s","ꞅ":"s",ẛ:"s","ⓣ":"t",ｔ:"t",ṫ:"t",ẗ:"t",ť:"t",ṭ:"t",ț:"t",ţ:"t",ṱ:"t",ṯ:"t",ŧ:"t",ƭ:"t",ʈ:"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u",ｕ:"u",ù:"u",ú:"u",û:"u",ũ:"u",ṹ:"u",ū:"u",ṻ:"u",ŭ:"u",ü:"u",ǜ:"u",ǘ:"u",ǖ:"u",ǚ:"u",ủ:"u",ů:"u",ű:"u",ǔ:"u",ȕ:"u",ȗ:"u",ư:"u",ừ:"u",ứ:"u",ữ:"u",ử:"u",ự:"u",ụ:"u",ṳ:"u",ų:"u",ṷ:"u",ṵ:"u",ʉ:"u","ⓥ":"v",ｖ:"v",ṽ:"v",ṿ:"v",ʋ:"v","ꝟ":"v",ʌ:"v","ꝡ":"vy","ⓦ":"w",ｗ:"w",ẁ:"w",ẃ:"w",ŵ:"w",ẇ:"w",ẅ:"w",ẘ:"w",ẉ:"w","ⱳ":"w","ⓧ":"x",ｘ:"x",ẋ:"x",ẍ:"x","ⓨ":"y",ｙ:"y",ỳ:"y",ý:"y",ŷ:"y",ỹ:"y",ȳ:"y",ẏ:"y",ÿ:"y",ỷ:"y",ẙ:"y",ỵ:"y",ƴ:"y","ɏ":"y","ỿ":"y","ⓩ":"z",ｚ:"z",ź:"z",ẑ:"z",ż:"z",ž:"z",ẓ:"z",ẕ:"z",ƶ:"z",ȥ:"z","ɀ":"z","ⱬ":"z","ꝣ":"z",Ά:"Α",Έ:"Ε",Ή:"Η",Ί:"Ι",Ϊ:"Ι",Ό:"Ο",Ύ:"Υ",Ϋ:"Υ",Ώ:"Ω",ά:"α",έ:"ε",ή:"η",ί:"ι",ϊ:"ι",ΐ:"ι",ό:"ο",ύ:"υ",ϋ:"υ",ΰ:"υ",ώ:"ω",ς:"σ","’":"'"}}),z.define("select2/data/base",["../utils"],function(v){function w(g,d){w.__super__.constructor.call(this)}return v.Extend(w,v.Observable),w.prototype.current=function(g){throw new Error("The `current` method must be defined in child classes.")},w.prototype.query=function(g,d){throw new Error("The `query` method must be defined in child classes.")},w.prototype.bind=function(g,d){},w.prototype.destroy=function(){},w.prototype.generateResultId=function(g,d){return g=g.id+"-result-",g+=v.generateChars(4),d.id!=null?g+="-"+d.id.toString():g+="-"+v.generateChars(4),g},w}),z.define("select2/data/select",["./base","../utils","jquery"],function(v,w,g){function d(u,a){this.$element=u,this.options=a,d.__super__.constructor.call(this)}return w.Extend(d,v),d.prototype.current=function(u){var a=this;u(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(f){return a.item(g(f))}))},d.prototype.select=function(u){var a,f=this;if(u.selected=!0,u.element!=null&&u.element.tagName.toLowerCase()==="option")return u.element.selected=!0,void this.$element.trigger("input").trigger("change");this.$element.prop("multiple")?this.current(function(p){var T=[];(u=[u]).push.apply(u,p);for(var E=0;E<u.length;E++){var C=u[E].id;T.indexOf(C)===-1&&T.push(C)}f.$element.val(T),f.$element.trigger("input").trigger("change")}):(a=u.id,this.$element.val(a),this.$element.trigger("input").trigger("change"))},d.prototype.unselect=function(u){var a=this;if(this.$element.prop("multiple")){if(u.selected=!1,u.element!=null&&u.element.tagName.toLowerCase()==="option")return u.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(f){for(var p=[],T=0;T<f.length;T++){var E=f[T].id;E!==u.id&&p.indexOf(E)===-1&&p.push(E)}a.$element.val(p),a.$element.trigger("input").trigger("change")})}},d.prototype.bind=function(u,a){var f=this;(this.container=u).on("select",function(p){f.select(p.data)}),u.on("unselect",function(p){f.unselect(p.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){w.RemoveData(this)})},d.prototype.query=function(u,a){var f=[],p=this;this.$element.children().each(function(){var T;this.tagName.toLowerCase()!=="option"&&this.tagName.toLowerCase()!=="optgroup"||(T=g(this),T=p.item(T),(T=p.matches(u,T))!==null&&f.push(T))}),a({results:f})},d.prototype.addOptions=function(u){this.$element.append(u)},d.prototype.option=function(u){var a;return u.children?(a=document.createElement("optgroup")).label=u.text:(a=document.createElement("option")).textContent!==void 0?a.textContent=u.text:a.innerText=u.text,u.id!==void 0&&(a.value=u.id),u.disabled&&(a.disabled=!0),u.selected&&(a.selected=!0),u.title&&(a.title=u.title),u=this._normalizeItem(u),u.element=a,w.StoreData(a,"data",u),g(a)},d.prototype.item=function(u){var a={};if((a=w.GetData(u[0],"data"))!=null)return a;var f=u[0];if(f.tagName.toLowerCase()==="option")a={id:u.val(),text:u.text(),disabled:u.prop("disabled"),selected:u.prop("selected"),title:u.prop("title")};else if(f.tagName.toLowerCase()==="optgroup"){a={text:u.prop("label"),children:[],title:u.prop("title")};for(var p=u.children("option"),T=[],E=0;E<p.length;E++){var C=g(p[E]),C=this.item(C);T.push(C)}a.children=T}return(a=this._normalizeItem(a)).element=u[0],w.StoreData(u[0],"data",a),a},d.prototype._normalizeItem=function(u){return u!==Object(u)&&(u={id:u,text:u}),(u=g.extend({},{text:""},u)).id!=null&&(u.id=u.id.toString()),u.text!=null&&(u.text=u.text.toString()),u._resultId==null&&u.id&&this.container!=null&&(u._resultId=this.generateResultId(this.container,u)),g.extend({},{selected:!1,disabled:!1},u)},d.prototype.matches=function(u,a){return this.options.get("matcher")(u,a)},d}),z.define("select2/data/array",["./select","../utils","jquery"],function(v,w,g){function d(u,a){this._dataToConvert=a.get("data")||[],d.__super__.constructor.call(this,u,a)}return w.Extend(d,v),d.prototype.bind=function(u,a){d.__super__.bind.call(this,u,a),this.addOptions(this.convertToOptions(this._dataToConvert))},d.prototype.select=function(u){var a=this.$element.find("option").filter(function(f,p){return p.value==u.id.toString()});a.length===0&&(a=this.option(u),this.addOptions(a)),d.__super__.select.call(this,u)},d.prototype.convertToOptions=function(u){for(var a=this,f=this.$element.find("option"),p=f.map(function(){return a.item(g(this)).id}).get(),T=[],E=0;E<u.length;E++){var C,M,L=this._normalizeItem(u[E]);0<=p.indexOf(L.id)?(C=f.filter(function(oe){return function(){return g(this).val()==oe.id}}(L)),M=this.item(C),M=g.extend(!0,{},L,M),M=this.option(M),C.replaceWith(M)):(M=this.option(L),L.children&&(L=this.convertToOptions(L.children),M.append(L)),T.push(M))}return T},d}),z.define("select2/data/ajax",["./array","../utils","jquery"],function(v,w,g){function d(u,a){this.ajaxOptions=this._applyDefaults(a.get("ajax")),this.ajaxOptions.processResults!=null&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,u,a)}return w.Extend(d,v),d.prototype._applyDefaults=function(u){var a={data:function(f){return g.extend({},f,{q:f.term})},transport:function(f,p,T){return f=g.ajax(f),f.then(p),f.fail(T),f}};return g.extend({},a,u,!0)},d.prototype.processResults=function(u){return u},d.prototype.query=function(u,a){var f=this;this._request!=null&&(typeof this._request.abort=="function"&&this._request.abort(),this._request=null);var p=g.extend({type:"GET"},this.ajaxOptions);function T(){var E=p.transport(p,function(C){C=f.processResults(C,u),f.options.get("debug")&&window.console&&console.error&&(C&&C.results&&Array.isArray(C.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),a(C)},function(){"status"in E&&(E.status===0||E.status==="0")||f.trigger("results:message",{message:"errorLoading"})});f._request=E}typeof p.url=="function"&&(p.url=p.url.call(this.$element,u)),typeof p.data=="function"&&(p.data=p.data.call(this.$element,u)),this.ajaxOptions.delay&&u.term!=null?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(T,this.ajaxOptions.delay)):T()},d}),z.define("select2/data/tags",["jquery"],function(v){function w(g,d,u){var a=u.get("tags"),f=u.get("createTag");if(f!==void 0&&(this.createTag=f),f=u.get("insertTag"),f!==void 0&&(this.insertTag=f),g.call(this,d,u),Array.isArray(a))for(var p=0;p<a.length;p++){var T=a[p],T=this._normalizeItem(T),T=this.option(T);this.$element.append(T)}}return w.prototype.query=function(g,d,u){var a=this;this._removeOldTags(),d.term!=null&&d.page==null?g.call(this,d,function f(p,T){for(var E=p.results,C=0;C<E.length;C++){var M=E[C],L=M.children!=null&&!f({results:M.children},!0);if((M.text||"").toUpperCase()===(d.term||"").toUpperCase()||L)return!T&&(p.data=E,void u(p))}if(T)return!0;var oe,pe=a.createTag(d);pe!=null&&((oe=a.option(pe)).attr("data-select2-tag","true"),a.addOptions([oe]),a.insertTag(E,pe)),p.results=E,u(p)}):g.call(this,d,u)},w.prototype.createTag=function(g,d){return d.term==null?null:(d=d.term.trim(),d===""?null:{id:d,text:d})},w.prototype.insertTag=function(g,d,u){d.unshift(u)},w.prototype._removeOldTags=function(g){this.$element.find("option[data-select2-tag]").each(function(){this.selected||v(this).remove()})},w}),z.define("select2/data/tokenizer",["jquery"],function(v){function w(g,d,u){var a=u.get("tokenizer");a!==void 0&&(this.tokenizer=a),g.call(this,d,u)}return w.prototype.bind=function(g,d,u){g.call(this,d,u),this.$search=d.dropdown.$search||d.selection.$search||u.find(".select2-search__field")},w.prototype.query=function(g,d,u){var a=this;d.term=d.term||"";var f=this.tokenizer(d,this.options,function(p){var T,E=a._normalizeItem(p);a.$element.find("option").filter(function(){return v(this).val()===E.id}).length||((T=a.option(E)).attr("data-select2-tag",!0),a._removeOldTags(),a.addOptions([T])),T=E,a.trigger("select",{data:T})});f.term!==d.term&&(this.$search.length&&(this.$search.val(f.term),this.$search.trigger("focus")),d.term=f.term),g.call(this,d,u)},w.prototype.tokenizer=function(g,d,u,a){for(var f=u.get("tokenSeparators")||[],p=d.term,T=0,E=this.createTag||function(M){return{id:M.term,text:M.term}};T<p.length;){var C=p[T];f.indexOf(C)!==-1?(C=p.substr(0,T),(C=E(v.extend({},d,{term:C})))!=null?(a(C),p=p.substr(T+1)||"",T=0):T++):T++}return{term:p}},w}),z.define("select2/data/minimumInputLength",[],function(){function v(w,g,d){this.minimumInputLength=d.get("minimumInputLength"),w.call(this,g,d)}return v.prototype.query=function(w,g,d){g.term=g.term||"",g.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:g.term,params:g}}):w.call(this,g,d)},v}),z.define("select2/data/maximumInputLength",[],function(){function v(w,g,d){this.maximumInputLength=d.get("maximumInputLength"),w.call(this,g,d)}return v.prototype.query=function(w,g,d){g.term=g.term||"",0<this.maximumInputLength&&g.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:g.term,params:g}}):w.call(this,g,d)},v}),z.define("select2/data/maximumSelectionLength",[],function(){function v(w,g,d){this.maximumSelectionLength=d.get("maximumSelectionLength"),w.call(this,g,d)}return v.prototype.bind=function(w,g,d){var u=this;w.call(this,g,d),g.on("select",function(){u._checkIfMaximumSelected()})},v.prototype.query=function(w,g,d){var u=this;this._checkIfMaximumSelected(function(){w.call(u,g,d)})},v.prototype._checkIfMaximumSelected=function(w,g){var d=this;this.current(function(u){u=u!=null?u.length:0,0<d.maximumSelectionLength&&u>=d.maximumSelectionLength?d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):g&&g()})},v}),z.define("select2/dropdown",["jquery","./utils"],function(v,w){function g(d,u){this.$element=d,this.options=u,g.__super__.constructor.call(this)}return w.Extend(g,w.Observable),g.prototype.render=function(){var d=v('<span class="select2-dropdown"><span class="select2-results"></span></span>');return d.attr("dir",this.options.get("dir")),this.$dropdown=d},g.prototype.bind=function(){},g.prototype.position=function(d,u){},g.prototype.destroy=function(){this.$dropdown.remove()},g}),z.define("select2/dropdown/search",["jquery"],function(v){function w(){}return w.prototype.render=function(a){var d=a.call(this),u=this.options.get("translations").get("search"),a=v('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=a,this.$search=a.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",u()),d.prepend(a),d},w.prototype.bind=function(g,d,u){var a=this,f=d.id+"-results";g.call(this,d,u),this.$search.on("keydown",function(p){a.trigger("keypress",p),a._keyUpPrevented=p.isDefaultPrevented()}),this.$search.on("input",function(p){v(this).off("keyup")}),this.$search.on("keyup input",function(p){a.handleSearch(p)}),d.on("open",function(){a.$search.attr("tabindex",0),a.$search.attr("aria-controls",f),a.$search.trigger("focus"),window.setTimeout(function(){a.$search.trigger("focus")},0)}),d.on("close",function(){a.$search.attr("tabindex",-1),a.$search.removeAttr("aria-controls"),a.$search.removeAttr("aria-activedescendant"),a.$search.val(""),a.$search.trigger("blur")}),d.on("focus",function(){d.isOpen()||a.$search.trigger("focus")}),d.on("results:all",function(p){p.query.term!=null&&p.query.term!==""||(a.showSearch(p)?a.$searchContainer[0].classList.remove("select2-search--hide"):a.$searchContainer[0].classList.add("select2-search--hide"))}),d.on("results:focus",function(p){p.data._resultId?a.$search.attr("aria-activedescendant",p.data._resultId):a.$search.removeAttr("aria-activedescendant")})},w.prototype.handleSearch=function(g){var d;this._keyUpPrevented||(d=this.$search.val(),this.trigger("query",{term:d})),this._keyUpPrevented=!1},w.prototype.showSearch=function(g,d){return!0},w}),z.define("select2/dropdown/hidePlaceholder",[],function(){function v(w,g,d,u){this.placeholder=this.normalizePlaceholder(d.get("placeholder")),w.call(this,g,d,u)}return v.prototype.append=function(w,g){g.results=this.removePlaceholder(g.results),w.call(this,g)},v.prototype.normalizePlaceholder=function(w,g){return g=typeof g=="string"?{id:"",text:g}:g},v.prototype.removePlaceholder=function(w,g){for(var d=g.slice(0),u=g.length-1;0<=u;u--){var a=g[u];this.placeholder.id===a.id&&d.splice(u,1)}return d},v}),z.define("select2/dropdown/infiniteScroll",["jquery"],function(v){function w(g,d,u,a){this.lastParams={},g.call(this,d,u,a),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return w.prototype.append=function(g,d){this.$loadingMore.remove(),this.loading=!1,g.call(this,d),this.showLoadingMore(d)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},w.prototype.bind=function(g,d,u){var a=this;g.call(this,d,u),d.on("query",function(f){a.lastParams=f,a.loading=!0}),d.on("query:append",function(f){a.lastParams=f,a.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},w.prototype.loadMoreIfNeeded=function(){var g=v.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&g&&(g=this.$results.offset().top+this.$results.outerHeight(!1),this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=g+50&&this.loadMore())},w.prototype.loadMore=function(){this.loading=!0;var g=v.extend({},{page:1},this.lastParams);g.page++,this.trigger("query:append",g)},w.prototype.showLoadingMore=function(g,d){return d.pagination&&d.pagination.more},w.prototype.createLoadingMore=function(){var g=v('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),d=this.options.get("translations").get("loadingMore");return g.html(d(this.lastParams)),g},w}),z.define("select2/dropdown/attachBody",["jquery","../utils"],function(v,w){function g(d,u,a){this.$dropdownParent=v(a.get("dropdownParent")||document.body),d.call(this,u,a)}return g.prototype.bind=function(d,u,a){var f=this;d.call(this,u,a),u.on("open",function(){f._showDropdown(),f._attachPositioningHandler(u),f._bindContainerResultHandlers(u)}),u.on("close",function(){f._hideDropdown(),f._detachPositioningHandler(u)}),this.$dropdownContainer.on("mousedown",function(p){p.stopPropagation()})},g.prototype.destroy=function(d){d.call(this),this.$dropdownContainer.remove()},g.prototype.position=function(d,u,a){u.attr("class",a.attr("class")),u[0].classList.remove("select2"),u[0].classList.add("select2-container--open"),u.css({position:"absolute",top:-999999}),this.$container=a},g.prototype.render=function(a){var u=v("<span></span>"),a=a.call(this);return u.append(a),this.$dropdownContainer=u},g.prototype._hideDropdown=function(d){this.$dropdownContainer.detach()},g.prototype._bindContainerResultHandlers=function(d,u){var a;this._containerResultsHandlersBound||(a=this,u.on("results:all",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("results:append",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("results:message",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("select",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("unselect",function(){a._positionDropdown(),a._resizeDropdown()}),this._containerResultsHandlersBound=!0)},g.prototype._attachPositioningHandler=function(d,E){var a=this,f="scroll.select2."+E.id,p="resize.select2."+E.id,T="orientationchange.select2."+E.id,E=this.$container.parents().filter(w.hasScroll);E.each(function(){w.StoreData(this,"select2-scroll-position",{x:v(this).scrollLeft(),y:v(this).scrollTop()})}),E.on(f,function(C){var M=w.GetData(this,"select2-scroll-position");v(this).scrollTop(M.y)}),v(window).on(f+" "+p+" "+T,function(C){a._positionDropdown(),a._resizeDropdown()})},g.prototype._detachPositioningHandler=function(d,p){var a="scroll.select2."+p.id,f="resize.select2."+p.id,p="orientationchange.select2."+p.id;this.$container.parents().filter(w.hasScroll).off(a),v(window).off(a+" "+f+" "+p)},g.prototype._positionDropdown=function(){var C=v(window),d=this.$dropdown[0].classList.contains("select2-dropdown--above"),u=this.$dropdown[0].classList.contains("select2-dropdown--below"),a=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var p={height:this.$container.outerHeight(!1)};p.top=f.top,p.bottom=f.top+p.height;var T=this.$dropdown.outerHeight(!1),M=C.scrollTop(),L=C.scrollTop()+C.height(),E=M<f.top-T,C=L>f.bottom+T,M={left:f.left,top:p.bottom},L=this.$dropdownParent;L.css("position")==="static"&&(L=L.offsetParent()),f={top:0,left:0},(v.contains(document.body,L[0])||L[0].isConnected)&&(f=L.offset()),M.top-=f.top,M.left-=f.left,d||u||(a="below"),C||!E||d?!E&&C&&d&&(a="below"):a="above",(a=="above"||d&&a!=="below")&&(M.top=p.top-f.top-T),a!=null&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+a),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+a)),this.$dropdownContainer.css(M)},g.prototype._resizeDropdown=function(){var d={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(d.minWidth=d.width,d.position="relative",d.width="auto"),this.$dropdown.css(d)},g.prototype._showDropdown=function(d){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},g}),z.define("select2/dropdown/minimumResultsForSearch",[],function(){function v(w,g,d,u){this.minimumResultsForSearch=d.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),w.call(this,g,d,u)}return v.prototype.showSearch=function(w,g){return!(function d(u){for(var a=0,f=0;f<u.length;f++){var p=u[f];p.children?a+=d(p.children):a++}return a}(g.data.results)<this.minimumResultsForSearch)&&w.call(this,g)},v}),z.define("select2/dropdown/selectOnClose",["../utils"],function(v){function w(){}return w.prototype.bind=function(g,d,u){var a=this;g.call(this,d,u),d.on("close",function(f){a._handleSelectOnClose(f)})},w.prototype._handleSelectOnClose=function(g,d){if(d&&d.originalSelect2Event!=null){var u=d.originalSelect2Event;if(u._type==="select"||u._type==="unselect")return}u=this.getHighlightedResults(),u.length<1||(u=v.GetData(u[0],"data")).element!=null&&u.element.selected||u.element==null&&u.selected||this.trigger("select",{data:u})},w}),z.define("select2/dropdown/closeOnSelect",[],function(){function v(){}return v.prototype.bind=function(w,g,d){var u=this;w.call(this,g,d),g.on("select",function(a){u._selectTriggered(a)}),g.on("unselect",function(a){u._selectTriggered(a)})},v.prototype._selectTriggered=function(w,g){var d=g.originalEvent;d&&(d.ctrlKey||d.metaKey)||this.trigger("close",{originalEvent:d,originalSelect2Event:g})},v}),z.define("select2/dropdown/dropdownCss",["../utils"],function(v){function w(){}return w.prototype.render=function(u){var d=u.call(this),u=this.options.get("dropdownCssClass")||"";return u.indexOf(":all:")!==-1&&(u=u.replace(":all:",""),v.copyNonInternalCssClasses(d[0],this.$element[0])),d.addClass(u),d},w}),z.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(v){function w(){}return w.prototype.highlightFirstItem=function(g){var d=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(0<d.length){var u=d.first(),d=v.GetData(u[0],"data").element;if(d&&d.getAttribute&&d.getAttribute("data-select2-tag")==="true")return void u.trigger("mouseenter")}g.call(this)},w}),z.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(g){var w=g.input.length-g.maximum,g="Please delete "+w+" character";return w!=1&&(g+="s"),g},inputTooShort:function(v){return"Please enter "+(v.minimum-v.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(v){var w="You can only select "+v.maximum+" item";return v.maximum!=1&&(w+="s"),w},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),z.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(v,w,g,d,u,a,f,p,T,E,C,M,L,oe,pe,Ce,Xe,An,D,W,q,Q,ue,Ee,ie,y,I,R,P,x,U){function j(){this.reset()}return j.prototype.apply=function(S){var N;(S=v.extend(!0,{},this.defaults,S)).dataAdapter==null&&(S.ajax!=null?S.dataAdapter=pe:S.data!=null?S.dataAdapter=oe:S.dataAdapter=L,0<S.minimumInputLength&&(S.dataAdapter=E.Decorate(S.dataAdapter,An)),0<S.maximumInputLength&&(S.dataAdapter=E.Decorate(S.dataAdapter,D)),0<S.maximumSelectionLength&&(S.dataAdapter=E.Decorate(S.dataAdapter,W)),S.tags&&(S.dataAdapter=E.Decorate(S.dataAdapter,Ce)),S.tokenSeparators==null&&S.tokenizer==null||(S.dataAdapter=E.Decorate(S.dataAdapter,Xe))),S.resultsAdapter==null&&(S.resultsAdapter=w,S.ajax!=null&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,Ee)),S.placeholder!=null&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,ue)),S.selectOnClose&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,I)),S.tags&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,x))),S.dropdownAdapter==null&&(S.multiple?S.dropdownAdapter=q:(N=E.Decorate(q,Q),S.dropdownAdapter=N),S.minimumResultsForSearch!==0&&(S.dropdownAdapter=E.Decorate(S.dropdownAdapter,y)),S.closeOnSelect&&(S.dropdownAdapter=E.Decorate(S.dropdownAdapter,R)),S.dropdownCssClass!=null&&(S.dropdownAdapter=E.Decorate(S.dropdownAdapter,P)),S.dropdownAdapter=E.Decorate(S.dropdownAdapter,ie)),S.selectionAdapter==null&&(S.multiple?S.selectionAdapter=d:S.selectionAdapter=g,S.placeholder!=null&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,u)),S.allowClear&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,a)),S.multiple&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,f)),S.selectionCssClass!=null&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,p)),S.selectionAdapter=E.Decorate(S.selectionAdapter,T)),S.language=this._resolveLanguage(S.language),S.language.push("en");for(var O=[],B=0;B<S.language.length;B++){var F=S.language[B];O.indexOf(F)===-1&&O.push(F)}return S.language=O,S.translations=this._processTranslations(S.language,S.debug),S},j.prototype.reset=function(){function S(N){return N.replace(/[^\u0000-\u007E]/g,function(O){return M[O]||O})}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:E.escapeMarkup,language:{},matcher:function N(O,B){if(O.term==null||O.term.trim()==="")return B;if(B.children&&0<B.children.length){for(var F=v.extend(!0,{},B),H=B.children.length-1;0<=H;H--)N(O,B.children[H])==null&&F.children.splice(H,1);return 0<F.children.length?F:N(O,F)}var te=S(B.text).toUpperCase(),ae=S(O.term).toUpperCase();return-1<te.indexOf(ae)?B:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(N){return N},templateResult:function(N){return N.text},templateSelection:function(N){return N.text},theme:"default",width:"resolve"}},j.prototype.applyFromElement=function(S,H){var O=S.language,B=this.defaults.language,F=H.prop("lang"),H=H.closest("[lang]").prop("lang"),H=Array.prototype.concat.call(this._resolveLanguage(F),this._resolveLanguage(O),this._resolveLanguage(B),this._resolveLanguage(H));return S.language=H,S},j.prototype._resolveLanguage=function(S){if(!S)return[];if(v.isEmptyObject(S))return[];if(v.isPlainObject(S))return[S];for(var N,O=Array.isArray(S)?S:[S],B=[],F=0;F<O.length;F++)B.push(O[F]),typeof O[F]=="string"&&0<O[F].indexOf("-")&&(N=O[F].split("-")[0],B.push(N));return B},j.prototype._processTranslations=function(S,N){for(var O=new C,B=0;B<S.length;B++){var F=new C,H=S[B];if(typeof H=="string")try{F=C.loadPath(H)}catch{try{H=this.defaults.amdLanguageBase+H,F=C.loadPath(H)}catch{N&&window.console&&console.warn&&console.warn('Select2: The language file for "'+H+'" could not be automatically loaded. A fallback will be used instead.')}}else F=v.isPlainObject(H)?new C(H):H;O.extend(F)}return O},j.prototype.set=function(S,N){var O={};O[v.camelCase(S)]=N,O=E._convertData(O),v.extend(!0,this.defaults,O)},new j}),z.define("select2/options",["jquery","./defaults","./utils"],function(v,w,g){function d(u,a){this.options=u,a!=null&&this.fromElement(a),a!=null&&(this.options=w.applyFromElement(this.options,a)),this.options=w.apply(this.options)}return d.prototype.fromElement=function(u){var a=["select2"];this.options.multiple==null&&(this.options.multiple=u.prop("multiple")),this.options.disabled==null&&(this.options.disabled=u.prop("disabled")),this.options.autocomplete==null&&u.prop("autocomplete")&&(this.options.autocomplete=u.prop("autocomplete")),this.options.dir==null&&(u.prop("dir")?this.options.dir=u.prop("dir"):u.closest("[dir]").prop("dir")?this.options.dir=u.closest("[dir]").prop("dir"):this.options.dir="ltr"),u.prop("disabled",this.options.disabled),u.prop("multiple",this.options.multiple),g.GetData(u[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),g.StoreData(u[0],"data",g.GetData(u[0],"select2Tags")),g.StoreData(u[0],"tags",!0)),g.GetData(u[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),u.attr("ajax--url",g.GetData(u[0],"ajaxUrl")),g.StoreData(u[0],"ajax-Url",g.GetData(u[0],"ajaxUrl")));var f={};function p(oe,pe){return pe.toUpperCase()}for(var T=0;T<u[0].attributes.length;T++){var E=u[0].attributes[T].name,C="data-";E.substr(0,C.length)==C&&(E=E.substring(C.length),C=g.GetData(u[0],E),f[E.replace(/-([a-z])/g,p)]=C)}v.fn.jquery&&v.fn.jquery.substr(0,2)=="1."&&u[0].dataset&&(f=v.extend(!0,{},u[0].dataset,f));var M,L=v.extend(!0,{},g.GetData(u[0]),f);for(M in L=g._convertData(L))-1<a.indexOf(M)||(v.isPlainObject(this.options[M])?v.extend(this.options[M],L[M]):this.options[M]=L[M]);return this},d.prototype.get=function(u){return this.options[u]},d.prototype.set=function(u,a){this.options[u]=a},d}),z.define("select2/core",["jquery","./options","./utils","./keys"],function(v,w,g,d){var u=function(a,f){g.GetData(a[0],"select2")!=null&&g.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),f=f||{},this.options=new w(f,a),u.__super__.constructor.call(this);var p=a.attr("tabindex")||0;g.StoreData(a[0],"old-tabindex",p),a.attr("tabindex","-1"),f=this.options.get("dataAdapter"),this.dataAdapter=new f(a,this.options),p=this.render(),this._placeContainer(p),f=this.options.get("selectionAdapter"),this.selection=new f(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,p),f=this.options.get("dropdownAdapter"),this.dropdown=new f(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,p),p=this.options.get("resultsAdapter"),this.results=new p(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var T=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(E){T.trigger("selection:update",{data:E})}),a[0].classList.add("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),g.StoreData(a[0],"select2",this),a.data("select2",this)};return g.Extend(u,g.Observable),u.prototype._generateId=function(a){return"select2-"+(a.attr("id")!=null?a.attr("id"):a.attr("name")!=null?a.attr("name")+"-"+g.generateChars(2):g.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},u.prototype._placeContainer=function(a){a.insertAfter(this.$element);var f=this._resolveWidth(this.$element,this.options.get("width"));f!=null&&a.css("width",f)},u.prototype._resolveWidth=function(a,f){var p=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if(f=="resolve"){var T=this._resolveWidth(a,"style");return T??this._resolveWidth(a,"element")}if(f=="element")return T=a.outerWidth(!1),T<=0?"auto":T+"px";if(f!="style")return f!="computedstyle"?f:window.getComputedStyle(a[0]).width;if(a=a.attr("style"),typeof a!="string")return null;for(var E=a.split(";"),C=0,M=E.length;C<M;C+=1){var L=E[C].replace(/\s/g,"").match(p);if(L!==null&&1<=L.length)return L[1]}return null},u.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},u.prototype._registerDomEvents=function(){var a=this;this.$element.on("change.select2",function(){a.dataAdapter.current(function(f){a.trigger("selection:update",{data:f})})}),this.$element.on("focus.select2",function(f){a.trigger("focus",f)}),this._syncA=g.bind(this._syncAttributes,this),this._syncS=g.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(f){a._syncA(),a._syncS(f)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},u.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(f,p){a.trigger(f,p)})},u.prototype._registerSelectionEvents=function(){var a=this,f=["toggle","focus"];this.selection.on("toggle",function(){a.toggleDropdown()}),this.selection.on("focus",function(p){a.focus(p)}),this.selection.on("*",function(p,T){f.indexOf(p)===-1&&a.trigger(p,T)})},u.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(f,p){a.trigger(f,p)})},u.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(f,p){a.trigger(f,p)})},u.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container[0].classList.add("select2-container--open")}),this.on("close",function(){a.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){a.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){a.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){a.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(f){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(f,function(p){a.trigger("results:all",{data:p,query:f})})}),this.on("query:append",function(f){this.dataAdapter.query(f,function(p){a.trigger("results:append",{data:p,query:f})})}),this.on("keypress",function(f){var p=f.which;a.isOpen()?p===d.ESC||p===d.UP&&f.altKey?(a.close(f),f.preventDefault()):p===d.ENTER||p===d.TAB?(a.trigger("results:select",{}),f.preventDefault()):p===d.SPACE&&f.ctrlKey?(a.trigger("results:toggle",{}),f.preventDefault()):p===d.UP?(a.trigger("results:previous",{}),f.preventDefault()):p===d.DOWN&&(a.trigger("results:next",{}),f.preventDefault()):(p===d.ENTER||p===d.SPACE||p===d.DOWN&&f.altKey)&&(a.open(),f.preventDefault())})},u.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},u.prototype._isChangeMutation=function(a){var f=this;if(a.addedNodes&&0<a.addedNodes.length){for(var p=0;p<a.addedNodes.length;p++)if(a.addedNodes[p].selected)return!0}else{if(a.removedNodes&&0<a.removedNodes.length)return!0;if(Array.isArray(a))return a.some(function(T){return f._isChangeMutation(T)})}return!1},u.prototype._syncSubtree=function(f){var f=this._isChangeMutation(f),p=this;f&&this.dataAdapter.current(function(T){p.trigger("selection:update",{data:T})})},u.prototype.trigger=function(a,f){var p=u.__super__.trigger,T={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(f===void 0&&(f={}),a in T){var E=T[a],T={prevented:!1,name:a,args:f};if(p.call(this,E,T),T.prevented)return void(f.prevented=!0)}p.call(this,a,f)},u.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},u.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},u.prototype.close=function(a){this.isOpen()&&this.trigger("close",{originalEvent:a})},u.prototype.isEnabled=function(){return!this.isDisabled()},u.prototype.isDisabled=function(){return this.options.get("disabled")},u.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},u.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},u.prototype.focus=function(a){this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},u.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),a=!(a=a==null||a.length===0?[!0]:a)[0],this.$element.prop("disabled",a)},u.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(f){a=f}),a},u.prototype.val=function(a){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),a==null||a.length===0)return this.$element.val();a=a[0],Array.isArray(a)&&(a=a.map(function(f){return f.toString()})),this.$element.val(a).trigger("input").trigger("change")},u.prototype.destroy=function(){g.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",g.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),g.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},u.prototype.render=function(){var a=v('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return a.attr("dir",this.options.get("dir")),this.$container=a,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),g.StoreData(a[0],"element",this.$element),a},u}),z.define("jquery-mousewheel",["jquery"],function(v){return v}),z.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(v,w,g,d,u){var a;return v.fn.select2==null&&(a=["open","close","destroy"],v.fn.select2=function(f){if(typeof(f=f||{})=="object")return this.each(function(){var E=v.extend(!0,{},f);new g(v(this),E)}),this;if(typeof f!="string")throw new Error("Invalid arguments for Select2: "+f);var p,T=Array.prototype.slice.call(arguments,1);return this.each(function(){var E=u.GetData(this,"select2");E==null&&window.console&&console.error&&console.error("The select2('"+f+"') method was called on an element that is not using Select2."),p=E[f].apply(E,T)}),-1<a.indexOf(f)?this:p}),v.fn.select2.defaults==null&&(v.fn.select2.defaults=d),g}),{define:z.define,require:z.require});function X(v,w){return A.call(v,w)}function G(v,w){var g,d,u,a,f,p,T,E,C,M,L=w&&w.split("/"),oe=m.map,pe=oe&&oe["*"]||{};if(v){for(w=(v=v.split("/")).length-1,m.nodeIdCompat&&V.test(v[w])&&(v[w]=v[w].replace(V,"")),v[0].charAt(0)==="."&&L&&(v=L.slice(0,L.length-1).concat(v)),E=0;E<v.length;E++)(M=v[E])==="."?(v.splice(E,1),--E):M===".."&&(E===0||E===1&&v[2]===".."||v[E-1]===".."||0<E&&(v.splice(E-1,2),E-=2));v=v.join("/")}if((L||pe)&&oe){for(E=(g=v.split("/")).length;0<E;--E){if(d=g.slice(0,E).join("/"),L){for(C=L.length;0<C;--C)if(u=oe[L.slice(0,C).join("/")],u=u&&u[d]){a=u,f=E;break}}if(a)break;!p&&pe&&pe[d]&&(p=pe[d],T=E)}!a&&p&&(a=p,f=T),a&&(g.splice(0,f,a),v=g.join("/"))}return v}function ee(v,w){return function(){var g=k.call(arguments,0);return typeof g[0]!="string"&&g.length===1&&g.push(null),i.apply(r,g.concat([v,w]))}}function J(v){var w;if(X(h,v)&&(w=h[v],delete h[v],b[v]=!0,s.apply(r,w)),!X(c,v)&&!X(b,v))throw new Error("No "+v);return c[v]}function le(v){var w,g=v?v.indexOf("!"):-1;return-1<g&&(w=v.substring(0,g),v=v.substring(g+1,v.length)),[w,v]}function Se(v){return v?le(v):[]}var z=K.require("jquery.select2");return t.fn.select2.amd=K,z});function go(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function mo(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ne(r)?Qd(r):mo(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ne(t))return t;if(be(t))return t}}const Gd=/;(?![^(]*\))/g,Yd=/:([^]+)/,Jd=/\/\*.*?\*\//gs;function Qd(t){const e={};return t.replace(Jd,"").split(Gd).forEach(n=>{if(n){const r=n.split(Yd);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function yo(t){let e="";if(Ne(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=yo(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zd=go(Xd);function ic(t){return!!t||t===""}function eh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ys(t[r],e[r]);return n}function Ys(t,e){if(t===e)return!0;let n=wa(t),r=wa(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=br(t),r=br(e),n||r)return t===e;if(n=ne(t),r=ne(e),n||r)return n&&r?eh(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Ys(t[o],e[o]))return!1}}return String(t)===String(e)}function th(t,e){return t.findIndex(n=>Ys(n,e))}const oc=t=>Ne(t)?t:t==null?"":ne(t)||be(t)&&(t.toString===cc||!se(t.toString))?JSON.stringify(t,ac,2):String(t),ac=(t,e)=>e&&e.__v_isRef?ac(t,e.value):xn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Qs(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!ne(e)&&!uc(e)?String(e):e,Ie={},Dn=[],ht=()=>{},nh=()=>!1,rh=/^on[^a-z]/,Js=t=>rh.test(t),_o=t=>t.startsWith("onUpdate:"),Ke=Object.assign,vo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sh=Object.prototype.hasOwnProperty,he=(t,e)=>sh.call(t,e),ne=Array.isArray,xn=t=>Ur(t)==="[object Map]",Qs=t=>Ur(t)==="[object Set]",wa=t=>Ur(t)==="[object Date]",se=t=>typeof t=="function",Ne=t=>typeof t=="string",br=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",lc=t=>be(t)&&se(t.then)&&se(t.catch),cc=Object.prototype.toString,Ur=t=>cc.call(t),ih=t=>Ur(t).slice(8,-1),uc=t=>Ur(t)==="[object Object]",wo=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hs=go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},oh=/-(\w)/g,St=Xs(t=>t.replace(oh,(e,n)=>n?n.toUpperCase():"")),ah=/\B([A-Z])/g,Yn=Xs(t=>t.replace(ah,"-$1").toLowerCase()),Zs=Xs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ti=Xs(t=>t?`on${Zs(t)}`:""),Er=(t,e)=>!Object.is(t,e),fs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Is=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ts=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ba;const lh=()=>ba||(ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ct;class ch{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){ct=this}off(){ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function uh(t,e=ct){e&&e.active&&e.effects.push(t)}function dh(){return ct}const bo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},dc=t=>(t.w&Xt)>0,hc=t=>(t.n&Xt)>0,hh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xt},fh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];dc(s)&&!hc(s)?s.delete(t):e[n++]=s,s.w&=~Xt,s.n&=~Xt}e.length=n}},qi=new WeakMap;let lr=0,Xt=1;const Hi=30;let ut;const dn=Symbol(""),zi=Symbol("");class Eo{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,uh(this,r)}run(){if(!this.active)return this.fn();let e=ut,n=Wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ut,ut=this,Wt=!0,Xt=1<<++lr,lr<=Hi?hh(this):Ea(this),this.fn()}finally{lr<=Hi&&fh(this),Xt=1<<--lr,ut=this.parent,Wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(Ea(this),this.onStop&&this.onStop(),this.active=!1)}}function Ea(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Wt=!0;const fc=[];function Jn(){fc.push(Wt),Wt=!1}function Qn(){const t=fc.pop();Wt=t===void 0?!0:t}function Qe(t,e,n){if(Wt&&ut){let r=qi.get(t);r||qi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=bo()),pc(s)}}function pc(t,e){let n=!1;lr<=Hi?hc(t)||(t.n|=Xt,n=!dc(t)):n=!t.has(ut),n&&(t.add(ut),ut.deps.push(t))}function Dt(t,e,n,r,s,i){const o=qi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&ne(t)){const c=Number(r);o.forEach((h,m)=>{(m==="length"||m>=c)&&l.push(h)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":ne(t)?wo(n)&&l.push(o.get("length")):(l.push(o.get(dn)),xn(t)&&l.push(o.get(zi)));break;case"delete":ne(t)||(l.push(o.get(dn)),xn(t)&&l.push(o.get(zi)));break;case"set":xn(t)&&l.push(o.get(dn));break}if(l.length===1)l[0]&&Wi(l[0]);else{const c=[];for(const h of l)h&&c.push(...h);Wi(bo(c))}}function Wi(t,e){const n=ne(t)?t:[...t];for(const r of n)r.computed&&Ia(r);for(const r of n)r.computed||Ia(r)}function Ia(t,e){(t!==ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ph=go("__proto__,__v_isRef,__isVue"),gc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(br)),gh=Io(),mh=Io(!1,!0),yh=Io(!0),Ta=_h();function _h(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)Qe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Jn();const r=fe(this)[e].apply(this,n);return Qn(),r}}),t}function vh(t){const e=fe(this);return Qe(e,"has",t),e.hasOwnProperty(t)}function Io(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Lh:wc:e?vc:_c).get(r))return r;const o=ne(r);if(!t){if(o&&he(Ta,s))return Reflect.get(Ta,s,i);if(s==="hasOwnProperty")return vh}const l=Reflect.get(r,s,i);return(br(s)?gc.has(s):ph(s))||(t||Qe(r,"get",s),e)?l:Be(l)?o&&wo(s)?l:l.value:be(l)?t?bc(l):Fr(l):l}}const wh=mc(),bh=mc(!0);function mc(t=!1){return function(n,r,s,i){let o=n[r];if(Fn(o)&&Be(o)&&!Be(s))return!1;if(!t&&(!Ss(s)&&!Fn(s)&&(o=fe(o),s=fe(s)),!ne(n)&&Be(o)&&!Be(s)))return o.value=s,!0;const l=ne(n)&&wo(r)?Number(r)<n.length:he(n,r),c=Reflect.set(n,r,s,i);return n===fe(i)&&(l?Er(s,o)&&Dt(n,"set",r,s):Dt(n,"add",r,s)),c}}function Eh(t,e){const n=he(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Dt(t,"delete",e,void 0),r}function Ih(t,e){const n=Reflect.has(t,e);return(!br(e)||!gc.has(e))&&Qe(t,"has",e),n}function Th(t){return Qe(t,"iterate",ne(t)?"length":dn),Reflect.ownKeys(t)}const yc={get:gh,set:wh,deleteProperty:Eh,has:Ih,ownKeys:Th},Sh={get:yh,set(t,e){return!0},deleteProperty(t,e){return!0}},Ah=Ke({},yc,{get:mh,set:bh}),To=t=>t,ei=t=>Reflect.getPrototypeOf(t);function ts(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);n||(e!==i&&Qe(s,"get",e),Qe(s,"get",i));const{has:o}=ei(s),l=r?To:n?Co:Ir;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function ns(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return e||(t!==s&&Qe(r,"has",t),Qe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function rs(t,e=!1){return t=t.__v_raw,!e&&Qe(fe(t),"iterate",dn),Reflect.get(t,"size",t)}function Sa(t){t=fe(t);const e=fe(this);return ei(e).has.call(e,t)||(e.add(t),Dt(e,"add",t,t)),this}function Aa(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=ei(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Er(e,o)&&Dt(n,"set",t,e):Dt(n,"add",t,e),this}function Ca(t){const e=fe(this),{has:n,get:r}=ei(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Dt(e,"delete",t,void 0),i}function Ra(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&Dt(t,"clear",void 0,void 0),n}function ss(t,e){return function(r,s){const i=this,o=i.__v_raw,l=fe(o),c=e?To:t?Co:Ir;return!t&&Qe(l,"iterate",dn),o.forEach((h,m)=>r.call(s,c(h),c(m),i))}}function is(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=xn(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),m=n?To:e?Co:Ir;return!e&&Qe(i,"iterate",c?zi:dn),{next(){const{value:b,done:A}=h.next();return A?{value:b,done:A}:{value:l?[m(b[0]),m(b[1])]:m(b),done:A}},[Symbol.iterator](){return this}}}}function Mt(t){return function(...e){return t==="delete"?!1:this}}function Ch(){const t={get(i){return ts(this,i)},get size(){return rs(this)},has:ns,add:Sa,set:Aa,delete:Ca,clear:Ra,forEach:ss(!1,!1)},e={get(i){return ts(this,i,!1,!0)},get size(){return rs(this)},has:ns,add:Sa,set:Aa,delete:Ca,clear:Ra,forEach:ss(!1,!0)},n={get(i){return ts(this,i,!0)},get size(){return rs(this,!0)},has(i){return ns.call(this,i,!0)},add:Mt("add"),set:Mt("set"),delete:Mt("delete"),clear:Mt("clear"),forEach:ss(!0,!1)},r={get(i){return ts(this,i,!0,!0)},get size(){return rs(this,!0)},has(i){return ns.call(this,i,!0)},add:Mt("add"),set:Mt("set"),delete:Mt("delete"),clear:Mt("clear"),forEach:ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=is(i,!1,!1),n[i]=is(i,!0,!1),e[i]=is(i,!1,!0),r[i]=is(i,!0,!0)}),[t,n,e,r]}const[Rh,Oh,Ph,kh]=Ch();function So(t,e){const n=e?t?kh:Ph:t?Oh:Rh;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(he(n,s)&&s in r?n:r,s,i)}const Dh={get:So(!1,!1)},xh={get:So(!1,!0)},Nh={get:So(!0,!1)},_c=new WeakMap,vc=new WeakMap,wc=new WeakMap,Lh=new WeakMap;function $h(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mh(t){return t.__v_skip||!Object.isExtensible(t)?0:$h(ih(t))}function Fr(t){return Fn(t)?t:Ao(t,!1,yc,Dh,_c)}function Uh(t){return Ao(t,!1,Ah,xh,vc)}function bc(t){return Ao(t,!0,Sh,Nh,wc)}function Ao(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Mh(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Nn(t){return Fn(t)?Nn(t.__v_raw):!!(t&&t.__v_isReactive)}function Fn(t){return!!(t&&t.__v_isReadonly)}function Ss(t){return!!(t&&t.__v_isShallow)}function Ec(t){return Nn(t)||Fn(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Ic(t){return Is(t,"__v_skip",!0),t}const Ir=t=>be(t)?Fr(t):t,Co=t=>be(t)?bc(t):t;function Tc(t){Wt&&ut&&(t=fe(t),pc(t.dep||(t.dep=bo())))}function Sc(t,e){t=fe(t);const n=t.dep;n&&Wi(n)}function Be(t){return!!(t&&t.__v_isRef===!0)}function Fh(t){return Ac(t,!1)}function jh(t){return Ac(t,!0)}function Ac(t,e){return Be(t)?t:new Vh(t,e)}class Vh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:Ir(e)}get value(){return Tc(this),this._value}set value(e){const n=this.__v_isShallow||Ss(e)||Fn(e);e=n?e:fe(e),Er(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ir(e),Sc(this))}}function hn(t){return Be(t)?t.value:t}const Bh={get:(t,e,n)=>hn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Be(s)&&!Be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cc(t){return Nn(t)?t:new Proxy(t,Bh)}var Rc;class qh{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Rc]=!1,this._dirty=!0,this.effect=new Eo(e,()=>{this._dirty||(this._dirty=!0,Sc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return Tc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Rc="__v_isReadonly";function Hh(t,e,n=!1){let r,s;const i=se(t);return i?(r=t,s=ht):(r=t.get,s=t.set),new qh(r,s,i||!s,n)}function Kt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ti(i,e,n)}return s}function ft(t,e,n,r){if(se(t)){const i=Kt(t,e,n,r);return i&&lc(i)&&i.catch(o=>{ti(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ft(t[i],e,n,r));return s}function ti(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const h=i.ec;if(h){for(let m=0;m<h.length;m++)if(h[m](t,o,l)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Kt(c,null,10,[t,o,l]);return}}zh(t,n,s,r)}function zh(t,e,n,r=!0){console.error(t)}let Tr=!1,Ki=!1;const Ve=[];let bt=0;const Ln=[];let Rt=null,an=0;const Oc=Promise.resolve();let Ro=null;function Pc(t){const e=Ro||Oc;return t?e.then(this?t.bind(this):t):e}function Wh(t){let e=bt+1,n=Ve.length;for(;e<n;){const r=e+n>>>1;Sr(Ve[r])<t?e=r+1:n=r}return e}function Oo(t){(!Ve.length||!Ve.includes(t,Tr&&t.allowRecurse?bt+1:bt))&&(t.id==null?Ve.push(t):Ve.splice(Wh(t.id),0,t),kc())}function kc(){!Tr&&!Ki&&(Ki=!0,Ro=Oc.then(xc))}function Kh(t){const e=Ve.indexOf(t);e>bt&&Ve.splice(e,1)}function Gh(t){ne(t)?Ln.push(...t):(!Rt||!Rt.includes(t,t.allowRecurse?an+1:an))&&Ln.push(t),kc()}function Oa(t,e=Tr?bt+1:0){for(;e<Ve.length;e++){const n=Ve[e];n&&n.pre&&(Ve.splice(e,1),e--,n())}}function Dc(t){if(Ln.length){const e=[...new Set(Ln)];if(Ln.length=0,Rt){Rt.push(...e);return}for(Rt=e,Rt.sort((n,r)=>Sr(n)-Sr(r)),an=0;an<Rt.length;an++)Rt[an]();Rt=null,an=0}}const Sr=t=>t.id==null?1/0:t.id,Yh=(t,e)=>{const n=Sr(t)-Sr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function xc(t){Ki=!1,Tr=!0,Ve.sort(Yh);const e=ht;try{for(bt=0;bt<Ve.length;bt++){const n=Ve[bt];n&&n.active!==!1&&Kt(n,null,14)}}finally{bt=0,Ve.length=0,Dc(),Tr=!1,Ro=null,(Ve.length||Ln.length)&&xc()}}function Jh(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const m=`${o==="modelValue"?"model":o}Modifiers`,{number:b,trim:A}=r[m]||Ie;A&&(s=n.map(k=>Ne(k)?k.trim():k)),b&&(s=n.map(Ts))}let l,c=r[l=Ti(e)]||r[l=Ti(St(e))];!c&&i&&(c=r[l=Ti(Yn(e))]),c&&ft(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ft(h,t,6,s)}}function Nc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!se(t)){const c=h=>{const m=Nc(h,e,!0);m&&(l=!0,Ke(o,m))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(be(t)&&r.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):Ke(o,i),be(t)&&r.set(t,o),o)}function ni(t,e){return!t||!Js(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,Yn(e))||he(t,e))}let qe=null,Lc=null;function As(t){const e=qe;return qe=t,Lc=t&&t.type.__scopeId||null,e}function et(t,e=qe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ua(-1);const i=As(e);let o;try{o=t(...s)}finally{As(i),r._d&&Ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Si(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:c,emit:h,render:m,renderCache:b,data:A,setupState:k,ctx:V,inheritAttrs:K}=t;let X,G;const ee=As(t);try{if(n.shapeFlag&4){const le=s||r;X=vt(m.call(le,le,b,i,k,A,V)),G=c}else{const le=e;X=vt(le.length>1?le(i,{attrs:c,slots:l,emit:h}):le(i,null)),G=e.props?c:Qh(c)}}catch(le){fr.length=0,ti(le,t,1),X=we(Zt)}let J=X;if(G&&K!==!1){const le=Object.keys(G),{shapeFlag:Se}=J;le.length&&Se&7&&(o&&le.some(_o)&&(G=Xh(G,o)),J=jn(J,G))}return n.dirs&&(J=jn(J),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&(J.transition=n.transition),X=J,As(ee),X}const Qh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Js(n))&&((e||(e={}))[n]=t[n]);return e},Xh=(t,e)=>{const n={};for(const r in t)(!_o(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zh(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Pa(r,o,h):!!o;if(c&8){const m=e.dynamicProps;for(let b=0;b<m.length;b++){const A=m[b];if(o[A]!==r[A]&&!ni(h,A))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Pa(r,o,h):!0:!!o;return!1}function Pa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ni(n,i))return!0}return!1}function ef({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tf=t=>t.__isSuspense;function nf(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Gh(t)}function ps(t,e){if(Pe){let n=Pe.provides;const r=Pe.parent&&Pe.parent.provides;r===n&&(n=Pe.provides=Object.create(r)),n[t]=e}}function kt(t,e,n=!1){const r=Pe||qe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(r.proxy):e}}const os={};function gs(t,e,n){return $c(t,e,n)}function $c(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){const l=dh()===(Pe==null?void 0:Pe.scope)?Pe:null;let c,h=!1,m=!1;if(Be(t)?(c=()=>t.value,h=Ss(t)):Nn(t)?(c=()=>t,r=!0):ne(t)?(m=!0,h=t.some(J=>Nn(J)||Ss(J)),c=()=>t.map(J=>{if(Be(J))return J.value;if(Nn(J))return un(J);if(se(J))return Kt(J,l,2)})):se(t)?e?c=()=>Kt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return b&&b(),ft(t,l,3,[A])}:c=ht,e&&r){const J=c;c=()=>un(J())}let b,A=J=>{b=G.onStop=()=>{Kt(J,l,4)}},k;if(Cr)if(A=ht,e?n&&ft(e,l,3,[c(),m?[]:void 0,A]):c(),s==="sync"){const J=Zf();k=J.__watcherHandles||(J.__watcherHandles=[])}else return ht;let V=m?new Array(t.length).fill(os):os;const K=()=>{if(G.active)if(e){const J=G.run();(r||h||(m?J.some((le,Se)=>Er(le,V[Se])):Er(J,V)))&&(b&&b(),ft(e,l,3,[J,V===os?void 0:m&&V[0]===os?[]:V,A]),V=J)}else G.run()};K.allowRecurse=!!e;let X;s==="sync"?X=K:s==="post"?X=()=>Ge(K,l&&l.suspense):(K.pre=!0,l&&(K.id=l.uid),X=()=>Oo(K));const G=new Eo(c,X);e?n?K():V=G.run():s==="post"?Ge(G.run.bind(G),l&&l.suspense):G.run();const ee=()=>{G.stop(),l&&l.scope&&vo(l.scope.effects,G)};return k&&k.push(ee),ee}function rf(t,e,n){const r=this.proxy,s=Ne(t)?t.includes(".")?Mc(r,t):()=>r[t]:t.bind(r,r);let i;se(e)?i=e:(i=e.handler,n=e);const o=Pe;Vn(this);const l=$c(s,i.bind(r),n);return o?Vn(o):fn(),l}function Mc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function un(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))un(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)un(t[n],e);else if(Qs(t)||xn(t))t.forEach(n=>{un(n,e)});else if(uc(t))for(const n in t)un(t[n],e);return t}function Uc(t){return se(t)?{setup:t,name:t.name}:t}const dr=t=>!!t.type.__asyncLoader,Fc=t=>t.type.__isKeepAlive;function sf(t,e){jc(t,"a",e)}function of(t,e){jc(t,"da",e)}function jc(t,e,n=Pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ri(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Fc(s.parent.vnode)&&af(r,e,n,s),s=s.parent}}function af(t,e,n,r){const s=ri(e,t,r,!0);Vc(()=>{vo(r[e],s)},n)}function ri(t,e,n=Pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Jn(),Vn(n);const l=ft(e,n,t,o);return fn(),Qn(),l});return r?s.unshift(i):s.push(i),i}}const Lt=t=>(e,n=Pe)=>(!Cr||t==="sp")&&ri(t,(...r)=>e(...r),n),lf=Lt("bm"),cf=Lt("m"),uf=Lt("bu"),df=Lt("u"),hf=Lt("bum"),Vc=Lt("um"),ff=Lt("sp"),pf=Lt("rtg"),gf=Lt("rtc");function mf(t,e=Pe){ri("ec",t,e)}function hb(t,e){const n=qe;if(n===null)return t;const r=ai(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,c,h=Ie]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&un(l),s.push({dir:o,instance:r,value:l,oldValue:void 0,arg:c,modifiers:h}))}return t}function nn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Jn(),ft(c,n,8,[t.el,l,t,e]),Qn())}}const Bc="components";function yf(t,e){return vf(Bc,t,!0,e)||t}const _f=Symbol();function vf(t,e,n=!0,r=!1){const s=qe||Pe;if(s){const i=s.type;if(t===Bc){const l=Jf(i,!1);if(l&&(l===e||l===St(e)||l===Zs(St(e))))return i}const o=ka(s[t]||i[t],e)||ka(s.appContext[t],e);return!o&&r?i:o}}function ka(t,e){return t&&(t[e]||t[St(e)]||t[Zs(St(e))])}function fb(t,e,n,r){let s;const i=n&&n[r];if(ne(t)||Ne(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(be(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const h=o[l];s[l]=e(t[h],h,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}function wf(t,e,n={},r,s){if(qe.isCE||qe.parent&&dr(qe.parent)&&qe.parent.isCE)return e!=="default"&&(n.name=e),we("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),jr();const o=i&&qc(i(n)),l=ii(it,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function qc(t){return t.some(e=>Rs(e)?!(e.type===Zt||e.type===it&&!qc(e.children)):!0)?t:null}const Gi=t=>t?eu(t)?ai(t)||t.proxy:Gi(t.parent):null,hr=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gi(t.parent),$root:t=>Gi(t.root),$emit:t=>t.emit,$options:t=>Po(t),$forceUpdate:t=>t.f||(t.f=()=>Oo(t.update)),$nextTick:t=>t.n||(t.n=Pc.bind(t.proxy)),$watch:t=>rf.bind(t)}),Ai=(t,e)=>t!==Ie&&!t.__isScriptSetup&&he(t,e),bf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const k=o[e];if(k!==void 0)switch(k){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ai(r,e))return o[e]=1,r[e];if(s!==Ie&&he(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&he(h,e))return o[e]=3,i[e];if(n!==Ie&&he(n,e))return o[e]=4,n[e];Yi&&(o[e]=0)}}const m=hr[e];let b,A;if(m)return e==="$attrs"&&Qe(t,"get",e),m(t);if((b=l.__cssModules)&&(b=b[e]))return b;if(n!==Ie&&he(n,e))return o[e]=4,n[e];if(A=c.config.globalProperties,he(A,e))return A[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ai(s,e)?(s[e]=n,!0):r!==Ie&&he(r,e)?(r[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ie&&he(t,o)||Ai(e,o)||(l=i[0])&&he(l,o)||he(r,o)||he(hr,o)||he(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Yi=!0;function Ef(t){const e=Po(t),n=t.proxy,r=t.ctx;Yi=!1,e.beforeCreate&&Da(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:m,beforeMount:b,mounted:A,beforeUpdate:k,updated:V,activated:K,deactivated:X,beforeDestroy:G,beforeUnmount:ee,destroyed:J,unmounted:le,render:Se,renderTracked:z,renderTriggered:v,errorCaptured:w,serverPrefetch:g,expose:d,inheritAttrs:u,components:a,directives:f,filters:p}=e;if(h&&If(h,r,null,t.appContext.config.unwrapInjectedRef),o)for(const C in o){const M=o[C];se(M)&&(r[C]=M.bind(n))}if(s){const C=s.call(n,n);be(C)&&(t.data=Fr(C))}if(Yi=!0,i)for(const C in i){const M=i[C],L=se(M)?M.bind(n,n):se(M.get)?M.get.bind(n,n):ht,oe=!se(M)&&se(M.set)?M.set.bind(n):ht,pe=ot({get:L,set:oe});Object.defineProperty(r,C,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Ce=>pe.value=Ce})}if(l)for(const C in l)Hc(l[C],r,n,C);if(c){const C=se(c)?c.call(n):c;Reflect.ownKeys(C).forEach(M=>{ps(M,C[M])})}m&&Da(m,t,"c");function E(C,M){ne(M)?M.forEach(L=>C(L.bind(n))):M&&C(M.bind(n))}if(E(lf,b),E(cf,A),E(uf,k),E(df,V),E(sf,K),E(of,X),E(mf,w),E(gf,z),E(pf,v),E(hf,ee),E(Vc,le),E(ff,g),ne(d))if(d.length){const C=t.exposed||(t.exposed={});d.forEach(M=>{Object.defineProperty(C,M,{get:()=>n[M],set:L=>n[M]=L})})}else t.exposed||(t.exposed={});Se&&t.render===ht&&(t.render=Se),u!=null&&(t.inheritAttrs=u),a&&(t.components=a),f&&(t.directives=f)}function If(t,e,n=ht,r=!1){ne(t)&&(t=Ji(t));for(const s in t){const i=t[s];let o;be(i)?"default"in i?o=kt(i.from||s,i.default,!0):o=kt(i.from||s):o=kt(i),Be(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function Da(t,e,n){ft(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hc(t,e,n,r){const s=r.includes(".")?Mc(n,r):()=>n[r];if(Ne(t)){const i=e[t];se(i)&&gs(s,i)}else if(se(t))gs(s,t.bind(n));else if(be(t))if(ne(t))t.forEach(i=>Hc(i,e,n,r));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&gs(s,i,t)}}function Po(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Cs(c,h,o,!0)),Cs(c,e,o)),be(e)&&i.set(e,c),c}function Cs(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Cs(t,i,n,!0),s&&s.forEach(o=>Cs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Tf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Tf={data:xa,props:sn,emits:sn,methods:sn,computed:sn,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:sn,directives:sn,watch:Af,provide:xa,inject:Sf};function xa(t,e){return e?t?function(){return Ke(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function Sf(t,e){return sn(Ji(t),Ji(e))}function Ji(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function sn(t,e){return t?Ke(Ke(Object.create(null),t),e):e}function Af(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const r in e)n[r]=We(t[r],e[r]);return n}function Cf(t,e,n,r=!1){const s={},i={};Is(i,oi,1),t.propsDefaults=Object.create(null),zc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Uh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Rf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=fe(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const m=t.vnode.dynamicProps;for(let b=0;b<m.length;b++){let A=m[b];if(ni(t.emitsOptions,A))continue;const k=e[A];if(c)if(he(i,A))k!==i[A]&&(i[A]=k,h=!0);else{const V=St(A);s[V]=Qi(c,l,V,k,t,!1)}else k!==i[A]&&(i[A]=k,h=!0)}}}else{zc(t,e,s,i)&&(h=!0);let m;for(const b in l)(!e||!he(e,b)&&((m=Yn(b))===b||!he(e,m)))&&(c?n&&(n[b]!==void 0||n[m]!==void 0)&&(s[b]=Qi(c,l,b,void 0,t,!0)):delete s[b]);if(i!==l)for(const b in i)(!e||!he(e,b))&&(delete i[b],h=!0)}h&&Dt(t,"set","$attrs")}function zc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(hs(c))continue;const h=e[c];let m;s&&he(s,m=St(c))?!i||!i.includes(m)?n[m]=h:(l||(l={}))[m]=h:ni(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=fe(n),h=l||Ie;for(let m=0;m<i.length;m++){const b=i[m];n[b]=Qi(s,c,b,h[b],t,!he(h,b))}}return o}function Qi(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=he(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&se(c)){const{propsDefaults:h}=s;n in h?r=h[n]:(Vn(s),r=h[n]=c.call(null,e),fn())}else r=c}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Yn(n))&&(r=!0))}return r}function Wc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!se(t)){const m=b=>{c=!0;const[A,k]=Wc(b,e,!0);Ke(o,A),k&&l.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(m),t.extends&&m(t.extends),t.mixins&&t.mixins.forEach(m)}if(!i&&!c)return be(t)&&r.set(t,Dn),Dn;if(ne(i))for(let m=0;m<i.length;m++){const b=St(i[m]);Na(b)&&(o[b]=Ie)}else if(i)for(const m in i){const b=St(m);if(Na(b)){const A=i[m],k=o[b]=ne(A)||se(A)?{type:A}:Object.assign({},A);if(k){const V=Ma(Boolean,k.type),K=Ma(String,k.type);k[0]=V>-1,k[1]=K<0||V<K,(V>-1||he(k,"default"))&&l.push(b)}}}const h=[o,l];return be(t)&&r.set(t,h),h}function Na(t){return t[0]!=="$"}function La(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function $a(t,e){return La(t)===La(e)}function Ma(t,e){return ne(e)?e.findIndex(n=>$a(n,t)):se(e)&&$a(e,t)?0:-1}const Kc=t=>t[0]==="_"||t==="$stable",ko=t=>ne(t)?t.map(vt):[vt(t)],Of=(t,e,n)=>{if(e._n)return e;const r=et((...s)=>ko(e(...s)),n);return r._c=!1,r},Gc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kc(s))continue;const i=t[s];if(se(i))e[s]=Of(s,i,r);else if(i!=null){const o=ko(i);e[s]=()=>o}}},Yc=(t,e)=>{const n=ko(e);t.slots.default=()=>n},Pf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Is(e,"_",n)):Gc(e,t.slots={})}else t.slots={},e&&Yc(t,e);Is(t.slots,oi,1)},kf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(Ke(s,e),!n&&l===1&&delete s._):(i=!e.$stable,Gc(e,s)),o=e}else e&&(Yc(t,e),o={default:1});if(i)for(const l in s)!Kc(l)&&!(l in o)&&delete s[l]};function Jc(){return{app:null,config:{isNativeTag:nh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Df=0;function xf(t,e){return function(r,s=null){se(r)||(r=Object.assign({},r)),s!=null&&!be(s)&&(s=null);const i=Jc(),o=new Set;let l=!1;const c=i.app={_uid:Df++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ep,get config(){return i.config},set config(h){},use(h,...m){return o.has(h)||(h&&se(h.install)?(o.add(h),h.install(c,...m)):se(h)&&(o.add(h),h(c,...m))),c},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),c},component(h,m){return m?(i.components[h]=m,c):i.components[h]},directive(h,m){return m?(i.directives[h]=m,c):i.directives[h]},mount(h,m,b){if(!l){const A=we(r,s);return A.appContext=i,m&&e?e(A,h):t(A,h,b),l=!0,c._container=h,h.__vue_app__=c,ai(A.component)||A.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(h,m){return i.provides[h]=m,c}};return c}}function Xi(t,e,n,r,s=!1){if(ne(t)){t.forEach((A,k)=>Xi(A,e&&(ne(e)?e[k]:e),n,r,s));return}if(dr(r)&&!s)return;const i=r.shapeFlag&4?ai(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,m=l.refs===Ie?l.refs={}:l.refs,b=l.setupState;if(h!=null&&h!==c&&(Ne(h)?(m[h]=null,he(b,h)&&(b[h]=null)):Be(h)&&(h.value=null)),se(c))Kt(c,l,12,[o,m]);else{const A=Ne(c),k=Be(c);if(A||k){const V=()=>{if(t.f){const K=A?he(b,c)?b[c]:m[c]:c.value;s?ne(K)&&vo(K,i):ne(K)?K.includes(i)||K.push(i):A?(m[c]=[i],he(b,c)&&(b[c]=m[c])):(c.value=[i],t.k&&(m[t.k]=c.value))}else A?(m[c]=o,he(b,c)&&(b[c]=o)):k&&(c.value=o,t.k&&(m[t.k]=o))};o?(V.id=-1,Ge(V,n)):V()}}}const Ge=nf;function Nf(t){return Lf(t)}function Lf(t,e){const n=lh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:m,parentNode:b,nextSibling:A,setScopeId:k=ht,insertStaticContent:V}=t,K=(y,I,R,P=null,x=null,U=null,j=!1,S=null,N=!!I.dynamicChildren)=>{if(y===I)return;y&&!ir(y,I)&&(P=q(y),Ce(y,x,U,!0),y=null),I.patchFlag===-2&&(N=!1,I.dynamicChildren=null);const{type:O,ref:B,shapeFlag:F}=I;switch(O){case si:X(y,I,R,P);break;case Zt:G(y,I,R,P);break;case ms:y==null&&ee(I,R,P,j);break;case it:a(y,I,R,P,x,U,j,S,N);break;default:F&1?Se(y,I,R,P,x,U,j,S,N):F&6?f(y,I,R,P,x,U,j,S,N):(F&64||F&128)&&O.process(y,I,R,P,x,U,j,S,N,ue)}B!=null&&x&&Xi(B,y&&y.ref,U,I||y,!I)},X=(y,I,R,P)=>{if(y==null)r(I.el=l(I.children),R,P);else{const x=I.el=y.el;I.children!==y.children&&h(x,I.children)}},G=(y,I,R,P)=>{y==null?r(I.el=c(I.children||""),R,P):I.el=y.el},ee=(y,I,R,P)=>{[y.el,y.anchor]=V(y.children,I,R,P,y.el,y.anchor)},J=({el:y,anchor:I},R,P)=>{let x;for(;y&&y!==I;)x=A(y),r(y,R,P),y=x;r(I,R,P)},le=({el:y,anchor:I})=>{let R;for(;y&&y!==I;)R=A(y),s(y),y=R;s(I)},Se=(y,I,R,P,x,U,j,S,N)=>{j=j||I.type==="svg",y==null?z(I,R,P,x,U,j,S,N):g(y,I,x,U,j,S,N)},z=(y,I,R,P,x,U,j,S)=>{let N,O;const{type:B,props:F,shapeFlag:H,transition:te,dirs:ae}=y;if(N=y.el=o(y.type,U,F&&F.is,F),H&8?m(N,y.children):H&16&&w(y.children,N,null,P,x,U&&B!=="foreignObject",j,S),ae&&nn(y,null,P,"created"),v(N,y,y.scopeId,j,P),F){for(const ye in F)ye!=="value"&&!hs(ye)&&i(N,ye,null,F[ye],U,y.children,P,x,W);"value"in F&&i(N,"value",null,F.value),(O=F.onVnodeBeforeMount)&&_t(O,P,y)}ae&&nn(y,null,P,"beforeMount");const ve=(!x||x&&!x.pendingBranch)&&te&&!te.persisted;ve&&te.beforeEnter(N),r(N,I,R),((O=F&&F.onVnodeMounted)||ve||ae)&&Ge(()=>{O&&_t(O,P,y),ve&&te.enter(N),ae&&nn(y,null,P,"mounted")},x)},v=(y,I,R,P,x)=>{if(R&&k(y,R),P)for(let U=0;U<P.length;U++)k(y,P[U]);if(x){let U=x.subTree;if(I===U){const j=x.vnode;v(y,j,j.scopeId,j.slotScopeIds,x.parent)}}},w=(y,I,R,P,x,U,j,S,N=0)=>{for(let O=N;O<y.length;O++){const B=y[O]=S?jt(y[O]):vt(y[O]);K(null,B,I,R,P,x,U,j,S)}},g=(y,I,R,P,x,U,j)=>{const S=I.el=y.el;let{patchFlag:N,dynamicChildren:O,dirs:B}=I;N|=y.patchFlag&16;const F=y.props||Ie,H=I.props||Ie;let te;R&&rn(R,!1),(te=H.onVnodeBeforeUpdate)&&_t(te,R,I,y),B&&nn(I,y,R,"beforeUpdate"),R&&rn(R,!0);const ae=x&&I.type!=="foreignObject";if(O?d(y.dynamicChildren,O,S,R,P,ae,U):j||M(y,I,S,null,R,P,ae,U,!1),N>0){if(N&16)u(S,I,F,H,R,P,x);else if(N&2&&F.class!==H.class&&i(S,"class",null,H.class,x),N&4&&i(S,"style",F.style,H.style,x),N&8){const ve=I.dynamicProps;for(let ye=0;ye<ve.length;ye++){const Re=ve[ye],at=F[Re],Cn=H[Re];(Cn!==at||Re==="value")&&i(S,Re,at,Cn,x,y.children,R,P,W)}}N&1&&y.children!==I.children&&m(S,I.children)}else!j&&O==null&&u(S,I,F,H,R,P,x);((te=H.onVnodeUpdated)||B)&&Ge(()=>{te&&_t(te,R,I,y),B&&nn(I,y,R,"updated")},P)},d=(y,I,R,P,x,U,j)=>{for(let S=0;S<I.length;S++){const N=y[S],O=I[S],B=N.el&&(N.type===it||!ir(N,O)||N.shapeFlag&70)?b(N.el):R;K(N,O,B,null,P,x,U,j,!0)}},u=(y,I,R,P,x,U,j)=>{if(R!==P){if(R!==Ie)for(const S in R)!hs(S)&&!(S in P)&&i(y,S,R[S],null,j,I.children,x,U,W);for(const S in P){if(hs(S))continue;const N=P[S],O=R[S];N!==O&&S!=="value"&&i(y,S,O,N,j,I.children,x,U,W)}"value"in P&&i(y,"value",R.value,P.value)}},a=(y,I,R,P,x,U,j,S,N)=>{const O=I.el=y?y.el:l(""),B=I.anchor=y?y.anchor:l("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:te}=I;te&&(S=S?S.concat(te):te),y==null?(r(O,R,P),r(B,R,P),w(I.children,R,B,x,U,j,S,N)):F>0&&F&64&&H&&y.dynamicChildren?(d(y.dynamicChildren,H,R,x,U,j,S),(I.key!=null||x&&I===x.subTree)&&Qc(y,I,!0)):M(y,I,R,B,x,U,j,S,N)},f=(y,I,R,P,x,U,j,S,N)=>{I.slotScopeIds=S,y==null?I.shapeFlag&512?x.ctx.activate(I,R,P,j,N):p(I,R,P,x,U,j,N):T(y,I,N)},p=(y,I,R,P,x,U,j)=>{const S=y.component=zf(y,P,x);if(Fc(y)&&(S.ctx.renderer=ue),Wf(S),S.asyncDep){if(x&&x.registerDep(S,E),!y.el){const N=S.subTree=we(Zt);G(null,N,I,R)}return}E(S,y,I,R,x,U,j)},T=(y,I,R)=>{const P=I.component=y.component;if(Zh(y,I,R))if(P.asyncDep&&!P.asyncResolved){C(P,I,R);return}else P.next=I,Kh(P.update),P.update();else I.el=y.el,P.vnode=I},E=(y,I,R,P,x,U,j)=>{const S=()=>{if(y.isMounted){let{next:B,bu:F,u:H,parent:te,vnode:ae}=y,ve=B,ye;rn(y,!1),B?(B.el=ae.el,C(y,B,j)):B=ae,F&&fs(F),(ye=B.props&&B.props.onVnodeBeforeUpdate)&&_t(ye,te,B,ae),rn(y,!0);const Re=Si(y),at=y.subTree;y.subTree=Re,K(at,Re,b(at.el),q(at),y,x,U),B.el=Re.el,ve===null&&ef(y,Re.el),H&&Ge(H,x),(ye=B.props&&B.props.onVnodeUpdated)&&Ge(()=>_t(ye,te,B,ae),x)}else{let B;const{el:F,props:H}=I,{bm:te,m:ae,parent:ve}=y,ye=dr(I);if(rn(y,!1),te&&fs(te),!ye&&(B=H&&H.onVnodeBeforeMount)&&_t(B,ve,I),rn(y,!0),F&&ie){const Re=()=>{y.subTree=Si(y),ie(F,y.subTree,y,x,null)};ye?I.type.__asyncLoader().then(()=>!y.isUnmounted&&Re()):Re()}else{const Re=y.subTree=Si(y);K(null,Re,R,P,y,x,U),I.el=Re.el}if(ae&&Ge(ae,x),!ye&&(B=H&&H.onVnodeMounted)){const Re=I;Ge(()=>_t(B,ve,Re),x)}(I.shapeFlag&256||ve&&dr(ve.vnode)&&ve.vnode.shapeFlag&256)&&y.a&&Ge(y.a,x),y.isMounted=!0,I=R=P=null}},N=y.effect=new Eo(S,()=>Oo(O),y.scope),O=y.update=()=>N.run();O.id=y.uid,rn(y,!0),O()},C=(y,I,R)=>{I.component=y;const P=y.vnode.props;y.vnode=I,y.next=null,Rf(y,I.props,P,R),kf(y,I.children,R),Jn(),Oa(),Qn()},M=(y,I,R,P,x,U,j,S,N=!1)=>{const O=y&&y.children,B=y?y.shapeFlag:0,F=I.children,{patchFlag:H,shapeFlag:te}=I;if(H>0){if(H&128){oe(O,F,R,P,x,U,j,S,N);return}else if(H&256){L(O,F,R,P,x,U,j,S,N);return}}te&8?(B&16&&W(O,x,U),F!==O&&m(R,F)):B&16?te&16?oe(O,F,R,P,x,U,j,S,N):W(O,x,U,!0):(B&8&&m(R,""),te&16&&w(F,R,P,x,U,j,S,N))},L=(y,I,R,P,x,U,j,S,N)=>{y=y||Dn,I=I||Dn;const O=y.length,B=I.length,F=Math.min(O,B);let H;for(H=0;H<F;H++){const te=I[H]=N?jt(I[H]):vt(I[H]);K(y[H],te,R,null,x,U,j,S,N)}O>B?W(y,x,U,!0,!1,F):w(I,R,P,x,U,j,S,N,F)},oe=(y,I,R,P,x,U,j,S,N)=>{let O=0;const B=I.length;let F=y.length-1,H=B-1;for(;O<=F&&O<=H;){const te=y[O],ae=I[O]=N?jt(I[O]):vt(I[O]);if(ir(te,ae))K(te,ae,R,null,x,U,j,S,N);else break;O++}for(;O<=F&&O<=H;){const te=y[F],ae=I[H]=N?jt(I[H]):vt(I[H]);if(ir(te,ae))K(te,ae,R,null,x,U,j,S,N);else break;F--,H--}if(O>F){if(O<=H){const te=H+1,ae=te<B?I[te].el:P;for(;O<=H;)K(null,I[O]=N?jt(I[O]):vt(I[O]),R,ae,x,U,j,S,N),O++}}else if(O>H)for(;O<=F;)Ce(y[O],x,U,!0),O++;else{const te=O,ae=O,ve=new Map;for(O=ae;O<=H;O++){const Ze=I[O]=N?jt(I[O]):vt(I[O]);Ze.key!=null&&ve.set(Ze.key,O)}let ye,Re=0;const at=H-ae+1;let Cn=!1,ya=0;const sr=new Array(at);for(O=0;O<at;O++)sr[O]=0;for(O=te;O<=F;O++){const Ze=y[O];if(Re>=at){Ce(Ze,x,U,!0);continue}let yt;if(Ze.key!=null)yt=ve.get(Ze.key);else for(ye=ae;ye<=H;ye++)if(sr[ye-ae]===0&&ir(Ze,I[ye])){yt=ye;break}yt===void 0?Ce(Ze,x,U,!0):(sr[yt-ae]=O+1,yt>=ya?ya=yt:Cn=!0,K(Ze,I[yt],R,null,x,U,j,S,N),Re++)}const _a=Cn?$f(sr):Dn;for(ye=_a.length-1,O=at-1;O>=0;O--){const Ze=ae+O,yt=I[Ze],va=Ze+1<B?I[Ze+1].el:P;sr[O]===0?K(null,yt,R,va,x,U,j,S,N):Cn&&(ye<0||O!==_a[ye]?pe(yt,R,va,2):ye--)}}},pe=(y,I,R,P,x=null)=>{const{el:U,type:j,transition:S,children:N,shapeFlag:O}=y;if(O&6){pe(y.component.subTree,I,R,P);return}if(O&128){y.suspense.move(I,R,P);return}if(O&64){j.move(y,I,R,ue);return}if(j===it){r(U,I,R);for(let F=0;F<N.length;F++)pe(N[F],I,R,P);r(y.anchor,I,R);return}if(j===ms){J(y,I,R);return}if(P!==2&&O&1&&S)if(P===0)S.beforeEnter(U),r(U,I,R),Ge(()=>S.enter(U),x);else{const{leave:F,delayLeave:H,afterLeave:te}=S,ae=()=>r(U,I,R),ve=()=>{F(U,()=>{ae(),te&&te()})};H?H(U,ae,ve):ve()}else r(U,I,R)},Ce=(y,I,R,P=!1,x=!1)=>{const{type:U,props:j,ref:S,children:N,dynamicChildren:O,shapeFlag:B,patchFlag:F,dirs:H}=y;if(S!=null&&Xi(S,null,R,y,!0),B&256){I.ctx.deactivate(y);return}const te=B&1&&H,ae=!dr(y);let ve;if(ae&&(ve=j&&j.onVnodeBeforeUnmount)&&_t(ve,I,y),B&6)D(y.component,R,P);else{if(B&128){y.suspense.unmount(R,P);return}te&&nn(y,null,I,"beforeUnmount"),B&64?y.type.remove(y,I,R,x,ue,P):O&&(U!==it||F>0&&F&64)?W(O,I,R,!1,!0):(U===it&&F&384||!x&&B&16)&&W(N,I,R),P&&Xe(y)}(ae&&(ve=j&&j.onVnodeUnmounted)||te)&&Ge(()=>{ve&&_t(ve,I,y),te&&nn(y,null,I,"unmounted")},R)},Xe=y=>{const{type:I,el:R,anchor:P,transition:x}=y;if(I===it){An(R,P);return}if(I===ms){le(y);return}const U=()=>{s(R),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(y.shapeFlag&1&&x&&!x.persisted){const{leave:j,delayLeave:S}=x,N=()=>j(R,U);S?S(y.el,U,N):N()}else U()},An=(y,I)=>{let R;for(;y!==I;)R=A(y),s(y),y=R;s(I)},D=(y,I,R)=>{const{bum:P,scope:x,update:U,subTree:j,um:S}=y;P&&fs(P),x.stop(),U&&(U.active=!1,Ce(j,y,I,R)),S&&Ge(S,I),Ge(()=>{y.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},W=(y,I,R,P=!1,x=!1,U=0)=>{for(let j=U;j<y.length;j++)Ce(y[j],I,R,P,x)},q=y=>y.shapeFlag&6?q(y.component.subTree):y.shapeFlag&128?y.suspense.next():A(y.anchor||y.el),Q=(y,I,R)=>{y==null?I._vnode&&Ce(I._vnode,null,null,!0):K(I._vnode||null,y,I,null,null,null,R),Oa(),Dc(),I._vnode=y},ue={p:K,um:Ce,m:pe,r:Xe,mt:p,mc:w,pc:M,pbc:d,n:q,o:t};let Ee,ie;return e&&([Ee,ie]=e(ue)),{render:Q,hydrate:Ee,createApp:xf(Q,Ee)}}function rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qc(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=jt(s[i]),l.el=o.el),n||Qc(o,l)),l.type===si&&(l.el=o.el)}}function $f(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Mf=t=>t.__isTeleport,it=Symbol(void 0),si=Symbol(void 0),Zt=Symbol(void 0),ms=Symbol(void 0),fr=[];let dt=null;function jr(t=!1){fr.push(dt=t?null:[])}function Uf(){fr.pop(),dt=fr[fr.length-1]||null}let Ar=1;function Ua(t){Ar+=t}function Xc(t){return t.dynamicChildren=Ar>0?dt||Dn:null,Uf(),Ar>0&&dt&&dt.push(t),t}function Ff(t,e,n,r,s,i){return Xc(ce(t,e,n,r,s,i,!0))}function ii(t,e,n,r,s){return Xc(we(t,e,n,r,s,!0))}function Rs(t){return t?t.__v_isVNode===!0:!1}function ir(t,e){return t.type===e.type&&t.key===e.key}const oi="__vInternal",Zc=({key:t})=>t??null,ys=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ne(t)||Be(t)||se(t)?{i:qe,r:t,k:e,f:!!n}:t:null;function ce(t,e=null,n=null,r=0,s=null,i=t===it?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zc(e),ref:e&&ys(e),scopeId:Lc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qe};return l?(Do(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Ar>0&&!o&&dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&dt.push(c),c}const we=jf;function jf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===_f)&&(t=Zt),Rs(t)){const l=jn(t,e,!0);return n&&Do(l,n),Ar>0&&!i&&dt&&(l.shapeFlag&6?dt[dt.indexOf(t)]=l:dt.push(l)),l.patchFlag|=-2,l}if(Qf(t)&&(t=t.__vccOpts),e){e=Vf(e);let{class:l,style:c}=e;l&&!Ne(l)&&(e.class=yo(l)),be(c)&&(Ec(c)&&!ne(c)&&(c=Ke({},c)),e.style=mo(c))}const o=Ne(t)?1:tf(t)?128:Mf(t)?64:be(t)?4:se(t)?2:0;return ce(t,e,n,r,s,o,i,!0)}function Vf(t){return t?Ec(t)||oi in t?Ke({},t):t:null}function jn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,l=e?Bf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Zc(l),ref:e&&e.ref?n&&s?ne(s)?s.concat(ys(e)):[s,ys(e)]:ys(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jn(t.ssContent),ssFallback:t.ssFallback&&jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function lt(t=" ",e=0){return we(si,null,t,e)}function pb(t,e){const n=we(ms,null,t);return n.staticCount=e,n}function gb(t="",e=!1){return e?(jr(),ii(Zt,null,t)):we(Zt,null,t)}function vt(t){return t==null||typeof t=="boolean"?we(Zt):ne(t)?we(it,null,t.slice()):typeof t=="object"?jt(t):we(si,null,String(t))}function jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jn(t)}function Do(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Do(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(oi in e)?e._ctx=qe:s===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),r&64?(n=16,e=[lt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=yo([e.class,r.class]));else if(s==="style")e.style=mo([e.style,r.style]);else if(Js(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function _t(t,e,n,r=null){ft(t,e,7,[n,r])}const qf=Jc();let Hf=0;function zf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qf,i={uid:Hf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ch(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wc(r,s),emitsOptions:Nc(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jh.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const Vn=t=>{Pe=t,t.scope.on()},fn=()=>{Pe&&Pe.scope.off(),Pe=null};function eu(t){return t.vnode.shapeFlag&4}let Cr=!1;function Wf(t,e=!1){Cr=e;const{props:n,children:r}=t.vnode,s=eu(t);Cf(t,n,s,e),Pf(t,r);const i=s?Kf(t,e):void 0;return Cr=!1,i}function Kf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ic(new Proxy(t.ctx,bf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Yf(t):null;Vn(t),Jn();const i=Kt(r,t,0,[t.props,s]);if(Qn(),fn(),lc(i)){if(i.then(fn,fn),e)return i.then(o=>{Fa(t,o,e)}).catch(o=>{ti(o,t,0)});t.asyncDep=i}else Fa(t,i,e)}else tu(t,e)}function Fa(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Cc(e)),tu(t,n)}let ja;function tu(t,e,n){const r=t.type;if(!t.render){if(!e&&ja&&!r.render){const s=r.template||Po(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=Ke(Ke({isCustomElement:i,delimiters:l},o),c);r.render=ja(s,h)}}t.render=r.render||ht}Vn(t),Jn(),Ef(t),Qn(),fn()}function Gf(t){return new Proxy(t.attrs,{get(e,n){return Qe(t,"get","$attrs"),e[n]}})}function Yf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Gf(t))},slots:t.slots,emit:t.emit,expose:e}}function ai(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cc(Ic(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hr)return hr[n](t)},has(e,n){return n in e||n in hr}}))}function Jf(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function Qf(t){return se(t)&&"__vccOpts"in t}const ot=(t,e)=>Hh(t,e,Cr);function nu(t,e,n){const r=arguments.length;return r===2?be(e)&&!ne(e)?Rs(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rs(n)&&(n=[n]),we(t,e,n))}const Xf=Symbol(""),Zf=()=>kt(Xf),ep="3.2.47",tp="http://www.w3.org/2000/svg",ln=typeof document<"u"?document:null,Va=ln&&ln.createElement("template"),np={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ln.createElementNS(tp,t):ln.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ln.createTextNode(t),createComment:t=>ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Va.innerHTML=r?`<svg>${t}</svg>`:t;const l=Va.content;if(r){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rp(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sp(t,e,n){const r=t.style,s=Ne(n);if(n&&!s){if(e&&!Ne(e))for(const i in e)n[i]==null&&Zi(r,i,"");for(const i in n)Zi(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ba=/\s*!important$/;function Zi(t,e,n){if(ne(n))n.forEach(r=>Zi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ip(t,e);Ba.test(n)?t.setProperty(Yn(r),n.replace(Ba,""),"important"):t[r]=n}}const qa=["Webkit","Moz","ms"],Ci={};function ip(t,e){const n=Ci[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return Ci[e]=r;r=Zs(r);for(let s=0;s<qa.length;s++){const i=qa[s]+r;if(i in t)return Ci[e]=i}return e}const Ha="http://www.w3.org/1999/xlink";function op(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ha,e.slice(6,e.length)):t.setAttributeNS(Ha,e,n);else{const i=Zd(e);n==null||i&&!ic(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ap(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ic(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function cn(t,e,n,r){t.addEventListener(e,n,r)}function lp(t,e,n,r){t.removeEventListener(e,n,r)}function cp(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=up(e);if(r){const h=i[e]=fp(r,s);cn(t,l,h,c)}else o&&(lp(t,l,o,c),i[e]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function up(t){let e;if(za.test(t)){e={};let r;for(;r=t.match(za);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yn(t.slice(2)),e]}let Ri=0;const dp=Promise.resolve(),hp=()=>Ri||(dp.then(()=>Ri=0),Ri=Date.now());function fp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ft(pp(r,n.value),e,5,[r])};return n.value=t,n.attached=hp(),n}function pp(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wa=/^on[a-z]/,gp=(t,e,n,r,s=!1,i,o,l,c)=>{e==="class"?rp(t,r,s):e==="style"?sp(t,n,r):Js(e)?_o(e)||cp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mp(t,e,r,s))?ap(t,e,r,i,o,l,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),op(t,e,r,s))};function mp(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Wa.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Wa.test(e)&&Ne(n)?!1:e in t}const Os=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>fs(e,n):e};function yp(t){t.target.composing=!0}function Ka(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mb={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Os(s);const i=r||s.props&&s.props.type==="number";cn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ts(l)),t._assign(l)}),n&&cn(t,"change",()=>{t.value=t.value.trim()}),e||(cn(t,"compositionstart",yp),cn(t,"compositionend",Ka),cn(t,"change",Ka))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Os(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ts(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},yb={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Qs(e);cn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ts(Ps(o)):Ps(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Os(r)},mounted(t,{value:e}){Ga(t,e)},beforeUpdate(t,e,n){t._assign=Os(n)},updated(t,{value:e}){Ga(t,e)}};function Ga(t,e){const n=t.multiple;if(!(n&&!ne(e)&&!Qs(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Ps(i);if(n)ne(e)?i.selected=th(e,o)>-1:i.selected=e.has(o);else if(Ys(Ps(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ps(t){return"_value"in t?t._value:t.value}const _b={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):or(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),or(t,!0),r.enter(t)):r.leave(t,()=>{or(t,!1)}):or(t,e))},beforeUnmount(t,{value:e}){or(t,e)}};function or(t,e){t.style.display=e?t._vod:"none"}const _p=Ke({patchProp:gp},np);let Ya;function vp(){return Ya||(Ya=Nf(_p))}const wp=(...t)=>{const e=vp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bp(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bp(t){return Ne(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const On=typeof window<"u";function Ep(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function Oi(t,e){const n={};for(const r in e){const s=e[r];n[r]=pt(s)?s.map(t):t(s)}return n}const pr=()=>{},pt=Array.isArray,Ip=/\/$/,Tp=t=>t.replace(Ip,"");function Pi(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Rp(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Sp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ja(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ap(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Bn(e.matched[r],n.matched[s])&&ru(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ru(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Cp(t[n],e[n]))return!1;return!0}function Cp(t,e){return pt(t)?Qa(t,e):pt(e)?Qa(e,t):t===e}function Qa(t,e){return pt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Rp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Rr;(function(t){t.pop="pop",t.push="push"})(Rr||(Rr={}));var gr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(gr||(gr={}));function Op(t){if(!t)if(On){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Tp(t)}const Pp=/^[^#]+#/;function kp(t,e){return t.replace(Pp,"#")+e}function Dp(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const li=()=>({left:window.pageXOffset,top:window.pageYOffset});function xp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Dp(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Xa(t,e){return(history.state?history.state.position-e:-1)+t}const eo=new Map;function Np(t,e){eo.set(t,e)}function Lp(t){const e=eo.get(t);return eo.delete(t),e}let $p=()=>location.protocol+"//"+location.host;function su(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Ja(c,"")}return Ja(n,t)+r+s}function Mp(t,e,n,r){let s=[],i=[],o=null;const l=({state:A})=>{const k=su(t,location),V=n.value,K=e.value;let X=0;if(A){if(n.value=k,e.value=A,o&&o===V){o=null;return}X=K?A.position-K.position:0}else r(k);s.forEach(G=>{G(n.value,V,{delta:X,type:Rr.pop,direction:X?X>0?gr.forward:gr.back:gr.unknown})})};function c(){o=n.value}function h(A){s.push(A);const k=()=>{const V=s.indexOf(A);V>-1&&s.splice(V,1)};return i.push(k),k}function m(){const{history:A}=window;A.state&&A.replaceState(me({},A.state,{scroll:li()}),"")}function b(){for(const A of i)A();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",m)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",m),{pauseListeners:c,listen:h,destroy:b}}function Za(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?li():null}}function Up(t){const{history:e,location:n}=window,r={value:su(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,m){const b=t.indexOf("#"),A=b>-1?(n.host&&document.querySelector("base")?t:t.slice(b))+c:$p()+t+c;try{e[m?"replaceState":"pushState"](h,"",A),s.value=h}catch(k){console.error(k),n[m?"replace":"assign"](A)}}function o(c,h){const m=me({},e.state,Za(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,m,!0),r.value=c}function l(c,h){const m=me({},s.value,e.state,{forward:c,scroll:li()});i(m.current,m,!0);const b=me({},Za(r.value,c,null),{position:m.position+1},h);i(c,b,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function Fp(t){t=Op(t);const e=Up(t),n=Mp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:kp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jp(t){return typeof t=="string"||t&&typeof t=="object"}function iu(t){return typeof t=="string"||typeof t=="symbol"}const Ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ou=Symbol("");var el;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(el||(el={}));function qn(t,e){return me(new Error,{type:t,[ou]:!0},e)}function Ct(t,e){return t instanceof Error&&ou in t&&(e==null||!!(t.type&e))}const tl="[^/]+?",Vp={sensitive:!1,strict:!1,start:!0,end:!0},Bp=/[.+*?^${}()[\]/\\]/g;function qp(t,e){const n=me({},Vp,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const m=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let b=0;b<h.length;b++){const A=h[b];let k=40+(n.sensitive?.25:0);if(A.type===0)b||(s+="/"),s+=A.value.replace(Bp,"\\$&"),k+=40;else if(A.type===1){const{value:V,repeatable:K,optional:X,regexp:G}=A;i.push({name:V,repeatable:K,optional:X});const ee=G||tl;if(ee!==tl){k+=10;try{new RegExp(`(${ee})`)}catch(le){throw new Error(`Invalid custom RegExp for param "${V}" (${ee}): `+le.message)}}let J=K?`((?:${ee})(?:/(?:${ee}))*)`:`(${ee})`;b||(J=X&&h.length<2?`(?:/${J})`:"/"+J),X&&(J+="?"),s+=J,k+=20,X&&(k+=-8),K&&(k+=-20),ee===".*"&&(k+=-50)}m.push(k)}r.push(m)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const m=h.match(o),b={};if(!m)return null;for(let A=1;A<m.length;A++){const k=m[A]||"",V=i[A-1];b[V.name]=k&&V.repeatable?k.split("/"):k}return b}function c(h){let m="",b=!1;for(const A of t){(!b||!m.endsWith("/"))&&(m+="/"),b=!1;for(const k of A)if(k.type===0)m+=k.value;else if(k.type===1){const{value:V,repeatable:K,optional:X}=k,G=V in h?h[V]:"";if(pt(G)&&!K)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const ee=pt(G)?G.join("/"):G;if(!ee)if(X)A.length<2&&(m.endsWith("/")?m=m.slice(0,-1):b=!0);else throw new Error(`Missing required param "${V}"`);m+=ee}}return m||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function Hp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Hp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(nl(r))return 1;if(nl(s))return-1}return s.length-r.length}function nl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Wp={type:0,value:""},Kp=/[a-zA-Z0-9_]/;function Gp(t){if(!t)return[[]];if(t==="/")return[[Wp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(k){throw new Error(`ERR (${n})/"${h}": ${k}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",m="";function b(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:m,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function A(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&b(),o()):c===":"?(b(),n=1):A();break;case 4:A(),n=r;break;case 1:c==="("?n=2:Kp.test(c)?A():(b(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?m[m.length-1]=="\\"?m=m.slice(0,-1)+c:n=3:m+=c;break;case 3:b(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,m="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),b(),o(),s}function Yp(t,e,n){const r=qp(Gp(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Jp(t,e){const n=[],r=new Map;e=il({strict:!1,end:!0,sensitive:!1},e);function s(m){return r.get(m)}function i(m,b,A){const k=!A,V=Qp(m);V.aliasOf=A&&A.record;const K=il(e,m),X=[V];if("alias"in m){const J=typeof m.alias=="string"?[m.alias]:m.alias;for(const le of J)X.push(me({},V,{components:A?A.record.components:V.components,path:le,aliasOf:A?A.record:V}))}let G,ee;for(const J of X){const{path:le}=J;if(b&&le[0]!=="/"){const Se=b.record.path,z=Se[Se.length-1]==="/"?"":"/";J.path=b.record.path+(le&&z+le)}if(G=Yp(J,b,K),A?A.alias.push(G):(ee=ee||G,ee!==G&&ee.alias.push(G),k&&m.name&&!sl(G)&&o(m.name)),V.children){const Se=V.children;for(let z=0;z<Se.length;z++)i(Se[z],G,A&&A.children[z])}A=A||G,(G.record.components&&Object.keys(G.record.components).length||G.record.name||G.record.redirect)&&c(G)}return ee?()=>{o(ee)}:pr}function o(m){if(iu(m)){const b=r.get(m);b&&(r.delete(m),n.splice(n.indexOf(b),1),b.children.forEach(o),b.alias.forEach(o))}else{const b=n.indexOf(m);b>-1&&(n.splice(b,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function l(){return n}function c(m){let b=0;for(;b<n.length&&zp(m,n[b])>=0&&(m.record.path!==n[b].record.path||!au(m,n[b]));)b++;n.splice(b,0,m),m.record.name&&!sl(m)&&r.set(m.record.name,m)}function h(m,b){let A,k={},V,K;if("name"in m&&m.name){if(A=r.get(m.name),!A)throw qn(1,{location:m});K=A.record.name,k=me(rl(b.params,A.keys.filter(ee=>!ee.optional).map(ee=>ee.name)),m.params&&rl(m.params,A.keys.map(ee=>ee.name))),V=A.stringify(k)}else if("path"in m)V=m.path,A=n.find(ee=>ee.re.test(V)),A&&(k=A.parse(V),K=A.record.name);else{if(A=b.name?r.get(b.name):n.find(ee=>ee.re.test(b.path)),!A)throw qn(1,{location:m,currentLocation:b});K=A.record.name,k=me({},b.params,m.params),V=A.stringify(k)}const X=[];let G=A;for(;G;)X.unshift(G.record),G=G.parent;return{name:K,path:V,params:k,matched:X,meta:Zp(X)}}return t.forEach(m=>i(m)),{addRoute:i,resolve:h,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function rl(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Xp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Xp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function sl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zp(t){return t.reduce((e,n)=>me(e,n.meta),{})}function il(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function au(t,e){return e.children.some(n=>n===t||au(t,n))}const lu=/#/g,eg=/&/g,tg=/\//g,ng=/=/g,rg=/\?/g,cu=/\+/g,sg=/%5B/g,ig=/%5D/g,uu=/%5E/g,og=/%60/g,du=/%7B/g,ag=/%7C/g,hu=/%7D/g,lg=/%20/g;function xo(t){return encodeURI(""+t).replace(ag,"|").replace(sg,"[").replace(ig,"]")}function cg(t){return xo(t).replace(du,"{").replace(hu,"}").replace(uu,"^")}function to(t){return xo(t).replace(cu,"%2B").replace(lg,"+").replace(lu,"%23").replace(eg,"%26").replace(og,"`").replace(du,"{").replace(hu,"}").replace(uu,"^")}function ug(t){return to(t).replace(ng,"%3D")}function dg(t){return xo(t).replace(lu,"%23").replace(rg,"%3F")}function hg(t){return t==null?"":dg(t).replace(tg,"%2F")}function ks(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function fg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cu," "),o=i.indexOf("="),l=ks(o<0?i:i.slice(0,o)),c=o<0?null:ks(i.slice(o+1));if(l in e){let h=e[l];pt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function ol(t){let e="";for(let n in t){const r=t[n];if(n=ug(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pt(r)?r.map(i=>i&&to(i)):[r&&to(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const gg=Symbol(""),al=Symbol(""),No=Symbol(""),fu=Symbol(""),no=Symbol("");function ar(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=b=>{b===!1?l(qn(4,{from:n,to:e})):b instanceof Error?l(b):jp(b)?l(qn(2,{from:e,to:b})):(i&&r.enterCallbacks[s]===i&&typeof b=="function"&&i.push(b),o())},h=t.call(r&&r.instances[s],e,n,c);let m=Promise.resolve(h);t.length<3&&(m=m.then(c)),m.catch(b=>l(b))})}function ki(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let l=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(mg(l)){const h=(l.__vccOpts||l)[e];h&&s.push(Vt(h,n,r,i,o))}else{let c=l();s.push(()=>c.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const m=Ep(h)?h.default:h;i.components[o]=m;const A=(m.__vccOpts||m)[e];return A&&Vt(A,n,r,i,o)()}))}}return s}function mg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ll(t){const e=kt(No),n=kt(fu),r=ot(()=>e.resolve(hn(t.to))),s=ot(()=>{const{matched:c}=r.value,{length:h}=c,m=c[h-1],b=n.matched;if(!m||!b.length)return-1;const A=b.findIndex(Bn.bind(null,m));if(A>-1)return A;const k=cl(c[h-2]);return h>1&&cl(m)===k&&b[b.length-1].path!==k?b.findIndex(Bn.bind(null,c[h-2])):A}),i=ot(()=>s.value>-1&&wg(n.params,r.value.params)),o=ot(()=>s.value>-1&&s.value===n.matched.length-1&&ru(n.params,r.value.params));function l(c={}){return vg(c)?e[hn(t.replace)?"replace":"push"](hn(t.to)).catch(pr):Promise.resolve()}return{route:r,href:ot(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const yg=Uc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ll,setup(t,{slots:e}){const n=Fr(ll(t)),{options:r}=kt(No),s=ot(()=>({[ul(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ul(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:nu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_g=yg;function vg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!pt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function cl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ul=(t,e,n)=>t??e??n,bg=Uc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=kt(no),s=ot(()=>t.route||r.value),i=kt(al,0),o=ot(()=>{let h=hn(i);const{matched:m}=s.value;let b;for(;(b=m[h])&&!b.components;)h++;return h}),l=ot(()=>s.value.matched[o.value]);ps(al,ot(()=>o.value+1)),ps(gg,l),ps(no,s);const c=Fh();return gs(()=>[c.value,l.value,t.name],([h,m,b],[A,k,V])=>{m&&(m.instances[b]=h,k&&k!==m&&h&&h===A&&(m.leaveGuards.size||(m.leaveGuards=k.leaveGuards),m.updateGuards.size||(m.updateGuards=k.updateGuards))),h&&m&&(!k||!Bn(m,k)||!A)&&(m.enterCallbacks[b]||[]).forEach(K=>K(h))},{flush:"post"}),()=>{const h=s.value,m=t.name,b=l.value,A=b&&b.components[m];if(!A)return dl(n.default,{Component:A,route:h});const k=b.props[m],V=k?k===!0?h.params:typeof k=="function"?k(h):k:null,X=nu(A,me({},V,e,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(b.instances[m]=null)},ref:c}));return dl(n.default,{Component:X,route:h})||X}}});function dl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pu=bg;function Eg(t){const e=Jp(t.routes,t),n=t.parseQuery||fg,r=t.stringifyQuery||ol,s=t.history,i=ar(),o=ar(),l=ar(),c=jh(Ut);let h=Ut;On&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=Oi.bind(null,D=>""+D),b=Oi.bind(null,hg),A=Oi.bind(null,ks);function k(D,W){let q,Q;return iu(D)?(q=e.getRecordMatcher(D),Q=W):Q=D,e.addRoute(Q,q)}function V(D){const W=e.getRecordMatcher(D);W&&e.removeRoute(W)}function K(){return e.getRoutes().map(D=>D.record)}function X(D){return!!e.getRecordMatcher(D)}function G(D,W){if(W=me({},W||c.value),typeof D=="string"){const y=Pi(n,D,W.path),I=e.resolve({path:y.path},W),R=s.createHref(y.fullPath);return me(y,I,{params:A(I.params),hash:ks(y.hash),redirectedFrom:void 0,href:R})}let q;if("path"in D)q=me({},D,{path:Pi(n,D.path,W.path).path});else{const y=me({},D.params);for(const I in y)y[I]==null&&delete y[I];q=me({},D,{params:b(D.params)}),W.params=b(W.params)}const Q=e.resolve(q,W),ue=D.hash||"";Q.params=m(A(Q.params));const Ee=Sp(r,me({},D,{hash:cg(ue),path:Q.path})),ie=s.createHref(Ee);return me({fullPath:Ee,hash:ue,query:r===ol?pg(D.query):D.query||{}},Q,{redirectedFrom:void 0,href:ie})}function ee(D){return typeof D=="string"?Pi(n,D,c.value.path):me({},D)}function J(D,W){if(h!==D)return qn(8,{from:W,to:D})}function le(D){return v(D)}function Se(D){return le(me(ee(D),{replace:!0}))}function z(D){const W=D.matched[D.matched.length-1];if(W&&W.redirect){const{redirect:q}=W;let Q=typeof q=="function"?q(D):q;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=ee(Q):{path:Q},Q.params={}),me({query:D.query,hash:D.hash,params:"path"in Q?{}:D.params},Q)}}function v(D,W){const q=h=G(D),Q=c.value,ue=D.state,Ee=D.force,ie=D.replace===!0,y=z(q);if(y)return v(me(ee(y),{state:typeof y=="object"?me({},ue,y.state):ue,force:Ee,replace:ie}),W||q);const I=q;I.redirectedFrom=W;let R;return!Ee&&Ap(r,Q,q)&&(R=qn(16,{to:I,from:Q}),oe(Q,Q,!0,!1)),(R?Promise.resolve(R):g(I,Q)).catch(P=>Ct(P)?Ct(P,2)?P:L(P):C(P,I,Q)).then(P=>{if(P){if(Ct(P,2))return v(me({replace:ie},ee(P.to),{state:typeof P.to=="object"?me({},ue,P.to.state):ue,force:Ee}),W||I)}else P=u(I,Q,!0,ie,ue);return d(I,Q,P),P})}function w(D,W){const q=J(D,W);return q?Promise.reject(q):Promise.resolve()}function g(D,W){let q;const[Q,ue,Ee]=Ig(D,W);q=ki(Q.reverse(),"beforeRouteLeave",D,W);for(const y of Q)y.leaveGuards.forEach(I=>{q.push(Vt(I,D,W))});const ie=w.bind(null,D,W);return q.push(ie),Rn(q).then(()=>{q=[];for(const y of i.list())q.push(Vt(y,D,W));return q.push(ie),Rn(q)}).then(()=>{q=ki(ue,"beforeRouteUpdate",D,W);for(const y of ue)y.updateGuards.forEach(I=>{q.push(Vt(I,D,W))});return q.push(ie),Rn(q)}).then(()=>{q=[];for(const y of D.matched)if(y.beforeEnter&&!W.matched.includes(y))if(pt(y.beforeEnter))for(const I of y.beforeEnter)q.push(Vt(I,D,W));else q.push(Vt(y.beforeEnter,D,W));return q.push(ie),Rn(q)}).then(()=>(D.matched.forEach(y=>y.enterCallbacks={}),q=ki(Ee,"beforeRouteEnter",D,W),q.push(ie),Rn(q))).then(()=>{q=[];for(const y of o.list())q.push(Vt(y,D,W));return q.push(ie),Rn(q)}).catch(y=>Ct(y,8)?y:Promise.reject(y))}function d(D,W,q){for(const Q of l.list())Q(D,W,q)}function u(D,W,q,Q,ue){const Ee=J(D,W);if(Ee)return Ee;const ie=W===Ut,y=On?history.state:{};q&&(Q||ie?s.replace(D.fullPath,me({scroll:ie&&y&&y.scroll},ue)):s.push(D.fullPath,ue)),c.value=D,oe(D,W,q,ie),L()}let a;function f(){a||(a=s.listen((D,W,q)=>{if(!An.listening)return;const Q=G(D),ue=z(Q);if(ue){v(me(ue,{replace:!0}),Q).catch(pr);return}h=Q;const Ee=c.value;On&&Np(Xa(Ee.fullPath,q.delta),li()),g(Q,Ee).catch(ie=>Ct(ie,12)?ie:Ct(ie,2)?(v(ie.to,Q).then(y=>{Ct(y,20)&&!q.delta&&q.type===Rr.pop&&s.go(-1,!1)}).catch(pr),Promise.reject()):(q.delta&&s.go(-q.delta,!1),C(ie,Q,Ee))).then(ie=>{ie=ie||u(Q,Ee,!1),ie&&(q.delta&&!Ct(ie,8)?s.go(-q.delta,!1):q.type===Rr.pop&&Ct(ie,20)&&s.go(-1,!1)),d(Q,Ee,ie)}).catch(pr)}))}let p=ar(),T=ar(),E;function C(D,W,q){L(D);const Q=T.list();return Q.length?Q.forEach(ue=>ue(D,W,q)):console.error(D),Promise.reject(D)}function M(){return E&&c.value!==Ut?Promise.resolve():new Promise((D,W)=>{p.add([D,W])})}function L(D){return E||(E=!D,f(),p.list().forEach(([W,q])=>D?q(D):W()),p.reset()),D}function oe(D,W,q,Q){const{scrollBehavior:ue}=t;if(!On||!ue)return Promise.resolve();const Ee=!q&&Lp(Xa(D.fullPath,0))||(Q||!q)&&history.state&&history.state.scroll||null;return Pc().then(()=>ue(D,W,Ee)).then(ie=>ie&&xp(ie)).catch(ie=>C(ie,D,W))}const pe=D=>s.go(D);let Ce;const Xe=new Set,An={currentRoute:c,listening:!0,addRoute:k,removeRoute:V,hasRoute:X,getRoutes:K,resolve:G,options:t,push:le,replace:Se,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:T.add,isReady:M,install(D){const W=this;D.component("RouterLink",_g),D.component("RouterView",pu),D.config.globalProperties.$router=W,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>hn(c)}),On&&!Ce&&c.value===Ut&&(Ce=!0,le(s.location).catch(ue=>{}));const q={};for(const ue in Ut)q[ue]=ot(()=>c.value[ue]);D.provide(No,W),D.provide(fu,Fr(q)),D.provide(no,c);const Q=D.unmount;Xe.add(D),D.unmount=function(){Xe.delete(D),Xe.size<1&&(h=Ut,a&&a(),a=null,c.value=Ut,Ce=!1,E=!1),Q()}}};return An}function Rn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Ig(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>Bn(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>Bn(h,c))||s.push(c))}return[n,r,s]}const Tg={__name:"App",setup(t){return(e,n)=>(jr(),ii(hn(pu)))}},Sg="modulepreload",Ag=function(t){return"/goldsmithjk/"+t},hl={},Ue=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Ag(i),i in hl)return;hl[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let m=s.length-1;m>=0;m--){const b=s[m];if(b.href===i&&(!o||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":Sg,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((m,b)=>{h.addEventListener("load",m),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Cg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Rg={},Og={class:"navbar navbar-expand-lg navbar-light bg-light"},Pg={class:"container-fluid"},kg=ce("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[ce("span",{class:"navbar-toggler-icon"})],-1),Dg={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},xg={class:"navbar-nav me-auto mb-2 mb-lg-0"},Ng={class:"nav-item"},Lg={class:"nav-item"},$g={class:"nav-item"},Mg={class:"nav-item"},Ug={class:"nav-item"},Fg={class:"nav-item"},jg={class:"nav-item"},Vg={class:"navbar-nav me-auto mb-2 mb-lg-0"},Bg={class:"nav-item dropdown"},qg=ce("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Settings ",-1),Hg={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},zg=ce("li",null,[ce("a",{class:"dropdown-item",href:"#"},"Profile Setting")],-1),Wg=ce("li",null,[ce("hr",{class:"dropdown-divider"})],-1),Kg={class:"d-flex"},Gg={class:"navbar-nav me-auto mb-2 mb-lg-0"},Yg={class:"nav-item dropdown btn btn-outline-success"},Jg=ce("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," New ",-1),Qg={class:"dropdown-menu","aria-labelledby":"navbarDropdown"};function Xg(t,e){const n=yf("RouterLink");return jr(),Ff(it,null,[ce("nav",Og,[ce("div",Pg,[we(n,{class:"navbar-brand",to:"/"},{default:et(()=>[ce("h3",null,oc(this.$appShortName),1)]),_:1}),kg,ce("div",Dg,[ce("ul",xg,[ce("li",Ng,[we(n,{to:"/invoices",class:"nav-link active","aria-current":"page"},{default:et(()=>[lt("Invoices")]),_:1})]),ce("li",Lg,[we(n,{to:"/customers",class:"nav-link active","aria-current":"page"},{default:et(()=>[lt("Customers")]),_:1})]),ce("li",$g,[we(n,{to:"/products",class:"nav-link active","aria-current":"page"},{default:et(()=>[lt("Products")]),_:1})]),ce("li",Mg,[we(n,{to:"/payments",class:"nav-link active","aria-current":"page"},{default:et(()=>[lt("Cash Transactions")]),_:1})]),ce("li",Ug,[we(n,{to:"/goldtransactions",class:"nav-link active","aria-current":"page"},{default:et(()=>[lt("Gold Transactions")]),_:1})]),ce("li",Fg,[we(n,{to:"/rates",class:"nav-link active","aria-current":"page"},{default:et(()=>[lt("Metal Rate")]),_:1})]),ce("li",jg,[ce("ul",Vg,[ce("li",Bg,[qg,ce("ul",Hg,[zg,ce("li",null,[we(n,{to:"/settings/application",class:"dropdown-item","aria-current":"page"},{default:et(()=>[lt(" General Settings")]),_:1})]),Wg,ce("li",null,[we(n,{to:"/logout",class:"nav-link active","aria-current":"page"},{default:et(()=>[lt("Logout ")]),_:1})])])])])])]),ce("form",Kg,[ce("ul",Gg,[ce("li",Yg,[Jg,ce("ul",Qg,[ce("li",null,[we(n,{to:"/invoice",class:"dropdown-item"},{default:et(()=>[lt(" Invoice")]),_:1})]),ce("li",null,[we(n,{to:"/payment",class:"dropdown-item"},{default:et(()=>[lt(" Payment")]),_:1})])])])])])])])]),wf(t.$slots,"default")],64)}const Zg=Cg(Rg,[["render",Xg]]),em={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},tm={class:"display-4 fw-normal"},nm=ce("p",{class:"fs-5 text-body-secondary"},null,-1),rm={mounted:function(){}},sm=Object.assign(rm,{__name:"HomeView",setup(t){return(e,n)=>(jr(),ii(Zg,null,{default:et(()=>[ce("div",em,[ce("h2",tm,"Welcome to "+oc(e.$appname),1),nm])]),_:1}))}}),gu=Eg({history:Fp("/goldsmithjk/"),routes:[{path:"/",name:"home",component:sm},{path:"/invoice",name:"invoice",component:()=>Ue(()=>import("./Invoice-d4dc96e0.js"),["assets/Invoice-d4dc96e0.js","assets/InvoiceItemTable-410199db.js","assets/CAlert-6c56d511.js","assets/CustomerPicker-62861335.js"])},{path:"/invoices/:invoicenumber",name:"invoicereport",component:()=>Ue(()=>import("./InvoiceReport-5bc6b6e9.js"),["assets/InvoiceReport-5bc6b6e9.js","assets/InvoiceItemTable-410199db.js","assets/CAlert-6c56d511.js"])},{path:"/login",name:"login",component:()=>Ue(()=>import("./Login-075b01a5.js"),["assets/Login-075b01a5.js","assets/CAlert-6c56d511.js"])},{path:"/logout",name:"logout",component:()=>Ue(()=>import("./Logout-2cd659ff.js"),["assets/Logout-2cd659ff.js","assets/CAlert-6c56d511.js"])},{path:"/customers",name:"customers",component:()=>Ue(()=>import("./Customers-bda67f8d.js"),["assets/Customers-bda67f8d.js","assets/DynamicTable-69364c84.js","assets/DynamicDialog-8066ab0c.js","assets/CAlert-6c56d511.js"])},{path:"/users",name:"users",component:()=>Ue(()=>import("./Users-e5884c34.js"),["assets/Users-e5884c34.js","assets/DynamicTable-69364c84.js","assets/DynamicDialog-8066ab0c.js","assets/CAlert-6c56d511.js"])},{path:"/invoices",name:"invoices",component:()=>Ue(()=>import("./Invoices-0c7980a9.js"),["assets/Invoices-0c7980a9.js","assets/CAlert-6c56d511.js","assets/DynamicTable-69364c84.js"])},{path:"/rates",name:"rates",component:()=>Ue(()=>import("./Rates-7550d3ff.js"),["assets/Rates-7550d3ff.js","assets/DynamicTable-69364c84.js","assets/CAlert-6c56d511.js"])},{path:"/products",name:"products",component:()=>Ue(()=>import("./Products-115eb1c1.js"),["assets/Products-115eb1c1.js","assets/DynamicTable-69364c84.js","assets/DynamicDialog-8066ab0c.js","assets/CAlert-6c56d511.js"])},{path:"/settings/application",name:"applicationsettings",component:()=>Ue(()=>import("./Applicationsettings-7ab3e92d.js"),["assets/Applicationsettings-7ab3e92d.js","assets/CAlert-6c56d511.js"])},{path:"/settings/product",name:"productSettings",component:()=>Ue(()=>import("./ProductSettings-68312fb5.js"),["assets/ProductSettings-68312fb5.js","assets/DynamicTable-69364c84.js","assets/DynamicDialog-8066ab0c.js","assets/CAlert-6c56d511.js"])},{path:"/settings/customer",name:"customerSettings",component:()=>Ue(()=>import("./CustomerSettings-e7764c1c.js"),["assets/CustomerSettings-e7764c1c.js","assets/DynamicTable-69364c84.js","assets/DynamicDialog-8066ab0c.js","assets/CAlert-6c56d511.js"])},{path:"/payments",name:"payments",component:()=>Ue(()=>import("./Payments-c4f8fa93.js"),["assets/Payments-c4f8fa93.js","assets/DynamicTable-69364c84.js","assets/CAlert-6c56d511.js"])},{path:"/payment",name:"payment",component:()=>Ue(()=>import("./Payment-9f57c8aa.js"),["assets/Payment-9f57c8aa.js","assets/CustomerPicker-62861335.js","assets/CAlert-6c56d511.js"])},{path:"/payments/:receiptNumber",name:"paymentReport",component:()=>Ue(()=>import("./PaymentReport-75016a3b.js"),["assets/PaymentReport-75016a3b.js","assets/CAlert-6c56d511.js"])},{path:"/goldtransactions",name:"goldtransactions",component:()=>Ue(()=>import("./GoldTransactions-7bafd6db.js"),["assets/GoldTransactions-7bafd6db.js","assets/DynamicTable-69364c84.js","assets/CAlert-6c56d511.js"])},{path:"/goldtransaction",name:"goldtransaction",component:()=>Ue(()=>import("./GoldTransaction-df2eda57.js"),["assets/GoldTransaction-df2eda57.js","assets/CustomerPicker-62861335.js","assets/CAlert-6c56d511.js"])}]});class Hn{static getTodayAsString(){return new Date().toISOString().split("T")[0]}static showAlert(e,n,r){e.alertmode=r,e.alertmsg=n,setTimeout(()=>{e.alertmsg="",e.alertmode=""},e.$alertShowDuration??2e3)}static getAsFormattedDate(e){return new Date(e).toLocaleString().toString()}static getNowAsMilliSeconds(){return new Date().getTime()}static capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}static capitalizeFirstLetterOfEveryWordForVariableName(e){if(e){var n=e.replace(/([A-Z])/g," $1");return n.charAt(0).toUpperCase()+n.slice(1)}}static capitalizeFirstLetterOfEveryWord(e){const n=e.split(" ");for(let r=0;r<n.length;r++)n[r]=Hn.capitalizeFirstLetter(n[r]);return n.join(" ")}static doConvert(e){if(!e)return"NA";e=Number(e.toFixed(3));var n=["","thousand","million","billion","trillion"],r=["zero","one","two","three","four","five","six","seven","eight","nine"],s=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],i=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if(e=e.toString(),e=e.replace(/[\, ]/g,""),e!=parseFloat(e))return"not a number ";var o=e.indexOf(".");if(o==-1&&(o=e.length),o>15)return"too big";for(var l=e.split(""),c="",h=0,m=0;m<o;m++)(o-m)%3==2?l[m]=="1"?(c+=s[Number(l[m+1])]+" ",m++,h=1):l[m]!=0&&(c+=i[l[m]-2]+" ",h=1):l[m]!=0&&(c+=r[l[m]]+" ",(o-m)%3==0&&(c+="hundred "),h=1),(o-m)%3==1&&(h&&(c+=n[(o-m-1)/3]+" "),h=0);if(o!=e.length){var b=e.length;c+="point ";for(var m=o+1;m<b;m++)c+=r[l[m]]+" "}return Hn.capitalizeFirstLetterOfEveryWord(c.replace(/\s+/g," "))}static getAsFormattedAmount(e){return e?e.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}):"-"}}class vb{static generateId(e){return e+"-"+new Date().getTime().toString()+parseInt(Math.random()*1e4)}static generateInvoiceNumber(){return this.generateId("INV")}static generateReceiptNumber(){return this.generateId("PMT")}static generateGoldReceiptNumber(){return this.generateId("GLD")}static generateQutationNumber(){return this.generateId("TMP")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},im=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,m=i>>2,b=(i&3)<<4|l>>4;let A=(l&15)<<2|h>>6,k=h&63;c||(k=64,o||(A=64)),r.push(n[m],n[b],n[A],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):im(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const b=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||b==null)throw new om;const A=i<<2|l>>4;if(r.push(A),h!==64){const k=l<<4&240|h>>2;if(r.push(k),b!==64){const V=h<<6&192|b;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class om extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const am=function(t){const e=mu(t);return yu.encodeByteArray(e,!0)},Ds=function(t){return am(t).replace(/\./g,"")},_u=function(t){try{return yu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=()=>lm().__FIREBASE_DEFAULTS__,um=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_u(t[1]);return e&&JSON.parse(e)},Lo=()=>{try{return cm()||um()||dm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vu=t=>{var e,n;return(n=(e=Lo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hm=t=>{const e=vu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wu=()=>{var t;return(t=Lo())===null||t===void 0?void 0:t.config},bu=t=>{var e;return(e=Lo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Ds(JSON.stringify(n)),Ds(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function mm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ym(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _m(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vm(){try{return typeof indexedDB=="object"}catch{return!1}}function wm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="FirebaseError";class $t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bm,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vr.prototype.create)}}class Vr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Em(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new $t(s,l,r)}}function Em(t,e){return t.replace(Im,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Im=/\{\$([^}]+)}/g;function Tm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fl(i)&&fl(o)){if(!xs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ur(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sm(t,e){const n=new Am(t,e);return n.subscribe.bind(n)}class Am{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Di),s.error===void 0&&(s.error=Di),s.complete===void 0&&(s.complete=Di);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Di(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pm(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Om(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Om(t){return t===on?void 0:t}function Pm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Dm={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},xm=ge.INFO,Nm={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Lm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Nm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $o{constructor(e){this.name=e,this._logLevel=xm,this._logHandler=Lm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const $m=(t,e)=>e.some(n=>t instanceof n);let pl,gl;function Mm(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Um(){return gl||(gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eu=new WeakMap,ro=new WeakMap,Iu=new WeakMap,xi=new WeakMap,Mo=new WeakMap;function Fm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eu.set(n,t)}).catch(()=>{}),Mo.set(e,t),e}function jm(t){if(ro.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ro.set(t,e)}let so={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ro.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vm(t){so=t(so)}function Bm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ni(this),e,...n);return Iu.set(r,e.sort?e.sort():[e]),Gt(r)}:Um().includes(t)?function(...e){return t.apply(Ni(this),e),Gt(Eu.get(this))}:function(...e){return Gt(t.apply(Ni(this),e))}}function qm(t){return typeof t=="function"?Bm(t):(t instanceof IDBTransaction&&jm(t),$m(t,Mm())?new Proxy(t,so):t)}function Gt(t){if(t instanceof IDBRequest)return Fm(t);if(xi.has(t))return xi.get(t);const e=qm(t);return e!==t&&(xi.set(t,e),Mo.set(e,t)),e}const Ni=t=>Mo.get(t);function Hm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Gt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Gt(o.result),c.oldVersion,c.newVersion,Gt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const zm=["get","getKey","getAll","getAllKeys","count"],Wm=["put","add","delete","clear"],Li=new Map;function ml(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Li.get(e))return Li.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Wm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zm.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Li.set(e,i),i}Vm(t=>({...t,get:(e,n,r)=>ml(e,n)||t.get(e,n,r),has:(e,n)=>!!ml(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const io="@firebase/app",yl="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new $o("@firebase/app"),Ym="@firebase/app-compat",Jm="@firebase/analytics-compat",Qm="@firebase/analytics",Xm="@firebase/app-check-compat",Zm="@firebase/app-check",ey="@firebase/auth",ty="@firebase/auth-compat",ny="@firebase/database",ry="@firebase/database-compat",sy="@firebase/functions",iy="@firebase/functions-compat",oy="@firebase/installations",ay="@firebase/installations-compat",ly="@firebase/messaging",cy="@firebase/messaging-compat",uy="@firebase/performance",dy="@firebase/performance-compat",hy="@firebase/remote-config",fy="@firebase/remote-config-compat",py="@firebase/storage",gy="@firebase/storage-compat",my="@firebase/firestore",yy="@firebase/firestore-compat",_y="firebase",vy="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="[DEFAULT]",wy={[io]:"fire-core",[Ym]:"fire-core-compat",[Qm]:"fire-analytics",[Jm]:"fire-analytics-compat",[Zm]:"fire-app-check",[Xm]:"fire-app-check-compat",[ey]:"fire-auth",[ty]:"fire-auth-compat",[ny]:"fire-rtdb",[ry]:"fire-rtdb-compat",[sy]:"fire-fn",[iy]:"fire-fn-compat",[oy]:"fire-iid",[ay]:"fire-iid-compat",[ly]:"fire-fcm",[cy]:"fire-fcm-compat",[uy]:"fire-perf",[dy]:"fire-perf-compat",[hy]:"fire-rc",[fy]:"fire-rc-compat",[py]:"fire-gcs",[gy]:"fire-gcs-compat",[my]:"fire-fst",[yy]:"fire-fst-compat","fire-js":"fire-js",[_y]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new Map,ao=new Map;function by(t,e){try{t.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(ao.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;ao.set(e,t);for(const n of Ns.values())by(n,t);return!0}function Uo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yt=new Vr("app","Firebase",Ey);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=vy;function Tu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(n||(n=wu()),!n)throw Yt.create("no-options");const i=Ns.get(s);if(i){if(xs(n,i.options)&&xs(r,i.config))return i;throw Yt.create("duplicate-app",{appName:s})}const o=new km(s);for(const c of ao.values())o.addComponent(c);const l=new Iy(n,r,o);return Ns.set(s,l),l}function Su(t=oo){const e=Ns.get(t);if(!e&&t===oo&&wu())return Tu();if(!e)throw Yt.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=wy[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(l.join(" "));return}zn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="firebase-heartbeat-database",Sy=1,Or="firebase-heartbeat-store";let $i=null;function Au(){return $i||($i=Hm(Ty,Sy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Or)}}}).catch(t=>{throw Yt.create("idb-open",{originalErrorMessage:t.message})})),$i}async function Ay(t){try{return await(await Au()).transaction(Or).objectStore(Or).get(Cu(t))}catch(e){if(e instanceof $t)mn.warn(e.message);else{const n=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(n.message)}}}async function _l(t,e){try{const r=(await Au()).transaction(Or,"readwrite");await r.objectStore(Or).put(e,Cu(t)),await r.done}catch(n){if(n instanceof $t)mn.warn(n.message);else{const r=Yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function Cu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=1024,Ry=30*24*60*60*1e3;class Oy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ky(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ry}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vl(),{heartbeatsToSend:n,unsentEntries:r}=Py(this._heartbeatsCache.heartbeats),s=Ds(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function vl(){return new Date().toISOString().substring(0,10)}function Py(t,e=Cy){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wl(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wl(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ky{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vm()?wm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ay(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _l(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wl(t){return Ds(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t){zn(new gn("platform-logger",e=>new Km(e),"PRIVATE")),zn(new gn("heartbeat",e=>new Oy(e),"PRIVATE")),Jt(io,yl,t),Jt(io,yl,"esm2017"),Jt("fire-js","")}Dy("");var xy="firebase",Ny="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(xy,Ny,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new $o("@firebase/firestore");function yn(t,...e){if(Wn.logLevel<=ge.DEBUG){const n=e.map(Fo);Wn.debug(`Firestore (${Zn}): ${t}`,...n)}}function ci(t,...e){if(Wn.logLevel<=ge.ERROR){const n=e.map(Fo);Wn.error(`Firestore (${Zn}): ${t}`,...n)}}function Ru(t,...e){if(Wn.logLevel<=ge.WARN){const n=e.map(Fo);Wn.warn(`Firestore (${Zn}): ${t}`,...n)}}function Fo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: `+t;throw ci(e),new Error(e)}function rt(t,e){t||_e()}function qr(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="ok",jo="cancelled",$n="unknown",Z="invalid-argument",Ou="deadline-exceeded",Pu="not-found",Ly="already-exists",ku="permission-denied",Ls="unauthenticated",Du="resource-exhausted",_n="failed-precondition",Vo="aborted",xu="out-of-range",Bo="unimplemented",Nu="internal",Lu="unavailable",$y="data-loss";class Y extends $t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class My{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class Uy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Fy{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(rt(typeof e.accessToken=="string"),new $u(e.accessToken,new Ye(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class jy{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Vy{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new jy(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class By{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qy{constructor(e){this.l=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(rt(typeof e.token=="string"),new By(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Pr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pr&&e.projectId===this.projectId&&e.database===this.database}}class kr{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(),r===void 0?r=e.length-n:r>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends kr{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(Z,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const zy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends kr{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return zy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(Z,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(Z,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(Z,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(Z,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.path=e}static fromPath(e){return new Me(xe.fromString(e))}static fromName(e){return new Me(xe.fromString(e).popFirst(5))}static empty(){return new Me(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Me(new xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e,n){if(!n)throw new Y(Z,`Function ${t}() cannot be called with an empty ${e}.`)}function El(t){if(!Me.isDocumentKey(t))throw new Y(Z,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Il(t){if(Me.isDocumentKey(t))throw new Y(Z,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ui(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function Hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(Z,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ui(t);throw new Y(Z,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Wy(t,e){if(e<=0)throw new Y(Z,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as=null;function Ky(){return as===null?as=268435456+Math.round(2147483648*Math.random()):as++,"0x"+as.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t){return t==null}function $s(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tl,de;function Sl(t){if(t===void 0)return ci("RPC_ERROR","HTTP error has no status"),$n;switch(t){case 200:return bl;case 400:return _n;case 401:return Ls;case 403:return ku;case 404:return Pu;case 409:return Vo;case 416:return xu;case 429:return Du;case 499:return jo;case 500:return $n;case 501:return Bo;case 503:return Lu;case 504:return Ou;default:return t>=200&&t<300?bl:t>=400&&t<500?_n:t>=500&&t<600?Nu:$n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(de=Tl||(Tl={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";class Yy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.m=n+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,n,r,s,i){const o=Ky(),l=this.I(e,n);yn("RestConnection",`Sending RPC '${e}' ${o}:`,l,r);const c={};return this.T(c,s,i),this.A(e,l,c,r).then(h=>(yn("RestConnection",`Received RPC '${e}' ${o}: `,h),h),h=>{throw Ru("RestConnection",`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",r),h})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}T(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}I(e,n){const r=Gy[e];return`${this.m}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){var i;const o=JSON.stringify(s);let l;try{l=await this.P(n,{method:"POST",headers:r,body:o})}catch(c){const h=c;throw new Y(Sl(h.status),"Request failed with error: "+h.statusText)}if(!l.ok){let c=await l.json();Array.isArray(c)&&(c=c[0]);const h=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new Y(Sl(l.status),`Request failed with error: ${h??l.statusText}`)}return l.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Jy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Le(t,e){return t<e?-1:t>e?1:0}function ju(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Xy("Invalid base64 string: "+s):s}}(e);return new xt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const Zy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vn(t){if(rt(!!t),typeof t=="string"){let e=0;const n=Zy.exec(t);if(rt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(Z,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(Z,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(Z,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(Z,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bu(t){const e=t.mapValue.fields.__previous_value__;return Vu(e)?Bu(e):e}function xr(t){const e=vn(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls={fields:{__type__:{stringValue:"__max__"}}};function wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vu(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:_e()}function Ms(t,e){if(t===e)return!0;const n=wn(t);if(n!==wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xr(t).isEqual(xr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=vn(r.timestampValue),o=vn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Dr(r.bytesValue).isEqual(Dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return De(r.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(r.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return De(r.integerValue)===De(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=De(r.doubleValue),o=De(s.doubleValue);return i===o?$s(i)===$s(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ju(t.arrayValue.values||[],e.arrayValue.values||[],Ms);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Al(i)!==Al(o))return!1;for(const l in i)if(i.hasOwnProperty(l)&&(o[l]===void 0||!Ms(i[l],o[l])))return!1;return!0}(t,e);default:return _e()}}function Nr(t,e){return(t.values||[]).find(n=>Ms(n,e))!==void 0}function Us(t,e){if(t===e)return 0;const n=wn(t),r=wn(e);if(n!==r)return Le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=De(s.integerValue||s.doubleValue),l=De(i.integerValue||i.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(t,e);case 3:return Cl(t.timestampValue,e.timestampValue);case 4:return Cl(xr(t),xr(e));case 5:return Le(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Dr(s),l=Dr(i);return o.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),l=i.split("/");for(let c=0;c<o.length&&c<l.length;c++){const h=Le(o[c],l[c]);if(h!==0)return h}return Le(o.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=Le(De(s.latitude),De(i.latitude));return o!==0?o:Le(De(s.longitude),De(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],l=i.values||[];for(let c=0;c<o.length&&c<l.length;++c){const h=Us(o[c],l[c]);if(h)return h}return Le(o.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===ls&&i===ls)return 0;if(s===ls)return 1;if(i===ls)return-1;const o=s.fields||{},l=Object.keys(o),c=i.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let m=0;m<l.length&&m<h.length;++m){const b=Le(l[m],h[m]);if(b!==0)return b;const A=Us(o[l[m]],c[h[m]]);if(A!==0)return A}return Le(l.length,h.length)}(t.mapValue,e.mapValue);default:throw _e()}}function Cl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Le(t,e);const n=vn(t),r=vn(e),s=Le(n.seconds,r.seconds);return s!==0?s:Le(n.nanos,r.nanos)}function Rl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qu(t){return!!t&&"arrayValue"in t}function Ol(t){return!!t&&"nullValue"in t}function Pl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mi(t){return!!t&&"mapValue"in t}function mr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class kl{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{}class mt extends Hu{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new e_(e,n,r):n==="array-contains"?new r_(e,r):n==="in"?new s_(e,r):n==="not-in"?new i_(e,r):n==="array-contains-any"?new o_(e,r):new mt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new t_(e,r):new n_(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Us(n,this.value)):n!==null&&wn(this.value)===wn(n)&&this.matchesComparison(Us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wr extends Hu{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Wr(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class e_ extends mt{constructor(e,n,r){super(e,n,r),this.key=Me.fromName(r.referenceValue)}matches(e){const n=Me.comparator(e.key,this.key);return this.matchesComparison(n)}}class t_ extends mt{constructor(e,n){super(e,"in",n),this.keys=zu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class n_ extends mt{constructor(e,n){super(e,"not-in",n),this.keys=zu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Me.fromName(r.referenceValue))}class r_ extends mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qu(n)&&Nr(n.arrayValue,this.value)}}class s_ extends mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Nr(this.value.arrayValue,n)}}class i_ extends mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Nr(this.value.arrayValue,n)}}class o_ extends mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Nr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Oe(e)}static min(){return new Oe(new st(0,0))}static max(){return new Oe(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Fs(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Fs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cs(this.root,e,this.comparator,!1)}getReverseIterator(){return new cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cs(this.root,e,this.comparator,!0)}}class cs{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=s??Fe.EMPTY,this.right=i??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Fe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.comparator=e,this.data=new Fs(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dl(this.data.getIterator())}getIteratorFrom(e){return new Dl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new js(this.comparator);return n.data=e,n}}class Dl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new bn([])}unionWith(e){let n=new js(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ju(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mr(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=mr(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ms(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new nt(mr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new wt(e,0,Oe.min(),Oe.min(),Oe.min(),nt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,Oe.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,Oe.min(),Oe.min(),nt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,Oe.min(),Oe.min(),nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.S=null}}function xl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new a_(t,e,n,r,s,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function Ho(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function l_(t){return t.collectionGroup!==null}function Nl(t){const e=qr(t);if(e.q===null){e.q=[];const n=hi(e),r=Ho(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new yr(n)),e.q.push(new yr(tt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new yr(tt.keyField(),i))}}}return e.q}function c_(t){const e=qr(t);if(!e.O)if(e.limitType==="F")e.O=xl(e.path,e.collectionGroup,Nl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Nl(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new yr(i.field,o))}const r=e.endAt?new kl(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new kl(e.startAt.position,e.startAt.inclusive):null;e.O=xl(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}function lo(t,e){e.getFirstInequalityField(),hi(t);const n=t.filters.concat([e]);return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!$s(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(r)?"-0":r}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this._=void 0}}class d_ extends fi{}class h_ extends fi{constructor(e){super(),this.elements=e}}class f_ extends fi{constructor(e){super(),this.elements=e}}class p_ extends fi{constructor(e,n){super(),this.serializer=e,this.k=n}}class Et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class pi{}class Wu extends pi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zo extends pi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Ku extends pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gu extends pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),m_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),y_=(()=>({and:"AND",or:"OR"}))();class __{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function co(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function w_(t,e){return co(t,e.toTimestamp())}function _r(t){return rt(!!t),Oe.fromTimestamp(function(e){const n=vn(e);return new st(n.seconds,n.nanos)}(t))}function Wo(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Vs(t,e){return Wo(t.databaseId,e.path)}function uo(t,e){const n=function(s){const i=xe.fromString(s);return rt(Qu(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(Z,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(Z,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Me((rt((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Ll(t,e){return Wo(t.databaseId,e)}function Yu(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $l(t,e,n){return{name:Vs(t,e),fields:n.value.mapValue.fields}}function b_(t,e){return"found"in e?function(n,r){rt(!!r.found),r.found.name,r.found.updateTime;const s=uo(n,r.found.name),i=_r(r.found.updateTime),o=r.found.createTime?_r(r.found.createTime):Oe.min(),l=new nt({mapValue:{fields:r.found.fields}});return wt.newFoundDocument(s,i,o,l)}(t,e):"missing"in e?function(n,r){rt(!!r.missing),rt(!!r.readTime);const s=uo(n,r.missing),i=_r(r.readTime);return wt.newNoDocument(s,i)}(t,e):_e()}function E_(t,e){let n;if(e instanceof Wu)n={update:$l(t,e.key,e.value)};else if(e instanceof Ku)n={delete:Vs(t,e.key)};else if(e instanceof zo)n={update:$l(t,e.key,e.data),updateMask:C_(e.fieldMask)};else{if(!(e instanceof Gu))return _e();n={verify:Vs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof d_)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof h_)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof f_)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof p_)return{fieldPath:i.field.canonicalString(),increment:o.k};throw _e()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:w_(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:_e()}(t,e.precondition)),n}function I_(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ll(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ll(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Ju(Wr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Pn(m.field),direction:T_(m.dir)}}(h))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,h){return c.useProto3Json||Fu(h)?h:{value:h}}(t,e.limit);var l;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(l=e.startAt).inclusive,values:l.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function T_(t){return g_[t]}function S_(t){return m_[t]}function A_(t){return y_[t]}function Pn(t){return{fieldPath:t.canonicalString()}}function Ju(t){return t instanceof mt?function(e){if(e.op==="=="){if(Pl(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NAN"}};if(Ol(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pl(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NOT_NAN"}};if(Ol(e.value))return{unaryFilter:{field:Pn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pn(e.field),op:S_(e.op),value:e.value}}}(t):t instanceof Wr?function(e){const n=e.getFilters().map(r=>Ju(r));return n.length===1?n[0]:{compositeFilter:{op:A_(e.op),filters:n}}}(t):_e()}function C_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){return new __(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r=1e3,s=1.5,i=6e4){this.C=e,this.timerId=n,this.M=r,this.L=s,this.U=i,this.j=0,this.B=null,this.W=Date.now(),this.reset()}reset(){this.j=0}G(){this.j=this.U}K(e){this.cancel();const n=Math.floor(this.j+this.Y()),r=Math.max(0,Date.now()-this.W),s=Math.max(0,n-r);s>0&&yn("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.j} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.B=this.C.enqueueAfterDelay(this.timerId,s,()=>(this.W=Date.now(),e())),this.j*=this.L,this.j<this.M&&(this.j=this.M),this.j>this.U&&(this.j=this.U)}H(){this.B!==null&&(this.B.skipDelay(),this.B=null)}cancel(){this.B!==null&&(this.B.cancel(),this.B=null)}Y(){return(Math.random()-.5)*this.j}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J=!1}X(){if(this.J)throw new Y(_n,"The client has already been terminated.")}v(e,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ls&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y($n,s.toString())})}R(e,n,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ls&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y($n,i.toString())})}terminate(){this.J=!0}}async function Zu(t,e){const n=qr(t),r=Yu(n.serializer)+"/documents",s={writes:e.map(i=>E_(n.serializer,i))};await n.v("Commit",r,s)}async function ed(t,e){const n=qr(t),r=Yu(n.serializer)+"/documents",s={documents:e.map(c=>Vs(n.serializer,c))},i=await n.R("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(c=>{const h=b_(n.serializer,c);o.set(h.key.toString(),h)});const l=[];return e.forEach(c=>{const h=o.get(c.toString());rt(!!h),l.push(h)}),l}async function O_(t,e){const n=qr(t),r=I_(n.serializer,c_(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,l){const c=uo(i,o.name),h=_r(o.updateTime),m=o.createTime?_r(o.createTime):Oe.min(),b=new nt({mapValue:{fields:o.fields}}),A=wt.newFoundDocument(c,h,m,b);return l&&A.setHasCommittedMutations(),l?A.setHasCommittedMutations():A}(n.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map;function gi(t){if(t._terminated)throw new Y(_n,"The client has already been terminated.");if(!vr.has(t)){yn("ComponentProvider","Initializing Datastore");const i=function(c){return new Yy(c,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new Hy(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Uu(s.experimentalLongPollingOptions),s.useFetchStreams))),o=Ko(t._databaseId),l=function(c,h,m,b){return new R_(c,h,m,b)}(t._authCredentials,t._appCheckCredentials,i,o);vr.set(t,l)}var e,n,r,s;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return vr.get(t)}class Ml{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(Z,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(Z,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,i,o,l){if(i===!0&&l===!0)throw new Y(Z,`${s} and ${o} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Kr{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ml({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(_n,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(_n,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ml(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new My;switch(n.type){case"firstParty":return new Vy(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Y(Z,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vr.get(e);n&&(yn("ComponentProvider","Removing Datastore"),vr.delete(e),n.terminate())}(this),Promise.resolve()}}function P_(t,e){const n=typeof t=="object"?t:Su(),r=typeof t=="string"?t:e||"(default)",s=Uo(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=hm("firestore");i&&k_(s,...i)}return s}function k_(t,e,n,r={}){var s;const i=(t=Hr(t,Kr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ru("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,l;if(typeof r.mockUserToken=="string")o=r.mockUserToken,l=Ye.MOCK_USER;else{o=pm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y(Z,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ye(c)}t._authCredentials=new Uy(new $u(o,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}}class en{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new en(this.firestore,e,this._query)}}class Qt extends en{constructor(e,n,r){super(e,n,new di(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new Me(e))}withConverter(e){return new Qt(this.firestore,e,this._path)}}function Ae(t,e,...n){if(t=je(t),Mu("collection","path",e),t instanceof Kr){const r=xe.fromString(e,...n);return Il(r),new Qt(t,null,r)}{if(!(t instanceof Je||t instanceof Qt))throw new Y(Z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Il(r),new Qt(t.firestore,null,r)}}function ke(t,e,...n){if(t=je(t),arguments.length===1&&(e=Qy.N()),Mu("doc","path",e),t instanceof Kr){const r=xe.fromString(e,...n);return El(r),new Je(t,null,new Me(r))}{if(!(t instanceof Je||t instanceof Qt))throw new Y(Z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return El(r),new Je(t.firestore,t instanceof Qt?t.converter:null,new Me(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(xt.fromBase64String(e))}catch(n){throw new Y(Z,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(Z,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(Z,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(Z,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=/^__.*__$/;class x_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zo(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wu(e,this.data,n,this.fieldTransforms)}}class td{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zo(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class Jo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new Jo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.it(e),s}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.tt(),s}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return Bs(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(nd(this.et)&&D_.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class N_{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ko(e)}ft(e,n,r,s=!1){return new Jo({et:e,methodName:n,lt:r,path:tt.emptyPath(),st:!1,ht:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qo(t){const e=t._freezeSettings(),n=Ko(t._databaseId);return new N_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rd(t,e,n,r,s,i={}){const o=t.ft(i.merge||i.mergeFields?2:0,e,n,s);Xo("Data must be an object, but it was:",o,r);const l=sd(r,o);let c,h;if(i.merge)c=new bn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const b of i.mergeFields){const A=ho(e,b,n);if(!o.contains(A))throw new Y(Z,`Field '${A}' is specified in your field mask but missing from your input data.`);od(m,A)||m.push(A)}c=new bn(m),h=o.fieldTransforms.filter(b=>c.covers(b.field))}else c=null,h=o.fieldTransforms;return new x_(new nt(l),c,h)}class yi extends Go{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e.ct(`${this._methodName}() can only appear at the top level of your update data`):e.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yi}}function L_(t,e,n,r){const s=t.ft(1,e,n);Xo("Data must be an object, but it was:",s,r);const i=[],o=nt.empty();zr(r,(c,h)=>{const m=Zo(e,c,n);h=je(h);const b=s.ot(m);if(h instanceof yi)i.push(m);else{const A=Gr(h,b);A!=null&&(i.push(m),o.set(m,A))}});const l=new bn(i);return new td(o,l,s.fieldTransforms)}function $_(t,e,n,r,s,i){const o=t.ft(1,e,n),l=[ho(e,r,n)],c=[s];if(i.length%2!=0)throw new Y(Z,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<i.length;A+=2)l.push(ho(e,i[A])),c.push(i[A+1]);const h=[],m=nt.empty();for(let A=l.length-1;A>=0;--A)if(!od(h,l[A])){const k=l[A];let V=c[A];V=je(V);const K=o.ot(k);if(V instanceof yi)h.push(k);else{const X=Gr(V,K);X!=null&&(h.push(k),m.set(k,X))}}const b=new bn(h);return new td(m,b,o.fieldTransforms)}function M_(t,e,n,r=!1){return Gr(n,t.ft(r?4:3,e))}function Gr(t,e){if(id(t=je(t)))return Xo("Unsupported field value:",e,t),sd(t,e);if(t instanceof Go)return function(n,r){if(!nd(r.et))throw r.ct(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ct(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.st&&e.et!==4)throw e.ct("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let l=Gr(o,r.ut(i));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return u_(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=st.fromDate(n);return{timestampValue:co(r.serializer,s)}}if(n instanceof st){const s=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:co(r.serializer,s)}}if(n instanceof Yo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kn)return{bytesValue:v_(r.serializer,n._byteString)};if(n instanceof Je){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wo(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ct(`Unsupported field value: ${ui(n)}`)}(t,e)}function sd(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,s)=>{const i=Gr(s,e.rt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function id(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Yo||t instanceof Kn||t instanceof Je||t instanceof Go)}function Xo(t,e,n){if(!id(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ui(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function ho(t,e,n){if((e=je(e))instanceof mi)return e._internalPath;if(typeof e=="string")return Zo(t,e);throw Bs("Field path arguments must be of type string or ",t,!1,void 0,n)}const U_=new RegExp("[~\\*/\\[\\]]");function Zo(t,e,n){if(e.search(U_)>=0)throw Bs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mi(...e.split("."))._internalPath}catch{throw Bs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bs(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(Z,l+t+c)}function od(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ad(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ea("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ad extends qs{data(){return super.data()}}class F_{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function ea(t,e){return typeof e=="string"?Zo(t,e):e instanceof mi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{}class na extends ta{}function er(t,e,...n){let r=[];e instanceof ta&&r.push(e),r=r.concat(n),function(s){const i=s.filter(l=>l instanceof ra).length,o=s.filter(l=>l instanceof _i).length;if(i>1||i>0&&o>0)throw new Y(Z,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class _i extends na{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _i(e,n,r)}_apply(e){const n=this._parse(e);return ld(e._query,n),new en(e.firestore,e.converter,lo(e._query,n))}_parse(e){const n=Qo(e.firestore);return function(s,i,o,l,c,h,m){let b;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Y(Z,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Fl(m,h);const A=[];for(const k of m)A.push(Ul(l,s,k));b={arrayValue:{values:A}}}else b=Ul(l,s,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Fl(m,h),b=M_(o,i,m,h==="in"||h==="not-in");return mt.create(c,h,b)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function j_(t,e,n){const r=e,s=ea("where",t);return _i._create(s,r,n)}class ra extends ta{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ra(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const l of o)ld(i,l),i=lo(i,l)}(e._query,n),new en(e.firestore,e.converter,lo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sa extends na{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new sa(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new Y(Z,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Y(Z,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new yr(s,i);return function(l,c){if(Ho(l)===null){const h=hi(l);h!==null&&cd(l,h,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new en(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new di(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Yr(t,e="asc"){const n=e,r=ea("orderBy",t);return sa._create(r,n)}class ia extends na{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ia(e,n,r)}_apply(e){return new en(e.firestore,e.converter,function(n,r,s){return new di(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,s,n.startAt,n.endAt)}(e._query,this._limit,this._limitType))}}function vi(t){return Wy("limit",t),ia._create("limit",t,"F")}function Ul(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new Y(Z,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!l_(e)&&n.indexOf("/")!==-1)throw new Y(Z,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!Me.isDocumentKey(r))throw new Y(Z,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rl(t,new Me(r))}if(n instanceof Je)return Rl(t,n._key);throw new Y(Z,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ui(n)}.`)}function Fl(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(Z,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ld(t,e){if(e.isInequality()){const r=hi(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new Y(Z,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Ho(t);i!==null&&cd(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(Z,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(Z,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function cd(t,e,n){if(!n.isEqual(e))throw new Y(Z,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class oa extends class{convertValue(e,n="none"){switch(wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _e()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Yo(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xr(e));default:return null}}convertTimestamp(e){const n=vn(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);rt(Qu(r));const s=new Pr(r.get(1),r.get(3)),i=new Me(r.popFirst(5));return s.isEqual(n)||ci(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}function At(t){const e=gi((t=Hr(t,Je)).firestore),n=new oa(t.firestore);return ed(e,[t._key]).then(r=>{rt(r.length===1);const s=r[0];return new qs(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)})}function tr(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new Y(Bo,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Hr(t,en))._query);const e=gi(t.firestore),n=new oa(t.firestore);return O_(e,t._query).then(r=>{const s=r.map(i=>new ad(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new F_(t,s)})}function In(t,e,n){const r=ud((t=Hr(t,Je)).converter,e,n),s=rd(Qo(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return Zu(gi(t.firestore),[s.toMutation(t._key,Et.none())])}function us(t,e){if((t=je(t)).firestore!==e)throw new Y(Z,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Y(Z,"Firestore transactions require all reads to be executed before all writes.");const n=await ed(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ku(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=Me.fromPath(r);this.mutations.push(new Gu(s,this.precondition(s)))}),await Zu(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw _e();n=Oe.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new Y(Vo,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Oe.min())?Et.exists(!1):Et.updateTime(n):Et.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Oe.min()))throw new Y(Z,"Can't update a document that doesn't exist.");return Et.updateTime(n)}return Et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_={maxAttempts:5};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.yt=r.maxAttempts,this.gt=new Xu(this.asyncQueue,"transaction_retry")}run(){this.yt-=1,this._t()}_t(){this.gt.K(async()=>{const e=new V_(this.datastore),n=this.vt(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.bt(s)}))}).catch(r=>{this.bt(r)})})}vt(e){try{const n=this.updateFunction(e);return!Fu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}bt(e){this.yt>0&&this.Et(e)?(this.yt-=1,this.asyncQueue.enqueueAndForget(()=>(this._t(),Promise.resolve()))):this.deferred.reject(e)}Et(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!function(r){switch(r){default:return _e();case jo:case $n:case Ou:case Du:case Nu:case Lu:case Ls:return!1;case Z:case Pu:case Ly:case ku:case _n:case Vo:case xu:case Bo:case $y:return!0}}(n)}return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new aa(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(jo,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.It=Promise.resolve(),this.Tt=[],this.At=!1,this.Rt=[],this.Pt=null,this.Vt=!1,this.$t=!1,this.Nt=[],this.gt=new Xu(this,"async_queue_retry"),this.Dt=()=>{const n=Ui();n&&yn("AsyncQueue","Visibility state changed to "+n.visibilityState),this.gt.H()};const e=Ui();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Dt)}get isShuttingDown(){return this.At}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ft(),this.xt(e)}enterRestrictedMode(e){if(!this.At){this.At=!0,this.$t=e||!1;const n=Ui();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Dt)}}enqueue(e){if(this.Ft(),this.At)return new Promise(()=>{});const n=new qo;return this.xt(()=>this.At&&this.$t?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Tt.push(e),this.St()))}async St(){if(this.Tt.length!==0){try{await this.Tt[0](),this.Tt.shift(),this.gt.reset()}catch(e){if(!function(n){return n.name==="IndexedDbTransactionError"}(e))throw e;yn("AsyncQueue","Operation failed with retryable error: "+e)}this.Tt.length>0&&this.gt.K(()=>this.St())}}xt(e){const n=this.It.then(()=>(this.Vt=!0,e().catch(r=>{this.Pt=r,this.Vt=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw ci("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Vt=!1,r))));return this.It=n,n}enqueueAfterDelay(e,n,r){this.Ft(),this.Nt.indexOf(e)>-1&&(n=0);const s=aa.createAndSchedule(this,e,n,r,i=>this.qt(i));return this.Rt.push(s),s}Ft(){this.Pt&&_e()}verifyOperationInProgress(){}async Ot(){let e;do e=this.It,await e;while(e!==this.It)}kt(e){for(const n of this.Rt)if(n.timerId===e)return!0;return!1}Ct(e){return this.Ot().then(()=>{this.Rt.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Rt)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ot()})}Mt(e){this.Nt.push(e)}qt(e){const n=this.Rt.indexOf(e);this.Rt.splice(n,1)}}class z_{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Qo(e)}get(e){const n=us(e,this._firestore),r=new oa(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return _e();const i=s[0];if(i.isFoundDocument())return new qs(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new qs(this._firestore,r,n._key,null,n.converter);throw _e()})}set(e,n,r){const s=us(e,this._firestore),i=ud(s.converter,n,r),o=rd(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=us(e,this._firestore);let o;return o=typeof(n=je(n))=="string"||n instanceof mi?$_(this._dataReader,"Transaction.update",i._key,n,r,s):L_(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=us(e,this._firestore);return this._transaction.delete(n._key),this}}function W_(t,e,n){const r=gi(t=Hr(t,Kr)),s=Object.assign(Object.assign({},B_),n);(function(o){if(o.maxAttempts<1)throw new Y(Z,"Max attempts must be at least 1")})(s);const i=new qo;return new q_(new H_,r,s,o=>e(new z_(t,o)),i).run(),i.promise}(function(t){Zn=t})(`${Xn}_lite`),zn(new gn("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Kr(new Fy(t.getProvider("auth-internal")),new qy(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new Y(Z,'"projectId" not provided in firebase.initializeApp.');return new Pr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Jt("firestore-lite","3.12.0",""),Jt("firestore-lite","3.12.0","esm2017");class Fi{}ze(Fi,"APPLICATION_SETTINGS","ApplicationSettings"),ze(Fi,"PRODUCT_SETTINGS","ProductSettings"),ze(Fi,"CUSTOMER_SETTINGS","CustomerSettings");class jl{}ze(jl,"SUCCESS","Success"),ze(jl,"ERROR","Error");class $e{}ze($e,"INVOICES","Invoices"),ze($e,"SETTINGS","settings"),ze($e,"RATES","Rates"),ze($e,"CCUSTOMERS","Customers"),ze($e,"PRODUCTS","Products"),ze($e,"CASH_PAYMENTS","CashPayments"),ze($e,"GOLD_PAYMENTS","GoldPayments"),ze($e,"USERS","Users"),ze($e,"AUDIT","Audit");function la(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function dd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K_=dd,hd=new Vr("auth","Firebase",dd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new $o("@firebase/auth");function G_(t,...e){Hs.logLevel<=ge.WARN&&Hs.warn(`Auth (${Xn}): ${t}`,...e)}function _s(t,...e){Hs.logLevel<=ge.ERROR&&Hs.error(`Auth (${Xn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,...e){throw ca(t,...e)}function It(t,...e){return ca(t,...e)}function Y_(t,e,n){const r=Object.assign(Object.assign({},K_()),{[e]:n});return new Vr("auth","Firebase",r).create(e,{appName:t.name})}function ca(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hd.create(t,...e)}function re(t,e,...n){if(!t)throw ca(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _s(e),new Error(e)}function Nt(t,e){t||Ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function J_(){return Vl()==="http:"||Vl()==="https:"}function Vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J_()||mm()||"connection"in navigator)?navigator.onLine:!0}function X_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nt(n>e,"Short delay should be less than long delay!"),this.isMobile=gm()||ym()}get(){return Q_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e){Nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new Jr(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return pd(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Br(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),fd.fetch()(gd(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function pd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z_),e);try{const s=new tv(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ds(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ds(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ds(t,"user-disabled",o);const m=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Y_(t,m,h);gt(t,m)}}catch(s){if(s instanceof $t)throw s;gt(t,"network-request-failed",{message:String(s)})}}async function wi(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gd(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ua(t.config,s):`${t.config.apiScheme}://${s}`}class tv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),ev.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ds(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=It(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function rv(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sv(t,e=!1){const n=je(t),r=await n.getIdToken(e),s=da(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wr(ji(s.auth_time)),issuedAtTime:wr(ji(s.iat)),expirationTime:wr(ji(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ji(t){return Number(t)*1e3}function da(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _s("JWT malformed, contained fewer than 3 sections"),null;try{const s=_u(n);return s?JSON.parse(s):(_s("Failed to decode base64 JWT payload"),null)}catch(s){return _s("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iv(t){const e=da(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $t&&ov(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ov({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Lr(t,rv(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?uv(i.providerUserInfo):[],l=cv(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),m=c?h:!1,b={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(t,b)}async function lv(t){const e=je(t);await zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cv(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uv(t){return t.map(e=>{var{providerId:n}=e,r=la(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(t,e){const n=await pd(t,{},async()=>{const r=Br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=gd(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fd.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dv(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $r;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=la(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new av(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new md(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sv(this,e)}reload(){return lv(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lr(this,nv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,m;const b=(r=n.displayName)!==null&&r!==void 0?r:void 0,A=(s=n.email)!==null&&s!==void 0?s:void 0,k=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(o=n.photoURL)!==null&&o!==void 0?o:void 0,K=(l=n.tenantId)!==null&&l!==void 0?l:void 0,X=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,G=(h=n.createdAt)!==null&&h!==void 0?h:void 0,ee=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:J,emailVerified:le,isAnonymous:Se,providerData:z,stsTokenManager:v}=n;re(J&&v,e,"internal-error");const w=$r.fromJSON(this.name,v);re(typeof J=="string",e,"internal-error"),Ft(b,e.name),Ft(A,e.name),re(typeof le=="boolean",e,"internal-error"),re(typeof Se=="boolean",e,"internal-error"),Ft(k,e.name),Ft(V,e.name),Ft(K,e.name),Ft(X,e.name),Ft(G,e.name),Ft(ee,e.name);const g=new pn({uid:J,auth:e,email:A,emailVerified:le,displayName:b,isAnonymous:Se,photoURL:V,phoneNumber:k,tenantId:K,stsTokenManager:w,createdAt:G,lastLoginAt:ee});return z&&Array.isArray(z)&&(g.providerData=z.map(d=>Object.assign({},d))),X&&(g._redirectEventId=X),g}static async _fromIdTokenResponse(e,n,r=!1){const s=new $r;s.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zs(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Map;function Pt(t){Nt(t instanceof Function,"Expected a class definition");let e=Bl.get(t);return e?(Nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yd.type="NONE";const ql=yd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e,n){return`firebase:${t}:${e}:${n}`}class Mn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vs(this.userKey,s.apiKey,i),this.fullPersistenceKey=vs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mn(Pt(ql),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pt(ql);const o=vs(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const m=await h._get(o);if(m){const b=pn._fromJSON(e,m);h!==i&&(l=b),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Mn(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Mn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ed(e))return"Blackberry";if(Id(e))return"Webos";if(ha(e))return"Safari";if((e.includes("chrome/")||vd(e))&&!e.includes("edge/"))return"Chrome";if(bd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _d(t=He()){return/firefox\//i.test(t)}function ha(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vd(t=He()){return/crios\//i.test(t)}function wd(t=He()){return/iemobile/i.test(t)}function bd(t=He()){return/android/i.test(t)}function Ed(t=He()){return/blackberry/i.test(t)}function Id(t=He()){return/webos/i.test(t)}function bi(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hv(t=He()){var e;return bi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fv(){return _m()&&document.documentMode===10}function Td(t=He()){return bi(t)||bd(t)||Id(t)||Ed(t)||/windows phone/i.test(t)||wd(t)}function pv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e=[]){let n;switch(t){case"Browser":n=Hl(He());break;case"Worker":n=`${Hl(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xn}/${r}`}async function Ad(t,e){return nr(t,"GET","/v2/recaptchaConfig",Qr(t,e))}function zl(t){return t!==void 0&&t.enterprise!==void 0}class Cd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=It("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gv().appendChild(r)})}function mv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yv="https://www.google.com/recaptcha/enterprise.js?render=",_v="recaptcha-enterprise",vv="NO_RECAPTCHA";class Od{constructor(e){this.type=_v,this.auth=Xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Ad(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Cd(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;zl(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(vv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&zl(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Rd(yv+l).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Wl(t,e,n,r=!1){const s=new Od(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kl(this),this.idTokenSubscription=new Kl(this),this.beforeStateQueue=new wv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}async initializeRecaptchaConfig(){const e=await Ad(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Cd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Od(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pt(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return re(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&G_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xr(t){return je(t)}class Kl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sm(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t,e){const n=Uo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xs(i,e??{}))return s;gt(s,"already-initialized")}return n.initialize({options:e})}function Iv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tv(t,e,n){const r=Xr(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Pd(e),{host:o,port:l}=Sv(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Av()}function Pd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sv(t){const e=Pd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gl(o)}}}function Gl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Av(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}async function Cv(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t,e){return wi(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(t,e){return wi(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function Ov(t,e){return wi(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends fa{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Mr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Wl(e,r,"signInWithPassword");return Vi(e,s)}else return Vi(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Wl(e,r,"signInWithPassword");return Vi(e,i)}else return Promise.reject(s)});case"emailLink":return Rv(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Cv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ov(e,{idToken:n,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(t,e){return wi(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="http://localhost";class En extends fa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=la(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new En(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Un(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Un(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Un(e,n)}buildRequest(){const e={requestUri:Pv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Br(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dv(t){const e=cr(ur(t)).link,n=e?cr(ur(e)).deep_link_id:null,r=cr(ur(t)).deep_link_id;return(r?cr(ur(r)).link:null)||r||n||e||t}class pa{constructor(e){var n,r,s,i,o,l;const c=cr(ur(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,m=(r=c.oobCode)!==null&&r!==void 0?r:null,b=kv((s=c.mode)!==null&&s!==void 0?s:null);re(h&&m&&b,"argument-error"),this.apiKey=h,this.operation=b,this.code=m,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Dv(e);try{return new pa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.providerId=rr.PROVIDER_ID}static credential(e,n){return Mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pa.parseLink(n);return re(r,"argument-error"),Mr._fromEmailAndCode(e,r.code,r.tenantId)}}rr.PROVIDER_ID="password";rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends kd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Zr{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return En._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Zr{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Zr{constructor(){super("twitter.com")}static credential(e,n){return En._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),o=Yl(r);return new Gn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Yl(r);return new Gn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Yl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends $t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ws.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ws(e,n,r,s)}}function Dd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ws._fromErrorAndOperation(t,i,e,r):i})}async function xv(t,e,n=!1){const r=await Lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Lr(t,Dd(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=da(i.idToken);re(o,r,"internal-error");const{sub:l}=o;return re(t.uid===l,r,"user-mismatch"),Gn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xd(t,e,n=!1){const r="signIn",s=await Dd(t,r,e),i=await Gn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Lv(t,e){return xd(Xr(t),e)}function $v(t,e,n){return Lv(je(t),rr.credential(e,n))}function Mv(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function Uv(t,e,n){return je(t).beforeAuthStateChanged(e,n)}const Ks="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(){const t=He();return ha(t)||bi(t)}const jv=1e3,Vv=10;class Ld extends Nd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fv()&&pv(),this.fallbackToPolling=Td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Vv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ld.type="LOCAL";const Bv=Ld;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d extends Nd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$d.type="SESSION";const Md=$d;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ei(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await qv(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ei.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=ga("",20);s.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(b){const A=b;if(A.data.eventId===h)switch(A.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(A.data.response);break;default:clearTimeout(m),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function zv(t){Tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function Wv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gv(){return Ud()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="firebaseLocalStorageDb",Yv=1,Gs="firebaseLocalStorage",jd="fbase_key";class es{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ii(t,e){return t.transaction([Gs],e?"readwrite":"readonly").objectStore(Gs)}function Jv(){const t=indexedDB.deleteDatabase(Fd);return new es(t).toPromise()}function po(){const t=indexedDB.open(Fd,Yv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gs,{keyPath:jd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gs)?e(r):(r.close(),await Jv(),e(await po()))})})}async function Jl(t,e,n){const r=Ii(t,!0).put({[jd]:e,value:n});return new es(r).toPromise()}async function Qv(t,e){const n=Ii(t,!1).get(e),r=await new es(n).toPromise();return r===void 0?null:r.value}function Ql(t,e){const n=Ii(t,!0).delete(e);return new es(n).toPromise()}const Xv=800,Zv=3;class Vd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await po(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ud()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ei._getInstance(Gv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wv(),!this.activeServiceWorker)return;this.sender=new Hv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await po();return await Jl(e,Ks,"1"),await Ql(e,Ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ql(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ii(s,!1).getAll();return new es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vd.type="LOCAL";const ew=Vd;new Jr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t,e){return e?Pt(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends fa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Un(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Un(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Un(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nw(t){return xd(t.auth,new ma(t),t.bypassAuthState)}function rw(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Nv(n,new ma(t),t.bypassAuthState)}async function sw(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),xv(n,new ma(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nw;case"linkViaPopup":case"linkViaRedirect":return sw;case"reauthViaPopup":case"reauthViaRedirect":return rw;default:gt(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new Jr(2e3,1e4);class kn extends Bd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iw.get())};e()}}kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="pendingRedirect",ws=new Map;class aw extends Bd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ws.get(this.auth._key());if(!e){try{const r=await lw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ws.set(this.auth._key(),e)}return this.bypassAuthState||ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lw(t,e){const n=dw(e),r=uw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function cw(t,e){ws.set(t._key(),e)}function uw(t){return Pt(t._redirectPersistence)}function dw(t){return vs(ow,t.config.apiKey,t.name)}async function hw(t,e,n=!1){const r=Xr(t),s=tw(r,e),o=await new aw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=10*60*1e3;class pw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xl(e))}saveEventToCache(e){this.cachedEventUids.add(Xl(e)),this.lastProcessedEventTime=Date.now()}}function Xl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_w=/^https?/;async function vw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mw(t);for(const n of e)try{if(ww(n))return}catch{}gt(t,"unauthorized-domain")}function ww(t){const e=fo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_w.test(n))return!1;if(yw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new Jr(3e4,6e4);function Zl(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ew(t){return new Promise((e,n)=>{var r,s,i;function o(){Zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zl(),n(It(t,"network-request-failed"))},timeout:bw.get()})}if(!((s=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tt().gapi)===null||i===void 0)&&i.load)o();else{const l=mv("iframefcb");return Tt()[l]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},Rd(`https://apis.google.com/js/api.js?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw bs=null,e})}let bs=null;function Iw(t){return bs=bs||Ew(t),bs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=new Jr(5e3,15e3),Sw="__/auth/iframe",Aw="emulator/auth/iframe",Cw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ow(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ua(e,Aw):`https://${t.config.authDomain}/${Sw}`,r={apiKey:e.apiKey,appName:t.name,v:Xn},s=Rw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Br(r).slice(1)}`}async function Pw(t){const e=await Iw(t),n=Tt().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:Ow(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),l=Tt().setTimeout(()=>{i(o)},Tw.get());function c(){Tt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dw=500,xw=600,Nw="_blank",Lw="http://localhost";class ec{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $w(t,e,n,r=Dw,s=xw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},kw),{width:r.toString(),height:s.toString(),top:i,left:o}),h=He().toLowerCase();n&&(l=vd(h)?Nw:n),_d(h)&&(e=e||Lw,c.scrollbars="yes");const m=Object.entries(c).reduce((A,[k,V])=>`${A}${k}=${V},`,"");if(hv(h)&&l!=="_self")return Mw(e||"",l),new ec(null);const b=window.open(e||"",l,m);re(b,t,"popup-blocked");try{b.focus()}catch{}return new ec(b)}function Mw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="__/auth/handler",Fw="emulator/auth/handler",jw=encodeURIComponent("fac");async function tc(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xn,eventId:s};if(e instanceof kd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,b]of Object.entries(i||{}))o[m]=b}if(e instanceof Zr){const m=e.getScopes().filter(b=>b!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const c=await t._getAppCheckToken(),h=c?`#${jw}=${encodeURIComponent(c)}`:"";return`${Vw(t)}?${Br(l).slice(1)}${h}`}function Vw({config:t}){return t.emulator?ua(t,Fw):`https://${t.authDomain}/${Uw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="webStorageSupport";class Bw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Md,this._completeRedirectFn=hw,this._overrideRedirectResult=cw}async _openPopup(e,n,r,s){var i;Nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await tc(e,n,r,fo(),s);return $w(e,o,ga())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tc(e,n,r,fo(),s);return zv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pw(e),r=new pw(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bi,{type:Bi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Bi];o!==void 0&&n(!!o),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Td()||ha()||bi()}}const qw=Bw;var nc="@firebase/auth",rc="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ww(t){zn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sd(t)},h=new bv(r,s,i,c);return Iv(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zn(new gn("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new Hw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(nc,rc,zw(t)),Jt(nc,rc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=5*60,Gw=bu("authIdTokenMaxAge")||Kw;let sc=null;const Yw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gw)return;const s=n==null?void 0:n.token;sc!==s&&(sc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Es(t=Su()){const e=Uo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ev(t,{popupRedirectResolver:qw,persistence:[ew,Bv,Md]}),r=bu("authTokenSyncURL");if(r){const i=Yw(r);Uv(n,i,()=>i(n.currentUser)),Mv(n,o=>i(o))}const s=vu("auth");return s&&Tv(n,`http://${s}`),n}Ww("Browser");const Jw={apiKey:"AIzaSyDYHZD3qXhHcDa367tMXjHz7qzaZFYRA4c",authDomain:"gold-smith-jewelers.firebaseapp.com",projectId:"gold-smith-jewelers",storageBucket:"gold-smith-jewelers.appspot.com",messagingSenderId:"705110080489",appId:"1:705110080489:web:d8228e6b206399c5c5e978",measurementId:"G-M8LFGYRVKL"},Qw=Tu(Jw),Te=P_(Qw);class Xw{constructor(){this.collectionName=$e.INVOICES}async addOrUpdate(e){const n=Ae(Te,this.collectionName);var r=await At(ke(n,e.invoiceNumber));if(r.exists())throw"Invoice cannot be updated";Sn.fillUpdatedInfo(e),await In(ke(n,e.invoiceNumber),e),await cb.addOrUpdate({receiptNumber:"PR"+e.invoiceNumber,invoiceRef:e.invoiceNumber,paymentDate:e.purchaseDate,amount:-1*e.totals.totalMakingCharge,customer:e.customer,customerId:e.customerId,description:"Auto added by purchase"+e.invoiceNumber}),await ub.addOrUpdate({receiptNumber:"GR"+e.invoiceNumber,invoiceRef:e.invoiceNumber,paymentDate:e.purchaseDate,weight:-1*e.totals.pureWeight,purity:1e3,customer:e.customer,customerId:e.customerId,description:"Auto added by purchase"+e.invoiceNumber}),Tn.log(e,"Invoice","Created"+e.invoiceNumber)}async list(e,n,r){const s=Ae(Te,this.collectionName),i=er(s,Yr("purchaseDate","desc"),vi(10)),l=(await tr(i)).docs.map(h=>h.data());if(r){var c=r.toLowerCase().trim();return _.filter(l,function(h){return h.invoiceNumber.toLowerCase().includes(c)||h.customer.toLowerCase().includes(c)})}return l}async getById(e){const n=Ae(Te,this.collectionName);var r=await At(ke(n,e));if(r.exists())return r.data()}}class Zw{constructor(){this.collectionName=$e.SETTINGS}async addOrUpdate(e){const n=Ae(Te,this.collectionName);Sn.fillUpdatedInfo(e),await In(ke(n,e.identifier),e),Tn.log(e,"Settings","Changed settings "+e.identifier)}async getById(e){const n=Ae(Te,this.collectionName),r=await At(ke(n,e));return r.exists()?r.data():{identifier:e}}}class eb{constructor(){this.users=[],this.collectionName=$e.USERS}addOrUpdate(e){this.users=_.filter(this.users,function(n){return n.name!=e.name}),this.users.push(e)}async getById(e){if(!e)return;const n=Ae(Te,this.collectionName);var r=await At(ke(n,customerId));if(r.exists())return r.data()}async list(){const e=[],n=Es();return e.push(...n.users),e}setStatus(e,n){var r=_.filter(this.users,function(s){return s.name==e.name});r&&(r[0].Status=n)}}class tb{constructor(){this.collectionName=$e.RATES}async addOrUpdate(e){let n=Hn.getTodayAsString();const r=Ae(Te,this.collectionName);var s={rate:e.rate,date:n};Sn.fillUpdatedInfo(s),await In(ke(r,n),s),Tn.log(s,"Rate","Changed rate to "+s.rate)}async list(){const e=Ae(Te,this.collectionName),n=er(e,Yr("date","desc"),vi(10));return(await tr(n)).docs.map(i=>i.data())}async getTodaysRate(){let e=Hn.getTodayAsString();const n=Ae(Te,this.collectionName);var r=await At(ke(n,e));if(r.exists())return r.data().rate}}class nb{constructor(){this.collectionName=$e.CCUSTOMERS}async list(e,n=!1){const r=Ae(Te,this.collectionName);var s=null;n&&(s=j_("status","==","Active"));const i=er(r,s);var l=(await tr(i)).docs.map(c=>c.data());if(e){const c=e.toLowerCase();l=_.filter(l,function(h){return h.Name.toLowerCase().includes(c)||h.Contact&&h.Contact.toString().toLowerCase().includes(c)})}return l=_.sortBy(l,function(c){return c.Name}),l}async addOrUpdate(e){const n=Ae(Te,this.collectionName);var r="Updated";e.id||(e.id=ke(n).id,r="Added"),Sn.fillUpdatedInfo(e),await In(ke(n,e.id),e),Tn.log(e,"Customer",r+":"+JSON.stringify(e))}async getById(e){const n=Ae(Te,this.collectionName);var r=await At(ke(n,e));if(r.exists())return r.data()}async runDebitCreditTransaction(e,n,r){const s=ke(Ae(Te,this.collectionName),e);try{await W_(Te,async i=>{const o=await i.get(s);if(!o.exists())throw"Document does not exist!";const l=r+"Debit",c=r+"Credit",h=o.data();n<0?h[l]?h[l]+=n*-1:h[l]=n*-1:h[c]?h[c]+=n:h[c]=n,i.update(s,h)}),console.log("Transaction successfully committed!")}catch(i){console.log("Transaction failed: ",i)}}}class rb{constructor(){this.collectionName=$e.PRODUCTS}async list(e){const n=Ae(Te,this.collectionName),r=er(n,Yr("Name"));var i=(await tr(r)).docs.map(o=>o.data());if(e){const o=e.toLowerCase();i=_.filter(i,function(l){return l.Name.toLowerCase().includes(o)})}return i}async addOrUpdate(e){const n=Ae(Te,this.collectionName);var r="Updated";e.id||(e.id=ke(n).id,r="Added"),Sn.fillUpdatedInfo(e),await In(ke(n,e.id),e),Tn.log(e,"Product",r+":"+JSON.stringify(e))}}class sb{constructor(){this.collectionName=$e.CASH_PAYMENTS}async addOrUpdate(e){const n=Ae(Te,this.collectionName);var r=await At(ke(n,e.receiptNumber));if(r.exists())throw"Cash payment cannot be updated";Sn.fillUpdatedInfo(e),await In(ke(n,e.receiptNumber),e),await Hd.runDebitCreditTransaction(e.customerId,e.amount,"Cash"),Tn.log(e,"CashPayment","Added :"+e.receiptNumber)}async list(e,n){const r=Ae(Te,this.collectionName),s=er(r,Yr("paymentDate","desc"),vi(10));return(await tr(s)).docs.map(l=>l.data())}async getById(e){const n=Ae(Te,this.collectionName);var r=await At(ke(n,e));if(r.exists())return r.data()}}class ib{constructor(){this.collectionName=$e.GOLD_PAYMENTS}async addOrUpdate(e){const n=Ae(Te,this.collectionName);var r=await At(ke(n,e.receiptNumber));if(r.exists())throw"Gold Payment cannot be updated";Sn.fillUpdatedInfo(e),await In(ke(n,e.receiptNumber),e),await Hd.runDebitCreditTransaction(e.customerId,e.weight*(e.purity/1e3),"Gold"),Tn.log(e,"GoldPayment","Added :"+e.receiptNumber)}async list(e,n){const r=Ae(Te,this.collectionName),s=er(r,Yr("paymentDate","desc"),vi(10));return(await tr(s)).docs.map(l=>l.data())}async getById(e){const n=Ae(Te,this.collectionName);var r=await At(ke(n,e));if(r.exists())return r.data()}}class ob{async tryLogin(e,n){const r=Es();return await $v(r,e,n)}getCurrentUser(){return Es().currentUser}async signOut(){this.getCurrentUser()&&await Es().signOut()}}class ab{constructor(){this.collectionName=$e.AUDIT}async log(e,n,r){Ae(Te,this.collectionName)}}class lb{fillUpdatedInfo(e){const n=zd.getCurrentUser();e.updatedByDisplayName=n.displayName??n.email,e.updatedBy=n.uid,e.updatedOn=Hn.getNowAsMilliSeconds()}}const wb=new Xw,bb=new eb,Eb=new tb,Hd=new nb,Ib=new rb,Tb=new Zw,cb=new sb,ub=new ib,zd=new ob,Tn=new ab,Sn=new lb,tn=wp(Tg);tn.use(gu);tn.mount("#app");tn.config.globalProperties.$currentuser={};tn.config.globalProperties.$appname="Emirates Pearl Jewellery";tn.config.globalProperties.$appShortName="Emirates Pearl";tn.config.globalProperties.$basedomainname="/goldsmithjk/";tn.config.globalProperties.$statusLabelMapper={enabled:"Active",disabled:"Inactive"};tn.config.globalProperties.$alertShowDuration=3e3;gu.beforeEach((t,e,n)=>{if(t.path.startsWith("/payments/")||t.path.startsWith("/invoices/")||t.path.startsWith("/login")||t.path.startsWith("/goldtransaction/")){n();return}zd.getCurrentUser()?n():n({path:"/login",query:{nextUrl:t.path}})});export{jl as A,cb as B,Hn as C,ub as D,pb as E,it as F,vb as I,Fi as S,Cg as _,gb as a,ce as b,Ff as c,yf as d,_b as e,we as f,mb as g,ii as h,et as i,Zg as j,Eb as k,wb as l,lt as m,Hd as n,jr as o,Ib as p,wf as q,fb as r,Tb as s,oc as t,hn as u,yb as v,hb as w,zd as x,yo as y,bb as z};
