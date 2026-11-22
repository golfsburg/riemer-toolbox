# CLAUDE.md – RIEMER Toolbox (öffentliches Repo)

Arbeitsanweisungen für Claude Code. Sprache: Deutsch, Du-Form, kurz.

## Das Wichtigste zuerst

- **Dieses Repo ist ÖFFENTLICH** (GitHub Pages: https://golfsburg.github.io/riemer-toolbox/).
  Hier liegen nur Startseite, Loader, Admin-Seite, Schriften, gemeinsame Bausteine und Doku.
- **Geschützter Tool-Code gehört NIE hierher.** Er liegt im privaten Repo
  `golfsburg/riemer-toolbox-src` und wird über den Lizenzserver (Supabase) ausgeliefert.
  Im Tool-Ordner hier liegt nur der Loader (`<tool>/index.html` → `lizenz/loader.js`).
- **Keine Geheimnisse committen:** kein Service-Role-Key, kein Admin-Token (`RTA-…`),
  keine Lizenzschlüssel (`RITL-…`), keine Passwörter.
- **Design und Konventionen:** immer nach dem Skill `/riemer-webapp-design`
  (Farb-Tokens, Hell/Dunkel, Header RITL-UI, `.ritl`-Namen, Version `V#.#`, Backup, CHANGELOG).
  Der Skill ist verbindlich; diese Datei fasst nur die Abläufe im Repo zusammen.

## Zwei Streams

- **Stream 1 – Standardisierung:** gemeinsame Bausteine hier im Repo (`ritl-ui/`, `ritl-bk/`,
  `lizenz/`, `fonts/`) plus Regeln und Matrix in `riemer-toolbox-src/STANDARDS.md`.
- **Stream 2 – Tool-Entwicklung:** Code im privaten Repo, hier nur CHANGELOG/README/Loader des Tools.
- Eine Sitzung = ein Vorhaben; Vorlagen in `riemer-toolbox-src/docs/SITZUNG.md`.
  Vor Arbeit an einem Tool im privaten Repo `python3 scripts/ritl.py status` – „in Arbeit“ respektieren.

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `index.html` | Startseite / Katalog (liest Tools aus Supabase) |
| `my/` | myTOOLBOX.ritl – Kundenansicht nach Anmeldung |
| `lizenz/loader.js` | Lizenz-Loader: prüft Schlüssel höchstens 1× pro Tag und Gerät (Regel S-22, Tagesspeicher IndexedDB `riemer_lizenz`, `?neu` erzwingt Prüfung, Kanal Dev ausgenommen), lädt Tool-HTML per `document.write` |
| `lizenz/admin.html` | Lizenz-Admin (Edge Function `license-admin`, Header `x-admin-token`) |
| `lizenz/LIZENZVERWALTUNG.md` | SQL-Befehle und Ablauf Lizenzverwaltung |
| `ritl-ui/ritl-ui.html` | Zentraler Header-Kit RITL-UI (+ CHANGELOG) |
| `ritl-bk/` | Backup-Bausteine (`ritl-files.js`, Anleitung RITL-Sync/Stufen) |
| `fonts/` | Selbst gehostete Schriften (`fonts.css`) – nie Google Fonts direkt |
| `<tool>/index.html` | nur Loader mit `data-tool="<tool-id>"` |
| `<tool>/CHANGELOG.md` | CHANGELOG des Tools (neueste Version oben) |
| `<tool>/README.md`, `LICENSE` | Beschreibung und Lizenz je Tool |
| `_vorlage-tool/` | Vorlage für einen neuen Tool-Ordner |

## Supabase

- Projekt **RIEMER-Lizenzen** (Frankfurt), ID `hcluxhlvshydnncprpbl`.
- Wichtige Tabellen: `tools` (Katalog), `tool_versions` (Versionen je Kanal `dev`/`beta`/`stable`
  und Edition), `tool_sources` (Quellen-ZIPs je Version), `tool_editions`, `licenses`,
  `license_devices`, `license_log`, `translations` (DE→EN), `tool_backups`, `tool_state`.
- Edge Functions: `license-check` (Auslieferung), `license-admin` (Admin), `tool-backup` (zentrales Backup).
- Schemaänderungen nur als Migration (`apply_migration`), vorher Tabellen ansehen,
  danach `get_advisors` (security) prüfen. Nie RLS abschalten.
- Lesende Abfragen sind frei; schreibende SQL-Befehle auf Produktivdaten
  (`licenses`, `tool_versions`, `tools`) nur nach Rückfrage.

## Ablauf: neue Tool-Version (Kurzfassung)

Die Details stehen im privaten Repo (`riemer-toolbox-src/CLAUDE.md`). In diesem Repo gehört dazu:

1. `<tool>/CHANGELOG.md` – Eintrag `## V#.# · TT.MM.JJJJ` (bei DEV/BETA mit ` · DEV`/` · BETA`),
   Abschnitte **Neu / Geändert / Behoben / Entfernt**, aus Sicht der Nutzer.
2. Bei neuem Tool: Loader-Ordner `<name>.ritl/` (Kopie von `muster.ritl/index.html`, `data-tool` anpassen),
   README, LICENSE; Zeile in der Tool-Tabelle der `README.md` erst bei Freigabe (`listed=true`).
3. Commit-Nachricht: `NAME.ritl V#.# (DEV): kurze Beschreibung`.

## Git

- Entwickeln auf dem vorgegebenen Feature-Branch, nie direkt auf `main` pushen ohne Auftrag.
- Pull Request nur auf ausdrücklichen Wunsch.
- **Vor jedem Merge nach `main` immer eine Vorschau zum Testen schicken** und erst nach Peters OK mergen:
  Stand auf den Feature-Branch pushen, dann Link mit Commit-SHA schicken:
  `https://raw.githack.com/golfsburg/riemer-toolbox/<SHA>/<pfad>` (z. B. `…/lizenz/admin.html`).
  Gilt für Seiten aus diesem Repo (Admin, Startseite, myTOOLBOX). Geschützte Tools testet Peter als
  DEV-Version im Admin mit **↗ Öffnen** bzw. mit einer Lizenz im Kanal Dev.
  Hinweis: Der Lizenz-Loader (`license-check`) erlaubt githack nicht als Herkunft – Tools über den Loader nur live testen.
- Vor dem Commit: `git diff --stat` ansehen – keine großen HTML-Dateien geschützter Tools,
  keine `.env`, keine Exporte aus Supabase.

## Prüfen

- Startseite, `my/` und Loader lokal im Browser (Playwright/Chromium) öffnen:
  Hell/Dunkel, 1920/1280/390 px, keine Konsolenfehler.
- Gemeinsame Bausteine (`ritl-ui`, `ritl-bk`, `lizenz/loader.js`) betreffen alle Tools –
  Änderungen nur mit Versionssprung und CHANGELOG, RITL-UI zuerst als Kanal **Dev**.
