# CHANGELOG – ritl-export (RIEMER Tools)

Gemeinsamer Export-Baustein: Tabellen → XLSX/PPTX, Darstellungen → PPTX, einzeln oder gesamt mit Auswahl. Neueste Version oben.

## 1.0 · 27.11.2026 · DEV
**Neu**
- **Baustein ritl-export** (Idee I-001), herausgelöst aus dem Pilot STAFF.ritl V1.0.6–V1.0.9 und ohne Tool-Bezug: Block `<!--ritl-export:start-->…<!--ritl-export:end-->`, byte-gleich eingebettet wie ritl-bk. API `RITLEXP.init/open/one/mount/unmount`, Einträge `{id, group, label, file, sheet, table, draw}`.
- **Eigener XLSX-Schreiber** im Baustein (auf JSZip 3.10.1, kein SheetJS): ein Blatt je Tabelle, Kopfzeile fixiert, Filter, Datum als Datum, Blatt „Export-Info“ mit Tool, Zeit, Stand und Filtern.
- **Ein PPTX-Layout für alle:** RIEMER-Folie mit Kopfband, Titel, Tabelle/Grafik, Fußzeile mit Stand, Kontext und Quelle, Seitenzahl; beim Gesamt-Export Titelfolie und Inhaltsverzeichnis.
- **Einstellbar:** App-Name, Dateinamen `JJJJMMDD-HHMM-<NAME>-ritl_<Bereich>.xlsx|pptx` (`fileTag`), Kontextzeile (Stand, Filter), gemerkte Auswahl (`getSel/setSel`, sonst im Browser), Übersetzung der Dateitexte (`t`).
- **Spezial-Exporte ergänzen** (JFC, PM, MENU …): Einträge mit `ownPptx`/`ownXlsx` (bestehender Export als eigene Datei) oder `draw` mit der Folien-API; Bilder von Diagrammen über `RITLEXP.bild()` + `Slide.image()` (PNG/JPEG).
- **Mobil:** Export öffnet am Touchscreen das Teilen-Blatt (S-20), Dialog passt aufs Handy.
- **Tasten:** Esc schließt; Enter löst nie still einen Export aus (nur Enter/Leertaste auf einem Knopf), keine doppelte Datei bei gehaltener Taste (S-25). Dialog als überlagernde Ebene (S-18).
- EN-Texte vorbereitet (`translations_en.tsv`/`.sql`), nicht eingespielt.

**Unverändert gegenüber dem Pilot**
- Folien, Tabellen und Dateinamen wie STAFF.ritl V1.0.9.
