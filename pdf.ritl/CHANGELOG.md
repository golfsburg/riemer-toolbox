# CHANGELOG – PDF.ritl (RIEMER Tools)

PDF-Dokumente aus Lesezeichen-Abschnitten und Einzelseiten zusammenstellen – mit verlinktem Inhaltsverzeichnis · #ritl_pdf
Neueste Version oben. Versionen ≤ V1.3 nachträglich rekonstruiert (aus `tool_versions` und Entwicklungsverlauf).

## V1.7 · 19.11.2026 · DEV
**Geändert**
- Schriften (Inter, JetBrains Mono) kommen jetzt von der RIEMER Toolbox selbst statt von Google Fonts. Beim Öffnen von PDF.ritl gehen keine Anfragen mehr an Google; Aussehen unverändert.

## V1.6 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings` oder `datenbank`). PDF.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit derselben Zusammenstellung. Die PDF-Originale bleiben im Ordner bzw. im Komplett-Paket.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“. Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen.
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_PDF-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand (Stufe datenbank oder storage mit allen PDF-Originalen). PDF.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“; Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz, sperrt die Auswahl, die dazu nicht passt, und hat jetzt selbst „Ordner verknüpfen …“.
- App-Bild als Logo im Browser-Tab (Favicon).

**Geändert**
- „Server ist die Datenquelle“ ist nur wählbar, wenn die Lizenz im Admin dafür freigegeben ist; sonst ist das Häkchen gesperrt mit Hinweis.
- Status im Backup-Dialog und am Backup-Symbol zeigt die Datenquelle mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das in „Backup einrichten“ und im Backup-Dialog.
- Offline-Version: kein Serverzugriff (auch keine Lizenz-Favoriten), der Abschnitt „Zentral“ entfällt.

**Behoben**
- Wiederherstellen eines Backups der Stufe storage übernimmt auch die eigenen Deckblatt-Vorlagen.

## V1.5 · 18.11.2026 · DEV
**Neu**
- Backup-Stufe **storage** für 01 Lokal: Einstellungen, Arbeitsdaten **und alle PDF-Originale** in der einen Datei `Backup_PDF-ritl.json` (Originale als Komplett-Paket eingebettet). Wiederherstellen lädt die PDFs wieder.

**Geändert**
- „Backup einrichten“: storage lokal wählbar (mit Größe), zentral gesperrt („nur lokal, zentral folgt später“).

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
