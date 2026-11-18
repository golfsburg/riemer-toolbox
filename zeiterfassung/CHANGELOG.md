# CHANGELOG – Zeiterfassung.ritl (RIEMER Tools)

Projektzeiten erfassen, Timer und manuelle Einträge, Auswertung, Excel/CSV-Datei-Modus · #ritl_zeiterfassung
Neueste Version oben. Versionen ≤ V3.1 nachträglich aus dem Changelog im Tool rekonstruiert (V1.0–V2.3: 17.07.2026).

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
