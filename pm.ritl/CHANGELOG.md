# CHANGELOG – PM.ritl (RIEMER Tools)

Projektmanagement: Projekt-Portfolio mit Gewerken, Anwendungen und Businesses (Lead › Spezifikation Opportunity › Spezifikation › Opportunity), Umsatzplan, Dashboard und Zeitplan · #ritl_pm
Neueste Version oben. Versionen ≤ V1.1 nachträglich rekonstruiert (Projektmanager V1.x, selbstspeichernde HTML-Datei).

## V3.1.15 · 21.11.2026 · DEV
**Behoben**
- **Dateien über den Server auf iPhone, iPad und Mac (Safari):** Dateien der Dateiablage wurden bisher nur als Verweis auf die Originaldatei im Browser abgelegt. Safari schickte sie dann leer an den Server, und das Backup meldete „Datei „…“ konnte nicht hochgeladen werden“. Jetzt wird der Inhalt selbst gespeichert und mit Inhalt hochgeladen. Bereits abgelegte Dateien werden beim ersten Start einmalig umgestellt.
- Eine Datei, die auf dem Gerät nicht mehr lesbar ist, bricht den Abgleich nicht mehr ab – sie wird mit Hinweis übersprungen.

**Geändert**
- Backup-Baustein ritl-bk 2.8.

## V3.1.14 · 20.11.2026 · DEV
**Geändert**
- Backup: alle Datenquellen gleichzeitig aktiv, jede in ihrer Stufe (ritl-bk 2.7)

## V3.1.13 · 20.11.2026 · DEV
**Neu**
- **PPTX-Export mit Auswahlübersicht** („⬇ Export ▾“ › „Auswahl für PPTX …“): alle Boxen aus PORTFOLIO, DASH, PLAN, PROJEKT (offenes Projekt), LINK und DATA als Kacheln je Modul zum An- und Abwählen, Modul-Häkchen für alle Boxen eines Moduls, Zähler „x von y Boxen gewählt“. Ein Klick erstellt eine PPTX in der Reihenfolge der Module.
- **Export-Favoriten:** „Alles“, „Nichts“ und eigene Favoriten (mit Filter auf Wunsch), Änderungen speichern, Umbenennen, Löschen; „Als Code kopieren“ / „Code einfügen“ zum Weitergeben an Kollegen.
- **Quality-Check exportieren:** im QC-Dialog je Projekt als XLSX oder PPTX; im Export-Menü von PORTFOLIO und DASH für alle gefilterten Projekte (XLSX mit Blättern Übersicht und Prüfpunkte; PPTX mit Übersicht und Checkliste je Projekt mit offenen Punkten). Der Quality-Check ist auch als Box in der PPTX-Auswahl wählbar.

## V3.1.12 · 20.11.2026 · DEV
**Neu**
- **Quality-Check je Projektphase:** Jede Projektkarte und der Phasen-Kopf in PROJEKT.ritl zeigen „QC xx %“ (grün ab 90 %, orange ab 60 %, rot darunter). Geprüft werden alle Punkte bis zur aktuellen Phase:
  1. Akquisition – Projekttyp, Kunde, Ort und Land, Inhaber, Projektnummer/Salesforce-ID, plausible Laufzeit, Betrag oder Potential, Gewerke/Anwendungen, Standard-Set vollständig.
  2. Steering – Spezifikation je Anwendung, Spezifikationen mit Wert, Businesses mit Terminen, keine überfälligen Spezifikationen, Opportunities zu erreichten Spezifikationen, Umsatzplan.
  3. Execution – Opportunities mit Wert, keine überfälligen Opportunities, keine überschrittene Forecast-Meldefrist, Forecast für alle offenen Businesses.
  4. Review – alle Businesses entschieden, Ergebnis im Umsatzplan, Forecast abgeschlossen, Projektende erreicht.
