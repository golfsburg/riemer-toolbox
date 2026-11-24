# ritl-bk 2.8 – einheitliches Backup der RIEMER Tools (ab 19.11.2026)

Regel **S-17**, Rollout **R-13**. Vorbild: MUSTER.ritl V3.9 (2.0: V3.8). Baustein: [`ritl-bk.html`](ritl-bk.html) · Änderungen: [`CHANGELOG.md`](CHANGELOG.md).
Ein Block `<!--ritl-bk:start-->…<!--ritl-bk:end-->` (CSS + JS) enthält das ganze Backup: Knopf-Symbol am `#backupBtn`, Fenster „Backup“,
„Backup einrichten“, Konfliktdialog, Dateiablage `RITLF`, Ordner-Verknüpfung, lokal sichern/laden, zentrales Backup mit Historie,
RITL-Sync (C), Ordner als Datenbank (B), Offline-Version (`RITL.offline`) und Admin-Vorschau (`RITL.preview`).
Tool-spezifisch ist nur der **Adapter** `window.RITL_BK`. Später ersetzt der Lizenzserver den Block beim Ausliefern durch die Fassung des Kanals (wie RITL-UI).

**Safari und Dateien (ab 2.8):** Ein `File` aus `<input>` liegt in IndexedDB nur als Verweis auf die Originaldatei. Safari (iPhone, iPad, Mac)
schickt so ein File per `FormData` als leeren Body (Storage: HTTP 400 „No content provided“, `content_length: 0`). Darum legt `RITLF.put` den Inhalt
als eigenen Blob ab (`arrayBuffer()`), `RITLF.get` liefert nur lesbare Dateien, und `filesUp()` liest jede Datei vor dem Hochladen noch einmal selbst
in den Speicher – das gilt auch für Tools mit eigener `RITLF`-Kopie. Nicht lesbare Dateien (0 Bytes bei `size > 0`) werden übersprungen, mit Hinweis
„… ist auf diesem Gerät nicht mehr lesbar …“, statt den ganzen Abgleich abzubrechen. Tools mit eigener Kopie: Stand aus `ritl-files.js` übernehmen.


## Nie bei jedem Start (ab 2.9.1, verbindlich)

„Backup einrichten“ (`#bksetup`) und der Backup-Dialog öffnen sich **nie bei jedem Start, jeder Lizenzprüfung oder jedem Neuladen**:

- von selbst höchstens **einmal je Gerät**: beim ersten Laden (`seen` fehlt in `riemer-<prefix>-bkcfg`) bzw. einmal bei Datenquelle B ohne verknüpften Ordner (`riemer-<prefix>-ordner-gefragt`);
- Schließen mit Esc, ✕ oder `Später` zählt wie `Übernehmen` – `seen` wird gesetzt (Ereignis `close` am Dialog);
- danach nur ein Hinweis (Toast) **höchstens 1× pro Tag** je Tool (`riemer-<prefix>-hinweis-ordner` bzw. `-hinweis-zugriff`, Datum `JJJJ-MM-TT`);
- Merker gehören in `localStorage` (überleben Neuladen, Loader und `document.write`), nie nur in eine Variable;
- Tools rufen `RITLBK.setup()` nur auf Klick auf.

## Begriffe

| | Datenquelle (DB-Wert) | Bedeutung im Baustein |
| --- | --- | --- |
| **A** | Lokal (`lokal`) | Daten im Browser; Backup lokal, im Ordner (je Gerät) und zentral mit Historie (Stufe 3 zentral als 2, Dateien nur lokal) |
| **B** | Ordner (`ordner`) | `Backup_NAME-ritl.json` im verknüpften Ordner ist der Stand (mind. Stufe 2, Stand-Nummer `ritl.rev`, Konfliktabfrage); Server nur settings |
| **C** | Server (`server`) | RITL-Sync in der gewählten Stufe (1 nur Einstellungen, 2 Arbeitsdaten, 3 zusätzlich Dateien über `tool_files`); Ordner als Kopie |

Stufe: **1 · settings** (Theme, Sprache + `settings()`), **2 · datenbank** (+ `daten()`), **3 · storage** (+ `dateien()`, Standard `RITLF.dump()`).

