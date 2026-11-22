# CHANGELOG – ZEIT.ritl (RIEMER Tools)

Projektzeiten erfassen, Timer und manuelle Einträge, Auswertung, Excel/CSV-Datei-Modus · #ritl_zeit (bis V3.7: Zeiterfassung.ritl · #ritl_zeiterfassung)
Neueste Version oben. Versionen ≤ V3.1 nachträglich aus dem Changelog im Tool rekonstruiert (V1.0–V2.3: 17.07.2026).

## V3.8.1 · 22.11.2026 · DEV
**Neu**
- **Teilen-Blatt beim Speichern am Handy und Tablet:** Exporte und „Backup speichern“ öffnen am Touchscreen das Teilen-Blatt („In Dateien sichern“, AirDrop, Mail) – in der Home-Bildschirm-App zeigte iOS Downloads bisher nur als Vorschau. Am Computer bleibt es beim normalen Download; lässt der Browser das Teilen nicht zu, wird ebenfalls normal geladen.

## V3.8 · 19.11.2026 · DEV
**Geändert**
- **Neuer Name: ZEIT.ritl** (vorher Zeiterfassung.ritl) nach der .ritl-Namenskonvention – Header, Titel, Fußzeile, Druckdokument, Hashtag `#ritl_zeit`. Tool-ID, Adresse und die Daten im Browser bleiben gleich.
- Die Backup-Datei heißt jetzt **`Backup_ZEIT-ritl.json`**. Vorhandene `Backup_Zeiterfassung-ritl.json` im OneDrive-/SharePoint-Ordner werden weiter gefunden: Sie stehen im Fenster „Backup“ zum Wiederherstellen bereit, und bei **B · Ordner** liest ZEIT.ritl die alte Datei, bis die neue geschrieben ist. Die alte Datei bleibt unverändert liegen und kann später gelöscht werden.
- Excel-/CSV-Dateien des Datei-Modus behalten ihre Namen (`Zeiterfassung_<Mitarbeiter>`).
- Backup-Baustein ritl-bk 2.1.


## V3.7 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools. Fenster und Abläufe bleiben wie gewohnt.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings**, **2 · datenbank**, **3 · storage** (kurz z. B. C3).
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für Zeiterfassung.ritl auf allen Geräten. „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Datenquelle wechseln** mit Rückfrage – der Stand wird dabei übernommen (in den Ordner geschrieben bzw. mit dem Server abgeglichen).
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.
- Ein neues Gerät ohne eigene Daten übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage.
- **Stufe 3 · storage** enthält zusätzlich die Dateiablage des Tools.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- C · Server mit Stufe 1 gleicht nur die Einstellungen über den Server ab; die Daten bleiben im Browser.

**Behoben**
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.

