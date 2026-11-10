# Zeiterfassung.ritl

Projektbezogene Zeiterfassung mit Timer (Start/Pause/Stopp) oder manueller Eingabe – mehrere Projekte parallel,
Kategorien, Auswertung je Projekt (inkl. Druck/PDF), CSV-Export und -Import. Optional Hybrid-Modus mit SharePoint-Liste (RIEMER Tools).

**Online:** https://golfsburg.github.io/riemer-toolbox/zeiterfassung/
**Lizenz:** `LicenseRef-Proprietary` – siehe [LICENSE](LICENSE)

> 🔒 Geschütztes Tool: `index.html` ist nur die Schlüssel-Abfrage. Der eigentliche Code wird nach
> erfolgreicher Lizenzprüfung vom Server geladen – siehe [`../lizenz/LIZENZVERWALTUNG.md`](../lizenz/LIZENZVERWALTUNG.md).

## Funktionen
- Mehrere Projekte parallel (Mitarbeiter, Kunde, HCP-Link, SFDC-Link je Projekt)
- Timer mit Start, Pause, Weiter, Stopp & Speichern oder manuelle Eingabe (Datum, Start, Ende)
- Frei pflegbare Kategorien mit Farbe (Einstellungen)
- Auswertung je Projekt mit Summen, formschöner Druck-/PDF-Ansicht
- CSV-Export und -Import je Projekt
- Lokaler Modus (Browser-Speicher) oder Hybrid-Modus mit SharePoint-Liste für mehrere Mitarbeiter
- Eingebauter Changelog

Im lokalen Modus bleiben alle Daten im Browser – nichts wird an den Lizenzserver übertragen.

## Hinweis zum Speicher
Die Daten liegen im Browser-Speicher der Adresse, unter der das Tool geöffnet wird. Zeiterfassungs-Daten aus einer lokal
geöffneten Datei sind daher nicht automatisch in der Online-Version sichtbar – bei Umstieg vorher je Projekt als CSV exportieren und importieren.

© 2026 Peter Riemer
