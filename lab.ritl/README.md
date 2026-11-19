# LAB.ritl – RIEMER Tools

Testfeld: RIEMER Tools als installierbare Web-App (PWA) – eigenes Fenster, Header in der Titelleiste, Vollbild, Start ohne Netz. #ritl_lab

**Online:** https://golfsburg.github.io/riemer-toolbox/lab.ritl/ (Lizenz mit Tool `lab-ritl`, Kanal Dev)

| Datei | Zweck |
| --- | --- |
| `index.html` | Anmeldeseite (Lizenz-Loader) + Manifest + Service Worker |
| `manifest.webmanifest` | Name, Symbole, `display: standalone`, Titelleiste (`window-controls-overlay`) |
| `sw.js` | Start ohne Netz: Anmeldeseite/Loader/Schriften und den letzten geladenen Tool-Stand zwischenspeichern |
| `icon-*.png`, `icon.svg`, `apple-touch-icon.png` | App-Symbole |

Der Tool-Code liegt im privaten Repo und kommt über den Lizenzserver.

© 2026 Peter Riemer – Alle Rechte vorbehalten.
