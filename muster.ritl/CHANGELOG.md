# CHANGELOG – MUSTER.ritl (RIEMER Tools)

Vorlage und Spielwiese für den Skill `/riemer-webapp-design` · #ritl_muster
Neueste Version oben. Versionen ≤ V2.2 nachträglich aus den veröffentlichten Ständen (Tabelle `tool_versions`) rekonstruiert.

## V3.9 · 19.11.2026 · DEV
**Neu**
- **Backup-Baustein ritl-bk 2.1:** Abgleich auf Knopfdruck, eigene Abschnitte im Fenster „Backup“ und weitere Möglichkeiten für alle RIEMER Tools – MUSTER.ritl ist die Vorlage dafür.
- Auf-/zugeklappte Bereiche und die Ansicht der Map gelten nicht mehr als Änderung: Sie lösen keinen neuen Stand am Server, im Ordner oder in der zentralen Historie aus (gesichert werden sie weiterhin).

**Geändert**
- Der erste Abgleich mit Server bzw. Ordner beginnt erst, wenn MUSTER.ritl vollständig geladen ist.
- Nach dem Übernehmen eines Stands (auch vom Server mit Dateien) sind Favoriten-Zähler und Liste sofort aktuell.
- Dateien am Server werden nach Prüfsumme verglichen – eine geänderte Datei mit gleicher Größe wird jetzt auch abgeglichen.
- Ein Gerät ohne eigene Daten ersetzt nie von selbst einen vorhandenen Stand am Server, im Ordner oder in der zentralen Historie.

**Behoben**
- Dateien, die kein Backup sind, werden beim Wiederherstellen mit einer klaren Meldung abgelehnt.
- Die Fenster „Backup“ und „Backup einrichten“ stehen immer mittig.

## V3.8 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus einem gemeinsamen Baustein, den alle RIEMER Tools bekommen. Fenster und Abläufe bleiben wie gewohnt.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings**, **2 · datenbank**, **3 · storage** (kurz z. B. C3).
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für MUSTER.ritl auf allen Geräten. „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Datenquelle wechseln** mit Rückfrage – der Stand wird dabei übernommen (in den Ordner geschrieben bzw. mit dem Server abgeglichen).
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.
- Ein neues Gerät ohne eigene Daten übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- C · Server mit Stufe 1 gleicht nur die Einstellungen über den Server ab; die Daten bleiben im Browser.

**Behoben**
- „Anderer Speicherort …“ erscheint im Fenster „Backup“ erst, wenn schon ein Speicherort gewählt wurde.
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.

## V3.7 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz (S-16):** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt in allen Tools und auf allen Geräten – du musst das Backup nicht mehr auf jedem Gerät einzeln einrichten.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei B die Stufe der Lizenz (mindestens datenbank), bei A settings, ohne Server-Freigabe höchstens datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Lokal in den Ordner sichern“ bleibt je Gerät, weil der Ordner auf jedem Gerät verknüpft werden muss.
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz.

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen tragen den Hinweis „durch die Lizenz festgelegt“.
- Gesperrte storage-Zeile unter 02 Zentral: „nur mit ‚Server ist die Datenquelle‘ (Freigabe im Admin)“ statt „zentral folgt später“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ statt einer stillen Sperre.

**Behoben**
- Datenquelle B: storage ist unter 02 Zentral immer wählbar, auch wenn die Prüfung am Server gerade nicht klappt, und springt nach „Übernehmen“ nicht mehr auf datenbank zurück.

## V3.6 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A: Ändert ein Gerät nur Einstellungen, während ein anderes Gerät die Ordner-Datei neu geschrieben hat, holt es den neueren Stand, statt fälschlich „Neuerer Stand im Ordner“ zu fragen.

## V3.5 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Filter), fragt MUSTER.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten; die Einstellungen gleicht der Server ab.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommen sie nacheinander – die zweite überschreibt die erste nicht mehr.
- „Ordner verknüpfen“ in „Backup einrichten“: Der Abgleich startet erst mit „Übernehmen“, die Abfrage schiebt sich nicht mehr über das offene Fenster.
- Lässt sich die Ordner-Verknüpfung im Browser nicht speichern, bleibt MUSTER.ritl nicht mehr hängen.

## V3.4 · 19.11.2026 · DEV
**Behoben**
- Bei Datenquelle A (Ordner ist die Datenbank) war im Backup-Dialog das Häkchen „Nach jeder Änderung automatisch im Ordner sichern“ noch sichtbar, obwohl es dort keine Wirkung hat. Es ist jetzt ausgeblendet.

