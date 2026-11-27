# ritl-export 1.0.1 – einheitlicher Export der RIEMER Tools (ab 27.11.2026)

Idee **I-001** (Peter, 27.11.2026), Auftrag A-066; Nachbesserung 1.0.1 aus der Abnahme (A-067). Regel **S-27** in `STANDARDS.md`. Herausgelöst aus dem Pilot **STAFF.ritl V1.0.6–V1.0.9**; erstes Tool mit Baustein: **STAFF.ritl V1.0.10**.
Baustein: [`ritl-export.html`](ritl-export.html) · Änderungen: [`CHANGELOG.md`](CHANGELOG.md) · EN-Texte: [`translations_en.tsv`](translations_en.tsv) / [`.sql`](translations_en.sql) (nicht eingespielt).

**Was er kann:** jede Tabelle als **XLSX** oder **PPTX**, jede Darstellung (Diagramm, Karten, Board …) als **PPTX** – einzeln über kleine Knöpfe am Panel
oder gesammelt über den **Export-Dialog** mit Auswahl (Gruppe, Alle, Keine, Alle Tabellen, Alle als PPTX). Eine Datei je Format:
XLSX mit einem Blatt je Tabelle + Blatt „Export-Info“, PPTX mit **Titelfolie und Inhaltsverzeichnis** (ab 2 Einträgen) im einheitlichen RIEMER-Folienlayout.

**Auslieferung 1.0.1:** eingebetteter Block `<!--ritl-export:start-->…<!--ritl-export:end-->` (CSS + Dialog + JS), **byte-gleich** wie ritl-bk eingebaut
(Build-Skript bzw. Platzhalter `<!--@RITL-EXPORT-->`). Keine Server-Tabelle, keine Edge Function – eine Auslieferung über den Lizenzserver kommt
erst nach Peters Wort.

## Voraussetzungen

- **JSZip 3.10.1 ist Pflicht** (MIT) als `window.JSZip`, **vor** dem Block eingebunden. **Der Baustein lädt JSZip nicht selbst.** Fehlt es, sperrt
  `init` alle Export-Knöpfe (Dialog und Panel), der Dialog zeigt „Export nicht möglich: JSZip 3.10.1 fehlt …“, und jeder Export-Versuch meldet das
  per `toast` statt still zu scheitern (ab 1.0.1). **Kein SheetJS** (0.18.5 hat eine offene Sicherheitslücke) – der Baustein schreibt XLSX und PPTX selbst.
- Standard-Klassen des Skills `/riemer-webapp-design`: Dialog `.dh` / `.db` / `.df`, `.btn` (`.sm`, `.primary`), `.status`, `.hint`, Tokens `--line`,
  `--surface-muted`, `--muted`, `--sans`, `--mono`.
- RITL-UI ≥ 1.7 (Overlay-Sperre S-18 über `data-ritl-overlay`).

## Einbau

```html
<script>/* JSZip 3.10.1 */ …</script>
<!--ritl-export:start--> … (Block unverändert) … <!--ritl-export:end-->
<script>
RITLEXP.init({
  name: 'STAFF.ritl',               // App-Name (Titelfolie, Fußzeile, Export-Info)
  version: APP_VERSION,             // z. B. 'V1.0.10'
  items: () => [ /* Einträge, siehe unten */ ],
  context: () => ({ stand: '27.11.2026 08:15', lines: ['Stichtag: heute', 'Filter MOVE: Status geplant'] }),
  toast: msg => toast(msg),
  // optional:
  tool: 'STAFF.ritl',               // „Quelle:“ in der Fußzeile (Standard: name)
  fileTag: 'STAFF-ritl',            // Dateiname (Standard: name ohne .ritl + '-ritl')
  getSel: () => store.exp, setSel: s => { store.exp = s; save(); },  // Auswahl im Tool merken (Standard: localStorage ritl-export:<fileTag>)
  t: s => tr(s),                    // Übersetzung der Texte in den Dateien (DE → EN), Platzhalter {0}, {1}
  xlsx: sheets => myBuild(sheets),  // eigener XLSX-Schreiber statt des eingebauten
  download: (blob, name) => …       // eigenes Speichern statt Teilen-Blatt/Download
});
document.querySelector('#expBtn').onclick = () => RITLEXP.open();       // Gesamt-Export (Ribbon/Header)
RITLEXP.mount('[data-fold="jb-board"] .ph-r', 'jobs-board', 'Board');  // Knöpfe am Panel (nach jedem Rendern erneut aufrufen)
</script>
```

