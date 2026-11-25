# CHANGELOG – ritl-doc (RIEMER Tools)

Baustein für Tools vom Typ „Dokument“: Projekte als eigene Datei `<Projektname>.<tool>.ritl`. Neueste Version oben.

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
- Am Lizenzserver noch nicht hinterlegt – Tabelle `ritl_doc_versions` kommt mit dem Server-Auftrag A-011.
