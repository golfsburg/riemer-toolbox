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
  var GLOBAL_KEY = "riemer-lizenz";      // gesetzt durch die Anmeldung in myTOOLBOX.ritl
  var EMAIL_STORE = "riemer-email";
  var DEVICE_STORE = "riemer-geraet";

  var MESSAGES = {
    invalid_key: "Dieser Lizenzschlüssel ist ungültig.",
    invalid_login: "Lizenzschlüssel und E-Mail-Adresse passen nicht zusammen.",
    email_required: "Bitte gib die E-Mail-Adresse ein, auf die diese Lizenz ausgestellt ist.",
    invalid_email: "Bitte gib eine gültige E-Mail-Adresse ein.",
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

  /* Schlüsselformat RITL-XXXX-XXXX-XXXX-XXXX (alte Schlüssel RT-… werden umgeschrieben) */
  function formatKey(v) {
    var raw = String(v || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (raw.indexOf("RITL") === 0) raw = raw.slice(4);
    else if (raw.indexOf("RT") === 0) raw = raw.slice(2);
    var parts = raw.slice(0, 16).match(/.{1,4}/g) || [];
    return parts.length ? "RITL-" + parts.join("-") : "";
  }

  /* Passwortmanager: E-Mail = Benutzername, Lizenzschlüssel = Passwort */
  function offerSave(email, key) {
    try {
      if (window.PasswordCredential && navigator.credentials && navigator.credentials.store) {
        var c = new PasswordCredential({ id: email, password: key, name: "RIEMER Tools – " + NAME });
        return Promise.race([
          navigator.credentials.store(c).catch(function () {}),
          new Promise(function (r) { setTimeout(r, 1500); })
        ]);
      }
    } catch (e) {}
    return Promise.resolve();
  }

  var EYE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
  var EYE_OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 5.1A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.1M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7c1.8 0 3.4-.5 4.8-1.3"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';

  if (/[?&]abmelden\b/.test(location.search)) { store(KEY_STORE, null); store(GLOBAL_KEY, null); }

  (function () {
    var t = store("riemer-theme");
    if (t !== "light" && t !== "dark") t = (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);
  })();

  function render(msg, typed, typedEmail) {
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
      'border:1px solid var(--line);border-radius:8px;background:var(--field);color:inherit}' +
      '#em{font:400 16px/24px var(--sans);letter-spacing:0}' +
      'input:focus{outline:2px solid var(--brand);outline-offset:0;border-color:transparent}' +
      '.field{position:relative}.field input{padding-right:52px}' +
      '.eye{position:absolute;top:50%;right:6px;transform:translateY(-50%);margin:0;width:40px;height:40px;padding:0;border:0;' +
      'border-radius:6px;background:transparent;color:var(--muted);display:flex;align-items:center;justify-content:center}' +
      '.eye:hover{background:transparent;color:var(--accent-text)}.eye:focus-visible{outline:2px solid var(--brand)}.eye svg{width:20px;height:20px}' +
      '.vh{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}' +
      'button{margin-top:16px;width:100%;padding:12px;border:0;border-radius:8px;background:var(--brand);' +
      'color:#fff;font:700 15px/20px var(--sans);cursor:pointer}button:hover{background:#1a52a8}button:disabled{opacity:.6;cursor:wait}' +
      '.err{margin-top:16px;padding:10px 12px;border-radius:3px;background:color-mix(in srgb,var(--danger) 14%,transparent);color:var(--danger)}' +
      '.foot{margin-top:24px;font-size:13px;color:var(--muted);text-align:center}.foot a{color:var(--muted)}.foot a:hover{color:var(--accent-text)}' +
      '</style>' +
      '<form class="card" id="f" method="post" action="#">' +
      '<p class="eyebrow">RIEMER Tools · 🔒 Lizenz</p>' +
      '<h1>' + NAME + '</h1>' +
      '<p class="sub">Für dieses Tool ist eine gültige Lizenz erforderlich.</p>' +
      '<label for="em">E-Mail-Adresse</label>' +
      '<input id="em" type="email" name="email" autocomplete="username" placeholder="name@firma.at" spellcheck="false" autocapitalize="off" required>' +
      '<label for="k" style="margin-top:14px">Lizenzschlüssel</label>' +
      '<div class="field"><input id="k" type="password" name="password" autocomplete="current-password" placeholder="RITL-XXXX-XXXX-XXXX-XXXX" spellcheck="false" autocapitalize="characters" required>' +
      '<button class="eye" id="eye" type="button" aria-label="Lizenzschlüssel anzeigen" aria-pressed="false" title="Anzeigen">' + EYE + '</button></div>' +
      '<button id="b" type="submit">Freischalten</button>' +
      (msg ? '<div class="err">' + msg + '</div>' : '') +
      '<div class="foot">Lizenz anfragen: <a href="mailto:toolbox@riemer.co">toolbox@riemer.co</a> · ' +
      '<a href="../">RIEMER Toolbox</a></div>' +
      '</form>';

    var input = document.getElementById("k");
    var em = document.getElementById("em");
    input.value = formatKey(typed || store(KEY_STORE) || store(GLOBAL_KEY) || "");
    em.value = typedEmail || store(EMAIL_STORE) || "";
    input.addEventListener("input", function () { input.value = formatKey(input.value); });
    var eye = document.getElementById("eye");
    eye.addEventListener("click", function () {
      var show = input.type === "password";
      input.type = show ? "text" : "password";
      eye.innerHTML = show ? EYE_OFF : EYE;
      eye.setAttribute("aria-pressed", show ? "true" : "false");
      eye.setAttribute("aria-label", show ? "Lizenzschlüssel verbergen" : "Lizenzschlüssel anzeigen");
      eye.title = show ? "Verbergen" : "Anzeigen";
      input.focus();
    });
    document.getElementById("f").addEventListener("submit", function (e) {
      e.preventDefault();
      unlock(formatKey(input.value), em.value.trim(), true);
    });
    (em.value ? input : em).focus();
  }

  function unlock(key, email, fromForm) {
    var btn = document.getElementById("b");
    if (btn) { btn.disabled = true; btn.textContent = "Prüfe Lizenz …"; }

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: key, tool: TOOL, device: deviceId(), email: email || null })
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res && res.ok && res.html) {
          store(KEY_STORE, key);
          if (email) store(EMAIL_STORE, email);
          (fromForm && email ? offerSave(email, key) : Promise.resolve()).then(function () {
            document.open();
            document.write(res.html);
            document.close();
          });
        } else {
          var code = (res && res.error) || "server_error";
          if (["invalid_key", "revoked", "expired", "tool_not_licensed"].indexOf(code) >= 0) {
            store(KEY_STORE, null);
            if (store(GLOBAL_KEY) === key) store(GLOBAL_KEY, null);
          }
          var keep = fromForm || code === "email_required" || code === "invalid_login" || code === "device_limit";
          render(MESSAGES[code] || MESSAGES.server_error, keep ? key : "", email);
        }
      })
      .catch(function () { render(MESSAGES.network, key, email); });
  }

  function start() {
    var saved = store(KEY_STORE) || store(GLOBAL_KEY);
    if (saved && formatKey(saved) !== saved) { saved = formatKey(saved); store(KEY_STORE, saved); }
    if (saved) {
      document.body.innerHTML = '<p style="font:500 13px/18px ui-monospace,monospace;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:40vh;color:#9AA3AF">Lizenz wird geprüft …</p>';
      unlock(saved, store(EMAIL_STORE), false);
    } else {
      render("");
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
