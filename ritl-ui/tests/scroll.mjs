// Rundlauf Scrollregel (RITL-UI 1.7): node ritl-ui/tests/scroll.mjs [--shots]
// Desktop (Rad, Tastatur) + Touch-Emulation (iPhone 13, Pixel 7 – Chromium mit Touch-Gesten über CDP).
import {playwright,starten} from '../../ritl-doc/tests/_server.mjs';
const {chromium,devices}=playwright();const SHOTS=process.argv.includes('--shots');
const srv=await starten();const erg=[];let fehler=0;
const ok=(profil,schritt,b,info='')=>{erg.push([profil,schritt,b,info]);if(!b)fehler++;console.log(`${b?'✓':'✗'} [${profil}] ${schritt}${info?' – '+info:''}`)};
const warte=ms=>new Promise(r=>setTimeout(r,ms));
async function lauf(profil,ctxOpt,touch){
 const br=await chromium.launch();const ctx=await br.newContext(ctxOpt);const p=await ctx.newPage();const cdp=await ctx.newCDPSession(p);
 const err=[];p.on('pageerror',e=>err.push(e.message));
 await p.goto(srv.basis+'/ritl-ui/test-scroll.html');await p.waitForFunction(()=>window.TEST_BEREIT&&window.RITLUI&&RITLUI.overlay);
 const y=()=>p.evaluate(()=>Math.round(scrollY)),oben=()=>p.evaluate(()=>scrollTo(0,0)),gesperrt=()=>p.evaluate(()=>RITLUI.overlay());
 const box=async s=>{const b=await p.locator(s).first().boundingBox();return {x:b.x+b.width/2,y:b.y+b.height/2}};
 async function scroll(x,y0,dy){const v=p.viewportSize();x=Math.max(5,Math.min(v.width-5,x));y0=Math.max(5,Math.min(v.height-5,y0));if(touch){const T=(type,yy)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:type==='touchEnd'?[]:[{x:Math.round(x),y:Math.round(yy)}]});
  const st=Math.min(v.height-5,y0+dy/2),n=10;await T('touchStart',st);for(let i=1;i<=n;i++){await T('touchMove',st-dy*i/n);await warte(16)}await T('touchEnd');}
  else{await p.mouse.move(x,y0);await p.mouse.wheel(0,dy)}await warte(250)}
 const W=touch?240:400;const art=touch?'Wischen':'Rad';
 // 1 frei
 await oben();let c=await box('#inhalt p:nth-child(3)');await scroll(c.x,c.y,W);ok(profil,`ohne Overlay: ${art} scrollt Seite`,(await y())>0);
 // 2 Ribbon
 await oben();c=await box('#ribbon button:nth-child(6)');const rl0=await p.evaluate(()=>ribbon.scrollLeft);await scroll(c.x,c.y,W);
 ok(profil,`${art} über Ribbon scrollt Seite (Ribbon bleibt)`,(await y())>0&&(await p.evaluate(()=>ribbon.scrollLeft))===rl0);
 // 3 Liste am Ende → Seite
 if(!touch||true){await oben();await p.evaluate(()=>{liste.scrollTop=1e6});c=await box('#liste');const l0=await y();await scroll(c.x,Math.min(c.y,300),W);
  ok(profil,`Liste am Ende: ${art} scrollt Seite weiter`,(await y())>l0);}
 // 4 Dialog
 await p.evaluate(()=>scrollTo(0,200));await p.click('#b-dlg',{force:true}).catch(()=>p.evaluate(()=>dlg.showModal()));await warte(100);
 if(!(await p.evaluate(()=>dlg.open)))await p.evaluate(()=>dlg.showModal());
 const y4=await y();ok(profil,'Dialog offen → gesperrt',await gesperrt());
 const vp=p.viewportSize();await scroll(8,vp.height-8,W);ok(profil,`Dialog: ${art} auf Hintergrund → Seite steht`,(await y())===y4,`${await y()} vs ${y4}`);
 c=await box('#dlg-db');await scroll(c.x,c.y,W/2);const st=await p.evaluate(()=>$('dlg-db').scrollTop);
 ok(profil,`Dialog: ${art} im Inhalt scrollt Dialog, Seite steht`,st>0&&(await y())===y4,`db ${st}`);
 await p.evaluate(()=>{$('dlg-db').scrollTop=1e6});await scroll(c.x,c.y,W);ok(profil,`Dialog am Ende: ${art} → Seite steht`,(await y())===y4);
 if(!touch){for(const k of ['PageDown','Space','End']){await p.keyboard.press(k);await warte(150)}ok(profil,'Dialog: Bild↓/Leertaste/Ende → Seite steht',(await y())===y4)}
 if(SHOTS)await p.screenshot({path:`dist/scroll-${profil}-dialog.png`}).catch(()=>{});
 await p.evaluate(()=>dlg.close());await warte(100);ok(profil,'Dialog zu → frei',!(await gesperrt()));
 c=await box('#inhalt p:nth-child(8)');const y5=await y();await scroll(c.x,Math.min(c.y,vp.height-40),W);ok(profil,`Dialog zu: ${art} scrollt Seite`,(await y())>y5);
 if(!touch){const y6=await y();await p.locator('#inhalt').click({position:{x:5,y:5}});await p.keyboard.press('PageDown');await warte(250);ok(profil,'ohne Overlay: Bild↓ scrollt Seite',(await y())>y6)}
 // 5 Bottom-Sheet (data-ritl-overlay, hidden)
 await p.evaluate(()=>{scrollTo(0,200);$('sheet').hidden=false});await warte(50);const y7=await y();ok(profil,'Bottom-Sheet offen → gesperrt',await gesperrt());
 await scroll(vp.width/2,20,W);ok(profil,`Bottom-Sheet: ${art} oberhalb → Seite steht`,(await y())===y7);
 c=await box('#sheet-pn');await scroll(c.x,c.y,W/2);ok(profil,`Bottom-Sheet: ${art} im Blatt scrollt Blatt`,(await p.evaluate(()=>$('sheet-pn').scrollTop))>0&&(await y())===y7);
 await p.evaluate(()=>{$('sheet-pn').scrollTop=1e6});await scroll(c.x,c.y,W);ok(profil,`Bottom-Sheet am Ende: ${art} → Seite steht`,(await y())===y7);
 await p.evaluate(()=>{$('sheet').hidden=true});await warte(50);ok(profil,'Bottom-Sheet zu → frei',!(await gesperrt()));
 // 6 Menü (Dropdown)
 await p.evaluate(()=>{scrollTo(0,0);$('menu').hidden=false});await warte(50);const y8=await y();ok(profil,'Menü offen → gesperrt',await gesperrt());
 c=await box('#inhalt p:nth-child(4)');await scroll(c.x+150,c.y,W);ok(profil,`Menü: ${art} auf Seite → Seite steht`,(await y())===y8);
 c=await box('#menu');await scroll(c.x,c.y,W/3);ok(profil,`Menü: ${art} im Menü scrollt Menü`,(await p.evaluate(()=>$('menu').scrollTop))>0);
 await p.evaluate(()=>{$('menu').hidden=true});await warte(50);ok(profil,'Menü zu → frei',!(await gesperrt()));
 // 7 API (Eltern blendet ein)
 await p.evaluate(()=>{$('b-api').click()});await warte(50);ok(profil,'RITLUI.overlay(el,true) → gesperrt',await gesperrt());
 await p.evaluate(()=>{$('eltern-zu').click()});await warte(50);ok(profil,'RITLUI.overlay(el,false) → frei',!(await gesperrt()));
 // 7b Fixierte Arbeitsfläche 🔒 (Overlay) mit Zoom-Fläche data-ritl-zoom: Rad/Ziehen/Pinch gehen, Seite steht
 await p.evaluate(()=>{scrollTo(0,200);Object.assign(ZS,{wheel:0,wheelGesperrt:0,touch:0,touchGesperrt:0,s:1,x:0,y:0});$('flaeche').hidden=false});await warte(50);
 const yz=await y();ok(profil,'Arbeitsfläche 🔒 offen → gesperrt',await gesperrt());c=await box('#zoomf');
 if(!touch){await scroll(c.x,c.y,-300);const z=await p.evaluate(()=>({...ZS}));ok(profil,'Zoom-Fläche: Rad zoomt, nicht verworfen, Seite steht',z.wheel>0&&!z.wheelGesperrt&&z.s>1&&(await y())===yz,JSON.stringify(z))}
 else{const T=(type,pts)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:pts.map(q=>({x:Math.round(q[0]),y:Math.round(q[1])}))});
  await T('touchStart',[[c.x,c.y]]);for(let i=1;i<=8;i++){await T('touchMove',[[c.x+i*10,c.y+i*6]]);await warte(16)}await T('touchEnd',[]);await warte(100);
  let z=await p.evaluate(()=>({...ZS}));ok(profil,'Zoom-Fläche: Ziehen verschiebt, nicht verworfen, Seite steht',z.touch>0&&!z.touchGesperrt&&z.x>40&&(await y())===yz,JSON.stringify(z));
  await T('touchStart',[[c.x-20,c.y],[c.x+20,c.y]]);for(let i=1;i<=8;i++){await T('touchMove',[[c.x-20-i*8,c.y],[c.x+20+i*8,c.y]]);await warte(16)}await T('touchEnd',[]);await warte(100);
  z=await p.evaluate(()=>({...ZS}));ok(profil,'Zoom-Fläche: Pinch zoomt, nicht verworfen, Seite steht',z.s>1.5&&!z.touchGesperrt&&(await y())===yz,JSON.stringify(z))}
 await p.evaluate(()=>{$('flaeche').hidden=true});await warte(50);ok(profil,'Arbeitsfläche zu → frei',!(await gesperrt()));
 // 8 kein Springen: Header-Position und Breite bleiben
 await p.evaluate(()=>scrollTo(0,300));const a=await p.evaluate(()=>{const r=document.querySelector('.ritl-in').getBoundingClientRect();return [r.x,r.width,scrollY]});
 await p.evaluate(()=>dlg.showModal());await warte(50);const b=await p.evaluate(()=>{const r=document.querySelector('.ritl-in').getBoundingClientRect();return [r.x,r.width,scrollY]});await p.evaluate(()=>dlg.close());
 ok(profil,'Sperre ohne Springen (Lage, Breite, scrollY gleich)',JSON.stringify(a)===JSON.stringify(b),`${a} / ${b}`);
 ok(profil,'keine JS-Fehler',!err.length,err.join(' | '));
 // 9 ritl-doc Startbildschirm + ritl-bk Backup-Dialog (Testseite ritl-doc)
 const q=await ctx.newPage();await q.goto(srv.basis+'/ritl-doc/test.html');await q.waitForFunction(()=>window.TEST_BEREIT&&window.RITLBK&&window.RITL_DOC,null,{timeout:15000});await warte(500);
 const s1=await q.evaluate(()=>({start:document.getElementById('rdoc-start').open,ov:document.getElementById('rdoc-start').hasAttribute('data-ritl-overlay'),lock:RITLUI.overlay(),doc:RITL_DOC.version,bk:RITLBK.version}));
 ok(profil,'ritl-doc Startbildschirm offen → gesperrt',s1.ov&&(!s1.start||s1.lock),JSON.stringify(s1));
 await q.evaluate(()=>{const d=document.getElementById('rdoc-start');if(d.open)d.close()});await warte(50);
 await q.evaluate(()=>RITLBK.open());await warte(300);
 const s2=await q.evaluate(()=>({open:document.getElementById('bkdlg').open,ov:document.getElementById('bkdlg').hasAttribute('data-ritl-overlay'),lock:RITLUI.overlay()}));
 ok(profil,'ritl-bk Backup-Dialog offen → gesperrt',s2.open&&s2.ov&&s2.lock,JSON.stringify(s2));
 await br.close();
}
await lauf('Desktop',{viewport:{width:1280,height:800}},false);
await lauf('iPhone 13',{...devices['iPhone 13']},true);
await lauf('Pixel 7',{...devices['Pixel 7']},true);
srv.stop();console.log(`\n${erg.length-fehler}/${erg.length} ✓`);process.exit(fehler?1:0);
