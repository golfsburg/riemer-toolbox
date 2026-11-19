# CHANGELOG – LV.ritl (RIEMER Tools)

Leistungsverzeichnisse nach ÖNORM A 2063 mit Materiallisten, Bieterangeboten und ONLV-Export · #ritl_lv
Neueste Version oben. Versionen ≤ V9.2 nachträglich rekonstruiert (aus `tool_versions` und den Quellen-ZIPs).

## V10.0 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools. Fenster und Abläufe bleiben wie gewohnt, „04 Dateiablage“ bleibt im Fenster „Backup“.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings**, **2 · datenbank**, **3 · storage** (kurz z. B. C3).
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für LV.ritl auf allen Geräten; „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Datenquelle wechseln** mit Rückfrage – der Stand wird dabei übernommen (in den Ordner geschrieben bzw. mit dem Server abgeglichen).
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.
- Ein neues Gerät ohne eigene Daten übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage und lädt neu.

**Geändert**
- **Leistungsbeschreibungen gehören jetzt zur Stufe 3 · storage:** Stufe 2 · datenbank enthält Projekte, LVs, Angebote, Vorlagen und Preislisten; die geladenen Leistungsbeschreibungen kommen mit Stufe 3 in die Backup-Datei (lokal und im Ordner). Am Server liegen wie bisher keine LB-Daten – bei C3 gehen die ONLB-Originale über die Dateiablage auf alle Geräte.
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- C · Server mit Stufe 1 gleicht nur die Einstellungen (Hell/Dunkel, auf-/zugeklappte Bereiche) über den Server ab; die Daten bleiben im Browser.
- Nach dem Übernehmen eines Stands vom Server oder aus dem Ordner lädt LV.ritl erst neu, wenn auch alle Dateien geladen sind. Ältere Backups mit Leistungsbeschreibungen lassen sich weiter vollständig wiederherstellen.

**Behoben**
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.

