# CHANGELOG – DRIVE.ritl (RIEMER Tools)

Fahrtenbuch, Fahrzeuge, Tanken, Werkstatt, Pickerl §57a und Statistik · #ritl_drive
Neueste Version oben.

## V1.8 · 18.11.2026 · DEV
**Behoben**
- GPS-Aufzeichnung speichert jetzt die Höhe; GPX-Import übernimmt `<ele>`, GPX-Export und Übergabe an TRACK.ritl schreiben sie mit.

**Neu**
- Höhenmeter bergauf/bergab in der Fahrt und im Fahrtenbuch, aktuelle Höhe während der Live-Fahrt.

## V1.7 · 18.11.2026 · DEV
**Neu**
- Backup-Stufe **storage** für 01 Lokal: alles aus `datenbank` plus alle Dateien der Dateiablage (IndexedDB `drive_files`). Noch lädt DRIVE.ritl selbst keine Dateien hoch (z. B. Belege, Fotos) – die Stufe ist dafür vorbereitet und sichert bis dahin wie `datenbank`.

**Geändert**
- „Backup einrichten“: storage lokal wählbar, zentral gesperrt („nur lokal, zentral folgt später“).

## V1.6 · 16.11.2026 · DEV
**Neu**
- GPS-Strecken direkt an TRACK.ritl übergeben (Fahrt › „→ TRACK.ritl“, LOG › „GPX → TRACK.ritl“ für alle gefilterten Fahrten mit Strecke); Übergabe über „ritl-handoff“ auf der Toolbox-Domain, TRACK.ritl öffnet sich mit #ritl-handoff.

**Geändert**
- Zahlen mit Tausenderpunkt (153.621 km, 1.833,84 €); Kilometer mit einer Kommastelle, wenn nicht ganzzahlig (z. B. GPS-Strecken).
- GPX-Dateiname einer einzelnen Fahrt: Datum_Start-Ziel.gpx.

## V1.5 · 16.11.2026 · DEV
**Neu**
- Eigenes App-Symbol für „Zum Home-Bildschirm“ (iPhone/iPad) statt Buchstabe „D“.
- Home-Bildschirm-App: oben nach unten ziehen zum Aktualisieren (mit Geräte-Abgleich: Daten vom Server holen, sonst neu laden).
- Mehr › „Aktualisieren“ und „App neu laden“.

## V1.4 · 16.11.2026 · DEV
**Neu**
- STATS.ritl: zu „Alle“ gibt es immer auch „Keine“ (Fahrzeugauswahl).
- Kilometer, die nicht im Fahrtenbuch stehen (z. B. Fahrzeuge nur mit Tank- und Ausgaben-Daten), werden aus den km-Ständen von Tanken, Ausgaben und Pickerl ergänzt – in Diagramm, Tabelle, Kennzahlen, Fahrtzwecken (eigene Farbe „nicht im Fahrtenbuch“) und Kosten je 100 km.

**Geändert**
- Diagramm und Tabelle zeigen alle gewählten Fahrzeuge; Fahrzeuge ohne Daten im Zeitraum werden genannt. Bereich 04 listet alle gewählten Fahrzeuge.

## V1.3 · 16.11.2026 · DEV
**Neu**
- Geräte-Abgleich über das zentrale Backup (Stufe datenbank): Änderungen gehen automatisch auf den Server, beim Öffnen und beim Zurückkehren in die App wird der neueste Stand der anderen Geräte geholt; bei Konflikt Rückfrage (Server-Stand übernehmen oder eigenen hochladen). „Jetzt abgleichen“ im Backup-Dialog.
- Tanken: aus zwei von Menge, Preis je Einheit und Betrag wird der dritte berechnet (die zuletzt eingegebenen zwei zählen).

**Geändert**
- Zentrales Backup startet mit Stufe datenbank.

**Behoben**
- iPhone/iPad: JSON-Dateien (Backup, Favoriten) lassen sich in der Dateiauswahl wählen.

## V1.2 · 16.11.2026 · DEV
**Neu**
- Driverslog-Pro-Export wird erkannt (Fahrten und Ausgaben): Spalten fertig zugeordnet, Kategorie aus Fahrtzweck bzw. distanceBusiness/Commute/…, Ausgaben-Datei wird in Tankvorgänge, Ausgaben und Pickerl-Begutachtungen aufgeteilt, Werkstätten aus dem Ort übernommen.
- Neues Fahrzeug beim Import: Name aus dem Dateinamen, Bauart und „historisch“ wählbar.

**Behoben**
- Beträge wie „€ 7.500“ werden je Spalte richtig als Tausender erkannt.
- Ø Preis in TANK.ritl ignoriert Tankvorgänge ohne Menge.
- Pickerl-Frist für historische Fahrzeuge auch ohne Erstzulassung (aus letzter Begutachtung).

## V1.1 · 16.11.2026 · DEV
**Neu**
- Import CSV/XLSX für Fahrten, Tanken/Laden und Ausgaben (in LOG, TANK, SERVICE und GARAGE): erkennt Spalten von Driverslog Pro und anderen Fahrtenbüchern automatisch (Deutsch/Englisch), Zuordnung anpassbar, Vorschau, legt fehlende Fahrzeuge an, überspringt Doppelte.
- Erkennt deutsche und englische Zahlen- und Datumsformate (z. B. 82.038 km, 1,639 €/l, 03.11.2026 07:12, Excel-Datumswerte), Fahrttyp Geschäftlich/Privat/Arbeitsweg.

**Geändert**
- Hinweis bei Driverslog-Backups (.dlp2b): verschlüsselt, bitte als CSV/Excel exportieren.
- Pickerl-Frist rechnet nach Fahrzeugalter (3-2-1 bzw. ab 19.05.2027 4-2-2-2-1) statt nach Anzahl erfasster Begutachtungen.
- Lange Listen (Fahrtenbuch, Tanken, Ausgaben) werden schrittweise geladen; Report-PDF deutlich kleiner.

## V1.0 · 16.11.2026 · DEV
**Neu**
- Eigenes Tool, angelehnt an Driverslog Pro, mobil-first für iPhone/iPad (Tab-Leiste unten, Bottom-Sheets, Safe-Area, Home-Bildschirm-fähig).
- 7 Module: FAHRT.ritl (Live-Fahrt mit Timer und optionaler GPS-Aufzeichnung, manuell), LOG.ritl (Fahrtenbuch Dienst/Privat/Oldtimer/Ausfahrt, Kilometergeld, Export XLSX/PDF/CSV, GPX-Import/-Export), TANK.ritl (Voll-zu-voll-Verbrauch, Preis, Kosten, Strom in kWh), SERVICE.ritl (Werkstätten, Kosten, Service-Fälligkeit), CHECK.ritl (Pickerl-Frist §57a inkl. Regel ab 19.05.2027, .ics), STATS.ritl (interaktiver Vergleich, PDF/PowerPoint/XLSX-Report), GARAGE.ritl (ein- und mehrspurige Fahrzeuge, Orte, Fahrer, Einstellungen).
- Header über RITL-UI 1.1, Backup als `Backup_DRIVE-ritl.json` (lokal, OneDrive/SharePoint, zentral mit Stufen), Favoriten = gespeicherte Auswertungen.
