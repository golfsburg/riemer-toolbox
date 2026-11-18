# CHANGELOG – STAKE.ritl (RIEMER Tools)

Beziehungs- und Stakeholder-Map für Firmen, Ansprechpartner, Projekte und Gewerke · #ritl_stake
Neueste Version oben.

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
