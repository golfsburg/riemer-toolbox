# CHANGELOG – PM.ritl (RIEMER Tools)

Projektmanagement: Projekt-Portfolio mit Gewerken, Anwendungen und Businesses (Lead › Spezifikation Opportunity › Spezifikation › Opportunity), Umsatzplan, Dashboard und Zeitplan · #ritl_pm
Neueste Version oben. Versionen ≤ V1.1 nachträglich rekonstruiert (Projektmanager V1.x, selbstspeichernde HTML-Datei).

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