## V9.9 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz (S-16):** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt in allen RIEMER Tools und auf allen Geräten – das Backup muss nicht mehr auf jedem Gerät einzeln eingerichtet werden.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei B die Stufe der Lizenz (mindestens datenbank), bei A settings, ohne Server-Freigabe höchstens datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Lokal in den Ordner sichern“ bleibt je Gerät, weil der Ordner auf jedem Gerät verknüpft werden muss.
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt.

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (auch bei Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Gesperrte storage-Zeile unter 02 Zentral: „nur mit ‚Server ist die Datenquelle‘ (Freigabe im Admin)“ statt „zentral folgt später“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ statt einer stillen Sperre.
- Ohne Server-Freigabe heißt der Hinweis bei „Server ist die Datenquelle“ jetzt „Freigabe im Admin (Datenquelle ‚Server‘)“.

**Behoben**
- Datenquelle B: storage ist unter 02 Zentral immer wählbar, auch wenn die Prüfung am Server gerade nicht klappt, und springt nach „Übernehmen“ nicht mehr auf datenbank zurück.

## V9.8 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel), fragt LV.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten; die Einstellungen gleicht der Server ab.
- Hat nur dieses Gerät eine Einstellung geändert und liegt im Ordner inzwischen ein neuerer Stand, lädt LV.ritl ihn ohne Abfrage, statt „Neuerer Stand im Ordner“ zu fragen.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommen sie nacheinander – die zweite überschreibt die erste nicht mehr.
- „Ordner verknüpfen“ in „Backup einrichten“: Der Abgleich startet erst mit „Übernehmen“, die Abfrage schiebt sich nicht mehr über das offene Fenster.
- Lässt sich die Ordner-Verknüpfung im Browser nicht speichern, bleibt LV.ritl nicht mehr hängen.

## V9.7 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings`, `datenbank` oder `storage`). LV.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit demselben Stand. Wie beim zentralen Backup bleiben die Leistungsbeschreibungen dabei lokal.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“. Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen; LV.ritl lädt danach kurz neu.
- **storage über den Server:** Mit „Server ist die Datenquelle“ werden hochgeladene Dateien (Dateiablage) einzeln am Server abgelegt und auf allen Geräten abgeglichen – zusammen höchstens 50 MB je Lizenz.
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_LV-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. LV.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“; Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt.

**Geändert**
- „Server ist die Datenquelle“ ist nur wählbar, wenn die Lizenz im Admin dafür freigegeben ist; sonst ist das Häkchen gesperrt mit Hinweis.
- Status im Backup-Dialog und am Backup-Symbol zeigt die Datenquelle mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.
- Auf- und zugeklappte Bereiche lösen keine Abfrage zwischen Geräten mehr aus.
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog.

## V9.6 · 18.11.2026 · DEV
**Geändert**
- Fußzeile nach RIEMER-Webapp-Design (Regel 25): links „© <Jahr> Peter Riemer · toolbox@riemer.co · RIEMER Tools“ mit Link `mailto:toolbox@riemer.co` statt Link auf riemer.co; rechts „LV.ritl · #ritl_lv · ÖNORM A2063 · lokal im Browser“.
- Die Seite scrollt jetzt als Ganzes (Rahmen mindestens fensterhoch als Flex-Spalte); die Fußzeile steht mit `margin-top:auto` und `position:sticky; bottom:0` immer am unteren Fensterrand – bei wenig Inhalt unten am Fenster, bei viel Inhalt beim Scrollen sichtbar. Kompakt in einer Zeile (12,5 px), unter 620 px ohne rechte Kurzinfo.
- Meldungen (Toasts) sitzen über der Fußzeile (64 px vom unteren Rand).

## V9.5 · 18.11.2026 · DEV
**Neu**
- Menüband PROJEKTE/VORLAGEN: neuer Bereich **Externe Links** mit „A2063-Dateiprüfung“ – kostenfreie Prüfung von ONLV, ONRE und ONLB bei der W. Scheidl KG (öffnet in neuem Tab).
- Backup einrichten › Zentral: Auswahl **„kein Backup zentral erstellen“** wie in STAKE.ritl (statt Kontrollkästchen); settings und datenbank als weitere Stufen.

**Geändert**
- Menüband: OneDrive / SharePoint ist ein eigener Abschnitt mit Trennsteg wie Backup & Restore (nicht mehr bis zum rechten Rand gestreckt).

## V9.4 · 18.11.2026 · DEV
**Neu**
- Backup nach RIEMER-Standard: Header-Knopf „Backup“ mit Status-Symbol (Ordner = Lokal, Wolke = Server) und Dialog mit **01 Lokal** (eine Datei `Backup_LV-ritl.json`, wird überschrieben), **02 OneDrive & SharePoint** (verknüpfter Ordner, automatisch nach jeder Änderung), **03 Zentral** (RIEMER Toolbox, je Lizenz, Historie 10 Tage) und **04 Dateiablage**.
- Backup-Stufen **settings** (Hell/Dunkel, auf-/zugeklappte Bereiche), **datenbank** (zusätzlich alle Projekte, LVs, Angebote, Vorlagen, Preislisten, Leistungsbeschreibungen) und **storage** (zusätzlich alle hochgeladenen Dateien). storage ist unter Lokal immer wählbar, zentral gesperrt; zentral ohne Leistungsbeschreibungen.
- Modal „Backup einrichten“ beim ersten Laden: Lokal und Zentral je mit Stufe und zu erwartender komprimierter Größe.
- Dateiablage (RITLF, IndexedDB `lv_files`): jede hochgeladene Datei (ONLV, ONLB, XML, JSON-Pakete, Excel/CSV, Preislisten) wird als Original gespeichert – gleiche Datei wird ersetzt, Backups selbst nicht. Wiederherstellen ersetzt die Dateiablage („Enthält n Datei(en) …“).

**Geändert**
- Zentraler Header RITL-UI 1.3 (Offline-Kennzeichen, Ablauf-Hinweis).
- Backup je Bereich (PROJEKTE/VORLAGEN, Import-Assistent) bleibt unverändert.

## V9.3 · 17.11.2026 · DEV
**Geändert**
- Header über den zentralen Header RITL-UI: App-Bild 38 px, Eyebrow „LV nach ÖNORM A2063 · #ritl_lv“, `LV.ritl` mit Edition, DEV/BETA und Version · Datum; rechts Speichern (Chip), Anleitung, Hell/Dunkel, An-/Abmelden, Toolbox-Logo, „RIEMER Tools“.
- Footer sitzt immer am unteren Rand des Browserfensters; nur der Inhalt dazwischen scrollt.
- Farben nur noch über die Tokens der Farbkarte – die Farben je Lizenz (Corporate Design) greifen jetzt im ganzen Tool, auch in der XML-Vorschau, in den Tabellenköpfen und im App-Bild.
- Seitenränder 22 px wie in allen RIEMER Tools.

**Behoben**
- Farben je Lizenz wurden nicht angewendet: `</head>` in einem Text der Excel-Bibliothek lenkte die Einfügestelle des Lizenzservers um.

## V9.2 · 17.11.2026 · BETA
**Behoben**
- Das vom Lizenzserver eingefügte Skript (Toolbox-Logo, Abmelden) erschien als Text am Seitenende („İ“ in der Excel-Bibliothek verschob die Einfügestelle).
- Toolbox-Logo und DEV-Kennzeichen erscheinen in der Toolbox nur noch einmal.

## V9.1 · 13.11.2026
**Neu**
- RIEMER-Tools-Logo mit Link zur Toolbox vor dem Schriftzug „RIEMER Tools“.

## V9.0 · 12.11.2026
**Geändert**
- Kopfzeile nach RIEMER-Webapp-Design (Eyebrow mit Version und Datum, Editions-Kennzeichen), Schriften über `riemer-toolbox/fonts`.

## V8.9 · 12.11.2026
**Neu**
- Erste Version in der RIEMER Toolbox: Import-Assistent für JSON, ONLV und ONLB, Bereiche PROJEKTE/VORLAGEN mit Projekt- bzw. Vorlagen-Ansicht, Positionsvorlagen, Angebots-LV und Textfassung mit Preisen.
- Programmcode vorkompiliert (2,5 MB statt 5,3 MB, schnellerer Start).
