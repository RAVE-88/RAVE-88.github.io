const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CE8VpG3t.js","assets/theme-colors-BmUbP5Zj.js","assets/clerk-Bv6SR6q7.js","assets/i18n-qlunRAMb.js","assets/persistent-cache-DHxY9lLL.js","assets/tauri-bridge-UPyks66k.js","assets/storage-quota-BtyHkWgJ.js","assets/debugbear-rum-BwOaYCU9.js","assets/analytics-DYGwu9Ab.js","assets/convex-client-CpRmA3au.js","assets/widget-store-OQfX_lfG.js","assets/index-Bxy5zMWX.js","assets/panel-storage-tBgv39vh.js","assets/entitlements-DAACEsnd.js"])))=>i.map(i=>d[i]);
var Dt=Object.defineProperty;var It=(n,u,e)=>u in n?Dt(n,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[u]=e;var g=(n,u,e)=>It(n,typeof u!="symbol"?u+"":u,e);import{P as L}from"./Panel-3zvnDVWb.js";import{BLS_METRO_IDS as Ge,getNationalDebtData as Ft,getEurostatCountryData as Lt}from"./index-CSDWQ1jW.js";import{t as r,i as ae,g as fe,L as _t}from"./theme-colors-BmUbP5Zj.js";import{u as k,e as o,s as ht}from"./sanitize-D7dx0cA1.js";import{isFeatureAvailable as ie}from"./runtime-config-W7vfk27c.js";import{bb as He,bc as Mt,bd as Nt,be as Bt,aY as Ot,aG as Ut,aZ as Gt}from"./App-BLvralVM.js";import{s as ue,m as Ht}from"./sparkline-B3e4nvqm.js";import{W as J,a as Q,b as je,c as mt}from"./main-h8HGg_jT.js";import{i as jt,t as qe}from"./index-Bxy5zMWX.js";import{t as _,s as O}from"./dom-utils-COg85yfw.js";import{D as vt,f as qt,a as Vt,b as zt,c as Wt,d as Kt,e as Yt,M as Zt,S as Jt,g as Qt}from"./index-AuG-a3X4.js";import{l as Ve,E as Xt,F as ge,G as es,J as ts,B as ss}from"./gdelt-intel-FTZQ7YLF.js";import{S as be,r as as,g as is}from"./index-Dtuu_8tL.js";import{T as ns}from"./transit-chart-D6CKzSG8.js";import{s as rs,g as ye}from"./convex-client-CpRmA3au.js";import{h as re}from"./panel-gating-RGvzctmX.js";import{d as ze}from"./analytics-DYGwu9Ab.js";import{b as ft}from"./activation-DdoRK80V.js";import{C as os}from"./country-port-clusters-CisGe5RV.js";import{C as cs}from"./china-factory-clusters-CnArIcnt.js";import{g as ls,r as ds}from"./china-activity-nowcast-view-CTaDw_WA.js";import{G as oe}from"./gulf-fdi-Brj4tDHY.js";import{b as j,a as he,M as us,g as me,E as Me,r as Ne}from"./index-CE8VpG3t.js";import{_ as Z}from"./clerk-Bv6SR6q7.js";import{n as ps,h as $e,i as hs,c as ms}from"./macro-tiles-china-DNwROK3u.js";import{C as vs}from"./ciss-staleness-BTjV3-Om.js";function gt(n){return n<20?"#27ae60":n<40?"#f1c40f":n<60?"#e67e22":n<80?"#e74c3c":"#8e44ad"}function fs(n,u){return n==="ICSA"?u>=1e3?(u/1e3).toFixed(0)+"K":u.toFixed(0):n==="VIXCLS"?u.toFixed(2):n==="STLFSI4"||n==="GSCPI"?u.toFixed(3):u.toFixed(2)}const We="wm:economic-stress:last-notified-level";function gs(n){if(typeof Notification>"u"||Notification.permission!=="granted")return;const u=n>=85?2:n>=70?1:0;if(u!==0)try{const e=parseInt(sessionStorage.getItem(We)??"0",10);if(u<=e)return;sessionStorage.setItem(We,String(u)),new Notification("Economic Stress Alert",{body:`Composite stress index reached ${n.toFixed(1)} (${n>=85?"Critical":"Severe"})`,icon:"/favico/favicon-32x32.png",tag:"economic-stress"})}catch{}}function bs(n){if(n.missing)return`<div style="background:rgba(255,255,255,0.02);border-radius:6px;padding:8px 10px;border:1px solid rgba(255,255,255,0.05)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em">${o(n.label)}</span>
        <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#888">N/A</span>
      </div>
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:#666;font-style:italic">Data unavailable</div>
    </div>`;const u=gt(n.score),e=Math.min(100,Math.max(0,n.score)).toFixed(1),t=fs(n.id,n.rawValue);return`<div style="background:rgba(255,255,255,0.04);border-radius:6px;padding:8px 10px;border:1px solid rgba(255,255,255,0.07)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
      <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em">${o(n.label)}</span>
      <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(t)}</span>
    </div>
    <div style="display:flex;align-items:center;gap:6px">
      <div style="flex:1;background:rgba(255,255,255,0.07);border-radius:3px;height:5px;overflow:hidden">
        <div style="height:100%;width:${e}%;background:${u};border-radius:3px;transition:width 0.3s"></div>
      </div>
      <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${u};min-width:28px;text-align:right">${n.score.toFixed(0)}</span>
    </div>
  </div>`}function we(n){return n.value===null?"N/A":n.unit==="$B"?`$${n.value.toLocaleString()}B`:`${n.value.toLocaleString()}${n.unit}`}function Se(n){if(n.change===null)return"No change";const u=n.change>0?"+":"";return n.unit==="$B"?`${n.change<0?"-$":`${u}$`}${Math.abs(n.change).toLocaleString()}B`:`${u}${n.change.toLocaleString()}${n.unit}`}function Ce(n){return n===null||n===0?"neutral":n>0?"positive":"negative"}function ys(n){var i,c,d,v;const u=new Map(n.map(h=>[h.id,h])),e=((i=u.get("VIXCLS"))==null?void 0:i.value)??null,t=((c=u.get("T10Y2Y"))==null?void 0:c.value)??null,s=((d=u.get("UNRATE"))==null?void 0:d.value)??null,a=((v=u.get("FEDFUNDS"))==null?void 0:v.value)??null;let l=0;return e!==null&&(l+=e>=25?2:e>=18?1:0),t!==null&&(l+=t<=0?2:t<.5?1:0),s!==null&&(l+=s>=4.5?1:0),a!==null&&(l+=a>=5?1:a<=2?-1:0),l>=4?{label:r("components.economic.pressure.stress"),detail:r("components.economic.pressure.stressDetail"),className:"macro-pressure-stress"}:l>=2?{label:r("components.economic.pressure.watch"),detail:r("components.economic.pressure.watchDetail"),className:"macro-pressure-watch"}:{label:r("components.economic.pressure.steady"),detail:r("components.economic.pressure.steadyDetail"),className:"macro-pressure-steady"}}class $s extends L{constructor(){super({id:"economic",title:r("panels.economic"),defaultRowSpan:2,infoTooltip:r("components.economic.infoTooltip")});g(this,"fredData",[]);g(this,"blsData",[]);g(this,"spendingData",null);g(this,"bisData",null);g(this,"stressData",null);g(this,"lastUpdate",null);g(this,"activeTab","indicators");g(this,"fredState","loading");g(this,"fredErrorMsg","");this.content.addEventListener("click",e=>{const t=e.target.closest(".panel-tab");t!=null&&t.dataset.tab&&(this.activeTab=t.dataset.tab,this.render())})}update(e){this.fredData=e,this.fredState="ok",this.fredErrorMsg="",this.lastUpdate=new Date,this.render()}setFredError(e){this.fredState="error",this.fredErrorMsg=e,this.render()}setFredRetrying(e){this.fredState="retrying",this.fredErrorMsg=e!==void 0?`${r("common.retrying")} (${e}s)`:r("common.retrying"),this.render()}updateSpending(e){this.spendingData=e,this.render()}updateBis(e){this.bisData=e,this.render()}updateBls(e){this.blsData=e,this.render()}updateStress(e){this.stressData=e,Number.isFinite(e.compositeScore)&&gs(e.compositeScore),this.render()}setLoading(e){e&&(this.fredState="loading",this.fredErrorMsg="")}render(){var c,d;const e=this.spendingData&&((c=this.spendingData.awards)==null?void 0:c.length)>0,t=this.bisData&&((d=this.bisData.policyRates)==null?void 0:d.length)>0,s=this.blsData.length>0,a=`
      <div class="panel-tabs">
        <button class="panel-tab ${this.activeTab==="indicators"?"active":""}" data-tab="indicators">
          ${r("components.economic.indicators")}
        </button>
        ${e?`
          <button class="panel-tab ${this.activeTab==="spending"?"active":""}" data-tab="spending">
            Recent awards
          </button>
        `:""}
        ${t?`
          <button class="panel-tab ${this.activeTab==="centralBanks"?"active":""}" data-tab="centralBanks">
            ${r("components.economic.centralBanks")}
          </button>
        `:""}
        ${s?`
          <button class="panel-tab ${this.activeTab==="labor"?"active":""}" data-tab="labor">
            ${r("components.economic.laborMarket")}
          </button>
        `:""}
        <button class="panel-tab ${this.activeTab==="stress"?"active":""}" data-tab="stress">
          Stress Index
        </button>
      </div>
    `;let l="";switch(this.activeTab){case"indicators":l=this.renderIndicators();break;case"spending":l=this.renderSpending();break;case"centralBanks":l=this.renderCentralBanks();break;case"labor":l=this.renderLabor();break;case"stress":l=this.renderStress();break}const i=this.lastUpdate?this.lastUpdate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";this.setSafeContent(k(`
      ${a}
      <div class="economic-content">
        ${l}
      </div>
      <div class="economic-footer">
        <span class="economic-source">${this.getSourceLabel()} • ${i}</span>
      </div>
    `,"legacy Panel.setContent() migration"))}getSourceLabel(){switch(this.activeTab){case"indicators":return"FRED";case"spending":return"USASpending.gov";case"centralBanks":return"BIS";case"labor":return"BLS";case"stress":return"FRED"}}renderIndicators(){if(this.fredData.length===0){if(ae()&&!ie("economicFred"))return`<div class="economic-empty">${r("components.economic.fredKeyMissing")}</div>`;if(this.fredState==="error"||this.fredState==="retrying"){const i=this.fredState==="retrying",c=i?r("common.upstreamUnavailable"):this.fredErrorMsg,d=c.includes("—")?c.slice(0,c.indexOf("—")).trimEnd():c,v=i?`<div class="panel-error-countdown">${o(this.fredErrorMsg)}</div>`:"";return`
          <div class="panel-error-state">
            <div class="panel-loading-radar panel-error-radar">
              <div class="panel-radar-sweep"></div>
              <div class="panel-radar-dot error"></div>
            </div>
            <div class="panel-error-msg">${o(d)}</div>
            ${v}
          </div>
        `}return`<div class="economic-empty">${r("components.economic.noIndicatorData")}</div>`}const e=ys(this.fredData),t=["VIXCLS","T10Y2Y","FEDFUNDS","UNRATE"],s=this.fredData.filter(i=>t.includes(i.id)),a=this.fredData.filter(i=>!t.includes(i.id)),l=[...s,...a];return`
      <div class="economic-content-macro">
        <div class="macro-pressure-card ${e.className}">
          <div class="macro-pressure-label">${r("components.economic.pressure.label")}</div>
          <div class="macro-pressure-value">${o(e.label)}</div>
          <div class="macro-pressure-detail">${o(e.detail)}</div>
        </div>
        <div class="macro-summary-grid">
          ${s.map(i=>`
            <div class="macro-summary-card">
              <div class="macro-summary-head">
                <span class="indicator-name">${o(i.name)}</span>
                <span class="indicator-id">${o(i.id)}</span>
              </div>
              <div class="macro-summary-value">${o(we(i))}</div>
              <div class="macro-summary-change ${Ce(i.change)}">${o(Se(i))}</div>
            </div>
          `).join("")}
        </div>
        <div class="economic-indicators">
          ${l.map(i=>{var c;return`
            <div class="economic-indicator" data-series="${o(i.id)}">
              <div class="indicator-header">
                <span class="indicator-name">${o(i.name)}</span>
                <span class="indicator-id">${o(i.id)}</span>
              </div>
              <div class="indicator-value">
                <span class="value">${o(we(i))}</span>
                <span class="change ${Ce(i.change)}">${o(Se(i))}</span>
              </div>
              <div class="indicator-date">${o(i.date)}</div>
              ${ue(((c=i.observations)==null?void 0:c.map(d=>d.value))??[],i.change!==null&&i.change>=0?"#4caf50":"#f44336",120,28,"display:block;margin:2px 0")}
            </div>
          `}).join("")}
        </div>
      </div>
    `}renderSpending(){var l;if(!this.spendingData||!((l=this.spendingData.awards)!=null&&l.length))return`<div class="economic-empty">${r("components.economic.noSpending")}</div>`;const{awards:e,totalAmount:t,periodStart:s,periodEnd:a}=this.spendingData;return`
      <div class="spending-summary">
        <div class="spending-total">
          ${o(He(t))} ${r("components.economic.in")} ${o(String(e.length))} ${r("components.economic.awards")}
          <span class="spending-period">${o(s)} / ${o(a)}</span>
        </div>
      </div>
      <div class="spending-list">
        ${e.slice(0,8).map(i=>`
          <div class="spending-award">
            <div class="award-header">
              <span class="award-icon">${o(Mt(i.awardType))}</span>
              <span class="award-amount">${o(He(i.amount))}</span>
            </div>
            <div class="award-recipient">${o(i.recipientName)}</div>
            <div class="award-agency">${o(i.agency)}</div>
            ${i.description?`<div class="award-desc">${o(i.description.slice(0,100))}${i.description.length>100?"...":""}</div>`:""}
          </div>
        `).join("")}
      </div>
    `}renderCentralBanks(){var d,v,h;if(!this.bisData||!((d=this.bisData.policyRates)!=null&&d.length))return`<div class="economic-empty">${r("components.economic.noBisData")}</div>`;const e=fe("--semantic-normal"),t=fe("--semantic-critical"),s=fe("--text-dim"),a=[...this.bisData.policyRates].sort((f,p)=>p.rate-f.rate),l=`
      <div class="bis-section">
        <div class="bis-section-title">${r("components.economic.policyRate")}</div>
        <div class="economic-indicators">
          ${a.map(f=>{const p=f.rate-f.previousRate,b=p<0?e:p>0?t:s,m=p<0?r("components.economic.cut"):p>0?r("components.economic.hike"):r("components.economic.hold"),y=p<0?"▼":p>0?"▲":"–";return`
              <div class="economic-indicator">
                <div class="indicator-header">
                  <span class="indicator-name">${o(f.centralBank)}</span>
                  <span class="indicator-id">${o(f.countryCode)}</span>
                </div>
                <div class="indicator-value">
                  <span class="value">${o(String(f.rate))}%</span>
                  <span class="change" style="color: ${o(b)}">${o(y)} ${o(m)}</span>
                </div>
                <div class="indicator-date">${o(f.date)}</div>
              </div>`}).join("")}
        </div>
      </div>
    `;let i="";((v=this.bisData.exchangeRates)==null?void 0:v.length)>0&&(i=`
        <div class="bis-section">
          <div class="bis-section-title">${r("components.economic.realEer")}</div>
          <div class="economic-indicators">
            ${this.bisData.exchangeRates.map(f=>{const p=f.realChange>0?t:f.realChange<0?e:s,b=f.realChange>0?"▲":f.realChange<0?"▼":"–";return`
                <div class="economic-indicator">
                  <div class="indicator-header">
                    <span class="indicator-name">${o(f.countryName)}</span>
                    <span class="indicator-id">${o(f.countryCode)}</span>
                  </div>
                  <div class="indicator-value">
                    <span class="value">${o(String(f.realEer))}</span>
                    <span class="change" style="color: ${o(p)}">${o(b)} ${o(f.realChange>0?"+":"")}${o(String(f.realChange))}%</span>
                  </div>
                  <div class="indicator-date">${o(f.date)}</div>
                </div>`}).join("")}
          </div>
        </div>
      `);let c="";if(((h=this.bisData.creditToGdp)==null?void 0:h.length)>0){const f=[...this.bisData.creditToGdp].sort((p,b)=>b.creditGdpRatio-p.creditGdpRatio);c=`
        <div class="bis-section">
          <div class="bis-section-title">${r("components.economic.creditToGdp")}</div>
          <div class="economic-indicators">
            ${f.map(p=>{const b=p.creditGdpRatio-p.previousRatio,m=b>0?t:b<0?e:s,y=b>0?"▲":b<0?"▼":"–",w=b!==0?`${b>0?"+":""}${Math.round(b*10)/10}pp`:"–";return`
                <div class="economic-indicator">
                  <div class="indicator-header">
                    <span class="indicator-name">${o(p.countryName)}</span>
                    <span class="indicator-id">${o(p.countryCode)}</span>
                  </div>
                  <div class="indicator-value">
                    <span class="value">${o(String(p.creditGdpRatio))}%</span>
                    <span class="change" style="color: ${o(m)}">${o(y)} ${o(w)}</span>
                  </div>
                  <div class="indicator-date">${o(p.date)}</div>
                </div>`}).join("")}
          </div>
        </div>
      `}return l+i+c}renderLabor(){if(this.blsData.length===0)return`<div class="economic-empty">${r("components.economic.noIndicatorData")}</div>`;const e=this.blsData.filter(a=>!Ge.has(a.id)),t=this.blsData.filter(a=>Ge.has(a.id)),s=a=>{var l;return`
      <div class="economic-indicator" data-series="${o(a.id)}">
        <div class="indicator-header">
          <span class="indicator-name">${o(a.name)}</span>
          <span class="indicator-id">${o(a.id)}</span>
        </div>
        <div class="indicator-value">
          <span class="value">${o(we(a))}</span>
          <span class="change ${Ce(a.change)}">${o(Se(a))}</span>
        </div>
        <div class="indicator-date">${o(a.date)}</div>
        ${ue(((l=a.observations)==null?void 0:l.map(i=>i.value))??[],a.change!==null&&a.change>=0?"#4caf50":"#f44336",120,28,"display:block;margin:2px 0")}
      </div>`};return`
      <div class="economic-content-macro">
        <div class="economic-indicators">
          ${e.map(s).join("")}
        </div>
        ${t.length>0?`
          <div class="bis-section">
            <div class="bis-section-title">${r("components.economic.metroUnemployment")}</div>
            <div class="economic-indicators">
              ${t.map(s).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}renderStress(){const e=this.stressData;if(!e||e.unavailable||!Number.isFinite(e.compositeScore))return'<div class="economic-empty">Stress index data unavailable</div>';const t=gt(e.compositeScore),s=Math.min(100,Math.max(0,e.compositeScore)).toFixed(1),a=e.components.map(i=>bs(i)).join(""),l=e.seededAt?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-align:right;margin-top:8px">Updated ${new Date(e.seededAt).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</div>`:"";return`<div style="padding:12px 14px">
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px">Composite Score</div>
        <div style="font-size:calc(38px * var(--wm-panel-effective-scale, 1));font-weight:700;color:${t};line-height:1">${e.compositeScore.toFixed(1)}</div>
        <div style="display:inline-block;margin-top:6px;padding:3px 10px;border-radius:12px;background:${t}22;border:1px solid ${t}66;font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${t}">${o(e.label)}</div>
      </div>
      <div style="margin-bottom:16px">
        <div style="position:relative;height:12px;border-radius:6px;overflow:visible;background:linear-gradient(to right,#27ae60 0%,#f1c40f 20%,#e67e22 40%,#e74c3c 60%,#8e44ad 80%,#8e44ad 100%);margin-bottom:4px">
          <div style="position:absolute;top:-4px;left:calc(${s}% - 2px);width:4px;height:20px;background:#fff;border-radius:2px;box-shadow:0 0 4px rgba(0,0,0,0.6)"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          <span>Low</span><span>Moderate</span><span>Elevated</span><span>Severe</span><span>Critical</span>
        </div>
      </div>
      ${a?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:8px">${a}</div>`:""}
      ${l}
    </div>`}}const Wa=Object.freeze(Object.defineProperty({__proto__:null,EconomicPanel:$s},Symbol.toStringTag,{value:"Module"}));class F extends Error{constructor(e,t){super(t);g(this,"retryable",!0);this.code=e,this.name="RetryableProcurementSearchError"}}const Ae={query:"",buyer:"",country:"",source:"",sort:"closing_soon",pageSize:25,cursor:"",minAutomationScore:0},ws=30,Ke="Search official global procurement opportunities using visible filters.",Ye=8,Ze=16,Je=32,Ss=1500,Cs=new RegExp(mt),bt=[["","All sources"],["sam","SAM.gov"],["ted","TED"],["contracts-finder","Contracts Finder"],["canada-buys","CanadaBuys"],["gets","GETS"],["world-bank","World Bank"]],yt=[["closing_soon","Closing soon"],["newest","Newest"],["estimated_value","Estimated value"],["relevance","Technology relevance"]],As=new Set(bt.map(([n])=>n)),Ts=new Set(yt.map(([n])=>n));function Qe(n,u){return n===u?" selected":""}function Rs(n){if(!n)return null;const u=new Date(n);return Number.isFinite(u.getTime())?u:null}class xs extends L{constructor(){super({id:"global-procurement",title:"Global Procurement",defaultRowSpan:2,showCount:!0,premium:"locked",infoTooltip:"Search active official procurement opportunities. Results are seed-backed and source health is reported explicitly."});g(this,"data",null);g(this,"filters",{...Ae});g(this,"requestHandler",null);g(this,"principalResetHandler",null);g(this,"loading",!1);g(this,"pendingAgentInvocation",null);g(this,"settlingAgentForm",null);g(this,"nextAgentInvocationId",0);g(this,"agentToolActive",!1);g(this,"requestStarting",!1);g(this,"activeRequestController",null);g(this,"activeRequestPreviousFilters",null);g(this,"lifecycleEpoch",0);g(this,"contentRevision",0);g(this,"disposed",!1);this.showLoading("Loading procurement opportunities…");for(const e of["pointerdown","mousedown","click","beforeinput","keydown"])this.content.addEventListener(e,t=>this.guardPendingFormInteraction(t),{capture:!0});for(const e of["input","change"])this.content.addEventListener(e,t=>this.restorePendingFormValues(t),{capture:!0});this.content.addEventListener("submit",e=>{const t=e.target.closest("[data-procurement-filters]");if(!t)return;e.preventDefault();const s=e;if(s.agentInvoked!==!0){if(this.loading||this.pendingAgentInvocation!==null||this.settlingAgentForm!==null)return;const c=this.readFilters(t);if(!c.ok){t.reportValidity();return}const d={...this.filters};this.filters=c.filters,this.setAgentToolActive(!1),this.request({...this.filters,cursor:""},!1,d);return}if(typeof s.respondWith!="function")return;if(this.loading||this.pendingAgentInvocation!==null||this.settlingAgentForm!==null){this.respondWithRetryableFailure(s,new F("request_in_progress","A procurement search is already in progress. Retry after the visible results finish updating."));return}if(!this.canDeclareTool()||t.getAttribute("toolname")!==J){this.respondWithRetryableFailure(s,new F("panel_unavailable","The procurement search form is not currently available. Retry after the panel is visible and its data is ready."));return}const a=this.readFilters(t);if(!a.ok){this.respondWithRetryableFailure(s,a.error);return}const l={...this.filters};this.filters=a.filters;const i=this.beginAgentInvocation(t,l);try{s.respondWith(i.promise)}catch{this.filters={...i.previousFilters},this.failAgentInvocation(i.id,new F("response_channel_unavailable","The procurement search response channel was unavailable. Retry the search."));return}this.setAgentToolActive(!0),this.request({...this.filters,cursor:""},!1,i.previousFilters)||(this.filters={...i.previousFilters},this.failAgentInvocation(i.id,new F("request_not_started","The procurement search could not start because the panel is not ready. Retry when the form is available.")))}),this.content.addEventListener("click",e=>{var s;const t=e.target;if(t.closest("[data-procurement-load-more]")){if(this.loading||this.pendingAgentInvocation!==null||this.settlingAgentForm!==null)return;const a=(s=this.data)==null?void 0:s.nextCursor;a&&this.request({...this.filters,cursor:a},!0);return}if(t.closest("[data-procurement-reset]")){if(this.pendingAgentInvocation!==null){this.cancelAgentOperation();return}if(this.loading||this.settlingAgentForm!==null)return;this.cancelAgentOperation();const a={...this.filters};this.filters={...Ae},this.request({...this.filters},!1,a)}}),this.content.addEventListener("reset",e=>{e.target.closest("[data-procurement-filters]")&&this.cancelAgentOperation()}),typeof window<"u"&&(window.addEventListener("toolactivated",e=>{e.toolName!==J||!this.canDeclareTool()||this.setAgentToolActive(!0)},{signal:this.signal}),window.addEventListener("toolcancel",e=>{e.toolName===J&&this.cancelAgentOperation()},{signal:this.signal}),window.addEventListener("resize",()=>this.handlePanelVisibilityChange(),{signal:this.signal}))}setRequestHandler(e){if(this.requestHandler=e,this.pendingAgentInvocation!==null||this.settlingAgentForm!==null){this.syncAgentFormVisualState();return}this.syncDeclarativeToolState()}setPrincipalResetHandler(e){this.principalResetHandler=e}setLoading(e,t=!1){const s=++this.contentRevision,a=e&&!this.requestStarting?this.pendingAgentInvocation:null;if(a){this.abortActiveRequest(),this.failAgentInvocation(a.id,new F("superseded","The procurement search was superseded by a newer refresh. Retry the search.")),this.loading=e,this.syncAgentFormVisualState(),this.deferAfterAgentSettlement(()=>{if(!(this.pendingAgentInvocation!==null||this.settlingAgentForm!==null||this.disposed||this.contentRevision!==s)){if(e&&!t&&!this.data){this.showLoading("Loading procurement opportunities…");return}this.render()}});return}if(this.loading=e,this.pendingAgentInvocation!==null||this.settlingAgentForm!==null){this.syncAgentFormVisualState(),this.pendingAgentInvocation===null&&this.deferAfterAgentSettlement(()=>{if(!(this.settlingAgentForm!==null||this.disposed||this.contentRevision!==s)){if(e&&!t&&!this.data){this.showLoading("Loading procurement opportunities…");return}this.render()}});return}if(this.syncDeclarativeToolState(),e&&!t&&!this.data){this.showLoading("Loading procurement opportunities…");return}this.render()}update(e,t=!1){var l;if(this.disposed)return;const s=++this.contentRevision;if(this.activeRequestPreviousFilters=null,this.loading=!1,t&&this.data){const i=new Map(this.data.tenders.map(c=>[c.id,c]));e.tenders.forEach(c=>i.set(c.id,c)),this.data={...e,tenders:[...i.values()]}}else this.data=e;this.setCount(this.data.total);const a=(l=this.pendingAgentInvocation)==null?void 0:l.id;if(a!==void 0){if(!this.renderAgentTerminalResult()){this.failAgentInvocation(a,new F("response_target_unavailable","The procurement results view was replaced before the search completed. Retry on the current panel."));return}if(!e.dataAvailable){this.failAgentInvocation(a,new F("procurement_unavailable","Procurement sources are currently unavailable, so the search could not return a reliable result. Retry later."));return}this.resolveAgentInvocation(a,this.agentResult(e));return}if(this.settlingAgentForm!==null){this.deferAfterAgentSettlement(()=>{this.settlingAgentForm!==null||this.disposed||this.contentRevision!==s||this.render()});return}this.syncDeclarativeToolState(),this.render()}showUnavailable(){var s;if(this.disposed)return;const e=++this.contentRevision;this.activeRequestPreviousFilters=null,this.loading=!1,this.data=null,this.setCount(0);const t=(s=this.pendingAgentInvocation)==null?void 0:s.id;if(t!==void 0){this.renderAgentTerminalError("Procurement opportunities are currently unavailable."),this.failAgentInvocation(t,new F("procurement_unavailable","Procurement sources are currently unavailable, so the search did not complete. Retry later.")),this.deferAfterAgentSettlement(()=>{this.disposed||this.pendingAgentInvocation!==null||this.settlingAgentForm!==null||this.contentRevision!==e||this.showError("Procurement opportunities are currently unavailable.",()=>this.request({...this.filters},!1),60)});return}if(this.settlingAgentForm!==null){this.deferAfterAgentSettlement(()=>{this.settlingAgentForm!==null||this.disposed||this.contentRevision!==e||this.showError("Procurement opportunities are currently unavailable.",()=>this.request({...this.filters},!1),60)});return}this.showError("Procurement opportunities are currently unavailable.",()=>this.request({...this.filters},!1),60)}clear(){this.contentRevision+=1,this.abortActiveRequest();const e=this.pendingAgentInvocation,t=e!==null||this.settlingAgentForm!==null;if(e&&this.failAgentInvocation(e.id,new F("panel_unavailable","The procurement panel became unavailable before the search completed. Retry after access is restored.")),this.data=null,this.filters={...Ae},this.loading=!1,this.setCount(0),t){const s=this.settlingAgentForm??(e==null?void 0:e.form);s&&this.syncRenderedFilters(s,!1),this.deferAfterAgentSettlement(()=>{this.settlingAgentForm!==null||this.disposed||this.data!==null||super.clearSensitiveContent()});return}super.clearSensitiveContent()}clearSensitiveContent(){var e;this.clear(),(e=this.principalResetHandler)==null||e.call(this)}showGatedCta(e,t){const s=++this.lifecycleEpoch,a=this.pendingAgentInvocation!==null||this.settlingAgentForm!==null;if(this.cancelForUnavailablePanel(),a){this.deferAfterAgentSettlement(()=>{!this.disposed&&this.lifecycleEpoch===s&&super.showGatedCta(e,t)});return}super.showGatedCta(e,t)}showLocked(e=[]){const t=++this.lifecycleEpoch,s=this.pendingAgentInvocation!==null||this.settlingAgentForm!==null;if(this.cancelForUnavailablePanel(),s){this.deferAfterAgentSettlement(()=>{!this.disposed&&this.lifecycleEpoch===t&&super.showLocked(e)});return}super.showLocked(e)}unlockPanel(){this.lifecycleEpoch+=1;const e=this.isLocked;super.unlockPanel(),e&&this.syncDeclarativeToolState()}hide(){const e=this.pendingAgentInvocation!==null||this.settlingAgentForm!==null;super.hide(),this.cancelForUnavailablePanel(),!e&&this.data&&!this.isLocked&&this.render()}show(){super.show(),this.syncDeclarativeToolState(),this.data&&!this.isLocked&&this.render()}notifyConnected(){super.notifyConnected(),this.syncDeclarativeToolState(),this.data&&!this.isLocked&&this.render()}destroy(){if(this.disposed)return;const e=this.pendingAgentInvocation!==null||this.settlingAgentForm!==null;if(this.lifecycleEpoch+=1,this.disposed=!0,this.cancelForUnavailablePanel(),e){this.deferAfterAgentSettlement(()=>{super.destroy()});return}super.destroy()}request(e,t,s=this.filters){var c;if(!this.requestHandler||this.loading||this.disposed||this.isLocked||!this.isPanelToolVisible())return!1;this.abortActiveRequest();const a=new AbortController;this.activeRequestController=a,this.activeRequestPreviousFilters={...s},this.filters={...e,cursor:""};const l=((c=this.pendingAgentInvocation)==null?void 0:c.id)??null;let i;this.requestStarting=!0;try{this.setLoading(!0,t),i=this.requestHandler(e,t,a.signal)}catch{return a.abort(),this.activeRequestController===a&&(this.activeRequestController=null),this.activeRequestPreviousFilters&&(this.filters={...this.activeRequestPreviousFilters}),this.activeRequestPreviousFilters=null,this.loading=!1,l===null?this.render():this.syncAgentFormVisualState(),!1}finally{this.requestStarting=!1}return Promise.resolve(i).then(()=>{const d=this.activeRequestController===a;d&&(this.activeRequestController=null),this.handleRequestHandlerSettled(l,a.signal),d&&(this.activeRequestPreviousFilters=null)},()=>{const d=this.activeRequestController===a;d&&(this.activeRequestController=null),!this.disposed&&!a.signal.aborted&&this.showUnavailable(),d&&(this.activeRequestPreviousFilters=null)}),!0}readFilters(e){const t=new FormData(e),s=String(t.get("query")??""),a=String(t.get("buyer")??""),l=String(t.get("country")??""),i=String(t.get("source")??""),c=String(t.get("sort")||"closing_soon");return s.length>Q||a.length>Q?{ok:!1,error:new F("invalid_arguments",`Procurement query and buyer filters must be at most ${Q} characters.`)}:l&&!Cs.test(l)?{ok:!1,error:new F("invalid_arguments","The procurement country filter must be exactly two ASCII letters.")}:!As.has(i)||!Ts.has(c)?{ok:!1,error:new F("invalid_arguments","The procurement source or sort filter is not available.")}:{ok:!0,filters:{query:s.trim(),buyer:a.trim(),country:l.toUpperCase(),source:i,sort:c,pageSize:25,cursor:"",minAutomationScore:t.get("techRelevant")?ws:0}}}render(){if(this.pendingAgentInvocation!==null||this.settlingAgentForm!==null){this.syncAgentFormVisualState();return}const e=this.renderControls();this.setTrustedContent(_(`
      ${e}
      <div data-procurement-results>${this.renderResultsMarkup()}</div>
    `,"escaped global procurement controls and results"))}renderResultsMarkup(){const e=this.data;if(!e)return'<div class="economic-empty">No procurement snapshot is available yet.</div>';const t=e.sourceStatuses.map(c=>{const d=c.lastSuccessfulAt?` · last success ${new Date(c.lastSuccessfulAt).toLocaleString()}`:"";return`${c.source}: ${c.state} (${c.recordCount})${d}`}).join(" · "),s=e.availability==="partial"?'<div class="economic-warning">Partial coverage — healthy sources remain visible while one or more sources are unavailable.</div>':e.availability==="stale"?'<div class="economic-warning">Showing stale last-good opportunities while all source refreshes are failing.</div>':e.availability==="empty"?'<div class="economic-empty">Official sources returned no matching open opportunities.</div>':e.dataAvailable?"":'<div class="economic-warning">The canonical procurement snapshot is unavailable.</div>',a=e.tenders.map(c=>this.renderTenderCard(c)).join(""),l=e.tenders.length,i=e.nextCursor?`<button type="button" class="debt-load-more" data-procurement-load-more${this.loading?" disabled":""}>${this.loading?"Loading…":"Load more"} <span class="debt-load-more-count">(${Math.max(0,e.total-l)} remaining)</span></button>`:"";return`
      ${s}
      <div class="global-procurement-summary">Showing ${l.toLocaleString()} of ${e.total.toLocaleString()} matching opportunities</div>
      ${a?`<div class="spending-list global-procurement-list">${a}</div>`:""}
      ${i}
      <div class="economic-footer"><span class="economic-source">${o(t)}${e.fetchedAt?` · snapshot ${o(new Date(e.fetchedAt).toLocaleString())}`:""}</span></div>
    `}renderControls(){const t=this.canDeclareTool()?` toolname="${J}" tooldescription="${Ke}" toolautosubmit`:"";return`<form class="global-procurement-controls${this.agentToolActive||this.pendingAgentInvocation?" webmcp-tool-active":""}" data-procurement-filters aria-busy="${this.loading}"${t}>
      <input class="global-procurement-input" name="query" data-procurement-query type="search" maxlength="${Q}" value="${o(String(this.filters.query||""))}" placeholder="Search title or description" aria-label="Search procurement opportunities" toolparamdescription="Words to match in opportunity titles or descriptions.">
      <input class="global-procurement-input" name="buyer" type="search" maxlength="${Q}" value="${o(String(this.filters.buyer||""))}" placeholder="Buyer" aria-label="Filter by buyer" toolparamdescription="Buyer or contracting authority name to match.">
      <input class="global-procurement-input global-procurement-country" name="country" data-procurement-country type="text" minlength="${je}" maxlength="${je}" pattern="${mt}" value="${o(String(this.filters.country||""))}" placeholder="Country" aria-label="Filter by ISO country code" toolparamdescription="Optional two-letter ISO 3166-1 alpha-2 country code; normalized to uppercase.">
      <select class="global-procurement-select" name="source" data-procurement-source aria-label="Filter by source" toolparamdescription="Official procurement source to search; select All sources to search every source.">
        ${bt.map(([a,l])=>`<option value="${a}"${Qe(this.filters.source,a)}>${l}</option>`).join("")}
      </select>
      <select class="global-procurement-select" name="sort" data-procurement-sort aria-label="Sort opportunities" toolparamdescription="Ordering for matching procurement opportunities.">
        ${yt.map(([a,l])=>`<option value="${a}"${Qe(this.filters.sort,a)}>${l}</option>`).join("")}
      </select>
      <label class="global-procurement-toggle" title="Shows only opportunities whose title, description, or categories matched technology keywords. Keyword relevance evidence only — not an indication of bidding eligibility.">
        <input type="checkbox" name="techRelevant" data-procurement-tech-relevant toolparamdescription="Whether to show only opportunities with technology-relevance keyword evidence."${(this.filters.minAutomationScore||0)>0?" checked":""}${this.loading?" disabled":""}>
        Technology relevant only
      </label>
      <button type="submit" class="global-procurement-apply"${this.loading?" disabled":""}>Apply</button>
      <button type="button" class="global-procurement-reset" data-procurement-reset aria-label="Reset filters or cancel the active search" title="Reset filters or cancel the active search"${this.loading?" disabled":""}>Reset</button>
    </form>`}canDeclareTool(){var e;return!this.disposed&&!this.isLocked&&this.element.isConnected&&this.isPanelToolVisible()&&this.requestHandler!==null&&((e=this.data)==null?void 0:e.dataAvailable)===!0&&!this.loading&&this.settlingAgentForm===null}isPanelToolVisible(){return this.element.classList.contains("hidden")?!1:!(typeof window<"u"&&jt()&&this.element.classList.contains("mobile-cat-hidden"))}respondWithRetryableFailure(e,t){var s;try{(s=e.respondWith)==null||s.call(e,Promise.resolve(this.failureResult(t)))}catch{}}beginAgentInvocation(e,t){var d;const s=(d=this.pendingAgentInvocation)==null?void 0:d.id;s!==void 0&&this.failAgentInvocation(s,new F("superseded","The procurement search was superseded by a newer agent request. Retry the earlier search if it is still needed."));const a=++this.nextAgentInvocationId;let l;const i=new Promise(v=>{l=v}),c={id:a,form:e,previousFilters:t,promise:i,resolve:l};return this.pendingAgentInvocation=c,c}resolveAgentInvocation(e,t){const s=this.pendingAgentInvocation;!s||s.id!==e||(this.pendingAgentInvocation=null,this.settlingAgentForm=s.form,this.setAgentToolActive(!1),s.resolve(t),this.syncDeclarativeToolStateAfterSettlement(s.form))}failAgentInvocation(e,t){this.resolveAgentInvocation(e,this.failureResult(t))}failureResult(e){return{ok:!1,code:String(e.code||"request_failed").slice(0,64),message:String(e.message||"The procurement search failed. Retry later.").slice(0,320),retryable:!0}}handleRequestHandlerSettled(e,t){var a;if(t.aborted||e===null||((a=this.pendingAgentInvocation)==null?void 0:a.id)!==e||!this.loading)return;const s=++this.contentRevision;this.loading=!1,this.failAgentInvocation(e,new F("request_did_not_settle","The procurement search ended without a terminal result. Retry the search.")),this.deferAfterAgentSettlement(()=>{this.pendingAgentInvocation===null&&this.settlingAgentForm===null&&this.data&&!this.isLocked&&!this.disposed&&this.contentRevision===s&&this.render()})}agentResult(e){const t=e.countryCoverage==="observed"||e.countryCoverage==="not_requested"?e.countryCoverage:"unknown",s=Array.isArray(e.appliedFilters)?e.appliedFilters:[],a={ok:!0,matchCount:Math.max(0,Number.isSafeInteger(e.total)?e.total:0),availability:String(e.availability||"available").slice(0,32),countryCoverage:t,appliedFilters:s.slice(0,Ze).map(l=>String(l).slice(0,Je)),appliedFiltersTruncated:s.length>Ze||s.some(l=>String(l).length>Je),sourceStatusSummary:e.sourceStatuses.slice(0,Ye).map(l=>({source:String(l.source||"unknown").slice(0,48),state:String(l.state||"unknown").slice(0,32),recordCount:Math.max(0,Number.isSafeInteger(l.recordCount)?l.recordCount:0)})),sourceStatusesTruncated:e.sourceStatuses.length>Ye};for(;JSON.stringify(a).length>Ss;){const l=a.sourceStatusSummary[a.sourceStatusSummary.length-1],i=a.appliedFilters[a.appliedFilters.length-1];if(l&&(!i||JSON.stringify(l).length>=JSON.stringify(i).length)){a.sourceStatusSummary.pop(),a.sourceStatusesTruncated=!0;continue}if(i){a.appliedFilters.pop(),a.appliedFiltersTruncated=!0;continue}break}return a}setAgentToolActive(e){this.agentToolActive=e,this.syncAgentFormVisualState()}syncAgentFormVisualState(){const e=this.pendingAgentInvocation,t=(e==null?void 0:e.form)??this.content.querySelector("[data-procurement-filters]");if(!t)return;const s=e!==null;t.classList.toggle("webmcp-tool-active",this.agentToolActive||s),t.classList.toggle("webmcp-request-pending",s),t.setAttribute("aria-busy",String(this.loading));for(const a of t.querySelectorAll("input, select, button"))s&&!a.matches("[data-procurement-reset]")?a.setAttribute("aria-disabled","true"):a.removeAttribute("aria-disabled")}syncDeclarativeToolStateAfterSettlement(e){this.deferAfterAgentSettlement(()=>{if(this.settlingAgentForm===e&&(this.settlingAgentForm=null),this.pendingAgentInvocation!==null)return;const t=this.content.querySelector("[data-procurement-filters]");t&&this.syncRenderedFilters(t,!0),this.syncDeclarativeToolState()})}renderAgentTerminalResult(){var s;const e=(s=this.pendingAgentInvocation)==null?void 0:s.form,t=this.content.querySelector("[data-procurement-results]");return!e||!t||!e.isConnected||!t.isConnected||!this.content.contains(e)?!1:(this.syncRenderedFilters(e,!1),e.setAttribute("aria-busy","false"),O(t,_(this.renderResultsMarkup(),"escaped global procurement terminal results")),!0)}renderAgentTerminalError(e){var a;const t=this.content.querySelector("[data-procurement-results]"),s=(a=this.pendingAgentInvocation)==null?void 0:a.form;s==null||s.setAttribute("aria-busy","false"),t&&O(t,_(`<div class="economic-warning">${o(e)}</div>`,"escaped global procurement terminal error"))}syncRenderedFilters(e,t){const s=e.elements.namedItem("query"),a=e.elements.namedItem("buyer"),l=e.elements.namedItem("country"),i=e.elements.namedItem("source"),c=e.elements.namedItem("sort"),d=e.elements.namedItem("techRelevant");if(s&&(s.value=String(this.filters.query||""),t&&(s.defaultValue=s.value)),a&&(a.value=String(this.filters.buyer||""),t&&(a.defaultValue=a.value)),l&&(l.value=String(this.filters.country||""),t&&(l.defaultValue=l.value)),i&&(i.value=String(this.filters.source||""),t))for(const v of i.options)v.defaultSelected=v.selected;if(c&&(c.value=String(this.filters.sort||"closing_soon"),t))for(const v of c.options)v.defaultSelected=v.selected;d&&(d.checked=(this.filters.minAutomationScore||0)>0,t&&(d.defaultChecked=d.checked))}guardPendingFormInteraction(e){const t=this.pendingAgentInvocation,s=e.target instanceof Element?e.target:null;!t||!s||!t.form.contains(s)||e instanceof KeyboardEvent&&e.key==="Tab"||s.closest("[data-procurement-reset]")||(e.preventDefault(),e.stopImmediatePropagation())}restorePendingFormValues(e){const t=this.pendingAgentInvocation,s=e.target instanceof Element?e.target:null;!t||!s||!t.form.contains(s)||(e.stopImmediatePropagation(),this.syncRenderedFilters(t.form,!1))}syncDeclarativeToolState(){if(this.pendingAgentInvocation!==null||this.settlingAgentForm!==null){this.syncAgentFormVisualState();return}const e=this.content.querySelector("[data-procurement-filters]");e&&(this.canDeclareTool()?(e.setAttribute("toolname",J),e.setAttribute("tooldescription",Ke),e.setAttribute("toolautosubmit","")):(e.removeAttribute("toolname"),e.removeAttribute("tooldescription"),e.removeAttribute("toolautosubmit")),this.syncAgentFormVisualState())}removeDeclarativeToolAttributes(){if(this.settlingAgentForm!==null)return;const e=this.content.querySelector("[data-procurement-filters]");if(e){e.removeAttribute("toolname"),e.removeAttribute("tooldescription"),e.removeAttribute("toolautosubmit"),e.classList.remove("webmcp-tool-active","webmcp-request-pending"),e.setAttribute("aria-busy",String(this.loading));for(const t of e.querySelectorAll("input, select, button"))t.removeAttribute("aria-disabled")}}handlePanelVisibilityChange(){if(!this.disposed){if(!this.isPanelToolVisible()){this.pendingAgentInvocation!==null?this.cancelForUnavailablePanel():this.removeDeclarativeToolAttributes();return}this.syncDeclarativeToolState()}}deferAfterAgentSettlement(e){setTimeout(e,0)}abortActiveRequest(e=!1){const t=this.activeRequestController;this.activeRequestController=null;const s=this.activeRequestPreviousFilters;this.activeRequestPreviousFilters=null;const a=e&&s!==null;return a&&(this.filters={...s}),t==null||t.abort(),a}cancelForUnavailablePanel(){const e=this.loading,t=this.pendingAgentInvocation,s=this.abortActiveRequest(!0);if(this.loading=!1,(e||s||t!==null)&&(this.contentRevision+=1),t){this.filters={...t.previousFilters},this.failAgentInvocation(t.id,new F("panel_unavailable","The procurement panel became unavailable before the search completed. Retry after it is restored.")),this.agentToolActive=!1;return}this.agentToolActive=!1,s&&this.settlingAgentForm===null&&!this.disposed&&this.render(),this.removeDeclarativeToolAttributes()}cancelAgentOperation(){const e=this.pendingAgentInvocation;if(this.setAgentToolActive(!1),!e)return;const t=++this.contentRevision;this.abortActiveRequest(),this.loading=!1,this.filters={...e.previousFilters},this.syncRenderedFilters(e.form,!1),this.failAgentInvocation(e.id,new F("canceled","The procurement search was canceled before it completed. Retry if results are still needed.")),this.deferAfterAgentSettlement(()=>{this.pendingAgentInvocation===null&&this.settlingAgentForm===null&&this.data&&!this.isLocked&&!this.disposed&&this.contentRevision===t&&this.render()})}renderTenderCard(e){var v,h,f;const t=ht(e.officialUrl),s=Rs(e.deadline),a=s?Math.ceil((s.getTime()-Date.now())/864e5):null,l=a!==null&&a>=0&&a<=3,i=(v=e.money)!=null&&v.amount&&e.money.amount>0?`${e.money.currency||""} ${e.money.amount.toLocaleString()}`.trim():"",c=[e.source,e.buyer,e.countryCode,i,s?`Closes ${s.toLocaleDateString()}`:"",l?"CLOSING SOON":""].filter(p=>!!p).map(p=>o(p)).join(" · "),d=(f=(h=e.automationFit)==null?void 0:h.matchReasons)!=null&&f.length?`<div class="award-agency">Technology relevance (keyword evidence, not bidding eligibility): ${o(e.automationFit.matchReasons.join(", "))}</div>`:"";return`<article class="spending-award global-procurement-card">
      <div class="award-header"><span class="award-amount">${o(e.status.toUpperCase())}</span><span class="award-icon">${l?"⏰":"📄"}</span></div>
      <div class="award-recipient">${o(e.title)}</div>
      <div class="award-agency">${c}</div>
      ${e.description?`<div class="award-desc">${o(e.description.slice(0,240))}${e.description.length>240?"…":""}</div>`:""}
      ${d}
      ${t?`<a href="${t}" target="_blank" rel="noopener noreferrer nofollow" class="award-agency">Official notice ↗</a>`:""}
    </article>`}}const Ka=Object.freeze(Object.defineProperty({__proto__:null,GlobalProcurementPanel:xs},Symbol.toStringTag,{value:"Module"})),$t="wm-consumer-prices-v1",Ps="wm-consumer-prices-settings-changed",Xe="wm-consumer-prices-open-tab",Es=["overview","categories","movers","spread","health","world"],et={market:Qt,basket:vt,range:"30d",tab:"overview",categoryFilter:null};function ks(){try{const n=localStorage.getItem($t);if(n)return{...et,...JSON.parse(n)}}catch{}return{...et}}function Y(n){try{localStorage.setItem($t,JSON.stringify(n)),window.dispatchEvent(new CustomEvent(Ps,{detail:n}))}catch{}}function z(n,u=!1){if(n==null||n===0)return'<span class="cp-badge cp-badge--neutral">—</span>';const e=u?n>0?"cp-badge--red":"cp-badge--green":n>0?"cp-badge--green":"cp-badge--red",t=n>0?"+":"";return`<span class="cp-badge ${e}">${t}${n.toFixed(1)}%</span>`}function Ds(n){return Math.abs(n)<.5?'<span class="cp-pressure cp-pressure--steady">Stable</span>':n>=2?'<span class="cp-pressure cp-pressure--stress">Rising</span>':n>.5?'<span class="cp-pressure cp-pressure--watch">Mild Rise</span>':'<span class="cp-pressure cp-pressure--green">Easing</span>'}function X(n){return n==null||n===0?"Unknown":n<60?`${n}m ago`:n<1440?`${Math.round(n/60)}h ago`:`${Math.round(n/1440)}d ago`}function ee(n){return n==null?"cp-fresh--unknown":n<=60?"cp-fresh--ok":n<=240?"cp-fresh--warn":"cp-fresh--stale"}function Is(n){return n==null?"cp-infl--unknown":n>=10?"cp-infl--high":n>=5?"cp-infl--warn":n<0?"cp-infl--deflation":"cp-infl--ok"}function tt(n){return n==null?"—":`${n>=0?"+":""}${n.toFixed(1)}%`}class Fs extends L{constructor(){super({id:"consumer-prices",title:r("panels.consumerPrices"),defaultRowSpan:2,infoTooltip:r("components.consumerPrices.infoTooltip")});g(this,"overview",null);g(this,"categories",null);g(this,"movers",null);g(this,"spread",null);g(this,"freshness",null);g(this,"allMarkets",[]);g(this,"globalInflation",null);g(this,"inflationLoading",!1);g(this,"inflationFilter","");g(this,"settings",ks());g(this,"fetchGeneration",0);g(this,"activeRequestKey",null);g(this,"openTabHandler",e=>{var s;const t=(s=e.detail)==null?void 0:s.tab;!t||!Es.includes(t)||(this.settings.tab=t,Y(this.settings),this.render(),t==="world"&&this.globalInflation===null&&this.loadGlobalInflation())});this.content.addEventListener("click",e=>this.handleClick(e)),this.content.addEventListener("input",e=>this.handleInput(e)),typeof window<"u"&&window.addEventListener(Xe,this.openTabHandler)}destroy(){var e;this.fetchGeneration++,this.activeRequestKey=null,typeof window<"u"&&window.removeEventListener(Xe,this.openTabHandler),(e=super.destroy)==null||e.call(this)}handleClick(e){const t=e.target,s=t.closest("[data-market]");if(s!=null&&s.dataset.market){const d=s.dataset.market;this.settings.market=d,this.settings.basket=d==="all"?vt:`essentials-${d}`,this.settings.tab="overview",Y(this.settings),this.fetchData();return}const a=t.closest(".panel-tab");if(a!=null&&a.dataset.tab){this.settings.tab=a.dataset.tab,Y(this.settings),this.render();return}const l=t.closest("[data-category]");if(l!=null&&l.dataset.category){this.settings.categoryFilter=l.dataset.category,this.settings.tab="movers",Y(this.settings),this.render();return}const i=t.closest("[data-range]");if(i!=null&&i.dataset.range){this.settings.range=i.dataset.range,Y(this.settings),this.fetchData();return}t.closest("[data-clear-filter]")&&(this.settings.categoryFilter=null,Y(this.settings),this.render())}handleInput(e){const t=e.target;if(!(t instanceof HTMLInputElement)||t.dataset.inflationFilter===void 0||(this.inflationFilter=t.value,this.globalInflation===null||this.globalInflation.length===0))return;const s=this.visibleInflationRows(),a=this.content.querySelector(".cp-world-table tbody");a&&O(a,_(this.inflationTbodyHtml(s),"escaped IMF inflation rows"));const l=this.content.querySelector(".cp-world-count");l&&(l.textContent=this.inflationCountText(s))}async loadGlobalInflation(){var e;if(!this.inflationLoading){this.inflationLoading=!0;try{const t=await Nt();if(!((e=this.element)!=null&&e.isConnected))return;this.globalInflation=t,this.settings.tab==="world"&&this.render()}finally{this.inflationLoading=!1}}}async fetchData(){const e={market:this.settings.market,basket:this.settings.basket,range:this.settings.range},t=JSON.stringify([e.market,e.basket,e.range]);if(this.activeRequestKey===t)return;const s=++this.fetchGeneration;this.activeRequestKey=t,this.showLoading();const a=()=>{var l;return s===this.fetchGeneration&&((l=this.element)==null?void 0:l.isConnected)===!0&&this.settings.market===e.market&&this.settings.basket===e.basket&&this.settings.range===e.range};try{if(e.market==="all"){const h=await qt();if(!a())return;this.allMarkets=h,this.render();return}const[l,i,c,d,v]=await Promise.all([Vt(e.market,e.basket),zt(e.market,e.basket,e.range),Wt(e.market,e.range),Kt(e.market,e.basket),Yt(e.market)]);if(!a())return;if(this.overview=l,this.categories=i,this.movers=c,this.spread=d,this.freshness=v,[l,i,c,d,v].some(h=>h.upstreamUnavailable)){this.showError(void 0,()=>{this.fetchData()});return}this.render()}catch(l){if(!a())return;console.error("[ConsumerPrices] fetch failed:",l),this.showError(void 0,()=>{this.fetchData()})}finally{s===this.fetchGeneration&&(this.activeRequestKey=null)}}render(){var b;const e=[{id:"overview",label:r("components.consumerPrices.tabs.overview")},{id:"categories",label:r("components.consumerPrices.tabs.categories")},{id:"movers",label:r("components.consumerPrices.tabs.movers")},{id:"spread",label:r("components.consumerPrices.tabs.spread")},{id:"health",label:r("components.consumerPrices.tabs.health")},{id:"world",label:r("components.consumerPrices.tabs.world")}],s=this.settings.market==="all"||this.settings.tab==="world"?e.filter(m=>m.id==="overview"||m.id==="world"):e;s.some(m=>m.id===this.settings.tab)||(this.settings.tab="overview");const{tab:a,range:l,categoryFilter:i,market:c}=this.settings,d=`
      <div class="panel-tabs">
        ${s.map(m=>`
          <button class="panel-tab${a===m.id?" active":""}" data-tab="${m.id}">
            ${o(m.label)}
          </button>
        `).join("")}
      </div>
    `,v=`
      <div class="cp-market-bar">
        ${Zt.map(m=>`
          <button class="cp-market-btn${c===m.code?" active":""}" data-market="${m.code}">${m.label}</button>
        `).join("")}
      </div>
    `,h=`
      <div class="cp-range-bar">
        ${["7d","30d","90d"].map(m=>`
          <button class="cp-range-btn${l===m?" active":""}" data-range="${m}">${m}</button>
        `).join("")}
      </div>
    `;if(a==="world"){this.setSafeContent(k(`
        <div class="consumer-prices-panel">
          ${d}
          <div class="cp-body">${this.renderWorldInflation()}</div>
        </div>
      `,"legacy Panel.setContent() migration"));return}if(c==="all"){this.setSafeContent(k(`
        <div class="consumer-prices-panel">
          ${v}
          ${d}
          <div class="cp-body">${this.renderGlobalOverview()}</div>
        </div>
      `,"legacy Panel.setContent() migration"));return}if((b=this.overview)==null?void 0:b.upstreamUnavailable){this.setSafeContent(k(`
        <div class="consumer-prices-panel">
          ${v}
          ${d}
          <div class="cp-body cp-seeding-state">
            <div class="cp-seeding-icon">📊</div>
            <div class="cp-seeding-title">Data collection in progress</div>
            <div class="cp-seeding-sub">Retail prices are being aggregated — check back in a few hours.</div>
          </div>
        </div>
      `,"legacy Panel.setContent() migration"));return}let p="";switch(a){case"overview":p=this.renderOverview();break;case"categories":p=h+this.renderCategories();break;case"movers":p=h+(i?`<div class="cp-filter-bar">Filtered: <strong>${o(i)}</strong> <button data-clear-filter aria-label="Clear category filter">✕</button></div>`:"")+this.renderMovers();break;case"spread":p=this.renderSpread();break;case"health":p=this.renderHealth();break}this.setSafeContent(k(`
      <div class="consumer-prices-panel">
        ${v}
        ${d}
        <div class="cp-body">${p}</div>
      </div>
    `,"legacy Panel.setContent() migration"))}renderGlobalOverview(){return this.allMarkets.length===0?'<div class="cp-empty-state">Loading global data…</div>':`
      <table class="cp-global-table">
        <thead>
          <tr>
            <th scope="col">Market</th><th scope="col">Index</th><th scope="col">WoW</th><th scope="col">Spread</th><th scope="col">Updated</th>
          </tr>
        </thead>
        <tbody>${Jt.map(t=>{const s=this.allMarkets.find(c=>c.marketCode===t.code);if(!(s&&s.asOf&&s.asOf!=="0"&&!s.upstreamUnavailable))return`
          <tr class="cp-global-row" data-market="${t.code}">
            <td class="cp-global-flag">${t.label}</td>
            <td colspan="4" class="cp-global-pending">Pending data</td>
          </tr>`;const l=z(s.wowPct,!0),i=ee(s.freshnessLagMin>0?s.freshnessLagMin:null);return`
        <tr class="cp-global-row" data-market="${t.code}">
          <td class="cp-global-flag">${t.label}</td>
          <td class="cp-global-index">${s.essentialsIndex>0?s.essentialsIndex.toFixed(1):"—"}</td>
          <td class="cp-global-wow">${l}</td>
          <td class="cp-global-spread">${s.retailerSpreadPct>0?`${s.retailerSpreadPct.toFixed(1)}%`:"—"}</td>
          <td class="cp-global-fresh ${i}">${s.freshnessLagMin>0?X(s.freshnessLagMin):"—"}</td>
        </tr>`}).join("")}</tbody>
      </table>
      <div class="cp-global-hint">Tap a market row to drill in</div>
    `}visibleInflationRows(){const e=this.globalInflation??[],t=this.inflationFilter.trim().toLowerCase();return t?e.filter(s=>s.name.toLowerCase().includes(t)||s.iso2.toLowerCase().includes(t)):e}inflationCountText(e){const t=e.length===1?r("components.consumerPrices.world.countSingular"):r("components.consumerPrices.world.countPlural");return`${e.length} ${t}`}inflationTbodyHtml(e){return e.length===0?`<tr><td colspan="4" class="cp-global-pending">${o(r("components.consumerPrices.world.noMatches"))}</td></tr>`:e.map(t=>{const s=Is(t.inflationPct);return`
        <tr class="cp-global-row">
          <td class="cp-global-flag">${o(t.name)}</td>
          <td class="cp-infl-yoy ${s}">${tt(t.inflationPct)}</td>
          <td class="cp-infl-eop">${tt(t.cpiEopPct)}</td>
          <td class="cp-infl-year">${t.year??"—"}</td>
        </tr>`}).join("")}renderWorldInflation(){if(this.globalInflation===null)return this.inflationLoading||this.loadGlobalInflation(),`<div class="cp-empty-state">${o(r("components.consumerPrices.world.loading"))}</div>`;if(this.globalInflation.length===0)return this.renderEmptyState(r("components.consumerPrices.world.empty"));const e=this.visibleInflationRows();return`
      <div class="cp-world-controls">
        <input type="search" class="cp-world-filter" data-inflation-filter
          placeholder="${o(r("components.consumerPrices.world.filterPlaceholder"))}"
          value="${o(this.inflationFilter)}" />
        <span class="cp-world-count">${o(this.inflationCountText(e))}</span>
      </div>
      <table class="cp-global-table cp-world-table">
        <thead>
          <tr>
            <th scope="col">${o(r("components.consumerPrices.world.country"))}</th>
            <th scope="col">${o(r("components.consumerPrices.world.inflationYoY"))}</th>
            <th scope="col">${o(r("components.consumerPrices.world.endOfPeriod"))}</th>
            <th scope="col">${o(r("components.consumerPrices.world.year"))}</th>
          </tr>
        </thead>
        <tbody>${this.inflationTbodyHtml(e)}</tbody>
      </table>
      <div class="cp-global-hint">${o(r("components.consumerPrices.world.source"))}</div>
    `}renderOverview(){var t;const e=this.overview;return!e||!e.asOf||e.asOf==="0"?this.renderEmptyState("No price data available yet"):`
      <div class="cp-overview-grid">
        <div class="cp-stat-card">
          <div class="cp-stat-label">Essentials Basket</div>
          <div class="cp-stat-value">${e.essentialsIndex>0?e.essentialsIndex.toFixed(1):"—"}</div>
          <div class="cp-stat-sub">Index (base 100)</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Value Basket</div>
          <div class="cp-stat-value">${e.valueBasketIndex>0?e.valueBasketIndex.toFixed(1):"—"}</div>
          <div class="cp-stat-sub">Index (base 100)</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Week-over-Week</div>
          <div class="cp-stat-value">${z(e.wowPct,!0)}</div>
          <div class="cp-stat-sub">${Ds(e.wowPct)}</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Month-over-Month</div>
          <div class="cp-stat-value">${z(e.momPct,!0)}</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Retailer Spread</div>
          <div class="cp-stat-value">${e.retailerSpreadPct>0?`${e.retailerSpreadPct.toFixed(1)}%`:"—"}</div>
          <div class="cp-stat-sub">Cheapest vs most exp.</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Coverage</div>
          <div class="cp-stat-value">${e.coveragePct>0?`${e.coveragePct.toFixed(0)}%`:"—"}</div>
          <div class="cp-stat-sub ${ee(e.freshnessLagMin)}">
            ${X(e.freshnessLagMin)}
          </div>
        </div>
      </div>
      ${(t=e.topCategories)!=null&&t.length?`
        <div class="cp-section-label">Top Category Movers</div>
        <div class="cp-category-mini">
          ${e.topCategories.slice(0,5).map(s=>this.renderCategoryMini(s)).join("")}
        </div>
      `:""}
    `}renderCategoryMini(e){var s;const t=(s=e.sparkline)!=null&&s.length?ue(e.sparkline,"var(--accent)",40,16):"";return`
      <div class="cp-cat-mini-row" data-category="${o(e.slug)}">
        <span class="cp-cat-name">${o(e.name)}</span>
        <span class="cp-cat-spark">${t}</span>
        ${z(e.momPct,!0)}
      </div>
    `}renderCategories(){var t;const e=(t=this.categories)==null?void 0:t.categories;return e!=null&&e.length?`
      <table class="cp-table">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">WoW</th>
            <th scope="col">MoM</th>
            <th scope="col">Trend</th>
            <th scope="col">Coverage</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(s=>{var a;return`
            <tr class="cp-cat-row" data-category="${o(s.slug)}">
              <td><strong>${o(s.name)}</strong></td>
              <td>${z(s.wowPct,!0)}</td>
              <td>${z(s.momPct,!0)}</td>
              <td>${(a=s.sparkline)!=null&&a.length?ue(s.sparkline,"var(--accent)",48,18,"",{label:`${s.name} price trend`}):"—"}</td>
              <td>${s.coveragePct>0?`${s.coveragePct.toFixed(0)}%`:"—"}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    `:this.renderEmptyState("No category data yet")}renderMovers(){const e=this.movers;if(!e)return this.renderEmptyState("No price movement data yet");const{categoryFilter:t}=this.settings,s=i=>!t||i.category===t,a=(e.risers??[]).filter(s).slice(0,8),l=(e.fallers??[]).filter(s).slice(0,8);return!a.length&&!l.length?this.renderEmptyState("No movers for this selection"):`
      <div class="cp-movers-grid">
        <div class="cp-movers-col">
          <div class="cp-col-header cp-col-header--up">Rising</div>
          ${a.map(i=>this.renderMoverRow(i,"up")).join("")||'<div class="cp-empty-col">None</div>'}
        </div>
        <div class="cp-movers-col">
          <div class="cp-col-header cp-col-header--down">Falling</div>
          ${l.map(i=>this.renderMoverRow(i,"down")).join("")||'<div class="cp-empty-col">None</div>'}
        </div>
      </div>
    `}renderMoverRow(e,t){const s=e.changePct>0?"+":"";return`
      <div class="cp-mover-row cp-mover-row--${t}">
        <div class="cp-mover-title">${o(e.title)}</div>
        <div class="cp-mover-meta">
          <span class="cp-mover-cat">${o(e.category)}</span>
          <span class="cp-mover-retailer">${o(e.retailerSlug)}</span>
        </div>
        <div class="cp-mover-pct">${s}${e.changePct.toFixed(1)}%</div>
      </div>
    `}renderSpread(){var t;const e=this.spread;return(t=e==null?void 0:e.retailers)!=null&&t.length?`
      <div class="cp-spread-header">
        <span>Spread: <strong>${e.spreadPct.toFixed(1)}%</strong></span>
        <span class="cp-spread-basket">${o(e.basketSlug)} · ${o(e.currencyCode)}</span>
      </div>
      <div class="cp-spread-list">
        ${e.retailers.map((s,a)=>this.renderSpreadRow(s,a,e.currencyCode)).join("")}
      </div>
    `:this.renderEmptyState("Retailer comparison starts once data is collected")}renderSpreadRow(e,t,s){const a=t===0;return`
      <div class="cp-spread-row ${a?"cp-spread-row--cheapest":""}">
        <div class="cp-spread-rank">#${t+1}</div>
        <div class="cp-spread-name">${o(e.name)}</div>
        <div class="cp-spread-total">${s} ${e.basketTotal.toFixed(2)}</div>
        <div class="cp-spread-delta">${a?'<span class="cp-badge cp-badge--green">Cheapest</span>':z(e.deltaVsCheapestPct,!0)}</div>
        <div class="cp-spread-items">${e.itemCount} items</div>
        <div class="cp-spread-fresh ${ee(e.freshnessMin)}">${X(e.freshnessMin)}</div>
      </div>
    `}renderHealth(){var t;const e=this.freshness;return(t=e==null?void 0:e.retailers)!=null&&t.length?`
      <div class="cp-health-summary">
        <span>Overall freshness: <strong class="${ee(e.overallFreshnessMin)}">${X(e.overallFreshnessMin)}</strong></span>
        ${e.stalledCount>0?`<span class="cp-stalled-badge">${e.stalledCount} stalled</span>`:""}
      </div>
      <div class="cp-health-list">
        ${e.retailers.map(s=>`
          <div class="cp-health-row">
            <span class="cp-health-name">${o(s.name)}</span>
            <span class="cp-health-status cp-health-status--${s.status}">${s.status}</span>
            <span class="cp-health-rate">${s.parseSuccessRate>0?`${s.parseSuccessRate.toFixed(0)}% parse`:"—"}</span>
            <span class="cp-health-fresh ${ee(s.freshnessMin)}">${X(s.freshnessMin)}</span>
          </div>
        `).join("")}
      </div>
    `:this.renderEmptyState("Health data not yet available")}renderEmptyState(e){return`<div class="cp-empty-state">${o(e)}</div>`}}const Ya=Object.freeze(Object.defineProperty({__proto__:null,ConsumerPricesPanel:Fs},Symbol.toStringTag,{value:"Module"}));class Ls extends L{constructor(){super({id:"trade-policy",title:r("panels.tradePolicy"),defaultRowSpan:2,infoTooltip:r("components.tradePolicy.infoTooltip")});g(this,"restrictionsData",null);g(this,"tariffsData",null);g(this,"flowsData",null);g(this,"barriersData",null);g(this,"revenueData",null);g(this,"comtradeData",null);g(this,"activeTab","restrictions");g(this,"loadGuard",new _t);this.content.addEventListener("click",e=>{const t=e.target.closest(".panel-tab");if(!t)return;const s=t.dataset.tab;s&&s!==this.activeTab&&(this.activeTab=s,this.render())})}clearSensitiveContent(){this.loadGuard.begin(),this.restrictionsData=null,this.tariffsData=null,this.flowsData=null,this.barriersData=null,this.revenueData=null,this.comtradeData=null,super.clearSensitiveContent()}unlockPanel(){super.unlockPanel(),this.content.hasChildNodes()||this.render()}beginDataLoad(){return this.loadGuard.begin()}acceptsDataLoad(e){return this.loadGuard.isCurrent(e)&&!this.isLocked&&!this.signal.aborted}updateRestrictions(e){this.restrictionsData=e,this.render()}updateTariffs(e){this.tariffsData=e,this.render()}updateFlows(e){this.flowsData=e,this.render()}updateBarriers(e){this.barriersData=e,this.render()}updateComtradeFlows(e){this.comtradeData=e,this.render()}updateRevenue(e){this.revenueData=e,ae()&&!ie("wtoTrade")&&this.activeTab!=="revenue"&&(this.activeTab="revenue"),this.render()}render(){var b,m,y,w,C,A,D,R,$,S,T,U,B,P,G,H,q,E,I;const e=!ae()||ie("wtoTrade"),t=e&&this.tariffsData&&((b=this.tariffsData.datapoints)==null?void 0:b.length)>0,s=e&&this.flowsData&&((m=this.flowsData.flows)==null?void 0:m.length)>0,a=e&&this.barriersData&&((y=this.barriersData.barriers)==null?void 0:y.length)>0,l=this.revenueData&&((w=this.revenueData.months)==null?void 0:w.length)>0,i=this.comtradeData&&((C=this.comtradeData.flows)==null?void 0:C.length)>0;if(!e&&!l&&!i){this.setSafeContent(k(`<div class="economic-empty">${r("components.tradePolicy.apiKeyMissing")}</div>`,"legacy Panel.setContent() migration"));return}!e&&this.activeTab!=="revenue"&&this.activeTab!=="comtrade"&&(this.activeTab="revenue");const c=`
      <div class="panel-tabs">
        ${e?`<button class="panel-tab ${this.activeTab==="restrictions"?"active":""}" data-tab="restrictions">
          ${r("components.tradePolicy.overview")}
        </button>`:""}
        ${t?`<button class="panel-tab ${this.activeTab==="tariffs"?"active":""}" data-tab="tariffs">
          ${r("components.tradePolicy.tariffs")}
        </button>`:""}
        ${s?`<button class="panel-tab ${this.activeTab==="flows"?"active":""}" data-tab="flows">
          ${r("components.tradePolicy.flows")}
        </button>`:""}
        ${a?`<button class="panel-tab ${this.activeTab==="barriers"?"active":""}" data-tab="barriers">
          ${r("components.tradePolicy.barriers")}
        </button>`:""}
        ${l?`<button class="panel-tab ${this.activeTab==="revenue"?"active":""}" data-tab="revenue">
          ${r("components.tradePolicy.revenue")}
        </button>`:""}
        ${i?`<button class="panel-tab ${this.activeTab==="comtrade"?"active":""}" data-tab="comtrade">
          ${r("components.tradePolicy.strategicFlows")}
        </button>`:""}
      </div>
    `,d=this.activeTab==="restrictions"?(((D=(A=this.restrictionsData)==null?void 0:A.restrictions)==null?void 0:D.length)??0)>0:this.activeTab==="tariffs"?((($=(R=this.tariffsData)==null?void 0:R.datapoints)==null?void 0:$.length)??0)>0:this.activeTab==="flows"?(((T=(S=this.flowsData)==null?void 0:S.flows)==null?void 0:T.length)??0)>0:this.activeTab==="barriers"?(((B=(U=this.barriersData)==null?void 0:U.barriers)==null?void 0:B.length)??0)>0:this.activeTab==="comtrade"?(((G=(P=this.comtradeData)==null?void 0:P.flows)==null?void 0:G.length)??0)>0:(((q=(H=this.revenueData)==null?void 0:H.months)==null?void 0:q.length)??0)>0,v=this.activeTab==="restrictions"?this.restrictionsData:this.activeTab==="tariffs"?this.tariffsData:this.activeTab==="flows"?this.flowsData:this.activeTab==="barriers"?this.barriersData:this.activeTab==="comtrade"?this.comtradeData:this.revenueData,h=!d&&(v!=null&&v.upstreamUnavailable)?`<div class="economic-warning">${this.activeTab==="revenue"?r("components.tradePolicy.treasuryUnavailable"):this.activeTab==="comtrade"?r("components.tradePolicy.comtradeUnavailable"):r("components.tradePolicy.upstreamUnavailable")}</div>`:"";let f="";switch(this.activeTab){case"restrictions":f=this.renderRestrictions();break;case"tariffs":f=this.renderTariffs();break;case"flows":f=this.renderFlows();break;case"barriers":f=this.renderBarriers();break;case"revenue":f=this.renderRevenue();break;case"comtrade":f=this.renderComtradeFlows();break}const p=this.activeTab==="comtrade"?r("components.tradePolicy.sourceComtrade"):this.activeTab==="revenue"?r("components.tradePolicy.sourceTreasury"):(this.activeTab==="tariffs"||this.activeTab==="restrictions")&&((I=(E=this.tariffsData)==null?void 0:E.effectiveTariffRate)!=null&&I.sourceName)?`${r("components.tradePolicy.sourceWto")} / ${this.tariffsData.effectiveTariffRate.sourceName}`:r("components.tradePolicy.sourceWto");this.setSafeContent(k(`
      ${c}
      ${h}
      <div class="economic-content">${f}</div>
      <div class="economic-footer">
        <span class="economic-source">${o(p)}</span>
      </div>
    `,"legacy Panel.setContent() migration"))}renderRestrictions(){var e;return!this.restrictionsData||!((e=this.restrictionsData.restrictions)!=null&&e.length)?`<div class="economic-empty">${r("components.tradePolicy.noOverviewData")}</div>`:`${this.renderRestrictionsContext()}
    <div class="trade-restrictions-list">
      ${this.restrictionsData.restrictions.map(t=>{const s=t.status==="high"?"status-active":t.status==="moderate"?"status-notified":"status-terminated",a=t.status==="high"?r("components.tradePolicy.highTariff"):t.status==="moderate"?r("components.tradePolicy.moderateTariff"):r("components.tradePolicy.lowTariff"),l=this.renderSourceUrl(t.sourceUrl);return`<div class="trade-restriction-card">
          <div class="trade-restriction-header">
            <span class="trade-country">${o(t.reportingCountry)}</span>
            <span class="trade-badge">${o(t.measureType)}</span>
            <span class="trade-status ${s}">${a}</span>
          </div>
          <div class="trade-restriction-body">
            <div class="trade-sector">${o(t.productSector)}</div>
            ${t.description?`<div class="trade-description">${o(t.description)}</div>`:""}
            ${this.renderRestrictionEffectiveContext(t.reportingCountry)}
            ${t.affectedCountry?`<div class="trade-affected">Affects: ${o(t.affectedCountry)}</div>`:""}
          </div>
          <div class="trade-restriction-footer">
            ${t.notifiedAt?`<span class="trade-date">${o(t.notifiedAt)}</span>`:""}
            ${l}
          </div>
        </div>`}).join("")}
    </div>`}renderRestrictionsContext(){const e=this.getEffectiveTariffGapSummary();if(!e)return`<div class="trade-policy-note">${r("components.tradePolicy.overviewNoteNoEffective")}</div>`;const t=e.gap>0?"+":"",s=this.renderSourceUrl(e.effectiveRate.sourceUrl);return`<div class="trade-policy-note">
      ${r("components.tradePolicy.usBaselineLabel")}: <strong>${e.baseline.tariffRate.toFixed(1)}%</strong>.
      ${r("components.tradePolicy.effectiveTariffRateLabel")}: <strong>${e.effectiveRate.tariffRate.toFixed(1)}%</strong>.
      ${r("components.tradePolicy.gapLabel")}: <strong>${t}${e.gap.toFixed(1)}pp</strong>.
      ${r("components.tradePolicy.overviewNoteTail")}
      ${s}
    </div>`}renderTariffs(){var i;if(!this.tariffsData||!((i=this.tariffsData.datapoints)!=null&&i.length))return`<div class="economic-empty">${r("components.tradePolicy.noTariffData")}</div>`;const e=[...this.tariffsData.datapoints].sort((c,d)=>d.year-c.year),t=e[0]??null,s=this.tariffsData.effectiveTariffRate??null,a=this.renderTariffSummary(t,s),l=e.map(c=>`<tr>
        <td>${c.year}</td>
        <td>${c.tariffRate.toFixed(1)}%</td>
        <td>${o(c.productSector||"—")}</td>
      </tr>`).join("");return`${a}
    <div class="trade-tariffs-table">
      <table>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">${r("components.tradePolicy.mfnAppliedRate")}</th>
            <th scope="col">Sector</th>
          </tr>
        </thead>
        <tbody>${l}</tbody>
      </table>
    </div>`}renderTariffSummary(e,t){if(!e)return"";const s=r("components.tradePolicy.wtoBaselineMeta",{year:String(e.year)}),a=`
      <div class="trade-tariff-card">
        <div class="trade-tariff-label">${r("components.tradePolicy.baselineMfnTariff")}</div>
        <div class="trade-tariff-value">${e.tariffRate.toFixed(1)}%</div>
        <div class="trade-tariff-meta">${o(s)}</div>
      </div>
    `;if(!t)return`<div class="trade-tariff-summary">
        ${a}
        <div class="trade-tariff-card trade-tariff-card-muted">
          <div class="trade-tariff-label">${r("components.tradePolicy.effectiveTariffRateLabel")}</div>
          <div class="trade-tariff-value">—</div>
          <div class="trade-tariff-meta">${r("components.tradePolicy.noEffectiveCoverageForCountry")}</div>
        </div>
      </div>`;const l=t.tariffRate-e.tariffRate,i=l>0?"+":"",c=l>=0?"trade-tariff-gap-above":"trade-tariff-gap-below",d=[t.sourceName,t.observationPeriod,t.updatedAt?`Updated ${t.updatedAt}`:""].filter(Boolean),v=this.renderSourceUrl(t.sourceUrl);return`<div class="trade-tariff-summary">
      ${a}
      <div class="trade-tariff-card">
        <div class="trade-tariff-label">${r("components.tradePolicy.effectiveTariffRateLabel")}</div>
        <div class="trade-tariff-value">${t.tariffRate.toFixed(1)}%</div>
        <div class="trade-tariff-meta">
          ${o(d.join(" | "))}
          ${v?`<span class="trade-tariff-source">${v}</span>`:""}
        </div>
      </div>
      <div class="trade-tariff-card">
        <div class="trade-tariff-label">${r("components.tradePolicy.gapLabel")}</div>
        <div class="trade-tariff-value ${c}">${i}${l.toFixed(1)}pp</div>
        <div class="trade-tariff-meta">${r("components.tradePolicy.effectiveMinusBaseline")}</div>
      </div>
    </div>`}getLatestBaselineTariffPoint(){var e,t;return(t=(e=this.tariffsData)==null?void 0:e.datapoints)!=null&&t.length?[...this.tariffsData.datapoints].sort((s,a)=>a.year-s.year)[0]??null:null}getEffectiveTariffGapSummary(){var s;const e=this.getLatestBaselineTariffPoint(),t=((s=this.tariffsData)==null?void 0:s.effectiveTariffRate)??null;return!e||!t?null:{baseline:e,effectiveRate:t,gap:t.tariffRate-e.tariffRate}}renderRestrictionEffectiveContext(e){if(e!=="United States")return"";const t=this.getEffectiveTariffGapSummary();if(!t)return"";const s=t.gap>0?"+":"";return`<div class="trade-policy-inline-note">
      ${r("components.tradePolicy.effectiveTariffRateLabel")}: ${t.effectiveRate.tariffRate.toFixed(1)}%
      <span class="trade-policy-inline-sep">|</span>
      ${r("components.tradePolicy.gapVsMfnLabel")}: ${s}${t.gap.toFixed(1)}pp
    </div>`}renderFlows(){var e;return!this.flowsData||!((e=this.flowsData.flows)!=null&&e.length)?`<div class="economic-empty">${r("components.tradePolicy.noFlowData")}</div>`:`<div class="trade-flows-list">
      ${this.flowsData.flows.map(t=>{const s=t.yoyExportChange>=0?"▲":"▼",a=t.yoyImportChange>=0?"▲":"▼",l=t.yoyExportChange>=0?"change-positive":"change-negative",i=t.yoyImportChange>=0?"change-positive":"change-negative";return`<div class="trade-flow-card">
          <div class="trade-flow-year">${t.year}</div>
          <div class="trade-flow-metrics">
            <div class="trade-flow-metric">
              <span class="trade-flow-label">${r("components.tradePolicy.exports")}</span>
              <span class="trade-flow-value">$${t.exportValueUsd.toFixed(0)}M</span>
              <span class="trade-flow-change ${l}">${s} ${Math.abs(t.yoyExportChange).toFixed(1)}%</span>
            </div>
            <div class="trade-flow-metric">
              <span class="trade-flow-label">${r("components.tradePolicy.imports")}</span>
              <span class="trade-flow-value">$${t.importValueUsd.toFixed(0)}M</span>
              <span class="trade-flow-change ${i}">${a} ${Math.abs(t.yoyImportChange).toFixed(1)}%</span>
            </div>
          </div>
        </div>`}).join("")}
    </div>`}renderBarriers(){var e;return!this.barriersData||!((e=this.barriersData.barriers)!=null&&e.length)?`<div class="economic-empty">${r("components.tradePolicy.noBarriers")}</div>`:`<div class="trade-barriers-list">
      ${this.barriersData.barriers.map(t=>{const s=this.renderSourceUrl(t.sourceUrl);return`<div class="trade-barrier-card">
          <div class="trade-barrier-header">
            <span class="trade-country">${o(t.notifyingCountry)}</span>
            <span class="trade-badge">${o(t.measureType)}</span>
          </div>
          <div class="trade-barrier-body">
            <div class="trade-barrier-title">${o(t.title)}</div>
            ${t.productDescription?`<div class="trade-sector">${o(t.productDescription)}</div>`:""}
            ${t.objective?`<div class="trade-description">${o(t.objective)}</div>`:""}
          </div>
          <div class="trade-barrier-footer">
            ${t.dateDistributed?`<span class="trade-date">${o(t.dateDistributed)}</span>`:""}
            ${s}
          </div>
        </div>`}).join("")}
    </div>`}renderRevenue(){var R;if(!this.revenueData||!((R=this.revenueData.months)!=null&&R.length))return`<div class="economic-empty">${r("components.tradePolicy.noRevenueData")}</div>`;const e=this.revenueData.months,s=e[e.length-1].fiscalYear,a=e.filter($=>$.fiscalYear===s),l=a.length,c=e.filter($=>$.fiscalYear===s-1).slice(0,l),d=a.reduce(($,S)=>$+S.monthlyAmountBillions,0),v=c.reduce(($,S)=>$+S.monthlyAmountBillions,0),h=v>0?(d-v)/v*100:0,f=h>=0?"change-negative":"change-positive",p=h>=0?"▲":"▼",b=`
      <div class="trade-revenue-summary">
        <div class="trade-revenue-headline">
          <span class="trade-revenue-label">${r("components.tradePolicy.fytdLabel",{year:String(s)})}</span>
          <span class="trade-revenue-value">$${d.toFixed(1)}B</span>
        </div>
        <div class="trade-revenue-compare">
          ${r("components.tradePolicy.vsPriorFy",{year:String(s-1)})}: $${v.toFixed(1)}B
          <span class="${f}">${p} ${Math.abs(h).toFixed(0)}%</span>
        </div>
      </div>
    `,m=c.length>0?v/c.length:0,y=[...e].slice(-12),w=Math.max(...y.map($=>$.monthlyAmountBillions),1),A=`<div class="trade-revenue-chart">${y.map($=>{const S=Math.round($.monthlyAmountBillions/w*100),T=$.recordDate.slice(0,7),U=$.monthlyAmountBillions>m*1.5;return`<div class="trade-chart-col" title="${T}: $${$.monthlyAmountBillions.toFixed(1)}B">
        <div class="trade-chart-bar${U?" trade-chart-spike":""}" style="height:${S}%"></div>
        <div class="trade-chart-label">${$.recordDate.slice(5,7)}</div>
      </div>`}).join("")}</div>`,D=[...e].reverse().slice(0,24).map($=>`<tr${$.monthlyAmountBillions>m*2?' class="trade-revenue-spike"':""}>
        <td>${$.recordDate}</td>
        <td>$${$.monthlyAmountBillions.toFixed(1)}B</td>
        <td>$${$.fytdAmountBillions.toFixed(1)}B</td>
      </tr>`).join("");return`${b}
    ${A}
    <div class="trade-tariffs-table">
      <table>
        <thead>
          <tr>
            <th scope="col">${r("components.tradePolicy.colDate")}</th>
            <th scope="col">${r("components.tradePolicy.colMonthly")}</th>
            <th scope="col">${r("components.tradePolicy.colFytd")}</th>
          </tr>
        </thead>
        <tbody>${D}</tbody>
      </table>
    </div>`}renderComtradeFlows(){var v;const e=`<p class="trade-comtrade-scope" data-comtrade-scope="national">${o(r("components.tradePolicy.comtradeNationalScope"))}</p>`,t=(v=this.comtradeData)==null?void 0:v.flows;if(!(t!=null&&t.length))return`${e}<div class="economic-empty">${r("components.tradePolicy.noComtradeData")}</div>`;const s=t.filter(h=>h.partnerCode==="0"||h.partnerCode==="000"),a=s.length>0?s:t,l=new Map;for(const h of a){const f=`${h.reporterCode}:${h.cmdCode}:${h.year}`,p=l.get(f);(!p||h.tradeValueUsd>p.tradeValueUsd)&&l.set(f,h)}const i=new Map;for(const h of l.values()){const f=`${h.reporterCode}:${h.cmdCode}`,p=i.get(f);(!p||h.year>p.year)&&i.set(f,h)}const d=[...i.values()].sort((h,f)=>h.isAnomaly!==f.isAnomaly?h.isAnomaly?-1:1:Math.abs(f.yoyChange)-Math.abs(h.yoyChange)).map(h=>{const f=h.yoyChange>=0?"▲":"▼",p=h.yoyChange>=0?"change-positive":"change-negative",b=`${f} ${Math.abs(h.yoyChange*100).toFixed(0)}%`,m=h.tradeValueUsd>=1e9?`$${(h.tradeValueUsd/1e9).toFixed(1)}B`:`$${(h.tradeValueUsd/1e6).toFixed(0)}M`,y=h.isAnomaly?`<span style="margin-left:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:600;letter-spacing:0.05em;padding:1px 5px;border-radius:3px;background:rgba(255,68,68,0.15);color:var(--red);vertical-align:middle;text-transform:uppercase">${r("components.tradePolicy.anomalyBadge")}</span>`:"";return`<tr class="${h.isAnomaly?"trade-anomaly-row":""}">
        <td>${o(h.reporterName)}${y}</td>
        <td>${o(h.cmdDesc)}</td>
        <td>${m} <span class="trade-flow-year">${h.year}</span></td>
        <td class="${p}">${b}</td>
      </tr>`}).join("");return`${e}<div class="trade-tariffs-table">
      <table>
        <thead><tr>
          <th scope="col">${r("components.tradePolicy.colReporter")}</th>
          <th scope="col">${r("components.tradePolicy.colCommodity")}</th>
          <th scope="col">${r("components.tradePolicy.colTradeValue")}</th>
          <th scope="col">${r("components.tradePolicy.yoyChange")}</th>
        </tr></thead>
        <tbody>${d}</tbody>
      </table>
    </div>`}renderSourceUrl(e){if(!e)return"";try{const t=new URL(e);if(t.protocol==="http:"||t.protocol==="https:")return`<a href="${o(e)}" target="_blank" rel="noopener" class="trade-source-link">Source</a>`}catch{}return""}}const Za=Object.freeze(Object.defineProperty({__proto__:null,TradePolicyPanel:Ls},Symbol.toStringTag,{value:"Module"}));class _s extends L{constructor(){super({id:"sanctions-pressure",title:r("components.sanctionsPressure.title"),showCount:!0,trackActivity:!0,defaultRowSpan:2,infoTooltip:r("components.sanctionsPressure.infoTooltip")});g(this,"data",null);this.showLoading(r("components.sanctionsPressure.loading"))}setData(e){this.data=e,this.setCount(e.totalCount),this.render()}render(){if(!this.data||this.data.totalCount===0){this.setSafeContent(k(`<div class="economic-empty">${o(r("components.sanctionsPressure.unavailable"))}</div>`,"legacy Panel.setContent() migration"));return}const e=this.data,t=`
      <div class="sanctions-summary">
        ${this.renderSummaryCard(r("components.sanctionsPressure.summary.new"),e.newEntryCount,e.newEntryCount>0?"highlight":"")}
        ${this.renderSummaryCard(r("components.sanctionsPressure.summary.sema"),e.semaError?`${e.semaCount} · ${e.semaError}`:e.semaCount,e.semaError?"highlight":"")}
        ${this.renderSummaryCard(r("components.sanctionsPressure.summary.vessels"),e.vesselCount)}
        ${this.renderSummaryCard(r("components.sanctionsPressure.summary.aircraft"),e.aircraftCount)}
      </div>
    `,s=e.countries.length>0?e.countries.slice(0,8).map(c=>this.renderCountryRow(c)).join(""):`<div class="economic-empty">${o(r("components.sanctionsPressure.empty.countries"))}</div>`,a=e.entries.length>0?e.entries.slice(0,10).map(c=>this.renderEntryRow(c)).join(""):`<div class="economic-empty">${o(r("components.sanctionsPressure.empty.entries"))}</div>`,l=e.programs.length>0?e.programs.slice(0,6).map(c=>this.renderProgramRow(c)).join(""):`<div class="economic-empty">${o(r("components.sanctionsPressure.empty.programs"))}</div>`,i=[r("components.sanctionsPressure.footer.updated",{time:e.fetchedAt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),e.datasetDate?r("components.sanctionsPressure.footer.dataset",{date:e.datasetDate.toISOString().slice(0,10)}):"",r("components.sanctionsPressure.footer.source")].filter(Boolean).join(" · ");this.setSafeContent(k(`
      <div class="sanctions-panel-content">
        ${t}
        <div class="sanctions-sections">
          <div class="sanctions-section">
            <div class="sanctions-section-title">${o(r("components.sanctionsPressure.sections.countries"))}</div>
            <div class="sanctions-list">${s}</div>
          </div>
          <div class="sanctions-section">
            <div class="sanctions-section-title">${o(r("components.sanctionsPressure.sections.entries"))}</div>
            <div class="sanctions-list">${a}</div>
          </div>
          <div class="sanctions-section">
            <div class="sanctions-section-title">${o(r("components.sanctionsPressure.sections.programs"))}</div>
            <div class="sanctions-list">${l}</div>
          </div>
        </div>
        <div class="economic-footer">${o(i)}</div>
      </div>
    `,"legacy Panel.setContent() migration"))}renderSummaryCard(e,t,s=""){return`
      <div class="sanctions-summary-card ${s?`sanctions-summary-card-${s}`:""}">
        <span class="sanctions-summary-label">${o(e)}</span>
        <span class="sanctions-summary-value">${o(String(t))}</span>
      </div>
    `}renderCountryRow(e){const t=[];return e.newEntryCount>0&&t.push(`<span class="sanctions-pill sanctions-pill-new">${o(r("components.sanctionsPressure.pills.newCount",{count:e.newEntryCount}))}</span>`),e.vesselCount>0&&t.push(`<span class="sanctions-pill">🚢 ${e.vesselCount}</span>`),e.aircraftCount>0&&t.push(`<span class="sanctions-pill">✈ ${e.aircraftCount}</span>`),`
      <div class="sanctions-row">
        <div class="sanctions-row-main">
          <div class="sanctions-row-title">${o(e.countryName)}</div>
          <div class="sanctions-row-meta">${o(e.countryCode)} · ${o(r("components.sanctionsPressure.designations",{count:e.entryCount}))}</div>
        </div>
        <div class="sanctions-row-flags">${t.join("")}</div>
      </div>
    `}renderProgramRow(e){return`
      <div class="sanctions-row">
        <div class="sanctions-row-main">
          <div class="sanctions-row-title">${o(e.program)}</div>
          <div class="sanctions-row-meta">${o(r("components.sanctionsPressure.designations",{count:e.entryCount}))}</div>
        </div>
        <div class="sanctions-row-flags">
          ${e.newEntryCount>0?`<span class="sanctions-pill sanctions-pill-new">${o(r("components.sanctionsPressure.pills.newCount",{count:e.newEntryCount}))}</span>`:""}
        </div>
      </div>
    `}renderEntryRow(e){const t=e.countryNames[0]||e.countryCodes[0]||e.note.split(" · ")[0]||r("components.sanctionsPressure.fallbacks.unattributed"),s=e.programs[0]||r("components.sanctionsPressure.fallbacks.program"),a=e.note?`<div class="sanctions-entry-note">${o(e.note)}</div>`:"",l=e.effectiveAt?e.effectiveAt.toISOString().slice(0,10):r("components.sanctionsPressure.fallbacks.undated"),i=(e.sourceLists||[]).map(c=>`<span class="sanctions-pill">${o(c)}</span>`).join("");return`
      <div class="sanctions-entry">
        <div class="sanctions-entry-top">
          <span class="sanctions-entry-name">${o(e.name)}</span>
          <span class="sanctions-pill sanctions-pill-type">${o(e.entityType)}</span>
          ${e.isNew?`<span class="sanctions-pill sanctions-pill-new">${o(r("components.sanctionsPressure.pills.new"))}</span>`:""}
          ${i}
        </div>
        <div class="sanctions-entry-meta">${o(t)} · ${o(s)} · ${o(l)}</div>
        ${a}
      </div>
    `}}const Ja=Object.freeze(Object.defineProperty({__proto__:null,SanctionsPressurePanel:_s},Symbol.toStringTag,{value:"Module"})),Ms=new Set(["hormuz_strait","malacca_strait","suez","bab_el_mandeb"]),Ns=new Set(Object.keys(os).filter(n=>n!=="_comment"&&n.length===2)),Bs=(()=>{const n=new Intl.DisplayNames(["en"],{type:"region"});return Object.keys(Bt).map(u=>{const e=Ns.has(u),t=n.of(u)??u;return{iso2:u,label:e?t:`${t} (not seeded)`,seeded:e}}).sort((u,e)=>u.label.localeCompare(e.label))})();function st(n){return n?n.todayCountsAvailable??(n.todayTotal??0)>0:!1}class Os extends L{constructor(){super({id:"supply-chain",title:r("panels.supplyChain"),defaultRowSpan:2,infoTooltip:r("components.supplyChain.infoTooltip")});g(this,"shippingData",null);g(this,"chokepointData",null);g(this,"mineralsData",null);g(this,"mineralProductionData",null);g(this,"mineralsStage","mine");g(this,"stressData",null);g(this,"activeTab","chokepoints");g(this,"expandedChokepoint",null);g(this,"pendingFocusChokepoint",null);g(this,"transitChart",new ns);g(this,"chartObserver",null);g(this,"chartMountTimer",null);g(this,"historyCache",new Map);g(this,"historyInflight",new Set);g(this,"bypassUnsubscribe",null);g(this,"bypassGateTracked",!1);g(this,"onDismissScenario",null);g(this,"onScenarioActivate",null);g(this,"activeScenarioState",null);g(this,"scenarioControls",new Map);g(this,"scenarioRunState",new Map);g(this,"pendingImmediateRender",!1);g(this,"scenarioPollController",null);ft(this.content,".trade-restriction-header"),this.content.addEventListener("input",e=>{this.captureScenarioControls(e.target)}),this.content.addEventListener("change",e=>{var a;const t=this.captureScenarioControls(e.target);if(!t)return;(a=this.scenarioPollController)==null||a.abort();const s=t.dataset.scenarioId;s&&this.scenarioRunState.delete(s),this.renderFromUser()}),this.content.addEventListener("click",e=>{const t=e.target.closest("[data-mineral-stage]");if((t==null?void 0:t.dataset.mineralStage)==="mine"||(t==null?void 0:t.dataset.mineralStage)==="refinery"){const i=t.dataset.mineralStage;i!==this.mineralsStage&&(this.mineralsStage=i,this.render());return}const s=e.target.closest(".panel-tab");if(s!=null&&s.dataset.tab){const i=s.dataset.tab;i!==this.activeTab&&(this.clearTransitChart(),this.activeTab=i,this.render());return}const a=e.target.closest(".sc-scenario-trigger");if(a){e.stopPropagation();const i=e.target.closest(".sc-scenario-btn");i&&!i.disabled&&this.runScenario(a,i);return}const l=e.target.closest(".trade-restriction-card");if(l!=null&&l.dataset.cpId){const i=this.expandedChokepoint===l.dataset.cpId?null:l.dataset.cpId;i||this.clearTransitChart(),this.expandedChokepoint=i,this.pendingFocusChokepoint=l.dataset.cpId??null,this.render()}})}captureScenarioControls(e){var v;const t=(e==null?void 0:e.closest(".sc-scenario-trigger"))??null;if(!t)return null;const s=t.dataset.scenarioId;if(!s)return null;const a=((v=t.querySelector(".sc-scenario-country-select"))==null?void 0:v.value)??"",l=t.querySelector(".sc-scenario-severity"),i=be.find(h=>h.id===s),c=(l==null?void 0:l.value)??"",d=c===""?(i==null?void 0:i.disruptionPct)??0:Number(c);return Number.isFinite(d)&&this.scenarioControls.set(s,{iso2:a,disruptionPct:d}),t}setScenarioRunState(e,t){t==="idle"?this.scenarioRunState.delete(e):this.scenarioRunState.set(e,t),this.renderFromUser()}restoreChokepointHeaderFocus(){var s;const e=this.pendingFocusChokepoint;if(this.pendingFocusChokepoint=null,!e)return;const t=this.content.querySelectorAll(".trade-restriction-card");for(const a of t)if(a.dataset.cpId===e){(s=a.querySelector(".trade-restriction-header"))==null||s.focus();return}}clearTransitChart(){this.chartMountTimer&&(clearTimeout(this.chartMountTimer),this.chartMountTimer=null),this.chartObserver&&(this.chartObserver.disconnect(),this.chartObserver=null),this.transitChart.destroy(),this.bypassUnsubscribe&&(this.bypassUnsubscribe(),this.bypassUnsubscribe=null),this.bypassGateTracked=!1}updateShippingRates(e){this.shippingData=e,this.render()}updateChokepointStatus(e){this.chokepointData=e,this.render()}updateCriticalMinerals(e){this.mineralsData=e,this.render()}updateMineralProduction(e){this.mineralProductionData=e,this.render()}clearMineralProduction(){this.mineralProductionData=null,this.render()}updateShippingStress(e){this.stressData=e,this.render()}renderFromUser(){this.pendingImmediateRender=!0,this.render()}render(){var v,h,f,p,b,m,y,w,C,A,D,R,$,S,T,U;const e=this.pendingImmediateRender;this.pendingImmediateRender=!1,this.clearTransitChart();const t=`
      <div class="panel-tabs">
        <button class="panel-tab ${this.activeTab==="chokepoints"?"active":""}" data-tab="chokepoints">
          ${r("components.supplyChain.chokepoints")}
        </button>
        <button class="panel-tab ${this.activeTab==="shipping"?"active":""}" data-tab="shipping">
          ${r("components.supplyChain.shipping")}
        </button>
        <button class="panel-tab ${this.activeTab==="indicators"?"active":""}" data-tab="indicators">
          ${r("components.supplyChain.economicIndicators")}
        </button>
        <button class="panel-tab ${this.activeTab==="minerals"?"active":""}" data-tab="minerals">
          ${r("components.supplyChain.minerals")}
        </button>
        <button class="panel-tab ${this.activeTab==="stress"?"active":""}" data-tab="stress">
          Stress
        </button>
      </div>
    `,s=this.activeTab==="chokepoints"?(((h=(v=this.chokepointData)==null?void 0:v.chokepoints)==null?void 0:h.length)??0)>0:this.activeTab==="shipping"?(((p=(f=this.shippingData)==null?void 0:f.indices)==null?void 0:p.length)??0)>0||this.chokepointData!==null:this.activeTab==="indicators"?(((m=(b=this.shippingData)==null?void 0:b.indices)==null?void 0:m.length)??0)>0:this.activeTab==="stress"?(((w=(y=this.stressData)==null?void 0:y.carriers)==null?void 0:w.length)??0)>0:(((A=(C=this.mineralProductionData)==null?void 0:C.commodities)==null?void 0:A.length)??0)>0||(((R=(D=this.mineralsData)==null?void 0:D.minerals)==null?void 0:R.length)??0)>0,a=this.activeTab==="chokepoints"?this.chokepointData:this.activeTab==="shipping"||this.activeTab==="indicators"?this.shippingData:this.activeTab==="stress"?this.stressData:(S=($=this.mineralProductionData)==null?void 0:$.commodities)!=null&&S.length?this.mineralProductionData:this.mineralsData,l=a!=null&&a.upstreamUnavailable&&(this.activeTab==="chokepoints"||!s)?`<div class="economic-warning">${r("components.supplyChain.upstreamUnavailable")}</div>`:"";let i="";switch(this.activeTab){case"chokepoints":i=this.renderChokepoints();break;case"shipping":i=this.renderShipping();break;case"indicators":i=this.renderIndicators();break;case"minerals":i=this.renderMinerals();break;case"stress":i=this.renderStress();break}const c=k(`
      ${t}
      ${l}
      <div class="economic-content">${i}</div>
    `,"legacy Panel.setContent() migration"),d=()=>{this.restoreChokepointHeaderFocus();for(const B of this.content.querySelectorAll(".sc-scenario-trigger")){const P=this.scenarioControls.get(B.dataset.scenarioId),G=B.querySelector(".sc-scenario-country-select");G&&(G.value=(P==null?void 0:P.iso2)??"");const H=B.querySelector(".sc-scenario-severity");H&&P&&(H.value=String(P.disruptionPct))}this.activeScenarioState&&this.renderScenarioBanner()};if(e?this.setSafeContentImmediate(c,d):this.setSafeContent(c,d),this.activeTab==="chokepoints"&&this.expandedChokepoint){const B=this.expandedChokepoint,P=(U=(T=this.chokepointData)==null?void 0:T.chokepoints)==null?void 0:U.find(E=>E.name===B),G=()=>{const E=this.content.querySelector(`[data-chart-cp="${B}"]`);if(!E)return!1;const I=(P==null?void 0:P.id)??"";if(!I)return E.textContent=r("components.supplyChain.historyUnavailable")||"History unavailable",!0;const x=this.historyCache.get(I);return x&&x.length?(E.removeAttribute("style"),E.style.marginTop="8px",E.style.minHeight="200px",E.textContent="",this.transitChart.mount(E,x),!0):(this.historyInflight.has(I)||(this.historyInflight.add(I),Xt(I).then(M=>{this.historyInflight.delete(I);const N=this.content.querySelector(`[data-chart-cp-id="${I}"]`);N&&(M.history.length?(this.historyCache.set(I,M.history),N.removeAttribute("style"),N.style.marginTop="8px",N.style.minHeight="200px",N.textContent="",this.transitChart.mount(N,M.history)):N.textContent=r("components.supplyChain.historyUnavailable")||"History unavailable")}).catch(()=>{this.historyInflight.delete(I);const M=this.content.querySelector(`[data-chart-cp-id="${I}"]`);M&&(M.textContent=r("components.supplyChain.historyUnavailable")||"History unavailable")})),!0)},H=()=>{const E=this.content.querySelector(`[data-bypass-cp="${(P==null?void 0:P.id)??""}"]`);return E?(this.renderBypassSection(E,(P==null?void 0:P.id)??""),!0):!1},q=()=>H()?(G(),!0):!1;this.chartObserver=new MutationObserver(()=>{var E;q()&&(this.chartMountTimer&&(clearTimeout(this.chartMountTimer),this.chartMountTimer=null),(E=this.chartObserver)==null||E.disconnect(),this.chartObserver=null)}),this.chartObserver.observe(this.content,{childList:!0,subtree:!0}),this.chartMountTimer=setTimeout(()=>{q()&&(this.chartObserver&&(this.chartObserver.disconnect(),this.chartObserver=null),this.chartMountTimer=null)},220)}}renderBypassSection(e,t){if(!t)return;const s=()=>'<div class="sc-bypass-gate"><span class="sc-bypass-lock">🔒</span><span class="sc-bypass-gate-text">Bypass corridors available with PRO</span></div>',a=c=>{const d=c.slice(0,3);return d.length?`<table class="sc-bypass-table">
        <thead><tr><th scope="col">Corridor</th><th scope="col">+Days</th><th scope="col">+Cost</th><th scope="col">Risk</th></tr></thead>
        <tbody>${d.map(h=>{const f=h.addedTransitDays>0?`+${h.addedTransitDays}d`:"-",p=h.addedCostMultiplier>1?`+${((h.addedCostMultiplier-1)*100).toFixed(0)}%`:"-",m={WAR_RISK_TIER_UNSPECIFIED:"Normal",WAR_RISK_TIER_WAR_ZONE:"War Zone",WAR_RISK_TIER_CRITICAL:"Critical",WAR_RISK_TIER_HIGH:"High",WAR_RISK_TIER_ELEVATED:"Elevated",WAR_RISK_TIER_NORMAL:"Normal"}[h.bypassWarRiskTier]??h.bypassWarRiskTier;return`<tr><td>${o(h.name)}</td><td>${f}</td><td>${p}</td><td>${o(m)}</td></tr>`}).join("")}</tbody>
      </table>`:'<div class="sc-bypass-error">No bypass options available</div>'},l=(c,d)=>{if(!c){O(e,_(s(),"legacy direct innerHTML migration")),this.bypassGateTracked||(ze("bypass-corridors"),this.bypassGateTracked=!0);return}d!==void 0&&O(e,_(a(d),"legacy direct innerHTML migration"))};if(!re(ye())){l(!1),this.bypassUnsubscribe&&this.bypassUnsubscribe(),this.bypassUnsubscribe=rs(c=>{if(re(c)){if(this.bypassUnsubscribe&&(this.bypassUnsubscribe(),this.bypassUnsubscribe=null),!this.content.contains(e))return;O(e,_('<div class="sc-bypass-loading">Loading bypass options…</div>',"legacy direct innerHTML migration")),Ve(t,"container",100).then(d=>{this.content.contains(e)&&O(e,_(a(d.options),"legacy direct innerHTML migration"))}).catch(()=>{this.content.contains(e)&&O(e,_('<div class="sc-bypass-error">Bypass data unavailable</div>',"legacy direct innerHTML migration"))})}});return}Ve(t,"container",100).then(c=>{this.content.contains(e)&&l(!0,c.options)}).catch(()=>{this.content.contains(e)&&O(e,_('<div class="sc-bypass-error">Bypass data unavailable</div>',"legacy direct innerHTML migration"))})}renderChokepoints(){var a,l,i;if(!this.chokepointData||!((a=this.chokepointData.chokepoints)!=null&&a.length))return`<div class="economic-empty">${r("components.supplyChain.noChokepoints")}</div>`;const e=(l=this.activeScenarioState)==null?void 0:l.result,t=new Set((e==null?void 0:e.affectedChokepointIds)??[]),s=((i=e==null?void 0:e.template)==null?void 0:i.disruptionPct)??null;return`<div class="trade-restrictions-list">
      ${[...this.chokepointData.chokepoints].sort((c,d)=>d.disruptionScore-c.disruptionScore).map(c=>{var E,I;const d=t.has(c.id),v=c.status==="red"?"status-active":c.status==="yellow"?"status-notified":"status-terminated",h=c.status==="red"?"sc-dot-red":c.status==="yellow"?"sc-dot-yellow":"sc-dot-green",f=[c.navigationalWarningsAvailable===!0?`${c.activeWarnings} ${r("components.supplyChain.warnings")}`:"",c.aisSnapshotAvailable===!0?`${c.aisDisruptions} ${r("components.supplyChain.aisDisruptions")}`:""].filter(Boolean).join(" · "),p=c.transitSummary,b=(p==null?void 0:p.wowChangePct)??0,m=p&&b!==0,y=st(p),w=m?`<span class="${b>=0?"change-positive":"change-negative"}">${b>=0?"▲":"▼"}${Math.abs(b).toFixed(1)}%</span>`:"",C=(p==null?void 0:p.disruptionPct)??0,A=C>10?"sc-disrupt-red":C>3?"sc-disrupt-yellow":"sc-disrupt-green",D=(p==null?void 0:p.riskLevel)==="critical"||(p==null?void 0:p.riskLevel)==="high"?"sc-disrupt-red":(p==null?void 0:p.riskLevel)==="elevated"||(p==null?void 0:p.riskLevel)==="moderate"?"sc-disrupt-yellow":"sc-disrupt-green",R=this.expandedChokepoint===c.name,$=R&&(p==null?void 0:p.dataAvailable)!==!1?`<div data-chart-cp="${o(c.name)}" data-chart-cp-id="${o(c.id)}" style="margin-top:8px;min-height:200px;display:flex;align-items:center;justify-content:center;color:var(--text-dim,#888);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${r("components.supplyChain.loadingHistory")||"Loading transit history…"}</div>`:"",S=c.warRiskTier??"WAR_RISK_TIER_NORMAL",T={WAR_RISK_TIER_WAR_ZONE:"War Zone",WAR_RISK_TIER_CRITICAL:"Critical",WAR_RISK_TIER_HIGH:"High",WAR_RISK_TIER_ELEVATED:"Elevated",WAR_RISK_TIER_NORMAL:"Normal"},B=`<span class="sc-war-risk-badge sc-war-risk-badge--${{WAR_RISK_TIER_WAR_ZONE:"war",WAR_RISK_TIER_CRITICAL:"critical",WAR_RISK_TIER_HIGH:"high",WAR_RISK_TIER_ELEVATED:"elevated",WAR_RISK_TIER_NORMAL:"normal"}[S]??"normal"}">${T[S]??"Normal"}</span>`,P=R?`<div class="sc-bypass-section" data-bypass-cp="${o(c.id)}"><div class="sc-bypass-heading">Bypass Options</div><div class="sc-bypass-loading">Loading bypass options…</div></div>`:"",G=R?(()=>{var Ue;const x=be.find(K=>K.affectedChokepointIds.includes(c.id)&&K.type!=="tariff_shock");if(!x)return"";const M=re(ye()),N=this.scenarioControls.get(x.id)??{iso2:"",disruptionPct:x.disruptionPct},V=this.activeScenarioState,ve=(V==null?void 0:V.scenarioId)===x.id&&(V.result.scopedIso2??"")===N.iso2&&((Ue=V.result.template)==null?void 0:Ue.disruptionPct)===N.disruptionPct,Be=this.scenarioRunState.get(x.id),Oe=Be==="running",Pt=["sc-scenario-btn",M?"":"sc-scenario-btn--gated",ve?"sc-scenario-btn--active":""].filter(Boolean).join(" "),Et=Oe?"Computing…":ve?"Active":Be==="error"?"Error — retry":"Simulate Closure",kt=[M?"":'data-gated="1"',ve||Oe?"disabled":""].filter(Boolean).join(" ");return`<div class="sc-scenario-trigger" data-scenario-id="${o(x.id)}" data-chokepoint-id="${o(c.id)}">
            <div class="sc-scenario-section-label">Scenario settings</div>
            <div class="sc-scenario-controls">
              <label class="sc-scenario-control sc-scenario-control--country">Country
                <select class="sc-scenario-country-select" aria-label="Scenario country">
                  <option value="">All seeded countries</option>
                  ${Bs.map(K=>`<option value="${K.iso2}"${K.seeded?"":" disabled"}>${o(K.label)}</option>`).join("")}
                </select>
              </label>
              <label class="sc-scenario-control">Closure severity (%)
                <input class="sc-scenario-severity" type="number" min="0" max="100" step="1" value="${N.disruptionPct}" aria-label="Closure severity (%)">
              </label>
            </div>
            <div class="sc-scenario-actions"><p class="sc-scenario-hint">${x.durationDays} days is descriptive only. Coverage is checked when the run completes.</p>
            <button class="${Pt}" ${kt} aria-label="Simulate ${o(x.name)}">
              ${Et}
            </button></div>
          </div>`})():"",q=d&&s!=null&&s>c.disruptionScore?`<span class="trade-badge">${c.disruptionScore}/100</span> <span class="trade-badge trade-badge--projected" style="background:#7f1d1d;color:#fff;margin-left:4px">→ ${s}/100</span>`:`<span class="trade-badge">${c.disruptionScore}/100</span>`;return`<div class="trade-restriction-card${R?" expanded":""}${d?" scenario-affected":""}" data-cp-id="${o(c.name)}" style="cursor:pointer${d?";border-left:3px solid #dc2626":""}">
          <div class="trade-restriction-header" role="button" tabindex="0" aria-expanded="${R?"true":"false"}">
            <span class="trade-country">${o(c.name)}</span>
            <span class="sc-status-dot ${h}"></span>
            ${q}
            <span class="trade-status ${v}">${o(c.status)}</span>
          </div>
          <div class="trade-restriction-body">
            ${d&&(e!=null&&e.template)?`<div class="sc-metric-row" style="white-space:normal;background:#7f1d1d22;padding:4px 6px;border-radius:3px;margin-bottom:4px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
              <span style="color:#fca5a5;font-weight:600">⚠ Projected under scenario: ${e.template.disruptionPct}% closure for ${e.template.durationDays} days${e.template.costShockMultiplier>1?` (+${Math.round((e.template.costShockMultiplier-1)*100)}% cost)`:""}</span>
            </div>`:""}
            <div class="sc-metric-row"${f||(E=c.directions)!=null&&E.length?"":" hidden"}>
              ${f?`<span>${f}</span>`:""}
              ${(I=c.directions)!=null&&I.length?`<span>${c.directions.map(x=>o(x)).join("/")}</span>`:""}
            </div>
            ${p&&p.dataAvailable===!1?`<div class="sc-metric-row" style="opacity:0.5;font-size:calc(11px * var(--wm-panel-effective-scale, 1))"><span>${r("components.supplyChain.transitDataUnavailable")||"Transit data unavailable (upstream partial)"}</span></div>`:""}
            ${p&&p.dataAvailable!==!1&&(y||m||C>0)?`<div class="sc-metric-row">
              ${y?`<span>${p.todayTotal} ${r("components.supplyChain.vessels")}</span>`:""}
              ${m?`<span>${r("components.supplyChain.wowChange")}: ${w}</span>`:""}
              ${C>0?`<span>${r("components.supplyChain.disruption")}: <span class="${A}">${C.toFixed(1)}%</span></span>`:""}
            </div>`:""}
            ${p!=null&&p.riskLevel?`<div class="sc-metric-row">
              <span>${r("components.supplyChain.riskLevel")}: <span class="${D}">${o(p.riskLevel)}</span></span>
              <span>${p.incidentCount7d} ${r("components.supplyChain.incidents7d")}</span>
            </div>`:""}
            <div class="sc-metric-row">${B}</div>
            ${c.flowEstimate?(()=>{const x=c.flowEstimate,M=Math.round(x.flowRatio*100),N=x.disrupted||M<85?"#ef4444":M<95?"#f59e0b":"var(--text-dim,#888)",V=x.hazardAlertLevel&&x.hazardAlertName?` <span style="background:#ea580c;color:#fff;font-size:calc(9px * var(--wm-panel-effective-scale, 1));padding:1px 5px;border-radius:3px;margin-left:4px">&#9888; ${o(x.hazardAlertName.toUpperCase())}</span>`:"";return`<div class="sc-metric-row" style="color:${N}">
                <span>~${x.currentMbd} mb/d <span style="opacity:0.7">(${M}% of ${x.baselineMbd} baseline)</span>${V}</span>
              </div>`})():Ms.has(c.id)?`<div class="sc-metric-row" style="color:var(--text-dim,#888);font-size:calc(11px * var(--wm-panel-effective-scale, 1));opacity:0.7">
                <span>${r("components.supplyChain.flowUnavailable")}</span>
              </div>`:""}
            ${c.description?`<div class="trade-description">${o(c.description)}</div>`:""}
            <div class="trade-affected">${c.affectedRoutes.slice(0,3).map(x=>o(x)).join(", ")}</div>
            ${$}
            ${P}
            ${G}
          </div>
        </div>`}).join("")}
    </div>`}renderShipping(){var s,a;const e=(a=(s=this.shippingData)==null?void 0:s.indices)==null?void 0:a.length,t=this.renderDisruptionSnapshot();return!e&&!t?`<div class="economic-empty">${r("components.supplyChain.noShipping")}</div>`:`<div class="trade-restrictions-list">
      ${t}
      ${e?this.renderFredIndices():""}
    </div>`}renderDisruptionSnapshot(){if(this.chokepointData===null)return`<div class="trade-sector" style="padding:8px;opacity:0.6">${r("components.supplyChain.loadingCorridors")}</div>`;const e=this.chokepointData.chokepoints;if(!(e!=null&&e.length))return"";const t=[...e].sort((i,c)=>c.disruptionScore-i.disruptionScore),s=t.filter(i=>i.disruptionScore>0),l=(s.length>0?s:t.slice(0,5)).map(i=>{const c=i.transitSummary,d=i.status==="red"?"sc-dot-red":i.status==="yellow"?"sc-dot-yellow":"sc-dot-green",v=(c==null?void 0:c.wowChangePct)??0,h=st(c),f=v!==0?`<span class="${v>=0?"change-positive":"change-negative"}">${v>=0?"▲":"▼"}${Math.abs(v).toFixed(1)}%</span>`:"-",p=(c==null?void 0:c.disruptionPct)??0,b=p>10?"sc-disrupt-red":p>3?"sc-disrupt-yellow":"sc-disrupt-green",m=(c==null?void 0:c.riskLevel)||"-",y=m==="critical"||m==="high"?"sc-disrupt-red":m==="elevated"||m==="moderate"?"sc-disrupt-yellow":"";return`<tr>
        <td><span class="sc-status-dot ${d}"></span> ${o(i.name)}</td>
        <td>${h&&c?c.todayTotal:"-"}</td>
        <td>${f}</td>
        <td><span class="${b}">${p>0?p.toFixed(1)+"%":"-"}</span></td>
        <td>${y?`<span class="${y}">${o(m)}</span>`:o(m)}</td>
      </tr>`}).join("");return`<div style="margin-bottom:8px">
      <div class="trade-sector" style="font-weight:600;margin-bottom:4px">${r("components.supplyChain.corridorDisruption")}</div>
      <table class="sc-disruption-table">
        <thead><tr>
          <th scope="col">${r("components.supplyChain.corridor")}</th>
          <th scope="col">${r("components.supplyChain.vessels")}</th>
          <th scope="col">${r("components.supplyChain.wowChange")}</th>
          <th scope="col">${r("components.supplyChain.disruption")}</th>
          <th scope="col">${r("components.supplyChain.risk")}</th>
        </tr></thead>
        <tbody>${l}</tbody>
      </table>
    </div>`}renderFredIndices(){var i,c;if(ae()&&!ie("supplyChain")||!((c=(i=this.shippingData)==null?void 0:i.indices)!=null&&c.length))return"";const e=new Set(["SCFI","CCFI"]),t=new Set(["BDI","BCI","BPI","BSI","BHSI"]),s=this.shippingData.indices.filter(d=>e.has(d.indexId)),a=this.shippingData.indices.filter(d=>t.has(d.indexId)),l=(d,v)=>{if(!v.length)return"";const h=v.map(f=>{const p=f.changePct>=0?"change-positive":"change-negative",b=f.changePct>=0?"▲":"▼",m=this.renderSparkline(f.history.map(w=>w.value),f.history.map(w=>w.date));return`<div class="trade-restriction-card">
          ${f.spikeAlert?`<div class="economic-warning">${r("components.supplyChain.spikeAlert")}</div>`:""}
          <div class="trade-restriction-header">
            <span class="trade-country">${o(f.name)}</span>
            <span class="trade-badge">${f.currentValue.toFixed(0)} ${o(f.unit)}</span>
            <span class="trade-flow-change ${p}">${b} ${Math.abs(f.changePct).toFixed(1)}%</span>
          </div>
          <div class="trade-restriction-body">
            ${m}
          </div>
        </div>`}).join("");return`<div class="trade-sector" style="font-weight:600;margin:8px 0 4px">${o(d)}</div>${h}`};return[l(r("components.supplyChain.containerRates"),s),l(r("components.supplyChain.bulkShipping"),a)].join("")}renderIndicators(){var l,i;if(ae()&&!ie("supplyChain"))return"";if(!((i=(l=this.shippingData)==null?void 0:l.indices)!=null&&i.length))return`<div class="economic-empty">${r("components.supplyChain.noShipping")}</div>`;const e=new Set(["SCFI","CCFI"]),t=new Set(["BDI","BCI","BPI","BSI","BHSI"]),s=this.shippingData.indices.filter(c=>!e.has(c.indexId)&&!t.has(c.indexId));return s.length?`<div class="trade-restrictions-list">${s.map(c=>{const d=c.changePct>=0?"change-positive":"change-negative",v=c.changePct>=0?"▲":"▼",h=this.renderSparkline(c.history.map(p=>p.value),c.history.map(p=>p.date));return`<div class="trade-restriction-card">
          ${c.spikeAlert?`<div class="economic-warning">${r("components.supplyChain.spikeAlert")}</div>`:""}
          <div class="trade-restriction-header">
            <span class="trade-country">${o(c.name)}</span>
            <span class="trade-badge">${c.currentValue.toFixed(0)} ${o(c.unit)}</span>
            <span class="trade-flow-change ${d}">${v} ${Math.abs(c.changePct).toFixed(1)}%</span>
          </div>
          <div class="trade-restriction-body">
            ${h}
          </div>
        </div>`}).join("")}</div>`:`<div class="economic-empty">${r("components.supplyChain.noShipping")}</div>`}renderStress(){var v;if(!this.stressData||!((v=this.stressData.carriers)!=null&&v.length))return'<div class="economic-empty">Shipping stress data unavailable</div>';const{stressScore:e,stressLevel:t,carriers:s}=this.stressData,a=t==="critical"?"#e74c3c":t==="elevated"?"#e67e22":t==="moderate"?"#f1c40f":"#27ae60",l=Math.round(Math.min(100,Math.max(0,e))),c=`<div style="margin-bottom:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
        <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em">Composite Stress Score</span>
        <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 7px;border-radius:3px;background:${t==="critical"?"rgba(231,76,60,0.15)":t==="elevated"?"rgba(230,126,34,0.15)":t==="moderate"?"rgba(241,196,15,0.15)":"rgba(39,174,96,0.15)"};color:${a}">${o(t.toUpperCase())}</span>
      </div>
      <div style="position:relative;height:6px;border-radius:3px;background:rgba(255,255,255,0.08)">
        <div style="position:absolute;left:0;top:0;height:100%;width:${l}%;border-radius:3px;background:${a};transition:width 0.4s"></div>
      </div>
      <div style="text-align:right;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">${e.toFixed(1)}/100</div>
    </div>`,d=s.map(h=>{var y;const f=h.changePct>=0?"change-positive":"change-negative",p=h.changePct>=0?"▲":"▼",b=h.carrierType==="etf"?"ETF":h.carrierType==="index"?"IDX":"CARR",m=((y=h.sparkline)==null?void 0:y.length)>=2?this.renderSparkline(h.sparkline):"";return`<div class="trade-restriction-card">
        <div class="trade-restriction-header">
          <span class="trade-country" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${o(h.symbol)}</span>
          <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));padding:1px 5px;border-radius:2px;background:rgba(255,255,255,0.06);color:var(--text-dim)">${b}</span>
          <span class="trade-badge">${h.price.toFixed(2)}</span>
          <span class="trade-flow-change ${f}">${p} ${Math.abs(h.changePct).toFixed(2)}%</span>
        </div>
        <div class="trade-restriction-body" style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(h.name)}${m}</div>
      </div>`}).join("");return`<div class="trade-restrictions-list">${c}${d}</div>`}renderSparkline(e,t){if(e.length<2)return"";const s=Math.min(...e),l=Math.max(...e)-s||1,i=200,c=40,d=t!=null&&t.length?c+14:c,v=e.map((f,p)=>{const b=p/(e.length-1)*i,m=c-(f-s)/l*(c-4)-2;return`${b.toFixed(1)},${m.toFixed(1)}`}).join(" "),h=t!=null&&t.length?`
      <text x="0" y="${d-1}" fill="var(--text-dim,#888)" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1))" text-anchor="start">${o(t[0].slice(0,7))}</text>
      <text x="${i}" y="${d-1}" fill="var(--text-dim,#888)" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1))" text-anchor="end">${o(t[t.length-1].slice(0,7))}</text>
    `:"";return`<svg width="${i}" height="${d}" viewBox="0 0 ${i} ${d}" style="display:block;margin:4px 0">
      <polyline points="${v}" fill="none" stroke="var(--accent-primary, #4fc3f7)" stroke-width="1.5" />
      ${h}
    </svg>`}renderMinerals(){var a,l;const e=this.mineralProductionData;if((a=e==null?void 0:e.commodities)!=null&&a.length){const i=this.mineralsStage,c=e.commodities.map(v=>{const h=i==="refinery"?v.refinery:v.mine;if(!h)return`<tr>
            <td>${o(v.commodity)}</td>
            <td colspan="2">${o(r("components.supplyChain.stageUnavailable"))}</td>
          </tr>`;const f=h.countries.filter(w=>!w.withheld&&!w.residual&&w.share!=null).slice(0,3).map(w=>`${o(w.country)} ${(w.share??0).toFixed(0)}%`).join(", "),p=h.countries.find(w=>w.residual&&w.share!=null),b=p?` <span class="sc-mineral-residual">+${(p.share??0).toFixed(0)}% ${o(p.country||"other")}</span>`:"",m=h.withheldCount>0?` <span class="sc-risk-moderate">${o(r("components.supplyChain.withheldNote"))}</span>`:"",y=h.year&&h.year!==e.dataYear?` <span class="sc-mineral-vintage">(${o(String(h.year))})</span>`:"";return`<tr>
          <td>${o(v.commodity)}${y}</td>
          <td>${f||"—"}${b}${m}</td>
          <td>${h.hhi.toFixed(0)}</td>
        </tr>`}).join(""),d=e.dataYear?String(e.dataYear):"";return`<div class="trade-tariffs-table">
        <div class="panel-tabs" style="margin-bottom:8px">
          <button class="panel-tab ${i==="mine"?"active":""}" data-mineral-stage="mine">${r("components.supplyChain.mineStage")}</button>
          <button class="panel-tab ${i==="refinery"?"active":""}" data-mineral-stage="refinery">${r("components.supplyChain.refineryStage")}</button>
        </div>
        <p class="sc-mineral-caption">${r("components.supplyChain.productionCaption")}${d?` (${o(d)})`:""}</p>
        <table>
          <thead>
            <tr>
              <th scope="col">${r("components.supplyChain.mineral")}</th>
              <th scope="col">${r("components.supplyChain.topProducers")}</th>
              <th scope="col">HHI</th>
            </tr>
          </thead>
          <tbody>${c}</tbody>
        </table>
      </div>`}if(!this.mineralsData||!((l=this.mineralsData.minerals)!=null&&l.length))return`<div class="economic-empty">${r("components.supplyChain.noMinerals")}</div>`;const t=this.mineralsData.minerals.map(i=>{const c=i.riskRating==="critical"?"sc-risk-critical":i.riskRating==="high"?"sc-risk-high":i.riskRating==="moderate"?"sc-risk-moderate":"sc-risk-low",d=i.topProducers.slice(0,3).map(v=>`${o(v.country)} ${v.sharePct.toFixed(0)}%`).join(", ");return`<tr>
        <td>${o(i.mineral)}</td>
        <td>${d}</td>
        <td>${i.hhi.toFixed(0)}</td>
        <td><span class="${c}">${o(i.riskRating)}</span></td>
      </tr>`}).join(""),s=re(ye())?"":`<p class="sc-mineral-caption">${o(r("components.supplyChain.productionProLocked"))}</p>`;return`<div class="trade-tariffs-table">
      <table>
        <thead>
          <tr>
            <th scope="col">${r("components.supplyChain.mineral")}</th>
            <th scope="col">${r("components.supplyChain.topProducers")}</th>
            <th scope="col">HHI</th>
            <th scope="col">${r("components.supplyChain.risk")}</th>
          </tr>
        </thead>
        <tbody>${t}</tbody>
      </table>
      ${s}
    </div>`}showScenarioSummary(e,t){this.activeScenarioState={scenarioId:e,result:t},this.render()}renderScenarioBanner(){var D,R;const e=this.activeScenarioState;if(!e)return;const{scenarioId:t,result:s}=e;(D=this.content.querySelector(".sc-scenario-banner"))==null||D.remove();const l=s.topImpactCountries.slice(0,5).map($=>{const S=$.partialEvidence===!0,T=S?` <span class="sc-scenario-partial" title="${o(`Only ${$.evaluatedRecords??0} of ${$.requestedRecords??0} requested country/sector records were available; this is a lower bound, not low exposure.`)}">(partial evidence)</span>`:"";return`<div class="sc-scenario-country"><span class="sc-scenario-country-code">${o($.iso2)}</span><div><strong>${S?"≥":""}${$.totalImpact.toFixed(2)} score units</strong><span class="sc-scenario-relative">${$.impactPct.toFixed(0)}% relative ${T}</span></div></div>`}).join(""),i=document.createElement("div");i.className="sc-scenario-banner";const c=((R=be.find($=>$.id===t))==null?void 0:R.name)??t.replace(/-/g," "),d=s.template,v=d?`<dl class="sc-scenario-metrics">
      <div><dt>Closure</dt><dd aria-label="${d.disruptionPct}% closure">${d.disruptionPct}%<small>${s.affectedChokepointIds.length} chokepoint${s.affectedChokepointIds.length===1?"":"s"}</small></dd></div>
      <div><dt>Duration</dt><dd>${d.durationDays} days<small>descriptive only</small></dd></div>
      <div><dt>Cost multiplier</dt><dd>${d.costShockMultiplier.toFixed(2)}×<small>modeled freight cost</small></dd></div>
    </dl>`:"",h=(d==null?void 0:d.disruptionPct)===0?"No physical route disruption is highlighted.":"Map highlights disrupted routes.",f=s.coverage,p=(f==null?void 0:f.records)??[],b=$=>p.filter(S=>S.state===$).length,m=f&&f.status!=="unknown",y=m?`${f.status==="complete"?"Complete within seeded scope":"Partial coverage"}: ${b("evaluated")}/${p.length} country/sector records evaluated`:"Unknown coverage: the country/sector manifest could not be read for this run. No broad exposure conclusion is supported.",w=[[b("missing"),"missing"],[b("malformed"),"malformed"],[b("incomplete_routes"),"incomplete routes"],[b("not_seeded"),"not seeded"],[p.filter($=>$.basis==="flow_weighted").length,"flow-weighted"],[p.filter($=>$.basis==="country_route_fallback").length,"geographic fallback"],[p.filter($=>$.rawImpact===0).length,"valid zero impacts"]],C=m?w.filter(([$])=>$>0).map(([$,S])=>`<span>${$} ${S}</span>`).join(""):"";O(i,_(['<div class="sc-scenario-top"><div class="sc-scenario-heading">','<span class="sc-scenario-section-label">Scenario result</span>',`<h3 class="sc-scenario-name">${o(c)}</h3>`,`<span class="sc-scenario-scope">Country scope: ${o(s.scopedIso2||"All seeded countries")}</span></div>`,'<button class="sc-scenario-dismiss" aria-label="Dismiss scenario">×</button></div>',v,l?`<div class="sc-scenario-countries">${l}</div>`:"",'<div class="sc-scenario-coverage-block"><span class="sc-scenario-section-label">Evidence coverage</span>',`<p class="sc-scenario-coverage">${o(y)}</p>`,C?`<div class="sc-scenario-coverage-counts">${C}</div>`:"","</div>",`<details class="sc-scenario-evidence"><summary>Country/sector evidence <span>${p.length} records</span></summary><ul></ul></details>`,`<div class="sc-scenario-footer"><p class="sc-scenario-hint">Raw impact is a modeled relative score, not currency or lost trade. Duration does not change the score. ${h}</p>`,'<button class="sc-scenario-export">Download scenario JSON</button></div>'].join(""),"scenario result presentation"));const A=i.querySelector("details");A.addEventListener("toggle",()=>{const $=A.querySelector("ul");if(A.open&&!$.childElementCount){const S=p.map(T=>`<li>${o(T.iso2)} / HS ${o(T.hs2)}: ${o(T.state.replace(/_/g," "))}${T.basis?`, ${T.basis==="flow_weighted"?"flow-weighted":"geographic fallback"}`:""}${T.rawImpact!==void 0?`, ${T.rawImpact.toFixed(2)} score units`:""}. Cache date: ${o(T.fetchedAt||"unknown")}; trade observation date: unknown.</li>`).join("");O($,_(S,"scenario evidence requested by user"))}}),i.querySelector(".sc-scenario-export").addEventListener("click",()=>{const $={scenarioId:t,result:s,units:"relative score units, not currency or lost trade",durationBasis:"descriptive only",observationDate:"unknown",source:"HS2 chokepoint exposure model; flow_weighted uses recorded Comtrade shares with modeled routes; country_route_fallback uses geography"},S=URL.createObjectURL(new Blob([JSON.stringify($,null,2)],{type:"application/json"})),T=document.createElement("a");T.href=S,T.download=`scenario-${t}-${s.scopedIso2||"all"}.json`,T.click(),setTimeout(()=>URL.revokeObjectURL(S),1e3)}),i.querySelector(".sc-scenario-dismiss").addEventListener("click",()=>{var $;return($=this.onDismissScenario)==null?void 0:$.call(this)}),this.content.prepend(i)}hideScenarioSummary(){this.activeScenarioState=null,this.render()}setOnDismissScenario(e){this.onDismissScenario=e}setOnScenarioActivate(e){this.onScenarioActivate=e}async runScenario(e,t){var h,f;if(t.dataset.gated==="1"){ze("scenario-engine");return}const s=e.dataset.scenarioId,a=e.querySelector(".sc-scenario-severity");if(!a.value||!a.reportValidity())return;const l=e.querySelector(".sc-scenario-country-select").value,i=Number(a.value);(h=this.scenarioPollController)==null||h.abort();for(const[p,b]of this.scenarioRunState)b==="running"&&this.scenarioRunState.delete(p);const c=new AbortController;this.scenarioPollController=c;const{signal:d}=c;this.setScenarioRunState(s,"running");const v=p=>{this.scenarioPollController===c&&this.setScenarioRunState(s,p)};try{const p=AbortSignal.any([d,AbortSignal.timeout(2e4)]),m=(await as({scenarioId:s,iso2:l,disruptionPct:i},{signal:p})).jobId;let y=null;for(let w=0;w<60;w++){if(d.aborted){v("idle");return}if(!this.content.isConnected)return;w>0&&await new Promise(A=>setTimeout(A,1e3));const C=await is(m,{signal:d});if(C.status==="done"){const A=C.result;if(!A||!Array.isArray(A.topImpactCountries))throw new Error("done without valid result");y=A;break}if(C.status==="failed")throw new Error("Scenario failed")}if(!y)throw new Error("Timeout — scenario worker may be down");if(d.aborted){v("idle");return}if(!this.content.isConnected)return;this.scenarioRunState.delete(s),(f=this.onScenarioActivate)==null||f.call(this,s,y)}catch(p){if(p instanceof Error&&p.name==="AbortError"){v("idle");return}console.error("[scenario] run failed:",p),v("error")}}}const Qa=Object.freeze(Object.defineProperty({__proto__:null,SupplyChainPanel:Os},Symbol.toStringTag,{value:"Module"})),wt={port:"Ports",aviation:"Aviation",hazard:"Hazards",power_energy:"Power / energy",strategic_industry:"Strategic industry",trade:"Trade"},De={available:"Available",partial:"Partial",stale:"Stale",unavailable:"Unavailable"},Us="The active map renderer centers this corridor but cannot draw its boundary or nodes. Use the WebGL 2D map on a supported device to view the overlay.";function Te(n,u){if(!n||!Number.isFinite(Date.parse(n)))return"Time unavailable";const e=new Date(n);return u==="year"?String(e.getUTCFullYear()):u==="month"?e.toLocaleString(void 0,{year:"numeric",month:"short",timeZone:"UTC"}):u==="day"?e.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}):new Date(n).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"UTC",timeZoneName:"short"})}function Gs(n){var t;const u=n.sourceUrl?ht(n.sourceUrl):"",e=u?`<a href="${o(u)}" target="_blank" rel="noopener noreferrer">${o(n.publisher.name)}</a>`:o(n.publisher.name);return`
    <li class="china-corridor-source" data-source-availability="${n.availability}">
      <div class="china-corridor-source__summary">${o(n.summary)}</div>
      <div class="china-corridor-source__meta">
        <span>${e}</span>
        <span>source ${o(n.availability)}</span>
        <span>observed ${o(Te(n.observationTime,n.observationTimePrecision))} (${o(n.observationTimePrecision)})</span>
        <span>released ${o(Te(n.releaseTime,n.releaseTimePrecision))} (${o(n.releaseTimePrecision)})</span>
        <span>retrieved ${o(Te(n.retrievalTime,n.retrievalTimePrecision))} (${o(n.retrievalTimePrecision)})</span>
        <span>transport ${o(n.transportFreshness)}</span>
        <span>content ${o(n.contentFreshness)}</span>
        <span>revision ${o(((t=n.revision)==null?void 0:t.state)??"unknown")}</span>
      </div>
    </li>`}function Hs(n){const u=n.sourceSignals.length>0?`<ul class="china-corridor-sources">${n.sourceSignals.map(Gs).join("")}</ul>`:`<p class="china-corridor-missing">${o(n.reason??"No reviewed source signal is available.")}</p>`;return`
    <article class="china-corridor-condition" data-family="${n.family}" data-availability="${n.availability}">
      <header>
        <h4>${o(wt[n.family])}</h4>
        <span class="china-corridor-status china-corridor-status--${n.availability}">
          ${o(De[n.availability])}
        </span>
      </header>
      <div class="china-corridor-provider">Provider family: ${o(n.providerId)}</div>
      ${u}
    </article>`}class js extends L{constructor(){super({id:"china-corridors",title:"China Logistics Corridors",className:"panel-wide",defaultRowSpan:2,infoTooltip:"Transparent control towers for four reviewed China logistics corridors. Each condition retains its own source, time, availability, and freshness; no aggregate risk score is produced."});g(this,"response",{generatedAt:"",corridors:[]});g(this,"selectedId",null);g(this,"selectedFamilies",new Set(ge));g(this,"onCorridorSelect",null);g(this,"showRendererHint",!1);this.content.addEventListener("click",e=>this.handleClick(e)),this.content.addEventListener("keydown",e=>this.handleKeydown(e))}setOnCorridorSelect(e){this.onCorridorSelect=e}setRendererSupportsOverlay(e){const t=!e;t!==this.showRendererHint&&(this.showRendererHint=t,this.selectedId!==null&&this.render())}async fetchData(){this.hasData()||this.showLoading();const e=await es();return e.corridors.length===0?(this.hasData()||this.showError("China corridor data unavailable",()=>void this.fetchData()),!1):(this.setData(e),!0)}hasData(){return this.response.corridors.length>0}setData(e){var t;this.response=e,this.selectedId??(this.selectedId=((t=e.corridors[0])==null?void 0:t.id)??null),this.render()}hasComtradeBackedSelection(){return ts.some(e=>this.selectedFamilies.has(e))}selectedCorridor(){return this.response.corridors.find(e=>e.id===this.selectedId)??null}selectCorridor(e,t=!1){var l;const s=this.response.corridors.find(i=>i.id===e);if(!s)return;this.selectedId=s.id;const a=(l=this.onCorridorSelect)==null?void 0:l.call(this,s);this.showRendererHint=a===!1,this.render(()=>{var i;t&&((i=this.content.querySelector(`[role="tab"][data-corridor-id="${s.id}"]`))==null||i.focus())})}handleClick(e){const t=e.target,s=t.closest("[data-corridor-id]");if(s!=null&&s.dataset.corridorId){this.selectCorridor(s.dataset.corridorId);return}const a=t.closest("[data-family-filter]"),l=a==null?void 0:a.dataset.familyFilter;!l||!ge.includes(l)||(this.selectedFamilies.has(l)?this.selectedFamilies.delete(l):this.selectedFamilies.add(l),this.render())}handleKeydown(e){const t=e.target.closest('[role="tab"][data-corridor-id]');if(!t||!["ArrowRight","ArrowLeft","Home","End"].includes(e.key))return;const s=this.response.corridors.map(i=>i.id),a=s.indexOf(t.dataset.corridorId);if(a<0)return;e.preventDefault();let l;if(e.key==="Home")l=s[0];else if(e.key==="End")l=s[s.length-1];else{const i=e.key==="ArrowRight"?1:-1;l=s[(a+i+s.length)%s.length]}l&&this.selectCorridor(l,!0)}render(e){const t=this.selectedCorridor();if(!t)return;const s=this.response.corridors.map(i=>{const c=i.conditions.filter(d=>d.availability==="available").length;return`<button id="china-corridor-tab-${i.id}" role="tab" data-corridor-id="${i.id}" aria-selected="${i.id===t.id}" aria-controls="china-corridor-tabpanel" tabindex="${i.id===t.id?"0":"-1"}">
        <strong>${o(i.name)}</strong>
        <small>${c}/${i.conditions.length} families available · ${o(De[i.availability])}</small>
      </button>`}).join(""),a=ge.map(i=>`<button type="button" class="panel-tab china-corridor-filter${this.selectedFamilies.has(i)?" active":""}" data-family-filter="${i}" aria-pressed="${this.selectedFamilies.has(i)}">${o(wt[i])}</button>`).join(""),l=t.conditions.filter(i=>this.selectedFamilies.has(i.family)).map(Hs).join("");this.setSafeContent(k(`
      <div class="china-corridor-panel">
        <div class="china-corridor-compare" role="tablist" aria-label="Compare China logistics corridors">${s}</div>
        <div class="panel-tabs china-corridor-filters" role="group" aria-label="Signal-family filters">${a}</div>
        <section id="china-corridor-tabpanel" role="tabpanel" aria-labelledby="china-corridor-tab-${t.id}">
          <div class="china-corridor-detail__heading">
            <div>
              <h3>${o(t.name)}</h3>
              <p class="china-corridor-description">${o(t.description)}</p>
            </div>
            <span class="china-corridor-status china-corridor-status--${t.availability}">${o(De[t.availability])}</span>
          </div>
          ${this.showRendererHint?`<p class="china-corridor-renderer-hint" role="status">${o(Us)}</p>`:""}
          ${this.hasComtradeBackedSelection()?`<p class="china-corridor-comtrade-scope" data-comtrade-scope="national">${o(cs)}</p>`:""}
          <div class="china-corridor-conditions">${l||'<p class="china-corridor-missing">Select at least one signal family.</p>'}</div>
        </section>
      </div>
    `,"China corridor values are escaped before rendering"),e)}}const Xa=Object.freeze(Object.defineProperty({__proto__:null,ChinaCorridorPanel:js},Symbol.toStringTag,{value:"Module"}));class qs extends L{constructor(){super({id:"china-activity-nowcast",title:"China Activity Nowcast",className:"panel-wide",defaultRowSpan:2,infoTooltip:"A deterministic directional comparison of revision-aware official activity and reviewed proxy families. Missing and stale inputs are excluded; this is not a replacement GDP estimate."});g(this,"response",null)}async fetchData(){this.hasData()||this.showLoading();const e=await ls();return this.setData(e),e.state!=="insufficient_data"}hasData(){return this.response!==null}setData(e){this.response=e,this.render()}render(){this.response!==null&&this.setSafeContent(k(ds(this.response),"China activity nowcast renderer escapes every dynamic value before constructing markup"))}}const ei=Object.freeze(Object.defineProperty({__proto__:null,ChinaActivityNowcastPanel:qs},Symbol.toStringTag,{value:"Module"}));function at(n){return{ports:r("components.investments.sectors.ports"),pipelines:r("components.investments.sectors.pipelines"),energy:r("components.investments.sectors.energy"),datacenters:r("components.investments.sectors.datacenters"),airports:r("components.investments.sectors.airports"),railways:r("components.investments.sectors.railways"),telecoms:r("components.investments.sectors.telecoms"),water:r("components.investments.sectors.water"),logistics:r("components.investments.sectors.logistics"),mining:r("components.investments.sectors.mining"),"real-estate":r("components.investments.sectors.realEstate"),manufacturing:r("components.investments.sectors.manufacturing")}[n]||n}const Vs={operational:"#22c55e","under-construction":"#f59e0b",announced:"#60a5fa",rumoured:"#a78bfa",cancelled:"#ef4444",divested:"#6b7280"},zs={SA:"🇸🇦",UAE:"🇦🇪"};function Ws(n){return n===void 0?r("components.investments.undisclosed"):n>=1e5?`$${(n/1e3).toFixed(0)}B`:n>=1e3?`$${(n/1e3).toFixed(1)}B`:`$${n.toLocaleString()}M`}class Ks extends L{constructor(e){super({id:"gcc-investments",title:r("panels.gccInvestments"),showCount:!0,infoTooltip:r("components.investments.infoTooltip")});g(this,"filters",{investingCountry:"ALL",sector:"ALL",entity:"ALL",status:"ALL",search:""});g(this,"sortKey","assetName");g(this,"sortAsc",!0);g(this,"filtersExpanded",!1);g(this,"onInvestmentClick");this.onInvestmentClick=e,this.setupEventDelegation(),ft(this.content,".fdi-row"),this.render()}getFiltered(){const{investingCountry:e,sector:t,entity:s,status:a,search:l}=this.filters,i=l.toLowerCase();return oe.filter(c=>!(e!=="ALL"&&c.investingCountry!==e||t!=="ALL"&&c.sector!==t||s!=="ALL"&&c.investingEntity!==s||a!=="ALL"&&c.status!==a||i&&!c.assetName.toLowerCase().includes(i)&&!c.targetCountry.toLowerCase().includes(i)&&!c.description.toLowerCase().includes(i)&&!c.investingEntity.toLowerCase().includes(i))).sort((c,d)=>{const v=this.sortKey,h=c[v]??"",f=d[v]??"",p=h<f?-1:h>f?1:0;return this.sortAsc?p:-p})}render(e=!1){const t=this.getFiltered(),s=qe(oe.map(m=>m.investingEntity)),a=qe(oe.map(m=>m.sector)),l=m=>this.sortKey===m?"fdi-sort fdi-sort-active":"fdi-sort",i=(m,y)=>this.sortKey===m?`${y} ${this.sortAsc?"↑":"↓"}`:y,c=this.filters.investingCountry!=="ALL"||this.filters.sector!=="ALL"||this.filters.entity!=="ALL"||this.filters.status!=="ALL",d=t.map(m=>{const y=Vs[m.status]||"#6b7280",w=zs[m.investingCountry]||"",C=at(m.sector),A=m.yearAnnounced??m.yearOperational??"—";return`
        <div class="fdi-row" data-id="${o(m.id)}" role="button" tabindex="0">
          <div class="fdi-row-line1">
            <span class="fdi-flag">${w}</span>
            <span class="fdi-asset-name">${o(m.assetName)}</span>
            <span class="fdi-entity-sub">${o(m.investingEntity)}</span>
            <span class="fdi-usd">${o(Ws(m.investmentUSD))}</span>
          </div>
          <div class="fdi-row-line2">
            <span class="fdi-country">${o(m.targetCountry)}</span>
            <span class="fdi-sector-badge">${o(C)}</span>
            <span class="fdi-status-label"><span class="fdi-status-dot" style="background:${y}"></span>${o(m.status)}</span>
            <span class="fdi-year">${A}</span>
          </div>
        </div>`}).join(""),v=this.content.querySelector(".fdi-list");if(e&&v){O(v,_(d||`<div class="fdi-empty">${r("components.investments.noMatch")}</div>`,"Escaped investment rows")),this.countEl&&(this.countEl.textContent=String(t.length));return}const h=this.filtersExpanded||c?"fdi-filter-toggle fdi-filters-active":"fdi-filter-toggle",f=this.filtersExpanded?"fdi-filters fdi-filters-open":"fdi-filters",p=m=>this.filters.status===m?" selected":"",b=`
      <div class="fdi-search-row">
        <input class="fdi-search" type="text"
          placeholder="${r("components.investments.searchPlaceholder")}"
          value="${o(this.filters.search)}"/>
        <button class="${h}" data-action="toggle-filters" title="Filters" aria-label="Toggle filters" aria-pressed="${this.filtersExpanded}">⚙</button>
      </div>
      <div class="${f}">
        <select class="fdi-filter" data-filter="investingCountry" aria-label="Filter by investing country">
          <option value="ALL">🌐 ${r("components.investments.allCountries")}</option>
          <option value="SA"${this.filters.investingCountry==="SA"?" selected":""}>🇸🇦 ${r("components.investments.saudiArabia")}</option>
          <option value="UAE"${this.filters.investingCountry==="UAE"?" selected":""}>🇦🇪 ${r("components.investments.uae")}</option>
        </select>
        <select class="fdi-filter" data-filter="sector" aria-label="Filter by sector">
          <option value="ALL">${r("components.investments.allSectors")}</option>
          ${a.map(m=>`<option value="${m}"${this.filters.sector===m?" selected":""}>${o(at(m))}</option>`).join("")}
        </select>
        <select class="fdi-filter" data-filter="entity" aria-label="Filter by entity">
          <option value="ALL">${r("components.investments.allEntities")}</option>
          ${s.map(m=>`<option value="${o(m)}"${this.filters.entity===m?" selected":""}>${o(m)}</option>`).join("")}
        </select>
        <select class="fdi-filter" data-filter="status" aria-label="Filter by status">
          <option value="ALL">${r("components.investments.allStatuses")}</option>
          <option value="operational"${p("operational")}>${r("components.investments.operational")}</option>
          <option value="under-construction"${p("under-construction")}>${r("components.investments.underConstruction")}</option>
          <option value="announced"${p("announced")}>${r("components.investments.announced")}</option>
          <option value="rumoured"${p("rumoured")}>${r("components.investments.rumoured")}</option>
          <option value="divested"${p("divested")}>${r("components.investments.divested")}</option>
        </select>
        <div class="fdi-sort-pills">
          <button class="${l("assetName")}" data-sort="assetName">${i("assetName",r("components.investments.asset"))}</button>
          <button class="${l("investmentUSD")}" data-sort="investmentUSD">${i("investmentUSD",r("components.investments.investment"))}</button>
          <button class="${l("targetCountry")}" data-sort="targetCountry">${i("targetCountry",r("components.investments.country"))}</button>
          <button class="${l("yearAnnounced")}" data-sort="yearAnnounced">${i("yearAnnounced",r("components.investments.year"))}</button>
        </div>
      </div>
      <div class="fdi-list">
        ${d||`<div class="fdi-empty">${r("components.investments.noMatch")}</div>`}
      </div>`;this.setTrustedContent(_(b,"Escaped investment rows and filters")),this.countEl&&(this.countEl.textContent=String(t.length))}setupEventDelegation(){this.content.addEventListener("input",e=>{const t=e.target;t.classList.contains("fdi-search")&&(this.filters.search=t.value,this.render(!0))}),this.content.addEventListener("change",e=>{const t=e.target.closest(".fdi-filter");if(t){const s=t.dataset.filter;this.filters[s]=t.value,this.render()}}),this.content.addEventListener("click",e=>{const t=e.target;if(t.closest('[data-action="toggle-filters"]')){this.filtersExpanded=!this.filtersExpanded,this.render();return}const a=t.closest(".fdi-sort");if(a){const i=a.dataset.sort;this.sortKey===i?this.sortAsc=!this.sortAsc:(this.sortKey=i,this.sortAsc=!0),this.render();return}const l=t.closest(".fdi-row");if(l){const i=oe.find(c=>c.id===l.dataset.id);i&&this.onInvestmentClick&&this.onInvestmentClick(i)}})}}const ti=Object.freeze(Object.defineProperty({__proto__:null,InvestmentsPanel:Ks},Symbol.toStringTag,{value:"Module"})),it=he(()=>new us(me(),{fetch:ss}));function Re(n,u){if(u.length===0)return"";const e=u.map(t=>`
    <div class="market-item">
      <div class="market-info">
        <span class="market-name">${t.flag} ${o(t.name)}</span>
        <span class="market-symbol">${o(t.country||t.symbol)}</span>
      </div>
      <div class="market-data">
        ${Ht(t.sparkline,t.change)}
        <span class="market-price">${Ot(t.price)}</span>
        <span class="market-change ${Ut(t.change)}">${Gt(t.change)}</span>
      </div>
    </div>
  `).join("");return`<div class="gulf-section"><div class="gulf-section-title">${o(n)}</div>${e}</div>`}class Ys extends L{constructor(){super({id:"gulf-economies",title:r("panels.gulfEconomies"),infoTooltip:r("components.gulfEconomies.infoTooltip")})}async fetchData(){var u,e,t,s;try{const a=j("gulfQuotes");if((u=a==null?void 0:a.quotes)!=null&&u.length){if(!((e=this.element)!=null&&e.isConnected))return;this.renderGulf(a),it().listGulfQuotes({}).then(i=>{var c,d;!((c=this.element)!=null&&c.isConnected)||!((d=i.quotes)!=null&&d.length)||this.renderGulf(i)}).catch(()=>{});return}const l=await it().listGulfQuotes({});if(!((t=this.element)!=null&&t.isConnected))return;this.renderGulf(l)}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError(r("common.failedMarketData"),()=>void this.fetchData())}}renderGulf(u){var l;if(!((l=u.quotes)!=null&&l.length)){const i=u.rateLimited?r("common.rateLimitedMarket"):r("common.failedMarketData");this.showError(i,()=>void this.fetchData());return}const e=u.quotes.filter(i=>i.type==="index"),t=u.quotes.filter(i=>i.type==="currency"),s=u.quotes.filter(i=>i.type==="oil"),a=Re(r("panels.gulfIndices"),e)+Re(r("panels.gulfCurrencies"),t)+Re(r("panels.gulfOil"),s);this.setSafeContent(k(a,"legacy Panel.setContent() migration"))}}const si=Object.freeze(Object.defineProperty({__proto__:null,GulfEconomiesPanel:Ys},Symbol.toStringTag,{value:"Module"})),nt=he(()=>new Me(me(),{fetch:Ne}));class Zs extends L{constructor(){super({id:"grocery-basket",title:r("panels.groceryBasket"),infoTooltip:r("components.groceryBasket.infoTooltip")})}async fetchData(){var u,e,t,s;try{const a=j("groceryBasket");if((u=a==null?void 0:a.countries)!=null&&u.length){if(!((e=this.element)!=null&&e.isConnected))return;this.renderBasket(a),nt().listGroceryBasketPrices({}).then(i=>{var c,d;!((c=this.element)!=null&&c.isConnected)||!((d=i.countries)!=null&&d.length)||this.renderBasket(i)}).catch(()=>{});return}const l=await nt().listGroceryBasketPrices({});if(!((t=this.element)!=null&&t.isConnected))return;this.renderBasket(l)}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError(r("common.failedMarketData"),()=>void this.fetchData())}}renderBasket(u){var v,h,f;if(!((v=u.countries)!=null&&v.length)){this.showError(r("common.failedMarketData"),()=>void this.fetchData());return}const e=u.countries,t=((f=(h=e[0])==null?void 0:h.items)==null?void 0:f.map(p=>p.itemId))??[],s=e.map(p=>`<th scope="col" class="gb-country-header" title="${o(p.name)}">${o(p.flag)}<br><span class="gb-country-name">${o(p.name)}</span></th>`).join(""),a=t.map(p=>{var D,R;const b=(R=(D=e[0])==null?void 0:D.items)==null?void 0:R.find($=>$.itemId===p),m=e.map($=>{var S,T;return(T=(S=$.items)==null?void 0:S.find(U=>U.itemId===p))==null?void 0:T.usdPrice}).filter($=>$!=null&&$>0),y=m.length>1?Math.min(...m):null,w=m.length>1?Math.max(...m):null,C=.001,A=e.map($=>{var P;const S=(P=$.items)==null?void 0:P.find(G=>G.itemId===p);if(!(S!=null&&S.available)||!S.usdPrice||!S.localPrice)return'<td class="gb-cell gb-na">—</td>';const T=w!==null&&Math.abs(S.usdPrice-w)<C;return`<td class="gb-cell ${y!==null&&Math.abs(S.usdPrice-y)<C?"gb-cheapest":T?"gb-priciest":""}">$${S.usdPrice.toFixed(2)}<span class="gb-local">${S.localPrice.toFixed(2)} ${o($.currency)}</span></td>`}).join("");return`<tr><td class="gb-item-name">${o((b==null?void 0:b.itemName)??p)}<span class="gb-unit">${o((b==null?void 0:b.unit)??"")}</span></td>${A}</tr>`}).join(""),l=`<tr class="gb-total-row"><td class="gb-item-name"><strong>Total</strong></td>${e.map(p=>{const b=p.code===u.cheapestCountry,m=p.code===u.mostExpensiveCountry,y=b?"gb-cheapest":m?"gb-priciest":"";let w="";if(p.wowPct!=null){const C=p.wowPct>=0?"▲":"▼";w=`<span class="gb-wow ${p.wowPct>=0?"bm-wow-up":"bm-wow-down"}">${C}${Math.abs(p.wowPct).toFixed(1)}%</span>`}return`<td class="gb-cell gb-total ${y}"><strong>$${p.totalUsd.toFixed(2)}</strong>${w}</td>`}).join("")}</tr>`;let i="";if(u.wowAvailable&&u.wowAvgPct!==void 0){const p=u.wowAvgPct,b=p>=0?"▲":"▼";i=`<div class="bm-wow-summary">Basket avg: <span class="${p>=0?"bm-wow-up":"bm-wow-down"}">${b}${Math.abs(p).toFixed(1)}% WoW</span></div>`}const c=u.fetchedAt?new Date(u.fetchedAt).toLocaleDateString():"",d=`
      <div class="gb-wrapper">
        ${i}
        <div class="gb-scroll">
          <table class="gb-table">
            <thead><tr><th scope="col" class="gb-item-col">${r("panels.groceryItem")}</th>${s}</tr></thead>
            <tbody>${a}${l}</tbody>
          </table>
        </div>
        ${c?`<div class="gb-updated">${r("components.status.updatedAt",{time:c})}</div>`:""}
      </div>
    `;this.setSafeContent(k(d,"legacy Panel.setContent() migration"))}}const ai=Object.freeze(Object.defineProperty({__proto__:null,GroceryBasketPanel:Zs},Symbol.toStringTag,{value:"Module"})),rt=he(()=>new Me(me(),{fetch:Ne}));class Js extends L{constructor(){super({id:"bigmac",title:r("panels.bigmac"),infoTooltip:r("components.bigmac.infoTooltip")})}async fetchData(){var u,e,t,s;try{const a=j("bigmac");if((u=a==null?void 0:a.countries)!=null&&u.length){if(!((e=this.element)!=null&&e.isConnected))return;this.renderIndex(a),rt().listBigMacPrices({}).then(i=>{var c,d;!((c=this.element)!=null&&c.isConnected)||!((d=i.countries)!=null&&d.length)||this.renderIndex(i)}).catch(()=>{});return}const l=await rt().listBigMacPrices({});if(!((t=this.element)!=null&&t.isConnected))return;this.renderIndex(l)}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError(r("common.failedMarketData"),()=>void this.fetchData())}}renderIndex(u){var h,f,p;if(!((h=u.countries)!=null&&h.length)){this.showError(r("common.failedMarketData"),()=>void this.fetchData());return}const e=[...u.countries].filter(b=>b.usdPrice!=null&&b.usdPrice>0).sort((b,m)=>m.usdPrice-b.usdPrice),t=(f=e[0])==null?void 0:f.code,s=(p=e[e.length-1])==null?void 0:p.code,a=u.wowAvailable&&u.wowAvgPct!==void 0,l=a?`<th scope="col" class="gb-cell">${r("panels.bigmacWow")}</th>`:"",i=e.map(b=>{const m=b.code===s?"gb-cheapest":b.code===t?"gb-priciest":"";let y="";if(a){const w=b.wowPct??null;if(w==null)y='<td class="gb-cell gb-na">—</td>';else{const C=w>=0?"▲":"▼";y=`<td class="gb-cell ${w>=0?"bm-wow-up":"bm-wow-down"}">${C}${Math.abs(w).toFixed(1)}%</td>`}}return`<tr>
        <td class="gb-item-name">${o(b.flag)} ${o(b.name)}</td>
        <td class="gb-cell ${m}">$${b.usdPrice.toFixed(2)}</td>
        ${y}
      </tr>`}).join("");let c="";if(a){const b=u.wowAvgPct,m=b>=0?"▲":"▼";c=`<div class="bm-wow-summary">Global avg: <span class="${b>=0?"bm-wow-up":"bm-wow-down"}">${m}${Math.abs(b).toFixed(1)}% ${r("panels.bigmacWow")}</span></div>`}const d=u.fetchedAt?new Date(u.fetchedAt).toLocaleDateString():"",v=`
      <div class="gb-wrapper">
        ${c}
        <div class="gb-scroll">
          <table class="gb-table">
            <thead><tr>
              <th scope="col" class="gb-item-col">${r("panels.bigmacCountry")}</th>
              <th scope="col" class="gb-cell">USD</th>
              ${l}
            </tr></thead>
            <tbody>${i}</tbody>
          </table>
        </div>
        ${d?`<div class="gb-updated">${r("components.status.updatedAt",{time:d})}</div>`:""}
      </div>
    `;this.setSafeContent(k(v,"legacy Panel.setContent() migration"))}}const ii=Object.freeze(Object.defineProperty({__proto__:null,BigMacPanel:Js},Symbol.toStringTag,{value:"Module"})),ot=he(()=>new Me(me(),{fetch:Ne})),Ie=480,Fe=140,ne=36,St=12,Ct=8,At=20,ct=Ie-ne-St,lt=Fe-Ct-At,Le=[{key:"ffpi",color:"#f5a623",label:"Food"},{key:"cereals",color:"#7ed321",label:"Cereals"},{key:"meat",color:"#e86c6c",label:"Meat"},{key:"dairy",color:"#74c8e8",label:"Dairy"},{key:"oils",color:"#b57ce8",label:"Oils"},{key:"sugar",color:"#f0c36a",label:"Sugar"}];function Tt(n,u){return u<=1?ne+ct/2:ne+n/(u-1)*ct}function Rt(n,u,e){const t=e-u||1;return Ct+lt-(n-u)/t*lt}function Qs(n,u,e,t){return n.map((a,l)=>{const i=a[u];return!Number.isFinite(i)||i<=0?null:`${Tt(l,n.length).toFixed(1)},${Rt(i,e,t).toFixed(1)}`}).filter(Boolean).join(" ")}function Xs(n){if(!n.length)return"";const u=[];for(const i of n)for(const c of Le){const d=i[c.key];Number.isFinite(d)&&d>0&&u.push(d)}const e=Math.floor(Math.min(...u)*.96),t=Math.ceil(Math.max(...u)*1.02),s=[0,1,2,3].map(i=>{const c=e+(t-e)/3*i,d=Rt(c,e,t);return`
      <line x1="${ne}" y1="${d.toFixed(1)}" x2="${Ie-St}" y2="${d.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${(ne-3).toFixed(0)}" y="${d.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${c.toFixed(0)}</text>`}).join(""),a=n.map((i,c)=>{if(c%3!==0&&c!==n.length-1)return"";const d=Tt(c,n.length),v=i.date;return`<text x="${d.toFixed(1)}" y="${Fe-At+12}" text-anchor="middle" fill="rgba(255,255,255,0.4)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))">${o(v)}</text>`}).join(""),l=Le.map(i=>{const c=Qs(n,i.key,e,t);return c?`<polyline points="${c}" fill="none" stroke="${i.color}" stroke-width="${i.key==="ffpi"?2:1.2}" opacity="${i.key==="ffpi"?1:.7}"/>`:""}).join("");return`<svg viewBox="0 0 ${Ie} ${Fe}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="FAO food price index history by commodity group" style="width:100%;height:auto;display:block">${s}${a}${l}</svg>`}function ea(){return Le.map(n=>`<span class="fao-legend-item"><span class="fao-legend-dot" style="background:${n.color}"></span>${o(r(`components.faoFoodPriceIndex.${n.key}`))}</span>`).join("")}class ta extends L{constructor(){super({id:"fao-food-price-index",title:r("panels.faoFoodPriceIndex"),infoTooltip:r("components.faoFoodPriceIndex.infoTooltip")})}async fetchData(){var u,e,t,s;try{const a=j("faoFoodPriceIndex");if((u=a==null?void 0:a.points)!=null&&u.length){if(!((e=this.element)!=null&&e.isConnected))return;this.renderChart(a),ot().getFaoFoodPriceIndex({}).then(i=>{var c,d;!((c=this.element)!=null&&c.isConnected)||!((d=i.points)!=null&&d.length)||this.renderChart(i)}).catch(()=>{});return}const l=await ot().getFaoFoodPriceIndex({});if(!((t=this.element)!=null&&t.isConnected))return;this.renderChart(l)}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError(r("common.failedMarketData"),()=>void this.fetchData())}}renderChart(u){var h;if(!((h=u.points)!=null&&h.length)){this.showError(r("common.failedMarketData"),()=>void this.fetchData());return}const e=u.momPct>=0?"+":"",t=u.yoyPct>=0?"+":"",s=u.momPct>=0?"fao-up":"fao-down",a=u.yoyPct>=0?"fao-up":"fao-down",l=u.points[u.points.length-1],i=`
      <div class="fao-headline">
        <div class="fao-headline-primary">
          <span class="fao-index-value">${u.currentFfpi.toFixed(1)}</span>
          <span class="fao-index-label">${o(r("components.faoFoodPriceIndex.indexLabel"))}</span>
        </div>
        <div class="fao-headline-changes">
          <span class="fao-change ${s}">${e}${u.momPct.toFixed(1)}% ${o(r("components.faoFoodPriceIndex.mom"))}</span>
          <span class="fao-change ${a}">${t}${u.yoyPct.toFixed(1)}% ${o(r("components.faoFoodPriceIndex.yoy"))}</span>
        </div>
        <div class="fao-as-of">${o(r("components.faoFoodPriceIndex.asOf"))} ${o((l==null?void 0:l.date)??"")}</div>
      </div>`,c=Xs(u.points),d=`<div class="fao-legend">${ea()}</div>`,v=`<div class="fao-base-note">${o(r("components.faoFoodPriceIndex.baseNote"))}</div>`;this.setSafeContent(k(`<div class="fao-food-price-index-panel">${i}${c}${d}${v}</div>`,"legacy Panel.setContent() migration"))}}const ni=Object.freeze(Object.defineProperty({__proto__:null,FaoFoodPriceIndexPanel:ta},Symbol.toStringTag,{value:"Module"})),sa={AFG:"🇦🇫",ALB:"🇦🇱",DZA:"🇩🇿",AGO:"🇦🇴",ARG:"🇦🇷",ARM:"🇦🇲",AUS:"🇦🇺",AUT:"🇦🇹",AZE:"🇦🇿",BHS:"🇧🇸",BHR:"🇧🇭",BGD:"🇧🇩",BLR:"🇧🇾",BEL:"🇧🇪",BLZ:"🇧🇿",BEN:"🇧🇯",BTN:"🇧🇹",BOL:"🇧🇴",BIH:"🇧🇦",BWA:"🇧🇼",BRA:"🇧🇷",BRN:"🇧🇳",BGR:"🇧🇬",BFA:"🇧🇫",BDI:"🇧🇮",CPV:"🇨🇻",KHM:"🇰🇭",CMR:"🇨🇲",CAN:"🇨🇦",CAF:"🇨🇫",TCD:"🇹🇩",CHL:"🇨🇱",CHN:"🇨🇳",COL:"🇨🇴",COM:"🇰🇲",COD:"🇨🇩",COG:"🇨🇬",CRI:"🇨🇷",CIV:"🇨🇮",HRV:"🇭🇷",CYP:"🇨🇾",CZE:"🇨🇿",DNK:"🇩🇰",DJI:"🇩🇯",DOM:"🇩🇴",ECU:"🇪🇨",EGY:"🇪🇬",SLV:"🇸🇻",GNQ:"🇬🇶",ERI:"🇪🇷",EST:"🇪🇪",SWZ:"🇸🇿",ETH:"🇪🇹",FJI:"🇫🇯",FIN:"🇫🇮",FRA:"🇫🇷",GAB:"🇬🇦",GMB:"🇬🇲",GEO:"🇬🇪",DEU:"🇩🇪",GHA:"🇬🇭",GRC:"🇬🇷",GTM:"🇬🇹",GIN:"🇬🇳",GNB:"🇬🇼",GUY:"🇬🇾",HTI:"🇭🇹",HND:"🇭🇳",HKG:"🇭🇰",HUN:"🇭🇺",ISL:"🇮🇸",IND:"🇮🇳",IDN:"🇮🇩",IRN:"🇮🇷",IRQ:"🇮🇶",IRL:"🇮🇪",ISR:"🇮🇱",ITA:"🇮🇹",JAM:"🇯🇲",JPN:"🇯🇵",JOR:"🇯🇴",KAZ:"🇰🇿",KEN:"🇰🇪",KOR:"🇰🇷",KWT:"🇰🇼",KGZ:"🇰🇬",LAO:"🇱🇦",LVA:"🇱🇻",LBN:"🇱🇧",LSO:"🇱🇸",LBR:"🇱🇷",LBY:"🇱🇾",LTU:"🇱🇹",LUX:"🇱🇺",MAC:"🇲🇴",MDG:"🇲🇬",MWI:"🇲🇼",MYS:"🇲🇾",MDV:"🇲🇻",MLI:"🇲🇱",MLT:"🇲🇹",MRT:"🇲🇷",MUS:"🇲🇺",MEX:"🇲🇽",MDA:"🇲🇩",MNG:"🇲🇳",MNE:"🇲🇪",MAR:"🇲🇦",MOZ:"🇲🇿",MMR:"🇲🇲",NAM:"🇳🇦",NPL:"🇳🇵",NLD:"🇳🇱",NZL:"🇳🇿",NIC:"🇳🇮",NER:"🇳🇪",NGA:"🇳🇬",MKD:"🇲🇰",NOR:"🇳🇴",OMN:"🇴🇲",PAK:"🇵🇰",PAN:"🇵🇦",PNG:"🇵🇬",PRY:"🇵🇾",PER:"🇵🇪",PHL:"🇵🇭",POL:"🇵🇱",PRT:"🇵🇹",QAT:"🇶🇦",ROU:"🇷🇴",RUS:"🇷🇺",RWA:"🇷🇼",SAU:"🇸🇦",SEN:"🇸🇳",SRB:"🇷🇸",SLE:"🇸🇱",SGP:"🇸🇬",SVK:"🇸🇰",SVN:"🇸🇮",SOM:"🇸🇴",ZAF:"🇿🇦",SSD:"🇸🇸",ESP:"🇪🇸",LKA:"🇱🇰",SDN:"🇸🇩",SUR:"🇸🇷",SWE:"🇸🇪",CHE:"🇨🇭",TWN:"🇹🇼",TJK:"🇹🇯",TZA:"🇹🇿",THA:"🇹🇭",TLS:"🇹🇱",TGO:"🇹🇬",TTO:"🇹🇹",TUN:"🇹🇳",TUR:"🇹🇷",TKM:"🇹🇲",UGA:"🇺🇬",UKR:"🇺🇦",ARE:"🇦🇪",GBR:"🇬🇧",USA:"🇺🇸",URY:"🇺🇾",UZB:"🇺🇿",VEN:"🇻🇪",VNM:"🇻🇳",YEM:"🇾🇪",ZMB:"🇿🇲",ZWE:"🇿🇼"},aa={AFG:"Afghanistan",ALB:"Albania",DZA:"Algeria",AGO:"Angola",ARG:"Argentina",ARM:"Armenia",AUS:"Australia",AUT:"Austria",AZE:"Azerbaijan",BHS:"Bahamas",BHR:"Bahrain",BGD:"Bangladesh",BLR:"Belarus",BEL:"Belgium",BLZ:"Belize",BEN:"Benin",BTN:"Bhutan",BOL:"Bolivia",BIH:"Bosnia & Herzegovina",BWA:"Botswana",BRA:"Brazil",BRN:"Brunei",BGR:"Bulgaria",BFA:"Burkina Faso",BDI:"Burundi",CPV:"Cabo Verde",KHM:"Cambodia",CMR:"Cameroon",CAN:"Canada",CAF:"Central African Rep.",TCD:"Chad",CHL:"Chile",CHN:"China",COL:"Colombia",COM:"Comoros",COD:"Dem. Rep. Congo",COG:"Congo",CRI:"Costa Rica",CIV:"Cote d'Ivoire",HRV:"Croatia",CYP:"Cyprus",CZE:"Czech Republic",DNK:"Denmark",DJI:"Djibouti",DOM:"Dominican Rep.",ECU:"Ecuador",EGY:"Egypt",SLV:"El Salvador",GNQ:"Equatorial Guinea",ERI:"Eritrea",EST:"Estonia",SWZ:"Eswatini",ETH:"Ethiopia",FJI:"Fiji",FIN:"Finland",FRA:"France",GAB:"Gabon",GMB:"Gambia",GEO:"Georgia",DEU:"Germany",GHA:"Ghana",GRC:"Greece",GTM:"Guatemala",GIN:"Guinea",GNB:"Guinea-Bissau",GUY:"Guyana",HTI:"Haiti",HND:"Honduras",HKG:"Hong Kong SAR",HUN:"Hungary",ISL:"Iceland",IND:"India",IDN:"Indonesia",IRN:"Iran",IRQ:"Iraq",IRL:"Ireland",ISR:"Israel",ITA:"Italy",JAM:"Jamaica",JPN:"Japan",JOR:"Jordan",KAZ:"Kazakhstan",KEN:"Kenya",KOR:"Korea (South)",KWT:"Kuwait",KGZ:"Kyrgyzstan",LAO:"Laos",LVA:"Latvia",LBN:"Lebanon",LSO:"Lesotho",LBR:"Liberia",LBY:"Libya",LTU:"Lithuania",LUX:"Luxembourg",MAC:"Macao SAR",MDG:"Madagascar",MWI:"Malawi",MYS:"Malaysia",MDV:"Maldives",MLI:"Mali",MLT:"Malta",MRT:"Mauritania",MUS:"Mauritius",MEX:"Mexico",MDA:"Moldova",MNG:"Mongolia",MNE:"Montenegro",MAR:"Morocco",MOZ:"Mozambique",MMR:"Myanmar",NAM:"Namibia",NPL:"Nepal",NLD:"Netherlands",NZL:"New Zealand",NIC:"Nicaragua",NER:"Niger",NGA:"Nigeria",MKD:"North Macedonia",NOR:"Norway",OMN:"Oman",PAK:"Pakistan",PAN:"Panama",PNG:"Papua New Guinea",PRY:"Paraguay",PER:"Peru",PHL:"Philippines",POL:"Poland",PRT:"Portugal",QAT:"Qatar",ROU:"Romania",RUS:"Russia",RWA:"Rwanda",SAU:"Saudi Arabia",SEN:"Senegal",SRB:"Serbia",SLE:"Sierra Leone",SGP:"Singapore",SVK:"Slovakia",SVN:"Slovenia",SOM:"Somalia",ZAF:"South Africa",SSD:"South Sudan",ESP:"Spain",LKA:"Sri Lanka",SDN:"Sudan",SUR:"Suriname",SWE:"Sweden",CHE:"Switzerland",TWN:"Taiwan",TJK:"Tajikistan",TZA:"Tanzania",THA:"Thailand",TLS:"Timor-Leste",TGO:"Togo",TTO:"Trinidad & Tobago",TUN:"Tunisia",TUR:"Turkey",TKM:"Turkmenistan",UGA:"Uganda",UKR:"Ukraine",ARE:"United Arab Emirates",GBR:"United Kingdom",USA:"United States",URY:"Uruguay",UZB:"Uzbekistan",VEN:"Venezuela",VNM:"Vietnam",YEM:"Yemen",ZMB:"Zambia",ZWE:"Zimbabwe"};function ia(n){return sa[n]??"🌐"}function dt(n){return aa[n]??n}function ce(n){return!Number.isFinite(n)||n<=0?"$0":n>=1e12?`$${(n/1e12).toFixed(1)}T`:n>=1e9?`$${(n/1e9).toFixed(1)}B`:n>=1e6?`$${(n/1e6).toFixed(1)}M`:`$${Math.round(n).toLocaleString()}`}function se(n){if(!n.perSecondRate||!n.baselineTs)return n.debtUsd??0;const u=(Date.now()-Number(n.baselineTs))/1e3;return(n.debtUsd??0)+n.perSecondRate*u}function na(n,u){const e=[...n];return u==="total"?e.sort((t,s)=>se(s)-se(t)):u==="gdp-ratio"?e.sort((t,s)=>(s.debtToGdp??0)-(t.debtToGdp??0)):u==="growth"&&e.sort((t,s)=>(s.annualGrowth??0)-(t.annualGrowth??0)),e}const te=20,pe=class pe extends L{constructor(){super({id:"national-debt",title:"National Debt Clock",showCount:!0,infoTooltip:"Live national debt estimates for 150+ countries. Data anchored at 2024-01-01 and accruing using IMF deficit projections."});g(this,"entries",[]);g(this,"filteredEntries",[]);g(this,"sortMode","total");g(this,"searchQuery","");g(this,"loading",!1);g(this,"lastFetch",0);g(this,"visibleCount",te);g(this,"tickerInterval",null);g(this,"tickerElements",new Map);g(this,"lastTickerValues",new Map);g(this,"connectRefreshQueued",!1);g(this,"connectionObserver",null);g(this,"connectRetryFrames",0);g(this,"REFRESH_INTERVAL",360*60*1e3);this.content.addEventListener("click",e=>{const t=e.target,s=t.closest("[data-sort]");if(s!=null&&s.dataset.sort){this.sortMode=s.dataset.sort,this.visibleCount=te,this.applyFilters(),this.render();return}t.closest(".debt-load-more")&&(this.visibleCount+=te,this.render())}),this.content.addEventListener("input",e=>{const t=e.target;t.classList.contains("debt-search")&&(this.searchQuery=t.value,this.visibleCount=te,this.applyFilters(),this.render())})}async refresh(){var e,t,s;if(!this.loading&&!(Date.now()-this.lastFetch<this.REFRESH_INTERVAL&&this.entries.length>0)){if(!((e=this.element)!=null&&e.isConnected)){this.queueRefreshWhenConnected();return}this.loading=!0,this.showLoadingState();try{const a=await Ft();if(!((t=this.element)!=null&&t.isConnected)){this.queueRefreshWhenConnected();return}this.entries=a.entries??[],this.lastFetch=Date.now(),this.applyFilters(),this.setCount(this.filteredEntries.length),this.render()}catch(a){if(!((s=this.element)!=null&&s.isConnected))return;console.error("[NationalDebtPanel] Error fetching data:",a),this.showError("Failed to load national debt data")}finally{this.loading=!1}}}queueRefreshWhenConnected(){if(this.connectRefreshQueued)return;this.connectRefreshQueued=!0;const e=()=>{var s,a;return(s=this.element)!=null&&s.isConnected?(this.connectRefreshQueued=!1,this.connectRetryFrames=0,(a=this.connectionObserver)==null||a.disconnect(),this.connectionObserver=null,this.refresh(),!0):!1};if(e())return;if(typeof MutationObserver<"u"){const s=document.body??document.documentElement;if(s){const a=new MutationObserver(()=>{e()});a.observe(s,{childList:!0,subtree:!0}),this.connectionObserver=a;return}}(typeof requestAnimationFrame=="function"?requestAnimationFrame:s=>(globalThis.setTimeout(()=>s(Date.now()),0),0))(()=>{var s;if(this.connectRefreshQueued=!1,(s=this.element)!=null&&s.isConnected){this.connectRetryFrames=0,this.refresh();return}if(this.connectRetryFrames>=pe.MAX_CONNECT_RETRY_FRAMES){this.connectRetryFrames=0;return}this.connectRetryFrames+=1,this.queueRefreshWhenConnected()})}showLoadingState(){this.setSafeContent(k(`
      <div style="display:flex;align-items:center;justify-content:center;height:80px;color:var(--text-dim);font-size:calc(13px * var(--wm-panel-effective-scale, 1));">
        Loading debt data from IMF...
      </div>
    `,"legacy Panel.setContent() migration"))}applyFilters(){const e=this.searchQuery.toLowerCase().trim(),t=e?this.entries.filter(s=>s.iso3.toLowerCase().includes(e)||dt(s.iso3).toLowerCase().includes(e)):this.entries;this.filteredEntries=na(t,this.sortMode)}get deficitCount(){return this.entries.filter(e=>e.perSecondRate>0).length}get surplusCount(){return this.entries.filter(e=>e.perSecondRate===0).length}getGlobalDebt(){return this.entries.reduce((e,t)=>e+se(t),0)}getSourceLabel(){var t;let e="";for(const s of this.entries){const a=(t=s.source)==null?void 0:t.trim();a&&a.length>e.length&&(e=a)}return e||"IMF WEO"}render(){if(this.entries.length===0){this.stopTicker(),this.showError("No data available");return}const e=`
      <div class="debt-panel-container">
        <div class="debt-summary">
          <div class="debt-summary-card debt-summary-card-deficit debt-summary-card-world">
            <span class="debt-summary-label">World Debt</span>
            <span class="debt-summary-value debt-global-ticker">${o(ce(this.getGlobalDebt()))}</span>
          </div>
          <div class="debt-summary-card debt-summary-card-warning">
            <span class="debt-summary-label">In Deficit</span>
            <span class="debt-summary-value">${this.deficitCount}</span>
          </div>
          <div class="debt-summary-card debt-summary-card-surplus">
            <span class="debt-summary-label">Running Surplus</span>
            <span class="debt-summary-value">${this.surplusCount}</span>
          </div>
        </div>
        <div class="debt-controls">
          <div class="debt-sort-tabs">
            <button class="debt-tab${this.sortMode==="total"?" active":""}" data-sort="total">Total Debt</button>
            <button class="debt-tab${this.sortMode==="gdp-ratio"?" active":""}" data-sort="gdp-ratio">Debt/GDP</button>
            <button class="debt-tab${this.sortMode==="growth"?" active":""}" data-sort="growth">1Y Growth</button>
          </div>
          <input class="debt-search" type="text" placeholder="Search country..." value="${o(this.searchQuery)}">
        </div>
        <div class="debt-list">
          ${this.filteredEntries.slice(0,this.visibleCount).map((t,s)=>this.renderRow(t,s+1)).join("")}
        </div>
        ${this.visibleCount<this.filteredEntries.length?`
        <button class="debt-load-more">
          Load ${Math.min(te,this.filteredEntries.length-this.visibleCount)} more
          <span class="debt-load-more-count">(${this.filteredEntries.length-this.visibleCount} remaining)</span>
        </button>`:""}
        <div class="debt-footer">
          <span class="debt-source">Source: ${o(this.getSourceLabel())}</span>
          <span class="debt-updated">Updated: ${new Date(this.lastFetch).toLocaleDateString()}</span>
        </div>
      </div>
    `;this.setSafeContent(k(e,"legacy Panel.setContent() migration"),()=>this.startTicker())}renderRow(e,t){const s=se(e),a=o(dt(e.iso3)),l=ia(e.iso3),i=ce(s),c=Number.isFinite(e.debtToGdp)&&e.debtToGdp>0?`${e.debtToGdp.toFixed(1)}%`:"—",d=Number.isFinite(e.annualGrowth)&&e.annualGrowth!==0?`${e.annualGrowth>0?"+":""}${e.annualGrowth.toFixed(1)}%`:"—",v=e.annualGrowth>5?"debt-growth-high":e.annualGrowth>0?"debt-growth-mid":"";return`
      <div class="debt-row" data-iso3="${o(e.iso3)}">
        <div class="debt-rank">${t}</div>
        <div class="debt-flag">${l}</div>
        <div class="debt-info">
          <div class="debt-name">${a}</div>
          <div class="debt-meta">
            <span class="debt-ratio">${c} of GDP</span>
            <span class="debt-growth ${v}">${d} YoY</span>
          </div>
        </div>
        <div class="debt-ticker" data-iso3="${o(e.iso3)}">${o(i)}</div>
      </div>
    `}startTicker(){if(this.stopTicker(),this.filteredEntries.length===0)return;this.tickerElements.clear(),this.lastTickerValues.clear();const e=this.content.querySelector(".debt-global-ticker");e&&this.tickerElements.set("__global__",e);const t=this.content.querySelector(".debt-list");if(t)for(const s of this.filteredEntries.slice(0,this.visibleCount)){const a=t.querySelector(`.debt-ticker[data-iso3="${s.iso3}"]`);a&&this.tickerElements.set(s.iso3,a)}this.tickerInterval=setInterval(()=>{const s=this.tickerElements.get("__global__");if(s){const a=ce(this.getGlobalDebt());this.lastTickerValues.get("__global__")!==a&&(s.textContent=a,this.lastTickerValues.set("__global__",a))}for(const a of this.filteredEntries.slice(0,this.visibleCount)){const l=this.tickerElements.get(a.iso3);if(!l)continue;const i=ce(se(a));this.lastTickerValues.get(a.iso3)!==i&&(l.textContent=i,this.lastTickerValues.set(a.iso3,i))}},1e3)}stopTicker(){this.tickerInterval!==null&&(clearInterval(this.tickerInterval),this.tickerInterval=null),this.tickerElements.clear(),this.lastTickerValues.clear()}destroy(){var e;(e=this.connectionObserver)==null||e.disconnect(),this.connectionObserver=null,this.connectRefreshQueued=!1,this.connectRetryFrames=0,this.stopTicker(),super.destroy()}};g(pe,"MAX_CONNECT_RETRY_FRAMES",8);let _e=pe;const ri=Object.freeze(Object.defineProperty({__proto__:null,NationalDebtPanel:_e},Symbol.toStringTag,{value:"Module"}));let xe=null;async function ra(){if(!xe){const{EconomicServiceClient:n}=await Z(async()=>{const{EconomicServiceClient:e}=await import("./rpc-client-economic-v1-BVRWogRr.js");return{EconomicServiceClient:e}},[]),{getRpcBaseUrl:u}=await Z(async()=>{const{getRpcBaseUrl:e}=await import("./index-CE8VpG3t.js").then(t=>t.a8);return{getRpcBaseUrl:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]));xe=new n(u(),{fetch:(...e)=>globalThis.fetch(...e)})}return xe}function W(n){return`${n.toFixed(1)}%`}function oa(n){return`$${n.toLocaleString(void 0,{maximumFractionDigits:0})}B`}function ca(n){if(n.length<13)return{value:null,prior:null,date:""};const u=n[n.length-1],e=n[n.length-13],t=n[n.length-2],s=n[n.length-14]??n[n.length-13];if(!u||!e)return{value:null,prior:null,date:""};const a=e.value>0?(u.value-e.value)/e.value*100:null,l=s&&t&&s.value>0?(t.value-s.value)/s.value*100:null;return{value:a,prior:l,date:u.date}}function le(n){const u=n[n.length-1];if(!n.length||!u)return{value:null,prior:null,date:""};const e=n[n.length-2];return{value:u.value,prior:(e==null?void 0:e.value)??null,date:u.date}}function la(n,u,e){return e||n===0?"neutral":(u?n<0:n>0)?"positive":"negative"}function ut(n){const u=n.value!==null?o(n.format(n.value)):"N/A",e=n.value!==null&&n.prior!==null?n.value-n.prior:null,t=n.deltaFormat??n.format,s=e!==null?`${e>=0?"+":""}${t(e)} vs prior`:"",a=e!==null?la(e,n.lowerIsBetter,n.neutral??!1):"neutral";return`<div class="macro-summary-card">
    <div class="macro-summary-head">
      <span class="indicator-name">${o(n.label)}</span>
    </div>
    <div class="macro-summary-value">${u}</div>
    ${s?`<div class="macro-summary-change ${a}">${o(s)}</div>`:""}
    <div class="indicator-date">${o(n.date)}</div>
  </div>`}const da=["DE","FR","IT","ES"];function ua(n){if(!n)return"";const u=/^(\d{4})-(\d{2})$/.exec(n);if(u){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(u[2]??"0",10)-1];return t?`${t} ${u[1]??n}`:n}return n}function Pe(n,u){var i;const e=[],t=[];let s="";for(const c of da){const d=(i=n.countries[c])==null?void 0:i[u];d&&typeof d.value=="number"&&Number.isFinite(d.value)&&(e.push(d.value),(!s||d.date>s)&&(s=d.date)),d!=null&&d.hasPrior&&Number.isFinite(d.priorValue)&&t.push(d.priorValue)}if(e.length===0)return{value:null,prior:null,date:""};const a=Math.round(e.reduce((c,d)=>c+d,0)/e.length*100)/100,l=t.length===e.length?Math.round(t.reduce((c,d)=>c+d,0)/t.length*100)/100:null;return{value:a,prior:l,date:ua(s)}}class pa extends L{constructor(){super({id:"macro-tiles",title:"Macro Indicators",showCount:!1,infoTooltip:r("components.macroTiles.infoTooltip")});g(this,"_hasData",!1);g(this,"_tab","us");g(this,"_usTiles",[]);g(this,"_eurostat",null);g(this,"_estrObs",[]);g(this,"_china",null);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-tab]");((t==null?void 0:t.dataset.tab)==="us"||(t==null?void 0:t.dataset.tab)==="eu"||(t==null?void 0:t.dataset.tab)==="cn")&&(this._tab=t.dataset.tab,this._render())}),this.content.addEventListener("keydown",e=>{if(!(e instanceof KeyboardEvent))return;const t=e.target.closest('[role="tab"][data-tab]');if(!t||!["ArrowRight","ArrowLeft","Home","End"].includes(e.key))return;const s=this._availableTabs(),a=s.indexOf(t.dataset.tab);if(a<0)return;e.preventDefault();const l=e.key==="Home"?s[0]:e.key==="End"?s[s.length-1]:s[(a+(e.key==="ArrowRight"?1:-1)+s.length)%s.length];l&&(this._tab=l,this._render(()=>{var i;(i=this.content.querySelector(`[data-tab="${l}"]`))==null||i.focus()}))})}async fetchData(){var e,t,s,a,l;this.showLoading();try{const i=await ra(),c=j("chinaMacro"),d=j("chinaReleaseCalendar"),v=ps(c,d),[h,f,p]=await Promise.allSettled([i.getFredSeriesBatch({seriesIds:["CPIAUCSL","UNRATE","GDP","FEDFUNDS","ESTR"],limit:14}),Lt(),v??i.getChinaMacroSnapshot({})]),b=h.status==="fulfilled"?h.value.results??{}:{};this._estrObs=((e=b.ESTR)==null?void 0:e.observations)??[],f.status==="fulfilled"&&!f.value.unavailable&&(this._eurostat=f.value),this._china=p.status==="fulfilled"?p.value:null;const m=ca(((t=b.CPIAUCSL)==null?void 0:t.observations)??[]),y=le(((s=b.UNRATE)==null?void 0:s.observations)??[]),w=le(((a=b.GDP)==null?void 0:a.observations)??[]),C=le(((l=b.FEDFUNDS)==null?void 0:l.observations)??[]);this._usTiles=[{id:"cpi",label:"CPI (YoY)",...m,lowerIsBetter:!0,format:W,deltaFormat:$=>$.toFixed(2)},{id:"unrate",label:"Unemployment",...y,lowerIsBetter:!0,format:W},{id:"gdp",label:"GDP (Billions)",...w,lowerIsBetter:!1,format:oa,deltaFormat:$=>`${$.toLocaleString(void 0,{maximumFractionDigits:0})}B`},{id:"fed",label:"Fed Funds Rate",...C,lowerIsBetter:!1,neutral:!0,format:W}];const A=this._usTiles.some($=>$.value!==null),D=this._eurostat!==null,R=$e(this._china);return!A&&!D&&!R?(this._hasData||this.showError("Macro data unavailable",()=>void this.fetchData()),!1):(!A&&this._tab==="us"&&(this._tab=R?"cn":"eu"),!R&&this._tab==="cn"&&(this._tab=A?"us":"eu"),this._hasData=!0,this._render(),!0)}catch(i){return this._hasData||this.showError(i instanceof Error?i.message:"Failed to load",()=>void this.fetchData()),!1}}_render(e){const t=this._availableTabs(),s={us:"US",eu:"Euro Area",cn:"China"},a=`<div class="panel-tabs macro-tiles-tabs" role="tablist" aria-label="Macro economy">
      ${t.map(c=>`<button type="button" id="macro-tiles-tab-${c}" role="tab" aria-selected="${this._tab===c}" aria-controls="macro-tiles-tabpanel" tabindex="${this._tab===c?"0":"-1"}" class="panel-tab${this._tab===c?" active":""}" data-tab="${c}">${s[c]}</button>`).join("")}
    </div>`;let l;this._tab==="us"?l=`<div class="macro-summary-grid">${this._usTiles.map(ut).join("")}</div>`:this._tab==="eu"?l=this._buildEuBody():l=this._buildChinaBody();const i=`macro-tiles-tab-${this._tab}`;this.setSafeContent(k(`${a}<div id="macro-tiles-tabpanel" class="macro-tiles-tabpanel" role="tabpanel" aria-labelledby="${i}">${l}</div>`,"legacy Panel.setContent() migration"),e)}_availableTabs(){return $e(this._china)?["us","eu","cn"]:["us","eu"]}_buildChinaBody(){if(!$e(this._china)||!this._china)return'<div class="macro-summary-empty">China macro data unavailable</div>';const e=hs(this._china)?"":'<div class="macro-quality-note macro-quality-note--degraded" role="status">Official China macro pulse is degraded; stale or delayed observations remain visible below.</div>',t=this._china.indicators.map(ms).join(""),s=new Date().toISOString().slice(0,10),a=this._china.releaseEvents.filter(i=>i.countryCode==="CN"&&i.releaseDate>=s).sort((i,c)=>i.releaseDate.localeCompare(c.releaseDate)).slice(0,3),l=a.length>0?`<section class="macro-release-calendar" aria-label="China release calendar">
          <div class="macro-release-calendar__heading">China release calendar</div>
          ${a.map(i=>`<div class="macro-release-calendar__event"><span>${o(i.event)}</span><span>${o(i.releaseDate)} · ${o(i.status)}</span></div>`).join("")}
        </section>`:'<div class="macro-release-calendar__empty">China release calendar unavailable</div>';return`${e}<div class="macro-summary-grid macro-summary-grid--china">${t}</div>${l}`}_buildEuBody(){if(!this._eurostat)return'<div class="macro-summary-empty">Euro Area data unavailable</div>';const e=Pe(this._eurostat,"cpi"),t=Pe(this._eurostat,"unemployment"),s=Pe(this._eurostat,"gdpGrowth"),a=le(this._estrObs),l=[{id:"eu-cpi",label:"HICP (YoY)",value:e.value,prior:e.prior,date:e.date,lowerIsBetter:!0,format:W},{id:"eu-un",label:"Unemployment",value:t.value,prior:t.prior,date:t.date,lowerIsBetter:!0,format:W},{id:"eu-gdp",label:"GDP Growth (QoQ)",value:s.value,prior:s.prior,date:s.date,lowerIsBetter:!1,format:W},{id:"eu-estr",label:"€STR (ECB Rate)",...a,lowerIsBetter:!1,neutral:!0,format:W}];return l.some(i=>i.value!==null)?`<div class="macro-summary-grid">${l.map(ut).join("")}</div>
      <div class="economic-source macro-summary-source">Eurostat · ECB · avg DE, FR, IT, ES</div>`:'<div class="macro-summary-empty">Euro Area data unavailable</div>'}}const oi=Object.freeze(Object.defineProperty({__proto__:null,MacroTilesPanel:pa},Symbol.toStringTag,{value:"Module"}));let Ee=null;async function ha(){if(!Ee){const{MarketServiceClient:n}=await Z(async()=>{const{MarketServiceClient:e}=await import("./rpc-client-market-v1-DNxvm993.js");return{MarketServiceClient:e}},[]),{getRpcBaseUrl:u}=await Z(async()=>{const{getRpcBaseUrl:e}=await import("./index-CE8VpG3t.js").then(t=>t.a8);return{getRpcBaseUrl:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]));Ee=new n(u(),{fetch:(...e)=>globalThis.fetch(...e)})}return Ee}let ke=null;async function ma(){if(!ke){const{EconomicServiceClient:n}=await Z(async()=>{const{EconomicServiceClient:e}=await import("./rpc-client-economic-v1-BVRWogRr.js");return{EconomicServiceClient:e}},[]),{getRpcBaseUrl:u}=await Z(async()=>{const{getRpcBaseUrl:e}=await import("./index-CE8VpG3t.js").then(t=>t.a8);return{getRpcBaseUrl:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]));ke=new n(u(),{fetch:(...e)=>globalThis.fetch(...e)})}return ke}function va(n){return n==="Low Stress"?"#27ae60":n==="Moderate Stress"?"#f39c12":n==="Elevated Stress"?"#e67e22":"#c0392b"}function fa(n){return n==="Low Stress"?r("components.fsi.interpretation.low"):n==="Moderate Stress"?r("components.fsi.interpretation.moderate"):n==="Elevated Stress"?r("components.fsi.interpretation.elevated"):r("components.fsi.interpretation.severe")}function xt(n){return n==="Low Stress"?r("components.fsi.labels.lowStress"):n==="Moderate Stress"?r("components.fsi.labels.moderateStress"):n==="Elevated Stress"?r("components.fsi.labels.elevatedStress"):n==="Severe Stress"||n==="High Stress"?r("components.fsi.labels.severeStress"):n}function ga(n){return n==="Low"?r("components.fsi.cissLabels.low"):n==="Moderate"?r("components.fsi.cissLabels.moderate"):n==="Elevated"?r("components.fsi.cissLabels.elevated"):n==="High"?r("components.fsi.cissLabels.high"):n}function pt(n){return n==="Low"?"#27ae60":n==="Moderate"?"#f39c12":n==="Elevated"?"#e67e22":"#c0392b"}function ba(n){const u=Date.parse(n);return Number.isFinite(u)?Date.now()-u>vs:!1}function de(n,u){return`<div style="background:rgba(255,255,255,0.04);border-radius:6px;padding:8px 10px;border:1px solid rgba(255,255,255,0.07)">
    <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px">${o(n)}</div>
    <div style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text)">${o(u)}</div>
  </div>`}class ya extends L{constructor(){super({id:"fsi",title:r("components.fsi.title"),showCount:!1,infoTooltip:r("components.fsi.infoTooltip")});g(this,"_hasData",!1)}async fetchData(){var e,t,s,a,l,i;this.showLoading();try{const c=j("fearGreedIndex");let d=0,v="",h=0,f=0,p=0,b=0;if(c&&!c.unavailable){const y=c.headerMetrics??{};d=Number(((e=y==null?void 0:y.fsi)==null?void 0:e.value)??0),v=String(((t=y==null?void 0:y.fsi)==null?void 0:t.label)??""),h=Number(((s=y==null?void 0:y.fsi)==null?void 0:s.hygPrice)??0),f=Number(((a=y==null?void 0:y.fsi)==null?void 0:a.tltPrice)??0),Number.isFinite(h)||(h=0),Number.isFinite(f)||(f=0),p=Number(((l=y==null?void 0:y.vix)==null?void 0:l.value)??0),b=Number(((i=y==null?void 0:y.hySpread)==null?void 0:i.value)??0)}if(d<=0){const w=await(await ha()).getFearGreedIndex({});!w.unavailable&&w.fsiValue>0&&(d=w.fsiValue,v=w.fsiLabel,h=w.hygPrice,f=w.tltPrice,p=w.vix,b=w.hySpread)}if(d<=0)return this._hasData||this.showError(r("components.fsi.errors.unavailable"),()=>void this.fetchData()),!1;let m=null;try{const y=j("euFsi");if(y&&!y.unavailable&&Number.isFinite(y.latestValue))m=y;else{const C=await(await ma()).getEuFsi({});!C.unavailable&&Number.isFinite(C.latestValue)&&(m=C)}}catch{}return this._hasData=!0,this.render({fsiValue:d,fsiLabel:v,hygPrice:h,tltPrice:f,vix:p,hySpread:b},m),!0}catch(c){return this._hasData||this.showError(c instanceof Error?c.message:r("components.fsi.errors.failedToLoad"),()=>void this.fetchData()),!1}}render(e,t){const{fsiValue:s,fsiLabel:a,hygPrice:l,tltPrice:i,vix:c,hySpread:d}=e,v=va(a),h=Math.min(Math.max(s/2.5*100,0),100),f=fa(a),p=t?t.stale||ba(t.latestDate):!1,b=t?`<div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.07)">
          <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px">${o(r("components.fsi.cissTitle"))}</div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
            <div style="font-size:calc(28px * var(--wm-panel-effective-scale, 1));font-weight:700;color:${pt(t.label)};line-height:1">${t.latestValue.toFixed(4)}</div>
            <div>
              <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${pt(t.label)}">${o(ga(t.label))}</div>
              <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:${p?"#e67e22":"var(--text-dim)"}">${o(t.latestDate?new Date(t.latestDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):"")}</div>
            </div>
          </div>
          ${p?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:#e67e22;background:rgba(230,126,34,0.1);border-radius:4px;padding:4px 6px;margin-bottom:8px">⚠ ${o(r("components.fsi.cissStale"))}</div>`:""}
          <div style="background:rgba(255,255,255,0.07);border-radius:4px;height:6px;overflow:hidden">
            <div style="height:100%;width:${(t.latestValue*100).toFixed(1)}%;background:linear-gradient(90deg,#27ae60,#f39c12,#c0392b);border-radius:4px"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:3px">
            <span>${o(r("components.fsi.scale.noStress"))}</span><span>${o(r("components.fsi.scale.extremeStress"))}</span>
          </div>
        </div>`:"",m=`<div style="padding:12px 14px">
      <div style="text-align:center;margin-bottom:16px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:4px">${o(r("components.fsi.usFsiValue"))}</div>
        <div style="font-size:calc(36px * var(--wm-panel-effective-scale, 1));font-weight:700;color:${v};line-height:1">${s.toFixed(4)}</div>
        <div style="font-size:calc(13px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${v};margin-top:4px">${o(xt(a))}</div>
      </div>
      <div style="margin:0 0 12px">
        <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:3px">
          <span>${o(r("components.fsi.scale.highStress"))}</span><span>${o(r("components.fsi.scale.lowStress"))}</span>
        </div>
        <div style="background:rgba(255,255,255,0.07);border-radius:4px;height:8px;overflow:hidden">
          <div style="height:100%;width:${h.toFixed(1)}%;background:linear-gradient(90deg,#c0392b,#f39c12,#27ae60);border-radius:4px"></div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:12px">
        ${de(r("components.fsi.metrics.vix"),c>0?c.toFixed(2):r("components.fsi.notAvailable"))}
        ${de(r("components.fsi.metrics.hySpread"),d>0?d.toFixed(2)+"%":r("components.fsi.notAvailable"))}
        ${de(r("components.fsi.metrics.hygPrice"),l>0?"$"+l.toFixed(2):r("components.fsi.notAvailable"))}
        ${de(r("components.fsi.metrics.tltPrice"),i>0?"$"+i.toFixed(2):r("components.fsi.notAvailable"))}
      </div>
      <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);background:rgba(255,255,255,0.03);border-radius:6px;padding:8px 10px;border-left:3px solid ${v}">
        ${o(f)}
      </div>
      ${b}
    </div>`;this.setSafeContent(k(m,"legacy Panel.setContent() migration"))}}const ci=Object.freeze(Object.defineProperty({__proto__:null,FSIPanel:ya,fsiLabelDisplay:xt},Symbol.toStringTag,{value:"Module"}));export{ii as B,Ya as C,Wa as E,ni as F,Ka as G,ti as I,oi as M,ri as N,Ja as S,Za as T,Qa as a,Xa as b,ei as c,si as d,ai as e,ci as f};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["panels-economy-BIn2IHYF.js"]=1;