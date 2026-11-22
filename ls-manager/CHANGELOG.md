# CHANGELOG – LS.ritl (RIEMER Tools)

Lieferscheine automatisch auslesen und je Lieferant im eigenen Archivordner ablegen · #ritl_ls
Tool-ID `ls-manager` · Download-Datei `RIEMER-Tools_LS-Manager_V#.#.html`
Neueste Version oben. Versionen ≤ V1.0 nachträglich rekonstruiert (Repo-Historie golfsburg/riemer-toolbox, `tool_versions`).

## V1.7.1 · 22.11.2026 · DEV
**Geändert**
- **Am Handy und Tablet:** Eingabefelder in 16 px – iOS zoomt beim Antippen nicht mehr hinein.
- Fenster erscheinen am Handy als Blatt von unten über die volle Breite; die Seite dahinter scrollt nicht mit.
- Platz für Notch und Home-Leiste (Safe-Area); Knöpfe reagieren ohne Verzögerung auf Tippen.

## V1.7 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools. Fenster und Abläufe bleiben wie gewohnt.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings**, **2 · datenbank**, **3 · storage** (kurz z. B. C3).
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für LS.ritl auf allen Geräten; „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Datenquelle wechseln** mit Rückfrage – der Stand wird dabei übernommen (in den Ordner geschrieben bzw. mit dem Server abgeglichen).
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.
- Ein neues Gerät ohne neue Lieferscheine übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- C · Server mit Stufe 1 gleicht nur die Einstellungen (Hell/Dunkel, Eigene Firma) über den Server ab; die neuen Lieferscheine bleiben im Browser.
- Stufe 3 · storage: Die Dateien der neuen Lieferscheine (PDF, Fotos, Scans) gehen bei C · Server wie bisher über den Server, bei A und B in die Backup-Datei.
- „Nach jeder Änderung in den Ordner sichern“ wird aus der bisherigen Einrichtung übernommen.

**Behoben**
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.

