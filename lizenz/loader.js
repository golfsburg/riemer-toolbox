/*!
 * RIEMER Toolbox – Lizenz-Loader
 * Copyright (c) 2026 Peter Riemer – Alle Rechte vorbehalten.
 *
 * Einbindung in einer Tool-Seite:
 *   <script src="../lizenz/loader.js" data-tool="pptx-manager" data-name="PPTX Manager"></script>
 *
 * Der eigentliche Tool-Code liegt NICHT in diesem Repo, sondern wird nach
 * erfolgreicher Lizenzprüfung vom Server geladen.
 * URL-Parameter ?abmelden entfernt den gespeicherten Schlüssel auf diesem Gerät.
 */
(function () {
  "use strict";

  var API = "https://hcluxhlvshydnncprpbl.supabase.co/functions/v1/license-check";
  var script = document.currentScript;
  var TOOL = script.getAttribute("data-tool");
  var NAME = script.getAttribute("data-name") || TOOL;
  var KEY_STORE = "riemer-lizenz:" + TOOL;
  var DEVICE_STORE = "riemer-geraet";

  var MESSAGES = {
    invalid_key: "Dieser Lizenzschlüssel ist ungültig.",
    revoked: "Diese Lizenz wurde deaktiviert.",
    expired: "Diese Lizenz ist abgelaufen.",
    tool_not_licensed: "Diese Lizenz gilt nicht für " + NAME + ".",
    tool_not_found: "Dieses Tool ist derzeit nicht verfügbar.",
    device_limit: "Die maximale Anzahl an Geräten für diese Lizenz ist erreicht.",
    server_error: "Serverfehler – bitte später erneut versuchen.",
    network: "Keine Verbindung zum Lizenzserver. Bitte Internetverbindung prüfen."
  };

  function store(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v);
    } catch (e) { return null; }
  }

  function deviceId() {
    var id = store(DEVICE_STORE);
    if (!id) {
      id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID()
         : "d-" + Date.now().toString(36) + Math.random().toString(36).slice(2);
      store(DEVICE_STORE, id);
    }
    return id;
  }

  function formatKey(v) {
    var raw = v.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (raw.indexOf("RT") === 0) raw = raw.slice(2);
    raw = raw.slice(0, 16);
    var parts = raw.match(/.{1,4}/g) || [];
    return parts.length ? "RT-" + parts.join("-") : "";
  }

  if (/[?&]abmelden\b/.test(location.search)) store(KEY_STORE, null);

  (function () {
    var t = store("riemer-theme");
    if (t !== "light" && t !== "dark") t = (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);
  })();

  function render(msg, typed) {
    document.title = NAME + " – Lizenz erforderlich";
    document.body.innerHTML =
      '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">' +
      '<style>' +
      ':root{--brand:#1F5FC2;--accent-text:#1F5FC2;--ink:#1B1F24;--muted:#5F6773;--surface:#FFFFFF;--surface-muted:#F4F5F7;' +
      '--line:#E3E6EB;--field:#FFFFFF;--danger:#B42318;--sans:"Inter",system-ui,sans-serif;--mono:"JetBrains Mono",ui-monospace,monospace;color-scheme:light}' +
      '[data-theme="dark"]{--accent-text:#6EA2FF;--ink:#F4F5F7;--muted:#9AA3AF;--surface:#1B1F24;--surface-muted:#23272E;' +
      '--line:#323843;--field:#1B1F24;--danger:#F97066;color-scheme:dark}' +
      '*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:16px;' +
      'font:400 14px/20px var(--sans);background:var(--surface);color:var(--ink)}' +
      '.card{background:var(--surface-muted);width:100%;max-width:440px;padding:40px;border-radius:16px;border:1px solid var(--line)}' +
      '.eyebrow{margin:0 0 8px;font:500 12px/16px var(--mono);letter-spacing:2px;text-transform:uppercase;color:var(--muted)}' +
      'h1{margin:0 0 8px;font:800 24px/30px var(--sans);letter-spacing:-.5px}h1 span{color:var(--accent-text)}' +
      '.sub{margin:0 0 24px;color:var(--muted)}' +
      'label{display:block;font:500 12px/16px var(--mono);letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:6px}' +
      'input{width:100%;padding:12px 14px;font:500 17px/24px var(--mono);letter-spacing:1px;' +
      'border:1px solid var(--line);border-radius:8px;background:var(--field);color:inherit;text-transform:uppercase}' +
      'input:focus{outline:2px solid var(--brand);outline-offset:0;border-color:transparent}' +
      'button{margin-top:16px;width:100%;padding:12px;border:0;border-radius:8px;background:var(--brand);' +
      'color:#fff;font:700 15px/20px var(--sans);cursor:pointer}button:hover{background:#1a52a8}button:disabled{opacity:.6;cursor:wait}' +
      '.err{margin-top:16px;padding:10px 12px;border-radius:3px;background:color-mix(in srgb,var(--danger) 14%,transparent);color:var(--danger)}' +
      '.foot{margin-top:24px;font-size:13px;color:var(--muted);text-align:center}.foot a{color:var(--muted)}.foot a:hover{color:var(--accent-text)}' +
      '</style>' +
      '<form class="card" id="f" autocomplete="off">' +
      '<p class="eyebrow">RIEMER Tools · 🔒 Lizenz</p>' +
      '<h1>' + NAME + '</h1>' +
      '<p class="sub">Für dieses Tool ist eine gültige Lizenz erforderlich.</p>' +
      '<label for="k">Lizenzschlüssel</label>' +
      '<input id="k" placeholder="RT-XXXX-XXXX-XXXX-XXXX" spellcheck="false" required>' +
      '<button id="b" type="submit">Freischalten</button>' +
      (msg ? '<div class="err">' + msg + '</div>' : '') +
      '<div class="foot">Lizenz anfragen: <a href="https://riemer.co">riemer.co</a> · ' +
      '<a href="../">RIEMER Toolbox</a></div>' +
      '</form>';

    var input = document.getElementById("k");
    input.value = typed || store(KEY_STORE) || "";
    input.addEventListener("input", function () { input.value = formatKey(input.value); });
    document.getElementById("f").addEventListener("submit", function (e) {
      e.preventDefault();
      unlock(formatKey(input.value), true);
    });
    input.focus();
  }

  function unlock(key, fromForm) {
    var btn = document.getElementById("b");
    if (btn) { btn.disabled = true; btn.textContent = "Prüfe Lizenz …"; }

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: key, tool: TOOL, device: deviceId() })
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res && res.ok && res.html) {
          store(KEY_STORE, key);
          document.open();
          document.write(res.html);
          document.close();
        } else {
          var code = (res && res.error) || "server_error";
          if (code !== "device_limit" && code !== "server_error") store(KEY_STORE, null);
          render(MESSAGES[code] || MESSAGES.server_error, fromForm ? key : "");
        }
      })
      .catch(function () { render(MESSAGES.network, key); });
  }

  function start() {
    var saved = store(KEY_STORE);
    if (saved) {
      document.body.innerHTML = '<p style="font:500 13px/18px ui-monospace,monospace;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:40vh;color:#9AA3AF">Lizenz wird geprüft …</p>';
      unlock(saved, false);
    } else {
      render("");
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
