# CHANGELOG – LS.ritl (RIEMER Tools)

Lieferscheine automatisch auslesen und je Lieferant im eigenen Archivordner ablegen · #ritl_ls
Tool-ID `ls-manager` · Download-Datei `RIEMER-Tools_LS-Manager_V#.#.html`
Neueste Version oben. Versionen ≤ V1.0 nachträglich rekonstruiert (Repo-Historie golfsburg/riemer-toolbox, `tool_versions`).

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
