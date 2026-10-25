let t=!1;function a(){return t}function o(e){return e instanceof DOMException&&(e.name==="QuotaExceededError"||e.code===22)}function n(){t||(t=!0,console.warn("[Storage] Quota exceeded — disabling further writes"))}export{o as a,a as i,n as m};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["storage-quota-BtyHkWgJ.js"]=1;