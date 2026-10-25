import{b6 as c,b$ as m,c0 as u,aG as o,aZ as p,b5 as d}from"./App-BLvralVM.js";import{e as t}from"./sanitize-D7dx0cA1.js";import{m as f}from"./sparkline-B3e4nvqm.js";function y(s,i,a={}){if(!s)return"Freshness unavailable";const n=Date.parse(s);if(!Number.isFinite(n))return"Freshness unavailable";const r=i-n;if(!Number.isFinite(r)||r<0)return"Freshness unavailable";const e=a.currentMaxMs??m,l=a.delayedMaxMs??u;return r<=e?"Current":r<=l?"Delayed":"Stale"}function h(s,i=c){const a=new Map(s.map(n=>[n.symbol,n]));return i.map(n=>{const r=n.symbol,e=a.get(n.symbol);return e&&e.price!=null&&Number.isFinite(e.price)&&e.change!=null&&Number.isFinite(e.change)?{kind:"quote",symbol:r,name:n.name,display:n.display,unit:n.unit,price:e.price,change:e.change,sparkline:e.sparkline}:{kind:"unavailable",symbol:r,name:n.name,display:n.display}})}function b(s,i){switch(i){case"currency":return`$${s.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`;case"percent":return`${s.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}%`;case"points":return s.toLocaleString("en-US",{minimumFractionDigits:s>=1e3?0:2,maximumFractionDigits:s>=1e3?0:2})}}function $(s){return`${s.rows.map(a=>a.kind==="unavailable"?`
      <div class="market-item nq-pulse-row nq-pulse-row--unavailable">
        <div class="market-info">
          <span class="market-name">${t(a.name)}</span>
          <span class="market-symbol">${t(a.display)}</span>
        </div>
        <div class="market-data">
          <span class="market-price">Unavailable</span>
        </div>
      </div>`:`
      <div class="market-item nq-pulse-row">
        <div class="market-info">
          <span class="market-name">${t(a.name)}</span>
          <span class="market-symbol">${t(a.display)}</span>
        </div>
        <div class="market-data">
          ${f(a.sparkline,a.change)}
          <span class="market-price">${b(a.price,a.unit)}</span>
          <span class="market-change ${o(a.change)}">${p(a.change)}</span>
        </div>
      </div>`).join("")}
    <div class="nq-pulse-status">
      <span class="nq-pulse-freshness">${t(s.freshness)}</span>
      <span class="nq-pulse-asof">${t(s.asOfLabel)}</span>
    </div>
    <div class="nq-pulse-disclosure">${t(d)}</div>`}function F(s,i){return i==="Freshness unavailable"||!s?"As of: Freshness unavailable":`As of ${s}`}export{$ as c,y as f,F as n,h as o};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["nq-pulse-content-CH8QxD93.js"]=1;