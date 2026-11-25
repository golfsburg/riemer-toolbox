// ritl-doc 1.0 · Playwright-Rundlauf ohne Lizenz (A-012): Neu → Daten → Speichern unter → Neu → Öffnen → Vergleich, Strg+S/O, Warnung,
// Zwischenspeicher (30 s bzw. beim Verlassen), beforeunload, Zuletzt geöffnet, Übernahme – mit und ohne File System Access, Hell/Dunkel, 1920/1280/390 px.
// Aufruf aus dem Repo-Stamm: node ritl-doc/tests/rundlauf.mjs [Ausgabeordner, Standard: Temp-Ordner]   (Dauer ca. 2 min, Ergebnis in <Ausgabe>/ergebnis.txt)
import {playwright,starten} from './_server.mjs';const {chromium}=playwright();const SRV=await starten();
import fs from 'fs';import os from 'os';
const URL0=SRV.basis+'/ritl-doc/test.html';
const OUT=process.argv[2]||os.tmpdir()+'/ritl-doc-rundlauf';fs.mkdirSync(OUT,{recursive:true});
const res=[];const ok=(m,s,c)=>{res.push(`${c?'✓':'✗'} [${m}] ${s}`);console.log(`${c?'✓':'✗'} [${m}] ${s}`)};
const b=await chromium.launch();
const MOCK=`window.showSaveFilePicker=async o=>{const d=await navigator.storage.getDirectory();window.__SAVED=o.suggestedName;return d.getFileHandle(o.suggestedName,{create:true})};
window.showOpenFilePicker=async()=>{const d=await navigator.storage.getDirectory();return [await d.getFileHandle(window.__SAVED||localStorage.getItem('__saved'))]};`;
const blobHash=async(page)=>page.evaluate(async()=>{const l=[];for(const f of T.dateien){const u=new Uint8Array(await f.blob.arrayBuffer());let h=0;for(const x of u)h=(h*31+x)>>>0;l.push(f.name+':'+u.length+':'+h)}return JSON.stringify({titel:T.titel,notiz:T.notiz,dateien:l})});
for(const mode of ['fs','nofs']){
 const ctx=await b.newContext({viewport:{width:1280,height:860},acceptDownloads:true});
 if(mode==='fs')await ctx.addInitScript(MOCK);
 const page=await ctx.newPage();const errs=[];page.on('pageerror',e=>errs.push(e.message));
 const url=URL0+(mode==='nofs'?'?nofs=1':'');
 await page.goto(url);await page.waitForFunction(()=>window.TEST_BEREIT&&window.RITL_DOC);
 await page.waitForSelector('#rdoc-start[open]',{timeout:5000}).catch(()=>{});
 ok(mode,'Startbildschirm ohne Projekt (Neues Projekt + Zuletzt geöffnet)',await page.evaluate(()=>document.getElementById('rdoc-start').open&&/Zuletzt geöffnet/.test(document.getElementById('rdoc-sb').textContent)));
 ok(mode,'FS API '+(mode==='fs'?'vorhanden':'fehlt'),await page.evaluate(()=>RITL_DOC.fs)===(mode==='fs'));
 ok(mode,'Header-Knöpfe Neu/Öffnen/Speichern/Speichern unter (RITL-UI 1.6)',await page.evaluate(()=>['neu','auf','spe','unt'].every(k=>document.querySelector('header .ritl-tool #ritl-doc-'+k))&&RITLUI.version==='1.6'));
 ok(mode,'ritl-bk 2.12 Modus dokument (Stufe settings)',await page.evaluate(()=>RITLBK.version==='2.12'&&RITLBK.typ==='dokument'&&RITLBK.stand().stufe==='settings'));
 ok(mode,'kein „Backup einrichten“ über dem Startbildschirm',await page.evaluate(()=>new Promise(r=>setTimeout(()=>r(!document.getElementById('bksetup').open),1200))));
 await page.click('#rdoc-sb [data-a="neu"]');
 ok(mode,'Neu → Projekt offen',await page.evaluate(()=>RITL_DOC.offen&&!document.getElementById('rdoc-start').open&&!RITL_DOC.geaendert));
 await page.fill('#t-titel','Angebot Muster');await page.fill('#t-notiz','Zeile 1\nZeile 2 – äöü ß €');
 await page.setInputFiles('#t-file',[{name:'plan.pdf',mimeType:'application/pdf',buffer:Buffer.from('%PDF-1.4 Testinhalt '+'x'.repeat(5000))},{name:'bild.png',mimeType:'image/png',buffer:Buffer.from(Array.from({length:3000},(_, i)=>i%256))}]);
 const vorher=await blobHash(page);
 ok(mode,'Daten → „•“ ungespeichert in Titel und Header',await page.evaluate(()=>RITL_DOC.geaendert&&document.title.startsWith('• ')&&/•/.test(document.getElementById('ritl-doc-name').textContent)));
 // Speichern unter
 let dl=null;
 if(mode==='fs'){await page.click('#ritl-doc-unt');await page.waitForFunction(()=>!RITL_DOC.geaendert,null,{timeout:5000});await page.evaluate(()=>localStorage.setItem('__saved',window.__SAVED))}
 else{await page.click('#ritl-doc-unt');await page.waitForSelector('#rdoc-frage[open] #rdoc-name');await page.fill('#rdoc-name','Angebot Muster');
  const [d]=await Promise.all([page.waitForEvent('download'),page.click('#rdoc-ff [data-k="ok"]')]);dl=OUT+'/'+d.suggestedFilename();await d.saveAs(dl)}
 const dname=await page.evaluate(()=>RITL_DOC.datei);
 ok(mode,`Speichern unter → „${dname}“ (Endung .test.ritl)`,dname==='Angebot Muster.test.ritl'&&await page.evaluate(()=>!RITL_DOC.geaendert&&RITL_DOC.name==='Angebot Muster'));
 if(dl){const buf=fs.readFileSync(dl);ok(mode,'Datei ist gzip (1f 8b)',buf[0]===0x1f&&buf[1]===0x8b)}
 else{const g=await page.evaluate(async()=>{const d=await navigator.storage.getDirectory();const f=await (await d.getFileHandle(window.__SAVED)).getFile();const u=new Uint8Array(await f.slice(0,2).arrayBuffer());const o=JSON.parse(await new Response(f.stream().pipeThrough(new DecompressionStream('gzip'))).text());return u[0]===0x1f&&u[1]===0x8b&&o.ritl.typ==='dokument'&&o.ritl.tool==='test-ritl'&&o.ritl.sha256.length===64&&o.dateien.length===2&&!!o.dateien[0].b64});ok(mode,'Datei: gzip-JSON, Kopf {tool,typ,sha256}, Dateien base64',g)}
 // Neu → leer
 await page.click('#ritl-doc-neu');
 ok(mode,'Neu → leeres Projekt ohne Warnung',await page.evaluate(()=>T.titel===''&&T.dateien.length===0&&!document.getElementById('rdoc-frage').open));
 // Öffnen
 if(mode==='fs')await page.click('#ritl-doc-auf');
 else{const [fc]=await Promise.all([page.waitForEvent('filechooser'),page.click('#ritl-doc-auf')]);await fc.setFiles(dl)}
 await page.waitForFunction(()=>RITL_DOC.name==='Angebot Muster',null,{timeout:5000}).catch(()=>{});
 const nachher=await blobHash(page);
 ok(mode,'Öffnen → Vergleich Daten + Dateien gleich',vorher===nachher);
 // Strg+S
 await page.fill('#t-titel','Angebot Muster 2');
 if(mode==='fs'){await page.keyboard.press('Control+s');await page.waitForFunction(()=>!RITL_DOC.geaendert,null,{timeout:5000}).catch(()=>{});ok(mode,'Strg+S überschreibt direkt (ohne Dialog)',await page.evaluate(()=>!RITL_DOC.geaendert&&!document.getElementById('rdoc-frage').open))}
 else{const [d]=await Promise.all([page.waitForEvent('download',{timeout:5000}),page.keyboard.press('Control+s')]);ok(mode,'Strg+S → erneuter Download „'+d.suggestedFilename()+'“',d.suggestedFilename()==='Angebot Muster.test.ritl');dl=OUT+'/v2-'+d.suggestedFilename();await d.saveAs(dl)}
 // Warnung
 await page.fill('#t-notiz','ungespeichert');
 await page.click('#ritl-doc-neu');await page.waitForSelector('#rdoc-frage[open]');
 ok(mode,'Warnung vor Neu bei ungespeicherten Änderungen (eigener Dialog)',await page.evaluate(()=>/nicht gespeichert/i.test(document.getElementById('rdoc-frage').textContent)));
 for(const [w,h,n] of [[1920,1080,'1920'],[1280,860,'1280'],[390,844,'390']]){await page.setViewportSize({width:w,height:h});await page.screenshot({path:`${OUT}/${mode}-warnung-${n}-hell.png`})}
 await page.setViewportSize({width:1280,height:860});
 await page.click('#rdoc-ff [data-k="abbr"]');
 ok(mode,'Abbrechen → Daten bleiben',await page.evaluate(()=>T.notiz==='ungespeichert'&&RITL_DOC.geaendert));
 await page.keyboard.press('Control+o');await page.waitForSelector('#rdoc-frage[open]');ok(mode,'Strg+O → Warnung vor Öffnen',true);await page.click('#rdoc-ff [data-k="abbr"]');
 // Screenshots hell/dunkel, 3 Breiten
 for(const th of ['hell','dunkel']){
  if(th==='dunkel')await page.click('#theme-btn');
  for(const [w,h,n] of [[1920,1080,'1920'],[1280,860,'1280'],[390,844,'390']]){await page.setViewportSize({width:w,height:h});await page.waitForTimeout(150);await page.screenshot({path:`${OUT}/${mode}-projekt-${n}-${th}.png`})}
  await page.setViewportSize({width:1280,height:860});
  await page.evaluate(()=>RITLBK.setup());await page.waitForSelector('#bksetup[open]');
  if(th==='hell')ok(mode,'Backup einrichten: nur Spalte settings + Hinweis „Speichern unter …“',await page.evaluate(()=>document.querySelectorAll('#bks-body .bkgh').length===1&&/Projekte speichern Sie als eigene Datei/.test(document.getElementById('bks-body').textContent)));
  for(const [w,h,n] of [[1280,860,'1280'],[390,844,'390']]){await page.setViewportSize({width:w,height:h});await page.screenshot({path:`${OUT}/${mode}-bksetup-${n}-${th}.png`})}
  await page.setViewportSize({width:1280,height:860});await page.click('#bks-later');
 }
 await page.click('#theme-btn');
 // Zwischenspeicher
 if(mode==='fs'){await page.waitForTimeout(31500)}  // 30-s-Takt
 else{/* pagehide beim Neuladen */}
 const zwVor=await blobHash(page);
 page.on('dialog',d=>d.accept().catch(()=>{}));
 await page.reload();await page.waitForFunction(()=>window.TEST_BEREIT&&window.RITL_DOC);
 const da=await page.waitForSelector('#rdoc-frage[open]',{timeout:5000}).then(()=>true).catch(()=>false);
 const txt=da?await page.textContent('#rdoc-frage'):'';
 ok(mode,`Zwischenspeicher (${mode==='fs'?'30 s':'pagehide'}) → „Nicht gespeicherte Änderungen von … wiederherstellen?“`,da&&/wiederherstellen\?/.test(txt)&&/von heute/.test(txt));
 for(const [w,h,n] of [[1280,860,'1280'],[390,844,'390']]){await page.setViewportSize({width:w,height:h});await page.screenshot({path:`${OUT}/${mode}-zwischen-${n}-hell.png`})}
 await page.setViewportSize({width:1280,height:860});
 if(da)await page.click('#rdoc-ff [data-k="ok"]');
 await page.waitForTimeout(200);
 ok(mode,'Wiederherstellen → Stand inkl. Dateien gleich, weiter „•“',(await blobHash(page))===zwVor&&await page.evaluate(()=>RITL_DOC.geaendert&&RITL_DOC.name==='Angebot Muster'));
 // beforeunload
 let bu=false;page.removeAllListeners('dialog');page.on('dialog',d=>{if(d.type()==='beforeunload')bu=true;d.dismiss().catch(()=>{})});
 await page.close({runBeforeUnload:true});await new Promise(r=>setTimeout(r,800));
 ok(mode,'beforeunload-Warnung beim Schließen',bu);
 // Zuletzt geöffnet nach Verwerfen
 const p2=await ctx.newPage();p2.on('pageerror',e=>errs.push(e.message));await p2.goto(url);await p2.waitForFunction(()=>window.TEST_BEREIT&&window.RITL_DOC);
 if(await p2.waitForSelector('#rdoc-frage[open]',{timeout:4000}).then(()=>true).catch(()=>false))await p2.click('#rdoc-ff [data-k="weg"]');
 await p2.waitForSelector('#rdoc-start[open]',{timeout:4000}).catch(()=>{});
 ok(mode,'Verwerfen → Startbildschirm mit „Zuletzt geöffnet“: Angebot Muster',await p2.evaluate(()=>!!document.querySelector('#rdoc-sb [data-d="Angebot Muster.test.ritl"]')));
 for(const th of ['hell','dunkel']){if(th==='dunkel')await p2.evaluate(()=>RITLUI.theme('dark'));for(const [w,h,n] of [[1920,1080,'1920'],[1280,860,'1280'],[390,844,'390']]){await p2.setViewportSize({width:w,height:h});await p2.waitForTimeout(120);await p2.screenshot({path:`${OUT}/${mode}-start-${n}-${th}.png`})}}
 await p2.evaluate(()=>RITLUI.theme('light'));await p2.setViewportSize({width:1280,height:860});
 if(mode==='fs'){await p2.click('#rdoc-sb [data-d="Angebot Muster.test.ritl"]');await p2.waitForFunction(()=>RITL_DOC.offen,null,{timeout:5000}).catch(()=>{});
  ok(mode,'Zuletzt geöffnet → Klick öffnet direkt über das gemerkte Handle',await p2.evaluate(()=>RITL_DOC.offen&&T.titel==='Angebot Muster 2'&&T.dateien.length===2))}
 else{const [fc]=await Promise.all([p2.waitForEvent('filechooser'),p2.click('#rdoc-sb [data-d="Angebot Muster.test.ritl"]')]);await fc.setFiles(dl);await p2.waitForFunction(()=>RITL_DOC.offen,null,{timeout:5000}).catch(()=>{});
  ok(mode,'Zuletzt geöffnet (ohne Handle) → Datei wählen → geöffnet',await p2.evaluate(()=>RITL_DOC.offen&&T.titel==='Angebot Muster 2'&&T.dateien.length===2))}
 const zl=await p2.evaluate(()=>RITL_DOC.zuletztExport());ok(mode,'zuletztExport ohne Handles (für ritl-bk)',zl.length>=1&&zl.every(x=>!('handle' in x)));
 // Übernahme
 await p2.evaluate(()=>{localStorage.setItem('riemer-test-alt',JSON.stringify({titel:'Altbestand',notiz:'aus Datenbank-Zeit'}));localStorage.removeItem('riemer-test-doc-uebernahme')});
 const p3=await ctx.newPage();await p2.close();p3.on('pageerror',e=>errs.push(e.message));await p3.goto(url);await p3.waitForFunction(()=>window.TEST_BEREIT&&window.RITL_DOC);
 const ue=await p3.waitForSelector('#rdoc-frage[open]',{timeout:4000}).then(()=>p3.textContent('#rdoc-frage')).catch(()=>'');
 ok(mode,'Übernahme alter Daten angeboten („TEST – übernommen.test.ritl“)',/TEST – übernommen\.test\.ritl/.test(ue));
 await p3.screenshot({path:`${OUT}/${mode}-uebernahme-1280-hell.png`});
 if(mode==='fs'){await p3.click('#rdoc-ff [data-k="ok"]');await p3.waitForFunction(()=>!RITL_DOC.geaendert&&RITL_DOC.offen,null,{timeout:5000}).catch(()=>{});ok(mode,'Übernahme gespeichert als Datei',await p3.evaluate(()=>RITL_DOC.datei==='TEST – übernommen.test.ritl'&&T.titel==='Altbestand'))}
 else{await p3.click('#rdoc-ff [data-k="nie"]');ok(mode,'„Nicht übernehmen“ → nicht mehr fragen',await p3.evaluate(()=>localStorage.getItem('riemer-test-doc-uebernahme')==='nein'))}
 ok(mode,'keine JS-Fehler',errs.length===0);if(errs.length)console.log(errs);
 await ctx.close();
}
await b.close();SRV.stop();
fs.writeFileSync(OUT+'/ergebnis.txt',res.join('\n'));process.exitCode=res.some(x=>x.startsWith('✗'))?1:0;
