# CHANGELOG – PPTX.ritl (RIEMER Tools)

Präsentationen aus Abschnitten zusammenstellen (DECK.ritl) und Meetings planen (TIMING.ritl) · #ritl_pptx
Neueste Version oben. Ältere Versionen siehe Admin › Tools › Versionen (Tabelle `tool_versions`); dieser CHANGELOG beginnt mit V2.9.

## V3.7.6 · 25.11.2026 · DEV
**Geändert**
- **TIMING.ritl ist jetzt der erste Reiter und öffnet beim Start**, DECK.ritl folgt als zweiter. Ein Link mit #deck öffnet weiterhin direkt DECK.ritl; das zuletzt genutzte Modul aus dem Backup stellt den Start nicht mehr um.

**Behoben**
- Am Handy und Tablet haben die Eingabefelder in TIMING.ritl und in den Dialogen 16 px Schrift – iOS zoomt beim Antippen nicht mehr hinein.

## V3.7.5 · 23.11.2026 · DEV
**Behoben**
- **TIMING verlor seine Daten:** Nach jedem Neuladen startete TIMING leer (Meeting, Teilnehmer, Räume, Agenda) und überschrieb die gespeicherten Daten bei der nächsten Änderung. Ursache war ein Fehler beim Sortieren der gespeicherten Teilnehmer. Jetzt bleibt TIMING erhalten – auch im Backup.

## V3.7.4 · 22.11.2026 · DEV
**Neu**
- **Komplett-Paket im Fenster „Backup“:** Abschnitt „04 Komplett-Paket (.zip)“ mit „Komplett-Paket speichern“ und „Komplett-Paket laden …“. Unter 03 Ausgabe bleibt der Knopf wie bisher.

**Geändert**
- Backup intern vereinfacht (gemeinsamer Baustein ritl-bk übernimmt den Abgleich beim Start und das Ausblenden des Zeitstempels) – Verhalten unverändert: Beim Start wird der Stand still aus dem Ordner bzw. vom Server übernommen, reines Neuzeichnen erzeugt keinen neuen Stand.

