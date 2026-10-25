import{c6 as D,ao as ue,c7 as ye,aw as fe}from"./App-BLvralVM.js";import{t as c}from"./theme-colors-BmUbP5Zj.js";import{e as a}from"./sanitize-D7dx0cA1.js";import{p as ve}from"./feeds-DscCAg9l.js";import{q as he}from"./gdelt-intel-FTZQ7YLF.js";import{f as J}from"./analytics-DYGwu9Ab.js";import{s as x,t as K}from"./dom-utils-COg85yfw.js";import{d as be}from"./main-h8HGg_jT.js";import"./clerk-Bv6SR6q7.js";import"./panel-gating-RGvzctmX.js";import"./entitlements-DAACEsnd.js";import"./convex-client-CpRmA3au.js";import"./runtime-config-W7vfk27c.js";import"./tauri-bridge-UPyks66k.js";import"./i18n-qlunRAMb.js";import"./widget-store-OQfX_lfG.js";import"./index-Bxy5zMWX.js";import"./storage-quota-BtyHkWgJ.js";import"./panel-storage-tBgv39vh.js";import"./index-CE8VpG3t.js";import"./persistent-cache-DHxY9lLL.js";import"./debugbear-rum-BwOaYCU9.js";import"./storage-facility-registry-store-cTGXMc39.js";import"./base-D0QjlXm-.js";import"./markets-DAj2UmR6.js";import"./panels-DjXt_yRS.js";import"./geo-convergence-Co9DJcJn.js";import"./geo-distance-DMZxbl2V.js";import"./cached-risk-scores-RAKQjGn1.js";import"./ai-flow-settings-CALwVtL-.js";import"./source-provenance-Cjq3jyzJ.js";import"./cloud-prefs-sync-CdeSAUkC.js";import"./pinned-webcams-CLAA_f-T.js";import"./sync-keys-CvsyvzzE.js";import"./cross-domain-storage-FNCeAnZW.js";import"./layout-batch-B9PC4ceT.js";import"./string-B04_ldoR.js";import"./continuous-p2aHrHyA.js";import"./analysis-framework-store-Bvj4Ftlo.js";import"./checkout-BOJoYNX1.js";/* empty css                         */import"./globe-marker-probe-CYyPnhKX.js";import"./theme-manager-CAVZrcRi.js";import"./font-settings-B6XmwZwl.js";import"./user-location-PIZ0eOpN.js";const ee=ye/1e3;let p=null,N=null;function te(d,t){const s=d.indexOf(":");if(s===-1)return{};const b=d.slice(0,s).trim(),$=d.slice(s+1).trim().replace("{key}",t.trim());return{[b]:$}}function z(d,t){const s=t.indexOf(":");if(s===-1)return null;const b=t.slice(0,s).trim(),$=t.slice(s+1).trim(),i=d[b];if(!i)return null;const M=$.indexOf("{key}"),f=$.slice(0,M).trim();return f&&!i.startsWith(f)?null:i.slice(f?f.length+1:0).trim()||null}function se(d){const t=d.match(/\(([^)]+)\)\s*$/);return(t==null?void 0:t[1])??d}function pt(d){var Q,X;w();const t=d.existingSpec;p=document.createElement("div"),p.className="modal-overlay active",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),be(p,{reload:"blocking"}),p.setAttribute("aria-label",c("mcp.modalTitle"));const s=document.createElement("div");s.className="modal mcp-connect-modal";const b=D.map(e=>`
    <button class="mcp-preset-card" data-url="${a(e.serverUrl)}"
      data-tool="${a(e.defaultTool??"")}"
      data-args="${a(JSON.stringify(e.defaultArgs??{}))}"
      data-title="${a(e.defaultTitle??e.name)}"
      data-auth-note="${a(e.authNote??"")}"
      data-api-key-header="${a(e.apiKeyHeader??"")}">
      <span class="mcp-preset-icon">${e.icon}</span>
      <span class="mcp-preset-info">
        <span class="mcp-preset-name">${a(e.name)}</span>
        <span class="mcp-preset-desc">${a(e.description)}</span>
      </span>
      ${e.authNote?'<span class="mcp-preset-key-badge">🔑</span>':""}
    </button>
  `).join(""),$=(t==null?void 0:t.customHeaders)??{},i=t?D.find(e=>e.serverUrl===t.serverUrl&&e.apiKeyHeader):void 0,M=i!=null&&i.apiKeyHeader?z($,i.apiKeyHeader):null,f=!t||!!M,oe=M??"",ne=f?"":ae($);x(s,K(`
    <div class="modal-header">
      <span class="modal-title">${a(c("mcp.modalTitle"))}</span>
      <button class="modal-close" aria-label="${a(c("common.close"))}">✕</button>
    </div>
    <div class="mcp-connect-body">
      ${t?"":`
      <div class="mcp-presets-section">
        <label class="mcp-label">${a(c("mcp.quickConnect"))}</label>
        <div class="mcp-presets-list">${b}</div>
      </div>
      <div class="mcp-section-divider"><span>${a(c("mcp.or"))}</span></div>
      `}
      <div class="mcp-form-group">
        <label class="mcp-label">${a(c("mcp.serverUrl"))}</label>
        <input class="mcp-input mcp-server-url" type="url"
          placeholder="https://my-mcp-server.com/mcp"
          value="${a((t==null?void 0:t.serverUrl)??"")}" />
      </div>
      <div class="mcp-form-group mcp-api-key-group" style="${f?"":"display:none"}">
        <label class="mcp-label">${a(c("mcp.apiKey"))}</label>
        <input class="mcp-input mcp-api-key" type="text" autocomplete="off"
          placeholder="${a(c("mcp.apiKeyPlaceholder"))}"
          value="${a(oe)}" />
        <span class="mcp-api-key-hint"></span>
        <button type="button" class="mcp-auth-mode-btn mcp-to-advanced">${a(c("mcp.useCustomHeaders"))}</button>
      </div>
      <div class="mcp-form-group mcp-auth-header-group" style="${f?"display:none":""}">
        <label class="mcp-label">${a(c("mcp.authHeader"))} <span class="mcp-optional">(${c("mcp.optional")})</span></label>
        <input class="mcp-input mcp-auth-header" type="text"
          placeholder="Authorization: Bearer token123; x-api-key: key456"
          value="${a(ne)}" />
        <button type="button" class="mcp-auth-mode-btn mcp-to-simple" style="display:none">${a(c("mcp.useApiKey"))}</button>
      </div>
      <div class="mcp-connect-actions">
        <button class="btn btn-secondary mcp-connect-btn">${a(c("mcp.connectBtn"))}</button>
        <span class="mcp-connect-status"></span>
      </div>
      <div class="mcp-tools-section" style="display:none">
        <label class="mcp-label">${a(c("mcp.selectTool"))}</label>
        <div class="mcp-tools-list"></div>
      </div>
      <div class="mcp-tool-config" style="display:none">
        <div class="mcp-form-group">
          <label class="mcp-label">${a(c("mcp.toolArgs"))}</label>
          <textarea class="mcp-input mcp-tool-args" rows="3" placeholder="{}"></textarea>
          <span class="mcp-args-error" style="display:none;color:var(--red)"></span>
        </div>
        <div class="mcp-form-group">
          <label class="mcp-label">${a(c("mcp.panelTitle"))}</label>
          <input class="mcp-input mcp-panel-title" type="text"
            placeholder="${a(c("mcp.panelTitlePlaceholder"))}"
            value="${a((t==null?void 0:t.title)??"")}" />
        </div>
        <div class="mcp-form-group mcp-refresh-group">
          <label class="mcp-label">${a(c("mcp.refreshEvery"))}</label>
          <input class="mcp-input mcp-refresh-input" type="number" min="${ee}" max="86400"
            value="${t?Math.round(t.refreshIntervalMs/1e3):ee}" />
          <span class="mcp-refresh-unit">${a(c("mcp.seconds"))}</span>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost mcp-cancel-btn">${a(c("common.cancel"))}</button>
      <button class="btn btn-primary mcp-add-btn" disabled>${a(c("mcp.addPanel"))}</button>
    </div>
  `,"legacy direct innerHTML migration")),p.appendChild(s),document.body.appendChild(p),N=fe(p,{onEscape:()=>w()}),N.activate();let O=[],g=t?{name:t.toolName}:null;const G="Authorization: Bearer {key}";let y=(i==null?void 0:i.apiKeyHeader)??(f?G:"");const S=s.querySelector(".mcp-server-url"),H=s.querySelector(".mcp-api-key-group"),E=s.querySelector(".mcp-api-key"),C=s.querySelector(".mcp-api-key-hint"),ce=s.querySelector(".mcp-to-advanced"),k=s.querySelector(".mcp-auth-header-group"),L=s.querySelector(".mcp-auth-header"),A=s.querySelector(".mcp-to-simple"),_=s.querySelector(".mcp-connect-btn"),m=s.querySelector(".mcp-connect-status"),U=s.querySelector(".mcp-tools-section"),T=s.querySelector(".mcp-tools-list"),R=s.querySelector(".mcp-tool-config"),q=s.querySelector(".mcp-tool-args"),j=s.querySelector(".mcp-args-error"),I=s.querySelector(".mcp-panel-title"),le=s.querySelector(".mcp-refresh-input"),V=s.querySelector(".mcp-add-btn");function re(){return H.style.display!=="none"}function P(){if(re()&&y){const e=E.value.trim();return e?te(y,e):{}}return Z(L.value)}function ie(){var l;const e=(l=D.find(r=>r.serverUrl===S.value.trim()))==null?void 0:l.apiKeyHeader;if(!e)return!0;const o=e.slice(0,e.indexOf(":")).trim(),n=Object.entries(P()).find(([r])=>r.toLowerCase()===o.toLowerCase());return!!n&&z({[o]:n[1]},e)!==null}function W(){return g!==null&&ie()}function v(){V.disabled=!W()}S.addEventListener("input",v),E.addEventListener("input",v),L.addEventListener("input",v);function Y(e){y=e.apiKeyHeader??"",H.style.display="",k.style.display="none",A.style.display="none",e.authNote?C.textContent=se(e.authNote):C.textContent=""}function pe(e=!0){e&&y&&E.value.trim()&&(L.value=ae(te(y,E.value.trim()))),H.style.display="none",k.style.display="",y&&(A.style.display="")}ce.addEventListener("click",()=>{pe(!0),v()}),A.addEventListener("click",()=>{if(y){const e=Z(L.value),o=z(e,y);o&&(E.value=o)}H.style.display="",k.style.display="none",A.style.display="none",v()}),f&&(i!=null&&i.authNote)&&(C.textContent=se(i.authNote)),t||S.addEventListener("input",()=>{const e=S.value.trim(),o=Array.from(s.querySelectorAll(".mcp-preset-card")),n=o.find(l=>l.dataset.url===e);if(n){o.forEach(h=>h.classList.remove("selected")),n.classList.add("selected");const l=n.dataset.apiKeyHeader??"",r=n.dataset.authNote??"";l?Y({apiKeyHeader:l,authNote:r}):(y="",H.style.display="none",C.textContent="",k.style.display="",A.style.display="none")}else o.forEach(l=>l.classList.remove("selected")),y=G,H.style.display="",C.textContent="",k.style.display="none",A.style.display="none";v()}),s.querySelectorAll(".mcp-preset-card").forEach(e=>{e.addEventListener("click",()=>{s.querySelectorAll(".mcp-preset-card").forEach(h=>h.classList.remove("selected")),e.classList.add("selected"),S.value=e.dataset.url??"";const o=e.dataset.apiKeyHeader??"",n=e.dataset.authNote??"";o?(Y({apiKeyHeader:o,authNote:n}),E.value="",m.textContent="",m.className="mcp-connect-status"):(y="",H.style.display="none",k.style.display="",A.style.display="none",L.value="",n?(m.textContent=`🔑 ${n}`,m.className="mcp-connect-status mcp-status-info"):(m.textContent="",m.className="mcp-connect-status"));const l=e.dataset.tool,r=e.dataset.args,u=e.dataset.title;l&&(g={name:l,description:""},q.value=r||"{}",u&&(I.value=u),R.style.display="",U.style.display="",x(T,K(`<div class="mcp-tool-item selected"><span class="mcp-tool-name">${a(l)}</span></div>`,"legacy direct innerHTML migration"))),v()})}),t&&(q.value=Object.keys(t.toolArgs).length?JSON.stringify(t.toolArgs,null,2):"{}",R.style.display="",U.style.display="",x(T,K(`<div class="mcp-tool-item selected">${a(t.toolName)}</div>`,"legacy direct innerHTML migration")),v());function Z(e){const o=e.trim();if(!o)return{};const n={};for(const l of o.split(/;\s+(?=[A-Za-z0-9_-]+\s*:)/)){const r=l.indexOf(":");if(r===-1)continue;const u=l.slice(0,r).trim(),h=l.slice(r+1).trim();u&&(n[u]=h)}return n}function de(e){x(T,K("","legacy direct innerHTML migration"));for(const o of e){const n=document.createElement("div");n.className="mcp-tool-item";const l=o.description?o.description.length>100?o.description.slice(0,97)+"…":o.description:"";x(n,K(`
        <span class="mcp-tool-name">${a(o.name)}</span>
        ${l?`<span class="mcp-tool-desc">${a(l)}</span>`:""}
      `,"legacy direct innerHTML migration")),n.addEventListener("click",()=>{T.querySelectorAll(".mcp-tool-item").forEach(u=>u.classList.remove("selected")),n.classList.add("selected"),g=o,I.value||(I.value=o.name);const r=o.inputSchema;if(r!=null&&r.properties){const u={};for(const[h,me]of Object.entries(r.properties)){const B=me;B.default!==void 0&&B.default!==null&&(u[h]=B.default)}q.value=Object.keys(u).length?JSON.stringify(u,null,2):"{}"}else q.value="{}";R.style.display="",v()}),T.appendChild(n)}}_.addEventListener("click",async()=>{const e=S.value.trim();if(e){J("mcp-connect-attempt"),m.textContent=c("mcp.connecting"),m.className="mcp-connect-status mcp-status-loading",_.disabled=!0;try{const o=P(),n=await he(ve("/api/mcp-proxy"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"tools/list",serverUrl:e,customHeaders:o}),signal:AbortSignal.timeout(2e4)}),l=await n.json();if(!n.ok||l.error)throw new Error(l.error||`HTTP ${n.status}`);O=l.tools??[],m.textContent=c("mcp.foundTools",{count:String(O.length)}),m.className="mcp-connect-status mcp-status-ok",J("mcp-connect-success",{toolCount:O.length}),U.style.display="",de(O)}catch(o){const n=o instanceof Error?o.message:String(o);m.textContent=`${c("mcp.connectFailed")}: ${n}`,m.className="mcp-connect-status mcp-status-error"}finally{_.disabled=!1}}}),V.addEventListener("click",()=>{if(!g||!W())return;J("mcp-panel-add",{tool:g.name}),j.style.display="none";let e={};try{e=JSON.parse(q.value||"{}")}catch{j.textContent=c("mcp.invalidJson"),j.style.display="";return}const n={id:(t==null?void 0:t.id)??`mcp-${crypto.randomUUID()}`,title:I.value.trim()||g.name,serverUrl:S.value.trim(),customHeaders:P(),toolName:g.name,toolArgs:e,refreshIntervalMs:ue(parseInt(le.value,10)*1e3),createdAt:(t==null?void 0:t.createdAt)??Date.now(),updatedAt:Date.now()};w(),d.onComplete(n)});const F=()=>w();(Q=s.querySelector(".modal-close"))==null||Q.addEventListener("click",F),(X=s.querySelector(".mcp-cancel-btn"))==null||X.addEventListener("click",F),p.addEventListener("click",e=>{e.target===p&&F()})}function ae(d){const t=Object.entries(d);return t.length?t.map(([s,b])=>`${s}: ${b}`).join("; "):""}function w(){N==null||N.deactivate(),N=null,p==null||p.remove(),p=null}export{w as closeMcpConnectModal,pt as openMcpConnectModal};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["McpConnectModal-BleM1qvk.js"]=1;