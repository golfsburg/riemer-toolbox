# CHANGELOG – MENU.ritl (RIEMER Tools)

Speisekarten- & Menü-Designer: Sets, Gänge, Speisendatenbank mit Allergenen (LMIV), 6 Druckformate, Export als PDF, PPTX und Druck in exakt einer Seite · #ritl_menu
Neueste Version oben. Versionen ≤ V1.7 nachträglich rekonstruiert (aus `tool_versions`, Quellen-ZIPs und Repo-Historie).

## V2.8 · 19.11.2026 · DEV
**Geändert**
- Datenquelle A: Welches Set gerade geöffnet ist, merkt sich jedes Gerät selbst – ein Wechsel des Sets löst keinen Abgleich über den Ordner mehr aus.

**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Ansicht, Favoriten), fragt MENU.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten (Sets, Gerichte, Saison-Aktionen, Bilder und Dateien); die Einstellungen gleicht der Server ab.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommen sie nacheinander – die zweite überschreibt die erste nicht mehr.
- „Ordner verknüpfen“ in „Backup einrichten“: Der Abgleich startet erst mit „Übernehmen“, die Abfrage schiebt sich nicht mehr über das offene Fenster.
- Lässt sich die Ordner-Verknüpfung im Browser nicht speichern, bleibt MENU.ritl nicht mehr hängen.

## V2.7 · 19.11.2026 · DEV
**Geändert**
- Fußzeile: Kontakt per Mail `toolbox@riemer.co` statt Link auf riemer.co.

## V2.6 · 19.11.2026 · DEV
**Neu**
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest – nicht mehr du selbst.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_MENU-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. MENU.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Jeder Stand hat eine Nummer; bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“. Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername – Sets, Gerichte und Saison-Aktionen bleiben im Ordner.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt.

**Geändert**
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog; Daten lassen sich dort nur per „Backup speichern“ in den Ordner legen.
- Bei Variante A ersetzt der Ordner-Abgleich das automatische Sichern in den Ordner; 03 Zentral zeigt „Am Server nur Einstellungen (Datenhoheit)“.
- Versionsangabe in Backup- und Anleitungs-Dialog aktualisiert.

## V2.5 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral gibt es das Häkchen „Server ist die Datenquelle“ (schaltet „zentral sichern“ mit ein). MENU.ritl lädt dann beim Start und beim Wiederverbinden den Serverstand und schreibt jede Änderung nach 2,5 s mit der bekannten Stand-Nummer zurück – so arbeiten mehrere Geräte mit demselben Stand.
- Neuere Stände anderer Geräte werden jede Minute und beim Zurückkehren ins Fenster erkannt und ohne eigene Änderungen automatisch geladen.
- Konfliktdialog „Neuerer Stand am Server“ mit „Meinen Stand behalten“ / „Serverstand übernehmen“, wenn auf beiden Seiten geändert wurde – es wird nie still überschrieben.
- **storage über den Server:** Mit „Server ist die Datenquelle“ ist zentral auch die Stufe `storage` wählbar. Hochgeladene Logos (Dateiablage RITLF) werden einzeln im Server-Speicher abgelegt und auf allen Geräten abgeglichen (neue hochgeladen, gelöschte entfernt); Kontingent 50 MB je Lizenz.

**Geändert**
- Das Häkchen ist nur wählbar, wenn die Lizenz im Admin „Server freigeben“ hat. Sonst ist es gesperrt mit dem Hinweis „Für diese Lizenz noch nicht freigegeben – bitte beim Anbieter anfragen.“, und ein früher gewähltes „Server ist die Datenquelle“ fällt auf das normale zentrale Backup zurück.
- Status in 03 Zentral „Server ist die Datenquelle · Stufe … · Stand n“, Tooltip am Backup-Symbol „Server (Datenquelle)“; „Jetzt zentral sichern“ heißt dann „Jetzt abgleichen“.
- Offline-Version (Admin-Build und eigene Offline-Kopie): Server als Datenquelle und zentrales Backup immer aus, Abschnitt 02 Zentral entfällt.