- Klick auf das Badge öffnet die Checkliste mit Hinweisen und Sprung zur Behebung (Stammdaten, Projekt, Standard-Set ergänzen); spätere Phasen sind als Vorschau sichtbar.
- Sortierung „Quality-Check (schwächste zuerst)“.
**Geändert**
- **Projektkarte:** „Projekt öffnen“ steht immer ganz unten über die volle Breite; lange Projektnamen (z. B. mit //) brechen um, die Bedienknöpfe bleiben immer erreichbar.
- Beispielprojekte bekommen Inhaber und Betrag, damit der Quality-Check vollständig ist.

## V3.1.11 · 20.11.2026 · DEV
**Neu**
- **Hauptfilter mit Mehrfachauswahl:** Status, Projekttyp, Jahr, Projektphase, Phase (Stammdaten), Inhaber und Land sind Auswahlfelder mit Häkchen – mehrere Werte je Filter (innerhalb eines Filters „oder“, zwischen den Filtern „und“).
- **Suche in jedem Filter** (Enter hakt den ersten Treffer an), „Alle sichtbaren“ und „Keine“.
- **Verknüpfte Filter:** Jeder Filter bietet nur die Werte an, die zu den übrigen Filtern und der Projektsuche passen, mit Anzahl der Projekte. Gewählte Werte ohne Treffer bleiben sichtbar (grau), damit sie abgewählt werden können; Filter ohne Werte werden ausgeblendet.
- Aktive Filter erscheinen in PORTFOLIO › Kennzahlen als einzelne Chips je Wert; Favoriten, Exporte und Berichte übernehmen die Mehrfachauswahl. Gespeicherte Filter und Favoriten aus älteren Versionen werden übernommen.

## V3.1.10 · 20.11.2026 · DEV
**Neu**
- **Projekt auswählen im PORTFOLIO:** Klick auf den Projektnamen öffnet das Projekt und springt auf **DASH**. DASH und PLAN zeigen dann nur dieses Projekt; im Filterbereich steht der Chip „Projekt“ (× zeigt wieder alle Projekte). Das Ordnersymbol öffnet weiterhin PROJEKT.ritl.
- Die Ribbons **DASH** und **PLAN** zeigen wie PROJEKT den Namen des gewählten Projekts; die Projektkarte ist im PORTFOLIO markiert.
**Behoben**
- PPTX-Projektreport, „Zeitplan der Businesses“: alle Balken hatten dieselbe Farbe. Lead, Spezifikation Opportunity, Spezifikation und Opportunity haben jetzt eigene Farben (auch in der Legende und in den Diagrammen je Business-Typ).
- PPTX-Exporte lösen App-Farben (Projekt-, Gewerk- und Zeitplanfarben) richtig auf – auch wenn die App im Dunkelmodus läuft.

## V3.1.9 · 20.11.2026 · DEV
**Neu**
- **Standard-Sets je Projekttyp importieren** (DATA.ritl › Projekttypen und im Editor „Standard-Sets je Projekttyp“): Gewerke und Anwendungen per Copy & Paste aus Excel – mit Spalte **Projekttyp** mehrere Typen auf einmal, sonst für den gewählten (oder einen neuen) Typ. Spalten Gewerk, Anwendung, Typ (Planung/Ausführung); mit oder ohne Kopfzeile, leere Zellen übernehmen den Wert darüber. Auch die Salesforce-Liste „Gewerke & Anwendungen“ eines Projekts wird erkannt.
- Spaltenübersicht mit ✓ gefunden, Vorschau je Zeile (neu / vorhanden / doppelt / neuer Typ), Modus **ergänzen** oder **ersetzen** je importiertem Typ. Neue Typen werden in die Typenliste übernommen.
- **Standard-Sets als XLSX** exportieren (Projekttyp, Gewerk, Anwendung, Typ) – zugleich Vorlage für den Import.
**Behoben**
- Standard-Sets wurden nach dem Neuladen der Seite nicht angezeigt (Daten blieben gespeichert, wurden aber zu früh gelesen). Typen mit Standard-Set bleiben jetzt immer in der Typenliste.

## V3.1.8 · 20.11.2026 · DEV
**Neu**
- **Menü „Neu“** (Header „+“ und Knopf „Neu …“ im Portfolio): „Neues Projekt“ (leer) oder **„Beispielprojekt erstellen“**.
- **Beispielprojekt je Projekttyp:** Projekttyp wählen (oder neu anlegen), Name, Baubeginn und Laufzeit – PM.ritl legt ein vollständiges Beispiel an: Gewerke und Anwendungen aus dem Standard-Set des Typs (sonst allgemeine Vorlage HKLS, Elektro, Brandschutz, Fassade), je Anwendung eine Spezifikation und eine Opportunity (bei Planung eine Spezifikation Opportunity) mit Beispielwerten und Terminen über die Laufzeit. Das Projekt ist als „BEISPIEL · <Typ>“ benannt, hat die Nummer BSP-###, steht im Logbuch und wird gleich geöffnet.
**Geändert**
- DATA.ritl: „Beispielprojekt anlegen“ (feste VORLAGE) ersetzt durch „Beispielprojekt erstellen …“; auch in der leeren Projektliste.

## V3.1.7 · 20.11.2026 · DEV
**Geändert**
- **Projekttypen nur aus den Projekten:** Die fest eingebauten Typen (EPC, EPCM, Service, Rahmenvertrag, Einzelauftrag) sind entfernt. Die Liste enthält nur Typen, die in Projekten vorkommen (z. B. aus dem Salesforce-Import), und Typen mit Standard-Set; sie ist alphabetisch sortiert und wird beim Speichern automatisch abgeglichen.
- „Projekttypen verwalten“ zeigt je Typ die Anzahl der Projekte; ein Typ, der noch verwendet wird, lässt sich nicht entfernen.

## V3.1.6 · 20.11.2026 · DEV
**Neu**
- **Salesforce-Import in drei Stufen** per Copy & Paste aus Salesforce oder Excel – ein Dialog mit Reitern, die Stufe wird beim Einfügen automatisch erkannt:
  1. **Salesforce-Projekte** → PORTFOLIO.ritl: Liste mehrerer Projekte (Excel-Blatt „Projekte“) – Projekte anlegen oder abgleichen über die bekannte Zuordnung (Mapping).
  2. **Salesforce-Projektdaten** → PROJEKT.ritl: Detailseite eines Projekts (Excel-Blatt „Projektdaten“) – Projekt wird erkannt oder ausgewählt (bisher „Salesforce-Projekt“).
  3. **Salesforce-Gewerke-Anwendungen** → PROJEKT.ritl: Liste der Gewerke und Anwendungen (Excel-Blatt „Gewerke&Anwendungen“) – legt fehlende Gewerke/Anwendungen an, übernimmt Baubeginn/Enddatum als Zeiträume und das Potential als vorbelegten Schätzwert im Forecast; „--“-Zeilen und hinfällige Einträge werden übersprungen.
- Jede Stufe zeigt die **erforderlichen Daten als Spaltenübersicht** (Pflicht, Ziel in PM.ritl, nach dem Einfügen ✓ gefunden).
- **Land** im Import-Mapping (auch Region, PLZ, Projektklassifizierung, Art der Arbeit, Potentialklasse, Ziel SoW, PEM, Wartestellung, Hinfällig) und als zusätzlicher **Hauptfilter** im Portfolio (auch als Filter-Chip und in Favoriten).
**Geändert**
- Die Salesforce-Spalte „ID“ (PRJ-Nummer) wird als Projektnummer zugeordnet; der Abgleich prüft Projektnummer und Salesforce-ID kreuzweise und auch alternative Projektnamen.
- Excel-Kopien werden besser gelesen: Datumsangaben als JJJJ-MM-TT, mehrzeilige Zellen in Anführungszeichen, Werte wie „FalschHinfällig“.
- Die Suche findet auch Land und alternative Projektnamen.

## V3.1.5 · 20.11.2026 · DEV
**Neu**
- **Salesforce-Projekt einfügen und abgleichen:** Detailseite eines Projekts in Salesforce (Reiter Details) komplett kopieren und einfügen – in PORTFOLIO.ritl („Salesforce einfügen …“), DATA.ritl › 01 Import oder im Projektkopf („Aus Salesforce …“). PM.ritl erkennt die Felder, sucht das passende Projekt (Projektnummer, Name, alternative Projektnamen) und zeigt je Feld PM.ritl ↔ Salesforce zum Anhaken. Neue Projekte werden angelegt (mit Standard-Set des Projekttyps), bestehende nur in den angehakten Feldern aktualisiert.
- Erkannt werden u. a. Name, ID, Fokus Level, Projektklassifizierung, Projekt-Typ (fehlende Typen werden ergänzt), Art der Arbeit, Währung, Projekt Phase, in Wartestellung, Hinfällig, Potential-Berechnungsmethode, Potentialklasse, Ziel SoW, Verteilungsstatus, Umsatzplan-Vollständigkeit, Betrag, Potential, Ziel (Top Down), FEED-, Entwurfs-, Bau- und Endtermin, Adresse (Straße 1–5, PLZ, Stadt, Bezirk, Staat, Region, Land), Hinweise (mit alternativen Projektnamen und Bauherr als Kunde), Modellierungssoftware, Program, Inhaber, Zugewiesener, Project Execution Manager und „Zuletzt geändert“.
- **Neue Stammdatenfelder** für diese Werte (im Fenster „Stammdaten bearbeiten“ und im Projektkopf); die Hinweise stehen aufklappbar im Projektkopf.
- „In Wartestellung = ja“ setzt das Projekt auf **ruht**, „nein“ nimmt eine aus Salesforce gesetzte Ruhe wieder zurück. Ist der eingefügte Stand älter als der zuletzt übernommene, warnt PM.ritl und hakt nichts vor.
- Jeder Import steht im **Logbuch** (Art „Import“) mit den geänderten Feldern.

## V3.1.4 · 20.11.2026 · DEV
**Neu**
- **Export jeder Box:** Im Kopf jeder Box „⬇ Export“ mit „Box als PPTX“ (Abbild im Hell-Modus, Folien mit Deckblatt und Folienmaster „RIEMER Tools“, lange Boxen auf mehrere Folien verteilt) und „Tabellen als XLSX“ (ein Blatt je Tabelle, Eingabefelder mit ihrem Wert, Blatt „Info“ mit Modul, Filter und Zeitpunkt).
- **Export je Ansicht:** „⬇ Export ▾“ neben „Alle auf / Alle zu“ exportiert alle Boxen der Ansicht als PPTX bzw. alle Tabellen als XLSX – mit den aktiven Portfolio-Filtern.
- **Handlungsbedarf (DASH.ritl) mit Forecast-Hinweisen:** Meldefrist überschritten, Bedarf in weniger als 8 Wochen nicht bestätigt, Forecast gemeldet aber Business verloren, Business ohne Forecast in Phase Execution. Gilt für Projekte ab Phase Steering oder mit begonnenem Forecast; auch im PPTX-Dashboard.
- **Meldefristen „ALLE“:** Je Ebene (Projekttyp, Gewerk, Anwendung, Business-Typ) lässt sich als Name „ALLE“ wählen. Namentliche Einträge gehen vor „ALLE“, danach gilt global.
- **Backup › 02 OneDrive & SharePoint** zeigt den Pfad des verknüpften Ordners (Baustein ritl-bk 2.3); den vollen Pfad einmal mit ✎ eintragen, da Browser nur den Ordnernamen nennen.

## V3.1.3 · 20.11.2026 · DEV
**Neu**
- **Aktive Filter als Chips** in PORTFOLIO.ritl › 01 Kennzahlen: jeder Filter einzeln mit × entfernbar, dazu „Alle Filter löschen“. Im Kopf der Box steht „gefiltert · n von m Projekten“ statt „alle Projekte“.
- **Logbuch** aller Übergänge der Projektphasen und des Forecasts mit Zeit, Projekt, Ebene, von → nach, wie (manuell, automatisch, abgeleitet), Wer und Notiz – je Projekt in PROJEKT.ritl › 07, für alle Projekte in DATA.ritl › 06 (filterbar nach Art und Projekt, folgt auf Wunsch dem Portfolio-Filter, Export als CSV). Bisherige Phasenverläufe werden übernommen. Das Logbuch ist Teil des Backups.
- **Material Forecast (Schritt 1)** in PROJEKT.ritl › 06 Forecast: Baum Projekt › Gewerk › Anwendung › Business mit Status offen · geplant · eingereicht · bestätigt · abgeschlossen, Wert, Menge mit Einheit, Bedarfszeitraum und Meldefrist. Meilensteine F1–F4 werden je Ebene mit Datum gesetzt.
  - Vererbung: Der Status einer Ebene ist der niedrigste darunter; sind alle Businesses einer Anwendung abgeschlossen, ist die Anwendung abgeschlossen – bis hinauf zum Projekt.
  - Opportunities, Spezifikation Opportunities und Spezifikationen bekommen einen Forecast; der Wert ist mit Potential/Umsatz vorbelegt. Gewonnene oder verlorene Businesses sind automatisch abgeschlossen.
  - Werte unten ersetzen die Schätzung oben, die Differenz steht als „noch nicht verteilt“.
  - „bestätigt“ verlangt Wer und Notiz; der Zeitstempel kommt automatisch.
- **Meldefristen** in DATA.ritl › 05: Vorlauf in Wochen global (12) mit Abweichungen je Projekttyp, Gewerk, Anwendung und Business-Typ; die spezifischste gilt. Überschrittene Meldefristen ohne Meldung sind markiert.

**Behoben**
- PROJEKT.ritl › 05 Zeitplan: Die Ebenen-Knöpfe ragten bei schmalen Fenstern (390 px) über den Rand.

## V3.1.2 · 20.11.2026 · DEV
**Geändert**
- Die Filter in PORTFOLIO.ritl wirken jetzt auf alle Kennzahlen: Box 01 Kennzahlen (Karten, Projekte je Phase) und 02 Umsatzplan zeigen nur die gefilterten Projekte – wie DASH.ritl, PLAN.ritl und die Projektliste. Neben „Kennzahlen“ steht „gefiltert · n von m Projekten“, solange ein Filter aktiv ist.
- „Projekte je Phase“ berücksichtigt alle Filter außer dem Phasen-Filter selbst, damit die Verteilung sichtbar bleibt; die gewählte Phase ist hervorgehoben.

## V3.1.1 · 20.11.2026 · DEV
**Neu**
- **Projekte je Phase in PORTFOLIO.ritl › 01 Kennzahlen:** vier Karten Akquisition, Steering, Execution, Review mit Anzahl und Anteil, den Projekten der Phase (Klick öffnet das Projekt) sowie „ruht“ und „Abschluss?“. Darüber ein Balken mit der Verteilung. Klick auf die Zahl filtert die Projektliste auf diese Phase (nochmal klicken hebt den Filter auf).
- **(i) neben jeder Phase:** Modal mit Eintritt, Meilenstein, was in der Phase passiert und wie es weitergeht.
- **Standard-Sets je Projekttyp:** In DATA.ritl › 03 Projekttypen über „Standard-Sets je Projekttyp …“ je Typ Gewerke und Anwendungen (mit Planung/Ausführung) hinterlegen – Zeilen anlegen oder aus einem bestehenden Projekt übernehmen. Ein neues Projekt mit diesem Typ bekommt das Set automatisch als Einträge ohne Business; in PROJEKT.ritl ergänzt der Knopf **Standard-Set** fehlende Kombinationen. Die Sets sind Teil von Backup (Stufe datenbank).
- **Jede Box lässt sich fixieren:** 🔒 Fixieren in jedem Boxkopf legt die Box auf das ganze Fenster – eingepasst nach Breite und Höhe, Mausrad zoomt zum Mauszeiger (15–400 %), Ziehen verschiebt (Klick bleibt Klick), „Einpassen“, Esc oder 🔓 Lösen beendet. Der Zustand bleibt nach dem Neuladen erhalten.

**Geändert**
- Beim Scrollen verschwindet der Header, die Modul-Leiste (Ribbon) bleibt am oberen Fensterrand stehen.
- Die Zeitpläne heißen beim Fixieren jetzt ebenfalls „🔒 Fixieren“ / „🔓 Lösen“.
- Info-Fenster ohne Aktion schließen mit „Schließen“ statt „Abbrechen“.
- Neue Versionsnummerierung: Entwicklungsstände (DEV) mit dritter Stelle (V3.1.1), ab Beta wieder V#.#.

## V3.1 · 20.11.2026 · DEV
**Neu**
- **Projektphasen (STAGE.ritl):** Jedes Projekt steht in einer von vier Phasen – **1 Akquisition** (Projekt angelegt, noch kein Business), **2 Steering** (mindestens ein Business: Lead, Spezifikation Opportunity, Spezifikation oder Opportunity), **3 Execution** (mindestens eine Opportunity mit Startdatum bis heute – Status egal, auch verloren) und **4 Review** (Projekt abgeschlossen).
- PROJEKT.ritl › 01 zeigt die Phasen als Leiste mit Meilenstein-Datum (M1–M4) und Kennzahl je Phase. Erreichte Meilensteine bleiben – die Phase fällt nicht automatisch zurück (Hinweis, wenn die Einträge einer früheren Phase entsprechen). Bestehende Projekte bekommen die Meilensteine nachgetragen (Datum aus dem Anlagezeitpunkt der Einträge, sonst „nachgetragen“).
- **Phase übersteuern …** (manuell 1–3 mit Begründung, zurück auf Automatik), **Ruht …** (mit Grund, „Wieder aufnehmen“) und **Projekt abschließen** (setzt Status „Abgeschlossen“ und Phase Review; „Wieder öffnen“ stellt den vorigen Status her). Hinweis **„Abschluss empfohlen“**, wenn das Projektende überschritten ist oder alle Opportunities gewonnen bzw. verloren sind. Jeder Wechsel steht im Verlauf.
- PORTFOLIO.ritl: Phasen-Kennzeichen auf jeder Projektkarte (dazu „ruht“ und „Abschluss?“), Filter **Alle Projektphasen** (1–4, ruht, Abschluss empfohlen, manuell übersteuert) und Sortierung „nach Projektphase“. Der bisherige Phasen-Filter heißt jetzt „Alle Phasen (Stammdaten)“.
- **Zeiträume für Gewerke und Anwendungen:** Im Zeitplan (PROJEKT.ritl › 05) über **Zeiträume …** (oder Klick auf einen Rahmen) von – bis je Gewerk und Anwendung eingeben. Leere Felder übernehmen den Zeitraum aus den Einträgen und Businesses (frühester Start bis spätestes Ende), auch einzeln für „von“ oder „bis“; der Gewerk-Zeitraum umfasst ohne Eingabe auch seine Anwendungen. Anzeige als Rahmen in PROJEKT.ritl und PLAN.ritl – durchgezogen = eingegeben, gestrichelt = aus Einträgen.
- Zeitplan PROJEKT.ritl: Meilensteine M1–M4 als Linien.
- LINK.ritl: Brücke trägt je Projekt zusätzlich `projektphase` (Format bleibt 1, STAKE.ritl liest unverändert).

**Geändert**
- **Alle Eingabemasken öffnen als Modal** statt in der Seite: Eintrag hinzufügen, Eintrag bearbeiten, Gewerk kopieren, Umbenennen und Mehrfach bearbeiten. Schließen mit ✕, Abbrechen, Klick neben das Fenster oder Esc.
- Solange ein Modal oder Dialog offen ist, scrollt nur das Modal – der Hintergrund bleibt stehen (gilt für alle Fenster des Tools, auch Backup).
- Der Kalender der Datumsfelder sitzt auch in gescrollten Fenstern direkt am Feld.

**Behoben**
- PLAN.ritl im Dunkelmodus: aktiver Knopf „Gesamt“ war weiß auf weiß.

## V3.0 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools – gleiche Fenster und Abläufe wie in den anderen Tools.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings** (Ansichten, Filter, Favoriten …), **2 · datenbank** (+ alle Projekte), **3 · storage** (+ hochgeladene Dateien) – kurz z. B. C3.
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für PM.ritl auf allen Geräten, „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Datenquelle wechseln** mit Rückfrage – die Projekte werden dabei übernommen (in den Ordner geschrieben bzw. mit dem Server abgeglichen).
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.
- Ein neues Gerät (noch ohne Projekte oder nur mit dem Beispielprojekt „VORLAGE“) übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- Der Abgleich mit dem Server startet erst, wenn die Projekte aus dem Browser-Speicher geladen sind.
- Wiederherstellen öffnet wieder die gesicherte Ansicht (PORTFOLIO, DASH oder PLAN).
- Backups bis V2.9 und Portfolio-Backups des Projektmanagers V1.x lassen sich weiter im Fenster „Backup“ wiederherstellen; alte HTML-Dateien und Projekt-Backups weiter unter DATA.ritl. „Automatisch im Ordner sichern“ bleibt eingeschaltet.

**Behoben**
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.

## V2.9 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz:** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt auf allen Geräten und in allen RIEMER Tools – das Backup muss nicht mehr auf jedem Gerät eingerichtet werden.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei B die Stufe der Lizenz (mindestens datenbank), bei A settings, ohne Server-Freigabe höchstens datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet („kein Backup zentral erstellen“ ist dann gesperrt). Nur „Lokal in den Ordner sichern“ bleibt je Gerät (der Ordner muss auf jedem Gerät verknüpft werden).
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt („durch die Lizenz festgelegt“).

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Gesperrte storage-Zeile unter 02 Zentral: „nur mit ‚Server ist die Datenquelle‘ (Freigabe im Admin)“ statt „zentral folgt später“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ statt einer stillen Sperre.

**Behoben**
- Datenquelle B (Server ist die Datenbank): storage ist unter 02 Zentral immer wählbar, auch wenn die Prüfung am Server gerade nicht klappt, und springt nach „Übernehmen“ nicht mehr auf datenbank zurück.
- Favoriten- und STAKE-Export tragen wieder die richtige Programmversion (stand noch auf V2.6).

## V2.8 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A: Ändert ein Gerät nur Einstellungen, während ein anderes Gerät die Ordner-Datei neu geschrieben hat, holt es den neueren Stand, statt fälschlich ‚Neuerer Stand im Ordner‘ zu fragen.

## V2.7 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Favoriten), fragt PM.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Projekte und Dateien; die Einstellungen gleicht der Server ab.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommen sie nacheinander – die zweite überschreibt die erste nicht mehr.
- „Ordner verknüpfen“ in „Backup einrichten“: Der Abgleich startet erst mit „Übernehmen“, die Abfrage schiebt sich nicht mehr über das offene Fenster.

## V2.6 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings`, `datenbank` oder `storage`). PM.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit demselben Stand.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“. Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen; ein geöffnetes Projekt bleibt dabei offen.
- **storage über den Server:** Mit „Server ist die Datenquelle“ werden hochgeladene Dateien (Dateiablage) einzeln am Server abgelegt und auf allen Geräten abgeglichen – zusammen höchstens 50 MB je Lizenz.
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_PM-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. PM.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“; Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt.

**Geändert**
- „Server ist die Datenquelle“ ist nur wählbar, wenn die Lizenz im Admin dafür freigegeben ist; sonst ist das Häkchen gesperrt mit Hinweis.
- Status im Backup-Dialog und am Backup-Symbol zeigt die Datenquelle mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.
- Reines Umschalten der Ansicht (Modul, auf/zu, Zeitplan, Ebenen, Filter) gilt beim Abgleich nicht als Änderung und löst keine Rückfrage aus.
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog.

## V2.5 · 18.11.2026 · DEV
**Geändert**
- Fußzeile nach Regel 25: „© 2026 Peter Riemer · toolbox@riemer.co · RIEMER Tools“ mit Link `mailto:toolbox@riemer.co`; kein Link mehr auf riemer.co im Tool.
- Die Fußzeile steht immer am unteren Rand des Browserfensters – bei wenig Inhalt unten am Fenster, bei langem Inhalt beim Scrollen sichtbar (kompakt, eine Zeile; unter 620 px ohne Kurzinfo rechts). Meldungen (Toast) erscheinen darüber.

**Behoben**
- Ribbon: Hashtags der Module überlappten bei 1920 px den nächsten Reiter – sie erscheinen erst bei sehr breiten Fenstern.

## V2.4 · 18.11.2026 · DEV
**Geändert**
- Backup einrichten › 02 Zentral wie in STAKE.ritl: Auswahl als Stufen-Karten mit der zusätzlichen Option „kein Backup zentral erstellen“ statt Häkchen; Hinweis zu Historie (höchstens 11 Stände), Kontingent und Speicherort darunter.

## V2.3 · 18.11.2026 · DEV
**Geändert**
- LINK.ritl: Firma ist nur noch das Feld „Accountname / Kunde“ des Business-Eintrags – kein Ersatz mehr durch den Projekt-Auftraggeber.
- Spezifikation Opportunities, Spezifikationen und Opportunities ohne Accountname werden nicht übergeben; LINK.ritl zählt sie als Hinweis („n Businesses ohne Accountname – nicht übergeben“) mit Sprung zum Eintrag (öffnet „Eintrag bearbeiten“ am Feld Accountname).
- Ein Gewerk geht nur mit, wenn mindestens ein solches Business einen Accountnamen hat; sonst steht es unter Pipeline (neue Spalte „ohne Accountname“).
- Brücken-Format unverändert (Format 1, STAKE.ritl V1.9 liest es weiter).

## V2.2 · 18.11.2026 · DEV
**Geändert**
- PROJEKT.ritl › 01: Beschreibung (volle Breite), Status und Projekttyp stehen jetzt im Projektkopf, vor Kunde, Ort und Start – Ende.
- Die Zeile „Projektzeitraum“ entfällt; der Zeitplan nimmt den Zeitraum aus den Stammdaten (Start/Ende).

## V2.1 · 18.11.2026 · DEV
**Behoben**
- Online (über die RIEMER Toolbox) stand ganz unten der Code „Toolbox-Logo + Abmelden“ als Text: Drei Sonderzeichen (türkisches „İ“) in der eingebetteten Excel-Bibliothek verschoben die Einfügestelle des Lizenzservers. Die Zeichen sind jetzt als Unicode-Escape geschrieben; das Skript läuft wieder unsichtbar im Hintergrund (Abmelden und Toolbox-Logo kommen wie gehabt aus dem Header RITL-UI).
- Das PM.ritl-App-Bild erscheint im Browser-Tab – im Tool wird das Favicon nach dem Laden neu gesetzt, und der Loader `pm.ritl/index.html` trägt es ebenfalls.

## V2.0 · 18.11.2026 · DEV
**Neu**
- Umbau nach /riemer-webapp-design: Header über RITL-UI, Hell- und Dunkelmodus, eigenes App-Bild, volle Fensterbreite.
- Module als Ribbon: PORTFOLIO.ritl, DASH.ritl, PLAN.ritl, PROJEKT.ritl, LINK.ritl, DATA.ritl; gemeinsame Filterleiste für Portfolio, Dashboard, Zeitplan und Brücke.
- LINK.ritl – Brücke zu STAKE.ritl: Projekte, Gewerke und Firmen (= Kunde/Account). Ein Gewerk wird nur mit Business vom Typ Spezifikation Opportunity, Spezifikation oder Opportunity übergeben; Leads bleiben als Pipeline in PM.ritl. Rolle der Firma: Planung bzw. Ausführung. Übergabe automatisch im Browser (`riemer-bridge-pm-stake`) oder als Datei `PM-ritl_STAKE-Bruecke.json`; Abgleich „in STAKE / neu“.
- Backup nach RIEMER-Standard: eine Datei `Backup_PM-ritl.json`, Stufen settings · datenbank · storage, lokal, OneDrive/SharePoint-Ordner und zentral (RIEMER Toolbox).
- Favoriten für Filter-Kombinationen (lokal und als Team-Datei im OneDrive/SharePoint-Ordner).
- Zeitpläne fixieren: ganzes Fenster, Mausrad zoomt, Ziehen verschiebt, Esc löst.
- Alle Bereiche auf- und zuklappbar, „Alle auf / Alle zu“.

**Geändert**
- Daten liegen im Browser (IndexedDB `pm_db`) statt in der HTML-Datei selbst; Übernahme alter Projektmanager-HTML-Dateien (V1.x) und JSON-Backups unter DATA.ritl bzw. Backup › Wiederherstellen.
- Farben nur aus Tokens: Pipeline = Hinweis-Orange, Potential = Akzent-Blau, Umsatz = Grün, Entgangen = Rot; Ebenen Gewerk › Anwendung › Business klar abgestuft, keine blassen Texte mehr.
- PPTX- und PDF-Exporte unverändert im bisherigen Layout; PowerPoint ohne Nachladen aus dem Netz.

## V1.1 · rekonstruiert
- Projektmanager als selbstspeichernde HTML-Datei: Portfolio, Projekte mit Gewerken/Anwendungen/Businesses, Umsatzplan, Dashboard, Zeitplan, Excel/CSV-Import, PPTX/PDF-Report.
