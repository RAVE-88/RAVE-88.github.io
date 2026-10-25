var ae=Object.defineProperty;var ne=(s,e,t)=>e in s?ae(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var B=(s,e,t)=>ne(s,typeof e!="symbol"?e+"":e,t);import"./clerk-Bv6SR6q7.js";/* empty css             */import{getRuntimeConfigSnapshot as R,validateSecret as I,RUNTIME_FEATURES as A,isFeatureEnabled as F,getEffectiveSecrets as C,getSecretState as k,verifySecretWithApi as ie,setSecretValue as G,loadDesktopSecrets as oe,isFeatureAvailable as T,setFeatureToggle as le}from"./runtime-config-W7vfk27c.js";import{M as E,P as z,a as _,H as Y,S as re,f as ce}from"./ollama-models-Bkp8DQxM.js";import{e as de,i as ge}from"./settings-persistence-DTukjYmz.js";import{f as Q,a as ve,p as ue,t as d,r as pe,n as fe,o as me}from"./theme-colors-BmUbP5Zj.js";import{tryInvokeTauri as X,proxyLocalApiRequest as he}from"./tauri-bridge-UPyks66k.js";import{k as we,b as Z}from"./analytics-DYGwu9Ab.js";import{e as v}from"./sanitize-D7dx0cA1.js";import{a as ye}from"./theme-manager-CAVZrcRi.js";import{a as be}from"./font-settings-B6XmwZwl.js";import{s as L,t as S}from"./dom-utils-COg85yfw.js";import"./sync-keys-CvsyvzzE.js";import"./pinned-webcams-CLAA_f-T.js";import"./panel-storage-tBgv39vh.js";import"./i18n-qlunRAMb.js";import"./convex-client-CpRmA3au.js";class Le{constructor(){B(this,"pendingSecrets",new Map);B(this,"validatedKeys",new Map);B(this,"validationMessages",new Map)}captureUnsavedInputs(e){e.querySelectorAll("input[data-secret]").forEach(n=>{var l;const o=n.dataset.secret;if(!o)return;const r=n.value.trim();if(!r||r===E)return;if(z.has(o)&&!this.pendingSecrets.has(o)){const g=((l=R().secrets[o])==null?void 0:l.value)||"";if(r===g)return}this.pendingSecrets.set(o,r);const c=I(o,r);c.valid||(this.validatedKeys.set(o,!1),this.validationMessages.set(o,c.hint||"Invalid format"))});const t=e.querySelector("select[data-model-select]"),i=e.querySelector("input[data-model-manual]"),a=(i&&!i.classList.contains("hidden-input")?i.value.trim():t==null?void 0:t.value)||"";a&&!this.pendingSecrets.has("OLLAMA_MODEL")&&(this.pendingSecrets.set("OLLAMA_MODEL",a),this.validatedKeys.set("OLLAMA_MODEL",!0))}hasPendingChanges(){return this.pendingSecrets.size>0}getMissingRequiredSecrets(){const e=[];for(const t of A){if(!F(t.id))continue;const i=C(t);if(i.some(n=>this.pendingSecrets.has(n)))for(const n of i)!k(n).valid&&!this.pendingSecrets.has(n)&&e.push(n)}return e}getValidationErrors(){const e=[];for(const[t,i]of this.pendingSecrets){const a=I(t,i);a.valid||e.push(`${t}: ${a.hint||"Invalid format"}`)}return e}async verifyPendingSecrets(){const e=[],t=Object.fromEntries(this.pendingSecrets.entries()),i=[];for(const[a,n]of this.pendingSecrets){const o=I(a,n);o.valid?i.push([a,n]):(this.validatedKeys.set(a,!1),this.validationMessages.set(a,o.hint||"Invalid format"),e.push(`${a}: ${o.hint||"Invalid format"}`))}if(i.length>0){const a=await Promise.race([Promise.all(i.map(async([n,o])=>{const r=await ie(n,o,t);return{key:n,result:r}})),new Promise(n=>setTimeout(()=>n(i.map(([o])=>({key:o,result:{valid:!0,message:"Saved (verification timed out)"}}))),15e3))]);for(const{key:n,result:o}of a)this.validatedKeys.set(n,o.valid),o.valid?this.validationMessages.delete(n):(this.validationMessages.set(n,o.message||"Verification failed"),e.push(`${n}: ${o.message||"Verification failed"}`))}return e}async commitVerifiedSecrets(){for(const[e,t]of this.pendingSecrets)this.validatedKeys.get(e)!==!1&&(await G(e,t),this.pendingSecrets.delete(e),this.validatedKeys.delete(e),this.validationMessages.delete(e))}setPending(e,t){this.pendingSecrets.set(e,t)}getPending(e){return this.pendingSecrets.get(e)}hasPending(e){return this.pendingSecrets.has(e)}deletePending(e){this.pendingSecrets.delete(e),this.validatedKeys.delete(e),this.validationMessages.delete(e)}setValidation(e,t,i){this.validatedKeys.set(e,t),i?this.validationMessages.set(e,i):this.validationMessages.delete(e)}getValidationState(e){return{validated:this.validatedKeys.get(e),message:this.validationMessages.get(e)}}destroy(){this.pendingSecrets.clear(),this.validatedKeys.clear(),this.validationMessages.clear()}}let $="overview",u,W=null;function w(s,e="ok"){const t=document.getElementById("settingsActionStatus");t&&(t.textContent=s,t.classList.remove("ok","error"),t.classList.add(e))}async function K(s,e){const t=await X(s);if(t){w(`${e}: ${t}`,"ok");return}w(d("modals.settingsWindow.invokeFail",{command:s}),"error")}function H(){X("close_settings_window").then(()=>{},()=>window.close())}async function P(s,e){return he(s,`http://localhost${s}`,e)}const q={overview:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>',ai:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1s-2.73 7.08 0 9.79 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.49 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/></svg>',economy:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>',markets:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></svg>',security:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',tracking:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',debug:'<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>'};function J(s){let e=0;for(const t of s.features)T(t)&&e++;return{ready:e,total:s.features.length}}function ee(){let s=0;for(const e of A)T(e.id)&&s++;return{ready:s,total:A.length}}function x(){const s=document.getElementById("sidebarNav");if(!s)return;const e=[],t=ee(),i=t.ready===t.total?"dot-ok":t.ready>0?"dot-partial":"dot-warn";e.push(`
    <button class="settings-nav-item${$==="overview"?" active":""}" id="settingsTab-overview" data-section="overview" role="tab" aria-selected="${$==="overview"}" aria-controls="contentArea">
      ${q.overview}
      <span class="settings-nav-label">Overview</span>
      <span class="settings-nav-dot ${i}"></span>
    </button>
  `),e.push('<div class="settings-nav-sep"></div>');for(const a of _){const{ready:n,total:o}=J(a),r=n===o?"dot-ok":n>0?"dot-partial":"dot-warn";e.push(`
      <button class="settings-nav-item${$===a.id?" active":""}" id="settingsTab-${a.id}" data-section="${a.id}" role="tab" aria-selected="${$===a.id}" aria-controls="contentArea">
        ${q[a.id]||""}
        <span class="settings-nav-label">${v(a.label)}</span>
        <span class="settings-nav-count">${n}/${o}</span>
        <span class="settings-nav-dot ${r}"></span>
      </button>
    `)}e.push('<div class="settings-nav-sep"></div>'),e.push(`
    <button class="settings-nav-item${$==="debug"?" active":""}" id="settingsTab-debug" data-section="debug" role="tab" aria-selected="${$==="debug"}" aria-controls="contentArea">
      ${q.debug}
      <span class="settings-nav-label">Debug &amp; Logs</span>
    </button>
  `),L(s,S(e.join(""),"legacy direct innerHTML migration")),D("section")}function D(s){const e=document.getElementById("contentArea");if(e){if(s==="search"){e.removeAttribute("aria-labelledby"),e.setAttribute("aria-label","Search results");return}e.removeAttribute("aria-label"),e.setAttribute("aria-labelledby",`settingsTab-${$}`)}}function O(s){const e=document.getElementById("contentArea");e&&(W&&(W(),W=null),$=s,x(),e.classList.add("fade-out"),e.classList.remove("fade-in"),requestAnimationFrame(()=>{if(s==="overview")Se(e);else if(s==="debug")Me(e);else{const t=_.find(i=>i.id===s);t&&Ee(e,t)}requestAnimationFrame(()=>{e.classList.remove("fade-out"),e.classList.add("fade-in")})}))}function Se(s){const{ready:e,total:t}=ee(),i=t>0?e/t*100:0,a=2*Math.PI*40,n=a-i/100*a,o=e===t?"var(--settings-green)":e>0?"var(--settings-blue)":"var(--settings-yellow)",r=k("WORLDMONITOR_API_KEY"),c=r.present?"Active":"Not set",l=r.present?"ok":"warn",g=_.map(f=>{const{ready:m,total:p}=J(f);return`<button class="settings-ov-cat ${m===p?"ov-cat-ok":m>0?"ov-cat-partial":"ov-cat-warn"}" data-section="${f.id}">
      <span class="settings-ov-cat-label">${v(f.label)}</span>
      <span class="settings-ov-cat-count">${m}/${p} ready</span>
    </button>`}).join("");L(s,S(`
    <div class="settings-overview">
      <div class="settings-ov-progress">
        <svg class="settings-ov-ring" viewBox="0 0 100 100" width="120" height="120">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="8"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke="${o}" stroke-width="8"
            stroke-linecap="round" stroke-dasharray="${a}" stroke-dashoffset="${n}"
            transform="rotate(-90 50 50)" style="transition:stroke-dashoffset 0.6s ease"/>
        </svg>
        <div class="settings-ov-ring-text">
          <span class="settings-ov-ring-num">${e}</span>
          <span class="settings-ov-ring-label">of ${t} ready</span>
        </div>
      </div>
      <div class="settings-ov-cats">${g}</div>
    </div>

    <div class="settings-ov-license">
      <section class="wm-section">
        <h2 class="wm-section-title">${d("modals.settingsWindow.worldMonitor.apiKey.title")}</h2>
        <p class="wm-section-desc">${d("modals.settingsWindow.worldMonitor.apiKey.description")}</p>
        <div class="wm-key-row">
          <div class="wm-input-wrap">
            <input type="password" class="wm-input" data-wm-key-input
              placeholder="${d("modals.settingsWindow.worldMonitor.apiKey.placeholder")}"
              autocomplete="off" spellcheck="false"
              ${r.present?`value="${E}"`:""} />
            <button type="button" class="wm-toggle-vis" data-wm-toggle title="Show/hide">&#x1f441;</button>
          </div>
          <span class="wm-badge ${l}">${c}</span>
        </div>
      </section>

      <div class="wm-divider"><span>${d("modals.settingsWindow.worldMonitor.dividerOr")}</span></div>

      <section class="wm-section">
        <h2 class="wm-section-title">${d("modals.settingsWindow.worldMonitor.register.title")}</h2>
        <p class="wm-section-desc">${d("modals.settingsWindow.worldMonitor.register.description")}</p>
        <div class="wm-register-row">
          <button type="button" class="wm-submit-btn" data-wm-open-pro>
            ${d("modals.settingsWindow.worldMonitor.register.submitBtn")}
          </button>
        </div>
      </section>
    </div>
  `,"legacy direct innerHTML migration")),$e(s)}function $e(s){var e,t,i;(e=s.querySelector("[data-wm-toggle]"))==null||e.addEventListener("click",()=>{const a=s.querySelector("[data-wm-key-input]");a&&(a.type=a.type==="password"?"text":"password")}),(t=s.querySelector("[data-wm-key-input]"))==null||t.addEventListener("input",a=>{const n=a.target;n.value.startsWith(E)&&(n.value=n.value.slice(E.length))}),(i=s.querySelector("[data-wm-open-pro]"))==null||i.addEventListener("click",()=>{Z("https://worldmonitor.app/pro")}),s.querySelectorAll(".settings-ov-cat[data-section]").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.section;n&&O(n)})})}function Ee(s,e){const i=e.features.map(a=>A.find(n=>n.id===a)).filter(Boolean).map(a=>{const n=F(a.id),o=T(a.id),r=C(a),c=!o&&r.every(h=>k(h).valid||u.hasPending(h)&&u.getValidationState(h).validated!==!1),l=o?"ready":c?"staged":"needs",g=o?"ok":c?"staged":"warn",f=o?"Ready":c?"Staged":"Needs keys",m=r.map(h=>te(h,a.id)).join(""),p=o||c?"":`<p class="settings-feat-fallback">${v(a.fallback)}</p>`;return`
      <div class="settings-feat ${l}" data-feature-id="${a.id}">
        <div class="settings-feat-header" data-feat-toggle-expand="${a.id}">
          <label class="settings-feat-toggle-label" data-click-stop>
            <div class="settings-feat-switch">
              <input type="checkbox" data-toggle="${a.id}" ${n?"checked":""} />
              <span class="settings-feat-slider"></span>
            </div>
          </label>
          <div class="settings-feat-info">
            <span class="settings-feat-name">${v(a.name)}</span>
            <span class="settings-feat-desc">${v(a.description)}</span>
          </div>
          <span class="settings-feat-pill ${g}">${f}</span>
          <span class="settings-feat-chevron">&#x25B8;</span>
        </div>
        <div class="settings-feat-body">
          ${m}
          ${p}
        </div>
      </div>
    `}).join("");L(s,S(`
    <div class="settings-section-header">
      <h2>${v(e.label)}</h2>
    </div>
    <div class="settings-feat-list">${i}</div>
  `,"legacy direct innerHTML migration")),se(s)}function te(s,e){var y,b;const t=k(s),i=u.hasPending(s),{validated:a,message:n}=u.getValidationState(s),o=Y[s]||s,r=re[s],c=z.has(s),l=r&&!t.present&&!i,g=i?a===!1?"Invalid":"Staged":t.present?t.valid?"Valid":"Looks invalid":"Missing",f=i?a===!1?"warn":"staged":t.valid?"ok":"warn",m=i?a===!1?"invalid":"valid-staged":"",p=i&&a===!1?n||"Invalid value":null;if(s==="OLLAMA_MODEL"){const M=i?u.getPending(s)||"":((y=R().secrets[s])==null?void 0:y.value)||"";return`
      <div class="settings-secret-row">
        <div class="settings-secret-label">${v(o)}</div>
        <span class="settings-secret-status ${f}">${v(g)}</span>
        <select data-model-select data-feature="${e}" class="${m}" aria-label="${v(o)}">
          ${M?`<option value="${v(M)}" selected>${v(M)}</option>`:'<option value="" selected disabled>Loading models...</option>'}
        </select>
        <input type="text" data-model-manual data-feature="${e}" class="${m} hidden-input"
          placeholder="Or type model name" aria-label="${v(o)}" autocomplete="off"
          ${M?`value="${v(M)}"`:""}>
        ${p?`<span class="settings-secret-hint">${v(p)}</span>`:""}
      </div>
    `}const h=l?`<a href="#" data-signup-url="${r}" class="settings-secret-link">Get key</a>`:"";return`
    <div class="settings-secret-row">
      <div class="settings-secret-label">${v(o)}</div>
      <span class="settings-secret-status ${f}">${v(g)}</span>
      <div class="settings-input-wrapper${l?" has-suffix":""}">
        <input type="${c?"text":"password"}" data-secret="${s}" data-feature="${e}"
          placeholder="${i?"Staged":"Enter value..."}" aria-label="${v(o)}" autocomplete="off" class="${m}"
          ${i?`value="${c?v(u.getPending(s)||""):E}"`:c&&t.present?`value="${v(((b=R().secrets[s])==null?void 0:b.value)||"")}"`:""}>
        ${h}
      </div>
      ${p?`<span class="settings-secret-hint">${v(p)}</span>`:""}
    </div>
  `}function se(s){s.querySelectorAll("[data-feat-toggle-expand]").forEach(t=>{t.addEventListener("click",i=>{if(i.target.closest("[data-click-stop]"))return;const a=t.closest(".settings-feat");a==null||a.classList.toggle("expanded")})}),s.querySelectorAll("input[data-toggle]").forEach(t=>{t.addEventListener("change",()=>{const i=t.dataset.toggle;i&&(we(i,t.checked),le(i,t.checked),x())})}),s.querySelectorAll("input[data-secret]").forEach(t=>{t.addEventListener("input",()=>{var n;const i=t.dataset.secret;if(!i)return;u.hasPending(i)&&t.value.startsWith(E)&&(t.value=t.value.slice(E.length)),u.setValidation(i,!0),t.classList.remove("valid-staged","invalid");const a=(n=t.closest(".settings-secret-row"))==null?void 0:n.querySelector(".settings-secret-hint");a&&a.remove()}),t.addEventListener("blur",()=>{var l;const i=t.dataset.secret;if(!i)return;const a=t.value.trim();if(!a){u.hasPending(i)&&(u.deletePending(i),O($));return}if(a===E)return;u.setPending(i,a);const n=I(i,a);n.valid?u.setValidation(i,!0):u.setValidation(i,!1,n.hint||"Invalid format"),z.has(i)?t.value=a:(t.type="password",t.value=E),t.classList.remove("valid-staged","invalid"),t.classList.add(n.valid?"valid-staged":"invalid");const o=(l=t.closest(".settings-secret-row"))==null?void 0:l.querySelector(".settings-secret-status");o&&(o.textContent=n.valid?"Staged":"Invalid",o.className=`settings-secret-status ${n.valid?"staged":"warn"}`);const r=t.closest(".settings-secret-row"),c=r==null?void 0:r.querySelector(".settings-secret-hint");if(c&&c.remove(),!n.valid&&n.hint){const g=document.createElement("span");g.className="settings-secret-hint",g.textContent=n.hint,r==null||r.appendChild(g)}if(V(t.dataset.feature),i==="OLLAMA_API_URL"&&n.valid){const g=s.querySelector("select[data-model-select]");g&&j(g)}x()})}),s.querySelectorAll("a[data-signup-url]").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();const a=t.dataset.signupUrl;a&&Z(a,null,{sameTabFallback:!1})})});const e=s.querySelector("select[data-model-select]");e&&(e.addEventListener("change",()=>{const t=e.value;t&&(u.setPending("OLLAMA_MODEL",t),u.setValidation("OLLAMA_MODEL",!0),e.classList.remove("invalid"),e.classList.add("valid-staged"),V("aiOllama"),x())}),j(e))}function V(s){const e=document.querySelector(`.settings-feat[data-feature-id="${s}"]`);if(!e)return;const t=A.find(c=>c.id===s);if(!t)return;const i=T(s),a=C(t),n=!i&&a.every(c=>k(c).valid||u.hasPending(c)&&u.getValidationState(c).validated!==!1),o=e.classList.contains("expanded");e.className=`settings-feat ${i?"ready":n?"staged":"needs"}${o?" expanded":""}`;const r=e.querySelector(".settings-feat-pill");r&&(r.className=`settings-feat-pill ${i?"ok":n?"staged":"warn"}`,r.textContent=i?"Ready":n?"Staged":"Needs keys")}async function j(s){var o,r,c;const e=R(),t=u.getPending("OLLAMA_API_URL")||((o=e.secrets.OLLAMA_API_URL)==null?void 0:o.value)||"";if(!t){L(s,S('<option value="" disabled selected>Set Ollama URL first</option>',"legacy direct innerHTML migration"));return}const i=u.getPending("OLLAMA_MODEL")||((r=e.secrets.OLLAMA_MODEL)==null?void 0:r.value)||"",a=await ce(t);if(a.length===0){const l=(c=s.parentElement)==null?void 0:c.querySelector("input[data-model-manual]");l&&(s.style.display="none",l.classList.remove("hidden-input"),l.dataset.listenerAttached||(l.dataset.listenerAttached="1",l.addEventListener("blur",()=>{const g=l.value.trim();g&&(u.setPending("OLLAMA_MODEL",g),u.setValidation("OLLAMA_MODEL",!0),l.classList.remove("invalid"),l.classList.add("valid-staged"),V("aiOllama"),x())})));return}L(s,S((i?"":'<option value="" selected disabled>Select a model...</option>')+a.map(l=>`<option value="${v(l)}" ${l===i?"selected":""}>${v(l)}</option>`).join(""),"legacy direct innerHTML migration"))}function Me(s){var t,i,a,n;L(s,S(`
    <div class="settings-section-header">
      <h2>Debug &amp; Logs</h2>
    </div>
    <div class="debug-actions">
      <button id="openLogsBtn" type="button">Open Logs Folder</button>
      <button id="openSidecarLogBtn" type="button">Open API Log</button>
    </div>
    <section class="debug-data-section">
      <h3>Data Management</h3>
      <div class="debug-data-actions">
        <button type="button" class="settings-btn settings-btn-secondary" id="exportSettingsBtn">
          ${d("components.settings.exportSettings")}
        </button>
        <button type="button" class="settings-btn settings-btn-secondary" id="importSettingsBtn">
          ${d("components.settings.importSettings")}
        </button>
        <input type="file" id="importSettingsInput" accept=".json" style="display: none;" />
      </div>
    </section>
    <section class="settings-diagnostics" id="diagnosticsSection">
      <header class="diag-header">
        <h2>Diagnostics</h2>
        <div class="diag-toggles">
          <label><input type="checkbox" id="verboseApiLog"> Verbose Sidecar Log</label>
          <label><input type="checkbox" id="fetchDebugLog"> Frontend Fetch Debug</label>
        </div>
      </header>
      <div class="diag-traffic-bar">
        <h3>API Traffic <span id="trafficCount"></span></h3>
        <div class="diag-traffic-controls">
          <label><input type="checkbox" id="autoRefreshLog" checked> Auto</label>
          <button id="refreshLogBtn" type="button">Refresh</button>
          <button id="clearLogBtn" type="button">Clear</button>
        </div>
      </div>
      <div id="trafficLog" class="diag-traffic-log"></div>
    </section>
  `,"legacy direct innerHTML migration")),(t=s.querySelector("#openLogsBtn"))==null||t.addEventListener("click",()=>{K("open_logs_folder",d("modals.settingsWindow.openLogs"))}),(i=s.querySelector("#openSidecarLogBtn"))==null||i.addEventListener("click",()=>{K("open_sidecar_log_file",d("modals.settingsWindow.openApiLog"))}),(a=s.querySelector("#exportSettingsBtn"))==null||a.addEventListener("click",()=>{de()});const e=s.querySelector("#importSettingsInput");(n=s.querySelector("#importSettingsBtn"))==null||n.addEventListener("click",()=>{e==null||e.click()}),e==null||e.addEventListener("change",async o=>{var c;const r=(c=o.target.files)==null?void 0:c[0];if(r){try{const l=await ge(r);w(d("components.settings.importSuccess",{count:String(l.keysImported)}),"ok")}catch(l){l instanceof DOMException?l.name==="QuotaExceededError"||l.name==="NS_ERROR_DOM_QUOTA_REACHED"?w(d("components.settings.importFailed")+": storage limit reached","error"):l.name==="SecurityError"?w(d("components.settings.importFailed")+": storage blocked","error"):w(`${d("components.settings.importFailed")}: ${l.message||l.name}`,"error"):l instanceof Error&&l.message?w(`${d("components.settings.importFailed")}: ${l.message}`,"error"):w(d("components.settings.importFailed"),"error")}e.value=""}}),Ae()}function Ae(){const s=document.getElementById("verboseApiLog"),e=document.getElementById("fetchDebugLog"),t=document.getElementById("autoRefreshLog"),i=document.getElementById("refreshLogBtn"),a=document.getElementById("clearLogBtn"),n=document.getElementById("trafficLog"),o=document.getElementById("trafficCount");e&&(e.checked=fe("wm-debug-log")==="1",e.addEventListener("change",()=>{Q("wm-debug-log",e.checked?"1":"0")}));async function r(){if(s)try{const p=await(await P("/api/local-debug-toggle")).json();s.checked=p.verboseMode}catch{}}s==null||s.addEventListener("change",async()=>{try{const p=await(await P("/api/local-debug-toggle",{method:"POST"})).json();s&&(s.checked=p.verboseMode),w(p.verboseMode?d("modals.settingsWindow.verboseOn"):d("modals.settingsWindow.verboseOff"),"ok")}catch{w(d("modals.settingsWindow.sidecarError"),"error")}}),r();async function c(){if(n)try{const h=(await(await P("/api/local-traffic-log")).json()).entries||[];if(o&&(o.textContent=`(${h.length})`),h.length===0){L(n,S(`<p class="diag-empty">${d("modals.settingsWindow.noTraffic")}</p>`,"legacy direct innerHTML migration"));return}const y=h.slice().reverse().map(b=>{var N;const M=((N=b.timestamp.split("T")[1])==null?void 0:N.replace("Z",""))||b.timestamp;return`<tr class="diag-${b.status<300?"ok":b.status<500?"warn":"err"}"><td>${v(M)}</td><td>${v(b.method)}</td><td title="${v(b.path)}">${v(b.path)}</td><td>${b.status}</td><td>${b.durationMs}ms</td></tr>`}).join("");L(n,S(`<table class="diag-table"><thead><tr><th scope="col">${d("modals.settingsWindow.table.time")}</th><th scope="col">${d("modals.settingsWindow.table.method")}</th><th scope="col">${d("modals.settingsWindow.table.path")}</th><th scope="col">${d("modals.settingsWindow.table.status")}</th><th scope="col">${d("modals.settingsWindow.table.duration")}</th></tr></thead><tbody>${y}</tbody></table>`,"legacy direct innerHTML migration"))}catch{L(n,S(`<p class="diag-empty">${d("modals.settingsWindow.sidecarUnreachable")}</p>`,"legacy direct innerHTML migration"))}}i==null||i.addEventListener("click",()=>void c()),a==null||a.addEventListener("click",async()=>{try{await P("/api/local-traffic-log",{method:"DELETE"})}catch{}n&&L(n,S(`<p class="diag-empty">${d("modals.settingsWindow.logCleared")}</p>`,"legacy direct innerHTML migration")),o&&(o.textContent="(0)")});let l=null;function g(){f(),l=me(()=>c(),{intervalMs:3e3,pauseWhenHidden:!0,refreshOnVisible:!0,runImmediately:!0,jitterFraction:0})}function f(){l&&(l.stop(),l=null)}t==null||t.addEventListener("change",()=>{t.checked?g():f()}),g(),W=f}function U(s,e){const t=v(s),i=v(e);if(!i)return t;const a=new RegExp(`(${i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");return t.replace(a,"<mark>$1</mark>")}function ke(s){const e=document.getElementById("contentArea");if(!e)return;if(!s.trim()){O($);return}const t=s.toLowerCase(),i=[];for(const n of _)for(const o of n.features){const r=A.find(l=>l.id===o);if(!r)continue;[r.name,r.description,...C(r).map(l=>Y[l]||l)].join(" ").toLowerCase().includes(t)&&i.push({feature:r,catLabel:n.label})}if(i.length===0){L(e,S(`<div class="settings-search-empty"><p>No features match "${v(s)}"</p></div>`,"legacy direct innerHTML migration")),D("search");return}const a=i.map(({feature:n,catLabel:o})=>{const r=F(n.id),c=T(n.id),l=C(n),g=!c&&l.every(y=>k(y).valid||u.hasPending(y)&&u.getValidationState(y).validated!==!1),f=c?"ready":g?"staged":"needs",m=c?"ok":g?"staged":"warn",p=c?"Ready":g?"Staged":"Needs keys",h=l.map(y=>te(y,n.id)).join("");return`
      <div class="settings-feat ${f} expanded" data-feature-id="${n.id}">
        <div class="settings-feat-header" data-feat-toggle-expand="${n.id}">
          <label class="settings-feat-toggle-label" data-click-stop>
            <div class="settings-feat-switch">
              <input type="checkbox" data-toggle="${n.id}" ${r?"checked":""} />
              <span class="settings-feat-slider"></span>
            </div>
          </label>
          <div class="settings-feat-info">
            <span class="settings-feat-name">${U(n.name,s)}</span>
            <span class="settings-feat-desc">${U(n.description,s)}</span>
          </div>
          <span class="settings-feat-pill ${m}">${p}</span>
          <span class="settings-feat-chevron">&#x25B8;</span>
        </div>
        <div class="settings-feat-body">
          <div class="settings-feat-cat-tag">${v(o)}</div>
          ${h}
        </div>
      </div>
    `}).join("");L(e,S(`
    <div class="settings-section-header">
      <h2>Search results for "${v(s)}"</h2>
    </div>
    <div class="settings-feat-list">${a}</div>
  `,"legacy direct innerHTML migration")),D("search"),se(e)}async function xe(){var o,r,c;await ue(),ye(),be(),document.title=d("modals.settingsWindow.shellTitle");const s=document.querySelector(".settings-header-title");s&&(s.textContent=d("modals.settingsWindow.shellTitle"));const e=document.getElementById("settingsSearch");e&&(e.placeholder=d("modals.settingsWindow.shellSearchPlaceholder"),e.setAttribute("aria-label",d("modals.settingsWindow.shellSearchPlaceholder")));const t=document.getElementById("cancelBtn");t&&(t.textContent=d("modals.settingsWindow.shellCancel"));const i=document.getElementById("okBtn");i&&(i.textContent=d("modals.settingsWindow.shellSaveClose"));try{await pe()}catch{}requestAnimationFrame(()=>{document.documentElement.classList.remove("no-transition")}),await oe(),u=new Le,O("overview"),(o=document.getElementById("sidebarNav"))==null||o.addEventListener("click",l=>{const g=l.target.closest("[data-section]");g!=null&&g.dataset.section&&O(g.dataset.section)});const a=document.getElementById("settingsSearch");let n;a==null||a.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(()=>ke(a.value),200)}),(r=document.getElementById("okBtn"))==null||r.addEventListener("click",()=>{(async()=>{try{const l=document.querySelector("[data-wm-key-input]"),g=l==null?void 0:l.value.trim(),f=!!(g&&g!==E&&g.length>0),m=document.getElementById("contentArea");m&&u.captureUnsavedInputs(m);const p=u.hasPendingChanges();if(!p&&!f){H();return}if(f&&g&&await G("WORLDMONITOR_API_KEY",g),p){w(d("modals.settingsWindow.validating"),"ok");const h=u.getMissingRequiredSecrets();if(h.length>0){w(`Missing required: ${h.join(", ")}`,"error");return}const y=await u.verifyPendingSecrets();if(y.length>0){w(d("modals.settingsWindow.verifyFailed",{errors:y.join(", ")}),"error");return}await u.commitVerifiedSecrets()}w(d("modals.settingsWindow.saved"),"ok"),H()}catch(l){console.error("[settings] save error:",l),w(d("modals.settingsWindow.failed",{error:String(l)}),"error")}})()}),(c=document.getElementById("cancelBtn"))==null||c.addEventListener("click",()=>{H()}),window.addEventListener("beforeunload",()=>{u.destroy()})}Q("wm-settings-open","1");window.addEventListener("beforeunload",()=>ve("wm-settings-open"));xe();

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["settings-2H0wdccl.js"]=1;