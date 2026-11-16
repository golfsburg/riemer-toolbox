# CHANGELOG – STAKE.ritl (RIEMER Tools)

Beziehungs- und Stakeholder-Map für Firmen, Ansprechpartner, Projekte und Gewerke · #ritl_stake
Neueste Version oben.

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
