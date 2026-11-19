# ritl-bk 2.0 – einheitliches Backup der RIEMER Tools (ab 19.11.2026)

Regel **S-17**, Rollout **R-13**. Vorbild: MUSTER.ritl V3.8. Baustein: [`ritl-bk.html`](ritl-bk.html) · Änderungen: [`CHANGELOG.md`](CHANGELOG.md).
Ein Block `<!--ritl-bk:start-->…<!--ritl-bk:end-->` (CSS + JS) enthält das ganze Backup: Knopf-Symbol am `#backupBtn`, Fenster „Backup“,
„Backup einrichten“, Konfliktdialog, Dateiablage `RITLF`, Ordner-Verknüpfung, lokal sichern/laden, zentrales Backup mit Historie,
RITL-Sync (C), Ordner als Datenbank (B), Offline-Version (`RITL.offline`) und Admin-Vorschau (`RITL.preview`).
Tool-spezifisch ist nur der **Adapter** `window.RITL_BK`. Später ersetzt der Lizenzserver den Block beim Ausliefern durch die Fassung des Kanals (wie RITL-UI).

## Begriffe

| | Datenquelle (DB-Wert) | Bedeutung im Baustein |
| --- | --- | --- |
| **A** | Lokal (`lokal`) | Daten im Browser; Backup lokal, im Ordner (je Gerät) und zentral mit Historie (Stufe 3 zentral als 2, Dateien nur lokal) |
| **B** | Ordner (`ordner`) | `Backup_NAME-ritl.json` im verknüpften Ordner ist der Stand (mind. Stufe 2, Stand-Nummer `ritl.rev`, Konfliktabfrage); Server nur settings |
| **C** | Server (`server`) | RITL-Sync in der gewählten Stufe (1 nur Einstellungen, 2 Arbeitsdaten, 3 zusätzlich Dateien über `tool_files`); Ordner als Kopie |

Stufe: **1 · settings** (Theme, Sprache + `settings()`), **2 · datenbank** (+ `daten()`), **3 · storage** (+ `dateien()`, Standard `RITLF.dump()`).

## Logik

- Start mit Lizenz: `state_head` → `backup {max, wahl, datenquelle, stufe, quota}`; die **wirksamen** Werte gelten sofort auf diesem Gerät
  (gemerkt in `riemer-<prefix>-srv`, `-srvst`, `-bklic` für den Start ohne Netz). „Backup einrichten“ öffnet sich nur bei B ohne verknüpften Ordner.
- „Backup einrichten“: „Lizenz: höchstens C3“ + Kontingent, Datenquelle A/B/C, Stufe 1/2/3, über dem Maximum gesperrt („· durch die Lizenz begrenzt“),
  Ordner dieses Geräts. „Übernehmen“ → `cfg_set {datenquelle, stufe}` (gilt für das Tool auf allen Geräten), Wechsel der Datenquelle mit Rückfrage
  und erstem Abgleich (→C `state_get`/`state_put` wie RITL-Sync, →B Ordner-Datei schreiben/übernehmen). „Vorgabe der Lizenz verwenden“ → `cfg_set {reset:true}`.
- Ohne Lizenz (kein Schlüssel, Offline-Version, Admin-Vorschau): nur A, Stufe frei, Wahl in `riemer-<prefix>-bkcfg`; Dialog beim ersten Start.
- Neues Gerät ohne eigene Daten (`leer()` = true) übernimmt den Stand vom Server bzw. aus dem Ordner still statt zu fragen.
- Fenster „Backup“ › 03 Zentral: Historie mit 🗑 je Stand (`delete {id}`), Belegung „x von y MB“ aus `quota`.

## Einbau in ein Tool (Phase 3)

1. Eigenen Backup-Code entfernen (CFG/bkcfg, openSetup, setupOrd/setupSrv, RITL-Sync, Ordner-Modus, BK_CONF, Dialoge `#bkdlg`, `#bksetup`, `#sydlg`,
   CSS `.bkst*`, `.bkind*`, `.lk`, `.iochk`, `.iolist`). Den Knopf `#backupBtn` im Header lassen (Symbol `#bkInd` setzt der Block, falls es fehlt).
