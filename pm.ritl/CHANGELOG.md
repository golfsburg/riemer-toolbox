# CHANGELOG – PM.ritl (RIEMER Tools)

Projektmanagement: Projekt-Portfolio mit Gewerken, Anwendungen und Businesses (Lead › Spezifikation Opportunity › Spezifikation › Opportunity), Umsatzplan, Dashboard und Zeitplan · #ritl_pm
Neueste Version oben. Versionen ≤ V1.1 nachträglich rekonstruiert (Projektmanager V1.x, selbstspeichernde HTML-Datei).

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
