/* LAB.ritl – Service Worker (Test installierbare Web-App) · V1.0 · 19.11.2026
   Gilt nur für den Ordner lab.ritl/ (Scope).
   1) Anmeldeseite, Loader, Icons und Schriften: Netz zuerst, sonst Zwischenspeicher → App startet auch ohne Netz.
   2) Lizenzprüfung (license-check, POST) für lab-ritl: Netz zuerst. Eine erfolgreiche Antwort (Tool-HTML) wird
      als „letzter Stand“ gespeichert und nur verwendet, wenn das Netz fehlt. Keine Lizenzschlüssel im Speicher. */
const SHELL = 'lab-ritl-shell-v1', TOOL = 'lab-ritl-tool', LAST = './__letzter-stand__';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon.svg',
  '../lizenz/loader.js', '../fonts/fonts.css'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => Promise.all(FILES.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('lab-ritl-shell-') && k !== SHELL).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

async function netzZuerst(req) {
  const c = await caches.open(SHELL);
  try {
    const r = await fetch(req);
    if (r && r.ok && (r.type === 'basic' || r.type === 'cors')) c.put(req, r.clone());
    return r;
  } catch (err) {
    const m = await c.match(req, { ignoreSearch: true }) || (req.mode === 'navigate' ? await c.match('./') : null);
    if (m) return m;
    throw err;
  }
}

async function lizenz(req) {
  let tool = '';
  try { tool = (await req.clone().json()).tool || ''; } catch (e) {}
  if (tool !== 'lab-ritl') return fetch(req);
  try {
    const r = await fetch(req);
    try {
      const d = await r.clone().json();
      if (d && d.ok && d.html) {
        const c = await caches.open(TOOL);
        await c.put(LAST, new Response(JSON.stringify({ ok: true, html: d.html, offline_cache: true }),
          { headers: { 'Content-Type': 'application/json', 'x-lab-saved': new Date().toISOString() } }));
      }
    } catch (e) {}
    return r;
  } catch (err) {
    const m = await (await caches.open(TOOL)).match(LAST);
    if (m) return m;
    throw err;
  }
}

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method === 'POST' && /\/functions\/v1\/license-check$/.test(url.pathname)) { e.respondWith(lizenz(req)); return; }
  if (req.method !== 'GET') return;
  const eigen = url.origin === self.location.origin;
  if (eigen && (url.pathname.includes('/lab.ritl/') || url.pathname.includes('/lizenz/loader.js') || url.pathname.includes('/fonts/')))
    e.respondWith(netzZuerst(req));
});