2. **Adapter** als eigenes `<script>` vor dem Block (alle Funktionen werden erst bei Bedarf aufgerufen):

```js
window.RITL_BK = {
  tool: 'muster-ritl', name: 'MUSTER.ritl', datei: 'Backup_MUSTER-ritl.json', prefix: 'muster',
  ereignis: 'muster:change',                         // jede Speicherung im Tool → automatisches Sichern
  version: () => window.MUSTER_VER,                  // optional, sonst RITL.version_label bzw. data-ver des Headers
  texte: { settings: 'Farben, Ansichten, Filter, Favoriten', datenbank: 'Map, Matrix, Gewerke, FOKUS',
           storage: 'hochgeladene Dateien', rueckgaengig: 'Mit „Rückgängig“ in MAP.ritl lässt sich das zurücknehmen.' },
  settings: () => ({ zugeklappt, ansicht, filter, filtermodus, favoriten }), // Stufe 1 (Theme/Sprache ergänzt der Block)
  daten: () => ({ map: MAP.data().map }),            // Stufe 2 ohne settings; die Schlüssel gelten als „Arbeitsdaten“
  dateien: async () => RITLF.dump(),                 // Stufe 3, optional (Standard RITLF); dazu optional dateienLaden(list)
  anwenden: async (stufe, obj, quelle, still) => {}, // Wiederherstellen: stufe 'settings' = nur Einstellungen übernehmen
  leer: () => !localStorage.getItem('riemer-muster-map'), // neues Gerät ohne eigene Daten
  legacy: o => Array.isArray(o.nodes) ? { map: o } : null, // Alt-Format ohne Kopf „ritl“ → daten
  alt: { bkcfg: 'riemer-muster-bkcfg', srv: 'riemer-muster-srv', srvst: 'riemer-muster-srvst', sync: 'riemer-muster-sync',
         ordner: 'riemer-muster-ordner', oq: 'riemer-muster-oq', fs: 'riemer-muster-fs', idbFiles: 'muster_files', idbFs: 'muster_fs' }
};
```

   Bestätigung, Dateiablage, Theme, Sprache und Ordnername erledigt der Block **vor/nach** `anwenden` – das Tool lädt nur seine Daten und Einstellungen.
   Ohne `alt` gelten `riemer-<prefix>-<name>` und `<prefix>_files` / `<prefix>_fs` (so wie bisher in allen Tools).
3. **Block** `ritl-bk.html` unverändert in den `<body>` nach dem Header kopieren (nach dem Adapter). Er hängt die Dialoge an `<body>` an und setzt `window.RITLF`,
   falls das Tool keine eigene Dateiablage mitbringt. Code, der `RITLF` beim Laden braucht, gehört **hinter** den Block.
4. Tool-Code, der Ordner oder Backup-Funktionen nutzt (z. B. Favoriten), läuft über **`window.RITLBK`**:

| Aufruf | Zweck |
| --- | --- |
| `RITLBK.open()` · `RITLBK.setup()` · `RITLBK.schedule()` | Fenster „Backup“ / „Backup einrichten“ öffnen · automatisches Sichern anstoßen |
| `RITLBK.fs.status()` → `[klasse, text]` · `RITLBK.fs.buttons(ctx, extra)` | Ordner-Status und Knöpfe (`data-fs`); `extra = [[id, Text, 'primary'], …]` erscheint nur mit Zugriff |
| `RITLBK.fs.action(a)` | `link` · `renew` · `unlink` · `save` für eigene Dialoge |
| `RITLBK.fs.read(name, ask)` · `.write(name, obj, ask)` · `.run(fn, okMsg)` · `.perm(ask)` · `.handle` · `.supported()` | Dateien im verknüpften Ordner |
| `RITLBK.head(inhalt)` · `RITLBK.check(obj, 'backup' oder 'favoriten')` · `RITLBK.download(name, obj)` · `RITLBK.pickFile(input)` | Kopf „ritl“, Prüfen, Datei speichern/wählen |
| `RITLBK.restore(daten, quelle, still)` · `RITLBK.stand()` | Wiederherstellen · aktueller Zustand (Datenquelle, Stufe, Maximum, Wahl, Kontingent) |
| Ereignisse `ritlbk:fs` (Ordner-Zustand geändert) · `ritlbk:ready` | eigene Anzeigen nachziehen |

