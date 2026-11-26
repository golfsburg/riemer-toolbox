# CHANGELOG – STAFF.ritl (RIEMER Tools)

Personalplanung & Teamstruktur · #ritl_staff · Tool-Typ Datenbank

## V1.0.4 · 26.11.2026 · DEV

### Neu
- **Team-Dialog: „Das Team hat eine Teamleitung“ (ja/nein).** Bei „nein“ entfällt die Leitungsauswahl; Organigramm zeigt „ohne Teamleitung“ statt „Leitung offen“. Bei „ja“ ohne Auswahl bleibt „Leitung offen“. Excel-Import mit Leitung setzt das Team wieder auf „ja“.

## V1.0.3 · 26.11.2026 · DEV

### Behoben
- **Scrollen im Organigramm:** Mit dem Mausrad über „01 Teamstruktur“ lässt sich die Seite wieder scrollen. Der Bereich scrollt zuerst selbst; ist er am Anfang bzw. Ende (oder nichts zu scrollen), wandert das Scrollen an die Seite weiter.

## V1.0.2 · 26.11.2026 · DEV

### Neu
- **FTE-Regel mit/ohne Teamleitung:** *Team* = alle aktiven Mitglieder; ist die Teamleitung selbst Mitglied, zählt sie mit. Ist sie **teamfremd** (nicht Mitglied), zählt sie in diesem Team nicht und wird nur als „Leitung: Name“ angezeigt. *Übergeordnetes Team* (Σ über alle Unterteams) = alle FTE **inklusive aller Teamleitungen**, jede Person genau einmal. Gilt in den Teamkarten und im Organigramm (auch am Stichtag), in JOBS.ritl (Soll/Ist je Team) und in der Anleitung. Regel als kleine Tabelle mit DEMO-Beispiel in der Anleitung (?) und unter „Soll / Ist je Team“.
- **Teamleitung darf teamfremd sein:** Die Auswahl im Team-Dialog bietet alle Personen an (gruppiert: „Im Team“ / „Andere Personen“); der Excel-Import (Blatt Teams, Spalte Leitung) akzeptiert jede vorhandene Person. „Berichtet an“ automatisch (leer) bleibt: Mitglieder berichten an die Teamleitung, die Leitung selbst an die Leitung des übergeordneten Teams.
- **Organigramm:** teamfremde Leitung erscheint (gestrichelt, „teamfremd“) beim Team, ohne dort als Mitglied zu zählen; eine Leitungslinie führt vom Team zur Person in ihrem eigenen Team.
- **DEMO:** neues Team „Kundensupport“ (unter Vertrieb Ost) mit teamfremder Leitung Lukas Steiner.

### Geändert
- Kreisprüfung berücksichtigt teamfremde Leitungen: Leitungen, die einen Berichtskreis ergäben, sind im Team-Dialog gesperrt, werden beim Speichern verworfen und beim Excel-Import als Fehler gemeldet (die bisherige Leitung bleibt).

## V1.0.1 · 26.11.2026 · DEV

### Behoben
- **„Berichtet an“ ohne Kreise:** Die Kette (ausdrücklich gesetzt oder automatisch über Teamleitung bzw. übergeordnetes Team) wird bis zur Person verfolgt. Im Personen-Dialog werden Personen, die einen Kreis ergäben (A → B → A), nicht mehr zur Auswahl angeboten; beim Speichern wird ein Kreis verworfen („auf automatisch gesetzt“). Beim Excel-Import erscheint die betroffene Zeile als Fehler im Protokoll und wird nicht übernommen. Altdaten mit Kreis lassen Organigramm und Liste weiter laden (begrenzte Kettenprüfung).
- **XLSX-Leser begrenzt:** Zusätzlich zur 20-MB-Grenze für die Datei werden vor dem Lesen die Anzahl der Zip-Einträge (max. 200) und die entpackte Größe (je Eintrag 50 MB, gesamt 200 MB) geprüft; bei Überschreitung kommt eine verständliche Meldung.

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
