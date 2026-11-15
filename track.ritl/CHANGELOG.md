# CHANGELOG – TRACK.ritl (RIEMER Tools)

GPS-Tracks (GPX) lokal im Browser in 2D und 3D darstellen, analysieren, bearbeiten und animieren · #ritl_track
Neueste Version oben. Versionen ≤ V1.9 in Google AI Studio entwickelt und nachträglich zusammengefasst (keine Einzelstände erhalten).

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