## V2.4 · 18.11.2026 · DEV
**Neu**
- Backup-Stufe `storage` (nur unter 01 Lokal, zentral gesperrt „folgt später“): `datenbank` + alle hochgeladenen Dateien; im Modal „Backup einrichten“ mit Anzahl und Größe der Dateien.
- Dateiablage RITLF (Baustein ritl-bk/ritl-files.js): hochgeladene Logos werden im Browser abgelegt, in den Daten steht nur der Verweis; nicht mehr verwendete Dateien werden beim Start aufgeräumt.
- Backup › Speicher zeigt die Dateiablage mit Anzahl und Größe.

**Geändert**
- Wiederherstellen eines storage-Backups ersetzt auch die Dateiablage (Hinweis in der Rückfrage).
- Offline-Kopie und Set-Export betten Logos aus der Dateiablage ein.

 · 16.11.2026 · DEV
**Geändert**
- Header auf den zentralen Header RITL-UI umgestellt (Kit RITL-UI 1.1, Vorbild MUSTER.ritl V2.8): App-Bild, Eyebrow, MENU.ritl mit Edition, DEV/BETA und Version · Datum; rechts kompakte Chips für Favoriten (mit Zähler), Backup (mit Symbol Ordner/Wolke) und Zurücksetzen, dann Anleitung, Hell/Dunkel, An-/Abmelden, Toolbox-Logo und „RIEMER Tools“. Der Header bleibt beim Scrollen oben.
- Künftige Header-Versionen kommen zentral über den Lizenzserver, ohne neue MENU.ritl-Version.

**Behoben**
- Offline-Kopie: der Header wird dort neu aufgebaut (Knöpfe funktionieren).

## V2.2 · 15.11.2026
**Neu**
- SETS.ritl: Jede Set-Karte zeigt eine kleine Vorschau der Karte (bei Klappkarte und Wickelfalz die Innenseite, mit Seitenzahl); mit dem Mauszeiger darauf erscheinen alle Seiten groß mit Seitenbezeichnung.

## V2.1 · 15.11.2026
**Neu**
- SETS.ritl: Jede Set-Karte hat den Link „MAP.ritl ›“ – aktiviert das Set und öffnet es direkt im Modellbereich zur Bearbeitung (auch als Adresse `#map=<Set>` bzw. Strg+Klick in neuem Tab).

**Geändert**
- Knopf „Laden & aktivieren“ heißt kurz „Aktivieren“; die Knöpfe der Set-Karten brechen bei schmalen Karten um.

## V2.0 · 15.11.2026
**Neu**
- Backup-Stufen: `settings` (Hell/Dunkel, auf-/zugeklappte Bereiche, Ansicht, Raster, Design-Favoriten) und `datenbank` (settings + Sets, Gerichte, Saison-Aktionen, Bilder); `storage` folgt später.
- Zentrales Backup in der RIEMER Toolbox (Supabase, EU) je Lizenz und Tool: automatisch nach Änderungen, „Jetzt zentral sichern“, Historie 10 Tage zum Wiederherstellen, Anzeige des belegten Kontingents (50 MB je Lizenz); offline wird nachgesichert, sobald wieder online.
- Modal „Backup einrichten“ beim ersten Start (später unter Backup › „Backup einrichten …“): Lokal und Zentral je mit Stufe und komprimierter Größe.
- Symbol am Backup-Knopf: Ordner = Lokal, Wolke = Server; grün aktiv, orange Achtung, grau aus, Wolke durchgestrichen = offline; Tooltip mit Klartext.

**Geändert**
- Lokales Backup und Ordner-Backup schreiben die gewählte Stufe in `Backup_MENU-ritl.json`; ein settings-Backup übernimmt beim Wiederherstellen nur Einstellungen, Daten bleiben unverändert.

