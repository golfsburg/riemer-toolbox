# CHANGELOG – TRACK.ritl (RIEMER Tools)

GPS-Tracks (GPX) lokal im Browser in 2D und 3D darstellen, analysieren, bearbeiten und animieren · #ritl_track
Neueste Version oben. Versionen ≤ V1.9 in Google AI Studio entwickelt und nachträglich zusammengefasst (keine Einzelstände erhalten).

## V3.3.1 · 20.11.2026 · DEV
**Neu**
- **iPhone/iPad – Zum Home-Bildschirm:** TRACK.ritl zeigt dort das eigene TRACK-Logo statt eines Buchstabens und startet als App im Vollbild (ohne Safari-Leisten), mit dem Namen „TRACK.ritl“.
- **Home-Bildschirm-App:** oben nach unten ziehen zum Aktualisieren (lädt neu und gleicht dabei mit dem Server bzw. Ordner ab). Auf Karte, 3D-Ansicht, Diagrammen und Reglern bleibt das Wischen wie gewohnt.

**Geändert**
- Header, Inhalt, Fußzeile, Fenster und fixierte Ansichten halten Abstand zu Notch, Dynamic Island und Home-Leiste.
- Fenster passen sich am iPhone der sichtbaren Höhe an (auch bei ein-/ausfahrender Safari-Leiste).
- Statusleiste und Browserfarbe folgen Hell/Dunkel; Telefonnummern werden nicht mehr automatisch verlinkt.

**Behoben**
- iPhone/iPad: GPX-/TCX-Dateien und Favoriten (JSON) lassen sich in der Dateiauswahl wählen (waren teils ausgegraut).

## V3.3 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools. Fenster „Backup“ und „Backup einrichten“ sehen in jedem Tool gleich aus.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings** (Ansichts-Favoriten, Ansicht, auf/zu), **2 · datenbank** (zusätzlich Tracks, Wegpunkte, Fotos, Abschnitte, PANO-Markierungen), **3 · storage** (zusätzlich Original-GPX, Fotos und Puls-Dateien) – kurz z. B. C3.
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für TRACK.ritl auf allen Geräten. „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Datenquelle wechseln** mit Rückfrage – der Stand wird dabei übernommen (in den Ordner geschrieben bzw. mit dem Server abgeglichen).
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.
- Ein neues Gerät ohne eigene Tracks übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage – auch wenn TRACK.ritl beim Start etwas länger lädt.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- C · Server mit Stufe 1 gleicht nur die Einstellungen über den Server ab; die Tracks bleiben im Browser.
- „Strecken zwischen meinen Geräten“ steht weiter als 04 im Fenster „Backup“.
- ★ Favoriten › OneDrive & SharePoint nutzt denselben Ordner wie das Backup (Verknüpfen, Zugriff erneuern, Teilen, Übernehmen).
- Alte Backups (V3.2 und älter, auch nur Einstellungen) lassen sich weiter wiederherstellen; Einstellungen, gemerkter Ordner und Speicherort werden übernommen (beim ersten Start lädt TRACK.ritl dafür einmal kurz neu).

**Behoben**
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.

