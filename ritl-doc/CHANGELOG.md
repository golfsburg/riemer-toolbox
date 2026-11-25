# CHANGELOG – ritl-doc (RIEMER Tools)

Baustein für Tools vom Typ „Dokument“: Projekte als eigene Datei `<Projektname>.<tool>.ritl`. Neueste Version oben.

## 1.1 · 25.11.2026 · DEV
**Neu**
- **Hinweis „Großes Projekt“:** Vor dem Speichern und Zwischenspeichern wird die Gesamtgröße der Dateien ermittelt. Ab ca. **200 MB** erscheint einmal je Projekt ein Hinweis (Größe, Speichern dauert länger, Datei wird groß, ggf. Dateien entfernen) – blockiert nichts, schließbar mit ✕. Beim Speichern großer Projekte zusätzlich „Speichern … – bitte warten“.
- **Zwischenspeicher bei sehr großen Projekten** (ab ca. **500 MB**) nur noch alle 5 Minuten und nicht mehr beim Verlassen der Seite; der Hinweis sagt das.
- Adapter (optional): `warnAbMB` (200), `zwSeltenAbMB` (500), `zwGrossMin` (5, `0` = Zwischenspeicher aussetzen). Zustand über `RITL_DOC.groesse`.
- Testseite: Größen-Test mit künstlichen Dateien und Grenzen per `?warnmb=&zwmb=&zwmin=`; Rundlauf um 15 Schritte erweitert.

**Geändert**
- API nur ergänzt (`groesse`), Dateiformat (`format:1`) unverändert – Projekte aus 1.0 und 1.1 öffnen sich gegenseitig.

## 1.0 · 25.11.2026 · DEV
**Neu**
- **Projekte als Datei:** Neu · Öffnen … · Speichern · Speichern unter … – Datei `<Projektname>.<tool>.ritl` (z. B. „Angebot Muster.pdf.ritl“), gzip-komprimiertes JSON mit Kopf (Tool, Version, Typ, erstellt, geändert, Prüfsumme SHA-256), Projektdaten, projektbezogenen Einstellungen und allen Dateien. Ablage nur auf dem Gerät bzw. im Ordner, nie am Server. Kein Passwortschutz.
- **Chrome/Edge:** „Speichern“ überschreibt die geöffnete Datei direkt. **Safari, Firefox, iPhone/iPad:** Öffnen über die Dateiauswahl, Speichern als Download (am Touchscreen über das Teilen-Blatt).
- **Startbildschirm ohne Projekt:** „Neues Projekt“, „Öffnen …“ und „Zuletzt geöffnet“ (10 Einträge; in Chrome/Edge mit einem Klick wieder offen).
- **Zwischenspeicher:** alle 30 Sekunden und beim Verlassen der Seite; beim nächsten Start „Nicht gespeicherte Änderungen von … wiederherstellen?“.
- **Warnung** vor Neu, Öffnen und Schließen, wenn Änderungen nicht gespeichert sind (Nicht speichern · Abbrechen · Speichern).
- Beim ersten „Speichern unter“ Hinweis **„Ordner der Firma öffnen ↗“** (Vorgabe aus dem Lizenz-Admin, ritl-bk 2.11).
- **Übernahme alter Daten:** Beim ersten Start mit vorhandenem Stand im Browser wird angeboten, ihn als „<Tool> – übernommen.<tool>.ritl“ zu speichern.
- Testseite `ritl-doc/test.html` (mit `?nofs=1` ohne File System Access).
- Am Lizenzserver für den Kanal Dev hinterlegt (`ritl_doc_versions`).
