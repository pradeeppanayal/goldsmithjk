var Gd=Object.defineProperty;var Yd=(t,e,n)=>e in t?Gd(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Le=(t,e,n)=>(Yd(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */(function(t){typeof define=="function"&&define.amd?define(["jquery"],t):typeof module=="object"&&module.exports?module.exports=function(e,n){return n===void 0&&(n=typeof window<"u"?require("jquery"):require("jquery")(e)),t(n),n}:t(jQuery)})(function(t){var e,n,K,r,s,i,o,l,c,h,g,b,A,k,j,K=((z=t&&t.fn&&t.fn.select2&&t.fn.select2.amd?t.fn.select2.amd:z)&&z.requirejs||(z?n=z:z={},c={},h={},g={},b={},A=Object.prototype.hasOwnProperty,k=[].slice,j=/\.js$/,o=function(v,f){var m,d,u=ce(v),a=u[0],f=f[1];return v=u[1],a&&(m=J(a=G(a,f))),a?v=m&&m.normalize?m.normalize(v,(d=f,function(p){return G(p,d)})):G(v,f):(a=(u=ce(v=G(v,f)))[0],v=u[1],a&&(m=J(a))),{f:a?a+"!"+v:v,n:v,pr:a,p:m}},l={require:function(v){return ee(v)},exports:function(v){var w=c[v];return w!==void 0?w:c[v]={}},module:function(v){return{id:v,uri:"",exports:c[v],config:(w=v,function(){return g&&g.config&&g.config[w]||{}})};var w}},s=function(v,w,m,d){var u,a,f,p,T,E=[],C=typeof m,M=Ae(d=d||v);if(C=="undefined"||C=="function"){for(w=!w.length&&m.length?["require","exports","module"]:w,p=0;p<w.length;p+=1)if((a=(f=o(w[p],M)).f)==="require")E[p]=l.require(v);else if(a==="exports")E[p]=l.exports(v),T=!0;else if(a==="module")u=E[p]=l.module(v);else if(X(c,a)||X(h,a)||X(b,a))E[p]=J(a);else{if(!f.p)throw new Error(v+" missing "+a);f.p.load(f.n,ee(d,!0),function(L){return function(oe){c[L]=oe}}(a),{}),E[p]=c[a]}C=m?m.apply(c[v],E):void 0,v&&(u&&u.exports!==r&&u.exports!==c[v]?c[v]=u.exports:C===r&&T||(c[v]=C))}else v&&(c[v]=m)},e=n=i=function(v,w,m,d,u){if(typeof v=="string")return l[v]?l[v](w):J(o(v,Ae(w)).f);if(!v.splice){if((g=v).deps&&i(g.deps,g.callback),!w)return;w.splice?(v=w,w=m,m=null):v=r}return w=w||function(){},typeof m=="function"&&(m=d,d=u),d?s(r,v,w,m):setTimeout(function(){s(r,v,w,m)},4),i},i.config=function(v){return i(v)},e._defined=c,(K=function(v,w,m){if(typeof v!="string")throw new Error("See almond README: incorrect module build, no module name");w.splice||(m=w,w=[]),X(c,v)||X(h,v)||(h[v]=[v,w,m])}).amd={jQuery:!0},z.requirejs=e,z.require=n,z.define=K),z.define("almond",function(){}),z.define("jquery",[],function(){var v=t||$;return v==null&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),v}),z.define("select2/utils",["jquery"],function(v){var w={};function m(a){var f,p=a.prototype,T=[];for(f in p)typeof p[f]=="function"&&f!=="constructor"&&T.push(f);return T}w.Extend=function(a,f){var p,T={}.hasOwnProperty;function E(){this.constructor=a}for(p in f)T.call(f,p)&&(a[p]=f[p]);return E.prototype=f.prototype,a.prototype=new E,a.__super__=f.prototype,a},w.Decorate=function(a,f){var p=m(f),T=m(a);function E(){var pe=Array.prototype.unshift,Ce=f.prototype.constructor.length,Ze=a.prototype.constructor;0<Ce&&(pe.call(arguments,a.prototype.constructor),Ze=f.prototype.constructor),Ze.apply(this,arguments)}f.displayName=a.displayName,E.prototype=new function(){this.constructor=E};for(var C=0;C<T.length;C++){var M=T[C];E.prototype[M]=a.prototype[M]}for(var L=0;L<p.length;L++){var oe=p[L];E.prototype[oe]=function(pe){var Ce=function(){};pe in E.prototype&&(Ce=E.prototype[pe]);var Ze=f.prototype[pe];return function(){return Array.prototype.unshift.call(arguments,Ce),Ze.apply(this,arguments)}}(oe)}return E};function d(){this.listeners={}}d.prototype.on=function(a,f){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(f):this.listeners[a]=[f]},d.prototype.trigger=function(a){var f=Array.prototype.slice,p=f.call(arguments,1);this.listeners=this.listeners||{},(p=p??[]).length===0&&p.push({}),(p[0]._type=a)in this.listeners&&this.invoke(this.listeners[a],f.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,f){for(var p=0,T=a.length;p<T;p++)a[p].apply(this,f)},w.Observable=d,w.generateChars=function(a){for(var f="",p=0;p<a;p++)f+=Math.floor(36*Math.random()).toString(36);return f},w.bind=function(a,f){return function(){a.apply(f,arguments)}},w._convertData=function(a){for(var f in a){var p=f.split("-"),T=a;if(p.length!==1){for(var E=0;E<p.length;E++){var C=p[E];(C=C.substring(0,1).toLowerCase()+C.substring(1))in T||(T[C]={}),E==p.length-1&&(T[C]=a[f]),T=T[C]}delete a[f]}}return a},w.hasScroll=function(a,f){var p=v(f),T=f.style.overflowX,E=f.style.overflowY;return(T!==E||E!=="hidden"&&E!=="visible")&&(T==="scroll"||E==="scroll"||p.innerHeight()<f.scrollHeight||p.innerWidth()<f.scrollWidth)},w.escapeMarkup=function(a){var f={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return typeof a!="string"?a:String(a).replace(/[&<>"'\/\\]/g,function(p){return f[p]})},w.__cache={};var u=0;return w.GetUniqueElementId=function(a){var f=a.getAttribute("data-select2-id");return f!=null||(f=a.id?"select2-data-"+a.id:"select2-data-"+(++u).toString()+"-"+w.generateChars(4),a.setAttribute("data-select2-id",f)),f},w.StoreData=function(a,f,p){a=w.GetUniqueElementId(a),w.__cache[a]||(w.__cache[a]={}),w.__cache[a][f]=p},w.GetData=function(a,f){var p=w.GetUniqueElementId(a);return f?w.__cache[p]&&w.__cache[p][f]!=null?w.__cache[p][f]:v(a).data(f):w.__cache[p]},w.RemoveData=function(a){var f=w.GetUniqueElementId(a);w.__cache[f]!=null&&delete w.__cache[f],a.removeAttribute("data-select2-id")},w.copyNonInternalCssClasses=function(a,T){var p=(p=a.getAttribute("class").trim().split(/\s+/)).filter(function(E){return E.indexOf("select2-")===0}),T=(T=T.getAttribute("class").trim().split(/\s+/)).filter(function(E){return E.indexOf("select2-")!==0}),T=p.concat(T);a.setAttribute("class",T.join(" "))},w}),z.define("select2/results",["jquery","./utils"],function(v,w){function m(d,u,a){this.$element=d,this.data=a,this.options=u,m.__super__.constructor.call(this)}return w.Extend(m,w.Observable),m.prototype.render=function(){var d=v('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&d.attr("aria-multiselectable","true"),this.$results=d},m.prototype.clear=function(){this.$results.empty()},m.prototype.displayMessage=function(d){var u=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var a=v('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),f=this.options.get("translations").get(d.message);a.append(u(f(d.args))),a[0].className+=" select2-results__message",this.$results.append(a)},m.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},m.prototype.append=function(d){this.hideLoading();var u=[];if(d.results!=null&&d.results.length!==0){d.results=this.sort(d.results);for(var a=0;a<d.results.length;a++){var f=d.results[a],f=this.option(f);u.push(f)}this.$results.append(u)}else this.$results.children().length===0&&this.trigger("results:message",{message:"noResults"})},m.prototype.position=function(d,u){u.find(".select2-results").append(d)},m.prototype.sort=function(d){return this.options.get("sorter")(d)},m.prototype.highlightFirstItem=function(){var d=this.$results.find(".select2-results__option--selectable"),u=d.filter(".select2-results__option--selected");(0<u.length?u:d).first().trigger("mouseenter"),this.ensureHighlightVisible()},m.prototype.setClasses=function(){var d=this;this.data.current(function(u){var a=u.map(function(f){return f.id.toString()});d.$results.find(".select2-results__option--selectable").each(function(){var f=v(this),p=w.GetData(this,"data"),T=""+p.id;p.element!=null&&p.element.selected||p.element==null&&-1<a.indexOf(T)?(this.classList.add("select2-results__option--selected"),f.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),f.attr("aria-selected","false"))})})},m.prototype.showLoading=function(d){this.hideLoading(),d={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(d)},d=this.option(d),d.className+=" loading-results",this.$results.prepend(d)},m.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},m.prototype.option=function(d){var u=document.createElement("li");u.classList.add("select2-results__option"),u.classList.add("select2-results__option--selectable");var a,f={role:"option"},p=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(a in(d.element!=null&&p.call(d.element,":disabled")||d.element==null&&d.disabled)&&(f["aria-disabled"]="true",u.classList.remove("select2-results__option--selectable"),u.classList.add("select2-results__option--disabled")),d.id==null&&u.classList.remove("select2-results__option--selectable"),d._resultId!=null&&(u.id=d._resultId),d.title&&(u.title=d.title),d.children&&(f.role="group",f["aria-label"]=d.text,u.classList.remove("select2-results__option--selectable"),u.classList.add("select2-results__option--group")),f){var T=f[a];u.setAttribute(a,T)}if(d.children){var E=v(u),C=document.createElement("strong");C.className="select2-results__group",this.template(d,C);for(var M=[],L=0;L<d.children.length;L++){var oe=d.children[L],oe=this.option(oe);M.push(oe)}p=v("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"}),p.append(M),E.append(C),E.append(p)}else this.template(d,u);return w.StoreData(u,"data",d),u},m.prototype.bind=function(d,u){var a=this,f=d.id+"-results";this.$results.attr("id",f),d.on("results:all",function(p){a.clear(),a.append(p.data),d.isOpen()&&(a.setClasses(),a.highlightFirstItem())}),d.on("results:append",function(p){a.append(p.data),d.isOpen()&&a.setClasses()}),d.on("query",function(p){a.hideMessages(),a.showLoading(p)}),d.on("select",function(){d.isOpen()&&(a.setClasses(),a.options.get("scrollAfterSelect")&&a.highlightFirstItem())}),d.on("unselect",function(){d.isOpen()&&(a.setClasses(),a.options.get("scrollAfterSelect")&&a.highlightFirstItem())}),d.on("open",function(){a.$results.attr("aria-expanded","true"),a.$results.attr("aria-hidden","false"),a.setClasses(),a.ensureHighlightVisible()}),d.on("close",function(){a.$results.attr("aria-expanded","false"),a.$results.attr("aria-hidden","true"),a.$results.removeAttr("aria-activedescendant")}),d.on("results:toggle",function(){var p=a.getHighlightedResults();p.length!==0&&p.trigger("mouseup")}),d.on("results:select",function(){var p,T=a.getHighlightedResults();T.length!==0&&(p=w.GetData(T[0],"data"),T.hasClass("select2-results__option--selected")?a.trigger("close",{}):a.trigger("select",{data:p}))}),d.on("results:previous",function(){var p,T=a.getHighlightedResults(),E=a.$results.find(".select2-results__option--selectable"),C=E.index(T);C<=0||(p=C-1,T.length===0&&(p=0),(C=E.eq(p)).trigger("mouseenter"),T=a.$results.offset().top,E=C.offset().top,C=a.$results.scrollTop()+(E-T),p===0?a.$results.scrollTop(0):E-T<0&&a.$results.scrollTop(C))}),d.on("results:next",function(){var p,T=a.getHighlightedResults(),E=a.$results.find(".select2-results__option--selectable"),C=E.index(T)+1;C>=E.length||((p=E.eq(C)).trigger("mouseenter"),T=a.$results.offset().top+a.$results.outerHeight(!1),E=p.offset().top+p.outerHeight(!1),p=a.$results.scrollTop()+E-T,C===0?a.$results.scrollTop(0):T<E&&a.$results.scrollTop(p))}),d.on("results:focus",function(p){p.element[0].classList.add("select2-results__option--highlighted"),p.element[0].setAttribute("aria-selected","true")}),d.on("results:message",function(p){a.displayMessage(p)}),v.fn.mousewheel&&this.$results.on("mousewheel",function(p){var T=a.$results.scrollTop(),E=a.$results.get(0).scrollHeight-T+p.deltaY,T=0<p.deltaY&&T-p.deltaY<=0,E=p.deltaY<0&&E<=a.$results.height();T?(a.$results.scrollTop(0),p.preventDefault(),p.stopPropagation()):E&&(a.$results.scrollTop(a.$results.get(0).scrollHeight-a.$results.height()),p.preventDefault(),p.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(p){var T=v(this),E=w.GetData(this,"data");T.hasClass("select2-results__option--selected")?a.options.get("multiple")?a.trigger("unselect",{originalEvent:p,data:E}):a.trigger("close",{}):a.trigger("select",{originalEvent:p,data:E})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(p){var T=w.GetData(this,"data");a.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),a.trigger("results:focus",{data:T,element:v(this)})})},m.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},m.prototype.destroy=function(){this.$results.remove()},m.prototype.ensureHighlightVisible=function(){var d,u,a,f,p=this.getHighlightedResults();p.length!==0&&(d=this.$results.find(".select2-results__option--selectable").index(p),f=this.$results.offset().top,u=p.offset().top,a=this.$results.scrollTop()+(u-f),f=u-f,a-=2*p.outerHeight(!1),d<=2?this.$results.scrollTop(0):(f>this.$results.outerHeight()||f<0)&&this.$results.scrollTop(a))},m.prototype.template=function(p,u){var a=this.options.get("templateResult"),f=this.options.get("escapeMarkup"),p=a(p,u);p==null?u.style.display="none":typeof p=="string"?u.innerHTML=f(p):v(u).append(p)},m}),z.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),z.define("select2/selection/base",["jquery","../utils","../keys"],function(v,w,m){function d(u,a){this.$element=u,this.options=a,d.__super__.constructor.call(this)}return w.Extend(d,w.Observable),d.prototype.render=function(){var u=v('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,w.GetData(this.$element[0],"old-tabindex")!=null?this._tabindex=w.GetData(this.$element[0],"old-tabindex"):this.$element.attr("tabindex")!=null&&(this._tabindex=this.$element.attr("tabindex")),u.attr("title",this.$element.attr("title")),u.attr("tabindex",this._tabindex),u.attr("aria-disabled","false"),this.$selection=u},d.prototype.bind=function(u,a){var f=this,p=u.id+"-results";this.container=u,this.$selection.on("focus",function(T){f.trigger("focus",T)}),this.$selection.on("blur",function(T){f._handleBlur(T)}),this.$selection.on("keydown",function(T){f.trigger("keypress",T),T.which===m.SPACE&&T.preventDefault()}),u.on("results:focus",function(T){f.$selection.attr("aria-activedescendant",T.data._resultId)}),u.on("selection:update",function(T){f.update(T.data)}),u.on("open",function(){f.$selection.attr("aria-expanded","true"),f.$selection.attr("aria-owns",p),f._attachCloseHandler(u)}),u.on("close",function(){f.$selection.attr("aria-expanded","false"),f.$selection.removeAttr("aria-activedescendant"),f.$selection.removeAttr("aria-owns"),f.$selection.trigger("focus"),f._detachCloseHandler(u)}),u.on("enable",function(){f.$selection.attr("tabindex",f._tabindex),f.$selection.attr("aria-disabled","false")}),u.on("disable",function(){f.$selection.attr("tabindex","-1"),f.$selection.attr("aria-disabled","true")})},d.prototype._handleBlur=function(u){var a=this;window.setTimeout(function(){document.activeElement==a.$selection[0]||v.contains(a.$selection[0],document.activeElement)||a.trigger("blur",u)},1)},d.prototype._attachCloseHandler=function(u){v(document.body).on("mousedown.select2."+u.id,function(a){var f=v(a.target).closest(".select2");v(".select2.select2-container--open").each(function(){this!=f[0]&&w.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(u){v(document.body).off("mousedown.select2."+u.id)},d.prototype.position=function(u,a){a.find(".selection").append(u)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(u){throw new Error("The `update` method must be defined in child classes.")},d.prototype.isEnabled=function(){return!this.isDisabled()},d.prototype.isDisabled=function(){return this.options.get("disabled")},d}),z.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(v,w,m,d){function u(){u.__super__.constructor.apply(this,arguments)}return m.Extend(u,w),u.prototype.render=function(){var a=u.__super__.render.call(this);return a[0].classList.add("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},u.prototype.bind=function(a,f){var p=this;u.__super__.bind.apply(this,arguments);var T=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",T).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",T),this.$selection.attr("aria-controls",T),this.$selection.on("mousedown",function(E){E.which===1&&p.trigger("toggle",{originalEvent:E})}),this.$selection.on("focus",function(E){}),this.$selection.on("blur",function(E){}),a.on("focus",function(E){a.isOpen()||p.$selection.trigger("focus")})},u.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},u.prototype.display=function(a,f){var p=this.options.get("templateSelection");return this.options.get("escapeMarkup")(p(a,f))},u.prototype.selectionContainer=function(){return v("<span></span>")},u.prototype.update=function(a){var f,p;a.length!==0?(p=a[0],f=this.$selection.find(".select2-selection__rendered"),a=this.display(p,f),f.empty().append(a),(p=p.title||p.text)?f.attr("title",p):f.removeAttr("title")):this.clear()},u}),z.define("select2/selection/multiple",["jquery","./base","../utils"],function(v,w,m){function d(u,a){d.__super__.constructor.apply(this,arguments)}return m.Extend(d,w),d.prototype.render=function(){var u=d.__super__.render.call(this);return u[0].classList.add("select2-selection--multiple"),u.html('<ul class="select2-selection__rendered"></ul>'),u},d.prototype.bind=function(u,a){var f=this;d.__super__.bind.apply(this,arguments);var p=u.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",p),this.$selection.on("click",function(T){f.trigger("toggle",{originalEvent:T})}),this.$selection.on("click",".select2-selection__choice__remove",function(T){var E;f.isDisabled()||(E=v(this).parent(),E=m.GetData(E[0],"data"),f.trigger("unselect",{originalEvent:T,data:E}))}),this.$selection.on("keydown",".select2-selection__choice__remove",function(T){f.isDisabled()||T.stopPropagation()})},d.prototype.clear=function(){var u=this.$selection.find(".select2-selection__rendered");u.empty(),u.removeAttr("title")},d.prototype.display=function(u,a){var f=this.options.get("templateSelection");return this.options.get("escapeMarkup")(f(u,a))},d.prototype.selectionContainer=function(){return v('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},d.prototype.update=function(u){if(this.clear(),u.length!==0){for(var a=[],f=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",p=0;p<u.length;p++){var T=u[p],E=this.selectionContainer(),C=this.display(T,E),M=f+m.generateChars(4)+"-";T.id?M+=T.id:M+=m.generateChars(4),E.find(".select2-selection__choice__display").append(C).attr("id",M);var L=T.title||T.text;L&&E.attr("title",L),C=this.options.get("translations").get("removeItem"),L=E.find(".select2-selection__choice__remove"),L.attr("title",C()),L.attr("aria-label",C()),L.attr("aria-describedby",M),m.StoreData(E[0],"data",T),a.push(E)}this.$selection.find(".select2-selection__rendered").append(a)}},d}),z.define("select2/selection/placeholder",[],function(){function v(w,m,d){this.placeholder=this.normalizePlaceholder(d.get("placeholder")),w.call(this,m,d)}return v.prototype.normalizePlaceholder=function(w,m){return m=typeof m=="string"?{id:"",text:m}:m},v.prototype.createPlaceholder=function(w,m){var d=this.selectionContainer();return d.html(this.display(m)),d[0].classList.add("select2-selection__placeholder"),d[0].classList.remove("select2-selection__choice"),m=m.title||m.text||d.text(),this.$selection.find(".select2-selection__rendered").attr("title",m),d},v.prototype.update=function(w,m){var d=m.length==1&&m[0].id!=this.placeholder.id;if(1<m.length||d)return w.call(this,m);this.clear(),m=this.createPlaceholder(this.placeholder),this.$selection.find(".select2-selection__rendered").append(m)},v}),z.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(v,w,m){function d(){}return d.prototype.bind=function(u,a,f){var p=this;u.call(this,a,f),this.placeholder==null&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(T){p._handleClear(T)}),a.on("keypress",function(T){p._handleKeyboardClear(T,a)})},d.prototype._handleClear=function(u,a){if(!this.isDisabled()){var f=this.$selection.find(".select2-selection__clear");if(f.length!==0){a.stopPropagation();var p=m.GetData(f[0],"data"),T=this.$element.val();this.$element.val(this.placeholder.id);var E={data:p};if(this.trigger("clear",E),E.prevented)this.$element.val(T);else{for(var C=0;C<p.length;C++)if(E={data:p[C]},this.trigger("unselect",E),E.prevented)return void this.$element.val(T);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},d.prototype._handleKeyboardClear=function(u,a,f){f.isOpen()||a.which!=w.DELETE&&a.which!=w.BACKSPACE||this._handleClear(a)},d.prototype.update=function(u,a){var f,p;u.call(this,a),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),0<this.$selection.find(".select2-selection__placeholder").length||a.length===0||(f=this.$selection.find(".select2-selection__rendered").attr("id"),p=this.options.get("translations").get("removeAllItems"),(u=v('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title",p()),u.attr("aria-label",p()),u.attr("aria-describedby",f),m.StoreData(u[0],"data",a),this.$selection.prepend(u),this.$selection[0].classList.add("select2-selection--clearable"))},d}),z.define("select2/selection/search",["jquery","../utils","../keys"],function(v,w,m){function d(u,a,f){u.call(this,a,f)}return d.prototype.render=function(u){var a=this.options.get("translations").get("search"),f=v('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');return this.$searchContainer=f,this.$search=f.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",a()),u=u.call(this),this._transferTabIndex(),u.append(this.$searchContainer),u},d.prototype.bind=function(u,C,f){var p=this,T=C.id+"-results",E=C.id+"-container";u.call(this,C,f),p.$search.attr("aria-describedby",E),C.on("open",function(){p.$search.attr("aria-controls",T),p.$search.trigger("focus")}),C.on("close",function(){p.$search.val(""),p.resizeSearch(),p.$search.removeAttr("aria-controls"),p.$search.removeAttr("aria-activedescendant"),p.$search.trigger("focus")}),C.on("enable",function(){p.$search.prop("disabled",!1),p._transferTabIndex()}),C.on("disable",function(){p.$search.prop("disabled",!0)}),C.on("focus",function(L){p.$search.trigger("focus")}),C.on("results:focus",function(L){L.data._resultId?p.$search.attr("aria-activedescendant",L.data._resultId):p.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(L){p.trigger("focus",L)}),this.$selection.on("focusout",".select2-search--inline",function(L){p._handleBlur(L)}),this.$selection.on("keydown",".select2-search--inline",function(L){var oe;L.stopPropagation(),p.trigger("keypress",L),p._keyUpPrevented=L.isDefaultPrevented(),L.which!==m.BACKSPACE||p.$search.val()!==""||0<(oe=p.$selection.find(".select2-selection__choice").last()).length&&(oe=w.GetData(oe[0],"data"),p.searchRemoveChoice(oe),L.preventDefault())}),this.$selection.on("click",".select2-search--inline",function(L){p.$search.val()&&L.stopPropagation()});var C=document.documentMode,M=C&&C<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(L){M?p.$selection.off("input.search input.searchcheck"):p.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(L){var oe;M&&L.type==="input"?p.$selection.off("input.search input.searchcheck"):(oe=L.which)!=m.SHIFT&&oe!=m.CTRL&&oe!=m.ALT&&oe!=m.TAB&&p.handleSearch(L)})},d.prototype._transferTabIndex=function(u){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(u,a){this.$search.attr("placeholder",a.text)},d.prototype.update=function(u,a){var f=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),u.call(this,a),this.resizeSearch(),f&&this.$search.trigger("focus")},d.prototype.handleSearch=function(){var u;this.resizeSearch(),this._keyUpPrevented||(u=this.$search.val(),this.trigger("query",{term:u})),this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(u,a){this.trigger("unselect",{data:a}),this.$search.val(a.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var u="100%";this.$search.attr("placeholder")===""&&(u=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",u)},d}),z.define("select2/selection/selectionCss",["../utils"],function(v){function w(){}return w.prototype.render=function(u){var d=u.call(this),u=this.options.get("selectionCssClass")||"";return u.indexOf(":all:")!==-1&&(u=u.replace(":all:",""),v.copyNonInternalCssClasses(d[0],this.$element[0])),d.addClass(u),d},w}),z.define("select2/selection/eventRelay",["jquery"],function(v){function w(){}return w.prototype.bind=function(m,d,u){var a=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],p=["opening","closing","selecting","unselecting","clearing"];m.call(this,d,u),d.on("*",function(T,E){var C;f.indexOf(T)!==-1&&(E=E||{},C=v.Event("select2:"+T,{params:E}),a.$element.trigger(C),p.indexOf(T)!==-1&&(E.prevented=C.isDefaultPrevented()))})},w}),z.define("select2/translation",["jquery","require"],function(v,w){function m(d){this.dict=d||{}}return m.prototype.all=function(){return this.dict},m.prototype.get=function(d){return this.dict[d]},m.prototype.extend=function(d){this.dict=v.extend({},d.all(),this.dict)},m._cache={},m.loadPath=function(d){var u;return d in m._cache||(u=w(d),m._cache[d]=u),new m(m._cache[d])},m}),z.define("select2/diacritics",[],function(){return{"Ⓐ":"A",Ａ:"A",À:"A",Á:"A",Â:"A",Ầ:"A",Ấ:"A",Ẫ:"A",Ẩ:"A",Ã:"A",Ā:"A",Ă:"A",Ằ:"A",Ắ:"A",Ẵ:"A",Ẳ:"A",Ȧ:"A",Ǡ:"A",Ä:"A",Ǟ:"A",Ả:"A",Å:"A",Ǻ:"A",Ǎ:"A",Ȁ:"A",Ȃ:"A",Ạ:"A",Ậ:"A",Ặ:"A",Ḁ:"A",Ą:"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA",Æ:"AE",Ǽ:"AE",Ǣ:"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B",Ｂ:"B",Ḃ:"B",Ḅ:"B",Ḇ:"B","Ƀ":"B",Ƃ:"B",Ɓ:"B","Ⓒ":"C",Ｃ:"C",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",Ç:"C",Ḉ:"C",Ƈ:"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D",Ｄ:"D",Ḋ:"D",Ď:"D",Ḍ:"D",Ḑ:"D",Ḓ:"D",Ḏ:"D",Đ:"D",Ƌ:"D",Ɗ:"D",Ɖ:"D","Ꝺ":"D",Ǳ:"DZ",Ǆ:"DZ",ǲ:"Dz",ǅ:"Dz","Ⓔ":"E",Ｅ:"E",È:"E",É:"E",Ê:"E",Ề:"E",Ế:"E",Ễ:"E",Ể:"E",Ẽ:"E",Ē:"E",Ḕ:"E",Ḗ:"E",Ĕ:"E",Ė:"E",Ë:"E",Ẻ:"E",Ě:"E",Ȅ:"E",Ȇ:"E",Ẹ:"E",Ệ:"E",Ȩ:"E",Ḝ:"E",Ę:"E",Ḙ:"E",Ḛ:"E",Ɛ:"E",Ǝ:"E","Ⓕ":"F",Ｆ:"F",Ḟ:"F",Ƒ:"F","Ꝼ":"F","Ⓖ":"G",Ｇ:"G",Ǵ:"G",Ĝ:"G",Ḡ:"G",Ğ:"G",Ġ:"G",Ǧ:"G",Ģ:"G",Ǥ:"G",Ɠ:"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H",Ｈ:"H",Ĥ:"H",Ḣ:"H",Ḧ:"H",Ȟ:"H",Ḥ:"H",Ḩ:"H",Ḫ:"H",Ħ:"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I",Ｉ:"I",Ì:"I",Í:"I",Î:"I",Ĩ:"I",Ī:"I",Ĭ:"I",İ:"I",Ï:"I",Ḯ:"I",Ỉ:"I",Ǐ:"I",Ȉ:"I",Ȋ:"I",Ị:"I",Į:"I",Ḭ:"I",Ɨ:"I","Ⓙ":"J",Ｊ:"J",Ĵ:"J","Ɉ":"J","Ⓚ":"K",Ｋ:"K",Ḱ:"K",Ǩ:"K",Ḳ:"K",Ķ:"K",Ḵ:"K",Ƙ:"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L",Ｌ:"L",Ŀ:"L",Ĺ:"L",Ľ:"L",Ḷ:"L",Ḹ:"L",Ļ:"L",Ḽ:"L",Ḻ:"L",Ł:"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L",Ǉ:"LJ",ǈ:"Lj","Ⓜ":"M",Ｍ:"M",Ḿ:"M",Ṁ:"M",Ṃ:"M","Ɱ":"M",Ɯ:"M","Ⓝ":"N",Ｎ:"N",Ǹ:"N",Ń:"N",Ñ:"N",Ṅ:"N",Ň:"N",Ṇ:"N",Ņ:"N",Ṋ:"N",Ṉ:"N","Ƞ":"N",Ɲ:"N","Ꞑ":"N","Ꞥ":"N",Ǌ:"NJ",ǋ:"Nj","Ⓞ":"O",Ｏ:"O",Ò:"O",Ó:"O",Ô:"O",Ồ:"O",Ố:"O",Ỗ:"O",Ổ:"O",Õ:"O",Ṍ:"O",Ȭ:"O",Ṏ:"O",Ō:"O",Ṑ:"O",Ṓ:"O",Ŏ:"O",Ȯ:"O",Ȱ:"O",Ö:"O",Ȫ:"O",Ỏ:"O",Ő:"O",Ǒ:"O",Ȍ:"O",Ȏ:"O",Ơ:"O",Ờ:"O",Ớ:"O",Ỡ:"O",Ở:"O",Ợ:"O",Ọ:"O",Ộ:"O",Ǫ:"O",Ǭ:"O",Ø:"O",Ǿ:"O",Ɔ:"O",Ɵ:"O","Ꝋ":"O","Ꝍ":"O",Œ:"OE",Ƣ:"OI","Ꝏ":"OO",Ȣ:"OU","Ⓟ":"P",Ｐ:"P",Ṕ:"P",Ṗ:"P",Ƥ:"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q",Ｑ:"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R",Ｒ:"R",Ŕ:"R",Ṙ:"R",Ř:"R",Ȑ:"R",Ȓ:"R",Ṛ:"R",Ṝ:"R",Ŗ:"R",Ṟ:"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S",Ｓ:"S","ẞ":"S",Ś:"S",Ṥ:"S",Ŝ:"S",Ṡ:"S",Š:"S",Ṧ:"S",Ṣ:"S",Ṩ:"S",Ș:"S",Ş:"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T",Ｔ:"T",Ṫ:"T",Ť:"T",Ṭ:"T",Ț:"T",Ţ:"T",Ṱ:"T",Ṯ:"T",Ŧ:"T",Ƭ:"T",Ʈ:"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U",Ｕ:"U",Ù:"U",Ú:"U",Û:"U",Ũ:"U",Ṹ:"U",Ū:"U",Ṻ:"U",Ŭ:"U",Ü:"U",Ǜ:"U",Ǘ:"U",Ǖ:"U",Ǚ:"U",Ủ:"U",Ů:"U",Ű:"U",Ǔ:"U",Ȕ:"U",Ȗ:"U",Ư:"U",Ừ:"U",Ứ:"U",Ữ:"U",Ử:"U",Ự:"U",Ụ:"U",Ṳ:"U",Ų:"U",Ṷ:"U",Ṵ:"U","Ʉ":"U","Ⓥ":"V",Ｖ:"V",Ṽ:"V",Ṿ:"V",Ʋ:"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W",Ｗ:"W",Ẁ:"W",Ẃ:"W",Ŵ:"W",Ẇ:"W",Ẅ:"W",Ẉ:"W","Ⱳ":"W","Ⓧ":"X",Ｘ:"X",Ẋ:"X",Ẍ:"X","Ⓨ":"Y",Ｙ:"Y",Ỳ:"Y",Ý:"Y",Ŷ:"Y",Ỹ:"Y",Ȳ:"Y",Ẏ:"Y",Ÿ:"Y",Ỷ:"Y",Ỵ:"Y",Ƴ:"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z",Ｚ:"Z",Ź:"Z",Ẑ:"Z",Ż:"Z",Ž:"Z",Ẓ:"Z",Ẕ:"Z",Ƶ:"Z",Ȥ:"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a",ａ:"a",ẚ:"a",à:"a",á:"a",â:"a",ầ:"a",ấ:"a",ẫ:"a",ẩ:"a",ã:"a",ā:"a",ă:"a",ằ:"a",ắ:"a",ẵ:"a",ẳ:"a",ȧ:"a",ǡ:"a",ä:"a",ǟ:"a",ả:"a",å:"a",ǻ:"a",ǎ:"a",ȁ:"a",ȃ:"a",ạ:"a",ậ:"a",ặ:"a",ḁ:"a",ą:"a","ⱥ":"a",ɐ:"a","ꜳ":"aa",æ:"ae",ǽ:"ae",ǣ:"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b",ｂ:"b",ḃ:"b",ḅ:"b",ḇ:"b",ƀ:"b",ƃ:"b",ɓ:"b","ⓒ":"c",ｃ:"c",ć:"c",ĉ:"c",ċ:"c",č:"c",ç:"c",ḉ:"c",ƈ:"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d",ｄ:"d",ḋ:"d",ď:"d",ḍ:"d",ḑ:"d",ḓ:"d",ḏ:"d",đ:"d",ƌ:"d",ɖ:"d",ɗ:"d","ꝺ":"d",ǳ:"dz",ǆ:"dz","ⓔ":"e",ｅ:"e",è:"e",é:"e",ê:"e",ề:"e",ế:"e",ễ:"e",ể:"e",ẽ:"e",ē:"e",ḕ:"e",ḗ:"e",ĕ:"e",ė:"e",ë:"e",ẻ:"e",ě:"e",ȅ:"e",ȇ:"e",ẹ:"e",ệ:"e",ȩ:"e",ḝ:"e",ę:"e",ḙ:"e",ḛ:"e","ɇ":"e",ɛ:"e",ǝ:"e","ⓕ":"f",ｆ:"f",ḟ:"f",ƒ:"f","ꝼ":"f","ⓖ":"g",ｇ:"g",ǵ:"g",ĝ:"g",ḡ:"g",ğ:"g",ġ:"g",ǧ:"g",ģ:"g",ǥ:"g",ɠ:"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h",ｈ:"h",ĥ:"h",ḣ:"h",ḧ:"h",ȟ:"h",ḥ:"h",ḩ:"h",ḫ:"h",ẖ:"h",ħ:"h","ⱨ":"h","ⱶ":"h",ɥ:"h",ƕ:"hv","ⓘ":"i",ｉ:"i",ì:"i",í:"i",î:"i",ĩ:"i",ī:"i",ĭ:"i",ï:"i",ḯ:"i",ỉ:"i",ǐ:"i",ȉ:"i",ȋ:"i",ị:"i",į:"i",ḭ:"i",ɨ:"i",ı:"i","ⓙ":"j",ｊ:"j",ĵ:"j",ǰ:"j","ɉ":"j","ⓚ":"k",ｋ:"k",ḱ:"k",ǩ:"k",ḳ:"k",ķ:"k",ḵ:"k",ƙ:"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l",ｌ:"l",ŀ:"l",ĺ:"l",ľ:"l",ḷ:"l",ḹ:"l",ļ:"l",ḽ:"l",ḻ:"l",ſ:"l",ł:"l",ƚ:"l",ɫ:"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l",ǉ:"lj","ⓜ":"m",ｍ:"m",ḿ:"m",ṁ:"m",ṃ:"m",ɱ:"m",ɯ:"m","ⓝ":"n",ｎ:"n",ǹ:"n",ń:"n",ñ:"n",ṅ:"n",ň:"n",ṇ:"n",ņ:"n",ṋ:"n",ṉ:"n",ƞ:"n",ɲ:"n",ŉ:"n","ꞑ":"n","ꞥ":"n",ǌ:"nj","ⓞ":"o",ｏ:"o",ò:"o",ó:"o",ô:"o",ồ:"o",ố:"o",ỗ:"o",ổ:"o",õ:"o",ṍ:"o",ȭ:"o",ṏ:"o",ō:"o",ṑ:"o",ṓ:"o",ŏ:"o",ȯ:"o",ȱ:"o",ö:"o",ȫ:"o",ỏ:"o",ő:"o",ǒ:"o",ȍ:"o",ȏ:"o",ơ:"o",ờ:"o",ớ:"o",ỡ:"o",ở:"o",ợ:"o",ọ:"o",ộ:"o",ǫ:"o",ǭ:"o",ø:"o",ǿ:"o",ɔ:"o","ꝋ":"o","ꝍ":"o",ɵ:"o",œ:"oe",ƣ:"oi",ȣ:"ou","ꝏ":"oo","ⓟ":"p",ｐ:"p",ṕ:"p",ṗ:"p",ƥ:"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q",ｑ:"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r",ｒ:"r",ŕ:"r",ṙ:"r",ř:"r",ȑ:"r",ȓ:"r",ṛ:"r",ṝ:"r",ŗ:"r",ṟ:"r","ɍ":"r",ɽ:"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s",ｓ:"s",ß:"s",ś:"s",ṥ:"s",ŝ:"s",ṡ:"s",š:"s",ṧ:"s",ṣ:"s",ṩ:"s",ș:"s",ş:"s","ȿ":"s","ꞩ":"s","ꞅ":"s",ẛ:"s","ⓣ":"t",ｔ:"t",ṫ:"t",ẗ:"t",ť:"t",ṭ:"t",ț:"t",ţ:"t",ṱ:"t",ṯ:"t",ŧ:"t",ƭ:"t",ʈ:"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u",ｕ:"u",ù:"u",ú:"u",û:"u",ũ:"u",ṹ:"u",ū:"u",ṻ:"u",ŭ:"u",ü:"u",ǜ:"u",ǘ:"u",ǖ:"u",ǚ:"u",ủ:"u",ů:"u",ű:"u",ǔ:"u",ȕ:"u",ȗ:"u",ư:"u",ừ:"u",ứ:"u",ữ:"u",ử:"u",ự:"u",ụ:"u",ṳ:"u",ų:"u",ṷ:"u",ṵ:"u",ʉ:"u","ⓥ":"v",ｖ:"v",ṽ:"v",ṿ:"v",ʋ:"v","ꝟ":"v",ʌ:"v","ꝡ":"vy","ⓦ":"w",ｗ:"w",ẁ:"w",ẃ:"w",ŵ:"w",ẇ:"w",ẅ:"w",ẘ:"w",ẉ:"w","ⱳ":"w","ⓧ":"x",ｘ:"x",ẋ:"x",ẍ:"x","ⓨ":"y",ｙ:"y",ỳ:"y",ý:"y",ŷ:"y",ỹ:"y",ȳ:"y",ẏ:"y",ÿ:"y",ỷ:"y",ẙ:"y",ỵ:"y",ƴ:"y","ɏ":"y","ỿ":"y","ⓩ":"z",ｚ:"z",ź:"z",ẑ:"z",ż:"z",ž:"z",ẓ:"z",ẕ:"z",ƶ:"z",ȥ:"z","ɀ":"z","ⱬ":"z","ꝣ":"z",Ά:"Α",Έ:"Ε",Ή:"Η",Ί:"Ι",Ϊ:"Ι",Ό:"Ο",Ύ:"Υ",Ϋ:"Υ",Ώ:"Ω",ά:"α",έ:"ε",ή:"η",ί:"ι",ϊ:"ι",ΐ:"ι",ό:"ο",ύ:"υ",ϋ:"υ",ΰ:"υ",ώ:"ω",ς:"σ","’":"'"}}),z.define("select2/data/base",["../utils"],function(v){function w(m,d){w.__super__.constructor.call(this)}return v.Extend(w,v.Observable),w.prototype.current=function(m){throw new Error("The `current` method must be defined in child classes.")},w.prototype.query=function(m,d){throw new Error("The `query` method must be defined in child classes.")},w.prototype.bind=function(m,d){},w.prototype.destroy=function(){},w.prototype.generateResultId=function(m,d){return m=m.id+"-result-",m+=v.generateChars(4),d.id!=null?m+="-"+d.id.toString():m+="-"+v.generateChars(4),m},w}),z.define("select2/data/select",["./base","../utils","jquery"],function(v,w,m){function d(u,a){this.$element=u,this.options=a,d.__super__.constructor.call(this)}return w.Extend(d,v),d.prototype.current=function(u){var a=this;u(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(f){return a.item(m(f))}))},d.prototype.select=function(u){var a,f=this;if(u.selected=!0,u.element!=null&&u.element.tagName.toLowerCase()==="option")return u.element.selected=!0,void this.$element.trigger("input").trigger("change");this.$element.prop("multiple")?this.current(function(p){var T=[];(u=[u]).push.apply(u,p);for(var E=0;E<u.length;E++){var C=u[E].id;T.indexOf(C)===-1&&T.push(C)}f.$element.val(T),f.$element.trigger("input").trigger("change")}):(a=u.id,this.$element.val(a),this.$element.trigger("input").trigger("change"))},d.prototype.unselect=function(u){var a=this;if(this.$element.prop("multiple")){if(u.selected=!1,u.element!=null&&u.element.tagName.toLowerCase()==="option")return u.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(f){for(var p=[],T=0;T<f.length;T++){var E=f[T].id;E!==u.id&&p.indexOf(E)===-1&&p.push(E)}a.$element.val(p),a.$element.trigger("input").trigger("change")})}},d.prototype.bind=function(u,a){var f=this;(this.container=u).on("select",function(p){f.select(p.data)}),u.on("unselect",function(p){f.unselect(p.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){w.RemoveData(this)})},d.prototype.query=function(u,a){var f=[],p=this;this.$element.children().each(function(){var T;this.tagName.toLowerCase()!=="option"&&this.tagName.toLowerCase()!=="optgroup"||(T=m(this),T=p.item(T),(T=p.matches(u,T))!==null&&f.push(T))}),a({results:f})},d.prototype.addOptions=function(u){this.$element.append(u)},d.prototype.option=function(u){var a;return u.children?(a=document.createElement("optgroup")).label=u.text:(a=document.createElement("option")).textContent!==void 0?a.textContent=u.text:a.innerText=u.text,u.id!==void 0&&(a.value=u.id),u.disabled&&(a.disabled=!0),u.selected&&(a.selected=!0),u.title&&(a.title=u.title),u=this._normalizeItem(u),u.element=a,w.StoreData(a,"data",u),m(a)},d.prototype.item=function(u){var a={};if((a=w.GetData(u[0],"data"))!=null)return a;var f=u[0];if(f.tagName.toLowerCase()==="option")a={id:u.val(),text:u.text(),disabled:u.prop("disabled"),selected:u.prop("selected"),title:u.prop("title")};else if(f.tagName.toLowerCase()==="optgroup"){a={text:u.prop("label"),children:[],title:u.prop("title")};for(var p=u.children("option"),T=[],E=0;E<p.length;E++){var C=m(p[E]),C=this.item(C);T.push(C)}a.children=T}return(a=this._normalizeItem(a)).element=u[0],w.StoreData(u[0],"data",a),a},d.prototype._normalizeItem=function(u){return u!==Object(u)&&(u={id:u,text:u}),(u=m.extend({},{text:""},u)).id!=null&&(u.id=u.id.toString()),u.text!=null&&(u.text=u.text.toString()),u._resultId==null&&u.id&&this.container!=null&&(u._resultId=this.generateResultId(this.container,u)),m.extend({},{selected:!1,disabled:!1},u)},d.prototype.matches=function(u,a){return this.options.get("matcher")(u,a)},d}),z.define("select2/data/array",["./select","../utils","jquery"],function(v,w,m){function d(u,a){this._dataToConvert=a.get("data")||[],d.__super__.constructor.call(this,u,a)}return w.Extend(d,v),d.prototype.bind=function(u,a){d.__super__.bind.call(this,u,a),this.addOptions(this.convertToOptions(this._dataToConvert))},d.prototype.select=function(u){var a=this.$element.find("option").filter(function(f,p){return p.value==u.id.toString()});a.length===0&&(a=this.option(u),this.addOptions(a)),d.__super__.select.call(this,u)},d.prototype.convertToOptions=function(u){for(var a=this,f=this.$element.find("option"),p=f.map(function(){return a.item(m(this)).id}).get(),T=[],E=0;E<u.length;E++){var C,M,L=this._normalizeItem(u[E]);0<=p.indexOf(L.id)?(C=f.filter(function(oe){return function(){return m(this).val()==oe.id}}(L)),M=this.item(C),M=m.extend(!0,{},L,M),M=this.option(M),C.replaceWith(M)):(M=this.option(L),L.children&&(L=this.convertToOptions(L.children),M.append(L)),T.push(M))}return T},d}),z.define("select2/data/ajax",["./array","../utils","jquery"],function(v,w,m){function d(u,a){this.ajaxOptions=this._applyDefaults(a.get("ajax")),this.ajaxOptions.processResults!=null&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,u,a)}return w.Extend(d,v),d.prototype._applyDefaults=function(u){var a={data:function(f){return m.extend({},f,{q:f.term})},transport:function(f,p,T){return f=m.ajax(f),f.then(p),f.fail(T),f}};return m.extend({},a,u,!0)},d.prototype.processResults=function(u){return u},d.prototype.query=function(u,a){var f=this;this._request!=null&&(typeof this._request.abort=="function"&&this._request.abort(),this._request=null);var p=m.extend({type:"GET"},this.ajaxOptions);function T(){var E=p.transport(p,function(C){C=f.processResults(C,u),f.options.get("debug")&&window.console&&console.error&&(C&&C.results&&Array.isArray(C.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),a(C)},function(){"status"in E&&(E.status===0||E.status==="0")||f.trigger("results:message",{message:"errorLoading"})});f._request=E}typeof p.url=="function"&&(p.url=p.url.call(this.$element,u)),typeof p.data=="function"&&(p.data=p.data.call(this.$element,u)),this.ajaxOptions.delay&&u.term!=null?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(T,this.ajaxOptions.delay)):T()},d}),z.define("select2/data/tags",["jquery"],function(v){function w(m,d,u){var a=u.get("tags"),f=u.get("createTag");if(f!==void 0&&(this.createTag=f),f=u.get("insertTag"),f!==void 0&&(this.insertTag=f),m.call(this,d,u),Array.isArray(a))for(var p=0;p<a.length;p++){var T=a[p],T=this._normalizeItem(T),T=this.option(T);this.$element.append(T)}}return w.prototype.query=function(m,d,u){var a=this;this._removeOldTags(),d.term!=null&&d.page==null?m.call(this,d,function f(p,T){for(var E=p.results,C=0;C<E.length;C++){var M=E[C],L=M.children!=null&&!f({results:M.children},!0);if((M.text||"").toUpperCase()===(d.term||"").toUpperCase()||L)return!T&&(p.data=E,void u(p))}if(T)return!0;var oe,pe=a.createTag(d);pe!=null&&((oe=a.option(pe)).attr("data-select2-tag","true"),a.addOptions([oe]),a.insertTag(E,pe)),p.results=E,u(p)}):m.call(this,d,u)},w.prototype.createTag=function(m,d){return d.term==null?null:(d=d.term.trim(),d===""?null:{id:d,text:d})},w.prototype.insertTag=function(m,d,u){d.unshift(u)},w.prototype._removeOldTags=function(m){this.$element.find("option[data-select2-tag]").each(function(){this.selected||v(this).remove()})},w}),z.define("select2/data/tokenizer",["jquery"],function(v){function w(m,d,u){var a=u.get("tokenizer");a!==void 0&&(this.tokenizer=a),m.call(this,d,u)}return w.prototype.bind=function(m,d,u){m.call(this,d,u),this.$search=d.dropdown.$search||d.selection.$search||u.find(".select2-search__field")},w.prototype.query=function(m,d,u){var a=this;d.term=d.term||"";var f=this.tokenizer(d,this.options,function(p){var T,E=a._normalizeItem(p);a.$element.find("option").filter(function(){return v(this).val()===E.id}).length||((T=a.option(E)).attr("data-select2-tag",!0),a._removeOldTags(),a.addOptions([T])),T=E,a.trigger("select",{data:T})});f.term!==d.term&&(this.$search.length&&(this.$search.val(f.term),this.$search.trigger("focus")),d.term=f.term),m.call(this,d,u)},w.prototype.tokenizer=function(m,d,u,a){for(var f=u.get("tokenSeparators")||[],p=d.term,T=0,E=this.createTag||function(M){return{id:M.term,text:M.term}};T<p.length;){var C=p[T];f.indexOf(C)!==-1?(C=p.substr(0,T),(C=E(v.extend({},d,{term:C})))!=null?(a(C),p=p.substr(T+1)||"",T=0):T++):T++}return{term:p}},w}),z.define("select2/data/minimumInputLength",[],function(){function v(w,m,d){this.minimumInputLength=d.get("minimumInputLength"),w.call(this,m,d)}return v.prototype.query=function(w,m,d){m.term=m.term||"",m.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:m.term,params:m}}):w.call(this,m,d)},v}),z.define("select2/data/maximumInputLength",[],function(){function v(w,m,d){this.maximumInputLength=d.get("maximumInputLength"),w.call(this,m,d)}return v.prototype.query=function(w,m,d){m.term=m.term||"",0<this.maximumInputLength&&m.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:m.term,params:m}}):w.call(this,m,d)},v}),z.define("select2/data/maximumSelectionLength",[],function(){function v(w,m,d){this.maximumSelectionLength=d.get("maximumSelectionLength"),w.call(this,m,d)}return v.prototype.bind=function(w,m,d){var u=this;w.call(this,m,d),m.on("select",function(){u._checkIfMaximumSelected()})},v.prototype.query=function(w,m,d){var u=this;this._checkIfMaximumSelected(function(){w.call(u,m,d)})},v.prototype._checkIfMaximumSelected=function(w,m){var d=this;this.current(function(u){u=u!=null?u.length:0,0<d.maximumSelectionLength&&u>=d.maximumSelectionLength?d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):m&&m()})},v}),z.define("select2/dropdown",["jquery","./utils"],function(v,w){function m(d,u){this.$element=d,this.options=u,m.__super__.constructor.call(this)}return w.Extend(m,w.Observable),m.prototype.render=function(){var d=v('<span class="select2-dropdown"><span class="select2-results"></span></span>');return d.attr("dir",this.options.get("dir")),this.$dropdown=d},m.prototype.bind=function(){},m.prototype.position=function(d,u){},m.prototype.destroy=function(){this.$dropdown.remove()},m}),z.define("select2/dropdown/search",["jquery"],function(v){function w(){}return w.prototype.render=function(a){var d=a.call(this),u=this.options.get("translations").get("search"),a=v('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=a,this.$search=a.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",u()),d.prepend(a),d},w.prototype.bind=function(m,d,u){var a=this,f=d.id+"-results";m.call(this,d,u),this.$search.on("keydown",function(p){a.trigger("keypress",p),a._keyUpPrevented=p.isDefaultPrevented()}),this.$search.on("input",function(p){v(this).off("keyup")}),this.$search.on("keyup input",function(p){a.handleSearch(p)}),d.on("open",function(){a.$search.attr("tabindex",0),a.$search.attr("aria-controls",f),a.$search.trigger("focus"),window.setTimeout(function(){a.$search.trigger("focus")},0)}),d.on("close",function(){a.$search.attr("tabindex",-1),a.$search.removeAttr("aria-controls"),a.$search.removeAttr("aria-activedescendant"),a.$search.val(""),a.$search.trigger("blur")}),d.on("focus",function(){d.isOpen()||a.$search.trigger("focus")}),d.on("results:all",function(p){p.query.term!=null&&p.query.term!==""||(a.showSearch(p)?a.$searchContainer[0].classList.remove("select2-search--hide"):a.$searchContainer[0].classList.add("select2-search--hide"))}),d.on("results:focus",function(p){p.data._resultId?a.$search.attr("aria-activedescendant",p.data._resultId):a.$search.removeAttr("aria-activedescendant")})},w.prototype.handleSearch=function(m){var d;this._keyUpPrevented||(d=this.$search.val(),this.trigger("query",{term:d})),this._keyUpPrevented=!1},w.prototype.showSearch=function(m,d){return!0},w}),z.define("select2/dropdown/hidePlaceholder",[],function(){function v(w,m,d,u){this.placeholder=this.normalizePlaceholder(d.get("placeholder")),w.call(this,m,d,u)}return v.prototype.append=function(w,m){m.results=this.removePlaceholder(m.results),w.call(this,m)},v.prototype.normalizePlaceholder=function(w,m){return m=typeof m=="string"?{id:"",text:m}:m},v.prototype.removePlaceholder=function(w,m){for(var d=m.slice(0),u=m.length-1;0<=u;u--){var a=m[u];this.placeholder.id===a.id&&d.splice(u,1)}return d},v}),z.define("select2/dropdown/infiniteScroll",["jquery"],function(v){function w(m,d,u,a){this.lastParams={},m.call(this,d,u,a),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return w.prototype.append=function(m,d){this.$loadingMore.remove(),this.loading=!1,m.call(this,d),this.showLoadingMore(d)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},w.prototype.bind=function(m,d,u){var a=this;m.call(this,d,u),d.on("query",function(f){a.lastParams=f,a.loading=!0}),d.on("query:append",function(f){a.lastParams=f,a.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},w.prototype.loadMoreIfNeeded=function(){var m=v.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&m&&(m=this.$results.offset().top+this.$results.outerHeight(!1),this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=m+50&&this.loadMore())},w.prototype.loadMore=function(){this.loading=!0;var m=v.extend({},{page:1},this.lastParams);m.page++,this.trigger("query:append",m)},w.prototype.showLoadingMore=function(m,d){return d.pagination&&d.pagination.more},w.prototype.createLoadingMore=function(){var m=v('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),d=this.options.get("translations").get("loadingMore");return m.html(d(this.lastParams)),m},w}),z.define("select2/dropdown/attachBody",["jquery","../utils"],function(v,w){function m(d,u,a){this.$dropdownParent=v(a.get("dropdownParent")||document.body),d.call(this,u,a)}return m.prototype.bind=function(d,u,a){var f=this;d.call(this,u,a),u.on("open",function(){f._showDropdown(),f._attachPositioningHandler(u),f._bindContainerResultHandlers(u)}),u.on("close",function(){f._hideDropdown(),f._detachPositioningHandler(u)}),this.$dropdownContainer.on("mousedown",function(p){p.stopPropagation()})},m.prototype.destroy=function(d){d.call(this),this.$dropdownContainer.remove()},m.prototype.position=function(d,u,a){u.attr("class",a.attr("class")),u[0].classList.remove("select2"),u[0].classList.add("select2-container--open"),u.css({position:"absolute",top:-999999}),this.$container=a},m.prototype.render=function(a){var u=v("<span></span>"),a=a.call(this);return u.append(a),this.$dropdownContainer=u},m.prototype._hideDropdown=function(d){this.$dropdownContainer.detach()},m.prototype._bindContainerResultHandlers=function(d,u){var a;this._containerResultsHandlersBound||(a=this,u.on("results:all",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("results:append",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("results:message",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("select",function(){a._positionDropdown(),a._resizeDropdown()}),u.on("unselect",function(){a._positionDropdown(),a._resizeDropdown()}),this._containerResultsHandlersBound=!0)},m.prototype._attachPositioningHandler=function(d,E){var a=this,f="scroll.select2."+E.id,p="resize.select2."+E.id,T="orientationchange.select2."+E.id,E=this.$container.parents().filter(w.hasScroll);E.each(function(){w.StoreData(this,"select2-scroll-position",{x:v(this).scrollLeft(),y:v(this).scrollTop()})}),E.on(f,function(C){var M=w.GetData(this,"select2-scroll-position");v(this).scrollTop(M.y)}),v(window).on(f+" "+p+" "+T,function(C){a._positionDropdown(),a._resizeDropdown()})},m.prototype._detachPositioningHandler=function(d,p){var a="scroll.select2."+p.id,f="resize.select2."+p.id,p="orientationchange.select2."+p.id;this.$container.parents().filter(w.hasScroll).off(a),v(window).off(a+" "+f+" "+p)},m.prototype._positionDropdown=function(){var C=v(window),d=this.$dropdown[0].classList.contains("select2-dropdown--above"),u=this.$dropdown[0].classList.contains("select2-dropdown--below"),a=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var p={height:this.$container.outerHeight(!1)};p.top=f.top,p.bottom=f.top+p.height;var T=this.$dropdown.outerHeight(!1),M=C.scrollTop(),L=C.scrollTop()+C.height(),E=M<f.top-T,C=L>f.bottom+T,M={left:f.left,top:p.bottom},L=this.$dropdownParent;L.css("position")==="static"&&(L=L.offsetParent()),f={top:0,left:0},(v.contains(document.body,L[0])||L[0].isConnected)&&(f=L.offset()),M.top-=f.top,M.left-=f.left,d||u||(a="below"),C||!E||d?!E&&C&&d&&(a="below"):a="above",(a=="above"||d&&a!=="below")&&(M.top=p.top-f.top-T),a!=null&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+a),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+a)),this.$dropdownContainer.css(M)},m.prototype._resizeDropdown=function(){var d={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(d.minWidth=d.width,d.position="relative",d.width="auto"),this.$dropdown.css(d)},m.prototype._showDropdown=function(d){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},m}),z.define("select2/dropdown/minimumResultsForSearch",[],function(){function v(w,m,d,u){this.minimumResultsForSearch=d.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),w.call(this,m,d,u)}return v.prototype.showSearch=function(w,m){return!(function d(u){for(var a=0,f=0;f<u.length;f++){var p=u[f];p.children?a+=d(p.children):a++}return a}(m.data.results)<this.minimumResultsForSearch)&&w.call(this,m)},v}),z.define("select2/dropdown/selectOnClose",["../utils"],function(v){function w(){}return w.prototype.bind=function(m,d,u){var a=this;m.call(this,d,u),d.on("close",function(f){a._handleSelectOnClose(f)})},w.prototype._handleSelectOnClose=function(m,d){if(d&&d.originalSelect2Event!=null){var u=d.originalSelect2Event;if(u._type==="select"||u._type==="unselect")return}u=this.getHighlightedResults(),u.length<1||(u=v.GetData(u[0],"data")).element!=null&&u.element.selected||u.element==null&&u.selected||this.trigger("select",{data:u})},w}),z.define("select2/dropdown/closeOnSelect",[],function(){function v(){}return v.prototype.bind=function(w,m,d){var u=this;w.call(this,m,d),m.on("select",function(a){u._selectTriggered(a)}),m.on("unselect",function(a){u._selectTriggered(a)})},v.prototype._selectTriggered=function(w,m){var d=m.originalEvent;d&&(d.ctrlKey||d.metaKey)||this.trigger("close",{originalEvent:d,originalSelect2Event:m})},v}),z.define("select2/dropdown/dropdownCss",["../utils"],function(v){function w(){}return w.prototype.render=function(u){var d=u.call(this),u=this.options.get("dropdownCssClass")||"";return u.indexOf(":all:")!==-1&&(u=u.replace(":all:",""),v.copyNonInternalCssClasses(d[0],this.$element[0])),d.addClass(u),d},w}),z.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(v){function w(){}return w.prototype.highlightFirstItem=function(m){var d=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(0<d.length){var u=d.first(),d=v.GetData(u[0],"data").element;if(d&&d.getAttribute&&d.getAttribute("data-select2-tag")==="true")return void u.trigger("mouseenter")}m.call(this)},w}),z.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(m){var w=m.input.length-m.maximum,m="Please delete "+w+" character";return w!=1&&(m+="s"),m},inputTooShort:function(v){return"Please enter "+(v.minimum-v.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(v){var w="You can only select "+v.maximum+" item";return v.maximum!=1&&(w+="s"),w},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),z.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(v,w,m,d,u,a,f,p,T,E,C,M,L,oe,pe,Ce,Ze,Rn,D,W,q,Q,ue,Ie,ie,y,I,R,P,x,U){function V(){this.reset()}return V.prototype.apply=function(S){var N;(S=v.extend(!0,{},this.defaults,S)).dataAdapter==null&&(S.ajax!=null?S.dataAdapter=pe:S.data!=null?S.dataAdapter=oe:S.dataAdapter=L,0<S.minimumInputLength&&(S.dataAdapter=E.Decorate(S.dataAdapter,Rn)),0<S.maximumInputLength&&(S.dataAdapter=E.Decorate(S.dataAdapter,D)),0<S.maximumSelectionLength&&(S.dataAdapter=E.Decorate(S.dataAdapter,W)),S.tags&&(S.dataAdapter=E.Decorate(S.dataAdapter,Ce)),S.tokenSeparators==null&&S.tokenizer==null||(S.dataAdapter=E.Decorate(S.dataAdapter,Ze))),S.resultsAdapter==null&&(S.resultsAdapter=w,S.ajax!=null&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,Ie)),S.placeholder!=null&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,ue)),S.selectOnClose&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,I)),S.tags&&(S.resultsAdapter=E.Decorate(S.resultsAdapter,x))),S.dropdownAdapter==null&&(S.multiple?S.dropdownAdapter=q:(N=E.Decorate(q,Q),S.dropdownAdapter=N),S.minimumResultsForSearch!==0&&(S.dropdownAdapter=E.Decorate(S.dropdownAdapter,y)),S.closeOnSelect&&(S.dropdownAdapter=E.Decorate(S.dropdownAdapter,R)),S.dropdownCssClass!=null&&(S.dropdownAdapter=E.Decorate(S.dropdownAdapter,P)),S.dropdownAdapter=E.Decorate(S.dropdownAdapter,ie)),S.selectionAdapter==null&&(S.multiple?S.selectionAdapter=d:S.selectionAdapter=m,S.placeholder!=null&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,u)),S.allowClear&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,a)),S.multiple&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,f)),S.selectionCssClass!=null&&(S.selectionAdapter=E.Decorate(S.selectionAdapter,p)),S.selectionAdapter=E.Decorate(S.selectionAdapter,T)),S.language=this._resolveLanguage(S.language),S.language.push("en");for(var O=[],B=0;B<S.language.length;B++){var F=S.language[B];O.indexOf(F)===-1&&O.push(F)}return S.language=O,S.translations=this._processTranslations(S.language,S.debug),S},V.prototype.reset=function(){function S(N){return N.replace(/[^\u0000-\u007E]/g,function(O){return M[O]||O})}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:E.escapeMarkup,language:{},matcher:function N(O,B){if(O.term==null||O.term.trim()==="")return B;if(B.children&&0<B.children.length){for(var F=v.extend(!0,{},B),H=B.children.length-1;0<=H;H--)N(O,B.children[H])==null&&F.children.splice(H,1);return 0<F.children.length?F:N(O,F)}var te=S(B.text).toUpperCase(),ae=S(O.term).toUpperCase();return-1<te.indexOf(ae)?B:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(N){return N},templateResult:function(N){return N.text},templateSelection:function(N){return N.text},theme:"default",width:"resolve"}},V.prototype.applyFromElement=function(S,H){var O=S.language,B=this.defaults.language,F=H.prop("lang"),H=H.closest("[lang]").prop("lang"),H=Array.prototype.concat.call(this._resolveLanguage(F),this._resolveLanguage(O),this._resolveLanguage(B),this._resolveLanguage(H));return S.language=H,S},V.prototype._resolveLanguage=function(S){if(!S)return[];if(v.isEmptyObject(S))return[];if(v.isPlainObject(S))return[S];for(var N,O=Array.isArray(S)?S:[S],B=[],F=0;F<O.length;F++)B.push(O[F]),typeof O[F]=="string"&&0<O[F].indexOf("-")&&(N=O[F].split("-")[0],B.push(N));return B},V.prototype._processTranslations=function(S,N){for(var O=new C,B=0;B<S.length;B++){var F=new C,H=S[B];if(typeof H=="string")try{F=C.loadPath(H)}catch{try{H=this.defaults.amdLanguageBase+H,F=C.loadPath(H)}catch{N&&window.console&&console.warn&&console.warn('Select2: The language file for "'+H+'" could not be automatically loaded. A fallback will be used instead.')}}else F=v.isPlainObject(H)?new C(H):H;O.extend(F)}return O},V.prototype.set=function(S,N){var O={};O[v.camelCase(S)]=N,O=E._convertData(O),v.extend(!0,this.defaults,O)},new V}),z.define("select2/options",["jquery","./defaults","./utils"],function(v,w,m){function d(u,a){this.options=u,a!=null&&this.fromElement(a),a!=null&&(this.options=w.applyFromElement(this.options,a)),this.options=w.apply(this.options)}return d.prototype.fromElement=function(u){var a=["select2"];this.options.multiple==null&&(this.options.multiple=u.prop("multiple")),this.options.disabled==null&&(this.options.disabled=u.prop("disabled")),this.options.autocomplete==null&&u.prop("autocomplete")&&(this.options.autocomplete=u.prop("autocomplete")),this.options.dir==null&&(u.prop("dir")?this.options.dir=u.prop("dir"):u.closest("[dir]").prop("dir")?this.options.dir=u.closest("[dir]").prop("dir"):this.options.dir="ltr"),u.prop("disabled",this.options.disabled),u.prop("multiple",this.options.multiple),m.GetData(u[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),m.StoreData(u[0],"data",m.GetData(u[0],"select2Tags")),m.StoreData(u[0],"tags",!0)),m.GetData(u[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),u.attr("ajax--url",m.GetData(u[0],"ajaxUrl")),m.StoreData(u[0],"ajax-Url",m.GetData(u[0],"ajaxUrl")));var f={};function p(oe,pe){return pe.toUpperCase()}for(var T=0;T<u[0].attributes.length;T++){var E=u[0].attributes[T].name,C="data-";E.substr(0,C.length)==C&&(E=E.substring(C.length),C=m.GetData(u[0],E),f[E.replace(/-([a-z])/g,p)]=C)}v.fn.jquery&&v.fn.jquery.substr(0,2)=="1."&&u[0].dataset&&(f=v.extend(!0,{},u[0].dataset,f));var M,L=v.extend(!0,{},m.GetData(u[0]),f);for(M in L=m._convertData(L))-1<a.indexOf(M)||(v.isPlainObject(this.options[M])?v.extend(this.options[M],L[M]):this.options[M]=L[M]);return this},d.prototype.get=function(u){return this.options[u]},d.prototype.set=function(u,a){this.options[u]=a},d}),z.define("select2/core",["jquery","./options","./utils","./keys"],function(v,w,m,d){var u=function(a,f){m.GetData(a[0],"select2")!=null&&m.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),f=f||{},this.options=new w(f,a),u.__super__.constructor.call(this);var p=a.attr("tabindex")||0;m.StoreData(a[0],"old-tabindex",p),a.attr("tabindex","-1"),f=this.options.get("dataAdapter"),this.dataAdapter=new f(a,this.options),p=this.render(),this._placeContainer(p),f=this.options.get("selectionAdapter"),this.selection=new f(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,p),f=this.options.get("dropdownAdapter"),this.dropdown=new f(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,p),p=this.options.get("resultsAdapter"),this.results=new p(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var T=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(E){T.trigger("selection:update",{data:E})}),a[0].classList.add("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),m.StoreData(a[0],"select2",this),a.data("select2",this)};return m.Extend(u,m.Observable),u.prototype._generateId=function(a){return"select2-"+(a.attr("id")!=null?a.attr("id"):a.attr("name")!=null?a.attr("name")+"-"+m.generateChars(2):m.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},u.prototype._placeContainer=function(a){a.insertAfter(this.$element);var f=this._resolveWidth(this.$element,this.options.get("width"));f!=null&&a.css("width",f)},u.prototype._resolveWidth=function(a,f){var p=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if(f=="resolve"){var T=this._resolveWidth(a,"style");return T??this._resolveWidth(a,"element")}if(f=="element")return T=a.outerWidth(!1),T<=0?"auto":T+"px";if(f!="style")return f!="computedstyle"?f:window.getComputedStyle(a[0]).width;if(a=a.attr("style"),typeof a!="string")return null;for(var E=a.split(";"),C=0,M=E.length;C<M;C+=1){var L=E[C].replace(/\s/g,"").match(p);if(L!==null&&1<=L.length)return L[1]}return null},u.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},u.prototype._registerDomEvents=function(){var a=this;this.$element.on("change.select2",function(){a.dataAdapter.current(function(f){a.trigger("selection:update",{data:f})})}),this.$element.on("focus.select2",function(f){a.trigger("focus",f)}),this._syncA=m.bind(this._syncAttributes,this),this._syncS=m.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(f){a._syncA(),a._syncS(f)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},u.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(f,p){a.trigger(f,p)})},u.prototype._registerSelectionEvents=function(){var a=this,f=["toggle","focus"];this.selection.on("toggle",function(){a.toggleDropdown()}),this.selection.on("focus",function(p){a.focus(p)}),this.selection.on("*",function(p,T){f.indexOf(p)===-1&&a.trigger(p,T)})},u.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(f,p){a.trigger(f,p)})},u.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(f,p){a.trigger(f,p)})},u.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container[0].classList.add("select2-container--open")}),this.on("close",function(){a.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){a.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){a.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){a.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(f){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(f,function(p){a.trigger("results:all",{data:p,query:f})})}),this.on("query:append",function(f){this.dataAdapter.query(f,function(p){a.trigger("results:append",{data:p,query:f})})}),this.on("keypress",function(f){var p=f.which;a.isOpen()?p===d.ESC||p===d.UP&&f.altKey?(a.close(f),f.preventDefault()):p===d.ENTER||p===d.TAB?(a.trigger("results:select",{}),f.preventDefault()):p===d.SPACE&&f.ctrlKey?(a.trigger("results:toggle",{}),f.preventDefault()):p===d.UP?(a.trigger("results:previous",{}),f.preventDefault()):p===d.DOWN&&(a.trigger("results:next",{}),f.preventDefault()):(p===d.ENTER||p===d.SPACE||p===d.DOWN&&f.altKey)&&(a.open(),f.preventDefault())})},u.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},u.prototype._isChangeMutation=function(a){var f=this;if(a.addedNodes&&0<a.addedNodes.length){for(var p=0;p<a.addedNodes.length;p++)if(a.addedNodes[p].selected)return!0}else{if(a.removedNodes&&0<a.removedNodes.length)return!0;if(Array.isArray(a))return a.some(function(T){return f._isChangeMutation(T)})}return!1},u.prototype._syncSubtree=function(f){var f=this._isChangeMutation(f),p=this;f&&this.dataAdapter.current(function(T){p.trigger("selection:update",{data:T})})},u.prototype.trigger=function(a,f){var p=u.__super__.trigger,T={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(f===void 0&&(f={}),a in T){var E=T[a],T={prevented:!1,name:a,args:f};if(p.call(this,E,T),T.prevented)return void(f.prevented=!0)}p.call(this,a,f)},u.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},u.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},u.prototype.close=function(a){this.isOpen()&&this.trigger("close",{originalEvent:a})},u.prototype.isEnabled=function(){return!this.isDisabled()},u.prototype.isDisabled=function(){return this.options.get("disabled")},u.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},u.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},u.prototype.focus=function(a){this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},u.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),a=!(a=a==null||a.length===0?[!0]:a)[0],this.$element.prop("disabled",a)},u.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(f){a=f}),a},u.prototype.val=function(a){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),a==null||a.length===0)return this.$element.val();a=a[0],Array.isArray(a)&&(a=a.map(function(f){return f.toString()})),this.$element.val(a).trigger("input").trigger("change")},u.prototype.destroy=function(){m.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",m.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),m.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},u.prototype.render=function(){var a=v('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return a.attr("dir",this.options.get("dir")),this.$container=a,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),m.StoreData(a[0],"element",this.$element),a},u}),z.define("jquery-mousewheel",["jquery"],function(v){return v}),z.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(v,w,m,d,u){var a;return v.fn.select2==null&&(a=["open","close","destroy"],v.fn.select2=function(f){if(typeof(f=f||{})=="object")return this.each(function(){var E=v.extend(!0,{},f);new m(v(this),E)}),this;if(typeof f!="string")throw new Error("Invalid arguments for Select2: "+f);var p,T=Array.prototype.slice.call(arguments,1);return this.each(function(){var E=u.GetData(this,"select2");E==null&&window.console&&console.error&&console.error("The select2('"+f+"') method was called on an element that is not using Select2."),p=E[f].apply(E,T)}),-1<a.indexOf(f)?this:p}),v.fn.select2.defaults==null&&(v.fn.select2.defaults=d),m}),{define:z.define,require:z.require});function X(v,w){return A.call(v,w)}function G(v,w){var m,d,u,a,f,p,T,E,C,M,L=w&&w.split("/"),oe=g.map,pe=oe&&oe["*"]||{};if(v){for(w=(v=v.split("/")).length-1,g.nodeIdCompat&&j.test(v[w])&&(v[w]=v[w].replace(j,"")),v[0].charAt(0)==="."&&L&&(v=L.slice(0,L.length-1).concat(v)),E=0;E<v.length;E++)(M=v[E])==="."?(v.splice(E,1),--E):M===".."&&(E===0||E===1&&v[2]===".."||v[E-1]===".."||0<E&&(v.splice(E-1,2),E-=2));v=v.join("/")}if((L||pe)&&oe){for(E=(m=v.split("/")).length;0<E;--E){if(d=m.slice(0,E).join("/"),L){for(C=L.length;0<C;--C)if(u=oe[L.slice(0,C).join("/")],u=u&&u[d]){a=u,f=E;break}}if(a)break;!p&&pe&&pe[d]&&(p=pe[d],T=E)}!a&&p&&(a=p,f=T),a&&(m.splice(0,f,a),v=m.join("/"))}return v}function ee(v,w){return function(){var m=k.call(arguments,0);return typeof m[0]!="string"&&m.length===1&&m.push(null),i.apply(r,m.concat([v,w]))}}function J(v){var w;if(X(h,v)&&(w=h[v],delete h[v],b[v]=!0,s.apply(r,w)),!X(c,v)&&!X(b,v))throw new Error("No "+v);return c[v]}function ce(v){var w,m=v?v.indexOf("!"):-1;return-1<m&&(w=v.substring(0,m),v=v.substring(m+1,v.length)),[w,v]}function Ae(v){return v?ce(v):[]}var z=K.require("jquery.select2");return t.fn.select2.amd=K,z});function yo(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function _o(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ne(r)?Zd(r):_o(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ne(t))return t;if(Ee(t))return t}}const Jd=/;(?![^(]*\))/g,Qd=/:([^]+)/,Xd=/\/\*.*?\*\//gs;function Zd(t){const e={};return t.replace(Xd,"").split(Jd).forEach(n=>{if(n){const r=n.split(Qd);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vo(t){let e="";if(Ne(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=vo(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const eh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",th=yo(eh);function ac(t){return!!t||t===""}function nh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ys(t[r],e[r]);return n}function Ys(t,e){if(t===e)return!0;let n=Ea(t),r=Ea(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=br(t),r=br(e),n||r)return t===e;if(n=ne(t),r=ne(e),n||r)return n&&r?nh(t,e):!1;if(n=Ee(t),r=Ee(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Ys(t[o],e[o]))return!1}}return String(t)===String(e)}function rh(t,e){return t.findIndex(n=>Ys(n,e))}const lc=t=>Ne(t)?t:t==null?"":ne(t)||Ee(t)&&(t.toString===dc||!se(t.toString))?JSON.stringify(t,cc,2):String(t),cc=(t,e)=>e&&e.__v_isRef?cc(t,e.value):Ln(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Qs(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!ne(e)&&!hc(e)?String(e):e,Te={},Nn=[],ht=()=>{},sh=()=>!1,ih=/^on[^a-z]/,Js=t=>ih.test(t),wo=t=>t.startsWith("onUpdate:"),Ke=Object.assign,bo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oh=Object.prototype.hasOwnProperty,he=(t,e)=>oh.call(t,e),ne=Array.isArray,Ln=t=>Ur(t)==="[object Map]",Qs=t=>Ur(t)==="[object Set]",Ea=t=>Ur(t)==="[object Date]",se=t=>typeof t=="function",Ne=t=>typeof t=="string",br=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",uc=t=>Ee(t)&&se(t.then)&&se(t.catch),dc=Object.prototype.toString,Ur=t=>dc.call(t),ah=t=>Ur(t).slice(8,-1),hc=t=>Ur(t)==="[object Object]",Eo=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hs=yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lh=/-(\w)/g,St=Xs(t=>t.replace(lh,(e,n)=>n?n.toUpperCase():"")),ch=/\B([A-Z])/g,Qn=Xs(t=>t.replace(ch,"-$1").toLowerCase()),Zs=Xs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Si=Xs(t=>t?`on${Zs(t)}`:""),Er=(t,e)=>!Object.is(t,e),fs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Is=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ts=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ia;const uh=()=>Ia||(Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ct;class dh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){ct=this}off(){ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function hh(t,e=ct){e&&e.active&&e.effects.push(t)}function fh(){return ct}const Io=t=>{const e=new Set(t);return e.w=0,e.n=0,e},fc=t=>(t.w&en)>0,pc=t=>(t.n&en)>0,ph=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=en},mh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];fc(s)&&!pc(s)?s.delete(t):e[n++]=s,s.w&=~en,s.n&=~en}e.length=n}},zi=new WeakMap;let lr=0,en=1;const Wi=30;let ut;const fn=Symbol(""),Ki=Symbol("");class To{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hh(this,r)}run(){if(!this.active)return this.fn();let e=ut,n=Gt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ut,ut=this,Gt=!0,en=1<<++lr,lr<=Wi?ph(this):Ta(this),this.fn()}finally{lr<=Wi&&mh(this),en=1<<--lr,ut=this.parent,Gt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Gt=!0;const mc=[];function Xn(){mc.push(Gt),Gt=!1}function Zn(){const t=mc.pop();Gt=t===void 0?!0:t}function Xe(t,e,n){if(Gt&&ut){let r=zi.get(t);r||zi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Io()),gc(s)}}function gc(t,e){let n=!1;lr<=Wi?pc(t)||(t.n|=en,n=!fc(t)):n=!t.has(ut),n&&(t.add(ut),ut.deps.push(t))}function Dt(t,e,n,r,s,i){const o=zi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&ne(t)){const c=Number(r);o.forEach((h,g)=>{(g==="length"||g>=c)&&l.push(h)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":ne(t)?Eo(n)&&l.push(o.get("length")):(l.push(o.get(fn)),Ln(t)&&l.push(o.get(Ki)));break;case"delete":ne(t)||(l.push(o.get(fn)),Ln(t)&&l.push(o.get(Ki)));break;case"set":Ln(t)&&l.push(o.get(fn));break}if(l.length===1)l[0]&&Gi(l[0]);else{const c=[];for(const h of l)h&&c.push(...h);Gi(Io(c))}}function Gi(t,e){const n=ne(t)?t:[...t];for(const r of n)r.computed&&Sa(r);for(const r of n)r.computed||Sa(r)}function Sa(t,e){(t!==ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gh=yo("__proto__,__v_isRef,__isVue"),yc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(br)),yh=So(),_h=So(!1,!0),vh=So(!0),Aa=wh();function wh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)Xe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xn();const r=fe(this)[e].apply(this,n);return Zn(),r}}),t}function bh(t){const e=fe(this);return Xe(e,"has",t),e.hasOwnProperty(t)}function So(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Mh:Ec:e?bc:wc).get(r))return r;const o=ne(r);if(!t){if(o&&he(Aa,s))return Reflect.get(Aa,s,i);if(s==="hasOwnProperty")return bh}const l=Reflect.get(r,s,i);return(br(s)?yc.has(s):gh(s))||(t||Xe(r,"get",s),e)?l:qe(l)?o&&Eo(s)?l:l.value:Ee(l)?t?Ic(l):Fr(l):l}}const Eh=_c(),Ih=_c(!0);function _c(t=!1){return function(n,r,s,i){let o=n[r];if(jn(o)&&qe(o)&&!qe(s))return!1;if(!t&&(!Ss(s)&&!jn(s)&&(o=fe(o),s=fe(s)),!ne(n)&&qe(o)&&!qe(s)))return o.value=s,!0;const l=ne(n)&&Eo(r)?Number(r)<n.length:he(n,r),c=Reflect.set(n,r,s,i);return n===fe(i)&&(l?Er(s,o)&&Dt(n,"set",r,s):Dt(n,"add",r,s)),c}}function Th(t,e){const n=he(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Dt(t,"delete",e,void 0),r}function Sh(t,e){const n=Reflect.has(t,e);return(!br(e)||!yc.has(e))&&Xe(t,"has",e),n}function Ah(t){return Xe(t,"iterate",ne(t)?"length":fn),Reflect.ownKeys(t)}const vc={get:yh,set:Eh,deleteProperty:Th,has:Sh,ownKeys:Ah},Ch={get:vh,set(t,e){return!0},deleteProperty(t,e){return!0}},Rh=Ke({},vc,{get:_h,set:Ih}),Ao=t=>t,ei=t=>Reflect.getPrototypeOf(t);function ts(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);n||(e!==i&&Xe(s,"get",e),Xe(s,"get",i));const{has:o}=ei(s),l=r?Ao:n?Oo:Ir;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function ns(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return e||(t!==s&&Xe(r,"has",t),Xe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function rs(t,e=!1){return t=t.__v_raw,!e&&Xe(fe(t),"iterate",fn),Reflect.get(t,"size",t)}function Ca(t){t=fe(t);const e=fe(this);return ei(e).has.call(e,t)||(e.add(t),Dt(e,"add",t,t)),this}function Ra(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=ei(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Er(e,o)&&Dt(n,"set",t,e):Dt(n,"add",t,e),this}function Oa(t){const e=fe(this),{has:n,get:r}=ei(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Dt(e,"delete",t,void 0),i}function Pa(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&Dt(t,"clear",void 0,void 0),n}function ss(t,e){return function(r,s){const i=this,o=i.__v_raw,l=fe(o),c=e?Ao:t?Oo:Ir;return!t&&Xe(l,"iterate",fn),o.forEach((h,g)=>r.call(s,c(h),c(g),i))}}function is(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=Ln(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),g=n?Ao:e?Oo:Ir;return!e&&Xe(i,"iterate",c?Ki:fn),{next(){const{value:b,done:A}=h.next();return A?{value:b,done:A}:{value:l?[g(b[0]),g(b[1])]:g(b),done:A}},[Symbol.iterator](){return this}}}}function Ft(t){return function(...e){return t==="delete"?!1:this}}function Oh(){const t={get(i){return ts(this,i)},get size(){return rs(this)},has:ns,add:Ca,set:Ra,delete:Oa,clear:Pa,forEach:ss(!1,!1)},e={get(i){return ts(this,i,!1,!0)},get size(){return rs(this)},has:ns,add:Ca,set:Ra,delete:Oa,clear:Pa,forEach:ss(!1,!0)},n={get(i){return ts(this,i,!0)},get size(){return rs(this,!0)},has(i){return ns.call(this,i,!0)},add:Ft("add"),set:Ft("set"),delete:Ft("delete"),clear:Ft("clear"),forEach:ss(!0,!1)},r={get(i){return ts(this,i,!0,!0)},get size(){return rs(this,!0)},has(i){return ns.call(this,i,!0)},add:Ft("add"),set:Ft("set"),delete:Ft("delete"),clear:Ft("clear"),forEach:ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=is(i,!1,!1),n[i]=is(i,!0,!1),e[i]=is(i,!1,!0),r[i]=is(i,!0,!0)}),[t,n,e,r]}const[Ph,kh,Dh,xh]=Oh();function Co(t,e){const n=e?t?xh:Dh:t?kh:Ph;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(he(n,s)&&s in r?n:r,s,i)}const Nh={get:Co(!1,!1)},Lh={get:Co(!1,!0)},$h={get:Co(!0,!1)},wc=new WeakMap,bc=new WeakMap,Ec=new WeakMap,Mh=new WeakMap;function Uh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fh(t){return t.__v_skip||!Object.isExtensible(t)?0:Uh(ah(t))}function Fr(t){return jn(t)?t:Ro(t,!1,vc,Nh,wc)}function Vh(t){return Ro(t,!1,Rh,Lh,bc)}function Ic(t){return Ro(t,!0,Ch,$h,Ec)}function Ro(t,e,n,r,s){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Fh(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function $n(t){return jn(t)?$n(t.__v_raw):!!(t&&t.__v_isReactive)}function jn(t){return!!(t&&t.__v_isReadonly)}function Ss(t){return!!(t&&t.__v_isShallow)}function Tc(t){return $n(t)||jn(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Sc(t){return Is(t,"__v_skip",!0),t}const Ir=t=>Ee(t)?Fr(t):t,Oo=t=>Ee(t)?Ic(t):t;function Ac(t){Gt&&ut&&(t=fe(t),gc(t.dep||(t.dep=Io())))}function Cc(t,e){t=fe(t);const n=t.dep;n&&Gi(n)}function qe(t){return!!(t&&t.__v_isRef===!0)}function jh(t){return Rc(t,!1)}function Bh(t){return Rc(t,!0)}function Rc(t,e){return qe(t)?t:new qh(t,e)}class qh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:Ir(e)}get value(){return Ac(this),this._value}set value(e){const n=this.__v_isShallow||Ss(e)||jn(e);e=n?e:fe(e),Er(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ir(e),Cc(this))}}function pn(t){return qe(t)?t.value:t}const Hh={get:(t,e,n)=>pn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Oc(t){return $n(t)?t:new Proxy(t,Hh)}var Pc;class zh{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Pc]=!1,this._dirty=!0,this.effect=new To(e,()=>{this._dirty||(this._dirty=!0,Cc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return Ac(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Pc="__v_isReadonly";function Wh(t,e,n=!1){let r,s;const i=se(t);return i?(r=t,s=ht):(r=t.get,s=t.set),new zh(r,s,i||!s,n)}function Yt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ti(i,e,n)}return s}function ft(t,e,n,r){if(se(t)){const i=Yt(t,e,n,r);return i&&uc(i)&&i.catch(o=>{ti(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ft(t[i],e,n,r));return s}function ti(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const h=i.ec;if(h){for(let g=0;g<h.length;g++)if(h[g](t,o,l)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Yt(c,null,10,[t,o,l]);return}}Kh(t,n,s,r)}function Kh(t,e,n,r=!0){console.error(t)}let Tr=!1,Yi=!1;const Be=[];let bt=0;const Mn=[];let Rt=null,cn=0;const kc=Promise.resolve();let Po=null;function Dc(t){const e=Po||kc;return t?e.then(this?t.bind(this):t):e}function Gh(t){let e=bt+1,n=Be.length;for(;e<n;){const r=e+n>>>1;Sr(Be[r])<t?e=r+1:n=r}return e}function ko(t){(!Be.length||!Be.includes(t,Tr&&t.allowRecurse?bt+1:bt))&&(t.id==null?Be.push(t):Be.splice(Gh(t.id),0,t),xc())}function xc(){!Tr&&!Yi&&(Yi=!0,Po=kc.then(Lc))}function Yh(t){const e=Be.indexOf(t);e>bt&&Be.splice(e,1)}function Jh(t){ne(t)?Mn.push(...t):(!Rt||!Rt.includes(t,t.allowRecurse?cn+1:cn))&&Mn.push(t),xc()}function ka(t,e=Tr?bt+1:0){for(;e<Be.length;e++){const n=Be[e];n&&n.pre&&(Be.splice(e,1),e--,n())}}function Nc(t){if(Mn.length){const e=[...new Set(Mn)];if(Mn.length=0,Rt){Rt.push(...e);return}for(Rt=e,Rt.sort((n,r)=>Sr(n)-Sr(r)),cn=0;cn<Rt.length;cn++)Rt[cn]();Rt=null,cn=0}}const Sr=t=>t.id==null?1/0:t.id,Qh=(t,e)=>{const n=Sr(t)-Sr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lc(t){Yi=!1,Tr=!0,Be.sort(Qh);const e=ht;try{for(bt=0;bt<Be.length;bt++){const n=Be[bt];n&&n.active!==!1&&Yt(n,null,14)}}finally{bt=0,Be.length=0,Nc(),Tr=!1,Po=null,(Be.length||Mn.length)&&Lc()}}function Xh(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const g=`${o==="modelValue"?"model":o}Modifiers`,{number:b,trim:A}=r[g]||Te;A&&(s=n.map(k=>Ne(k)?k.trim():k)),b&&(s=n.map(Ts))}let l,c=r[l=Si(e)]||r[l=Si(St(e))];!c&&i&&(c=r[l=Si(Qn(e))]),c&&ft(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ft(h,t,6,s)}}function $c(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!se(t)){const c=h=>{const g=$c(h,e,!0);g&&(l=!0,Ke(o,g))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ee(t)&&r.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):Ke(o,i),Ee(t)&&r.set(t,o),o)}function ni(t,e){return!t||!Js(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,Qn(e))||he(t,e))}let He=null,Mc=null;function As(t){const e=He;return He=t,Mc=t&&t.type.__scopeId||null,e}function Ge(t,e=He,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Va(-1);const i=As(e);let o;try{o=t(...s)}finally{As(i),r._d&&Va(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ai(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:c,emit:h,render:g,renderCache:b,data:A,setupState:k,ctx:j,inheritAttrs:K}=t;let X,G;const ee=As(t);try{if(n.shapeFlag&4){const ce=s||r;X=vt(g.call(ce,ce,b,i,k,A,j)),G=c}else{const ce=e;X=vt(ce.length>1?ce(i,{attrs:c,slots:l,emit:h}):ce(i,null)),G=e.props?c:Zh(c)}}catch(ce){fr.length=0,ti(ce,t,1),X=ve(tn)}let J=X;if(G&&K!==!1){const ce=Object.keys(G),{shapeFlag:Ae}=J;ce.length&&Ae&7&&(o&&ce.some(wo)&&(G=ef(G,o)),J=Bn(J,G))}return n.dirs&&(J=Bn(J),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&(J.transition=n.transition),X=J,As(ee),X}const Zh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Js(n))&&((e||(e={}))[n]=t[n]);return e},ef=(t,e)=>{const n={};for(const r in t)(!wo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Da(r,o,h):!!o;if(c&8){const g=e.dynamicProps;for(let b=0;b<g.length;b++){const A=g[b];if(o[A]!==r[A]&&!ni(h,A))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Da(r,o,h):!0:!!o;return!1}function Da(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ni(n,i))return!0}return!1}function nf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const rf=t=>t.__isSuspense;function sf(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Jh(t)}function ps(t,e){if(Pe){let n=Pe.provides;const r=Pe.parent&&Pe.parent.provides;r===n&&(n=Pe.provides=Object.create(r)),n[t]=e}}function kt(t,e,n=!1){const r=Pe||He;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(r.proxy):e}}const os={};function ms(t,e,n){return Uc(t,e,n)}function Uc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Te){const l=fh()===(Pe==null?void 0:Pe.scope)?Pe:null;let c,h=!1,g=!1;if(qe(t)?(c=()=>t.value,h=Ss(t)):$n(t)?(c=()=>t,r=!0):ne(t)?(g=!0,h=t.some(J=>$n(J)||Ss(J)),c=()=>t.map(J=>{if(qe(J))return J.value;if($n(J))return hn(J);if(se(J))return Yt(J,l,2)})):se(t)?e?c=()=>Yt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return b&&b(),ft(t,l,3,[A])}:c=ht,e&&r){const J=c;c=()=>hn(J())}let b,A=J=>{b=G.onStop=()=>{Yt(J,l,4)}},k;if(Cr)if(A=ht,e?n&&ft(e,l,3,[c(),g?[]:void 0,A]):c(),s==="sync"){const J=tp();k=J.__watcherHandles||(J.__watcherHandles=[])}else return ht;let j=g?new Array(t.length).fill(os):os;const K=()=>{if(G.active)if(e){const J=G.run();(r||h||(g?J.some((ce,Ae)=>Er(ce,j[Ae])):Er(J,j)))&&(b&&b(),ft(e,l,3,[J,j===os?void 0:g&&j[0]===os?[]:j,A]),j=J)}else G.run()};K.allowRecurse=!!e;let X;s==="sync"?X=K:s==="post"?X=()=>Ye(K,l&&l.suspense):(K.pre=!0,l&&(K.id=l.uid),X=()=>ko(K));const G=new To(c,X);e?n?K():j=G.run():s==="post"?Ye(G.run.bind(G),l&&l.suspense):G.run();const ee=()=>{G.stop(),l&&l.scope&&bo(l.scope.effects,G)};return k&&k.push(ee),ee}function of(t,e,n){const r=this.proxy,s=Ne(t)?t.includes(".")?Fc(r,t):()=>r[t]:t.bind(r,r);let i;se(e)?i=e:(i=e.handler,n=e);const o=Pe;qn(this);const l=Uc(s,i.bind(r),n);return o?qn(o):mn(),l}function Fc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function hn(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))hn(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)hn(t[n],e);else if(Qs(t)||Ln(t))t.forEach(n=>{hn(n,e)});else if(hc(t))for(const n in t)hn(t[n],e);return t}function Vc(t){return se(t)?{setup:t,name:t.name}:t}const dr=t=>!!t.type.__asyncLoader,jc=t=>t.type.__isKeepAlive;function af(t,e){Bc(t,"a",e)}function lf(t,e){Bc(t,"da",e)}function Bc(t,e,n=Pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ri(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jc(s.parent.vnode)&&cf(r,e,n,s),s=s.parent}}function cf(t,e,n,r){const s=ri(e,t,r,!0);qc(()=>{bo(r[e],s)},n)}function ri(t,e,n=Pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xn(),qn(n);const l=ft(e,n,t,o);return mn(),Zn(),l});return r?s.unshift(i):s.push(i),i}}const Mt=t=>(e,n=Pe)=>(!Cr||t==="sp")&&ri(t,(...r)=>e(...r),n),uf=Mt("bm"),df=Mt("m"),hf=Mt("bu"),ff=Mt("u"),pf=Mt("bum"),qc=Mt("um"),mf=Mt("sp"),gf=Mt("rtg"),yf=Mt("rtc");function _f(t,e=Pe){ri("ec",t,e)}function fb(t,e){const n=He;if(n===null)return t;const r=ai(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,c,h=Te]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&hn(l),s.push({dir:o,instance:r,value:l,oldValue:void 0,arg:c,modifiers:h}))}return t}function sn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Xn(),ft(c,n,8,[t.el,l,t,e]),Zn())}}const Hc="components";function vf(t,e){return bf(Hc,t,!0,e)||t}const wf=Symbol();function bf(t,e,n=!0,r=!1){const s=He||Pe;if(s){const i=s.type;if(t===Hc){const l=Xf(i,!1);if(l&&(l===e||l===St(e)||l===Zs(St(e))))return i}const o=xa(s[t]||i[t],e)||xa(s.appContext[t],e);return!o&&r?i:o}}function xa(t,e){return t&&(t[e]||t[St(e)]||t[Zs(St(e))])}function pb(t,e,n,r){let s;const i=n&&n[r];if(ne(t)||Ne(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,i&&i[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const h=o[l];s[l]=e(t[h],h,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}function Ef(t,e,n={},r,s){if(He.isCE||He.parent&&dr(He.parent)&&He.parent.isCE)return e!=="default"&&(n.name=e),ve("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Vr();const o=i&&zc(i(n)),l=ii(ot,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function zc(t){return t.some(e=>Rs(e)?!(e.type===tn||e.type===ot&&!zc(e.children)):!0)?t:null}const Ji=t=>t?nu(t)?ai(t)||t.proxy:Ji(t.parent):null,hr=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ji(t.parent),$root:t=>Ji(t.root),$emit:t=>t.emit,$options:t=>Do(t),$forceUpdate:t=>t.f||(t.f=()=>ko(t.update)),$nextTick:t=>t.n||(t.n=Dc.bind(t.proxy)),$watch:t=>of.bind(t)}),Ci=(t,e)=>t!==Te&&!t.__isScriptSetup&&he(t,e),If={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const k=o[e];if(k!==void 0)switch(k){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ci(r,e))return o[e]=1,r[e];if(s!==Te&&he(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&he(h,e))return o[e]=3,i[e];if(n!==Te&&he(n,e))return o[e]=4,n[e];Qi&&(o[e]=0)}}const g=hr[e];let b,A;if(g)return e==="$attrs"&&Xe(t,"get",e),g(t);if((b=l.__cssModules)&&(b=b[e]))return b;if(n!==Te&&he(n,e))return o[e]=4,n[e];if(A=c.config.globalProperties,he(A,e))return A[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ci(s,e)?(s[e]=n,!0):r!==Te&&he(r,e)?(r[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Te&&he(t,o)||Ci(e,o)||(l=i[0])&&he(l,o)||he(r,o)||he(hr,o)||he(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Qi=!0;function Tf(t){const e=Do(t),n=t.proxy,r=t.ctx;Qi=!1,e.beforeCreate&&Na(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:g,beforeMount:b,mounted:A,beforeUpdate:k,updated:j,activated:K,deactivated:X,beforeDestroy:G,beforeUnmount:ee,destroyed:J,unmounted:ce,render:Ae,renderTracked:z,renderTriggered:v,errorCaptured:w,serverPrefetch:m,expose:d,inheritAttrs:u,components:a,directives:f,filters:p}=e;if(h&&Sf(h,r,null,t.appContext.config.unwrapInjectedRef),o)for(const C in o){const M=o[C];se(M)&&(r[C]=M.bind(n))}if(s){const C=s.call(n,n);Ee(C)&&(t.data=Fr(C))}if(Qi=!0,i)for(const C in i){const M=i[C],L=se(M)?M.bind(n,n):se(M.get)?M.get.bind(n,n):ht,oe=!se(M)&&se(M.set)?M.set.bind(n):ht,pe=at({get:L,set:oe});Object.defineProperty(r,C,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Ce=>pe.value=Ce})}if(l)for(const C in l)Wc(l[C],r,n,C);if(c){const C=se(c)?c.call(n):c;Reflect.ownKeys(C).forEach(M=>{ps(M,C[M])})}g&&Na(g,t,"c");function E(C,M){ne(M)?M.forEach(L=>C(L.bind(n))):M&&C(M.bind(n))}if(E(uf,b),E(df,A),E(hf,k),E(ff,j),E(af,K),E(lf,X),E(_f,w),E(yf,z),E(gf,v),E(pf,ee),E(qc,ce),E(mf,m),ne(d))if(d.length){const C=t.exposed||(t.exposed={});d.forEach(M=>{Object.defineProperty(C,M,{get:()=>n[M],set:L=>n[M]=L})})}else t.exposed||(t.exposed={});Ae&&t.render===ht&&(t.render=Ae),u!=null&&(t.inheritAttrs=u),a&&(t.components=a),f&&(t.directives=f)}function Sf(t,e,n=ht,r=!1){ne(t)&&(t=Xi(t));for(const s in t){const i=t[s];let o;Ee(i)?"default"in i?o=kt(i.from||s,i.default,!0):o=kt(i.from||s):o=kt(i),qe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function Na(t,e,n){ft(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wc(t,e,n,r){const s=r.includes(".")?Fc(n,r):()=>n[r];if(Ne(t)){const i=e[t];se(i)&&ms(s,i)}else if(se(t))ms(s,t.bind(n));else if(Ee(t))if(ne(t))t.forEach(i=>Wc(i,e,n,r));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&ms(s,i,t)}}function Do(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Cs(c,h,o,!0)),Cs(c,e,o)),Ee(e)&&i.set(e,c),c}function Cs(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Cs(t,i,n,!0),s&&s.forEach(o=>Cs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Af[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Af={data:La,props:an,emits:an,methods:an,computed:an,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:an,directives:an,watch:Rf,provide:La,inject:Cf};function La(t,e){return e?t?function(){return Ke(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function Cf(t,e){return an(Xi(t),Xi(e))}function Xi(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function an(t,e){return t?Ke(Ke(Object.create(null),t),e):e}function Rf(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const r in e)n[r]=We(t[r],e[r]);return n}function Of(t,e,n,r=!1){const s={},i={};Is(i,oi,1),t.propsDefaults=Object.create(null),Kc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Vh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Pf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=fe(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const g=t.vnode.dynamicProps;for(let b=0;b<g.length;b++){let A=g[b];if(ni(t.emitsOptions,A))continue;const k=e[A];if(c)if(he(i,A))k!==i[A]&&(i[A]=k,h=!0);else{const j=St(A);s[j]=Zi(c,l,j,k,t,!1)}else k!==i[A]&&(i[A]=k,h=!0)}}}else{Kc(t,e,s,i)&&(h=!0);let g;for(const b in l)(!e||!he(e,b)&&((g=Qn(b))===b||!he(e,g)))&&(c?n&&(n[b]!==void 0||n[g]!==void 0)&&(s[b]=Zi(c,l,b,void 0,t,!0)):delete s[b]);if(i!==l)for(const b in i)(!e||!he(e,b))&&(delete i[b],h=!0)}h&&Dt(t,"set","$attrs")}function Kc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(hs(c))continue;const h=e[c];let g;s&&he(s,g=St(c))?!i||!i.includes(g)?n[g]=h:(l||(l={}))[g]=h:ni(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=fe(n),h=l||Te;for(let g=0;g<i.length;g++){const b=i[g];n[b]=Zi(s,c,b,h[b],t,!he(h,b))}}return o}function Zi(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=he(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&se(c)){const{propsDefaults:h}=s;n in h?r=h[n]:(qn(s),r=h[n]=c.call(null,e),mn())}else r=c}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Qn(n))&&(r=!0))}return r}function Gc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!se(t)){const g=b=>{c=!0;const[A,k]=Gc(b,e,!0);Ke(o,A),k&&l.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!i&&!c)return Ee(t)&&r.set(t,Nn),Nn;if(ne(i))for(let g=0;g<i.length;g++){const b=St(i[g]);$a(b)&&(o[b]=Te)}else if(i)for(const g in i){const b=St(g);if($a(b)){const A=i[g],k=o[b]=ne(A)||se(A)?{type:A}:Object.assign({},A);if(k){const j=Fa(Boolean,k.type),K=Fa(String,k.type);k[0]=j>-1,k[1]=K<0||j<K,(j>-1||he(k,"default"))&&l.push(b)}}}const h=[o,l];return Ee(t)&&r.set(t,h),h}function $a(t){return t[0]!=="$"}function Ma(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ua(t,e){return Ma(t)===Ma(e)}function Fa(t,e){return ne(e)?e.findIndex(n=>Ua(n,t)):se(e)&&Ua(e,t)?0:-1}const Yc=t=>t[0]==="_"||t==="$stable",xo=t=>ne(t)?t.map(vt):[vt(t)],kf=(t,e,n)=>{if(e._n)return e;const r=Ge((...s)=>xo(e(...s)),n);return r._c=!1,r},Jc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Yc(s))continue;const i=t[s];if(se(i))e[s]=kf(s,i,r);else if(i!=null){const o=xo(i);e[s]=()=>o}}},Qc=(t,e)=>{const n=xo(e);t.slots.default=()=>n},Df=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Is(e,"_",n)):Jc(e,t.slots={})}else t.slots={},e&&Qc(t,e);Is(t.slots,oi,1)},xf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Te;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(Ke(s,e),!n&&l===1&&delete s._):(i=!e.$stable,Jc(e,s)),o=e}else e&&(Qc(t,e),o={default:1});if(i)for(const l in s)!Yc(l)&&!(l in o)&&delete s[l]};function Xc(){return{app:null,config:{isNativeTag:sh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nf=0;function Lf(t,e){return function(r,s=null){se(r)||(r=Object.assign({},r)),s!=null&&!Ee(s)&&(s=null);const i=Xc(),o=new Set;let l=!1;const c=i.app={_uid:Nf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:np,get config(){return i.config},set config(h){},use(h,...g){return o.has(h)||(h&&se(h.install)?(o.add(h),h.install(c,...g)):se(h)&&(o.add(h),h(c,...g))),c},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),c},component(h,g){return g?(i.components[h]=g,c):i.components[h]},directive(h,g){return g?(i.directives[h]=g,c):i.directives[h]},mount(h,g,b){if(!l){const A=ve(r,s);return A.appContext=i,g&&e?e(A,h):t(A,h,b),l=!0,c._container=h,h.__vue_app__=c,ai(A.component)||A.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(h,g){return i.provides[h]=g,c}};return c}}function eo(t,e,n,r,s=!1){if(ne(t)){t.forEach((A,k)=>eo(A,e&&(ne(e)?e[k]:e),n,r,s));return}if(dr(r)&&!s)return;const i=r.shapeFlag&4?ai(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,g=l.refs===Te?l.refs={}:l.refs,b=l.setupState;if(h!=null&&h!==c&&(Ne(h)?(g[h]=null,he(b,h)&&(b[h]=null)):qe(h)&&(h.value=null)),se(c))Yt(c,l,12,[o,g]);else{const A=Ne(c),k=qe(c);if(A||k){const j=()=>{if(t.f){const K=A?he(b,c)?b[c]:g[c]:c.value;s?ne(K)&&bo(K,i):ne(K)?K.includes(i)||K.push(i):A?(g[c]=[i],he(b,c)&&(b[c]=g[c])):(c.value=[i],t.k&&(g[t.k]=c.value))}else A?(g[c]=o,he(b,c)&&(b[c]=o)):k&&(c.value=o,t.k&&(g[t.k]=o))};o?(j.id=-1,Ye(j,n)):j()}}}const Ye=sf;function $f(t){return Mf(t)}function Mf(t,e){const n=uh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:g,parentNode:b,nextSibling:A,setScopeId:k=ht,insertStaticContent:j}=t,K=(y,I,R,P=null,x=null,U=null,V=!1,S=null,N=!!I.dynamicChildren)=>{if(y===I)return;y&&!ir(y,I)&&(P=q(y),Ce(y,x,U,!0),y=null),I.patchFlag===-2&&(N=!1,I.dynamicChildren=null);const{type:O,ref:B,shapeFlag:F}=I;switch(O){case si:X(y,I,R,P);break;case tn:G(y,I,R,P);break;case gs:y==null&&ee(I,R,P,V);break;case ot:a(y,I,R,P,x,U,V,S,N);break;default:F&1?Ae(y,I,R,P,x,U,V,S,N):F&6?f(y,I,R,P,x,U,V,S,N):(F&64||F&128)&&O.process(y,I,R,P,x,U,V,S,N,ue)}B!=null&&x&&eo(B,y&&y.ref,U,I||y,!I)},X=(y,I,R,P)=>{if(y==null)r(I.el=l(I.children),R,P);else{const x=I.el=y.el;I.children!==y.children&&h(x,I.children)}},G=(y,I,R,P)=>{y==null?r(I.el=c(I.children||""),R,P):I.el=y.el},ee=(y,I,R,P)=>{[y.el,y.anchor]=j(y.children,I,R,P,y.el,y.anchor)},J=({el:y,anchor:I},R,P)=>{let x;for(;y&&y!==I;)x=A(y),r(y,R,P),y=x;r(I,R,P)},ce=({el:y,anchor:I})=>{let R;for(;y&&y!==I;)R=A(y),s(y),y=R;s(I)},Ae=(y,I,R,P,x,U,V,S,N)=>{V=V||I.type==="svg",y==null?z(I,R,P,x,U,V,S,N):m(y,I,x,U,V,S,N)},z=(y,I,R,P,x,U,V,S)=>{let N,O;const{type:B,props:F,shapeFlag:H,transition:te,dirs:ae}=y;if(N=y.el=o(y.type,U,F&&F.is,F),H&8?g(N,y.children):H&16&&w(y.children,N,null,P,x,U&&B!=="foreignObject",V,S),ae&&sn(y,null,P,"created"),v(N,y,y.scopeId,V,P),F){for(const ye in F)ye!=="value"&&!hs(ye)&&i(N,ye,null,F[ye],U,y.children,P,x,W);"value"in F&&i(N,"value",null,F.value),(O=F.onVnodeBeforeMount)&&_t(O,P,y)}ae&&sn(y,null,P,"beforeMount");const we=(!x||x&&!x.pendingBranch)&&te&&!te.persisted;we&&te.beforeEnter(N),r(N,I,R),((O=F&&F.onVnodeMounted)||we||ae)&&Ye(()=>{O&&_t(O,P,y),we&&te.enter(N),ae&&sn(y,null,P,"mounted")},x)},v=(y,I,R,P,x)=>{if(R&&k(y,R),P)for(let U=0;U<P.length;U++)k(y,P[U]);if(x){let U=x.subTree;if(I===U){const V=x.vnode;v(y,V,V.scopeId,V.slotScopeIds,x.parent)}}},w=(y,I,R,P,x,U,V,S,N=0)=>{for(let O=N;O<y.length;O++){const B=y[O]=S?Bt(y[O]):vt(y[O]);K(null,B,I,R,P,x,U,V,S)}},m=(y,I,R,P,x,U,V)=>{const S=I.el=y.el;let{patchFlag:N,dynamicChildren:O,dirs:B}=I;N|=y.patchFlag&16;const F=y.props||Te,H=I.props||Te;let te;R&&on(R,!1),(te=H.onVnodeBeforeUpdate)&&_t(te,R,I,y),B&&sn(I,y,R,"beforeUpdate"),R&&on(R,!0);const ae=x&&I.type!=="foreignObject";if(O?d(y.dynamicChildren,O,S,R,P,ae,U):V||M(y,I,S,null,R,P,ae,U,!1),N>0){if(N&16)u(S,I,F,H,R,P,x);else if(N&2&&F.class!==H.class&&i(S,"class",null,H.class,x),N&4&&i(S,"style",F.style,H.style,x),N&8){const we=I.dynamicProps;for(let ye=0;ye<we.length;ye++){const Re=we[ye],lt=F[Re],On=H[Re];(On!==lt||Re==="value")&&i(S,Re,lt,On,x,y.children,R,P,W)}}N&1&&y.children!==I.children&&g(S,I.children)}else!V&&O==null&&u(S,I,F,H,R,P,x);((te=H.onVnodeUpdated)||B)&&Ye(()=>{te&&_t(te,R,I,y),B&&sn(I,y,R,"updated")},P)},d=(y,I,R,P,x,U,V)=>{for(let S=0;S<I.length;S++){const N=y[S],O=I[S],B=N.el&&(N.type===ot||!ir(N,O)||N.shapeFlag&70)?b(N.el):R;K(N,O,B,null,P,x,U,V,!0)}},u=(y,I,R,P,x,U,V)=>{if(R!==P){if(R!==Te)for(const S in R)!hs(S)&&!(S in P)&&i(y,S,R[S],null,V,I.children,x,U,W);for(const S in P){if(hs(S))continue;const N=P[S],O=R[S];N!==O&&S!=="value"&&i(y,S,O,N,V,I.children,x,U,W)}"value"in P&&i(y,"value",R.value,P.value)}},a=(y,I,R,P,x,U,V,S,N)=>{const O=I.el=y?y.el:l(""),B=I.anchor=y?y.anchor:l("");let{patchFlag:F,dynamicChildren:H,slotScopeIds:te}=I;te&&(S=S?S.concat(te):te),y==null?(r(O,R,P),r(B,R,P),w(I.children,R,B,x,U,V,S,N)):F>0&&F&64&&H&&y.dynamicChildren?(d(y.dynamicChildren,H,R,x,U,V,S),(I.key!=null||x&&I===x.subTree)&&Zc(y,I,!0)):M(y,I,R,B,x,U,V,S,N)},f=(y,I,R,P,x,U,V,S,N)=>{I.slotScopeIds=S,y==null?I.shapeFlag&512?x.ctx.activate(I,R,P,V,N):p(I,R,P,x,U,V,N):T(y,I,N)},p=(y,I,R,P,x,U,V)=>{const S=y.component=Kf(y,P,x);if(jc(y)&&(S.ctx.renderer=ue),Gf(S),S.asyncDep){if(x&&x.registerDep(S,E),!y.el){const N=S.subTree=ve(tn);G(null,N,I,R)}return}E(S,y,I,R,x,U,V)},T=(y,I,R)=>{const P=I.component=y.component;if(tf(y,I,R))if(P.asyncDep&&!P.asyncResolved){C(P,I,R);return}else P.next=I,Yh(P.update),P.update();else I.el=y.el,P.vnode=I},E=(y,I,R,P,x,U,V)=>{const S=()=>{if(y.isMounted){let{next:B,bu:F,u:H,parent:te,vnode:ae}=y,we=B,ye;on(y,!1),B?(B.el=ae.el,C(y,B,V)):B=ae,F&&fs(F),(ye=B.props&&B.props.onVnodeBeforeUpdate)&&_t(ye,te,B,ae),on(y,!0);const Re=Ai(y),lt=y.subTree;y.subTree=Re,K(lt,Re,b(lt.el),q(lt),y,x,U),B.el=Re.el,we===null&&nf(y,Re.el),H&&Ye(H,x),(ye=B.props&&B.props.onVnodeUpdated)&&Ye(()=>_t(ye,te,B,ae),x)}else{let B;const{el:F,props:H}=I,{bm:te,m:ae,parent:we}=y,ye=dr(I);if(on(y,!1),te&&fs(te),!ye&&(B=H&&H.onVnodeBeforeMount)&&_t(B,we,I),on(y,!0),F&&ie){const Re=()=>{y.subTree=Ai(y),ie(F,y.subTree,y,x,null)};ye?I.type.__asyncLoader().then(()=>!y.isUnmounted&&Re()):Re()}else{const Re=y.subTree=Ai(y);K(null,Re,R,P,y,x,U),I.el=Re.el}if(ae&&Ye(ae,x),!ye&&(B=H&&H.onVnodeMounted)){const Re=I;Ye(()=>_t(B,we,Re),x)}(I.shapeFlag&256||we&&dr(we.vnode)&&we.vnode.shapeFlag&256)&&y.a&&Ye(y.a,x),y.isMounted=!0,I=R=P=null}},N=y.effect=new To(S,()=>ko(O),y.scope),O=y.update=()=>N.run();O.id=y.uid,on(y,!0),O()},C=(y,I,R)=>{I.component=y;const P=y.vnode.props;y.vnode=I,y.next=null,Pf(y,I.props,P,R),xf(y,I.children,R),Xn(),ka(),Zn()},M=(y,I,R,P,x,U,V,S,N=!1)=>{const O=y&&y.children,B=y?y.shapeFlag:0,F=I.children,{patchFlag:H,shapeFlag:te}=I;if(H>0){if(H&128){oe(O,F,R,P,x,U,V,S,N);return}else if(H&256){L(O,F,R,P,x,U,V,S,N);return}}te&8?(B&16&&W(O,x,U),F!==O&&g(R,F)):B&16?te&16?oe(O,F,R,P,x,U,V,S,N):W(O,x,U,!0):(B&8&&g(R,""),te&16&&w(F,R,P,x,U,V,S,N))},L=(y,I,R,P,x,U,V,S,N)=>{y=y||Nn,I=I||Nn;const O=y.length,B=I.length,F=Math.min(O,B);let H;for(H=0;H<F;H++){const te=I[H]=N?Bt(I[H]):vt(I[H]);K(y[H],te,R,null,x,U,V,S,N)}O>B?W(y,x,U,!0,!1,F):w(I,R,P,x,U,V,S,N,F)},oe=(y,I,R,P,x,U,V,S,N)=>{let O=0;const B=I.length;let F=y.length-1,H=B-1;for(;O<=F&&O<=H;){const te=y[O],ae=I[O]=N?Bt(I[O]):vt(I[O]);if(ir(te,ae))K(te,ae,R,null,x,U,V,S,N);else break;O++}for(;O<=F&&O<=H;){const te=y[F],ae=I[H]=N?Bt(I[H]):vt(I[H]);if(ir(te,ae))K(te,ae,R,null,x,U,V,S,N);else break;F--,H--}if(O>F){if(O<=H){const te=H+1,ae=te<B?I[te].el:P;for(;O<=H;)K(null,I[O]=N?Bt(I[O]):vt(I[O]),R,ae,x,U,V,S,N),O++}}else if(O>H)for(;O<=F;)Ce(y[O],x,U,!0),O++;else{const te=O,ae=O,we=new Map;for(O=ae;O<=H;O++){const et=I[O]=N?Bt(I[O]):vt(I[O]);et.key!=null&&we.set(et.key,O)}let ye,Re=0;const lt=H-ae+1;let On=!1,va=0;const sr=new Array(lt);for(O=0;O<lt;O++)sr[O]=0;for(O=te;O<=F;O++){const et=y[O];if(Re>=lt){Ce(et,x,U,!0);continue}let yt;if(et.key!=null)yt=we.get(et.key);else for(ye=ae;ye<=H;ye++)if(sr[ye-ae]===0&&ir(et,I[ye])){yt=ye;break}yt===void 0?Ce(et,x,U,!0):(sr[yt-ae]=O+1,yt>=va?va=yt:On=!0,K(et,I[yt],R,null,x,U,V,S,N),Re++)}const wa=On?Uf(sr):Nn;for(ye=wa.length-1,O=lt-1;O>=0;O--){const et=ae+O,yt=I[et],ba=et+1<B?I[et+1].el:P;sr[O]===0?K(null,yt,R,ba,x,U,V,S,N):On&&(ye<0||O!==wa[ye]?pe(yt,R,ba,2):ye--)}}},pe=(y,I,R,P,x=null)=>{const{el:U,type:V,transition:S,children:N,shapeFlag:O}=y;if(O&6){pe(y.component.subTree,I,R,P);return}if(O&128){y.suspense.move(I,R,P);return}if(O&64){V.move(y,I,R,ue);return}if(V===ot){r(U,I,R);for(let F=0;F<N.length;F++)pe(N[F],I,R,P);r(y.anchor,I,R);return}if(V===gs){J(y,I,R);return}if(P!==2&&O&1&&S)if(P===0)S.beforeEnter(U),r(U,I,R),Ye(()=>S.enter(U),x);else{const{leave:F,delayLeave:H,afterLeave:te}=S,ae=()=>r(U,I,R),we=()=>{F(U,()=>{ae(),te&&te()})};H?H(U,ae,we):we()}else r(U,I,R)},Ce=(y,I,R,P=!1,x=!1)=>{const{type:U,props:V,ref:S,children:N,dynamicChildren:O,shapeFlag:B,patchFlag:F,dirs:H}=y;if(S!=null&&eo(S,null,R,y,!0),B&256){I.ctx.deactivate(y);return}const te=B&1&&H,ae=!dr(y);let we;if(ae&&(we=V&&V.onVnodeBeforeUnmount)&&_t(we,I,y),B&6)D(y.component,R,P);else{if(B&128){y.suspense.unmount(R,P);return}te&&sn(y,null,I,"beforeUnmount"),B&64?y.type.remove(y,I,R,x,ue,P):O&&(U!==ot||F>0&&F&64)?W(O,I,R,!1,!0):(U===ot&&F&384||!x&&B&16)&&W(N,I,R),P&&Ze(y)}(ae&&(we=V&&V.onVnodeUnmounted)||te)&&Ye(()=>{we&&_t(we,I,y),te&&sn(y,null,I,"unmounted")},R)},Ze=y=>{const{type:I,el:R,anchor:P,transition:x}=y;if(I===ot){Rn(R,P);return}if(I===gs){ce(y);return}const U=()=>{s(R),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(y.shapeFlag&1&&x&&!x.persisted){const{leave:V,delayLeave:S}=x,N=()=>V(R,U);S?S(y.el,U,N):N()}else U()},Rn=(y,I)=>{let R;for(;y!==I;)R=A(y),s(y),y=R;s(I)},D=(y,I,R)=>{const{bum:P,scope:x,update:U,subTree:V,um:S}=y;P&&fs(P),x.stop(),U&&(U.active=!1,Ce(V,y,I,R)),S&&Ye(S,I),Ye(()=>{y.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},W=(y,I,R,P=!1,x=!1,U=0)=>{for(let V=U;V<y.length;V++)Ce(y[V],I,R,P,x)},q=y=>y.shapeFlag&6?q(y.component.subTree):y.shapeFlag&128?y.suspense.next():A(y.anchor||y.el),Q=(y,I,R)=>{y==null?I._vnode&&Ce(I._vnode,null,null,!0):K(I._vnode||null,y,I,null,null,null,R),ka(),Nc(),I._vnode=y},ue={p:K,um:Ce,m:pe,r:Ze,mt:p,mc:w,pc:M,pbc:d,n:q,o:t};let Ie,ie;return e&&([Ie,ie]=e(ue)),{render:Q,hydrate:Ie,createApp:Lf(Q,Ie)}}function on({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zc(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Bt(s[i]),l.el=o.el),n||Zc(o,l)),l.type===si&&(l.el=o.el)}}function Uf(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Ff=t=>t.__isTeleport,ot=Symbol(void 0),si=Symbol(void 0),tn=Symbol(void 0),gs=Symbol(void 0),fr=[];let dt=null;function Vr(t=!1){fr.push(dt=t?null:[])}function Vf(){fr.pop(),dt=fr[fr.length-1]||null}let Ar=1;function Va(t){Ar+=t}function eu(t){return t.dynamicChildren=Ar>0?dt||Nn:null,Vf(),Ar>0&&dt&&dt.push(t),t}function jf(t,e,n,r,s,i){return eu(le(t,e,n,r,s,i,!0))}function ii(t,e,n,r,s){return eu(ve(t,e,n,r,s,!0))}function Rs(t){return t?t.__v_isVNode===!0:!1}function ir(t,e){return t.type===e.type&&t.key===e.key}const oi="__vInternal",tu=({key:t})=>t??null,ys=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ne(t)||qe(t)||se(t)?{i:He,r:t,k:e,f:!!n}:t:null;function le(t,e=null,n=null,r=0,s=null,i=t===ot?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tu(e),ref:e&&ys(e),scopeId:Mc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:He};return l?(No(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),Ar>0&&!o&&dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&dt.push(c),c}const ve=Bf;function Bf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wf)&&(t=tn),Rs(t)){const l=Bn(t,e,!0);return n&&No(l,n),Ar>0&&!i&&dt&&(l.shapeFlag&6?dt[dt.indexOf(t)]=l:dt.push(l)),l.patchFlag|=-2,l}if(Zf(t)&&(t=t.__vccOpts),e){e=qf(e);let{class:l,style:c}=e;l&&!Ne(l)&&(e.class=vo(l)),Ee(c)&&(Tc(c)&&!ne(c)&&(c=Ke({},c)),e.style=_o(c))}const o=Ne(t)?1:rf(t)?128:Ff(t)?64:Ee(t)?4:se(t)?2:0;return le(t,e,n,r,s,o,i,!0)}function qf(t){return t?Tc(t)||oi in t?Ke({},t):t:null}function Bn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,l=e?Hf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&tu(l),ref:e&&e.ref?n&&s?ne(s)?s.concat(ys(e)):[s,ys(e)]:ys(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bn(t.ssContent),ssFallback:t.ssFallback&&Bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function it(t=" ",e=0){return ve(si,null,t,e)}function mb(t,e){const n=ve(gs,null,t);return n.staticCount=e,n}function gb(t="",e=!1){return e?(Vr(),ii(tn,null,t)):ve(tn,null,t)}function vt(t){return t==null||typeof t=="boolean"?ve(tn):ne(t)?ve(ot,null,t.slice()):typeof t=="object"?Bt(t):ve(si,null,String(t))}function Bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bn(t)}function No(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),No(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(oi in e)?e._ctx=He:s===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:He},n=32):(e=String(e),r&64?(n=16,e=[it(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vo([e.class,r.class]));else if(s==="style")e.style=_o([e.style,r.style]);else if(Js(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function _t(t,e,n,r=null){ft(t,e,7,[n,r])}const zf=Xc();let Wf=0;function Kf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||zf,i={uid:Wf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new dh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gc(r,s),emitsOptions:$c(r,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:r.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Xh.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const qn=t=>{Pe=t,t.scope.on()},mn=()=>{Pe&&Pe.scope.off(),Pe=null};function nu(t){return t.vnode.shapeFlag&4}let Cr=!1;function Gf(t,e=!1){Cr=e;const{props:n,children:r}=t.vnode,s=nu(t);Of(t,n,s,e),Df(t,r);const i=s?Yf(t,e):void 0;return Cr=!1,i}function Yf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sc(new Proxy(t.ctx,If));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Qf(t):null;qn(t),Xn();const i=Yt(r,t,0,[t.props,s]);if(Zn(),mn(),uc(i)){if(i.then(mn,mn),e)return i.then(o=>{ja(t,o,e)}).catch(o=>{ti(o,t,0)});t.asyncDep=i}else ja(t,i,e)}else ru(t,e)}function ja(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Oc(e)),ru(t,n)}let Ba;function ru(t,e,n){const r=t.type;if(!t.render){if(!e&&Ba&&!r.render){const s=r.template||Do(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=Ke(Ke({isCustomElement:i,delimiters:l},o),c);r.render=Ba(s,h)}}t.render=r.render||ht}qn(t),Xn(),Tf(t),Zn(),mn()}function Jf(t){return new Proxy(t.attrs,{get(e,n){return Xe(t,"get","$attrs"),e[n]}})}function Qf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Jf(t))},slots:t.slots,emit:t.emit,expose:e}}function ai(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Oc(Sc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hr)return hr[n](t)},has(e,n){return n in e||n in hr}}))}function Xf(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function Zf(t){return se(t)&&"__vccOpts"in t}const at=(t,e)=>Wh(t,e,Cr);function su(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!ne(e)?Rs(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rs(n)&&(n=[n]),ve(t,e,n))}const ep=Symbol(""),tp=()=>kt(ep),np="3.2.47",rp="http://www.w3.org/2000/svg",un=typeof document<"u"?document:null,qa=un&&un.createElement("template"),sp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?un.createElementNS(rp,t):un.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>un.createTextNode(t),createComment:t=>un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qa.innerHTML=r?`<svg>${t}</svg>`:t;const l=qa.content;if(r){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ip(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function op(t,e,n){const r=t.style,s=Ne(n);if(n&&!s){if(e&&!Ne(e))for(const i in e)n[i]==null&&to(r,i,"");for(const i in n)to(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ha=/\s*!important$/;function to(t,e,n){if(ne(n))n.forEach(r=>to(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ap(t,e);Ha.test(n)?t.setProperty(Qn(r),n.replace(Ha,""),"important"):t[r]=n}}const za=["Webkit","Moz","ms"],Ri={};function ap(t,e){const n=Ri[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return Ri[e]=r;r=Zs(r);for(let s=0;s<za.length;s++){const i=za[s]+r;if(i in t)return Ri[e]=i}return e}const Wa="http://www.w3.org/1999/xlink";function lp(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wa,e.slice(6,e.length)):t.setAttributeNS(Wa,e,n);else{const i=th(e);n==null||i&&!ac(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function cp(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ac(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function dn(t,e,n,r){t.addEventListener(e,n,r)}function up(t,e,n,r){t.removeEventListener(e,n,r)}function dp(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=hp(e);if(r){const h=i[e]=mp(r,s);dn(t,l,h,c)}else o&&(up(t,l,o,c),i[e]=void 0)}}const Ka=/(?:Once|Passive|Capture)$/;function hp(t){let e;if(Ka.test(t)){e={};let r;for(;r=t.match(Ka);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qn(t.slice(2)),e]}let Oi=0;const fp=Promise.resolve(),pp=()=>Oi||(fp.then(()=>Oi=0),Oi=Date.now());function mp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ft(gp(r,n.value),e,5,[r])};return n.value=t,n.attached=pp(),n}function gp(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ga=/^on[a-z]/,yp=(t,e,n,r,s=!1,i,o,l,c)=>{e==="class"?ip(t,r,s):e==="style"?op(t,n,r):Js(e)?wo(e)||dp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_p(t,e,r,s))?cp(t,e,r,i,o,l,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),lp(t,e,r,s))};function _p(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ga.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ga.test(e)&&Ne(n)?!1:e in t}const Os=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>fs(e,n):e};function vp(t){t.target.composing=!0}function Ya(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yb={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Os(s);const i=r||s.props&&s.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ts(l)),t._assign(l)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",vp),dn(t,"compositionend",Ya),dn(t,"change",Ya))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Os(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ts(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},_b={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Qs(e);dn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ts(Ps(o)):Ps(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Os(r)},mounted(t,{value:e}){Ja(t,e)},beforeUpdate(t,e,n){t._assign=Os(n)},updated(t,{value:e}){Ja(t,e)}};function Ja(t,e){const n=t.multiple;if(!(n&&!ne(e)&&!Qs(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Ps(i);if(n)ne(e)?i.selected=rh(e,o)>-1:i.selected=e.has(o);else if(Ys(Ps(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ps(t){return"_value"in t?t._value:t.value}const vb={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):or(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),or(t,!0),r.enter(t)):r.leave(t,()=>{or(t,!1)}):or(t,e))},beforeUnmount(t,{value:e}){or(t,e)}};function or(t,e){t.style.display=e?t._vod:"none"}const wp=Ke({patchProp:yp},sp);let Qa;function bp(){return Qa||(Qa=$f(wp))}const Ep=(...t)=>{const e=bp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ip(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ip(t){return Ne(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const kn=typeof window<"u";function Tp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function Pi(t,e){const n={};for(const r in e){const s=e[r];n[r]=pt(s)?s.map(t):t(s)}return n}const pr=()=>{},pt=Array.isArray,Sp=/\/$/,Ap=t=>t.replace(Sp,"");function ki(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Pp(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Cp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xa(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Rp(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Hn(e.matched[r],n.matched[s])&&iu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function iu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Op(t[n],e[n]))return!1;return!0}function Op(t,e){return pt(t)?Za(t,e):pt(e)?Za(e,t):t===e}function Za(t,e){return pt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Pp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Rr;(function(t){t.pop="pop",t.push="push"})(Rr||(Rr={}));var mr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mr||(mr={}));function kp(t){if(!t)if(kn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ap(t)}const Dp=/^[^#]+#/;function xp(t,e){return t.replace(Dp,"#")+e}function Np(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const li=()=>({left:window.pageXOffset,top:window.pageYOffset});function Lp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Np(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function el(t,e){return(history.state?history.state.position-e:-1)+t}const no=new Map;function $p(t,e){no.set(t,e)}function Mp(t){const e=no.get(t);return no.delete(t),e}let Up=()=>location.protocol+"//"+location.host;function ou(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Xa(c,"")}return Xa(n,t)+r+s}function Fp(t,e,n,r){let s=[],i=[],o=null;const l=({state:A})=>{const k=ou(t,location),j=n.value,K=e.value;let X=0;if(A){if(n.value=k,e.value=A,o&&o===j){o=null;return}X=K?A.position-K.position:0}else r(k);s.forEach(G=>{G(n.value,j,{delta:X,type:Rr.pop,direction:X?X>0?mr.forward:mr.back:mr.unknown})})};function c(){o=n.value}function h(A){s.push(A);const k=()=>{const j=s.indexOf(A);j>-1&&s.splice(j,1)};return i.push(k),k}function g(){const{history:A}=window;A.state&&A.replaceState(ge({},A.state,{scroll:li()}),"")}function b(){for(const A of i)A();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",g),{pauseListeners:c,listen:h,destroy:b}}function tl(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?li():null}}function Vp(t){const{history:e,location:n}=window,r={value:ou(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,g){const b=t.indexOf("#"),A=b>-1?(n.host&&document.querySelector("base")?t:t.slice(b))+c:Up()+t+c;try{e[g?"replaceState":"pushState"](h,"",A),s.value=h}catch(k){console.error(k),n[g?"replace":"assign"](A)}}function o(c,h){const g=ge({},e.state,tl(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,g,!0),r.value=c}function l(c,h){const g=ge({},s.value,e.state,{forward:c,scroll:li()});i(g.current,g,!0);const b=ge({},tl(r.value,c,null),{position:g.position+1},h);i(c,b,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function jp(t){t=kp(t);const e=Vp(t),n=Fp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ge({location:"",base:t,go:r,createHref:xp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Bp(t){return typeof t=="string"||t&&typeof t=="object"}function au(t){return typeof t=="string"||typeof t=="symbol"}const Vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lu=Symbol("");var nl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nl||(nl={}));function zn(t,e){return ge(new Error,{type:t,[lu]:!0},e)}function Ct(t,e){return t instanceof Error&&lu in t&&(e==null||!!(t.type&e))}const rl="[^/]+?",qp={sensitive:!1,strict:!1,start:!0,end:!0},Hp=/[.+*?^${}()[\]/\\]/g;function zp(t,e){const n=ge({},qp,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const g=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let b=0;b<h.length;b++){const A=h[b];let k=40+(n.sensitive?.25:0);if(A.type===0)b||(s+="/"),s+=A.value.replace(Hp,"\\$&"),k+=40;else if(A.type===1){const{value:j,repeatable:K,optional:X,regexp:G}=A;i.push({name:j,repeatable:K,optional:X});const ee=G||rl;if(ee!==rl){k+=10;try{new RegExp(`(${ee})`)}catch(ce){throw new Error(`Invalid custom RegExp for param "${j}" (${ee}): `+ce.message)}}let J=K?`((?:${ee})(?:/(?:${ee}))*)`:`(${ee})`;b||(J=X&&h.length<2?`(?:/${J})`:"/"+J),X&&(J+="?"),s+=J,k+=20,X&&(k+=-8),K&&(k+=-20),ee===".*"&&(k+=-50)}g.push(k)}r.push(g)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const g=h.match(o),b={};if(!g)return null;for(let A=1;A<g.length;A++){const k=g[A]||"",j=i[A-1];b[j.name]=k&&j.repeatable?k.split("/"):k}return b}function c(h){let g="",b=!1;for(const A of t){(!b||!g.endsWith("/"))&&(g+="/"),b=!1;for(const k of A)if(k.type===0)g+=k.value;else if(k.type===1){const{value:j,repeatable:K,optional:X}=k,G=j in h?h[j]:"";if(pt(G)&&!K)throw new Error(`Provided param "${j}" is an array but it is not repeatable (* or + modifiers)`);const ee=pt(G)?G.join("/"):G;if(!ee)if(X)A.length<2&&(g.endsWith("/")?g=g.slice(0,-1):b=!0);else throw new Error(`Missing required param "${j}"`);g+=ee}}return g||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function Wp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Kp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Wp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(sl(r))return 1;if(sl(s))return-1}return s.length-r.length}function sl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Gp={type:0,value:""},Yp=/[a-zA-Z0-9_]/;function Jp(t){if(!t)return[[]];if(t==="/")return[[Gp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(k){throw new Error(`ERR (${n})/"${h}": ${k}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",g="";function b(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:g,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function A(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&b(),o()):c===":"?(b(),n=1):A();break;case 4:A(),n=r;break;case 1:c==="("?n=2:Yp.test(c)?A():(b(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+c:n=3:g+=c;break;case 3:b(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,g="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),b(),o(),s}function Qp(t,e,n){const r=zp(Jp(t.path),n),s=ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Xp(t,e){const n=[],r=new Map;e=al({strict:!1,end:!0,sensitive:!1},e);function s(g){return r.get(g)}function i(g,b,A){const k=!A,j=Zp(g);j.aliasOf=A&&A.record;const K=al(e,g),X=[j];if("alias"in g){const J=typeof g.alias=="string"?[g.alias]:g.alias;for(const ce of J)X.push(ge({},j,{components:A?A.record.components:j.components,path:ce,aliasOf:A?A.record:j}))}let G,ee;for(const J of X){const{path:ce}=J;if(b&&ce[0]!=="/"){const Ae=b.record.path,z=Ae[Ae.length-1]==="/"?"":"/";J.path=b.record.path+(ce&&z+ce)}if(G=Qp(J,b,K),A?A.alias.push(G):(ee=ee||G,ee!==G&&ee.alias.push(G),k&&g.name&&!ol(G)&&o(g.name)),j.children){const Ae=j.children;for(let z=0;z<Ae.length;z++)i(Ae[z],G,A&&A.children[z])}A=A||G,(G.record.components&&Object.keys(G.record.components).length||G.record.name||G.record.redirect)&&c(G)}return ee?()=>{o(ee)}:pr}function o(g){if(au(g)){const b=r.get(g);b&&(r.delete(g),n.splice(n.indexOf(b),1),b.children.forEach(o),b.alias.forEach(o))}else{const b=n.indexOf(g);b>-1&&(n.splice(b,1),g.record.name&&r.delete(g.record.name),g.children.forEach(o),g.alias.forEach(o))}}function l(){return n}function c(g){let b=0;for(;b<n.length&&Kp(g,n[b])>=0&&(g.record.path!==n[b].record.path||!cu(g,n[b]));)b++;n.splice(b,0,g),g.record.name&&!ol(g)&&r.set(g.record.name,g)}function h(g,b){let A,k={},j,K;if("name"in g&&g.name){if(A=r.get(g.name),!A)throw zn(1,{location:g});K=A.record.name,k=ge(il(b.params,A.keys.filter(ee=>!ee.optional).map(ee=>ee.name)),g.params&&il(g.params,A.keys.map(ee=>ee.name))),j=A.stringify(k)}else if("path"in g)j=g.path,A=n.find(ee=>ee.re.test(j)),A&&(k=A.parse(j),K=A.record.name);else{if(A=b.name?r.get(b.name):n.find(ee=>ee.re.test(b.path)),!A)throw zn(1,{location:g,currentLocation:b});K=A.record.name,k=ge({},b.params,g.params),j=A.stringify(k)}const X=[];let G=A;for(;G;)X.unshift(G.record),G=G.parent;return{name:K,path:j,params:k,matched:X,meta:tm(X)}}return t.forEach(g=>i(g)),{addRoute:i,resolve:h,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function il(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:em(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function em(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ol(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tm(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function al(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function cu(t,e){return e.children.some(n=>n===t||cu(t,n))}const uu=/#/g,nm=/&/g,rm=/\//g,sm=/=/g,im=/\?/g,du=/\+/g,om=/%5B/g,am=/%5D/g,hu=/%5E/g,lm=/%60/g,fu=/%7B/g,cm=/%7C/g,pu=/%7D/g,um=/%20/g;function Lo(t){return encodeURI(""+t).replace(cm,"|").replace(om,"[").replace(am,"]")}function dm(t){return Lo(t).replace(fu,"{").replace(pu,"}").replace(hu,"^")}function ro(t){return Lo(t).replace(du,"%2B").replace(um,"+").replace(uu,"%23").replace(nm,"%26").replace(lm,"`").replace(fu,"{").replace(pu,"}").replace(hu,"^")}function hm(t){return ro(t).replace(sm,"%3D")}function fm(t){return Lo(t).replace(uu,"%23").replace(im,"%3F")}function pm(t){return t==null?"":fm(t).replace(rm,"%2F")}function ks(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function mm(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(du," "),o=i.indexOf("="),l=ks(o<0?i:i.slice(0,o)),c=o<0?null:ks(i.slice(o+1));if(l in e){let h=e[l];pt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function ll(t){let e="";for(let n in t){const r=t[n];if(n=hm(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pt(r)?r.map(i=>i&&ro(i)):[r&&ro(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function gm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ym=Symbol(""),cl=Symbol(""),$o=Symbol(""),mu=Symbol(""),so=Symbol("");function ar(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=b=>{b===!1?l(zn(4,{from:n,to:e})):b instanceof Error?l(b):Bp(b)?l(zn(2,{from:e,to:b})):(i&&r.enterCallbacks[s]===i&&typeof b=="function"&&i.push(b),o())},h=t.call(r&&r.instances[s],e,n,c);let g=Promise.resolve(h);t.length<3&&(g=g.then(c)),g.catch(b=>l(b))})}function Di(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let l=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(_m(l)){const h=(l.__vccOpts||l)[e];h&&s.push(qt(h,n,r,i,o))}else{let c=l();s.push(()=>c.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const g=Tp(h)?h.default:h;i.components[o]=g;const A=(g.__vccOpts||g)[e];return A&&qt(A,n,r,i,o)()}))}}return s}function _m(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ul(t){const e=kt($o),n=kt(mu),r=at(()=>e.resolve(pn(t.to))),s=at(()=>{const{matched:c}=r.value,{length:h}=c,g=c[h-1],b=n.matched;if(!g||!b.length)return-1;const A=b.findIndex(Hn.bind(null,g));if(A>-1)return A;const k=dl(c[h-2]);return h>1&&dl(g)===k&&b[b.length-1].path!==k?b.findIndex(Hn.bind(null,c[h-2])):A}),i=at(()=>s.value>-1&&Em(n.params,r.value.params)),o=at(()=>s.value>-1&&s.value===n.matched.length-1&&iu(n.params,r.value.params));function l(c={}){return bm(c)?e[pn(t.replace)?"replace":"push"](pn(t.to)).catch(pr):Promise.resolve()}return{route:r,href:at(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const vm=Vc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ul,setup(t,{slots:e}){const n=Fr(ul(t)),{options:r}=kt($o),s=at(()=>({[hl(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[hl(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:su("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),wm=vm;function bm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Em(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!pt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function dl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hl=(t,e,n)=>t??e??n,Im=Vc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=kt(so),s=at(()=>t.route||r.value),i=kt(cl,0),o=at(()=>{let h=pn(i);const{matched:g}=s.value;let b;for(;(b=g[h])&&!b.components;)h++;return h}),l=at(()=>s.value.matched[o.value]);ps(cl,at(()=>o.value+1)),ps(ym,l),ps(so,s);const c=jh();return ms(()=>[c.value,l.value,t.name],([h,g,b],[A,k,j])=>{g&&(g.instances[b]=h,k&&k!==g&&h&&h===A&&(g.leaveGuards.size||(g.leaveGuards=k.leaveGuards),g.updateGuards.size||(g.updateGuards=k.updateGuards))),h&&g&&(!k||!Hn(g,k)||!A)&&(g.enterCallbacks[b]||[]).forEach(K=>K(h))},{flush:"post"}),()=>{const h=s.value,g=t.name,b=l.value,A=b&&b.components[g];if(!A)return fl(n.default,{Component:A,route:h});const k=b.props[g],j=k?k===!0?h.params:typeof k=="function"?k(h):k:null,X=su(A,ge({},j,e,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(b.instances[g]=null)},ref:c}));return fl(n.default,{Component:X,route:h})||X}}});function fl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gu=Im;function Tm(t){const e=Xp(t.routes,t),n=t.parseQuery||mm,r=t.stringifyQuery||ll,s=t.history,i=ar(),o=ar(),l=ar(),c=Bh(Vt);let h=Vt;kn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=Pi.bind(null,D=>""+D),b=Pi.bind(null,pm),A=Pi.bind(null,ks);function k(D,W){let q,Q;return au(D)?(q=e.getRecordMatcher(D),Q=W):Q=D,e.addRoute(Q,q)}function j(D){const W=e.getRecordMatcher(D);W&&e.removeRoute(W)}function K(){return e.getRoutes().map(D=>D.record)}function X(D){return!!e.getRecordMatcher(D)}function G(D,W){if(W=ge({},W||c.value),typeof D=="string"){const y=ki(n,D,W.path),I=e.resolve({path:y.path},W),R=s.createHref(y.fullPath);return ge(y,I,{params:A(I.params),hash:ks(y.hash),redirectedFrom:void 0,href:R})}let q;if("path"in D)q=ge({},D,{path:ki(n,D.path,W.path).path});else{const y=ge({},D.params);for(const I in y)y[I]==null&&delete y[I];q=ge({},D,{params:b(D.params)}),W.params=b(W.params)}const Q=e.resolve(q,W),ue=D.hash||"";Q.params=g(A(Q.params));const Ie=Cp(r,ge({},D,{hash:dm(ue),path:Q.path})),ie=s.createHref(Ie);return ge({fullPath:Ie,hash:ue,query:r===ll?gm(D.query):D.query||{}},Q,{redirectedFrom:void 0,href:ie})}function ee(D){return typeof D=="string"?ki(n,D,c.value.path):ge({},D)}function J(D,W){if(h!==D)return zn(8,{from:W,to:D})}function ce(D){return v(D)}function Ae(D){return ce(ge(ee(D),{replace:!0}))}function z(D){const W=D.matched[D.matched.length-1];if(W&&W.redirect){const{redirect:q}=W;let Q=typeof q=="function"?q(D):q;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=ee(Q):{path:Q},Q.params={}),ge({query:D.query,hash:D.hash,params:"path"in Q?{}:D.params},Q)}}function v(D,W){const q=h=G(D),Q=c.value,ue=D.state,Ie=D.force,ie=D.replace===!0,y=z(q);if(y)return v(ge(ee(y),{state:typeof y=="object"?ge({},ue,y.state):ue,force:Ie,replace:ie}),W||q);const I=q;I.redirectedFrom=W;let R;return!Ie&&Rp(r,Q,q)&&(R=zn(16,{to:I,from:Q}),oe(Q,Q,!0,!1)),(R?Promise.resolve(R):m(I,Q)).catch(P=>Ct(P)?Ct(P,2)?P:L(P):C(P,I,Q)).then(P=>{if(P){if(Ct(P,2))return v(ge({replace:ie},ee(P.to),{state:typeof P.to=="object"?ge({},ue,P.to.state):ue,force:Ie}),W||I)}else P=u(I,Q,!0,ie,ue);return d(I,Q,P),P})}function w(D,W){const q=J(D,W);return q?Promise.reject(q):Promise.resolve()}function m(D,W){let q;const[Q,ue,Ie]=Sm(D,W);q=Di(Q.reverse(),"beforeRouteLeave",D,W);for(const y of Q)y.leaveGuards.forEach(I=>{q.push(qt(I,D,W))});const ie=w.bind(null,D,W);return q.push(ie),Pn(q).then(()=>{q=[];for(const y of i.list())q.push(qt(y,D,W));return q.push(ie),Pn(q)}).then(()=>{q=Di(ue,"beforeRouteUpdate",D,W);for(const y of ue)y.updateGuards.forEach(I=>{q.push(qt(I,D,W))});return q.push(ie),Pn(q)}).then(()=>{q=[];for(const y of D.matched)if(y.beforeEnter&&!W.matched.includes(y))if(pt(y.beforeEnter))for(const I of y.beforeEnter)q.push(qt(I,D,W));else q.push(qt(y.beforeEnter,D,W));return q.push(ie),Pn(q)}).then(()=>(D.matched.forEach(y=>y.enterCallbacks={}),q=Di(Ie,"beforeRouteEnter",D,W),q.push(ie),Pn(q))).then(()=>{q=[];for(const y of o.list())q.push(qt(y,D,W));return q.push(ie),Pn(q)}).catch(y=>Ct(y,8)?y:Promise.reject(y))}function d(D,W,q){for(const Q of l.list())Q(D,W,q)}function u(D,W,q,Q,ue){const Ie=J(D,W);if(Ie)return Ie;const ie=W===Vt,y=kn?history.state:{};q&&(Q||ie?s.replace(D.fullPath,ge({scroll:ie&&y&&y.scroll},ue)):s.push(D.fullPath,ue)),c.value=D,oe(D,W,q,ie),L()}let a;function f(){a||(a=s.listen((D,W,q)=>{if(!Rn.listening)return;const Q=G(D),ue=z(Q);if(ue){v(ge(ue,{replace:!0}),Q).catch(pr);return}h=Q;const Ie=c.value;kn&&$p(el(Ie.fullPath,q.delta),li()),m(Q,Ie).catch(ie=>Ct(ie,12)?ie:Ct(ie,2)?(v(ie.to,Q).then(y=>{Ct(y,20)&&!q.delta&&q.type===Rr.pop&&s.go(-1,!1)}).catch(pr),Promise.reject()):(q.delta&&s.go(-q.delta,!1),C(ie,Q,Ie))).then(ie=>{ie=ie||u(Q,Ie,!1),ie&&(q.delta&&!Ct(ie,8)?s.go(-q.delta,!1):q.type===Rr.pop&&Ct(ie,20)&&s.go(-1,!1)),d(Q,Ie,ie)}).catch(pr)}))}let p=ar(),T=ar(),E;function C(D,W,q){L(D);const Q=T.list();return Q.length?Q.forEach(ue=>ue(D,W,q)):console.error(D),Promise.reject(D)}function M(){return E&&c.value!==Vt?Promise.resolve():new Promise((D,W)=>{p.add([D,W])})}function L(D){return E||(E=!D,f(),p.list().forEach(([W,q])=>D?q(D):W()),p.reset()),D}function oe(D,W,q,Q){const{scrollBehavior:ue}=t;if(!kn||!ue)return Promise.resolve();const Ie=!q&&Mp(el(D.fullPath,0))||(Q||!q)&&history.state&&history.state.scroll||null;return Dc().then(()=>ue(D,W,Ie)).then(ie=>ie&&Lp(ie)).catch(ie=>C(ie,D,W))}const pe=D=>s.go(D);let Ce;const Ze=new Set,Rn={currentRoute:c,listening:!0,addRoute:k,removeRoute:j,hasRoute:X,getRoutes:K,resolve:G,options:t,push:ce,replace:Ae,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:T.add,isReady:M,install(D){const W=this;D.component("RouterLink",wm),D.component("RouterView",gu),D.config.globalProperties.$router=W,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>pn(c)}),kn&&!Ce&&c.value===Vt&&(Ce=!0,ce(s.location).catch(ue=>{}));const q={};for(const ue in Vt)q[ue]=at(()=>c.value[ue]);D.provide($o,W),D.provide(mu,Fr(q)),D.provide(so,c);const Q=D.unmount;Ze.add(D),D.unmount=function(){Ze.delete(D),Ze.size<1&&(h=Vt,a&&a(),a=null,c.value=Vt,Ce=!1,E=!1),Q()}}};return Rn}function Pn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Sm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>Hn(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>Hn(h,c))||s.push(c))}return[n,r,s]}const Am={__name:"App",setup(t){return(e,n)=>(Vr(),ii(pn(gu)))}},Cm="modulepreload",Rm=function(t){return"/goldsmithjk/"+t},pl={},$e=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Rm(i),i in pl)return;pl[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let g=s.length-1;g>=0;g--){const b=s[g];if(b.href===i&&(!o||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":Cm,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((g,b)=>{h.addEventListener("load",g),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Om=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Pm={},km={class:"navbar navbar-expand-lg navbar-light bg-light"},Dm={class:"container-fluid"},xm=le("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[le("span",{class:"navbar-toggler-icon"})],-1),Nm={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},Lm={class:"navbar-nav me-auto mb-2 mb-lg-0"},$m={class:"nav-item"},Mm={class:"nav-item"},Um={class:"nav-item"},Fm={class:"nav-item"},Vm={class:"nav-item"},jm={class:"nav-item"},Bm={class:"nav-item"},qm={class:"navbar-nav me-auto mb-2 mb-lg-0"},Hm={class:"nav-item dropdown"},zm=le("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Settings ",-1),Wm={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},Km=le("li",null,[le("a",{class:"dropdown-item",href:"#"},"Profile Setting")],-1),Gm=le("li",null,[le("hr",{class:"dropdown-divider"})],-1),Ym={class:"d-flex"},Jm={class:"navbar-nav me-auto mb-2 mb-lg-0"},Qm={class:"nav-item dropdown btn btn-outline-success"},Xm=le("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," New ",-1),Zm={class:"dropdown-menu","aria-labelledby":"navbarDropdown"};function eg(t,e){const n=vf("RouterLink");return Vr(),jf(ot,null,[le("nav",km,[le("div",Dm,[ve(n,{class:"navbar-brand",to:"/"},{default:Ge(()=>[le("h3",null,lc(this.$appShortName),1)]),_:1}),xm,le("div",Nm,[le("ul",Lm,[le("li",$m,[ve(n,{to:"/invoices",class:"nav-link active","aria-current":"page"},{default:Ge(()=>[it("Invoices")]),_:1})]),le("li",Mm,[ve(n,{to:"/customers",class:"nav-link active","aria-current":"page"},{default:Ge(()=>[it("Customers")]),_:1})]),le("li",Um,[ve(n,{to:"/products",class:"nav-link active","aria-current":"page"},{default:Ge(()=>[it("Products")]),_:1})]),le("li",Fm,[ve(n,{to:"/payments",class:"nav-link active","aria-current":"page"},{default:Ge(()=>[it("Cash Transactions")]),_:1})]),le("li",Vm,[ve(n,{to:"/goldtransactions",class:"nav-link active","aria-current":"page"},{default:Ge(()=>[it("Gold Transactions")]),_:1})]),le("li",jm,[ve(n,{to:"/rates",class:"nav-link active","aria-current":"page"},{default:Ge(()=>[it("Metal Rate")]),_:1})]),le("li",Bm,[le("ul",qm,[le("li",Hm,[zm,le("ul",Wm,[Km,le("li",null,[ve(n,{to:"/settings/application",class:"dropdown-item","aria-current":"page"},{default:Ge(()=>[it(" General Settings")]),_:1})]),Gm,le("li",null,[ve(n,{to:"/logout",class:"nav-link active","aria-current":"page"},{default:Ge(()=>[it("Logout ")]),_:1})])])])])])]),le("form",Ym,[le("ul",Jm,[le("li",Qm,[Xm,le("ul",Zm,[le("li",null,[ve(n,{to:"/invoice",class:"dropdown-item"},{default:Ge(()=>[it(" Invoice")]),_:1})]),le("li",null,[ve(n,{to:"/payment",class:"dropdown-item"},{default:Ge(()=>[it(" Cash Payment")]),_:1})]),le("li",null,[ve(n,{to:"/goldtransaction",class:"dropdown-item"},{default:Ge(()=>[it(" Gold Payment")]),_:1})])])])])])])])]),Ef(t.$slots,"default")],64)}const tg=Om(Pm,[["render",eg]]),ng={class:"pricing-header p-3 pb-md-4 mx-auto text-center"},rg={class:"display-4 fw-normal"},sg=le("p",{class:"fs-5 text-body-secondary"},null,-1),ig={mounted:function(){}},og=Object.assign(ig,{__name:"HomeView",setup(t){return(e,n)=>(Vr(),ii(tg,null,{default:Ge(()=>[le("div",ng,[le("h2",rg,"Welcome to "+lc(e.$appname),1),sg])]),_:1}))}}),yu=Tm({history:jp("/goldsmithjk/"),routes:[{path:"/",name:"home",component:og},{path:"/invoice",name:"invoice",component:()=>$e(()=>import("./Invoice-05313955.js"),["assets/Invoice-05313955.js","assets/InvoiceItemTable-62e518a4.js","assets/CAlert-5fafc70e.js","assets/CustomerPicker-9c775d0e.js"])},{path:"/invoices/:invoicenumber",name:"invoicereport",component:()=>$e(()=>import("./InvoiceReport-4dfc5f91.js"),["assets/InvoiceReport-4dfc5f91.js","assets/InvoiceItemTable-62e518a4.js","assets/CAlert-5fafc70e.js"])},{path:"/login",name:"login",component:()=>$e(()=>import("./Login-d87bafb8.js"),["assets/Login-d87bafb8.js","assets/CAlert-5fafc70e.js"])},{path:"/logout",name:"logout",component:()=>$e(()=>import("./Logout-0eead361.js"),["assets/Logout-0eead361.js","assets/CAlert-5fafc70e.js"])},{path:"/customers",name:"customers",component:()=>$e(()=>import("./Customers-2111ebfc.js"),["assets/Customers-2111ebfc.js","assets/DynamicTable-5e5a502c.js","assets/DynamicDialog-fb2e25e6.js","assets/CAlert-5fafc70e.js"])},{path:"/customers/:customerid",name:"customerdetails",component:()=>$e(()=>import("./CustomerDetails-ac5fb7b4.js"),["assets/CustomerDetails-ac5fb7b4.js","assets/CAlert-5fafc70e.js","assets/DynamicTable-5e5a502c.js"])},{path:"/users",name:"users",component:()=>$e(()=>import("./Users-02cc9a60.js"),["assets/Users-02cc9a60.js","assets/DynamicTable-5e5a502c.js","assets/DynamicDialog-fb2e25e6.js","assets/CAlert-5fafc70e.js"])},{path:"/invoices",name:"invoices",component:()=>$e(()=>import("./Invoices-8ac899ad.js"),["assets/Invoices-8ac899ad.js","assets/CAlert-5fafc70e.js","assets/DynamicTable-5e5a502c.js"])},{path:"/rates",name:"rates",component:()=>$e(()=>import("./Rates-749b8c62.js"),["assets/Rates-749b8c62.js","assets/DynamicTable-5e5a502c.js","assets/CAlert-5fafc70e.js"])},{path:"/products",name:"products",component:()=>$e(()=>import("./Products-af7062bb.js"),["assets/Products-af7062bb.js","assets/DynamicTable-5e5a502c.js","assets/DynamicDialog-fb2e25e6.js","assets/CAlert-5fafc70e.js"])},{path:"/settings/application",name:"applicationsettings",component:()=>$e(()=>import("./Applicationsettings-a8703e05.js"),["assets/Applicationsettings-a8703e05.js","assets/CAlert-5fafc70e.js"])},{path:"/settings/product",name:"productSettings",component:()=>$e(()=>import("./ProductSettings-01707656.js"),["assets/ProductSettings-01707656.js","assets/DynamicTable-5e5a502c.js","assets/DynamicDialog-fb2e25e6.js","assets/CAlert-5fafc70e.js"])},{path:"/settings/customer",name:"customerSettings",component:()=>$e(()=>import("./CustomerSettings-c8168d03.js"),["assets/CustomerSettings-c8168d03.js","assets/DynamicTable-5e5a502c.js","assets/DynamicDialog-fb2e25e6.js","assets/CAlert-5fafc70e.js"])},{path:"/payments",name:"payments",component:()=>$e(()=>import("./Payments-66389c58.js"),["assets/Payments-66389c58.js","assets/DynamicTable-5e5a502c.js","assets/CAlert-5fafc70e.js"])},{path:"/payment",name:"payment",component:()=>$e(()=>import("./Payment-fe2861a2.js"),["assets/Payment-fe2861a2.js","assets/CustomerPicker-9c775d0e.js","assets/CAlert-5fafc70e.js"])},{path:"/payments/:receiptNumber",name:"paymentReport",component:()=>$e(()=>import("./PaymentReport-1c24e794.js"),["assets/PaymentReport-1c24e794.js","assets/CAlert-5fafc70e.js"])},{path:"/goldtransactions",name:"goldtransactions",component:()=>$e(()=>import("./GoldTransactions-22bf66fc.js"),["assets/GoldTransactions-22bf66fc.js","assets/DynamicTable-5e5a502c.js","assets/CAlert-5fafc70e.js"])},{path:"/goldtransaction",name:"goldtransaction",component:()=>$e(()=>import("./GoldTransaction-1f75e76a.js"),["assets/GoldTransaction-1f75e76a.js","assets/CustomerPicker-9c775d0e.js","assets/CAlert-5fafc70e.js"])}]});class Wn{static getTodayAsString(){return new Date().toISOString().split("T")[0]}static showAlert(e,n,r){e.alertmode=r,e.alertmsg=n,setTimeout(()=>{e.alertmsg="",e.alertmode=""},e.$alertShowDuration??2e3)}static getAsFormattedDate(e){return new Date(e).toLocaleString().toString()}static getNowAsMilliSeconds(){return new Date().getTime()}static capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}static capitalizeFirstLetterOfEveryWordForVariableName(e){if(e){var n=e.replace(/([A-Z])/g," $1");return n.charAt(0).toUpperCase()+n.slice(1)}}static capitalizeFirstLetterOfEveryWord(e){const n=e.split(" ");for(let r=0;r<n.length;r++)n[r]=Wn.capitalizeFirstLetter(n[r]);return n.join(" ")}static doConvert(e){if(!e)return"NA";e=Number(e.toFixed(3));var n=["","thousand","million","billion","trillion"],r=["zero","one","two","three","four","five","six","seven","eight","nine"],s=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],i=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if(e=e.toString(),e=e.replace(/[\, ]/g,""),e!=parseFloat(e))return"not a number ";var o=e.indexOf(".");if(o==-1&&(o=e.length),o>15)return"too big";for(var l=e.split(""),c="",h=0,g=0;g<o;g++)(o-g)%3==2?l[g]=="1"?(c+=s[Number(l[g+1])]+" ",g++,h=1):l[g]!=0&&(c+=i[l[g]-2]+" ",h=1):l[g]!=0&&(c+=r[l[g]]+" ",(o-g)%3==0&&(c+="hundred "),h=1),(o-g)%3==1&&(h&&(c+=n[(o-g-1)/3]+" "),h=0);if(o!=e.length){var b=e.length;c+="point ";for(var g=o+1;g<b;g++)c+=r[l[g]]+" "}return Wn.capitalizeFirstLetterOfEveryWord(c.replace(/\s+/g," "))}static getAsFormattedAmount(e){return e?e.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}):"-"}}class wb{static generateId(e){return e+"-"+new Date().getTime().toString()+parseInt(Math.random()*1e4)}static generateInvoiceNumber(){return this.generateId("INV")}static generateReceiptNumber(){return this.generateId("PMT")}static generateGoldReceiptNumber(){return this.generateId("GLD")}static generateQutationNumber(){return this.generateId("TMP")}}/**
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
 */const _u=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ag=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,g=i>>2,b=(i&3)<<4|l>>4;let A=(l&15)<<2|h>>6,k=h&63;c||(k=64,o||(A=64)),r.push(n[g],n[b],n[A],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_u(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ag(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const b=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||b==null)throw new lg;const A=i<<2|l>>4;if(r.push(A),h!==64){const k=l<<4&240|h>>2;if(r.push(k),b!==64){const j=h<<6&192|b;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cg=function(t){const e=_u(t);return vu.encodeByteArray(e,!0)},Ds=function(t){return cg(t).replace(/\./g,"")},wu=function(t){try{return vu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ug(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dg=()=>ug().__FIREBASE_DEFAULTS__,hg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wu(t[1]);return e&&JSON.parse(e)},Mo=()=>{try{return dg()||hg()||fg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bu=t=>{var e,n;return(n=(e=Mo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pg=t=>{const e=bu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Eu=()=>{var t;return(t=Mo())===null||t===void 0?void 0:t.config},Iu=t=>{var e;return(e=Mo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Ds(JSON.stringify(n)),Ds(JSON.stringify(o)),l].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function _g(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wg(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bg(){try{return typeof indexedDB=="object"}catch{return!1}}function Eg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ig="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ig,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Tg(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,l,r)}}function Tg(t,e){return t.replace(Sg,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Sg=/\{\$([^}]+)}/g;function Ag(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ml(i)&&ml(o)){if(!xs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ml(t){return t!==null&&typeof t=="object"}/**
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
 */function Br(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ur(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Cg(t,e){const n=new Rg(t,e);return n.subscribe.bind(n)}class Rg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Og(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xi),s.error===void 0&&(s.error=xi),s.complete===void 0&&(s.complete=xi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Og(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xi(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class Pg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dg(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kg(t){return t===ln?void 0:t}function Dg(t){return t.instantiationMode==="EAGER"}/**
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
 */class xg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const Ng={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Lg=me.INFO,$g={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Mg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$g[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uo{constructor(e){this.name=e,this._logLevel=Lg,this._logHandler=Mg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ng[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const Ug=(t,e)=>e.some(n=>t instanceof n);let gl,yl;function Fg(){return gl||(gl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vg(){return yl||(yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tu=new WeakMap,io=new WeakMap,Su=new WeakMap,Ni=new WeakMap,Fo=new WeakMap;function jg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Jt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tu.set(n,t)}).catch(()=>{}),Fo.set(e,t),e}function Bg(t){if(io.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});io.set(t,e)}let oo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return io.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Su.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qg(t){oo=t(oo)}function Hg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Li(this),e,...n);return Su.set(r,e.sort?e.sort():[e]),Jt(r)}:Vg().includes(t)?function(...e){return t.apply(Li(this),e),Jt(Tu.get(this))}:function(...e){return Jt(t.apply(Li(this),e))}}function zg(t){return typeof t=="function"?Hg(t):(t instanceof IDBTransaction&&Bg(t),Ug(t,Fg())?new Proxy(t,oo):t)}function Jt(t){if(t instanceof IDBRequest)return jg(t);if(Ni.has(t))return Ni.get(t);const e=zg(t);return e!==t&&(Ni.set(t,e),Fo.set(e,t)),e}const Li=t=>Fo.get(t);function Wg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Jt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Jt(o.result),c.oldVersion,c.newVersion,Jt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Kg=["get","getKey","getAll","getAllKeys","count"],Gg=["put","add","delete","clear"],$i=new Map;function _l(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Gg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kg.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return $i.set(e,i),i}qg(t=>({...t,get:(e,n,r)=>_l(e,n)||t.get(e,n,r),has:(e,n)=>!!_l(e,n)||t.has(e,n)}));/**
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
 */class Yg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ao="@firebase/app",vl="0.9.10";/**
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
 */const _n=new Uo("@firebase/app"),Qg="@firebase/app-compat",Xg="@firebase/analytics-compat",Zg="@firebase/analytics",ey="@firebase/app-check-compat",ty="@firebase/app-check",ny="@firebase/auth",ry="@firebase/auth-compat",sy="@firebase/database",iy="@firebase/database-compat",oy="@firebase/functions",ay="@firebase/functions-compat",ly="@firebase/installations",cy="@firebase/installations-compat",uy="@firebase/messaging",dy="@firebase/messaging-compat",hy="@firebase/performance",fy="@firebase/performance-compat",py="@firebase/remote-config",my="@firebase/remote-config-compat",gy="@firebase/storage",yy="@firebase/storage-compat",_y="@firebase/firestore",vy="@firebase/firestore-compat",wy="firebase",by="9.22.0";/**
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
 */const lo="[DEFAULT]",Ey={[ao]:"fire-core",[Qg]:"fire-core-compat",[Zg]:"fire-analytics",[Xg]:"fire-analytics-compat",[ty]:"fire-app-check",[ey]:"fire-app-check-compat",[ny]:"fire-auth",[ry]:"fire-auth-compat",[sy]:"fire-rtdb",[iy]:"fire-rtdb-compat",[oy]:"fire-fn",[ay]:"fire-fn-compat",[ly]:"fire-iid",[cy]:"fire-iid-compat",[uy]:"fire-fcm",[dy]:"fire-fcm-compat",[hy]:"fire-perf",[fy]:"fire-perf-compat",[py]:"fire-rc",[my]:"fire-rc-compat",[gy]:"fire-gcs",[yy]:"fire-gcs-compat",[_y]:"fire-fst",[vy]:"fire-fst-compat","fire-js":"fire-js",[wy]:"fire-js-all"};/**
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
 */const Ns=new Map,co=new Map;function Iy(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(co.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;co.set(e,t);for(const n of Ns.values())Iy(n,t);return!0}function Vo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ty={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qt=new jr("app","Firebase",Ty);/**
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
 */class Sy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const er=by;function Au(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});if(n||(n=Eu()),!n)throw Qt.create("no-options");const i=Ns.get(s);if(i){if(xs(n,i.options)&&xs(r,i.config))return i;throw Qt.create("duplicate-app",{appName:s})}const o=new xg(s);for(const c of co.values())o.addComponent(c);const l=new Sy(n,r,o);return Ns.set(s,l),l}function Cu(t=lo){const e=Ns.get(t);if(!e&&t===lo&&Eu())return Au();if(!e)throw Qt.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let s=(r=Ey[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(l.join(" "));return}Kn(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ay="firebase-heartbeat-database",Cy=1,Or="firebase-heartbeat-store";let Mi=null;function Ru(){return Mi||(Mi=Wg(Ay,Cy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Or)}}}).catch(t=>{throw Qt.create("idb-open",{originalErrorMessage:t.message})})),Mi}async function Ry(t){try{return await(await Ru()).transaction(Or).objectStore(Or).get(Ou(t))}catch(e){if(e instanceof Ut)_n.warn(e.message);else{const n=Qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function wl(t,e){try{const r=(await Ru()).transaction(Or,"readwrite");await r.objectStore(Or).put(e,Ou(t)),await r.done}catch(n){if(n instanceof Ut)_n.warn(n.message);else{const r=Qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function Ou(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Oy=1024,Py=30*24*60*60*1e3;class ky{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Py}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bl(),{heartbeatsToSend:n,unsentEntries:r}=Dy(this._heartbeatsCache.heartbeats),s=Ds(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bl(){return new Date().toISOString().substring(0,10)}function Dy(t,e=Oy){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),El(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),El(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bg()?Eg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ry(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function El(t){return Ds(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ny(t){Kn(new yn("platform-logger",e=>new Yg(e),"PRIVATE")),Kn(new yn("heartbeat",e=>new ky(e),"PRIVATE")),Xt(ao,vl,t),Xt(ao,vl,"esm2017"),Xt("fire-js","")}Ny("");var Ly="firebase",$y="9.22.0";/**
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
 */Xt(Ly,$y,"app");/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let tr="9.22.0";/**
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
 */const Gn=new Uo("@firebase/firestore");function vn(t,...e){if(Gn.logLevel<=me.DEBUG){const n=e.map(jo);Gn.debug(`Firestore (${tr}): ${t}`,...n)}}function ci(t,...e){if(Gn.logLevel<=me.ERROR){const n=e.map(jo);Gn.error(`Firestore (${tr}): ${t}`,...n)}}function Pu(t,...e){if(Gn.logLevel<=me.WARN){const n=e.map(jo);Gn.warn(`Firestore (${tr}): ${t}`,...n)}}function jo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: `+t;throw ci(e),new Error(e)}function rt(t,e){t||_e()}function qr(t,e){return t}/**
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
 */const Il="ok",Bo="cancelled",Un="unknown",Z="invalid-argument",ku="deadline-exceeded",Du="not-found",My="already-exists",xu="permission-denied",Ls="unauthenticated",Nu="resource-exhausted",wn="failed-precondition",qo="aborted",Lu="out-of-range",Ho="unimplemented",$u="internal",Mu="unavailable",Uy="data-loss";class Y extends Ut{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zo{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Uu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class Vy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jy{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(rt(typeof e.accessToken=="string"),new Uu(e.accessToken,new Je(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class By{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class qy{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new By(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zy{constructor(e){this.l=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(rt(typeof e.token=="string"),new Hy(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class Wy{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Pr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pr&&e.projectId===this.projectId&&e.database===this.database}}class kr{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(),r===void 0?r=e.length-n:r>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends kr{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(Z,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const Ky=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends kr{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return Ky.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(Z,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(Z,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(Z,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(Z,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class Fe{constructor(e){this.path=e}static fromPath(e){return new Fe(xe.fromString(e))}static fromName(e){return new Fe(xe.fromString(e).popFirst(5))}static empty(){return new Fe(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fe(new xe(e.slice()))}}/**
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
 */function Fu(t,e,n){if(!n)throw new Y(Z,`Function ${t}() cannot be called with an empty ${e}.`)}function Tl(t){if(!Fe.isDocumentKey(t))throw new Y(Z,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sl(t){if(Fe.isDocumentKey(t))throw new Y(Z,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ui(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function Hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(Z,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ui(t);throw new Y(Z,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Gy(t,e){if(e<=0)throw new Y(Z,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Vu(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let as=null;function Yy(){return as===null?as=268435456+Math.round(2147483648*Math.random()):as++,"0x"+as.toString(16)}/**
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
 */function ju(t){return t==null}function $s(t){return t===0&&1/t==-1/0}/**
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
 */const Jy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Al,de;function Cl(t){if(t===void 0)return ci("RPC_ERROR","HTTP error has no status"),Un;switch(t){case 200:return Il;case 400:return wn;case 401:return Ls;case 403:return xu;case 404:return Du;case 409:return qo;case 416:return Lu;case 429:return Nu;case 499:return Bo;case 500:return Un;case 501:return Ho;case 503:return Mu;case 504:return ku;default:return t>=200&&t<300?Il:t>=400&&t<500?wn:t>=500&&t<600?$u:Un}}/**
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
 */(de=Al||(Al={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";class Qy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.m=n+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,n,r,s,i){const o=Yy(),l=this.I(e,n);vn("RestConnection",`Sending RPC '${e}' ${o}:`,l,r);const c={};return this.T(c,s,i),this.A(e,l,c,r).then(h=>(vn("RestConnection",`Received RPC '${e}' ${o}: `,h),h),h=>{throw Pu("RestConnection",`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",r),h})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}T(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+tr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}I(e,n){const r=Jy[e];return`${this.m}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){var i;const o=JSON.stringify(s);let l;try{l=await this.P(n,{method:"POST",headers:r,body:o})}catch(c){const h=c;throw new Y(Cl(h.status),"Request failed with error: "+h.statusText)}if(!l.ok){let c=await l.json();Array.isArray(c)&&(c=c[0]);const h=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new Y(Cl(l.status),`Request failed with error: ${h??l.statusText}`)}return l.json()}}/**
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
 */function Xy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Zy{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Xy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Me(t,e){return t<e?-1:t>e?1:0}function Bu(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */function Rl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class e_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new e_("Invalid base64 string: "+s):s}}(e);return new xt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const t_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(t){if(rt(!!t),typeof t=="string"){let e=0;const n=t_.exec(t);if(rt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
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
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(Z,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(Z,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(Z,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(Z,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function qu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hu(t){const e=t.mapValue.fields.__previous_value__;return qu(e)?Hu(e):e}function xr(t){const e=bn(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */const ls={fields:{__type__:{stringValue:"__max__"}}};function En(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qu(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:_e()}function Ms(t,e){if(t===e)return!0;const n=En(t);if(n!==En(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xr(t).isEqual(xr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=bn(r.timestampValue),o=bn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Dr(r.bytesValue).isEqual(Dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return De(r.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(r.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return De(r.integerValue)===De(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=De(r.doubleValue),o=De(s.doubleValue);return i===o?$s(i)===$s(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Bu(t.arrayValue.values||[],e.arrayValue.values||[],Ms);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Rl(i)!==Rl(o))return!1;for(const l in i)if(i.hasOwnProperty(l)&&(o[l]===void 0||!Ms(i[l],o[l])))return!1;return!0}(t,e);default:return _e()}}function Nr(t,e){return(t.values||[]).find(n=>Ms(n,e))!==void 0}function Us(t,e){if(t===e)return 0;const n=En(t),r=En(e);if(n!==r)return Me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=De(s.integerValue||s.doubleValue),l=De(i.integerValue||i.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(t,e);case 3:return Ol(t.timestampValue,e.timestampValue);case 4:return Ol(xr(t),xr(e));case 5:return Me(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Dr(s),l=Dr(i);return o.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),l=i.split("/");for(let c=0;c<o.length&&c<l.length;c++){const h=Me(o[c],l[c]);if(h!==0)return h}return Me(o.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=Me(De(s.latitude),De(i.latitude));return o!==0?o:Me(De(s.longitude),De(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],l=i.values||[];for(let c=0;c<o.length&&c<l.length;++c){const h=Us(o[c],l[c]);if(h)return h}return Me(o.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===ls&&i===ls)return 0;if(s===ls)return 1;if(i===ls)return-1;const o=s.fields||{},l=Object.keys(o),c=i.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let g=0;g<l.length&&g<h.length;++g){const b=Me(l[g],h[g]);if(b!==0)return b;const A=Us(o[l[g]],c[h[g]]);if(A!==0)return A}return Me(l.length,h.length)}(t.mapValue,e.mapValue);default:throw _e()}}function Ol(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Me(t,e);const n=bn(t),r=bn(e),s=Me(n.seconds,r.seconds);return s!==0?s:Me(n.nanos,r.nanos)}function Pl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zu(t){return!!t&&"arrayValue"in t}function kl(t){return!!t&&"nullValue"in t}function Dl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ui(t){return!!t&&"mapValue"in t}function gr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class xl{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class Wu{}class gt extends Wu{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new n_(e,n,r):n==="array-contains"?new i_(e,r):n==="in"?new o_(e,r):n==="not-in"?new a_(e,r):n==="array-contains-any"?new l_(e,r):new gt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new r_(e,r):new s_(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Us(n,this.value)):n!==null&&En(this.value)===En(n)&&this.matchesComparison(Us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wr extends Wu{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Wr(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class n_ extends gt{constructor(e,n,r){super(e,n,r),this.key=Fe.fromName(r.referenceValue)}matches(e){const n=Fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class r_ extends gt{constructor(e,n){super(e,"in",n),this.keys=Ku("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class s_ extends gt{constructor(e,n){super(e,"not-in",n),this.keys=Ku("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ku(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Fe.fromName(r.referenceValue))}class i_ extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zu(n)&&Nr(n.arrayValue,this.value)}}class o_ extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Nr(this.value.arrayValue,n)}}class a_ extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Nr(this.value.arrayValue,n)}}class l_ extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Nr(this.value.arrayValue,r))}}/**
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
 */class Fs{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new Fs(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new Fs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cs(this.root,e,this.comparator,!1)}getReverseIterator(){return new cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cs(this.root,e,this.comparator,!0)}}class cs{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=s??Ve.EMPTY,this.right=i??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ve(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Vs{constructor(e){this.comparator=e,this.data=new Fs(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nl(this.data.getIterator())}getIteratorFrom(e){return new Nl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Vs(this.comparator);return n.data=e,n}}class Nl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new In([])}unionWith(e){let n=new Vs(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new In(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bu(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ui(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gr(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=gr(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ui(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ms(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ui(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new nt(gr(this.value))}}/**
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
 */class c_{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.S=null}}function Ll(t,e=null,n=[],r=[],s=null,i=null,o=null){return new c_(t,e,n,r,s,i,o)}/**
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
 */class di{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function Wo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function u_(t){return t.collectionGroup!==null}function $l(t){const e=qr(t);if(e.q===null){e.q=[];const n=hi(e),r=Wo(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new yr(n)),e.q.push(new yr(tt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new yr(tt.keyField(),i))}}}return e.q}function d_(t){const e=qr(t);if(!e.O)if(e.limitType==="F")e.O=Ll(e.path,e.collectionGroup,$l(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of $l(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new yr(i.field,o))}const r=e.endAt?new xl(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new xl(e.startAt.position,e.startAt.inclusive):null;e.O=Ll(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}function uo(t,e){e.getFirstInequalityField(),hi(t);const n=t.filters.concat([e]);return new di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function h_(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!$s(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(r)?"-0":r}}(t,e)}/**
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
 */class fi{constructor(){this._=void 0}}class f_ extends fi{}class p_ extends fi{constructor(e){super(),this.elements=e}}class m_ extends fi{constructor(e){super(),this.elements=e}}class g_ extends fi{constructor(e,n){super(),this.serializer=e,this.k=n}}class Et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class pi{}class Gu extends pi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ko extends pi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Yu extends pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ju extends pi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const y_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),__=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),v_=(()=>({and:"AND",or:"OR"}))();class w_{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ho(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function E_(t,e){return ho(t,e.toTimestamp())}function _r(t){return rt(!!t),Oe.fromTimestamp(function(e){const n=bn(e);return new st(n.seconds,n.nanos)}(t))}function Go(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function js(t,e){return Go(t.databaseId,e.path)}function fo(t,e){const n=function(s){const i=xe.fromString(s);return rt(Zu(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(Z,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(Z,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Fe((rt((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Ml(t,e){return Go(t.databaseId,e)}function Qu(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ul(t,e,n){return{name:js(t,e),fields:n.value.mapValue.fields}}function I_(t,e){return"found"in e?function(n,r){rt(!!r.found),r.found.name,r.found.updateTime;const s=fo(n,r.found.name),i=_r(r.found.updateTime),o=r.found.createTime?_r(r.found.createTime):Oe.min(),l=new nt({mapValue:{fields:r.found.fields}});return wt.newFoundDocument(s,i,o,l)}(t,e):"missing"in e?function(n,r){rt(!!r.missing),rt(!!r.readTime);const s=fo(n,r.missing),i=_r(r.readTime);return wt.newNoDocument(s,i)}(t,e):_e()}function T_(t,e){let n;if(e instanceof Gu)n={update:Ul(t,e.key,e.value)};else if(e instanceof Yu)n={delete:js(t,e.key)};else if(e instanceof Ko)n={update:Ul(t,e.key,e.data),updateMask:O_(e.fieldMask)};else{if(!(e instanceof Ju))return _e();n={verify:js(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof f_)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof p_)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof m_)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof g_)return{fieldPath:i.field.canonicalString(),increment:o.k};throw _e()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:E_(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:_e()}(t,e.precondition)),n}function S_(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ml(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ml(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Xu(Wr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:Dn(g.field),direction:A_(g.dir)}}(h))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,h){return c.useProto3Json||ju(h)?h:{value:h}}(t,e.limit);var l;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(l=e.startAt).inclusive,values:l.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function A_(t){return y_[t]}function C_(t){return __[t]}function R_(t){return v_[t]}function Dn(t){return{fieldPath:t.canonicalString()}}function Xu(t){return t instanceof gt?function(e){if(e.op==="=="){if(Dl(e.value))return{unaryFilter:{field:Dn(e.field),op:"IS_NAN"}};if(kl(e.value))return{unaryFilter:{field:Dn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dl(e.value))return{unaryFilter:{field:Dn(e.field),op:"IS_NOT_NAN"}};if(kl(e.value))return{unaryFilter:{field:Dn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dn(e.field),op:C_(e.op),value:e.value}}}(t):t instanceof Wr?function(e){const n=e.getFilters().map(r=>Xu(r));return n.length===1?n[0]:{compositeFilter:{op:R_(e.op),filters:n}}}(t):_e()}function O_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Yo(t){return new w_(t,!0)}/**
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
 */class ed{constructor(e,n,r=1e3,s=1.5,i=6e4){this.C=e,this.timerId=n,this.M=r,this.L=s,this.U=i,this.j=0,this.B=null,this.W=Date.now(),this.reset()}reset(){this.j=0}G(){this.j=this.U}K(e){this.cancel();const n=Math.floor(this.j+this.Y()),r=Math.max(0,Date.now()-this.W),s=Math.max(0,n-r);s>0&&vn("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.j} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.B=this.C.enqueueAfterDelay(this.timerId,s,()=>(this.W=Date.now(),e())),this.j*=this.L,this.j<this.M&&(this.j=this.M),this.j>this.U&&(this.j=this.U)}H(){this.B!==null&&(this.B.skipDelay(),this.B=null)}cancel(){this.B!==null&&(this.B.cancel(),this.B=null)}Y(){return(Math.random()-.5)*this.j}}/**
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
 */class P_ extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J=!1}X(){if(this.J)throw new Y(wn,"The client has already been terminated.")}v(e,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ls&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(Un,s.toString())})}R(e,n,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ls&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(Un,i.toString())})}terminate(){this.J=!0}}async function td(t,e){const n=qr(t),r=Qu(n.serializer)+"/documents",s={writes:e.map(i=>T_(n.serializer,i))};await n.v("Commit",r,s)}async function nd(t,e){const n=qr(t),r=Qu(n.serializer)+"/documents",s={documents:e.map(c=>js(n.serializer,c))},i=await n.R("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(c=>{const h=I_(n.serializer,c);o.set(h.key.toString(),h)});const l=[];return e.forEach(c=>{const h=o.get(c.toString());rt(!!h),l.push(h)}),l}async function k_(t,e){const n=qr(t),r=S_(n.serializer,d_(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,l){const c=fo(i,o.name),h=_r(o.updateTime),g=o.createTime?_r(o.createTime):Oe.min(),b=new nt({mapValue:{fields:o.fields}}),A=wt.newFoundDocument(c,h,g,b);return l&&A.setHasCommittedMutations(),l?A.setHasCommittedMutations():A}(n.serializer,s.document,void 0))}/**
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
 */const vr=new Map;function mi(t){if(t._terminated)throw new Y(wn,"The client has already been terminated.");if(!vr.has(t)){vn("ComponentProvider","Initializing Datastore");const i=function(c){return new Qy(c,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new Wy(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Vu(s.experimentalLongPollingOptions),s.useFetchStreams))),o=Yo(t._databaseId),l=function(c,h,g,b){return new P_(c,h,g,b)}(t._authCredentials,t._appCheckCredentials,i,o);vr.set(t,l)}var e,n,r,s;/**
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
*/return vr.get(t)}class Fl{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(Z,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(Z,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,i,o,l){if(i===!0&&l===!0)throw new Y(Z,`${s} and ${o} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(Z,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Kr{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(wn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(wn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Fy;switch(n.type){case"firstParty":return new qy(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Y(Z,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vr.get(e);n&&(vn("ComponentProvider","Removing Datastore"),vr.delete(e),n.terminate())}(this),Promise.resolve()}}function D_(t,e){const n=typeof t=="object"?t:Cu(),r=typeof t=="string"?t:e||"(default)",s=Vo(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=pg("firestore");i&&x_(s,...i)}return s}function x_(t,e,n,r={}){var s;const i=(t=Hr(t,Kr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Pu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,l;if(typeof r.mockUserToken=="string")o=r.mockUserToken,l=Je.MOCK_USER;else{o=gg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y(Z,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Je(c)}t._authCredentials=new Vy(new Uu(o,l))}}/**
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
 */class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}}class nn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nn(this.firestore,e,this._query)}}class Zt extends nn{constructor(e,n,r){super(e,n,new di(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new Fe(e))}withConverter(e){return new Zt(this.firestore,e,this._path)}}function Se(t,e,...n){if(t=je(t),Fu("collection","path",e),t instanceof Kr){const r=xe.fromString(e,...n);return Sl(r),new Zt(t,null,r)}{if(!(t instanceof Qe||t instanceof Zt))throw new Y(Z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Sl(r),new Zt(t.firestore,null,r)}}function ke(t,e,...n){if(t=je(t),arguments.length===1&&(e=Zy.N()),Fu("doc","path",e),t instanceof Kr){const r=xe.fromString(e,...n);return Tl(r),new Qe(t,null,new Fe(r))}{if(!(t instanceof Qe||t instanceof Zt))throw new Y(Z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Tl(r),new Qe(t.firestore,t instanceof Zt?t.converter:null,new Fe(r))}}/**
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
 */class Yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yn(xt.fromBase64String(e))}catch(n){throw new Y(Z,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(Z,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jo{constructor(e){this._methodName=e}}/**
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
 */class Qo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(Z,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(Z,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
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
 */const N_=/^__.*__$/;class L_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ko(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gu(e,this.data,n,this.fieldTransforms)}}class rd{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ko(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class Xo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new Xo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.it(e),s}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.nt({path:r,st:!1});return s.tt(),s}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return Bs(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(sd(this.et)&&N_.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class $_{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yo(e)}ft(e,n,r,s=!1){return new Xo({et:e,methodName:n,lt:r,path:tt.emptyPath(),st:!1,ht:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zo(t){const e=t._freezeSettings(),n=Yo(t._databaseId);return new $_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function id(t,e,n,r,s,i={}){const o=t.ft(i.merge||i.mergeFields?2:0,e,n,s);ea("Data must be an object, but it was:",o,r);const l=od(r,o);let c,h;if(i.merge)c=new In(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const g=[];for(const b of i.mergeFields){const A=po(e,b,n);if(!o.contains(A))throw new Y(Z,`Field '${A}' is specified in your field mask but missing from your input data.`);ld(g,A)||g.push(A)}c=new In(g),h=o.fieldTransforms.filter(b=>c.covers(b.field))}else c=null,h=o.fieldTransforms;return new L_(new nt(l),c,h)}class yi extends Jo{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e.ct(`${this._methodName}() can only appear at the top level of your update data`):e.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yi}}function M_(t,e,n,r){const s=t.ft(1,e,n);ea("Data must be an object, but it was:",s,r);const i=[],o=nt.empty();zr(r,(c,h)=>{const g=ta(e,c,n);h=je(h);const b=s.ot(g);if(h instanceof yi)i.push(g);else{const A=Gr(h,b);A!=null&&(i.push(g),o.set(g,A))}});const l=new In(i);return new rd(o,l,s.fieldTransforms)}function U_(t,e,n,r,s,i){const o=t.ft(1,e,n),l=[po(e,r,n)],c=[s];if(i.length%2!=0)throw new Y(Z,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<i.length;A+=2)l.push(po(e,i[A])),c.push(i[A+1]);const h=[],g=nt.empty();for(let A=l.length-1;A>=0;--A)if(!ld(h,l[A])){const k=l[A];let j=c[A];j=je(j);const K=o.ot(k);if(j instanceof yi)h.push(k);else{const X=Gr(j,K);X!=null&&(h.push(k),g.set(k,X))}}const b=new In(h);return new rd(g,b,o.fieldTransforms)}function F_(t,e,n,r=!1){return Gr(n,t.ft(r?4:3,e))}function Gr(t,e){if(ad(t=je(t)))return ea("Unsupported field value:",e,t),od(t,e);if(t instanceof Jo)return function(n,r){if(!sd(r.et))throw r.ct(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ct(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.st&&e.et!==4)throw e.ct("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let l=Gr(o,r.ut(i));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return h_(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=st.fromDate(n);return{timestampValue:ho(r.serializer,s)}}if(n instanceof st){const s=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ho(r.serializer,s)}}if(n instanceof Qo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Yn)return{bytesValue:b_(r.serializer,n._byteString)};if(n instanceof Qe){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Go(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ct(`Unsupported field value: ${ui(n)}`)}(t,e)}function od(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,s)=>{const i=Gr(s,e.rt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ad(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Qo||t instanceof Yn||t instanceof Qe||t instanceof Jo)}function ea(t,e,n){if(!ad(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ui(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function po(t,e,n){if((e=je(e))instanceof gi)return e._internalPath;if(typeof e=="string")return ta(t,e);throw Bs("Field path arguments must be of type string or ",t,!1,void 0,n)}const V_=new RegExp("[~\\*/\\[\\]]");function ta(t,e,n){if(e.search(V_)>=0)throw Bs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gi(...e.split("."))._internalPath}catch{throw Bs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bs(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Y(Z,l+t+c)}function ld(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class qs{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(na("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cd extends qs{data(){return super.data()}}class j_{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function na(t,e){return typeof e=="string"?ta(t,e):e instanceof gi?e._internalPath:e._delegate._internalPath}/**
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
 */class ra{}class sa extends ra{}function Nt(t,e,...n){let r=[];e instanceof ra&&r.push(e),r=r.concat(n),function(s){const i=s.filter(l=>l instanceof ia).length,o=s.filter(l=>l instanceof _i).length;if(i>1||i>0&&o>0)throw new Y(Z,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class _i extends sa{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _i(e,n,r)}_apply(e){const n=this._parse(e);return ud(e._query,n),new nn(e.firestore,e.converter,uo(e._query,n))}_parse(e){const n=Zo(e.firestore);return function(s,i,o,l,c,h,g){let b;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Y(Z,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){jl(g,h);const A=[];for(const k of g)A.push(Vl(l,s,k));b={arrayValue:{values:A}}}else b=Vl(l,s,g)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||jl(g,h),b=F_(o,i,g,h==="in"||h==="not-in");return gt.create(c,h,b)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function vi(t,e,n){const r=e,s=na("where",t);return _i._create(s,r,n)}class ia extends ra{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ia(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const l of o)ud(i,l),i=uo(i,l)}(e._query,n),new nn(e.firestore,e.converter,uo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class oa extends sa{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new oa(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new Y(Z,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Y(Z,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new yr(s,i);return function(l,c){if(Wo(l)===null){const h=hi(l);h!==null&&dd(l,h,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new nn(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new di(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Yr(t,e="asc"){const n=e,r=na("orderBy",t);return oa._create(r,n)}class aa extends sa{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new aa(e,n,r)}_apply(e){return new nn(e.firestore,e.converter,function(n,r,s){return new di(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,s,n.startAt,n.endAt)}(e._query,this._limit,this._limitType))}}function wi(t){return Gy("limit",t),aa._create("limit",t,"F")}function Vl(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new Y(Z,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!u_(e)&&n.indexOf("/")!==-1)throw new Y(Z,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!Fe.isDocumentKey(r))throw new Y(Z,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pl(t,new Fe(r))}if(n instanceof Qe)return Pl(t,n._key);throw new Y(Z,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ui(n)}.`)}function jl(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(Z,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ud(t,e){if(e.isInequality()){const r=hi(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new Y(Z,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Wo(t);i!==null&&dd(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(Z,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(Z,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function dd(t,e,n){if(!n.isEqual(e))throw new Y(Z,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function hd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class la extends class{convertValue(e,n="none"){switch(En(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _e()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Qo(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xr(e));default:return null}}convertTimestamp(e){const n=bn(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);rt(Zu(r));const s=new Pr(r.get(1),r.get(3)),i=new Fe(r.popFirst(5));return s.isEqual(n)||ci(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function At(t){const e=mi((t=Hr(t,Qe)).firestore),n=new la(t.firestore);return nd(e,[t._key]).then(r=>{rt(r.length===1);const s=r[0];return new qs(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)})}function Lt(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new Y(Ho,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Hr(t,nn))._query);const e=mi(t.firestore),n=new la(t.firestore);return k_(e,t._query).then(r=>{const s=r.map(i=>new cd(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new j_(t,s)})}function Sn(t,e,n){const r=hd((t=Hr(t,Qe)).converter,e,n),s=id(Zo(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return td(mi(t.firestore),[s.toMutation(t._key,Et.none())])}function us(t,e){if((t=je(t)).firestore!==e)throw new Y(Z,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class B_{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Y(Z,"Firestore transactions require all reads to be executed before all writes.");const n=await nd(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Yu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=Fe.fromPath(r);this.mutations.push(new Ju(s,this.precondition(s)))}),await td(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw _e();n=Oe.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new Y(qo,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Oe.min())?Et.exists(!1):Et.updateTime(n):Et.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Oe.min()))throw new Y(Z,"Can't update a document that doesn't exist.");return Et.updateTime(n)}return Et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */const q_={maxAttempts:5};/**
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
 */class H_{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.yt=r.maxAttempts,this.gt=new ed(this.asyncQueue,"transaction_retry")}run(){this.yt-=1,this._t()}_t(){this.gt.K(async()=>{const e=new B_(this.datastore),n=this.vt(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.bt(s)}))}).catch(r=>{this.bt(r)})})}vt(e){try{const n=this.updateFunction(e);return!ju(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}bt(e){this.yt>0&&this.Et(e)?(this.yt-=1,this.asyncQueue.enqueueAndForget(()=>(this._t(),Promise.resolve()))):this.deferred.reject(e)}Et(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!function(r){switch(r){default:return _e();case Bo:case Un:case ku:case Nu:case $u:case Mu:case Ls:return!1;case Z:case Du:case My:case xu:case wn:case qo:case Lu:case Ho:case Uy:return!0}}(n)}return!1}}/**
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
 */function Fi(){return typeof document<"u"?document:null}/**
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
 */class ca{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ca(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(Bo,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class z_{constructor(){this.It=Promise.resolve(),this.Tt=[],this.At=!1,this.Rt=[],this.Pt=null,this.Vt=!1,this.$t=!1,this.Nt=[],this.gt=new ed(this,"async_queue_retry"),this.Dt=()=>{const n=Fi();n&&vn("AsyncQueue","Visibility state changed to "+n.visibilityState),this.gt.H()};const e=Fi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Dt)}get isShuttingDown(){return this.At}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ft(),this.xt(e)}enterRestrictedMode(e){if(!this.At){this.At=!0,this.$t=e||!1;const n=Fi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Dt)}}enqueue(e){if(this.Ft(),this.At)return new Promise(()=>{});const n=new zo;return this.xt(()=>this.At&&this.$t?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Tt.push(e),this.St()))}async St(){if(this.Tt.length!==0){try{await this.Tt[0](),this.Tt.shift(),this.gt.reset()}catch(e){if(!function(n){return n.name==="IndexedDbTransactionError"}(e))throw e;vn("AsyncQueue","Operation failed with retryable error: "+e)}this.Tt.length>0&&this.gt.K(()=>this.St())}}xt(e){const n=this.It.then(()=>(this.Vt=!0,e().catch(r=>{this.Pt=r,this.Vt=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw ci("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Vt=!1,r))));return this.It=n,n}enqueueAfterDelay(e,n,r){this.Ft(),this.Nt.indexOf(e)>-1&&(n=0);const s=ca.createAndSchedule(this,e,n,r,i=>this.qt(i));return this.Rt.push(s),s}Ft(){this.Pt&&_e()}verifyOperationInProgress(){}async Ot(){let e;do e=this.It,await e;while(e!==this.It)}kt(e){for(const n of this.Rt)if(n.timerId===e)return!0;return!1}Ct(e){return this.Ot().then(()=>{this.Rt.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Rt)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ot()})}Mt(e){this.Nt.push(e)}qt(e){const n=this.Rt.indexOf(e);this.Rt.splice(n,1)}}class W_{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Zo(e)}get(e){const n=us(e,this._firestore),r=new la(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return _e();const i=s[0];if(i.isFoundDocument())return new qs(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new qs(this._firestore,r,n._key,null,n.converter);throw _e()})}set(e,n,r){const s=us(e,this._firestore),i=hd(s.converter,n,r),o=id(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=us(e,this._firestore);let o;return o=typeof(n=je(n))=="string"||n instanceof gi?U_(this._dataReader,"Transaction.update",i._key,n,r,s):M_(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=us(e,this._firestore);return this._transaction.delete(n._key),this}}function K_(t,e,n){const r=mi(t=Hr(t,Kr)),s=Object.assign(Object.assign({},q_),n);(function(o){if(o.maxAttempts<1)throw new Y(Z,"Max attempts must be at least 1")})(s);const i=new zo;return new H_(new z_,r,s,o=>e(new W_(t,o)),i).run(),i.promise}(function(t){tr=t})(`${er}_lite`),Kn(new yn("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Kr(new jy(t.getProvider("auth-internal")),new zy(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new Y(Z,'"projectId" not provided in firebase.initializeApp.');return new Pr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Xt("firestore-lite","3.12.0",""),Xt("firestore-lite","3.12.0","esm2017");class Vi{}Le(Vi,"APPLICATION_SETTINGS","ApplicationSettings"),Le(Vi,"PRODUCT_SETTINGS","ProductSettings"),Le(Vi,"CUSTOMER_SETTINGS","CustomerSettings");class Bl{}Le(Bl,"SUCCESS","Success"),Le(Bl,"ERROR","Error");class Ue{}Le(Ue,"INVOICES","Invoices"),Le(Ue,"SETTINGS","settings"),Le(Ue,"RATES","Rates"),Le(Ue,"CCUSTOMERS","Customers"),Le(Ue,"PRODUCTS","Products"),Le(Ue,"CASH_PAYMENTS","CashPayments"),Le(Ue,"GOLD_PAYMENTS","GoldPayments"),Le(Ue,"USERS","Users"),Le(Ue,"AUDIT","Audit");class ji{}Le(ji,"CASH_TRANSACTION_COLUMNS",[{name:"receiptNumber",show:!0},{name:"paymentDate",show:!0,type:"date"},{name:"customer",show:!0},{name:"amount",show:!0,type:"amount"},{name:"description",show:!0}]),Le(ji,"GOLD_TRANSACTION_COLUMNS",[{name:"receiptNumber",show:!0},{name:"paymentDate",show:!0,type:"date"},{name:"customer",show:!0},{name:"weight",show:!0,type:"amount"},{name:"purity",show:!0,type:"amount"},{name:"pureWeight",show:!0,type:"amount"},{name:"description",show:!0}]),Le(ji,"INVOICES_COLUMNS",[{name:"invoiceNumber",show:!0},{name:"purchaseDate",show:!0,type:"date"},{name:"customer",show:!0},{name:"products",show:!0},{name:"weight",show:!0,type:"amount"},{name:"amount",show:!0,type:"amount"}]);function ua(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G_=fd,pd=new jr("auth","Firebase",fd());/**
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
 */const Hs=new Uo("@firebase/auth");function Y_(t,...e){Hs.logLevel<=me.WARN&&Hs.warn(`Auth (${er}): ${t}`,...e)}function _s(t,...e){Hs.logLevel<=me.ERROR&&Hs.error(`Auth (${er}): ${t}`,...e)}/**
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
 */function mt(t,...e){throw da(t,...e)}function It(t,...e){return da(t,...e)}function J_(t,e,n){const r=Object.assign(Object.assign({},G_()),{[e]:n});return new jr("auth","Firebase",r).create(e,{appName:t.name})}function da(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pd.create(t,...e)}function re(t,e,...n){if(!t)throw da(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _s(e),new Error(e)}function $t(t,e){t||Ot(e)}/**
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
 */function mo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Q_(){return ql()==="http:"||ql()==="https:"}function ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function X_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q_()||_g()||"connection"in navigator)?navigator.onLine:!0}function Z_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,$t(n>e,"Short delay should be less than long delay!"),this.isMobile=yg()||vg()}get(){return X_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ha(t,e){$t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class md{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ev={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tv=new Jr(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return gd(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Br(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),md.fetch()(yd(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function gd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ev),e);try{const s=new nv(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ds(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ds(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ds(t,"user-disabled",o);const g=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw J_(t,g,h);mt(t,g)}}catch(s){if(s instanceof Ut)throw s;mt(t,"network-request-failed",{message:String(s)})}}async function bi(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function yd(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ha(t.config,s):`${t.config.apiScheme}://${s}`}class nv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),tv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ds(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=It(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function rv(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function sv(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iv(t,e=!1){const n=je(t),r=await n.getIdToken(e),s=fa(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wr(Bi(s.auth_time)),issuedAtTime:wr(Bi(s.iat)),expirationTime:wr(Bi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bi(t){return Number(t)*1e3}function fa(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _s("JWT malformed, contained fewer than 3 sections"),null;try{const s=wu(n);return s?JSON.parse(s):(_s("Failed to decode base64 JWT payload"),null)}catch(s){return _s("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ov(t){const e=fa(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&av(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function av({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Lr(t,sv(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dv(i.providerUserInfo):[],l=uv(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),g=c?h:!1,b={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new _d(i.createdAt,i.lastLoginAt),isAnonymous:g};Object.assign(t,b)}async function cv(t){const e=je(t);await zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uv(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dv(t){return t.map(e=>{var{providerId:n}=e,r=ua(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hv(t,e){const n=await gd(t,{},async()=>{const r=Br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=yd(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",md.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ov(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hv(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $r;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
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
 */function jt(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ua(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _d(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iv(this,e)}reload(){return cv(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lr(this,rv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,g;const b=(r=n.displayName)!==null&&r!==void 0?r:void 0,A=(s=n.email)!==null&&s!==void 0?s:void 0,k=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,j=(o=n.photoURL)!==null&&o!==void 0?o:void 0,K=(l=n.tenantId)!==null&&l!==void 0?l:void 0,X=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,G=(h=n.createdAt)!==null&&h!==void 0?h:void 0,ee=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:J,emailVerified:ce,isAnonymous:Ae,providerData:z,stsTokenManager:v}=n;re(J&&v,e,"internal-error");const w=$r.fromJSON(this.name,v);re(typeof J=="string",e,"internal-error"),jt(b,e.name),jt(A,e.name),re(typeof ce=="boolean",e,"internal-error"),re(typeof Ae=="boolean",e,"internal-error"),jt(k,e.name),jt(j,e.name),jt(K,e.name),jt(X,e.name),jt(G,e.name),jt(ee,e.name);const m=new gn({uid:J,auth:e,email:A,emailVerified:ce,displayName:b,isAnonymous:Ae,photoURL:j,phoneNumber:k,tenantId:K,stsTokenManager:w,createdAt:G,lastLoginAt:ee});return z&&Array.isArray(z)&&(m.providerData=z.map(d=>Object.assign({},d))),X&&(m._redirectEventId=X),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new $r;s.updateFromServerResponse(n);const i=new gn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zs(i),i}}/**
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
 */const Hl=new Map;function Pt(t){$t(t instanceof Function,"Expected a class definition");let e=Hl.get(t);return e?($t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hl.set(t,e),e)}/**
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
 */class vd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vd.type="NONE";const zl=vd;/**
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
 */function vs(t,e,n){return`firebase:${t}:${e}:${n}`}class Fn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vs(this.userKey,s.apiKey,i),this.fullPersistenceKey=vs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fn(Pt(zl),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pt(zl);const o=vs(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const g=await h._get(o);if(g){const b=gn._fromJSON(e,g);h!==i&&(l=b),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fn(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Fn(i,e,r))}}/**
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
 */function Wl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ed(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Td(e))return"Blackberry";if(Sd(e))return"Webos";if(pa(e))return"Safari";if((e.includes("chrome/")||bd(e))&&!e.includes("edge/"))return"Chrome";if(Id(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wd(t=ze()){return/firefox\//i.test(t)}function pa(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bd(t=ze()){return/crios\//i.test(t)}function Ed(t=ze()){return/iemobile/i.test(t)}function Id(t=ze()){return/android/i.test(t)}function Td(t=ze()){return/blackberry/i.test(t)}function Sd(t=ze()){return/webos/i.test(t)}function Ei(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fv(t=ze()){var e;return Ei(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pv(){return wg()&&document.documentMode===10}function Ad(t=ze()){return Ei(t)||Id(t)||Sd(t)||Td(t)||/windows phone/i.test(t)||Ed(t)}function mv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Cd(t,e=[]){let n;switch(t){case"Browser":n=Wl(ze());break;case"Worker":n=`${Wl(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${er}/${r}`}async function Rd(t,e){return nr(t,"GET","/v2/recaptchaConfig",Qr(t,e))}function Kl(t){return t!==void 0&&t.enterprise!==void 0}class Od{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function gv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Pd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=It("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gv().appendChild(r)})}function yv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _v="https://www.google.com/recaptcha/enterprise.js?render=",vv="recaptcha-enterprise",wv="NO_RECAPTCHA";class kd{constructor(e){this.type=vv,this.auth=Xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Rd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Od(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Kl(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(wv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Kl(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Pd(_v+l).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Gl(t,e,n,r=!1){const s=new kd(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class bv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Ev{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yl(this),this.idTokenSubscription=new Yl(this),this.beforeStateQueue=new bv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Z_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}async initializeRecaptchaConfig(){const e=await Rd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Od(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new kd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pt(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return re(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Y_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xr(t){return je(t)}class Yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cg(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Iv(t,e){const n=Vo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xs(i,e??{}))return s;mt(s,"already-initialized")}return n.initialize({options:e})}function Tv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Sv(t,e,n){const r=Xr(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Dd(e),{host:o,port:l}=Av(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Cv()}function Dd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Av(t){const e=Dd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jl(o)}}}function Jl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Cv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ma{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}async function Rv(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function qi(t,e){return bi(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
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
 */async function Ov(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function Pv(t,e){return bi(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
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
 */class Mr extends ma{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Mr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Gl(e,r,"signInWithPassword");return qi(e,s)}else return qi(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Gl(e,r,"signInWithPassword");return qi(e,i)}else return Promise.reject(s)});case"emailLink":return Ov(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Rv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pv(e,{idToken:n,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vn(t,e){return bi(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
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
 */const kv="http://localhost";class Tn extends ma{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ua(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Tn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vn(e,n)}buildRequest(){const e={requestUri:kv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Br(n)}return e}}/**
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
 */function Dv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xv(t){const e=cr(ur(t)).link,n=e?cr(ur(e)).deep_link_id:null,r=cr(ur(t)).deep_link_id;return(r?cr(ur(r)).link:null)||r||n||e||t}class ga{constructor(e){var n,r,s,i,o,l;const c=cr(ur(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,g=(r=c.oobCode)!==null&&r!==void 0?r:null,b=Dv((s=c.mode)!==null&&s!==void 0?s:null);re(h&&g&&b,"argument-error"),this.apiKey=h,this.operation=b,this.code=g,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=xv(e);try{return new ga(n)}catch{return null}}}/**
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
 */class rr{constructor(){this.providerId=rr.PROVIDER_ID}static credential(e,n){return Mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ga.parseLink(n);return re(r,"argument-error"),Mr._fromEmailAndCode(e,r.code,r.tenantId)}}rr.PROVIDER_ID="password";rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zr extends xd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ht extends Zr{constructor(){super("facebook.com")}static credential(e){return Tn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
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
 */class zt extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
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
 */class Wt extends Zr{constructor(){super("github.com")}static credential(e){return Tn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
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
 */class Kt extends Zr{constructor(){super("twitter.com")}static credential(e,n){return Tn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
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
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gn._fromIdTokenResponse(e,r,s),o=Ql(r);return new Jn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ql(r);return new Jn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ql(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ws extends Ut{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ws.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ws(e,n,r,s)}}function Nd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ws._fromErrorAndOperation(t,i,e,r):i})}async function Nv(t,e,n=!1){const r=await Lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",r)}/**
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
 */async function Lv(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Lr(t,Nd(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=fa(i.idToken);re(o,r,"internal-error");const{sub:l}=o;return re(t.uid===l,r,"user-mismatch"),Jn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),i}}/**
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
 */async function Ld(t,e,n=!1){const r="signIn",s=await Nd(t,r,e),i=await Jn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $v(t,e){return Ld(Xr(t),e)}function Mv(t,e,n){return $v(je(t),rr.credential(e,n))}function Uv(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function Fv(t,e,n){return je(t).beforeAuthStateChanged(e,n)}const Ks="__sak";/**
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
 */class $d{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Vv(){const t=ze();return pa(t)||Ei(t)}const jv=1e3,Bv=10;class Md extends $d{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Vv()&&mv(),this.fallbackToPolling=Ad(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Bv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Md.type="LOCAL";const qv=Md;/**
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
 */class Ud extends $d{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ud.type="SESSION";const Fd=Ud;/**
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
 */function Hv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ii(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await Hv(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ii.receivers=[];/**
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
 */function ya(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=ya("",20);s.port1.start();const g=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(b){const A=b;if(A.data.eventId===h)switch(A.data.status){case"ack":clearTimeout(g),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(A.data.response);break;default:clearTimeout(g),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tt(){return window}function Wv(t){Tt().location.href=t}/**
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
 */function Vd(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function Kv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Yv(){return Vd()?self:null}/**
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
 */const jd="firebaseLocalStorageDb",Jv=1,Gs="firebaseLocalStorage",Bd="fbase_key";class es{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ti(t,e){return t.transaction([Gs],e?"readwrite":"readonly").objectStore(Gs)}function Qv(){const t=indexedDB.deleteDatabase(jd);return new es(t).toPromise()}function go(){const t=indexedDB.open(jd,Jv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gs,{keyPath:Bd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gs)?e(r):(r.close(),await Qv(),e(await go()))})})}async function Xl(t,e,n){const r=Ti(t,!0).put({[Bd]:e,value:n});return new es(r).toPromise()}async function Xv(t,e){const n=Ti(t,!1).get(e),r=await new es(n).toPromise();return r===void 0?null:r.value}function Zl(t,e){const n=Ti(t,!0).delete(e);return new es(n).toPromise()}const Zv=800,ew=3;class qd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await go(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ew)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ii._getInstance(Yv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Kv(),!this.activeServiceWorker)return;this.sender=new zv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await go();return await Xl(e,Ks,"1"),await Zl(e,Ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ti(s,!1).getAll();return new es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qd.type="LOCAL";const tw=qd;new Jr(3e4,6e4);/**
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
 */function nw(t,e){return e?Pt(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _a extends ma{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rw(t){return Ld(t.auth,new _a(t),t.bypassAuthState)}function sw(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Lv(n,new _a(t),t.bypassAuthState)}async function iw(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Nv(n,new _a(t),t.bypassAuthState)}/**
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
 */class Hd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rw;case"linkViaPopup":case"linkViaRedirect":return iw;case"reauthViaPopup":case"reauthViaRedirect":return sw;default:mt(this.auth,"internal-error")}}resolve(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ow=new Jr(2e3,1e4);class xn extends Hd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){$t(this.filter.length===1,"Popup operations only handle one event");const e=ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ow.get())};e()}}xn.currentPopupAction=null;/**
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
 */const aw="pendingRedirect",ws=new Map;class lw extends Hd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ws.get(this.auth._key());if(!e){try{const r=await cw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ws.set(this.auth._key(),e)}return this.bypassAuthState||ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cw(t,e){const n=hw(e),r=dw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uw(t,e){ws.set(t._key(),e)}function dw(t){return Pt(t._redirectPersistence)}function hw(t){return vs(aw,t.config.apiKey,t.name)}async function fw(t,e,n=!1){const r=Xr(t),s=nw(r,e),o=await new lw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const pw=10*60*1e3;class mw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pw&&this.cachedEventUids.clear(),this.cachedEventUids.has(ec(e))}saveEventToCache(e){this.cachedEventUids.add(ec(e)),this.lastProcessedEventTime=Date.now()}}function ec(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zd(t);default:return!1}}/**
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
 */async function yw(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
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
 */const _w=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vw=/^https?/;async function ww(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yw(t);for(const n of e)try{if(bw(n))return}catch{}mt(t,"unauthorized-domain")}function bw(t){const e=mo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vw.test(n))return!1;if(_w.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ew=new Jr(3e4,6e4);function tc(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Iw(t){return new Promise((e,n)=>{var r,s,i;function o(){tc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tc(),n(It(t,"network-request-failed"))},timeout:Ew.get()})}if(!((s=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tt().gapi)===null||i===void 0)&&i.load)o();else{const l=yv("iframefcb");return Tt()[l]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},Pd(`https://apis.google.com/js/api.js?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw bs=null,e})}let bs=null;function Tw(t){return bs=bs||Iw(t),bs}/**
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
 */const Sw=new Jr(5e3,15e3),Aw="__/auth/iframe",Cw="emulator/auth/iframe",Rw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ow=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pw(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ha(e,Cw):`https://${t.config.authDomain}/${Aw}`,r={apiKey:e.apiKey,appName:t.name,v:er},s=Ow.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Br(r).slice(1)}`}async function kw(t){const e=await Tw(t),n=Tt().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:Pw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),l=Tt().setTimeout(()=>{i(o)},Sw.get());function c(){Tt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Dw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xw=500,Nw=600,Lw="_blank",$w="http://localhost";class nc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mw(t,e,n,r=xw,s=Nw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Dw),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ze().toLowerCase();n&&(l=bd(h)?Lw:n),wd(h)&&(e=e||$w,c.scrollbars="yes");const g=Object.entries(c).reduce((A,[k,j])=>`${A}${k}=${j},`,"");if(fv(h)&&l!=="_self")return Uw(e||"",l),new nc(null);const b=window.open(e||"",l,g);re(b,t,"popup-blocked");try{b.focus()}catch{}return new nc(b)}function Uw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Fw="__/auth/handler",Vw="emulator/auth/handler",jw=encodeURIComponent("fac");async function rc(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:er,eventId:s};if(e instanceof xd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ag(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,b]of Object.entries(i||{}))o[g]=b}if(e instanceof Zr){const g=e.getScopes().filter(b=>b!=="");g.length>0&&(o.scopes=g.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const g of Object.keys(l))l[g]===void 0&&delete l[g];const c=await t._getAppCheckToken(),h=c?`#${jw}=${encodeURIComponent(c)}`:"";return`${Bw(t)}?${Br(l).slice(1)}${h}`}function Bw({config:t}){return t.emulator?ha(t,Vw):`https://${t.authDomain}/${Fw}`}/**
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
 */const Hi="webStorageSupport";class qw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fd,this._completeRedirectFn=fw,this._overrideRedirectResult=uw}async _openPopup(e,n,r,s){var i;$t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await rc(e,n,r,mo(),s);return Mw(e,o,ya())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await rc(e,n,r,mo(),s);return Wv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kw(e),r=new mw(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hi,{type:Hi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hi];o!==void 0&&n(!!o),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ww(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ad()||pa()||Ei()}}const Hw=qw;var sc="@firebase/auth",ic="0.23.2";/**
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
 */class zw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ww(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Kw(t){Kn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cd(t)},h=new Ev(r,s,i,c);return Tv(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kn(new yn("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new zw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(sc,ic,Ww(t)),Xt(sc,ic,"esm2017")}/**
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
 */const Gw=5*60,Yw=Iu("authIdTokenMaxAge")||Gw;let oc=null;const Jw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yw)return;const s=n==null?void 0:n.token;oc!==s&&(oc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Es(t=Cu()){const e=Vo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Iv(t,{popupRedirectResolver:Hw,persistence:[tw,qv,Fd]}),r=Iu("authTokenSyncURL");if(r){const i=Jw(r);Fv(n,i,()=>i(n.currentUser)),Uv(n,o=>i(o))}const s=bu("auth");return s&&Sv(n,`http://${s}`),n}Kw("Browser");const Qw={apiKey:"AIzaSyDYHZD3qXhHcDa367tMXjHz7qzaZFYRA4c",authDomain:"gold-smith-jewelers.firebaseapp.com",projectId:"gold-smith-jewelers",storageBucket:"gold-smith-jewelers.appspot.com",messagingSenderId:"705110080489",appId:"1:705110080489:web:d8228e6b206399c5c5e978",measurementId:"G-M8LFGYRVKL"},Xw=Au(Qw),be=D_(Xw);class Zw{constructor(){this.collectionName=Ue.INVOICES}async addOrUpdate(e){const n=Se(be,this.collectionName);var r=await At(ke(n,e.invoiceNumber));if(r.exists())throw"Invoice cannot be updated";Cn.fillUpdatedInfo(e),await Sn(ke(n,e.invoiceNumber),e),await ub.addOrUpdate({receiptNumber:"PR"+e.invoiceNumber,invoiceRef:e.invoiceNumber,paymentDate:e.purchaseDate,amount:-1*e.totals.totalMakingCharge,customer:e.customer,customerId:e.customerId,description:"Auto added by purchase"+e.invoiceNumber}),await db.addOrUpdate({receiptNumber:"GR"+e.invoiceNumber,invoiceRef:e.invoiceNumber,paymentDate:e.purchaseDate,weight:-1*e.totals.pureWeight,purity:1e3,customer:e.customer,customerId:e.customerId,description:"Auto added by purchase"+e.invoiceNumber}),An.log(e,"Invoice","Created"+e.invoiceNumber)}async list(e,n,r){const s=Se(be,this.collectionName),i=Nt(s,Yr("purchaseDate","desc"),wi(10)),l=(await Lt(i)).docs.map(h=>h.data());if(r){var c=r.toLowerCase().trim();return _.filter(l,function(h){return h.invoiceNumber.toLowerCase().includes(c)||h.customer.toLowerCase().includes(c)})}return l}async listByCustomer(e){if(!e)return[];const n=Se(be,this.collectionName),r=Nt(n,vi("customerId","==",e));return(await Lt(r)).docs.map(o=>o.data())}async getById(e){const n=Se(be,this.collectionName);var r=await At(ke(n,e));if(r.exists())return r.data()}}class eb{constructor(){this.collectionName=Ue.SETTINGS}async addOrUpdate(e){const n=Se(be,this.collectionName);Cn.fillUpdatedInfo(e),await Sn(ke(n,e.identifier),e),An.log(e,"Settings","Changed settings "+e.identifier)}async getById(e){const n=Se(be,this.collectionName),r=await At(ke(n,e));return r.exists()?r.data():{identifier:e}}}class tb{constructor(){this.users=[],this.collectionName=Ue.USERS}addOrUpdate(e){this.users=_.filter(this.users,function(n){return n.name!=e.name}),this.users.push(e)}async getById(e){if(!e)return;const n=Se(be,this.collectionName);var r=await At(ke(n,customerId));if(r.exists())return r.data()}async list(){const e=[],n=Es();return e.push(...n.users),e}setStatus(e,n){var r=_.filter(this.users,function(s){return s.name==e.name});r&&(r[0].Status=n)}}class nb{constructor(){this.collectionName=Ue.RATES}async addOrUpdate(e){let n=Wn.getTodayAsString();const r=Se(be,this.collectionName);var s={rate:e.rate,date:n};Cn.fillUpdatedInfo(s),await Sn(ke(r,n),s),An.log(s,"Rate","Changed rate to "+s.rate)}async list(){const e=Se(be,this.collectionName),n=Nt(e,Yr("date","desc"),wi(10));return(await Lt(n)).docs.map(i=>i.data())}async getTodaysRate(){let e=Wn.getTodayAsString();const n=Se(be,this.collectionName);var r=await At(ke(n,e));if(r.exists())return r.data().rate}}class rb{constructor(){this.collectionName=Ue.CCUSTOMERS}async list(e,n=!1){const r=Se(be,this.collectionName);var s=null;n&&(s=vi("status","==","Active"));const i=Nt(r,s);var l=(await Lt(i)).docs.map(c=>c.data());if(e){const c=e.toLowerCase();l=_.filter(l,function(h){return h.Name.toLowerCase().includes(c)||h.Contact&&h.Contact.toString().toLowerCase().includes(c)})}return l=_.sortBy(l,function(c){return c.Name}),l}async addOrUpdate(e){const n=Se(be,this.collectionName);var r="Updated";e.id||(e.id=ke(n).id,r="Added"),Cn.fillUpdatedInfo(e),await Sn(ke(n,e.id),e),An.log(e,"Customer",r+":"+JSON.stringify(e))}async getById(e){const n=Se(be,this.collectionName);var r=await At(ke(n,e));if(r.exists())return r.data()}async runDebitCreditTransaction(e,n,r){const s=ke(Se(be,this.collectionName),e);try{await K_(be,async i=>{const o=await i.get(s);if(!o.exists())throw"Document does not exist!";const l=r+"Debit",c=r+"Credit",h=o.data();n<0?h[l]?h[l]+=n*-1:h[l]=n*-1:h[c]?h[c]+=n:h[c]=n,i.update(s,h)}),console.log("Transaction successfully committed!")}catch(i){console.log("Transaction failed: ",i)}}}class sb{constructor(){this.collectionName=Ue.PRODUCTS}async list(e){const n=Se(be,this.collectionName),r=Nt(n,Yr("Name"));var i=(await Lt(r)).docs.map(o=>o.data());if(e){const o=e.toLowerCase();i=_.filter(i,function(l){return l.Name.toLowerCase().includes(o)})}return i}async addOrUpdate(e){const n=Se(be,this.collectionName);var r="Updated";e.id||(e.id=ke(n).id,r="Added"),Cn.fillUpdatedInfo(e),await Sn(ke(n,e.id),e),An.log(e,"Product",r+":"+JSON.stringify(e))}}class ib{constructor(){this.collectionName=Ue.CASH_PAYMENTS}async addOrUpdate(e){const n=Se(be,this.collectionName);var r=await At(ke(n,e.receiptNumber));if(r.exists())throw"Cash payment cannot be updated";Cn.fillUpdatedInfo(e),await Sn(ke(n,e.receiptNumber),e),await Wd.runDebitCreditTransaction(e.customerId,e.amount,"Cash"),An.log(e,"CashPayment","Added :"+e.receiptNumber)}async list(e,n){const r=Se(be,this.collectionName),s=Nt(r,Yr("paymentDate","desc"),wi(10));return(await Lt(s)).docs.map(l=>l.data())}async listByCustomer(e){if(!e)return[];const n=Se(be,this.collectionName),r=Nt(n,vi("customerId","==",e));return(await Lt(r)).docs.map(o=>o.data())}async getById(e){const n=Se(be,this.collectionName);var r=await At(ke(n,e));if(r.exists())return r.data()}}class ob{constructor(){this.collectionName=Ue.GOLD_PAYMENTS}async addOrUpdate(e){const n=Se(be,this.collectionName);var r=await At(ke(n,e.receiptNumber));if(r.exists())throw"Gold Payment cannot be updated";Cn.fillUpdatedInfo(e),await Sn(ke(n,e.receiptNumber),e),await Wd.runDebitCreditTransaction(e.customerId,e.weight*(e.purity/1e3),"Gold"),An.log(e,"GoldPayment","Added :"+e.receiptNumber)}async list(e,n){const r=Se(be,this.collectionName),s=Nt(r,Yr("paymentDate","desc"),wi(10));return(await Lt(s)).docs.map(l=>l.data())}async listByCustomer(e){if(!e)return[];const n=Se(be,this.collectionName),r=Nt(n,vi("customerId","==",e));return(await Lt(r)).docs.map(o=>o.data())}async getById(e){const n=Se(be,this.collectionName);var r=await At(ke(n,e));if(r.exists())return r.data()}}class ab{async tryLogin(e,n){const r=Es();return await Mv(r,e,n)}getCurrentUser(){return Es().currentUser}async signOut(){this.getCurrentUser()&&await Es().signOut()}}class lb{constructor(){this.collectionName=Ue.AUDIT}async log(e,n,r){Se(be,this.collectionName)}}class cb{fillUpdatedInfo(e){const n=Kd.getCurrentUser();e.updatedByDisplayName=n.displayName??n.email,e.updatedBy=n.uid,e.updatedOn=Wn.getNowAsMilliSeconds()}}const bb=new Zw,Eb=new tb,Ib=new nb,Wd=new rb,Tb=new sb,Sb=new eb,ub=new ib,db=new ob,Kd=new ab,An=new lb,Cn=new cb,rn=Ep(Am);rn.use(yu);rn.mount("#app");rn.config.globalProperties.$currentuser={};rn.config.globalProperties.$appname="Emirates Pearl Jewellery";rn.config.globalProperties.$appShortName="Emirates Pearl";rn.config.globalProperties.$basedomainname="/goldsmithjk/";rn.config.globalProperties.$statusLabelMapper={enabled:"Active",disabled:"Inactive"};rn.config.globalProperties.$alertShowDuration=3e3;yu.beforeEach((t,e,n)=>{if(t.path.startsWith("/payments/")||t.path.startsWith("/invoices/")||t.path.startsWith("/login")||t.path.startsWith("/goldtransaction/")){n();return}Kd.getCurrentUser()?n():n({path:"/login",query:{nextUrl:t.path}})});export{Bl as A,vo as B,Wn as C,ji as D,Eb as E,ot as F,mb as G,wb as I,Vi as S,Om as _,gb as a,le as b,jf as c,vf as d,vb as e,ve as f,yb as g,ii as h,Ge as i,tg as j,Ib as k,bb as l,it as m,Wd as n,Vr as o,Tb as p,Ef as q,pb as r,Sb as s,lc as t,pn as u,_b as v,fb as w,Kd as x,ub as y,db as z};
