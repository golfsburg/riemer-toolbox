# CHANGELOG – PDF.ritl (RIEMER Tools)

PDF-Dokumente aus Lesezeichen-Abschnitten und Einzelseiten zusammenstellen – mit verlinktem Inhaltsverzeichnis · #ritl_pdf
Neueste Version oben. Versionen ≤ V1.3 nachträglich rekonstruiert (aus `tool_versions` und Entwicklungsverlauf).

## V2.1 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools – gleiche Fenster „Backup“ und „Backup einrichten“ wie in MUSTER.ritl.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings**, **2 · datenbank**, **3 · storage** (kurz z. B. C3).
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für PDF.ritl auf allen Geräten.
- **Stufe 3 · storage = alle geladenen PDF-Originale:** bei A und B als Dateien in der Backup-Datei, bei **C3 über den Server** – ein zweites Gerät lädt die Originale und die Zusammenstellung automatisch.
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- Bei B und C übernimmt PDF.ritl beim Start den Stand still aus dem Ordner bzw. vom Server – der leere Browser überschreibt ihn nicht mehr.
- Das **Komplett-Paket (.zip)** mit allen Originalen speicherst du jetzt unter 03 Ausgabe („Komplett-Paket (.zip)“); Laden wie bisher per Ziehen auf die Seite.

**Behoben**
- Ein neuer Start bzw. ein neues Gerät fragt bei B oder C nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.
- Alte Backup-Dateien (auch mit Komplett-Paket), Auswahl-Sicherungen und die bisherige Ordner-Verknüpfung funktionieren weiter.

## V2.0 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz:** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt auf allen Geräten und in allen RIEMER Tools – das Backup muss nicht mehr auf jedem Gerät eingerichtet werden.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank); bei storage kommen die PDF-Originale wie bisher als Komplett-Paket in die Backup-Datei.
  - Zentral (02): bei A settings, sonst datenbank bzw. settings. Die PDF-Originale gehen nie an den Server – storage gilt zentral wie datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Automatisch im Ordner sichern“ bleibt je Gerät (der Ordner muss auf jedem Gerät verknüpft werden).
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt („durch die Lizenz festgelegt“).

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (auch bei Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Hinweis „Server als Datenquelle nicht freigegeben“: „Freigabe im Admin (Datenquelle ‚Server‘)“ statt „bitte beim Anbieter anfragen“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ (Backup einrichten, Backup-Dialog, Tooltip am Backup-Knopf).

## V1.9 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A: Ändert ein Gerät nur Einstellungen, während ein anderes Gerät die Ordner-Datei neu geschrieben hat, holt es den neueren Stand, statt fälschlich ‚Neuerer Stand im Ordner‘ zu fragen.

## V1.8 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Inhaltsverzeichnis-/Ausgabe-Optionen, Favoriten), fragt PDF.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten; die Einstellungen gleicht der Server ab. Beim Übernehmen aus dem Ordner bleiben die eigenen Einstellungen erhalten.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommt zuerst die für den Ordner; danach gleicht das Tool mit dem Server neu ab, statt eine veraltete Server-Abfrage zu zeigen.
- „Ordner verknüpfen“ in „Backup einrichten“: Der Abgleich startet erst mit „Übernehmen“, die Abfrage schiebt sich nicht mehr über das offene Fenster.

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
