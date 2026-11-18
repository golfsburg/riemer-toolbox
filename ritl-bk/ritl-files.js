/* RITL-Dateien (RITLF) – Dateiablage für hochgeladene Dateien, Backup-Stufe „storage“
   RIEMER Tools · Vorbild MUSTER.ritl V3.0 · Skill /riemer-webapp-design, Abschnitt „Backup-Stufe storage“
   <name> zweimal ersetzen (z. B. muster): IndexedDB „<name>_files“, Ereignis „<name>:change“.
   In das Tool-Skript vor den Backup-Block kopieren (Single-File, kein <script src>). */
// ── Dateiablage (RITL-Dateien): hochgeladene Dateien im Browser (IndexedDB) – Backup-Stufe „storage“ ──
window.RITLF=(function(){const DB='<name>_files',EV='<name>:change';let db=null;
 const open=()=>db||(db=new Promise((res,rej)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore('f',{keyPath:'id'});r.onsuccess=()=>res(r.result);r.onerror=()=>{db=null;rej(r.error)}}));
 const tx=async(mode,fn)=>{const d=await open();return new Promise((res,rej)=>{const t=d.transaction('f',mode),q=fn(t.objectStore('f'));t.oncomplete=()=>res(q&&q.result);t.onerror=()=>rej(t.error);t.onabort=()=>rej(t.error)})};
 const ch=()=>document.dispatchEvent(new Event(EV)),nid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
 const b64=async bl=>{const u=new Uint8Array(await bl.arrayBuffer());let s='';for(let i=0;i<u.length;i+=32768)s+=String.fromCharCode.apply(null,u.subarray(i,i+32768));return btoa(s)};
 const unb=(s,type)=>{const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return new Blob([u],{type})};
 const meta=({blob,...m})=>m;
 return{
  ok:typeof indexedDB!=='undefined',
  async put(file,o={}){const r={id:o.id||nid(),name:o.name||file.name||'Datei',type:file.type||'application/octet-stream',size:file.size,at:new Date().toISOString(),ref:o.ref||'',blob:file};await tx('readwrite',s=>s.put(r));ch();return r.id},
  async list(){return((await tx('readonly',s=>s.getAll()))||[]).map(meta).sort((a,b)=>a.at<b.at?-1:1)},
  async get(id){return tx('readonly',s=>s.get(id))},
  async del(id){await tx('readwrite',s=>s.delete(id));ch()},
  async stats(){const l=await this.list();return{n:l.length,bytes:l.reduce((a,x)=>a+(x.size||0),0)}},
  async dump(){const a=(await tx('readonly',s=>s.getAll()))||[],out=[];for(const r of a)out.push({...meta(r),b64:await b64(r.blob)});return out},
  async load(list){const recs=(list||[]).filter(x=>x&&x.id&&typeof x.b64==='string').map(({b64:x,...m})=>({...m,blob:unb(x,m.type)}));await tx('readwrite',s=>{s.clear();recs.forEach(r=>s.put(r))});ch();return recs.length}
 }})();