## V3.6 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz:** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt auf allen Geräten und in allen RIEMER Tools – das Backup muss nicht mehr auf jedem Gerät eingerichtet werden.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei B die Stufe der Lizenz (mindestens datenbank), bei A settings, ohne Server-Freigabe höchstens datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Lokal in den Ordner sichern“ bleibt je Gerät (der Ordner muss auf jedem Gerät verknüpft werden).
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt („durch die Lizenz festgelegt“).

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (auch bei Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Gesperrte storage-Zeile unter 02 Zentral: „nur mit ‚Server ist die Datenquelle‘ (Freigabe im Admin)“ statt „zentral folgt später“; der Hinweis bei fehlender Freigabe nennt den Admin statt „bitte beim Anbieter anfragen“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ (Backup einrichten, Backup-Dialog, Backup-Symbol) statt einer stillen Sperre.

**Behoben**
- Datenquelle B (Server ist die Datenbank): Die unter 02 Zentral gewählte Stufe storage sprang nach „Übernehmen“ auf datenbank zurück – sie bleibt jetzt eingestellt.

## V3.5 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Mitarbeitername), fragt Zeiterfassung.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten; die Einstellungen gleicht der Server ab.
- Hat nur dieses Gerät eine Einstellung geändert und liegt im Ordner inzwischen ein neuerer Stand, lädt Zeiterfassung.ritl ihn ohne Abfrage, statt „Neuerer Stand im Ordner“ zu fragen.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommen sie nacheinander – die zweite überschreibt die erste nicht mehr.
- „Ordner verknüpfen“ in „Backup einrichten“: Der Abgleich startet erst mit „Übernehmen“, die Abfrage schiebt sich nicht mehr über das offene Fenster.
- Lässt sich die Ordner-Verknüpfung im Browser nicht speichern, bleibt Zeiterfassung.ritl nicht mehr hängen.

## V3.4 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings`, `datenbank` oder `storage`). Zeiterfassung.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit demselben Stand.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“. Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen.
- **storage über den Server:** Mit „Server ist die Datenquelle“ werden hochgeladene Dateien (Dateiablage) einzeln am Server abgelegt und auf allen Geräten abgeglichen – zusammen höchstens 50 MB je Lizenz.
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_Zeiterfassung-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. Zeiterfassung.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“; Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt.

**Geändert**
- „Server ist die Datenquelle“ ist nur wählbar, wenn die Lizenz im Admin dafür freigegeben ist; sonst ist das Häkchen gesperrt mit Hinweis.
- Status im Backup-Dialog und am Backup-Symbol zeigt die Datenquelle mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog.
- Der Datei-Modus (Excel/CSV im OneDrive-/SharePoint-Ordner) bleibt unverändert und läuft in allen Varianten weiter; Stände vom Server oder aus dem Ordner werden auch in die Excel-/CSV-Datei geschrieben.
- Beim Übernehmen eines neuen Stands bleibt das gewählte Projekt geöffnet, wenn es noch vorhanden ist.

**Behoben**
- Das Häkchen „Nach jeder Änderung automatisch im Ordner sichern“ wird ausgeblendet, wenn es nicht gilt (kein Ordner verknüpft oder Ordner ist die Datenbank).

## V3.3 · 18.11.2026
**Neu**
- Backup im Header: eine Datei `Backup_Zeiterfassung-ritl.json`, lokal oder in einem OneDrive-/SharePoint-Ordner; sie wird bei jedem Sichern überschrieben, auf Wunsch automatisch nach jeder Änderung
- Backup-Stufen: settings (Hell/Dunkel, Mitarbeitername, Datei-Modus), datenbank (zusätzlich Kategorien, Projekte, Einträge) und storage (zusätzlich Dateiablage)
- Stufe storage ist unter Lokal immer wählbar, zentral gesperrt („nur lokal, zentral folgt später“)
- Zentrales Backup auf dem Lizenzserver mit Historie (10 Tage); Dialog „Backup einrichten“ zeigt beim ersten Start die Größen je Stufe
- Dateiablage RITLF (IndexedDB) für hochgeladene Dateien als Grundlage für storage; Ordner-/Wolken-Symbol am Backup-Knopf zeigt den Zustand

**Geändert**
- Header-Knopf „Backup“ ersetzt „Neues Projekt“ (bleibt links in der Seitenleiste); Header-Kit RITL-UI 1.3
- Alte Sicherungen (Alle exportieren) lassen sich weiter wiederherstellen; „Alle exportieren“ ist im Backup-Dialog aufgegangen

## V3.2 · 16.11.2026
**Geändert**
- Header auf den zentralen RITL-UI-Header umgestellt (wie PPTX.ritl und MUSTER.ritl): App-Bild, Name mit Edition und Version · Datum, Knöpfe als Symbole
- Hell/Dunkel, Anleitung und An-/Abmelden kommen aus dem Header; Neuerungen am Header gelten ohne neue Tool-Version
- Version steht jetzt neben dem Titel statt im Changelog-Knopf; Changelog über das Listen-Symbol
- Schriften selbst gehostet (kein Google Fonts mehr), Seitenränder 22 px

## V3.1 · 10.11.2026
**Neu**
- Das Tool schreibt automatisch in eine Excel-Datei (.xlsx) oder CSV-Datei – wahlweise, mit eigenem Dateinamen
- Excel-Datei mit Kopfzeile, Datumsformat, Filter und fixierter Zeile; ohne Zusatzbibliothek, offline
- Aus Datei laden: Änderungen aus Excel/CSV oder von einem anderen Gerät übernehmen; beim Start werden fehlende Einträge ergänzt
- Ordnerzugriff bleibt gespeichert; nach Browser-Neustart per Klick auf „Zugriff erneuern“
- Klare Meldungen, z. B. wenn die Datei in Excel geöffnet und gesperrt ist

**Geändert**
- SharePoint-Listenmodus ersetzt durch Datei-Modus: Ordner aus OneDrive oder SharePoint (synchronisiert) verbinden

**Entfernt**
- SharePoint-REST-Anbindung, Listen-Einrichtung und Sync-Punkt je Eintrag entfernt

## V3.0 · 10.11.2026
**Neu**
- Aufnahme in die RIEMER Toolbox (Lizenzschlüssel + E-Mail, myTOOLBOX.ritl)

**Geändert**
- Neues Design nach RIEMER-Tools-Farbkarte: Hell- und Dunkelmodus (Umschalter oben rechts), Header wie PPTX Manager
- Tool heißt jetzt Zeiterfassung.ritl; volle Fensterbreite bis 2048 px, Footer, Anleitung per ? im Header
- Emojis durch Linien-Icons ersetzt; Kategorie-Buttons und -Badges lesen sich in beiden Modi
- Druckdokument in Markenblau statt Rot, mit dynamischen Kategorien
- Neue Standardfarben für Kategorien und Projekte (gut lesbar auf Hell und Dunkel)
- SharePoint-Spalte Kategorie als einzeilige Text-Spalte anlegen (statt Auswahl), damit eigene Kategorien synchronisiert werden

**Behoben**
- Eigene Kategorien erscheinen jetzt in Auswertung, Filter und Druck (vorher nur Framework / Design / CAD)
- Neue oder geänderte Kategorien erscheinen sofort in Timer und manueller Erfassung (nach Schließen der Einstellungen)

## V2.3 · 17.07.2026
**Neu**
- Kategorien in Einstellungen verwaltbar: hinzufügen, löschen, Farbe ändern
- Kategorie-Pills und Filter dynamisch aus Einstellungen generiert
- Kategorien können umbenannt werden (Inline-Textfeld in Einstellungen)
- SFDC-Link auf Projektebene: eigenes Feld neben HCP-Link
- SFDC-Link im Projektheader, Druckdokument und CSV-Export

**Geändert**
- Tool umbenannt in "RIEMER-Tools Zeiterfassung" (Header und Druckdokument)

**Behoben**
- Kategorie-Buttons (Pills) in Timer und manueller Erfassung zeigen dynamische Kategorien
- Versionsnummer im PDF-Ausdruck korrigiert (war fest auf V2.1, jetzt V2.3)

## V2.2 · 17.07.2026
**Neu**
- Sicherheitsabfrage beim Löschen von Einträgen (Datum, Zeit, Dauer, Kategorie)

**Entfernt**
- Spalte "Kunde" aus Eintrags-Tabellen entfernt (Erfassen, Auswertung, Druck, Edit-Modal)

## V2.1 · 17.07.2026
**Neu**
- Drucken/PDF-Export in Auswertung: formschönes A4-Dokument mit Projektinfos
- Druckdokument: KPI-Kacheln, SVG-Balkendiagramm, Mitarbeiter- und Tagesübersicht
- Druckdokument: Alle-Einträge-Tabelle mit Summenzeile, Projektfarbe, HCP-Link
- Druckvorschau im neuen Fenster mit Drucken- und Schließen-Button
- SP-Konfiguration zeigt sofort Warnung wenn Datei lokal (file://) geöffnet ist
- Differenzierte SP-Fehlermeldungen: CORS / 401 / 403 / 404 erklärt

**Geändert**
- SFDC-Link überall in HCP-Link umbenannt (Label, CSV-Header, SP-Spaltenname, Druckdokument)

**Behoben**
- Alle Funktionen eingefroren: Template-Literal-Konflikt in printOverview behoben
- SP-Verbindungstest: "Failed to fetch" durch klaren Hinweis auf file://-Problem ersetzt

**Entfernt**
- Versionsnummer aus dem Header-Logo entfernt — Version wird im Changelog-Button geführt

## V2.0 · 17.07.2026
**Neu**
- SharePoint-Integration: Daten optional zentral in SP-Liste speichern
- Hybrid-Modus: automatischer Fallback auf localStorage bei SP-Fehler
- Manueller Modus-Schalter und SP-Konfiguration in Einstellungen (⚙)
- Verbindungstest für SP-Liste direkt im Einstellungs-Dialog
- 6-Schritt-Einrichtungsanleitung für SP-Liste im Tool integriert
- Sync-Buttons: Von SP laden / Alle lokalen Daten hochladen
- Sync-Dot pro Eintrag zeigt SP-Status (grün = synced, orange = nur lokal)
- Modus-Badge im Header mit Live-Status (Lokal / SharePoint / SP-Fehler)
- Changelog-Modal mit fortlaufender Versionshistorie

## V1.5 · 17.07.2026
**Neu**
- Datei-Versionierung: Dateien heißen ab jetzt zeiterfassung_V1.x.html

**Behoben**
- HCP-Link: URL wird immer absolut gespeichert (https:// automatisch ergänzt)

## V1.4 · 17.07.2026
**Geändert**
- HCP/HCP-Link nur noch auf Projektebene, nicht je Eintrag
- HCP-Link in Auswertung und CSV-Export sichtbar

**Entfernt**
- Pause-Erfassung vollständig entfernt (Felder, Spalten, Auswertung, CSV)

## V1.3 · 17.07.2026
**Geändert**
- Kategorie im Timer als Pills statt Dropdown, gespeichert in T.cat
- Beschreibung im Timer via oninput direkt in T.note gespiegelt

**Behoben**
- Stopp & Speichern: Timer-State wird nicht mehr vor confirm() mutiert
- Pause → Weiter: renderMain() statt renderTimerWidget() für korrekten Button-Swap

## V1.2 · 17.07.2026
**Neu**
- Sicherheitsabfrage (confirm) vor Stopp & Speichern
- Mitarbeiter-Name im localStorage gespeichert und in neuen Projekten vorausgefüllt

**Behoben**
- Stopp & Speichern nach Pause/Weiter-Zyklus funktioniert korrekt

## V1.1 · 17.07.2026
**Neu**
- Projektfelder: Mitarbeiter, Kunde, HCP-Link
- Live-Timer mit Start / Pause / Stopp & Speichern
- Pausenzeit-Akkumulation und Netto-Berechnung (später entfernt in V1.4)
- Auswertung nach Mitarbeiter

**Geändert**
- CSV-Export erweitert um Mitarbeiter, Kunde, HCP, Pause-Spalten

## V1.0 · 17.07.2026
**Neu**
- Initiales Release: Zeiterfassung für mehrere Projekte parallel
- Datum, Start, Ende, Dauer, Kategorie (Framework / Design / CAD)
- Auswertung: Kategorie-Balken, Tagesübersicht, Summentabelle
- Export: JSON (reimportierbar) und CSV (Excel-kompatibel)
- Import: JSON pro Projekt und vollständiges Backup
- Persistenz via localStorage, offline nutzbar
- Filter nach Kategorie, Datum, Mitarbeiter
