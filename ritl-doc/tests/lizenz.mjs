// ritl-doc 1.0 + ritl-bk 2.12 · Rundlauf MIT Lizenz (A-012): pdf-ritl mit backup.typ dokument vom Server, Gerät B, Gegenprobe datenbank.
// Der Lizenzserver wird NICHT aufgerufen: Playwright fängt tool-backup ab und antwortet in der Form von public._backup_cfg (A-011).
// Kein echter Lizenzschlüssel nötig (Platzhalter RITL-TEST-…). Aufruf: node ritl-doc/tests/lizenz.mjs [Ausgabeordner, Standard: Temp-Ordner]
import {playwright,starten} from './_server.mjs';const {chromium}=playwright();const SRV=await starten();
import zlib from 'zlib';import fs from 'fs';import os from 'os';
const OUT=process.argv[2]||os.tmpdir()+'/ritl-doc-lizenz';fs.mkdirSync(OUT,{recursive:true});
const res=[];const ok=(m,s,c,x)=>{const l=`${c?'✓':'✗'} [${m}] ${s}${x&&!c?' – '+x:''}`;res.push(l);console.log(l)};
const API='https://hcluxhlvshydnncprpbl.supabase.co/functions/v1/tool-backup';
// Antwortform wie public._backup_cfg (A-011): Matrix A3 · B2 · C1, typ vom Server
const cfg=typ=>({max:{datenquelle:'server',stufe:'storage',matrix:{lokal:'storage',ordner:'datenbank',server:'settings'}},typ,alle:true,wahl:null,quota:52428800,
 datenquelle:'server',stufe:'settings',matrix:{lokal:'storage',ordner:'datenbank',server:'settings'},stufen:{lokal:'storage',ordner:'datenbank',server:'settings'},server_stufe:'settings',dateien_server:false});
// gemeinsamer „Server“ für beide Geräte
function server(typ){const S={state:{},rev:0,calls:[],puts:[]};
 S.handle=async route=>{const req=route.request();if(req.method()==='OPTIONS')return route.fulfill({status:204,headers:{'access-control-allow-origin':'*','access-control-allow-headers':'*'}});
  const b=JSON.parse(req.postData()||'{}'),a=b.action,d=b.data||{};S.calls.push({a,tool:b.tool,key:b.key,d:a==='state_put'?{stufe:d.stufe}:d});let j={ok:true};
  if(a==='state_head')j={ok:true,datenquelle:'server',backup:cfg(typ),state:Object.fromEntries(Object.entries(S.state).map(([k,v])=>[k,{rev:v.rev}]))};
  else if(a==='state_get'){const v=S.state[d.stufe];j=v?{ok:true,...v}:{ok:true,empty:true}}
  else if(a==='state_put'){const o=JSON.parse(zlib.gunzipSync(Buffer.from(d.b64,'base64')).toString());S.puts.push({stufe:d.stufe,o});S.state[d.stufe]={rev:++S.rev,b64:d.b64,sha256:d.sha256,at:new Date().toISOString(),version:d.version};j={ok:true,rev:S.rev}}
  else if(a==='list')j={ok:true,items:[],used:0,quota:52428800};
  else if(a==='cfg_set')j={ok:true,backup:cfg(typ)};
  else if(a==='files_list')j={ok:true,items:[]};
  route.fulfill({status:200,contentType:'application/json',headers:{'access-control-allow-origin':'*'},body:JSON.stringify(j)})};
 return S}
const LIZ=(dev)=>`localStorage.setItem('riemer-lizenz','RITL-PLATZHALTER-KEIN-ECHTER-SCHLUESSEL');localStorage.setItem('riemer-email','test@example.invalid');localStorage.setItem('riemer-geraet','${dev}');`;
const MOCK=`window.showSaveFilePicker=async o=>{const d=await navigator.storage.getDirectory();window.__SAVED=o.suggestedName;return d.getFileHandle(o.suggestedName,{create:true})};
window.showOpenFilePicker=async()=>{const d=await navigator.storage.getDirectory();return [await d.getFileHandle(window.__SAVED)]};`;
const b=await chromium.launch();
async function geraet(S,url,dev,fsmock){const ctx=await b.newContext({viewport:{width:1280,height:860}});
 await ctx.addInitScript(`if(!sessionStorage.getItem('__init')){sessionStorage.setItem('__init','1');${LIZ(dev)}}`);if(fsmock)await ctx.addInitScript(MOCK);
 await ctx.route(API,S.handle);await ctx.route(/riemer-toolbox\/fonts|fonts\.g/,r=>r.abort());
 const p=await ctx.newPage();p.errs=[];p.on('pageerror',e=>p.errs.push(e.message));await p.goto(url);await p.waitForFunction(()=>window.TEST_BEREIT&&window.RITL_DOC&&window.RITLBK);return {ctx,p}}
const warte=ms=>new Promise(r=>setTimeout(r,ms));

