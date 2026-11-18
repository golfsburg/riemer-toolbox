# Backup-Stufe „storage“ (RIEMER Tools)

Regel: In **jedem** RIEMER Tool ist unter **01 Lokal** die Stufe `storage` wählbar: `datenbank` + alle hochgeladenen Dateien.
Zentral (Server) bleibt `storage` vorerst gesperrt („nur lokal, zentral folgt später“).

Vorbild: MUSTER.ritl V3.0 (Pilot). Umgesetzt: STAKE.ritl V1.8, DRIVE.ritl V1.7, PPTX.ritl V2.9, PDF.ritl V1.5 (je DEV).
PPTX/PDF (gemeinsames Backup-Modul `BK_CONF`): storage bettet das Komplett-Paket (.zip mit allen Originalen) als `daten.paket` ein; Wiederherstellen über `M.addFiles`.

## Einbau in ein Tool

1. **Dateiablage:** `ritl-files.js` vor den Backup-Block kopieren, `<name>` ersetzen (`muster` → IndexedDB `muster_files`, Ereignis `muster:change`).
2. **Uploads umstellen:** Jede hochgeladene Datei (Bild, PDF, Plan, Logo …) mit `await RITLF.put(file,{ref:'<wo sie hängt>'})` speichern; in den Daten nur die `id` merken. Anzeigen über `(await RITLF.get(id)).blob` → `URL.createObjectURL`.
   Tools, die Dateien schon als Data-URL in den Daten halten, dürfen das behalten – dann ist `storage` gleich `datenbank` + Dateiablage (leer). Neue Uploads immer über RITLF.
3. **Backup:**
   - `STUFEN` um `storage` ergänzen.
   - `async function stufeObjA(st)` neben `stufeObj`: bei `storage` → `stufeObj('datenbank')`, `ritl.stufe='storage'`, `daten.dateien = await RITLF.dump()`.
   - `backupObj()` wird `async` und ruft `stufeObjA(CFG.lokal.stufe)`; alle Aufrufe mit `await` (Download, Ordner, automatisch, Speicherort).
   - Zentral: `storage` nie senden (`CFG.zentral.stufe==='storage' ? 'datenbank' : …`).
   - `sizes()`: auch `storage` messen, `out.dateien = await RITLF.stats()`.
4. **Backup einrichten:** 01 Lokal zeigt `settings · datenbank · storage` (mit Anzahl Dateien und Größe); 02 Zentral zeigt `storage` gesperrt.
5. **Wiederherstellen:** Hat das Backup `daten.dateien`, im Bestätigungstext „Enthält n Datei(en) – die Dateiablage wird ersetzt.“ und danach `RITLF.load(d.dateien)`.
6. **Prüfen:** Datei hochladen → storage wählen → Backup speichern (Datei enthält `dateien` mit `b64`) → Datei löschen → Backup wiederherstellen → Datei ist wieder da und öffnet.

## Prompt für die Tool-Chats

> Backup-Stufe **storage** einbauen nach Skill /riemer-webapp-design, Abschnitt „Backup-Stufe storage“ (Baustein `riemer-toolbox/ritl-bk/ritl-files.js`, Anleitung `ritl-bk/README.md`, Vorbild MUSTER.ritl V3.0). Alle Uploads dieses Tools über RITLF speichern. Als neue DEV-Version veröffentlichen, CHANGELOG und Quellen-ZIP.