## V3.7.3 · 22.11.2026 · DEV
**Neu**
- **Module im Link (Regel S-21):** Jedes Modul hat einen eigenen Link mit `#name` (#deck, #timing). Ein Link oder Lesezeichen öffnet direkt dieses Modul, Neu laden bleibt im Modul, „Zurück“/„Vor“ im Browser wechseln zwischen den zuletzt geöffneten Modulen.
- Bisher stand `#deck`/`#timing` schon in der Adresse, aber ohne Verlaufsschritt – „Zurück“ verließ das Tool.

## V3.7.2 · 22.11.2026 · DEV
**Neu**
- **Teilen-Blatt beim Speichern am Handy und Tablet:** Exporte und „Backup speichern“ öffnen am Touchscreen das Teilen-Blatt („In Dateien sichern“, AirDrop, Mail) – in der Home-Bildschirm-App zeigte iOS Downloads bisher nur als Vorschau. Am Computer bleibt es beim normalen Download; lässt der Browser das Teilen nicht zu, wird ebenfalls normal geladen.

## V3.7.1 · 20.11.2026 · DEV
**Geändert**
- Backup: alle Datenquellen gleichzeitig aktiv, jede in ihrer Stufe (ritl-bk 2.7)

## V3.7 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools – gleiche Fenster „Backup“ und „Backup einrichten“ wie in MUSTER.ritl.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings**, **2 · datenbank**, **3 · storage** (kurz z. B. C3).
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für PPTX.ritl auf allen Geräten.
- **Stufe 3 · storage = alle geladenen PPTX-Originale:** bei A und B als Dateien in der Backup-Datei, bei **C3 über den Server** – ein zweites Gerät lädt die Originale und die Zusammenstellung automatisch.
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- Bei B und C übernimmt PPTX.ritl beim Start den Stand still aus dem Ordner bzw. vom Server – der leere Browser überschreibt ihn nicht mehr.
- Das **Komplett-Paket (.zip)** mit allen Originalen speicherst du jetzt unter 03 Ausgabe („Komplett-Paket (.zip)“); Laden wie bisher per Ziehen auf die Seite.
- **Projekt …** öffnet jetzt ein eigenes Fenster (bisher Teil des Fensters „Backup“). Projektdateien speichern bei Stufe storage die PPTX-Originale als Dateien; ältere Projektdateien lassen sich weiter öffnen.

**Behoben**
- Ein neuer Start bzw. ein neues Gerät fragt bei B oder C nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.
- Alte Backup-Dateien (auch mit Komplett-Paket), Auswahl-Sicherungen und die bisherige Ordner-Verknüpfung funktionieren weiter.
- Ist beim Start ein Projekt geöffnet und der Browser leer, lädt PPTX.ritl das Projekt, statt die Projektdatei mit einem Stand ohne Dateien zu überschreiben.

## V3.6 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz:** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt auf allen Geräten und in allen RIEMER Tools – das Backup muss nicht mehr auf jedem Gerät eingerichtet werden.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank); bei storage kommen die PPTX-Originale wie bisher als Komplett-Paket in die Backup-Datei.
  - Zentral (02): bei A settings, sonst datenbank bzw. settings. Die PPTX-Originale gehen nie an den Server – storage gilt zentral wie datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Automatisch im Ordner sichern“ bleibt je Gerät (der Ordner muss auf jedem Gerät verknüpft werden).
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt („durch die Lizenz festgelegt“).

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (auch bei Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- storage unter 02 Zentral: „nur lokal (Komplett-Paket), nicht über den Server“ statt „zentral folgt später“.
- Hinweis „Server als Datenquelle nicht freigegeben“: „Freigabe im Admin (Datenquelle ‚Server‘)“ statt „bitte beim Anbieter anfragen“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ (Backup einrichten, Backup-Dialog, Tooltip am Backup-Knopf).

## V3.5 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A: Ändert ein Gerät nur Einstellungen, während ein anderes Gerät die Ordner-Datei neu geschrieben hat, holt es den neueren Stand, statt fälschlich ‚Neuerer Stand im Ordner‘ zu fragen.

## V3.4 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Ausgabe-Optionen, Favoriten), fragt PPTX.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten; die Einstellungen gleicht der Server ab. Beim Übernehmen aus dem Ordner bleiben die eigenen Einstellungen erhalten.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommt zuerst die für den Ordner; danach gleicht das Tool mit dem Server neu ab, statt eine veraltete Server-Abfrage zu zeigen.

## V3.3 · 19.11.2026 · DEV
**Geändert**
- Schriften (Inter, JetBrains Mono) kommen jetzt von der RIEMER Toolbox selbst statt von Google Fonts. Beim Öffnen von PPTX.ritl gehen keine Anfragen mehr an Google; Aussehen unverändert.

## V3.2 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings` oder `datenbank`). PPTX.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit derselben Zusammenstellung und Agenda. Die PPTX-Originale (Stufe `storage`, Komplett-Paket) bleiben lokal bzw. im Ordner.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“. Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen.
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_PPTX-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand (Stufe `datenbank` oder `storage` inkl. PPTX-Originale). PPTX.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“; Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt; der Ordner lässt sich dort direkt verknüpfen.
- **Logo im Browser-Tab:** Das App-Bild von PPTX.ritl erscheint als Symbol im Browser-Tab (wie auf der Anmeldeseite).

**Geändert**
- „Server ist die Datenquelle“ ist nur wählbar, wenn die Lizenz im Admin dafür freigegeben ist; sonst ist das Häkchen gesperrt mit Hinweis.
- Status im Backup-Dialog und am Backup-Symbol zeigt die Datenquelle mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.
- Ein neues Gerät ohne eigene Daten übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage.
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog.
- Offline-Version: kein Serverzugriff, der Abschnitt „Zentral“ entfällt.

## V3.1 · 18.11.2026 · DEV

**TIMING.ritl – Verantwortlich mehrfach**
- „Verantwortlich“ je Agenda-Punkt ist jetzt eine Mehrfachauswahl (▾): mehrere Teams und Personen frei kombinierbar; Team-Chip wählt das ganze Team, Häkchen einzelne Personen.
- Volle Teams erscheinen kompakt mit Teamnamen – in der Agenda, im Live-Modus, in DECK.ritl, im Inhaltsverzeichnis und in allen Exporten; „Einsatz je Teilnehmer“ zählt jede verantwortliche Person.
- Ältere Stände (eine verantwortliche Person) werden automatisch übernommen.

**Projekte (neu, parallel zu den Backup-Stufen)**
- JSON-Datei als Projekt öffnen (auch jedes Backup mit PPTX.ritl-Kopf) oder die aktuelle Arbeit „Als Projekt speichern“ – danach wird jede Änderung direkt in diese Datei geschrieben (Datenbank oder Storage inkl. PPTX).
- Projekt-Anzeige in der Modulleiste mit Name und Speicherzeit; Backup-Dialog mit neuem Abschnitt 01 Projekt, Projekten im verknüpften OneDrive-/SharePoint-Ordner und zuletzt geöffneten Projekten.
- Abgleich mehrerer Geräte: wurde die Datei extern geändert (OneDrive), lädt PPTX.ritl den neuen Stand automatisch; bei Änderungen auf beiden Seiten wählt man „Stand aus der Datei laden“ oder „Meinen Stand speichern“.
- „Neu beginnen“ schließt ein offenes Projekt vorher – die Datei wird nie mit einem leeren Stand überschrieben.
- Ohne Chrome/Edge am Computer: Projekt laden und als Download speichern.

**Allgemein**
- Automatische Sicherungen reagieren jetzt auf jede Eingabe; Vergleich der Stände ohne Zeitstempel (weniger unnötige Schreibvorgänge).

## V3.0 · 18.11.2026 · DEV

**TIMING.ritl – Teams (Gruppen) für Teilnehmer**
- Neue Ebene **Teams** in der Teilnehmerverwaltung: Teams anlegen, umbenennen, auflösen; jede Person optional einem Team zugeordnet.
- Seitenleiste gruppiert Teilnehmer nach Team (auf-/zuklappbar), „Ohne Team“ als eigene Gruppe; Team-Auswahl je Person und beim Anlegen.
- Agenda-Punkte: Team-Chips wählen ein ganzes Team mit einem Klick (voll / teilweise / aus), ▾ klappt die Mitglieder zur Einzelauswahl auf; Teams und Einzelpersonen frei kombinierbar.
- Verwalten-Dialog: Spalte Team, Team-Gruppenzeilen, „+ Team“; Listen-Import (Excel/CSV) erkennt die Spalte Team/Gruppe/Abteilung/Bereich/Gewerk.
- Text- und HTML-Export, Tabelle (.csv) und Konflikt-Hinweise zeigen volle Teams kompakt mit Teamnamen.
- Teams sind Teil von Backup, Restore und Agenda-Favoriten.

**Allgemein**
- Kopf auf RITL-UI-Version V3.0 · 18.11.2026 aktualisiert.

## V2.9 · 18.11.2026 · DEV
**Neu**
- Backup-Stufe **storage** für 01 Lokal: Einstellungen, Arbeitsdaten **und alle PPTX-Originale** in der einen Datei `Backup_PPTX-ritl.json` (Originale als Komplett-Paket eingebettet). Wiederherstellen lädt die Präsentationen wieder.

**Geändert**
- „Backup einrichten“: storage lokal wählbar (mit Größe), zentral gesperrt („nur lokal, zentral folgt später“).

## V2.8 · 16.11.2026
**Geändert**
- Header auf den zentralen Header RITL-UI umgestellt.
