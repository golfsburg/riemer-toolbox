# CHANGELOG – PPTX.ritl (RIEMER Tools)

Präsentationen aus Abschnitten zusammenstellen (DECK.ritl) und Meetings planen (TIMING.ritl) · #ritl_pptx
Neueste Version oben. Ältere Versionen siehe Admin › Tools › Versionen (Tabelle `tool_versions`); dieser CHANGELOG beginnt mit V2.9.

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
