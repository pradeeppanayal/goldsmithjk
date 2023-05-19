class ce{static getTodayAsString(){return new Date().toISOString().split("T")[0]}static getAsFormattedDate(e){return new Date(e).toLocaleString().toString()}static getNowAsMilliSeconds(){return new Date().getTime()}static capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}static capitalizeFirstLetterOfEveryWordForVariableName(e){if(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)}}static capitalizeFirstLetterOfEveryWord(e){const t=e.split(" ");for(let r=0;r<t.length;r++)t[r]=ce.capitalizeFirstLetter(t[r]);return t.join(" ")}static doConvert(e){if(!e)return"NA";e=Number(e.toFixed(3));var t=["","thousand","million","billion","trillion"],r=["zero","one","two","three","four","five","six","seven","eight","nine"],s=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],i=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if(e=e.toString(),e=e.replace(/[\, ]/g,""),e!=parseFloat(e))return"not a number ";var o=e.indexOf(".");if(o==-1&&(o=e.length),o>15)return"too big";for(var a=e.split(""),c="",l=0,d=0;d<o;d++)(o-d)%3==2?a[d]=="1"?(c+=s[Number(a[d+1])]+" ",d++,l=1):a[d]!=0&&(c+=i[a[d]-2]+" ",l=1):a[d]!=0&&(c+=r[a[d]]+" ",(o-d)%3==0&&(c+="hundred "),l=1),(o-d)%3==1&&(l&&(c+=t[(o-d-1)/3]+" "),l=0);if(o!=e.length){var m=e.length;c+="point ";for(var d=o+1;d<m;d++)c+=r[a[d]]+" "}return ce.capitalizeFirstLetterOfEveryWord(c.replace(/\s+/g," "))}static getAsFormattedAmount(e){return e?e.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}):"-"}}class Mi{static generateId(e){return e+"-"+new Date().getTime().toString()+parseInt(Math.random()*1e4)}static generateInvoiceNumber(){return this.generateId("INV")}static generateReceiptNumber(){return this.generateId("PMT")}static generateQutationNumber(){return this.generateId("TMP")}}/**
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
 */const Qt=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Bn=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=i>>2,m=(i&3)<<4|a>>4;let y=(a&15)<<2|l>>6,G=l&63;c||(G=64,o||(y=64)),r.push(t[d],t[m],t[y],t[G])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qt(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Bn(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||m==null)throw new Mn;const y=i<<2|a>>4;if(r.push(y),l!==64){const G=a<<4&240|l>>2;if(r.push(G),m!==64){const Ln=l<<6&192|m;r.push(Ln)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $n=function(n){const e=Qt(n);return Jt.encodeByteArray(e,!0)},Te=function(n){return $n(n).replace(/\./g,"")},Un=function(n){try{return Jt.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qn=()=>jn().__FIREBASE_DEFAULTS__,zn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hn=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Un(n[1]);return e&&JSON.parse(e)},Xt=()=>{try{return qn()||zn()||Hn()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gn=n=>{var e,t;return(t=(e=Xt())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Kn=n=>{const e=Gn(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Zt=()=>{var n;return(n=Xt())===null||n===void 0?void 0:n.config};/**
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
 */class Wn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Yn(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Te(JSON.stringify(t)),Te(JSON.stringify(o)),a].join(".")}function Qn(){try{return typeof indexedDB=="object"}catch{return!1}}function Jn(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Xn="FirebaseError";class Z extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Xn,Object.setPrototypeOf(this,Z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,en.prototype.create)}}class en{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Zn(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Z(s,a,r)}}function Zn(n,e){return n.replace(er,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const er=/\{\$([^}]+)}/g;function Ye(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(St(i)&&St(o)){if(!Ye(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function St(n){return n!==null&&typeof n=="object"}/**
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
 */function Y(n){return n&&n._delegate?n._delegate:n}class le{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const U="[DEFAULT]";/**
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
 */class tr{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Wn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rr(e))try{this.getOrInitializeService({instanceIdentifier:U})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=U){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=U){return this.instances.has(e)}getOptions(e=U){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nr(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=U){return this.component?this.component.multipleInstances?e:U:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nr(n){return n===U?void 0:n}function rr(n){return n.instantiationMode==="EAGER"}/**
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
 */class sr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var p;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(p||(p={}));const ir={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},or=p.INFO,ar={[p.DEBUG]:"log",[p.VERBOSE]:"log",[p.INFO]:"info",[p.WARN]:"warn",[p.ERROR]:"error"},cr=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ar[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tn{constructor(e){this.name=e,this._logLevel=or,this._logHandler=cr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in p))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ir[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,p.DEBUG,...e),this._logHandler(this,p.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,p.VERBOSE,...e),this._logHandler(this,p.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,p.INFO,...e),this._logHandler(this,p.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,p.WARN,...e),this._logHandler(this,p.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,p.ERROR,...e),this._logHandler(this,p.ERROR,...e)}}const lr=(n,e)=>e.some(t=>n instanceof t);let It,Tt;function ur(){return It||(It=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hr(){return Tt||(Tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nn=new WeakMap,Qe=new WeakMap,rn=new WeakMap,ze=new WeakMap,it=new WeakMap;function dr(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(L(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&nn.set(t,n)}).catch(()=>{}),it.set(e,n),e}function fr(n){if(Qe.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Qe.set(n,e)}let Je={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qe.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rn.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return L(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pr(n){Je=n(Je)}function mr(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(He(this),e,...t);return rn.set(r,e.sort?e.sort():[e]),L(r)}:hr().includes(n)?function(...e){return n.apply(He(this),e),L(nn.get(this))}:function(...e){return L(n.apply(He(this),e))}}function gr(n){return typeof n=="function"?mr(n):(n instanceof IDBTransaction&&fr(n),lr(n,ur())?new Proxy(n,Je):n)}function L(n){if(n instanceof IDBRequest)return dr(n);if(ze.has(n))return ze.get(n);const e=gr(n);return e!==n&&(ze.set(n,e),it.set(e,n)),e}const He=n=>it.get(n);function yr(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=L(o);return r&&o.addEventListener("upgradeneeded",c=>{r(L(o.result),c.oldVersion,c.newVersion,L(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const wr=["get","getKey","getAll","getAllKeys","count"],br=["put","add","delete","clear"],Ge=new Map;function At(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ge.get(e))return Ge.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=br.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wr.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return Ge.set(e,i),i}pr(n=>({...n,get:(e,t,r)=>At(e,t)||n.get(e,t,r),has:(e,t)=>!!At(e,t)||n.has(e,t)}));/**
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
 */class vr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_r(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _r(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xe="@firebase/app",Dt="0.9.10";/**
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
 */const j=new tn("@firebase/app"),Er="@firebase/app-compat",Sr="@firebase/analytics-compat",Ir="@firebase/analytics",Tr="@firebase/app-check-compat",Ar="@firebase/app-check",Dr="@firebase/auth",Cr="@firebase/auth-compat",Nr="@firebase/database",Or="@firebase/database-compat",kr="@firebase/functions",Fr="@firebase/functions-compat",xr="@firebase/installations",Rr="@firebase/installations-compat",Pr="@firebase/messaging",Vr="@firebase/messaging-compat",Lr="@firebase/performance",Br="@firebase/performance-compat",Mr="@firebase/remote-config",$r="@firebase/remote-config-compat",Ur="@firebase/storage",jr="@firebase/storage-compat",qr="@firebase/firestore",zr="@firebase/firestore-compat",Hr="firebase",Gr="9.22.0";/**
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
 */const Ze="[DEFAULT]",Kr={[Xe]:"fire-core",[Er]:"fire-core-compat",[Ir]:"fire-analytics",[Sr]:"fire-analytics-compat",[Ar]:"fire-app-check",[Tr]:"fire-app-check-compat",[Dr]:"fire-auth",[Cr]:"fire-auth-compat",[Nr]:"fire-rtdb",[Or]:"fire-rtdb-compat",[kr]:"fire-fn",[Fr]:"fire-fn-compat",[xr]:"fire-iid",[Rr]:"fire-iid-compat",[Pr]:"fire-fcm",[Vr]:"fire-fcm-compat",[Lr]:"fire-perf",[Br]:"fire-perf-compat",[Mr]:"fire-rc",[$r]:"fire-rc-compat",[Ur]:"fire-gcs",[jr]:"fire-gcs-compat",[qr]:"fire-fst",[zr]:"fire-fst-compat","fire-js":"fire-js",[Hr]:"fire-js-all"};/**
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
 */const Ae=new Map,et=new Map;function Wr(n,e){try{n.container.addComponent(e)}catch(t){j.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function De(n){const e=n.name;if(et.has(e))return j.debug(`There were multiple attempts to register component ${e}.`),!1;et.set(e,n);for(const t of Ae.values())Wr(t,n);return!0}function Yr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Qr={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},B=new en("app","Firebase",Qr);/**
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
 */class Jr{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw B.create("app-deleted",{appName:this._name})}}/**
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
 */const Xr=Gr;function sn(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ze,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw B.create("bad-app-name",{appName:String(s)});if(t||(t=Zt()),!t)throw B.create("no-options");const i=Ae.get(s);if(i){if(Ye(t,i.options)&&Ye(r,i.config))return i;throw B.create("duplicate-app",{appName:s})}const o=new sr(s);for(const c of et.values())o.addComponent(c);const a=new Jr(t,r,o);return Ae.set(s,a),a}function Zr(n=Ze){const e=Ae.get(n);if(!e&&n===Ze&&Zt())return sn();if(!e)throw B.create("no-app",{appName:n});return e}function W(n,e,t){var r;let s=(r=Kr[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),j.warn(a.join(" "));return}De(new le(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const es="firebase-heartbeat-database",ts=1,ue="firebase-heartbeat-store";let Ke=null;function on(){return Ke||(Ke=yr(es,ts,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ue)}}}).catch(n=>{throw B.create("idb-open",{originalErrorMessage:n.message})})),Ke}async function ns(n){try{return await(await on()).transaction(ue).objectStore(ue).get(an(n))}catch(e){if(e instanceof Z)j.warn(e.message);else{const t=B.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});j.warn(t.message)}}}async function Ct(n,e){try{const r=(await on()).transaction(ue,"readwrite");await r.objectStore(ue).put(e,an(n)),await r.done}catch(t){if(t instanceof Z)j.warn(t.message);else{const r=B.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});j.warn(r.message)}}}function an(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rs=1024,ss=30*24*60*60*1e3;class is{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new as(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Nt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=ss}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nt(),{heartbeatsToSend:t,unsentEntries:r}=os(this._heartbeatsCache.heartbeats),s=Te(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nt(){return new Date().toISOString().substring(0,10)}function os(n,e=rs){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ot(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ot(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class as{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qn()?Jn().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ns(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ct(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ct(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ot(n){return Te(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function cs(n){De(new le("platform-logger",e=>new vr(e),"PRIVATE")),De(new le("heartbeat",e=>new is(e),"PRIVATE")),W(Xe,Dt,n),W(Xe,Dt,"esm2017"),W("fire-js","")}cs("");var ls="firebase",us="9.22.0";/**
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
 */W(ls,us,"app");/**
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
 */let ee="9.22.0";/**
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
 */const Q=new tn("@firebase/firestore");function Ce(n,...e){if(Q.logLevel<=p.DEBUG){const t=e.map(at);Q.debug(`Firestore (${ee}): ${n}`,...t)}}function ot(n,...e){if(Q.logLevel<=p.ERROR){const t=e.map(at);Q.error(`Firestore (${ee}): ${n}`,...t)}}function cn(n,...e){if(Q.logLevel<=p.WARN){const t=e.map(at);Q.warn(`Firestore (${ee}): ${n}`,...t)}}function at(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function g(n="Unexpected state"){const e=`FIRESTORE (${ee}) INTERNAL ASSERTION FAILED: `+n;throw ot(e),new Error(e)}function k(n,e){n||g()}function ye(n,e){return n}/**
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
 */const kt="ok",hs="cancelled",ne="unknown",h="invalid-argument",ds="deadline-exceeded",fs="not-found",ps="permission-denied",tt="unauthenticated",ms="resource-exhausted",J="failed-precondition",gs="aborted",ys="out-of-range",ln="unimplemented",ws="internal",bs="unavailable";class u extends Z{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class un{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(C.UNAUTHENTICATED))}shutdown(){}}class _s{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Es{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(k(typeof e.accessToken=="string"),new un(e.accessToken,new C(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Ss{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=C.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Is{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new Ss(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(C.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ts{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class As{constructor(e){this.l=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(k(typeof e.token=="string"),new Ts(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class Ds{constructor(e,t,r,s,i,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class he{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new he("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof he&&e.projectId===this.projectId&&e.database===this.database}}class de{constructor(e,t,r){t===void 0?t=0:t>e.length&&g(),r===void 0?r=e.length-t:r>e.length-t&&g(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return de.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof de?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class b extends de{construct(e,t,r){return new b(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new u(h,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new b(t)}static emptyPath(){return new b([])}}const Cs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class O extends de{construct(e,t,r){return new O(e,t,r)}static isValidIdentifier(e){return Cs.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),O.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new O(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new u(h,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new u(h,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new u(h,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new u(h,"Unterminated ` in path: "+e);return new O(t)}static emptyPath(){return new O([])}}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(b.fromString(e))}static fromName(e){return new I(b.fromString(e).popFirst(5))}static empty(){return new I(b.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&b.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return b.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new b(e.slice()))}}/**
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
 */function hn(n,e,t){if(!t)throw new u(h,`Function ${n}() cannot be called with an empty ${e}.`)}function Ft(n){if(!I.isDocumentKey(n))throw new u(h,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xt(n){if(I.isDocumentKey(n))throw new u(h,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ve(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":g()}function Le(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new u(h,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ve(n);throw new u(h,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ns(n,e){if(e<=0)throw new u(h,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function dn(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */let Ee=null;function Os(){return Ee===null?Ee=268435456+Math.round(2147483648*Math.random()):Ee++,"0x"+Ee.toString(16)}/**
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
 */function ks(n){return n==null}function Ne(n){return n===0&&1/n==-1/0}/**
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
 */const Fs={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Rt,f;function Pt(n){if(n===void 0)return ot("RPC_ERROR","HTTP error has no status"),ne;switch(n){case 200:return kt;case 400:return J;case 401:return tt;case 403:return ps;case 404:return fs;case 409:return gs;case 416:return ys;case 429:return ms;case 499:return hs;case 500:return ne;case 501:return ln;case 503:return bs;case 504:return ds;default:return n>=200&&n<300?kt:n>=400&&n<500?J:n>=500&&n<600?ws:ne}}/**
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
 */(f=Rt||(Rt={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";class xs extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.m=t+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,t,r,s,i){const o=Os(),a=this.I(e,t);Ce("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.T(c,s,i),this.A(e,a,c,r).then(l=>(Ce("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw cn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}R(e,t,r,s,i,o){return this.v(e,t,r,s,i)}T(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ee,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}I(e,t){const r=Fs[e];return`${this.m}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.P=t}V(e,t){throw new Error("Not supported by FetchConnection")}async A(e,t,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.P(t,{method:"POST",headers:r,body:o})}catch(c){const l=c;throw new u(Pt(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const l=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new u(Pt(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
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
 */function Rs(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ps{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Rs(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function v(n,e){return n<e?-1:n>e?1:0}function fn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */function Vt(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Be(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class Vs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class V{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Vs("Invalid base64 string: "+s):s}}(e);return new V(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new V(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return v(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}V.EMPTY_BYTE_STRING=new V("");const Ls=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function q(n){if(k(!!n),typeof n=="string"){let e=0;const t=Ls.exec(n);if(k(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:w(n.seconds),nanos:w(n.nanos)}}function w(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fe(n){return typeof n=="string"?V.fromBase64String(n):V.fromUint8Array(n)}/**
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
 */class F{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new u(h,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new u(h,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new u(h,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new u(h,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new F(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?v(this.nanoseconds,e.nanoseconds):v(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function pn(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function mn(n){const e=n.mapValue.fields.__previous_value__;return pn(e)?mn(e):e}function pe(n){const e=q(n.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}/**
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
 */const Se={fields:{__type__:{stringValue:"__max__"}}};function z(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pn(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:g()}function Oe(n,e){if(n===e)return!0;const t=z(n);if(t!==z(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pe(n).isEqual(pe(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=q(r.timestampValue),o=q(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return fe(r.bytesValue).isEqual(fe(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return w(r.geoPointValue.latitude)===w(s.geoPointValue.latitude)&&w(r.geoPointValue.longitude)===w(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return w(r.integerValue)===w(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=w(r.doubleValue),o=w(s.doubleValue);return i===o?Ne(i)===Ne(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return fn(n.arrayValue.values||[],e.arrayValue.values||[],Oe);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Vt(i)!==Vt(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Oe(i[a],o[a])))return!1;return!0}(n,e);default:return g()}}function me(n,e){return(n.values||[]).find(t=>Oe(t,e))!==void 0}function ke(n,e){if(n===e)return 0;const t=z(n),r=z(e);if(t!==r)return v(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return v(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=w(s.integerValue||s.doubleValue),a=w(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Lt(n.timestampValue,e.timestampValue);case 4:return Lt(pe(n),pe(e));case 5:return v(n.stringValue,e.stringValue);case 6:return function(s,i){const o=fe(s),a=fe(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=v(o[c],a[c]);if(l!==0)return l}return v(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=v(w(s.latitude),w(i.latitude));return o!==0?o:v(w(s.longitude),w(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ke(o[c],a[c]);if(l)return l}return v(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Se&&i===Se)return 0;if(s===Se)return 1;if(i===Se)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let d=0;d<a.length&&d<l.length;++d){const m=v(a[d],l[d]);if(m!==0)return m;const y=ke(o[a[d]],c[l[d]]);if(y!==0)return y}return v(a.length,l.length)}(n.mapValue,e.mapValue);default:throw g()}}function Lt(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return v(n,e);const t=q(n),r=q(e),s=v(t.seconds,r.seconds);return s!==0?s:v(t.nanos,r.nanos)}function Bt(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gn(n){return!!n&&"arrayValue"in n}function Mt(n){return!!n&&"nullValue"in n}function $t(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function We(n){return!!n&&"mapValue"in n}function re(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Be(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=re(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=re(n.arrayValue.values[t]);return e}return Object.assign({},n)}class Ut{constructor(e,t){this.position=e,this.inclusive=t}}/**
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
 */class yn{}class R extends yn{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Bs(e,t,r):t==="array-contains"?new Us(e,r):t==="in"?new js(e,r):t==="not-in"?new qs(e,r):t==="array-contains-any"?new zs(e,r):new R(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ms(e,r):new $s(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ke(t,this.value)):t!==null&&z(this.value)===z(t)&&this.matchesComparison(ke(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return g()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class we extends yn{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new we(e,t)}matches(e){return this.op==="and"?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(t=>t.isInequality());return e!==null?e.field:null}F(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}class Bs extends R{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ms extends R{constructor(e,t){super(e,"in",t),this.keys=wn("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $s extends R{constructor(e,t){super(e,"not-in",t),this.keys=wn("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function wn(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class Us extends R{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return gn(t)&&me(t.arrayValue,this.value)}}class js extends R{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&me(this.value.arrayValue,t)}}class qs extends R{constructor(e,t){super(e,"not-in",t)}matches(e){if(me(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!me(this.value.arrayValue,t)}}class zs extends R{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!gn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>me(this.value.arrayValue,r))}}/**
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
 */class se{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class E{constructor(e){this.timestamp=e}static fromTimestamp(e){return new E(e)}static min(){return new E(new F(0,0))}static max(){return new E(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||S.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,S.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,S.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ie(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ie(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ie(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ie(this.root,e,this.comparator,!0)}}class Ie{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class S{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??S.RED,this.left=s??S.EMPTY,this.right=i??S.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new S(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return S.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return S.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,S.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,S.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw g();const e=this.left.check();if(e!==this.right.check())throw g();return e+(this.isRed()?0:1)}}S.EMPTY=null,S.RED=!0,S.BLACK=!1;S.EMPTY=new class{constructor(){this.size=0}get key(){throw g()}get value(){throw g()}get color(){throw g()}get left(){throw g()}get right(){throw g()}copy(n,e,t,r,s){return this}insert(n,e,t){return new S(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jt(this.data.getIterator())}getIteratorFrom(e){return new jt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class jt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ge{constructor(e){this.fields=e,e.sort(O.comparator)}static empty(){return new ge([])}unionWith(e){let t=new xe(O.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ge(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class x{constructor(e){this.value=e}static empty(){return new x({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!We(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=re(t)}setAll(e){let t=O.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=re(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());We(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Oe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];We(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Be(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new x(re(this.value))}}/**
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
 */class P{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new P(e,0,E.min(),E.min(),E.min(),x.empty(),0)}static newFoundDocument(e,t,r,s){return new P(e,1,t,E.min(),r,s,0)}static newNoDocument(e,t){return new P(e,2,t,E.min(),E.min(),x.empty(),0)}static newUnknownDocument(e,t){return new P(e,3,t,E.min(),E.min(),x.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(E.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=x.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=x.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=E.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof P&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new P(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hs{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function qt(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Hs(n,e,t,r,s,i,o)}/**
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
 */class Me{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function ct(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function $e(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Gs(n){return n.collectionGroup!==null}function zt(n){const e=ye(n);if(e.q===null){e.q=[];const t=$e(e),r=ct(e);if(t!==null&&r===null)t.isKeyField()||e.q.push(new se(t)),e.q.push(new se(O.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new se(O.keyField(),i))}}}return e.q}function Ks(n){const e=ye(n);if(!e.O)if(e.limitType==="F")e.O=qt(e.path,e.collectionGroup,zt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of zt(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new se(i.field,o))}const r=e.endAt?new Ut(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ut(e.startAt.position,e.startAt.inclusive):null;e.O=qt(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.O}function nt(n,e){e.getFirstInequalityField(),$e(n);const t=n.filters.concat([e]);return new Me(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}/**
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
 */function Ws(n,e){return function(t){return typeof t=="number"&&Number.isInteger(t)&&!Ne(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,r){if(t.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ne(r)?"-0":r}}(n,e)}/**
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
 */class Ue{constructor(){this._=void 0}}class Ys extends Ue{}class Qs extends Ue{constructor(e){super(),this.elements=e}}class Js extends Ue{constructor(e){super(),this.elements=e}}class Xs extends Ue{constructor(e,t){super(),this.serializer=e,this.k=t}}class ie{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ie}static exists(e){return new ie(void 0,e)}static updateTime(e){return new ie(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class je{}class bn extends je{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vn extends je{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Zs extends je{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ei extends je{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const ti=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ni=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ri=(()=>({and:"AND",or:"OR"}))();class si{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rt(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ii(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function oi(n,e){return rt(n,e.toTimestamp())}function oe(n){return k(!!n),E.fromTimestamp(function(e){const t=q(e);return new F(t.seconds,t.nanos)}(n))}function lt(n,e){return function(t){return new b(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Re(n,e){return lt(n.databaseId,e.path)}function st(n,e){const t=function(s){const i=b.fromString(s);return k(Sn(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new u(h,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new u(h,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I((k((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Ht(n,e){return lt(n.databaseId,e)}function _n(n){return new b(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gt(n,e,t){return{name:Re(n,e),fields:t.value.mapValue.fields}}function ai(n,e){return"found"in e?function(t,r){k(!!r.found),r.found.name,r.found.updateTime;const s=st(t,r.found.name),i=oe(r.found.updateTime),o=r.found.createTime?oe(r.found.createTime):E.min(),a=new x({mapValue:{fields:r.found.fields}});return P.newFoundDocument(s,i,o,a)}(n,e):"missing"in e?function(t,r){k(!!r.missing),k(!!r.readTime);const s=st(t,r.missing),i=oe(r.readTime);return P.newNoDocument(s,i)}(n,e):g()}function ci(n,e){let t;if(e instanceof bn)t={update:Gt(n,e.key,e.value)};else if(e instanceof Zs)t={delete:Re(n,e.key)};else if(e instanceof vn)t={update:Gt(n,e.key,e.data),updateMask:fi(e.fieldMask)};else{if(!(e instanceof ei))return g();t={verify:Re(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Ys)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Qs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Js)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xs)return{fieldPath:i.field.canonicalString(),increment:o.k};throw g()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:oi(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:g()}(n,e.precondition)),t}function li(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Ht(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ht(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return En(we.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(d){return{field:K(d.field),direction:ui(d.dir)}}(l))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||ks(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function ui(n){return ti[n]}function hi(n){return ni[n]}function di(n){return ri[n]}function K(n){return{fieldPath:n.canonicalString()}}function En(n){return n instanceof R?function(e){if(e.op==="=="){if($t(e.value))return{unaryFilter:{field:K(e.field),op:"IS_NAN"}};if(Mt(e.value))return{unaryFilter:{field:K(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if($t(e.value))return{unaryFilter:{field:K(e.field),op:"IS_NOT_NAN"}};if(Mt(e.value))return{unaryFilter:{field:K(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:K(e.field),op:hi(e.op),value:e.value}}}(n):n instanceof we?function(e){const t=e.getFilters().map(r=>En(r));return t.length===1?t[0]:{compositeFilter:{op:di(e.op),filters:t}}}(n):g()}function fi(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Sn(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function ut(n){return new si(n,!0)}/**
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
 */class pi extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.J=!1}X(){if(this.J)throw new u(J,"The client has already been terminated.")}v(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.v(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===tt&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new u(ne,s.toString())})}R(e,t,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.R(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===tt&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new u(ne,i.toString())})}terminate(){this.J=!0}}async function mi(n,e){const t=ye(n),r=_n(t.serializer)+"/documents",s={writes:e.map(i=>ci(t.serializer,i))};await t.v("Commit",r,s)}async function gi(n,e){const t=ye(n),r=_n(t.serializer)+"/documents",s={documents:e.map(c=>Re(t.serializer,c))},i=await t.R("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(c=>{const l=ai(t.serializer,c);o.set(l.key.toString(),l)});const a=[];return e.forEach(c=>{const l=o.get(c.toString());k(!!l),a.push(l)}),a}async function yi(n,e){const t=ye(n),r=li(t.serializer,Ks(e));return(await t.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const c=st(i,o.name),l=oe(o.updateTime),d=o.createTime?oe(o.createTime):E.min(),m=new x({mapValue:{fields:o.fields}}),y=P.newFoundDocument(c,l,d,m);return a&&y.setHasCommittedMutations(),a?y.setHasCommittedMutations():y}(t.serializer,s.document,void 0))}/**
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
 */const ae=new Map;function ht(n){if(n._terminated)throw new u(J,"The client has already been terminated.");if(!ae.has(n)){Ce("ComponentProvider","Initializing Datastore");const i=function(c){return new xs(c,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new Ds(e,t,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,dn(s.experimentalLongPollingOptions),s.useFetchStreams))),o=ut(n._databaseId),a=function(c,l,d,m){return new pi(c,l,d,m)}(n._authCredentials,n._appCheckCredentials,i,o);ae.set(n,a)}var e,t,r,s;/**
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
*/return ae.get(n)}class Kt{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new u(h,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new u(h,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,i,o,a){if(i===!0&&a===!0)throw new u(h,`${s} and ${o} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dn((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new u(h,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new u(h,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new u(h,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class qe{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kt({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new u(J,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new u(J,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kt(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new vs;switch(t.type){case"firstParty":return new Is(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new u(h,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ae.get(e);t&&(Ce("ComponentProvider","Removing Datastore"),ae.delete(e),t.terminate())}(this),Promise.resolve()}}function wi(n,e){const t=typeof n=="object"?n:Zr(),r=typeof n=="string"?n:e||"(default)",s=Yr(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Kn("firestore");i&&bi(s,...i)}return s}function bi(n,e,t,r={}){var s;const i=(n=Le(n,qe))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&cn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=C.MOCK_USER;else{o=Yn(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new u(h,"mockUserToken must contain 'sub' or 'user_id' field!");a=new C(c)}n._authCredentials=new _s(new un(o,a))}}/**
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
 */class N{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new M(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new N(this.firestore,e,this._key)}}class ${constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $(this.firestore,e,this._query)}}class M extends ${constructor(e,t,r){super(e,t,new Me(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new N(this.firestore,null,new I(e))}withConverter(e){return new M(this.firestore,e,this._path)}}function T(n,e,...t){if(n=Y(n),hn("collection","path",e),n instanceof qe){const r=b.fromString(e,...t);return xt(r),new M(n,null,r)}{if(!(n instanceof N||n instanceof M))throw new u(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(b.fromString(e,...t));return xt(r),new M(n.firestore,null,r)}}function D(n,e,...t){if(n=Y(n),arguments.length===1&&(e=Ps.N()),hn("doc","path",e),n instanceof qe){const r=b.fromString(e,...t);return Ft(r),new N(n,null,new I(r))}{if(!(n instanceof N||n instanceof M))throw new u(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(b.fromString(e,...t));return Ft(r),new N(n.firestore,n instanceof M?n.converter:null,new I(r))}}/**
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
 */class X{constructor(e){this._byteString=e}static fromBase64String(e){try{return new X(V.fromBase64String(e))}catch(t){throw new u(h,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new X(V.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class dt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new u(h,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new O(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class In{constructor(e){this._methodName=e}}/**
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
 */class ft{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new u(h,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new u(h,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return v(this._lat,e._lat)||v(this._long,e._long)}}/**
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
 */const vi=/^__.*__$/;class _i{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new vn(e,this.data,this.fieldMask,t,this.fieldTransforms):new bn(e,this.data,t,this.fieldTransforms)}}function Tn(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw g()}}class pt{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new pt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.it(e),s}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.tt(),s}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return Pe(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(Tn(this.et)&&vi.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class Ei{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ut(e)}ft(e,t,r,s=!1){return new pt({et:e,methodName:t,lt:r,path:O.emptyPath(),st:!1,ht:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function An(n){const e=n._freezeSettings(),t=ut(n._databaseId);return new Ei(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Si(n,e,t,r,s,i={}){const o=n.ft(i.merge||i.mergeFields?2:0,e,t,s);Nn("Data must be an object, but it was:",o,r);const a=Dn(r,o);let c,l;if(i.merge)c=new ge(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const m of i.mergeFields){const y=Ti(e,m,t);if(!o.contains(y))throw new u(h,`Field '${y}' is specified in your field mask but missing from your input data.`);Di(d,y)||d.push(y)}c=new ge(d),l=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,l=o.fieldTransforms;return new _i(new x(a),c,l)}function Ii(n,e,t,r=!1){return mt(t,n.ft(r?4:3,e))}function mt(n,e){if(Cn(n=Y(n)))return Nn("Unsupported field value:",e,n),Dn(n,e);if(n instanceof In)return function(t,r){if(!Tn(r.et))throw r.ct(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ct(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.st&&e.et!==4)throw e.ct("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=mt(o,r.ut(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=Y(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Ws(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=F.fromDate(t);return{timestampValue:rt(r.serializer,s)}}if(t instanceof F){const s=new F(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:rt(r.serializer,s)}}if(t instanceof ft)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof X)return{bytesValue:ii(r.serializer,t._byteString)};if(t instanceof N){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ct(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:lt(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ct(`Unsupported field value: ${Ve(t)}`)}(n,e)}function Dn(n,e){const t={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Be(n,(r,s)=>{const i=mt(s,e.rt(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Cn(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof F||n instanceof ft||n instanceof X||n instanceof N||n instanceof In)}function Nn(n,e,t){if(!Cn(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Ve(t);throw r==="an object"?e.ct(n+" a custom object"):e.ct(n+" "+r)}}function Ti(n,e,t){if((e=Y(e))instanceof dt)return e._internalPath;if(typeof e=="string")return On(n,e);throw Pe("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ai=new RegExp("[~\\*/\\[\\]]");function On(n,e,t){if(e.search(Ai)>=0)throw Pe(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dt(...e.split("."))._internalPath}catch{throw Pe(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Pe(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new u(h,a+n+c)}function Di(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class kn{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new N(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fn extends kn{data(){return super.data()}}class Ci{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function xn(n,e){return typeof e=="string"?On(n,e):e instanceof dt?e._internalPath:e._delegate._internalPath}/**
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
 */class gt{}class yt extends gt{}function be(n,e,...t){let r=[];e instanceof gt&&r.push(e),r=r.concat(t),function(s){const i=s.filter(a=>a instanceof bt).length,o=s.filter(a=>a instanceof wt).length;if(i>1||i>0&&o>0)throw new u(h,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class wt extends yt{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new wt(e,t,r)}_apply(e){const t=this._parse(e);return Rn(e._query,t),new $(e.firestore,e.converter,nt(e._query,t))}_parse(e){const t=An(e.firestore);return function(s,i,o,a,c,l,d){let m;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new u(h,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Yt(d,l);const y=[];for(const G of d)y.push(Wt(a,s,G));m={arrayValue:{values:y}}}else m=Wt(a,s,d)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Yt(d,l),m=Ii(o,i,d,l==="in"||l==="not-in");return R.create(c,l,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class bt extends gt{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new bt(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:we.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)Rn(i,a),i=nt(i,a)}(e._query,t),new $(e.firestore,e.converter,nt(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vt extends yt{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new vt(e,t)}_apply(e){const t=function(r,s,i){if(r.startAt!==null)throw new u(h,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new u(h,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new se(s,i);return function(a,c){if(ct(a)===null){const l=$e(a);l!==null&&Pn(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new $(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Me(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function ve(n,e="asc"){const t=e,r=xn("orderBy",n);return vt._create(r,t)}class _t extends yt{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new _t(e,t,r)}_apply(e){return new $(e.firestore,e.converter,function(t,r,s){return new Me(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),r,s,t.startAt,t.endAt)}(e._query,this._limit,this._limitType))}}function Et(n){return Ns("limit",n),_t._create("limit",n,"F")}function Wt(n,e,t){if(typeof(t=Y(t))=="string"){if(t==="")throw new u(h,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gs(e)&&t.indexOf("/")!==-1)throw new u(h,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(b.fromString(t));if(!I.isDocumentKey(r))throw new u(h,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bt(n,new I(r))}if(t instanceof N)return Bt(n,t._key);throw new u(h,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ve(t)}.`)}function Yt(n,e){if(!Array.isArray(n)||n.length===0)throw new u(h,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rn(n,e){if(e.isInequality()){const r=$e(n),s=e.field;if(r!==null&&!r.isEqual(s))throw new u(h,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=ct(n);i!==null&&Pn(n,s,i)}const t=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new u(h,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new u(h,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Pn(n,e,t){if(!t.isEqual(e))throw new u(h,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */function Ni(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Vn extends class{convertValue(e,t="none"){switch(z(e)){case 0:return null;case 1:return e.booleanValue;case 2:return w(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw g()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Be(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new ft(w(e.latitude),w(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=mn(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pe(e));default:return null}}convertTimestamp(e){const t=q(e);return new F(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=b.fromString(e);k(Sn(r));const s=new he(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(t)||ot(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new X(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new N(this.firestore,null,t)}}function H(n){const e=ht((n=Le(n,N)).firestore),t=new Vn(n.firestore);return gi(e,[n._key]).then(r=>{k(r.length===1);const s=r[0];return new kn(n.firestore,t,n._key,s.isFoundDocument()?s:null,n.converter)})}function _e(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new u(ln,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Le(n,$))._query);const e=ht(n.firestore),t=new Vn(n.firestore);return yi(e,n._query).then(r=>{const s=r.map(i=>new Fn(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new Ci(n,s)})}function te(n,e,t){const r=Ni((n=Le(n,N)).converter,e,t),s=Si(An(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return mi(ht(n.firestore),[s.toMutation(n._key,ie.none())])}(function(n){ee=n})(`${Xr}_lite`),De(new le("firestore/lite",(n,{instanceIdentifier:e,options:t})=>{const r=n.getProvider("app").getImmediate(),s=new qe(new Es(n.getProvider("auth-internal")),new As(n.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new u(h,'"projectId" not provided in firebase.initializeApp.');return new he(i.options.projectId,o)}(r,e),r);return t&&s._setSettings(t),s},"PUBLIC").setMultipleInstances(!0)),W("firestore-lite","3.12.0",""),W("firestore-lite","3.12.0","esm2017");const Oi={apiKey:"AIzaSyDYHZD3qXhHcDa367tMXjHz7qzaZFYRA4c",authDomain:"gold-smith-jewelers.firebaseapp.com",projectId:"gold-smith-jewelers",storageBucket:"gold-smith-jewelers.appspot.com",messagingSenderId:"705110080489",appId:"1:705110080489:web:d8228e6b206399c5c5e978",measurementId:"G-M8LFGYRVKL"},ki=sn(Oi),A=wi(ki);class Fi{constructor(){this.collectionName="Invoices"}async addOrUpdate(e){const t=T(A,this.collectionName);var r=await H(D(t,e.invoiceNumber));if(r.exists())throw"Invoice cannot be updated";await te(D(t,e.invoiceNumber),e)}async list(e,t,r){const s=T(A,this.collectionName),i=be(s,ve("purchaseDate","desc"),Et(10)),a=(await _e(i)).docs.map(l=>l.data());if(r){var c=r.toLowerCase().trim();return _.filter(a,function(l){return l.invoiceNumber.toLowerCase().includes(c)||l.customer.toLowerCase().includes(c)})}return a}async getById(e){const t=T(A,this.collectionName);var r=await H(D(t,e));if(r.exists())return r.data()}}class xi{constructor(){this.collectionName="settings",this.settings=[,,]}async addOrUpdate(e){const t=T(A,this.collectionName);await te(D(t,e.identifier),e)}list(){}async getById(e){const t=T(A,this.collectionName),r=await H(D(t,e));return r.exists()?r.data():{identifier:e}}}class Ri{constructor(){this.users=[]}addOrUpdate(e){this.users=_.filter(this.users,function(t){return t.name!=e.name}),this.users.push(e)}list(){return[...this.users]}setStatus(e,t){var r=_.filter(this.users,function(s){return s.name==e.name});r&&(r[0].Status=t)}}class Pi{constructor(){this.collectionName="rates"}async addOrUpdate(e){let t=ce.getTodayAsString();const r=T(A,this.collectionName);await te(D(r,t),{rate:e.rate,date:t})}async list(){const e=T(A,this.collectionName),t=be(e,ve("date","desc"),Et(10));return(await _e(t)).docs.map(i=>i.data())}async getTodaysRate(){let e=ce.getTodayAsString();const t=T(A,this.collectionName);var r=await H(D(t,e));if(r.exists())return r.data().rate}}class Vi{constructor(){this.collectionName="Customers"}async list(e){const t=T(A,this.collectionName),r=be(t,ve("Name"));var i=(await _e(r)).docs.map(o=>o.data());if(e){const o=e.toLowerCase();i=_.filter(i,function(a){return a.Name.toLowerCase().includes(o)||a.Contact&&a.Contact.toString().toLowerCase().includes(o)})}return i}async addOrUpdate(e){const t=T(A,this.collectionName);e.id||(e.id=D(t).id),await te(D(t,e.id),e)}async getById(e){const t=T(A,this.collectionName);var r=await H(D(t,e));if(r.exists())return r.data()}}class Li{constructor(){this.collectionName="Products"}async list(e){const t=T(A,this.collectionName),r=be(t,ve("Name"));var i=(await _e(r)).docs.map(o=>o.data());if(e){const o=e.toLowerCase();i=_.filter(i,function(a){return a.Name.toLowerCase().includes(o)})}return i}async addOrUpdate(e){const t=T(A,this.collectionName);e.id||(e.id=D(t).id),await te(D(t,e.id),e)}}class Bi{constructor(){this.collectionName="Payments"}async addOrUpdate(e){const t=T(A,this.collectionName);var r=await H(D(t,e.receiptNumber));if(r.exists())throw"Payment cannot be updated";await te(D(t,e.receiptNumber),e)}async list(e,t){const r=T(A,this.collectionName),s=be(r,ve("paymentDate","desc"),Et(10));return(await _e(s)).docs.map(a=>a.data())}async getById(e){const t=T(A,this.collectionName);var r=await H(D(t,e));if(r.exists())return r.data()}}const $i=new Fi,Ui=new Ri,ji=new Pi,qi=new Vi,zi=new Li,Hi=new xi,Gi=new Bi;export{ce as C,Mi as I,Gi as a,qi as c,$i as i,zi as p,ji as r,Hi as s,Ui as u};