### Angaben für `init` – Pflicht und optional

| Angabe | Pflicht? | Standard | Wirkung |
| --- | --- | --- | --- |
| `name` | **Pflicht** | `'RIEMER Tools'` | App-Name (Titelfolie, Fußzeile, Export-Info, Dateiname) |
| `version` | empfohlen | `''` | Version in Titelfolie, Fußzeile, Export-Info (leer statt „undefined“) |
| `items` | **Pflicht** | – | **Funktion** (empfohlen) oder Liste. Als Funktion wird sie bei **jedem** `open`, `mount` und `one` neu ausgewertet (Module, Rechte, Filter ändern sich); als Liste gilt sie nur so, wie sie bei `init` war (ab 1.0.1; `RITLEXP.refresh()` liest sie neu) |
| `context` | empfohlen | Stand = heute | `{stand, lines[]}` – Stand und Filter, wie sie gerade eingestellt sind |
| `toast` | empfohlen | `console.log` | Meldungen (gespeichert, abgebrochen, Fehler, JSZip fehlt) |
| `tool` | optional | `name` | „Quelle:“ in der Fußzeile |
| `fileTag` | optional | `name` ohne `.ritl` + `-ritl` | Dateiname und Schlüssel der Auswahl |
| `getSel` / `setSel` | **Pflicht, wenn das Tool ein Backup hat** | `localStorage` `ritl-export:<fileTag>` | gemerkte Auswahl im Dialog, siehe unten |
| `t` | optional | – | Übersetzung der Texte **in den Dateien** |
| `xlsx` | optional | eingebauter Schreiber | eigener XLSX-Schreiber |
| `download` | optional | Teilen-Blatt / Download | eigenes Speichern |

### Gemerkte Auswahl und Backup (Pflichthinweis)

Ohne `getSel`/`setSel` merkt sich der Baustein die Auswahl im Browser unter **`localStorage['ritl-export:<fileTag>']`** (Schlüssel: `RITLEXP.selKey()`),
**nicht** im Backup des Tools. Ein Tool mit ritl-bk muss deshalb **eines** von beiden tun:

1. **`getSel`/`setSel`** auf den eigenen Speicher (empfohlen – dann sichert das Backup die Auswahl mit den Einstellungen), oder
2. den Schlüssel im **ritl-bk-Adapter** unter Stufe 1 (Einstellungen) mitnehmen:

```js
window.RITL_BK = { …,
  settings: () => ({ …, exportAuswahl: JSON.parse(localStorage.getItem('ritl-export:MUSTER-ritl') || 'null') }),
  anwenden: async (stufe, obj) => { …
    const s = (obj.settings || obj).exportAuswahl;                       // je nach Aufbau des Tools
    if (s) localStorage.setItem('ritl-export:MUSTER-ritl', JSON.stringify(s)); }
};
```

**Dateinamen:** `JJJJMMDD-HHMM-<NAME>-ritl_<Bereich>.xlsx|pptx`, z. B. `20261127-0815-STAFF-ritl_JOBS-Board.pptx`.
Bereich = `file` des Eintrags (einzeln), Name der Gruppe (alle aus einer Gruppe) oder `Gesamt` (mehrere Gruppen).

## Einträge

```js
{ id: 'jobs-soll',            // eindeutig
  group: 'JOBS',              // Gruppe im Dialog (Modul/Ribbon/Box)
  label: 'Soll / Ist je Team',
  file: 'JOBS-SollIst',       // Bereich im Dateinamen (Standard: label)
  sheet: 'JOBS Soll-Ist',     // Blattname XLSX (max. 31 Zeichen, Standard: group + label)
  table: () => ({ cols: [{ h: 'Team', w: 24 }, { h: 'Soll FTE', w: 10, t: 'n' }, { h: 'Zieltermin', w: 12, t: 'd' }],
                  rows: [['Vertrieb', 4.5, '2026-12-01']] }),   // → XLSX + PPTX (Tabellenfolien mit Seitenumbruch)
  draw: deck => { … },        // → PPTX: eigene Folien (Darstellung); darf async sein
  ownPptx: async () => { … }, // optional: bestehender Spezial-Export des Tools (eigene Datei, z. B. PptxGenJS)
  ownXlsx: async () => { … }  // optional: dito für XLSX
}
```