## V3.3 · 19.11.2026 · DEV
**Neu**
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest – nicht mehr die Nutzerin oder der Nutzer.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_MUSTER-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. MUSTER.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Jeder Stand hat eine Nummer; bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“. Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername – so wissen neue Geräte, welcher Ordner zu verknüpfen ist.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt.

**Geändert**
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog; Daten lassen sich dort nur per „Backup speichern“ in den Ordner legen.
- Fußzeile: Kontakt per Mail `toolbox@riemer.co` statt Link auf riemer.co.

## V3.2 · 19.11.2026
**Neu**
- **storage über den Server:** Ist „Server ist die Datenquelle“ an, lässt sich unter 02 Zentral auch die Stufe `storage` wählen. Hochgeladene Dateien (Dateiablage) werden dann einzeln im Server-Speicher abgelegt und auf allen Geräten abgeglichen – neue Dateien hochgeladen, gelöschte entfernt. Zusammen höchstens 50 MB je Lizenz.

**Geändert**
- „Server ist die Datenquelle“ ist nur noch wählbar, wenn die Lizenz im Admin **„Server freigeben“** hat. Ohne Freigabe ist das Häkchen gesperrt mit Hinweis; ein bereits gewähltes „Server ist die Datenquelle“ fällt auf das zentrale Backup zurück.

