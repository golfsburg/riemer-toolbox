# LV.ritl – LV-Manager

Leistungsverzeichnisse nach ÖNORM A 2063 (LB Haustechnik): Projekte mit Ausschreibungs-LVs und Bieterangeboten,
Vorlagen mit Vorlagen-LVs, Leistungsbeschreibungen (.onlb) und Positionsvorlagen, Materiallisten, Preislisten,
Angebotskalkulation sowie Export als ONLV (Ausschreibungs- und Angebots-LV), TXT, HTML und Excel.

**Online:** https://golfsburg.github.io/riemer-toolbox/lv-manager/
**Lizenz:** `LicenseRef-Proprietary` – siehe [LICENSE](LICENSE)

> 🔒 Geschütztes Tool: `index.html` ist nur die Schlüssel-Abfrage. Der eigentliche Code wird nach
> erfolgreicher Lizenzprüfung vom Server geladen – siehe [`../lizenz/LIZENZVERWALTUNG.md`](../lizenz/LIZENZVERWALTUNG.md).

## Funktionen
- PROJEKTE (Projekt → Ausschreibungs-LV → Bieterangebote) und VORLAGEN (Vorlagenordner → Vorlagen-LVs, Leistungsbeschreibungen, Positionsvorlagen)
- Einheitlicher Import-Assistent für JSON-Datenbanken, Backups, Pakete, `.onlv` und `.onlb`
- ONLV-Export nach ÖNORM A 2063:2021 – Ausschreibungs-LV ohne Preise, Angebots-LV mit Preisanteilen, Summen und USt
- Backup & Restore je Bereich, optionaler Abgleich mit einem OneDrive-/SharePoint-Sync-Ordner (Chrome/Edge)

## Wo liegen die Daten?
Alle LVs, Projekte, Vorlagen und Preislisten bleiben **im Browser** (IndexedDB) – an den Lizenzserver geht nur die Lizenzprüfung.

- Der Speicher gehört zur Adresse, unter der das Tool geöffnet wird. Daten aus einer lokal geöffneten Datei
  (`file://…`) sind in der Online-Version nicht sichtbar. Umstieg: in der lokalen Datei je Bereich **Backup**,
  online **Importieren** (der Import-Assistent erkennt die Backups).
- Alle Tools der Toolbox teilen sich dieselbe Adresse (`golfsburg.github.io`). Browser-Daten dieser Seite zu löschen,
  löscht auch die LV-Daten – vorher Backup.
- Mehrere Geräte bzw. ein Team arbeiten über den gemeinsamen OneDrive-/SharePoint-Ordner (Menüband *OneDrive / SharePoint*).

## Technik
- Eine HTML-Datei mit React 18, SheetJS und Tabler-Icons inline; JSX ist vorkompiliert (kein Babel im Browser).
- Quellen je Version in Supabase (`tool_sources`): `app.jsx`, `shell.html`, `build.js`.

© 2026 Peter Riemer
