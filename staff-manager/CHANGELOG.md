# CHANGELOG – STAFF.ritl (RIEMER Tools)

Personalplanung & Teamstruktur · #ritl_staff · Tool-Typ Datenbank

## V1.0.0 · 26.11.2026 · DEV

### Neu
- Übernahme aus dem Mockup STAFF.ritl V0.1.1 als eigenes Tool (Kategorie Office, Ordner `staff-manager/`).
- **ORG.ritl:** Teamkarten mit Soll/Ist-FTE, Leitung und offenen Stellen; Stichtag-Regler 0–12 Monate (mit geplanten Moves, Ein- und Austritten); Ansichten Teams · Organigramm · Liste; Person auf ein anderes Team ziehen = Move planen.
- **Organigramm:** Teambaum nach übergeordnetem Team (keine Kreise), Leitung oben, Linien als SVG – Berichtslinien über Teamgrenzen und Dotted Lines zu Team oder Person mit Notiz; Klick hebt hervor, Doppelklick bearbeitet. Große Arbeitsfläche mit **🔒 Fixieren** (Mausrad zoomt zum Mauszeiger, Ziehen verschiebt, Pinch am Touchscreen, Esc löst).
- **MOVE.ritl:** Zeitplan über 12 Monate und Liste; Status geplant → bestätigt → umgesetzt.
- **JOBS.ritl:** Kanban Offen · Ausgeschrieben · Interviews · Besetzt, Soll/Ist je Team; Besetzt mit Kandidat:in legt die Person an.
- **PEOPLE.ritl:** Personen, Teams und Datenbasis; „Berichtet an“ (leer = automatisch Teamleitung bzw. Leitung des übergeordneten Teams).
- **Excel:** Teams, Personen, Dotted Lines, Moves, Offene Stellen – je einzeln oder alle in einer Datei: Export, Vorlage (Beispielzeile, Pflichtspalten *, Datum TT.MM.JJJJ, Auswahllisten, Blatt „Hinweise“) und Import mit Vorschau (neu/aktualisiert/Fehler, „ergänzen & aktualisieren“ oder „ersetzen“). Eigener XLSX-Leser/-Schreiber auf JSZip 3.10.1 (kein SheetJS).
- **Austausch mit PPTX.ritl › TIMING nur manuell über Excel:** Personen (ID, Name, Rolle, E-Mail, Team, Farbe) und Teams (ID, Name, Farbe) mit denselben Feldern zuerst, danach die Planungsfelder.
- Eigener Datenbestand im Browser; Demo-Daten nur auf Wunsch („Demo laden“), solange noch nichts angelegt ist; „Alle Daten löschen“.
- Favoriten für Ansichten (Modul, Ansicht, Stichtag, Filter) – lokal, als Datei und im OneDrive-/SharePoint-Ordner.
- Standard der RIEMER Tools: Header RITL-UI 1.6, Backup ritl-bk 2.13 (`Backup_STAFF-ritl.json`, Stufen settings/datenbank/storage), DE/EN, Offline-Version, Module im Link (`#org`, `#move`, `#jobs`, `#people`), mobil mit Tab-Leiste unten und Bottom-Sheets, Ziehen nach unten lädt neu (Home-Bildschirm-App), App-Bild.

### Geändert (gegenüber dem Mockup)
- Kein Zugriff mehr auf den Speicher von PPTX.ritl („ritl-timing“); Schalter „Mit PPTX.ritl verbinden“ entfernt.
- Kennzeichen „MOCKUP“ und „Demo neu laden“ entfernt.
- Dotted Lines zwischen Teams derselben Ebene laufen als Bogen über den Karten; Linien zwischen Ebenen durch die Lücken neben den Karten – nicht mehr quer über Namen.
