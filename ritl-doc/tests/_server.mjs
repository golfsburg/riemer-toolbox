// Gemeinsam für die Rundläufe: Playwright finden und das Repo per HTTP ausliefern (Testseite lädt die Bausteine per fetch)
import http from 'http';import fs from 'fs';import path from 'path';import {createRequire} from 'module';import {fileURLToPath} from 'url';
const require=createRequire(import.meta.url);
export function playwright(){for(const p of ['playwright',process.env.PLAYWRIGHT_PATH,'/opt/node-tools/node_modules/playwright'].filter(Boolean)){try{return require(p)}catch(e){}}
 throw new Error('Playwright nicht gefunden – „npm i playwright“ oder PLAYWRIGHT_PATH setzen')}
const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..','..');
const MIME={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml'};
export function starten(){return new Promise(ok=>{const srv=http.createServer((q,r)=>{const f=path.join(ROOT,decodeURIComponent(new URL(q.url,'http://x').pathname));
  if(!f.startsWith(ROOT)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);return r.end()}
  r.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'application/octet-stream','Cache-Control':'no-store'});fs.createReadStream(f).pipe(r)});
 srv.listen(0,'127.0.0.1',()=>ok({basis:`http://127.0.0.1:${srv.address().port}`,stop:()=>srv.close()}))})}
