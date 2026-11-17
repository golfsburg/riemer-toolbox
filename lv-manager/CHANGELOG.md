# CHANGELOG – LV.ritl (RIEMER Tools)

Leistungsverzeichnisse nach ÖNORM A 2063 mit Materiallisten, Bieterangeboten und ONLV-Export · #ritl_lv
Neueste Version oben. Versionen ≤ V9.2 nachträglich rekonstruiert (aus `tool_versions` und den Quellen-ZIPs).

## V9.3 · 17.11.2026 · DEV
**Geändert**
- Header über den zentralen Header RITL-UI: App-Bild 38 px, Eyebrow „LV nach ÖNORM A2063 · #ritl_lv“, `LV.ritl` mit Edition, DEV/BETA und Version · Datum; rechts Speichern (Chip), Anleitung, Hell/Dunkel, An-/Abmelden, Toolbox-Logo, „RIEMER Tools“.
- Footer sitzt immer am unteren Rand des Browserfensters; nur der Inhalt dazwischen scrollt.
- Farben nur noch über die Tokens der Farbkarte – die Farben je Lizenz (Corporate Design) greifen jetzt im ganzen Tool, auch in der XML-Vorschau, in den Tabellenköpfen und im App-Bild.
- Seitenränder 22 px wie in allen RIEMER Tools.

**Behoben**
- Farben je Lizenz wurden nicht angewendet: `</head>` in einem Text der Excel-Bibliothek lenkte die Einfügestelle des Lizenzservers um.

## V9.2 · 17.11.2026 · BETA
**Behoben**
- Das vom Lizenzserver eingefügte Skript (Toolbox-Logo, Abmelden) erschien als Text am Seitenende („İ“ in der Excel-Bibliothek verschob die Einfügestelle).
- Toolbox-Logo und DEV-Kennzeichen erscheinen in der Toolbox nur noch einmal.

## V9.1 · 13.11.2026
**Neu**
- RIEMER-Tools-Logo mit Link zur Toolbox vor dem Schriftzug „RIEMER Tools“.

## V9.0 · 12.11.2026
**Geändert**
- Kopfzeile nach RIEMER-Webapp-Design (Eyebrow mit Version und Datum, Editions-Kennzeichen), Schriften über `riemer-toolbox/fonts`.

## V8.9 · 12.11.2026
**Neu**
- Erste Version in der RIEMER Toolbox: Import-Assistent für JSON, ONLV und ONLB, Bereiche PROJEKTE/VORLAGEN mit Projekt- bzw. Vorlagen-Ansicht, Positionsvorlagen, Angebots-LV und Textfassung mit Preisen.
- Programmcode vorkompiliert (2,5 MB statt 5,3 MB, schnellerer Start).
