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

  function render(msg, typed) {
    document.title = NAME + " – Lizenz erforderlich";
    document.body.innerHTML =
      '<style>' +
      ':root{--bg:#f5f6f8;--card:#fff;--text:#1b1f24;--muted:#6b7280;--accent:#c8102e;--line:#d1d5db}' +
      '@media(prefers-color-scheme:dark){:root{--bg:#14161a;--card:#1e2127;--text:#e8eaed;--muted:#9aa0a6;--line:#3a3f47}}' +
      '*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:1rem;' +
      'font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:var(--bg);color:var(--text)}' +
      '.card{background:var(--card);width:100%;max-width:420px;padding:2rem;border-radius:14px;' +
      'box-shadow:0 4px 16px rgba(0,0,0,.08);border-top:4px solid var(--accent)}' +
      'h1{margin:0 0 .25rem;font-size:1.35rem}.sub{margin:0 0 1.5rem;color:var(--muted);font-size:.9rem}' +
      'label{display:block;font-size:.8rem;font-weight:600;margin-bottom:.35rem}' +
      'input{width:100%;padding:.75rem .9rem;font:600 1.05rem ui-monospace,Consolas,monospace;letter-spacing:.06em;' +
      'border:1px solid var(--line);border-radius:8px;background:transparent;color:inherit;text-transform:uppercase}' +
      'input:focus{outline:2px solid var(--accent);outline-offset:1px}' +
      'button{margin-top:1rem;width:100%;padding:.8rem;border:0;border-radius:8px;background:var(--accent);' +
      'color:#fff;font-weight:600;font-size:1rem;cursor:pointer}button:disabled{opacity:.6;cursor:wait}' +
      '.err{margin-top:1rem;padding:.7rem .9rem;border-radius:8px;background:#fee2e2;color:#991b1b;font-size:.9rem}' +
      '.foot{margin-top:1.5rem;font-size:.78rem;color:var(--muted);text-align:center}.foot a{color:inherit}' +
      '</style>' +
      '<form class="card" id="f" autocomplete="off">' +
      '<h1>🔒 ' + NAME + '</h1>' +
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
      document.body.innerHTML = '<p style="font-family:system-ui;text-align:center;margin-top:40vh;color:#888">Lizenz wird geprüft …</p>';
      unlock(saved, false);
    } else {
      render("");
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
