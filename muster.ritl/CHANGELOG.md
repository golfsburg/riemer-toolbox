# CHANGELOG – MUSTER.ritl (RIEMER Tools)

Vorlage und Spielwiese für den Skill `/riemer-webapp-design` · #ritl_muster
Neueste Version oben. Versionen ≤ V2.2 nachträglich aus den veröffentlichten Ständen (Tabelle `tool_versions`) rekonstruiert.

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