- `t:'n'` Zahl (rechtsbündig; in **XLSX unverändert** als Zahl, in **PPTX auf höchstens 2 Nachkommastellen gerundet** im Format `de-AT`, z. B. `1.234,57` – wer eine andere Darstellung braucht, liefert Text), `t:'d'` Datum ISO `JJJJ-MM-TT` (XLSX als Datum `TT.MM.JJJJ`, PPTX `TT.MM.JJJJ`), sonst Text. `w` = Breite (Zeichen).
- Nur `table` → Tabelle (XLSX + PPTX). Nur `draw` → Darstellung (PPTX). Beides → XLSX aus der Tabelle, PPTX aus `draw`.
- Blattnamen: max. 31 Zeichen, doppelte bekommen „ 2“, „ 3“; das Blatt „Export-Info“ weicht aus („Export-Info 2“), wenn ein Eintrag schon so heißt (ab 1.0.1).
- Eine Tabelle ohne Spalten ergibt ein leeres Blatt ohne Filter (ab 1.0.1). Leerer `file`/`label` im Dateinamen → `Export`.
- Leere Werte bleiben leer; `null`, `NaN`, `undefined` erscheinen nie in den Dateien (XLSX lässt nicht-endliche Zahlen leer).

### Bestehende Spezial-Exporte ergänzen, nicht ersetzen (JFC, PM, MENU …)

Peter (27.11.2026): vorhandene Exporte (z. B. PptxGenJS-Folien in JFC, PM, MENU) bleiben, sie werden **ergänzt**. Zwei Wege:

1. **Als eigener Eintrag mit `ownPptx`/`ownXlsx`:** Der Dialog zeigt den Eintrag mit „eigene Datei“; gewählt, läuft der bestehende Export unverändert
   **zusätzlich** zur gemeinsamen Datei (eigene Datei, eigener Name). Der kleine Knopf am Panel ruft ihn direkt auf.
   ```js
   { id: 'jfc-report', group: 'REPORT', label: 'Monatsreport (Vorlage JFC)', ownPptx: () => exportReportPptx() }
   ```
2. **Als `draw`-Eintrag im gemeinsamen Deck:** Spezial-Folien mit der Folien-API nachbauen oder ein vorhandenes Diagramm als Bild übernehmen:
   ```js
   { id: 'jfc-chart', group: 'REPORT', label: 'Verlauf', draw: async deck => {
       const s = deck.slide({ title: 'REPORT · Verlauf', sub: 'Stand …' });
       const b = await RITLEXP.bild(document.querySelector('#chart svg'));   // SVG oder Canvas → PNG
       s.image(s.bx, s.by, s.bw, s.bh, b.src, { ratio: b.ratio });          // eingepasst, mittig
   } }
   ```
   Hat ein Eintrag `draw` **und** `ownPptx`, nimmt der Gesamt-Export `draw` (eine Präsentation), der Knopf am Panel den eigenen Export.

## Folien-API (`RITLEXP.Deck`, ein Layout für alle)

Folie 13,333 × 7,5 Zoll (16:9). Inhaltsfläche `s.bx, s.by, s.bw, s.bh` (Rand `RITLEXP.MX` = 0,5). Farben `RITLEXP.C` (`brand`, `ink`, `ink2`, `muted`,
`line`, `line2`, `soft`, `good`, `warn`, `white` – Hex ohne `#`), Schrift Inter.
Jede Inhaltsfolie: blaues Kopfband, **Titel** (Platzhalter, erscheint in der Gliederung), Untertitel, **Fußzeile** `<Name> <Version> · <Stand> · <Kontextzeilen> · Quelle: <tool>`, Seitenzahl.

