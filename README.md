# RIEMER Toolbox

Sammlung browserbasierter HTML-Tools von Peter Riemer – für MEP/HLS-Planung, BIM-Workflows und mehr.
Alle Tools laufen direkt im Browser, ohne Installation.

🌐 **Online nutzen:** https://golfsburg.github.io/riemer-toolbox/

---

## Tools & Lizenzen

> ⚠️ **Jedes Tool hat seine eigene Lizenz.** Maßgeblich ist die `LICENSE`-Datei im jeweiligen Tool-Ordner.

| Tool | Beschreibung | Lizenz | Kommerzielle Nutzung |
|------|--------------|--------|----------------------|
| 🔒 [Trainingsmanager](trainingsmanager/) | Trainingsübungen, Taktiktafel & Bewegungsübungen als Animation | Proprietär · **Lizenzschlüssel erforderlich** | ❌ nur nach Vereinbarung |
| 🔒 [PV Tracker](https://pv.riemer.co/) | PV-Ertrag, Verbrauch, Autarkie & Kosten der eigenen PV-Anlage – Code im Repo [`golfsburg/we7`](https://github.com/golfsburg/we7) | Proprietär · **Lizenzschlüssel erforderlich** | ❌ nur nach Vereinbarung |
| 🔒 [PPTX.ritl](pptx.ritl/) | Präsentationen & Meetings: DECK.ritl (Folien aus Abschnitten) und TIMING.ritl (Agenda, Räume, Live-Modus) | Proprietär · **Lizenzschlüssel erforderlich** | ❌ nur nach Vereinbarung |
| 🔒 [PPTX Manager](pptx-manager/) | Präsentationen aus PowerPoint-Abschnitten zusammenstellen | Proprietär · **Lizenzschlüssel erforderlich** | ❌ nur nach Vereinbarung |
| 🔒 [MSX-Builder](msx-builder/) | Schnitte aus DWG/PDF/MSX/Revit-Platzhaltern in Hilti PROFIS MSE Importdateien (.msx) umwandeln | Proprietär · **Lizenzschlüssel erforderlich** | ❌ nur nach Vereinbarung |
| ▶ [Lieferschein-Manager](ls-manager/) | Lieferscheine automatisch auslesen und je Lieferant archivieren | Demoversion · frei testbar, **kein Lizenzschlüssel** | ❌ Firmenlizenz nach Vereinbarung |

### Lizenzarten im Überblick

| Lizenz | Nutzen | Verändern | Weitergeben | Kommerziell | Bedingung |
|--------|:------:|:---------:|:-----------:|:-----------:|-----------|
| **MIT** | ✅ | ✅ | ✅ | ✅ | Copyright-Hinweis beibehalten |
| **CC BY-NC 4.0** | ✅ | ✅ | ✅ | ❌ | Namensnennung, nicht kommerziell |
| **Proprietär** | 👁️ Ansicht | ❌ | ❌ | ❌ | Nutzung nur mit schriftlicher Erlaubnis |

Volltexte bzw. Vorlagen: siehe [`LICENSES/`](LICENSES/).

### 🔒 Geschützte Tools

Mit 🔒 markierte Tools sind nur mit gültigem Lizenzschlüssel (`RT-XXXX-XXXX-XXXX-XXXX`) nutzbar.
Der Tool-Code liegt nicht in diesem Repository, sondern wird nach der Lizenzprüfung vom Server geladen.
Lizenz anfragen: https://riemer.co

### ▶ Demoversionen

Mit ▶ markierte Tools sind als Demoversion ohne Lizenzschlüssel frei testbar.

---

## Struktur

```
RIEMER-Toolbox/
├─ index.html            ← Startseite (GitHub Pages)
├─ LICENSE               ← Hinweis: Lizenz je Tool
├─ LICENSES/             ← Lizenztexte/Vorlagen
├─ _vorlage-tool/        ← Kopiervorlage für neue Tools
└─ <tool-name>/
   ├─ index.html
   ├─ LICENSE
   └─ README.md
```

## Kontakt / Lizenzanfragen

Peter Riemer · https://riemer.co

© 2026 Peter Riemer
