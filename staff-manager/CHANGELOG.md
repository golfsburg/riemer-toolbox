# CHANGELOG – STAFF.ritl (RIEMER Tools)

Personalplanung & Teamstruktur · #ritl_staff · Tool-Typ Datenbank

## V1.0.8 · 26.11.2026 · DEV

### Neu
- **Scrollen nach Ebenen (R-20):** Fixierte Organigramm-Arbeitsfläche (🔒) trägt `data-ritl-overlay` (nur solange fixiert), Zeichenfläche `data-ritl-zoom`: Rad zoomt nur im 🔒-Modus, sonst scrollt die Seite. RITL-UI 1.7 / ritl-bk 2.14.
- Zeitplan-Export verteilt viele Ereignisse auf weitere Folien statt Zeilen zu stauchen; Organigramm-Export nennt Teams in einem „Übergeordnet“-Kreis mit Hinweis.
- EN-Texte für Export-Folien und Rückfragen ergänzt.

### Geändert
- Exporte „Teams & Gruppen“, „Soll / Ist“ und „Personen“ (Team/Gruppe) verwenden den gewählten Stichtag; Zeitplan-Folie folgt dem MOVE-Filter.
- Import: E-Mail wird bei Namensänderung auch neu gebildet, wenn die alte Adresse der Vorgabe entsprach.
- E-Mail-Vorgabe wandelt zusätzlich ħ, ı, ĸ um.
- Eigene Dialoge setzen den Fokus über eine Funktion statt über einen `showModal`-Prototyp-Ersatz.

### Behoben
- Enter auf einer Checkbox im Export-Dialog löst nicht mehr „Speichern“ aus; Texte im Export-Block werden maskiert.

### Entfernt
- `wheel`-Handler am Ribbon und `overscroll-behavior:contain` auf Ribbon, Tabellen, Kanban, Zeitleiste.

## V1.0.7 · 26.11.2026 · DEV

### Neu
- **Dialoge:** In allen Dialogen gilt zentral **Enter = Speichern** (Hauptknopf), **Esc = Abbrechen** ohne Änderung; Enter in mehrzeiligen Feldern bleibt Zeilenumbruch, in Auswahllisten und Feldern mit Vorschlägen nativ; keine Doppelspeicherung; Fokus nach dem Öffnen im ersten Feld (Desktop). Gilt auch für den Export-Dialog.
- E-Mail-Vorgabe: Sonderzeichen (Ø, Æ, Ł, Þ, ð) werden abgebildet, Warnung bei doppelter E-Mail-Adresse; Namensänderung im Import bildet die E-Mail neu, solange sie nicht manuell gesetzt wurde.
- Team → Gruppe: Rückfrage, wenn Soll FTE, Leitung oder Bereich verloren gehen; Meldung, wenn eine Gruppe kein übergeordnetes Team hat.

### Geändert
- Englische Texte für Gruppe, Typ, Vor-/Nachname, E-Mail-Syntax und Export liegen als `translations_en.tsv/.sql` vor (Einspielen nach Freigabe).

### Behoben
- **Teamleitung als Mitglied einer Gruppe des eigenen Teams** gilt nicht mehr als „teamfremd“: Karten, Organigramm, Liste und JOBS zeigen sie als Mitglied der Gruppe („Leitung · in Gruppe X“), Zahlen und Texte stimmen.
- Sortierung umschalten speichert den Bestand nicht mehr unnötig.

## V1.0.6 · 26.11.2026 · DEV