## V3.1 · 19.11.2026
**Neu**
- **Server als Datenquelle:** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings` oder `datenbank`). MUSTER.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit demselben Stand.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“.
- Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen.

**Geändert**
- Status im Backup-Dialog und am Backup-Symbol zeigt „Server ist die Datenquelle“ mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.

## V3.0 · 18.11.2026
**Neu**
- Backup-Stufe **storage** für 01 Lokal: alles aus `datenbank` plus alle hochgeladenen Dateien. Die Dateien stehen mit Inhalt in der Backup-Datei `Backup_MUSTER-ritl.json` und kommen beim Wiederherstellen zurück.
- Dateiablage (RITL-Dateien) als wiederverwendbarer Baustein: hochgeladene Dateien bleiben im Browser (IndexedDB `muster_files`).
- SETUP.ritl › Erweitert › **Dateien**: Beispiel zum Hochladen, Öffnen und Löschen von Dateien.

**Geändert**
- „Backup einrichten“ zeigt bei storage die Anzahl der Dateien und die Größe; zentral bleibt storage gesperrt („nur lokal, zentral folgt später“).

## V2.9 · 18.11.2026
**Neu**
- Offline-Version möglich (Idee MUSTER-06): Im Admin › Versionen › ⬇ Offline wird eine einzige HTML-Datei ohne Lizenzprüfung gebaut – mit Kennzeichnung „Offline-Version für … · erstellt …“ und Ablaufdatum.
- In der Offline-Version entfallen das zentrale Backup (Stufe Server, Abschnitt „03 Zentral“) und der Abruf der Übersetzungen; lokales Backup und OneDrive/SharePoint bleiben.

**Geändert**
- Header RITL-UI 1.3; Farben je Lizenz (Idee MUSTER-05) wirken in MUSTER.ritl.

## V2.8 · 16.11.2026
**Neu**
- Header über den zentralen **RITL-UI 1.0** (wird vom Lizenzserver aktuell gehalten): App-Bild 52 px, Eyebrow, MUSTER.ritl mit Edition, DEV/BETA und Version · Datum; rechts Favoriten · Backup · Neu beginnen · `?` · DE/EN · Hell/Dunkel · An-/Abmelden als runde Chips · Toolbox-Logo · RIEMER Tools.
- „Neu beginnen“ mit Symbol; unter 1100 px zeigen die Knöpfe nur noch Symbole.

**Geändert**
- Hell/Dunkel und der Klick auf DE/EN laufen über RITL-UI (eigener Code dafür entfernt).

## V2.7 · 15.11.2026
**Neu**
- MAP.ritl: **🔒 Fixieren** im Kopf des Panels Map/Matrix (Skill-Regel 22). Fixiert füllen Panelkopf, Filter, Werkzeuge und Map bzw. Matrix das ganze Browserfenster; die Seite scrollt nicht mehr.
  - Map wird nach Breite und Höhe eingepasst, bei Fenstergröße neu; Zoom ist fixiert automatisch frei (Mausrad zoomt zum Mauszeiger, Ziehen verschiebt), beim Lösen wieder wie vorher.
  - Touch: zwei Finger zoomen (Pinch).
  - Esc löst – zuerst werden Auswahl bzw. Werkzeug zurückgesetzt, offene Dialoge haben Vorrang. Zustand bleibt nach Neuladen erhalten.

**Geändert**
- Verschieben auf leerer Fläche erst ab 5 px Bewegung; ein kurzer Klick hebt die Auswahl auf.

## V2.6 · 15.11.2026
**Neu**
- Backup-Knopf im Header zeigt den Zustand als Symbol: Ordner = Lokal (OneDrive/SharePoint), Wolke = Server (zentral). Grau = aus, Grün = aktiv, Orange = Achtung (kein Ordner, Zugriff erneuern, Serverfehler), Wolke durchgestrichen = offline. Tooltip mit Details.
- Offline: zentrales Sichern wartet und läuft automatisch, sobald wieder eine Verbindung besteht; Hinweis im Abschnitt „03 Zentral“.

**Geändert**
- Der grüne Punkt am Backup-Knopf entfällt (ersetzt durch das Symbol).

## V2.5 · 15.11.2026
**Neu**
- Backup-Stufen: **settings** (Farben, Ansichten, Filter, Favoriten, Sprache) und **datenbank** (settings + Map, Matrix, Gewerke, FOKUS). Stufe **storage** (inkl. Dateien) folgt später.
- Zentrales Backup über die RIEMER Toolbox (Supabase, EU): je Lizenz und Tool, ein Stand je Tag und Stufe, Historie 10 Tage, gzip-komprimiert, nur bei Änderung (SHA-256). Kontingent 50 MB je Lizenz. Edge Function `tool-backup`, Tabelle `tool_backups`.
- Modal „Backup einrichten“ beim ersten Laden: Lokal (OneDrive/SharePoint) und Zentral je mit Stufe, zu erwartende komprimierte Größe und Historien-Schätzung. Später über Backup › „Backup einrichten …“.
- Backup-Dialog: Abschnitt **03 Zentral** mit Status, „Jetzt zentral sichern“ und Historie zum Wiederherstellen.

**Geändert**
- Lokales Backup folgt der gewählten Stufe; der Kopf `ritl` trägt `stufe`.
- Wiederherstellen eines settings-Backups übernimmt nur die Einstellungen (inkl. Hell/Dunkel und Sprache), die Daten bleiben unverändert.

## V2.4 · 14.11.2026
**Geändert**
- Backup ist immer **eine** Datei `Backup_MUSTER-ritl.json`, die bei jedem Sichern überschrieben wird (vorher eine neue Datei mit Zeitstempel je Sicherung).
  - Lokal (Chrome/Edge): beim ersten „Backup speichern“ den Speicherort wählen, danach wird die Datei ohne Nachfrage überschrieben; „Anderer Speicherort …“ wechselt die Datei. Andere Browser laden die Datei herunter.
  - OneDrive/SharePoint: „Jetzt im Ordner sichern“ und „automatisch sichern“ überschreiben dieselbe Datei.
  - Ältere Sicherungen mit Zeitstempel im Ordner werden weiter angezeigt und lassen sich wiederherstellen.

## V2.3 · 14.11.2026
**Neu**
- **FOKUS in MAP.ritl** (Idee MAP-01): je Firma, Ansprechpartner oder Projekt eine eigene Mappe für das R-S-Netzwerk (Relationship & Stakeholder).
  - Anlegen über „◎ FOKUS anlegen“ im Auswahl-Popup, im Dialog „◎ FOKUS“ (Knopf im Kopf der Box Map/Matrix) per Auswahlliste oder aus dem aktuellen Filter.
  - Zeigt nur das verknüpfte Umfeld; Startanordnung: Ausgangsobjekt in der Mitte, Umfeld in Ringen nach Abstand im Netz.
  - Verbunden mit der Gesamt-Map: Namen, Rollen, Beziehungen und neue Objekte wirken überall. Anordnung, Startansicht und Filter gehören je Mappe.
  - Hinweisleiste „FOKUS · Name“ mit „Mappen“ und „Zur Gesamt-Map“; Dialog zum Öffnen, Umbenennen und Löschen der Mappen.
  - FOKUS-Mappen sind Teil von Rückgängig/Wiederherstellen und Backup.
- CHANGELOG eingeführt.

**Geändert**
- Anordnungen (Cluster, Kreis, Spalten, Start) wirken im FOKUS nur auf die sichtbaren Objekte; „Als Start merken“ speichert die Startansicht der Mappe.
- Ein Filter-Favorit kehrt vor dem Anwenden zur Gesamt-Map zurück.

## V2.2 · 13.11.2026
**Neu**
- Header-Knopf **Backup** mit Dialog: lokal herunterladen und wiederherstellen (`JJJJMMDD-HHMM_MUSTER-ritl_Backup.json` mit `ritl`-Kopf, Prüfung des Kopfs, Rückfrage vor dem Ersetzen).
- **OneDrive & SharePoint:** synchronisierten Ordner verknüpfen, im Ordner sichern, Backups aus dem Ordner wiederherstellen, „Nach jeder Änderung automatisch sichern“ (eine Datei je Sitzung), Hinweis für Safari/Firefox.
- Header-Knopf **★ Favoriten** mit Dialog: Liste mit Anwenden/Umbenennen/Löschen, Export/Import, Team-Datei `MUSTER-ritl_Favoriten.json` im verknüpften Ordner (teilen und übernehmen).

## V2.1 · 13.11.2026
**Neu**
- Sprache DE/EN: Texte aus der Supabase-Tabelle `translations` (App `muster-ritl`), ohne englischen Text bleibt Deutsch.

**Behoben**
- Teilübersetzungen veränderten Namen von Firmen, Personen und Projekten – Namen sind jetzt geschützt.

## V2.0 · 13.11.2026
**Geändert**
- Umschalter Map/Matrix ganz links im Kopf der Box anstelle des Titels; „Modellbereich“ heißt jetzt „Map“.

## V1.9 · 13.11.2026
**Neu**
- Rolle einer Firma im Projekt als Auswahlliste (Architekt/in, Generalunternehmer, Planer, …), Text nach der Auswahl frei überschreibbar.

## V1.8 · 13.11.2026
**Neu**
- „Wiederherstellen“ neben „Rückgängig“.
- Filter-Favoriten mit automatischen Namen aus dem Filter („×“ gekoppelt, „+“ unabhängig).

## V1.7 · 13.11.2026
**Behoben**
- Umschalten zwischen „Unabhängig“ und „Gekoppelt“ wirkte nicht: unabhängig zeigt jetzt die Vereinigung, gekoppelt die Schnittmenge; aktiver Modus deutlicher, Modus in der Anzeige „zeigt x von y Objekten“.

## V1.6 · 13.11.2026
**Neu**
- Filter wahlweise gekoppelt (Auswahllisten bieten nur noch Passendes an) oder unabhängig.

## V1.5 · 13.11.2026
**Neu**
- Filter nach Firmen, Projekten und Ansprechpartnern; wirkt auf Map und Matrix.

## V1.4 · 13.11.2026
**Geändert**
- Matrix aufgeteilt in „Firmen & Ansprechpartner“ und „Projekte & Gewerke“ (Zuständige je Gewerk, „nicht anwendbar“, Gewerke verwalten).

## V1.3 · 13.11.2026
**Neu**
- Startansicht wählbar und mit „Als Start merken“ speicherbar.
- Ausgewähltes Objekt behält die Hervorhebung wie beim Mauszeiger.
- Umschalter Modellbereich/Matrix; Matrix zeigt die Beziehungen tabellarisch und ist direkt bearbeitbar.

## V1.2 · 13.11.2026
**Neu**
- 4. Ribbon **MAP.ritl**: Modellbereich nach dem Vorbild des MSX-Builders mit Beziehungs- und Stakeholder-Map (Firmen, Ansprechpartner, Projekte, Beziehungsarten, Werkzeuge, Zoom, Anordnungen, SVG-Export).

## V1.1 · 13.11.2026
**Geändert**
- Version und Erscheinungsdatum stehen wie in PPTX.ritl direkt neben dem Titel (vorher in der Eyebrow, die schmal ausgeblendet wird).

## V1.0 · 13.11.2026
**Neu**
- Erste Version in der RIEMER Toolbox: generischer Entwurf nach `/riemer-webapp-design` mit Header nach PDF.ritl, drei Beispiel-Ribbons, auf- und zuklappbaren Bereichen (Ebene 1 Box, Ebene 2 Text), Hell- und Dunkelmodus.
