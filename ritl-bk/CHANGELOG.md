# CHANGELOG – ritl-bk (RIEMER Tools)

Zentraler Backup-Baustein aller RIEMER Tools (Regel S-17). Neueste Version oben.

## 2.12 · 25.11.2026 · DEV
**Neu**
- **Tool-Typ „Dokument“** (Adapter `typ:'dokument'`, später `backup.typ` vom Server – der Server hat dann Vorrang): Projekte sind eigene Dateien (ritl-doc 1.0, „Speichern unter …“). Das Backup sichert nur noch die **Einstellungen** des Tools und die Liste **„Zuletzt geöffnet“** (ohne Dateizugriff) – keine Stufen datenbank/storage, B · Ordner ist keine Datenbank.
- „Backup einrichten“ zeigt bei Dokument-Tools nur die Stufe settings (A/B/C wie lizenziert) und den Hinweis „Projekte speichern Sie als eigene Datei (Speichern unter …)“ mit „Ordner der Firma öffnen ↗“; das Backup-Fenster zeigt denselben Hinweis.
- Bei Dokument-Tools öffnet sich „Backup einrichten“ nicht von selbst (nichts zu wählen) – der Startbildschirm von ritl-doc hat Vorrang.
- `RITLBK.typ` und `RITLBK.stand().typ`.

**Geändert**
- Typ „datenbank“ (Standard) verhält sich genau wie 2.11.

## 2.11 · 24.11.2026 · DEV
**Neu**
- **SharePoint-Ordner der Firma zentral vorgeben:** Im Lizenz-Admin lässt sich je Lizenz (und je Tool abweichend) der Link zum SharePoint-Ordner und sein Name hinterlegen. Das Tool zeigt ihn unter „Backup einrichten“ und im Backup-Fenster (02 OneDrive & SharePoint) mit **„Ordner der Firma öffnen ↗“** und einer kurzen Anleitung: in SharePoint „Synchronisieren“ bzw. „Verknüpfung zu OneDrive hinzufügen“, dann „Ordner verknüpfen …“.
- **Prüfung beim Verknüpfen:** Heißt der verknüpfte Ordner anders als vorgegeben, kommt ein Hinweis, und der Kasten wird orange („Verknüpft ist … – vorgesehen ist …“).
- Geschrieben wird weiter in den lokal synchronisierten Ordner (Chrome/Edge am Computer) – der Link ist nur die Vorgabe zum Öffnen und Prüfen.

**Geändert**
- Server: `backup.ordner_vorgabe` (`link`, `name`, `quelle` = `tool` oder `lizenz`) kommt mit jeder Backup-Einstellung (`cfg_get`, `state_head`, …).
- Am Lizenzserver für den Kanal Dev hinterlegt.

## 2.10.1 · 24.11.2026 · DEV
**Behoben**
- **Start-Vorrang: C3 zählt als Stufe 3.** In 2.10 wurde der Server mit Dateien (C3) wie Stufe 2 gewertet; dadurch gewann bei A3 + C3 fälschlich der Browser und überschrieb den Stand am Server.
- **Ein Browser ohne eigene Daten (neues Gerät) gewinnt nie.** In 2.10 konnte er Ordner bzw. Server mit einem leeren Stand überschreiben und die Dateien am Server löschen. 2.10 wurde am Lizenzserver sofort zurückgenommen (Dev lieferte wieder 2.9.1).
- Geprüft mit einem kompletten Projekt (8 Unterprojekte, 5 Originaldateien, eigene Vorlage, Oberfläche): Neuladen, leeres Gerät über den Server (C3) und über den Ordner (B3) – jeweils alles gleich wie vorher.