**Verknüpft (ab 2.4):** Die Lizenz legt je angebotener Datenquelle die höchste Stufe fest (`licenses.backup_matrix`, Admin › Lizenz ›
„Datenquelle · Datenhoheit & Backup-Stufe“), z. B. **A3 · B2 · C1**. Nicht angebotene Datenquellen sind gesperrt („durch die Lizenz nicht angeboten“),
die Stufen richten sich nach der gewählten Datenquelle („durch die Lizenz begrenzt (C bis Stufe 1)“).
Ab 2.7 sind **alle angebotenen Datenquellen gleichzeitig aktiv**, jede in ihrer Stufe (z. B. A3 + B2 + C1: alles im Browser, Arbeitsdaten im Ordner, nur Einstellungen über den Server). Der Baustein schreibt die Ordner-Datei in der B-Stufe und gleicht mit dem Server in der C-Stufe ab (C3 = mit Dateien); ohne C, aber mit B gehen nur Einstellungen über den Server. Der Server begrenzt das (`backup.server_stufe`, Fehler `stufe_limit`). `state_head` liefert `backup.alle = true`.
In 2.6 hatte in „Backup einrichten“ **jede Datenquelle ihre eigene Stufe** (Zeile A/B/C mit eigener Auswahl 1/2/3, B1 als „–“, gesperrt nach Lizenz) und eine Spalte **aktiv**. Die Stufen werden je Tool am Server gemerkt (`license_tool_backup.stufen`, `cfg_set {datenquelle, stufe, stufen}`); wirksam ist die Stufe der aktiven Datenquelle. `state_head`/`cfg_get` liefern dazu `backup.stufen`. Der Server begrenzt genauso (`cfg_set`, `_backup_cfg`).

## Logik

- **Start und Neuladen (ab 2.10, verbindlich):** Die Datenquelle mit der **höchsten Stufe** gibt den Stand vor (1 `settings` · 2 `datenbank` · 3 `storage`),
  bei gleicher Stufe **C vor B vor A** – auch wenn ihr Stand älter ist. Nur sie wird beim Start geholt (`syPull` bzw. `oqPull`); A gewinnt nur mit echt höherer Stufe
  (dann bleibt der Stand im Browser). Danach bekommen die anderen Datenquellen genau diesen Stand (`oqPush(true)` bzw. `syPush(true)`, ohne Meldung).
  Hat der Browser Änderungen, die die vorrangige Datenquelle nicht kennt, **und** wurde sie inzwischen geändert → Konfliktdialog; die anderen Datenquellen
  bleiben dann unverändert, bis entschieden ist. Nicht erreichbare Datenquellen (B ohne Ordner/Zugriff, C offline) zählen nicht mit.
  `RITLBK.stand().start` = `{quelle, stufe, reihenfolge}`; in der Konsole `[Backup] Start: Vorrang server:datenbank > ordner:datenbank > lokal:datenbank`.

- Start mit Lizenz: `state_head` → `backup {max: {datenquelle, stufe, matrix}, wahl, datenquelle, stufe, matrix, quota}`; die **wirksamen** Werte gelten sofort auf diesem Gerät
  (gemerkt in `riemer-<prefix>-srv`, `-srvst`, `-bklic` für den Start ohne Netz). „Backup einrichten“ öffnet sich von selbst höchstens **einmal je Gerät** (siehe „Nie bei jedem Start“).
- „Backup einrichten“: „Lizenz: höchstens A3 · B2 · C1“ (ab 2.4; vorher „C3“) + Kontingent, Datenquelle A/B/C, Stufe 1/2/3, über dem Maximum gesperrt („· durch die Lizenz begrenzt“),
  Ordner dieses Geräts. „Übernehmen“ → `cfg_set {datenquelle, stufe}` (gilt für das Tool auf allen Geräten), Wechsel der Datenquelle mit Rückfrage
  und erstem Abgleich (→C `state_get`/`state_put` wie RITL-Sync, →B Ordner-Datei schreiben/übernehmen). „Vorgabe der Lizenz verwenden“ → `cfg_set {reset:true}`.
- Ohne Lizenz (kein Schlüssel, Offline-Version, Admin-Vorschau): nur A, Stufe frei, Wahl in `riemer-<prefix>-bkcfg`; Dialog beim ersten Start.
- Neues Gerät ohne eigene Daten (`leer()` = true) übernimmt den Stand vom Server bzw. aus dem Ordner still statt zu fragen.
- Fenster „Backup“ › 03 Zentral: Historie mit 🗑 je Stand (`delete {id}`), Belegung „x von y MB“ aus `quota`.

## Rollout-Stand „alle Datenquellen gleichzeitig“ (ab ritl-bk 2.7, geprüft 24.11.2026)

Der Lizenzserver ersetzt den Block beim Ausliefern durch die neueste Version des Lizenz-Kanals. Ausgeliefert werden derzeit: **Stabil und Beta 2.8**, **Dev 2.10** (ab 24.11.2026: Start-Vorrang) – alle mit der Regel (alle Datenquellen gleichzeitig, Stufe je Datenquelle).
Eingebettete Kopie (gilt ohne Lizenz/Offline) und CHANGELOG-Eintrag „Backup: alle Datenquellen gleichzeitig aktiv, jede in ihrer Stufe (ritl-bk 2.7)“ sind in allen sieben Tools umgesetzt, jede Version mit Quellen-ZIP.

