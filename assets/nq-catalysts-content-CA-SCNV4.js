import{b7 as r,ba as p,c1 as y,c2 as _,b5 as u,b9 as v,b8 as A,c3 as S}from"./App-BLvralVM.js";import{e}from"./sanitize-D7dx0cA1.js";import{f as l,n as q}from"./nq-pulse-content-CH8QxD93.js";const i={currentMaxMs:y,delayedMaxMs:_},E="No tracked NQ earnings in this window",h="No high-impact US releases in this window",d="Unavailable",$=new Set(S);function f(s,a,n){return!!s&&s>=a&&s<=n}function N(s,a){return r(p(s,a-1))}function T(s,a=new Date){const n=r(a),c=N(a,A);return s.filter(t=>{var o;return t.country==="US"&&((o=t.impact)==null?void 0:o.toLowerCase())==="high"&&f(t.date,n,c)}).sort((t,o)=>t.date.localeCompare(o.date)||t.event.localeCompare(o.event))}function U(s,a=new Date){const n=r(a),c=N(a,v);return s.filter(t=>$.has(t.symbol)&&f(t.date,n,c)).sort((t,o)=>t.date.localeCompare(o.date)||t.symbol.localeCompare(o.symbol))}function M(s){return s||"Time unknown"}function O(s){const a=s.nowMs??Date.now(),n=s.macroUnavailable?"Freshness unavailable":l(s.macroAsOf,a,i),c=s.earningsUnavailable?"Freshness unavailable":l(s.earningsAsOf,a,i);return`
    <section class="nq-catalysts-section">
      <h3>US macro</h3>
      ${b(s.macro,s.macroUnavailable)}
      ${m(n,s.macroAsOf)}
    </section>
    <section class="nq-catalysts-section">
      <h3>NQ influence earnings</h3>
      ${C(s.earnings,s.earningsUnavailable)}
      ${m(c,s.earningsAsOf)}
    </section>
    <div class="nq-pulse-disclosure">${e(u)}</div>`}function m(s,a){return`<div class="nq-catalysts-freshness">
    <span>${e(s)}</span>
    <span>${e(q(a,s))}</span>
  </div>`}function b(s,a){return a?`<div class="nq-catalysts-empty">${e(d)}</div>`:s.length===0?`<div class="nq-catalysts-empty">${e(h)}</div>`:s.map(n=>`
    <div class="nq-catalysts-row">
      <span class="nq-catalysts-date">${e(n.date)}</span>
      <span class="nq-catalysts-name">${e(n.event)}</span>
      <span class="nq-catalysts-time">Time unknown</span>
    </div>`).join("")}function C(s,a){return a?`<div class="nq-catalysts-empty">${e(d)}</div>`:s.length===0?`<div class="nq-catalysts-empty">${e(E)}</div>`:s.map(n=>`
    <div class="nq-catalysts-row">
      <span class="nq-catalysts-date">${e(n.date)}</span>
      <span class="nq-catalysts-name">${e(n.symbol)}${n.company?` · ${e(n.company)}`:""}</span>
      <span class="nq-catalysts-time">${e(M(n.hour))}</span>
    </div>`).join("")}export{T as a,O as c,U as f,N as n};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["nq-catalysts-content-CA-SCNV4.js"]=1;