# CHANGELOG – LS.ritl (RIEMER Tools)

Lieferscheine automatisch auslesen und je Lieferant im eigenen Archivordner ablegen · #ritl_ls
Tool-ID `ls-manager` · Download-Datei `RIEMER-Tools_LS-Manager_V#.#.html`
Neueste Version oben. Versionen ≤ V1.0 nachträglich rekonstruiert (Repo-Historie golfsburg/riemer-toolbox, `tool_versions`).

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
