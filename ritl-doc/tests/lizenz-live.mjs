// ritl-doc 1.0 + ritl-bk 2.12 · Rundlauf MIT ECHTER Test-Lizenz gegen den Lizenzserver (Edge Function tool-backup).
// Schlüssel NUR über Umgebungsvariablen – nie in eine Datei schreiben oder committen:
//   RITL_TEST_KEY="RITL-…" RITL_TEST_EMAIL="…" node ritl-doc/tests/lizenz-live.mjs [Ausgabeordner]
// Voraussetzung: eigene Test-Lizenz (Kanal Dev) mit pdf-ritl, C · Server mindestens Stufe 1, 2 freie Geräteplätze.
// Wirkung am Server: 2 Geräte (feste Kennungen ritl-doc-test-A/-B, bei jedem Lauf dieselben) und ein Stand pdf-ritl · settings
// in tool_state der Test-Lizenz. Nur Lesen und state_put der Stufe settings – kein cfg_set, keine Dateien, keine Historie.
import {playwright,starten} from './_server.mjs';const {chromium}=playwright();
import zlib from 'zlib';import fs from 'fs';import os from 'os';
const KEY=process.env.RITL_TEST_KEY||'',EMAIL=process.env.RITL_TEST_EMAIL||'';
if(!/^(RITL|RT)-/.test(KEY)){console.error('RITL_TEST_KEY fehlt (RITL-…). Test-Lizenz im Lizenz-Admin anlegen, Schlüssel nur als Umgebungsvariable übergeben.');process.exit(2)}
const SRV=await starten();
const OUT=process.argv[2]||os.tmpdir()+'/ritl-doc-lizenz-live';fs.mkdirSync(OUT,{recursive:true});
const API='https://hcluxhlvshydnncprpbl.supabase.co/functions/v1/tool-backup';
const res=[];const ok=(m,s,c,x)=>{const l=`${c?'✓':'✗'} [${m}] ${s}${x&&!c?' – '+x:''}`;res.push(l);console.log(l)};
const warte=ms=>new Promise(r=>setTimeout(r,ms));
const MOCK=`window.showSaveFilePicker=async o=>{const d=await navigator.storage.getDirectory();window.__SAVED=o.suggestedName;return d.getFileHandle(o.suggestedName,{create:true})};
window.showOpenFilePicker=async()=>{const d=await navigator.storage.getDirectory();return [await d.getFileHandle(window.__SAVED)]};`;
const b=await chromium.launch();
// beobachtet alle Aufrufe an tool-backup (ohne sie zu verändern); state_put-Inhalte werden entpackt geprüft
async function geraet(dev,fsmock){const ctx=await b.newContext({viewport:{width:1280,height:860}});
 await ctx.addInitScript(`if(!sessionStorage.getItem('__init')){sessionStorage.setItem('__init','1');localStorage.setItem('riemer-lizenz',${JSON.stringify(KEY)});localStorage.setItem('riemer-email',${JSON.stringify(EMAIL)});localStorage.setItem('riemer-geraet','${dev}')}`);
 if(fsmock)await ctx.addInitScript(MOCK);
 const p=await ctx.newPage();p.errs=[];p.calls=[];p.puts=[];p.on('pageerror',e=>p.errs.push(e.message));
 p.on('request',q=>{if(!q.url().startsWith(API)||q.method()!=='POST')return;try{const j=JSON.parse(q.postData()||'{}');p.calls.push({a:j.action,stufe:j.data&&j.data.stufe});
  if(j.action==='state_put')p.puts.push({stufe:j.data.stufe,o:JSON.parse(zlib.gunzipSync(Buffer.from(j.data.b64,'base64')).toString())})}catch(e){}});
 p.antworten=[];p.on('response',async r=>{if(!r.url().startsWith(API)||r.request().method()!=='POST')return;try{p.antworten.push(await r.json())}catch(e){}});
 await p.goto(SRV.basis+'/ritl-doc/test.html?tool=pdf-ritl&adaptertyp=');await p.waitForFunction(()=>window.TEST_BEREIT&&window.RITL_DOC&&window.RITLBK);return {ctx,p}}