## 2.10 · 24.11.2026 · DEV
**Geändert**
- **Start und Neuladen: Vorrang nach Stufe.** Die Datenquelle mit der höchsten Stufe (1 settings · 2 datenbank · 3 storage) gibt den Stand vor, bei gleicher Stufe gilt **C (Server) vor B (Ordner) vor A (Browser)** – auch wenn ihr Stand älter ist als der einer anderen Datenquelle. Nur diese Datenquelle wird beim Start geholt; danach bekommen die anderen Datenquellen genau diesen Stand. Bisher glichen Ordner und Server unabhängig voneinander ab, und es gewann zufällig, wer zuletzt fertig war.
- Hat dieser Browser Änderungen, die die vorrangige Datenquelle noch nicht kennt, und wurde sie inzwischen auch geändert, kommt wie bisher der Konfliktdialog – nichts wird still überschrieben.

**Behoben**
- Beim Start wartet der Abgleich jetzt, bis die Datei im Ordner gelesen ist.

## 2.9.1 · 23.11.2026 · DEV
**Behoben**
- **Kein Backup-Fenster mehr bei jedem Start:** Bei Datenquelle Ordner (Datenhoheit) öffnete sich „Backup einrichten“ nach jeder Lizenzprüfung und jedem Neuladen, solange auf dem Gerät kein Ordner verknüpft war – auch nach „Esc“. Jetzt erscheint es dort nur beim ersten Start je Gerät; danach kommt höchstens einmal am Tag der Hinweis „… noch kein Ordner verknüpft: Backup › „Ordner verknüpfen …““.
- Braucht der Browser nach einem Neustart eine Bestätigung für den Ordner, öffnet sich nicht mehr das Backup-Fenster, sondern es kommt höchstens einmal am Tag der Hinweis „Backup › „Zugriff erneuern““. Das Backup-Symbol am Knopf zeigt den Zustand weiter in Orange.
- Schließen von „Backup einrichten“ mit Esc zählt wie „Später“ – das Fenster kommt beim nächsten Start nicht erneut.
- Der Tages-Hinweis gilt je Tool (nicht ein Hinweis für alle Tools zusammen).

**Geändert**
- Regel „Nie bei jedem Start“ in der Anleitung (`README.md`) und im Skill: „Backup einrichten“ öffnet sich von selbst höchstens einmal je Gerät.
- Am Lizenzserver für den Kanal Dev hinterlegt (wirkt in allen Tools mit Dev-Lizenz ohne Neuveröffentlichung).

## 2.9 · 22.11.2026 · DEV
**Behoben**
- Nicht mehr gebrauchte Dateien werden zuerst am Server gelöscht – ein volles Kontingent blockiert das Hochladen neuer Dateien nicht mehr. (Eintrag nachgetragen; die Fassung war am Server und in MESH.ritl, aber nicht im Repo.)

## 2.8 · 21.11.2026 · DEV
**Behoben**
- **Dateien über den Server auf iPhone, iPad und Mac (Safari):** Bei Backup-Stufe 3 über den Server (z. B. C3) kamen Dateien, die über „Datei wählen“ hinzugefügt wurden, leer am Server an – das Tool meldete „Datei „…“ konnte nicht hochgeladen werden“ und der Backup-Knopf wurde rot. Jetzt wird jede Datei vor dem Hochladen vollständig gelesen und mit Inhalt gesendet.
- Eine Datei, die auf dem Gerät nicht mehr lesbar ist (z. B. Originaldatei gelöscht), bricht den Abgleich nicht mehr ab: Sie wird übersprungen, alle anderen Dateien und die Daten werden gesichert. Hinweis: „Datei „…“ ist auf diesem Gerät nicht mehr lesbar und wurde nicht an den Server gesendet – bitte die Datei im Tool neu hinzufügen.“
- Lokale Sicherung mit Dateien (Stufe 3) überspringt nicht lesbare Dateien statt abzubrechen.

**Geändert**
- Neue Dateien werden in der Dateiablage des Browsers mit ihrem Inhalt gespeichert (nicht nur als Verweis auf die Originaldatei). Gilt auch für die Vorlage `ritl-files.js`.
- Die Fehlermeldung beim Hochladen nennt den HTTP-Status bzw. „keine Verbindung“.