// ── 1) pdf-ritl, backup.typ dokument vom Server, Adapter OHNE typ ──
{const M='pdf · dokument';const S=server('dokument');const url=SRV.basis+'/ritl-doc/test.html?tool=pdf-ritl&adaptertyp=';
 const {ctx,p}=await geraet(S,url,'geraet-A-0001',true);
 await p.waitForFunction(()=>RITLBK.typ==='dokument',null,{timeout:5000}).catch(()=>{});
 ok(M,'Adapter ohne typ → RITLBK.typ „dokument“ kommt vom Server (state_head → backup.typ)',await p.evaluate(()=>RITLBK.typ==='dokument'));
 ok(M,'Anfragen gehen an tool-backup mit tool pdf-ritl und Lizenz',S.calls.some(c=>c.a==='state_head'&&c.tool==='pdf-ritl'&&/^RITL-/.test(c.key)));
 await warte(1500);
 const st=await p.evaluate(()=>RITLBK.stand());
 ok(M,'Lizenz A3 · B2 · C1 → wirksam nur Stufe settings (A1 + C1), B · Ordner keine Datenbank',st.stufe==='settings'&&st.lokal.stufe==='settings'&&st.zentral.stufe==='settings'&&st.ordner===false&&!('ordner' in (st.stufen||{})),JSON.stringify({stufe:st.stufe,lokal:st.lokal,zentral:st.zentral,ordner:st.ordner,stufen:st.stufen}));
 ok(M,'C · Server-Abgleich aktiv (RITL-Sync)',st.sync===true);
 ok(M,'„Backup einrichten“ öffnet sich nicht von selbst; Startbildschirm von ritl-doc offen',await p.evaluate(()=>!document.getElementById('bksetup').open&&document.getElementById('rdoc-start').open));
 ok(M,'Start-Abgleich: state_put nur Stufe settings',S.puts.length>0&&S.puts.every(x=>x.stufe==='settings'),JSON.stringify(S.puts.map(x=>x.stufe)));
 // Projekt anlegen, Daten, Datei, Speichern unter
 await p.click('#rdoc-sb [data-a="neu"]');await p.fill('#t-titel','Angebot Muster');await p.fill('#t-notiz','Geheimer Inhalt 4711');
 await p.setInputFiles('#t-file',[{name:'plan.pdf',mimeType:'application/pdf',buffer:Buffer.from('%PDF-1.4 '+'x'.repeat(3000))}]);
 const n0=S.puts.length;await p.click('#ritl-doc-unt');await p.waitForFunction(()=>!RITL_DOC.geaendert,null,{timeout:5000}).catch(()=>{});
 ok(M,'Speichern unter → „Angebot Muster.test.ritl“, Datei mit tool pdf-ritl',await p.evaluate(async()=>{const d=await navigator.storage.getDirectory();const f=await (await d.getFileHandle(window.__SAVED)).getFile();const o=JSON.parse(await new Response(f.stream().pipeThrough(new DecompressionStream('gzip'))).text());return RITL_DOC.datei==='Angebot Muster.test.ritl'&&o.ritl.tool==='pdf-ritl'&&o.ritl.typ==='dokument'}));
 await p.waitForFunction(n=>true,n0);for(let i=0;i<40&&!S.puts.slice(n0).some(x=>(x.o.daten.doc_zuletzt||[]).some(z=>z.datei==='Angebot Muster.test.ritl'));i++)await warte(250);
 const put=[...S.puts].reverse().find(x=>(x.o.daten.doc_zuletzt||[]).length);
 ok(M,'nach dem Speichern: „Zuletzt geöffnet“ per state_put an den Server',!!put&&put.o.daten.doc_zuletzt.some(z=>z.datei==='Angebot Muster.test.ritl'));
 const txt=put?JSON.stringify(put.o):'';
 ok(M,'Server bekommt keine Projektdaten, keine Dateien, keine Handles',!!put&&put.o.ritl.stufe==='settings'&&!/Geheimer Inhalt|Angebot Muster 2|%PDF|"b64"|"handle"|"titel"|"notiz"/.test(txt)&&!('dateien' in put.o.daten),txt.slice(0,300));
 ok(M,'Kopf am Server: stufe settings, Einstellungen (theme, ansicht) enthalten',!!put&&put.o.daten.theme&&put.o.daten.ansicht==='standard');
 ok(M,'kein state_put mit Stufe datenbank/storage, kein files_put, kein save',!S.puts.some(x=>x.stufe!=='settings')&&!S.calls.some(c=>c.a==='files_put'||c.a==='save'));
 // Backup einrichten
 await p.evaluate(()=>RITLBK.setup());await p.waitForSelector('#bksetup[open]');
 const su=await p.evaluate(()=>({sp:document.querySelectorAll('#bks-body .bkgh').length,b:document.querySelector('#bks-body .bkgc.na')?.textContent,c1:!!document.querySelector('#bks-body input[name="bks-st-server"][value="settings"]:not([disabled])'),lic:/höchstens/.test(document.getElementById('bks-body').textContent),hint:/Projekte speichern Sie als eigene Datei/.test(document.getElementById('bks-body').textContent),aktiv:document.querySelector('#bks-body .bkinfo')?.textContent}));
 ok(M,'„Backup einrichten“ mit Lizenz: nur Spalte settings, B „–“, C1 wählbar, Hinweis',su.sp===1&&su.b==='–'&&su.c1&&su.lic&&su.hint,JSON.stringify(su));
 ok(M,'Aktiv-Zeile: A1 + C1',/A1 \+ C1/.test(su.aktiv||''),su.aktiv);
 for(const th of ['hell','dunkel']){if(th==='dunkel')await p.evaluate(()=>RITLUI.theme('dark'));for(const [w,h,n] of [[1280,860,'1280'],[390,844,'390']]){await p.setViewportSize({width:w,height:h});await warte(150);await p.screenshot({path:`${OUT}/lizenz-bksetup-${n}-${th}.png`})}}
 await p.evaluate(()=>RITLUI.theme('light'));await p.setViewportSize({width:1280,height:860});
 const c0=S.calls.length;await p.click('#bks-ok');await warte(800);
 ok(M,'Übernehmen → kein cfg_set (Wahl am Server bleibt), Dialog zu',!S.calls.slice(c0).some(c=>c.a==='cfg_set')&&await p.evaluate(()=>!document.getElementById('bksetup').open));
 ok(M,'keine JS-Fehler (Gerät A)',p.errs.length===0,p.errs.join(' | '));
 // ── zweites Gerät: „Zuletzt geöffnet“ kommt über den Server, ohne Handle ──
 const g2=await geraet(S,url,'geraet-B-0002',false);const p2=g2.p;
 await p2.waitForFunction(()=>!!document.querySelector('#rdoc-sb [data-d="Angebot Muster.test.ritl"]'),null,{timeout:8000}).catch(()=>{});
 ok(M,'Gerät B: „Zuletzt geöffnet“ vom Server (Angebot Muster), Datei neu wählen',await p2.evaluate(()=>{const e=document.querySelector('#rdoc-sb [data-d="Angebot Muster.test.ritl"]');return !!e&&/Datei neu wählen/.test(e.textContent)}));
 ok(M,'Gerät B: Projekt bleibt leer (keine Daten über den Server)',await p2.evaluate(()=>T.titel===''&&T.notiz===''&&T.dateien.length===0&&!RITL_DOC.offen));
 for(const th of ['hell','dunkel']){if(th==='dunkel')await p2.evaluate(()=>RITLUI.theme('dark'));for(const [w,h,n] of [[1280,860,'1280'],[390,844,'390']]){await p2.setViewportSize({width:w,height:h});await warte(150);await p2.screenshot({path:`${OUT}/lizenz-geraetB-start-${n}-${th}.png`})}}
 ok(M,'keine JS-Fehler (Gerät B)',p2.errs.length===0,p2.errs.join(' | '));
 await ctx.close();await g2.ctx.close()}