| Tool | Dev (eingebettet) | Beta (eingebettet) | Stabil (eingebettet) |
| --- | --- | --- | --- |
| PM.ritl | V3.1.22 (2.8) | – | V3.1 (2.0) |
| PPTX.ritl | V3.7.5 (2.7) | – | V2.9 (ohne Block) |
| PDF.ritl | V2.1.7 (2.7) | V2.1.3 (2.7) | – |
| LV.ritl | V10.0.5 (2.7) | V9.5 (ohne Block) | – |
| MSX.ritl | V5.8.5 Pro (2.8) | V5.8 Pro (2.8) | V4.3 Pro / V3.1 (ohne Block) |
| JFC.ritl | V4.0.5 (2.7) | – | – |
| STAKE.ritl | V2.6.5 (2.7) | – | V2.6 (2.0) |

Mit Block bekommt jede Version beim Ausliefern die Fassung ihres Kanals. Die älteren Freigaben **ohne Block** (PPTX Stabil V2.9, LV Beta V9.5, MSX Stabil V4.3/V3.1) werden bewusst **nicht nachgezogen** (Entscheidung 24.11.2026) – dort bleibt der alte Backup-Code, bis eine neuere Version des Tools in den Kanal freigegeben wird. **Rollout abgeschlossen.**

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
  dateiAlt: ['Backup_Zeiterfassung-ritl.json'],          // ab 2.2, optional: frühere Namen der Backup-Datei (Tool umbenannt)
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
| ab 2.1: `RITLBK.sync()` → Promise `{ok, datenquelle, rev, konflikt, fehler}` | Abgleich auf Knopfdruck: B Ordner-Datei, C Server (holen bzw. senden), A zentral sichern |
| ab 2.1: `RITLBK.extra()` | eigene Abschnitte (`extra`) neu zeichnen, z. B. nach einer Änderung im Tool |
| ab 2.1: Ereignis `ritlbk:applied` (`detail: {quelle, stufe, text, still}`) | nach dem Übernehmen eines Stands – `quelle` = `datei` · `zentral` · `server` · `ordner`, bei `server` erst nach den Dateien |

5. Prüfen: `node scripts/check.mjs <tool>` (alle ✓ inkl. S-17) und Playwright mit nachgestelltem Server wie MUSTER V3.8
   (C3 ohne Wahl, Wahl B2 + zweites Gerät, Maximum, A1, C3 mit Datei, Stand löschen, alte Backup-Dateien, Offline, Vorschau, Hell/Dunkel, 1920/1280/390).


## Neu in 2.1 – zusätzliche Angaben im Adapter (alle optional)

Ohne diese Angaben verhält sich 2.1 genau wie 2.0. Der Lizenzserver liefert 2.1 an alle Tools des Kanals aus – die heutigen Adapter laufen unverändert weiter.

| Angabe | Standard | Wirkung |
| --- | --- | --- |
| `bereit` | – (sofort) | Promise oder Funktion → Promise. Erster Abgleich (B/C), zentrales Sichern und automatisches Sichern in den Ordner erst danach. Ersetzt fetch-Sperren und „wird noch geladen“-Fehler aus `daten()`. `RITLBK.stand().bereit` zeigt den Zustand. |
| `ohneSha: ['ansicht','zugeklappt', 'ui.mod']` | `[]` | Schlüssel aus settings/daten (auch `a.b`), die für die **Prüfsumme** nicht zählen – RITL-Sync (C), Ordner (B) und zentrale Historie (A). Sie werden trotzdem mitgesichert. |
| `norm(obj)` | – | Für Fälle, die `ohneSha` nicht abdeckt: liefert ein **neues** Objekt für die Prüfsumme (z. B. Zeitstempel entfernen). Das übergebene Objekt nicht verändern. |
| `nachAnwenden(stufe, quelle, still)` | – | Nach dem Übernehmen eines Stands, bei C erst **nach** den Dateien vom Server (`filesDown`), bei B nach dem Merken des Ordner-Stands. Gleichzeitig Ereignis `ritlbk:applied`. |
| `fluechtig: true` | `false` | Tool ohne lokale Speicherung (z. B. PDF/PPTX): Sync- und Ordner-Stand gelten beim Start wie auf einem neuen Gerät → der Stand wird still übernommen. Ersetzt das Löschen von `riemer-<x>-sync`/`-oq` im Adapter. |
| `extra: [{titel, text?, html \| render(el, RITLBK), aktionen?, nach?, nr?, id?, sichtbar?}]` | `[]` | Eigene Abschnitte im Fenster „Backup“ (z. B. „04 Dateiablage“, „Komplett-Paket“). Ohne `nach` hinten mit Nummer 04, 05 …; `nach: '01'` setzt den Abschnitt hinter 01 (ohne Nummer, außer `nr`). `render`/`html` bei jedem Öffnen bzw. mit `RITLBK.extra()`. `aktionen: [{text, klasse:'primary', klick(ev, btn), aus()}]` = Knöpfe. Ersetzt DOM-Einfügen in `#bkdlg .db`. |
| `alias: ['muster-ritl']` | `[]` | Weitere Tool-Kennungen, deren Dateien beim Laden angenommen werden (Kopf `ritl.tool`). |
| `alt.idbFsDb`, `alt.idbFsStore` (`'h'`), `alt.idbFsKey` (`'dir'`) | – | Ordner-Verknüpfung aus einer anderen IndexedDB lesen, wenn die eigene (`alt.idbFs`) leer ist – einmalig übernommen. Legt dort nichts an. |

