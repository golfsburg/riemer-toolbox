# CHANGELOG – ritl-bk (RIEMER Tools)

Zentraler Backup-Baustein aller RIEMER Tools (Regel S-17). Neueste Version oben.

## 2.3 · 20.11.2026 · DEV
**Neu**
- Fenster „Backup“ › 02 OneDrive & SharePoint: Unter dem Status steht immer der **Pfad des verknüpften Ordners**. Browser geben aus Sicherheitsgründen nur den Ordnernamen preis (Anzeige `…\Ordnername`); mit ✎ lässt sich der volle Pfad einmal je Gerät eintragen (gespeichert unter `riemer-<prefix>-ordnerpfad`, nur für diesen Ordner). Keine Adapter-Änderung nötig – rückwärtskompatibel zu 2.0–2.2.

## 2.2 · 19.11.2026 · DEV
Zusammenführung: 2.1 (unten) plus `dateiAlt` aus der ZEIT-Umbenennung (dort zunächst ebenfalls als „2.1“ bezeichnet).

**Neu**
- Adapter-Option **`dateiAlt`** (Liste früherer Namen der Backup-Datei) für umbenannte Tools: Dateien mit altem Namen erscheinen im Fenster „Backup“ unter den älteren Sicherungen und lassen sich wiederherstellen. Bei **B · Ordner** liest der Baustein die alte Datei, solange es die neue noch nicht gibt; geschrieben wird nur unter dem neuen Namen, die alte Datei bleibt unverändert liegen. Erster Einsatz: ZEIT.ritl V3.8 (vorher Zeiterfassung.ritl).

## 2.1 · 19.11.2026 · DEV
Alle Neuerungen sind **optional** – Tools ohne die neuen Angaben verhalten sich wie mit 2.0.

**Neu**
- **Erst abgleichen, wenn das Tool bereit ist** (`bereit`): Tools, die ihre Daten erst nach dem Start laden, gleichen erst danach mit dem Server bzw. Ordner ab und sichern erst dann zentral.
- **Ansichtswerte zählen nicht als Änderung** (`ohneSha`, `norm`): z. B. Modul, Ansicht oder auf-/zugeklappte Bereiche lösen keinen neuen Stand am Server, im Ordner oder in der Historie aus – gesichert werden sie trotzdem.
- **Meldung nach dem Übernehmen** (`nachAnwenden`, Ereignis `ritlbk:applied`): kommt erst, wenn auch die Dateien vom Server bzw. der Stand aus dem Ordner fertig übernommen sind.
- **Eigene Abschnitte im Fenster „Backup“** (`extra`): Tools zeigen z. B. „04 Dateiablage“ oder „Komplett-Paket“ direkt im Fenster, mit eigenen Knöpfen.
- **Ältere Dateien anderer Tool-Kennungen laden** (`alias`).
- **Abgleich auf Knopfdruck** (`RITLBK.sync()`): holt bzw. sendet sofort den aktuellen Stand (B · Ordner, C · Server) oder sichert zentral (A · Lokal).
- **Ordner-Verknüpfung aus einer anderen Datenbank des Browsers übernehmen** (`alt.idbFsDb`, `alt.idbFsStore`, `alt.idbFsKey`) – einmalig, der Ordner muss nicht neu verknüpft werden.
- **Tools ohne lokale Speicherung** (`fluechtig`): jeder Start gilt für den Abgleich wie ein neues Gerät und übernimmt den Stand still.

**Geändert**
- Dateien am Server werden nach **Prüfsumme** verglichen (bisher Größe und Name) – eine geänderte Datei gleicher Größe wird jetzt auch hochgeladen bzw. geholt.
- Ein **leerer Stand** (ohne eigene Daten) ersetzt nie von selbst einen vorhandenen Stand in der zentralen Historie, am Server oder im Ordner. „Meinen Stand behalten“ und „Jetzt im Ordner sichern“ gehen weiter.
- Ein Gerät ohne eigene Daten übernimmt bei einem Konflikt den Stand am Server still, statt zu fragen.
- „Backup wiederherstellen“ lädt zuerst die Dateien und übernimmt danach die Daten – das Tool findet seine Dateien gleich vor.

**Behoben**
- Dateien, die kein Backup sind (z. B. ein exportiertes Set), werden beim Wiederherstellen mit einer klaren Meldung abgelehnt.
- Zentrales Sichern bricht nicht mehr mit einem Fehler im Hintergrund ab, solange das Tool noch lädt.
- Die Fenster „Backup“ und „Backup einrichten“ stehen auch in Tools mittig, die alle Abstände zurücksetzen.

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
