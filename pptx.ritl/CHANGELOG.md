# CHANGELOG – PPTX.ritl (RIEMER Tools)

Präsentationen aus Abschnitten zusammenstellen (DECK.ritl) und Meetings planen (TIMING.ritl) · #ritl_pptx
Neueste Version oben. Ältere Versionen siehe Admin › Tools › Versionen (Tabelle `tool_versions`); dieser CHANGELOG beginnt mit V2.9.

## V3.8.5 · 26.11.2026 · DEV
**Neu**
- **DE/EN-Umschalter funktioniert:** Der Knopf im Header schaltet die Oberfläche jetzt um. Texte kommen aus der Übersetzungstabelle (gemeinsame Texte plus PPTX); noch nicht übersetzte Texte bleiben Deutsch. Namen und eigene Eingaben werden nie übersetzt.

## V3.8.4 · 26.11.2026 · DEV
**Geändert**
- **Kalender (.ics):** Alle Räume werden als Ressource (`RESOURCES`) in den Termin geschrieben – auch Räume ohne E-Mail-Adresse. Räume mit E-Mail bleiben zusätzlich als Raum-Teilnehmer enthalten.
- **Englisch:** Neue Texte aus V3.8.1 (Live-Töne, Schlummern, Raum-E-Mail, Überblick) sind ins Englische übersetzt.

## V3.8.3 · 26.11.2026 · DEV
**Geändert**
- **Live-Modus:** Beim Schließen des Live-Fensters wird die Tonausgabe angehalten (spart Akku am Handy).
- **Handy/Tablet:** Der Schalter „Ton 3 und 1 min vor Ende“ hat eine größere Fläche (mind. 44 px) und Schrift (14 px) und lässt sich besser antippen.

## V3.8.2 · 26.11.2026 · DEV
**Behoben**
- **Kalender (.ics):** Namen von Räumen und Teilnehmern mit `:` `;` `,` (z. B. „Raum 1; OG, Nord: A“) brachen den Eintrag. Der Name steht jetzt nach RFC 5545 in Anführungszeichen (`"` im Namen wird entfernt); lange Zeilen werden nach Oktetten (max. 75) statt nach Zeichen gefaltet – Umlaute werden nicht mehr zerschnitten.

## V3.8.1 · 25.11.2026 · DEV
**Neu**
- **TIMING – E-Mail-Adresse je Raum:** Räume werden per E-Mail gebucht – jetzt gibt es dafür ein Feld beim Raum (Seitenleiste und „Räume verwalten“, auch per Einfügen mit Spalte „E-Mail“). Ungültige Adressen werden rot markiert und im Export nicht verwendet. Die Adresse steht im Überblick (als Link), in der Agenda (.html, als mailto-Link), im Text, in den Tabellen (.csv) und im Kalender (.ics, als Raum-Teilnehmer, damit der Raum direkt mit eingeladen wird). Sie gehört zur Projektdatei; ältere Dateien ohne E-Mail öffnen wie bisher.
- **Live-Modus – Töne:** 3 Minuten vor Ende des Punkts ein weicher Ton, 1 Minute vorher zwei aufsteigende Töne (Web Audio, nichts wird geladen). Ein/Aus mit „Ton 3 und 1 min vor Ende“ (im Live-Fenster und in der Seitenleiste, wird gemerkt). Der Ton wird beim Klick auf „Live-Modus starten“ freigeschaltet.
- **Live-Modus – Schlummern:** Ab 3 Minuten vor Ende erscheint „⏰ Schlummern +2 min“ (auch Taste S). Der Punkt wird um 2 Minuten verlängert, alle Folgezeiten verschieben sich; die Hinweistöne gelten danach relativ zum neuen Ende.
- **03 Überblick & Export:** „Zeitanteile“ und „Räume“ lassen sich auf- und zuklappen (Tastatur, Zustand wird gemerkt).

**Geändert**
- Hinweistext unter „Export“ und das Komplett-Paket (LIESMICH) auf den Stand ab V3.8 gebracht: Die Agenda gehört zur Projektdatei `<Name>.pptx.ritl` und wird im Browser nur zwischengespeichert; das Backup sichert nur die Einstellungen.