Außerdem in 2.1 (ohne Angabe, für alle Tools):

- **Dateien nach Prüfsumme:** `filesUp`/`filesDown` vergleichen mit `sha256` aus `files_list` (ältere Server ohne `sha256`: wie 2.0 nach Größe + Name). Die Prüfsumme des Stands enthält weiter `id:Größe:Name` der Dateien.
- **Leerer Stand:** Solange `leer()` wahr ist, ersetzt das Tool nie von selbst einen Stand mit Daten – zentral (gibt es in der Historie schon einen Stand dieser Stufe, wird nicht gesichert), am Server (zuletzt abgeglichener Stand hatte Daten) und im Ordner. „Meinen Stand behalten“, „Jetzt im Ordner sichern“ gehen weiter. Ein leeres Gerät übernimmt bei einem Konflikt still den Stand am Server.
- **Wiederherstellen:** zuerst `dateienLaden` (bzw. `RITLF.load`), danach `anwenden`. `check(obj,'backup')` lehnt Dateien mit `ritl.inhalt` ≠ `backup` klar ab (Favoriten-Dateien wie bisher). `zbSave`/`syPush` fangen Fehler aus `settings()`/`daten()` ab.
- **CSS:** `dialog.rbk{margin:auto}` – Fenster bleiben mittig, auch bei globalem `*{margin:0}`.

### Umwege, die Tools mit 2.1 entfernen können (nächste Version des Tools)

| Tool | heute | mit 2.1 |
| --- | --- | --- |
| PM, MSX | fetch-Sperre bis `pm:ready` bzw. Projekt geladen | `bereit` |
| TRACK, MENU, LV | `daten()` wirft „wird noch geladen“, TRACK: synthetische `online`/`visibilitychange`, `unhandledrejection` abfangen | `bereit` (TRACK: `bereit` = Promise aus `registerBk`) |
| PDF, PPTX | `riemer-<x>-sync`/`-oq` beim Start löschen, `ohne()` für `created` | `fluechtig: true`, `norm` bzw. `ohneSha:['setup.created']` |
| DRIVE, FOC, LV | Ansicht bewusst nicht in settings bzw. nur beim Wiederherstellen | `ohneSha` (Ansicht darf wieder in settings) |
| LV | `neuLaden` wartet auf `rev` in `riemer-lv-sync`/`-oq` | `nachAnwenden` → neu laden |
| MESH, MSX | `RITLF.put` umhüllen, um nach `filesDown` neu aufzubauen | `nachAnwenden` |
| LV, MENU | Abschnitt „04 …“ per DOM in `#bkdlg .db` | `extra` |
| PDF, PPTX | Komplett-Paket als eigener Knopf außerhalb | `extra` mit `aktionen` |
| STAKE | eigenes `onclick` auf `#bk-up` + `alias()` für Kopf `muster-ritl` | `alias: ['muster-ritl']` |
| TRACK | Ordner aus `track_ritl_fs` selbst kopieren + Neuladen | `alt: {idbFsDb:'track_ritl_fs', idbFsStore:'handles'}` |
| DRIVE | „Aktualisieren“ über `stand()` + eigene Logik | `RITLBK.sync()` |

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
  - Kein Ordner auf diesem Gerät → „Backup einrichten“ öffnet sich **einmal je Gerät** (Merker `riemer-<prefix>-ordner-gefragt`), danach nur ein Hinweis (Toast) höchstens 1× pro Tag; nach Browser-Neustart ohne Zugriff → Hinweis (Toast, 1× pro Tag) auf Backup › „Zugriff erneuern“, kein Dialog.
  - Safari/Firefox/iOS: Hinweis „nur Chrome oder Edge am Computer“, Arbeit nur lokal.
- **Prompt für die Tool-Chats:** „Datenquelle je Lizenz (S-14) einbauen nach `riemer-toolbox/ritl-bk/README.md` › Datenquelle je Lizenz, Vorbild MUSTER.ritl V3.3 (Funktionen `ORD`, `SRVB`, `applyMode`, `oq*`, `setupOrd`, `setupSrv`). Als neue DEV-Version veröffentlichen, CHANGELOG und Quellen-ZIP.“