## V3.2 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz:** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt auf allen Geräten und in allen RIEMER Tools – das Backup muss nicht mehr auf jedem Gerät eingerichtet werden. Mit storage und „Server ist die Datenquelle“ werden Original-GPX, Originalfotos und Puls-Dateien auf jedem Gerät abgeglichen.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei B die Stufe der Lizenz (mindestens datenbank), bei A settings, ohne Server-Freigabe höchstens datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Lokal in den Ordner sichern“ bleibt je Gerät (der Ordner muss auf jedem Gerät verknüpft werden).
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt („durch die Lizenz festgelegt“).

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (auch bei Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Gesperrte storage-Zeile unter 02 Zentral: „nur mit ‚Server ist die Datenquelle‘ (Freigabe im Admin)“; Hinweis „nicht freigegeben“: „Freigabe im Admin (Datenquelle ‚Server‘)“ statt „bitte beim Anbieter anfragen“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ (Backup einrichten, Backup-Dialog, Tooltip am Backup-Knopf).

## V3.1 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A: Ändert ein Gerät nur Einstellungen, während ein anderes Gerät die Ordner-Datei neu geschrieben hat, holt es den neueren Stand, statt fälschlich ‚Neuerer Stand im Ordner‘ zu fragen.

## V3.0 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Sprache, Ansicht, Ansichts-Favoriten), fragt TRACK.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten; die Einstellungen gleicht der Server ab. Beim Übernehmen aus dem Ordner bleiben die eigenen Einstellungen erhalten.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommt zuerst die für den Ordner; danach gleicht das Tool mit dem Server neu ab, statt eine veraltete Server-Abfrage zu zeigen.

## V2.9 · 19.11.2026 · DEV
**Geändert**
- Tourbericht (PDF, PPTX, Bild): Fußzeile mit `toolbox@riemer.co` statt riemer.co.

## V2.8 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings`, `datenbank` oder `storage`). TRACK.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit denselben Tracks.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“. Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen.
- **storage über den Server:** Mit „Server ist die Datenquelle“ werden hochgeladene Dateien (Original-GPX, Originalfotos, Puls-Dateien) einzeln am Server abgelegt und auf allen Geräten abgeglichen – zusammen höchstens 50 MB je Lizenz.
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_TRACK-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. TRACK.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“; Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt; der Ordner lässt sich dort direkt verknüpfen.

**Geändert**
- „Server ist die Datenquelle“ ist nur wählbar, wenn die Lizenz im Admin dafür freigegeben ist; sonst ist das Häkchen gesperrt mit Hinweis.
- Status im Backup-Dialog und am Backup-Symbol zeigt die Datenquelle mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.
- Reine Ansichtsänderungen (2D/3D, Farbe, Karte, auf/zu) lösen keinen Abgleich und keine Abfrage aus.
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog.
- Offline-Version: kein Serverzugriff, die Abschnitte „Zentral“ und „Strecken zwischen meinen Geräten“ entfallen.
- Fußzeile: „© 2026 Peter Riemer · toolbox@riemer.co · RIEMER Tools“ mit Mail-Link statt Link auf riemer.co.

## V2.7 · 18.11.2026 · DEV
**Neu**
- Backup-Stufe **storage** (nur lokal): datenbank + alle hochgeladenen Dateien. Unter Backup einrichten › 01 Lokal immer wählbar (mit Anzahl und Größe der Dateien), unter 02 Zentral gesperrt („nur lokal – zentral folgt später“).
- Dateiablage im Browser (RITLF, IndexedDB `track_files`): Original-GPX, Originalfotos und Puls-Dateien werden beim Hochladen dort abgelegt; Fotos zeigen weiter die Vorschau, „Original“ öffnet das Foto in voller Größe.
- Wiederherstellen eines storage-Backups ersetzt die Dateiablage („Enthält n Datei(en) – die Dateiablage wird ersetzt.“).

**Geändert**
- Dateien, die kein Track (auch nicht im Rückgängig-Speicher) und kein Foto mehr verwendet, werden aus der Dateiablage entfernt.
- 360°-Videos (PANO.ritl) bleiben bewusst außerhalb der Dateiablage und des Backups (mehrere GB, nur für die Sitzung).

## V2.6 · 16.11.2026 · DEV
**Neu**
- Strecken zwischen meinen Geräten: unterwegs geladene GPX-Strecken (auch aus DRIVE.ritl) gehen automatisch für 7 Tage auf den Server der RIEMER Toolbox und werden von den anderen Geräten derselben Lizenz übernommen (beim Start, beim Zurückkehren in den Tab, nach Wiederverbindung, jede Minute). Keine dauerhafte Speicherung, zählt zum Kontingent der Lizenz.
- Backup › **04 Strecken zwischen meinen Geräten**: automatisch ein/aus, aktiven Track oder alle senden, jetzt abholen, Liste auf dem Server mit Laden und Löschen.

## V2.5 · 16.11.2026 · DEV
**Neu**
- Übergabe aus DRIVE.ritl: Strecken (GPX) aus anderen RIEMER Tools werden beim Start bzw. bei `#ritl-handoff` aus der Übergabe im Browser übernommen, auch wenn TRACK.ritl schon offen ist (BroadcastChannel). Nur Übergaben an TRACK.ritl, höchstens 10 Minuten alt; danach wird die Übergabe gelöscht. Hinweis „n Strecke(n) aus DRIVE.ritl übernommen“, TRACK.ritl öffnet das Modul TRACK.ritl.

## V2.4 · 16.11.2026 · DEV
**Geändert**
- Header auf den zentralen Header RITL-UI umgestellt (Kit `ritl-ui`, Stand 1.1): App-Bild, Eyebrow, TRACK.ritl mit Edition, Kanal und Version · Datum; rechts Favoriten, Backup (mit Backup-Symbol) und Neu beginnen als eckige Chips, dann `?` · DE/EN · Hell/Dunkel · An-/Abmelden als runde Chips, Toolbox-Logo und „RIEMER Tools“
- Hell/Dunkel, Sprache und Anmelden/Abmelden übernimmt das Kit; künftige Header-Versionen kommen automatisch über den Lizenzserver

**Entfernt**
- Eigener Header-Code der App (React-Header, eigene Knöpfe für Hell/Dunkel, Sprache, Abmelden)

## V2.3 · 15.11.2026 · DEV
**Geändert**
- Header: Anleitung nur noch als runder „?“-Knopf; die Arbeitsschritte (Daten laden, Auswählen, Animieren, Exportieren) entfallen

## V2.2 · 15.11.2026 · DEV
**Geändert**
- Header rechts: RIEMER-Tools-Logo (Link zur Toolbox) vor der Wortmarke „RIEMER Tools“, links daneben dezent „Abmelden“ (angemeldet über die Toolbox) bzw. „Anmelden“ (Datei ohne Lizenz)
- Die schwebende Leiste unten links (Logo, Version, Abmelden) entfällt

## V2.1 · 15.11.2026 · DEV
**Neu**
- Modul **PANO.ritl** (5. Ribbon, #ritl_pano): 360°-Video (equirektangulares MP4/MOV, z. B. Insta360 X6 über Insta360 Studio) lokal abspielen, Blick mit der Maus drehen, Mausrad zoomt
- Kopplung über die Uhrzeit: Videostart aus den MP4-Metadaten (volle Stunden Zeitzone werden ausgeglichen) oder Trackbeginn, Versatz ±s, „Hier abgleichen“; Abgleich je Videodatei gespeichert
- Punkt und Blickfächer auf der Karte, Höhenprofil mit Wiedergabe-Strich; Klick auf Karte, Profil oder Markierung springt im Video
- Markierungen (Info, Achtung, Mangel, Fotomotiv) mit Zeit, Position und Blickrichtung; Übernahme als Wegpunkt
- Standbild der aktuellen Blickrichtung als JPG speichern oder als Foto an der Position ablegen (ANALYSE.ritl › Fotos)
- Arbeitsfläche fixieren (Esc löst)

**Geändert**
- Ribbon mit 5 Modulen: schmale Fenster blenden Hashtags und Kurzbeschreibungen aus statt über den Rand zu ragen
- Markierungen und Abgleich gehören zum Backup (Stufe datenbank); das Video selbst nicht

## V2.0 · 15.11.2026
**Neu**
- In die RIEMER Toolbox übernommen: Aufruf mit Lizenzschlüssel, Edition, Kanal (BETA/DEV) und Version kommen vom Lizenzserver
- Backup-Stufen `settings` (Theme, Sprache, Ansicht, auf/zu, Favoriten) und `datenbank` (zusätzlich Tracks, Wegpunkte, Fotos, Abschnitte)
- Zentrales Backup in der RIEMER Toolbox (EU/Frankfurt, Historie 10 Tage, automatisch nach Änderungen, offline vorgemerkt)
- Modal „Backup einrichten“ beim ersten Start mit erwarteter Größe je Stufe
- Backup-Symbol am Header-Knopf: Ordner = Lokal, Wolke = Server, Farbe zeigt den Zustand

**Geändert**
- Schrift Inter und JetBrains Mono selbst gehostet über die RIEMER Toolbox (keine Google Fonts mehr, DSGVO)
- Wiederherstellen fragt vor dem Überschreiben nach; ein settings-Backup lässt die Tracks unverändert
- Auslieferung als eine einzige HTML-Datei

**Entfernt**
- Reste aus AI Studio (Gemini-Anbindung, Server-Abhängigkeiten, Beispielbilder)

## V1.9 · 15.11.2026
Stand aus AI Studio (zusammengefasst):
- TRACK.ritl: GPX laden, 2D-Draufsicht (Relief, OpenTopoMap, OSM) und 3D-Raum (three.js mit Gelände), Zeitleiste 1×–500× nach Zeitstempel oder Strecke, Geisterrennen mehrerer Tracks, Sportart-Figuren, Kamera folgen/umkreisen
- ANALYSE.ritl: Abschnitte (Anstiege/Abfahrten), Fotos per EXIF, Puls-Zonen, Extremwerte im Höhenprofil
- EDITOR.ritl: Bereinigen, Schneiden, Glätten mit Rückgängig
- EXPORT.ritl: GPX, KML, SVG, Social Card (PNG), WebM-Video, Tour-Bericht
- Wegpunkte, Notizen, Fotos an Position, Ansicht-Favoriten, Backup lokal und OneDrive/SharePoint, Deutsch/Englisch, Hell/Dunkel, Fixieren