## V1.8 · 15.11.2026
**Neu**
- MAP.ritl: „🔒 Fixieren“ sperrt die ganze Box „01 Modellbereich“ auf das Browserfenster – Werkzeuge (Format, + Gang, + Text, Saison, Raster), Übersicht, Vorschau-Leiste und Vorschau.
- Am Tablet: ein Finger verschiebt, zwei Finger zoomen (Pinch).

**Geändert**
- Die MAP-Werkzeuge stehen jetzt in der Box „01 Modellbereich“ statt in der Toolbar darüber.

## V1.7 · 14.11.2026
**Geändert**
- Backup ist immer genau eine Datei `Backup_MENU-ritl.json`, die bei jedem Sichern überschrieben wird – lokal (Speicherort einmal wählen, danach ohne Nachfrage) und im OneDrive-/SharePoint-Ordner, manuell und automatisch.
- Ältere Sicherungen mit Zeitstempel im Namen werden weiter angenommen und im Ordner als „Ältere Sicherungen“ gelistet.

## V1.6 · 14.11.2026
**Neu**
- MAP.ritl: Arbeitsfläche fixieren – Vorschau füllt das Browserfenster, Fit nach Breite und Höhe, Mausrad zoomt zum Mauszeiger, Ziehen verschiebt, Bearbeiten-Fenster verkleinert die Fläche, Esc löst.

## V1.5 · 14.11.2026
**Neu**
- Backup-Dialog „03 Speicher“: Aufteilung der Backup-Größe und „Bilder verkleinern“.

**Geändert**
- Jedes Bild wird nur noch einmal gespeichert, auch wenn es in mehreren Sets vorkommt (Backups deutlich kleiner).
- Logos werden beim Hochladen auf max. 1000 px (WebP, Transparenz bleibt) verkleinert.
- Backup kompakt ohne Einrückungen; Rückgängig-Schritte ohne Bilder.

**Behoben**
- Logo-Hochladen funktionierte nicht.

## V1.4 · 14.11.2026
**Neu**
- Modul MAP.ritl (Modellbereich nach MSX-Builder/MUSTER.ritl): Live-Vorschau als Arbeitsfläche, Hover zeigt das Objekt, Klick öffnet das Bearbeiten-Fenster mit allen Werkzeugen aus CARD und STYLE, Doppelklick + Pfeiltasten verschiebt im Raster bis zur Blattgrenze.

## V1.3 · 13.11.2026
**Neu**
- Ein-/Ausblenden jedes Blocks, Kopf und Fuß mit dem Auge.
- Außenseiten (Klappkarte, Wickelfalz) aus Fix-Blöcken: ein-/ausblendbar, sortierbar, verschiebbar, ausrichtbar.
- A5 Aufsteller mit 1 oder 2 Spalten je Seite; Druckbogen auf A4 mit Schnittmarke bei 210 mm und Falzmarke.
- Erstveröffentlichung in der RIEMER Toolbox (lizenzgeschützt).

**Behoben**
- Druck erzeugte eine leere zweite Seite (A4 Hoch 1-Sp.).

## V1.2 · 13.11.2026
**Geändert**
- Neue Ribbon-Reihenfolge SETS · CARD · STYLE · DISHES; CARD nur noch Bearbeiten mit Block-Ribbon (Drag & Drop), STYLE mit Format und Modellbereich (Bereiche und Gruppe: Ausrichtung, Breite, Höhe, Schrift, Abstand, Platzierung, Skalierung).

## V1.1 · 13.11.2026
**Neu**
- Auto-Fit: jeder Export exakt eine Seite bzw. Vorder- und Rückseite.
- Bearbeiten-Stift, Sortieren und Löschen in jedem Bereich; Textausrichtung und Textskalierung auf dem Blatt.

## V1.0 · 13.11.2026
**Neu**
- Umbau der Webapp auf das RIEMER-Tools-Design: Header, Ribbon, klappbare Boxen, Hell/Dunkel, Backup und Favoriten mit OneDrive/SharePoint, Export PDF/PPTX/Druck/Excel, Offline-Kopie.