### Neu
- **Export-Pilot (XLSX und PPTX).** Jede Tabelle (ORG Liste, MOVE Verschiebungen, JOBS Offene Stellen und Soll/Ist, PEOPLE Personen, Teams & Gruppen, Dotted Lines, Datenbasis) als **XLSX** (eigener Schreiber auf JSZip, kein SheetJS) und als **PPTX** (Tabelle auf Folien, bei vielen Zeilen auf mehrere verteilt, Kopfzeile wiederholt). Jede Darstellung als **PPTX**: Teamkarten, Organigramm (als Formen/Vektor, in PowerPoint bearbeitbar), MOVE-Zeitplan 12 Monate, JOBS-Board, Soll/Ist-Übersicht. 16:9 in RIEMER-Farben, Fußzeile mit Tool, Version, Stand, Stichtag/Filter und Quelle.
- **Gesamt-Export** (Header › Export): Dialog mit Häkchenliste je Bereich (ORG, MOVE, JOBS, PEOPLE) und je Format. XLSX = alle gewählten Tabellen in **einer** Datei, je Blatt (plus Blatt „Export-Info“); PPTX = alle gewählten Tabellen und Darstellungen in **einer** Präsentation mit Titelfolie und Inhaltsverzeichnis. Stichtag und Filter gelten und stehen auf der Titelfolie. Auswahl wird gemerkt (Einstellungen, im Backup). Dateinamen `JJJJMMDD-HHMM-STAFF-ritl_Gesamt.xlsx/.pptx` bzw. `_<Bereich>`.
- Kleine Export-Knöpfe XLSX/PPTX an jedem Panel für den Einzelexport.
- Teamtyp (Team/Gruppe) sowie Vorname/Nachname sind in allen Tabellen enthalten; Gruppen erscheinen im Organigramm als Unterzeile im Team, in den Teamkarten als Unterbereich.
- Der Export liegt als eigener Block (`staff-export`) mit kleiner API (`RITLEXP`) im Tool – Vorbereitung für einen späteren Baustein.

## V1.0.5 · 26.11.2026 · DEV

### Neu
- **Teamtyp Team / Gruppe.** Eine *Gruppe* ist eine thematische Einteilung **innerhalb** eines übergeordneten Teams (Pflicht, keine Gruppe auf oberster Ebene; das übergeordnete Team ist ein Team). Gruppen haben **keine eigene Soll-FTE und keine eigene Leitung** (Felder im Dialog ausgeblendet, beim Excel-Import ignoriert – mit Hinweis in der Vorschau). Ihre Mitglieder zählen zugleich im übergeordneten Team (Ist-FTE und Σ, jede Person genau einmal); die Gruppe selbst zeigt nur ihre Summe zur Info. In Teamkarten und Organigramm erscheint sie als dezenter, gestrichelter Unterbereich im Team (Person auf die Gruppe ziehen = Move in die Gruppe). JOBS Soll/Ist nur für Teams; Stellen können einer Gruppe zugeordnet werden und zählen zum Team. Altdaten sind „Team“. Excel: neue Spalte „Typ“ (Team/Gruppe) im Blatt Teams nach den TIMING-Spalten.
- **Vorname und Nachname** (zwei Felder). „Name“ bleibt als Anzeigename „Vorname Nachname“ (Austausch mit PPTX.ritl › TIMING, Spalte name unverändert zuerst); neue Excel-Spalten „Vorname“, „Nachname“ danach. Ältere Namen und Importe nur mit „Name“ werden am letzten Leerzeichen getrennt (Nachname = letztes Wort), Hinweis in der Import-Vorschau bzw. beim Start. Vorname/Nachname im Import haben Vorrang. Sortierung nach Nachname, Vorname (Option „Vorname zuerst“), Suche über beide.
- **E-Mail-Vorgabe:** Einstellung „E-Mail-Syntax“ (PEOPLE › E-Mail & Sortierung, im Backup/settings), z. B. `{vorname}.{nachname}@firma.at`; Platzhalter `{vorname}`, `{nachname}`, `{v}`, `{n}`; klein, ä→ae ö→oe ü→ue ß→ss, Akzente und Leerzeichen entfallen, Bindestrich bleibt; Format wird geprüft. Die E-Mail wird beim Anlegen/Ändern der Namen vorgeschlagen, solange sie nicht manuell geändert wurde (Merker emailManuell je Person); „Vorgabe übernehmen“ je Person und „Für alle ohne manuelle E-Mail neu setzen“ (mit Bestätigung). Import: leere E-Mail → Vorgabe. Bestehende E-Mails gelten als manuell.
- **DEMO:** Gruppe „Außendienst Ost“ in Vertrieb Ost, Personen mit Vor-/Nachname, E-Mail-Syntax gesetzt.

### Geändert
- **Ist-FTE nach der FTE-Regel auch in der Liste und in den Excel-Exporten:** PEOPLE › Teams zeigt Typ, Mitglieder, Ist FTE und Σ Ist FTE; der Teams-Export enthält „Ist FTE“ und „Σ Ist FTE“ (beim Import ignoriert) – gleiche Rechnung wie Karten, Organigramm und JOBS.
- Anleitung: teamfremde Leitung berichtet an die Leitung **ihres eigenen** Teams (unverändertes Verhalten, jetzt beschrieben); Abschnitte „Team oder Gruppe“ und „Name und E-Mail“.

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
