# PPTX.ritl

Präsentationen & Meetings – RIEMER Tools `#ritl_pptx` mit zwei Modulen:

- **DECK.ritl** `#ritl_deck` – Präsentationen aus PowerPoint-Abschnitten und Einzelfolien zusammenstellen
- **TIMING.ritl** `#ritl_timing` – Agenda- und Meetingplanung mit Zeiten, Teilnehmern, Verantwortlichen und Räumen

**Online:** https://golfsburg.github.io/riemer-toolbox/pptx.ritl/
**Lizenz:** `LicenseRef-Proprietary` – siehe [LICENSE](LICENSE)

> 🔒 Geschütztes Tool: `index.html` ist nur die Schlüssel-Abfrage (Tool-ID `pptx-ritl`). Der eigentliche Code wird nach
> erfolgreicher Lizenzprüfung vom Server geladen – siehe [`../lizenz/LIZENZVERWALTUNG.md`](../lizenz/LIZENZVERWALTUNG.md).

## DECK.ritl
- Mehrere `.pptx` laden – Abschnitte werden automatisch erkannt (Datei- und Matrix-Ansicht, Dateien auf-/zuklappbar)
- Ganze Abschnitte oder einzelne Folien auswählen, Vorschau mit Blättern
- Storyboard per Drag & Drop ordnen, Titel umbenennen
- Startfolie aus beliebiger Präsentation als Design-Referenz, Texte direkt anpassbar
- Verlinktes Inhaltsverzeichnis – wahlweise aus dem Storyboard oder der Agenda aus TIMING.ritl
- „← Inhalt“-Knopf, „RIEMER Tools“-Kennzeichnung auf Deckblatt & Master

## TIMING.ritl
- Meeting mit Datum, Beginn, Soll-Ende, Ort, Moderation
- Teilnehmer & Räume (alphabetisch, klappbar, Verwaltung mit Einfügen aus Excel/CSV/Outlook und CSV-Export)
- Agenda mit automatisch berechneten Zeiten, Typen, Verantwortlichen, Beteiligten (alle/keine), Räumen und parallelen Sessions
- Zeitleiste mit Ziehen und Größenänderung, Konflikt- und Kapazitätsprüfung
- DECK-Abschnitte als Inhalt von Agendapunkten – auch mehrfach, mit eigener Folienauswahl
- Live-Modus mit Countdown, Raumfilter und Ist-Zeiten
- Export als Text, .html, .csv und Kalender (.ics)

## Backup & Restore
Sichert das gesamte Tool (beide Module) als `.json` oder als `.zip` inkl. PPTX-Originale.

Alle Daten werden lokal im Browser verarbeitet – nichts wird hochgeladen.

© 2026 Peter Riemer · https://riemer.co
