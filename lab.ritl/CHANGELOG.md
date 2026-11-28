# CHANGELOG – LAB.ritl (RIEMER Tools)

Testfeld für RIEMER Tools als installierbare App · #ritl_lab
Abgeleitet aus MUSTER.ritl V3.8 › SETUP.ritl. Neueste Version oben.

## V1.0.5 · 27.11.2026 · DEV
**Neu**
- **Bereichsfarben (Regel S-28, Rollout R-24):** Boxen zeigen ihre Funktion mit einer der vier Bereichsfarben (Tokens `--zone-a..d`, hell/dunkel, `data-zone`). Text ≥ 4,5:1.

**Geändert**
- **Enter/Esc in Dialogen (S-25, R-21):** ein zentraler Tasten-Handler aus MUSTER – Enter löst den Hauptknopf aus, Esc bricht ab, Info-Dialoge (Anleitung) schließen mit Enter und Esc.
- Bausteine auf **RITL-UI 1.7** und **ritl-bk 2.14** aktualisiert (byte-gleich; Dialoge sperren die Seite dahinter).
- Zuordnung der Bereichsfarben: Zone a (Blau): Übersicht/Allgemein (01 Allgemein) · Zone b (Laubgrün): Arbeiten/Eingabe (02 Erweitert – Daten, Dateiablage) · Zone c (Bernstein): nicht belegt · Zone d (Violett): Einstellungen/Sonstiges (03 App · Installation & Vollbild).

**Unverändert / nicht zutreffend**
- R-22 (Ribbon kompakt, S-26): LAB hat nur eine Ansicht ohne Reiterleiste – nichts zu ändern.
- R-23 (Export XLSX/PPTX, S-27): LAB hat keine Datentabellen und keine Darstellungen (nur Name und Notiz) – kein ritl-export eingebaut.

## V1.0.4 · 25.11.2026 · DEV
**Geändert**
- **Tool-Typ „Datenbank“ (Regel S-23, Rollout R-19):** Das Tool ist als Typ Datenbank gekennzeichnet – Daten bleiben wie bisher im Tool, keine Projektdateien.
- Backup-Baustein auf **ritl-bk 2.12** aktualisiert (Verhalten unverändert).

## V1.0.3 · 25.11.2026 · DEV
**Geändert**
- **Scrollen (R-15):** Der Kopfbereich läuft beim Scrollen mit der Seite aus und klebt nicht mehr oben. Scrollen im Fenster oder in einer Liste schiebt die Seite dahinter nicht mehr mit. Vorbereitet für Leisten, die oben kleben (Höhe als `--stk`).

## V1.0.2 · 22.11.2026 · DEV
**Neu**
- **Teilen-Blatt beim Speichern am Handy und Tablet:** Exporte und „Backup speichern“ öffnen am Touchscreen das Teilen-Blatt („In Dateien sichern“, AirDrop, Mail) – in der Home-Bildschirm-App zeigte iOS Downloads bisher nur als Vorschau. Am Computer bleibt es beim normalen Download; lässt der Browser das Teilen nicht zu, wird ebenfalls normal geladen.

## V1.0.1 · 22.11.2026 · DEV
**Geändert**
- **Am Handy und Tablet:** Eingabefelder in 16 px – iOS zoomt beim Antippen nicht mehr hinein.
- Fenster erscheinen am Handy als Blatt von unten über die volle Breite; die Seite dahinter scrollt nicht mit.
- Platz für Notch und Home-Leiste (Safe-Area); Knöpfe reagieren ohne Verzögerung auf Tippen.

## V1.0 · 19.11.2026 · DEV
**Neu**
- **Als App installieren:** In Chrome und Edge am Computer lässt sich LAB.ritl installieren („App installieren“ im Header oder im Panel 03). Danach startet es vom Desktop, aus dem Startmenü bzw. der Taskleiste im eigenen Fenster ohne Adressleiste – wie ein Programm.
- **Titelleiste:** Im App-Fenster kann der Header in die Titelleiste gelegt werden (Chrome/Edge, Symbol oben rechts im Fenster). Der Header bleibt dabei bedienbar, die freie Fläche verschiebt das Fenster.
- **Vollbild:** Knopf „Vollbild“ oder F11, Esc beendet es. Automatisch beim Start erlauben die Browser das nicht.
- **Start ohne Netz:** Die App startet mit dem zuletzt geladenen Stand, wenn kein Netz da ist. „Offline-Stand löschen“ entfernt ihn wieder.
- **Panel „03 App“:** zeigt Anzeige (Tab, App-Fenster, Titelleiste, Vollbild), ob Installieren möglich ist, Service Worker, Offline-Stand und Netz.
- Daten zum Testen: Name und Notiz unter SETUP.ritl, Dateiablage – Backup, Server als Datenquelle und Dateien wie in MUSTER.ritl (ritl-bk 2.0).
- Eigenes App-Bild (Fenster mit Download-Pfeil) als Favicon und App-Symbol.
