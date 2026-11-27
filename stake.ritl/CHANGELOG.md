# CHANGELOG – STAKE.ritl (RIEMER Tools)

Beziehungs- und Stakeholder-Map für Firmen, Ansprechpartner, Projekte und Gewerke · #ritl_stake
Neueste Version oben.

## V2.6.8 · 26.11.2026 · DEV
**Geändert**
- **Scrollen nach Ebenen (Regel S-18, Rollout R-20):** Solange ein Dialog, Filter-/Favoriten-Popup, Rollen-Auswahl, Auswahl-Popup oder die fixierte Arbeitsfläche (🔒) offen ist, scrollt die Seite im Hintergrund nicht mehr – weder per Mausrad noch per Touch noch per Tastatur. Die Sperre kommt zentral aus RITL-UI 1.7.
- Listen, Matrix und Ribbon reichen am Ende an das Fenster weiter; Mausrad über dem Ribbon scrollt die Seite.
- Esc schließt zuerst das oberste Popup, erst danach die fixierte Arbeitsfläche.
- Bausteine aktualisiert: **RITL-UI 1.7**, **ritl-bk 2.14**.

## V2.6.7 · 25.11.2026 · DEV
**Geändert**
- **Tool-Typ „Datenbank“ (Regel S-23, Rollout R-19):** Das Tool ist als Typ Datenbank gekennzeichnet – Daten bleiben wie bisher im Tool, keine Projektdateien.
- Backup-Baustein auf **ritl-bk 2.12** aktualisiert (Verhalten unverändert).

## V2.6.6 · 25.11.2026 · DEV
**Geändert**
- **Scrollen (R-15):** Der Kopf läuft beim Scrollen aus, die Modul-Leiste (Ribbon) bleibt oben stehen. Das Mausrad über der Leiste schiebt nur die Leiste waagrecht, nie die Seite; Dialoge und innere Bereiche scrollen für sich, ohne die Seite dahinter mitzunehmen.

## V2.6.5 · 23.11.2026 · DEV
**Geändert**
- Filter „Herkunft nur PM“, Ansprechpartner in den Firmen-Boxen und „Fixieren“ gehören zu den Einstellungen im Backup.

## V2.6.4 · 22.11.2026 · DEV
**Geändert**
- **Backup intern vereinfacht:** Ältere Backup- und Favoriten-Dateien aus der Zeit vor STAKE.ritl (MUSTER.ritl) nimmt jetzt der gemeinsame Backup-Baustein an – beim Wiederherstellen, beim Favoriten-Import und auch aus dem verknüpften Ordner. Für Nutzer ändert sich sonst nichts.