## 2.7 · 20.11.2026 · DEV
**Geändert**
- **Alle Datenquellen gleichzeitig aktiv:** A · Lokal, B · Ordner und C · Server laufen immer zusammen, jede in ihrer eigenen Stufe – z. B. **A3 + B2 + C1**: alles inklusive Dateien in diesem Browser, die Arbeitsdaten in der Datei im OneDrive/SharePoint-Ordner (Datenhoheit), über den Server nur die Einstellungen zwischen den Geräten. Die Spalte „aktiv“ entfällt.
- „Backup einrichten“ zeigt darunter, was jede Datenquelle bekommt („A: alles inkl. Dateien · B: Arbeitsdaten in der Ordner-Datei · C: nur Einstellungen über den Server“). Übernehmen ohne Rückfrage zum Wechsel.
- Der Server nimmt nur noch an, was für ihn eingestellt ist (C-Stufe; bei B ohne C nur Einstellungen) – auch zentrale Historie und Dateien.

## 2.6 · 20.11.2026 · DEV
**Neu**
- **Stufe je Datenquelle einzeln wählbar:** In „Backup einrichten“ hat jede Zeile (A · Lokal, B · Ordner, C · Server) ihre eigene Auswahl 1/2/3 – z. B. A3, B2 und C1 gleichzeitig eingestellt. Die Stufen bleiben je Datenquelle gemerkt (am Server, für alle Geräte).
- **Spalte „aktiv“:** wählt, welche Datenquelle gilt. Beim Wechsel gilt sofort die gemerkte Stufe dieser Datenquelle. Darunter „Aktiv: C1 … · gemerkt für den Wechsel: A3, B2“.
- Gesperrte Stufen je Zeile weiter nach der Lizenz (z. B. A3 · B2 · C1).

## 2.5 · 20.11.2026 · DEV
**Geändert**
- **„Backup einrichten“ als Raster Datenquelle × Stufe:** statt zwei getrennter Listen (01 Datenquelle, 02 Stufe) ein Raster mit allen Kombinationen A1 … C3. Jede Kombination ist einzeln frei oder gesperrt – genau nach der Lizenz (z. B. A3 · B2 · C1: B3, C2 und C3 gesperrt), mit Grund im Tooltip. B1 entfällt („–“, bei B enthält die Datei immer die Arbeitsdaten). Die wirksame Kombination ist mit „wirksam“ markiert, darunter steht die gewählte Kombination im Klartext.
- „Übernehmen“ lehnt eine gesperrte Kombination mit Hinweis ab.
- Abschnitt „Ordner · OneDrive & SharePoint“ ist jetzt 02 (vorher 03).

## 2.4 · 20.11.2026 · Stabil
**Neu**
- **Stufe je Datenquelle:** Die Lizenz kann für jede Datenquelle eine eigene höchste Stufe festlegen (z. B. A3 · B2 · C1). „Backup einrichten“ zeigt oben „Lizenz: höchstens A3 · B2 · C1“, sperrt nicht angebotene Datenquellen („durch die Lizenz nicht angeboten“) und begrenzt die Stufen passend zur gewählten Datenquelle („durch die Lizenz begrenzt (C bis Stufe 1)“). Beim Wechsel der Datenquelle wird eine zu hohe Stufe automatisch auf das Erlaubte gesenkt.
- `RITLBK.stand()` liefert zusätzlich `matrix`.

**Geändert**
- Lizenzen ohne eigene Matrix verhalten sich wie bisher (alle Datenquellen bis zum Maximum mit derselben Stufe).

## 2.3 · 20.11.2026 · DEV
**Neu**
- **Pfad des verknüpften Ordners** im Fenster „Backup“ › 02: Der Browser nennt nur den Ordnernamen – über ✎ wird der volle Pfad einmal je Gerät eingetragen.

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