## V3.8.0 · 25.11.2026 · DEV
**Neu**
- **Projekte als eigene Datei:** Ein Meeting bzw. eine Präsentation ist jetzt ein Projekt, das du als Datei speicherst – z. B. „Jour fixe KW 48.pptx.ritl“. Darin stecken **beide Reiter**: TIMING.ritl (Meeting, Datum, Ort, Teilnehmer, Teams, Räume, Agenda mit Verantwortlichen und den zugeordneten Folien) und DECK.ritl (Startfolie, Abschnitte, eigene Trennstellen, Folienauswahl, Inhaltsverzeichnis- und Ausgabe-Optionen) – samt allen geladenen PPTX-Dateien. So kannst du mehrere Meetings parallel führen, weitergeben und archivieren.
- **Neu · Öffnen … · Speichern · Speichern unter …** oben im Header, dazu Strg+S, Strg+Umschalt+S und Strg+O. Der Projektname steht im Titel, ein „•“ zeigt ungespeicherte Änderungen. Als Name schlägt PPTX.ritl den Meeting-Titel vor.
- **Startbildschirm** beim Öffnen: „Neues Projekt“, „Öffnen …“ und „Zuletzt geöffnet“ (in Chrome/Edge mit einem Klick wieder offen).
- **Nichts geht verloren:** Ungespeicherte Änderungen werden laufend zwischengespeichert und beim nächsten Start zum Wiederherstellen angeboten. Vor Neu, Öffnen und Schließen kommt eine Warnung, wenn noch nicht gespeichert ist.
- **Bisherigen Stand übernehmen:** Beim ersten Start bietet PPTX.ritl an, den bisherigen Stand als „PPTX – übernommen.pptx.ritl“ zu speichern – aus dem Browser (TIMING, geladene PPTX), aus der zuletzt offenen Projekt-JSON oder aus der Ordner-Sicherung. Auch später über Backup › „Bisherigen Stand übernehmen …“. Die alten Dateien bleiben unverändert.
- Chrome/Edge speichern direkt in die geöffnete Datei; Safari, Firefox, iPhone und iPad speichern als Download mit gleichem Namen.

**Geändert**
- **Warum die Umstellung:** Bisher lag immer genau ein Stand im Browser und im Backup – ein zweites Meeting überschrieb das erste. Jetzt ist jedes Meeting eine eigene Datei, wie ein Word- oder PowerPoint-Dokument.
- **Neu** beginnt mit leerer Agenda, ohne Folien und mit den Standard-Optionen (Inhaltsverzeichnis, Farbe, Nummern …) – nichts wird vom vorherigen Projekt geerbt.
- **Backup** sichert nur noch die Einstellungen (Theme, Ansicht, Filter, Favoriten) und die Liste „Zuletzt geöffnet“. Die Projekte selbst liegen nur auf deinem Gerät bzw. in deinem Ordner – nie am Server. Inhaltsverzeichnis- und Ausgabe-Optionen gehören jetzt zum Projekt.
- Hilfe um „Projekt als Datei“ ergänzt.

**Entfernt**
- **„Projekt …“ in der Reiterleiste** (JSON-Datei, die bei jeder Änderung überschrieben wurde, seit V3.1) – ersetzt durch Speichern/Speichern unter. Bestehende Projekt-JSONs lassen sich übernehmen (siehe oben).

**Hinweis**
- Stände, die **nur am Server** lagen (frühere Backup-Stufen Datenbank/Storage), werden beim Umstieg nicht automatisch übernommen. Bitte vorher in einer Fassung bis V3.7 im Fenster „Backup“ als Backup-Datei herunterladen. Dazu steht ein Hinweis in der Hilfe („Projekt als Datei“).

## V3.7.8 · 25.11.2026 · DEV
**Geändert**
- **Scrollen (R-15):** Der Kopfbereich läuft beim Scrollen aus dem Bild, die Reiterleiste (Ribbon) bleibt oben stehen. Das Mausrad wirkt nur dort, wo die Maus steht: Über der Reiterleiste schiebt es nur die Leiste seitlich, nie die Seite; in Listen und Dialogen läuft es nicht in die Seite durch.

## V3.7.7 · 25.11.2026 · DEV
**Behoben**
- **„Backup einrichten“ öffnet sich nicht mehr bei jedem Laden:** Das Fenster erscheint höchstens einmal je Gerät von selbst. Jedes Schließen – auch mit ✕ oder Esc – gilt als gesehen. Über Backup › „Backup einrichten …“ bleibt es jederzeit erreichbar.

**Geändert**
- Anleitung (?) an die Reiter-Reihenfolge angepasst: TIMING.ritl (Reiter 1, Start) steht vor DECK.ritl (Reiter 2), dazu ein Hinweis auf die Links #timing und #deck.

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
