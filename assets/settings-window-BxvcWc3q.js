import{t as o,S as p,i as y}from"./theme-colors-BmUbP5Zj.js";import{S as b}from"./base-D0QjlXm-.js";import"./markets-DAj2UmR6.js";import"./feeds-DscCAg9l.js";import{A as m,V as C,g as u,a as L,b as P,c as T,d as k,F as $,u as _}from"./panels-DjXt_yRS.js";import{l as F,s as D}from"./index-Bxy5zMWX.js";import{d as E}from"./widget-store-OQfX_lfG.js";import{e as l}from"./sanitize-D7dx0cA1.js";import{s as w,t as S}from"./dom-utils-COg85yfw.js";import"./clerk-Bv6SR6q7.js";import"./i18n-qlunRAMb.js";import"./persistent-cache-DHxY9lLL.js";import"./tauri-bridge-UPyks66k.js";import"./storage-quota-BtyHkWgJ.js";import"./source-provenance-Cjq3jyzJ.js";import"./runtime-config-W7vfk27c.js";import"./entitlements-DAACEsnd.js";import"./convex-client-CpRmA3au.js";import"./panel-storage-tBgv39vh.js";function H(a,e){if(a==="runtime-config")return o("modals.runtimeConfig.title");const r=`panels.${a.replace(/-([a-z])/g,(g,c)=>c.toUpperCase())}`,d=o(r);return d===r?e:d}function ee(){var c;const a=document.getElementById("app");if(!a)return;document.title=`${o("header.settings")} - World Monitor`;const e=F(b.panels,L),v=new Set(Object.keys(m));for(const s of Object.keys(e))!v.has(s)&&s!=="runtime-config"&&delete e[s];const r=new Set(C[p]??[]);for(const s of Object.keys(m))s in e||(e[s]={...u(s,p),enabled:r.has(s)});const d=y();function g(){const A=Object.entries(e).filter(([t])=>(t!=="runtime-config"||d)&&(!t.startsWith("cw-")||E())).map(([t,n])=>{const i=m[t]?u(t,p):n;return`
        <div class="panel-toggle-item ${n.enabled?"active":""}" data-panel="${l(t)}">
          <div class="panel-toggle-checkbox">${n.enabled?"✓":""}</div>
          <span class="panel-toggle-label">${l(H(t,i.name??n.name))}</span>
        </div>
      `}).join(""),f=document.getElementById("panelToggles");f&&(w(f,S(A,"legacy direct innerHTML migration")),f.querySelectorAll(".panel-toggle-item").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.panel,i=e[n];if(i){const h=m[n]?u(n,p):i;if(!i.enabled&&!P(n,h,E())||!i.enabled&&!E()&&T(n)&&k(e)>=$)return;_(i,!i.enabled),D(b.panels,e),g()}})}))}w(a,S(`
    <div class="settings-window-shell">
      <div class="settings-window-header">
        <div class="settings-window-header-text">
          <span class="settings-window-title">${l(o("header.settings"))}</span>
          <p class="settings-window-caption">${l(o("header.panelDisplayCaption"))}</p>
        </div>
        <button type="button" class="modal-close" id="settingsWindowClose" aria-label="${l(o("common.close"))}">×</button>
      </div>
      <div class="panel-toggle-grid" id="panelToggles"></div>
    </div>
  `,"legacy direct innerHTML migration")),(c=document.getElementById("settingsWindowClose"))==null||c.addEventListener("click",()=>{window.close()}),g()}export{ee as initSettingsWindow};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["settings-window-BxvcWc3q.js"]=1;