## V1.6 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz (S-16):** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt in allen RIEMER Tools und auf allen Geräten – das Backup muss nicht mehr auf jedem Gerät einzeln eingerichtet werden.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei B die Stufe der Lizenz (mindestens datenbank, mit storage auch die Lieferschein-Dateien), bei A settings, ohne Server-Freigabe höchstens datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Lokal in den Ordner sichern“ bleibt je Gerät, weil der Ordner auf jedem Gerät verknüpft werden muss.
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt.

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (auch bei Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Gesperrte storage-Zeile unter 02 Zentral: „nur mit ‚Server ist die Datenquelle‘ (Freigabe im Admin)“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ statt einer stillen Sperre.
- Ohne Server-Freigabe heißt der Hinweis bei „Server ist die Datenquelle“ jetzt „Freigabe im Admin (Datenquelle ‚Server‘)“.

**Behoben**
- Datenquelle A und B: In „Backup einrichten“ werden „Nach Änderungen zentral sichern“ und „Server ist die Datenquelle“ jetzt wie vorgesehen angehakt und gesperrt (vorher frei änderbar).
- Datenquelle B: storage ist unter 02 Zentral immer wählbar, auch wenn die Prüfung am Server gerade nicht klappt (z. B. kurz offline).

## V1.5 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A: Ändert ein Gerät nur Einstellungen, während ein anderes Gerät die Ordner-Datei neu geschrieben hat, holt es den neueren Stand, statt fälschlich ‚Neuerer Stand im Ordner‘ zu fragen.

## V1.4 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, „Eigene Firma“), fragt LS.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Lieferscheine im Eingang und die Dateien; die Einstellungen gleicht der Server ab.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommen sie nacheinander – die zweite überschreibt die erste nicht mehr.

## V1.3 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings`, `datenbank` oder `storage`). LS.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit denselben neuen Lieferscheinen.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“. Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen.
- **storage über den Server:** Mit „Server ist die Datenquelle“ werden hochgeladene Lieferscheine (Dateiablage) einzeln am Server abgelegt und auf allen Geräten abgeglichen – zusammen höchstens 50 MB je Lizenz.
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_LS-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. LS.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“; Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt.

**Geändert**
- „Server ist die Datenquelle“ ist nur wählbar, wenn die Lizenz im Admin dafür freigegeben ist; sonst ist das Häkchen gesperrt mit Hinweis.
- Status im Backup-Dialog und am Backup-Symbol zeigt die Datenquelle mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog. Bei Variante A entfällt das bisherige „automatisch im Ordner sichern“ – der Ordner wird direkt abgeglichen.
- Das Archiv im Archivordner bleibt wie bisher unabhängig vom Backup.

## V1.2 · 18.11.2026 · DEV
**Neu**
- Backup nach RIEMER-Standard: Knopf „Backup“ im Header mit Symbol für Lokal (Ordner) und Server (Wolke).
- Backup-Stufen settings (Hell/Dunkel, Eigene Firma), datenbank (+ neue, noch nicht archivierte Lieferscheine mit allen Feldern und erkanntem Text) und storage (+ alle hochgeladenen Dateien). storage ist unter 01 Lokal immer wählbar, zentral gesperrt („nur lokal, zentral folgt später“).
- Backup-Dialog mit 01 Lokal (eine Datei `Backup_LS-ritl.json`, wird überschrieben; wiederherstellen), 02 OneDrive & SharePoint (synchronisierten Ordner verknüpfen, automatisch sichern) und 03 Zentral (lizenzierte Version, Historie 10 Tage).
- Modal „Backup einrichten“ beim ersten Start mit den komprimierten Größen je Stufe.
- Hochgeladene Lieferscheine liegen in der Dateiablage RITLF und bleiben nach dem Neuladen erhalten, bis sie archiviert oder entfernt werden.

**Geändert**
- „Backup“ im Header ersetzt den bisherigen JSON-Export der Daten; die Übersicht als CSV bleibt.
- Header-Kit RITL-UI 1.3.

## V1.1 · 16.11.2026 · DEV
**Geändert**
- Header auf den zentralen Header RITL-UI 1.1 umgestellt (wie MUSTER.ritl V2.8): App-Bild, Eyebrow „LIEFERSCHEINE · #RITL_LS“, LS.ritl mit Edition und Version · Datum.
- Rechts kompakt: Einstellungen und Backup als Symbol-Knöpfe, danach `?` Anleitung, Hell/Dunkel, Anmelden/Abmelden, Toolbox-Logo und „RIEMER Tools“.
- Hell/Dunkel und Anmelden/Abmelden übernimmt der zentrale Header; die Demo zeigt statt der Edition „DEMO“.
- Seitenränder 22 px wie die übrigen RIEMER Tools.

## V1.0 · 12.11.2026 · Beta
**Neu**
- Name LS.ritl (#ritl_ls) nach .ritl-Konvention; Download-Datei `RIEMER-Tools_LS-Manager_V1.0.html`.
- Version, Datum und Edition im Header; Toolbox-Logo vor „RIEMER Tools“.

**Geändert**
- Header nach Standardvorlage: Titelgröße, einzeilig, volle Breite bis 2048 px.
- Kontakt überall `toolbox@riemer.co` (09.11.2026).
- Schriften selbst gehostet statt Google Fonts (12.11.2026).

## Vor V1.0 · 07.11.2026
**Neu**
- Automatische Erkennung aus PDF, Scan, Foto und TXT: Lieferant, Lieferscheinnummer, Lieferdatum, Bestellnummer, Gesamtbetrag, Kategorie.
- Archivordner wird gemerkt und beim Start eingelesen; Ablage je Lieferant (`Lieferant/JJJJ-MM-TT_Nummer.pdf` + `.json`).
- Liste nach Monaten gruppiert mit Anzahl, Summe und Suche; Warnung bei doppelten Lieferscheinen; Export als CSV und JSON.
- Einstellungen „Eigene Firma“, Anleitung, Hell-/Dunkelmodus im RIEMER-Tools-Design; Demoversion mit Beispiel-Lieferscheinen in der RIEMER Toolbox.
