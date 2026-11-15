# CHANGELOG – TRACK.ritl (RIEMER Tools)

GPS-Tracks (GPX) lokal im Browser in 2D und 3D darstellen, analysieren, bearbeiten und animieren · #ritl_track
Neueste Version oben. Versionen ≤ V1.9 in Google AI Studio entwickelt und nachträglich zusammengefasst (keine Einzelstände erhalten).

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
