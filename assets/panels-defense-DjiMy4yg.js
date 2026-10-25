var K=Object.defineProperty;var Z=(h,g,t)=>g in h?K(h,g,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[g]=t;var c=(h,g,t)=>Z(h,typeof g!="symbol"?g+"":g,t);import{P as D}from"./Panel-3zvnDVWb.js";import{t as s,e as J,g as C,L as X,i as tt}from"./theme-colors-BmUbP5Zj.js";import{d as et,g as st}from"./index-CE8VpG3t.js";import{r as it,h as v,t as y,s as E}from"./dom-utils-COg85yfw.js";import{s as Y,e as o,u as P,a as T,j as H}from"./sanitize-D7dx0cA1.js";import{calculateStrategicRiskOverview as at,getRecentAlerts as rt,getAlertCount as nt}from"./cross-module-integration-BVOw5c0k.js";import{d as ot}from"./geo-convergence-Co9DJcJn.js";import{s as N,K as V,L as ct}from"./gdelt-intel-FTZQ7YLF.js";import{c as lt,b as dt,i as pt}from"./cached-risk-scores-RAKQjGn1.js";import{ab as ht,bq as ut,br as mt,bs as gt,bt as vt}from"./App-BLvralVM.js";import{b as R}from"./activation-DdoRK80V.js";import{r as A}from"./military-surge-BjKYwQGG.js";import{b as ft}from"./news-context-CvrWW5B9.js";import{fetchAirportOpsSummary as U,fetchGoogleDates as yt,fetchGoogleFlights as bt,fetchAviationNews as $t,fetchFlightStatus as kt,fetchAircraftPositions as I,fetchCarrierOps as Tt,fetchAirportFlights as wt}from"./index-BKgMobhe.js";import{a as q,f as St}from"./board-time-DR5erZBz.js";function Ct(h){switch(h){case"H04B":return s("components.defensePatents.cpcLabels.H04B");case"H01L":return s("components.defensePatents.cpcLabels.H01L");case"F42B":return s("components.defensePatents.cpcLabels.F42B");case"G06N":return s("components.defensePatents.cpcLabels.G06N");case"C12N":return s("components.defensePatents.cpcLabels.C12N");default:return h}}const Et=["H04B","H01L","F42B","G06N","C12N"],Pt={H04B:"📡",H01L:"💾",F42B:"💣",G06N:"🤖",C12N:"🧬"};let O=null;function Dt(){return O||(O=new et(st(),{fetch:(...h)=>globalThis.fetch(...h)})),O}class Lt extends D{constructor(){super({id:"defense-patents",title:s("components.defensePatents.title"),showCount:!0,infoTooltip:s("components.defensePatents.infoTooltip")});c(this,"viewMode","all");c(this,"patents",[]);c(this,"loading",!0);c(this,"error",null);this.element.classList.add("panel-tall"),this.fetchPatents()}async fetchPatents(){var t,e;this.loading=!0,this.error=null,this.render();try{const r=await Dt().listDefensePatents({cpcCode:"",assignee:"",limit:100});if(!((t=this.element)!=null&&t.isConnected))return;this.patents=r.patents??[],this.setCount(r.total??this.patents.length),this.error=null}catch(r){if(this.isAbortError(r)||!((e=this.element)!=null&&e.isConnected))return;this.error=s("components.defensePatents.error"),console.error("[DefensePatents] Fetch error:",r)}this.loading=!1,this.render()}render(){if(this.loading){it(this.content,v("div",{className:"defense-patents-loading"},v("div",{className:"loading-spinner"}),v("span",null,s("components.defensePatents.loading"))));return}if(this.error){this.showError(this.error,()=>this.refresh());return}const t=[["all",s("components.defensePatents.tabs.all")],...Et.map(r=>[r,Ct(r)])],e=this.getFiltered();this.setContentNodes(v("div",{className:"defense-patents-panel"},v("div",{className:"panel-tabs"},...t.map(([r,a])=>v("button",{className:`panel-tab ${this.viewMode===r?"active":""}`,onClick:()=>{this.viewMode=r,this.render()}},a))),v("div",{className:"defense-patents-list"},...e.length>0?e.map(r=>this.buildRow(r)):[v("div",{className:"empty-state"},s("components.defensePatents.empty"))])))}getFiltered(){return this.viewMode==="all"?this.patents.slice(0,50):this.patents.filter(t=>t.cpcCode===this.viewMode).slice(0,30)}buildRow(t){const e=t.date?new Date(t.date).toLocaleDateString(J(),{month:"short",day:"numeric",year:"numeric"}):"",r=Pt[t.cpcCode]??"🔬",a=Y(t.url||"");return v("div",{className:"defense-patent-row"},v("div",{className:"patent-icon",title:t.cpcDesc||t.cpcCode},r),v("div",{className:"patent-body"},v("div",{className:"patent-header"},v("span",{className:"patent-assignee"},t.assignee),a?v("a",{href:a,target:"_blank",rel:"noopener",className:"patent-link",title:s("components.defensePatents.viewOnUspto")},"↗"):!1),v("div",{className:"patent-title"},t.title),v("div",{className:"patent-meta"},v("span",{className:`patent-cpc cpc-${t.cpcCode}`},t.cpcDesc||t.cpcCode),e?v("span",{className:"patent-date"},e):!1,t.patentId?v("span",{className:"patent-id"},t.patentId):!1)))}refresh(){this.fetchPatents()}}const oe=Object.freeze(Object.defineProperty({__proto__:null,DefensePatentsPanel:Lt},Symbol.toStringTag,{value:"Module"})),M=[{min:81,levelKey:"critical",colorVar:"--semantic-critical"},{min:66,levelKey:"high",colorVar:"--semantic-high"},{min:51,levelKey:"elevated",colorVar:"--semantic-elevated"},{min:31,levelKey:"normal",colorVar:"--semantic-normal"},{min:0,levelKey:"low",colorVar:"--semantic-low"}];class Nt extends D{constructor(){super({id:"strategic-risk",title:s("panels.strategicRisk"),showCount:!1,trackActivity:!0,infoTooltip:s("components.strategicRisk.infoTooltip")});c(this,"overview",null);c(this,"alerts",[]);c(this,"convergenceAlerts",[]);c(this,"freshnessSummary",null);c(this,"unsubscribeFreshness",null);c(this,"onLocationClick");c(this,"breakingAlerts",new Map);c(this,"boundOnBreaking",null);c(this,"breakingExpiryTimer",null);c(this,"lastRiskFingerprint","");this.init(),R(this.content,".risk-item-clickable, .risk-alert-clickable")}async init(){this.showLoading();try{let t=null;this.unsubscribeFreshness=N.subscribe(()=>{t&&clearTimeout(t),t=setTimeout(()=>{this.refresh()},500)}),this.boundOnBreaking=e=>{const r=e.detail;if(!(r!=null&&r.id))return;const a=r.threatLevel;a!=="critical"&&a!=="high"||(this.breakingAlerts.set(r.id,{threatLevel:a,timestamp:Date.now()}),this.refresh())},document.addEventListener("wm:breaking-news",this.boundOnBreaking),await this.refresh()}catch(t){console.error("[StrategicRiskPanel] Init error:",t),this.showError(s("common.failedRiskOverview"),()=>void this.refresh())}}async refresh(){var w,S,L;this.freshnessSummary=N.getSummary(),this.convergenceAlerts=ot();const t=1800*1e3,e=Date.now(),r=e-t,a=[];for(const[k,x]of this.breakingAlerts)x.timestamp<r&&a.push(k);for(const k of a)this.breakingAlerts.delete(k);if(this.breakingExpiryTimer&&clearTimeout(this.breakingExpiryTimer),this.breakingAlerts.size>0){let k=1/0;for(const j of this.breakingAlerts.values())j.timestamp<k&&(k=j.timestamp);const x=k+t-e+500;this.breakingExpiryTimer=setTimeout(()=>this.refresh(),Math.max(1e3,x))}let i=0;for(const k of this.breakingAlerts.values())i+=k.threatLevel==="critical"?15:8;i=Math.min(15,i);const n=ht(),d=n==null?void 0:n.postures,l=n!=null&&n.stale?.5:1,u=await lt(this.signal);if(!((w=this.element)!=null&&w.isConnected))return!1;if(!u)return this.overview=null,this.alerts=[],this.setDataBadge("unavailable"),this.showError(s("common.failedRiskOverview"),()=>void this.refresh()),console.warn("[StrategicRiskPanel] Canonical backend risk scores unavailable"),!1;const f=at(this.convergenceAlerts,d??void 0,i,l);this.overview=f,this.alerts=rt(24),this.applyCachedRiskOverview(u,f),console.log("[StrategicRiskPanel] Using cached scores from backend");const p=this.freshnessSummary?s("components.strategicRisk.sourcesDetail",{active:this.freshnessSummary.activeSources,total:this.freshnessSummary.totalSources}):void 0;this.setDataBadge("cached",p),this.render();const m=this.alerts.map(k=>k.id).sort().join(","),b=`${(S=this.overview)==null?void 0:S.compositeScore}|${(L=this.overview)==null?void 0:L.trend}|${m}`,$=b!==this.lastRiskFingerprint;return this.lastRiskFingerprint=b,$}cachedTrendToOverviewTrend(t){return t==="rising"||t==="escalating"?"escalating":t==="falling"||t==="de-escalating"?"de-escalating":"stable"}cachedTimestamp(t){const e=t.strategicRisk.lastUpdated??t.computedAt;if(!e)return null;const r=new Date(e);return Number.isNaN(r.getTime())?null:r}cachedTopRisks(t,e){const r=t.strategicRisk.contributors.filter(a=>a.score>0).slice(0,5).map(a=>`${a.country}: ${a.score} (${a.level})`);return r.length>0?r:e.filter(a=>a.score>0).slice(0,5).map(a=>`${a.name}: ${a.score} (${a.level})`)}applyCachedRiskOverview(t,e){var a;const r=t.cii.map(dt).sort((i,n)=>n.score-i.score);this.overview={...e,avgCIIDeviation:((a=r[0])==null?void 0:a.score)??t.strategicRisk.score,compositeScore:Math.max(0,Math.min(100,Math.round(t.strategicRisk.score))),trend:this.cachedTrendToOverviewTrend(t.strategicRisk.trend),topRisks:this.cachedTopRisks(t,r),unstableCountries:r.filter(i=>pt(i.score)).slice(0,5),timestamp:this.cachedTimestamp(t),degraded:t.degraded,stale:t.stale}}getScoreColor(t){return C(this.getFallbackScoreBand(t).colorVar)}getScoreLevel(t){return s(`countryBrief.levels.${this.getFallbackScoreBand(t).levelKey}`)}getFallbackScoreBand(t){return M.find(e=>t>=e.min)??M[M.length-1]}getTrendEmoji(t){switch(t){case"escalating":return"📈";case"de-escalating":return"📉";default:return"➡️"}}getTrendColor(t){switch(t){case"escalating":return C("--semantic-critical");case"de-escalating":return C("--semantic-normal");default:return C("--text-dim")}}getPriorityColor(t){switch(t){case"critical":return C("--semantic-critical");case"high":return C("--semantic-high");case"medium":return C("--semantic-elevated");case"low":return C("--semantic-normal")}}getPriorityEmoji(t){switch(t){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢"}}getTypeEmoji(t){switch(t){case"convergence":return"🎯";case"cii_spike":return"📊";case"cascade":return"🔗";case"sanctions":return"🚫";case"radiation":return"☢️";case"composite":return"⚠️";default:return"📍"}}renderFullData(){if(!this.overview||!this.freshnessSummary)return"";const t=this.overview.compositeScore,e=this.getScoreColor(t),r=this.getScoreLevel(t),a=Math.round(t/100*270);return`
      <div class="strategic-risk-panel">
        ${this.renderCachedRiskStateBanner()}

        <div class="risk-gauge">
          <div class="risk-score-container">
            <div class="risk-score-ring" style="--score-color: ${e}; --score-deg: ${a}deg;">
              <div class="risk-score-inner">
                <div class="risk-score" style="color: ${e}">${t}</div>
                <div class="risk-level" style="color: ${e}">${r}</div>
              </div>
            </div>
          </div>
          <div class="risk-trend-container">
            <span class="risk-trend-label">${s("components.strategicRisk.trend")}</span>
            <div class="risk-trend" style="color: ${this.getTrendColor(this.overview.trend)}">
              ${this.getTrendEmoji(this.overview.trend)} ${this.overview.trend==="escalating"?s("components.strategicRisk.trends.escalating"):this.overview.trend==="de-escalating"?s("components.strategicRisk.trends.deEscalating"):s("components.strategicRisk.trends.stable")}
            </div>
          </div>
        </div>

        ${this.renderMetrics()}
        ${this.renderFreshnessSurface()}
        ${this.renderTopRisks()}
        ${this.renderRecentAlerts()}

        <div class="risk-footer">
          <span class="risk-updated">${s("components.strategicRisk.updated",{time:this.formatOverviewTimestamp()})}</span>
          <button class="risk-refresh-btn">${s("components.strategicRisk.refresh")}</button>
        </div>
      </div>
    `}renderCachedRiskStateBanner(){if(!this.overview||!this.overview.degraded&&!this.overview.stale)return"";const t=[this.overview.degraded?s("components.strategicRisk.sourceStates.degraded"):"",this.overview.stale?s("components.strategicRisk.sourceStates.stale"):""].filter(Boolean);return`<div class="risk-status-banner risk-status-cached">
      <span class="risk-status-icon">!</span>
      <span class="risk-status-text">${s("components.strategicRisk.cachedCiiStatus",{states:t.join(" · ")})}</span>
    </div>`}renderFreshnessSurface(){if(!this.freshnessSummary)return"";const t=N.getAllSources().filter(e=>e.status!=="no_data"&&e.status!=="disabled").sort((e,r)=>{const a={error:0,very_stale:1,stale:2,fresh:3};return(a[e.status]??4)-(a[r.status]??4)}).slice(0,6);return t.length===0?"":`
      <div class="risk-section">
        <div class="risk-section-title">${s("components.strategicRisk.dataFreshness")}</div>
        <div class="risk-sources-compact">
          ${t.map(e=>`
            <span class="risk-source-chip" title="${o(e.healthStatus||e.status)}" style="border-color: ${V(e.status)}">
              <span class="risk-source-dot" style="color: ${V(e.status)}">${ct(e.status)}</span>
              <span class="risk-source-name">${o(e.name)}</span>
              <span class="risk-source-time">${o(N.getTimeSince(e.id))}</span>
            </span>
          `).join("")}
        </div>
      </div>
    `}renderMetrics(){if(!this.overview)return"";const t=nt();return`
      <div class="risk-metrics">
        <div class="risk-metric">
          <span class="risk-metric-value">${this.overview.convergenceAlerts}</span>
          <span class="risk-metric-label">${s("components.strategicRisk.convergenceMetric")}</span>
        </div>
        <div class="risk-metric">
          <span class="risk-metric-value">${this.overview.avgCIIDeviation.toFixed(1)}</span>
          <span class="risk-metric-label">${s("components.strategicRisk.ciiDeviation")}</span>
        </div>
        <div class="risk-metric">
          <span class="risk-metric-value">${this.overview.infrastructureIncidents}</span>
          <span class="risk-metric-label">${s("components.strategicRisk.infraEvents")}</span>
        </div>
        <div class="risk-metric">
          <span class="risk-metric-value">${t.critical+t.high}</span>
          <span class="risk-metric-label">${s("components.strategicRisk.highAlerts")}</span>
        </div>
      </div>
    `}renderTopRisks(){if(!this.overview||this.overview.topRisks.length===0)return`<div class="risk-empty">${s("components.strategicRisk.noRisks")}</div>`;const t=this.overview.topConvergenceZones[0];return`
      <div class="risk-section">
        <div class="risk-section-title">${s("components.strategicRisk.topRisks")}</div>
        <div class="risk-list">
          ${this.overview.topRisks.map((e,r)=>r===0&&e.startsWith("Convergence:")&&t?`
                <div class="risk-item risk-item-clickable" data-lat="${t.lat}" data-lon="${t.lon}" role="button" tabindex="0">
                  <span class="risk-rank">${r+1}.</span>
                  <span class="risk-text">${o(e)}</span>
                  <span class="risk-location-icon">↗</span>
                </div>
              `:`
              <div class="risk-item">
                <span class="risk-rank">${r+1}.</span>
                <span class="risk-text">${o(e)}</span>
              </div>
            `).join("")}
        </div>
      </div>
    `}renderRecentAlerts(){if(this.alerts.length===0)return"";const t=this.alerts.slice(0,5);return`
      <div class="risk-section">
        <div class="risk-section-title">${s("components.strategicRisk.recentAlerts",{count:String(this.alerts.length)})}</div>
        <div class="risk-alerts">
          ${t.map(e=>{var n;const r=((n=e.location)==null?void 0:n.lat)&&e.location.lon,a=r?"risk-alert-clickable":"",i=r?`data-lat="${e.location.lat}" data-lon="${e.location.lon}" role="button" tabindex="0"`:"";return`
              <div class="risk-alert ${a}" style="border-left: 3px solid ${this.getPriorityColor(e.priority)}" ${i}>
                <div class="risk-alert-header">
                  <span class="risk-alert-type">${this.getTypeEmoji(e.type)}</span>
                  <span class="risk-alert-priority">${this.getPriorityEmoji(e.priority)}</span>
                  <span class="risk-alert-title">${o(e.title)}</span>
                  ${r?'<span class="risk-location-icon">↗</span>':""}
                </div>
                <div class="risk-alert-summary">${o(e.summary)}</div>
                <div class="risk-alert-time">${this.formatTime(e.timestamp)}</div>
              </div>
            `}).join("")}
        </div>
      </div>
    `}formatTime(t){const r=new Date().getTime()-t.getTime(),a=Math.floor(r/6e4),i=Math.floor(a/60);return a<1?s("components.strategicRisk.time.justNow"):a<60?s("components.strategicRisk.time.minutesAgo",{count:String(a)}):i<24?s("components.strategicRisk.time.hoursAgo",{count:String(i)}):t.toLocaleDateString()}formatOverviewTimestamp(){var t;return(t=this.overview)!=null&&t.timestamp?this.overview.timestamp.toLocaleTimeString():"&mdash;"}render(){this.freshnessSummary=N.getSummary();try{if(!this.overview){this.showLoading();return}this.setTrustedContent(y(this.renderFullData(),"legacy direct innerHTML migration")),this.attachEventListeners()}catch(t){console.error("[StrategicRiskPanel] Render error:",t),this.showError(s("common.failedRiskOverview"),()=>this.refresh())}}attachEventListeners(){const t=this.content.querySelector(".risk-refresh-btn");t&&t.addEventListener("click",()=>this.refresh()),this.content.querySelectorAll(".risk-source-enable").forEach(n=>{n.addEventListener("click",d=>{const l=d.target.dataset.panel;l&&this.emitEnablePanel(l)})}),this.content.querySelectorAll(".risk-action-btn").forEach(n=>{n.addEventListener("click",d=>{const l=d.target.dataset.action;l==="enable-core"?this.emitEnablePanels(["protests","intel","live-news"]):l==="enable-all"&&this.emitEnablePanels(["protests","intel","live-news","military","shipping"])})}),this.content.querySelectorAll(".risk-item-clickable").forEach(n=>{n.addEventListener("click",()=>{const d=parseFloat(n.dataset.lat||"0"),l=parseFloat(n.dataset.lon||"0");this.onLocationClick&&!Number.isNaN(d)&&!Number.isNaN(l)&&this.onLocationClick(d,l)})}),this.content.querySelectorAll(".risk-alert-clickable").forEach(n=>{n.addEventListener("click",()=>{const d=parseFloat(n.dataset.lat||"0"),l=parseFloat(n.dataset.lon||"0");this.onLocationClick&&!Number.isNaN(d)&&!Number.isNaN(l)&&this.onLocationClick(d,l)})})}emitEnablePanel(t){window.dispatchEvent(new CustomEvent("enable-panel",{detail:{panelId:t}}))}emitEnablePanels(t){t.forEach(e=>this.emitEnablePanel(e))}destroy(){this.boundOnBreaking&&(document.removeEventListener("wm:breaking-news",this.boundOnBreaking),this.boundOnBreaking=null),this.breakingExpiryTimer&&(clearTimeout(this.breakingExpiryTimer),this.breakingExpiryTimer=null),this.unsubscribeFreshness&&this.unsubscribeFreshness(),super.destroy()}getOverview(){return this.overview}getAlerts(){return this.alerts}setLocationClickHandler(t){this.onLocationClick=t}}const ce=Object.freeze(Object.defineProperty({__proto__:null,StrategicRiskPanel:Nt},Symbol.toStringTag,{value:"Module"}));class Rt extends D{constructor(t){super({id:"strategic-posture",title:s("panels.strategicPosture"),showCount:!1,trackActivity:!0,infoTooltip:s("components.strategicPosture.infoTooltip"),defaultRowSpan:2});c(this,"postures",[]);c(this,"vesselTimeouts",[]);c(this,"loadingElapsedInterval",null);c(this,"loadingStartTime",0);c(this,"onLocationClick");c(this,"lastTimestamp","");c(this,"isStale",!1);c(this,"staleRetryPending",!1);c(this,"staleRetryTimer",null);c(this,"refreshGuard",new X);c(this,"handleContentClick",t=>{var d;const e=t.target;if(!e)return;if(e.closest(".posture-refresh-btn")){this.refresh();return}const r=e.closest(".posture-deduce-btn");if(r){t.stopPropagation();try{const l=r.dataset.theater;if(!l)return;const u=JSON.parse(l),f=`What is the expected strategic impact of the current military posture in the ${u.shortName} theater?`;let p=`Theater: ${u.shortName} (${u.theaterName}). Military Assets: ${u.totalAircraft} aircraft, ${u.totalVessels} naval vessels. Readiness Level: ${u.postureLevel}. Assets breakdown: ${u.fighters} fighters, ${u.bombers} bombers, ${u.carriers} carriers, ${u.submarines} submarines. Focus/Target: ${u.targetNation||"Unknown"}.`;if(this.getLatestNews){const b=ft(this.getLatestNews);b&&(p+=`

${b}`)}const m={query:f,geoContext:p,autoSubmit:!0};document.dispatchEvent(new CustomEvent("wm:deduct-context",{detail:m}))}catch(l){console.error("[StrategicPosturePanel] Failed to dispatch deduction event",l)}return}const a=e.closest(".posture-theater");if(!a||!this.content.contains(a))return;const i=parseFloat(a.dataset.lat||"0"),n=parseFloat(a.dataset.lon||"0");console.log("[StrategicPosturePanel] Theater clicked:",{lat:i,lon:n,dataLat:a.dataset.lat,dataLon:a.dataset.lon,element:(d=a.textContent)==null?void 0:d.slice(0,30),hasHandler:!!this.onLocationClick}),this.onLocationClick&&!Number.isNaN(i)&&!Number.isNaN(n)?(console.log("[StrategicPosturePanel] Calling onLocationClick with:",i,n),this.onLocationClick(i,n)):console.warn("[StrategicPosturePanel] No handler or invalid coords!",{hasHandler:!!this.onLocationClick,lat:i,lon:n})});this.getLatestNews=t,this.init(),this.content.addEventListener("click",this.handleContentClick),R(this.content,".posture-theater")}init(){this.showLoading(),this.fetchAndRender(),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),30*1e3)),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),60*1e3)),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),90*1e3)),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),120*1e3))}isPanelVisible(){return!this.element.classList.contains("hidden")}async reaugmentVessels(){var e;if(!this.isPanelVisible()||this.postures.length===0)return;console.log("[StrategicPosturePanel] Re-augmenting with vessels...");const t=this.postures;await this.augmentWithVessels(t),t===this.postures&&(e=this.element)!=null&&e.isConnected&&this.render()}showLoading(){this.loadingStartTime=Date.now(),this.setSafeContent(P(`
      <div class="posture-panel">
        <div class="posture-loading">
          <div class="posture-loading-radar">
            <div class="posture-radar-sweep"></div>
            <div class="posture-radar-dot"></div>
          </div>
          <div class="posture-loading-title">${s("components.strategicPosture.scanningTheaters")}</div>
          <div class="posture-loading-stages">
            <div class="posture-stage active">
              <span class="posture-stage-dot"></span>
              <span>${s("components.strategicPosture.positions")}</span>
            </div>
            <div class="posture-stage pending">
              <span class="posture-stage-dot"></span>
              <span>${s("components.strategicPosture.navalVesselsLoading")}</span>
            </div>
            <div class="posture-stage pending">
              <span class="posture-stage-dot"></span>
              <span>${s("components.strategicPosture.theaterAnalysis")}</span>
            </div>
          </div>
          <div class="posture-loading-tip">${s("components.strategicPosture.connectingStreams")}</div>
          <div class="posture-loading-elapsed">${s("components.strategicPosture.elapsed",{elapsed:"0"})}</div>
          <div class="posture-loading-note">${s("components.strategicPosture.initialLoadNote")}</div>
        </div>
      </div>
    `,"legacy Panel.setContent() migration")),this.startLoadingTimer()}startLoadingTimer(){this.loadingElapsedInterval&&clearInterval(this.loadingElapsedInterval),this.loadingElapsedInterval=setInterval(()=>{const t=Math.floor((Date.now()-this.loadingStartTime)/1e3),e=this.content.querySelector(".posture-loading-elapsed");e&&(e.textContent=s("components.strategicPosture.elapsed",{elapsed:String(t)}))},1e3)}stopLoadingTimer(){this.loadingElapsedInterval&&(clearInterval(this.loadingElapsedInterval),this.loadingElapsedInterval=null)}showLoadingStage(t){const e=this.content.querySelectorAll(".posture-stage");e.length!==0&&e.forEach((r,a)=>{r.classList.remove("active","complete"),t==="aircraft"&&a===0?r.classList.add("active"):t==="vessels"?a===0?r.classList.add("complete"):a===1&&r.classList.add("active"):t==="analysis"&&(a<=1?r.classList.add("complete"):a===2&&r.classList.add("active"))})}async fetchAndRender(){var e,r,a,i;if(!((e=this.element)!=null&&e.isConnected)){this.runWhenConnected(()=>{this.fetchAndRender()});return}if(!this.isPanelVisible())return;const t=this.refreshGuard.begin();this.staleRetryTimer!==null&&(clearTimeout(this.staleRetryTimer),this.staleRetryTimer=null);try{this.showLoadingStage("aircraft");const n=this.staleRetryPending;this.staleRetryPending=!1;const d=await ut(this.signal,{forceRefresh:n});if(!this.refreshGuard.isCurrent(t)||!((r=this.element)!=null&&r.isConnected))return;if(!d||!((a=d.postures)!=null&&a.length)){this.showNoData();return}if(this.postures=d.postures.map(l=>({...l,byOperator:{...l.byOperator}})),this.lastTimestamp=d.timestamp,this.isStale=d.stale||!1,this.showLoadingStage("vessels"),await this.augmentWithVessels(this.postures),!this.refreshGuard.isCurrent(t)||!((i=this.element)!=null&&i.isConnected))return;this.showLoadingStage("analysis"),this.updateBadges(),this.render(),this.isStale&&!n&&(this.staleRetryPending=!0,this.staleRetryTimer!==null&&clearTimeout(this.staleRetryTimer),this.staleRetryTimer=setTimeout(()=>{this.staleRetryTimer=null,this.fetchAndRender()},3e3))}catch(n){if(!this.refreshGuard.isCurrent(t)||this.isAbortError(n))return;console.error("[StrategicPosturePanel] Fetch error:",n),this.showFetchError()}}async augmentWithVessels(t){try{const{fetchMilitaryVessels:e}=await mt();if(t!==this.postures||this.signal.aborted)return;const{vessels:r}=await e();if(t!==this.postures||this.signal.aborted)return;if(console.log(`[StrategicPosturePanel] Got ${r.length} total military vessels`),r.length===0){this.restoreVesselCounts(),A(this.postures);return}for(const a of this.postures){if(!a.bounds)continue;const i=r.filter(n=>n.lat>=a.bounds.south&&n.lat<=a.bounds.north&&n.lon>=a.bounds.west&&n.lon<=a.bounds.east);a.destroyers=i.filter(n=>n.vesselType==="destroyer").length,a.frigates=i.filter(n=>n.vesselType==="frigate").length,a.carriers=i.filter(n=>n.vesselType==="carrier").length,a.submarines=i.filter(n=>n.vesselType==="submarine").length,a.patrol=i.filter(n=>n.vesselType==="patrol").length,a.auxiliaryVessels=i.filter(n=>n.vesselType==="auxiliary"||n.vesselType==="special"||n.vesselType==="amphibious"||n.vesselType==="icebreaker"||n.vesselType==="research"||n.vesselType==="unknown").length,a.totalVessels=i.length,i.length>0&&console.log(`[StrategicPosturePanel] ${a.shortName}: ${i.length} vessels`,i.map(n=>n.vesselType));for(const n of i){const d=n.operator||"unknown";a.byOperator[d]=(a.byOperator[d]||0)+1}}this.cacheVesselCounts(),A(this.postures),console.log("[StrategicPosturePanel] Augmented with",r.length,"vessels, posture levels recalculated")}catch(e){if(t!==this.postures||this.signal.aborted||gt(e))return;console.warn("[StrategicPosturePanel] Failed to fetch vessels:",e),this.restoreVesselCounts(),A(this.postures)}}cacheVesselCounts(){try{const t={};for(const e of this.postures)e.totalVessels>0&&(t[e.theaterId]={destroyers:e.destroyers||0,frigates:e.frigates||0,carriers:e.carriers||0,submarines:e.submarines||0,patrol:e.patrol||0,auxiliaryVessels:e.auxiliaryVessels||0,totalVessels:e.totalVessels||0});localStorage.setItem("wm:vesselPosture",JSON.stringify({counts:t,ts:Date.now()}))}catch{}}restoreVesselCounts(){try{const t=localStorage.getItem("wm:vesselPosture");if(!t)return;const{counts:e,ts:r}=JSON.parse(t);if(Date.now()-r>1800*1e3)return;for(const a of this.postures){const i=e[a.theaterId];i&&(a.destroyers=i.destroyers,a.frigates=i.frigates,a.carriers=i.carriers,a.submarines=i.submarines,a.patrol=i.patrol,a.auxiliaryVessels=i.auxiliaryVessels,a.totalVessels=i.totalVessels)}console.log("[StrategicPosturePanel] Restored cached vessel counts")}catch{}}updatePostures(t){var r;const e=this.refreshGuard.begin();if(this.staleRetryTimer!==null&&(clearTimeout(this.staleRetryTimer),this.staleRetryTimer=null),this.staleRetryPending=!1,!t||!((r=t.postures)!=null&&r.length)){this.showNoData();return}this.postures=t.postures.map(a=>({...a,byOperator:{...a.byOperator}})),this.lastTimestamp=t.timestamp,this.isStale=t.stale||!1,this.augmentWithVessels(this.postures).then(()=>{var a;this.refreshGuard.isCurrent(e)&&(a=this.element)!=null&&a.isConnected&&(this.updateBadges(),this.render())})}updateBadges(){const t=this.postures.some(r=>r.postureLevel==="critical"),e=this.postures.some(r=>r.postureLevel==="elevated");t?this.setNewBadge(1,!0):e?this.setNewBadge(1,!1):this.clearNewBadge()}async refresh(){return this.fetchAndRender()}showNoData(){this.stopLoadingTimer(),this.setSafeContent(P(`
      <div class="posture-panel">
        <div class="posture-no-data">
          <div class="posture-no-data-icon pulse">📡</div>
          <div class="posture-no-data-title">${s("components.strategicPosture.acquiringData")}</div>
          <div class="posture-no-data-desc">
            ${s("components.strategicPosture.acquiringDesc")}
          </div>
          <div class="posture-data-sources">
            <div class="posture-source">
              <span class="posture-source-icon connecting">✈️</span>
              <span>${s("components.strategicPosture.openSkyAdsb")}</span>
            </div>
            <div class="posture-source">
              <span class="posture-source-icon waiting">🚢</span>
              <span>${s("components.strategicPosture.aisVesselStream")}</span>
            </div>
          </div>
          <button class="posture-retry-btn" data-panel-retry>↻ ${s("components.strategicPosture.retryNow")}</button>
        </div>
      </div>
    `,"legacy Panel.setContent() migration")),this.setRetryCallback(()=>this.refresh())}showFetchError(){this.stopLoadingTimer(),this.setSafeContent(P(`
      <div class="posture-panel">
        <div class="posture-no-data">
          <div class="posture-no-data-icon">⚠️</div>
          <div class="posture-no-data-title">${s("components.strategicPosture.feedRateLimited")}</div>
          <div class="posture-no-data-desc">
            ${s("components.strategicPosture.rateLimitedDesc")}
          </div>
          <div class="posture-error-hint">
            <strong>${s("components.strategicPosture.rateLimitedTip")}</strong>
          </div>
          <button class="posture-retry-btn" data-panel-retry>↻ ${s("components.strategicPosture.tryAgain")}</button>
        </div>
      </div>
    `,"legacy Panel.setContent() migration")),this.setRetryCallback(()=>this.refresh())}getPostureBadge(t){switch(t){case"critical":return`<span class="posture-badge posture-critical">${s("components.strategicPosture.badges.critical")}</span>`;case"elevated":return`<span class="posture-badge posture-elevated">${s("components.strategicPosture.badges.elevated")}</span>`;default:return`<span class="posture-badge posture-normal">${s("components.strategicPosture.badges.normal")}</span>`}}getTrendIcon(t,e){switch(t){case"increasing":return`<span class="posture-trend trend-up">↗ +${e}%</span>`;case"decreasing":return`<span class="posture-trend trend-down">↘ ${e}%</span>`;default:return`<span class="posture-trend trend-stable">→ ${s("components.strategicPosture.trendStable")}</span>`}}theaterDisplayName(t){const e=`components.strategicPosture.theaters.${t.theaterId}`,r=s(e);return r!==e?r:t.theaterName}renderTheater(t){const e=t.postureLevel!=="normal",r=this.theaterDisplayName(t);if(!e){const l=[];return t.totalAircraft>0&&l.push(`<span class="posture-chip air">✈️ ${t.totalAircraft}</span>`),t.totalVessels>0&&l.push(`<span class="posture-chip naval">⚓ ${t.totalVessels}</span>`),`
        <div class="posture-theater posture-compact" role="button" tabindex="0" data-lat="${t.centerLat}" data-lon="${t.centerLon}" title="${s("components.strategicPosture.clickToView",{name:o(r)})}">
          <span class="posture-name">${o(t.shortName)}</span>
          <div class="posture-chips">${l.join("")}</div>
          ${this.getPostureBadge(t.postureLevel)}
        </div>
      `}const a=[];t.fighters>0&&a.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.fighters")}">✈️ ${t.fighters}</span>`),t.tankers>0&&a.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.tankers")}">⛽ ${t.tankers}</span>`),t.awacs>0&&a.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.awacs")}">📡 ${t.awacs}</span>`),t.reconnaissance>0&&a.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.recon")}">🔍 ${t.reconnaissance}</span>`),t.transport>0&&a.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.transport")}">📦 ${t.transport}</span>`),t.bombers>0&&a.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.bombers")}">💣 ${t.bombers}</span>`),t.drones>0&&a.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.drones")}">🛸 ${t.drones}</span>`),a.length===0&&t.totalAircraft>0&&a.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.aircraft")}">✈️ ${t.totalAircraft}</span>`);const i=[];t.carriers>0&&i.push(`<span class="posture-stat carrier" title="${s("components.strategicPosture.units.carriers")}">🚢 ${t.carriers}</span>`),t.destroyers>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.destroyers")}">⚓ ${t.destroyers}</span>`),t.frigates>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.frigates")}">🛥️ ${t.frigates}</span>`),t.submarines>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.submarines")}">🦈 ${t.submarines}</span>`),t.patrol>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.patrol")}">🚤 ${t.patrol}</span>`),t.auxiliaryVessels>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.auxiliary")}">⚓ ${t.auxiliaryVessels}</span>`),i.length===0&&t.totalVessels>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.navalVessels")}">⚓ ${t.totalVessels}</span>`);const n=a.length>0,d=i.length>0;return`
      <div class="posture-theater posture-expanded ${t.postureLevel}" role="button" tabindex="0" data-lat="${t.centerLat}" data-lon="${t.centerLon}" title="${s("components.strategicPosture.clickToViewMap")}">
        <div class="posture-theater-header">
          <span class="posture-name">${o(r)}</span>
          ${this.getPostureBadge(t.postureLevel)}
        </div>

        <div class="posture-forces">
          ${n?`<div class="posture-force-row"><span class="posture-domain">${s("components.strategicPosture.domains.air")}</span><div class="posture-stats">${a.join("")}</div></div>`:""}
          ${d?`<div class="posture-force-row"><span class="posture-domain">${s("components.strategicPosture.domains.sea")}</span><div class="posture-stats">${i.join("")}</div></div>`:""}
        </div>

        <div class="posture-footer">
          ${t.strikeCapable?`<span class="posture-strike">⚡ ${s("components.strategicPosture.strike")}</span>`:""}
          ${this.getTrendIcon(t.trend,t.changePercent)}
          ${t.targetNation?`<span class="posture-focus">→ ${o(t.targetNation)}</span>`:""}
          ${tt()?`<button class="posture-deduce-btn" title="Deduce Situation with AI" style="background: none; border: none; cursor: pointer; opacity: 0.7; font-size: 1.1em; transition: opacity 0.2s; margin-left: auto;" data-theater='${o(JSON.stringify(t))}'>🧠</button>`:""}
        </div>
      </div>
    `}render(){this.stopLoadingTimer();const t=[...this.postures].sort((i,n)=>{const d={critical:0,elevated:1,normal:2};return(d[i.postureLevel]??2)-(d[n.postureLevel]??2)}),e=this.lastTimestamp?new Date(this.lastTimestamp).toLocaleTimeString():new Date().toLocaleTimeString(),a=`
      <div class="posture-panel">
        ${this.isStale?`<div class="posture-stale-warning">⚠️ ${s("components.strategicPosture.staleWarning")}</div>`:""}

        <details class="posture-emoji-key">
          <summary>💡 ${s("components.strategicPosture.emojiKeyLabel")}</summary>
          <div class="posture-emoji-key-body">
            <div class="posture-emoji-key-section">${s("components.strategicPosture.emojiKeyAir")}</div>
            <div class="posture-emoji-key-item"><span>✈️</span><span>${s("components.strategicPosture.units.fighters")}</span></div>
            <div class="posture-emoji-key-item"><span>⛽</span><span>${s("components.strategicPosture.units.tankers")}</span></div>
            <div class="posture-emoji-key-item"><span>📡</span><span>${s("components.strategicPosture.units.awacs")}</span></div>
            <div class="posture-emoji-key-item"><span>🔍</span><span>${s("components.strategicPosture.units.recon")}</span></div>
            <div class="posture-emoji-key-item"><span>📦</span><span>${s("components.strategicPosture.units.transport")}</span></div>
            <div class="posture-emoji-key-item"><span>💣</span><span>${s("components.strategicPosture.units.bombers")}</span></div>
            <div class="posture-emoji-key-item"><span>🛸</span><span>${s("components.strategicPosture.units.drones")}</span></div>
            <div class="posture-emoji-key-section">${s("components.strategicPosture.emojiKeyNaval")}</div>
            <div class="posture-emoji-key-item"><span>🚢</span><span>${s("components.strategicPosture.units.carriers")}</span></div>
            <div class="posture-emoji-key-item"><span>⚓</span><span>${s("components.strategicPosture.units.destroyers")}</span></div>
            <div class="posture-emoji-key-item"><span>🛥️</span><span>${s("components.strategicPosture.units.frigates")}</span></div>
            <div class="posture-emoji-key-item"><span>🦈</span><span>${s("components.strategicPosture.units.submarines")}</span></div>
            <div class="posture-emoji-key-item"><span>🚤</span><span>${s("components.strategicPosture.units.patrol")}</span></div>
            <div class="posture-emoji-key-item"><span>⚓</span><span>${s("components.strategicPosture.units.auxiliary")}</span></div>
          </div>
        </details>

        ${t.map(i=>this.renderTheater(i)).join("")}

        <div class="posture-footer">
          <span class="posture-updated">${this.isStale?"⚠️ ":""}${s("components.strategicPosture.updated")} ${e}</span>
          <button class="posture-refresh-btn" title="${s("components.strategicPosture.refresh")}" aria-label="${s("components.strategicPosture.refresh")}">↻</button>
        </div>
      </div>
    `;this.setSafeContent(P(a,"legacy Panel.setContent() migration"))}setLocationClickHandler(t){console.log("[StrategicPosturePanel] setLocationClickHandler called, handler:",typeof t),this.onLocationClick=t,console.log("[StrategicPosturePanel] Handler stored, onLocationClick now:",typeof this.onLocationClick)}getPostures(){return this.postures}show(){const t=this.element.classList.contains("hidden");super.show(),t&&this.fetchAndRender()}destroy(){this.refreshGuard.begin(),this.stopLoadingTimer(),this.staleRetryTimer!==null&&(clearTimeout(this.staleRetryTimer),this.staleRetryTimer=null),this.vesselTimeouts.forEach(t=>clearTimeout(t)),this.vesselTimeouts=[],super.destroy()}}const le=Object.freeze(Object.defineProperty({__proto__:null,StrategicPosturePanel:Rt},Symbol.toStringTag,{value:"Module"})),Q=["state-based","non-state","one-sided"],B={"state-based":"UCDP_VIOLENCE_TYPE_STATE_BASED","non-state":"UCDP_VIOLENCE_TYPE_NON_STATE","one-sided":"UCDP_VIOLENCE_TYPE_ONE_SIDED"};function xt(h){return Q.reduce((g,t)=>{var e;return g+(((e=h[B[t]])==null?void 0:e.count)??0)},0)}class At extends D{constructor(){super({id:"ucdp-events",title:s("panels.ucdpEvents"),showCount:!0,trackActivity:!0,infoTooltip:s("components.ucdpEvents.infoTooltip"),defaultRowSpan:2});c(this,"events",[]);c(this,"aggregates");c(this,"hasLoadedEvents",!1);c(this,"activeTab","state-based");c(this,"onEventClick");this.showLoading(s("common.loadingUcdpEvents")),this.content.addEventListener("click",t=>{var a;const e=t.target.closest(".panel-tab");if(e!=null&&e.dataset.tab){this.activeTab=e.dataset.tab,this.renderContent();return}const r=t.target.closest(".ucdp-row");if(r){const i=Number(r.dataset.lat),n=Number(r.dataset.lon);Number.isFinite(i)&&Number.isFinite(n)&&((a=this.onEventClick)==null||a.call(this,i,n))}}),R(this.content,".ucdp-row")}setEventClickHandler(t){this.onEventClick=t}setEvents(t,e){this.events=t,this.aggregates=e,this.hasLoadedEvents=!0,this.setCount(e?xt(e):t.length),this.renderContent()}hasData(){return this.hasLoadedEvents}getEvents(){return this.events}renderContent(){var u,f;const t=this.events.filter(p=>p.type_of_violence===this.activeTab),e=[{key:"state-based",label:s("components.ucdpEvents.stateBased")},{key:"non-state",label:s("components.ucdpEvents.nonState")},{key:"one-sided",label:s("components.ucdpEvents.oneSided")}],r={"state-based":0,"non-state":0,"one-sided":0};if(this.aggregates)for(const p of Q)r[p]=((u=this.aggregates[B[p]])==null?void 0:u.count)??0;else for(const p of this.events)r[p.type_of_violence]+=1;const a=this.aggregates?((f=this.aggregates[B[this.activeTab]])==null?void 0:f.totalDeaths)??0:t.reduce((p,m)=>p+m.deaths_best,0),i=e.map(p=>`<button class="panel-tab ${p.key===this.activeTab?"active":""}" data-tab="${p.key}">${p.label} <span class="ucdp-tab-count">${r[p.key]}</span></button>`).join(""),n=t.slice(0,50);let d;if(n.length===0)d=`<div class="panel-empty">${s("common.noEventsInCategory")}</div>`;else{const p=n.map(m=>{const b=m.type_of_violence==="state-based"?"ucdp-deaths-state":m.type_of_violence==="non-state"?"ucdp-deaths-nonstate":"ucdp-deaths-onesided",$=m.deaths_best>0?`<span class="${b}">${m.deaths_best}</span> <small class="ucdp-range">(${m.deaths_low}-${m.deaths_high})</small>`:'<span class="ucdp-deaths-zero">0</span>',w=`${o(m.side_a)} vs ${o(m.side_b)}`;return`<tr class="ucdp-row" data-lat="${m.latitude}" data-lon="${m.longitude}" tabindex="0">
          <td class="ucdp-country">${o(m.country)}</td>
          <td class="ucdp-deaths">${$}</td>
          <td class="ucdp-date">${m.date_start}</td>
          <td class="ucdp-actors">${w}</td>
        </tr>`}).join("");d=`
        <table class="ucdp-table">
          <thead>
            <tr>
              <th scope="col">${s("components.ucdpEvents.country")}</th>
              <th scope="col">${s("components.ucdpEvents.deaths")}</th>
              <th scope="col">${s("components.ucdpEvents.date")}</th>
              <th scope="col">${s("components.ucdpEvents.actors")}</th>
            </tr>
          </thead>
          <tbody>${p}</tbody>
        </table>`}const l=t.length>50?`<div class="panel-more">${s("components.ucdpEvents.moreNotShown",{count:t.length-50})}</div>`:"";this.setSafeContent(P(`
      <div class="ucdp-panel-content">
        <div class="ucdp-header">
          <div class="panel-tabs">${i}</div>
          ${a>0?`<span class="ucdp-total-deaths">${s("components.ucdpEvents.deathsCount",{count:a.toLocaleString()})}</span>`:""}
        </div>
        ${d}
        ${l}
      </div>
    `,"legacy Panel.setContent() migration"))}}const de=Object.freeze(Object.defineProperty({__proto__:null,UcdpEventsPanel:At},Symbol.toStringTag,{value:"Module"})),It={spike:"spike",persistent:"persistent",elevated:"elevated",normal:"normal"};class Ot extends D{constructor(){super({id:"thermal-escalation",title:s("components.thermalEscalation.title"),showCount:!0,trackActivity:!0,infoTooltip:s("components.thermalEscalation.infoTooltip")});c(this,"clusters",[]);c(this,"fetchedAt",null);c(this,"summary",{clusterCount:0,elevatedCount:0,spikeCount:0,persistentCount:0,conflictAdjacentCount:0,highRelevanceCount:0});c(this,"onLocationClick");this.showLoading(s("components.thermalEscalation.loading")),this.content.addEventListener("click",t=>{var i;const e=t.target.closest(".te-card");if(!e)return;const r=Number(e.dataset.lat),a=Number(e.dataset.lon);Number.isFinite(r)&&Number.isFinite(a)&&((i=this.onLocationClick)==null||i.call(this,r,a))}),R(this.content,".te-card")}setLocationClickHandler(t){this.onLocationClick=t}setData(t){this.clusters=t.clusters,this.fetchedAt=t.fetchedAt,this.summary=t.summary,this.setCount(t.clusters.length),this.render()}render(){if(this.clusters.length===0){this.setSafeContent(P(`<div class="panel-empty">${o(s("components.thermalEscalation.empty"))}</div>`,"legacy Panel.setContent() migration"));return}const t=this.fetchedAt&&this.fetchedAt.getTime()>0?s("components.thermalEscalation.footer.updated",{time:this.fetchedAt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}):"";this.setSafeContent(P(`
      <div class="te-panel">
        ${this.renderSummary()}
        <div class="te-list">
          ${this.clusters.map(e=>this.renderCard(e)).join("")}
        </div>
        ${t?`<div class="te-footer">${o(t)}</div>`:""}
      </div>
    `,"legacy Panel.setContent() migration"))}renderSummary(){const{clusterCount:t,elevatedCount:e,spikeCount:r,persistentCount:a,conflictAdjacentCount:i,highRelevanceCount:n}=this.summary,d=[{val:e,label:s("components.thermalEscalation.summary.elevated"),cls:"te-stat-elevated"},{val:r,label:s("components.thermalEscalation.summary.spikes"),cls:"te-stat-spike"},{val:a,label:s("components.thermalEscalation.summary.persist"),cls:"te-stat-persistent"},{val:i,label:s("components.thermalEscalation.summary.conflict"),cls:"te-stat-conflict"},{val:n,label:s("components.thermalEscalation.summary.strategic"),cls:"te-stat-strategic"}].filter(l=>l.val>0);return`
      <div class="te-summary">
        <div class="te-stat">
          <span class="te-stat-val">${t}</span>
          <span class="te-stat-label">${o(s("components.thermalEscalation.summary.total"))}</span>
        </div>
        ${d.map(l=>`
        <div class="te-stat ${l.cls}">
          <span class="te-stat-val">${l.val}</span>
          <span class="te-stat-label">${o(l.label)}</span>
        </div>`).join("")}
      </div>
    `}renderCard(t){const e=It[t.status]??"normal",r=t.persistenceHours>=24?`${Math.round(t.persistenceHours/24)}d`:`${Math.round(t.persistenceHours)}h`,a=t.totalFrp>=1e3?`${(t.totalFrp/1e3).toFixed(1)}k`:t.totalFrp.toFixed(0),i=t.countDelta>0?"+":"",n=t.countDelta>0?"pos":t.countDelta<0?"neg":"",d=t.context==="conflict_adjacent"?`<span class="te-badge te-badge-conflict">${o(s("components.thermalEscalation.badges.conflictAdjacent"))}</span>`:t.context==="energy_adjacent"?`<span class="te-badge te-badge-energy">${o(s("components.thermalEscalation.badges.energyAdjacent"))}</span>`:t.context==="industrial"?`<span class="te-badge te-badge-industrial">${o(s("components.thermalEscalation.badges.industrial"))}</span>`:"",l=[`<span class="te-badge te-badge-${e}">${o(t.status)}</span>`,d,t.strategicRelevance==="high"?`<span class="te-badge te-badge-strategic">${o(s("components.thermalEscalation.badges.strategic"))}</span>`:""].filter(Boolean).join(""),u=Mt(t.lastDetectedAt);return`
      <div class="te-card te-card-${e}" data-lat="${t.lat}" data-lon="${t.lon}" role="button" tabindex="0">
        <div class="te-card-accent"></div>
        <div class="te-card-body">
          <div class="te-region">${o(t.regionLabel)}</div>
          <div class="te-meta">${o(s("components.thermalEscalation.observations",{count:t.observationCount}))} · ${o(s("components.thermalEscalation.sources",{count:t.uniqueSourceCount}))}</div>
          <div class="te-badges">${l}</div>
        </div>
        <div class="te-metrics">
          <div class="te-frp">${o(a)} <span class="te-frp-unit">MW</span></div>
          <div class="te-delta ${n}">${o(`${i}${Math.round(t.countDelta)}`)} · z${t.zScore.toFixed(1)}</div>
          <div class="te-persist">${o(r)}</div>
          <div class="te-last">${o(u)}</div>
        </div>
      </div>
    `}}function Mt(h){const g=Date.now()-h.getTime();if(g<3600*1e3){const e=Math.max(1,Math.floor(g/6e4));return s("components.thermalEscalation.age.minutesAgo",{count:e})}if(g<1440*60*1e3){const e=Math.max(1,Math.floor(g/36e5));return s("components.thermalEscalation.age.hoursAgo",{count:e})}const t=Math.floor(g/(1440*60*1e3));return t<30?s("components.thermalEscalation.age.daysAgo",{count:t}):h.toISOString().slice(0,10)}const pe=Object.freeze(Object.defineProperty({__proto__:null,ThermalEscalationPanel:Ot},Symbol.toStringTag,{value:"Module"})),Ft=50,_t=3600*1e3,Bt=180*1e3;class jt extends D{constructor(){super({id:"oref-sirens",title:s("panels.orefSirens"),showCount:!0,trackActivity:!0,infoTooltip:s("components.orefSirens.infoTooltip")});c(this,"alerts",[]);c(this,"historyCount24h",0);c(this,"totalHistoryCount",0);c(this,"historyWaves",[]);c(this,"historyFetchInFlight",!1);c(this,"historyLastFetchAt",0);this.showLoading(s("components.orefSirens.checking"))}setData(t){if(!t.configured){this.setSafeContent(T`<div class="panel-empty">${s("components.orefSirens.notConfigured")}</div>`),this.setCount(0);return}const e=this.alerts.length;this.alerts=t.alerts||[],this.historyCount24h=t.historyCount24h||0,this.totalHistoryCount=t.totalHistoryCount||0,this.setCount(this.alerts.length||this.historyCount24h||this.totalHistoryCount),e===0&&this.alerts.length>0&&this.setNewBadge(this.alerts.length),this.render(),this.loadHistory()}loadHistory(){this.historyFetchInFlight||Date.now()-this.historyLastFetchAt<Bt||(this.historyFetchInFlight=!0,this.historyLastFetchAt=Date.now(),vt().then(t=>{var e;(e=t.history)!=null&&e.length&&(this.historyWaves=t.history,this.render())}).catch(t=>{console.warn("[OrefSirensPanel] History fetch failed:",t)}).finally(()=>{this.historyFetchInFlight=!1}))}formatAlertTime(t){try{const e=new Date(t).getTime();if(!Number.isFinite(e))return"";const r=Date.now()-e;if(r<6e4)return s("components.orefSirens.justNow");const a=Math.floor(r/6e4);if(a<60)return`${a}m`;const i=Math.floor(a/60);return i<24?`${i}h`:`${Math.floor(i/24)}d`}catch{return""}}formatWaveTime(t){try{const e=new Date(t);return Number.isFinite(e.getTime())?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})+" "+e.toLocaleDateString(void 0,{month:"short",day:"numeric"}):""}catch{return""}}renderHistoryWaves(){if(!this.historyWaves.length)return this.historyCount24h>0?T`<div class="oref-history-section">
          <div class="oref-history-title">${s("components.orefSirens.historySummary",{count:String(this.historyCount24h),waves:"..."})}</div>
          <div class="oref-wave-list" style="opacity:0.5;text-align:center;padding:8px">${s("components.orefSirens.loadingHistory",{defaultValue:"Loading history..."})}</div>
        </div>`:T``;const t=Date.now(),e=this.historyWaves.map(i=>({wave:i,ts:new Date(i.timestamp).getTime()}));e.sort((i,n)=>n.ts-i.ts);const r=e.slice(0,Ft),a=H(r.map(({wave:i,ts:n})=>{const d=t-n<_t,l=d?"oref-wave-row oref-wave-recent":"oref-wave-row",u=d?T`<span class="oref-recent-badge">RECENT</span>`:T``,f=i.alerts.map($=>$.title||$.cat),p=[...new Set(f)],m=i.alerts.reduce(($,w)=>{var S;return $+(((S=w.data)==null?void 0:S.length)||0)},0),b=p.join(", ")+(m>0?` - ${m} areas`:"");return T`<div class="${l}">
        <div class="oref-wave-header">
          <span class="oref-wave-time">${this.formatWaveTime(i.timestamp)}</span>
          ${u}
        </div>
        <div class="oref-wave-summary">${b}</div>
      </div>`}));return T`<div class="oref-history-section">
      <div class="oref-history-title">${s("components.orefSirens.historySummary",{count:String(this.historyCount24h),waves:String(r.length)})}</div>
      <div class="oref-wave-list">${a}</div>
    </div>`}render(){const t=this.renderHistoryWaves();if(this.alerts.length===0){this.setSafeContent(T`
        <div class="oref-panel-content">
          <div class="oref-status oref-ok">
            <span class="oref-status-icon">&#x2705;</span>
            <span>${s("components.orefSirens.noAlerts")}</span>
          </div>
          ${t}
        </div>
      `);return}const e=H(this.alerts.slice(0,20).map(r=>{const a=(r.data||[]).join(", "),i=this.formatAlertTime(r.alertDate);return T`<div class="oref-alert-row">
        <div class="oref-alert-header">
          <span class="oref-alert-title">${r.title||r.cat}</span>
          <span class="oref-alert-time">${i}</span>
        </div>
        <div class="oref-alert-areas">${a}</div>
      </div>`}));this.setSafeContent(T`
      <div class="oref-panel-content">
        <div class="oref-status oref-danger">
          <span class="oref-pulse"></span>
          <span>${s("components.orefSirens.activeSirens",{count:String(this.alerts.length)})}</span>
        </div>
        <div class="oref-list">${e}</div>
        ${t}
      </div>
    `)}}const he=Object.freeze(Object.defineProperty({__proto__:null,OrefSirensPanel:jt},Symbol.toStringTag,{value:"Module"})),Ht={normal:"var(--color-success, #22c55e)",minor:"#f59e0b",moderate:"#f97316",major:"#ef4444",severe:"#dc2626",unknown:"#9ca3af"},z={scheduled:"#6b7280",boarding:"#3b82f6",departed:"#8b5cf6",airborne:"#22c55e",landed:"#14b8a6",arrived:"#0ea5e9",cancelled:"#ef4444",diverted:"#f59e0b",unknown:"#6b7280"};function W(h){return h==null?"—":String(Math.round(h))}function F(h){return h?h.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}):"—"}function G(h){return h?h<60?`${h}m`:`${Math.floor(h/60)}h ${h%60}m`:"—"}function _(){const h=new Date;return`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,"0")}-${String(h.getDate()).padStart(2,"0")}`}const Vt=["ops","flights","airlines","tracking","news","prices"],Ut={ops:"Ops",flights:"Flights",airlines:"Airlines",tracking:"Track",news:"News",prices:"Prices"};class qt extends D{constructor(){var a;super({id:"airline-intel",title:s("panels.airlineIntel"),trackActivity:!0,infoTooltip:s("components.airlineIntel.infoTooltip")});c(this,"activeTab","ops");c(this,"airports");c(this,"opsData",[]);c(this,"flightsData",[]);c(this,"flightsAirport","");c(this,"carriersData",[]);c(this,"trackingData",[]);c(this,"trackingFlightData",[]);c(this,"trackingQuery","");c(this,"newsData",[]);c(this,"googleFlightsData",[]);c(this,"datesData",[]);c(this,"pricesMode","search");c(this,"pricesCabin","ECONOMY");c(this,"pricesDegraded",!1);c(this,"pricesError","");c(this,"pricesOrigin","IST");c(this,"pricesDest","");c(this,"pricesDep","");c(this,"datesStart","");c(this,"datesEnd","");c(this,"datesTripDuration",7);c(this,"datesRoundTrip",!0);c(this,"loading",!1);c(this,"refreshTimer",null);c(this,"liveIndicator");c(this,"tabBar");const t=q.get();this.airports=t.airports.slice(0,8);const e=t.routes[0];if(e){const i=e.split("-");i[0]&&(this.pricesOrigin=i[0]),i[1]&&(this.pricesDest=i[1])}else this.pricesOrigin=this.airports[0]??"IST",this.pricesDest=this.airports[1]??"";const r=document.createElement("button");r.className="icon-btn",r.title=s("common.refresh"),r.textContent="↻",r.addEventListener("click",()=>this.refresh()),this.header.appendChild(r),this.liveIndicator=document.createElement("span"),this.liveIndicator.className="live-badge",this.liveIndicator.textContent="● LIVE",this.liveIndicator.style.cssText="display:none;color:#22c55e;font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;margin-left:8px;letter-spacing:0.5px;",(a=this.header.querySelector(".panel-title"))==null||a.appendChild(this.liveIndicator),this.tabBar=document.createElement("div"),this.tabBar.className="panel-tabs",Vt.forEach(i=>{const n=document.createElement("button");n.className=`panel-tab${i===this.activeTab?" active":""}`,n.textContent=Ut[i],n.dataset.tab=i,n.addEventListener("click",()=>this.switchTab(i)),this.tabBar.appendChild(n)}),this.element.insertBefore(this.tabBar,this.content),this.content.classList.add("airline-intel-content"),this.content.addEventListener("click",i=>{const n=i.target,d=n.closest("[data-price-mode]");if(d){this.pricesMode=d.dataset.priceMode,this.pricesError="",this.pricesDegraded=!1,this.renderTab();return}(n.id==="priceSearchBtn"||n.closest("#priceSearchBtn"))&&this.handleFlightSearch(),(n.id==="datesSearchBtn"||n.closest("#datesSearchBtn"))&&this.handleDatesSearch(),(n.id==="trackSearchBtn"||n.closest("#trackSearchBtn"))&&this.handleTrackSearch(),(n.id==="trackClearBtn"||n.closest("#trackClearBtn"))&&(this.trackingQuery="",this.trackingFlightData=[],this.trackingData=[],this.loadTab("tracking"))}),this.content.addEventListener("keydown",i=>{i.key==="Enter"&&i.target.id==="trackQueryInput"&&this.handleTrackSearch()}),this.runWhenConnected(()=>{this.refresh(),this.refreshTimer=setInterval(()=>void this.refresh(),5*6e4)})}toggle(t){this.element.style.display=t?"":"none"}destroy(){this.refreshTimer&&clearInterval(this.refreshTimer),super.destroy()}updateLivePositions(t){this.trackingQuery||(this.trackingData=t,this.activeTab==="tracking"&&this.renderTab())}setLiveMode(t){this.liveIndicator.style.display=t?"":"none"}handleFlightSearch(){var l,u,f,p;const t=(((l=this.content.querySelector("#priceFromInput"))==null?void 0:l.value)||"").toUpperCase().trim(),e=(((u=this.content.querySelector("#priceToInput"))==null?void 0:u.value)||"").toUpperCase().trim(),r=((f=this.content.querySelector("#priceDepInput"))==null?void 0:f.value)||"",a=((p=this.content.querySelector("#priceCabinSelect"))==null?void 0:p.value)||"ECONOMY",i=this.content.querySelector("#priceInlineErr"),n=/^[A-Z]{3}$/;if(!n.test(t)||!n.test(e)){i&&(i.textContent="Enter valid 3-letter IATA codes");return}const d=_();if(r&&r<d){i&&(i.textContent="Departure date must be today or future");return}i&&(i.textContent=""),this.pricesOrigin=t,this.pricesDest=e,this.pricesDep=r,this.pricesCabin=a,this.loadTab("prices")}handleDatesSearch(){var p,m,b,$,w,S,L;const t=(((p=this.content.querySelector("#datesFromInput"))==null?void 0:p.value)||"").toUpperCase().trim(),e=(((m=this.content.querySelector("#datesToInput"))==null?void 0:m.value)||"").toUpperCase().trim(),r=((b=this.content.querySelector("#datesStartInput"))==null?void 0:b.value)||"",a=(($=this.content.querySelector("#datesEndInput"))==null?void 0:$.value)||"",i=((w=this.content.querySelector("#datesRoundTripCheck"))==null?void 0:w.checked)??!0,n=parseInt(((S=this.content.querySelector("#datesTripDurInput"))==null?void 0:S.value)||"7",10),d=((L=this.content.querySelector("#datesCabinSelect"))==null?void 0:L.value)||"ECONOMY",l=this.content.querySelector("#datesInlineErr"),u=/^[A-Z]{3}$/;if(!u.test(t)||!u.test(e)){l&&(l.textContent="Enter valid 3-letter IATA codes");return}if(!r||!a){l&&(l.textContent="Enter start and end dates");return}if(r<_()){l&&(l.textContent="Start date must be today or future");return}if(r>=a){l&&(l.textContent="Start date must be before end date");return}if(i&&(Number.isNaN(n)||n<1)){l&&(l.textContent="Trip duration must be at least 1 day");return}const f=(new Date(a).getTime()-new Date(r).getTime())/864e5;l&&(l.textContent=f>90?"Range exceeds 90 days — results may be incomplete":""),this.pricesOrigin=t,this.pricesDest=e,this.datesStart=r,this.datesEnd=a,this.datesRoundTrip=i,this.datesTripDuration=Number.isNaN(n)?7:n,this.pricesCabin=d,this.loadTab("prices")}handleTrackSearch(){var e;const t=(((e=this.content.querySelector("#trackQueryInput"))==null?void 0:e.value)||"").trim().toUpperCase();this.trackingQuery=t,this.trackingFlightData=[],this.trackingData=[],this.loadTab("tracking")}switchTab(t){this.activeTab=t,this.tabBar.querySelectorAll(".panel-tab").forEach(e=>{e.classList.toggle("active",e.dataset.tab===t)}),this.renderTab(),(t==="ops"&&!this.opsData.length||t==="flights"&&!this.flightsData.length||t==="airlines"&&!this.carriersData.length||t==="tracking"&&!this.trackingData.length||t==="news"&&!this.newsData.length)&&this.loadTab(t)}async refresh(){const t=this.activeTab!=="prices";if(!this.element.isConnected){this.runWhenConnected(()=>{this.refresh()});return}this.activeTab!=="ops"&&this.loadOps(),t&&this.loadTab(this.activeTab)}async loadOps(){this.opsData=await U(this.airports),this.activeTab==="ops"&&this.renderTab()}async loadTab(t){this.loading=!0,this.renderTab();try{switch(t){case"ops":this.opsData=await U(this.airports);break;case"flights":{const e=this.airports[0]??"IST";this.flightsData=await wt(e,"both",30),this.flightsAirport=e;break}case"airlines":this.carriersData=await Tt(this.airports);break;case"tracking":this.trackingQuery?/^[A-Z]{2}\d{1,4}$/.test(this.trackingQuery)?this.trackingFlightData=await kt(this.trackingQuery):/^[0-9A-F]{6}$/i.test(this.trackingQuery)?this.trackingData=await I({icao24:this.trackingQuery.toLowerCase()}):this.trackingData=await I({callsign:this.trackingQuery}):this.trackingData=await I({});break;case"news":{const e=[...this.airports,...q.get().airlines];this.newsData=await $t(e,24,20);break}case"prices":{if(this.pricesMode==="dates"){const e=await yt({origin:this.pricesOrigin,destination:this.pricesDest,startDate:this.datesStart,endDate:this.datesEnd,tripDuration:this.datesTripDuration,isRoundTrip:this.datesRoundTrip,cabinClass:this.pricesCabin});this.datesData=e.dates,this.pricesDegraded=e.degraded,this.pricesError=e.error}else{const e=this.pricesDep||new Date(Date.now()+6048e5).toISOString().slice(0,10),r=await bt({origin:this.pricesOrigin,destination:this.pricesDest,departureDate:e,cabinClass:this.pricesCabin});this.googleFlightsData=r.flights,this.pricesDegraded=r.degraded,this.pricesError=r.error}break}}}catch{}this.loading=!1,this.renderTab()}renderLoading(){E(this.content,y(`<div class="panel-loading">${s("common.loading")}</div>`,"legacy direct innerHTML migration"))}renderTab(){if(this.loading){this.renderLoading();return}switch(this.activeTab){case"ops":this.renderOps();break;case"flights":this.renderFlights();break;case"airlines":this.renderAirlines();break;case"tracking":this.renderTracking();break;case"news":this.renderNews();break;case"prices":this.renderPrices();break}}renderOps(){if(!this.opsData.length){this.setTrustedContent(y(`<div class="no-data">${s("components.airlineIntel.noOpsData")}</div>`,"legacy direct innerHTML migration"));return}const t=this.opsData.map(e=>`
      <div class="ops-row">
        <div class="ops-iata">${o(e.iata)}</div>
        <div class="ops-name">${o(e.name||e.iata)}</div>
        <div class="ops-severity" style="color:${Ht[e.severity]??"#aaa"}">${e.severity.toUpperCase()}</div>
        <div class="ops-delay">${e.avgDelayMinutes>0?`+${e.avgDelayMinutes}m`:"—"}</div>
        <div class="ops-cancel">${e.cancellationRate>0?`${e.cancellationRate.toFixed(1)}% cxl`:""}</div>
        ${e.closureStatus?'<div class="ops-closed">CLOSED</div>':""}
        ${e.notamFlags.length?'<div class="ops-notam">⚠️ NOTAM</div>':""}
      </div>`).join("");this.setTrustedContent(y(`<div class="ops-grid">${t}</div>`,"legacy direct innerHTML migration"))}renderFlights(){if(!this.flightsData.length){this.setTrustedContent(y(`<div class="no-data">${s("components.airlineIntel.noFlights")}</div>`,"legacy direct innerHTML migration"));return}const t=this.flightsData.map(e=>{const r=z[e.status]??"#6b7280",a=St(e,this.flightsAirport);return`
        <div class="flight-row">
          <div class="flight-num">${o(e.flightNumber)}</div>
          <div class="flight-route">${o(e.origin.iata)} → ${o(e.destination.iata)}</div>
          <div class="flight-time">${F(a)}</div>
          <div class="flight-delay" style="color:${e.delayMinutes>0?"#f97316":"#aaa"}">${e.delayMinutes>0?`+${e.delayMinutes}m`:""}</div>
          <div class="flight-status" style="color:${r}">${e.status}</div>
        </div>`}).join("");this.setTrustedContent(y(`<div class="flights-list">${t}</div>`,"legacy direct innerHTML migration"))}renderAirlines(){if(!this.carriersData.length){this.setTrustedContent(y(`<div class="no-data">${s("components.airlineIntel.noCarrierData")}</div>`,"legacy direct innerHTML migration"));return}const t=this.carriersData.slice(0,15).map(e=>`
      <div class="carrier-row">
        <div class="carrier-name">${o(e.carrierName||e.carrierIata)}</div>
        <div class="carrier-flights">${e.totalFlights} flt</div>
        <div class="carrier-delay" style="color:${e.delayPct>30?"#ef4444":"#aaa"}">${e.delayPct.toFixed(1)}% delayed</div>
        <div class="carrier-cancel">${e.cancellationRate.toFixed(1)}% cxl</div>
      </div>`).join("");this.setTrustedContent(y(`<div class="carriers-list">${t}</div>`,"legacy direct innerHTML migration"))}renderTracking(){const t=this.trackingQuery?'<button id="trackClearBtn" class="icon-btn" style="padding:4px 8px;color:#9ca3af" title="Back to live feed" aria-label="Back to live feed">×</button>':"",e=`
      <div class="track-search" style="display:flex;gap:6px;padding:8px 0 6px">
        <input id="trackQueryInput" class="price-input" placeholder="Flight (EK3) or callsign (UAE3)" value="${o(this.trackingQuery)}" style="flex:1;min-width:0">
        ${t}<button id="trackSearchBtn" class="icon-btn" style="padding:4px 10px">Track</button>
      </div>`;if(this.loading){E(this.content,y(`${e}<div class="panel-loading">${s("common.loading")}</div>`,"legacy direct innerHTML migration"));return}if(this.trackingFlightData.length){const a=this.trackingFlightData.map(i=>{const n=i.estimatedDeparture?`Dep ${F(i.estimatedDeparture)}`:"",d=i.estimatedArrival?` · Arr ${F(i.estimatedArrival)}`:"",l=z[i.status]??"#6b7280";return`
          <div class="track-flight-card" style="padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="display:flex;gap:8px;align-items:baseline">
              <strong>${o(i.flightNumber)}</strong>
              <span style="color:#9ca3af;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${o(i.carrier.name||i.carrier.iata)}</span>
              <span style="color:${l};font-size:calc(11px * var(--wm-panel-effective-scale, 1));margin-left:auto">${i.status}</span>
            </div>
            <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(i.origin.iata)} → ${o(i.destination.iata)}${n?` · ${n}`:""}${d}</div>
            ${i.aircraftType?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:#6b7280">${o(i.aircraftType)}</div>`:""}
            ${i.gate||i.terminal?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:#6b7280">${i.gate?`Gate ${o(i.gate)}`:""}${i.terminal?`${i.gate?" · ":""}T${o(i.terminal)}`:""}</div>`:""}
            ${i.delayMinutes>0?`<div style="color:#f97316;font-size:calc(12px * var(--wm-panel-effective-scale, 1))">+${i.delayMinutes}m delay</div>`:""}
          </div>`}).join("");E(this.content,y(`${e}<div>${a}</div>`,"legacy direct innerHTML migration"));return}if(this.trackingData.length){const a=this.trackingData.slice(0,20).map(i=>`
        <div class="track-row">
          <div class="track-cs">${o(i.callsign||i.icao24)}</div>
          <div class="track-alt">${W(i.altitudeFt)} ft</div>
          <div class="track-spd">${W(i.groundSpeedKts)} kts</div>
          <div class="track-pos">${i.lat.toFixed(2)}, ${i.lon.toFixed(2)}</div>
        </div>`).join("");E(this.content,y(`${e}<div class="tracking-list">${a}</div>`,"legacy direct innerHTML migration"));return}const r=this.trackingQuery?`<div class="no-data">No results for <strong>${o(this.trackingQuery)}</strong>.</div>`:`<div class="no-data">${s("components.airlineIntel.noTrackingData")}</div>`;E(this.content,y(`${e}${r}`,"legacy direct innerHTML migration"))}renderNews(){if(!this.newsData.length){this.setTrustedContent(y(`<div class="no-data">${s("components.airlineIntel.noNews")}</div>`,"legacy direct innerHTML migration"));return}const t=this.newsData.map(e=>`
      <div class="news-item" style="padding:8px 0;border-bottom:1px solid var(--border,#2a2a2a)">
        <a href="${Y(e.url)}" target="_blank" rel="noopener" class="news-link">${o(e.title)}</a>
        <div class="news-meta" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim,#888);margin-top:2px">${o(e.sourceName)} · ${e.publishedAt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</div>
      </div>`).join("");E(this.content,y(`<div class="news-list" style="padding:0 4px">${t}</div>`,"legacy direct innerHTML migration"))}renderPrices(){const t=this.pricesMode==="search",e=`
      <div class="price-mode-toggle">
        <button class="price-mode-btn${t?" active":""}" data-price-mode="search">${o(s("components.airlineIntel.searchFlights"))}</button>
        <button class="price-mode-btn${t?"":" active"}" data-price-mode="dates">${o(s("components.airlineIntel.bestDates"))}</button>
      </div>`,r=this.pricesDegraded?`<div class="gf-degraded">${o(s("components.airlineIntel.degradedResults"))}</div>`:"";if(t){const a=this.pricesDep||new Date(Date.now()+6048e5).toISOString().slice(0,10),i=`
        <div class="price-controls">
          <input id="priceFromInput" class="price-input" placeholder="From" aria-label="Origin airport code" maxlength="3" value="${o(this.pricesOrigin)}" style="width:54px">
          <span style="color:#6b7280" aria-hidden="true">→</span>
          <input id="priceToInput" class="price-input" placeholder="To" aria-label="Destination airport code" maxlength="3" value="${o(this.pricesDest)}" style="width:54px">
          <input id="priceDepInput" class="price-input" type="date" aria-label="Departure date" value="${o(a)}" style="width:128px">
          <select id="priceCabinSelect" class="price-input" aria-label="Cabin class" style="width:110px">
            <option value="ECONOMY"${this.pricesCabin==="ECONOMY"?" selected":""}>Economy</option>
            <option value="PREMIUM_ECONOMY"${this.pricesCabin==="PREMIUM_ECONOMY"?" selected":""}>Premium Economy</option>
            <option value="BUSINESS"${this.pricesCabin==="BUSINESS"?" selected":""}>Business</option>
            <option value="FIRST"${this.pricesCabin==="FIRST"?" selected":""}>First</option>
          </select>
          <button id="priceSearchBtn" class="icon-btn" style="padding:4px 10px">${s("header.search")}</button>
        </div>
        <div id="priceInlineErr" style="color:#ef4444;font-size:calc(11px * var(--wm-panel-effective-scale, 1));min-height:14px"></div>`;let n;this.googleFlightsData.length?n=`<div class="gf-list">${this.googleFlightsData.map(l=>{const u=l.stops===0?s("components.airlineIntel.nonstop"):`${l.stops} stop`,f=l.legs.map(p=>`
              <div class="gf-leg">
                <span class="gf-airline">${o(p.airlineCode)} ${o(p.flightNumber)}</span>
                <span>${o(p.departureAirport)} ${o(p.departureDatetime.slice(11,16))}</span>
                <span>→</span>
                <span>${o(p.arrivalAirport)} ${o(p.arrivalDatetime.slice(11,16))}</span>
                <span class="gf-dur">(${G(p.durationMinutes)})</span>
              </div>`).join("");return`
            <div class="gf-card">
              <div class="gf-summary">
                <span class="gf-price">${Math.round(l.price).toLocaleString()}</span>
                <span class="gf-total-dur">${G(l.durationMinutes)}</span>
                <span class="gf-stops">${o(u)}</span>
              </div>
              ${f}
            </div>`}).join("")}</div>`:this.pricesError?n=`<div class="no-data" style="color:#ef4444">${o(this.pricesError)}</div>`:n=`<div class="no-data">${o(s("components.airlineIntel.enterRouteAndDate"))}</div>`,E(this.content,y(`${e}${i}${r}${n}`,"legacy direct innerHTML migration"))}else{const a=`
        <div class="price-controls">
          <input id="datesFromInput" class="price-input" placeholder="From" maxlength="3" value="${o(this.pricesOrigin)}" style="width:54px">
          <span style="color:#6b7280">→</span>
          <input id="datesToInput" class="price-input" placeholder="To" maxlength="3" value="${o(this.pricesDest)}" style="width:54px">
          <input id="datesStartInput" class="price-input" type="date" value="${o(this.datesStart||_())}" style="width:128px">
          <input id="datesEndInput" class="price-input" type="date" value="${o(this.datesEnd)}" style="width:128px">
          <label style="display:flex;align-items:center;gap:4px;font-size:calc(12px * var(--wm-panel-effective-scale, 1))">
            <input id="datesRoundTripCheck" type="checkbox" ${this.datesRoundTrip?"checked":""}>${o(s("components.airlineIntel.roundTrip"))}
          </label>
          <label style="display:flex;align-items:center;gap:4px;font-size:calc(12px * var(--wm-panel-effective-scale, 1))">
            ${o(s("components.airlineIntel.tripDays"))}:
            <input id="datesTripDurInput" class="price-input" type="number" min="1" value="${this.datesTripDuration}" style="width:44px">
          </label>
          <select id="datesCabinSelect" class="price-input" aria-label="Cabin class" style="width:110px">
            <option value="ECONOMY"${this.pricesCabin==="ECONOMY"?" selected":""}>Economy</option>
            <option value="PREMIUM_ECONOMY"${this.pricesCabin==="PREMIUM_ECONOMY"?" selected":""}>Premium Economy</option>
            <option value="BUSINESS"${this.pricesCabin==="BUSINESS"?" selected":""}>Business</option>
            <option value="FIRST"${this.pricesCabin==="FIRST"?" selected":""}>First</option>
          </select>
          <button id="datesSearchBtn" class="icon-btn" style="padding:4px 10px">${s("header.search")}</button>
        </div>
        <div id="datesInlineErr" style="color:#ef4444;font-size:calc(11px * var(--wm-panel-effective-scale, 1));min-height:14px"></div>`;let i;if(this.datesData.length){const n=[...this.datesData].sort((p,m)=>p.price-m.price),d=n.map(p=>p.price),l=d[Math.floor(d.length*.2)]??1/0,u=d[Math.floor(d.length*.8)]??-1/0;i=`<div class="dp-list">${n.map(p=>{const m=p.price<=l?"dp-cheap":p.price>=u?"dp-expensive":"";return`
            <div class="dp-row">
              <span class="dp-date">${o(p.date)}</span>
              ${p.returnDate?`<span class="dp-return">${o(p.returnDate)}</span>`:""}
              <span class="dp-price ${m}">${Math.round(p.price).toLocaleString()}</span>
            </div>`}).join("")}</div>`}else this.pricesError?i=`<div class="no-data" style="color:#ef4444">${o(this.pricesError)}</div>`:i=`<div class="no-data">${o(s("components.airlineIntel.enterDateRange"))}</div>`;E(this.content,y(`${e}${a}${r}${i}`,"legacy direct innerHTML migration"))}}}const ue=Object.freeze(Object.defineProperty({__proto__:null,AirlineIntelPanel:qt},Symbol.toStringTag,{value:"Module"}));export{ue as A,oe as D,he as O,ce as S,pe as T,de as U,le as a};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["panels-defense-DjiMy4yg.js"]=1;