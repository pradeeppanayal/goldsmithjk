var _r=Object.defineProperty;var Er=(n,e,t)=>e in n?_r(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var F=(n,e,t)=>(Er(n,typeof e!="symbol"?e+"":e,t),t);import{o as ue,c as he,u as Yt,b as H,t as Jt,a as ot,F as Sr,k as Ir}from"./index-958b044c.js";class ge{static getTodayAsString(){return new Date().toISOString().split("T")[0]}static showAlert(e,t,r){e.alertmode=r,e.alertmsg=t,setTimeout(()=>{e.alertmsg="",e.alertmode=""},e.$alertShowDuration??2e3)}static getAsFormattedDate(e){return new Date(e).toLocaleString().toString()}static getNowAsMilliSeconds(){return new Date().getTime()}static capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}static capitalizeFirstLetterOfEveryWordForVariableName(e){if(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)}}static capitalizeFirstLetterOfEveryWord(e){const t=e.split(" ");for(let r=0;r<t.length;r++)t[r]=ge.capitalizeFirstLetter(t[r]);return t.join(" ")}static doConvert(e){if(!e)return"NA";e=Number(e.toFixed(3));var t=["","thousand","million","billion","trillion"],r=["zero","one","two","three","four","five","six","seven","eight","nine"],s=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],i=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if(e=e.toString(),e=e.replace(/[\, ]/g,""),e!=parseFloat(e))return"not a number ";var o=e.indexOf(".");if(o==-1&&(o=e.length),o>15)return"too big";for(var a=e.split(""),c="",l=0,h=0;h<o;h++)(o-h)%3==2?a[h]=="1"?(c+=s[Number(a[h+1])]+" ",h++,l=1):a[h]!=0&&(c+=i[a[h]-2]+" ",l=1):a[h]!=0&&(c+=r[a[h]]+" ",(o-h)%3==0&&(c+="hundred "),l=1),(o-h)%3==1&&(l&&(c+=t[(o-h-1)/3]+" "),l=0);if(o!=e.length){var y=e.length;c+="point ";for(var h=o+1;h<y;h++)c+=r[a[h]]+" "}return ge.capitalizeFirstLetterOfEveryWord(c.replace(/\s+/g," "))}static getAsFormattedAmount(e){return e?e.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}):"-"}}class Po{static generateId(e){return e+"-"+new Date().getTime().toString()+parseInt(Math.random()*1e4)}static generateInvoiceNumber(){return this.generateId("INV")}static generateReceiptNumber(){return this.generateId("PMT")}static generateQutationNumber(){return this.generateId("TMP")}}class at{}F(at,"APPLICATION_SETTINGS","ApplicationSettings"),F(at,"PRODUCT_SETTINGS","ProductSettings"),F(at,"CUSTOMER_SETTINGS","CustomerSettings");class Ve{}F(Ve,"SUCCESS","Success"),F(Ve,"ERROR","Error");class P{}F(P,"INVOICES","Invoices"),F(P,"SETTINGS","settings"),F(P,"RATES","rates"),F(P,"CCUSTOMERS","Customers"),F(P,"PRODUCTS","Products"),F(P,"PAYMENTS","Payments");const Tr={xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},Ar=Ir('<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></symbol>',3),Dr=[Ar],Cr={key:0},Nr={key:0,class:"alert alert-danger d-flex align-items-center alert-dismissible fade show",role:"alert"},Or=H("svg",{class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Danger:"},[H("use",{"xlink:href":"#exclamation-triangle-fill"})],-1),kr=H("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),xr={key:1,class:"alert alert-success d-flex align-items-center alert-dismissible fade show",role:"alert"},Rr=H("svg",{class:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Success:"},[H("use",{"xlink:href":"#check-circle-fill"})],-1),Fr=H("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),Pr={props:["msg","mode"]},Vo=Object.assign(Pr,{__name:"CAlert",setup(n){return(e,t)=>(ue(),he(Sr,null,[(ue(),he("svg",Tr,Dr)),n.msg&&n.mode?(ue(),he("div",Cr,[n.mode==Yt(Ve).ERROR?(ue(),he("div",Nr,[Or,H("div",null,Jt(n.msg),1),kr])):ot("",!0),n.mode==Yt(Ve).SUCCESS?(ue(),he("div",xr,[Rr,H("div",null,Jt(n.msg),1),Fr])):ot("",!0)])):ot("",!0)],64))}});/**
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
 */const An=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Vr=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,h=i>>2,y=(i&3)<<4|a>>4;let m=(a&15)<<2|l>>6,V=l&63;c||(V=64,o||(m=64)),r.push(t[h],t[y],t[m],t[V])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(An(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||y==null)throw new Lr;const m=i<<2|a>>4;if(r.push(m),l!==64){const V=a<<4&240|l>>2;if(r.push(V),y!==64){const te=l<<6&192|y;r.push(te)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Lr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mr=function(n){const e=An(n);return Dn.encodeByteArray(e,!0)},Le=function(n){return Mr(n).replace(/\./g,"")},Br=function(n){try{return Dn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $r(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ur=()=>$r().__FIREBASE_DEFAULTS__,jr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Br(n[1]);return e&&JSON.parse(e)},Cn=()=>{try{return Ur()||jr()||qr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zr=n=>{var e,t;return(t=(e=Cn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Hr=n=>{const e=zr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Nn=()=>{var n;return(n=Cn())===null||n===void 0?void 0:n.config};/**
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
 */class Gr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Kr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Le(JSON.stringify(t)),Le(JSON.stringify(o)),a].join(".")}function Wr(){try{return typeof indexedDB=="object"}catch{return!1}}function Qr(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Yr="FirebaseError";class ae extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Yr,Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Jr(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ae(s,a,r)}}function Jr(n,e){return n.replace(Xr,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xr=/\{\$([^}]+)}/g;function mt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Xt(i)&&Xt(o)){if(!mt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Xt(n){return n!==null&&typeof n=="object"}/**
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
 */function $(n){return n&&n._delegate?n._delegate:n}class ye{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const K="[DEFAULT]";/**
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
 */class Zr{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Gr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ts(e))try{this.getOrInitializeService({instanceIdentifier:K})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=K){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=K){return this.instances.has(e)}getOptions(e=K){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:es(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=K){return this.component?this.component.multipleInstances?e:K:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function es(n){return n===K?void 0:n}function ts(n){return n.instantiationMode==="EAGER"}/**
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
 */class ns{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var p;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(p||(p={}));const rs={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},ss=p.INFO,is={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},os=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=is[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kn{constructor(e){this.name=e,this._logLevel=ss,this._logHandler=os,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}}const as=(n,e)=>e.some(t=>n instanceof t);let Zt,en;function cs(){return Zt||(Zt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ls(){return en||(en=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xn=new WeakMap,pt=new WeakMap,Rn=new WeakMap,ct=new WeakMap,It=new WeakMap;function us(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(j(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xn.set(t,n)}).catch(()=>{}),It.set(e,n),e}function hs(n){if(pt.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});pt.set(n,e)}let gt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return pt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rn.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return j(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ds(n){gt=n(gt)}function fs(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(lt(this),e,...t);return Rn.set(r,e.sort?e.sort():[e]),j(r)}:ls().includes(n)?function(...e){return n.apply(lt(this),e),j(xn.get(this))}:function(...e){return j(n.apply(lt(this),e))}}function ms(n){return typeof n=="function"?fs(n):(n instanceof IDBTransaction&&hs(n),as(n,cs())?new Proxy(n,gt):n)}function j(n){if(n instanceof IDBRequest)return us(n);if(ct.has(n))return ct.get(n);const e=ms(n);return e!==n&&(ct.set(n,e),It.set(e,n)),e}const lt=n=>It.get(n);function ps(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=j(o);return r&&o.addEventListener("upgradeneeded",c=>{r(j(o.result),c.oldVersion,c.newVersion,j(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const gs=["get","getKey","getAll","getAllKeys","count"],ys=["put","add","delete","clear"],ut=new Map;function tn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ut.get(e))return ut.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ys.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gs.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return ut.set(e,i),i}ds(n=>({...n,get:(e,t,r)=>tn(e,t)||n.get(e,t,r),has:(e,t)=>!!tn(e,t)||n.has(e,t)}));/**
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
 */class ws{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bs(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function bs(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yt="@firebase/app",nn="0.9.10";/**
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
 */const W=new kn("@firebase/app"),vs="@firebase/app-compat",_s="@firebase/analytics-compat",Es="@firebase/analytics",Ss="@firebase/app-check-compat",Is="@firebase/app-check",Ts="@firebase/auth",As="@firebase/auth-compat",Ds="@firebase/database",Cs="@firebase/database-compat",Ns="@firebase/functions",Os="@firebase/functions-compat",ks="@firebase/installations",xs="@firebase/installations-compat",Rs="@firebase/messaging",Fs="@firebase/messaging-compat",Ps="@firebase/performance",Vs="@firebase/performance-compat",Ls="@firebase/remote-config",Ms="@firebase/remote-config-compat",Bs="@firebase/storage",$s="@firebase/storage-compat",Us="@firebase/firestore",js="@firebase/firestore-compat",qs="firebase",zs="9.22.0";/**
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
 */const wt="[DEFAULT]",Hs={[yt]:"fire-core",[vs]:"fire-core-compat",[Es]:"fire-analytics",[_s]:"fire-analytics-compat",[Is]:"fire-app-check",[Ss]:"fire-app-check-compat",[Ts]:"fire-auth",[As]:"fire-auth-compat",[Ds]:"fire-rtdb",[Cs]:"fire-rtdb-compat",[Ns]:"fire-fn",[Os]:"fire-fn-compat",[ks]:"fire-iid",[xs]:"fire-iid-compat",[Rs]:"fire-fcm",[Fs]:"fire-fcm-compat",[Ps]:"fire-perf",[Vs]:"fire-perf-compat",[Ls]:"fire-rc",[Ms]:"fire-rc-compat",[Bs]:"fire-gcs",[$s]:"fire-gcs-compat",[Us]:"fire-fst",[js]:"fire-fst-compat","fire-js":"fire-js",[qs]:"fire-js-all"};/**
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
 */const Me=new Map,bt=new Map;function Gs(n,e){try{n.container.addComponent(e)}catch(t){W.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Be(n){const e=n.name;if(bt.has(e))return W.debug(`There were multiple attempts to register component ${e}.`),!1;bt.set(e,n);for(const t of Me.values())Gs(t,n);return!0}function Ks(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Ws={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},q=new On("app","Firebase",Ws);/**
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
 */class Qs{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}/**
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
 */const Ys=zs;function Fn(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wt,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw q.create("bad-app-name",{appName:String(s)});if(t||(t=Nn()),!t)throw q.create("no-options");const i=Me.get(s);if(i){if(mt(t,i.options)&&mt(r,i.config))return i;throw q.create("duplicate-app",{appName:s})}const o=new ns(s);for(const c of bt.values())o.addComponent(c);const a=new Qs(t,r,o);return Me.set(s,a),a}function Js(n=wt){const e=Me.get(n);if(!e&&n===wt&&Nn())return Fn();if(!e)throw q.create("no-app",{appName:n});return e}function re(n,e,t){var r;let s=(r=Hs[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),W.warn(a.join(" "));return}Be(new ye(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Xs="firebase-heartbeat-database",Zs=1,we="firebase-heartbeat-store";let ht=null;function Pn(){return ht||(ht=ps(Xs,Zs,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(we)}}}).catch(n=>{throw q.create("idb-open",{originalErrorMessage:n.message})})),ht}async function ei(n){try{return await(await Pn()).transaction(we).objectStore(we).get(Vn(n))}catch(e){if(e instanceof ae)W.warn(e.message);else{const t=q.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});W.warn(t.message)}}}async function rn(n,e){try{const r=(await Pn()).transaction(we,"readwrite");await r.objectStore(we).put(e,Vn(n)),await r.done}catch(t){if(t instanceof ae)W.warn(t.message);else{const r=q.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});W.warn(r.message)}}}function Vn(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ti=1024,ni=30*24*60*60*1e3;class ri{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ii(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=ni}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sn(),{heartbeatsToSend:t,unsentEntries:r}=si(this._heartbeatsCache.heartbeats),s=Le(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sn(){return new Date().toISOString().substring(0,10)}function si(n,e=ti){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),on(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),on(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ii{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wr()?Qr().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ei(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function on(n){return Le(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function oi(n){Be(new ye("platform-logger",e=>new ws(e),"PRIVATE")),Be(new ye("heartbeat",e=>new ri(e),"PRIVATE")),re(yt,nn,n),re(yt,nn,"esm2017"),re("fire-js","")}oi("");var ai="firebase",ci="9.22.0";/**
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
 */re(ai,ci,"app");/**
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
 */class C{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}C.UNAUTHENTICATED=new C(null),C.GOOGLE_CREDENTIALS=new C("google-credentials-uid"),C.FIRST_PARTY=new C("first-party-uid"),C.MOCK_USER=new C("mock-user");/**
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
 */let ce="9.22.0";/**
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
 */const ie=new kn("@firebase/firestore");function Q(n,...e){if(ie.logLevel<=p.DEBUG){const t=e.map(Tt);ie.debug(`Firestore (${ce}): ${n}`,...t)}}function Qe(n,...e){if(ie.logLevel<=p.ERROR){const t=e.map(Tt);ie.error(`Firestore (${ce}): ${n}`,...t)}}function Ln(n,...e){if(ie.logLevel<=p.WARN){const t=e.map(Tt);ie.warn(`Firestore (${ce}): ${n}`,...t)}}function Tt(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function g(n="Unexpected state"){const e=`FIRESTORE (${ce}) INTERNAL ASSERTION FAILED: `+n;throw Qe(e),new Error(e)}function x(n,e){n||g()}function Ie(n,e){return n}/**
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
 */const an="ok",At="cancelled",se="unknown",d="invalid-argument",Mn="deadline-exceeded",Bn="not-found",li="already-exists",$n="permission-denied",$e="unauthenticated",Un="resource-exhausted",Y="failed-precondition",Dt="aborted",jn="out-of-range",Ct="unimplemented",qn="internal",zn="unavailable",ui="data-loss";class u extends ae{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Hn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(C.UNAUTHENTICATED))}shutdown(){}}class di{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fi{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(x(typeof e.accessToken=="string"),new Hn(e.accessToken,new C(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class mi{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=C.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class pi{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new mi(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(C.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yi{constructor(e){this.l=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(x(typeof e.token=="string"),new gi(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class wi{constructor(e,t,r,s,i,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class be{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new be("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof be&&e.projectId===this.projectId&&e.database===this.database}}class ve{constructor(e,t,r){t===void 0?t=0:t>e.length&&g(),r===void 0?r=e.length-t:r>e.length-t&&g(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ve.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ve?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class v extends ve{construct(e,t,r){return new v(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new u(d,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new v(t)}static emptyPath(){return new v([])}}const bi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class O extends ve{construct(e,t,r){return new O(e,t,r)}static isValidIdentifier(e){return bi.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),O.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new O(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new u(d,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new u(d,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new u(d,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new u(d,"Unterminated ` in path: "+e);return new O(t)}static emptyPath(){return new O([])}}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(v.fromString(e))}static fromName(e){return new I(v.fromString(e).popFirst(5))}static empty(){return new I(v.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&v.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return v.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new v(e.slice()))}}/**
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
 */function Gn(n,e,t){if(!t)throw new u(d,`Function ${n}() cannot be called with an empty ${e}.`)}function cn(n){if(!I.isDocumentKey(n))throw new u(d,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ln(n){if(I.isDocumentKey(n))throw new u(d,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ye(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":g()}function Te(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new u(d,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ye(n);throw new u(d,`Expected type '${e.name}', but it was: ${t}`)}}return n}function vi(n,e){if(e<=0)throw new u(d,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Kn(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */let xe=null;function _i(){return xe===null?xe=268435456+Math.round(2147483648*Math.random()):xe++,"0x"+xe.toString(16)}/**
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
 */function Wn(n){return n==null}function Ue(n){return n===0&&1/n==-1/0}/**
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
 */const Ei={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var un,f;function hn(n){if(n===void 0)return Qe("RPC_ERROR","HTTP error has no status"),se;switch(n){case 200:return an;case 400:return Y;case 401:return $e;case 403:return $n;case 404:return Bn;case 409:return Dt;case 416:return jn;case 429:return Un;case 499:return At;case 500:return se;case 501:return Ct;case 503:return zn;case 504:return Mn;default:return n>=200&&n<300?an:n>=400&&n<500?Y:n>=500&&n<600?qn:se}}/**
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
 */(f=un||(un={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";class Si extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.m=t+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,t,r,s,i){const o=_i(),a=this.I(e,t);Q("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.T(c,s,i),this.A(e,a,c,r).then(l=>(Q("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ln("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}R(e,t,r,s,i,o){return this.v(e,t,r,s,i)}T(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ce,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}I(e,t){const r=Ei[e];return`${this.m}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.P=t}V(e,t){throw new Error("Not supported by FetchConnection")}async A(e,t,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.P(t,{method:"POST",headers:r,body:o})}catch(c){const l=c;throw new u(hn(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const l=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new u(hn(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
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
 */function Ii(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ti{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ii(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function E(n,e){return n<e?-1:n>e?1:0}function Qn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */function dn(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ae(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class Ai extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class U{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ai("Invalid base64 string: "+s):s}}(e);return new U(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new U(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return E(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}U.EMPTY_BYTE_STRING=new U("");const Di=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function J(n){if(x(!!n),typeof n=="string"){let e=0;const t=Di.exec(n);if(x(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:b(n.seconds),nanos:b(n.nanos)}}function b(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?U.fromBase64String(n):U.fromUint8Array(n)}/**
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
 */class R{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new u(d,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new u(d,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new u(d,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new u(d,"Timestamp seconds out of range: "+e)}static now(){return R.fromMillis(Date.now())}static fromDate(e){return R.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new R(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?E(this.nanoseconds,e.nanoseconds):E(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Yn(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Jn(n){const e=n.mapValue.fields.__previous_value__;return Yn(e)?Jn(e):e}function Ee(n){const e=J(n.mapValue.fields.__local_write_time__.timestampValue);return new R(e.seconds,e.nanos)}/**
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
 */const Re={fields:{__type__:{stringValue:"__max__"}}};function X(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yn(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:g()}function je(n,e){if(n===e)return!0;const t=X(n);if(t!==X(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ee(n).isEqual(Ee(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=J(r.timestampValue),o=J(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return _e(r.bytesValue).isEqual(_e(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return b(r.geoPointValue.latitude)===b(s.geoPointValue.latitude)&&b(r.geoPointValue.longitude)===b(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return b(r.integerValue)===b(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=b(r.doubleValue),o=b(s.doubleValue);return i===o?Ue(i)===Ue(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Qn(n.arrayValue.values||[],e.arrayValue.values||[],je);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(dn(i)!==dn(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!je(i[a],o[a])))return!1;return!0}(n,e);default:return g()}}function Se(n,e){return(n.values||[]).find(t=>je(t,e))!==void 0}function qe(n,e){if(n===e)return 0;const t=X(n),r=X(e);if(t!==r)return E(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return E(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=b(s.integerValue||s.doubleValue),a=b(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return fn(n.timestampValue,e.timestampValue);case 4:return fn(Ee(n),Ee(e));case 5:return E(n.stringValue,e.stringValue);case 6:return function(s,i){const o=_e(s),a=_e(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=E(o[c],a[c]);if(l!==0)return l}return E(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=E(b(s.latitude),b(i.latitude));return o!==0?o:E(b(s.longitude),b(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=qe(o[c],a[c]);if(l)return l}return E(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Re&&i===Re)return 0;if(s===Re)return 1;if(i===Re)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let h=0;h<a.length&&h<l.length;++h){const y=E(a[h],l[h]);if(y!==0)return y;const m=qe(o[a[h]],c[l[h]]);if(m!==0)return m}return E(a.length,l.length)}(n.mapValue,e.mapValue);default:throw g()}}function fn(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return E(n,e);const t=J(n),r=J(e),s=E(t.seconds,r.seconds);return s!==0?s:E(t.nanos,r.nanos)}function mn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xn(n){return!!n&&"arrayValue"in n}function pn(n){return!!n&&"nullValue"in n}function gn(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function dt(n){return!!n&&"mapValue"in n}function de(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ae(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=de(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=de(n.arrayValue.values[t]);return e}return Object.assign({},n)}class yn{constructor(e,t){this.position=e,this.inclusive=t}}/**
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
 */class Zn{}class L extends Zn{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ci(e,t,r):t==="array-contains"?new ki(e,r):t==="in"?new xi(e,r):t==="not-in"?new Ri(e,r):t==="array-contains-any"?new Fi(e,r):new L(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ni(e,r):new Oi(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(qe(t,this.value)):t!==null&&X(this.value)===X(t)&&this.matchesComparison(qe(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return g()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class De extends Zn{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new De(e,t)}matches(e){return this.op==="and"?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(t=>t.isInequality());return e!==null?e.field:null}F(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}class Ci extends L{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ni extends L{constructor(e,t){super(e,"in",t),this.keys=er("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Oi extends L{constructor(e,t){super(e,"not-in",t),this.keys=er("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function er(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class ki extends L{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xn(t)&&Se(t.arrayValue,this.value)}}class xi extends L{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Se(this.value.arrayValue,t)}}class Ri extends L{constructor(e,t){super(e,"not-in",t)}matches(e){if(Se(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Se(this.value.arrayValue,t)}}class Fi extends L{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Se(this.value.arrayValue,r))}}/**
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
 */class fe{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class w{constructor(e){this.timestamp=e}static fromTimestamp(e){return new w(e)}static min(){return new w(new R(0,0))}static max(){return new w(new R(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ze{constructor(e,t){this.comparator=e,this.root=t||T.EMPTY}insert(e,t){return new ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,T.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,T.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fe(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fe(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fe(this.root,e,this.comparator,!0)}}class Fe{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class T{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??T.RED,this.left=s??T.EMPTY,this.right=i??T.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new T(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return T.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return T.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,T.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,T.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw g();const e=this.left.check();if(e!==this.right.check())throw g();return e+(this.isRed()?0:1)}}T.EMPTY=null,T.RED=!0,T.BLACK=!1;T.EMPTY=new class{constructor(){this.size=0}get key(){throw g()}get value(){throw g()}get color(){throw g()}get left(){throw g()}get right(){throw g()}copy(n,e,t,r,s){return this}insert(n,e,t){return new T(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wn(this.data.getIterator())}getIteratorFrom(e){return new wn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new He(this.comparator);return t.data=e,t}}class wn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Z{constructor(e){this.fields=e,e.sort(O.comparator)}static empty(){return new Z([])}unionWith(e){let t=new He(O.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Z(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class k{constructor(e){this.value=e}static empty(){return new k({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!dt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=de(t)}setAll(e){let t=O.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=de(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());dt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];dt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ae(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new k(de(this.value))}}/**
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
 */class M{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new M(e,0,w.min(),w.min(),w.min(),k.empty(),0)}static newFoundDocument(e,t,r,s){return new M(e,1,t,w.min(),r,s,0)}static newNoDocument(e,t){return new M(e,2,t,w.min(),w.min(),k.empty(),0)}static newUnknownDocument(e,t){return new M(e,3,t,w.min(),w.min(),k.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=k.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=k.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof M&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new M(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pi{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function bn(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Pi(n,e,t,r,s,i,o)}/**
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
 */class Je{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function Ot(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Xe(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Vi(n){return n.collectionGroup!==null}function vn(n){const e=Ie(n);if(e.q===null){e.q=[];const t=Xe(e),r=Ot(e);if(t!==null&&r===null)t.isKeyField()||e.q.push(new fe(t)),e.q.push(new fe(O.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new fe(O.keyField(),i))}}}return e.q}function Li(n){const e=Ie(n);if(!e.O)if(e.limitType==="F")e.O=bn(e.path,e.collectionGroup,vn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of vn(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new fe(i.field,o))}const r=e.endAt?new yn(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new yn(e.startAt.position,e.startAt.inclusive):null;e.O=bn(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.O}function vt(n,e){e.getFirstInequalityField(),Xe(n);const t=n.filters.concat([e]);return new Je(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}/**
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
 */function Mi(n,e){return function(t){return typeof t=="number"&&Number.isInteger(t)&&!Ue(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,r){if(t.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ue(r)?"-0":r}}(n,e)}/**
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
 */class Ze{constructor(){this._=void 0}}class Bi extends Ze{}class $i extends Ze{constructor(e){super(),this.elements=e}}class Ui extends Ze{constructor(e){super(),this.elements=e}}class ji extends Ze{constructor(e,t){super(),this.serializer=e,this.k=t}}class B{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new B}static exists(e){return new B(void 0,e)}static updateTime(e){return new B(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class et{}class tr extends et{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kt extends et{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class nr extends et{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rr extends et{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const qi=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zi=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Hi=(()=>({and:"AND",or:"OR"}))();class Gi{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _t(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ki(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Wi(n,e){return _t(n,e.toTimestamp())}function me(n){return x(!!n),w.fromTimestamp(function(e){const t=J(e);return new R(t.seconds,t.nanos)}(n))}function xt(n,e){return function(t){return new v(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Ge(n,e){return xt(n.databaseId,e.path)}function Et(n,e){const t=function(s){const i=v.fromString(s);return x(or(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new u(d,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new u(d,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I((x((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function _n(n,e){return xt(n.databaseId,e)}function sr(n){return new v(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function En(n,e,t){return{name:Ge(n,e),fields:t.value.mapValue.fields}}function Qi(n,e){return"found"in e?function(t,r){x(!!r.found),r.found.name,r.found.updateTime;const s=Et(t,r.found.name),i=me(r.found.updateTime),o=r.found.createTime?me(r.found.createTime):w.min(),a=new k({mapValue:{fields:r.found.fields}});return M.newFoundDocument(s,i,o,a)}(n,e):"missing"in e?function(t,r){x(!!r.missing),x(!!r.readTime);const s=Et(t,r.missing),i=me(r.readTime);return M.newNoDocument(s,i)}(n,e):g()}function Yi(n,e){let t;if(e instanceof tr)t={update:En(n,e.key,e.value)};else if(e instanceof nr)t={delete:Ge(n,e.key)};else if(e instanceof kt)t={update:En(n,e.key,e.data),updateMask:to(e.fieldMask)};else{if(!(e instanceof rr))return g();t={verify:Ge(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Bi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof $i)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ui)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ji)return{fieldPath:i.field.canonicalString(),increment:o.k};throw g()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Wi(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:g()}(n,e.precondition)),t}function Ji(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=_n(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=_n(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return ir(De.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:ne(h.field),direction:Xi(h.dir)}}(l))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Wn(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Xi(n){return qi[n]}function Zi(n){return zi[n]}function eo(n){return Hi[n]}function ne(n){return{fieldPath:n.canonicalString()}}function ir(n){return n instanceof L?function(e){if(e.op==="=="){if(gn(e.value))return{unaryFilter:{field:ne(e.field),op:"IS_NAN"}};if(pn(e.value))return{unaryFilter:{field:ne(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(gn(e.value))return{unaryFilter:{field:ne(e.field),op:"IS_NOT_NAN"}};if(pn(e.value))return{unaryFilter:{field:ne(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ne(e.field),op:Zi(e.op),value:e.value}}}(n):n instanceof De?function(e){const t=e.getFilters().map(r=>ir(r));return t.length===1?t[0]:{compositeFilter:{op:eo(e.op),filters:t}}}(n):g()}function to(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function or(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Rt(n){return new Gi(n,!0)}/**
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
 */class ar{constructor(e,t,r=1e3,s=1.5,i=6e4){this.C=e,this.timerId=t,this.M=r,this.L=s,this.U=i,this.j=0,this.B=null,this.W=Date.now(),this.reset()}reset(){this.j=0}G(){this.j=this.U}K(e){this.cancel();const t=Math.floor(this.j+this.Y()),r=Math.max(0,Date.now()-this.W),s=Math.max(0,t-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.j} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.B=this.C.enqueueAfterDelay(this.timerId,s,()=>(this.W=Date.now(),e())),this.j*=this.L,this.j<this.M&&(this.j=this.M),this.j>this.U&&(this.j=this.U)}H(){this.B!==null&&(this.B.skipDelay(),this.B=null)}cancel(){this.B!==null&&(this.B.cancel(),this.B=null)}Y(){return(Math.random()-.5)*this.j}}/**
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
 */class no extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.J=!1}X(){if(this.J)throw new u(Y,"The client has already been terminated.")}v(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.v(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$e&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new u(se,s.toString())})}R(e,t,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.R(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$e&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new u(se,i.toString())})}terminate(){this.J=!0}}async function cr(n,e){const t=Ie(n),r=sr(t.serializer)+"/documents",s={writes:e.map(i=>Yi(t.serializer,i))};await t.v("Commit",r,s)}async function lr(n,e){const t=Ie(n),r=sr(t.serializer)+"/documents",s={documents:e.map(c=>Ge(t.serializer,c))},i=await t.R("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(c=>{const l=Qi(t.serializer,c);o.set(l.key.toString(),l)});const a=[];return e.forEach(c=>{const l=o.get(c.toString());x(!!l),a.push(l)}),a}async function ro(n,e){const t=Ie(n),r=Ji(t.serializer,Li(e));return(await t.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const c=Et(i,o.name),l=me(o.updateTime),h=o.createTime?me(o.createTime):w.min(),y=new k({mapValue:{fields:o.fields}}),m=M.newFoundDocument(c,l,h,y);return a&&m.setHasCommittedMutations(),a?m.setHasCommittedMutations():m}(t.serializer,s.document,void 0))}/**
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
 */const pe=new Map;function tt(n){if(n._terminated)throw new u(Y,"The client has already been terminated.");if(!pe.has(n)){Q("ComponentProvider","Initializing Datastore");const i=function(c){return new Si(c,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new wi(e,t,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Kn(s.experimentalLongPollingOptions),s.useFetchStreams))),o=Rt(n._databaseId),a=function(c,l,h,y){return new no(c,l,h,y)}(n._authCredentials,n._appCheckCredentials,i,o);pe.set(n,a)}var e,t,r,s;/**
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
*/return pe.get(n)}class Sn{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new u(d,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new u(d,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,i,o,a){if(i===!0&&a===!0)throw new u(d,`${s} and ${o} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kn((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new u(d,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new u(d,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new u(d,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Ce{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sn({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new u(Y,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new u(Y,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sn(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new hi;switch(t.type){case"firstParty":return new pi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new u(d,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pe.get(e);t&&(Q("ComponentProvider","Removing Datastore"),pe.delete(e),t.terminate())}(this),Promise.resolve()}}function so(n,e){const t=typeof n=="object"?n:Js(),r=typeof n=="string"?n:e||"(default)",s=Ks(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Hr("firestore");i&&io(s,...i)}return s}function io(n,e,t,r={}){var s;const i=(n=Te(n,Ce))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ln("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=C.MOCK_USER;else{o=Kr(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new u(d,"mockUserToken must contain 'sub' or 'user_id' field!");a=new C(c)}n._authCredentials=new di(new Hn(o,a))}}/**
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
 */class N{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new z(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new N(this.firestore,e,this._key)}}class G{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new G(this.firestore,e,this._query)}}class z extends G{constructor(e,t,r){super(e,t,new Je(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new N(this.firestore,null,new I(e))}withConverter(e){return new z(this.firestore,e,this._path)}}function A(n,e,...t){if(n=$(n),Gn("collection","path",e),n instanceof Ce){const r=v.fromString(e,...t);return ln(r),new z(n,null,r)}{if(!(n instanceof N||n instanceof z))throw new u(d,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(v.fromString(e,...t));return ln(r),new z(n.firestore,null,r)}}function D(n,e,...t){if(n=$(n),arguments.length===1&&(e=Ti.N()),Gn("doc","path",e),n instanceof Ce){const r=v.fromString(e,...t);return cn(r),new N(n,null,new I(r))}{if(!(n instanceof N||n instanceof z))throw new u(d,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(v.fromString(e,...t));return cn(r),new N(n.firestore,n instanceof z?n.converter:null,new I(r))}}/**
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
 */class oe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oe(U.fromBase64String(e))}catch(t){throw new u(d,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new oe(U.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new u(d,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new O(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ft{constructor(e){this._methodName=e}}/**
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
 */class Pt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new u(d,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new u(d,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return E(this._lat,e._lat)||E(this._long,e._long)}}/**
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
 */const oo=/^__.*__$/;class ao{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new tr(e,this.data,t,this.fieldTransforms)}}class ur{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hr(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw g()}}class Vt{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new Vt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.it(e),s}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.tt(),s}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return Ke(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(hr(this.et)&&oo.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class co{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Rt(e)}ft(e,t,r,s=!1){return new Vt({et:e,methodName:t,lt:r,path:O.emptyPath(),st:!1,ht:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lt(n){const e=n._freezeSettings(),t=Rt(n._databaseId);return new co(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dr(n,e,t,r,s,i={}){const o=n.ft(i.merge||i.mergeFields?2:0,e,t,s);Mt("Data must be an object, but it was:",o,r);const a=fr(r,o);let c,l;if(i.merge)c=new Z(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const y of i.mergeFields){const m=St(e,y,t);if(!o.contains(m))throw new u(d,`Field '${m}' is specified in your field mask but missing from your input data.`);pr(h,m)||h.push(m)}c=new Z(h),l=o.fieldTransforms.filter(y=>c.covers(y.field))}else c=null,l=o.fieldTransforms;return new ao(new k(a),c,l)}class rt extends Ft{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e.ct(`${this._methodName}() can only appear at the top level of your update data`):e.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rt}}function lo(n,e,t,r){const s=n.ft(1,e,t);Mt("Data must be an object, but it was:",s,r);const i=[],o=k.empty();Ae(r,(c,l)=>{const h=Bt(e,c,t);l=$(l);const y=s.ot(h);if(l instanceof rt)i.push(h);else{const m=Ne(l,y);m!=null&&(i.push(h),o.set(h,m))}});const a=new Z(i);return new ur(o,a,s.fieldTransforms)}function uo(n,e,t,r,s,i){const o=n.ft(1,e,t),a=[St(e,r,t)],c=[s];if(i.length%2!=0)throw new u(d,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(St(e,i[m])),c.push(i[m+1]);const l=[],h=k.empty();for(let m=a.length-1;m>=0;--m)if(!pr(l,a[m])){const V=a[m];let te=c[m];te=$(te);const vr=o.ot(V);if(te instanceof rt)l.push(V);else{const Qt=Ne(te,vr);Qt!=null&&(l.push(V),h.set(V,Qt))}}const y=new Z(l);return new ur(h,y,o.fieldTransforms)}function ho(n,e,t,r=!1){return Ne(t,n.ft(r?4:3,e))}function Ne(n,e){if(mr(n=$(n)))return Mt("Unsupported field value:",e,n),fr(n,e);if(n instanceof Ft)return function(t,r){if(!hr(r.et))throw r.ct(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ct(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.st&&e.et!==4)throw e.ct("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=Ne(o,r.ut(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=$(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Mi(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=R.fromDate(t);return{timestampValue:_t(r.serializer,s)}}if(t instanceof R){const s=new R(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:_t(r.serializer,s)}}if(t instanceof Pt)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof oe)return{bytesValue:Ki(r.serializer,t._byteString)};if(t instanceof N){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xt(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ct(`Unsupported field value: ${Ye(t)}`)}(n,e)}function fr(n,e){const t={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ae(n,(r,s)=>{const i=Ne(s,e.rt(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function mr(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof R||n instanceof Pt||n instanceof oe||n instanceof N||n instanceof Ft)}function Mt(n,e,t){if(!mr(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Ye(t);throw r==="an object"?e.ct(n+" a custom object"):e.ct(n+" "+r)}}function St(n,e,t){if((e=$(e))instanceof nt)return e._internalPath;if(typeof e=="string")return Bt(n,e);throw Ke("Field path arguments must be of type string or ",n,!1,void 0,t)}const fo=new RegExp("[~\\*/\\[\\]]");function Bt(n,e,t){if(e.search(fo)>=0)throw Ke(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nt(...e.split("."))._internalPath}catch{throw Ke(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ke(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new u(d,a+n+c)}function pr(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class We{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new N(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($t("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gr extends We{data(){return super.data()}}class mo{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function $t(n,e){return typeof e=="string"?Bt(n,e):e instanceof nt?e._internalPath:e._delegate._internalPath}/**
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
 */class Ut{}class jt extends Ut{}function Oe(n,e,...t){let r=[];e instanceof Ut&&r.push(e),r=r.concat(t),function(s){const i=s.filter(a=>a instanceof qt).length,o=s.filter(a=>a instanceof st).length;if(i>1||i>0&&o>0)throw new u(d,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class st extends jt{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new st(e,t,r)}_apply(e){const t=this._parse(e);return yr(e._query,t),new G(e.firestore,e.converter,vt(e._query,t))}_parse(e){const t=Lt(e.firestore);return function(s,i,o,a,c,l,h){let y;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new u(d,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Tn(h,l);const m=[];for(const V of h)m.push(In(a,s,V));y={arrayValue:{values:m}}}else y=In(a,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Tn(h,l),y=ho(o,i,h,l==="in"||l==="not-in");return L.create(c,l,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function po(n,e,t){const r=e,s=$t("where",n);return st._create(s,r,t)}class qt extends Ut{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qt(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:De.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)yr(i,a),i=vt(i,a)}(e._query,t),new G(e.firestore,e.converter,vt(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zt extends jt{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new zt(e,t)}_apply(e){const t=function(r,s,i){if(r.startAt!==null)throw new u(d,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new u(d,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new fe(s,i);return function(a,c){if(Ot(a)===null){const l=Xe(a);l!==null&&wr(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new G(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Je(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function it(n,e="asc"){const t=e,r=$t("orderBy",n);return zt._create(r,t)}class Ht extends jt{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ht(e,t,r)}_apply(e){return new G(e.firestore,e.converter,function(t,r,s){return new Je(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),r,s,t.startAt,t.endAt)}(e._query,this._limit,this._limitType))}}function Gt(n){return vi("limit",n),Ht._create("limit",n,"F")}function In(n,e,t){if(typeof(t=$(t))=="string"){if(t==="")throw new u(d,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vi(e)&&t.indexOf("/")!==-1)throw new u(d,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(v.fromString(t));if(!I.isDocumentKey(r))throw new u(d,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mn(n,new I(r))}if(t instanceof N)return mn(n,t._key);throw new u(d,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ye(t)}.`)}function Tn(n,e){if(!Array.isArray(n)||n.length===0)throw new u(d,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yr(n,e){if(e.isInequality()){const r=Xe(n),s=e.field;if(r!==null&&!r.isEqual(s))throw new u(d,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Ot(n);i!==null&&wr(n,s,i)}const t=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new u(d,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new u(d,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function wr(n,e,t){if(!t.isEqual(e))throw new u(d,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */function br(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Kt extends class{convertValue(e,t="none"){switch(X(e)){case 0:return null;case 1:return e.booleanValue;case 2:return b(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_e(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw g()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ae(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Pt(b(e.latitude),b(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Jn(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ee(e));default:return null}}convertTimestamp(e){const t=J(e);return new R(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=v.fromString(e);x(or(r));const s=new be(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(t)||Qe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new oe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new N(this.firestore,null,t)}}function ee(n){const e=tt((n=Te(n,N)).firestore),t=new Kt(n.firestore);return lr(e,[n._key]).then(r=>{x(r.length===1);const s=r[0];return new We(n.firestore,t,n._key,s.isFoundDocument()?s:null,n.converter)})}function ke(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new u(Ct,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Te(n,G))._query);const e=tt(n.firestore),t=new Kt(n.firestore);return ro(e,n._query).then(r=>{const s=r.map(i=>new gr(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new mo(n,s)})}function le(n,e,t){const r=br((n=Te(n,N)).converter,e,t),s=dr(Lt(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return cr(tt(n.firestore),[s.toMutation(n._key,B.none())])}function Pe(n,e){if((n=$(n)).firestore!==e)throw new u(d,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class go{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new u(d,"Firestore transactions require all reads to be executed before all writes.");const t=await lr(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new nr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=I.fromPath(r);this.mutations.push(new rr(s,this.precondition(s)))}),await cr(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw g();t=w.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new u(Dt,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(w.min())?B.exists(!1):B.updateTime(t):B.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(w.min()))throw new u(d,"Can't update a document that doesn't exist.");return B.updateTime(t)}return B.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */const yo={maxAttempts:5};/**
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
 */class wo{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.yt=r.maxAttempts,this.gt=new ar(this.asyncQueue,"transaction_retry")}run(){this.yt-=1,this._t()}_t(){this.gt.K(async()=>{const e=new go(this.datastore),t=this.vt(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.bt(s)}))}).catch(r=>{this.bt(r)})})}vt(e){try{const t=this.updateFunction(e);return!Wn(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}bt(e){this.yt>0&&this.Et(e)?(this.yt-=1,this.asyncQueue.enqueueAndForget(()=>(this._t(),Promise.resolve()))):this.deferred.reject(e)}Et(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!function(r){switch(r){default:return g();case At:case se:case Mn:case Un:case qn:case zn:case $e:return!1;case d:case Bn:case li:case $n:case Y:case Dt:case jn:case Ct:case ui:return!0}}(t)}return!1}}/**
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
 */function ft(){return typeof document<"u"?document:null}/**
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
 */class Wt{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Wt(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new u(At,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */class bo{constructor(){this.It=Promise.resolve(),this.Tt=[],this.At=!1,this.Rt=[],this.Pt=null,this.Vt=!1,this.$t=!1,this.Nt=[],this.gt=new ar(this,"async_queue_retry"),this.Dt=()=>{const t=ft();t&&Q("AsyncQueue","Visibility state changed to "+t.visibilityState),this.gt.H()};const e=ft();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Dt)}get isShuttingDown(){return this.At}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ft(),this.xt(e)}enterRestrictedMode(e){if(!this.At){this.At=!0,this.$t=e||!1;const t=ft();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Dt)}}enqueue(e){if(this.Ft(),this.At)return new Promise(()=>{});const t=new Nt;return this.xt(()=>this.At&&this.$t?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Tt.push(e),this.St()))}async St(){if(this.Tt.length!==0){try{await this.Tt[0](),this.Tt.shift(),this.gt.reset()}catch(e){if(!function(t){return t.name==="IndexedDbTransactionError"}(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Tt.length>0&&this.gt.K(()=>this.St())}}xt(e){const t=this.It.then(()=>(this.Vt=!0,e().catch(r=>{this.Pt=r,this.Vt=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Qe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Vt=!1,r))));return this.It=t,t}enqueueAfterDelay(e,t,r){this.Ft(),this.Nt.indexOf(e)>-1&&(t=0);const s=Wt.createAndSchedule(this,e,t,r,i=>this.qt(i));return this.Rt.push(s),s}Ft(){this.Pt&&g()}verifyOperationInProgress(){}async Ot(){let e;do e=this.It,await e;while(e!==this.It)}kt(e){for(const t of this.Rt)if(t.timerId===e)return!0;return!1}Ct(e){return this.Ot().then(()=>{this.Rt.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Rt)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ot()})}Mt(e){this.Nt.push(e)}qt(e){const t=this.Rt.indexOf(e);this.Rt.splice(t,1)}}class vo{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Lt(e)}get(e){const t=Pe(e,this._firestore),r=new Kt(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return g();const i=s[0];if(i.isFoundDocument())return new We(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new We(this._firestore,r,t._key,null,t.converter);throw g()})}set(e,t,r){const s=Pe(e,this._firestore),i=br(s.converter,t,r),o=dr(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=Pe(e,this._firestore);let o;return o=typeof(t=$(t))=="string"||t instanceof nt?uo(this._dataReader,"Transaction.update",i._key,t,r,s):lo(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Pe(e,this._firestore);return this._transaction.delete(t._key),this}}function _o(n,e,t){const r=tt(n=Te(n,Ce)),s=Object.assign(Object.assign({},yo),t);(function(o){if(o.maxAttempts<1)throw new u(d,"Max attempts must be at least 1")})(s);const i=new Nt;return new wo(new bo,r,s,o=>e(new vo(n,o)),i).run(),i.promise}(function(n){ce=n})(`${Ys}_lite`),Be(new ye("firestore/lite",(n,{instanceIdentifier:e,options:t})=>{const r=n.getProvider("app").getImmediate(),s=new Ce(new fi(n.getProvider("auth-internal")),new yi(n.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new u(d,'"projectId" not provided in firebase.initializeApp.');return new be(i.options.projectId,o)}(r,e),r);return t&&s._setSettings(t),s},"PUBLIC").setMultipleInstances(!0)),re("firestore-lite","3.12.0",""),re("firestore-lite","3.12.0","esm2017");const Eo={apiKey:"AIzaSyDYHZD3qXhHcDa367tMXjHz7qzaZFYRA4c",authDomain:"gold-smith-jewelers.firebaseapp.com",projectId:"gold-smith-jewelers",storageBucket:"gold-smith-jewelers.appspot.com",messagingSenderId:"705110080489",appId:"1:705110080489:web:d8228e6b206399c5c5e978",measurementId:"G-M8LFGYRVKL"},So=Fn(Eo),S=so(So);class Io{constructor(){this.collectionName=P.INVOICES}async addOrUpdate(e){const t=A(S,this.collectionName);var r=await ee(D(t,e.invoiceNumber));if(r.exists())throw"Invoice cannot be updated";await le(D(t,e.invoiceNumber),e),await xo.addOrUpdate({receiptNumber:"R"+e.invoiceNumber,invoiceRef:e.invoiceNumber,paymentDate:e.purchaseDate,amount:-1*e.totals.totalAmount,customer:e.customer,customerId:e.customerId,description:"Auto added by purchase"+e.invoiceNumber})}async list(e,t,r){const s=A(S,this.collectionName),i=Oe(s,it("purchaseDate","desc"),Gt(10)),a=(await ke(i)).docs.map(l=>l.data());if(r){var c=r.toLowerCase().trim();return _.filter(a,function(l){return l.invoiceNumber.toLowerCase().includes(c)||l.customer.toLowerCase().includes(c)})}return a}async getById(e){const t=A(S,this.collectionName);var r=await ee(D(t,e));if(r.exists())return r.data()}}class To{constructor(){this.collectionName=P.SETTINGS}async addOrUpdate(e){const t=A(S,this.collectionName);await le(D(t,e.identifier),e)}list(){}async getById(e){const t=A(S,this.collectionName),r=await ee(D(t,e));return r.exists()?r.data():{identifier:e}}}class Ao{constructor(){this.users=[]}addOrUpdate(e){this.users=_.filter(this.users,function(t){return t.name!=e.name}),this.users.push(e)}list(){return[...this.users]}setStatus(e,t){var r=_.filter(this.users,function(s){return s.name==e.name});r&&(r[0].Status=t)}}class Do{constructor(){this.collectionName=P.RATES}async addOrUpdate(e){let t=ge.getTodayAsString();const r=A(S,this.collectionName);await le(D(r,t),{rate:e.rate,date:t})}async list(){const e=A(S,this.collectionName),t=Oe(e,it("date","desc"),Gt(10));return(await ke(t)).docs.map(i=>i.data())}async getTodaysRate(){let e=ge.getTodayAsString();const t=A(S,this.collectionName);var r=await ee(D(t,e));if(r.exists())return r.data().rate}}class Co{constructor(){this.collectionName=P.CCUSTOMERS}async list(e,t=!1){const r=A(S,this.collectionName);var s=null;t&&(s=po("status","==","Active"));const i=Oe(r,s);var a=(await ke(i)).docs.map(c=>c.data());if(e){const c=e.toLowerCase();a=_.filter(a,function(l){return l.Name.toLowerCase().includes(c)||l.Contact&&l.Contact.toString().toLowerCase().includes(c)})}return a=_.sortBy(a,function(c){return c.Name}),a}async addOrUpdate(e){const t=A(S,this.collectionName);e.id||(e.id=D(t).id),await le(D(t,e.id),e)}async getById(e){const t=A(S,this.collectionName);var r=await ee(D(t,e));if(r.exists())return r.data()}async runDebitCreditTransaction(e,t){const r=D(A(S,this.collectionName),e);try{await _o(S,async s=>{const i=await s.get(r);if(!i.exists())throw"Document does not exist!";const o=i.data();t<0?o.debit?o.debit+=t*-1:o.debit=t*-1:o.credit?o.credit+=t:o.credit=t,s.update(r,o)}),console.log("Transaction successfully committed!")}catch(s){console.log("Transaction failed: ",s)}}}class No{constructor(){this.collectionName=P.PRODUCTS}async list(e){const t=A(S,this.collectionName),r=Oe(t,it("Name"));var i=(await ke(r)).docs.map(o=>o.data());if(e){const o=e.toLowerCase();i=_.filter(i,function(a){return a.Name.toLowerCase().includes(o)})}return i}async addOrUpdate(e){const t=A(S,this.collectionName);e.id||(e.id=D(t).id),await le(D(t,e.id),e)}}class Oo{constructor(){this.collectionName=P.PAYMENTS}async addOrUpdate(e){const t=A(S,this.collectionName);var r=await ee(D(t,e.receiptNumber));if(r.exists())throw"Payment cannot be updated";await le(D(t,e.receiptNumber),e),await ko.runDebitCreditTransaction(e.customerId,e.amount)}async list(e,t){const r=A(S,this.collectionName),s=Oe(r,it("paymentDate","desc"),Gt(10));return(await ke(s)).docs.map(a=>a.data())}async getById(e){const t=A(S,this.collectionName);var r=await ee(D(t,e));if(r.exists())return r.data()}}const Lo=new Io,Mo=new Ao,Bo=new Do,ko=new Co,$o=new No,Uo=new To,xo=new Oo;export{Ve as A,ge as C,Po as I,at as S,Vo as _,xo as a,ko as c,Lo as i,$o as p,Bo as r,Uo as s,Mo as u};
