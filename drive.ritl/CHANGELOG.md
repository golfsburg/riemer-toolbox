# CHANGELOG – DRIVE.ritl (RIEMER Tools)

Fahrtenbuch, Fahrzeuge, Tanken, Werkstatt, Pickerl §57a und Statistik · #ritl_drive
Neueste Version oben.

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
