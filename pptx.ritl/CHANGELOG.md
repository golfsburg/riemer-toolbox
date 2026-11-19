# CHANGELOG – PPTX.ritl (RIEMER Tools)

Präsentationen aus Abschnitten zusammenstellen (DECK.ritl) und Meetings planen (TIMING.ritl) · #ritl_pptx
Neueste Version oben. Ältere Versionen siehe Admin › Tools › Versionen (Tabelle `tool_versions`); dieser CHANGELOG beginnt mit V2.9.

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