| Aufruf | Wirkung |
| --- | --- |
| `deck.slide({title, sub})` | neue Folie, liefert `s` |
| `s.rect(x,y,w,h,{fill,line,lw,dash,r})` | Rechteck (r = Eckenradius) |
| `s.text(x,y,w,h,str,{size,bold,color,align:'l'|'c'|'r',v:'t'|'m'|'b',fill,line,r,ins,mono})` | Textfeld, `\n` = Absatz |
| `s.line(x1,y1,x2,y2,{color,lw,dash,arrow})` | Linie |
| `s.table(x,y,w,cols,rows,{size})` | Tabelle (liefert Höhe) |
| `s.image(x,y,w,h,dataUrl,{ratio})` | Bild PNG/JPEG (neu in 1.0) |
| `deck.tableSlides(title,sub,cols,rows)` | Tabelle über mehrere Folien (Kopf je Folie, „Teil n von m“) |
| `RITLEXP.bild(svg|canvas, scale=2)` | → `{src, ratio}` für `s.image` |

**`RITLEXP.bild` und CSS:** Das SVG wird **ohne** die Stylesheets der Seite in ein Bild gerendert. Farben über CSS-Variablen (`fill="var(--brand)"`,
`class="…"` mit CSS-Regeln) erscheinen dann schwarz bzw. gar nicht. Für Darstellungen, die als Bild in die PPTX sollen: Farben als **feste Werte** in die
SVG-Attribute schreiben (z. B. `fill="#1F5FC2"`) oder vor `bild()` per `getComputedStyle` auflösen. Canvas wird unverändert übernommen.

Weitere Aufrufe: `RITLEXP.open(group?)` (Dialog, optional nur eine Gruppe vorgewählt) · `RITLEXP.one(id,'xlsx'|'pptx')` · `RITLEXP.mount(host,id,label?)` /
`unmount(host)` · `RITLEXP.xlsx(sheets,title)` (eingebauter Schreiber) · `RITLEXP.fileName(bereich,ext)` · `RITLEXP.refresh()` (Einträge neu lesen) ·
`RITLEXP.selKey()` (localStorage-Schlüssel der Auswahl) · `RITLEXP.version`.

**CSS-Klassen (ab 1.0.1):** Knöpfe am Panel `.ritl-expb`, Dialog `#ritl-exp.ritl-rexp` (vorher `.expb`/`.rexp` – kollidierte mit Tool-Klassen).

## Dialog und Tasten

- `<dialog id="ritl-exp" data-ritl-overlay data-ritl-baustein="ritl-export">` – **S-18**: Seite dahinter gesperrt (RITL-UI 1.7).
- **S-25:** Der Baustein regelt seine Tasten selbst (wie ritl-bk/ritl-doc; `id^="ritl-"` und `data-ritl-baustein` nimmt der zentrale Handler des Tools und
  `check.mjs` aus). **Esc** schließt. **Enter** löst **nie still einen Export** aus: Der Dialog hat keine Eingabefelder und zwei gleichrangige Aktionen
  (XLSX/PPTX) – Enter ohne Knopf-Fokus und Enter auf einer Checkbox tun nichts; Enter (oder Leertaste) auf einem Knopf = dessen Klick, gehaltenes
  Enter erzeugt keine zweite Datei (Tastenwiederholung und laufender Export gesperrt). Beim Öffnen steht der Fokus im Inhalt, nicht auf einem Knopf.
- **S-20 Mobil:** am Touchscreen öffnet jeder Export das **Teilen-Blatt** („In Dateien sichern“, AirDrop, Mail); Abbrechen = nichts. Verweigert der Browser
  das Teilen, wird normal geladen (`data-noshare`, kein doppeltes Teilen mit `ritl-teilen`). Dialog als Bottom-Sheet über das Mobil-Grundpaket,
  Knöpfe in der Fußzeile teilen sich die Breite, Checkboxen 22 px.

## Sprache

Alle Texte des Dialogs sind DOM-Text (die Sprachumschaltung des Tools übersetzt sie). Texte **in den Dateien** (Inhalt, Teil n von m, Zeilen, Quelle,
Stand, Export-Info, Meldungen) laufen über `init({t})`. EN-Paare: `translations_en.tsv`; `translations_en.sql` legt sie je Tool-App an
(`apps(app)` ergänzen) – bewusst nicht als App `*`. Nicht eingespielt.

## Prüfen

Playwright wie A-045: jede Tabelle XLSX + PPTX, jede Darstellung PPTX, Gesamt-Export mit Auswahl; XLSX mit eigenem Leser, PPTX mit JSZip
(Folienzahl, Titel, kein „null“/NaN/undefined); Tasten im Dialog; Mobil (Teilen-Blatt einmal, Dialog passt ins Bild). `check.mjs <tool>` ohne neue ✗.