5. Prüfen: `node scripts/check.mjs <tool>` (alle ✓ inkl. S-17) und Playwright mit nachgestelltem Server wie MUSTER V3.8
   (C3 ohne Wahl, Wahl B2 + zweites Gerät, Maximum, A1, C3 mit Datei, Stand löschen, alte Backup-Dateien, Offline, Vorschau, Hell/Dunkel, 1920/1280/390).

---

# Bis ritl-bk 1.x – Anleitungen zum Kopieren (abgelöst durch ritl-bk 2.0)

Die folgenden Abschnitte beschreiben den Stand vor dem gemeinsamen Baustein. Sie gelten nur noch für Tools, die R-13 noch nicht umgesetzt haben.

## Backup-Stufe „storage“ (bis ritl-bk 1.x)

Regel: In **jedem** RIEMER Tool ist unter **01 Lokal** die Stufe `storage` wählbar: `datenbank` + alle hochgeladenen Dateien.
Zentral (Server) bleibt `storage` vorerst gesperrt („nur lokal, zentral folgt später“).

Vorbild: MUSTER.ritl V3.0 (Pilot). Umgesetzt: STAKE.ritl V1.8, DRIVE.ritl V1.7, PPTX.ritl V2.9, PDF.ritl V1.5, TRACK.ritl V2.7, LV.ritl V9.4 (je DEV).
PPTX/PDF (gemeinsames Backup-Modul `BK_CONF`): storage bettet das Komplett-Paket (.zip mit allen Originalen) als `daten.paket` ein; Wiederherstellen über `M.addFiles`.
TRACK.ritl (React/Vite): Baustein als TypeScript-Modul `src/utils/ritlFiles.ts` (IndexedDB `track_files`); GPX, Fotos und Puls-Dateien über RITLF, Fotos behalten zusätzlich ihre Vorschau in den Daten; 360°-Videos bewusst nicht.

### Einbau in ein Tool (bis ritl-bk 1.x)

1. **Dateiablage:** `ritl-files.js` vor den Backup-Block kopieren, `<name>` ersetzen (`muster` → IndexedDB `muster_files`, Ereignis `muster:change`).
2. **Uploads umstellen:** Jede hochgeladene Datei (Bild, PDF, Plan, Logo …) mit `await RITLF.put(file,{ref:'<wo sie hängt>'})` speichern; in den Daten nur die `id` merken. Anzeigen über `(await RITLF.get(id)).blob` → `URL.createObjectURL`.
   Tools, die Dateien schon als Data-URL in den Daten halten, dürfen das behalten – dann ist `storage` gleich `datenbank` + Dateiablage (leer). Neue Uploads immer über RITLF.
3. **Backup:**
   - `STUFEN` um `storage` ergänzen.
   - `async function stufeObjA(st)` neben `stufeObj`: bei `storage` → `stufeObj('datenbank')`, `ritl.stufe='storage'`, `daten.dateien = await RITLF.dump()`.
   - `backupObj()` wird `async` und ruft `stufeObjA(CFG.lokal.stufe)`; alle Aufrufe mit `await` (Download, Ordner, automatisch, Speicherort).
   - Zentral: `storage` nie senden (`CFG.zentral.stufe==='storage' ? 'datenbank' : …`).
   - `sizes()`: auch `storage` messen, `out.dateien = await RITLF.stats()`.
4. **Backup einrichten:** 01 Lokal zeigt `settings · datenbank · storage` (mit Anzahl Dateien und Größe); 02 Zentral zeigt `storage` gesperrt.
5. **Wiederherstellen:** Hat das Backup `daten.dateien`, im Bestätigungstext „Enthält n Datei(en) – die Dateiablage wird ersetzt.“ und danach `RITLF.load(d.dateien)`.
6. **Prüfen:** Datei hochladen → storage wählen → Backup speichern (Datei enthält `dateien` mit `b64`) → Datei löschen → Backup wiederherstellen → Datei ist wieder da und öffnet.