// ── 2) Gegenprobe: Server sagt datenbank, Adapter sagt dokument → Server hat Vorrang, Verhalten wie 2.11 ──
{const M='Gegenprobe datenbank';const S=server('datenbank');const url=SRV.basis+'/ritl-doc/test.html?tool=drive-ritl&adaptertyp=dokument';
 const {ctx,p}=await geraet(S,url,'geraet-C-0003',true);
 await p.waitForFunction(()=>RITLBK.typ==='datenbank',null,{timeout:5000}).catch(()=>{});await warte(1500);
 const st=await p.evaluate(()=>RITLBK.stand());
 ok(M,'backup.typ datenbank vom Server schlägt Adapter-typ dokument',st.typ==='datenbank');
 ok(M,'Stufen wie 2.11: A3 · B2 · C1, B · Ordner ist Datenbank',st.lokal.stufe==='storage'&&st.ordner===true&&st.stufen.ordner==='datenbank',JSON.stringify({lokal:st.lokal,ordner:st.ordner,stufen:st.stufen}));
 await p.evaluate(()=>RITLBK.setup());await p.waitForSelector('#bksetup[open]');
 ok(M,'„Backup einrichten“ mit 3 Stufen-Spalten, ohne Dokument-Hinweis',await p.evaluate(()=>document.querySelectorAll('#bks-body .bkgh').length===3&&!document.getElementById('bks-dok')));
 await p.screenshot({path:`${OUT}/gegenprobe-bksetup-1280-hell.png`});
 ok(M,'keine JS-Fehler',p.errs.length===0,p.errs.join(' | '));
 await ctx.close()}
await b.close();SRV.stop();fs.writeFileSync(OUT+'/ergebnis.txt',res.join('\n'));process.exitCode=res.some(x=>x.startsWith('✗'))?1:0;