## V2.6.3 · 22.11.2026 · DEV
**Neu**
- **Module im Link (Regel S-21):** Jedes Modul hat einen eigenen Link mit `#name` (#map, #data). Ein Link oder Lesezeichen öffnet direkt dieses Modul, Neu laden bleibt im Modul, „Zurück“/„Vor“ im Browser wechseln zwischen den zuletzt geöffneten Modulen.

## V2.6.2 · 22.11.2026 · DEV
**Neu**
- **Teilen-Blatt beim Speichern am Handy und Tablet:** Exporte und „Backup speichern“ öffnen am Touchscreen das Teilen-Blatt („In Dateien sichern“, AirDrop, Mail) – in der Home-Bildschirm-App zeigte iOS Downloads bisher nur als Vorschau. Am Computer bleibt es beim normalen Download; lässt der Browser das Teilen nicht zu, wird ebenfalls normal geladen.

## V2.6.1 · 20.11.2026 · DEV
**Geändert**
- Backup: alle Datenquellen gleichzeitig aktiv, jede in ihrer Stufe (ritl-bk 2.7)

## V2.6 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools. Fenster und Abläufe bleiben wie gewohnt.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings**, **2 · datenbank**, **3 · storage** (kurz z. B. C3).
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für STAKE.ritl auf allen Geräten. „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Datenquelle wechseln** mit Rückfrage – der Stand wird dabei übernommen (in den Ordner geschrieben bzw. mit dem Server abgeglichen).
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.
- Ein neues Gerät ohne eigene Daten übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage.
- **Stufe 3 · storage** enthält zusätzlich die Dateiablage des Tools.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- C · Server mit Stufe 1 gleicht nur die Einstellungen über den Server ab; die Daten bleiben im Browser.
- Favoriten › OneDrive & SharePoint nutzt den Ordner aus dem Backup-Baustein (Status und Knöpfe wie im Fenster „Backup“).

**Behoben**
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“, nur weil dort die Beispiel-Map angelegt wurde.

## V2.5 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz:** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt auf allen Geräten und in allen RIEMER Tools – das Backup muss nicht mehr auf jedem Gerät eingerichtet werden.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei B die Stufe der Lizenz (mindestens datenbank), bei A settings, ohne Server-Freigabe höchstens datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Lokal in den Ordner sichern“ bleibt je Gerät (der Ordner muss auf jedem Gerät verknüpft werden).
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt („durch die Lizenz festgelegt“).

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (auch bei Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Gesperrte storage-Zeile unter 02 Zentral: „nur mit ‚Server ist die Datenquelle‘ (Freigabe im Admin)“ statt „zentral folgt später“; der Hinweis bei fehlender Freigabe nennt den Admin statt „bitte beim Anbieter anfragen“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ (Backup einrichten, Backup-Dialog, Backup-Symbol) statt einer stillen Sperre.

**Behoben**
- Datenquelle B (Server ist die Datenbank): Die unter 02 Zentral gewählte Stufe storage sprang nach „Übernehmen“ auf datenbank zurück – sie bleibt jetzt eingestellt.

## V2.4 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Filter), fragt STAKE.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten; die Einstellungen gleicht der Server ab.
- Hat nur dieses Gerät eine Einstellung geändert und liegt im Ordner inzwischen ein neuerer Stand, lädt STAKE.ritl ihn ohne Abfrage, statt „Neuerer Stand im Ordner“ zu fragen.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommen sie nacheinander – die zweite überschreibt die erste nicht mehr.
- „Ordner verknüpfen“ in „Backup einrichten“: Der Abgleich startet erst mit „Übernehmen“, die Abfrage schiebt sich nicht mehr über das offene Fenster.
- Lässt sich die Ordner-Verknüpfung im Browser nicht speichern, bleibt STAKE.ritl nicht mehr hängen.

## V2.3 · 19.11.2026 · DEV
**Behoben**
- Bei Datenquelle A (Ordner ist die Datenbank) war im Backup-Dialog das Häkchen „Nach jeder Änderung automatisch im Ordner sichern“ noch sichtbar, obwohl es dort keine Wirkung hat. Es ist jetzt ausgeblendet.

## V2.2 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings`, `datenbank` oder `storage`). STAKE.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit demselben Stand.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“. Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen.
- **storage über den Server:** Mit „Server ist die Datenquelle“ werden hochgeladene Dateien (Dateiablage) einzeln am Server abgelegt und auf allen Geräten abgeglichen – zusammen höchstens 50 MB je Lizenz.
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_STAKE-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. STAKE.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“; Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt.

**Geändert**
- „Server ist die Datenquelle“ ist nur wählbar, wenn die Lizenz im Admin dafür freigegeben ist; sonst ist das Häkchen gesperrt mit Hinweis.
- Status im Backup-Dialog und am Backup-Symbol zeigt die Datenquelle mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog.
- Offline-Version: kein Serverzugriff, der Abschnitt „Zentral“ entfällt, Übersetzungen sind eingebaut.

## V2.1 · 19.11.2026 · DEV
**Behoben**
- JS-Fehler beim ersten Start (ohne gespeicherte Daten): Eine Beziehung zwischen zwei Ansprechpartnern derselben zugeklappten Firmen-Box (z. B. „berichtet an“) wurde mit ungültigen Koordinaten gezeichnet (`NaN` in Kante und Beschriftung). Solche Beziehungen werden in der zugeklappten Box nicht mehr gezeichnet; aufgeklappt erscheinen sie wie bisher zwischen den Zeilen.

## V2.0 · 18.11.2026 · DEV
**Geändert**
- Fußzeile nach Skill-Regel 25: „© 2026 Peter Riemer · toolbox@riemer.co · RIEMER Tools“ mit Mail-Link; steht immer am unteren Rand des Browserfensters (bei wenig Inhalt unten, bei langem Inhalt beim Scrollen sichtbar), kompakt in einer Zeile. Unter 620 px entfällt die Kurzinfo rechts.
- Kein Link mehr auf riemer.co im Tool: Schriftzug „RIEMER Tools“ und Kontakt führen zu toolbox@riemer.co.
- Hinweise (Toast) erscheinen über der Fußzeile.

## V1.9 · 18.11.2026 · DEV
**Neu**
- **Brücke aus PM.ritl** (PM.ritl V2.0, Format 1): Projekte, Gewerke und Firmen (Kunden/Account) mit ihren Beteiligungen übernehmen – aus dem Browser (`riemer-bridge-pm-stake`, PM.ritl schreibt nach jeder Änderung) oder aus der Datei `PM-ritl_STAKE-Bruecke.json`. Der Kopf wird geprüft (`pm-ritl`, Inhalt `bruecke`, Format 1); neueres Format → „Bitte STAKE.ritl aktualisieren“.
- Nur Gewerke mit Business vom Typ Spezifikation Opportunity, Spezifikation oder Opportunity; Leads (Pipeline) werden nicht übernommen. Rolle: Spezifikation → Planung (`plan`), Opportunity → Ausführung (`aus`).
- DATA.ritl › Import › **Aus PM.ritl übernehmen**: Stand der Brücke und Vorschau neu / aktualisiert / unverändert / nicht mehr in PM.ritl je Firmen, Projekte, Gewerke und Beteiligungen. Abgleich über den gespeicherten PM-Schlüssel, sonst den Namen ohne Rechtsform; je Firma, Projekt, Gewerk und Rolle eine Beziehung – zweimal übernehmen erzeugt keine Dubletten. Rückgängig möglich.
- Nur ergänzen und aktualisieren: STAKE-eigene Firmen, Projekte, Ansprechpartner und Beziehungen bleiben. Beziehungen aus PM.ritl, die dort nicht mehr vorkommen, werden markiert und nur nach Bestätigung entfernt.
- Neue Firmen links, neue Projekte in der Mitte; vorhandene Positionen bleiben.
- Status und Business je Beteiligung im Tooltip (Map) und in der Matrix-Zelle; verlorene Beteiligungen blass.
- Punkt am Reiter DATA.ritl, wenn im Browser eine neuere Brücke liegt als die zuletzt übernommene.
- Filter **Herkunft: PM.ritl** in Map und Matrix.
- Anleitung: Abschnitt „Verbindung zu PM.ritl“.
- Haltung und Einfluss im Projekt-FOKUS: Map (Firmenbox, Kreise, Popup), Tabelle „Firmen & Ansprechpartner“ und Projektzelle zeigen und ändern dieselben Werte im Projekt; sie gelten je Projekt für alle Gewerke der Person.

**Geändert**
- Rolle der Firma im Projekt ist eine feste Auswahlliste (Matrix und Beziehung in der Map); frühere freie Einträge bleiben als „nicht in der Liste“ sichtbar.
- DATA.ritl › Bearbeiten: „Haltung (allgemein)“ / „Einfluss (allgemein)“.

## V1.8 · 18.11.2026 · DEV
**Neu**
- Backup-Stufe **storage** für 01 Lokal: alles aus `datenbank` plus alle Dateien der Dateiablage (IndexedDB `stake_files`). Noch lädt STAKE.ritl selbst keine Dateien hoch – die Stufe ist für künftige Anhänge vorbereitet und sichert bis dahin wie `datenbank`.

**Geändert**
- „Backup einrichten“: storage lokal wählbar, zentral gesperrt („nur lokal, zentral folgt später“).

## V1.7 · 17.11.2026 · DEV
**Neu**
- Matrix Projekte × Gewerke: Die **Firma hängt mit ihrer Rolle am Gewerk**, darunter lassen sich keiner, einer oder mehrere **Ansprechpartner dieser Firma** zuordnen – je mit **Haltung und Einfluss auf das Projekt** (gilt nur für dieses Projekt und Gewerk; vorgeschlagen werden die allgemeinen Werte der Person).
- Backup einrichten › 02 Zentral: Option **„kein Backup zentral erstellen“** (ersetzt das Häkchen).

**Geändert**
- Bisherige Zuordnungen „Ansprechpartner direkt am Gewerk“ werden automatisch unter ihre Firma gestellt; Haltung und Einfluss der Person werden als Projektwerte übernommen. Ansprechpartner ohne Firma bleiben mit dem Hinweis „ohne Firma“ stehen.
- Firma in der Zelle entfernen oder wechseln entfernt auch ihre Ansprechpartner aus diesem Gewerk.
- Map: Linie Ansprechpartner → Projekt zeigt Haltung und Einfluss im Projekt; bei zugeklappter Firmenbox wird nur die Linie der Firma gezeichnet.

## V1.6 · 17.11.2026 · DEV
**Neu**
- Ribbon **DATA.ritl · Verwaltung** (Idee STAKE-03): Import, Bestand und Daten (Beispiel laden, Leeren) an einem Ort; MAP.ritl bleibt für Map, Matrix, Filter und FOKUS.
- **Import Ansprechpartner** (Salesforce „Zugehörige Kontakte“): Kontaktname = Ansprechpartner, Funktion = Rolle, dazu Berufsbezeichnung, Telefon, E-Mail; jeder Ansprechpartner gehört genau zu einer Firma (Firma wählen oder aus Spalte).
- **Import Firmen mit Projekt**: Projekt aus Spalte oder im Import wählen bzw. neu anlegen; Rolle = Rolle der Firma im Projekt und zugleich Eigenschaft der Firma. Neue Firmen werden angelegt, die Branche wird danach manuell in DATA.ritl eingetragen.
- **Copy & Paste im Import**: Daten mit Spaltenüberschriften einfügen (Excel-Bereich, CSV) – Spalten werden wie beim Excel-Import erkannt; auch kopierte **Salesforce-Listen** („Sortieren nach: …“, „Element auswählen n“).
- DATA.ritl › Bestand: Zeile anklicken öffnet ein **Bearbeiten-Modal** (Firma: Branche, Rollen, Fokus Level, SAP-Konten; Ansprechpartner: Funktion, Firma, Kontakt, Haltung, Einfluss; Projekt: Status). Auswahlfilter Art / Firma / Rolle, **Mehrfachauswahl** mit Aktionen: in MAP.ritl filtern, FOKUS anlegen, Firma zuweisen, löschen.
- Map: **Ansprechpartner in der Box ihrer Firma** – kompakt mit Rolle, Haltung (Pfeil) und Einfluss (Balken); umschaltbar „Ansprechpartner in Firmen“. Die Firmenbox ist **auf- und zuklappbar** (Zähler-Pille, Standard zu); Beziehungen setzen an der Person bzw. bei zugeklappter Box an der Firma an.
- „Alle auf / Alle zu“ als Symbole rechts im Ribbon, wirken auf das aktive Modul.

**Geändert**
- Matrix zeigt bei Projektfilter weiterhin **alle Gewerke** (dort werden Firmen zugeordnet).
- Popup eines Ansprechpartners in der Map: nur noch **Haltung und Einfluss** änderbar; Name, Funktion, Firma, Telefon, E-Mail sind Stammdaten („Stammdaten in DATA.ritl bearbeiten“). Neue Ansprechpartner und Doppelklick öffnen das Bearbeiten-Modal.
- „SVG exportieren“ steht im Kopf von Bereich 01 (Map); der Einleitungstext ist in die Anleitung gewandert.
- Bereich „Daten“ in DATA.ritl ist standardmäßig zugeklappt.

## V1.5 · 17.11.2026 · DEV
**Neu**
- **Import Excel/CSV** (Idee STAKE-03, Stufe Firmen): Salesforce-Blatt „Accounts Involved“ – Account Name = Firma, Related Project Element = Projekt, Rolle = Rolle der Firma im Projekt. Mehrere Zeilen einer Firma werden zu einer Firma mit mehreren SAP-Konten (Kunden-ID · Kontengruppe · Ort); dazu Fokus Level. Spalten werden automatisch erkannt und lassen sich zuordnen, Vorschau mit neu/vorhanden, keine Dubletten bei erneutem Import, Rückgängig möglich.
- **FOKUS aktualisieren**: überschreibt den aktiven FOKUS mit den aktuellen Filtern (neue Ausgangsfilter), dem Filtermodus und der aktuellen Anordnung als Startansicht.
- Auswahlfenster einer Firma zeigt Fokus Level und SAP-Konten.

**Geändert**
- FOKUS: Die Filter, mit denen ein FOKUS angelegt wurde, sind darin fest (Schloss). Weitere Filter lassen sich dazu setzen und unabhängig oder gekoppelt kombinieren; sie bleiben je FOKUS gespeichert. „Filter zurücksetzen“ führt im FOKUS auf die Ausgangsfilter zurück.
- Beteiligungen ohne Gewerk zeigen die Rolle der Firma als Beschriftung.

**Behoben**
- „Filter zurücksetzen“ war auch ohne gesetzte Filter sichtbar.

## V1.4 · 16.11.2026 · DEV
**Geändert**
- Header auf den zentralen Header **RITL-UI 1.1** umgestellt (wie MUSTER.ritl V2.8): Favoriten, Backup und Neu beginnen als Symbol-Chips (Text als Tooltip, Backup-Symbol bleibt sichtbar), dazu `?` Anleitung, DE/EN, Hell/Dunkel, An-/Abmelden, Toolbox-Logo und „RIEMER Tools“. Künftige Header-Versionen kommen über den Lizenzserver, ohne neue STAKE-Version.
- Hell/Dunkel und der Sprachknopf werden vom Header gesteuert; STAKE.ritl hat dafür keinen eigenen Code mehr.

## V1.3 · 15.11.2026 · DEV
**Neu**
- Backup-Stufen wie MUSTER.ritl V2.5 (Skill-Regel 21): **settings** (Farben, Ansichten, Filter, Favoriten, Sprache) und **datenbank** (settings + Map, Matrix, Gewerke, FOKUS). Stufe **storage** folgt später.
- Zentrales Backup über die RIEMER Toolbox (Supabase, EU): je Lizenz und Tool, ein Stand je Tag und Stufe, Historie 10 Tage, nur bei Änderung; Kontingent 50 MB je Lizenz.
- Modal „Backup einrichten“ beim ersten Laden: Lokal (OneDrive/SharePoint) und Zentral je mit Stufe und zu erwartender Größe; später über Backup › „Backup einrichten …“.
- Backup-Dialog: Abschnitt **03 Zentral** mit Status, „Jetzt zentral sichern“ und Historie zum Wiederherstellen.
- Backup-Knopf zeigt den Zustand als Symbol (Ordner = Lokal, Wolke = Server; grau/grün/orange, Wolke durchgestrichen = offline). Offline wird zentral nachgesichert, sobald wieder eine Verbindung besteht.

**Geändert**
- Lokales Backup folgt der gewählten Stufe; der Kopf `ritl` trägt `stufe`. Ein bereits eingeschaltetes „automatisch im Ordner sichern“ wird übernommen.
- Wiederherstellen eines settings-Backups übernimmt nur Einstellungen (inkl. Hell/Dunkel und Sprache), die Daten bleiben unverändert.
- Der grüne Punkt am Backup-Knopf entfällt.

## V1.2 · 15.11.2026 · DEV
**Neu**
- **🔒 Fixieren** im Kopf des Panels Map/Matrix (Skill-Regel 22, wie MUSTER.ritl V2.7): Map bzw. Matrix füllen das ganze Browserfenster, Seite scrollt nicht, Einpassen nach Breite und Höhe, Mausrad zoomt, Ziehen verschiebt, Esc löst, Zustand bleibt erhalten.

**Geändert**
- Verschieben auf leerer Fläche erst ab 5 px Bewegung; ein kurzer Klick hebt die Auswahl auf.

## V1.1 · 14.11.2026 · DEV
**Geändert** (Korrektur Modellbereich – nachgetragen aus `tool_versions`)
- Touch: zwei Finger = Pinch-Zoom und Verschieben (bei „Zoom frei“), Doppeltippen auf ein Element öffnet die Bearbeitung, Safari-eigene Gesten in der Map unterdrückt.
- CSS der Map-Vorschau präzisiert (Legenden-Symbole, Textauswahl auf iOS).

## V1.0 · 14.11.2026 · DEV
**Neu**
- Eigenes Tool, abgeleitet aus **MUSTER.ritl V2.4 › MAP.ritl** (Idee STAKE-01). Funktionsumfang wie MAP.ritl in MUSTER V2.4: Map und Matrix (Firmen & Ansprechpartner, Projekte & Gewerke), Beziehungsarten, Filter unabhängig/gekoppelt, Favoriten, FOKUS-Mappen, Rückgängig/Wiederherstellen, Rollen-Auswahl, Sprache DE/EN.
- Backup als eine Datei `Backup_STAKE-ritl.json` (lokal oder OneDrive/SharePoint), Team-Favoriten `STAKE-ritl_Favoriten.json`.
- Beim ersten Start werden vorhandene MAP-Daten aus MUSTER.ritl im selben Browser übernommen; Backups und Favoriten-Dateien aus MUSTER.ritl lassen sich einlesen.
- Eigenes App-Bild (Netz aus drei Knoten), Anleitung für die Map.

**Geändert gegenüber MUSTER.ritl**
- Ohne Beispiel-Ribbons und Arbeitsschritte; „Neu beginnen“ leert die Map.
- Map wird beim Öffnen eingepasst.