### Prompt für die Tool-Chats (bis ritl-bk 1.x)

> Backup-Stufe storage einbauen nach Skill /riemer-webapp-design, Abschnitt „Backup-Stufe storage und Dateiablage (RITLF)“ (Baustein riemer-toolbox/ritl-bk/ritl-files.js, Anleitung ritl-bk/README.md, Vorbild MUSTER.ritl V3.0). storage muss unter 01 Lokal immer wählbar sein, zentral gesperrt. Alle Uploads dieses Tools über RITLF speichern. Fehlen Backup-Stufen noch, zuerst settings/datenbank nach Abschnitt „Backup-Stufen und zentrales Backup“ einbauen. Als neue DEV-Version veröffentlichen, CHANGELOG und Quellen-ZIP.


## Server als Datenquelle (RITL-Sync) (bis ritl-bk 1.x)

Vorbild: MUSTER.ritl V3.1. Gilt für `settings` und `datenbank` (storage über den Server ist vorbereitet, noch nicht aktiv).

- **Server:** Tabelle `tool_state` (aktueller Stand je Lizenz/Tool/Stufe mit `rev`), RPC `tool_state_api`, Edge Function `tool-backup` mit den Aktionen `state_head`, `state_get`, `state_put` (`base_rev`, `force`; Konflikt → HTTP 409 `{error:'conflict', rev}`). Jedes `state_put` schreibt auch die 10-Tage-Historie (`tool_backups`) und zählt zum 50-MB-Kontingent.
- **Freigabe:** Admin › Lizenz › „Server freigeben“ (`licenses.server_quelle`). Ohne Freigabe antworten `state_*` und `files_*` mit `server_not_enabled`; das Tool prüft das mit `srvCheck()` (`state_head`) und merkt es in `riemer-<name>-srv`.
- **Einstellung:** erst mit Freigabe wählt die Nutzerin/der Nutzer `CFG.zentral.quelle` (Häkchen „Server ist die Datenquelle“ unter 02 Zentral in „Backup einrichten“; schaltet „zentral sichern“ mit ein). `syOn()` = zentral an + quelle + Lizenz + Freigabe.
- **Ablauf im Tool:** `SY={stufe,rev,sha}` in `localStorage` `riemer-<name>-sync`.
  - Start / online / Übernehmen: `syPull` – Server leer → hochladen; gleicher Inhalt → nur `rev` merken; Server neuer und hier nichts geändert → still übernehmen (`restore(…, still=true)`); beides geändert → Konfliktdialog `#sydlg`.
  - Änderung (`<name>:change`, Theme, Sprache): nach 2,5 s `syPush` mit `base_rev`; Konflikt → Dialog.
  - Alle 60 s und beim Zurückkehren ins Fenster `syCheck` (`state_head`).
  - Konfliktdialog: „Serverstand übernehmen“ / „Meinen Stand behalten“ (`force`).
- **Offline-Version:** `quelle` immer aus.

## storage über den Server (bis ritl-bk 1.x, aktiv ab MUSTER.ritl V3.2)

- Nur mit „Server ist die Datenquelle“; Stufe zentral `storage` = Stand `datenbank` + Dateien der Dateiablage (RITLF).
- Server: Bucket `tool-files` (privat), Tabelle `tool_files`, RPC `tool_files_api`, Edge Function `tool-backup`: `files_list`, `files_put` (→ signierte Upload-URL, PUT mit FormData wie supabase-js `uploadToSignedUrl`), `files_done`, `files_get` (→ signierte Download-URL, 5 Min.), `files_del`. Kontingent 50 MB je Lizenz für alle Dateien, eine Datei höchstens 50 MB.
- Tool: Prüfsumme des Stands enthält die Dateiliste (id, Größe, Name) – so merken andere Geräte neue/gelöschte Dateien.
  - Speichern (`syPush`): erst fehlende/geänderte Dateien hochladen, dann `state_put`; erst nach Erfolg am Server überzählige Dateien löschen (bei Konflikt nichts löschen).
  - Laden (`syApply`): Stand übernehmen, dann fehlende Dateien herunterladen und lokal überzählige löschen.

