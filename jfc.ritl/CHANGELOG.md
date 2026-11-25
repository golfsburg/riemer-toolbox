# CHANGELOG – JFC.ritl (RIEMER Tools)

Engineering Navigator: Kundenvergleich, Besuchspriorisierung und Gebiets-Review aus JFC-Reports · #ritl_jfc
Neueste Version oben. Versionen ≤ V3.6 als „JFC Engineering Navigator“.

## V4.0.6 · 25.11.2026 · DEV
**Geändert**
- Die Leiste mit Sprungzielen, Kundenansicht und „Alle auf / Alle zu“ bleibt beim Scrollen oben am Fensterrand stehen – zusammen mit dem Filterbereich.
- Der Filterbereich lässt sich mit „Filter“ ein- und ausklappen; zugeklappt bleiben die aktiven Filter-Chips, die Anzahl, „x von y Kunden“ und „Filter löschen“ sichtbar. Der Zustand wird gemerkt (am Handy standardmäßig zugeklappt).
- Sprungziele landen unter der fixierten Leiste.

## V4.0.5 · 23.11.2026 · DEV
**Behoben**
- **Besuche:** Das Wiederherstellen eines Backups der Stufe „Einstellungen“ löschte alle Besuche. Jetzt bleiben sie erhalten.

**Geändert**
- PowerPoint-Auswahl und aktiver Favorit gehören zu den Einstellungen im Backup.

## V4.0.4 · 22.11.2026 · DEV
**Neu**
- **Teilen-Blatt beim Speichern am Handy und Tablet:** Exporte und „Backup speichern“ öffnen am Touchscreen das Teilen-Blatt („In Dateien sichern“, AirDrop, Mail) – in der Home-Bildschirm-App zeigte iOS Downloads bisher nur als Vorschau. Am Computer bleibt es beim normalen Download; lässt der Browser das Teilen nicht zu, wird ebenfalls normal geladen.

## V4.0.3 · 22.11.2026 · DEV
**Neu**
- **Eigenes App-Symbol für den Home-Bildschirm:** In Safari „Teilen → Zum Home-Bildschirm“ legt JFC.ritl jetzt mit eigenem Symbol und Namen ab (vorher ein Bildschirmfoto der Seite). Gilt für die Anmeldeseite und das Tool.

## V4.0.2 · 22.11.2026 · DEV
**Geändert**
- **Am Handy und Tablet:** Eingabefelder in 16 px – iOS zoomt beim Antippen nicht mehr hinein.
- Fenster erscheinen am Handy als Blatt von unten über die volle Breite; die Seite dahinter scrollt nicht mit.
- Platz für Notch und Home-Leiste (Safe-Area); Knöpfe reagieren ohne Verzögerung auf Tippen.

## V4.0.1 · 20.11.2026 · DEV
**Geändert**
- Backup: alle Datenquellen gleichzeitig aktiv, jede in ihrer Stufe (ritl-bk 2.7)

## V4.0 · 19.11.2026 · DEV
**Geändert**
- Neu aufgebaut nach RIEMER-Webapp-Design: Farb-Tokens, Hell/Dunkel, Schrift Inter/JetBrains Mono aus der Toolbox, volle Breite bis 2048 px, Fußzeile.
- Header über RITL-UI 1.4: App-Bild, JFC.ritl mit Edition und Version, Knöpfe Daten & Setup · Speichern · Backup, Anleitung, Hell/Dunkel.
- Hauptansicht scrollt nicht mehr hinter offenen Dialogen.
- Bereiche als klappbare Boxen, Unterbereiche als klappbare Überschriften; „Alle auf / Alle zu“ in der Leiste.
- „JFC-Daten“ heißt jetzt „Daten & Setup“; der Tool-Export (inkl. Favoriten) ist ein Reiter darin.

**Neu**
- Backup über ritl-bk 2.0 mit Stufen settings · datenbank · storage, eine Datei Backup_JFC-ritl.json, OneDrive/SharePoint-Ordner und „Backup einrichten“.
- Importierte Reports werden in der Dateiablage gemerkt (Stufe storage).

**Entfernt**
- Bisheriges „Backup & Restore“ und „Datenbank verbinden“ (ersetzt durch Backup). Alte Backups lassen sich weiter wiederherstellen.
