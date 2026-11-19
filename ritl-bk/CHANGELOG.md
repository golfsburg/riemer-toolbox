# CHANGELOG – ritl-bk (RIEMER Tools)

Zentraler Backup-Baustein aller RIEMER Tools (Regel S-17). Neueste Version oben.

## 2.0 · 19.11.2026 · DEV
**Neu**
- **Ein Baustein für alle Tools:** Backup-Knopf mit Symbol, Fenster „Backup“, „Backup einrichten“, Konfliktdialog, Dateiablage (RITLF), Ordner-Verknüpfung (OneDrive/SharePoint), zentrales Backup, Server als Datenbank (RITL-Sync), Ordner als Datenbank, Offline-Version und Admin-Vorschau in einem Block `<!--ritl-bk:start-->…<!--ritl-bk:end-->`. Das Tool liefert nur noch einen kleinen Adapter `window.RITL_BK`.
- **Neue Begriffe überall gleich:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings**, **2 · datenbank**, **3 · storage** – kurz z. B. C3, B2, A1.
- **„Backup einrichten“ neu:** oben „Lizenz: höchstens C3“ mit Kontingent; Auswahl von Datenquelle und Stufe; alles über dem Maximum ist gesperrt („· durch die Lizenz begrenzt“). „Übernehmen“ speichert die Wahl am Server – sie gilt für dieses Tool auf allen Geräten. „Vorgabe der Lizenz verwenden“ setzt die Wahl zurück.
- **Wechsel der Datenquelle** mit Rückfrage („Daten werden von … nach … übernommen“) und erstem Abgleich: nach C wird mit dem Server abgeglichen, nach B wird der Stand in den Ordner geschrieben bzw. von dort übernommen.
- **Fenster „Backup“:** jeder Stand der zentralen Historie hat 🗑 zum Löschen (mit Rückfrage), darunter die Belegung „x von y MB“ des Kontingents.
- **Neues Gerät ohne eigene Daten** übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage.
- Schnittstelle `window.RITLBK` für das Tool (z. B. Favoriten im Ordner teilen).

**Geändert**
- Mit Lizenz gelten Datenquelle und Stufe der Lizenz bzw. die Wahl des Kunden sofort; „Backup einrichten“ öffnet sich nur noch bei B ohne verknüpften Ordner (und ohne Lizenz beim ersten Start).
- Bei C gilt die gewählte Stufe auch für den Stand am Server (C1 gleicht nur Einstellungen ab, C3 auch die Dateien).

## 1.x (bis 19.11.2026)
- Bausteine zum Kopieren: `ritl-files.js` (Dateiablage RITLF) und Anleitungen in `README.md` (storage, RITL-Sync, Datenquelle je Lizenz). Jedes Tool hatte seinen eigenen Backup-Code.