## Datenquelle je Lizenz (bis ritl-bk 1.x; damals „A Ordner · B Server“, heute B · Ordner · C · Server)

Standard **S-14**. Der Anbieter legt im Lizenz-Admin › „Datenquelle · Datenhoheit“ fest, wo die Daten einer Lizenz liegen
(`licenses.datenquelle`, `server_quelle` folgt automatisch):

| Wert | Bedeutung | Server (`tool_state`, `tool_backups`, `tool_files`) | Browser |
| --- | --- | --- | --- |
| `lokal` | Daten im Browser, Backups wie bisher | zentrales Backup mit Historie (settings, datenbank); `state_*` → `server_not_enabled` | alle |
| `ordner` (**A**) | Datei im OneDrive/SharePoint-Ordner ist die Datenbank (Datenhoheit) | **nur `settings`** – `state_put`/`save` mit anderer Stufe → `ordner_datenhoheit`, `files_*` → `server_not_enabled` | nur Chrome/Edge (File System Access API) |
| `server` (**B**) | Server ist die Datenbank (RITL-Sync) | alle Stufen inkl. storage/Dateien | alle |

- **Server:** `state_head` liefert `datenquelle` (auch im Fehlerfall `server_not_enabled`). Die Grenzen für A erzwingt der Server – auch ältere Tools können keine Arbeitsdaten ablegen.
- **Tool:** `srvCheck()` merkt `SRV.mode` (`riemer-<name>-srv`), `applyMode()` setzt die Konfiguration:
  - B: `CFG.zentral = {on, quelle: true, stufe ≥ datenbank}` – sonst unverändert RITL-Sync.
  - A: `CFG.zentral = {on, quelle: true, stufe: 'settings'}` (RITL-Sync nur für Einstellungen, `settingsObj()` enthält `ordner: {name, datei}`), `CFG.lokal = {on, stufe ≥ datenbank}`.
- **A im Tool (Ordner-Sync, Präfix `oq`):** Zustand `OQ = {rev, sha, mod}` in `riemer-<name>-oq`.
  - Datei = Backup-Objekt der lokalen Stufe mit `ritl.rev` (Stand-Nummer) und `ritl.geraet`; Prüfsumme über `daten` ohne `ordner`.
  - `oqPull` (Start, Verknüpfen, Zugriff erneuert, Rückkehr ins Fenster, alle 20 s bei geändertem `lastModified`): Datei fehlt → schreiben; gleich → nur merken; Datei neuer und hier nichts geändert → still übernehmen; beides geändert → Konfliktdialog (`#sydlg` mit Ordner-Texten).
  - `oqPush` (2,5 s nach `<name>:change`, Theme, Sprache; beim Verlassen sofort): vorher Datei lesen – hat ein anderes Gerät inzwischen geschrieben, Konfliktdialog statt Überschreiben; sonst `rev + 1`.
  - OneDrive-Konfliktkopien (`Backup_<NAME>-ritl*.json` außer der Hauptdatei) werden im Status gemeldet.
  - Kein Ordner auf diesem Gerät → „Backup einrichten“ öffnet sich mit Hinweis; nach Browser-Neustart ohne Zugriff → Backup-Dialog mit „Zugriff erneuern“.
  - Safari/Firefox/iOS: Hinweis „nur Chrome oder Edge am Computer“, Arbeit nur lokal.
- **Prompt für die Tool-Chats:** „Datenquelle je Lizenz (S-14) einbauen nach `riemer-toolbox/ritl-bk/README.md` › Datenquelle je Lizenz, Vorbild MUSTER.ritl V3.3 (Funktionen `ORD`, `SRVB`, `applyMode`, `oq*`, `setupOrd`, `setupSrv`). Als neue DEV-Version veröffentlichen, CHANGELOG und Quellen-ZIP.“
