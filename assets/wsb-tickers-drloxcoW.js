import{a as e,I as t,g as r}from"./index-CE8VpG3t.js";import{q as i}from"./gdelt-intel-FTZQ7YLF.js";const a=e(()=>new t(r(),{fetch:i}));async function n(){try{return(await a().listWsbTickers({},{signal:AbortSignal.timeout(15e3)})).tickers}catch{return[]}}export{n as f};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["wsb-tickers-drloxcoW.js"]=1;