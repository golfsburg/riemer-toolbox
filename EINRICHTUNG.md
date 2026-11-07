# Einrichtung – RIEMER Toolbox auf GitHub

> Diese Datei ist nur für dich. Nach der Einrichtung kannst du sie löschen.

## 1. Repo anlegen
1. github.com → **New repository**
2. Name: `RIEMER-Toolbox` · Description: `RIEMER Toolbox – HTML-Tools für MEP/HLS & BIM`
3. **Public** (für GitHub Pages im Free-Plan nötig)
4. *Kein* README/License/.gitignore anhaken – kommt aus diesem Paket.

## 2. Dateien hochladen
- Einfach: Im leeren Repo **„uploading an existing file“** → Inhalt dieses Ordners hineinziehen → Commit.
- Oder per Git:
  ```bash
  cd RIEMER-Toolbox
  git init && git add . && git commit -m "Initial: RIEMER Toolbox"
  git branch -M main
  git remote add origin https://github.com/golfsburg/riemer-toolbox.git
  git push -u origin main
  ```

## 3. Tools einfügen
Für jedes Tool die fertige HTML-Datei als `index.html` in den Tool-Ordner legen
(`cs-dashboard/`, `trainingsuebungen/`, `fcpf-taktiktafel/`).
Lizenzen pro Tool prüfen – die Zuordnung im Paket ist nur ein Vorschlag.

## 4. GitHub Pages aktivieren
Settings → **Pages** → Source: *Deploy from a branch* → Branch `main` / `(root)` → Save.
Nach ~1 Minute erreichbar unter `https://golfsburg.github.io/riemer-toolbox/`

## 5. Eigene Domain tools.riemer.co (optional)
1. Datei `CNAME.example` in `CNAME` umbenennen (Inhalt: `tools.riemer.co`).
2. Beim DNS-Anbieter von riemer.co einen Eintrag anlegen:
   `CNAME  tools  →  golfsburg.github.io`
3. Settings → Pages → Custom domain `tools.riemer.co` → **Enforce HTTPS** anhaken.

> Hinweis: iCloud+ verwaltet nur die Mail-Einträge – DNS-Einträge setzt du beim Registrar/DNS-Hoster von riemer.co.

## Wichtig
- Öffentliches Repo = Quellcode für alle sichtbar, auch bei proprietärer Lizenz.
  Die Lizenz regelt die Nutzung rechtlich, verhindert aber kein Kopieren.
- Tools, die geheim bleiben sollen, nicht in dieses Repo legen.
