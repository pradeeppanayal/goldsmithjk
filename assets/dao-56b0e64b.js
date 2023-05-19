import{_ as jn}from"./_plugin-vue_export-helper-c27b6911.js";import{d as qn,o as zn,c as Hn,b as p,t as Gn,f as L,i as B,j as $,k as Kn,F as Wn}from"./index-5f94e7fe.js";const Yn={},Qn={class:"navbar navbar-expand-lg navbar-light bg-light"},Jn={class:"container-fluid"},Xn={class:"navbar-brand",href:"#"},Zn=p("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[p("span",{class:"navbar-toggler-icon"})],-1),er={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},tr={class:"navbar-nav me-auto mb-2 mb-lg-0"},nr={class:"nav-item"},rr={class:"nav-item"},sr={class:"nav-item"},ir={class:"nav-item"},or={class:"nav-item"},ar={class:"nav-item"},cr={class:"nav-item"},lr={class:"navbar-nav me-auto mb-2 mb-lg-0"},ur={class:"nav-item dropdown"},hr=p("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Settings ",-1),dr={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},fr=p("li",null,[p("a",{class:"dropdown-item",href:"#"},"Profile Setting")],-1),pr=p("li",null,[p("hr",{class:"dropdown-divider"})],-1),mr=p("li",null,[p("a",{class:"dropdown-item",href:"#"},"Logout")],-1),gr={class:"d-flex"},yr={class:"navbar-nav me-auto mb-2 mb-lg-0"},wr={class:"nav-item dropdown btn btn-outline-success"},vr=p("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," New ",-1),br={class:"dropdown-menu","aria-labelledby":"navbarDropdown"};function _r(n,e){const t=qn("RouterLink");return zn(),Hn(Wn,null,[p("nav",Qn,[p("div",Jn,[p("a",Xn,Gn(this.$appname),1),Zn,p("div",er,[p("ul",tr,[p("li",nr,[L(t,{to:"/invoices",class:"nav-link active","aria-current":"page"},{default:B(()=>[$("Invoices")]),_:1})]),p("li",rr,[L(t,{to:"/customers",class:"nav-link active","aria-current":"page"},{default:B(()=>[$("Customers")]),_:1})]),p("li",sr,[L(t,{to:"/products",class:"nav-link active","aria-current":"page"},{default:B(()=>[$("Products")]),_:1})]),p("li",ir,[L(t,{to:"/payments",class:"nav-link active","aria-current":"page"},{default:B(()=>[$("Payments")]),_:1})]),p("li",or,[L(t,{to:"/users",class:"nav-link active","aria-current":"page"},{default:B(()=>[$("Users")]),_:1})]),p("li",ar,[L(t,{to:"/rates",class:"nav-link active","aria-current":"page"},{default:B(()=>[$("Metal Rate")]),_:1})]),p("li",cr,[p("ul",lr,[p("li",ur,[hr,p("ul",dr,[fr,p("li",null,[L(t,{to:"/settings/application",class:"dropdown-item","aria-current":"page"},{default:B(()=>[$(" General Settings")]),_:1})]),pr,mr])])])])]),p("form",gr,[p("ul",yr,[p("li",wr,[vr,p("ul",br,[p("li",null,[L(t,{to:"/invoice",class:"dropdown-item"},{default:B(()=>[$(" Invoice")]),_:1})]),p("li",null,[L(t,{to:"/payment",class:"dropdown-item"},{default:B(()=>[$(" Payment")]),_:1})])])])])])])])]),Kn(n.$slots,"default")],64)}const Do=jn(Yn,[["render",_r]]);class de{static getTodayAsString(){return new Date().toISOString().split("T")[0]}static getAsFormattedDate(e){return new Date(e).toLocaleString().toString()}static getNowAsMilliSeconds(){return new Date().getTime()}static capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}static capitalizeFirstLetterOfEveryWordForVariableName(e){if(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)}}static capitalizeFirstLetterOfEveryWord(e){const t=e.split(" ");for(let r=0;r<t.length;r++)t[r]=de.capitalizeFirstLetter(t[r]);return t.join(" ")}static doConvert(e){if(!e)return"NA";e=Number(e.toFixed(3));var t=["","thousand","million","billion","trillion"],r=["zero","one","two","three","four","five","six","seven","eight","nine"],s=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],i=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if(e=e.toString(),e=e.replace(/[\, ]/g,""),e!=parseFloat(e))return"not a number ";var o=e.indexOf(".");if(o==-1&&(o=e.length),o>15)return"too big";for(var a=e.split(""),c="",l=0,d=0;d<o;d++)(o-d)%3==2?a[d]=="1"?(c+=s[Number(a[d+1])]+" ",d++,l=1):a[d]!=0&&(c+=i[a[d]-2]+" ",l=1):a[d]!=0&&(c+=r[a[d]]+" ",(o-d)%3==0&&(c+="hundred "),l=1),(o-d)%3==1&&(l&&(c+=t[(o-d-1)/3]+" "),l=0);if(o!=e.length){var g=e.length;c+="point ";for(var d=o+1;d<g;d++)c+=r[a[d]]+" "}return de.capitalizeFirstLetterOfEveryWord(c.replace(/\s+/g," "))}static getAsFormattedAmount(e){return e?e.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}):"-"}}class Ao{static generateId(e){return e+"-"+new Date().getTime().toString()+parseInt(Math.random()*1e4)}static generateInvoiceNumber(){return this.generateId("INV")}static generateReceiptNumber(){return this.generateId("PMT")}static generateQutationNumber(){return this.generateId("TMP")}}/**
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
 */const en=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Er=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=i>>2,g=(i&3)<<4|a>>4;let w=(a&15)<<2|l>>6,Q=l&63;c||(Q=64,o||(w=64)),r.push(t[d],t[g],t[w],t[Q])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(en(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Er(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||g==null)throw new Sr;const w=i<<2|a>>4;if(r.push(w),l!==64){const Q=a<<4&240|l>>2;if(r.push(Q),g!==64){const Un=l<<6&192|g;r.push(Un)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ir=function(n){const e=en(n);return tn.encodeByteArray(e,!0)},Ne=function(n){return Ir(n).replace(/\./g,"")},Tr=function(n){try{return tn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ar=()=>Dr().__FIREBASE_DEFAULTS__,Cr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tr(n[1]);return e&&JSON.parse(e)},nn=()=>{try{return Ar()||Cr()||Nr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Or=n=>{var e,t;return(t=(e=nn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kr=n=>{const e=Or(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},rn=()=>{var n;return(n=nn())===null||n===void 0?void 0:n.config};/**
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
 */class xr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Fr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ne(JSON.stringify(t)),Ne(JSON.stringify(o)),a].join(".")}function Pr(){try{return typeof indexedDB=="object"}catch{return!1}}function Rr(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Vr="FirebaseError";class re extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vr,Object.setPrototypeOf(this,re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sn.prototype.create)}}class sn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Lr(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new re(s,a,r)}}function Lr(n,e){return n.replace(Br,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Br=/\{\$([^}]+)}/g;function Ze(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(At(i)&&At(o)){if(!Ze(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function At(n){return n!==null&&typeof n=="object"}/**
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
 */function Z(n){return n&&n._delegate?n._delegate:n}class fe{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const H="[DEFAULT]";/**
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
 */class $r{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new xr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ur(e))try{this.getOrInitializeService({instanceIdentifier:H})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=H){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=H){return this.instances.has(e)}getOptions(e=H){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mr(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=H){return this.component?this.component.multipleInstances?e:H:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mr(n){return n===H?void 0:n}function Ur(n){return n.instantiationMode==="EAGER"}/**
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
 */class jr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $r(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var m;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(m||(m={}));const qr={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},zr=m.INFO,Hr={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},Gr=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Hr[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class on{constructor(e){this.name=e,this._logLevel=zr,this._logHandler=Gr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...e),this._logHandler(this,m.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...e),this._logHandler(this,m.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m.INFO,...e),this._logHandler(this,m.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m.WARN,...e),this._logHandler(this,m.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...e),this._logHandler(this,m.ERROR,...e)}}const Kr=(n,e)=>e.some(t=>n instanceof t);let Ct,Nt;function Wr(){return Ct||(Ct=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yr(){return Nt||(Nt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const an=new WeakMap,et=new WeakMap,cn=new WeakMap,We=new WeakMap,lt=new WeakMap;function Qr(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(U(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&an.set(t,n)}).catch(()=>{}),lt.set(e,n),e}function Jr(n){if(et.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});et.set(n,e)}let tt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return et.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cn.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return U(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xr(n){tt=n(tt)}function Zr(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ye(this),e,...t);return cn.set(r,e.sort?e.sort():[e]),U(r)}:Yr().includes(n)?function(...e){return n.apply(Ye(this),e),U(an.get(this))}:function(...e){return U(n.apply(Ye(this),e))}}function es(n){return typeof n=="function"?Zr(n):(n instanceof IDBTransaction&&Jr(n),Kr(n,Wr())?new Proxy(n,tt):n)}function U(n){if(n instanceof IDBRequest)return Qr(n);if(We.has(n))return We.get(n);const e=es(n);return e!==n&&(We.set(n,e),lt.set(e,n)),e}const Ye=n=>lt.get(n);function ts(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=U(o);return r&&o.addEventListener("upgradeneeded",c=>{r(U(o.result),c.oldVersion,c.newVersion,U(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ns=["get","getKey","getAll","getAllKeys","count"],rs=["put","add","delete","clear"],Qe=new Map;function Ot(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qe.get(e))return Qe.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=rs.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ns.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return Qe.set(e,i),i}Xr(n=>({...n,get:(e,t,r)=>Ot(e,t)||n.get(e,t,r),has:(e,t)=>!!Ot(e,t)||n.has(e,t)}));/**
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
 */class ss{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(is(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function is(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nt="@firebase/app",kt="0.9.10";/**
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
 */const G=new on("@firebase/app"),os="@firebase/app-compat",as="@firebase/analytics-compat",cs="@firebase/analytics",ls="@firebase/app-check-compat",us="@firebase/app-check",hs="@firebase/auth",ds="@firebase/auth-compat",fs="@firebase/database",ps="@firebase/database-compat",ms="@firebase/functions",gs="@firebase/functions-compat",ys="@firebase/installations",ws="@firebase/installations-compat",vs="@firebase/messaging",bs="@firebase/messaging-compat",_s="@firebase/performance",Es="@firebase/performance-compat",Ss="@firebase/remote-config",Is="@firebase/remote-config-compat",Ts="@firebase/storage",Ds="@firebase/storage-compat",As="@firebase/firestore",Cs="@firebase/firestore-compat",Ns="firebase",Os="9.22.0";/**
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
 */const rt="[DEFAULT]",ks={[nt]:"fire-core",[os]:"fire-core-compat",[cs]:"fire-analytics",[as]:"fire-analytics-compat",[us]:"fire-app-check",[ls]:"fire-app-check-compat",[hs]:"fire-auth",[ds]:"fire-auth-compat",[fs]:"fire-rtdb",[ps]:"fire-rtdb-compat",[ms]:"fire-fn",[gs]:"fire-fn-compat",[ys]:"fire-iid",[ws]:"fire-iid-compat",[vs]:"fire-fcm",[bs]:"fire-fcm-compat",[_s]:"fire-perf",[Es]:"fire-perf-compat",[Ss]:"fire-rc",[Is]:"fire-rc-compat",[Ts]:"fire-gcs",[Ds]:"fire-gcs-compat",[As]:"fire-fst",[Cs]:"fire-fst-compat","fire-js":"fire-js",[Ns]:"fire-js-all"};/**
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
 */const Oe=new Map,st=new Map;function xs(n,e){try{n.container.addComponent(e)}catch(t){G.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ke(n){const e=n.name;if(st.has(e))return G.debug(`There were multiple attempts to register component ${e}.`),!1;st.set(e,n);for(const t of Oe.values())xs(t,n);return!0}function Fs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Ps={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},j=new sn("app","Firebase",Ps);/**
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
 */class Rs{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw j.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=Os;function ln(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rt,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw j.create("bad-app-name",{appName:String(s)});if(t||(t=rn()),!t)throw j.create("no-options");const i=Oe.get(s);if(i){if(Ze(t,i.options)&&Ze(r,i.config))return i;throw j.create("duplicate-app",{appName:s})}const o=new jr(s);for(const c of st.values())o.addComponent(c);const a=new Rs(t,r,o);return Oe.set(s,a),a}function Ls(n=rt){const e=Oe.get(n);if(!e&&n===rt&&rn())return ln();if(!e)throw j.create("no-app",{appName:n});return e}function X(n,e,t){var r;let s=(r=ks[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),G.warn(a.join(" "));return}ke(new fe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Bs="firebase-heartbeat-database",$s=1,pe="firebase-heartbeat-store";let Je=null;function un(){return Je||(Je=ts(Bs,$s,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pe)}}}).catch(n=>{throw j.create("idb-open",{originalErrorMessage:n.message})})),Je}async function Ms(n){try{return await(await un()).transaction(pe).objectStore(pe).get(hn(n))}catch(e){if(e instanceof re)G.warn(e.message);else{const t=j.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});G.warn(t.message)}}}async function xt(n,e){try{const r=(await un()).transaction(pe,"readwrite");await r.objectStore(pe).put(e,hn(n)),await r.done}catch(t){if(t instanceof re)G.warn(t.message);else{const r=j.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});G.warn(r.message)}}}function hn(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Us=1024,js=30*24*60*60*1e3;class qs{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hs(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ft();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=js}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ft(),{heartbeatsToSend:t,unsentEntries:r}=zs(this._heartbeatsCache.heartbeats),s=Ne(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ft(){return new Date().toISOString().substring(0,10)}function zs(n,e=Us){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pt(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Pt(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Hs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pr()?Rr().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ms(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return xt(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return xt(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pt(n){return Ne(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Gs(n){ke(new fe("platform-logger",e=>new ss(e),"PRIVATE")),ke(new fe("heartbeat",e=>new qs(e),"PRIVATE")),X(nt,kt,n),X(nt,kt,"esm2017"),X("fire-js","")}Gs("");var Ks="firebase",Ws="9.22.0";/**
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
 */X(Ks,Ws,"app");/**
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
 */class N{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}N.UNAUTHENTICATED=new N(null),N.GOOGLE_CREDENTIALS=new N("google-credentials-uid"),N.FIRST_PARTY=new N("first-party-uid"),N.MOCK_USER=new N("mock-user");/**
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
 */let se="9.22.0";/**
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
 */const ee=new on("@firebase/firestore");function xe(n,...e){if(ee.logLevel<=m.DEBUG){const t=e.map(ht);ee.debug(`Firestore (${se}): ${n}`,...t)}}function ut(n,...e){if(ee.logLevel<=m.ERROR){const t=e.map(ht);ee.error(`Firestore (${se}): ${n}`,...t)}}function dn(n,...e){if(ee.logLevel<=m.WARN){const t=e.map(ht);ee.warn(`Firestore (${se}): ${n}`,...t)}}function ht(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function y(n="Unexpected state"){const e=`FIRESTORE (${se}) INTERNAL ASSERTION FAILED: `+n;throw ut(e),new Error(e)}function x(n,e){n||y()}function _e(n,e){return n}/**
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
 */const Rt="ok",Ys="cancelled",oe="unknown",h="invalid-argument",Qs="deadline-exceeded",Js="not-found",Xs="permission-denied",it="unauthenticated",Zs="resource-exhausted",te="failed-precondition",ei="aborted",ti="out-of-range",fn="unimplemented",ni="internal",ri="unavailable";class u extends re{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class si{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(N.UNAUTHENTICATED))}shutdown(){}}class ii{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oi{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(x(typeof e.accessToken=="string"),new pn(e.accessToken,new N(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class ai{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=N.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class ci{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new ai(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(N.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class li{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ui{constructor(e){this.l=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(x(typeof e.token=="string"),new li(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class hi{constructor(e,t,r,s,i,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class me{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new me("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof me&&e.projectId===this.projectId&&e.database===this.database}}class ge{constructor(e,t,r){t===void 0?t=0:t>e.length&&y(),r===void 0?r=e.length-t:r>e.length-t&&y(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ge.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ge?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class b extends ge{construct(e,t,r){return new b(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new u(h,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new b(t)}static emptyPath(){return new b([])}}const di=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class k extends ge{construct(e,t,r){return new k(e,t,r)}static isValidIdentifier(e){return di.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),k.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new k(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new u(h,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new u(h,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new u(h,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new u(h,"Unterminated ` in path: "+e);return new k(t)}static emptyPath(){return new k([])}}/**
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
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(b.fromString(e))}static fromName(e){return new T(b.fromString(e).popFirst(5))}static empty(){return new T(b.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&b.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return b.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new b(e.slice()))}}/**
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
 */function mn(n,e,t){if(!t)throw new u(h,`Function ${n}() cannot be called with an empty ${e}.`)}function Vt(n){if(!T.isDocumentKey(n))throw new u(h,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Lt(n){if(T.isDocumentKey(n))throw new u(h,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Me(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":y()}function Ue(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new u(h,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Me(n);throw new u(h,`Expected type '${e.name}', but it was: ${t}`)}}return n}function fi(n,e){if(e<=0)throw new u(h,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function gn(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */let De=null;function pi(){return De===null?De=268435456+Math.round(2147483648*Math.random()):De++,"0x"+De.toString(16)}/**
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
 */function mi(n){return n==null}function Fe(n){return n===0&&1/n==-1/0}/**
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
 */const gi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Bt,f;function $t(n){if(n===void 0)return ut("RPC_ERROR","HTTP error has no status"),oe;switch(n){case 200:return Rt;case 400:return te;case 401:return it;case 403:return Xs;case 404:return Js;case 409:return ei;case 416:return ti;case 429:return Zs;case 499:return Ys;case 500:return oe;case 501:return fn;case 503:return ri;case 504:return Qs;default:return n>=200&&n<300?Rt:n>=400&&n<500?te:n>=500&&n<600?ni:oe}}/**
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
 */(f=Bt||(Bt={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";class yi extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.m=t+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,t,r,s,i){const o=pi(),a=this.I(e,t);xe("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.T(c,s,i),this.A(e,a,c,r).then(l=>(xe("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw dn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}R(e,t,r,s,i,o){return this.v(e,t,r,s,i)}T(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+se,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}I(e,t){const r=gi[e];return`${this.m}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.P=t}V(e,t){throw new Error("Not supported by FetchConnection")}async A(e,t,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.P(t,{method:"POST",headers:r,body:o})}catch(c){const l=c;throw new u($t(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const l=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new u($t(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
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
 */function wi(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class vi{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=wi(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function E(n,e){return n<e?-1:n>e?1:0}function yn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */function Mt(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function je(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class bi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class M{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bi("Invalid base64 string: "+s):s}}(e);return new M(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new M(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return E(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}M.EMPTY_BYTE_STRING=new M("");const _i=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function K(n){if(x(!!n),typeof n=="string"){let e=0;const t=_i.exec(n);if(x(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:v(n.seconds),nanos:v(n.nanos)}}function v(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ye(n){return typeof n=="string"?M.fromBase64String(n):M.fromUint8Array(n)}/**
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
 */class F{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new u(h,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new u(h,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new u(h,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new u(h,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new F(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?E(this.nanoseconds,e.nanoseconds):E(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function wn(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function vn(n){const e=n.mapValue.fields.__previous_value__;return wn(e)?vn(e):e}function we(n){const e=K(n.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}/**
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
 */const Ae={fields:{__type__:{stringValue:"__max__"}}};function W(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wn(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:y()}function Pe(n,e){if(n===e)return!0;const t=W(n);if(t!==W(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return we(n).isEqual(we(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=K(r.timestampValue),o=K(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return ye(r.bytesValue).isEqual(ye(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return v(r.geoPointValue.latitude)===v(s.geoPointValue.latitude)&&v(r.geoPointValue.longitude)===v(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return v(r.integerValue)===v(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=v(r.doubleValue),o=v(s.doubleValue);return i===o?Fe(i)===Fe(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return yn(n.arrayValue.values||[],e.arrayValue.values||[],Pe);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Mt(i)!==Mt(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Pe(i[a],o[a])))return!1;return!0}(n,e);default:return y()}}function ve(n,e){return(n.values||[]).find(t=>Pe(t,e))!==void 0}function Re(n,e){if(n===e)return 0;const t=W(n),r=W(e);if(t!==r)return E(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return E(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=v(s.integerValue||s.doubleValue),a=v(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ut(n.timestampValue,e.timestampValue);case 4:return Ut(we(n),we(e));case 5:return E(n.stringValue,e.stringValue);case 6:return function(s,i){const o=ye(s),a=ye(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=E(o[c],a[c]);if(l!==0)return l}return E(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=E(v(s.latitude),v(i.latitude));return o!==0?o:E(v(s.longitude),v(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Re(o[c],a[c]);if(l)return l}return E(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Ae&&i===Ae)return 0;if(s===Ae)return 1;if(i===Ae)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let d=0;d<a.length&&d<l.length;++d){const g=E(a[d],l[d]);if(g!==0)return g;const w=Re(o[a[d]],c[l[d]]);if(w!==0)return w}return E(a.length,l.length)}(n.mapValue,e.mapValue);default:throw y()}}function Ut(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return E(n,e);const t=K(n),r=K(e),s=E(t.seconds,r.seconds);return s!==0?s:E(t.nanos,r.nanos)}function jt(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function bn(n){return!!n&&"arrayValue"in n}function qt(n){return!!n&&"nullValue"in n}function zt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xe(n){return!!n&&"mapValue"in n}function ae(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return je(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ae(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ae(n.arrayValue.values[t]);return e}return Object.assign({},n)}class Ht{constructor(e,t){this.position=e,this.inclusive=t}}/**
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
 */class _n{}class R extends _n{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ei(e,t,r):t==="array-contains"?new Ti(e,r):t==="in"?new Di(e,r):t==="not-in"?new Ai(e,r):t==="array-contains-any"?new Ci(e,r):new R(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Si(e,r):new Ii(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Re(t,this.value)):t!==null&&W(this.value)===W(t)&&this.matchesComparison(Re(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ee extends _n{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new Ee(e,t)}matches(e){return this.op==="and"?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(t=>t.isInequality());return e!==null?e.field:null}F(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}class Ei extends R{constructor(e,t,r){super(e,t,r),this.key=T.fromName(r.referenceValue)}matches(e){const t=T.comparator(e.key,this.key);return this.matchesComparison(t)}}class Si extends R{constructor(e,t){super(e,"in",t),this.keys=En("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ii extends R{constructor(e,t){super(e,"not-in",t),this.keys=En("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function En(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>T.fromName(r.referenceValue))}class Ti extends R{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bn(t)&&ve(t.arrayValue,this.value)}}class Di extends R{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ve(this.value.arrayValue,t)}}class Ai extends R{constructor(e,t){super(e,"not-in",t)}matches(e){if(ve(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ve(this.value.arrayValue,t)}}class Ci extends R{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ve(this.value.arrayValue,r))}}/**
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
 */class ce{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new F(0,0))}static max(){return new S(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ve{constructor(e,t){this.comparator=e,this.root=t||I.EMPTY}insert(e,t){return new Ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,I.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,I.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ce(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ce(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ce(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ce(this.root,e,this.comparator,!0)}}class Ce{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class I{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??I.RED,this.left=s??I.EMPTY,this.right=i??I.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new I(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return I.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return I.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,I.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,I.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}I.EMPTY=null,I.RED=!0,I.BLACK=!1;I.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(n,e,t,r,s){return this}insert(n,e,t){return new I(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gt(this.data.getIterator())}getIteratorFrom(e){return new Gt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class Gt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class be{constructor(e){this.fields=e,e.sort(k.comparator)}static empty(){return new be([])}unionWith(e){let t=new Le(k.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class P{constructor(e){this.value=e}static empty(){return new P({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xe(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ae(t)}setAll(e){let t=k.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=ae(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Xe(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Xe(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){je(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new P(ae(this.value))}}/**
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
 */class V{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new V(e,0,S.min(),S.min(),S.min(),P.empty(),0)}static newFoundDocument(e,t,r,s){return new V(e,1,t,S.min(),r,s,0)}static newNoDocument(e,t){return new V(e,2,t,S.min(),S.min(),P.empty(),0)}static newUnknownDocument(e,t){return new V(e,3,t,S.min(),S.min(),P.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=P.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=P.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof V&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new V(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ni{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function Kt(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Ni(n,e,t,r,s,i,o)}/**
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
 */class qe{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function dt(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ze(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Oi(n){return n.collectionGroup!==null}function Wt(n){const e=_e(n);if(e.q===null){e.q=[];const t=ze(e),r=dt(e);if(t!==null&&r===null)t.isKeyField()||e.q.push(new ce(t)),e.q.push(new ce(k.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new ce(k.keyField(),i))}}}return e.q}function ki(n){const e=_e(n);if(!e.O)if(e.limitType==="F")e.O=Kt(e.path,e.collectionGroup,Wt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Wt(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new ce(i.field,o))}const r=e.endAt?new Ht(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ht(e.startAt.position,e.startAt.inclusive):null;e.O=Kt(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.O}function ot(n,e){e.getFirstInequalityField(),ze(n);const t=n.filters.concat([e]);return new qe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}/**
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
 */function xi(n,e){return function(t){return typeof t=="number"&&Number.isInteger(t)&&!Fe(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,r){if(t.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fe(r)?"-0":r}}(n,e)}/**
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
 */class He{constructor(){this._=void 0}}class Fi extends He{}class Pi extends He{constructor(e){super(),this.elements=e}}class Ri extends He{constructor(e){super(),this.elements=e}}class Vi extends He{constructor(e,t){super(),this.serializer=e,this.k=t}}class le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new le}static exists(e){return new le(void 0,e)}static updateTime(e){return new le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Ge{}class Sn extends Ge{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class In extends Ge{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Li extends Ge{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bi extends Ge{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const $i=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Mi=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ui=(()=>({and:"AND",or:"OR"}))();class ji{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function at(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qi(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zi(n,e){return at(n,e.toTimestamp())}function ue(n){return x(!!n),S.fromTimestamp(function(e){const t=K(e);return new F(t.seconds,t.nanos)}(n))}function ft(n,e){return function(t){return new b(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Be(n,e){return ft(n.databaseId,e.path)}function ct(n,e){const t=function(s){const i=b.fromString(s);return x(An(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new u(h,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new u(h,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new T((x((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Yt(n,e){return ft(n.databaseId,e)}function Tn(n){return new b(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qt(n,e,t){return{name:Be(n,e),fields:t.value.mapValue.fields}}function Hi(n,e){return"found"in e?function(t,r){x(!!r.found),r.found.name,r.found.updateTime;const s=ct(t,r.found.name),i=ue(r.found.updateTime),o=r.found.createTime?ue(r.found.createTime):S.min(),a=new P({mapValue:{fields:r.found.fields}});return V.newFoundDocument(s,i,o,a)}(n,e):"missing"in e?function(t,r){x(!!r.missing),x(!!r.readTime);const s=ct(t,r.missing),i=ue(r.readTime);return V.newNoDocument(s,i)}(n,e):y()}function Gi(n,e){let t;if(e instanceof Sn)t={update:Qt(n,e.key,e.value)};else if(e instanceof Li)t={delete:Be(n,e.key)};else if(e instanceof In)t={update:Qt(n,e.key,e.data),updateMask:Ji(e.fieldMask)};else{if(!(e instanceof Bi))return y();t={verify:Be(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Fi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ri)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Vi)return{fieldPath:i.field.canonicalString(),increment:o.k};throw y()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:zi(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:y()}(n,e.precondition)),t}function Ki(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Yt(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Yt(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Dn(Ee.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(d){return{field:J(d.field),direction:Wi(d.dir)}}(l))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||mi(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Wi(n){return $i[n]}function Yi(n){return Mi[n]}function Qi(n){return Ui[n]}function J(n){return{fieldPath:n.canonicalString()}}function Dn(n){return n instanceof R?function(e){if(e.op==="=="){if(zt(e.value))return{unaryFilter:{field:J(e.field),op:"IS_NAN"}};if(qt(e.value))return{unaryFilter:{field:J(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(zt(e.value))return{unaryFilter:{field:J(e.field),op:"IS_NOT_NAN"}};if(qt(e.value))return{unaryFilter:{field:J(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:J(e.field),op:Yi(e.op),value:e.value}}}(n):n instanceof Ee?function(e){const t=e.getFilters().map(r=>Dn(r));return t.length===1?t[0]:{compositeFilter:{op:Qi(e.op),filters:t}}}(n):y()}function Ji(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function An(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function pt(n){return new ji(n,!0)}/**
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
 */class Xi extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.J=!1}X(){if(this.J)throw new u(te,"The client has already been terminated.")}v(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.v(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===it&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new u(oe,s.toString())})}R(e,t,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.R(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===it&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new u(oe,i.toString())})}terminate(){this.J=!0}}async function Zi(n,e){const t=_e(n),r=Tn(t.serializer)+"/documents",s={writes:e.map(i=>Gi(t.serializer,i))};await t.v("Commit",r,s)}async function eo(n,e){const t=_e(n),r=Tn(t.serializer)+"/documents",s={documents:e.map(c=>Be(t.serializer,c))},i=await t.R("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(c=>{const l=Hi(t.serializer,c);o.set(l.key.toString(),l)});const a=[];return e.forEach(c=>{const l=o.get(c.toString());x(!!l),a.push(l)}),a}async function to(n,e){const t=_e(n),r=Ki(t.serializer,ki(e));return(await t.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const c=ct(i,o.name),l=ue(o.updateTime),d=o.createTime?ue(o.createTime):S.min(),g=new P({mapValue:{fields:o.fields}}),w=V.newFoundDocument(c,l,d,g);return a&&w.setHasCommittedMutations(),a?w.setHasCommittedMutations():w}(t.serializer,s.document,void 0))}/**
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
 */const he=new Map;function mt(n){if(n._terminated)throw new u(te,"The client has already been terminated.");if(!he.has(n)){xe("ComponentProvider","Initializing Datastore");const i=function(c){return new yi(c,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new hi(e,t,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,gn(s.experimentalLongPollingOptions),s.useFetchStreams))),o=pt(n._databaseId),a=function(c,l,d,g){return new Xi(c,l,d,g)}(n._authCredentials,n._appCheckCredentials,i,o);he.set(n,a)}var e,t,r,s;/**
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
*/return he.get(n)}class Jt{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new u(h,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new u(h,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,i,o,a){if(i===!0&&a===!0)throw new u(h,`${s} and ${o} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gn((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new u(h,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new u(h,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new u(h,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Ke{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jt({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new u(te,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new u(te,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jt(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new si;switch(t.type){case"firstParty":return new ci(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new u(h,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=he.get(e);t&&(xe("ComponentProvider","Removing Datastore"),he.delete(e),t.terminate())}(this),Promise.resolve()}}function no(n,e){const t=typeof n=="object"?n:Ls(),r=typeof n=="string"?n:e||"(default)",s=Fs(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=kr("firestore");i&&ro(s,...i)}return s}function ro(n,e,t,r={}){var s;const i=(n=Ue(n,Ke))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&dn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=N.MOCK_USER;else{o=Fr(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new u(h,"mockUserToken must contain 'sub' or 'user_id' field!");a=new N(c)}n._authCredentials=new ii(new pn(o,a))}}/**
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
 */class O{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new q(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new O(this.firestore,e,this._key)}}class z{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new z(this.firestore,e,this._query)}}class q extends z{constructor(e,t,r){super(e,t,new qe(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new O(this.firestore,null,new T(e))}withConverter(e){return new q(this.firestore,e,this._path)}}function D(n,e,...t){if(n=Z(n),mn("collection","path",e),n instanceof Ke){const r=b.fromString(e,...t);return Lt(r),new q(n,null,r)}{if(!(n instanceof O||n instanceof q))throw new u(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(b.fromString(e,...t));return Lt(r),new q(n.firestore,null,r)}}function C(n,e,...t){if(n=Z(n),arguments.length===1&&(e=vi.N()),mn("doc","path",e),n instanceof Ke){const r=b.fromString(e,...t);return Vt(r),new O(n,null,new T(r))}{if(!(n instanceof O||n instanceof q))throw new u(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(b.fromString(e,...t));return Vt(r),new O(n.firestore,n instanceof q?n.converter:null,new T(r))}}/**
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
 */class ne{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ne(M.fromBase64String(e))}catch(t){throw new u(h,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ne(M.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new u(h,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new k(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cn{constructor(e){this._methodName=e}}/**
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
 */class yt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new u(h,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new u(h,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return E(this._lat,e._lat)||E(this._long,e._long)}}/**
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
 */const so=/^__.*__$/;class io{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new In(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sn(e,this.data,t,this.fieldTransforms)}}function Nn(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class wt{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new wt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.it(e),s}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.tt(),s}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return $e(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(Nn(this.et)&&so.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class oo{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||pt(e)}ft(e,t,r,s=!1){return new wt({et:e,methodName:t,lt:r,path:k.emptyPath(),st:!1,ht:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function On(n){const e=n._freezeSettings(),t=pt(n._databaseId);return new oo(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ao(n,e,t,r,s,i={}){const o=n.ft(i.merge||i.mergeFields?2:0,e,t,s);Fn("Data must be an object, but it was:",o,r);const a=kn(r,o);let c,l;if(i.merge)c=new be(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const w=lo(e,g,t);if(!o.contains(w))throw new u(h,`Field '${w}' is specified in your field mask but missing from your input data.`);ho(d,w)||d.push(w)}c=new be(d),l=o.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,l=o.fieldTransforms;return new io(new P(a),c,l)}function co(n,e,t,r=!1){return vt(t,n.ft(r?4:3,e))}function vt(n,e){if(xn(n=Z(n)))return Fn("Unsupported field value:",e,n),kn(n,e);if(n instanceof Cn)return function(t,r){if(!Nn(r.et))throw r.ct(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ct(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.st&&e.et!==4)throw e.ct("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=vt(o,r.ut(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=Z(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return xi(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=F.fromDate(t);return{timestampValue:at(r.serializer,s)}}if(t instanceof F){const s=new F(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:at(r.serializer,s)}}if(t instanceof yt)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ne)return{bytesValue:qi(r.serializer,t._byteString)};if(t instanceof O){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ft(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ct(`Unsupported field value: ${Me(t)}`)}(n,e)}function kn(n,e){const t={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):je(n,(r,s)=>{const i=vt(s,e.rt(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function xn(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof F||n instanceof yt||n instanceof ne||n instanceof O||n instanceof Cn)}function Fn(n,e,t){if(!xn(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Me(t);throw r==="an object"?e.ct(n+" a custom object"):e.ct(n+" "+r)}}function lo(n,e,t){if((e=Z(e))instanceof gt)return e._internalPath;if(typeof e=="string")return Pn(n,e);throw $e("Field path arguments must be of type string or ",n,!1,void 0,t)}const uo=new RegExp("[~\\*/\\[\\]]");function Pn(n,e,t){if(e.search(uo)>=0)throw $e(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new gt(...e.split("."))._internalPath}catch{throw $e(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $e(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new u(h,a+n+c)}function ho(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Rn{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new O(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ln("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Vn extends Rn{data(){return super.data()}}class fo{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Ln(n,e){return typeof e=="string"?Pn(n,e):e instanceof gt?e._internalPath:e._delegate._internalPath}/**
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
 */class bt{}class _t extends bt{}function Se(n,e,...t){let r=[];e instanceof bt&&r.push(e),r=r.concat(t),function(s){const i=s.filter(a=>a instanceof St).length,o=s.filter(a=>a instanceof Et).length;if(i>1||i>0&&o>0)throw new u(h,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Et extends _t{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Et(e,t,r)}_apply(e){const t=this._parse(e);return Bn(e._query,t),new z(e.firestore,e.converter,ot(e._query,t))}_parse(e){const t=On(e.firestore);return function(s,i,o,a,c,l,d){let g;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new u(h,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Zt(d,l);const w=[];for(const Q of d)w.push(Xt(a,s,Q));g={arrayValue:{values:w}}}else g=Xt(a,s,d)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Zt(d,l),g=co(o,i,d,l==="in"||l==="not-in");return R.create(c,l,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class St extends bt{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new St(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ee.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)Bn(i,a),i=ot(i,a)}(e._query,t),new z(e.firestore,e.converter,ot(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class It extends _t{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new It(e,t)}_apply(e){const t=function(r,s,i){if(r.startAt!==null)throw new u(h,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new u(h,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ce(s,i);return function(a,c){if(dt(a)===null){const l=ze(a);l!==null&&$n(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new z(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new qe(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function Ie(n,e="asc"){const t=e,r=Ln("orderBy",n);return It._create(r,t)}class Tt extends _t{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Tt(e,t,r)}_apply(e){return new z(e.firestore,e.converter,function(t,r,s){return new qe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),r,s,t.startAt,t.endAt)}(e._query,this._limit,this._limitType))}}function Dt(n){return fi("limit",n),Tt._create("limit",n,"F")}function Xt(n,e,t){if(typeof(t=Z(t))=="string"){if(t==="")throw new u(h,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Oi(e)&&t.indexOf("/")!==-1)throw new u(h,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(b.fromString(t));if(!T.isDocumentKey(r))throw new u(h,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jt(n,new T(r))}if(t instanceof O)return jt(n,t._key);throw new u(h,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Me(t)}.`)}function Zt(n,e){if(!Array.isArray(n)||n.length===0)throw new u(h,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Bn(n,e){if(e.isInequality()){const r=ze(n),s=e.field;if(r!==null&&!r.isEqual(s))throw new u(h,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=dt(n);i!==null&&$n(n,s,i)}const t=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new u(h,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new u(h,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function $n(n,e,t){if(!t.isEqual(e))throw new u(h,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */function po(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Mn extends class{convertValue(e,t="none"){switch(W(e)){case 0:return null;case 1:return e.booleanValue;case 2:return v(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ye(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return je(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new yt(v(e.latitude),v(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=vn(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(we(e));default:return null}}convertTimestamp(e){const t=K(e);return new F(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=b.fromString(e);x(An(r));const s=new me(r.get(1),r.get(3)),i=new T(r.popFirst(5));return s.isEqual(t)||ut(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ne(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new O(this.firestore,null,t)}}function Y(n){const e=mt((n=Ue(n,O)).firestore),t=new Mn(n.firestore);return eo(e,[n._key]).then(r=>{x(r.length===1);const s=r[0];return new Rn(n.firestore,t,n._key,s.isFoundDocument()?s:null,n.converter)})}function Te(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new u(fn,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Ue(n,z))._query);const e=mt(n.firestore),t=new Mn(n.firestore);return to(e,n._query).then(r=>{const s=r.map(i=>new Vn(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new fo(n,s)})}function ie(n,e,t){const r=po((n=Ue(n,O)).converter,e,t),s=ao(On(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return Zi(mt(n.firestore),[s.toMutation(n._key,le.none())])}(function(n){se=n})(`${Vs}_lite`),ke(new fe("firestore/lite",(n,{instanceIdentifier:e,options:t})=>{const r=n.getProvider("app").getImmediate(),s=new Ke(new oi(n.getProvider("auth-internal")),new ui(n.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new u(h,'"projectId" not provided in firebase.initializeApp.');return new me(i.options.projectId,o)}(r,e),r);return t&&s._setSettings(t),s},"PUBLIC").setMultipleInstances(!0)),X("firestore-lite","3.12.0",""),X("firestore-lite","3.12.0","esm2017");const mo={apiKey:"AIzaSyDYHZD3qXhHcDa367tMXjHz7qzaZFYRA4c",authDomain:"gold-smith-jewelers.firebaseapp.com",projectId:"gold-smith-jewelers",storageBucket:"gold-smith-jewelers.appspot.com",messagingSenderId:"705110080489",appId:"1:705110080489:web:d8228e6b206399c5c5e978",measurementId:"G-M8LFGYRVKL"},go=ln(mo),A=no(go);class yo{constructor(){this.collectionName="Invoices"}async addOrUpdate(e){const t=D(A,this.collectionName);var r=await Y(C(t,e.invoiceNumber));if(r.exists())throw"Invoice cannot be updated";await ie(C(t,e.invoiceNumber),e)}async list(e,t,r){const s=D(A,this.collectionName),i=Se(s,Ie("purchaseDate","desc"),Dt(10)),a=(await Te(i)).docs.map(l=>l.data());if(r){var c=r.toLowerCase().trim();return _.filter(a,function(l){return l.invoiceNumber.toLowerCase().includes(c)||l.customer.toLowerCase().includes(c)})}return a}async getById(e){const t=D(A,this.collectionName);var r=await Y(C(t,e));if(r.exists())return r.data()}}class wo{constructor(){this.collectionName="settings",this.settings=[,,]}async addOrUpdate(e){const t=D(A,this.collectionName);await ie(C(t,e.identifier),e)}list(){}async getById(e){const t=D(A,this.collectionName),r=await Y(C(t,e));return r.exists()?r.data():{identifier:e}}}class vo{constructor(){this.users=[]}addOrUpdate(e){this.users=_.filter(this.users,function(t){return t.name!=e.name}),this.users.push(e)}list(){return[...this.users]}setStatus(e,t){var r=_.filter(this.users,function(s){return s.name==e.name});r&&(r[0].Status=t)}}class bo{constructor(){this.collectionName="rates"}async addOrUpdate(e){let t=de.getTodayAsString();const r=D(A,this.collectionName);await ie(C(r,t),{rate:e.rate,date:t})}async list(){const e=D(A,this.collectionName),t=Se(e,Ie("date","desc"),Dt(10));return(await Te(t)).docs.map(i=>i.data())}async getTodaysRate(){let e=de.getTodayAsString();const t=D(A,this.collectionName);var r=await Y(C(t,e));if(r.exists())return r.data().rate}}class _o{constructor(){this.collectionName="Customers"}async list(e){const t=D(A,this.collectionName),r=Se(t,Ie("Name"));var i=(await Te(r)).docs.map(o=>o.data());if(e){const o=e.toLowerCase();i=_.filter(i,function(a){return a.Name.toLowerCase().includes(o)||a.Contact&&a.Contact.toString().toLowerCase().includes(o)})}return i}async addOrUpdate(e){const t=D(A,this.collectionName);e.id||(e.id=C(t).id),await ie(C(t,e.id),e)}async getById(e){const t=D(A,this.collectionName);var r=await Y(C(t,e));if(r.exists())return r.data()}}class Eo{constructor(){this.collectionName="Products"}async list(e){const t=D(A,this.collectionName),r=Se(t,Ie("Name"));var i=(await Te(r)).docs.map(o=>o.data());if(e){const o=e.toLowerCase();i=_.filter(i,function(a){return a.Name.toLowerCase().includes(o)})}return i}async addOrUpdate(e){const t=D(A,this.collectionName);e.id||(e.id=C(t).id),await ie(C(t,e.id),e)}}class So{constructor(){this.collectionName="Payments"}async addOrUpdate(e){const t=D(A,this.collectionName);var r=await Y(C(t,e.receiptNumber));if(r.exists())throw"Payment cannot be updated";await ie(C(t,e.receiptNumber),e)}async list(e,t){const r=D(A,this.collectionName),s=Se(r,Ie("paymentDate","desc"),Dt(10));return(await Te(s)).docs.map(a=>a.data())}async getById(e){const t=D(A,this.collectionName);var r=await Y(C(t,e));if(r.exists())return r.data()}}const Co=new yo,No=new vo,Oo=new bo,ko=new _o,xo=new Eo,Fo=new wo,Po=new So;export{Do as A,de as C,Ao as I,Po as a,ko as c,Co as i,xo as p,Oo as r,Fo as s,No as u};
