# ritl-doc 1.0 – Projekte als eigene Datei (Tool-Typ „Dokument“)

Baustein: [`ritl-doc.html`](ritl-doc.html) · Änderungen: [`CHANGELOG.md`](CHANGELOG.md) · Testseite: [`test.html`](test.html)
Vorhaben Tool-Typen „Dokument“/„Datenbank“ (25.11.2026). Pilot: PDF.ritl = dokument, DRIVE.ritl = datenbank; übrige Tools über Rollout R-19.

Ein Block `<!--ritl-doc:start-->…<!--ritl-doc:end-->` (CSS + JS) enthält Neu, Öffnen, Speichern, Speichern unter, Zuletzt geöffnet,
Zwischenspeicher, Warnung bei ungespeicherten Änderungen und die Übernahme alter Daten. Tool-spezifisch ist nur der **Adapter**.
Die Knöpfe im Header kommen aus **RITL-UI 1.6**, das Backup der Einstellungen aus **ritl-bk 2.12** (Modus dokument).
Der Lizenzserver ersetzt den Block beim Ausliefern durch die Fassung des Kanals (Tabelle `ritl_doc_versions`, ab 1.0 Kanal Dev).

## Festgelegt

- **Dateiname:** `<Projektname>.<tool>.ritl`, z. B. `Angebot Muster.pdf.ritl` (`<tool>` = Adapter `endung`, Standard: Tool-ID ohne `-ritl`).
- **Inhalt:** gzip-JSON (`CompressionStream`), Kopf `ritl {tool, name, version, typ:'dokument', format:1, projekt, erstellt, geaendert, sha256}`
  + `daten` + `einstellungen` (projektbezogen) + `dateien [{id, name, mime, size, b64}]`. `sha256` über `JSON.stringify({daten, einstellungen, dateien})`.
- **Kein Passwortschutz** in 1.0.
- **Ablage nur lokal bzw. im Ordner – nie am Server.**

## Einbau

```html
<script>
window.RITL_DOC_ADAPTER = {
  tool: 'pdf-ritl', name: 'PDF', endung: 'pdf', ereignis: 'pdf:change',
  daten: () => ({ … }),                          // Projektdaten (JSON-fähig)
  einstellungen: () => ({ … }),                  // optional: projektbezogene Einstellungen
  dateien: () => [{ id, name, mime, blob }],     // optional, auch Promise
  laden: ({ daten, einstellungen, dateien, kopf }) => { … },   // Projekt ins Tool laden (dateien mit blob)
  leer: () => { … },                             // Tool auf ein leeres Projekt setzen
  vorschlag: () => 'Angebot Muster',             // optional: Namensvorschlag für „Speichern unter“
  alt: () => ({ daten, einstellungen, dateien }) | null,       // optional: alter Stand im Browser (Übernahme)
  // start: false  → kein Startbildschirm (leeres Projekt) · bereit: Promise · alias: ['alte-tool-id']
};
</script>
<!-- danach: Block ritl-doc (vor ritl-bk), ritl-bk-Adapter mit typ:'dokument' -->
```

Das Tool meldet jede Änderung über sein Ereignis (`document.dispatchEvent(new Event('pdf:change'))`) oder `RITL_DOC.aenderung()`.
Während `laden()`/`leer()` zählen Ereignisse nicht als Änderung. Optionaler Platz für den Startbildschirm im Tool: `<div data-ritl-doc-start hidden></div>` – sonst Dialog.

## API `window.RITL_DOC`

`version` · `neu()` · `oeffnen()` · `speichern()` · `speichernUnter()` · `schliessen()` · `uebernehmen()` · `startbild()` · `aenderung()` ·
`name` · `geaendert` · `offen` · `datei` · `zuletzt[]` · `fs` · `zuletztExport()` / `zuletztImport(liste)` (für ritl-bk, ohne Handles).
Ereignisse: `ritldoc:ready` · `ritldoc:state {name, geaendert, offen, datei}` (RITL-UI zeigt damit Projektname und „•“).

## Verhalten

| | Chrome/Edge (File System Access) | Safari, Firefox, iPhone/iPad |
| --- | --- | --- |
| Öffnen | `showOpenFilePicker`, Handle wird gemerkt | `<input type=file>` (iOS ohne `accept`) |
| Speichern | überschreibt die Datei direkt | erneuter Download mit gleichem Namen |
| Speichern unter | `showSaveFilePicker` mit Namensvorschlag | eigener Dialog „Projektname“, dann Download (am Touchscreen übernimmt `ritl-teilen` das Teilen-Blatt) |
| Zuletzt geöffnet | Klick öffnet direkt (Zugriff ggf. bestätigen) | Klick → „Datei auswählen“ |

- **Zuletzt geöffnet:** 10 Einträge (Name, Datei, Ordner, Zeit, Handle) in IndexedDB `ritl-doc` (`zul:<tool>`). Startbildschirm ohne Projekt:
  „Neues Projekt“ · „Öffnen …“ · Liste. Esc auf dem Startbildschirm = neues, leeres Projekt.
- **Zwischenspeicher:** alle 30 s, bei `visibilitychange` (verdeckt), `beforeunload` und `pagehide` (synchron gestartet) je Projekt in IndexedDB
  (`zw:<tool>:<id>`, Daten + Dateien als Blob + Handle). Beim Start: „Nicht gespeicherte Änderungen an … von <Zeit> wiederherstellen?“ – Verwerfen löscht ihn. Nach dem Speichern wird er gelöscht.
- **Warnung** vor Neu/Öffnen/Schließen bei ungespeicherten Änderungen: eigener Dialog (Nicht speichern · Abbrechen · Speichern) + `beforeunload`.
- **Ordner der Firma:** Beim ersten „Speichern unter“ Hinweis mit „Ordner der Firma öffnen ↗“ aus `backup.ordner_vorgabe` (ritl-bk 2.11, gemerkt in `riemer-<prefix>-bklic`).
- **Übernahme alter Daten:** Liefert `alt()` beim ersten Start Daten, fragt ritl-doc, ob der Stand als „<Tool> – übernommen.<tool>.ritl“ gespeichert werden soll
  (Merker `riemer-<prefix>-doc-uebernahme`: `ja` bzw. `nein`; „Später“ fragt beim nächsten Start wieder). Manuell: `RITL_DOC.uebernehmen()`.
- **Prüfung beim Öffnen:** `typ` muss `dokument` sein und `tool` passen (oder in `alias`), stimmt `sha256` nicht, wird nachgefragt.

## Test

`test.html` lädt RITL-UI, ritl-doc und ritl-bk direkt aus diesem Repo (Tool „TEST“, Titel/Notizen/Dateien). `?nofs=1` stellt einen Browser ohne
File System Access nach. Playwright-Rundlauf (A-012): Neu → Daten → Speichern unter → Neu → Öffnen → Vergleich (Daten + Dateien) → Strg+S →
Warnung → Zwischenspeicher nach Neuladen → beforeunload → Zuletzt geöffnet → Übernahme, Hell/Dunkel, 1920/1280/390 px, mit und ohne FS API.
