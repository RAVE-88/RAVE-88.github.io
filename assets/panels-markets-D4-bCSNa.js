const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CSDWQ1jW.js","assets/index-CE8VpG3t.js","assets/theme-colors-BmUbP5Zj.js","assets/clerk-Bv6SR6q7.js","assets/i18n-qlunRAMb.js","assets/persistent-cache-DHxY9lLL.js","assets/tauri-bridge-UPyks66k.js","assets/storage-quota-BtyHkWgJ.js","assets/debugbear-rum-BwOaYCU9.js","assets/analytics-DYGwu9Ab.js","assets/convex-client-CpRmA3au.js","assets/widget-store-OQfX_lfG.js","assets/index-Bxy5zMWX.js","assets/panel-storage-tBgv39vh.js","assets/entitlements-DAACEsnd.js","assets/gdelt-intel-FTZQ7YLF.js","assets/runtime-config-W7vfk27c.js","assets/panel-gating-RGvzctmX.js","assets/source-provenance-Cjq3jyzJ.js","assets/fx-rates-CeS5uvx2.js"])))=>i.map(i=>d[i]);
var ia=Object.defineProperty;var na=(a,i,e)=>i in a?ia(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e;var g=(a,i,e)=>na(a,typeof i!="symbol"?i+"":i,e);import{P as _}from"./Panel-3zvnDVWb.js";import{t as d,S as Xe,b as Ct,L as Pt,e as At}from"./theme-colors-BmUbP5Zj.js";import{aG as T,aY as Rt,aZ as I,a_ as Dt,a$ as ra,b0 as oa,b1 as la,b2 as ca,b3 as da,b4 as pa,b5 as Tt,b6 as Ke,b7 as V,b8 as ma,b9 as ua,ba as fa}from"./App-BLvralVM.js";import{e as o,u as S,s as ha,a as E,j as N}from"./sanitize-D7dx0cA1.js";import{m as Y,s as va}from"./sparkline-B3e4nvqm.js";import"./markets-DAj2UmR6.js";import"./feeds-DscCAg9l.js";import"./panels-DjXt_yRS.js";import{c as He}from"./watchlist-modal-CCYxJW2H.js";import{r as ga,c as ya,g as xa,P as Q,o as ba}from"./market-chart-modal-D-7yo8aV.js";import{g as R,a as F,b as $a,c as wa,d as Sa,e as _a,f as Ea,h as ka,i as Ca}from"./stock-fundamentals-display-BdKFnC_N.js";import{W as Ft}from"./WatchlistTableView-DVNZyUxO.js";import{f as Pa}from"./wsb-tickers-drloxcoW.js";import{describeFreshness as Aa}from"./persistent-cache-DHxY9lLL.js";import{F as Ra}from"./FrameworkSelector-q1BW3wIE.js";import{h as Da}from"./panel-gating-RGvzctmX.js";import{b as Ta}from"./activation-DdoRK80V.js";import{_ as C}from"./clerk-Bv6SR6q7.js";import{F as Fa}from"./fx-rates-CeS5uvx2.js";import{b as z,a as Ma,E as Na,g as W,r as Ia,e as La,M as Mt}from"./index-CE8VpG3t.js";import{v as za,I as Oa,y as Fe,z as Me,A as Ba,B as Nt}from"./gdelt-intel-FTZQ7YLF.js";import{i as Ua,a as ja,p as Ne}from"./news-market-correlation-CaMZ0E_r.js";import{fetchMultipleStocks as Ga}from"./index-Cn_DTYuw.js";import{f as Ha,c as Va,n as qa,o as Ya}from"./nq-pulse-content-CH8QxD93.js";import{n as Qe,c as Wa,f as Xa,a as Ka}from"./nq-catalysts-content-CA-SCNV4.js";const Qa={MARKET_QUOTE_UNAVAILABLE_REASON_UNSPECIFIED:"components.markets.unavailable.notFound",MARKET_QUOTE_UNAVAILABLE_REASON_NOT_FOUND:"components.markets.unavailable.notFound",MARKET_QUOTE_UNAVAILABLE_REASON_PROVIDER_ERROR:"components.markets.unavailable.providerError",MARKET_QUOTE_UNAVAILABLE_REASON_PROVIDER_RATE_LIMITED:"components.markets.unavailable.rateLimited",MARKET_QUOTE_UNAVAILABLE_REASON_PROVIDER_NOT_CONFIGURED:"components.markets.unavailable.notConfigured",MARKET_QUOTE_UNAVAILABLE_REASON_REQUEST_LIMIT_EXCEEDED:"components.markets.unavailable.requestLimit",MARKET_QUOTE_UNAVAILABLE_REASON_UPSTREAM_BUDGET_EXHAUSTED:"components.markets.unavailable.budget",MARKET_QUOTE_UNAVAILABLE_REASON_SEED_UNAVAILABLE:"components.markets.unavailable.seed"};function Za(a){const i=d(Qa[a.reason]??"components.markets.unavailable.notFound"),e=a.symbols.join(", ");return a.overflow>0?d("components.markets.unavailable.symbolsMore",{symbols:e,count:a.overflow,reason:i}):d("components.markets.unavailable.symbols",{symbols:e,reason:i})}class Ja extends _{constructor(){super({id:"markets",title:d("panels.markets"),infoTooltip:d("components.markets.infoTooltip")});g(this,"_markets",[]);g(this,"_marketsRateLimited",!1);g(this,"_marketsUnavailable",[]);g(this,"_disclosures",null);this.header.appendChild(He()),ra(this.content,()=>this._markets,e=>{la(e.symbol)?ca(e.symbol,e):ba(e)})}renderMarkets(e,t,s){this._markets=e,this._marketsRateLimited=!!t,this._marketsUnavailable=s??[],this._renderMarketsAndDisclosures()}renderDisclosures(e){this._disclosures=e??null,this._renderMarketsAndDisclosures()}_renderMarketsAndDisclosures(){const e=ga(this._disclosures),t=this._markets.map((n,r)=>`
      <div${oa(n,r,d("components.markets.chart.title",{symbol:n.display}))}>
        <div class="market-info">
          <span class="market-name">${o(n.name)}</span>
          <span class="market-symbol">${o(n.display)}</span>
        </div>
        <div class="market-data">
          ${Y(n.sparkline,n.change)}
          <span class="market-price">${Rt(n.price)}</span>
          <span class="market-change ${T(n.change)}">${I(n.change)}</span>
        </div>
      </div>
    `).join(""),s=ya({hasMarkets:this._markets.length>0,marketsHtml:t,disclosureHtml:e,unavailableMessage:this._marketsRateLimited?d("common.rateLimitedMarket"):d("common.failedMarketData"),unavailableSymbolLines:xa(this._marketsUnavailable).map(Za)});if(s.kind==="retry"){this.showRetrying(s.message);return}this.setSafeContent(S(s.html,"legacy Panel.setContent() migration"))}}class es extends _{constructor(){super({id:"heatmap",title:d("panels.heatmap"),infoTooltip:d("components.heatmap.infoTooltip")});g(this,"_tab","performance");g(this,"_heatmapData",[]);g(this,"_sectorBars",[]);g(this,"_valuations",{});g(this,"_staleValuationSymbols",new Set);this.content.addEventListener("click",e=>{const t=this.tabFromEvent(e);t&&this.selectTab(t)}),this.content.addEventListener("keydown",e=>{if(e.repeat||e.key!=="Enter"&&e.key!==" ")return;const t=this.tabFromEvent(e);t&&(e.preventDefault(),this.selectTab(t))})}tabFromEvent(e){var s;const t=(s=e.target.closest("[data-tab]"))==null?void 0:s.dataset.tab;return t==="performance"||t==="valuations"?t:null}selectTab(e){this._tab=e,this._render("user")}renderHeatmap(e,t){this._heatmapData=e,this._sectorBars=t??[],this._render()}updateValuations(e,t){if(e===void 0)return;if(this._staleValuationSymbols=new Set((t??[]).map(n=>n.toUpperCase())),Object.keys(e).length===0){this._valuations={},this._tab==="valuations"&&(this._tab="performance"),this._render();return}const s={};for(const[n,r]of Object.entries(e))s[n]={trailingPE:(r==null?void 0:r.trailingPE)??null,forwardPE:(r==null?void 0:r.forwardPE)??null,beta:(r==null?void 0:r.beta)??null,ytdReturn:(r==null?void 0:r.ytdReturn)??null,threeYearReturn:(r==null?void 0:r.threeYearReturn)??null,fiveYearReturn:(r==null?void 0:r.fiveYearReturn)??null};this._valuations=s,this._render()}_buildTabBar(){return Object.keys(this._valuations).length>0?`<div style="display:flex;gap:4px;margin-bottom:8px">
      <button class="panel-tab${this._tab==="performance"?" active":""}" data-tab="performance" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">Performance</button>
      <button class="panel-tab${this._tab==="valuations"?" active":""}" data-tab="valuations" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">Valuations</button>
    </div>`:""}_render(e="data"){if(this._heatmapData.length===0){this.showRetrying(d("common.failedSectorData"));return}const t=this._buildTabBar(),s=this._tab==="valuations"&&Object.keys(this._valuations).length>0?this._renderValuations():this._renderPerformance(),n=S(t+s,"legacy Panel.setContent() migration");if(e==="user"){this.setSafeContentImmediate(n,()=>this.restoreSelectedTabFocus());return}this.setSafeContent(n)}restoreSelectedTabFocus(){var e;(e=this.content.querySelector(`.panel-tab[data-tab="${this._tab}"]`))==null||e.focus()}_renderPerformance(){const t='<div class="heatmap">'+this._heatmapData.map(c=>{const l=c.change??0,p=c.symbol?`<div class="sector-ticker">${o(c.symbol)}</div>`:"";return`
        <div class="heatmap-cell ${Dt(l)}">
          ${p}
          <div class="sector-change ${T(l)}">${I(l)}</div>
          <div class="sector-name">${o(c.name)}</div>
        </div>
      `}).join("")+"</div>";if(this._sectorBars.length===0)return t;const s=[...this._sectorBars].filter(c=>Number.isFinite(c.change1d)).sort((c,l)=>l.change1d-c.change1d);if(s.length===0)return t;const n=Math.max(...s.map(c=>Math.abs(c.change1d)),3),r='<div class="heatmap-bar-chart">'+s.map(c=>{const l=Math.min(Math.abs(c.change1d)/n*100,100).toFixed(1),p=c.change1d>=0,m=p?"var(--green)":"var(--red)",f=p?"+":"";return`<div class="heatmap-bar-row">
  <span class="heatmap-bar-label">${o(c.symbol)}</span>
  <div class="heatmap-bar-track"><div class="heatmap-bar-fill" style="width:${l}%;background:${m}"></div></div>
  <span class="heatmap-bar-value ${p?"positive":"negative"}">${f}${c.change1d.toFixed(2)}%</span>
</div>`}).join("")+"</div>";return t+r}_renderValuations(){const e=Object.entries(this._valuations).map(([u,y])=>({symbol:u,...y})).filter(u=>u.forwardPE!==null||u.trailingPE!==null);if(e.length===0)return'<div style="padding:8px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">No valuation data available</div>';const t=[...e].sort((u,y)=>(u.forwardPE??u.trailingPE??999)-(y.forwardPE??y.trailingPE??999)),s=t.map(u=>u.forwardPE??u.trailingPE??0).filter(u=>u>0),n=(s.length>0?s[Math.floor(s.length/2)]:void 0)??20,r=Math.max(...s,30),c=new Map(this._heatmapData.map(u=>[u.symbol,u.name])),l=u=>u!==null?u.toFixed(1):"--",p=u=>{if(u===null)return"--";const y=u*100;return`${y>=0?"+":""}${y.toFixed(1)}%`},m=u=>u!==null?u.toFixed(2):"--",f=u=>u===null?"var(--text-dim)":u<n*.8?"var(--green)":u>n*1.2?"var(--red)":"#e6a817",v='<div class="heatmap-bar-chart" style="margin-bottom:12px">'+t.map(u=>{const y=u.forwardPE??u.trailingPE??0,b=Math.min(y/r*100,100).toFixed(1),w=f(y>0?y:null),$=c.get(u.symbol)??u.symbol;return`<div class="heatmap-bar-row">
  <span class="heatmap-bar-label" title="${o(u.symbol)}">${o($)}</span>
  <div class="heatmap-bar-track"><div class="heatmap-bar-fill" style="width:${b}%;background:${w}"></div></div>
  <span class="heatmap-bar-value" style="color:${w}">${y>0?y.toFixed(1)+"x":"--"}</span>
</div>`}).join("")+"</div>",h=`<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
  <thead><tr style="color:var(--text-dim);border-bottom:1px solid var(--border)">
    <th scope="col" style="padding:3px 6px;text-align:left;font-weight:500">Sector</th>
    <th scope="col" style="padding:3px 6px;text-align:right;font-weight:500">Trail P/E</th>
    <th scope="col" style="padding:3px 6px;text-align:right;font-weight:500">Fwd P/E</th>
    <th scope="col" style="padding:3px 6px;text-align:right;font-weight:500">Beta</th>
    <th scope="col" style="padding:3px 6px;text-align:right;font-weight:500">YTD</th>
  </tr></thead>
  <tbody>${t.map(u=>{const y=c.get(u.symbol)??u.symbol,b=this._staleValuationSymbols.has(u.symbol.toUpperCase()),w=b?' <span title="Last known value; not refreshed this cycle" style="color:var(--text-dim);font-size:calc(9px * var(--wm-panel-effective-scale, 1))">(stale)</span>':"";return`<tr${b?' style="opacity:0.65"':""}>
  <td style="padding:3px 6px;white-space:nowrap;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${o(y)}${w}</td>
  <td style="padding:3px 6px;text-align:right;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:${f(u.trailingPE)}">${l(u.trailingPE)}</td>
  <td style="padding:3px 6px;text-align:right;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:${f(u.forwardPE)}">${l(u.forwardPE)}</td>
  <td style="padding:3px 6px;text-align:right;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${m(u.beta)}</td>
  <td style="padding:3px 6px;text-align:right;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:${u.ytdReturn===null?"var(--text-dim)":u.ytdReturn>=0?"var(--green)":"var(--red)"}">${p(u.ytdReturn)}</td>
</tr>`}).join("")}</tbody>
</table></div>`;return v+h}}function me(a,i,e=""){switch(a){case"PHYSICAL_DIVERGENCE_STATE_OK":return"";case"PHYSICAL_DIVERGENCE_STATE_INSUFFICIENT_HISTORY":return d("components.commodities.divergence.states.insufficientHistory",{count:i,required:Q.history.minimumPoints});case"PHYSICAL_DIVERGENCE_STATE_STALE_INPUT":return e===Q.reasons.physicalPrintStale?`${d("components.commodities.physical")}: ${d("popups.expired")}`:e===Q.reasons.paperSnapshotStale?`${d("components.commodities.paper")}: ${d("popups.expired")}`:e===Q.reasons.fxSnapshotStale?`FX: ${d("popups.expired")}`:d("components.commodities.divergence.states.staleInput");case"PHYSICAL_DIVERGENCE_STATE_MISSING_INPUT":return d("components.commodities.divergence.states.missingInput");case"PHYSICAL_DIVERGENCE_STATE_UNSPECIFIED":throw new Error("Physical divergence state is unspecified");default:{const t=a;throw new Error(`Unknown physical divergence state: ${String(t)}`)}}}function ts(a){switch(a){case"PHYSICAL_PREMIUM_REGIME_NORMAL":return d("components.commodities.divergence.regimes.normal");case"PHYSICAL_PREMIUM_REGIME_ELEVATED":return d("components.commodities.divergence.regimes.elevated");case"PHYSICAL_PREMIUM_REGIME_STRESSED":return d("components.commodities.divergence.regimes.stressed");case"PHYSICAL_PREMIUM_REGIME_EXTREME":return d("components.commodities.divergence.regimes.extreme");case"PHYSICAL_PREMIUM_REGIME_UNSPECIFIED":throw new Error("Ok physical divergence reading has no regime");default:{const i=a;throw new Error(`Unknown physical premium regime: ${String(i)}`)}}}function as(a){switch(a){case"PHYSICAL_PREMIUM_REGIME_NORMAL":return"var(--green)";case"PHYSICAL_PREMIUM_REGIME_ELEVATED":return"var(--yellow)";case"PHYSICAL_PREMIUM_REGIME_STRESSED":return"var(--orange, #f97316)";case"PHYSICAL_PREMIUM_REGIME_EXTREME":return"var(--red)";case"PHYSICAL_PREMIUM_REGIME_UNSPECIFIED":throw new Error("Ok physical divergence reading has no regime color");default:{const i=a;throw new Error(`Unknown physical premium regime color: ${String(i)}`)}}}function Ze(a){switch(a){case"PHYSICAL_PREMIUM_TREND_WIDENING":return"↑";case"PHYSICAL_PREMIUM_TREND_STABLE":return"→";case"PHYSICAL_PREMIUM_TREND_NARROWING":return"↓";case"PHYSICAL_PREMIUM_TREND_UNSPECIFIED":throw new Error("Ok physical divergence reading has no trend");default:{const i=a;throw new Error(`Unknown physical premium trend: ${String(i)}`)}}}function ss(a){if(typeof a!="string"||a==="")return null;const i=Number(a);return Number.isFinite(i)?i:null}function It(a){if(!Array.isArray(a)||a.length<13)return null;const i=a[a.length-1],e=a[a.length-13];return i==null||e==null||!(e>0)||!Number.isFinite(i)?null:(i-e)/e}function is(a){const i=Array.isArray(a.assets)?a.assets:null;if(!i||i.length===0)return null;const e=[],t=[];for(const s of i){const n=typeof s.funding=="number"&&Number.isFinite(s.funding)?s.funding:null,r=Array.isArray(s.sparkOi)?s.sparkOi.filter(p=>Number.isFinite(p)):[],c=Array.isArray(s.sparkScore)?s.sparkScore.filter(p=>Number.isFinite(p)):[],l={symbol:String(s.symbol??""),display:String(s.display??""),group:String(s.group??""),funding:n,oiDelta1h:It(r),composite:typeof s.composite=="number"?s.composite:0,warmup:!!s.warmup,stale:!!s.stale,sparkScore:c};l.group==="fx"?e.push(l):t.push(l)}return{ts:typeof a.ts=="number"?a.ts:0,warmup:!!a.warmup,fxAssets:e,commodityAssets:t,unavailable:!1}}function ns(a){const i=[],e=[];for(const t of a.assets){const s={symbol:t.symbol,display:t.display,group:t.group,funding:ss(t.funding),oiDelta1h:It(t.sparkOi),composite:Number(t.composite||0),warmup:!!t.warmup,stale:!!t.stale,sparkScore:Array.isArray(t.sparkScore)?t.sparkScore:[]};t.group==="fx"?i.push(s):e.push(s)}return{ts:Number(a.ts||0),warmup:!!a.warmup,fxAssets:i,commodityAssets:e,unavailable:!1}}const Je=[{symbol:"EURUSD=X",label:"EUR",flag:"🇪🇺",multiply:!1},{symbol:"GBPUSD=X",label:"GBP",flag:"🇬🇧",multiply:!1},{symbol:"USDJPY=X",label:"JPY",flag:"🇯🇵",multiply:!0},{symbol:"USDCNY=X",label:"CNY",flag:"🇨🇳",multiply:!0},{symbol:"USDINR=X",label:"INR",flag:"🇮🇳",multiply:!0},{symbol:"AUDUSD=X",label:"AUD",flag:"🇦🇺",multiply:!1},{symbol:"USDCHF=X",label:"CHF",flag:"🇨🇭",multiply:!0},{symbol:"USDCAD=X",label:"CAD",flag:"🇨🇦",multiply:!0},{symbol:"USDTRY=X",label:"TRY",flag:"🇹🇷",multiply:!0}];class rs extends _{constructor(){super({id:"commodities",title:d("panels.commodities"),infoTooltip:d("components.commodities.infoTooltip")});g(this,"_tab","commodities");g(this,"_commodityData",[]);g(this,"_fxRates",[]);g(this,"_physicalPremiums",[]);g(this,"_physicalPremiumFxAsOf","");g(this,"_physicalDivergence",null);g(this,"_physicalDivergenceUnavailable",!1);g(this,"_physicalComparisonAttempted",!1);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-tab]"),s=t==null?void 0:t.dataset.tab;s&&this.selectTab(s)})}getActiveTab(){return this._tab}shouldRefreshPhysicalComparison(){return!this._physicalComparisonAttempted||this._tab==="physical"||this._physicalPremiums.length===0||this._physicalDivergenceUnavailable}selectTab(e){if(!["commodities","physical","fx","xau"].includes(e))return{ok:!1,status:"invalid",effectiveTab:this._tab,reason:"unknown_tab"};const t=e;return t==="commodities"||t==="physical"&&this._physicalPremiums.length>0||t==="fx"&&this._fxRates.length>0||t==="xau"&&Xe==="commodity"&&this._commodityData.some(n=>n.symbol==="GC=F"&&n.price!==null)?this._tab===t?{ok:!0,status:"skipped",effectiveTab:this._tab}:(this._tab=t,this._render(),{ok:!0,status:"applied",effectiveTab:this._tab}):{ok:!1,status:"denied",effectiveTab:this._tab,reason:"tab_unavailable"}}renderCommodities(e){this._commodityData=e,this._render()}updateFxRates(e){this._fxRates=e,this._render()}updatePhysicalPremiums(e){var t;this._physicalComparisonAttempted=!0,this._physicalPremiums=e.premiums,this._physicalPremiumFxAsOf=((t=e.fx)==null?void 0:t.asOf)??"",this._render()}updatePhysicalDivergence(e){this._physicalComparisonAttempted=!0,this._physicalDivergence=e,this._physicalDivergenceUnavailable=!1,this._render()}showPhysicalDivergenceUnavailable(){this._physicalComparisonAttempted=!0,this._physicalDivergence=null,this._physicalDivergenceUnavailable=!0,this._render()}clearPhysicalPremiums(){this._physicalPremiums=[],this._physicalPremiumFxAsOf="",this._physicalDivergence=null,this._physicalDivergenceUnavailable=!1,this._physicalComparisonAttempted=!1,this._tab==="physical"&&(this._tab="commodities"),this._render()}_buildTabBar(e,t,s){const n=d("components.commodities.commodities"),r=[`<button class="panel-tab${this._tab==="commodities"?" active":""}" data-tab="commodities" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">${n}</button>`];return e&&r.push(`<button class="panel-tab${this._tab==="physical"?" active":""}" data-tab="physical" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">${d("components.commodities.physicalPremiums")}</button>`),t&&r.push(`<button class="panel-tab${this._tab==="fx"?" active":""}" data-tab="fx" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">EUR FX</button>`),s&&r.push(`<button class="panel-tab${this._tab==="xau"?" active":""}" data-tab="xau" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">XAU/FX</button>`),r.length>1?`<div style="display:flex;gap:4px;margin-bottom:8px">${r.join("")}</div>`:""}_renderPhysicalPremiums(){const e=this._physicalPremiums.map(s=>{var u;if(!s.physical||!s.paper)return"";const n=s.metal==="gold"?"gold":"silver",r=d(`components.commodities.metals.${n}`),c=s.physical.unit==="kilogram"?"kg":"g",l=s.physical.price.toLocaleString(void 0,{maximumFractionDigits:2}),p=s.paper.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),m=`${s.premiumUsdPerOz>=0?"+":"-"}$${Math.abs(s.premiumUsdPerOz).toFixed(2)}`,f=`${s.premiumPct>=0?"+":""}${s.premiumPct.toFixed(2)}%`,v=(u=this._physicalDivergence)==null?void 0:u.readings.find(y=>y.metal===s.metal),x=v?this._physicalDivergenceCohortMatches(v,s):!1,h=this._physicalDivergenceUnavailable?"":v&&x?this._renderPhysicalDivergenceReading(v):this._renderPhysicalDivergenceState("PHYSICAL_DIVERGENCE_STATE_MISSING_INPUT",0);return`<div class="commodity-item physical-premium-item">
        <div class="commodity-name">${o(r)}</div>
        <div class="commodity-price">${o(d("components.commodities.physical"))}: CNY ${o(l)}/${c}</div>
        <div class="commodity-price">${o(d("components.commodities.paper"))}: $${o(p)}/oz</div>
        <div class="commodity-change ${T(s.premiumPct)}">${o(d("components.commodities.premium"))}: ${o(m)}/oz (${o(f)})</div>
        ${h}
        <div style="margin-top:4px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)" title="${o(s.physical.source)}">${o(s.physical.source)}<br>${o(d("components.commodities.asOf",{date:s.physical.asOf}))}</div>
      </div>`});return`${this._renderPhysicalDivergenceComposite()}<div class="commodities-grid">${e.join("")}</div>`}_renderPhysicalDivergenceReading(e){if(e.state!=="PHYSICAL_DIVERGENCE_STATE_OK")return this._renderPhysicalDivergenceState(e.state,e.historyPoints,e.reason);const t=ts(e.regime),s=as(e.regime),n=Ze(e.trend5d),r=Ze(e.trend20d);return`<div class="physical-divergence-state" style="display:flex;align-items:center;gap:6px;margin-top:4px;font-size:calc(10px * var(--wm-panel-effective-scale, 1))">
      <span style="border:1px solid ${s};color:${s};border-radius:999px;padding:1px 6px">${o(t)}</span>
      <span title="${o(d("components.commodities.divergence.fiveDayTrend"))}">${o(n)} 5d</span>
      <span title="${o(d("components.commodities.divergence.twentyDayTrend"))}">${o(r)} 20d</span>
    </div>`}_renderPhysicalDivergenceState(e,t,s=""){return`<div class="physical-divergence-state" style="margin-top:4px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(me(e,t,s))}</div>`}_renderPhysicalDivergenceComposite(){var n,r,c;if(this._physicalDivergenceUnavailable)return`<div class="physical-divergence-transport-error" style="margin-bottom:8px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(d("common.failedMarketData"))}</div>`;const e=(n=this._physicalDivergence)==null?void 0:n.composite;if(!e)return"";let t;if(!this._physicalPremiums.every(l=>{var m;const p=(m=this._physicalDivergence)==null?void 0:m.readings.find(f=>f.metal===l.metal);return p?this._physicalDivergenceCohortMatches(p,l):!1}))t=me("PHYSICAL_DIVERGENCE_STATE_MISSING_INPUT",0);else if(e.state==="PHYSICAL_DIVERGENCE_STATE_OK"){if(e.index==null)throw new Error("Ok physical divergence composite has no index");t=d("components.commodities.divergence.compositeValue",{value:e.index.toFixed(1)})}else{const l=((r=this._physicalDivergence)==null?void 0:r.readings.find(p=>p.state===e.state))??((c=this._physicalDivergence)==null?void 0:c.readings.find(p=>p.state!=="PHYSICAL_DIVERGENCE_STATE_OK"));t=me(e.state,(l==null?void 0:l.historyPoints)??0,(l==null?void 0:l.reason)??e.reason)}return`<div class="physical-divergence-composite" style="margin-bottom:8px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(t)}</div>`}_physicalDivergenceCohortMatches(e,t){var s,n,r;return e.physicalAsOf===((s=t.physical)==null?void 0:s.asOf)&&e.paperAsOf===Date.parse(((n=t.paper)==null?void 0:n.asOf)??"")&&((r=e.provenance)==null?void 0:r.fxAsOf)===Date.parse(this._physicalPremiumFxAsOf)}_renderXau(){const e=this._commodityData.find(r=>r.symbol==="GC=F"&&r.price!==null);if(!(e!=null&&e.price))return'<div style="padding:8px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">Gold price unavailable</div>';const t=e.price,s=new Map(this._commodityData.filter(r=>{var c;return(c=r.symbol)==null?void 0:c.endsWith("=X")}).map(r=>[r.symbol,r])),n=Je.map(r=>{const c=s.get(r.symbol);if(!(c!=null&&c.price)||!Number.isFinite(c.price))return null;const l=r.multiply?t*c.price:t/c.price;if(!Number.isFinite(l)||l<=0)return null;const p=Math.round(l).toLocaleString();return`<div class="commodity-item">
        <div class="commodity-name">${o(r.flag)} XAU/${o(r.label)}</div>
        <div class="commodity-price" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${o(p)}</div>
      </div>`}).filter(Boolean);return n.length===0?`<div class="commodities-grid">${Je.map(c=>`<div class="commodity-item">
          <div class="commodity-name">${o(c.flag)} XAU/${o(c.label)}</div>
          <div class="commodity-price" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1))">--</div>
        </div>`).join("")}</div><div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">FX rates unavailable</div>`:`<div class="commodities-grid">${n.join("")}</div><div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Computed from GC=F + Yahoo FX</div>`}_render(){const e=this._physicalPremiums.length>0,t=this._fxRates.length>0,s=Xe==="commodity"&&this._commodityData.some(l=>l.symbol==="GC=F"&&l.price!==null);this._tab==="xau"&&!s&&(this._tab="commodities"),this._tab==="physical"&&!e&&(this._tab="commodities");const n=this._buildTabBar(e,t,s);if(this._tab==="physical"&&e){this.setSafeContent(S(n+this._renderPhysicalPremiums(),"legacy Panel.setContent() migration"));return}if(this._tab==="fx"&&t){const l=this._fxRates.map(p=>{const m=p.change1d??null,f=m!==null?`${m>0?"+":""}${m.toFixed(4)}`:"",v=m===null||m===0?"":m>0?"change-positive":"change-negative";return`<div class="commodity-item">
          <div class="commodity-name">EUR/${o(p.currency)}</div>
          <div class="commodity-price">${o(p.rate.toFixed(4))}</div>
          ${f?`<div class="commodity-change ${o(v)}">${o(f)}</div>`:""}
        </div>`}).join("");this.setSafeContent(S(n+`<div class="commodities-grid">${l}</div><div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Source: ECB</div>`,"legacy Panel.setContent() migration"));return}if(this._tab==="xau"&&s){this.setSafeContent(S(n+this._renderXau(),"legacy Panel.setContent() migration"));return}const r=this._commodityData.filter(l=>{var p;return typeof l.price=="number"&&Number.isFinite(l.price)&&!((p=l.symbol)!=null&&p.endsWith("=X"))});if(r.length===0){if(!t&&!e){this.showRetrying(d("common.failedCommodities"));return}this.setSafeContent(S(n+`<div style="padding:8px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${d("common.failedCommodities")}</div>`,"legacy Panel.setContent() migration"));return}const c='<div class="commodities-grid">'+r.map(l=>`
        <div class="commodity-item">
          <div class="commodity-name">${o(l.display)}</div>
          ${Y(l.sparkline,l.change,60,18)}
          <div class="commodity-price">${Rt(l.price)}</div>
          <div class="commodity-change ${T(l.change)}">${I(l.change)}</div>
        </div>
      `).join("")+"</div>";this.setSafeContent(S(n+c,"legacy Panel.setContent() migration"))}}class os extends _{constructor(){super({id:"crypto",title:d("panels.crypto"),infoTooltip:d("components.crypto.infoTooltip")})}renderCrypto(i){if(i.length===0){this.showRetrying(d("common.failedCryptoData"));return}const e=i.map(t=>`
      <div class="market-item">
        <div class="market-info">
          <span class="market-name">${o(t.name)}</span>
          <span class="market-symbol">${o(t.symbol)}</span>
        </div>
        <div class="market-data">
          ${Y(t.sparkline,t.change)}
          <span class="market-price">$${t.price.toLocaleString()}</span>
          <span class="market-change ${T(t.change)}">${I(t.change)}</span>
        </div>
      </div>
    `).join("");this.setSafeContent(S(e,"legacy Panel.setContent() migration"))}}class ls extends _{constructor(){super({id:"crypto-heatmap",title:"Crypto Sectors"})}renderSectors(i){if(i.length===0){this.showRetrying(d("common.failedSectorData"));return}const e='<div class="heatmap">'+i.map(t=>{const s=t.change??0;return`
        <div class="heatmap-cell ${Dt(s)}">
          <div class="sector-name">${o(t.name)}</div>
          <div class="sector-change ${T(s)}">${I(s)}</div>
        </div>
      `}).join("")+"</div>";this.setSafeContent(S(e,"legacy Panel.setContent() migration"))}}class pe extends _{renderTokens(i){if(i.length===0){this.showRetrying(d("common.failedCryptoData"));return}const e=i.map(t=>`
      <div class="market-item">
        <div class="market-info">
          <span class="market-name">${o(t.name)}</span>
          <span class="market-symbol">${o(t.symbol)}</span>
        </div>
        <div class="market-data">
          <span class="market-price">$${t.price.toLocaleString(void 0,{maximumFractionDigits:t.price<1?6:2})}</span>
          <span class="market-change ${T(t.change24h)}">${I(t.change24h)}</span>
          <span class="market-change market-change--7d ${T(t.change7d)}">${I(t.change7d)}W</span>
        </div>
      </div>
    `).join("");this.setSafeContent(S(e,"legacy Panel.setContent() migration"))}}class cs extends pe{constructor(){super({id:"defi-tokens",title:"DeFi Tokens",infoTooltip:d("components.defiTokens.infoTooltip")})}}class ds extends pe{constructor(){super({id:"ai-tokens",title:"AI Tokens",infoTooltip:d("components.aiTokens.infoTooltip")})}}class ps extends pe{constructor(){super({id:"other-tokens",title:"Alt Tokens",infoTooltip:d("components.altTokens.infoTooltip")})}}const Mn=Object.freeze(Object.defineProperty({__proto__:null,AiTokensPanel:ds,CommoditiesPanel:rs,CryptoHeatmapPanel:ls,CryptoPanel:os,DefiTokensPanel:cs,HeatmapPanel:es,MarketPanel:Ja,OtherTokensPanel:ps,TokenListPanel:pe,mapHyperliquidFlowResponse:ns,mapHyperliquidFlowSeed:is},Symbol.toStringTag,{value:"Module"}));function ue(a){const i=Number.isFinite(a)?a.toFixed(2):"0.00";return`${a>=0?"+":""}${i}%`}function ms(a){const i=Number.isFinite(a)?a.toFixed(2):"0.00";return`${a>=.15?"Bullish":a<=-.15?"Bearish":"Neutral"} (${a>=0?"+":""}${i})`}function et(a,i){return Number.isFinite(a)?`${i==="USD"?"$":""}${a.toFixed(2)}${i&&i!=="USD"?` ${i}`:""}`:"N/A"}function tt(a){const i=a.toLowerCase();return i.includes("buy")?"badge-bullish":i.includes("hold")||i.includes("watch")?"badge-neutral":"badge-bearish"}function at(a,i){return a.length===0?"":`<ul class="${i}" style="margin:8px 0 0;padding-left:18px;font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.5">${a.map(e=>`<li>${o(e)}</li>`).join("")}</ul>`}function Z(a){const i=Math.abs(a);return i>=1e9?`$${(a/1e9).toFixed(1)}B`:i>=1e6?`$${(a/1e6).toFixed(1)}M`:i>=1e3?`$${(a/1e3).toFixed(0)}K`:`$${a.toFixed(0)}`}function us(a){return a==="P"?"Buy":a==="S"?"Sell":a==="M"?"Exercise":a==="A"?"Award":a==="D"?"Disposition":a==="F"?"Tax/Fee":a}class fs extends _{constructor(){super({id:"stock-analysis",title:"Premium Stock Analysis",infoTooltip:d("components.stockAnalysis.infoTooltip"),premium:"locked"});g(this,"insiderBySymbol",{});g(this,"tableView");g(this,"lastItems",[]);g(this,"lastHistory",{});this.header.appendChild(He("Edit Watchlist"))}destroy(){var e;(e=this.tableView)==null||e.destroy(),super.destroy()}setInsiderData(e,t){this.insiderBySymbol[e]=t}renderAnalyses(e,t={},s="live"){if(e.length===0){this.setDataBadge("unavailable"),this.showRetrying("No premium stock analyses available yet.");return}this.setDataBadge(s,`${e.length} symbols`),this.lastItems=e,this.lastHistory=t,this.tableView?this.tableView.updateRenderDetail(n=>this.renderCard(n,this.lastHistory[n.symbol]||[])):this.tableView=new Ft({intro:this.buildIntro(e.length),columns:[{key:"symbol",label:"Symbol",sortable:!0,sortOptionKey:"symbol-asc",cell:n=>`<strong>${o(n.display||n.symbol)}</strong>`},{key:"price",label:"Price",align:"right",cell:n=>o(et(n.currentPrice,n.currency))},{key:"signal",label:"Signal",cell:n=>{const r=F(n);return`<span class="signal-badge ${tt(r)}">${o(r)}</span>`}},{key:"score",label:"Score",align:"right",sortable:!0,sortOptionKey:"score-desc",cell:n=>o(String(R(n)))},{key:"change",label:"1d %",align:"right",sortable:!0,sortOptionKey:"change-desc",cell:n=>`<span style="color:${n.changePercent>=0?"var(--semantic-normal)":"var(--semantic-critical)"}">${o(ue(n.changePercent))}</span>`}],filters:[{key:"all",label:"All",match:()=>!0},{key:"strong-buy",label:"Strong Buy",match:n=>F(n).toLowerCase().includes("strong buy")},{key:"buy",label:"Buy+",match:n=>F(n).toLowerCase().includes("buy")},{key:"hold",label:"Hold",match:n=>{const r=F(n).toLowerCase();return r.includes("hold")||r.includes("watch")}},{key:"sell",label:"Sell",match:n=>F(n).toLowerCase().includes("sell")}],sortOptions:[{key:"score-desc",label:"Score ↓",cmp:(n,r)=>R(r)-R(n)},{key:"change-desc",label:"1d % ↓",cmp:(n,r)=>r.changePercent-n.changePercent},{key:"symbol-asc",label:"Symbol A-Z",cmp:(n,r)=>(n.display||n.symbol).localeCompare(r.display||r.symbol)}],defaultSort:"score-desc",defaultFilter:"all",getKey:n=>n.symbol,getSearchText:n=>`${n.symbol} ${n.display||""} ${n.name||""}`,renderDetail:n=>this.renderCard(n,this.lastHistory[n.symbol]||[]),searchPlaceholder:"Search ticker or name..."}),this.tableView.setItems(e),this.rerender()}rerender(){this.tableView&&(this.tableView.updateIntro(this.buildIntro(this.lastItems.length)),this.setSafeContent(S(this.tableView.render(),"legacy Panel.setContent() migration"),()=>{var e;(e=this.tableView)==null||e.bind(this.content,()=>this.rerender())}))}buildIntro(e){const t=da().filter(r=>!pa(r.symbol)).length,s=e===1?"ticker":"tickers",n=t>0?` <span style="color:var(--text-dim)">${t} watchlist ${t===1?"symbol is an index/FX rate":"symbols are indices/FX rates"} and don't get an equity report.</span>`:"";return`Analyst-grade equity reports for the ${e} ${s} in your watchlist — your picks lead, popular names fill the rest. Use <strong>Edit Watchlist</strong> to add your own.${n}`}formatDividendRate(e,t){const s=(t||"").trim().toUpperCase();if(s&&s!=="USD")try{return`${new Intl.NumberFormat("en-US",{style:"currency",currency:s}).format(e)}/share`}catch{return`${s} ${e.toFixed(2)}/share`}return`$${e.toFixed(2)}/share`}renderDividendProfile(e){if(!e.dividendYield||e.dividendYield<=0)return"";const t=`${e.dividendYield.toFixed(1)}%`,s=e.trailingAnnualDividendRate>0?` (${this.formatDividendRate(e.trailingAnnualDividendRate,e.currency)})`:"",n=e.dividendCagr!==0?`${e.dividendCagr>0?"+":""}${e.dividendCagr.toFixed(1)}%`:"N/A",r=e.dividendFrequency?`<span class="badge-neutral" style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));padding:2px 6px;border-radius:3px">${o(e.dividendFrequency)}</span>`:"",c=e.exDividendDate>0?new Date(e.exDividendDate).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"N/A",l=typeof e.payoutRatio=="number"&&e.payoutRatio>0,p=l?`${(e.payoutRatio*100).toFixed(1)}%`:"",m=l?`<div><div style="color:var(--text-dim)">Payout Ratio</div><div style="margin-top:3px">${o(p)}</div></div>`:"";return`
      <div style="border:1px solid var(--border);padding:10px 12px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Dividend Profile</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <div><div style="color:var(--text-dim)">Yield</div><div style="margin-top:3px">${o(t)}${o(s)}</div></div>
          <div><div style="color:var(--text-dim)">5Y CAGR</div><div style="margin-top:3px">${o(n)}</div></div>
          <div><div style="color:var(--text-dim)">Frequency</div><div style="margin-top:3px">${r||"N/A"}</div></div>
          ${m}
          <div><div style="color:var(--text-dim)">Ex-Dividend</div><div style="margin-top:3px">${o(c)}</div></div>
        </div>
      </div>
    `}renderCard(e,t){const s=F(e),n=tt(s),r=t.filter(m=>m.generatedAt!==e.generatedAt).slice(0,3),c=r[0],l=c?R(e)-R(c):null,p=e.headlines.slice(0,2).map(m=>{const f=ha(m.link),v=o(m.title),x=o(m.source||"Source"),h=m.alignedTradingDate?` · aligned ${o(m.alignedTradingDate)}${m.marketSessionAtPublish?` (${o(m.marketSessionAtPublish)})`:""}`:"";return`<a href="${f}" target="_blank" rel="noreferrer" style="display:block;color:var(--text);text-decoration:none;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02)"><div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.45">${v}</div><div style="margin-top:4px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">${x}${h}</div></a>`}).join("");return`
      <section class="signal-card" style="padding:14px;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));letter-spacing:-0.02em">${o(e.name||e.symbol)}</strong>
              <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-family:var(--font-mono);text-transform:uppercase">${o(e.display||e.symbol)}</span>
              <span class="signal-badge ${n}" style="font-family:var(--font-mono)">${o(s)}</span>
            </div>
            <div style="margin-top:6px;font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);line-height:1.5">${o($a(e))}</div>
          </div>
          <div style="text-align:right;min-width:110px">
            <div style="font-size:calc(18px * var(--wm-panel-effective-scale, 1));font-weight:700">${o(et(e.currentPrice,e.currency))}</div>
            <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:${e.changePercent>=0?"var(--semantic-normal)":"var(--semantic-critical)"}">${o(ue(e.changePercent))}</div>
            <div style="margin-top:6px;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Score ${o(String(R(e)))} · ${o(wa(e))}</div>
          </div>
          ${t.length>=2?(()=>{const m=t.slice(0,6).reverse().map(R),f=m[m.length-1]??0,v=m[m.length-2]??f;return va(m,f>=v?"var(--semantic-normal)":"var(--semantic-critical)",60,20,"display:block;margin-top:4px;align-self:flex-end")})():""}
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Trend</div><div style="margin-top:4px">${o(e.trendStatus)}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">MA5 Bias</div><div style="margin-top:4px">${o(ue(e.biasMa5))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">RSI 12</div><div style="margin-top:4px">${o(e.rsi12.toFixed(1))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Volume</div><div style="margin-top:4px">${o(e.volumeStatus)}</div></div>
          ${e.newsSentiment!=null?`<div style="border:1px solid var(--border);padding:8px" data-news-overlay="model"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">News overlay</div><div style="margin-top:4px">${o(ms(e.newsSentiment))}</div></div>`:""}
        </div>
        ${this.renderDividendProfile(e)}
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text)"><strong style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Action</strong><div style="margin-top:4px">${o(Sa(e))}</div></div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
          <div>
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Bullish Factors</div>
            ${at(_a(e).slice(0,3),"badge-bullish")}
          </div>
          <div>
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Risk Factors</div>
            ${at(Ea(e).slice(0,3),"badge-bearish")}
          </div>
        </div>
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text-dim)">
          <strong style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Why Now</strong>
          <div style="margin-top:4px">${o(ka(e))}</div>
        </div>
        ${c?`
          <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text-dim)">
            <strong style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Signal Drift</strong>
            <div style="margin-top:4px">
              Previous run was ${o(F(c))} at score ${o(String(R(c)))}.
              Current drift is ${o(`${l&&l>0?"+":""}${(l||0).toFixed(1)}`)}.
            </div>
          </div>
        `:""}
        ${r.length>0?`
          <div style="display:grid;gap:6px">
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent History</div>
            ${r.map(m=>`
              <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
                <span>${o(F(m))} · score ${o(String(R(m)))}</span>
                <span style="color:var(--text-dim)">${o(new Date(m.generatedAt).toLocaleString())}</span>
              </div>
            `).join("")}
          </div>
        `:""}
        ${this.renderInsiderSection(e.symbol)}
        ${p?`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px">${p}</div>`:""}
        ${this.renderAnalystConsensus(e)}
        ${this.renderFundamentals(e)}
      </section>
    `}renderFundamentals(e){const t=(n,r,c)=>`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:88px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">${o(n)}</div><div style="margin-top:2px${c?`;color:${c}`:""}">${o(r)}</div></div>`,s=Ca(e.fundamentals,e.currency).map(n=>t(n.label,n.value,n.color));return s.length===0?"":`
      <div style="border-top:1px solid var(--border);margin-top:4px;padding-top:10px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Fundamentals</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">${s.join("")}</div>
      </div>
    `}renderAnalystConsensus(e){const t=e.analystConsensus,s=e.priceTarget,n=e.recentUpgrades,r=t&&t.total>0,c=typeof(s==null?void 0:s.mean)=="number"&&s.mean>0,l=typeof(s==null?void 0:s.median)=="number"&&s.median>0,p=!!s&&s.numberOfAnalysts>0&&(c||l),m=n&&n.length>0;return!r&&!p&&!m?"":`
      <div style="border-top:1px solid var(--border);margin-top:4px;padding-top:10px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Analyst Consensus</div>
        ${r?this.renderRatingBar(t):""}
        ${p?this.renderPriceTarget(s,e.currentPrice,e.currency):""}
        ${m?this.renderRecentUpgrades(n):""}
      </div>
    `}renderRatingBar(e){const t=e.total||1,s=l=>(l/t*100).toFixed(1),n=[{label:"Strong Buy",count:e.strongBuy,color:"#16a34a",pct:s(e.strongBuy)},{label:"Buy",count:e.buy,color:"#4ade80",pct:s(e.buy)},{label:"Hold",count:e.hold,color:"#facc15",pct:s(e.hold)},{label:"Sell",count:e.sell,color:"#f87171",pct:s(e.sell)},{label:"Strong Sell",count:e.strongSell,color:"#dc2626",pct:s(e.strongSell)}].filter(l=>l.count>0),r=n.map(l=>`<div style="flex:${l.count};background:${l.color};height:8px;min-width:2px" title="${o(l.label)}: ${l.count} (${l.pct}%)"></div>`).join(""),c=n.map(l=>`<span style="display:inline-flex;align-items:center;gap:3px"><span style="width:8px;height:8px;border-radius:2px;background:${l.color};display:inline-block"></span>${l.count}</span>`).join('<span style="color:var(--border);margin:0 4px">|</span>');return`
      <div style="margin-bottom:8px">
        <div style="display:flex;gap:1px;border-radius:4px;overflow:hidden;margin-bottom:4px">${r}</div>
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);display:flex;align-items:center;flex-wrap:wrap;gap:2px">${c}<span style="margin-left:6px;color:var(--text-dim)">(${t} analysts)</span></div>
      </div>
    `}renderPriceTarget(e,t,s){const n=s==="USD"?"$":s==="EUR"?"€":s==="GBP"?"£":s||"$",r=n.length===1,c=u=>r?`${n}${u.toFixed(2)}`:`${u.toFixed(2)} ${n}`,l=u=>typeof u=="number"&&Number.isFinite(u)&&u>0,p=l(e.low)?e.low:void 0,m=l(e.high)?e.high:void 0,f=l(e.mean)?e.mean:void 0,x=(l(e.median)?e.median:void 0)??f;if(!x)return"";const h=[];if(p!==void 0&&h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Low</div><div style="margin-top:2px">${o(c(p))}</div></div>`),h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Median</div><div style="margin-top:2px">${o(c(x))}</div></div>`),m!==void 0&&h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">High</div><div style="margin-top:2px">${o(c(m))}</div></div>`),h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Analysts</div><div style="margin-top:2px">${o(String(e.numberOfAnalysts))}</div></div>`),t>0){const u=(x-t)/t*100,y=u>=0?"var(--semantic-normal)":"var(--semantic-critical)",b=`${u>=0?"+":""}${u.toFixed(1)}%`;h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">vs Current</div><div style="margin-top:2px;color:${y}">${o(b)}</div></div>`)}return`<div style="display:flex;flex-wrap:wrap;gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1));margin-bottom:8px">${h.join("")}</div>`}renderRecentUpgrades(e){return`
      <div style="display:grid;gap:4px">
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent Actions</div>
        ${e.slice(0,3).map(s=>{const n=s.action==="up"||s.action==="init"?"var(--semantic-normal)":s.action==="down"?"var(--semantic-critical)":"var(--text-dim)",r=s.action==="up"?"Upgrade":s.action==="down"?"Downgrade":s.action==="init"?"Initiated":o(s.action),c=s.fromGrade?`${o(s.fromGrade)} → ${o(s.toGrade)}`:o(s.toGrade);return`
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:5px 8px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <span style="font-weight:500">${o(s.firm)}</span>
          <span style="color:${n};white-space:nowrap">${r}</span>
          <span style="color:var(--text-dim);white-space:nowrap">${c}</span>
        </div>
      `}).join("")}
      </div>
    `}renderInsiderSection(e){const t=this.insiderBySymbol[e];if(t===void 0)return"";if(t.unavailable)return`
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:8px;border:1px solid var(--border)">
          Insider data unavailable
        </div>`;if(t.transactions.length===0&&t.totalBuys===0&&t.totalSells===0)return`
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:8px;border:1px solid var(--border)">
          No insider transactions in the last 6 months
        </div>`;const s=Z(t.totalBuys),n=Z(t.totalSells),r=`${t.netValue>=0?"+":""}${Z(t.netValue)}`,c=t.netValue>=0?"var(--semantic-normal)":"var(--semantic-critical)",l=`
      <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-family:var(--font-mono)">
        <span>Buys: <span style="color:var(--semantic-normal)">${o(s)}</span></span>
        <span>Sells: <span style="color:var(--semantic-critical)">${o(n)}</span></span>
        <span>Net: <span style="color:${c};font-weight:600">${o(r)}</span></span>
      </div>`,p=t.transactions.slice(0,5),m=p.length>0?`
      <table style="width:100%;border-collapse:collapse;font-size:calc(11px * var(--wm-panel-effective-scale, 1));margin-top:6px">
        <thead>
          <tr style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em;text-align:left">
            <th scope="col" style="padding:4px 6px;border-bottom:1px solid var(--border)">Name</th>
            <th scope="col" style="padding:4px 6px;border-bottom:1px solid var(--border)">Type</th>
            <th scope="col" style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right">Shares</th>
            <th scope="col" style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right">Value</th>
            <th scope="col" style="padding:4px 6px;border-bottom:1px solid var(--border)">Date</th>
          </tr>
        </thead>
        <tbody>
          ${p.map(f=>{const v=f.transactionCode==="P",x=f.transactionCode==="S",h=v?"var(--semantic-normal)":x?"var(--semantic-critical)":"var(--text-dim)",u=f.value===0?"—":Z(f.value);return`
              <tr>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o(f.name)}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);color:${h}">${o(us(f.transactionCode))}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right;font-family:var(--font-mono)">${Number.isFinite(f.shares)?f.shares.toLocaleString():"0"}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right;font-family:var(--font-mono)">${u}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);color:var(--text-dim)">${o(f.transactionDate)}</td>
              </tr>`}).join("")}
        </tbody>
      </table>`:"";return`
      <div style="display:grid;gap:6px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Insider Activity (6 months)</div>
        ${l}
        ${m}
      </div>`}}const Nn=Object.freeze(Object.defineProperty({__proto__:null,StockAnalysisPanel:fs},Symbol.toStringTag,{value:"Module"}));function fe(a){return a>0?"#8df0b2":a<0?"#ff8c8c":"var(--text-dim)"}function M(a){return`${a>0?"+":""}${a.toFixed(1)}%`}function hs(a){return a>=55?"badge-bullish":a>=45?"badge-neutral":"badge-bearish"}function vs(a){return a>=55?"Profitable":a>=45?"Mixed":"Losing"}class gs extends _{constructor(){super({id:"stock-backtest",title:"Premium Backtesting",infoTooltip:d("components.stockBacktest.infoTooltip"),premium:"locked"});g(this,"tableView");this.header.appendChild(He("Edit Watchlist"))}destroy(){var e;(e=this.tableView)==null||e.destroy(),super.destroy()}renderBacktests(e,t="live"){if(e.length===0){this.setDataBadge("unavailable"),this.showRetrying("No stock backtests available yet.");return}this.setDataBadge(t,`${e.length} symbols`),this.tableView||(this.tableView=new Ft({intro:"Historical replay of the technical signal model over recent daily bars. Point-in-time fundamentals are not included.",columns:[{key:"symbol",label:"Symbol",sortable:!0,sortOptionKey:"symbol-asc",cell:s=>`<strong>${o(s.display||s.symbol)}</strong>`},{key:"winrate",label:"Win Rate",align:"right",sortable:!0,sortOptionKey:"winrate-desc",cell:s=>o(M(s.winRate))},{key:"direction",label:"Direction",align:"right",sortable:!0,sortOptionKey:"direction-desc",cell:s=>o(M(s.directionAccuracy))},{key:"avgreturn",label:"Avg Return",align:"right",sortable:!0,sortOptionKey:"avgreturn-desc",cell:s=>`<span style="color:${fe(s.avgSimulatedReturnPct)}">${o(M(s.avgSimulatedReturnPct))}</span>`},{key:"signals",label:"Signals",align:"right",sortable:!0,sortOptionKey:"signals-desc",cell:s=>o(String(s.actionableEvaluations))}],filters:[{key:"all",label:"All",match:()=>!0},{key:"profitable",label:"Profitable",match:s=>s.winRate>=55},{key:"mixed",label:"Mixed",match:s=>s.winRate>=45&&s.winRate<55},{key:"losing",label:"Losing",match:s=>s.winRate<45}],sortOptions:[{key:"winrate-desc",label:"Win Rate ↓",cmp:(s,n)=>n.winRate-s.winRate},{key:"direction-desc",label:"Direction ↓",cmp:(s,n)=>n.directionAccuracy-s.directionAccuracy},{key:"avgreturn-desc",label:"Avg Return ↓",cmp:(s,n)=>n.avgSimulatedReturnPct-s.avgSimulatedReturnPct},{key:"signals-desc",label:"Signals ↓",cmp:(s,n)=>n.actionableEvaluations-s.actionableEvaluations},{key:"symbol-asc",label:"Symbol A-Z",cmp:(s,n)=>(s.display||s.symbol).localeCompare(n.display||n.symbol)}],defaultSort:"winrate-desc",defaultFilter:"all",getKey:s=>s.symbol,getSearchText:s=>`${s.symbol} ${s.display||""} ${s.name||""}`,renderDetail:s=>this.renderDetail(s),searchPlaceholder:"Search ticker or name..."})),this.tableView.setItems(e),this.rerender()}rerender(){this.tableView&&this.setSafeContent(S(this.tableView.render(),"legacy Panel.setContent() migration"),()=>{var e;(e=this.tableView)==null||e.bind(this.content,()=>this.rerender())})}renderDetail(e){return`
      <section style="padding:14px;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));letter-spacing:-0.02em">${o(e.name||e.symbol)}</strong>
              <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-family:var(--font-mono);text-transform:uppercase">${o(e.display||e.symbol)}</span>
              <span class="signal-badge ${hs(e.winRate)}">${o(vs(e.winRate))}</span>
            </div>
            <div style="margin-top:6px;font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);line-height:1.5">${o(e.summary)}</div>
          </div>
          <div style="text-align:right;min-width:110px">
            <div style="font-size:calc(18px * var(--wm-panel-effective-scale, 1));font-weight:700;color:${fe(e.avgSimulatedReturnPct)}">${o(M(e.avgSimulatedReturnPct))}</div>
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Avg simulated return</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Win Rate</div><div style="margin-top:4px">${o(M(e.winRate))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Direction Accuracy</div><div style="margin-top:4px">${o(M(e.directionAccuracy))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Cumulative</div><div style="margin-top:4px;color:${fe(e.cumulativeSimulatedReturnPct)}">${o(M(e.cumulativeSimulatedReturnPct))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Signals</div><div style="margin-top:4px">${o(String(e.actionableEvaluations))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Rating Basis</div><div style="margin-top:4px">${o(e.ratingBasis==="technical_only"?"Technical only":e.ratingBasis)}</div></div>
        </div>
        <div style="display:grid;gap:6px">
          <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent Evaluations</div>
          ${e.evaluations.map(t=>`
            <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
              <span>${o(t.signal)} · ${o(t.outcome)} · ${o(M(t.simulatedReturnPct))}</span>
              <span style="color:var(--text-dim)">${o(new Date(Number(t.analysisAt)).toLocaleDateString())}</span>
            </div>
          `).join("")}
        </div>
      </section>
    `}}const In=Object.freeze(Object.defineProperty({__proto__:null,StockBacktestPanel:gs},Symbol.toStringTag,{value:"Module"}));function ys(a){return a>=1e6?`${(a/1e6).toFixed(1)}M`:a>=1e3?`${(a/1e3).toFixed(1)}K`:String(a)}function xs(a){return a>=80?"#e74c3c":a>=50?"#e67e22":a>=25?"#f1c40f":"#27ae60"}class bs extends _{constructor(){super({id:"wsb-ticker-scanner",title:d("panels.wsbTickerScanner"),infoTooltip:d("components.wsbTickerScanner.infoTooltip"),showCount:!0,premium:"locked"});g(this,"_tickers",[]);g(this,"_hasData",!1);g(this,"_sortField","mentionCount");g(this,"_sortAsc",!1);this.content.addEventListener("click",e=>{const t=e.target,s=t.closest("[data-sort]");if(!s)return;const n=s.dataset.sort,c=t.closest("button[data-sort]")===document.activeElement;n===this._sortField?this._sortAsc=!this._sortAsc:(this._sortField=n,this._sortAsc=!1),this._render(c?n:null)})}async fetchData(){const e=await Pa();return e.length?(this.updateData(e),!0):(this._hasData||this.showError("No ticker data available yet",()=>{this.fetchData()},60),!1)}updateData(e){this._tickers=[...e],this._hasData=this._tickers.length>0,this._hasData?(this.setCount(this._tickers.length),this._render()):(this.setCount(0),this.showError("No trending tickers found",()=>{this.fetchData()},120))}_sorted(){const e=this._sortAsc?1:-1;return[...this._tickers].sort((t,s)=>e*(t[this._sortField]-s[this._sortField]))}_ariaSort(e){return e!==this._sortField?"":` aria-sort="${this._sortAsc?"ascending":"descending"}"`}_sortIndicator(e){return e!==this._sortField?"":this._sortAsc?" ▲":" ▼"}_render(e=null){const t=this._sorted(),s=Math.max(1,...t.map(p=>p.velocityScore)),n="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;color:var(--text-dim);text-transform:uppercase;padding:4px 6px;cursor:pointer;user-select:none;white-space:nowrap",r="display:block;width:100%;appearance:none;border:0;padding:0;background:transparent;color:inherit;font:inherit;text-transform:inherit;letter-spacing:inherit;cursor:inherit;white-space:inherit",c="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:5px 6px;vertical-align:middle",l=t.slice(0,50).map((p,m)=>{const f=xs(p.velocityScore),v=Math.max(4,Math.round(p.velocityScore/s*100)),x=p.subreddits.map(h=>`<span style="font-size:calc(8px * var(--wm-panel-effective-scale, 1));padding:1px 4px;border-radius:2px;background:rgba(255,255,255,0.06);color:var(--text-dim);margin-right:2px">r/${o(h)}</span>`).join("");return`<tr style="border-bottom:1px solid var(--border)">
        <td style="${c};color:var(--text-dim);text-align:right;min-width:20px">${m+1}</td>
        <td style="${c};font-family:'SF Mono',SFMono-Regular,Consolas,monospace;font-weight:700;color:var(--text)">${o(p.symbol)}</td>
        <td style="${c};text-align:right;color:var(--text)">${p.mentionCount}</td>
        <td style="${c};text-align:right;color:var(--text)">${ys(p.totalScore)}</td>
        <td style="${c};min-width:80px">
          <div style="display:flex;align-items:center;gap:4px">
            <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${f};min-width:24px;text-align:right">${Math.round(p.velocityScore)}</span>
            <div style="flex:1;height:4px;border-radius:2px;background:rgba(255,255,255,0.08)">
              <div style="height:100%;width:${v}%;border-radius:2px;background:${f}"></div>
            </div>
          </div>
        </td>
        <td style="${c}">${x}</td>
      </tr>`}).join("");this.setSafeContent(S(`
      <div style="overflow-x:auto;overflow-y:auto;max-height:480px">
        <table style="width:100%;border-collapse:collapse;border-spacing:0">
          <thead>
            <tr style="border-bottom:1px solid var(--border)">
              <th scope="col" style="${n};text-align:right">#</th>
              <th scope="col" style="${n};text-align:left">Ticker</th>
              <th scope="col" style="${n};text-align:right" data-sort="mentionCount"${this._ariaSort("mentionCount")}>
                <button type="button" data-sort="mentionCount" style="${r};text-align:right">Mentions<span aria-hidden="true">${this._sortIndicator("mentionCount")}</span></button>
              </th>
              <th scope="col" style="${n};text-align:right" data-sort="totalScore"${this._ariaSort("totalScore")}>
                <button type="button" data-sort="totalScore" style="${r};text-align:right">Score<span aria-hidden="true">${this._sortIndicator("totalScore")}</span></button>
              </th>
              <th scope="col" style="${n};text-align:left" data-sort="velocityScore"${this._ariaSort("velocityScore")}>
                <button type="button" data-sort="velocityScore" style="${r};text-align:left">Velocity<span aria-hidden="true">${this._sortIndicator("velocityScore")}</span></button>
              </th>
              <th scope="col" style="${n};text-align:left">Source</th>
            </tr>
          </thead>
          <tbody>${l||'<tr><td colspan="6" style="padding:16px;text-align:center;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">No ticker data</td></tr>'}</tbody>
        </table>
      </div>
      <div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Reddit · r/wallstreetbets, r/stocks, r/investing · sorted by ${this._sortField.replace(/([A-Z])/g," $1").toLowerCase()}</div>
    `,"legacy Panel.setContent() migration"),e?()=>{var p;(p=this.content.querySelector(`button[data-sort="${e}"]`))==null||p.focus({preventScroll:!0})}:void 0)}}const Ln=Object.freeze(Object.defineProperty({__proto__:null,WsbTickerScannerPanel:bs},Symbol.toStringTag,{value:"Module"}));function $s(a){const i=a.toUpperCase();return i==="LONG"?"badge-bullish":i==="SHORT"?"badge-bearish":"badge-neutral"}function ws(a){const i=a.toUpperCase();return i==="HIGH"?"badge-bullish":i==="LOW"?"badge-bearish":"badge-neutral"}function Ss(a){const i=a.toUpperCase();return i==="LONG"?d("components.marketImplications.directions.long"):i==="SHORT"?d("components.marketImplications.directions.short"):d("components.marketImplications.directions.hedge")}function _s(a){if(!a||a.length===0)return"";const i=Math.random().toString(36).slice(2,8),e=a.map((t,s)=>{const n=s<a.length-1?' <span style="color:var(--text-dim);margin:0 2px">&rarr;</span> ':"";return`<span class="chain-node" data-chain-id="${i}" data-node-idx="${s}" data-logic="${o(t.logic)}" role="button" tabindex="0" aria-expanded="false"
      style="cursor:pointer;border-bottom:1px dotted var(--text-dim)">${o(t.node)}</span>${n}`}).join("");return`
    <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px;line-height:1.8">
      <span style="text-transform:uppercase;letter-spacing:0.06em;opacity:0.6">${o(d("components.marketImplications.rationale"))}</span> ${e}
    </div>
    <div id="chain-logic-${i}" style="display:none;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-style:italic;margin-top:2px;padding-left:4px"></div>
  `}function Es(a){return`
    <div class="signal-card">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">
        <span class="signal-badge ${$s(a.direction)}">${Ss(a.direction)}</span>
        <strong style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));letter-spacing:-0.02em">${o(a.ticker)}</strong>
        ${a.name?`<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(a.name)}</span>`:""}
        ${a.timeframe?`<span class="signal-badge badge-neutral" style="font-family:var(--font-mono)">${o(a.timeframe)}</span>`:""}
        ${a.confidence?`<span class="signal-badge ${ws(a.confidence)}">${o(a.confidence)}</span>`:""}
      </div>
      <div style="font-size:calc(13px * var(--wm-panel-effective-scale, 1));font-weight:600;line-height:1.4;margin-bottom:6px">${o(a.title)}</div>
      <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text-dim)">${o(a.narrative)}</div>
      ${_s(a.transmissionChain)}
      ${a.driver?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px"><span style="text-transform:uppercase;letter-spacing:0.06em">${o(d("components.marketImplications.driver"))}</span> ${o(a.driver)}</div>`:""}
      ${a.riskCaveat?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--yellow);padding:6px 8px;border:1px solid color-mix(in srgb,var(--yellow) 30%,transparent);background:color-mix(in srgb,var(--yellow) 8%,transparent);margin-top:6px">${o(a.riskCaveat)}</div>`:""}
    </div>
  `}class ks extends _{constructor(){super({id:"market-implications",title:d("components.marketImplications.title"),infoTooltip:d("components.marketImplications.infoTooltip"),premium:"locked"});g(this,"fwSelector");this.fwSelector=new Ra({panelId:"market-implications",isPremium:Da(),panel:this,note:d("components.marketImplications.appliesToNext")}),this.header.appendChild(this.fwSelector.el),Ta(this.content,".chain-node"),this.content.addEventListener("click",e=>{const t=e.target.closest(".chain-node");if(!t)return;const s=t.getAttribute("data-chain-id"),n=t.getAttribute("data-node-idx"),r=t.getAttribute("data-logic"),c=this.content.querySelector(`#chain-logic-${s}`);if(!c)return;const l=c.style.display!=="none",p=c.getAttribute("data-open-idx")===n;for(const m of this.content.querySelectorAll(`.chain-node[data-chain-id="${s}"]`))m.setAttribute("aria-expanded","false");l&&p?c.style.display="none":(c.textContent=r,c.setAttribute("data-open-idx",n),c.style.display="block",t.setAttribute("aria-expanded","true"))})}destroy(){this.fwSelector.destroy(),super.destroy()}renderImplications(e,t="live"){if(e.degraded||e.cards.length===0){this.showUnavailable();return}const s=e.generatedAt?Aa(new Date(e.generatedAt).getTime()):"";this.setDataBadge(t,s||d("components.marketImplications.signals",{count:e.cards.length})),this.resetRetryBackoff();const n=`
      <div style="display:flex;flex-direction:column;gap:10px">
        ${e.cards.map(Es).join("")}
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:8px;border-top:1px solid var(--border);line-height:1.5;text-align:center">${o(d("components.marketImplications.disclaimer"))}</div>
      </div>
    `;this.setSafeContent(S(n,"legacy Panel.setContent() migration"))}showUnavailable(e=d("components.marketImplications.unavailable")){this.setDataBadge("unavailable");const t=`
      <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);line-height:1.5;padding:16px 0;text-align:center">${o(e)}</div>
    `;this.setSafeContent(S(t,"legacy Panel.setContent() migration"))}}const zn=Object.freeze(Object.defineProperty({__proto__:null,MarketImplicationsPanel:ks},Symbol.toStringTag,{value:"Module"}));function B(a){const i=Math.abs(a);return i>=1e3?Math.round(a).toLocaleString():i>=100?a.toFixed(2):i>=1?a.toFixed(4):a.toPrecision(4)}function st(a){return`${a>0?"+":""}${a.toFixed(1)}%`}function it(a){return`${a>0?"+":""}${a.toFixed(4)}`}function J(a){return a>0?"change-positive":a<0?"change-negative":"fx-flat"}const Cs=6e4,he="stress";class Ps extends _{constructor(){super({id:"fx",title:d("panels.fx"),defaultRowSpan:2,infoTooltip:d("components.fx.infoTooltip")});g(this,"stress",[]);g(this,"usd",[]);g(this,"eur",[]);g(this,"rub",[]);g(this,"degraded",[]);g(this,"tab",he);g(this,"tabForced",!1);g(this,"loaded",!1);g(this,"inFlight",!1);g(this,"degradedRetryTimer",null);this.content.addEventListener("click",e=>this.handleClick(e))}async fetchData(){var e,t;if(!this.inFlight){this.inFlight=!0;try{const{getFxPanelData:s}=await C(async()=>{const{getFxPanelData:r}=await import("./index-CSDWQ1jW.js");return{getFxPanelData:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])),n=await s();if(!((e=this.element)!=null&&e.isConnected))return;this.updateFx(n)}catch(s){if(this.isAbortError(s)||!((t=this.element)!=null&&t.isConnected))return;this.showError(d("common.failedMarketData"),()=>void this.fetchData())}finally{this.inFlight=!1}}}updateFx(e){this.stress=e.stress,this.usd=e.usd,this.eur=e.eur,this.rub=e.rub,this.degraded=e.degraded,this.loaded=!0,this.render(),this.scheduleDegradedRetry()}scheduleDegradedRetry(){this.clearDegradedRetry(),this.degraded.length!==0&&(this.degradedRetryTimer=setTimeout(()=>{var e;this.degradedRetryTimer=null,(e=this.element)!=null&&e.isConnected&&this.fetchData()},Cs))}clearDegradedRetry(){this.degradedRetryTimer!==null&&(clearTimeout(this.degradedRetryTimer),this.degradedRetryTimer=null)}destroy(){this.clearDegradedRetry(),super.destroy()}handleClick(e){const t=e.target.closest(".panel-tab");t!=null&&t.dataset.tab&&(this.tab=t.dataset.tab,this.tabForced=!1,this.render())}hasStress(){return this.stress.length>0}hasSpot(){return this.usd.length>0||this.eur.length>0}hasRub(){return this.rub.length>0}render(){if(!this.loaded)return;if(!this.hasStress()&&!this.hasSpot()&&!this.hasRub()){this.showError(d("common.failedMarketData"),()=>void this.fetchData());return}this.tabForced&&this.tab!==he&&this.hasStress()&&(this.tab=he,this.tabForced=!1),this.tab==="stress"&&!this.hasStress()&&(this.tab="spot",this.tabForced=!0),this.tab==="spot"&&!this.hasSpot()&&(this.tab="rub",this.tabForced=!0),this.tab==="rub"&&!this.hasRub()&&(this.tab="stress",this.tabForced=!0);const e=this.tab==="stress"?this.renderStress():this.tab==="spot"?this.renderSpot():this.renderRub();this.setSafeContent(E`${this.renderTabs()}${e}${this.renderDegradedNotice()}`)}renderDegradedNotice(){if(this.degraded.length===0)return E``;const e=this.degraded.map(t=>d(`components.fx.source.${t}`)).join(", ");return E`<div class="fx-degraded">${d("components.fx.degraded",{sources:e})}</div>`}renderTabs(){const e=[];return this.hasStress()&&e.push(E`<button class="panel-tab ${this.tab==="stress"?"active":""}" data-tab="stress">${d("components.fx.tabs.stress")}</button>`),this.hasSpot()&&e.push(E`<button class="panel-tab ${this.tab==="spot"?"active":""}" data-tab="spot">${d("components.fx.tabs.spot")}</button>`),this.hasRub()&&e.push(E`<button class="panel-tab ${this.tab==="rub"?"active":""}" data-tab="rub">${d("components.fx.tabs.rub")}</button>`),E`<div class="panel-tabs">${N(e)}</div>`}renderStress(){const e=N(this.stress.map(l=>{const p=l.yoyChange===null?E`<td class="fx-na">--</td>`:E`<td class="${J(l.yoyChange)}">${st(l.yoyChange)}</td>`,f=l.peakRate!==null&&l.troughRate!==null&&l.peakDate!==null&&l.troughDate!==null?E`<td class="fx-window">
            <span class="fx-window-rates">${B(l.peakRate)} → ${B(l.troughRate)}</span>
            <span class="fx-window-dates">${l.peakDate} → ${l.troughDate}</span>
          </td>`:E`<td class="fx-na">--</td>`;return E`
        <tr class="${l.stressed?"fx-stressed":""}">
          <td class="fx-ccy">
            <span class="fx-ccy-code">${l.currency}</span>
            <span class="fx-ccy-country">${l.countryCode}</span>
          </td>
          ${p}
          <td class="${J(l.drawdown24m)}">${st(l.drawdown24m)}</td>
          ${f}
        </tr>`})),t=this.stress.map(l=>l.asOf).filter(l=>l!==null),s=t.length>0?t.reduce((l,p)=>l<p?l:p):null,n=t.length>0?t.reduce((l,p)=>l>p?l:p):null,r=s===null||n===null?null:s===n?n:`${s} → ${n}`,c=this.stress.filter(l=>l.stressed).length;return E`
      <div class="fx-scroll">
        <table class="fx-table">
          <thead>
            <tr>
              <th scope="col" class="fx-ccy">${d("components.fx.currency")}</th>
              <th scope="col">${d("components.fx.yoy")}</th>
              <th scope="col">${d("components.fx.drawdown")}</th>
              <th scope="col" class="fx-window">${d("components.fx.peakToTrough")}</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
      </div>
      <div class="fx-footer">
        ${d("components.fx.stressedCount",{stressed:c,total:this.stress.length,threshold:`${Fa}%`})}
        · ${d("components.fx.sourceYahoo")}${r?` · ${r}`:""}
      </div>`}renderSpot(){const e=[];if(this.usd.length>0){const t=N(this.usd.map(s=>E`
        <tr>
          <td class="fx-ccy"><span class="fx-ccy-code">${s.currency}</span></td>
          <td>${B(s.unitsPerUsd)}</td>
          <td class="fx-inverse">${B(s.usdPerUnit)}</td>
        </tr>`));e.push(E`
        <div class="fx-section-title">${d("components.fx.usdBase")}</div>
        <div class="fx-scroll">
          <table class="fx-table">
            <thead>
              <tr>
                <th scope="col" class="fx-ccy">${d("components.fx.currency")}</th>
                <th scope="col">${d("components.fx.perUsd")}</th>
                <th scope="col" class="fx-inverse">${d("components.fx.usdPerUnit")}</th>
              </tr>
            </thead>
            <tbody>${t}</tbody>
          </table>
        </div>
        <div class="fx-footer">${d("components.fx.sourceYahoo")}</div>`)}if(this.eur.length>0){const t=N(this.eur.map(s=>{const n=s.change1d===null?E`<td class="fx-na">--</td>`:E`<td class="${J(s.change1d)}">${it(s.change1d)}</td>`;return E`
          <tr>
            <td class="fx-ccy"><span class="fx-ccy-code">EUR/${s.currency}</span></td>
            <td>${B(s.rate)}</td>
            ${n}
          </tr>`}));e.push(E`
        <div class="fx-section-title">${d("components.fx.eurBase")}</div>
        <div class="fx-scroll">
          <table class="fx-table">
            <thead>
              <tr>
                <th scope="col" class="fx-ccy">${d("components.fx.pair")}</th>
                <th scope="col">${d("components.fx.rate")}</th>
                <th scope="col">${d("components.fx.change1d")}</th>
              </tr>
            </thead>
            <tbody>${t}</tbody>
          </table>
        </div>
        <div class="fx-footer">${d("components.fx.sourceEcb")}</div>`)}return N(e)}renderRub(){const e=N(this.rub.map(t=>{const s=t.change1d===null?E`<td class="fx-na">--</td>`:E`<td class="${J(t.change1d)}">${it(t.change1d)}</td>`;return E`
        <tr>
          <td class="fx-ccy"><span class="fx-ccy-code">${t.currency}</span></td>
          <td>${B(t.rubPerUnit)}</td>
          ${s}
        </tr>`}));return E`
      <div class="fx-section-title">${d("components.fx.rubBase")}</div>
      <div class="fx-scroll">
        <table class="fx-table">
          <thead>
            <tr>
              <th scope="col" class="fx-ccy">${d("components.fx.currency")}</th>
              <th scope="col">${d("components.fx.rubPerUnit")}</th>
              <th scope="col">${d("components.fx.change1d")}</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
      </div>
      <div class="fx-footer">${d("components.fx.sourceCbr")}</div>`}}const On=Object.freeze(Object.defineProperty({__proto__:null,FxPanel:Ps},Symbol.toStringTag,{value:"Module"})),As=Ma(()=>new Na(W(),{fetch:Ia}));function nt(a){var e,t,s,n,r,c,l,p,m,f,v,x,h,u,y,b,w,$,k,P,A,K,O;const i=a.signals;return{timestamp:a.timestamp,verdict:a.verdict,bullishCount:a.bullishCount,totalCount:a.totalCount,signals:{liquidity:{status:((e=i==null?void 0:i.liquidity)==null?void 0:e.status)??"UNKNOWN",value:((t=i==null?void 0:i.liquidity)==null?void 0:t.value)??null,sparkline:((s=i==null?void 0:i.liquidity)==null?void 0:s.sparkline)??[]},flowStructure:{status:((n=i==null?void 0:i.flowStructure)==null?void 0:n.status)??"UNKNOWN",btcReturn5:((r=i==null?void 0:i.flowStructure)==null?void 0:r.btcReturn5)??null,qqqReturn5:((c=i==null?void 0:i.flowStructure)==null?void 0:c.qqqReturn5)??null},macroRegime:{status:((l=i==null?void 0:i.macroRegime)==null?void 0:l.status)??"UNKNOWN",qqqRoc20:((p=i==null?void 0:i.macroRegime)==null?void 0:p.qqqRoc20)??null,xlpRoc20:((m=i==null?void 0:i.macroRegime)==null?void 0:m.xlpRoc20)??null},technicalTrend:{status:((f=i==null?void 0:i.technicalTrend)==null?void 0:f.status)??"UNKNOWN",btcPrice:((v=i==null?void 0:i.technicalTrend)==null?void 0:v.btcPrice)??null,sma50:((x=i==null?void 0:i.technicalTrend)==null?void 0:x.sma50)??null,sma200:((h=i==null?void 0:i.technicalTrend)==null?void 0:h.sma200)??null,vwap30d:((u=i==null?void 0:i.technicalTrend)==null?void 0:u.vwap30d)??null,mayerMultiple:((y=i==null?void 0:i.technicalTrend)==null?void 0:y.mayerMultiple)??null,sparkline:((b=i==null?void 0:i.technicalTrend)==null?void 0:b.sparkline)??[]},hashRate:{status:((w=i==null?void 0:i.hashRate)==null?void 0:w.status)??"UNKNOWN",change30d:(($=i==null?void 0:i.hashRate)==null?void 0:$.change30d)??null},priceMomentum:{status:((k=i==null?void 0:i.priceMomentum)==null?void 0:k.status)??"UNKNOWN"},fearGreed:{status:((P=i==null?void 0:i.fearGreed)==null?void 0:P.status)??"UNKNOWN",value:((A=i==null?void 0:i.fearGreed)==null?void 0:A.value)??null,history:((K=i==null?void 0:i.fearGreed)==null?void 0:K.history)??[]}},meta:{qqqSparkline:((O=a.meta)==null?void 0:O.qqqSparkline)??[]},unavailable:a.unavailable}}function ee(a,i=80,e=24,t="#4fc3f7"){if(!a||a.length<2)return"";const s=Math.min(...a),r=Math.max(...a)-s||1,c=a.map((l,p)=>{const m=p/(a.length-1)*i,f=e-(l-s)/r*(e-2)-1;return`${m.toFixed(1)},${f.toFixed(1)}`}).join(" ");return`<svg width="${i}" height="${e}" viewBox="0 0 ${i} ${e}" class="signal-sparkline" aria-hidden="true"><polyline points="${c}" fill="none" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function Rs(a,i=48){if(a===null)return'<span class="signal-value unknown">N/A</span>';const e=Math.max(0,Math.min(100,a)),t=(i-6)/2,s=2*Math.PI*t,n=s-e/100*s;let r="#f44336";return e>=75?r="#4caf50":e>=50?r="#ff9800":e>=25&&(r="#ff5722"),`<svg width="${i}" height="${i}" viewBox="0 0 ${i} ${i}" class="fg-donut" role="img" aria-label="Fear and greed index: ${e}">
    <circle cx="${i/2}" cy="${i/2}" r="${t}" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="5"/>
    <circle cx="${i/2}" cy="${i/2}" r="${t}" fill="none" stroke="${r}" stroke-width="5" stroke-dasharray="${s}" stroke-dashoffset="${n}" stroke-linecap="round" transform="rotate(-90 ${i/2} ${i/2})"/>
    <text x="${i/2}" y="${i/2+4}" text-anchor="middle" fill="${r}" style="font-size:calc(12px * var(--wm-panel-effective-scale, 1))" font-weight="bold">${e}</text>
  </svg>`}function Ds(a){const i=a.toUpperCase();return["GREED","EXTREME GREED"].includes(i)?"#4caf50":["FEAR","EXTREME FEAR"].includes(i)?"#f44336":"#4fc3f7"}function rt(a){const i=a.toUpperCase();return["BULLISH","RISK-ON","GROWING","PROFITABLE","ALIGNED","NORMAL","EXTREME GREED","GREED"].includes(i)?"badge-bullish":["BEARISH","DEFENSIVE","DECLINING","SQUEEZE","PASSIVE GAP","EXTREME FEAR","FEAR"].includes(i)?"badge-bearish":"badge-neutral"}function U(a,i="%"){return a===null?"N/A":`${a>0?"+":""}${a.toFixed(1)}${i}`}class Ts extends _{constructor(){super({id:"macro-signals",title:d("panels.macroSignals"),showCount:!1,infoTooltip:d("components.macroSignals.infoTooltip")});g(this,"data",null);g(this,"loading",!0);g(this,"error",null);g(this,"lastTimestamp","")}async fetchData(){const e=z("macroSignals");return e!=null&&e.signals&&e.totalCount>0?(this.data=nt(e),this.lastTimestamp=this.data.timestamp,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc(),!0):this.refreshFromRpc()}async refreshFromRpc(){var s,n,r;try{const c=await As().getMacroSignals({});if(!((s=this.element)!=null&&s.isConnected))return!1;this.data=nt(c),this.error=null}catch(c){if(this.isAbortError(c)||!((n=this.element)!=null&&n.isConnected))return!1;if(!this.data)console.warn("[MacroSignals] Fetch error:",c),this.error=d("common.noDataShort");else return!1}this.loading=!1,this.renderPanel();const e=((r=this.data)==null?void 0:r.timestamp)??"",t=e!==this.lastTimestamp;return this.lastTimestamp=e,t}renderPanel(){var r,c,l;if(this.loading){this.showLoading(d("common.computingSignals"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}if(this.data.unavailable){this.showError(d("common.upstreamUnavailable"),()=>void this.fetchData());return}const e=this.data,t=e.signals,n=`
      <div class="macro-signals-container">
        <div class="macro-verdict ${e.verdict==="BUY"?"verdict-buy":e.verdict==="CASH"?"verdict-cash":"verdict-unknown"}">
          <span class="verdict-label">${d("components.macroSignals.overall")}</span>
          <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));background:rgba(247,147,26,0.15);color:#f7931a;border:1px solid rgba(247,147,26,0.3);padding:1px 5px;border-radius:3px;font-weight:700;letter-spacing:0.04em;vertical-align:middle">&#x20bf; BTC</span>
          <span class="verdict-value">${e.verdict==="BUY"?d("components.macroSignals.verdict.buy"):e.verdict==="CASH"?d("components.macroSignals.verdict.cash"):o(e.verdict)}</span>
          <span class="verdict-detail">${d("components.macroSignals.bullish",{count:String(e.bullishCount),total:String(e.totalCount)})}</span>
        </div>
        <div class="signals-grid">
          ${this.renderSignalCard(d("components.macroSignals.signals.liquidity"),t.liquidity.status,U(t.liquidity.value),ee(t.liquidity.sparkline,60,20,"#4fc3f7"),"JPY 30d ROC","https://www.tradingview.com/symbols/JPYUSD/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.flow"),t.flowStructure.status,`BTC ${U(t.flowStructure.btcReturn5)} / QQQ ${U(t.flowStructure.qqqReturn5)}`,"","5d returns",null)}
          ${this.renderSignalCard(d("components.macroSignals.signals.regime"),t.macroRegime.status,`QQQ ${U(t.macroRegime.qqqRoc20)} / XLP ${U(t.macroRegime.xlpRoc20)}`,ee(e.meta.qqqSparkline,60,20,"#ab47bc"),"20d ROC","https://www.tradingview.com/symbols/QQQ/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.btcTrend"),t.technicalTrend.status,`$${((r=t.technicalTrend.btcPrice)==null?void 0:r.toLocaleString())??"N/A"}`,ee(t.technicalTrend.sparkline,60,20,"#ff9800"),`SMA50: $${((c=t.technicalTrend.sma50)==null?void 0:c.toLocaleString())??"-"} | VWAP: $${((l=t.technicalTrend.vwap30d)==null?void 0:l.toLocaleString())??"-"} | Mayer: ${t.technicalTrend.mayerMultiple??"-"}`,"https://www.tradingview.com/symbols/BTCUSD/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.hashRate"),t.hashRate.status,U(t.hashRate.change30d),"","30d change","https://mempool.space/mining")}
          ${this.renderSignalCard(d("components.macroSignals.signals.momentum"),t.priceMomentum.status,"","","Mayer Multiple",null)}
          ${this.renderFearGreedCard(t.fearGreed)}
        </div>
      </div>
    `;this.setSafeContent(S(n,"legacy Panel.setContent() migration"))}renderSignalCard(e,t,s,n,r,c){const l=rt(t);return`
      <div class="signal-card${c?" signal-card-linked":""}">
        <div class="signal-header">
          ${c?`<a href="${o(c)}" target="_blank" rel="noopener" class="signal-name signal-card-link">${o(e)}</a>`:`<span class="signal-name">${o(e)}</span>`}
          <span class="signal-badge ${l}">${o(t)}</span>
        </div>
        <div class="signal-body">
          ${n?`<div class="signal-sparkline-wrap">${n}</div>`:""}
          ${s?`<span class="signal-value">${s}</span>`:""}
        </div>
        ${r?`<div class="signal-detail">${o(r)}</div>`:""}
      </div>
    `}renderFearGreedCard(e){const t=rt(e.status);return`
      <div class="signal-card signal-card-fg">
        <div class="signal-header">
          <span class="signal-name">${d("components.macroSignals.signals.fearGreed")}</span>
          <span class="signal-badge ${t}">${o(e.status)}</span>
        </div>
        <div class="signal-body signal-body-fg">
          <div style="display:flex;align-items:center;gap:8px">
            ${Rs(e.value)}
            ${ee(e.history.map(s=>s.value),80,28,Ds(e.status))}
          </div>
        </div>
        <div class="signal-detail">
          <a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank" rel="noopener">alternative.me</a>
        </div>
      </div>
    `}}const Bn=Object.freeze(Object.defineProperty({__proto__:null,MacroSignalsPanel:Ts},Symbol.toStringTag,{value:"Module"}));function ot(a){return a<=20?"#e74c3c":a<=40?"#e67e22":a<=60?"#f1c40f":a<=80?"#2ecc71":"#27ae60"}function L(a,i=2){return a==null?"N/A":a.toFixed(i)}function Fs(a){return a<=20?{state:"Crisis / Risk-Off",stance:"CASH",color:"#c0392b"}:a<=35?{state:"Stressed / Defensive",stance:"DEFENSIVE",color:"#e67e22"}:a<=50?{state:"Fragile / Hedged",stance:"HEDGED",color:"#f1c40f"}:a<=65?{state:"Stable / Normal",stance:"NORMAL",color:"#2ecc71"}:{state:"Strong / Risk-On",stance:"AGGRESSIVE",color:"#27ae60"}}function Ms(a){var c,l,p;const i=[],e=((c=a.momentum)==null?void 0:c.score)??50,t=((l=a.sentiment)==null?void 0:l.score)??50,s=a.cnnFearGreed,n=a.compositeScore,r=((p=a.trend)==null?void 0:p.score)??50;return e<10&&i.push("Momentum at extreme low — broad equity selling pressure"),t<15&&i.push("Sentiment in extreme fear zone"),s>0&&Math.abs(n-s)>20&&i.push(`CNN F&G ${Math.round(s)} diverges ${Math.abs(Math.round(n-s))}pts from composite — sentiment/structural disconnect`),r<20&&i.push("Trend in breakdown — price structure deteriorating"),i}function Ns(a,i,e,t){function l(b,w){const $=b*Math.PI/180;return`${(100+w*Math.cos($)).toFixed(2)},${(100-w*Math.sin($)).toFixed(2)}`}const m=[{a1:180,a2:144,fill:"#c0392b"},{a1:144,a2:108,fill:"#e67e22"},{a1:108,a2:72,fill:"#f1c40f"},{a1:72,a2:36,fill:"#2ecc71"},{a1:36,a2:0,fill:"#27ae60"}].map(b=>`<path d="M${l(b.a1,88)} A88,88 0 0,0 ${l(b.a2,88)} L${l(b.a2,60)} A60,60 0 0,1 ${l(b.a1,60)} Z" fill="${b.fill}" opacity="0.88"/>`).join(""),f=(180-a*1.8)*Math.PI/180,v=(100+75*Math.cos(f)).toFixed(1),x=(100-75*Math.sin(f)).toFixed(1),h=e!=null?`${e>=0?"+":""}${e.toFixed(1)} vs prev`:"",u=e!=null?e>=0?"#2ecc71":"#e74c3c":"",y=h?`<div data-gauge-role="delta" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));line-height:1.25;color:${u}">${h}</div>`:"";return`<div data-gauge-role="root" style="display:flex;flex-direction:column;align-items:center;text-align:center;font-family:system-ui,-apple-system,sans-serif">
    <svg viewBox="0 0 200 115" width="200" height="115" style="display:block;max-width:100%" aria-hidden="true">
      ${m}
      <line x1="100" y1="100" x2="${v}" y2="${x}" stroke="${t}" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="100" cy="100" r="6" fill="${t}"/>
      <circle cx="100" cy="100" r="3" fill="rgba(8,8,8,0.9)"/>
    </svg>
    <div data-gauge-role="score" style="font-size:calc(26px * var(--wm-panel-effective-scale, 1));font-weight:700;line-height:1;color:${t}">${Math.round(a)}</div>
    <div data-gauge-role="label" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:600;line-height:1.25;color:${t};letter-spacing:0.07em">${i}</div>
    ${y}
  </div>`}function Is(a){var n,r,c,l,p,m,f,v,x,h;const i=a.composite;if(!(i!=null&&i.score))return null;const e=a.categories??{},t=a.headerMetrics??{},s=u=>u?{score:Number(u.score??50),weight:Number(u.weight??0),contribution:Number(u.contribution??0),degraded:!!u.degraded,inputsJson:JSON.stringify(u.inputs??{})}:void 0;return{compositeScore:Number(i.score),compositeLabel:String(i.label??""),previousScore:Number(i.previous??0),seededAt:String(a.timestamp??""),sentiment:s(e.sentiment),volatility:s(e.volatility),positioning:s(e.positioning),trend:s(e.trend),breadth:s(e.breadth),momentum:s(e.momentum),liquidity:s(e.liquidity),credit:s(e.credit),macro:s(e.macro),crossAsset:s(e.crossAsset),vix:Number(((n=t==null?void 0:t.vix)==null?void 0:n.value)??0),hySpread:Number(((r=t==null?void 0:t.hySpread)==null?void 0:r.value)??0),yield10y:Number(((c=t==null?void 0:t.yield10y)==null?void 0:c.value)??0),putCallRatio:Number(((l=t==null?void 0:t.putCall)==null?void 0:l.value)??0),pctAbove200d:Number(((p=t==null?void 0:t.pctAbove200d)==null?void 0:p.value)??0),cnnFearGreed:Number(((m=t==null?void 0:t.cnnFearGreed)==null?void 0:m.value)??0),cnnLabel:String(((f=t==null?void 0:t.cnnFearGreed)==null?void 0:f.label)??""),aaiiBull:Number(((v=t==null?void 0:t.aaiBull)==null?void 0:v.value)??0),aaiiBear:Number(((x=t==null?void 0:t.aaiBear)==null?void 0:x.value)??0),fedRate:String(((h=t==null?void 0:t.fedRate)==null?void 0:h.value)??""),unavailable:!1}}const Ls=["sentiment","volatility","positioning","trend","breadth","momentum","liquidity","credit","macro","crossAsset"],zs={sentiment:"Sentiment",volatility:"Volatility",positioning:"Positioning",trend:"Trend",breadth:"Breadth",momentum:"Momentum",liquidity:"Liquidity",credit:"Credit",macro:"Macro",crossAsset:"Cross-Asset"};class Os extends _{constructor(){super({id:"fear-greed",title:d("panels.fearGreed"),showCount:!1,infoTooltip:"Composite sentiment index: 10 weighted categories (volatility, positioning, breadth, momentum, liquidity, credit, macro, cross-asset, sentiment, trend)."});g(this,"data",null)}async fetchData(){const e=z("fearGreedIndex");if(e&&!e.unavailable){const s=Is(e);if(s&&s.compositeScore>0)return this.data=s,this.renderPanel(),this.refreshFromRpc(),!0}return this.showLoading(),this.refreshFromRpc()}async refreshFromRpc(){try{const{MarketServiceClient:e}=await C(async()=>{const{MarketServiceClient:r}=await import("./rpc-client-market-v1-DNxvm993.js");return{MarketServiceClient:r}},[]),{getRpcBaseUrl:t}=await C(async()=>{const{getRpcBaseUrl:r}=await import("./index-CE8VpG3t.js").then(c=>c.a8);return{getRpcBaseUrl:r}},__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14])),n=await new e(t(),{fetch:(...r)=>globalThis.fetch(...r)}).getFearGreedIndex({});return n.unavailable?(this.data||this.showError(d("common.noDataShort"),()=>void this.fetchData()),!1):(this.data=n,this.renderPanel(),!0)}catch(e){return this.data||this.showError(e instanceof Error?e.message:d("common.failedToLoad"),()=>void this.fetchData()),!1}}renderPanel(){if(!this.data){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data,t=e.compositeScore,s=o(e.compositeLabel),n=e.previousScore,r=n>0?t-n:null,c=ot(t),l=Fs(t),p=Ms(e),m=Ls.map(u=>{const y=e[u];if(!y)return"";const b=Math.round(y.score??50),w=Math.round((y.weight??0)*100),$=(y.contribution??0).toFixed(1),k=y.degraded?' <span style="color:#e67e22;font-size:calc(10px * var(--wm-panel-effective-scale, 1))">degraded</span>':"",P=ot(b),A=zs[u]??u;return`
        <div style="margin:4px 0">
          <div style="display:flex;justify-content:space-between;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
            <span>${o(A)}${k}</span>
            <span style="color:${P};font-weight:600">${b}</span>
          </div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin:2px 0">
            <div style="width:${b}%;height:100%;background:${P};border-radius:2px;transition:width 0.3s"></div>
          </div>
          <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${w}% weight &middot; +${$} pts</div>
        </div>`}).join(""),f=(u,y)=>`<div style="text-align:center;padding:6px 4px">
        <div style="font-size:calc(18px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text)">${o(y)}</div>
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">${o(u)}</div>
      </div>`,v=[f("VIX",e.vix>0?L(e.vix,2):"N/A"),f("HY Spread",e.hySpread>0?`${L(e.hySpread,2)}%`:"N/A"),f("10Y Yield",e.yield10y>0?`${L(e.yield10y,2)}%`:"N/A"),f("P/C Ratio",e.putCallRatio>0?L(e.putCallRatio,2):"N/A"),f("% > 200d",e.pctAbove200d?`${L(e.pctAbove200d,1)}%`:"N/A"),f("CNN F&G",e.cnnFearGreed?`${Math.round(e.cnnFearGreed)}`:"N/A"),f("AAII Bull",e.aaiiBull?`${L(e.aaiiBull,1)}%`:"N/A"),f("AAII Bear",e.aaiiBear?`${L(e.aaiiBear,1)}%`:"N/A"),f("Fed Rate",e.fedRate||"N/A")].join(""),x=p.length>0?`<div style="margin-bottom:10px">
          ${p.map(u=>`<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;margin-bottom:4px;border-radius:4px;border:1px solid #e67e22;background:rgba(230,126,34,0.08);font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#e67e22">&#9888; ${o(u)}</div>`).join("")}
        </div>`:"",h=`
      <div style="padding:12px 14px">
        <div style="text-align:center;margin-bottom:12px">
          <div style="text-align:center;font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${l.color};letter-spacing:0.06em;text-transform:uppercase;margin-bottom:4px">${o(l.state)}</div>
          ${Ns(t,s,r,c)}
          <div style="text-align:center;margin-top:6px;margin-bottom:8px">
            <span style="display:inline-block;padding:3px 12px;border-radius:999px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#fff;background:${l.color};letter-spacing:0.08em">${o(l.stance)}</span>
          </div>
        </div>
        ${x}
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(255,255,255,0.04);border-radius:8px;padding:4px;margin-bottom:12px">
          ${v}
        </div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px">Category Breakdown</div>
        ${m}
      </div>`;this.setSafeContent(S(h,"legacy Panel.setContent() migration"))}}const Un=Object.freeze(Object.defineProperty({__proto__:null,FearGreedPanel:Os},Symbol.toStringTag,{value:"Module"}));function Lt(a){return a<=-20?"#e74c3c":a<=-10?"#e67e22":a<0?"#f39c12":a<10?"#95a5a6":a<20?"#27ae60":"#2ecc71"}function Bs(a){return a<=-20?"Extreme Bearish":a<=-10?"Bearish":a<0?"Mildly Bearish":a<10?"Neutral":a<20?"Bullish":"Extreme Bullish"}function ve(a,i,e,t){return`<div style="margin:4px 0">
    <div style="display:flex;justify-content:space-between;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:2px">
      <span>${o(e)}</span>
      <span style="color:${i};font-weight:600">${o(t)}</span>
    </div>
    <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:3px">
      <div style="width:${Math.min(a,100)}%;height:100%;background:${i};border-radius:3px;transition:width 0.3s"></div>
    </div>
  </div>`}function Us(a){const i=Lt(a),e=Math.max(-60,Math.min(60,a)),t=50,s=Math.abs(e)/60*50,n=e>=0?t:t-s;return`<div style="margin:8px 0">
    <div style="display:flex;justify-content:space-between;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:3px">
      <span>Bull-Bear Spread</span>
      <span style="color:${i};font-weight:700">${e>=0?"+":""}${a.toFixed(1)}%</span>
    </div>
    <div style="position:relative;height:10px;background:rgba(255,255,255,0.06);border-radius:4px">
      <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.2)"></div>
      <div style="position:absolute;top:0;bottom:0;left:${n.toFixed(1)}%;width:${s.toFixed(1)}%;background:${i};border-radius:3px;transition:all 0.3s"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">
      <span>Bearish</span>
      <span>Bullish</span>
    </div>
  </div>`}function js(a){if(a.length<2)return"";const i=[...a].reverse(),e=280,t=60,s=4,n=i.map(b=>b.spread),r=Math.max(Math.abs(Math.min(...n)),Math.abs(Math.max(...n)),20),c=(e-s*2)/(i.length-1),l=t/2,p=(l-s)/r,f=i.map((b,w)=>{const $=(s+w*c).toFixed(1),k=(l-b.spread*p).toFixed(1);return`${$},${k}`}).join(" "),v=i.map((b,w)=>{const $=s+w*c-1,k=Math.abs(b.spread)*p,P=b.spread>=0?l-k:l,A=b.spread>=0?"rgba(39,174,96,0.25)":"rgba(231,76,60,0.25)";return`<rect x="${$.toFixed(1)}" y="${P.toFixed(1)}" width="2" height="${k.toFixed(1)}" fill="${A}" rx="0.5"/>`}).join(""),x=`<line x1="${s}" y1="${l}" x2="${e-s}" y2="${l}" stroke="rgba(255,255,255,0.15)" stroke-width="0.5" stroke-dasharray="3,3"/>`,h=l+20*p,u=`<line x1="${s}" y1="${h.toFixed(1)}" x2="${e-s}" y2="${h.toFixed(1)}" stroke="rgba(231,76,60,0.3)" stroke-width="0.5" stroke-dasharray="2,4"/>`,y=`<text x="${e-s}" y="${(h-2).toFixed(1)}" text-anchor="end" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" fill="rgba(231,76,60,0.5)" font-family="system-ui,sans-serif">-20 buy signal</text>`;return`<div style="margin:8px 0">
    <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">52-Week Spread History</div>
    <svg viewBox="0 0 ${e} ${t}" width="100%" height="${t}" role="img" aria-label="AAII 52-week bull-bear spread history" style="display:block">
      ${v}
      ${x}
      ${u}
      ${y}
      <polyline points="${f}" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  </div>`}class Gs extends _{constructor(){super({id:"aaii-sentiment",title:"AAII Investor Sentiment",showCount:!1,infoTooltip:"Weekly AAII survey: individual investors report 6-month market outlook as bullish, neutral, or bearish. Spread below -20 is a historical contrarian buy signal."});g(this,"data",null)}async fetchData(){var t;const e=z("aaiiSentiment");if(e!=null&&e.latest)return this.data=e,this.renderPanel(),!0;try{const s=await fetch(Ct("/api/bootstrap?keys=aaiiSentiment"),{signal:AbortSignal.timeout(5e3)});if(s.ok){const{data:n}=await s.json();if((t=n.aaiiSentiment)!=null&&t.latest)return this.data=n.aaiiSentiment,this.renderPanel(),!0}}catch{}return this.showError("AAII sentiment data unavailable",()=>{this.fetchData()},300),!1}renderPanel(){var k;if(!((k=this.data)!=null&&k.latest)){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data,{latest:t,previous:s,avg8w:n,historicalAvg:r,extremes:c,weeks:l}=e,p=Lt(t.spread),m=Bs(t.spread),f=s==null?void 0:s.spread,v=f!=null?t.spread-f:null,x=v!=null?`<span style="color:${v>=0?"#2ecc71":"#e74c3c"};font-size:calc(10px * var(--wm-panel-effective-scale, 1));margin-left:4px">${v>=0?"+":""}${v.toFixed(1)} vs prev</span>`:"",h=t.spread<=-20?`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;margin:8px 0;border-radius:4px;border:1px solid #2ecc71;background:rgba(46,204,113,0.08);font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#2ecc71">
          &#9432; Contrarian buy signal active: spread at ${t.spread.toFixed(1)}% (threshold: -20%)
        </div>`:t.bearish>=50?`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;margin:8px 0;border-radius:4px;border:1px solid #e67e22;background:rgba(230,126,34,0.08);font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#e67e22">
            &#9888; Extreme bearish reading: ${t.bearish.toFixed(1)}% bearish (avg: ${r.bearish}%)
          </div>`:"",u=n?`
      <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)">
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">8-Week Moving Average</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;text-align:center">
          <div><div style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:#2ecc71">${n.bullish}%</div><div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bull</div></div>
          <div><div style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:#95a5a6">${n.neutral}%</div><div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Neutral</div></div>
          <div><div style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:#e74c3c">${n.bearish}%</div><div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bear</div></div>
        </div>
      </div>`:"",y=c.spreadBelow20>0||c.bearishAbove50>0?`<div style="margin-top:6px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          52w extremes: ${c.spreadBelow20} contrarian signals, ${c.bearishAbove50} extreme bear, ${c.bullishAbove50} extreme bull
        </div>`:"",b=e.fallback?'<span style="display:inline-block;padding:1px 5px;border-radius:3px;background:rgba(230,126,34,0.15);color:#e67e22;font-size:calc(9px * var(--wm-panel-effective-scale, 1));margin-left:4px">(fallback data)</span>':"",w=t.date?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-align:right;margin-top:4px">Survey: ${o(t.date)}${e.source!=="xls"?` (${o(e.source)})`:""}${b}</div>`:"",$=`
      <div style="padding:12px 14px">
        <div style="text-align:center;margin-bottom:8px">
          <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${p};letter-spacing:0.06em;text-transform:uppercase">${o(m)}</div>
          ${x?`<div style="margin-top:2px">${x}</div>`:""}
        </div>

        ${h}

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center;padding:8px;background:rgba(255,255,255,0.03);border-radius:6px;margin-bottom:8px">
          <div>
            <div style="font-size:calc(22px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#2ecc71">${t.bullish.toFixed(1)}%</div>
            <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bullish</div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">avg ${r.bullish}%</div>
          </div>
          <div>
            <div style="font-size:calc(22px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#95a5a6">${t.neutral.toFixed(1)}%</div>
            <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Neutral</div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">avg ${r.neutral}%</div>
          </div>
          <div>
            <div style="font-size:calc(22px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#e74c3c">${t.bearish.toFixed(1)}%</div>
            <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bearish</div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">avg ${r.bearish}%</div>
          </div>
        </div>

        ${ve(t.bullish,"#2ecc71","Bullish",`${t.bullish.toFixed(1)}%`)}
        ${ve(t.neutral,"#95a5a6","Neutral",`${t.neutral.toFixed(1)}%`)}
        ${ve(t.bearish,"#e74c3c","Bearish",`${t.bearish.toFixed(1)}%`)}

        ${Us(t.spread)}

        ${js(l)}

        ${u}
        ${y}
        ${w}
      </div>`;this.setSafeContent(S($,"legacy Panel.setContent() migration"))}}const jn=Object.freeze(Object.defineProperty({__proto__:null,AAIISentimentPanel:Gs},Symbol.toStringTag,{value:"Module"}));function j(a){return a==null?null:Number.isFinite(a)?a:null}function lt(a){const i=a.current,e=(a.history??[]).map(t=>({date:t.date,pctAbove20d:j(t.pctAbove20d),pctAbove50d:j(t.pctAbove50d),pctAbove200d:j(t.pctAbove200d)}));return{currentPctAbove20d:j(a.currentPctAbove20d??(i==null?void 0:i.pctAbove20d)),currentPctAbove50d:j(a.currentPctAbove50d??(i==null?void 0:i.pctAbove50d)),currentPctAbove200d:j(a.currentPctAbove200d??(i==null?void 0:i.pctAbove200d)),updatedAt:a.updatedAt??"",history:e,unavailable:a.unavailable}}const ne=480,Ie=160,H=32,Le=12,zt=10,Ot=22,ct=ne-H-Le,dt=Ie-zt-Ot,ze=[{key:"pctAbove20d",color:"#3b82f6",label:"20-day SMA",fillOpacity:.08},{key:"pctAbove50d",color:"#f59e0b",label:"50-day SMA",fillOpacity:.06},{key:"pctAbove200d",color:"#22c55e",label:"200-day SMA",fillOpacity:.04}];function Bt(a,i){return i<=1?H+ct/2:H+a/(i-1)*ct}function de(a){return zt+dt-a/100*dt}function pt(a,i){const e=[];let t=[];for(let s=0;s<a.length;s++){const n=a[s][i];if(n==null||!Number.isFinite(n)){t.length>0&&(e.push(t),t=[]);continue}t.push({x:Bt(s,a.length),y:de(n)})}return t.length>0&&e.push(t),e}function Hs(a){if(a.length<2)return"";const i=de(0).toFixed(1),e=a[0].x.toFixed(1),t=a[a.length-1].x.toFixed(1),s=a.map(n=>`${n.x.toFixed(1)},${n.y.toFixed(1)}`);return`M${e},${i} L${s.join(" L")} L${t},${i} Z`}function Vs(a){return a.length===0?"":a.map(i=>`${i.x.toFixed(1)},${i.y.toFixed(1)}`).join(" ")}function qs(a){if(a.length<2)return'<div style="text-align:center;color:var(--text-dim);padding:20px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">Collecting data. Chart appears after 2+ days.</div>';const i=[0,25,50,75,100].map(l=>{const p=de(l);return`
      <line x1="${H}" y1="${p.toFixed(1)}" x2="${ne-Le}" y2="${p.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${(H-3).toFixed(0)}" y="${p.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${l}%</text>`}).join(""),e=Math.max(1,Math.floor(a.length/6)),t=a.map((l,p)=>{if(p%e!==0&&p!==a.length-1)return"";const m=Bt(p,a.length),f=l.date.slice(5);return`<text x="${m.toFixed(1)}" y="${Ie-Ot+13}" text-anchor="middle" fill="rgba(255,255,255,0.4)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))">${o(f)}</text>`}).join(""),s=ze.map(l=>pt(a,l.key).map(m=>{const f=Hs(m);return f?`<path d="${f}" fill="${l.color}" opacity="${l.fillOpacity}"/>`:""}).join("")).join(""),n=ze.map(l=>pt(a,l.key).map(m=>m.length<2?"":`<polyline points="${Vs(m)}" fill="none" stroke="${l.color}" stroke-width="1.5" opacity="0.9"/>`).join("")).join(""),r=de(50),c=`<line x1="${H}" y1="${r.toFixed(1)}" x2="${ne-Le}" y2="${r.toFixed(1)}" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4 3"/>`;return`<svg viewBox="0 0 ${ne} ${Ie}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Market breadth: advancing versus declining issues over time" style="width:100%;height:auto;display:block">${i}${c}${t}${s}${n}</svg>`}function Ys(a,i){const e=a>=60?"rgba(34,197,94,0.12)":a>=40?"rgba(245,158,11,0.12)":"rgba(239,68,68,0.12)",t=a>=60?"#22c55e":a>=40?"#f59e0b":"#ef4444";return`<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:4px;background:${e}">
    <span style="width:6px;height:6px;border-radius:50%;background:${i}"></span>
    <span style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${t}">${a.toFixed(1)}%</span>
  </span>`}class Ws extends _{constructor(){super({id:"market-breadth",title:d("panels.marketBreadth"),showCount:!1,infoTooltip:"Percentage of S&P 500 stocks trading above their 20, 50, and 200-day simple moving averages. A measure of market participation and internal strength."});g(this,"data",null)}async fetchData(){var t;const e=z("breadthHistory");return e&&!e.unavailable&&((t=e.history)!=null&&t.length)?(this.data=lt(e),this.renderPanel(),this.refreshFromRpc(),!0):(this.showLoading(),this.refreshFromRpc())}async refreshFromRpc(){try{const{MarketServiceClient:e}=await C(async()=>{const{MarketServiceClient:r}=await import("./rpc-client-market-v1-DNxvm993.js");return{MarketServiceClient:r}},[]),{getRpcBaseUrl:t}=await C(async()=>{const{getRpcBaseUrl:r}=await import("./index-CE8VpG3t.js").then(c=>c.a8);return{getRpcBaseUrl:r}},__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14])),n=await new e(t(),{fetch:(...r)=>globalThis.fetch(...r)}).getMarketBreadthHistory({});return n.unavailable?(this.data||this.showError(d("common.noDataShort"),()=>void this.fetchData()),!1):(this.data=lt(n),this.renderPanel(),!0)}catch(e){return this.data||this.showError(e instanceof Error?e.message:d("common.failedToLoad"),()=>void this.fetchData()),!1}}renderPanel(){var c,l;if(!((l=(c=this.data)==null?void 0:c.history)!=null&&l.length)){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data,t=qs(e.history),s={pctAbove20d:e.currentPctAbove20d,pctAbove50d:e.currentPctAbove50d,pctAbove200d:e.currentPctAbove200d},r=`
      <div style="padding:12px 14px">
        <div style="margin-bottom:8px">${ze.map(p=>{const m=s[p.key],f=typeof m=="number"&&Number.isFinite(m)&&m>=0;return`<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0">
        <span style="display:flex;align-items:center;gap:6px;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          <span style="width:8px;height:3px;border-radius:1px;background:${p.color}"></span>
          % Above ${o(p.label)}
        </span>
        ${f?Ys(m,p.color):'<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">—</span>'}
      </div>`}).join("")}</div>
        <div style="border-radius:6px;background:rgba(255,255,255,0.02);padding:4px 0">${t}</div>
        ${e.updatedAt?`<div style="text-align:right;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:4px">${o(new Date(e.updatedAt).toLocaleString())}</div>`:""}
      </div>`;this.setSafeContent(S(r,"legacy Panel.setContent() migration"))}}const Gn=Object.freeze(Object.defineProperty({__proto__:null,MarketBreadthPanel:Ws},Symbol.toStringTag,{value:"Module"})),Xs=[{symbol:"^GSPC",label:"S&P 500"},{symbol:"^IXIC",label:"Nasdaq Composite"},{symbol:"BTC-USD",label:"Bitcoin"},{symbol:"ETH-USD",label:"Ethereum"},{symbol:"GC=F",label:"Gold"},{symbol:"CL=F",label:"WTI Crude"}],Ks=[{hours:24,label:"24 hours"},{hours:72,label:"3 days"},{hours:168,label:"7 days"},{hours:336,label:"14 days"}],re=560,Oe=210,oe=42,Be=54,le=12,Qs=28,Zs=re-oe-Be,ge=Oe-le-Qs;function mt(a,i){return a.map(e=>({timestampMs:Ne(e.timestamp),value:e.value})).filter(e=>Number.isFinite(e.timestampMs)&&e.timestampMs>=i&&Number.isFinite(e.value)).sort((e,t)=>e.timestampMs-t.timestampMs)}function ut(a){const i=Math.min(...a),e=Math.max(...a);if(i===e){const s=Math.abs(i)*.05||1;return{min:i-s,max:e+s}}const t=(e-i)*.06;return{min:i-t,max:e+t}}function ft(a){return Math.abs(a)>=1e3?a.toLocaleString(void 0,{maximumFractionDigits:0}):Math.abs(a)>=100?a.toFixed(0):Math.abs(a)>=10?a.toFixed(1):a.toFixed(2)}function ht(a,i,e,t){const s=[];let n=[],r=Number.NEGATIVE_INFINITY;for(const c of a)c.timestampMs-r>t&&n.length>0&&(s.push(n.join(" ")),n=[]),n.push(`${i(c.timestampMs).toFixed(1)},${e(c.value).toFixed(1)}`),r=c.timestampMs;return n.length>0&&s.push(n.join(" ")),s}function Ut(a,i,e){const t=Math.max(...a.map($=>Ne($.timestamp)).filter(Number.isFinite),...i.map($=>Ne($.timestamp)).filter(Number.isFinite));if(!Number.isFinite(t))return'<div class="news-market-correlation__empty">No timestamped series available.</div>';const s=t-e*60*60*1e3,n=mt(a,s),r=mt(i,s);if(n.length<2||r.length<2)return'<div class="news-market-correlation__empty">Not enough overlapping history for this window.</div>';const c=Math.max(s,Math.min(n[0].timestampMs,r[0].timestampMs)),l=Math.max(n[n.length-1].timestampMs,r[r.length-1].timestampMs),p=Math.max(1,l-c),m=ut(n.map($=>$.value)),f=ut(r.map($=>$.value)),v=$=>oe+($-c)/p*Zs,x=$=>le+(1-($-m.min)/(m.max-m.min))*ge,h=$=>le+(1-($-f.min)/(f.max-f.min))*ge,u=[0,.25,.5,.75,1].map($=>{const k=le+$*ge,P=m.max-$*(m.max-m.min),A=f.max-$*(f.max-f.min);return`<line x1="${oe}" y1="${k.toFixed(1)}" x2="${re-Be}" y2="${k.toFixed(1)}" stroke="rgba(255,255,255,0.07)"/><text x="${oe-5}" y="${k.toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#f59e0b" font-size="8">${o(ft(P))}</text><text x="${re-Be+5}" y="${k.toFixed(1)}" text-anchor="start" dominant-baseline="middle" fill="#60a5fa" font-size="8">${o(ft(A))}</text>`}).join(""),y=[0,.5,1].map($=>{const k=c+$*p,P=new Date(k).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1});return`<text x="${v(k).toFixed(1)}" y="${Oe-7}" text-anchor="${$===0?"start":$===1?"end":"middle"}" fill="rgba(255,255,255,0.45)" font-size="8">${o(P)}</text>`}).join(""),b=ht(n,v,x,10800*1e3).filter($=>$.includes(" ")).map($=>`<polyline points="${$}" fill="none" stroke="#f59e0b" stroke-width="1.6" stroke-linejoin="round"/>`).join(""),w=ht(r,v,h,7200*1e3).filter($=>$.includes(" ")).map($=>`<polyline points="${$}" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linejoin="round"/>`).join("");return`<svg class="news-market-correlation__chart" viewBox="0 0 ${re} ${Oe}" role="img" aria-label="News volume and market price over a shared time axis">${u}${y}${b}${w}</svg>`}function Js(a){return{"insufficient-data":"Insufficient aligned observations",none:"No clear relationship","weak-positive":"Weak positive relationship","weak-negative":"Weak negative relationship","moderate-positive":"Moderate positive relationship","moderate-negative":"Moderate negative relationship","strong-positive":"Strong positive relationship","strong-negative":"Strong negative relationship"}[a.relationship]}function ei(a){var e;return a.leadLag.relationship==="neither"?"Neither series clearly leads":`${a.leadLag.relationship==="news-leads"?"News leads":"Market leads"} by ${a.leadLag.hours}h (r=${((e=a.leadLag.coefficient)==null?void 0:e.toFixed(2))??"—"}, n=${a.leadLag.sampleSize})`}class ti extends _{constructor(){super({id:"news-market-correlation",title:"News ↔ Markets",showCount:!1,className:"panel-wide",defaultRowSpan:2,infoTooltip:"Exploratory Pearson correlation between persisted GDELT topic volume and hourly market returns. The chart shows news volume and price on separate axes. Correlation and lead/lag do not establish causation."});g(this,"selectedTopic","sanctions");g(this,"selectedSymbol","^GSPC");g(this,"windowHours",168);g(this,"hasData",!1);g(this,"requestGeneration",0);g(this,"renderedSelection",null)}async fetchData(){var r,c,l,p,m;const e=++this.requestGeneration,t=this.selectedTopic,s=this.selectedSymbol,n=this.windowHours;this.hasData||this.showLoading();try{const[f,v]=await Promise.all([La("marketCorrelationSeries"),za(t)]);if(e!==this.requestGeneration)return!1;const x=Ua(f)?f:void 0,h=(r=x==null?void 0:x.series)==null?void 0:r.find(w=>w.symbol===s),u=(c=h==null?void 0:h.points)!=null&&c.length?h:(l=x==null?void 0:x.series)==null?void 0:l.find(w=>{var $;return($=w.points)==null?void 0:$.length});if(!((p=v==null?void 0:v.vol)!=null&&p.length)||!((m=u==null?void 0:u.points)!=null&&m.length)||!x)return this.hasData?this.restoreRenderedSelection():this.showError("Correlation series unavailable",()=>void this.fetchData(),300),!1;this.selectedSymbol=u.symbol;const y=v.vol.map(w=>({timestamp:w.date,value:w.value})),b=ja(y,u.points,{windowHours:n,maxLagHours:6});return this.hasData=!0,this.renderedSelection={topic:t,symbol:u.symbol,windowHours:n},this.renderPanel(y,x,u,b,n),!0}catch(f){return e!==this.requestGeneration||(this.hasData?this.restoreRenderedSelection():this.showError(f instanceof Error?f.message:"Failed to load correlation series",()=>void this.fetchData(),300)),!1}}restoreRenderedSelection(){if(!this.renderedSelection)return;this.selectedTopic=this.renderedSelection.topic,this.selectedSymbol=this.renderedSelection.symbol,this.windowHours=this.renderedSelection.windowHours;const e=this.content.querySelector('[data-role="news-topic"]'),t=this.content.querySelector('[data-role="market-symbol"]'),s=this.content.querySelector('[data-role="window-hours"]');e&&(e.value=this.selectedTopic),t&&(t.value=this.selectedSymbol),s&&(s.value=String(this.windowHours))}renderPanel(e,t,s,n,r){const c=Oa.map(y=>`<option value="${o(y.id)}"${y.id===this.selectedTopic?" selected":""}>${o(y.name)}</option>`).join(""),l=new Set(t.series.filter(y=>{var b;return(b=y.points)==null?void 0:b.length}).map(y=>y.symbol)),p=Xs.map(y=>`<option value="${o(y.symbol)}"${y.symbol===this.selectedSymbol?" selected":""}${l.has(y.symbol)?"":" disabled"}>${o(y.label)}</option>`).join(""),m=Ks.map(y=>`<option value="${y.hours}"${y.hours===this.windowHours?" selected":""}>${o(y.label)}</option>`).join(""),f=n.coefficient===null?"—":n.coefficient.toFixed(2),v=n.confidenceInterval?`[${n.confidenceInterval.low.toFixed(2)}, ${n.confidenceInterval.high.toFixed(2)}]`:"—",x=n.relationship==="none"||n.relationship==="insufficient-data"?"news-market-correlation__result--neutral":n.coefficient!==null&&n.coefficient<0?"news-market-correlation__result--negative":"news-market-correlation__result--positive",h=t.updatedAt?new Date(t.updatedAt).toLocaleString():"unknown",u=`<div class="news-market-correlation">
      <div class="news-market-correlation__controls">
        <label>News topic<select data-role="news-topic">${c}</select></label>
        <label>Market<select data-role="market-symbol">${p}</select></label>
        <label>Window<select data-role="window-hours">${m}</select></label>
      </div>
      <div class="news-market-correlation__legend"><span><i class="news-market-correlation__dot news-market-correlation__dot--news"></i>GDELT news volume</span><span><i class="news-market-correlation__dot news-market-correlation__dot--market"></i>${o(s.label)} price</span></div>
      ${Ut(e,s.points,r)}
      <div class="news-market-correlation__stats">
        <div><span>Pearson r</span><strong>${o(f)}</strong><small>n=${n.sampleSize} hourly returns</small></div>
        <div><span>95% interval</span><strong>${o(v)}</strong><small>displayed window</small></div>
        <div class="${x}"><span>Interpretation</span><strong>${o(Js(n))}</strong><small>${o(ei(n))}</small></div>
      </div>
      <div class="news-market-correlation__caveat">Pearson r compares topic volume with hourly market returns. The ±6h lead/lag scan is exploratory. Correlation is not causation; weak and null results are retained.</div>
      <div class="news-market-correlation__freshness">Market series updated ${o(h)}</div>
    </div>`;this.setSafeContent(S(u,"news-market-correlation controlled panel markup"),()=>this.bindControls())}bindControls(){var e,t,s;(e=this.content.querySelector('[data-role="news-topic"]'))==null||e.addEventListener("change",n=>{this.selectedTopic=n.currentTarget.value,this.fetchData()}),(t=this.content.querySelector('[data-role="market-symbol"]'))==null||t.addEventListener("change",n=>{this.selectedSymbol=n.currentTarget.value,this.fetchData()}),(s=this.content.querySelector('[data-role="window-hours"]'))==null||s.addEventListener("change",n=>{this.windowHours=Number(n.currentTarget.value)||168,this.fetchData()})}}const Hn=Object.freeze(Object.defineProperty({__proto__:null,NewsMarketCorrelationPanel:ti,buildNewsMarketChart:Ut},Symbol.toStringTag,{value:"Module"})),jt=15e3;class ai extends _{constructor(){super({id:"nq-pulse",title:"NQ Pulse",showCount:!1,infoTooltip:Tt});g(this,"requestGuard",new Pt)}async fetchData(){const e=this.requestGuard.begin(),t=Fe([this.signal,Me(jt)]);this.showLoading("Loading NQ context...");try{const s=await Ga(Ke,{signal:t});if(!this.requestGuard.isCurrent(e)||this.signal.aborted)return!1;const n=Date.now(),r=Ha(s.asOf,n),c=Va({rows:Ya(s.data,Ke),freshness:r,asOfLabel:qa(s.asOf,r)});return this.setSafeContent(S(c,"NQ Pulse rows use escaped instrument labels and formatted quotes")),s.data.length>0}catch(s){if(!this.requestGuard.isCurrent(e)||this.signal.aborted)return!1;const n=Ba(s);return this.showError(n||!(s instanceof Error)?"NQ context unavailable.":s.message,()=>{this.fetchData()}),!1}}}const Vn=Object.freeze(Object.defineProperty({__proto__:null,NQ_PULSE_REQUEST_TIMEOUT_MS:jt,NqPulsePanel:ai},Symbol.toStringTag,{value:"Module"})),Ue=15e3;let ye=null,xe=null;async function si(){if(!ye){const{EconomicServiceClient:a}=await C(async()=>{const{EconomicServiceClient:i}=await import("./rpc-client-economic-v1-BVRWogRr.js");return{EconomicServiceClient:i}},[]);ye=new a(W(),{fetch:(...i)=>globalThis.fetch(...i)})}return ye}async function ii(){if(!xe){const{MarketServiceClient:a}=await C(async()=>{const{MarketServiceClient:i}=await import("./rpc-client-market-v1-DNxvm993.js");return{MarketServiceClient:i}},[]);xe=new a(W(),{fetch:(...i)=>globalThis.fetch(...i)})}return xe}class ni extends _{constructor(){super({id:"nq-catalysts",title:"NQ Catalysts",showCount:!1,infoTooltip:Tt});g(this,"requestGuard",new Pt)}async fetchData(){const e=this.requestGuard.begin();this.showLoading("Loading NQ catalysts...");const t=new Date,s=V(t),n=Qe(t,ma),r=V(t),c=Qe(t,ua),l=Fe([this.signal,Me(Ue)]),p=Fe([this.signal,Me(Ue)]);try{const[m,f]=await Promise.allSettled([si().then(b=>b.getEconomicCalendar({fromDate:s,toDate:n},{signal:l})),ii().then(b=>b.listEarningsCalendar({fromDate:r,toDate:c},{signal:p}))]);if(!this.requestGuard.isCurrent(e)||this.signal.aborted)return!1;const v=m.status!=="fulfilled"||!!m.value.unavailable,x=f.status!=="fulfilled"||!!f.value.unavailable,h=m.status==="fulfilled"?m.value.events??[]:[],u=f.status==="fulfilled"?f.value.earnings??[]:[],y=Wa({macro:Ka(h,t),earnings:Xa(u,t),macroUnavailable:v,earningsUnavailable:x,macroAsOf:m.status==="fulfilled"?m.value.asOf:void 0,earningsAsOf:f.status==="fulfilled"?f.value.asOf:void 0});return this.setSafeContent(S(y,"NQ Catalysts rows use escaped event labels and source dates")),!v||!x}catch(m){return!this.requestGuard.isCurrent(e)||this.signal.aborted||this.isAbortError(m)||this.showError(m instanceof Error?m.message:"NQ catalysts unavailable.",()=>{this.fetchData()}),!1}}}const qn=Object.freeze(Object.defineProperty({__proto__:null,NQ_CATALYSTS_REQUEST_TIMEOUT_MS:Ue,NqCatalystsPanel:ni},Symbol.toStringTag,{value:"Module"}));let be=null;async function ri(){if(!be){const{EconomicServiceClient:a}=await C(async()=>{const{EconomicServiceClient:e}=await import("./rpc-client-economic-v1-BVRWogRr.js");return{EconomicServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./index-CE8VpG3t.js").then(t=>t.a8);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));be=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return be}const $e=["DGS1MO","DGS3MO","DGS6MO","DGS1","DGS2","DGS5","DGS10","DGS30"],je=["1M","3M","6M","1Y","2Y","5Y","10Y","30Y"],Gt=["1Y","2Y","5Y","10Y","20Y","30Y"],Ve=480,qe=180,q=40,Ht=20,Vt=16,qt=24,Ge=Ve-q-Ht,vt=qe-Vt-qt;function Ye(a,i){return i<=1?q+Ge/2:q+a/(i-1)*Ge}function X(a,i,e){const t=e-i||1,s=(a-i)/t;return Vt+vt-s*vt}function gt(a,i,e){return a.map((t,s)=>{if(t.value===null)return null;const n=Ye(s,a.length),r=X(t.value,i,e);return`${n.toFixed(2)},${r.toFixed(2)}`}).filter(Boolean).join(" ")}function oi(a,i){const e=(i-a)/3,t=[];for(let s=0;s<=3;s++){const n=a+e*s,r=X(n,a,i);t.push(`<text x="${(q-4).toFixed(0)}" y="${r.toFixed(2)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))" alignment-baseline="middle">${n.toFixed(1)}%</text>`),t.push(`<line x1="${q}" y1="${r.toFixed(2)}" x2="${Ve-Ht}" y2="${r.toFixed(2)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`)}return t.join("")}function li(a){return je.slice(0,a).map((i,e)=>{const t=Ye(e,a),s=qe-qt+12;return`<text x="${t.toFixed(2)}" y="${s}" text-anchor="middle" fill="rgba(255,255,255,0.5)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))">${o(i)}</text>`}).join("")}function ci(a,i,e,t){return a.map((s,n)=>{if(s.value===null)return"";const r=Ye(n,a.length),c=X(s.value,i,e);return`<circle cx="${r.toFixed(2)}" cy="${c.toFixed(2)}" r="3" fill="${t}" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>`}).join("")}function Yt(a){const e={"1Y":3,"2Y":4,"5Y":5,"10Y":6,"20Y":6.5,"30Y":7}[a];return e==null?null:q+e/7*Ge}function di(a,i,e){const t=Gt.map(s=>{const n=a[s];if(n==null)return null;const r=Yt(s);if(r===null)return null;const c=X(n,i,e);return`${r.toFixed(2)},${c.toFixed(2)}`}).filter(Boolean);return t.length<2?"":`<polyline points="${t.join(" ")}" fill="none" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="5,3" stroke-linecap="round" stroke-linejoin="round"/>`}function pi(a,i,e){return Gt.map(t=>{const s=a[t];if(s==null)return"";const n=Yt(t);if(n===null)return"";const r=X(s,i,e);return`<circle cx="${n.toFixed(2)}" cy="${r.toFixed(2)}" r="2.5" fill="#2ecc71" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>`}).join("")}function mi(a,i,e){const t=a.map(h=>h.value).filter(h=>h!==null),s=i.map(h=>h.value).filter(h=>h!==null),n=e?Object.values(e):[],r=[...t,...s,...n];if(r.length===0)return'<div style="padding:16px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">No yield data available.</div>';const c=Math.max(0,Math.min(...r)-.25),l=Math.max(...r)+.5,p=gt(a,c,l),m=gt(i,c,l),f=m.length>0?`<polyline points="${m}" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round"/>`:"",v=e?di(e,c,l):"",x=e?pi(e,c,l):"";return`
    <svg viewBox="0 0 ${Ve} ${qe}" width="100%" role="img" aria-label="Treasury yield curve by maturity" style="display:block;overflow:visible">
      ${oi(c,l)}
      ${li(a.length)}
      ${f}
      ${v}
      <polyline points="${p}" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      ${ci(a,c,l,"#3498db")}
      ${x}
    </svg>`}function ui(a){const i=a.map(t=>`<th scope="col" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text-dim);padding:4px 6px;text-align:center">${o(t.tenor)}</th>`).join(""),e=a.map(t=>{const s=t.value!==null?`${t.value.toFixed(2)}%`:"N/A";return`<td style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text);padding:4px 6px;text-align:center">${o(s)}</td>`}).join("");return`
    <div style="overflow-x:auto;margin-top:8px">
      <table style="width:100%;border-collapse:collapse">
        <thead><tr>${i}</tr></thead>
        <tbody><tr>${e}</tr></tbody>
      </table>
    </div>`}function fi(a,i,e=80,t=22){const s=a.map(p=>p.value).filter(p=>Number.isFinite(p));if(s.length<2)return`<svg width="${e}" height="${t}"></svg>`;const n=Math.min(...s),c=Math.max(...s)-n||.01,l=s.map((p,m)=>{const f=m/(s.length-1)*e,v=t-(p-n)/c*(t-2)-1;return`${f.toFixed(1)},${v.toFixed(1)}`}).join(" ");return`<svg width="${e}" height="${t}" aria-hidden="true" style="display:inline-block;vertical-align:middle"><polyline points="${l}" fill="none" stroke="${o(i)}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function hi(a){return a.some(t=>t.obs.length>0)?`<div style="padding:4px 0">${a.map(t=>{const s=t.obs[t.obs.length-1];if(!s)return"";const n=t.obs[t.obs.length-2],r=n?s.value-n.value:null,c=r!==null?`${r>=0?"+":""}${r.toFixed(2)}%`:"",l=r===null?"":r>=0?"#e74c3c":"#27ae60";return`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <div style="width:90px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(t.label)}</div>
      ${fi(t.obs.slice(-24),t.color)}
      <div style="min-width:44px;text-align:right;font-size:calc(13px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text);font-variant-numeric:tabular-nums">${o(s.value.toFixed(2))}%</div>
      ${c?`<div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:${l}">${o(c)}</div>`:""}
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-left:auto">${o(s.date)}</div>
    </div>`}).join("")}</div>
    <div style="margin-top:8px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Source: ECB</div>`:'<div style="padding:16px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">ECB rate data unavailable</div>'}class vi extends _{constructor(){super({id:"yield-curve",title:"Yield Curve & Rates",showCount:!1,infoTooltip:d("components.yieldCurve.infoTooltip")});g(this,"_hasData",!1);g(this,"_tab","curve");g(this,"_current",[]);g(this,"_prior",[]);g(this,"_ecbRates",null);g(this,"_rateRows",[]);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-tab]");((t==null?void 0:t.dataset.tab)==="curve"||(t==null?void 0:t.dataset.tab)==="rates")&&(this._tab=t.dataset.tab,this._render())})}async fetchData(){var e,t,s,n,r;this.showLoading();try{const c=await ri(),[l,p]=await Promise.allSettled([c.getFredSeriesBatch({seriesIds:[...$e,"ESTR","EURIBOR3M","EURIBOR6M","EURIBOR1Y"],limit:36}),c.getEuYieldCurve({})]),m=l.status==="fulfilled"?l.value.results??{}:{};return this._current=$e.map((v,x)=>{var u,y;const h=((u=m[v])==null?void 0:u.observations)??[];return{tenor:je[x]??v,value:h.length>0?((y=h[h.length-1])==null?void 0:y.value)??null:null}}),this._prior=$e.map((v,x)=>{var u,y;const h=((u=m[v])==null?void 0:u.observations)??[];return{tenor:je[x]??v,value:h.length>1?((y=h[h.length-2])==null?void 0:y.value)??null:null}}),this._ecbRates=p.status==="fulfilled"&&!p.value.unavailable&&((e=p.value.data)!=null&&e.rates)?p.value.data.rates:null,this._rateRows=[{id:"ESTR",label:"€STR",obs:((t=m.ESTR)==null?void 0:t.observations)??[],color:"#2ecc71"},{id:"EURIBOR3M",label:"EURIBOR 3M",obs:((s=m.EURIBOR3M)==null?void 0:s.observations)??[],color:"#3498db"},{id:"EURIBOR6M",label:"EURIBOR 6M",obs:((n=m.EURIBOR6M)==null?void 0:n.observations)??[],color:"#9b59b6"},{id:"EURIBOR1Y",label:"EURIBOR 1Y",obs:((r=m.EURIBOR1Y)==null?void 0:r.observations)??[],color:"#e67e22"}],this._current.filter(v=>v.value!==null).length===0?(this._hasData||this.showError("No yield data available",()=>void this.fetchData()),!1):(this._hasData=!0,this._render(),!0)}catch(c){return this._hasData||this.showError(c instanceof Error?c.message:"Failed to load yield curve",()=>void this.fetchData()),!1}}_render(){var f,v;const e=`<div style="display:flex;gap:4px;margin-bottom:6px">
      <button class="panel-tab${this._tab==="curve"?" active":""}" data-tab="curve" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">US Curve</button>
      <button class="panel-tab${this._tab==="rates"?" active":""}" data-tab="rates" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">ECB Rates</button>
    </div>`;if(this._tab==="rates"){this.setSafeContent(S(`<div style="padding:10px 14px 6px">${e}${hi(this._rateRows)}</div>`,"legacy Panel.setContent() migration"));return}const t=((f=this._current.find(x=>x.tenor==="2Y"))==null?void 0:f.value)??null,s=((v=this._current.find(x=>x.tenor==="10Y"))==null?void 0:v.value)??null,n=t!==null&&s!==null&&t>s,r=t!==null&&s!==null?((s-t)*100).toFixed(0):null,c=r!==null&&Number(r)>=0?"+":"",l=n?'<span style="background:#e74c3c;color:#fff;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 6px;border-radius:4px;letter-spacing:0.08em">INVERTED</span>':'<span style="background:#2ecc71;color:#000;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 6px;border-radius:4px;letter-spacing:0.08em">NORMAL</span>',p=r!==null?`<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-left:10px">2Y-10Y Spread: <span style="color:${n?"#e74c3c":"#2ecc71"}">${o(c+r)}bps</span></span>`:"",m=this._ecbRates?'<span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="5,3"/></svg> EU (ECB AAA)</span>':"";this.setSafeContent(S(`
      <div style="padding:10px 14px 6px">
        ${e}
        <div style="display:flex;align-items:center;margin-bottom:10px;gap:4px">
          ${l}${p}
        </div>
        <div style="margin:0 -4px">${mi(this._current,this._prior,this._ecbRates)}</div>
        ${ui(this._current)}
        <div style="margin-top:8px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);display:flex;gap:12px;align-items:center;flex-wrap:wrap">
          <span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="#3498db" stroke-width="2"/></svg> US (Current)</span>
          <span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="4,3"/></svg> US (Prior)</span>
          ${m}
          <span style="margin-left:auto">Source: FRED / ECB</span>
        </div>
      </div>`,"legacy Panel.setContent() migration"))}}const Yn=Object.freeze(Object.defineProperty({__proto__:null,YieldCurvePanel:vi},Symbol.toStringTag,{value:"Module"}));let we=null;async function gi(){if(!we){const{MarketServiceClient:a}=await C(async()=>{const{MarketServiceClient:e}=await import("./rpc-client-market-v1-DNxvm993.js");return{MarketServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./index-CE8VpG3t.js").then(t=>t.a8);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));we=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return we}function yt(a){return a==null?"":`${a>=0?"+":""}${a.toFixed(2)}`}function xt(a){return a==null||a<=0?"":a>=1e12?`$${(a/1e12).toFixed(1)}T`:a>=1e9?`$${(a/1e9).toFixed(1)}B`:a>=1e6?`$${Math.round(a/1e6)}M`:`$${a}`}function yi(a,i){if(a==null||i==null||i===0)return"";const e=(a-i)/Math.abs(i)*100;return`${e>=0?"+":""}${e.toFixed(1)}%`}function xi(a){const i=new Date;i.setHours(0,0,0,0);const e=new Date(`${a}T00:00:00`);if(Number.isNaN(e.getTime()))return a;const t=Math.round((e.getTime()-i.getTime())/864e5),s=e.toLocaleDateString(At(),{weekday:"short",month:"short",day:"numeric"});return t===0?d("components.earningsCalendar.today",{date:s}):t===1?d("components.earningsCalendar.tomorrow",{date:s}):s.toUpperCase().replace(","," ·")}function bi(a){const i=a.hour==="bmo"?"BMO":a.hour==="amc"?"AMC":a.hour?a.hour.toUpperCase():"",e=a.hour==="bmo"?"background:rgba(46,204,113,0.15);color:#2ecc71":a.hour==="amc"?"background:rgba(52,152,219,0.15);color:#3498db":"background:rgba(255,255,255,0.08);color:var(--text-dim)",t=xt(a.revenueEstimate),s=xt(a.revenueActual),n=yt(a.epsEstimate),r=yt(a.epsActual);let c="";if(a.hasActuals&&r){const p=a.surpriseDirection==="beat"?"background:rgba(46,204,113,0.2);color:#2ecc71":a.surpriseDirection==="miss"?"background:rgba(231,76,60,0.2);color:#e74c3c":"background:rgba(255,255,255,0.08);color:var(--text-dim)",m=a.surpriseDirection==="beat"?d("components.earningsCalendar.surprise.beat"):a.surpriseDirection==="miss"?d("components.earningsCalendar.surprise.miss"):d("components.earningsCalendar.surprise.inLine"),f=yi(a.epsActual,a.epsEstimate);c=`
      <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text)">${o(d("components.earningsCalendar.epsActual",{value:r}))}</span>
      <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:1px 4px;border-radius:3px;${p}">${o(m)}${f?` ${o(f)}`:""}</span>`}else n&&(c=`<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(d("components.earningsCalendar.epsEstimate",{value:n}))}</span>`);let l="";return a.hasActuals&&s?l=`<span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(d("components.earningsCalendar.revenueActual",{value:s}))}</span>`:t&&(l=`<span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:rgba(255,255,255,0.25)">${o(d("components.earningsCalendar.revenueEstimate",{value:t}))}</span>`),`
    <div style="display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;padding-top:1px">
        ${i?`<span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 5px;border-radius:3px;${e};letter-spacing:0.04em">${o(i)}</span>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o(a.company)}</div>
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);letter-spacing:0.04em">${o(a.symbol)}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0">
        ${c?`<div style="display:flex;align-items:center;gap:5px">${c}</div>`:""}
        ${l?`<div>${l}</div>`:""}
      </div>
    </div>`}function $i(a,i,e){return`
    <div style="${e?"":"border-top:1px solid rgba(255,255,255,0.06);"}padding-top:${e?"0":"10"}px;padding-bottom:2px">
      <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.06em;padding:0 0 5px">${o(xi(a))}</div>
      ${i.map(bi).join("")}
    </div>`}class wi extends _{constructor(){super({id:"earnings-calendar",title:d("components.earningsCalendar.title"),showCount:!1,infoTooltip:d("components.earningsCalendar.infoTooltip")});g(this,"_hasData",!1)}async fetchData(){return this.showLoading(),this.refreshFromRpc()}async refreshFromRpc(){var e;try{const t=await gi(),s=new Date,n=new Date;n.setDate(n.getDate()+14);const r=V(s),c=V(n),l=await t.listEarningsCalendar({fromDate:r,toDate:c});return l.unavailable||!((e=l.earnings)!=null&&e.length)?(this._hasData||this.showError(d("components.earningsCalendar.errors.noData"),()=>void this.fetchData()),!1):(this.render(l.earnings),!0)}catch(t){return this._hasData||this.showError(t instanceof Error?t.message:d("components.earningsCalendar.errors.failedToLoad"),()=>void this.fetchData()),!1}}render(e){this._hasData=!0;const t=new Map;for(const r of e){const c=r.date||"Unknown",l=t.get(c);l?l.push(r):t.set(c,[r])}const n=`
      <div style="padding:0 14px 12px;max-height:480px;overflow-y:auto">
        ${[...t.keys()].sort().map((r,c)=>$i(r,t.get(r),c===0)).join("")}
      </div>`;this.setSafeContent(S(n,"legacy Panel.setContent() migration"))}}const Wn=Object.freeze(Object.defineProperty({__proto__:null,EarningsCalendarPanel:wi},Symbol.toStringTag,{value:"Module"}));let Se=null;async function Si(){if(!Se){const{IntelligenceServiceClient:a}=await C(async()=>{const{IntelligenceServiceClient:e}=await import("./rpc-client-intelligence-v1-CV6aIXpk.js");return{IntelligenceServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./index-CE8VpG3t.js").then(t=>t.a8);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));Se=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return Se}const _i=30;function Wt(a){if(typeof a!="string"||a.length===0)return null;try{const i=new URL(a);return i.protocol!=="https:"||i.hostname!=="www.sec.gov"&&i.hostname!=="sec.gov"?null:a}catch{return null}}function Xt(a){return a.filter(i=>!!(i.company||i.cik)).map(i=>({company:i.company||`CIK ${i.cik}`,form:i.form||"8-K",filedAtMs:Number.isFinite(i.filedAtMs)?i.filedAtMs:0,items:Array.isArray(i.items)?i.items:[],url:i.url})).sort((i,e)=>e.filedAtMs-i.filedAtMs)}function Kt(a,i,e){if(!Number.isFinite(a)||a<=0)return"";const t=new Date(a),s=new Date(i);return t.getFullYear()===s.getFullYear()&&t.getMonth()===s.getMonth()&&t.getDate()===s.getDate()?t.toLocaleTimeString(e,{hour:"2-digit",minute:"2-digit"}):t.toLocaleDateString(e,{month:"short",day:"numeric"})}function Qt(a,i,e){const t=a.items[0],s=a.items.length>1?` +${a.items.length-1}`:"",n=Wt(a.url),r=o(a.company),c=n?`<a href="${o(n)}" target="_blank" rel="noopener noreferrer" style="color:var(--text);text-decoration:none">${r}</a>`:r,l=Kt(a.filedAtMs,i,e);return`
    <div style="display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;padding-top:1px">
        <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 5px;border-radius:3px;background:rgba(52,152,219,0.15);color:#3498db;letter-spacing:0.04em">${o(a.form)}</span>
        ${t?`<span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:1px 4px;border-radius:3px;background:rgba(255,255,255,0.08);color:var(--text-dim)">${o(t.code)}${o(s)}</span>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c}</div>
        ${t?`<div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(t.description)}</div>`:""}
      </div>
      ${l?`<div style="flex-shrink:0;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding-top:1px">${o(l)}</div>`:""}
    </div>`}class Ei extends _{constructor(){super({id:"material-events",title:"SEC Material Events",showCount:!1,infoTooltip:"Recent SEC 8-K material-event filings across all filers — item codes flag what happened (e.g. 5.02 executive departures, 2.02 results, 1.01 material agreements). Links open the filing index on sec.gov."});g(this,"_hasData",!1);g(this,"_inFlight",null)}fetchData(){return this._inFlight??(this._inFlight=this.load().finally(()=>{this._inFlight=null})),this._inFlight}async load(){this._hasData||this.showLoading();try{const t=await(await Si()).listMaterialEvents({itemCode:"",limit:_i}),s=Xt(t.events??[]);return t.unavailable||s.length===0?(this._hasData||this.showError("SEC material events are temporarily unavailable",()=>void this.fetchData()),!1):(this.render(s),!0)}catch(e){return this._hasData||this.showError(e instanceof Error?e.message:"Failed to load SEC material events",()=>void this.fetchData()),!1}}render(e){this._hasData=!0;const t=Date.now(),s=At(),n=`
      <div style="padding:0 14px 12px;max-height:480px;overflow-y:auto">
        ${e.map(r=>Qt(r,t,s)).join("")}
      </div>`;this.setSafeContent(S(n,"material-events controlled panel markup — every dynamic field passes escapeHtml"))}}const Xn=Object.freeze(Object.defineProperty({__proto__:null,MaterialEventsPanel:Ei,filedAtLabel:Kt,projectMaterialEvents:Xt,renderMaterialEvent:Qt,secArchiveUrl:Wt},Symbol.toStringTag,{value:"Module"}));let _e=null;async function ki(){if(!_e){const{EconomicServiceClient:a}=await C(async()=>{const{EconomicServiceClient:e}=await import("./rpc-client-economic-v1-BVRWogRr.js");return{EconomicServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./index-CE8VpG3t.js").then(t=>t.a8);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));_e=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return _e}const Ci={US:"🇺🇸",GB:"🇬🇧",UK:"🇬🇧",EU:"🇪🇺",EUR:"🇪🇺",EA:"🇪🇺",DE:"🇩🇪",FR:"🇫🇷",JP:"🇯🇵",CN:"🇨🇳",CA:"🇨🇦",AU:"🇦🇺"},Pi=new Set(["EU","EA","EUR","DE","FR","IT","ES","NL","BE","AT","PT","FI","IE","GR"]),bt={high:"#e74c3c",medium:"#f39c12",low:"rgba(255,255,255,0.3)"};function Ai(a){const i=new Map;for(const e of a){const t=e.date||"Unknown";i.has(t)||i.set(t,[]),i.get(t).push(e)}return i}function Ri(a){if(!a||a==="Unknown")return"Unknown";const i=new Date(`${a}T00:00:00`);return Number.isNaN(i.getTime())?a:i.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function Di(a,i){return a?i?`${a} ${i}`:a:"—"}function Ti(a){const i=new Date;i.setHours(0,0,0,0);const e=new Date(`${a}T00:00:00`);if(Number.isNaN(e.getTime()))return"";const t=Math.round((e.getTime()-i.getTime())/864e5);return t===0?"today":t===1?"tomorrow":t<0?Math.abs(t)<14?`${Math.abs(t)}d ago`:`${Math.round(Math.abs(t)/7)}w ago`:t<14?`in ${t}d`:`in ${Math.round(t/7)}w`}class Fi extends _{constructor(){super({id:"economic-calendar",title:"Economic Calendar",showCount:!1,infoTooltip:d("components.economicCalendar.infoTooltip")});g(this,"_hasData",!1);g(this,"_events",[]);g(this,"_region","all");this.content.addEventListener("click",e=>{const t=e.target.closest("button[data-region]");if(!t)return;const s=t.dataset.region;s&&s!==this._region&&(this._region=s,this._render())})}async fetchData(){this.showLoading("Loading economic calendar...");try{const e=await ki(),t=new Date,s=V(t),n=V(fa(t,30)),r=await e.getEconomicCalendar({fromDate:s,toDate:n});return r.unavailable||!r.events||r.events.length===0?(this._hasData||this.showError("Economic calendar data unavailable.",()=>void this.fetchData()),!1):(this._events=r.events,this._hasData=!0,this._render(),!0)}catch(e){return this.isAbortError(e)||this._hasData||this.showError("Failed to load economic calendar.",()=>void this.fetchData()),!1}}_filterEvents(){return this._region==="us"?this._events.filter(e=>e.country==="US"):this._region==="eu"?this._events.filter(e=>Pi.has(e.country)):this._events}_renderRegionTabs(){return'<div style="display:flex;gap:4px;padding:0 14px 10px">'+[{key:"all",label:"All"},{key:"us",label:"US"},{key:"eu",label:"EU"}].map(({key:t,label:s})=>{const n=this._region===t;return`<button data-region="${t}" style="
          padding:3px 10px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;letter-spacing:0.04em;
          border-radius:3px;border:none;cursor:pointer;
          background:${n?"rgba(255,255,255,0.15)":"transparent"};
          color:${n?"var(--text)":"rgba(255,255,255,0.35)"};
        ">${o(s)}</button>`}).join("")+"</div>"}_render(){if(!this._hasData){this.showError("No upcoming economic events.",()=>void this.fetchData());return}const e=this._filterEvents(),t=Ai(e);let s="",n=!0;for(const[p,m]of t){const f=n?"":"border-top:1px solid rgba(255,255,255,0.06);";n=!1,s+=`<tr>
        <td colspan="3" style="
          padding:10px 0 3px;
          font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;
          color:rgba(255,255,255,0.35);
          text-transform:uppercase;letter-spacing:0.06em;
          ${f}
        ">${o(Ri(p))}</td>
      </tr>`;for(const v of m){const x=(v.impact||"low").toLowerCase(),h=bt[x]??bt.low,u=Ci[v.country]??o(v.country),y=x==="high";let b,w;v.actual?(b=o(Di(v.actual,v.unit)),w="color:var(--text);font-weight:600"):(b=o(Ti(v.date)),w="color:rgba(255,255,255,0.35);font-style:italic"),s+=`<tr style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.2">
          <td style="padding:4px 8px 4px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:0">
            <span style="margin-right:5px">${u}</span><span style="font-weight:${y?600:400}">${o(v.event)}</span>
          </td>
          <td style="padding:4px 6px;text-align:center;vertical-align:middle">
            <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${h};vertical-align:middle"></span>
          </td>
          <td style="padding:4px 0;text-align:right;font-variant-numeric:tabular-nums;${w};white-space:nowrap">${b}</td>
        </tr>`}}const r=this._region==="all"?"No upcoming economic events":"No events for selected region",c=e.length===0?`<tr><td colspan="3" style="padding:20px 0;text-align:center;color:rgba(255,255,255,0.3);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${o(r)}</td></tr>`:"",l=`${this._renderRegionTabs()}<div style="padding:0 14px 12px;max-height:440px;overflow-y:auto">
      <table style="width:100%;border-collapse:collapse;table-layout:fixed">
        <colgroup>
          <col style="width:auto">
          <col style="width:20px">
          <col style="width:64px">
        </colgroup>
        <thead>
          <tr style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:600;color:rgba(255,255,255,0.25);text-transform:uppercase;letter-spacing:0.06em">
            <th scope="col" style="text-align:left;padding:0 8px 8px 0;font-weight:600">EVENT</th>
            <th scope="col" style="padding:0 0 8px;font-weight:600"></th>
            <th scope="col" style="text-align:right;padding:0 0 8px;font-weight:600"></th>
          </tr>
        </thead>
        <tbody>${c}${s}</tbody>
      </table>
    </div>`;this.setSafeContent(S(l,"legacy Panel.setContent() migration"))}}const Kn=Object.freeze(Object.defineProperty({__proto__:null,EconomicCalendarPanel:Fi},Symbol.toStringTag,{value:"Module"}));let Ee=null;async function Mi(){if(!Ee){const{MarketServiceClient:a}=await C(async()=>{const{MarketServiceClient:e}=await import("./rpc-client-market-v1-DNxvm993.js");return{MarketServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./index-CE8VpG3t.js").then(t=>t.a8);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));Ee=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return Ee}function te(a){return typeof a=="number"?a:parseInt(String(a),10)||0}function ke(a,i){const e=Math.max(-100,Math.min(100,a)),t=Math.abs(e)/100*50,s=e>=0?"#2ecc71":"#e74c3c",n=e>=0?50:50-t,r=e>=0?"+":"";return`
    <div style="margin:3px 0">
      <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:2px">
        <span>${o(i)}</span>
        <span style="color:${s};font-weight:600">${r}${e.toFixed(1)}%</span>
      </div>
      <div style="position:relative;height:8px;background:rgba(255,255,255,0.06);border-radius:2px">
        <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.15)"></div>
        <div style="position:absolute;top:0;bottom:0;left:${n.toFixed(2)}%;width:${t.toFixed(2)}%;background:${s};border-radius:1px"></div>
      </div>
    </div>`}function Ni(a){const i=te(a.leveragedFundsLong),e=te(a.leveragedFundsShort),t=te(a.smallTraderLong),s=te(a.smallTraderShort),n=a.netPct,r=(i-e)/Math.max(i+e,1)*100,c=(t-s)/Math.max(t+s,1)*100;return`
    <div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600">${o(a.name)}</span>
        <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(a.code)}</span>
      </div>
      ${ke(n,"Asset Managers")}
      ${ke(r,"Leveraged Funds")}
      ${a.smallTraderAvailable?ke(c,"Small Traders (non-reportable)"):""}
    </div>`}class Ii extends _{constructor(){super({id:"cot-positioning",title:"CFTC COT Positioning",showCount:!1,infoTooltip:d("components.cotPositioning.infoTooltip")});g(this,"_hasData",!1)}async fetchData(){this.showLoading();try{const t=await(await Mi()).getCotPositioning({});return t.unavailable||!t.instruments||t.instruments.length===0?(this._hasData||this.showError("COT data unavailable",()=>void this.fetchData()),!1):(this._hasData=!0,this.render(t.instruments,t.reportDate??""),!0)}catch(e){return this._hasData||this.showError(e instanceof Error?e.message:"Failed to load",()=>void this.fetchData()),!1}}render(e,t){const s=e.map(Ni).join(""),r=e.some(p=>p.smallTraderAvailable)?"Small traders use the CFTC non-reportable residual category. This seed stores the latest weekly snapshot, not historical releases, so a retail trend line is not shown.":"Small-trader positioning is unavailable until the next CFTC seed refresh. No retail trend line is shown.",c=t?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:8px;text-align:right">Report date: ${o(t)}</div>`:"",l=`
      <div style="padding:10px 14px">
        ${s}
        <div style="margin-top:8px;padding:7px 8px;border:1px solid rgba(255,255,255,0.08);border-radius:4px;color:var(--text-dim);font-size:calc(9px * var(--wm-panel-effective-scale, 1));line-height:1.4">${o(r)}</div>
        ${c}
      </div>`;this.setSafeContent(S(l,"legacy Panel.setContent() migration"))}}const Qn=Object.freeze(Object.defineProperty({__proto__:null,CotPositioningPanel:Ii},Symbol.toStringTag,{value:"Module"}));let Ce=null;async function Li(){if(!Ce){const{MarketServiceClient:a}=await C(async()=>{const{MarketServiceClient:e}=await import("./rpc-client-market-v1-DNxvm993.js");return{MarketServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./index-CE8VpG3t.js").then(t=>t.a8);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));Ce=new a(i(),{fetch:Nt})}return Ce}const $t=["AAPL","MSFT","NVDA","AMZN","GOOGL","META","TSLA"],Pe=["CL","GC","SI","ES","NQ"],zi={ES:"S&P 500 futures",NQ:"Nasdaq futures"};function G(a){if(typeof a=="number")return a;const i=parseInt(String(a),10);return Number.isFinite(i)?i:0}function wt(a){return a===null?'<span class="commodity-change">—</span>':`<span class="commodity-change ${T(a)}">${I(a)}</span>`}function Ae(a,i){const e=a+i;return e<=0?null:(a-i)/e*100}function St(a){return a===null?"—":`${a>=0?"+":""}${a.toFixed(1)}%`}class Oi extends _{constructor(){super({id:"liquidity-shifts",title:d("components.liquidityShifts.title"),showCount:!1,infoTooltip:d("components.liquidityShifts.infoTooltip")});g(this,"_hasData",!1)}async fetchData(){var e;this.showLoading();try{const t=await Li(),[s,n]=await Promise.all([t.getCotPositioning({}),t.listMarketQuotes({symbols:$t})]),r=(s.instruments??[]).filter(h=>Pe.includes(h.code??"")).sort((h,u)=>Pe.indexOf(h.code??"")-Pe.indexOf(u.code??""));if(r.length===0&&(((e=n.quotes)==null?void 0:e.length)??0)===0)return this._hasData||this.showError(d("components.liquidityShifts.unavailable"),()=>void this.fetchData()),!1;this._hasData=!0;const c=r.map(h=>{const u=G(h.assetManagerLong??0),y=G(h.assetManagerShort??0),b=Ae(u,y),w=G(h.leveragedFundsLong??0),$=G(h.leveragedFundsShort??0),k=G(h.smallTraderLong??0),P=G(h.smallTraderShort??0),A=w>0||$>0,K=A?Ae(w,$):null,O=h.code??"",ea=zi[O]??h.name??O,ta=A?`<div class="market-symbol">${d("components.liquidityShifts.lev")} ${o(St(K))}</div>`:"",We=h.smallTraderAvailable===!0,aa=We?Ae(k,P):null,sa=We?`<div class="market-symbol">Small traders ${o(St(aa))}</div>`:"";return`<div class="liquidity-row">
          <div class="liquidity-row__info">
            <div class="market-name">${o(ea)}</div>
            <div class="market-symbol">${o(O)} • ${d("components.liquidityShifts.longShort",{long:String(u),short:String(y)})}</div>
          </div>
          <div class="liquidity-row__values">
            <div>${wt(b)}</div>
            ${ta}
            ${sa}
          </div>
        </div>`}).join(""),l=new Map($t.map((h,u)=>[h,u])),m=[...n.quotes??[]].sort((h,u)=>{const y=l.get(h.symbol??"")??Number.MAX_SAFE_INTEGER,b=l.get(u.symbol??"")??Number.MAX_SAFE_INTEGER;return y-b}).map(h=>{const u=Number(h.change??0);return`<div class="market-item liquidity-stock-row">
            <div class="market-info">
              <span class="market-name">${o(h.name||h.symbol||"")}</span>
              <span class="market-symbol">${o(h.symbol||"")}</span>
            </div>
            <div>${wt(u)}</div>
          </div>`}).join(""),f=`<div class="market-symbol">${d("components.liquidityShifts.noCot")}</div>`,v=`<div class="market-symbol">${d("components.liquidityShifts.noStocks")}</div>`,x=s.reportDate?`<div class="market-symbol liquidity-report-date">${o(d("components.liquidityShifts.reportDate",{date:s.reportDate}))}</div>`:"";return this.setSafeContent(S(`
        <div class="liquidity-shifts-panel">
          <div class="liquidity-shifts-panel__section-title">${d("components.liquidityShifts.cotSection")}</div>
          ${c||f}
          <div class="liquidity-shifts-panel__section-title liquidity-shifts-panel__section-title--gap">${d("components.liquidityShifts.stocksSection")}</div>
          ${m||v}
          ${x}
        </div>
      `,"legacy Panel.setContent() migration")),!0}catch(t){return this._hasData||this.showError(t instanceof Error?t.message:d("components.liquidityShifts.failed"),()=>void this.fetchData()),!1}}}const Zn=Object.freeze(Object.defineProperty({__proto__:null,LiquidityShiftsPanel:Oi},Symbol.toStringTag,{value:"Module"}));let Re=null;async function Bi(){if(!Re){const{MarketServiceClient:a}=await C(async()=>{const{MarketServiceClient:e}=await import("./rpc-client-market-v1-DNxvm993.js");return{MarketServiceClient:e}},[]),{getRpcBaseUrl:i}=await C(async()=>{const{getRpcBaseUrl:e}=await import("./index-CE8VpG3t.js").then(t=>t.a8);return{getRpcBaseUrl:e}},__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));Re=new a(i(),{fetch:(...e)=>globalThis.fetch(...e)})}return Re}const Ui=40;function ji(a){if(!Array.isArray(a)||a.length<13)return null;const i=a[a.length-1],e=a[a.length-13];return!(e>0)||!Number.isFinite(i)?null:(i-e)/e}function Gi(a){if(a==null)return null;const i=typeof a=="number"?a:parseFloat(String(a));return Number.isFinite(i)?i:null}function Hi(a,i){const e=Array.isArray(a.sparkOi)?a.sparkOi.filter(t=>Number.isFinite(t)):[];return{symbol:String(a.symbol??""),display:String(a.display??""),group:String(a.group??""),funding:i?typeof a.funding=="number"&&Number.isFinite(a.funding)?a.funding:null:Gi(a.funding),oiDelta1h:ji(e),composite:Number(a.composite||0),warmup:!!a.warmup,stale:!!a.stale}}function _t(a,i){const e=[],t=[],s=[];for(const n of a){const r=Hi(n,i),c=r.group;c==="fx"?s.push(r):c==="crypto"?t.push(r):e.push(r)}return{warmup:!1,commodityAssets:e,cryptoAssets:t,fxAssets:s,unavailable:!1}}function Vi(a,i){return a<15?"var(--text-dim)":i!=null&&i<0?a>=60?"#e74c3c":a>=40?"#e67e22":"#c0392b88":a>=60?"#2ecc71":a>=40?"#27ae60":"#2ecc7188"}function qi(a,i,e=56){const t=(e-6)/2,s=e/2,n=e/2+2,r=Math.PI*.8,c=Math.PI*2.2,l=c-r,p=r+a/100*l,m=s+t*Math.cos(r),f=n+t*Math.sin(r),v=s+t*Math.cos(c),x=n+t*Math.sin(c),h=s+t*Math.cos(p),u=n+t*Math.sin(p),y=p-r>Math.PI?1:0,b=a<15?.4:a<40?.6:.9;return`<svg width="${e}" height="${e}" viewBox="0 0 ${e} ${e}" class="pos-gauge">
    <path d="M ${m} ${f} A ${t} ${t} 0 1 1 ${v} ${x}" fill="none" stroke="var(--border-color, #333)" stroke-width="3" stroke-linecap="round"/>
    ${a>0?`<path d="M ${m} ${f} A ${t} ${t} 0 ${y} 1 ${h} ${u}" fill="none" stroke="${i}" stroke-width="3.5" stroke-linecap="round" opacity="${b}"/>`:""}
    <text x="${s}" y="${n+2}" text-anchor="middle" dominant-baseline="middle" fill="${i}" style="font-size:calc(13px * var(--wm-panel-effective-scale, 1))" font-weight="600" opacity="${b}">${Math.round(a)}</text>
  </svg>`}function Yi(a,i){const e=Math.round(a.composite),t=Vi(e,a.funding),s=e>=Ui,n=a.funding!=null?`${(a.funding*100).toFixed(3)}%`:"--",r=a.funding!=null&&a.funding<0?"change-negative":"change-positive",c=a.oiDelta1h!=null?`${a.oiDelta1h>=0?"+":""}${(a.oiDelta1h*100).toFixed(1)}%`:"--",l=a.oiDelta1h!=null&&a.oiDelta1h<0?"change-negative":"change-positive",p=a.stale?' <span class="pos-badge pos-badge--stale">stale</span>':"",m=a.warmup?' <span class="pos-badge pos-badge--warmup">warm</span>':"",f=s?" pos-card--elevated":"",v=s?` style="--pos-glow-color: ${t}"`:"",x=i?` data-pos-navigate="${o(i)}"`:"",h=i?" pos-card--clickable":"",u=`${a.symbol} score ${e}/100`+(a.funding!=null?` | funding ${n}`:"")+(a.oiDelta1h!=null?` | OI delta ${c}`:"")+(a.warmup?" | warming up":"")+(a.stale?" | upstream stale":"");return`<div class="pos-card${f}${h}"${v}${x} title="${o(u)}">
    <div class="pos-card__name">${o(a.display)}${p}${m}</div>
    ${qi(e,t)}
    <div class="pos-card__metrics">
      <span class="${r}" title="hourly funding">${o(n)}</span>
      <span class="${l}" title="OI delta 1h">${o(c)}</span>
    </div>
  </div>`}const Wi={BTC:"crypto",ETH:"crypto",SOL:"crypto",PAXG:"commodities","xyz:CL":"commodities","xyz:BRENTOIL":"commodities","xyz:GOLD":"commodities","xyz:SILVER":"commodities","xyz:PLATINUM":"commodities","xyz:PALLADIUM":"commodities","xyz:COPPER":"commodities","xyz:NATGAS":"commodities"};function Xi(a){const i=Wi[a];return i&&document.querySelector(`[data-panel="${i}"]`)?i:null}function De(a,i){if(i.length===0)return"";const t=[...i].sort((s,n)=>n.composite-s.composite).map(s=>Yi(s,Xi(s.symbol))).join("");return`<div class="pos-section">
    <div class="pos-section__header">${o(a)}</div>
    <div class="pos-grid">${t}</div>
  </div>`}class Ki extends _{constructor(){super({id:"positioning-247",title:d("components.positioning247.title"),showCount:!1,infoTooltip:d("components.positioning247.infoTooltip")});g(this,"_flow",null);g(this,"_loading",!1);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-pos-navigate]");if(t!=null&&t.dataset.posNavigate){const s=document.querySelector(`[data-panel="${t.dataset.posNavigate}"]`);s&&(s.scrollIntoView({behavior:"smooth",block:"center"}),s.classList.add("panel-highlight"),setTimeout(()=>s.classList.remove("panel-highlight"),1500))}})}async fetchData(){if(this._loading)return!1;this._loading=!0;try{if(!this._flow){const s=z("hyperliquidFlow");s&&!s.unavailable&&Array.isArray(s.assets)&&s.assets.length>0&&(this._flow={..._t(s.assets,!0),warmup:!!s.warmup},this._render())}const t=await(await Bi()).getHyperliquidFlow({});return t.unavailable||!t.assets||t.assets.length===0?this._flow||(this._flow={warmup:!0,commodityAssets:[],cryptoAssets:[],fxAssets:[],unavailable:!0}):this._flow={..._t(t.assets,!1),warmup:!!t.warmup},this._render(),!0}catch(e){return console.error("[PositioningPanel] RPC failed:",e instanceof Error?e.message:e),this._flow||(this._flow={warmup:!0,commodityAssets:[],cryptoAssets:[],fxAssets:[],unavailable:!0}),this._render(),!1}finally{this._loading=!1}}_render(){if(!this._flow){this.showLoading();return}if(this._flow.unavailable){this.setSafeContent(S(`<div class="pos-panel"><div class="pos-warmup">${o(d("components.positioning247.warmup"))}</div></div>`,"legacy Panel.setContent() migration"));return}const e=[];this._flow.warmup&&e.push(`<div class="pos-warmup">${o(d("components.positioning247.warmup"))}</div>`),e.push(De(d("components.positioning247.commodities"),this._flow.commodityAssets)),e.push(De(d("components.positioning247.crypto"),this._flow.cryptoAssets)),e.push(De(d("components.positioning247.fx"),this._flow.fxAssets)),e.push(`<div class="pos-footer">${o(d("components.positioning247.footer"))}</div>`),this.setSafeContent(S(`<div class="pos-panel">${e.join("")}</div>`,"legacy Panel.setContent() migration"))}}const Jn=Object.freeze(Object.defineProperty({__proto__:null,PositioningPanel:Ki},Symbol.toStringTag,{value:"Module"}));function D(a,i=2){return!Number.isFinite(a)||a<=0?"--":a>=1e4?Math.round(a).toLocaleString():a.toLocaleString(void 0,{minimumFractionDigits:i,maximumFractionDigits:i})}function Te(a){const i=typeof a=="string"?parseInt(a,10):a;return Number.isFinite(i)?Math.round(i).toLocaleString():"--"}function ce(a,i=2){return Number.isFinite(a)?`${a>=0?"+":""}${a.toFixed(i)}%`:"--"}function Qi(a){const i=typeof a=="string"?parseInt(a,10):a;return Number.isFinite(i)?`${i>=0?"+":""}${Math.round(i).toLocaleString()}`:"--"}function Zi(a){if(!a)return{text:"Updated —",dot:"var(--text-dim)"};const i=Date.now()-new Date(a).getTime();if(!Number.isFinite(i)||i<0)return{text:"Updated now",dot:"#2ecc71"};const e=Math.floor(i/6e4),t=e<10?"#2ecc71":e<30?"#f5a623":"#e74c3c";return e<1?{text:"Updated just now",dot:t}:e<60?{text:`Updated ${e}m ago`,dot:t}:{text:`Updated ${Math.floor(e/60)}h ago`,dot:t}}function Ji(a,i,e,t){const s=Math.max(0,Math.min(100,t));return`
    <div style="position:relative;height:8px;background:linear-gradient(90deg,rgba(231,76,60,0.25),rgba(245,166,35,0.25),rgba(46,204,113,0.25));border-radius:4px;margin:6px 0">
      <div style="position:absolute;top:-3px;bottom:-3px;left:${s.toFixed(1)}%;width:3px;background:#fff;border-radius:1px;box-shadow:0 0 4px rgba(255,255,255,0.8);transform:translateX(-50%)"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
      <span>Low $${o(D(a))}</span>
      <span style="color:var(--text);font-weight:600">$${o(D(e))} • ${s.toFixed(0)}% of range</span>
      <span>High $${o(D(i))}</span>
    </div>`}function Et(a,i,e){const t=Math.max(-100,Math.min(100,a)),s=Math.abs(t)/100*50,n=t>=0?"#2ecc71":"#e74c3c",r=t>=0?50:50-s,c=t>=0?"+":"",l=parseInt(e,10),p=Number.isFinite(l)&&l!==0?` <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:${l>=0?"#2ecc71":"#e74c3c"};font-weight:500">Δ ${Qi(e)}</span>`:"";return`
    <div style="margin:4px 0">
      <div style="display:flex;justify-content:space-between;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:2px">
        <span>${o(i)}${p}</span>
        <span style="color:${n};font-weight:600">${c}${t.toFixed(1)}%</span>
      </div>
      <div style="position:relative;height:8px;background:rgba(255,255,255,0.06);border-radius:2px">
        <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.15)"></div>
        <div style="position:absolute;top:0;bottom:0;left:${r.toFixed(2)}%;width:${s.toFixed(2)}%;background:${n};border-radius:1px"></div>
      </div>
    </div>`}function en(a){return a>80?{text:"Silver undervalued",color:"#f5a623"}:a<60?{text:"Gold undervalued",color:"#f5a623"}:{text:"Neutral",color:"var(--text-dim)"}}function ae(a,i){const e=i>=0?"#2ecc71":"#e74c3c";return`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
    <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(a)}</div>
    <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${e}">${o(ce(i,1))}</div>
  </div>`}class tn extends _{constructor(){super({id:"gold-intelligence",title:d("panels.goldIntelligence"),infoTooltip:d("components.goldIntelligence.infoTooltip")});g(this,"_hasData",!1)}async fetchData(){var e,t;this.showLoading();try{const s=Ct("/api/market/v1/get-gold-intelligence"),n=await fetch(s);if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();return r.unavailable?(this._hasData||this.showError("Gold data unavailable",()=>void this.fetchData()),!1):(e=this.element)!=null&&e.isConnected?(this._hasData=!0,this.render(r),!0):!1}catch(s){return this.isAbortError(s)||!((t=this.element)!=null&&t.isConnected)||this._hasData||this.showError(s instanceof Error?s.message:"Failed to load",()=>void this.fetchData()),!1}}renderHeader(e){const t=e.goldChangePct,s=t>=0?"#2ecc71":"#e74c3c",n=Y(e.goldSparkline,t,80,20),r=Zi(e.updatedAt),c=e.session&&e.session.dayHigh>0?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">
          Session H $${o(D(e.session.dayHigh))} • L $${o(D(e.session.dayLow))} • Prev $${o(D(e.session.prevClose))}
        </div>`:"";return`
      <div class="energy-tape-section">
        <div class="energy-section-title">Price &amp; Performance</div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
          <span style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));font-weight:700">$${o(D(e.goldPrice))}</span>
          <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${s};padding:1px 6px;border-radius:3px;background:${s}22">${ce(t)}</span>
          ${n}
        </div>
        <div style="display:flex;align-items:center;gap:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          <span style="width:6px;height:6px;border-radius:50%;background:${r.dot};display:inline-block"></span>
          <span>${o(r.text)} • GC=F front-month</span>
        </div>
        ${c}
      </div>`}renderReturns(e){if(!e.returns&&!e.range52w)return"";const t=e.returns?`<div style="display:flex;gap:4px;margin-top:6px">
          ${ae("1W",e.returns.w1)}
          ${ae("1M",e.returns.m1)}
          ${ae("YTD",e.returns.ytd)}
          ${ae("1Y",e.returns.y1)}
        </div>`:"",s=e.range52w&&e.range52w.hi>0?`<div style="margin-top:8px">
          <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">52-week range</div>
          ${Ji(e.range52w.lo,e.range52w.hi,e.goldPrice,e.range52w.positionPct)}
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Returns</div>
      ${t}
      ${s}
    </div>`}renderMetals(e){const t=e.goldSilverRatio!=null&&Number.isFinite(e.goldSilverRatio)?(()=>{const r=en(e.goldSilverRatio);return`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Gold/Silver Ratio</span>
          <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">${o(e.goldSilverRatio.toFixed(1))} <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:${r.color};font-weight:400">${o(r.text)}</span></span>
        </div>`})():"",s=e.goldPlatinumPremiumPct!=null&&Number.isFinite(e.goldPlatinumPremiumPct)?`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Gold vs Platinum</span>
          <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">${o(ce(e.goldPlatinumPremiumPct,1))} premium</span>
        </div>`:"",n=[{label:"Silver",price:e.silverPrice},{label:"Platinum",price:e.platinumPrice},{label:"Palladium",price:e.palladiumPrice}].map(r=>`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(r.label)}</div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">$${o(D(r.price))}</div>
      </div>`).join("");return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Metals Complex</div>
      ${t}
      ${s}
      <div style="display:flex;gap:6px;margin-top:8px">${n}</div>
    </div>`}renderFx(e){return e.crossCurrencyPrices.length?`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Gold in Major Currencies</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">${e.crossCurrencyPrices.map(s=>`<div style="text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(s.flag)} XAU/${o(s.currency)}</div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">${o(D(s.price,0))}</div>
      </div>`).join("")}</div>
    </div>`:""}renderPositioning(e){const t=e.cot;if(!t)return"";const s=t.managedMoney,n=t.producerSwap,r=s?Et(s.netPct,"Managed Money (speculators)",s.wowNetDelta):"",c=n?Et(n.netPct,"Producer/Swap (commercials)",n.wowNetDelta):"",l=(m,f)=>m?`<div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:2px 0">
          <span>${o(f)}</span>
          <span>L ${o(Te(m.longPositions))} / S ${o(Te(m.shortPositions))} • ${m.oiSharePct.toFixed(1)}% OI</span>
        </div>`:"",p=t.reportDate?`<div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px">
          <span>As of ${o(t.reportDate)}${t.nextReleaseDate?` • next release ${o(t.nextReleaseDate)}`:""}</span>
          <span>OI ${o(Te(t.openInterest))}</span>
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">CFTC Positioning</div>
      ${r}
      ${l(s,"MM breakdown")}
      ${c}
      ${l(n,"P/S breakdown")}
      ${p}
    </div>`}renderCbReserves(e){const t=e.cbReserves;if(!t||!t.topHolders.length)return"";const s=(m,f)=>`<div style="display:flex;justify-content:space-between;font-size:calc(10px * var(--wm-panel-effective-scale, 1));padding:1px 0">
      <span style="color:var(--text-dim)">${f}. ${o(m.name)}</span>
      <span style="font-weight:600">${m.tonnes>0?`${m.tonnes.toFixed(1)}t`:"—"}</span>
    </div>`,n=m=>{const f=m.deltaTonnes12m>=0?"#2ecc71":"#e74c3c",v=m.deltaTonnes12m>=0?"+":"";return`<div style="display:flex;justify-content:space-between;font-size:calc(10px * var(--wm-panel-effective-scale, 1));padding:1px 0">
        <span style="color:var(--text-dim)">${o(m.name)}</span>
        <span style="color:${f};font-weight:600">${v}${m.deltaTonnes12m.toFixed(1)}t</span>
      </div>`},r=t.topHolders.slice(0,10).map((m,f)=>s(m,f+1)).join(""),c=t.topBuyers12m.slice(0,5).map(n).join(""),l=t.topSellers12m.slice(0,5).map(n).join(""),p=c||l?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
          <div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Buyers 12M</div>
            ${c||'<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">—</div>'}
          </div>
          <div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Sellers 12M</div>
            ${l||'<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">—</div>'}
          </div>
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Central-Bank Reserves</div>
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:4px">Top holders (tonnes)</div>
      ${r}
      ${p}
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px;text-align:right">IMF IFS • as of ${o(t.asOfMonth)}</div>
    </div>`}renderEtfFlows(e){const t=e.etfFlows;if(!t||!Number.isFinite(t.tonnes)||t.tonnes<=0)return"";const s=(c,l,p)=>{const m=l>=0?"#2ecc71":"#e74c3c",f=l>=0?"+":"",v=p>=0?"+":"";return`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(c)}</div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${m}">${f}${l.toFixed(1)}t</div>
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:${m}">${v}${p.toFixed(2)}%</div>
      </div>`},n=t.aumUsd>=1e9?`$${(t.aumUsd/1e9).toFixed(1)}B`:t.aumUsd>0?`$${(t.aumUsd/1e6).toFixed(0)}M`:"--",r=t.sparkline90d.length>1?Y(t.sparkline90d,t.changeM1Pct,80,20):"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Physical Flows (GLD)</div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px">
        <div>
          <span style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:700">${o(t.tonnes.toFixed(1))} <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-weight:500">tonnes</span></span>
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-left:6px">AUM ${o(n)}${t.nav>0?` • NAV $${t.nav.toFixed(2)}`:""}</span>
        </div>
        ${r}
      </div>
      <div style="display:flex;gap:4px;margin-top:4px">
        ${s("1W",t.changeW1Tonnes,t.changeW1Pct)}
        ${s("1M",t.changeM1Tonnes,t.changeM1Pct)}
        ${s("1Y",t.changeY1Tonnes,t.changeY1Pct)}
      </div>
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:4px;text-align:right">SPDR GLD • as of ${o(t.asOfDate)}</div>
    </div>`}renderDrivers(e){var s;return(s=e.drivers)!=null&&s.length?`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Drivers</div>
      ${e.drivers.map(n=>{const r=n.changePct>=0?"#2ecc71":"#e74c3c",c=n.correlation30d<=-.3?"#2ecc71":n.correlation30d>=.3?"#e74c3c":"var(--text-dim)";return`<div style="display:flex;justify-content:space-between;align-items:center;padding:3px 0;font-size:calc(10px * var(--wm-panel-effective-scale, 1))">
        <span style="color:var(--text-dim)">${o(n.label)}</span>
        <span>
          <span style="font-weight:600">${o(n.value.toFixed(2))}</span>
          <span style="color:${r};margin-left:4px">${o(ce(n.changePct,2))}</span>
          <span style="color:${c};margin-left:8px;font-size:calc(9px * var(--wm-panel-effective-scale, 1))">corr 30d ${n.correlation30d>=0?"+":""}${n.correlation30d.toFixed(2)}</span>
        </span>
      </div>`}).join("")}
    </div>`:""}render(e){const t=[this.renderHeader(e),this.renderReturns(e),this.renderMetals(e),this.renderFx(e),this.renderPositioning(e),this.renderEtfFlows(e),this.renderCbReserves(e),this.renderDrivers(e)].join("");this.setSafeContent(S(`<div style="padding:10px 14px">${t}</div>`,"legacy Panel.setContent() migration"))}}const er=Object.freeze(Object.defineProperty({__proto__:null,GoldIntelligencePanel:tn},Symbol.toStringTag,{value:"Module"}));function se(a){return Math.abs(a)>=1e9?`${(a/1e9).toFixed(1)}B`:Math.abs(a)>=1e6?`${(a/1e6).toFixed(1)}M`:Math.abs(a)>=1e3?`${(a/1e3).toFixed(0)}K`:a.toLocaleString()}function kt(a){return a==="inflow"?"flow-inflow":a==="outflow"?"flow-outflow":"flow-neutral"}function Zt(a){return a.includes("INFLOW")?"inflow":a.includes("OUTFLOW")?"outflow":"neutral"}function Jt(a){const i=Zt(a);return i==="inflow"?d("components.etfFlows.netInflow"):i==="outflow"?d("components.etfFlows.netOutflow"):d("components.etfFlows.netNeutral")}function an(a){return a>.1?"change-positive":a<-.1?"change-negative":"change-neutral"}class sn extends _{constructor(){super({id:"etf-flows",title:d("panels.etfFlows"),showCount:!1,infoTooltip:d("components.etfFlows.infoTooltip")});g(this,"data",null);g(this,"loading",!0);g(this,"error",null)}async fetchData(){var t;const e=z("etfFlows");if((t=e==null?void 0:e.etfs)!=null&&t.length){this.data=e,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var e,t,s;try{const r=await new Mt(W(),{fetch:(...c)=>globalThis.fetch(...c)}).listEtfFlows({});if(!((e=this.element)!=null&&e.isConnected))return;((t=r.etfs)!=null&&t.length||!this.data)&&(this.data=r,this.error=null,this.loading=!1,this.renderPanel())}catch(n){if(this.isAbortError(n)||!((s=this.element)!=null&&s.isConnected))return;this.data||(console.warn("[ETFFlows] Fetch error:",n),this.error=d("components.etfFlows.unavailable"),this.loading=!1,this.renderPanel())}}renderPanel(){var c;if(this.loading){this.showLoading(d("common.loadingEtfData"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data;if(!((c=e.etfs)!=null&&c.length)){const l=e.rateLimited?d("components.etfFlows.rateLimited"):d("components.etfFlows.unavailable");this.setSafeContent(S(`<div class="panel-loading-text">${l}</div>`,"legacy Panel.setContent() migration"));return}const t=e.summary||{totalVolume:0,totalEstFlow:0,netDirection:"NEUTRAL",inflowCount:0,outflowCount:0},s=`flow-${Zt(t.netDirection)}`,n=e.etfs.map(l=>`
      <tr class="etf-row ${kt(l.direction)}">
        <td class="etf-ticker">${o(l.ticker)}</td>
        <td class="etf-issuer">${o(l.issuer)}</td>
        <td class="etf-flow ${kt(l.direction)}">${l.direction==="inflow"?"+":l.direction==="outflow"?"-":""}$${se(Math.abs(l.estFlow))}</td>
        <td class="etf-volume">${se(l.volume)}</td>
        <td class="etf-change ${an(l.priceChange)}">${l.priceChange>0?"+":""}${l.priceChange.toFixed(2)}%</td>
      </tr>
    `).join(""),r=`
      <div class="etf-flows-container">
        <div class="etf-summary ${s}">
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.netFlow")}</span>
            <span class="etf-summary-value ${s}">${Jt(t.netDirection)}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.estFlow")}</span>
            <span class="etf-summary-value">$${se(Math.abs(t.totalEstFlow))}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.totalVol")}</span>
            <span class="etf-summary-value">${se(t.totalVolume)}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.etfs")}</span>
            <span class="etf-summary-value">${t.inflowCount}↑ ${t.outflowCount}↓</span>
          </div>
        </div>
        <div class="etf-table-wrap">
          <table class="etf-table">
            <thead>
              <tr>
                <th scope="col">${d("components.etfFlows.table.ticker")}</th>
                <th scope="col">${d("components.etfFlows.table.issuer")}</th>
                <th scope="col">${d("components.etfFlows.table.estFlow")}</th>
                <th scope="col">${d("components.etfFlows.table.volume")}</th>
                <th scope="col">${d("components.etfFlows.table.change")}</th>
              </tr>
            </thead>
            <tbody>${n}</tbody>
          </table>
        </div>
      </div>
    `;this.setSafeContent(S(r,"legacy Panel.setContent() migration"))}}const tr=Object.freeze(Object.defineProperty({__proto__:null,ETFFlowsPanel:sn,etfNetFlowLabel:Jt},Symbol.toStringTag,{value:"Module"}));function ie(a){return a>=1e12?`$${(a/1e12).toFixed(1)}T`:a>=1e9?`$${(a/1e9).toFixed(1)}B`:a>=1e6?`$${(a/1e6).toFixed(0)}M`:`$${a.toLocaleString()}`}function nn(a){return a==="ON PEG"?"peg-on":a==="SLIGHT DEPEG"?"peg-slight":"peg-off"}function rn(a){return a==="HEALTHY"?"health-good":a==="CAUTION"?"health-caution":"health-warning"}class on extends _{constructor(){super({id:"stablecoins",title:d("panels.stablecoins"),showCount:!1,infoTooltip:d("components.stablecoins.infoTooltip")});g(this,"data",null);g(this,"loading",!0);g(this,"error",null)}async fetchData(){var t;const e=z("stablecoinMarkets");if((t=e==null?void 0:e.stablecoins)!=null&&t.length){this.data=e,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var e,t,s;try{const r=await new Mt(W(),{fetch:Nt}).listStablecoinMarkets({coins:[]});if(!((e=this.element)!=null&&e.isConnected))return;((t=r.stablecoins)!=null&&t.length||!this.data)&&(this.data=r,this.error=null,this.loading=!1,this.renderPanel())}catch(n){if(this.isAbortError(n)||!((s=this.element)!=null&&s.isConnected))return;this.data||(console.warn("[Stablecoin] Fetch error:",n),this.error=d("common.noDataShort"),this.loading=!1,this.renderPanel())}}renderPanel(){var r;if(this.loading){this.showLoading(d("common.loadingStablecoins"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data;if(!((r=e.stablecoins)!=null&&r.length)){this.setSafeContent(E`<div class="panel-empty">${d("common.noDataShort")}</div>`);return}const t=e.summary||{totalMarketCap:0,totalVolume24h:0,healthStatus:"UNAVAILABLE"},s=N(e.stablecoins.map(c=>E`
      <div class="stable-row">
        <div class="stable-info">
          <span class="stable-symbol">${c.symbol}</span>
          <span class="stable-name">${c.name}</span>
        </div>
        <div class="stable-price">$${c.price.toFixed(4)}</div>
        <div class="stable-peg ${nn(c.pegStatus)}">
          <span class="peg-badge">${c.pegStatus}</span>
          <span class="peg-dev">${c.deviation.toFixed(2)}%</span>
        </div>
      </div>
    `)),n=N(e.stablecoins.map(c=>E`
      <div class="stable-supply-row">
        <span class="stable-symbol">${c.symbol}</span>
        <span class="stable-mcap">${ie(c.marketCap)}</span>
        <span class="stable-vol">${ie(c.volume24h)}</span>
        <span class="stable-change ${c.change24h>=0?"change-positive":"change-negative"}">${c.change24h>=0?"+":""}${c.change24h.toFixed(2)}%</span>
      </div>
    `));this.setSafeContent(E`
      <div class="stablecoin-container">
        <div class="stable-health ${rn(t.healthStatus)}">
          <span class="health-label">${t.healthStatus}</span>
          <span class="health-detail">MCap: ${ie(t.totalMarketCap)} | Vol: ${ie(t.totalVolume24h)}</span>
        </div>
        <div class="stable-section">
          <div class="stable-section-title">${d("components.stablecoins.pegHealth")}</div>
          <div class="stable-peg-list">${s}</div>
        </div>
        <div class="stable-section">
          <div class="stable-section-title">${d("components.stablecoins.supplyVolume")}</div>
          <div class="stable-supply-header">
            <span>${d("components.stablecoins.token")}</span><span>${d("components.stablecoins.mcap")}</span><span>${d("components.stablecoins.vol24h")}</span><span>${d("components.stablecoins.chg24h")}</span>
          </div>
          <div class="stable-supply-list">${n}</div>
        </div>
      </div>
    `)}}const ar=Object.freeze(Object.defineProperty({__proto__:null,StablecoinPanel:on},Symbol.toStringTag,{value:"Module"}));export{jn as A,Qn as C,Wn as E,On as F,er as G,Zn as L,Mn as M,Hn as N,Jn as P,Nn as S,Ln as W,Yn as Y,In as a,zn as b,Bn as c,Un as d,Gn as e,Vn as f,qn as g,Xn as h,Kn as i,tr as j,ar as k};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["panels-markets-D4-bCSNa.js"]=1;