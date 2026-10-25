var Je=Object.defineProperty;var et=(o,i,e)=>i in o?Je(o,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[i]=e;var y=(o,i,e)=>et(o,typeof i!="symbol"?i+"":i,e);import{P as D}from"./Panel-3zvnDVWb.js";import{getTrendColor as tt,getTrendIndicator as st,formatOilValue as it,getEuGasStorageData as at}from"./index-CSDWQ1jW.js";import{t as m,b as nt,g as z}from"./theme-colors-BmUbP5Zj.js";import{e as a,u as E,j as rt,a as G,s as Q}from"./sanitize-D7dx0cA1.js";import{aY as ot,aG as lt,aZ as ct}from"./App-BLvralVM.js";import{m as oe}from"./sparkline-B3e4nvqm.js";import{b as We,E as Ye,g as I,a as N,S as J,r as W}from"./index-CE8VpG3t.js";import{m as dt,C as pt,D as ut}from"./gdelt-intel-FTZQ7YLF.js";import{a as ee,A as te}from"./attribution-footer-hF73mMPH.js";import{f as we,a as Ce,s as ft}from"./disruption-timeline-rn1TsGcA.js";import{p as ht,a as mt,d as gt}from"./pipeline-evidence-CqE_XO-h.js";import{g as vt,e as Ae,s as yt,a as bt,d as Te,h as xt}from"./storage-facility-registry-store-cTGXMc39.js";import{s as $t}from"./pipeline-live-paint-B4hVKzYC.js";import{b as de}from"./activation-DdoRK80V.js";import{d as wt}from"./storage-evidence-DthMONVc.js";import{d as le,c as Ct}from"./shortage-evidence-CwhDyV8K.js";import{getCachedFuelShortageRegistry as St,setCachedFuelShortageRegistry as Pe}from"./fuel-shortage-registry-store-DOAeJTj1.js";import{f as qe}from"./hormuz-tracker-BcfLgmE_.js";import{fetchCommodityQuotes as kt}from"./index-Cn_DTYuw.js";import{b as Et}from"./_energy-risk-overview-state-0LaVUMqp.js";import{h as U}from"./panel-gating-RGvzctmX.js";import{s as At,g as V}from"./convex-client-CpRmA3au.js";import{onEntitlementChange as Tt}from"./entitlements-DAACEsnd.js";import{c as Pt}from"./layout-batch-B9PC4ceT.js";import{describeFreshness as Dt}from"./persistent-cache-DHxY9lLL.js";import{r as zt}from"./dom-utils-COg85yfw.js";import{e as De}from"./extent-Ccx1MofX.js";import{l as ce}from"./linear-BKxNRX5E.js";import{m as he}from"./max-DBeXZoyG.js";import{s as me}from"./string-B04_ldoR.js";import{a as Ot}from"./arc-CGlAFq2g.js";import{i as Mt}from"./continuous-p2aHrHyA.js";import{a as ge,m as K}from"./monotone-804fPAVO.js";import{l as ze}from"./line-DEDRnOn1.js";import{s as _t,n as Ft,a as Rt}from"./stack-DSObyWpB.js";function Lt(o){return!!(o!=null&&o.wtiPrice||o!=null&&o.brentPrice||o!=null&&o.usProduction||o!=null&&o.usInventory)}class It extends D{constructor(){super({id:"energy-complex",title:m("panels.energyComplex"),defaultRowSpan:2,infoTooltip:m("components.energyComplex.infoTooltip")});y(this,"analytics",null);y(this,"tape",[]);y(this,"crudeWeeks",[]);y(this,"natGasWeeks",[]);y(this,"euGas",null);y(this,"oilStocksAnalysis",null);y(this,"lngVulnerability",null)}updateAnalytics(e){this.analytics=e,this.render()}updateTape(e){this.tape=e.filter(t=>t.price!==null),this.render()}updateCrudeInventories(e){this.crudeWeeks=e,this.render()}updateNatGas(e){this.natGasWeeks=e,this.render()}updateEuGasStorage(e){this.euGas=e.unavailable?null:e,this.render()}setOilStocksAnalysis(e){this.oilStocksAnalysis=e.unavailable?null:e,this.render()}updateLngVulnerability(e){var t;this.lngVulnerability=(t=e==null?void 0:e.top20LngDependent)!=null&&t.length?e:null,this.render()}renderOilStocksSection(){var c,d,p,f;const e=this.oilStocksAnalysis;if(!e||e.ieaMembers.length===0)return"";const t=e.ieaMembers.map(u=>{const h=u.netExporter?'<span class="energy-net-exporter-badge">Net Exporter</span>':u.daysOfCover!=null?a(String(u.daysOfCover))+" d":"—",v=u.belowObligation?'<span class="energy-below-obligation-badge">Below 90d</span>':"";return`
        <tr class="oil-stocks-row">
          <td class="oil-stocks-rank">${a(String(u.rank))}</td>
          <td class="oil-stocks-iso">${a(u.iso2)}</td>
          <td class="oil-stocks-days">${h}${v}</td>
          <td class="oil-stocks-vs">${u.vsObligation!=null?(u.vsObligation>0?"+":"")+a(String(u.vsObligation)):"—"}</td>
        </tr>`}).join(""),s=e.regionalSummary,n=((c=s==null?void 0:s.europe)==null?void 0:c.avgDays)!=null?`<div class="oil-stocks-region-row"><span class="oil-stocks-region-name">Europe</span><span>avg ${a(String(s.europe.avgDays))}d / min ${a(String(((d=s.europe)==null?void 0:d.minDays)??"—"))}d</span>${(s.europe.countBelowObligation??0)>0?`<span class="energy-below-obligation-badge">${a(String(s.europe.countBelowObligation))} below 90d</span>`:""}</div>`:"",l=((p=s==null?void 0:s.asiaPacific)==null?void 0:p.avgDays)!=null?`<div class="oil-stocks-region-row"><span class="oil-stocks-region-name">Asia-Pacific</span><span>avg ${a(String(s.asiaPacific.avgDays))}d / min ${a(String(((f=s.asiaPacific)==null?void 0:f.minDays)??"—"))}d</span>${(s.asiaPacific.countBelowObligation??0)>0?`<span class="energy-below-obligation-badge">${a(String(s.asiaPacific.countBelowObligation))} below 90d</span>`:""}</div>`:"",r=s!=null&&s.northAmerica?`<div class="oil-stocks-region-row"><span class="oil-stocks-region-name">North America</span><span>${a(String(s.northAmerica.netExporters??0))} net exporter(s)${s.northAmerica.avgDays!=null?`, avg ${a(String(s.northAmerica.avgDays))}d`:""}</span></div>`:"";return`
      <div class="energy-tape-section" style="margin-top:8px">
        <div class="energy-section-title">IEA Oil Stocks — Days of Cover</div>
        <table class="oil-stocks-table">
          <thead><tr><th scope="col">#</th><th scope="col">Ctry</th><th scope="col">Days</th><th scope="col">vs 90d</th></tr></thead>
          <tbody>${t}</tbody>
        </table>
        <div class="oil-stocks-regional" style="margin-top:6px">
          ${n}${l}${r}
        </div>
        <div class="indicator-date" style="margin-top:4px">Data: ${a(e.dataMonth)} (IEA)</div>
      </div>`}renderLngVulnerabilitySection(){const e=this.lngVulnerability;return!e||e.top20LngDependent.length===0?"":`
      <div class="energy-tape-section" style="margin-top:8px">
        <div class="energy-section-title">LNG Vulnerability</div>
        <table class="oil-stocks-table">
          <thead><tr><th scope="col">Country</th><th scope="col">LNG Share</th><th scope="col">LNG Imports</th></tr></thead>
          <tbody>${e.top20LngDependent.slice(0,5).map(n=>`
      <tr class="oil-stocks-row">
        <td class="oil-stocks-iso">${a(n.iso2)}</td>
        <td class="oil-stocks-days">${a((n.lngShareOfImports*100).toFixed(1))}%</td>
        <td class="oil-stocks-vs">${a(String(Math.round(n.lngImportsTj)))} TJ</td>
      </tr>`).join("")}</tbody>
        </table>
        <div class="indicator-date" style="margin-top:4px">Data: ${a(e.dataMonth)} (JODI Gas)</div>
      </div>`}render(){var _,se,F,Y,q,B,ie,ae,ne;const e=new Set(this.tape.filter(w=>w.price!==null).map(w=>w.symbol)),t=e.has("CL=F"),s=e.has("BZ=F"),n=[t?null:(_=this.analytics)==null?void 0:_.wtiPrice,s?null:(se=this.analytics)==null?void 0:se.brentPrice,(F=this.analytics)==null?void 0:F.usProduction,(Y=this.analytics)==null?void 0:Y.usInventory].filter(Boolean);if(n.length===0&&this.tape.length===0&&this.crudeWeeks.length===0&&this.natGasWeeks.length===0&&!this.euGas&&!this.oilStocksAnalysis&&!this.lngVulnerability){this.setSafeContent(E(`<div class="economic-empty">${m("components.energyComplex.noData")}</div>`,"legacy Panel.setContent() migration"));return}const l=[];Lt(this.analytics)&&l.push("EIA"),this.tape.length>0&&l.push(m("components.energyComplex.liveTapeSource")),this.euGas&&l.push("GIE AGSI+"),this.oilStocksAnalysis&&l.push("IEA"),this.lngVulnerability&&l.push("JODI Gas");const r=this.crudeWeeks[0]??null,c=(r==null?void 0:r.weeklyChangeMb)??null,d=c!==null&&c>0?"+":"",p=c===null?"":c>0?"change-negative":"change-positive",f=this.crudeWeeks.slice().reverse().map(w=>w.stocksMb),u=this.natGasWeeks[0]??null,h=(u==null?void 0:u.weeklyChangeBcf)??null,v=h!==null&&h>0?"+":"",$=h===null?"":h>0?"change-negative":"change-positive",g=this.natGasWeeks.slice().reverse().map(w=>w.storBcf),b=((q=this.euGas)==null?void 0:q.fillPct)??null,C=((B=this.euGas)==null?void 0:B.fillPctChange1d)??null,S=C!==null&&C>0?"+":"",k=C===null?"":C>0?"change-positive":"change-negative",M=((ie=this.euGas)==null?void 0:ie.trend)??"",j=(((ae=this.euGas)==null?void 0:ae.history)??[]).slice().reverse().map(w=>w.fillPct);this.setSafeContent(E(`
      <div class="energy-complex-content">
        ${n.length>0?`
          <div class="energy-summary-grid">
            ${n.map(w=>{if(!w)return"";const Z=tt(w.trend,w.name.includes("Production")),re=`${w.changePct>0?"+":""}${w.changePct.toFixed(1)}%`;return`
                <div class="energy-summary-card">
                  <div class="energy-summary-head">
                    <span class="energy-summary-name">${a(w.name)}</span>
                    <span class="energy-summary-trend" style="color:${a(Z)}">${a(st(w.trend))}</span>
                  </div>
                  <div class="energy-summary-value">${a(it(w.current,w.unit))} <span class="energy-unit">${a(w.unit)}</span></div>
                  <div class="energy-summary-change" style="color:${a(Z)}">${a(re)}</div>
                  <div class="indicator-date">${a(w.lastUpdated.slice(0,10))}</div>
                </div>
              `}).join("")}
          </div>
        `:""}
        ${this.crudeWeeks.length>0?`
          <div class="energy-tape-section" style="margin-top:8px">
            <div class="energy-section-title">US Crude Inventories (Mb)</div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:4px">
              ${oe(f,c,80,22)}
              <div>
                <span class="commodity-price">${a(r?r.stocksMb.toFixed(1):"—")} Mb</span>
                ${c!==null?`<span class="commodity-change ${a(p)}" style="margin-left:6px">${a(d+c.toFixed(1))} WoW</span>`:""}
              </div>
            </div>
            <div class="indicator-date" style="margin-top:2px">${a((r==null?void 0:r.period)??"")}</div>
          </div>
        `:""}
        ${this.natGasWeeks.length>0?`
          <div class="energy-tape-section" style="margin-top:8px">
            <div class="energy-section-title">US Nat Gas Storage (Bcf)</div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:4px">
              ${oe(g,h,80,22)}
              <div>
                <span class="commodity-price">${a(u?u.storBcf.toFixed(0):"—")} Bcf</span>
                ${h!==null?`<span class="commodity-change ${a($)}" style="margin-left:6px">${a(v+h.toFixed(0))} WoW</span>`:""}
              </div>
            </div>
            <div class="indicator-date" style="margin-top:2px">${a((u==null?void 0:u.period)??"")}</div>
          </div>
        `:""}
        ${b!==null?`
          <div class="energy-tape-section" style="margin-top:8px">
            <div class="energy-section-title">EU Gas Storage (Fill %)</div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:4px">
              ${oe(j,C,80,22)}
              <div>
                <span class="commodity-price">${a(b.toFixed(1))}%</span>
                ${C!==null?`<span class="commodity-change ${a(k)}" style="margin-left:6px">${a(S+C.toFixed(2))}% 1d</span>`:""}
                ${M?`<span style="margin-left:6px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${a(M)}</span>`:""}
              </div>
            </div>
            <div class="indicator-date" style="margin-top:2px">${a(((ne=this.euGas)==null?void 0:ne.updatedAt)??"")}</div>
          </div>
        `:""}
        ${this.tape.length>0?`
          <div class="energy-tape-section">
            <div class="energy-section-title">${m("components.energyComplex.liveTape")}</div>
            <div class="commodities-grid energy-tape-grid">
              ${this.tape.map(w=>`
                <div class="commodity-item energy-tape-card">
                  <div class="commodity-name">${a(w.display)}</div>
                  ${oe(w.sparkline,w.change,60,18)}
                  <div class="commodity-price">${ot(w.price)}</div>
                  <div class="commodity-change ${lt(w.change??0)}">${ct(w.change??0)}</div>
                </div>
              `).join("")}
            </div>
          </div>
        `:""}
        ${this.renderOilStocksSection()}
        ${this.renderLngVulnerabilitySection()}
      </div>
      <div class="economic-footer">
        <span class="economic-source">${a(l.join(" • "))}</span>
      </div>
    `,"legacy Panel.setContent() migration"))}}const $i=Object.freeze(Object.defineProperty({__proto__:null,EnergyComplexPanel:It},Symbol.toStringTag,{value:"Module"})),L=400,pe=150,jt=280,T=42,Se=10,R=10,Ze=22,ke=L-T-Se,H=pe-R-Ze;function Bt(o,i){const e=new Map(o.map(n=>[n.period,n.stocksMb])),t=new Map(i.map(n=>[n.period,n.stocksMb]));return[...new Set([...e.keys(),...t.keys()])].sort().map(n=>({period:n,crudeMb:e.get(n)??null,sprMb:t.get(n)??null}))}function Gt(o){return o.slice(5)}function O(o,i=1){return o.toFixed(i)}function Ut(o,i,e,t=4){const s=i-o||1;return Array.from({length:t+1},(n,l)=>{const r=o+l/t*s,c=R+H-l/t*H;return`<line x1="${T}" y1="${c.toFixed(1)}" x2="${L-Se}" y2="${c.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${T-4}" y="${c.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${a(O(r,0))}${a(e)}</text>`}).join("")}function Ke(o,i){const e=Math.max(1,Math.floor(i/5));return o.map((t,s)=>s%e!==0&&s!==i-1?"":`<text x="${(T+s/Math.max(1,i-1)*ke).toFixed(1)}" y="${pe-2}" text-anchor="middle" fill="rgba(255,255,255,0.4)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))">${a(t)}</text>`).join("")}function Xe(o){if(o.length<2)return"";const i=o[0],e=o[o.length-1],t=o.map(s=>`${s.x.toFixed(1)},${s.y.toFixed(1)}`).join(" L");return`M${i.x.toFixed(1)},${i.y.toFixed(1)} L${t} L${e.x.toFixed(1)},${R+H} L${i.x.toFixed(1)},${R+H} Z`}function Vt(o){const i=o.filter(g=>g.crudeMb!=null&&g.sprMb!=null);if(i.length<2){const g=o.filter(b=>b.crudeMb!=null);return g.length<2?'<div style="text-align:center;color:var(--text-dim);padding:16px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">Insufficient data for chart</div>':Ht(g)}const e=i.map(g=>g.crudeMb+g.sprMb),t=Math.max(...e)*1.05,s=Math.min(...i.map(g=>g.sprMb))*.95,n=t-s||1,l=g=>R+H-(g-s)/n*H,r=g=>T+g/Math.max(1,i.length-1)*ke,c=i.map((g,b)=>({x:r(b),y:l(g.sprMb)})),d=`<path d="${Xe(c)}" fill="#f59e0b" opacity="0.25"/>`,p=`<polyline points="${c.map(g=>`${g.x.toFixed(1)},${g.y.toFixed(1)}`).join(" ")}" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.8"/>`,f=i.map((g,b)=>({x:r(b),y:l(g.crudeMb+g.sprMb)})),u=`<path d="M${f.map(g=>`${g.x.toFixed(1)},${g.y.toFixed(1)}`).join(" L")} L${c.map(g=>`${g.x.toFixed(1)},${g.y.toFixed(1)}`).reverse().join(" L")} Z" fill="#3b82f6" opacity="0.2"/>`,h=`<polyline points="${f.map(g=>`${g.x.toFixed(1)},${g.y.toFixed(1)}`).join(" ")}" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity="0.9"/>`,v=Ut(s,t,""),$=Ke(i.map(g=>Gt(g.period)),i.length);return`<svg viewBox="0 0 ${L} ${pe}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crude oil inventory history: commercial stocks and SPR" style="width:100%;height:auto;display:block">${v}${$}${d}${p}${u}${h}</svg>`}function Ht(o){const i=o.map(e=>({x:e.period,y:e.crudeMb}));return $e(i,"#3b82f6","")}function $e(o,i,e,t=pe){if(o.length<2)return'<div style="text-align:center;color:var(--text-dim);padding:12px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">Insufficient data</div>';const s=t-R-Ze,n=o.map(v=>v.y),l=Math.max(...n)*1.02,r=Math.min(...n)*.98,c=l-r||1,d=o.map((v,$)=>({x:T+$/Math.max(1,o.length-1)*ke,y:R+s-(v.y-r)/c*s})),p=d.map(v=>`${v.x.toFixed(1)},${v.y.toFixed(1)}`).join(" "),f=Xe(d),u=Array.from({length:4},(v,$)=>{const g=r+$/3*c,b=R+s-$/3*s;return`<line x1="${T}" y1="${b.toFixed(1)}" x2="${L-Se}" y2="${b.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${T-4}" y="${b.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${a(O(g,0))}${a(e)}</text>`}).join(""),h=Ke(o.map(v=>v.x.slice(5)),o.length);return`<svg viewBox="0 0 ${L} ${t}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inventory trend" style="width:100%;height:auto;display:block">${u}${h}<path d="${f}" fill="${i}" opacity="0.12"/><polyline points="${p}" fill="none" stroke="${i}" stroke-width="1.5" opacity="0.9"/></svg>`}function Nt(o){const i=[...o].filter(d=>d.daysOfCover!=null||d.netExporter).sort((d,p)=>d.netExporter&&!p.netExporter?1:!d.netExporter&&p.netExporter?-1:(d.daysOfCover??999)-(p.daysOfCover??999)).slice(0,20);if(!i.length)return'<div style="text-align:center;color:var(--text-dim);padding:12px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">No IEA data</div>';const e=Math.max(200,...i.filter(d=>d.daysOfCover!=null).map(d=>d.daysOfCover)),t=Math.min(14,(jt-20)/i.length),s=L-T-10,n=15+i.length*t+5,l=i.map((d,p)=>{const f=d.daysOfCover??0,u=Math.max(0,f/e*s),h=15+p*t,v=d.netExporter?"#6b7280":d.belowObligation?"#ef4444":"#22c55e",$=d.netExporter?"Exp":f>0?`${f.toFixed(0)}d`:"N/A";return`<rect x="${T}" y="${h.toFixed(1)}" width="${u.toFixed(1)}" height="${(t-2).toFixed(1)}" fill="${v}" opacity="0.6" rx="1"/>
      <text x="${T-3}" y="${(h+t/2).toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.5)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${a(d.iso2)}</text>
      <text x="${(T+u+3).toFixed(1)}" y="${(h+t/2).toFixed(1)}" fill="rgba(255,255,255,0.6)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${a($)}</text>`}).join(""),r=T+90/e*s,c=`<line x1="${r.toFixed(1)}" y1="10" x2="${r.toFixed(1)}" y2="${n-5}" stroke="rgba(255,255,255,0.25)" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="${r.toFixed(1)}" y="9" text-anchor="middle" fill="rgba(255,255,255,0.4)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))">90d</text>`;return`<svg viewBox="0 0 ${L} ${n}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Supply obligation coverage by month" style="width:100%;height:auto;display:block">${l}${c}</svg>`}function X(o,i,e=""){return`<div class="energy-tape-section" style="margin-top:8px">
    <div class="energy-section-title">${a(o)}</div>
    <div style="border-radius:6px;background:rgba(255,255,255,0.02);padding:4px 0">${i}</div>
    ${e?`<div style="margin-top:3px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${e}</div>`:""}
  </div>`}function ve(o,i){if(o==null)return"";const e=o>=0?"+":"";return`<span class="commodity-change ${o>=0?"change-positive":"change-negative"}">${a(e+O(o))} ${a(i)}</span>`}class Wt extends D{constructor(){super({id:"oil-inventories",title:m("panels.oilInventories"),showCount:!1,infoTooltip:m("components.oilInventories.infoTooltip"),defaultRowSpan:2})}async fetchData(){var i,e;try{const t=await fetch(nt("/api/economic/v1/get-oil-inventories"));if(!t.ok){this.showError("Oil inventory data unavailable",()=>void this.fetchData(),300);return}const s=await t.json();if(!((i=this.element)!=null&&i.isConnected))return;this.render(s)}catch{if(!((e=this.element)!=null&&e.isConnected))return;this.showError("Oil inventory data unavailable",()=>void this.fetchData(),300)}}render(i){var s,n,l,r,c,d,p,f,u,h,v;const e=[];if((s=i.crudeWeeks)!=null&&s.length||(l=(n=i.spr)==null?void 0:n.weeks)!=null&&l.length){const $=Bt([...i.crudeWeeks??[]].reverse(),[...((r=i.spr)==null?void 0:r.weeks)??[]].reverse()),g=Vt($),b=[...$].reverse().find(M=>M.crudeMb!=null&&M.sprMb!=null),C=(c=i.crudeWeeks)==null?void 0:c[0],S=i.spr,k=[];b&&k.push(`Total: ${a(O(b.crudeMb+b.sprMb))} Mb (${a(b.period)})`),C&&k.push(`Commercial: ${a(O(C.stocksMb))} ${ve(C.weeklyChangeMb,"WoW")}`),S&&k.push(`SPR: ${a(O(S.latestStocksMb))} ${ve(S.changeWow,"WoW")}`),e.push(X("US Total Oil Stocks",g,k.join(" | ")))}if((d=i.natGasWeeks)!=null&&d.length){const g=[...i.natGasWeeks].reverse().map(k=>({x:k.period,y:k.storBcf})),b=$e(g,"#22c55e","",120),C=i.natGasWeeks[0],S=C?`Storage: ${a(O(C.storBcf,0))} Bcf ${ve(C.weeklyChangeBcf,"WoW")}`:"";e.push(X("US Nat Gas Working Storage",b,S))}if(i.euGas&&((p=i.euGas.history)!=null&&p.length)){const g=[...i.euGas.history].reverse().map(k=>({x:k.date,y:k.fillPct})),b=$e(g,"#14b8a6","%",100),C=i.euGas.fillPctChange1d>=0?"+":"",S=`Fill: ${a(O(i.euGas.fillPct))}% | Trend: ${a(i.euGas.trend)} | ${a(C+O(i.euGas.fillPctChange1d,2))}%/d`;e.push(X("EU Gas Storage Fill",b,S))}if((u=(f=i.ieaStocks)==null?void 0:f.members)!=null&&u.length){const $=Nt(i.ieaStocks.members),g=[((h=i.ieaStocks.europe)==null?void 0:h.avgDays)!=null?`Europe avg ${i.ieaStocks.europe.avgDays.toFixed(0)}d`:"",((v=i.ieaStocks.asiaPacific)==null?void 0:v.avgDays)!=null?`AsiaPac avg ${i.ieaStocks.asiaPacific.avgDays.toFixed(0)}d`:""].filter(Boolean).join(" | "),b=i.ieaStocks.members.filter(S=>S.belowObligation).length,C=`${g}${b>0?` | <span style="color:#ef4444">${b} below 90d</span>`:""} | Data: ${a(i.ieaStocks.dataMonth)}`;e.push(X("IEA OECD Oil Stocks (Days of Cover)",$,C))}if(i.refinery){const $=`US Refinery Crude Inputs: <span class="commodity-price">${a(O(i.refinery.inputsMbpd))} Mb/d</span> (${a(i.refinery.period)})`;e.push(X("Refinery Throughput",`<div style="padding:4px 8px;font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${$}</div>`,""))}if(e.length===0){this.showError("Oil inventory data unavailable",()=>void this.fetchData(),300);return}this.setSafeContent(E(`<div class="energy-complex-content">${e[0]}<div style="display:flex;gap:12px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">
      <span><svg width="14" height="4" style="vertical-align:middle" aria-hidden="true"><line x1="0" y1="2" x2="14" y2="2" stroke="#3b82f6" stroke-width="2"/></svg> Commercial</span>
      <span><svg width="14" height="4" style="vertical-align:middle" aria-hidden="true"><line x1="0" y1="2" x2="14" y2="2" stroke="#f59e0b" stroke-width="2"/></svg> SPR</span>
    </div>${e.slice(1).join("")}
      <div class="indicator-date" style="margin-top:6px">Source: EIA, IEA, GIE AGSI+</div>
    </div>`,"legacy Panel.setContent() migration"))}}const wi=Object.freeze(Object.defineProperty({__proto__:null,OilInventoriesPanel:Wt},Symbol.toStringTag,{value:"Module"})),Yt={conservation:"Energy Conservation",consumer_support:"Consumer Support"},qt={transport:"Transport",buildings:"Buildings",industry:"Industry",electricity:"Electricity",agriculture:"Agriculture",general:"General"},Zt={active:"ecp-status-active",planned:"ecp-status-planned",ended:"ecp-status-ended"};class Kt extends D{constructor(){super({id:"energy-crisis",title:"Energy Crisis Tracker",showCount:!0,trackActivity:!0,defaultRowSpan:2,infoTooltip:"IEA 2026 Energy Crisis Policy Response Tracker. Tracks government measures to conserve energy and support consumers in response to Middle East conflict and Strait of Hormuz supply disruptions."});y(this,"data",null);y(this,"loading",!0);y(this,"error",null);y(this,"activeFilter","all");this.showLoading("Loading energy crisis policies..."),this.content.addEventListener("click",e=>{const t=e.target.closest(".ecp-filter-btn");if(!t)return;const s=t.dataset.filter||"all";s!==this.activeFilter&&(this.activeFilter=s,this.render())})}async fetchData(){var t;const e=We("energyCrisisPolicies");if((t=e==null?void 0:e.policies)!=null&&t.length){this.data=e,this.error=null,this.loading=!1,this.setCount(e.policies.length),this.render(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var e,t,s;try{const l=await new Ye(I(),{fetch:(...r)=>globalThis.fetch(...r)}).getEnergyCrisisPolicies({countryCode:"",category:""});if(!((e=this.element)!=null&&e.isConnected))return;((t=l.policies)!=null&&t.length||!this.data)&&(this.data=l,this.error=null,this.loading=!1,this.setCount(l.policies.length),this.render())}catch(n){if(this.isAbortError(n)||!((s=this.element)!=null&&s.isConnected))return;this.data||(console.warn("[EnergyCrisis] Fetch error:",n),this.error="Energy crisis data unavailable",this.loading=!1,this.render())}}getFilteredPolicies(){var e;return(e=this.data)!=null&&e.policies?this.activeFilter==="all"?this.data.policies:this.data.policies.filter(t=>t.category===this.activeFilter):[]}buildSummary(){var l;const e=((l=this.data)==null?void 0:l.policies)??[],t=e.filter(r=>r.category==="conservation").length,s=e.filter(r=>r.category==="consumer_support").length,n=new Set(e.map(r=>r.countryCode)).size;return{conservationCount:t,supportCount:s,countryCount:n}}render(){var d;if(this.loading){this.showLoading("Loading energy crisis policies...");return}if(this.error||!this.data){this.showError(this.error||"No data available",()=>void this.fetchData());return}if(!((d=this.data.policies)!=null&&d.length)){this.setSafeContent(E('<div class="panel-empty">No energy crisis policies tracked.</div>',"legacy Panel.setContent() migration"));return}const e=this.buildSummary(),t=this.getFilteredPolicies(),s=`
      <div class="ecp-summary">
        <div class="ecp-summary-card">
          <span class="ecp-summary-value">${e.countryCount}</span>
          <span class="ecp-summary-label">Countries</span>
        </div>
        <div class="ecp-summary-card ecp-summary-conservation">
          <span class="ecp-summary-value">${e.conservationCount}</span>
          <span class="ecp-summary-label">Conservation</span>
        </div>
        <div class="ecp-summary-card ecp-summary-support">
          <span class="ecp-summary-value">${e.supportCount}</span>
          <span class="ecp-summary-label">Consumer Support</span>
        </div>
      </div>
    `,n=`
      <div class="ecp-filters">
        <button class="ecp-filter-btn ${this.activeFilter==="all"?"ecp-filter-active":""}" data-filter="all">All</button>
        <button class="ecp-filter-btn ${this.activeFilter==="conservation"?"ecp-filter-active":""}" data-filter="conservation">Conservation</button>
        <button class="ecp-filter-btn ${this.activeFilter==="consumer_support"?"ecp-filter-active":""}" data-filter="consumer_support">Consumer Support</button>
      </div>
    `,l=t.map(p=>{const f=Yt[p.category]||p.category,u=qt[p.sector]||p.sector,h=Zt[p.status]||"",v=p.category==="conservation"?"ecp-cat-conservation":"ecp-cat-support";return`
        <div class="ecp-policy-row">
          <div class="ecp-policy-header">
            <span class="ecp-country">${a(p.country)}</span>
            <span class="ecp-pill ${v}">${a(f)}</span>
            <span class="ecp-pill ecp-pill-sector">${a(u)}</span>
            <span class="ecp-pill ${h}">${a(p.status)}</span>
          </div>
          <div class="ecp-measure">${a(p.measure)}</div>
          <div class="ecp-date">${a(p.dateAnnounced)}</div>
        </div>
      `}).join(""),r=this.data.sourceUrl||"https://www.iea.org/data-and-statistics/data-tools/2026-energy-crisis-policy-response-tracker",c=[this.data.updatedAt?`Updated ${new Date(this.data.updatedAt).toLocaleDateString()}`:"","Source: IEA"].filter(Boolean).join(" · ");this.setSafeContent(E(`
      <div class="ecp-container">
        ${s}
        ${n}
        <div class="ecp-policy-list">${l}</div>
        <div class="ecp-footer">
          <span>${a(c)}</span>
          <a href="${a(r)}" target="_blank" rel="noopener noreferrer" class="ecp-source-link">IEA Tracker ↗</a>
        </div>
      </div>
    `,"legacy Panel.setContent() migration"))}}const Ci=Object.freeze(Object.defineProperty({__proto__:null,EnergyCrisisPanel:Kt},Symbol.toStringTag,{value:"Module"})),Xt=["hormuz_strait","malacca_strait","suez","bab_el_mandeb","bosphorus","dover_strait","panama"];function Qt(o){switch(o){case"hormuz_strait":return m("components.chokepointStrip.shortName.hormuzStrait");case"malacca_strait":return m("components.chokepointStrip.shortName.malaccaStrait");case"suez":return m("components.chokepointStrip.shortName.suez");case"bab_el_mandeb":return m("components.chokepointStrip.shortName.babElMandeb");case"bosphorus":return m("components.chokepointStrip.shortName.bosphorus");case"dover_strait":return m("components.chokepointStrip.shortName.danishStraits");case"panama":return m("components.chokepointStrip.shortName.panama");default:return""}}function Jt(o){const i=(o||"").toLowerCase();return i.includes("closed")||i.includes("critical")?"#e74c3c":i.includes("disrupted")||i.includes("high")?"#e67e22":i.includes("restricted")||i.includes("elevated")||i.includes("medium")?"#f39c12":"#2ecc71"}function es(o){const i=o.flowEstimate;if(!i||typeof i.currentMbd!="number"||typeof i.baselineMbd!="number")return"—";const e=i.baselineMbd>0?Math.round(i.currentMbd/i.baselineMbd*100):null;return e==null?m("components.chokepointStrip.flow.mbd",{value:i.currentMbd.toFixed(1)}):m("components.chokepointStrip.flow.pctOfBaseline",{pct:e})}class ts extends D{constructor(){super({id:"chokepoint-strip",title:m("components.chokepointStrip.title"),infoTooltip:m("components.chokepointStrip.infoTooltip")});y(this,"data",null)}async fetchData(){var t,s,n,l;let e;try{e=await dt()}catch(r){if(this.isAbortError(r)||!((t=this.element)!=null&&t.isConnected))return;this.showError(m("components.chokepointStrip.errors.unavailable"),()=>void this.fetchData());return}if((s=this.element)!=null&&s.isConnected){this.data=e,this.render();try{const r=await pt(e);if(!(r!=null&&r.chokepoints.length)||!((n=this.element)!=null&&n.isConnected))return;this.data=r,this.render()}catch(r){if(this.isAbortError(r)||!((l=this.element)!=null&&l.isConnected))return;console.warn("[ChokepointStripPanel] Hydration refresh failed:",r)}}}render(){var c,d;if(!((d=(c=this.data)==null?void 0:c.chokepoints)!=null&&d.length)){this.showError(m("components.chokepointStrip.errors.noData"),()=>void this.fetchData());return}const e=new Map(this.data.chokepoints.map(p=>[p.id,p])),t=Xt.map(p=>e.get(p)).filter(p=>!!p),s=rt(t.map(p=>{const f=Jt(p.status),u=Qt(p.id)||p.name,h=es(p),v=p.navigationalWarningsAvailable===!0&&p.activeWarnings>0?G`<span class="cp-chip-warn">${p.activeWarnings}</span>`:G``;return G`
        <div class="cp-chip" data-cp="${p.id}" title="${p.name} - ${p.status||m("components.chokepointStrip.unknown")}">
          <div class="cp-chip-dot" style="background:${f}"></div>
          <div class="cp-chip-body">
            <div class="cp-chip-name">${u}${v}</div>
            <div class="cp-chip-flow">${h}</div>
          </div>
        </div>`})),n=this.data.upstreamUnavailable?G`<div class="cp-strip-warning">${m("components.supplyChain.upstreamUnavailable")}</div>`:G``,l=t.reduce((p,f)=>p+(f.aisSnapshotAvailable===!0?f.aisDisruptions:0),0),r=E(ee({sourceType:"ais",method:m("components.chokepointStrip.attribution.method"),sampleSize:l||void 0,sampleLabel:m("components.chokepointStrip.attribution.sampleLabel"),updatedAt:this.data.fetchedAt,creditName:m("components.chokepointStrip.attribution.creditName")}),"attributionFooterHtml escapes fields and returns shared footer markup");this.setSafeContent(G`
      ${n}
      <div class="cp-strip-wrap">
        <div class="cp-strip">${s}</div>
        ${r}
      </div>
      ${E(te,"static attribution footer CSS constant")}
      <style>
        .cp-strip-warning { margin: 0 0 6px; color: var(--warning, #f59e0b); font-size: calc(11px * var(--wm-panel-effective-scale, 1)); }
        .cp-strip-wrap { padding: 4px 0; }
        .cp-strip { display: flex; flex-wrap: wrap; gap: 8px; }
        .cp-chip {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          min-width: 120px;
          font-size: calc(11px * var(--wm-panel-effective-scale, 1));
          cursor: default;
        }
        .cp-chip-dot { width: 8px; height: 8px; border-radius: 50%; flex: 0 0 8px; }
        .cp-chip-body { display: flex; flex-direction: column; line-height: 1.2; }
        .cp-chip-name { font-weight: 600; color: var(--text, #eee); display: flex; align-items: center; gap: 4px; }
        .cp-chip-warn { background:#e74c3c;color:#fff;border-radius:9px;padding:0 5px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700; }
        .cp-chip-flow { color: var(--text-dim, #888); font-size: calc(10px * var(--wm-panel-effective-scale, 1)); }
      </style>
    `)}}const Si=Object.freeze(Object.defineProperty({__proto__:null,ChokepointStripPanel:ts},Symbol.toStringTag,{value:"Module"})),ye=N(()=>new J(I(),{fetch:W})),Oe={flowing:"#2ecc71",reduced:"#f39c12",offline:"#e74c3c",disputed:"#9b59b6"};function ss(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Me(o){return o.commodityType==="gas"&&typeof o.capacityBcmYr=="number"&&o.capacityBcmYr>0?`${o.capacityBcmYr.toFixed(1)} bcm/yr`:o.commodityType==="oil"&&typeof o.capacityMbd=="number"&&o.capacityMbd>0?`${o.capacityMbd.toFixed(2)} mb/d`:"—"}function _e(o){const i=o&&Oe[o]?o:"disputed";return`<span class="pp-badge" style="background:${Oe[i]??"#7f8c8d"}">${a(ss(i))}</span>`}function is(o){if(!o||typeof o!="object")return null;const i=o,e=typeof i.id=="string"?i.id:"";if(!e)return null;const t=(f,u="")=>typeof f=="string"?f:u,s=(f,u=0)=>typeof f=="number"&&Number.isFinite(f)?f:u,n=f=>{if(f&&typeof f=="object"&&!Array.isArray(f)){const u=f;return{lat:s(u.lat),lon:s(u.lon)}}return{lat:0,lon:0}},l=i.evidence,r=l&&typeof l.operatorStatement=="object"&&l.operatorStatement?{text:t(l.operatorStatement.text),url:t(l.operatorStatement.url),date:t(l.operatorStatement.date)}:void 0,c=Array.isArray(l==null?void 0:l.sanctionRefs)?l.sanctionRefs.map(f=>{const u=f??{};return{authority:t(u.authority),listId:t(u.listId),date:t(u.date),url:t(u.url)}}):[],d=l?{physicalState:t(l.physicalState,"unknown"),physicalStateSource:t(l.physicalStateSource,"operator"),operatorStatement:r,commercialState:t(l.commercialState,"unknown"),sanctionRefs:c,lastEvidenceUpdate:t(l.lastEvidenceUpdate),classifierVersion:t(l.classifierVersion,"v1"),classifierConfidence:s(l.classifierConfidence,0)}:void 0,p=gt(d);return{id:e,name:t(i.name),operator:t(i.operator),commodityType:t(i.commodityType),fromCountry:t(i.fromCountry),toCountry:t(i.toCountry),transitCountries:Array.isArray(i.transitCountries)?i.transitCountries.map(f=>t(f)):[],capacityBcmYr:s(i.capacityBcmYr),capacityMbd:s(i.capacityMbd),lengthKm:s(i.lengthKm),inService:s(i.inService),startPoint:n(i.startPoint),endPoint:n(i.endPoint),waypoints:Array.isArray(i.waypoints)?i.waypoints.map(n):[],evidence:d,publicBadge:p}}function as(o,i){const e=[];for(const t of[o,i])if(t!=null&&t.pipelines)for(const s of Object.values(t.pipelines)){const n=is(s);n&&e.push(n)}return e.length===0?null:{pipelines:e,fetchedAt:mt(o==null?void 0:o.updatedAt,i==null?void 0:i.updatedAt),classifierVersion:ht(o==null?void 0:o.classifierVersion,i==null?void 0:i.classifierVersion),upstreamUnavailable:!1}}class ns extends D{constructor(){super({id:"pipeline-status",title:"Oil & Gas Pipeline Status",defaultRowSpan:2,infoTooltip:"Curated registry of critical oil and gas pipelines. Public badge is derived from evidence (operator statements, sanction refs, commercial state, physical signals) — see /docs/methodology/pipelines for the classifier spec."});y(this,"data",null);y(this,"selectedId",null);y(this,"detail",null);y(this,"detailLoading",!1);y(this,"detailEvents");y(this,"usedHydrationPaint",!1);y(this,"openDetailHandler",e=>{var s,n;const t=(s=e.detail)==null?void 0:s.pipelineId;!t||!((n=this.element)!=null&&n.isConnected)||this.loadDetail(t)});y(this,"handleContentClick",e=>{const t=e.target;if(!t)return;if(t.closest(".pp-drawer-close")){this.closeDetail();return}const s=t.closest("tr.pp-row");if(!s||!this.content.contains(s))return;const n=s.dataset.pipelineId;n&&this.loadDetail(n)});typeof window<"u"&&window.addEventListener("energy:open-pipeline-detail",this.openDetailHandler),this.content.addEventListener("click",this.handleContentClick),de(this.content,".pp-row")}destroy(){var e;typeof window<"u"&&window.removeEventListener("energy:open-pipeline-detail",this.openDetailHandler),(e=super.destroy)==null||e.call(this)}async fetchData(){var e,t,s,n;try{let{gas:l,oil:r}=vt();if(!l||!r){const u=await Ae({refresh:this.usedHydrationPaint});l=u.gas,r=u.oil}else if(this.usedHydrationPaint){const u=await Ae({refresh:!0});l=u.gas,r=u.oil}const c=l&&r?as(l,r):null;if(c){const u=()=>{this.data=c,this.render()};if(!((e=this.element)!=null&&e.isConnected)){this.runWhenConnected(u),this.usedHydrationPaint=!0;return}u(),this.usedHydrationPaint=!0;return}const d=await ye().listPipelines({commodityType:""}),p=u=>Object.fromEntries(d.pipelines.filter(h=>h.commodityType===u).map(h=>[h.id,h]));(t=d.pipelines)!=null&&t.length&&!d.upstreamUnavailable&&(yt({gas:{pipelines:p("gas"),classifierVersion:d.classifierVersion,updatedAt:d.fetchedAt},oil:{pipelines:p("oil"),classifierVersion:d.classifierVersion,updatedAt:d.fetchedAt}}),this.usedHydrationPaint=!0);const f=()=>{if($t(d)){this.showError("Pipeline registry unavailable",()=>void this.fetchData());return}this.data=d,this.render()};if(!((s=this.element)!=null&&s.isConnected)){this.runWhenConnected(f);return}f()}catch(l){if(this.isAbortError(l))return;const r=()=>{this.showError("Pipeline registry error",()=>void this.fetchData())};if(!((n=this.element)!=null&&n.isConnected)){this.runWhenConnected(r);return}r()}}async loadDetail(e){var t,s;this.selectedId=e,this.detailLoading=!0,this.detailEvents=void 0,this.render();try{const[n,l]=await Promise.all([ye().getPipelineDetail({pipelineId:e}),ye().listEnergyDisruptions({assetId:e,assetType:"pipeline",ongoingOnly:!1})]);if(!((t=this.element)!=null&&t.isConnected)||this.selectedId!==e)return;this.detail=n,this.detailEvents=(l==null?void 0:l.events)??[],this.detailLoading=!1,this.render()}catch{if(!((s=this.element)!=null&&s.isConnected)||this.selectedId!==e)return;this.detailLoading=!1,this.detail=null,this.render()}}closeDetail(){this.selectedId=null,this.detail=null,this.detailEvents=void 0,this.render()}renderDisruptionTimeline(){if(this.detailEvents===void 0)return"";if(this.detailEvents.length===0)return`<div class="pp-evidence">
        <div class="pp-sub" style="margin-bottom:6px">Disruption timeline</div>
        <div class="pp-ev-item pp-sub">No disruption events on file for this asset.</div>
      </div>`;const e=this.detailEvents.map(t=>{const s=a(we(t.startAt,t.endAt)),n=Ce(t.capacityOfflineBcmYr,t.capacityOfflineMbd),l=n?` · ${a(n)} offline`:"",r=t.causeChain&&t.causeChain.length>0?` · ${a(t.causeChain.join(" → "))}`:"";return`<div class="pp-ev-item">
        <strong>${a(t.eventType||"event")}</strong> · ${s}${l}${r}
        <div class="pp-sub" style="margin-top:2px">${a(t.shortDescription||"")}</div>
      </div>`}).join("");return`<div class="pp-evidence">
      <div class="pp-sub" style="margin-bottom:6px">Disruption timeline (${this.detailEvents.length})</div>
      ${e}
    </div>`}render(){if(!this.data)return;const e=[...this.data.pipelines].sort((l,r)=>{const c=l.publicBadge==="flowing"?1:0,d=r.publicBadge==="flowing"?1:0;return c!==d?c-d:l.commodityType!==r.commodityType?l.commodityType.localeCompare(r.commodityType):l.name.localeCompare(r.name)}).map(l=>this.renderRow(l)).join(""),t=ee({sourceType:"classifier",method:"evidence → badge (deterministic)",sampleSize:this.data.pipelines.length,sampleLabel:"pipelines",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Global Energy Monitor (CC-BY 4.0)",creditUrl:"https://globalenergymonitor.org/"}),s=this.selectedId?this.renderDrawer():"",n=this.data.upstreamUnavailable?`<div class="economic-warning">${a(m("components.supplyChain.upstreamUnavailable"))}</div>`:"";this.setSafeContent(E(`
      <div class="pp-wrap">
        ${n}
        <table class="pp-table">
          <thead>
            <tr>
              <th scope="col">Asset</th>
              <th scope="col">From → To</th>
              <th scope="col">Capacity</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
        ${t}
        ${s}
      </div>
      ${te}
      <style>
        .pp-wrap { position: relative; font-size: calc(11px * var(--wm-panel-effective-scale, 1)); }
        .pp-table { width: 100%; border-collapse: collapse; }
        .pp-table th { text-align: left; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-dim, #888); padding: 4px 6px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .pp-table td { padding: 6px; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .pp-table tr.pp-row { cursor: pointer; }
        .pp-table tr.pp-row:hover td { background: rgba(255,255,255,0.03); }
        .pp-name { font-weight: 600; color: var(--text, #eee); }
        .pp-sub  { font-size: calc(9px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; }
        .pp-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .pp-drawer { position: absolute; inset: 0; background: var(--panel-bg, #0f1218); padding: 12px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; }
        .pp-drawer-close { position: absolute; top: 8px; right: 10px; background: transparent; border: 0; color: var(--text-dim, #888); cursor: pointer; font-size: calc(14px * var(--wm-panel-effective-scale, 1)); }
        .pp-drawer h3 { margin: 0 0 6px 0; font-size: calc(13px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); }
        .pp-drawer .pp-kv { display: grid; grid-template-columns: 120px 1fr; gap: 4px 10px; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); margin-bottom: 10px; }
        .pp-drawer .pp-kv-key { color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); padding-top: 2px; }
        .pp-evidence { margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); }
        .pp-ev-item { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); margin-bottom: 6px; }
        .pp-ev-item a { color: #4ade80; text-decoration: none; }
        .pp-ev-item a:hover { text-decoration: underline; }
      </style>
    `,"legacy Panel.setContent() migration"))}renderRow(e){const t=e.commodityType==="gas"?"⛽":"🛢️",s=`${a(e.fromCountry)} → ${a(e.toCountry)}`;return`
      <tr class="pp-row" data-pipeline-id="${a(e.id)}" tabindex="${this.selectedId?"-1":"0"}">
        <td>
          <div class="pp-name">${t} ${a(e.name)}</div>
          <div class="pp-sub">${a(e.operator||"")}</div>
        </td>
        <td>${s}</td>
        <td>${a(Me(e))}</td>
        <td>${_e(e.publicBadge)}</td>
      </tr>`}renderDrawer(){var r,c;if(this.detailLoading)return'<div class="pp-drawer"><button class="pp-drawer-close" aria-label="Close">✕</button>Loading…</div>';const e=(r=this.detail)==null?void 0:r.pipeline;if(!e)return'<div class="pp-drawer"><button class="pp-drawer-close" aria-label="Close">✕</button>Pipeline detail unavailable.</div>';const t=e.evidence,s=((t==null?void 0:t.sanctionRefs)??[]).map(d=>{const p=Q(d.url||""),f=a(d.date||"source"),u=p?`<a href="${p}" target="_blank" rel="noopener">${f}</a>`:f;return`
      <div class="pp-ev-item">
        <strong>${a(d.authority)}</strong> ${a(d.listId||"")} ·
        ${u}
      </div>`}).join(""),n=(c=t==null?void 0:t.operatorStatement)!=null&&c.text?(()=>{var f,u;const d=Q(((f=t.operatorStatement)==null?void 0:f.url)||""),p=d?`· <a href="${d}" target="_blank" rel="noopener">${a(((u=t.operatorStatement)==null?void 0:u.date)||"source")}</a>`:"";return`<div class="pp-ev-item"><strong>Operator:</strong> ${a(t.operatorStatement.text)}
           ${p}
         </div>`})():"",l=e.transitCountries.length>0?` via ${e.transitCountries.map(d=>a(d)).join(", ")}`:"";return`
      <div class="pp-drawer">
        <button class="pp-drawer-close" aria-label="Close">✕</button>
        <h3>${a(e.name)} ${_e(e.publicBadge)}</h3>
        <div class="pp-kv">
          <div class="pp-kv-key">Operator</div>   <div>${a(e.operator)}</div>
          <div class="pp-kv-key">Commodity</div>  <div>${a(e.commodityType)}</div>
          <div class="pp-kv-key">Route</div>      <div>${a(e.fromCountry)} → ${a(e.toCountry)}${l}</div>
          <div class="pp-kv-key">Capacity</div>   <div>${a(Me(e))}</div>
          <div class="pp-kv-key">Length</div>     <div>${e.lengthKm>0?`${e.lengthKm.toLocaleString()} km`:"—"}</div>
          <div class="pp-kv-key">In service</div> <div>${e.inService>0?a(String(e.inService)):"—"}</div>
        </div>
        <div class="pp-evidence">
          <div class="pp-sub" style="margin-bottom:6px">Evidence</div>
          <div class="pp-ev-item">
            <strong>Physical state:</strong> ${a((t==null?void 0:t.physicalState)||"unknown")}
            (source: ${a((t==null?void 0:t.physicalStateSource)||"unknown")})
          </div>
          <div class="pp-ev-item"><strong>Commercial:</strong> ${a((t==null?void 0:t.commercialState)||"unknown")}</div>
          ${n}
          ${s}
          ${t!=null&&t.classifierVersion?`<div class="pp-ev-item pp-sub">Classifier ${a(t.classifierVersion)} · confidence ${Math.round((t.classifierConfidence??0)*100)}%</div>`:""}
        </div>
        ${this.renderDisruptionTimeline()}
      </div>`}}const ki=Object.freeze(Object.defineProperty({__proto__:null,PipelineStatusPanel:ns},Symbol.toStringTag,{value:"Module"})),be=N(()=>new J(I(),{fetch:W})),Fe={operational:"#2ecc71",reduced:"#f39c12",offline:"#e74c3c",disputed:"#9b59b6"},rs={ugs:"🟢",spr:"🛢️",lng_export:"🚢",lng_import:"⚓",crude_tank_farm:"🟡"},Re={ugs:"UGS",spr:"SPR",lng_export:"LNG export",lng_import:"LNG import",crude_tank_farm:"Crude hub"};function os(o){return o.charAt(0).toUpperCase()+o.slice(1)}function Le(o){const i=o&&Fe[o]?o:"disputed";return`<span class="sf-badge" style="background:${Fe[i]??"#7f8c8d"}">${a(os(i))}</span>`}function Ie(o){return o.facilityType==="ugs"&&typeof o.capacityTwh=="number"&&o.capacityTwh>0?`${o.capacityTwh.toFixed(1)} TWh`:(o.facilityType==="lng_export"||o.facilityType==="lng_import")&&typeof o.capacityMtpa=="number"&&o.capacityMtpa>0?`${o.capacityMtpa.toFixed(1)} Mtpa`:(o.facilityType==="spr"||o.facilityType==="crude_tank_farm")&&typeof o.capacityMb=="number"&&o.capacityMb>0?`${o.capacityMb.toLocaleString()} Mb`:"—"}function ls(o){if(!o||typeof o!="object")return null;const i=o,e=typeof i.id=="string"?i.id:"";if(!e)return null;const t=(u,h="")=>typeof u=="string"?u:h,s=(u,h=0)=>typeof u=="number"&&Number.isFinite(u)?u:h,n=(u,h=!1)=>typeof u=="boolean"?u:h,l=u=>{if(u&&typeof u=="object"&&!Array.isArray(u)){const h=u;return{lat:s(h.lat),lon:s(h.lon)}}return{lat:0,lon:0}},r=i.evidence,c=r&&typeof r.operatorStatement=="object"&&r.operatorStatement?{text:t(r.operatorStatement.text),url:t(r.operatorStatement.url),date:t(r.operatorStatement.date)}:void 0,d=Array.isArray(r==null?void 0:r.sanctionRefs)?r.sanctionRefs.map(u=>{const h=u??{};return{authority:t(h.authority),listId:t(h.listId),date:t(h.date),url:t(h.url)}}):[],p=r?{physicalState:t(r.physicalState,"unknown"),physicalStateSource:t(r.physicalStateSource,"operator"),operatorStatement:c,commercialState:t(r.commercialState,"unknown"),sanctionRefs:d,fillDisclosed:n(r.fillDisclosed),fillSource:t(r.fillSource),lastEvidenceUpdate:t(r.lastEvidenceUpdate),classifierVersion:t(r.classifierVersion,"v1"),classifierConfidence:s(r.classifierConfidence,0)}:void 0,f=wt(p);return{id:e,name:t(i.name),operator:t(i.operator),facilityType:t(i.facilityType),country:t(i.country),location:l(i.location),capacityTwh:s(i.capacityTwh),capacityMb:s(i.capacityMb),capacityMtpa:s(i.capacityMtpa),workingCapacityUnit:t(i.workingCapacityUnit),inService:s(i.inService),evidence:p,publicBadge:f}}function cs(o){if(!(o!=null&&o.facilities))return null;const i=[];for(const e of Object.values(o.facilities)){const t=ls(e);t&&i.push(t)}return i.length===0?null:{facilities:i,fetchedAt:o.updatedAt??"",classifierVersion:o.classifierVersion??"v1",upstreamUnavailable:!1}}class ds extends D{constructor(){super({id:"storage-facility-map",title:"Strategic Storage Atlas",defaultRowSpan:2,infoTooltip:"Curated registry of strategic storage assets — underground gas storage, strategic petroleum reserves, LNG terminals, crude tank farms. Public badge is derived from evidence (operator statements, sanction refs, commercial state, physical signals) — see /docs/methodology/storage for the classifier spec."});y(this,"data",null);y(this,"selectedId",null);y(this,"detail",null);y(this,"detailLoading",!1);y(this,"detailEvents");y(this,"usedHydrationPaint",!1);y(this,"openDetailHandler",e=>{var s,n;const t=(s=e.detail)==null?void 0:s.facilityId;!t||!((n=this.element)!=null&&n.isConnected)||this.loadDetail(t)});y(this,"handleContentClick",e=>{const t=e.target;if(!t)return;if(t.closest(".sf-drawer-close")){this.closeDetail();return}const s=t.closest("tr.sf-row");if(!s||!this.content.contains(s))return;const n=s.dataset.facilityId;n&&this.loadDetail(n)});typeof window<"u"&&window.addEventListener("energy:open-storage-facility-detail",this.openDetailHandler),this.content.addEventListener("click",this.handleContentClick),de(this.content,".sf-row")}destroy(){var e;typeof window<"u"&&window.removeEventListener("energy:open-storage-facility-detail",this.openDetailHandler),(e=super.destroy)==null||e.call(this)}async fetchData(){var e,t,s,n;try{let{registry:l}=bt();l?this.usedHydrationPaint&&(l=(await Te({refresh:!0})).registry):l=(await Te({refresh:this.usedHydrationPaint})).registry;const r=cs(l);if(r){const p=()=>{this.data=r,this.render()};if(!((e=this.element)!=null&&e.isConnected)){this.runWhenConnected(p),this.usedHydrationPaint=!0;return}p(),this.usedHydrationPaint=!0;return}const c=await be().listStorageFacilities({facilityType:""});if((t=c.facilities)!=null&&t.length&&!c.upstreamUnavailable){const p=Object.fromEntries(c.facilities.map(f=>[f.id,f]));xt({facilities:p,classifierVersion:c.classifierVersion,updatedAt:c.fetchedAt}),this.usedHydrationPaint=!0}const d=()=>{var p;if(c.upstreamUnavailable||!((p=c.facilities)!=null&&p.length)){this.showError("Storage registry unavailable",()=>void this.fetchData());return}this.data=c,this.render()};if(!((s=this.element)!=null&&s.isConnected)){this.runWhenConnected(d);return}d()}catch(l){if(this.isAbortError(l))return;const r=()=>{this.showError("Storage registry error",()=>void this.fetchData())};if(!((n=this.element)!=null&&n.isConnected)){this.runWhenConnected(r);return}r()}}async loadDetail(e){var t,s;this.selectedId=e,this.detailLoading=!0,this.detailEvents=void 0,this.render();try{const[n,l]=await Promise.all([be().getStorageFacilityDetail({facilityId:e}),be().listEnergyDisruptions({assetId:e,assetType:"storage",ongoingOnly:!1})]);if(!((t=this.element)!=null&&t.isConnected)||this.selectedId!==e)return;this.detail=n,this.detailEvents=(l==null?void 0:l.events)??[],this.detailLoading=!1,this.render()}catch{if(!((s=this.element)!=null&&s.isConnected)||this.selectedId!==e)return;this.detailLoading=!1,this.detail=null,this.render()}}closeDetail(){this.selectedId=null,this.detail=null,this.detailEvents=void 0,this.render()}renderDisruptionTimeline(){if(this.detailEvents===void 0)return"";if(this.detailEvents.length===0)return`<div class="sf-evidence">
        <div class="sf-sub" style="margin-bottom:6px">Disruption timeline</div>
        <div class="sf-ev-item sf-sub">No disruption events on file for this asset.</div>
      </div>`;const e=this.detailEvents.map(t=>{const s=a(we(t.startAt,t.endAt)),n=Ce(t.capacityOfflineBcmYr,t.capacityOfflineMbd),l=n?` · ${a(n)} offline`:"",r=t.causeChain&&t.causeChain.length>0?` · ${a(t.causeChain.join(" → "))}`:"";return`<div class="sf-ev-item">
        <strong>${a(t.eventType||"event")}</strong> · ${s}${l}${r}
        <div class="sf-sub" style="margin-top:2px">${a(t.shortDescription||"")}</div>
      </div>`}).join("");return`<div class="sf-evidence">
      <div class="sf-sub" style="margin-bottom:6px">Disruption timeline (${this.detailEvents.length})</div>
      ${e}
    </div>`}render(){if(!this.data)return;const e=[...this.data.facilities].sort((n,l)=>{const r=n.publicBadge==="operational"?1:0,c=l.publicBadge==="operational"?1:0;return r!==c?r-c:n.facilityType!==l.facilityType?n.facilityType.localeCompare(l.facilityType):n.name.localeCompare(l.name)}).map(n=>this.renderRow(n)).join(""),t=ee({sourceType:"classifier",method:"evidence → badge (deterministic)",sampleSize:this.data.facilities.length,sampleLabel:"facilities",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Global Energy Monitor (CC-BY 4.0) / GIE AGSI+ / EIA",creditUrl:"https://globalenergymonitor.org/"}),s=this.selectedId?this.renderDrawer():"";this.setSafeContent(E(`
      <div class="sf-wrap">
        <table class="sf-table">
          <thead>
            <tr>
              <th scope="col">Facility</th>
              <th scope="col">Country · Type</th>
              <th scope="col">Capacity</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
        ${t}
        ${s}
      </div>
      ${te}
      <style>
        .sf-wrap { position: relative; font-size: calc(11px * var(--wm-panel-effective-scale, 1)); }
        .sf-table { width: 100%; border-collapse: collapse; }
        .sf-table th { text-align: left; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-dim, #888); padding: 4px 6px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .sf-table td { padding: 6px; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .sf-table tr.sf-row { cursor: pointer; }
        .sf-table tr.sf-row:hover td { background: rgba(255,255,255,0.03); }
        .sf-name { font-weight: 600; color: var(--text, #eee); }
        .sf-sub  { font-size: calc(9px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; }
        .sf-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .sf-drawer { position: absolute; inset: 0; background: var(--panel-bg, #0f1218); padding: 12px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; }
        .sf-drawer-close { position: absolute; top: 8px; right: 10px; background: transparent; border: 0; color: var(--text-dim, #888); cursor: pointer; font-size: calc(14px * var(--wm-panel-effective-scale, 1)); }
        .sf-drawer h3 { margin: 0 0 6px 0; font-size: calc(13px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); }
        .sf-drawer .sf-kv { display: grid; grid-template-columns: 120px 1fr; gap: 4px 10px; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); margin-bottom: 10px; }
        .sf-drawer .sf-kv-key { color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); padding-top: 2px; }
        .sf-evidence { margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); }
        .sf-ev-item { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); margin-bottom: 6px; }
        .sf-ev-item a { color: #4ade80; text-decoration: none; }
        .sf-ev-item a:hover { text-decoration: underline; }
      </style>
    `,"legacy Panel.setContent() migration"))}renderRow(e){const t=rs[e.facilityType]??"🔹",s=Re[e.facilityType]??e.facilityType;return`
      <tr class="sf-row" data-facility-id="${a(e.id)}" tabindex="${this.selectedId?"-1":"0"}">
        <td>
          <div class="sf-name">${t} ${a(e.name)}</div>
          <div class="sf-sub">${a(e.operator||"")}</div>
        </td>
        <td>${a(e.country)} · ${a(s)}</td>
        <td>${a(Ie(e))}</td>
        <td>${Le(e.publicBadge)}</td>
      </tr>`}renderDrawer(){var c,d,p,f;if(this.detailLoading)return'<div class="sf-drawer"><button class="sf-drawer-close" aria-label="Close">✕</button>Loading…</div>';const e=(c=this.detail)==null?void 0:c.facility;if(!e)return'<div class="sf-drawer"><button class="sf-drawer-close" aria-label="Close">✕</button>Facility detail unavailable.</div>';const t=e.evidence,s=((t==null?void 0:t.sanctionRefs)??[]).map(u=>{const h=Q(u.url||""),v=a(u.date||"source"),$=h?`<a href="${h}" target="_blank" rel="noopener">${v}</a>`:v;return`
      <div class="sf-ev-item">
        <strong>${a(u.authority)}</strong> ${a(u.listId||"")} ·
        ${$}
      </div>`}).join(""),n=(d=t==null?void 0:t.operatorStatement)!=null&&d.text?(()=>{var v,$;const u=Q(((v=t.operatorStatement)==null?void 0:v.url)||""),h=u?`· <a href="${u}" target="_blank" rel="noopener">${a((($=t.operatorStatement)==null?void 0:$.date)||"source")}</a>`:"";return`<div class="sf-ev-item"><strong>Operator:</strong> ${a(t.operatorStatement.text)}
           ${h}
         </div>`})():"",l=t!=null&&t.fillDisclosed?`<div class="sf-ev-item"><strong>Fill levels:</strong> disclosed via ${a(t.fillSource||"—")}</div>`:'<div class="sf-ev-item"><strong>Fill levels:</strong> not publicly disclosed</div>',r=Re[e.facilityType]??e.facilityType;return`
      <div class="sf-drawer">
        <button class="sf-drawer-close" aria-label="Close">✕</button>
        <h3>${a(e.name)} ${Le(e.publicBadge)}</h3>
        <div class="sf-kv">
          <div class="sf-kv-key">Operator</div>   <div>${a(e.operator)}</div>
          <div class="sf-kv-key">Type</div>       <div>${a(r)}</div>
          <div class="sf-kv-key">Country</div>    <div>${a(e.country)}</div>
          <div class="sf-kv-key">Capacity</div>   <div>${a(Ie(e))}</div>
          <div class="sf-kv-key">Location</div>   <div>${(((p=e.location)==null?void 0:p.lat)??0).toFixed(3)}°, ${(((f=e.location)==null?void 0:f.lon)??0).toFixed(3)}°</div>
          <div class="sf-kv-key">In service</div> <div>${e.inService>0?a(String(e.inService)):"—"}</div>
        </div>
        <div class="sf-evidence">
          <div class="sf-sub" style="margin-bottom:6px">Evidence</div>
          <div class="sf-ev-item">
            <strong>Physical state:</strong> ${a((t==null?void 0:t.physicalState)||"unknown")}
            (source: ${a((t==null?void 0:t.physicalStateSource)||"unknown")})
          </div>
          <div class="sf-ev-item"><strong>Commercial:</strong> ${a((t==null?void 0:t.commercialState)||"unknown")}</div>
          ${l}
          ${n}
          ${s}
          ${t!=null&&t.classifierVersion?`<div class="sf-ev-item sf-sub">Classifier ${a(t.classifierVersion)} · confidence ${Math.round((t.classifierConfidence??0)*100)}%</div>`:""}
        </div>
        ${this.renderDisruptionTimeline()}
      </div>`}}const Ei=Object.freeze(Object.defineProperty({__proto__:null,StorageFacilityMapPanel:ds},Symbol.toStringTag,{value:"Module"})),xe=N(()=>new J(I(),{fetch:W})),ps={confirmed:"#e74c3c",watch:"#f39c12"},us={petrol:"⛽",diesel:"🛢️",jet:"✈️",heating_oil:"🔥"},fs={strong:"●●●",moderate:"●●○",thin:"●○○"};function je(o){const i=ps[o]??"#7f8c8d",e=o.charAt(0).toUpperCase()+o.slice(1);return`<span class="fs-badge" style="background:${i}">${a(e)}</span>`}function hs(o){if(!o||typeof o!="object")return null;const i=o,e=typeof i.id=="string"?i.id:"";if(!e)return null;const t=(c,d="")=>typeof c=="string"?c:d,s=(c,d=0)=>typeof c=="number"&&Number.isFinite(c)?c:d,n=i.evidence??null,l=Array.isArray(n==null?void 0:n.evidenceSources)?n.evidenceSources.map(c=>{const d=c??{};return{authority:t(d.authority),title:t(d.title),url:t(d.url),date:t(d.date),sourceType:t(d.sourceType)}}):[],r=n?{evidenceSources:l,firstRegulatorConfirmation:t(n.firstRegulatorConfirmation),classifierVersion:t(n.classifierVersion,"v1"),classifierConfidence:s(n.classifierConfidence,0),lastEvidenceUpdate:t(n.lastEvidenceUpdate)}:void 0;return{id:e,country:t(i.country),product:t(i.product),severity:t(i.severity,"watch"),firstSeen:t(i.firstSeen),lastConfirmed:t(i.lastConfirmed),resolvedAt:typeof i.resolvedAt=="string"?i.resolvedAt:"",impactTypes:Array.isArray(i.impactTypes)?i.impactTypes.map(c=>t(c)).filter(c=>c.length>0):[],causeChain:Array.isArray(i.causeChain)?i.causeChain.map(c=>t(c)).filter(c=>c.length>0):[],shortDescription:t(i.shortDescription),evidence:r}}function ms(o){if(!(o!=null&&o.shortages))return null;const i=[];for(const e of Object.values(o.shortages)){const t=hs(e);t&&i.push(t)}return i.length===0?null:{shortages:i,fetchedAt:o.updatedAt??"",classifierVersion:o.classifierVersion??"v1",upstreamUnavailable:!1}}class gs extends D{constructor(){super({id:"fuel-shortages",title:"Global Fuel Shortage Registry",defaultRowSpan:2,infoTooltip:"Global fuel-shortage alert registry (petrol, diesel, jet, heating oil). Severity (confirmed / watch) is a classifier output, not a client derivation. Every row carries the full evidence source list — see /docs/methodology/shortages for the threshold spec + classifier version."});y(this,"data",null);y(this,"selectedId",null);y(this,"detail",null);y(this,"detailLoading",!1);y(this,"openDetailHandler",e=>{var s,n;const t=(s=e.detail)==null?void 0:s.shortageId;!t||!((n=this.element)!=null&&n.isConnected)||this.loadDetail(t)});y(this,"handleContentClick",e=>{const t=e.target;if(!t)return;if(t.closest(".fs-drawer-close")){this.closeDetail();return}const s=t.closest("tr.fs-row");if(!s||!this.content.contains(s))return;const n=s.dataset.shortageId;n&&this.loadDetail(n)});typeof window<"u"&&window.addEventListener("energy:open-fuel-shortage-detail",this.openDetailHandler),this.content.addEventListener("click",this.handleContentClick),de(this.content,".fs-row")}destroy(){var e;typeof window<"u"&&window.removeEventListener("energy:open-fuel-shortage-detail",this.openDetailHandler),(e=super.destroy)==null||e.call(this)}async fetchData(){var e,t,s;try{const{registry:n}=St(),l=ms(n);if(l){this.data=l,this.render(),xe().listFuelShortages({country:"",product:"",severity:""}).then(d=>{var f,u;if(!((f=this.element)!=null&&f.isConnected)||!((u=d==null?void 0:d.shortages)!=null&&u.length))return;this.data=d,this.render();const p=Object.fromEntries(d.shortages.map(h=>[h.id,h]));Pe({shortages:p,classifierVersion:d.classifierVersion,updatedAt:d.fetchedAt})}).catch(()=>{});return}const r=await xe().listFuelShortages({country:"",product:"",severity:""});if(!((e=this.element)!=null&&e.isConnected))return;if(r.upstreamUnavailable||!((t=r.shortages)!=null&&t.length)){this.showError("Fuel shortage registry unavailable",()=>void this.fetchData());return}this.data=r,this.render();const c=Object.fromEntries(r.shortages.map(d=>[d.id,d]));Pe({shortages:c,classifierVersion:r.classifierVersion,updatedAt:r.fetchedAt})}catch(n){if(this.isAbortError(n)||!((s=this.element)!=null&&s.isConnected))return;this.showError("Fuel shortage registry error",()=>void this.fetchData())}}async loadDetail(e){var t,s;this.selectedId=e,this.detailLoading=!0,this.render();try{const n=await xe().getFuelShortageDetail({shortageId:e});if(!((t=this.element)!=null&&t.isConnected)||this.selectedId!==e)return;this.detail=n,this.detailLoading=!1,this.render()}catch{if(!((s=this.element)!=null&&s.isConnected)||this.selectedId!==e)return;this.detailLoading=!1,this.detail=null,this.render()}}closeDetail(){this.selectedId=null,this.detail=null,this.render()}render(){if(!this.data)return;const e=[...this.data.shortages].sort((c,d)=>{const p=c.severity==="confirmed"?0:1,f=d.severity==="confirmed"?0:1;if(p!==f)return p-f;const u=le(c.evidence),h=le(d.evidence),v={strong:0,moderate:1,thin:2};return v[u]!==v[h]?v[u]-v[h]:d.lastConfirmed.localeCompare(c.lastConfirmed)}).map(c=>this.renderRow(c)).join(""),t=this.data.shortages.filter(c=>c.severity==="confirmed").length,s=this.data.shortages.filter(c=>c.severity==="watch").length,n=`${t} confirmed · ${s} watch`,l=ee({sourceType:"classifier",method:"evidence-threshold + LLM double-check",sampleSize:this.data.shortages.length,sampleLabel:"active shortages",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Regulator advisories + IEA + major wire",creditUrl:"/docs/methodology/shortages"}),r=this.selectedId?this.renderDrawer():"";this.setSafeContent(E(`
      <div class="fs-wrap">
        <div class="fs-summary">${a(n)}</div>
        <table class="fs-table">
          <thead>
            <tr>
              <th scope="col">Country · Product</th>
              <th scope="col">Since</th>
              <th scope="col">Evidence</th>
              <th scope="col">Severity</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
        ${l}
        ${r}
      </div>
      ${te}
      <style>
        .fs-wrap { position: relative; font-size: calc(11px * var(--wm-panel-effective-scale, 1)); }
        .fs-summary { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; margin: 4px 0 6px 0; }
        .fs-table { width: 100%; border-collapse: collapse; }
        .fs-table th { text-align: left; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-dim, #888); padding: 4px 6px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .fs-table td { padding: 6px; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .fs-table tr.fs-row { cursor: pointer; }
        .fs-table tr.fs-row:hover td { background: rgba(255,255,255,0.03); }
        .fs-name { font-weight: 600; color: var(--text, #eee); }
        .fs-sub  { font-size: calc(9px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; }
        .fs-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .fs-quality { font-family: monospace; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); }
        .fs-drawer { position: absolute; inset: 0; background: var(--panel-bg, #0f1218); padding: 12px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; }
        .fs-drawer-close { position: absolute; top: 8px; right: 10px; background: transparent; border: 0; color: var(--text-dim, #888); cursor: pointer; font-size: calc(14px * var(--wm-panel-effective-scale, 1)); }
        .fs-drawer h3 { margin: 0 0 6px 0; font-size: calc(13px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); }
        .fs-drawer .fs-kv { display: grid; grid-template-columns: 120px 1fr; gap: 4px 10px; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); margin-bottom: 10px; }
        .fs-drawer .fs-kv-key { color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); padding-top: 2px; }
        .fs-source-list { margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); }
        .fs-src-item { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); margin-bottom: 6px; }
        .fs-src-item a { color: #4ade80; text-decoration: none; }
        .fs-src-item a:hover { text-decoration: underline; }
        .fs-src-type { display: inline-block; padding: 1px 6px; border-radius: 8px; font-size: calc(8px * var(--wm-panel-effective-scale, 1)); font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; background: rgba(255,255,255,0.08); color: var(--text-dim, #aaa); margin-right: 4px; }
        .fs-src-type-regulator { background: #2980b9; color: #fff; }
        .fs-src-type-operator { background: #27ae60; color: #fff; }
        .fs-src-type-press { background: #555; color: #ccc; }
      </style>
    `,"legacy Panel.setContent() migration"))}renderRow(e){const t=us[e.product]??"•",s=le(e.evidence);return`
      <tr class="fs-row" data-shortage-id="${a(e.id)}" tabindex="${this.selectedId?"-1":"0"}">
        <td>
          <div class="fs-name">${t} ${a(e.country)} · ${a(e.product)}</div>
          <div class="fs-sub">${a(e.causeChain.join(" · ")||"—")}</div>
        </td>
        <td>${a(e.firstSeen.slice(0,10))}</td>
        <td><span class="fs-quality" title="Evidence quality: ${a(s)}">${fs[s]}</span></td>
        <td>${je(e.severity)}</td>
      </tr>`}renderDrawer(){var r;if(this.detailLoading)return'<div class="fs-drawer"><button class="fs-drawer-close" aria-label="Close">✕</button>Loading…</div>';const e=(r=this.detail)==null?void 0:r.shortage;if(!e)return'<div class="fs-drawer"><button class="fs-drawer-close" aria-label="Close">✕</button>Shortage detail unavailable.</div>';const t=e.evidence,s=Ct(t==null?void 0:t.evidenceSources),n=le(t),l=((t==null?void 0:t.evidenceSources)??[]).map(c=>{const d=Q(c.url||""),p=a(c.title||c.authority||"source"),f=d?`<a href="${d}" target="_blank" rel="noopener">${p}</a>`:p;return`
      <div class="fs-src-item">
        <span class="fs-src-type ${`fs-src-type-${a(c.sourceType||"other")}`}">${a(c.sourceType||"other")}</span>
        <strong>${a(c.authority||"")}</strong> · ${f} · ${a(c.date.slice(0,10))}
      </div>`}).join("");return`
      <div class="fs-drawer">
        <button class="fs-drawer-close" aria-label="Close">✕</button>
        <h3>${a(e.country)} · ${a(e.product)} ${je(e.severity)}</h3>
        <div class="fs-kv">
          <div class="fs-kv-key">Description</div>  <div>${a(e.shortDescription)}</div>
          <div class="fs-kv-key">First seen</div>   <div>${a(e.firstSeen.slice(0,10))}</div>
          <div class="fs-kv-key">Last confirmed</div><div>${a(e.lastConfirmed.slice(0,10))}</div>
          <div class="fs-kv-key">Resolved</div>     <div>${e.resolvedAt?a(e.resolvedAt.slice(0,10)):"Active"}</div>
          <div class="fs-kv-key">Impact</div>       <div>${a(e.impactTypes.join(", ")||"—")}</div>
          <div class="fs-kv-key">Cause chain</div>  <div>${a(e.causeChain.join(" → ")||"—")}</div>
          <div class="fs-kv-key">Evidence</div>     <div>${s.authoritative} regulator/operator · ${s.press} press · quality: ${a(n)}</div>
          ${t!=null&&t.classifierVersion?`<div class="fs-kv-key">Classifier</div><div>${a(t.classifierVersion)} · confidence ${Math.round((t.classifierConfidence??0)*100)}%</div>`:""}
        </div>
        <div class="fs-source-list">
          <div class="fs-sub" style="margin-bottom:6px">Evidence sources (${((t==null?void 0:t.evidenceSources)??[]).length})</div>
          ${l||'<div class="fs-src-item">No sources on file.</div>'}
        </div>
      </div>`}}const Ai=Object.freeze(Object.defineProperty({__proto__:null,FuelShortagePanel:gs},Symbol.toStringTag,{value:"Module"})),vs=N(()=>new J(I(),{fetch:W})),ys={sabotage:"💥",sanction:"🚫",maintenance:"🔧",mechanical:"⚙️",weather:"🌀",commercial:"💼",war:"⚔️",other:"•"},Be={ongoing:"#e74c3c",resolved:"#7f8c8d",unknown:"#95a5a6"},bs=[{key:"",label:"All events"},{key:"sabotage",label:"Sabotage"},{key:"sanction",label:"Sanction"},{key:"mechanical",label:"Mechanical"},{key:"maintenance",label:"Maintenance"},{key:"war",label:"War"},{key:"weather",label:"Weather"},{key:"commercial",label:"Commercial"},{key:"other",label:"Other"}];function xs(o){const i=Be[o]??Be.unknown,e=o.charAt(0).toUpperCase()+o.slice(1);return`<span class="ed-badge" style="background:${i}">${a(e)}</span>`}class $s extends D{constructor(){super({id:"energy-disruptions",title:"Energy Disruptions Log",defaultRowSpan:2,infoTooltip:"Curated log of disruption events affecting oil & gas pipelines and storage facilities — sabotage, sanctions, maintenance, mechanical, weather, war, commercial. Each event ties back to a seeded asset; click a row to jump to the pipeline / storage panel with that event highlighted. See /docs/methodology/disruptions for the schema."});y(this,"data",null);y(this,"activeTypeFilter","");y(this,"ongoingOnly",!1);y(this,"handleContentClick",e=>{const t=e.target;if(!t)return;const s=t.closest("[data-filter-type]");if(s){this.setTypeFilter(s.dataset.filterType??"");return}if(t.closest("[data-toggle-ongoing]")){this.toggleOngoingOnly();return}const l=t.closest("tr.ed-row");if(l){const r=l.dataset.eventId,c=l.dataset.assetId,d=l.dataset.assetType;r&&c&&d&&this.dispatchOpenAsset(r,c,d)}});this.content.addEventListener("click",this.handleContentClick),de(this.content,".ed-row")}async fetchData(){var e,t;try{const s=await vs().listEnergyDisruptions({assetId:"",assetType:"",ongoingOnly:!1});if(!((e=this.element)!=null&&e.isConnected))return;if(s.upstreamUnavailable){this.showError("Energy disruptions log unavailable",()=>void this.fetchData());return}this.data=s,this.render()}catch(s){if(this.isAbortError(s)||!((t=this.element)!=null&&t.isConnected))return;this.showError("Energy disruptions log error",()=>void this.fetchData())}}setTypeFilter(e){this.activeTypeFilter=e,this.render()}toggleOngoingOnly(){this.ongoingOnly=!this.ongoingOnly,this.render()}filterEvents(){if(!this.data)return[];let e=this.data.events;return this.activeTypeFilter&&(e=e.filter(t=>t.eventType===this.activeTypeFilter)),this.ongoingOnly&&(e=e.filter(t=>!t.endAt)),[...e].sort((t,s)=>s.startAt.localeCompare(t.startAt))}render(){if(!this.data)return;const e=this.filterEvents(),t=e.map(f=>this.renderRow(f)).join(""),s=this.data.events.length,n=this.data.events.filter(f=>!f.endAt).length,l=e.length,r=this.activeTypeFilter||this.ongoingOnly?`${l} shown · ${s} total · ${n} ongoing`:`${s} events · ${n} ongoing`,c=bs.map(f=>`<button class="ed-chip${f.key===this.activeTypeFilter?" ed-chip-active":""}" data-filter-type="${a(f.key)}">${a(f.label)}</button>`).join(""),d=`<button class="ed-chip${this.ongoingOnly?" ed-chip-active":""}" data-toggle-ongoing>Ongoing only</button>`,p=ee({sourceType:"classifier",method:"curated event log",sampleSize:s,sampleLabel:"disruption events",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Operator press + regulator filings + OFAC/EU sanctions + major wire",creditUrl:"/docs/methodology/disruptions"});this.setSafeContent(E(`
      <div class="ed-wrap">
        <div class="ed-summary">${a(r)}</div>
        <div class="ed-filters">${c}${d}</div>
        <table class="ed-table">
          <thead>
            <tr>
              <th scope="col">Event</th>
              <th scope="col">Asset</th>
              <th scope="col">Window</th>
              <th scope="col">Offline</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>${t||'<tr><td colspan="5" class="ed-empty">No events match the current filter.</td></tr>'}</tbody>
        </table>
        ${p}
      </div>
      ${te}
      <style>
        .ed-wrap { font-size: calc(11px * var(--wm-panel-effective-scale, 1)); }
        .ed-summary { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; margin: 4px 0 6px 0; }
        .ed-filters { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
        .ed-chip { background: rgba(255,255,255,0.04); color: var(--text-dim, #aaa); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 2px 8px; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); cursor: pointer; }
        .ed-chip:hover { background: rgba(255,255,255,0.08); color: var(--text, #eee); }
        .ed-chip-active { background: #2980b9; border-color: #2980b9; color: #fff; }
        .ed-chip-active:hover { background: #2471a3; }
        .ed-table { width: 100%; border-collapse: collapse; }
        .ed-table th { text-align: left; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-dim, #888); padding: 4px 6px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .ed-table td { padding: 6px; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: top; }
        .ed-row { cursor: pointer; }
        .ed-row:hover td { background: rgba(255,255,255,0.03); }
        .ed-event { font-weight: 600; color: var(--text, #eee); }
        .ed-sub { font-size: calc(9px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; }
        .ed-asset-type { display: inline-block; padding: 1px 6px; border-radius: 8px; font-size: calc(8px * var(--wm-panel-effective-scale, 1)); font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; background: rgba(255,255,255,0.08); color: var(--text-dim, #aaa); margin-right: 4px; }
        .ed-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .ed-empty { text-align: center; color: var(--text-dim, #888); padding: 20px; font-style: italic; }
        .ed-offline { font-family: monospace; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); }
      </style>
    `,"legacy Panel.setContent() migration"))}dispatchOpenAsset(e,t,s){const n=s==="storage"?{facilityId:t}:{pipelineId:t},l=s==="storage"?"energy:open-storage-facility-detail":"energy:open-pipeline-detail";window.dispatchEvent(new CustomEvent(l,{detail:n}))}renderRow(e){const t=ys[e.eventType]??"•",s=ft({startAt:e.startAt,endAt:e.endAt||void 0}),n=we(e.startAt,e.endAt||void 0),l=Ce(e.capacityOfflineBcmYr,e.capacityOfflineMbd),r=e.causeChain.join(" → ")||"—";return`
      <tr class="ed-row" tabindex="0"
          data-event-id="${a(e.id)}"
          data-asset-id="${a(e.assetId)}"
          data-asset-type="${a(e.assetType)}">
        <td>
          <div class="ed-event">${t} ${a(e.eventType)}</div>
          <div class="ed-sub">${a(e.shortDescription)}</div>
          <div class="ed-sub">${a(r)}</div>
        </td>
        <td>
          <span class="ed-asset-type">${a(e.assetType)}</span>
          <span class="ed-asset-id">${a(e.assetId)}</span>
        </td>
        <td>${a(n)}</td>
        <td><span class="ed-offline">${a(l||"—")}</span></td>
        <td>${xs(s)}</td>
      </tr>`}}const Ti=Object.freeze(Object.defineProperty({__proto__:null,EnergyDisruptionsPanel:$s},Symbol.toStringTag,{value:"Module"})),ws=N(()=>new J(I(),{fetch:W})),Cs="BZ=F",Ss=[{symbol:Cs,name:"Brent Crude",display:"BRENT"}],Ge="2026-02-23",ks=(()=>{try{return Ge}catch{return Ge}})(),Ue=Date.parse(`${ks}T00:00:00Z`),Es={closed:"#e74c3c",disrupted:"#e74c3c",restricted:"#f39c12",open:"#27ae60"},As={closed:"Closed",disrupted:"Disrupted",restricted:"Restricted",open:"Open"},Ts={hormuz:{status:"pending"},euGas:{status:"pending"},brent:{status:"pending"},activeDisruptions:{status:"pending"}};class Ps extends D{constructor(){super({id:"energy-risk-overview",title:"Global Energy Risk Overview",defaultRowSpan:1,infoTooltip:"Consolidated executive view: Strait of Hormuz vessel status, EU gas storage fill, Brent crude price + 1-day change, active disruption count, data freshness, and a configurable crisis-day counter. Each tile renders independently; one source failing does not block the others."});y(this,"state",Ts);y(this,"freshnessTickHandle",null)}destroy(){var e;this.freshnessTickHandle!==null&&(clearInterval(this.freshnessTickHandle),this.freshnessTickHandle=null),(e=super.destroy)==null||e.call(this)}async fetchData(){var l;const[e,t,s,n]=await Promise.allSettled([qe(),at(),kt(Ss),ws().listEnergyDisruptions({assetId:"",assetType:"",ongoingOnly:!0})]);this.state=Et(e,t,s,n,Date.now()),(l=this.element)!=null&&l.isConnected&&(this.render(),this.freshnessTickHandle===null&&(this.freshnessTickHandle=setInterval(()=>{var r;(r=this.element)!=null&&r.isConnected&&this.render()},6e4)))}render(){Ds();const e=`
      <div class="ero-grid">
        ${this.renderHormuzTile()}
        ${this.renderEuGasTile()}
        ${this.renderBrentTile()}
        ${this.renderActiveDisruptionsTile()}
        ${this.renderFreshnessTile()}
        ${this.renderCrisisDayTile()}
      </div>
    `;this.setSafeContent(E(e,"legacy Panel.setContent() migration"))}renderHormuzTile(){const e=this.state.hormuz;if(e.status!=="fulfilled"||!e.value)return A("Hormuz","—","#7f8c8d",'data-degraded="true"');const t=e.value.status,s=Es[t]??"#7f8c8d",n=As[t]??e.value.status;return A("Hormuz",n,s)}renderEuGasTile(){const e=this.state.euGas;if(e.status!=="fulfilled"||!e.value)return A("EU Gas","—","#7f8c8d",'data-degraded="true"');const t=e.value.fillPct.toFixed(0),s=e.value.fillPct<30?"#e74c3c":e.value.fillPct<50?"#f39c12":"#27ae60";return A("EU Gas",`${t}%`,s)}renderBrentTile(){const e=this.state.brent;if(e.status!=="fulfilled"||!e.value)return A("Brent","—","#7f8c8d",'data-degraded="true"');const t=`$${e.value.price.toFixed(2)}`,s=e.value.change,l=`${s>=0?"+":""}${s.toFixed(2)}%`,r=s>=0?"#e74c3c":"#27ae60";return A("Brent",t,r,"",l)}renderActiveDisruptionsTile(){const e=this.state.activeDisruptions;if(e.status!=="fulfilled"||!e.value)return A("Active disruptions","—","#7f8c8d",'data-degraded="true"');const t=e.value.count,s=t===0?"#27ae60":t<5?"#f39c12":"#e74c3c";return A("Active disruptions",String(t),s)}renderFreshnessTile(){const t=[this.state.hormuz,this.state.euGas,this.state.brent,this.state.activeDisruptions].map(r=>r.fetchedAt).filter(r=>typeof r=="number");if(t.length===0)return A("Updated","—","#7f8c8d",'data-degraded="true"');const s=Math.max(...t),n=Math.floor((Date.now()-s)/6e4),l=n<=0?"just now":n===1?"1 min ago":`${n} min ago`;return A("Updated",l,"#7f8c8d")}renderCrisisDayTile(){if(!Number.isFinite(Ue))return A("Hormuz crisis","—","#7f8c8d",'data-degraded="true"');const e=Math.floor((Date.now()-Ue)/864e5);return e<0?A("Hormuz crisis","pending","#7f8c8d"):A("Hormuz crisis",`Day ${e}`,"#7f8c8d")}}function A(o,i,e,t="",s=""){const n=s?`<div class="ero-tile__sub" style="color:${e}">${a(s)}</div>`:"";return`
    <div class="ero-tile" ${t}>
      <div class="ero-tile__label">${a(o)}</div>
      <div class="ero-tile__value" style="color:${e}">${a(i)}</div>
      ${n}
    </div>
  `}let Ve=!1;function Ds(){if(Ve||typeof document>"u")return;const o=document.createElement("style");o.setAttribute("data-ero-styles",""),o.textContent=zs,document.head.appendChild(o),Ve=!0}const zs=`
  .ero-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 8px;
    padding: 8px;
  }
  .ero-tile {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 10px 12px;
    min-height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .ero-tile__label {
    font-size: calc(10px * var(--wm-panel-effective-scale, 1));
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 4px;
  }
  .ero-tile__value {
    font-size: calc(18px * var(--wm-panel-effective-scale, 1));
    font-weight: 600;
    line-height: 1.1;
  }
  .ero-tile__sub {
    font-size: calc(12px * var(--wm-panel-effective-scale, 1));
    margin-top: 2px;
  }
`,Pi=Object.freeze(Object.defineProperty({__proto__:null,EnergyRiskOverviewPanel:Ps},Symbol.toStringTag,{value:"Module"})),He=N(()=>new Ye(I(),{fetch:W}));class Os extends D{constructor(){super({id:"fuel-prices",title:m("panels.fuelPrices"),infoTooltip:m("components.fuelPrices.infoTooltip")})}async fetchData(){var i,e,t,s;try{const n=We("fuelPrices");if((i=n==null?void 0:n.countries)!=null&&i.length){if(!((e=this.element)!=null&&e.isConnected))return;this.renderIndex(n),He().listFuelPrices({}).then(r=>{var c,d;!((c=this.element)!=null&&c.isConnected)||!((d=r.countries)!=null&&d.length)||this.renderIndex(r)}).catch(()=>{});return}const l=await He().listFuelPrices({});if(!((t=this.element)!=null&&t.isConnected))return;this.renderIndex(l)}catch(n){if(this.isAbortError(n)||!((s=this.element)!=null&&s.isConnected))return;this.showError(m("common.failedMarketData"),()=>void this.fetchData())}}renderIndex(i){var u;if(!((u=i.countries)!=null&&u.length)){this.showError(m("common.failedMarketData"),()=>void this.fetchData());return}const e=[...i.countries].sort((h,v)=>{var b,C;const $=((b=h.gasoline)==null?void 0:b.usdPrice)??0;return(((C=v.gasoline)==null?void 0:C.usdPrice)??0)-$}),t=i.cheapestGasoline??"",s=i.mostExpensiveGasoline??"",n=i.cheapestDiesel??"",l=i.mostExpensiveDiesel??"",r=i.wowAvailable,c=e.map(h=>{const v=h.gasoline,$=h.diesel;function g(b,C,S,k){if(!(b!=null&&b.usdPrice))return'<td class="gb-cell gb-na">N/A</td>';const M=k===C?"gb-cheapest":k===S?"gb-priciest":"";let j="";if(r&&b.wowPct!=null&&b.wowPct!==0){const _=b.wowPct>=0?"▲":"▼";j=` <span class="${b.wowPct>=0?"bm-wow-up":"bm-wow-down"}">${_}${Math.abs(b.wowPct).toFixed(1)}%</span>`}return`<td class="gb-cell ${M}">$${b.usdPrice.toFixed(3)}${j}</td>`}return`<tr>
        <td class="gb-item-name">${a(h.flag)} ${a(h.name)}</td>
        ${g(v,t,s,h.code)}
        ${g($,n,l,h.code)}
      </tr>`}).join(""),d=i.fetchedAt?new Date(i.fetchedAt).toLocaleDateString():"",p=i.countryCount?` (${i.countryCount} ${m("components.fuelPrices.countries")})`:"",f=`
      <div class="gb-wrapper">
        <div class="gb-scroll">
          <table class="gb-table">
            <thead><tr>
              <th scope="col" class="gb-item-col">${m("panels.fuelPricesCountry")}</th>
              <th scope="col" class="gb-cell">${m("panels.fuelPricesGasoline")}</th>
              <th scope="col" class="gb-cell">${m("panels.fuelPricesDiesel")}</th>
            </tr></thead>
            <tbody>${c}</tbody>
          </table>
        </div>
        ${d?`<div class="gb-updated">${m("components.status.updatedAt",{time:d})}${p}</div>`:""}
      </div>
    `;this.setSafeContent(E(f,"legacy Panel.setContent() migration"))}}const Di=Object.freeze(Object.defineProperty({__proto__:null,FuelPricesPanel:Os},Symbol.toStringTag,{value:"Module"})),Ne=["#e67e22","#1abc9c","#9b59b6","#27ae60"],Ms="rgba(231,76,60,0.5)";function _s(o){switch(o){case"closed":return"#e74c3c";case"disrupted":return"#e67e22";case"restricted":return"#f39c12";default:return"#2ecc71"}}function Fs(o,i,e,t=280,s=52){if(!o.length)return`<div style="height:${s}px;display:flex;align-items:center;color:var(--text-dim);font-size:calc(10px * var(--wm-panel-effective-scale, 1))">${a(m("components.hormuzTracker.noData"))}</div>`;const n=Math.max(...o.map(p=>p.value),1),l=Math.max(2,Math.floor((t-o.length)/o.length));let r=0;const c=o.map(p=>{const f=Math.max(p.value>0?2:1,Math.round(p.value/n*(s-2))),u=p.value===0?Ms:i,h=`<rect x="${r}" y="${s-f}" width="${l}" height="${f}" fill="${u}" rx="1"/>`;return r+=l+1,h});r=0;const d=o.map(p=>{const f=`<rect class="hbar" x="${r}" y="0" width="${l}" height="${s}" fill="transparent" data-date="${a(p.date)}" data-val="${p.value}" data-unit="${a(e)}" style="cursor:crosshair"/>`;return r+=l+1,f});return`<svg class="hz-svg" width="${t}" height="${s}" style="display:block;overflow:visible">${c.join("")}${d.join("")}</svg>`}function Rs(o,i){const e=Ne[i%Ne.length]??"#3498db",t=o.series[o.series.length-1],s=t?Number(t.value).toFixed(0):m("components.hormuzTracker.notAvailable"),n=t?t.date.slice(5):"",l=o.label.includes("crude_oil")?m("components.hormuzTracker.units.ktPerDay"):m("components.hormuzTracker.units.generic");return`
    <div class="hz-chart" style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px">
        <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.04em">${a(o.title)}</span>
        <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${e}">${a(s)} <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l} · ${a(n)}</span></span>
      </div>
      <div style="position:relative">${Fs(o.series,e,l)}</div>
    </div>`}class Ls extends D{constructor(){super({id:"hormuz-tracker",title:m("components.hormuzTracker.title"),showCount:!1,infoTooltip:m("components.hormuzTracker.infoTooltip")});y(this,"data",null);y(this,"dependencies",null);y(this,"dependencyState","loading");y(this,"tooltipBound",!1);y(this,"fetchGeneration",0);y(this,"dependencyGeneration",0);y(this,"dependencyAbortController",null);y(this,"dependencyAbortCleanup",null);y(this,"authUnsubscribe",null);y(this,"entitlementUnsubscribe",null);y(this,"lastHadPremium",!1);this.lastHadPremium=U(V()),this.authUnsubscribe=At(()=>this.handlePremiumAccessChange()),this.entitlementUnsubscribe=Tt(()=>this.handlePremiumAccessChange())}async fetchData(){const e=++this.fetchGeneration;this.invalidateDependencyRequest(),this.showLoading();const t=U(V());this.dependencyState=t?"loading":"pro-locked";let s=t?this.startDependencyRequest():null;try{const n=await qe();return e!==this.fetchGeneration?!1:n?(this.data=n,this.dependencies=null,U(V())?(this.dependencyState="loading",(!s||s.generation!==this.dependencyGeneration)&&(s=this.startDependencyRequest())):(this.invalidateDependencyRequest(),this.dependencyState="pro-locked"),this.renderPanel(),this.bindTooltip(),s==null||s.promise.then(r=>{this.signal.aborted||e!==this.fetchGeneration||(s==null?void 0:s.generation)!==this.dependencyGeneration||!U(V())||(this.dependencies=r,this.dependencyState=(r==null?void 0:r.upstreamUnavailable)===!1?"loaded":"unavailable",this.renderPanel())}),!0):(this.showError(m("components.hormuzTracker.errors.unavailable"),()=>void this.fetchData()),!1)}catch(n){return e!==this.fetchGeneration||this.showError(n instanceof Error?n.message:m("components.hormuzTracker.errors.failedToLoad"),()=>void this.fetchData()),!1}}destroy(){var e,t;(e=this.authUnsubscribe)==null||e.call(this),this.authUnsubscribe=null,(t=this.entitlementUnsubscribe)==null||t.call(this),this.entitlementUnsubscribe=null,this.invalidateDependencyRequest(),super.destroy()}handlePremiumAccessChange(){const e=U(V());if(e!==this.lastHadPremium){if(this.lastHadPremium=e,e){if(!this.data)return;this.dependencies=null,this.dependencyState="loading",this.renderPanel();const t=this.startDependencyRequest();t.promise.then(s=>{this.signal.aborted||t.generation!==this.dependencyGeneration||!U(V())||(this.dependencies=s,this.dependencyState=(s==null?void 0:s.upstreamUnavailable)===!1?"loaded":"unavailable",this.renderPanel())});return}this.invalidateDependencyRequest(),this.dependencies=null,this.dependencyState="pro-locked",this.data&&this.renderPanel()}}invalidateDependencyRequest(){var e,t;this.dependencyGeneration+=1,(e=this.dependencyAbortController)==null||e.abort(),this.dependencyAbortController=null,(t=this.dependencyAbortCleanup)==null||t.call(this),this.dependencyAbortCleanup=null}startDependencyRequest(){this.invalidateDependencyRequest();const e=++this.dependencyGeneration,t=new AbortController,s=()=>t.abort();this.signal.aborted?t.abort():this.signal.addEventListener("abort",s,{once:!0});const n=()=>this.signal.removeEventListener("abort",s);this.dependencyAbortController=t,this.dependencyAbortCleanup=n;const l=ut("hormuz_strait",25,{signal:t.signal}).catch(()=>null).finally(()=>{this.dependencyAbortController===t&&(this.dependencyAbortController=null,this.dependencyAbortCleanup=null,n())});return{generation:e,promise:l}}bindTooltip(){this.tooltipBound||!this.element||(this.tooltipBound=!0,this.element.addEventListener("mousemove",e=>{var d,p;const t=e.target;if(!((d=t.classList)!=null&&d.contains("hbar")))return;const s=(t.getAttribute("data-date")??"").slice(5),n=t.getAttribute("data-val")??"",l=t.getAttribute("data-unit")??"",r=(p=this.element)==null?void 0:p.querySelector(".hz-tip");if(!r)return;const c=t.getBoundingClientRect();r.style.left=`${c.left+c.width/2}px`,r.style.top=`${Math.max(8,c.top-28)}px`,r.style.transform="translateX(-50%)",r.style.opacity="1",r.textContent=`${s}  ${n} ${l}`}),this.element.addEventListener("mouseleave",()=>{var t;const e=(t=this.element)==null?void 0:t.querySelector(".hz-tip");e&&(e.style.opacity="0")}))}renderPanel(){if(!this.data)return;const e=this.data,t=_s(e.status),s=e.charts.length?e.charts.map((c,d)=>Rs(c,d)).join(""):`<div style="color:var(--text-dim);font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:8px 0">${a(m("components.hormuzTracker.chartUnavailable"))}</div>`,n=e.updatedDate?`<span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${a(e.updatedDate)}</span>`:"",l=this.renderDependencies(),r=`
      <div style="padding:12px 14px;position:relative">
        <div class="hz-tip" style="position:fixed;pointer-events:none;background:rgba(15,17,26,0.95);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:3px 8px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#fff;white-space:nowrap;z-index:9999;opacity:0;transition:opacity 0.08s;letter-spacing:0.02em"></div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="background:${t};color:#fff;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 6px;border-radius:3px;letter-spacing:0.08em">${e.status.toUpperCase()}</span>
          ${n}
        </div>
        <div>${s}</div>
        ${l}
        <div style="margin-top:4px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          ${a(m("components.hormuzTracker.sourcePrefix"))} <a href="${a(e.attribution.url)}" target="_blank" rel="noopener" style="color:var(--text-dim);text-decoration:underline">${a(e.attribution.source)}</a>
        </div>
      </div>`;this.setSafeContent(E(r,"legacy Panel.setContent() migration"))}renderDependencies(){const e=this.dependencies;if(this.dependencyState==="loading")return`<div class="hz-dependencies" data-state="loading" style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)"><div class="hz-dependencies-title" style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;text-transform:uppercase;letter-spacing:0.04em">${a(m("components.supplyVulnerability.hormuzTitle"))}</div><div class="hz-dependencies-empty" style="margin-top:5px;color:var(--text-dim);font-size:calc(10px * var(--wm-panel-effective-scale, 1))">${a(m("components.supplyVulnerability.loading"))}</div></div>`;if(this.dependencyState==="pro-locked"||!e||e.upstreamUnavailable||e.dependencies.length===0){const l=this.dependencyState==="pro-locked"?m("components.supplyVulnerability.proLocked"):!e||e.upstreamUnavailable?m("components.supplyVulnerability.unavailable"):m("components.supplyVulnerability.noCoverage");return`<div class="hz-dependencies" data-state="${this.dependencyState}" style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)"><div class="hz-dependencies-title" style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;text-transform:uppercase;letter-spacing:0.04em">${a(m("components.supplyVulnerability.hormuzTitle"))}</div><div class="hz-dependencies-empty" style="margin-top:5px;color:var(--text-dim);font-size:calc(10px * var(--wm-panel-effective-scale, 1))">${a(l)}</div></div>`}const t=new Map,s=new Map;for(const l of e.dependencies)t.has(l.countryIso2)||t.set(l.countryIso2,l),s.has(l.commodityId)||s.set(l.commodityId,l);const n=(l,r)=>l.slice(0,5).map(c=>{const d=r==="country"?c.countryName:c.commodity,p=r==="country"?c.commodity:c.countryName,f=c.score==null?m("components.supplyVulnerability.unknown"):c.score.toFixed(1),u=c.state==="ok"?m("components.supplyVulnerability.stateOk"):c.state==="stale_input"?m("components.supplyVulnerability.stateStale"):m("components.supplyVulnerability.stateInsufficient");return`<li><span>${a(d)}</span><span>${a(p)} · ${a(u)} · ${a(f)}</span></li>`}).join("");return`<div class="hz-dependencies" style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)">
      <div class="hz-dependencies-title" style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;text-transform:uppercase;letter-spacing:0.04em">${a(m("components.supplyVulnerability.hormuzTitle"))}</div>
      <div class="hz-dependencies-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:7px;font-size:calc(9px * var(--wm-panel-effective-scale, 1))">
        <div><strong>${a(m("components.supplyVulnerability.dependentCountries"))}</strong><ul style="list-style:none;margin:5px 0 0;padding:0">${n([...t.values()],"country")}</ul></div>
        <div><strong>${a(m("components.supplyVulnerability.dependentCommodities"))}</strong><ul style="list-style:none;margin:5px 0 0;padding:0">${n([...s.values()],"commodity")}</ul></div>
      </div>
      <div class="hz-dependencies-method" style="margin-top:7px;color:var(--text-dim);font-size:calc(8px * var(--wm-panel-effective-scale, 1))">${a(m("components.supplyVulnerability.methodology"))}: ${a(e.methodologyVersion)}</div>
    </div>`}}const zi=Object.freeze(Object.defineProperty({__proto__:null,HormuzPanel:Ls},Symbol.toStringTag,{value:"Module"}));class Is extends D{constructor(){super({id:"renewable",title:"Renewable Energy",trackActivity:!1,infoTooltip:m("components.renewable.infoTooltip")})}setData(i){var r,c,d;zt(this.content);const{data:e,state:t,cachedAt:s}=i;if(t==="cached"?this.setDataBadge("cached",s===null?void 0:Dt(s)):this.setDataBadge(t),e===null||e.globalPercentage===0&&!((r=e.regions)!=null&&r.length)){const p=document.createElement("div");p.className="renewable-empty",Object.assign(p.style,{padding:"24px 16px",color:"var(--text-dim)",textAlign:"center",fontSize:"calc(13px * var(--wm-panel-effective-scale, 1))"}),p.textContent="No renewable energy data available",this.content.appendChild(p);return}const n=document.createElement("div");n.className="renewable-container",Object.assign(n.style,{padding:"8px"});const l=document.createElement("div");if(l.className="renewable-gauge-section",Object.assign(l.style,{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"12px"}),this.renderGauge(l,e.globalPercentage,e.globalYear),n.appendChild(l),(((c=e.historicalData)==null?void 0:c.length)??0)>2){const p=document.createElement("div");p.className="renewable-sparkline-section",Object.assign(p.style,{marginBottom:"12px"}),this.renderSparkline(p,e.historicalData),n.appendChild(p)}if(((d=e.regions)==null?void 0:d.length)>0){const p=document.createElement("div");p.className="renewable-regions",this.renderRegions(p,e.regions),n.appendChild(p)}this.content.appendChild(n)}renderGauge(i,e,t){const d=me(i).append("svg").attr("viewBox","0 0 140 140").attr("width",140).attr("height",140).style("display","block").append("g").attr("transform","translate(70,70)"),p=Ot().innerRadius(49).outerRadius(70).cornerRadius(4).startAngle(0);d.append("path").datum({endAngle:Math.PI*2}).attr("d",p).attr("fill",z("--border"));const f=e/100*Math.PI*2,u=d.append("path").datum({endAngle:0}).attr("d",p).attr("fill",z("--green")),h=Mt(0,f);u.transition().duration(1500).ease(Pt).attrTween("d",()=>$=>p({endAngle:h($)})),d.append("text").attr("class","gauge-value").attr("text-anchor","middle").attr("dominant-baseline","central").attr("dy","-0.15em").attr("fill",z("--text")).style("font-size","calc(22px * var(--wm-panel-effective-scale, 1))").attr("font-weight","700").text(`${e.toFixed(1)}%`),d.append("text").attr("class","gauge-label").attr("text-anchor","middle").attr("dominant-baseline","central").attr("dy","1.4em").attr("fill",z("--text-dim")).style("font-size","calc(10px * var(--wm-panel-effective-scale, 1))").text("Renewable");const v=document.createElement("div");v.className="gauge-year",Object.assign(v.style,{textAlign:"center",fontSize:"calc(10px * var(--wm-panel-effective-scale, 1))",color:"var(--text-dim)",marginTop:"4px"}),v.textContent=`Data from ${t}`,i.appendChild(v)}renderSparkline(i,e){const t=this.content.clientWidth-16||200,s=40,n={top:4,right:8,bottom:4,left:8},l=t-n.left-n.right;if(l<=0)return;const c=me(i).append("svg").attr("width",t).attr("height",s+n.top+n.bottom).style("display","block").append("g").attr("transform",`translate(${n.left},${n.top})`),d=De(e,b=>b.year),p=De(e,b=>b.value),f=(p[1]-p[0])*.1,u=ce().domain(d).range([0,l]),h=ce().domain([p[0]-f,p[1]+f]).range([s,0]),v=z("--green"),$=ge().x(b=>u(b.year)).y0(s).y1(b=>h(b.value)).curve(K);c.append("path").datum(e).attr("d",$).attr("fill",v).attr("opacity",.15);const g=ze().x(b=>u(b.year)).y(b=>h(b.value)).curve(K);c.append("path").datum(e).attr("d",g).attr("fill","none").attr("stroke",v).attr("stroke-width",1.5)}renderRegions(i,e){const t=Math.max(...e.map(s=>s.percentage),1);for(let s=0;s<e.length;s++){const n=e[s],l=document.createElement("div");l.className="region-row",Object.assign(l.style,{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"});const r=document.createElement("span");r.className="region-name",Object.assign(r.style,{fontSize:"calc(11px * var(--wm-panel-effective-scale, 1))",color:"var(--text-dim)",minWidth:"120px",flexShrink:"0"}),r.textContent=n.name;const c=document.createElement("div");c.className="region-bar-container",Object.assign(c.style,{flex:"1",height:"8px",background:"var(--bg-secondary)",borderRadius:"4px",overflow:"hidden"});const d=document.createElement("div");d.className="region-bar";const p=e.length>1?1-s/(e.length-1)*.5:1;Object.assign(d.style,{width:`${n.percentage/t*100}%`,height:"100%",background:z("--green"),opacity:String(p),borderRadius:"4px",transition:"width 0.6s ease-out"}),c.appendChild(d);const f=document.createElement("span");f.className="region-value",Object.assign(f.style,{fontSize:"calc(11px * var(--wm-panel-effective-scale, 1))",fontWeight:"600",color:"var(--text)",minWidth:"42px",textAlign:"right",flexShrink:"0"}),f.textContent=`${n.percentage.toFixed(1)}%`,l.appendChild(r),l.appendChild(c),l.appendChild(f),i.appendChild(l)}}setCapacityData(i){var s;if((s=this.content.querySelector(".capacity-section"))==null||s.remove(),!i||i.length===0)return;const e=document.createElement("div");e.className="capacity-section";const t=document.createElement("div");t.className="capacity-header",t.textContent="US Installed Capacity (EIA)",e.appendChild(t),this.renderCapacityChart(e,i),this.content.appendChild(e)}renderCapacityChart(i,e){const t=e.find(x=>x.source==="SUN"),s=e.find(x=>x.source==="WND"),n=e.find(x=>x.source==="COL"),l=new Set;for(const x of e)for(const P of x.data)l.add(P.year);if(l.size===0)return;const r=[...l].sort((x,P)=>x-P),c=new Map((t==null?void 0:t.data.map(x=>[x.year,x.capacityMw]))??[]),d=new Map((s==null?void 0:s.data.map(x=>[x.year,x.capacityMw]))??[]),p=new Map((n==null?void 0:n.data.map(x=>[x.year,x.capacityMw]))??[]),f=r.map(x=>({year:x,solar:c.get(x)??0,wind:d.get(x)??0,coal:p.get(x)??0})),u=this.content.clientWidth-16||200,h=100,v={top:4,right:8,bottom:16,left:8},$=u-v.left-v.right,g=h-v.top-v.bottom;if($<=0)return;const C=_t().keys(["solar","wind"]).order(Ft).offset(Rt)(f),S=ce().domain([r[0],r[r.length-1]]).range([0,$]),k=he(C,x=>he(x,P=>P[1]))??0,M=he(f,x=>x.coal)??0,j=Math.max(k,M)*1.1,_=ce().domain([0,j]).range([g,0]),F=me(i).append("svg").attr("width",u).attr("height",h).attr("viewBox",`0 0 ${u} ${h}`).style("display","block").append("g").attr("transform",`translate(${v.left},${v.top})`),Y=z("--yellow"),q=z("--semantic-info"),B=z("--red"),ie=ge().x(x=>S(x.data.year)).y0(x=>_(x[0])).y1(x=>_(x[1])).curve(K),ae=[Y,q];C.forEach((x,P)=>{F.append("path").datum(x).attr("d",ie).attr("fill",ae[P]).attr("opacity",.6)});const ne=ge().x(x=>S(x.year)).y0(g).y1(x=>_(x.coal)).curve(K);F.append("path").datum(f).attr("d",ne).attr("fill",B).attr("opacity",.2);const w=ze().x(x=>S(x.year)).y(x=>_(x.coal)).curve(K);F.append("path").datum(f).attr("d",w).attr("fill","none").attr("stroke",B).attr("stroke-width",1.5).attr("opacity",.8);const Z=r[0],re=r[r.length-1];F.append("text").attr("x",S(Z)).attr("y",g+12).attr("text-anchor","start").attr("fill",z("--text-dim")).style("font-size","calc(9px * var(--wm-panel-effective-scale, 1))").text(String(Z)),F.append("text").attr("x",S(re)).attr("y",g+12).attr("text-anchor","end").attr("fill",z("--text-dim")).style("font-size","calc(9px * var(--wm-panel-effective-scale, 1))").text(String(re));const ue=document.createElement("div");ue.className="capacity-legend";const Qe=[{color:Y,label:"Solar"},{color:q,label:"Wind"},{color:B,label:"Coal"}];for(const x of Qe){const P=document.createElement("div");P.className="capacity-legend-item";const fe=document.createElement("span");fe.className="capacity-legend-dot",fe.style.backgroundColor=x.color;const Ee=document.createElement("span");Ee.textContent=x.label,P.appendChild(fe),P.appendChild(Ee),ue.appendChild(P)}i.appendChild(ue)}destroy(){super.destroy()}}const Oi=Object.freeze(Object.defineProperty({__proto__:null,RenewableEnergyPanel:Is},Symbol.toStringTag,{value:"Module"}));export{Si as C,$i as E,Ai as F,zi as H,wi as O,ki as P,Oi as R,Ei as S,Ci as a,Ti as b,Pi as c,Di as d};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["panels-energy-CTt1zZXw.js"]=1;