const M='live · pdf-ritl';
{const {ctx,p}=await geraet('ritl-doc-test-A',true);
 await p.waitForFunction(()=>RITLBK.typ==='dokument',null,{timeout:10000}).catch(()=>{});await warte(2500);
 const head=p.antworten.find(j=>j&&j.backup);const fehler=p.antworten.find(j=>j&&j.ok===false);
 ok(M,'state_head: Lizenz gültig für pdf-ritl',!!head,fehler?fehler.error:'keine Antwort');
 ok(M,'Server liefert backup.typ „dokument“ (Adapter ohne typ)',!!head&&head.backup.typ==='dokument'&&await p.evaluate(()=>RITLBK.typ==='dokument'),head?JSON.stringify(head.backup.typ):'');
 const st=await p.evaluate(()=>RITLBK.stand());
 ok(M,'wirksam nur Stufe settings, B · Ordner keine Datenbank',st.lokal.stufe==='settings'&&st.zentral.stufe==='settings'&&st.ordner===false,JSON.stringify({lokal:st.lokal,zentral:st.zentral,ordner:st.ordner,stufen:st.stufen,matrix:st.matrix}));
 const c=!!(st.stufen&&st.stufen.server);
 ok(M,c?'C · Server-Abgleich aktiv':'Lizenz ohne C · Server – Abgleich über den Server wird übersprungen',c?st.sync===true:true);
 await p.click('#rdoc-sb [data-a="neu"]');await p.fill('#t-titel','Angebot Muster');await p.fill('#t-notiz','Geheimer Inhalt 4711');
 await p.setInputFiles('#t-file',[{name:'plan.pdf',mimeType:'application/pdf',buffer:Buffer.from('%PDF-1.4 '+'x'.repeat(3000))}]);
 await p.click('#ritl-doc-unt');await p.waitForFunction(()=>!RITL_DOC.geaendert,null,{timeout:8000}).catch(()=>{});
 ok(M,'Speichern unter → „Angebot Muster.test.ritl“',await p.evaluate(()=>RITL_DOC.datei==='Angebot Muster.test.ritl'));
 if(c){for(let i=0;i<60&&!p.puts.some(x=>(x.o.daten.doc_zuletzt||[]).some(z=>z.datei==='Angebot Muster.test.ritl'));i++)await warte(250);
  const put=[...p.puts].reverse().find(x=>(x.o.daten.doc_zuletzt||[]).length);const txt=put?JSON.stringify(put.o):'';
  ok(M,'„Zuletzt geöffnet“ per state_put an den Server, vom Server angenommen',!!put&&!p.antworten.some(j=>j&&j.ok===false));
  ok(M,'Server bekommt keine Projektdaten, keine Dateien, keine Handles',!!put&&put.o.ritl.stufe==='settings'&&!/Geheimer Inhalt|%PDF|"b64"|"handle"|"titel"|"notiz"/.test(txt),txt.slice(0,200));
  ok(M,'nur state_put der Stufe settings, kein cfg_set/files_put/save',p.puts.every(x=>x.stufe==='settings')&&!p.calls.some(x=>['cfg_set','files_put','save'].includes(x.a)),JSON.stringify(p.calls.map(x=>x.a)))}
 await p.evaluate(()=>RITLBK.setup());await p.waitForSelector('#bksetup[open]');
 ok(M,'„Backup einrichten“: nur Spalte settings + Hinweis',await p.evaluate(()=>document.querySelectorAll('#bks-body .bkgh').length===1&&!!document.getElementById('bks-dok')));
 await p.screenshot({path:`${OUT}/live-bksetup-1280-hell.png`});await p.click('#bks-later');
 ok(M,'keine JS-Fehler (Gerät A)',p.errs.length===0,p.errs.join(' | '));
 if(c){const g=await geraet('ritl-doc-test-B',false),p2=g.p;
  await p2.waitForFunction(()=>!!document.querySelector('#rdoc-sb [data-d="Angebot Muster.test.ritl"]'),null,{timeout:15000}).catch(()=>{});
  ok(M,'Gerät B: „Zuletzt geöffnet“ kommt vom Server, Projekt bleibt leer',await p2.evaluate(()=>!!document.querySelector('#rdoc-sb [data-d="Angebot Muster.test.ritl"]')&&T.titel===''&&T.dateien.length===0));
  await p2.screenshot({path:`${OUT}/live-geraetB-start-1280-hell.png`});
  ok(M,'keine JS-Fehler (Gerät B)',p2.errs.length===0,p2.errs.join(' | '));await g.ctx.close()}
 await ctx.close()}
await b.close();SRV.stop();fs.writeFileSync(OUT+'/ergebnis.txt',res.join('\n'));process.exitCode=res.some(x=>x.startsWith('✗'))?1:0;
