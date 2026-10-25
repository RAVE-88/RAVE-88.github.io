function u(r,t=15){const e=r().slice(0,t);return e.length===0?"":`Recent News: (JSON records)
`+e.map(({title:n,source:o})=>`- ${JSON.stringify({title:n,source:o}).replace(/[\u0085\u2028\u2029]/g,c=>`\\u${c.charCodeAt(0).toString(16).padStart(4,"0")}`)}`).join(`
`)}export{u as b};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["news-context-CvrWW5B9.js"]=1;