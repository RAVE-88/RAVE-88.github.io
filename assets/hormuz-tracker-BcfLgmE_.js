import{b as a}from"./theme-colors-BmUbP5Zj.js";async function o(){try{const t=await fetch(a("/api/supply-chain/hormuz-tracker"),{signal:AbortSignal.timeout(15e3)});if(!t.ok)return null;const r=await t.json();return r.attribution?r:null}catch{return null}}export{o as f};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["hormuz-tracker-BcfLgmE_.js"]=1;