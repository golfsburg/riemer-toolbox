# CHANGELOG – PDF.ritl (RIEMER Tools)

PDF-Dokumente aus Lesezeichen-Abschnitten und Einzelseiten zusammenstellen – mit verlinktem Inhaltsverzeichnis · #ritl_pdf
Neueste Version oben. Versionen ≤ V1.3 nachträglich rekonstruiert (aus `tool_versions` und Entwicklungsverlauf).

## V1.4 · 16.11.2026 · DEV
**Geändert**
- Header auf den zentralen Header RITL-UI 1.1 umgestellt (Vorbild MUSTER.ritl V2.8): App-Bild, Eyebrow, `PDF.ritl` mit Edition und Version · Datum, Arbeitsschritte in der Mitte, rechts kompakte Chips (Favoriten, Backup mit Statussymbol, Neu beginnen · Anleitung · Hell/Dunkel · An-/Abmelden), Toolbox-Logo und Schriftzug „RIEMER Tools“.
- Header bleibt beim Scrollen oben stehen; künftige Header-Änderungen kommen zentral über den Lizenzserver.

**Entfernt**
- Eigener Code für Hell/Dunkel im Tool (macht jetzt RITL-UI).

## V1.3 · 15.11.2026
**Neu**
- Backup-Stufen `settings` und `datenbank`; Modal „Backup einrichten“ beim ersten Start mit komprimierter Größe je Stufe.
- Backup-Dialog mit 01 Lokal (eine Datei `Backup_PDF-ritl.json`, wird überschrieben; Komplett-Paket `Backup_PDF-ritl.zip` inkl. PDFs), 02 OneDrive & SharePoint (Ordner verknüpfen, automatisch sichern) und 03 Zentral (RIEMER Toolbox, Historie 10 Tage).
- Backup-Symbol (Ordner/Wolke) am Backup-Knopf.
- Deckblatt-Vorlagen aus dem Browser sind Teil der Stufe `datenbank`.

## V1.2 · 12.11.2026
**Behoben**
- Seite passt sich der Fensterbreite an (keine Überbreite zwischen 1200 und 1650 px); Header wird bei schmalen Fenstern stufenweise kompakter.

## V1.1 · 12.11.2026
**Neu**
- Deckblatt-Vorlagen: Hintergrundseite (PDF, PNG, JPG oder Seite aus der Bibliothek) mit Textfeldern Thema, Titel, Stand, Anmerkungen; Editor mit Ziehen/Größe, Schrift, Farbe, Ausrichtung und Abdeckflächen (Pipette); Ablage im Browser oder in der Lizenz, Export/Import als .json.

## V1.0 · 12.11.2026
**Neu**
- Erste Version, abgeleitet aus PPTX.ritl › DECK.ritl: PDFs laden, Abschnitte aus Lesezeichen (Ebene wählbar) und eigene Trennstellen (✂ teilen, ⤒ zusammenführen, ✎ umbenennen).
- Abschnitte und Einzelseiten wählen, Storyboard ordnen, Deckblatt, verlinktes Inhaltsverzeichnis (auch auf Vorlagenseite), Lesezeichen je Abschnitt, „◀ Inhalt“-Knopf, Seitenzahlen.
- Favoriten pro Lizenz, Ordner verbinden, Backup als .json/.zip.
