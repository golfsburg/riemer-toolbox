# CHANGELOG – MSX-Builder (RIEMER Tools)
============================================

Start: index.html im Browser öffnen (Chrome/Edge/Firefox) oder auf GitHub Pages ablegen.
Beim Öffnen wird die Beispielzeichnung „Beispiel_Schnitt.dxf“ geladen.

## V5.9.6 · 26.11.2026 · DEV
**Geändert**
- **Höhe des Modellbereichs:** Die Zeichnung wächst beim Ziehen wieder mit und wird zentriert in die Fläche eingepasst (statt fest an der oberen Ecke zu stehen wie in V5.9.4/5.9.5). Dabei wird höchstens einmal pro Bild neu gezeichnet. Das sichere Beenden des Ziehens aus V5.9.5 bleibt.

## V5.9.5 · 26.11.2026 · DEV
**Behoben**
- **Griff der Modellhöhe „klebte“ an der Maus:** Das Ziehen endet jetzt zuverlässig – beim Loslassen (auch außerhalb des Griffs oder des Fensters), bei Fensterwechsel und sobald die Maus ohne gedrückte Taste bewegt wird. Bewegung und Ende werden am ganzen Dokument verfolgt, nicht nur am Griff.
- Die Spalte verschiebt sich beim Ziehen nicht mehr von selbst unter der Maus (Scroll-Verankerung des Browsers abgeschaltet).

## V5.9.4 · 26.11.2026 · DEV
**Behoben**
- **Höhe des Modellbereichs ändern:** Beim Ziehen am Griff (und mit den Pfeiltasten) bleiben Maßstab und Ausschnitt der Zeichnung jetzt unverändert – die Fläche wächst oder schrumpft nur nach unten. Vorher wurde das Modell bei jedem Zwischenschritt neu berechnet und um die Mitte neu eingepasst, die Zeichnung wanderte und wirkte wie skaliert. Das Raster wird erst beim Loslassen aktualisiert.

## V5.9.3 · 26.11.2026 · DEV
**Geändert**
- **Höhe des Modellbereichs umgebaut:** Der Griff unter dem Modell folgt jetzt genau der Maus – ohne Sprünge und ohne die bisherigen Grenzen (vorher höchstens ca. 95 % der Spalte, mindestens 240 px). Es gibt nur noch **eine** Höhe, sie gilt fixiert wie frei, bleibt beim Ändern der Fenstergröße unverändert und wird gemerkt. Doppelklick auf den Griff setzt auf die Standardhöhe zurück (fixiert: ca. 60 % der Fensterhöhe).

## V5.9.2 · 26.11.2026 · DEV
**Geändert**
- **Scrollen:** Ist der Inhalt eines Bereichs (Liste, Tabelle, Projektbaum, Spalte) am Ende oder gar nicht scrollbar, scrollt das Mausrad jetzt die ganze Seite weiter. Dasselbe gilt für die Werkzeugleiste: Sie schiebt sich seitlich, solange sie überläuft, danach läuft die Seite weiter. Dialoge bleiben davon ausgenommen.

## V5.9.1 · 26.11.2026 · DEV
**Geändert**
- **Scrollen (R-15):** Der Kopfbereich läuft beim Scrollen aus, die Werkzeugleiste der Rohrliste (Bereich 08) bleibt oben stehen. Auf dem Handy ist sie einzeilig und seitlich wischbar. Das Mausrad über der Leiste schiebt nur die Leiste und nie die ganze Seite. Innere Listen und Dialoge reichen das Scrollen nicht mehr an die Seite weiter.

## V5.9.0 · 25.11.2026 · DEV
**Neu**
- **Projekte als eigene Datei:** Ein MSX-Projekt ist jetzt eine Datei, die du speicherst – z. B. „Haus A.msx.ritl“. Darin steckt alles: Bereich 01 mit Projektname, allen Ordnern und Unterprojekten, Anzahl je Unterprojekt und dem Arbeitsstand jedes Unterprojekts (Erkennung, Auswahl, manuell gezeichnete Objekte, Ausschnitt), dazu Vorlage, weitere Rohrnormen, Revit-Zuordnung, „Texte EIN/AUS“, „Anzahl im Namen exportieren“ und **alle importierten Originaldateien** (DWG, DXF, PDF, Bilder, MSX, .mspx, ZIP). So kannst du mehrere Projekte parallel führen, weitergeben und archivieren – beim Öffnen ist das Projekt vollständig wieder da.
- **Neu · Öffnen … · Speichern · Speichern unter …** oben im Header, dazu Strg+S, Strg+Umschalt+S und Strg+O. Der Projektname steht im Titel, ein „•“ zeigt ungespeicherte Änderungen. Zoomen oder Verschieben der Ansicht allein zählt nicht als Änderung.
- **Startbildschirm** beim Öffnen: „Neues Projekt“, „Öffnen …“ und „Zuletzt geöffnet“ (in Chrome/Edge mit einem Klick wieder offen).
- **Nichts geht verloren:** Ungespeicherte Änderungen werden laufend zwischengespeichert und beim nächsten Start zum Wiederherstellen angeboten. Vor Neu, Öffnen und Schließen kommt eine Warnung, wenn noch nicht gespeichert ist.
- **Große Projekte:** Ab 150 MB Originaldateien erscheint einmal der Hinweis „Großes Projekt“ (Speichern dauert länger). Ab 300 MB wird nur noch alle 5 Minuten zwischengespeichert, damit die Arbeit flüssig bleibt.
- **Bisherigen Stand übernehmen:** Liegt in diesem Browser noch ein Projekt aus der bisherigen Fassung (Backup-Stufe 3 · storage) bzw. eine eigene Vorlage, Rohrnormen oder Revit-Zuordnung, bietet MSX.ritl beim ersten Start an, alles als „MSX – übernommen.msx.ritl“ zu speichern – auch später über Backup › „Bisherigen Stand übernehmen …“ (dort auch aus der Ordner-Sicherung Backup_MSX-ritl.json). Die bisherigen Daten im Browser werden dabei nicht gelöscht.
- Chrome/Edge speichern direkt in die geöffnete Datei; Safari, Firefox, iPhone und iPad speichern als Download mit gleichem Namen.

**Geändert**
- **Warum die Umstellung:** Bisher gab es in MSX.ritl genau ein Projekt je Browser, das über das Backup (Stufe 3) mit allen Originalen gesichert und abgeglichen wurde. Jetzt ist jedes Projekt eine eigene Datei auf deinem Gerät bzw. in deinem Ordner (OneDrive/SharePoint) – nie am Server.
- **Backup** sichert nur noch die Einstellungen (Hell/Dunkel, Sprache, Ansichten, Voreinstellungen, Werkzeug- und Bildleiste, Filter, Bildauswertung) und die Liste „Zuletzt geöffnet“. Vorlage, weitere Rohrnormen, Revit-Zuordnung, „Texte EIN/AUS“ und „Anzahl im Namen exportieren“ gehören jetzt zum Projekt.
- **Neu** startet mit der Standardvorlage und einem leeren Unterprojekt. Eine eigene Vorlage lädst du im Bereich 03 – oder du öffnest ein bestehendes Projekt und speicherst es mit „Speichern unter …“ als neues.
- Nach dem Neuladen wird das Projekt nicht mehr still aus dem Backup geladen, sondern über den Startbildschirm bzw. den Zwischenspeicher geöffnet.
- Hilfe um „Projekt als Datei“ ergänzt, „Backup“ angepasst.

**Hinweis**
- Projekte, die nur am Server lagen (Backup C · Server mit Stufe 3 · storage), werden beim Umstieg nicht automatisch übernommen. Auf jedem Gerät, auf dem das Projekt zuletzt offen war, liegt es aber noch im Browser und wird beim ersten Start angeboten. Sonst vorher in V5.8.9 auf einem Gerät öffnen (es kommt dann vom Server) und danach auf V5.9 umsteigen.

## V5.8.9 · 24.11.2026 · DEV
**Behoben**
- **Backup Stufe 3 über den Server: keine Originaldatei geht mehr verloren.** Beim Aufräumen nicht mehr verwendeter Dateien konnte eine gerade importierte Datei (z. B. Bild aus der Zwischenablage, ausgerichtetes Bild, neue Zeichnung) gelöscht werden, bevor sie dem Unterprojekt zugeordnet war. Das Unterprojekt kam danach ohne Originalzeichnung zurück. Frisch importierte Dateien werden jetzt nicht aufgeräumt.
- Nach dem Neuladen heißt die eigene Vorlage wieder genau wie vorher (ohne Zusatz „(gespeichert)“).
- „Texte EIN/AUS“ im Modellbereich gehört jetzt zum Arbeitsstand und kommt auch über den Ordner (Datenquelle B) auf jedes Gerät mit.
- Geprüft: Neuladen sowie Wiederherstellen auf einem leeren Gerät über Server (C3) und Ordner (B3) ergeben denselben Stand – Projekt mit allen Unterprojekten und ihrem Arbeitsstand, alle Eingabedateien, Vorlage, Rohrnormen, Revit-Zuordnung, Oberfläche, Ausschnitt und Auswahl.

## V5.8.8 · 24.11.2026 · DEV
**Behoben**
- **Kein falscher Konfliktdialog nach dem Neuladen:** Die Einstellungen der Bildauswertung standen im Backup bis zum ersten Speichern als „leer“ und danach mit ihren Werten. Dadurch galt der Browser nach jedem Neuladen als geändert, und Server bzw. Ordner fragten „Welcher Stand soll gelten?“, obwohl nichts geändert war.

## V5.8.7 · 24.11.2026 · DEV
**Behoben**
- **Jede Änderung wird gesichert:** Auch das Auswählen von Objekten, das Auf- und Zuklappen der Bereiche 01–11, „Fixiert“ und die Höhe des Modellbereichs (Griff ziehen, Doppelklick, Pfeiltasten) lösen jetzt das automatische Backup aus. Bisher kamen diese Änderungen erst mit der nächsten anderen Änderung ins Backup.

## V5.8.6 · 24.11.2026 · DEV
**Geändert**
- Die Ansichts-Chips **+ / − / Einpassen / Zoom sperren / Fixiert** stehen jetzt in der Kopfzeile von **07 Modellbereich** (neben „.msx herunterladen“).
- Der Griff unten am Modellbereich ändert die Höhe jederzeit – nicht mehr nur bei freigegebenem Zoom.

**Behoben**
- **Größenänderung des Modellbereichs läuft flüssig:** Beim Ziehen am Griff und beim Ändern der Fenstergröße wurde die Zeichnung schrittweise immer kleiner, weil der Ausschnitt bei jeder Größenänderung nur vergrößert wurde. Jetzt bleibt der gewählte Ausschnitt erhalten und wird nur an das Seitenverhältnis angepasst.
- Beim Ziehen wird höchstens einmal pro Bild neu gezeichnet (kein Ruckeln bei großen Zeichnungen); Fenster, Spalte oder auf-/zugeklappte Bereiche passen die Ansicht automatisch an.
- **Bereich 01 Projekt komplett im Backup (Stufe 3):** Auch „Anzahl im Namen exportieren“ und der auf-/zugeklappte Zustand von „Export & Import“ gehören jetzt zum Projekt und kommen bei Datenquelle B (Ordner) auf jedem Gerät mit. Projektname, Ordner, Unterprojekte, Anzahl je Unterprojekt und ihr Arbeitsstand waren bereits enthalten – geprüft mit Wiederherstellen auf einem leeren Gerät.

## V5.8.5 · 23.11.2026 · DEV
**Geändert**
- Die Einstellungen der Bildauswertung gehören zu den Einstellungen im Backup.

## V5.8.4 · 23.11.2026 · DEV
**Behoben**
- **Backup Stufe 3 (storage) sichert den kompletten Arbeitsstand:** Neben Projekt, Unterprojekten und Originaldateien jetzt auch die Voreinstellungen für neue Rohre (Rohrnorm, Funktion, Dämmstoff, Dämmdicke, Wasser), die Werkzeugleiste (aktives Werkzeug, Rohrnorm und -größe, Stabtyp, Fang, Ortho/Frei, Zoom gesperrt, Bild EIN/AUS), die Bildleiste (Rohr-Ø min/max, Linien, Strich, Schwelle, Lupe, Text erkennen), die Filter der Rohrliste sowie je Unterprojekt den Zoom-Ausschnitt und die Auswahl. Nach dem Wiederherstellen – auch auf einem anderen Gerät über den Ordner (B3) – sieht das Tool aus wie vorher.
- Diese Einstellungen bleiben jetzt auch beim Neuladen erhalten; bisher gingen sie verloren.
- Zoomen und Verschieben der Ansicht lösen das Sichern aus.

## V5.8.3 · 23.11.2026 · DEV
**Neu**
- **Texterkennung im Bildimport:** Beschriftungen wie „DN100“, „Ø50“, „O“ oder „0“ werden als Textzeilen erkannt (waagrecht und senkrecht). Kreise und Striche in Buchstaben und Ziffern werden nicht mehr als Rohre oder Linien ausgewertet.
- Erkannte Textzeilen erscheinen als gestrichelte Kästen und lassen sich mit **Texte EIN/AUS** ein- und ausblenden.
- In der Bildleiste schaltet **Text erkennen** das Ausfiltern ab bzw. wieder ein (wirkt mit „Neu erkennen“). Kleine Rohre nebeneinander bleiben Rohre.
- **Rahmenauswahl im Modellbereich:** Mit „Auswählen“ und **Shift + linker Maustaste** einen Rahmen ziehen. Nach rechts gezogen (durchgezogener Rahmen) werden alle Objekte gewählt, die ganz im Rahmen liegen; nach links gezogen (gestrichelt, grün) alle, die der Rahmen berührt. Gilt für Rohre, Lüftungs- und Kabelkanäle, Bauteile und Stäbe; die Auswahl kommt zur bestehenden dazu.

**Behoben**
- **Backup Stufe storage (A3/B3/C3) sichert den ganzen Arbeitsstand:** Unterprojekte ohne eigene Zeichnungsdatei – nur manuell gezeichnet oder aus einer .mspx bzw. einem Projekt-ZIP und bearbeitet – kamen beim Wiederherstellen nur als fertige MSX zurück oder fehlten ganz, wenn noch nichts exportbereit war. Jetzt werden Ausgangszeichnung und Bearbeitung (manuelle Objekte, Rohrliste, Nullpunkt, Einstellungen) gesichert und vollständig wiederhergestellt.
- Eine Änderung des Projektnamens löst jetzt ebenfalls das Sichern aus.

## V5.8.2 · 23.11.2026 · DEV
**Behoben**
- **Lupe vergrößert richtig:** Sie zeigte den Ausschnitt fast im Originalmaßstab. Jetzt vergrößert sie 4-fach gegenüber der aktuellen Ansicht, mit Fadenkreuz in der Mitte.
- Die Lupe bleibt am Rand des Modellbereichs vollständig sichtbar und wird nicht mehr angeschnitten.

## V5.8.1 · 23.11.2026 · DEV
**Neu**
- **Bild aus der Zwischenablage:** Strg+V fügt ein kopiertes Bild (z. B. Bildschirmausschnitt eines Plans) als neues Unterprojekt ein.
- **Gescannte PDF-Seiten:** Eine PDF ohne Vektoren wird automatisch wie ein Bild ausgewertet, auch beim Wechsel der Seite.
- **Bild ausrichten …:** Zuschneiden per Rahmen und Feindrehung um ±10°, damit waagrechte Linien wirklich waagrecht sind. Das ausgerichtete Bild wird neu ausgewertet und als Quelldatei gesichert.
- **Bildleiste** im Modellbereich (nur bei Bildern):
  - Lupe beim Setzen von Punkten (Kalibrieren, Nullpunkt, Zeichnen).
  - Rohr-Ø min/max in mm (wirkt nach dem Kalibrieren).
  - Mindestlänge und Strichstärke der Linien.
  - Schwelle automatisch oder adaptiv (für Scans mit ungleichmäßiger Helligkeit).
  - „Neu erkennen“ wendet die Einstellungen an, gezeichnete Objekte bleiben erhalten.
- **Konfidenz:** Unsicher erkannte Rohre sind im Modellbereich orange gestrichelt und in der Rohrliste mit „?“ markiert; der Tooltip nennt die Konfidenz in %.
- **Nullpunkt per Klick:** Werkzeug „Nullpunkt“ setzt den Bezugspunkt der Koordinaten im MSX (dort x = 0 und z = Deckenunterkante aus Bereich 05), z. B. an der Unterkante der Decke oder einer Achse. „Nullpunkt entfernen“ stellt den automatischen Bezug wieder her.
- **Verschieben:** Ausgewählte Rohre und Kanäle lassen sich mit der Maus verschieben – auch erkannte; Größe, Dämmung und Einstellungen bleiben erhalten. „Rückgängig“ setzt zurück.

**Geändert**
- Quelle „Bildimport“ statt „Zeichnung“ in der Rohr- und Bauteilliste bei Bildern.
- Bildauswertung entfernt einzelne Störpunkte; Rohr und Dämmung werden bei Bildern auch bei leicht versetzten Mittelpunkten als ein Rohr erkannt.

## V5.8 · 23.11.2026 · DEV
**Neu**
- **Bilder als Zeichnung:** PNG, JPG, WebP, BMP und GIF lassen sich wie DWG, DXF oder PDF in Bereich 02 laden (auch per Ziehen, mehrere auf einmal). MSX.ritl wandelt das Bild im Browser in Linien, Rechtecke und Kreise um – danach erkennt es Rohre (auch Rohr + Dämmung als zwei Kreise), Decken, Wände und Kanäle wie bei Vektorzeichnungen.
- **Maßstab über Referenzlänge:** Nach dem Laden eines Bildes ist „Kalibrieren“ aktiv – zwei Punkte einer bekannten Länge anklicken (z. B. eine Bemaßung) und die Ist-Länge in mm eingeben. Alternativ ein Rohr bekannter Größe auswählen und „Maßstab aus ausgewähltem Rohr“.
- **Rohr über 3 Punkte am Umfang:** „+ Rohr“ hat die neue Größe „Ø aus 3 Punkten am Umfang“ – für Rohre, die im Bild nicht erkannt wurden oder deren Mitte nicht sichtbar ist. „Mitte + Rand“ gibt es weiter; „Fang“ lässt sich dafür ausschalten.
- Schalter „Bild EIN/AUS“ im Modellbereich blendet das Hintergrundbild aus; die erkannten Linien und Kreise bleiben sichtbar.
- Bilder werden wie alle Quelldateien im Backup (Stufe storage) mitgesichert und beim Wiederherstellen neu ausgewertet.

**Geändert**
- Bei Bildern gilt für die Zuordnung zur Rohrgröße eine Ø-Toleranz von mindestens 1,5 Bildpunkten je Seite, weil ein Bild nie pixelgenau ist.

## V5.7.6 · 22.11.2026 · DEV
**Geändert**
- **Backup intern vereinfacht:** MSX.ritl gleicht erst mit dem Server bzw. Ordner ab, wenn das Projekt aus dem Browser geladen ist, und baut ein Projekt vom Server auf, sobald auch die Originaldateien da sind – beides jetzt über den gemeinsamen Backup-Baustein.

**Behoben**
- Bei C3 wird ein geändertes Projekt von einem anderen Gerät beim Abgleich zuverlässig übernommen (mit allen Originalen).
- Langsamer Browser-Speicher beim Start löst keinen neuen Stand am Server mehr aus und entfernt dort keine Originaldateien.

## V5.7.5 · 22.11.2026 · DEV
**Neu**
- **Teilen-Blatt beim Speichern am Handy und Tablet:** Exporte und „Backup speichern“ öffnen am Touchscreen das Teilen-Blatt („In Dateien sichern“, AirDrop, Mail) – in der Home-Bildschirm-App zeigte iOS Downloads bisher nur als Vorschau. Am Computer bleibt es beim normalen Download; lässt der Browser das Teilen nicht zu, wird ebenfalls normal geladen.

## V5.7.4 · 22.11.2026 · DEV
**Neu**
- **Eigenes App-Symbol für den Home-Bildschirm:** In Safari „Teilen → Zum Home-Bildschirm“ legt MSX.ritl jetzt mit eigenem Symbol und Namen ab (vorher ein Bildschirmfoto der Seite). Gilt für die Anmeldeseite und das Tool.

## V5.7.3 · 22.11.2026 · DEV
**Geändert**
- **Am Handy und Tablet:** Eingabefelder in 16 px – iOS zoomt beim Antippen nicht mehr hinein.
- Fenster erscheinen am Handy als Blatt von unten über die volle Breite; die Seite dahinter scrollt nicht mit.
- Platz für Notch und Home-Leiste (Safe-Area); Knöpfe reagieren ohne Verzögerung auf Tippen.

## V5.7.2 · 21.11.2026 · DEV
**Behoben**
- **Dateien über den Server auf iPhone, iPad und Mac (Safari):** Importierte Quelldateien (DWG, DXF, PDF …) wurden bisher nur als Verweis auf die Originaldatei im Browser abgelegt. Safari schickte sie dann leer an den Server, und das Backup meldete „Datei „…“ konnte nicht hochgeladen werden“. Jetzt wird der Inhalt selbst gespeichert und mit Inhalt hochgeladen. Bereits abgelegte Dateien werden beim ersten Start einmalig umgestellt.
- Eine Datei, die auf dem Gerät nicht mehr lesbar ist, bricht den Abgleich nicht mehr ab – sie wird mit Hinweis übersprungen.

**Geändert**
- Backup-Baustein ritl-bk 2.8.

## V5.7.1 · 20.11.2026 · DEV
**Geändert**
- Backup: alle Datenquellen gleichzeitig aktiv, jede in ihrer Stufe (ritl-bk 2.7)

## V5.7 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools – gleiche Fenster und Abläufe wie in den anderen Tools.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings**, **2 · datenbank** (+ Vorlage, Rohrnormen, Revit-Zuordnung), **3 · storage** (+ Projekt mit allen importierten Originaldateien) – kurz z. B. C3.
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für MSX.ritl auf allen Geräten, „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Stufe 3 auch über den Server (C3):** Projekt und Originalzeichnungen (DWG, DXF, PDF, MSX, ZIP) gehen über den Server auf alle Geräte; ein neues Gerät baut das Projekt ohne Rückfrage auf.
- **Projekt bleibt erhalten:** Mit Stufe 3 kommt das Projekt (Bereich 01) nach dem Neuladen automatisch zurück.
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.

**Geändert**
- Stufe 3 braucht keinen verknüpften Ordner mehr: Projekt und Originale stehen direkt in der Backup-Datei (A, B) bzw. am Server (C). Große Zeichnungen machen die Backup-Datei entsprechend größer.
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- Backups bis V5.6 lassen sich weiter wiederherstellen – auch Projekt-Backups (Stufe storage), deren Dateien im Browser bzw. im Unterordner MSX-ritl_Dateien liegen.

**Behoben**
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.

## V5.6 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz:** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt auf allen Geräten und in allen RIEMER Tools – das Backup muss nicht mehr auf jedem Gerät eingerichtet werden.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). storage braucht einen verknüpften Ordner in Chrome oder Edge, sonst gilt datenbank.
  - Zentral (02): bei A settings, sonst datenbank (bei einer Lizenz mit settings: settings). Projekt und Dateien gehen bei MSX.ritl nie an den Server – storage gilt zentral wie datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Lokal in den Ordner sichern“ bleibt je Gerät (der Ordner muss auf jedem Gerät verknüpft werden).
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt („durch die Lizenz festgelegt“).

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Gesperrte storage-Zeile unter 02 Zentral: „nur lokal (Ordner) – zentral hält MSX.ritl keine Dateien“ statt „zentral folgt später“; Hinweis bei fehlender Freigabe: „Freigabe im Admin“ statt „beim Anbieter anfragen“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ statt einer stillen Sperre.

## V5.5 · 19.11.2026 · DEV
**Behoben**
- Backup-Stufe storage mit Datenquelle A (der OneDrive/SharePoint-Ordner ist die Datenbank): Die Stufe sprang beim Start und nach „Übernehmen“ auf datenbank zurück, Projekt und Dateien wurden nicht abgelegt. Jetzt bleibt storage gewählt; der Ordner-Abgleich speichert Projekt-Browser und Arbeitsstand in `Backup_MSX-ritl.json` und die Originaldateien in `MSX-ritl_Dateien`, ein anderes Gerät lädt beides.
- Nach dem Neuladen der Seite ist das Projekt im Browser leer. Dieser leere Stand überschreibt das Projekt-Backup im Ordner nicht mehr: Mit Datenquelle A wird der Stand aus dem Ordner automatisch geladen, sonst pausiert das automatische Sichern mit dem Hinweis „Projekt-Backup im Ordner gefunden – über Backup › 02 wiederherstellen“.

## V5.4 · 19.11.2026 · DEV
Baut auf V5.2 auf. V5.3 (Vorlagen, Idee I003) ist zurückgezogen und in dieser Version nicht enthalten.

**Neu**
- Backup-Stufe **storage** jetzt auch unter Lokal · OneDrive & SharePoint (Idee I004): gesichert werden datenbank, der ganze Projekt-Browser (Ordner, Unterprojekte mit MSX, Anzahl, gelöschte und übernommene Objekte, Rohr-Einstellungen, aktuelles Unterprojekt) und die importierten Originaldateien (DWG, DXF, PDF, MSX, RIEMER-Gruppen, Projekt-ZIP, .mspx).
- Im verknüpften Ordner bleibt es bei genau einer Datei `Backup_MSX-ritl.json` (Arbeitsstand, Verweisliste der Dateien); die Dateien selbst liegen im Unterordner `MSX-ritl_Dateien` als `<Kennung>_<Originalname>`. Gleiche Dateien werden nur einmal abgelegt, es werden nur fehlende geschrieben und nie Dateien gelöscht.
- Importierte Dateien bleiben zwischen den Sitzungen in diesem Browser, damit automatisches Sichern ohne erneutes Hochladen funktioniert.
- Wiederherstellen eines storage-Backups bringt Projekt-Browser, Unterprojekte und Zeichnungen zurück – auch in einem anderen Browser, sobald der Ordner verknüpft ist. Fehlende Dateien werden aufgelistet; diese Unterprojekte kommen dann aus dem gespeicherten MSX-Stand.
- „Backup einrichten“: storage unter Lokal wählbar mit Größe (komprimierter Arbeitsstand + Dateien) und Anzahl Dateien; ohne Ordner-Zugriff (Safari, Firefox) ausgegraut mit Hinweis.
- Backup-Dialog: 02 OneDrive & SharePoint nennt Stufe, Anzahl und Größe der Dateien; 01 Lokal weist darauf hin, dass die Dateien nur im Ordner gesichert werden.
- Hinweise bei Dateien über 20 MB (Fortschritt) und wenn der Unterordner größer als 500 MB wird.

**Geändert**
- Automatisches Sichern mit storage überschreibt kein Backup aus einer anderen Sitzung: Es pausiert mit Hinweis, bis wiederhergestellt oder bewusst „Jetzt im Ordner sichern“ gewählt wird.
- Zentral bleibt storage gesperrt („nur lokal (Ordner) – zentral folgt später“); bei Datenquelle A (Ordner ist die Datenbank) gleicht der Ordner weiter nur die Arbeitsdaten ab.

## V5.3 · 19.11.2026 · DEV
**Neu**
- Bereich 12 „Vorlagen“ (Idee I003): Standardkonstruktionen aus PROFIS MSE (Schienen, Verbinder, Anker) mit „.mspx laden“ übernehmen – Ordner werden Kategorien, jede Lösung eine Vorlage mit Name, Bauteil (Decke/Wand), Anzahl Knoten und Schienen, Schienentyp und kleinem Vorschaubild. Umbenennen, Löschen und als .mspx exportieren (einzeln oder alle).
- Die Vorlagen bleiben in diesem Browser und sind im Backup (Stufe datenbank).
- OneDrive & SharePoint: Team-Datei `MSX-ritl_Vorlagen.mspx` im Ordner aus Backup › 02 – „In Ordner teilen“ ergänzt fehlende Vorlagen, „Aus Ordner übernehmen“ holt neue; vorhandene werden nie ersetzt. Ohne Ordner-Zugriff (Safari, Firefox) Hinweis zum Ablegen der exportierten Datei.
- Vorlage einsetzen: Decke oder Wand im Modellbereich anklicken, dann „Vorlage einsetzen …“ – es erscheinen nur passende Vorlagen. Einsetzen in Originalgröße, die Ankerknoten liegen auf der Fläche des Bauteils, seitlich mittig zur Rohrgruppe, am Klickpunkt oder mittig zum Bauteil. Bei Wall-to-wall gleitet der zweite Ankerknoten entlang seiner Schiene bis zur gegenüberliegenden Wand. Mehrere Vorlagen je Unterprojekt möglich, „Vorlage entfernen“ bzw. Entf nimmt sie wieder heraus.
- Schienen parallel verschieben – für Vorlagen und frei gezeichnete Stäbe: Schiene anklicken, am Griff in der Mitte ziehen; die Schiene bewegt sich nur senkrecht zu ihrer Achse, anschließende Schienen werden länger oder kürzer, Verbinder bleiben an ihren Knoten, Ankerknoten gleiten an ihrem Bauteil entlang.
- Gesperrt mit Hinweis, wenn sich ein Anker vom Bauteil lösen oder über den Bauteilrand gleiten würde oder eine anschließende Schiene die Länge 0 bekäme.
- Fang beim Verschieben: Rohr- und Dämmungsunter-/-oberkante, Kanalkanten, Bauteilflächen, sonst Raster 10 mm; Umschalttaste = ohne Fang. Live-Maße (Verschiebung, Abstand zu Decke bzw. Wand, neue Längen der Nachbarschienen), Esc bricht ab, Strg+Z macht rückgängig. Warnung bei Schienen unter 100 mm und wenn Rohre nicht mehr aufliegen.
- Export (.msx, msx.ZIP, .mspx): Knoten mit Verbindern und Ankern, Schienen, Gelenke, Lager, Zuordnung Schiene–Knoten und Lasten der Vorlage mit neuen Nummern; neue Knotenlagen, Längen, Eigengewicht und Knicklängen passen sich an.
- Im Test mit PROFIS MSE zu bestätigen: Standard ist „Anker am vorhandenen Bauteil“ – die Ankerknoten verweisen auf die gewählte Decke bzw. Wand. Lehnt PROFIS MSE das ab, im Dialog „Bauteile der Vorlage mitnehmen“ wählen (die kleinen Bauteile der Vorlage liegen dann bündig auf der Fläche). Die Stückliste der Vorlage wird wie bei gezeichneten Stäben nicht mitgegeben; PROFIS MSE rechnet sie neu.

**Geändert**
- Strg+Z macht im Modellbereich den letzten Schritt rückgängig (wie „Rückgängig“).
- Backup-Stufe datenbank enthält zusätzlich die Konstruktionsvorlagen.

## V5.2 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Sprache, Ansicht), fragt MSX.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten (Vorlage, Rohrnormen, Revit-Zuordnung); die Einstellungen gleicht der Server ab.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommen sie nacheinander – die zweite überschreibt die erste nicht mehr.
- „Ordner verknüpfen“ in „Backup einrichten“: Der Abgleich startet erst mit „Übernehmen“, die Abfrage schiebt sich nicht mehr über das offene Fenster.
- Lässt sich die Ordner-Verknüpfung im Browser nicht speichern, bleibt MSX.ritl nicht mehr hängen.

## V5.1 · 19.11.2026 · DEV
**Neu**
- Backup nach RIEMER-Standard: Knopf „Backup“ im Header mit Symbol für Lokal (Ordner) und Server (Wolke) – Farbe zeigt den Zustand, Tooltip nennt ihn im Klartext.
- Eine Backup-Datei `Backup_MSX-ritl.json` mit Kopf (Tool, Version, Stufe, Zeitpunkt); beim Wiederherstellen werden Dateien anderer Tools mit Klartext abgelehnt.
- Backup-Stufen: **settings** (Hell/Dunkel, Sprache, Ansichten, Auf/Zu, Voreinstellungen) und **datenbank** (zusätzlich eigene Vorlage, weitere Rohrnormen, Revit-Zuordnung). Zeichnungen und Projekt sichern Sie weiter über „.mspx exportieren“.
- Backup-Dialog: 01 Lokal (Datei speichern/wiederherstellen, in Chrome/Edge überschreibt sie dieselbe Datei), 02 OneDrive & SharePoint (Ordner verknüpfen, automatisch sichern), 03 Zentral (Sicherung am Lizenzserver mit Historie 10 Tage).
- „Backup einrichten“ beim ersten Start und jederzeit über Backup: Stufen mit Größen, automatisch lokal und/oder zentral sichern.
- Server als Datenquelle (RITL-Sync): auf Wunsch lädt MSX.ritl beim Start den Stand vom Server und speichert Änderungen nach wenigen Sekunden; bei gleichzeitigen Änderungen auf zwei Geräten wird gefragt, welcher Stand gilt.
- Datenquelle je Lizenz: **A** – der OneDrive/SharePoint-Ordner ist die Datenbank (Datenhoheit, am Server nur Einstellungen) · **B** – der Server ist die Datenbank.
- Offline-Version: kein Serverzugriff, Abschnitt Zentral ausgeblendet, Übersetzungen nur aus der Datei.

**Geändert**
- Der Header hat höchstens drei Tool-Knöpfe: „msx.ZIP herunterladen“ gibt es jetzt nur noch neben der Überschrift 07 Modellbereich, an seiner Stelle steht „Backup“.

## V5.0 · 16.11.2026 · DEV
**Neu**
- Download-Chips „.msx herunterladen“ und „msx.ZIP herunterladen“ direkt neben der Überschrift 07 Modellbereich (zusätzlich zu den Symbol-Chips im Header).

**Geändert**
- Header-Knöpfe umbenannt: „.msx herunterladen“ (vorher „Nur .msx herunterladen“) und „msx.ZIP herunterladen“ (vorher „ZIP herunterladen (MSX + Listen)“).
- „Fixiert“ passt den Modellbereich weiterhin an die Fensterhöhe an, hält ihn aber nicht mehr oben fest.

**Behoben**
- Bereiche 08–11 scrollten hinter dem Modellbereich 07 – jetzt scrollen 07–11 gemeinsam.
- Enter/Leertaste auf einem Knopf in einer Bereichsüberschrift klappt den Bereich nicht mehr mit zu.

## V4.9 · 16.11.2026 · DEV
**Behoben**
- Header-Anzeige: App-Bild nach Vorlage neu (38 px, Ebenen l1/l2/l3 mit zwei Rohröffnungen, wie MUSTER.ritl/PPTX.ritl) – das alte 48er-Bild lief bis an den Rand und wirkte abgeschnitten und zu groß; Favicon mit demselben Motiv.
- Seitenränder auf 22 px wie der Header (vorher 40 px), Header und Inhalt fluchten jetzt links und rechts.

**Entfernt**
- Alte Header-Stile (52-px-Bild, 32-px-Titel, 44-px-Knöpfe, eigener Hell/Dunkel-Knopf) – der Header kommt nur noch aus RITL-UI.

## V4.8 · 16.11.2026 · DEV
**Neu**
- Header über den zentralen Header RITL-UI 1.1 (wie MUSTER.ritl V2.8): Titel MSX.ritl mit Edition, Kanal und Version · Datum, Tool-Knöpfe Beispiel / .msx / ZIP als Symbol-Chips, dazu Anleitung, DE/EN, Hell/Dunkel, An-/Abmelden, Toolbox-Logo und RIEMER Tools. Header-Updates kommen künftig zentral vom Lizenzserver.
- Modellbereich „Fixiert“ (Standard ein, Idee I001): Modell bleibt oben stehen und passt sich der Fensterhöhe an, die Spalten scrollen eigenständig; Aufteilung über den Griff unter dem Modell, Doppelklick setzt zurück.

**Geändert**
- Schriften selbst gehostet über riemer-toolbox/fonts (keine Google Fonts mehr).
- Eigener Code für Hell/Dunkel und den DE/EN-Knopf entfernt (macht das Kit).

**Behoben**
- Fangsymbol im Modellbereich blockiert keine Klicks mehr.

Neu in 4.7 (14.11.2026)
- Anzahl (Stückzahl der Konstruktion) je Unterprojekt: aus RIEMER Tools automatisch = Anzahl der Platzhalter
  der Gruppe (group.count, bzw. groups[].count im Projekt-ZIP), sonst im Projektbereich unter „Anzahl“ eintragen.
  Anzeige „27×“ im Projektbaum.
- PROFIS MSE übernimmt keine Mengen aus .msx/.mspx (in 4 Testrunden geprüft: weder Datei, Unterprojekt-Nummer,
  Kennung noch Name tragen die Menge; der Import-Dialog startet immer mit 1). Daher:
  „Anzahl im Namen exportieren“ (Standard ein): „Platzhalter_1 · 27 Stk“ in .mspx, .msx und ZIP – im Import-Dialog
  steht die Zahl so direkt neben dem Mengenfeld. Beim Einlesen einer .mspx wird der Zusatz wieder zur Anzahl.
- „Stückliste (Excel)“: Ordner, Unterprojekt, Anzahl, Name in PROFIS MSE, Rohre, Kanäle, Decken/Wände, Stäbe,
  Quelle, exportbereit, Summe der Konstruktionen.

Neu in 4.6 (13.11.2026)
- Projekt-ZIP aus RIEMER Tools V3 (ab PlatzhalterAddinV3 V0.29, „⬇ MSE-Projekt (ZIP)“) in „02 Zeichnung“ (und im
  Projektbereich) einlesen: Erkennung an project.json (format „riemer-mse-project“), Ordner = source.project
  (leer: „RIEMER-Projekt“) in der gewählten Ebene, je Gruppe mit ok:true ein Unterprojekt (Name = groups[].name).
- Übersprungene Gruppen (ok:false, Datei fehlt, falsches Format) werden mit Fehlertext gemeldet:
  „X von Y Gruppen importiert“. Revit-Rohrtypen ohne gemerkte Rohrnorm werden aufgelistet (Zuordnung wie bisher
  je Revit-Rohrtyp in msxb.revitmap). Andere ZIPs: klare Meldung, nichts importiert.
- Mehrere einzelne .mse.json gleichzeitig weiterhin möglich. Anleitung, Hinweise und DE/EN ergänzt.
- Übersetzung: Teilphrasen ändern keine Namen mehr (z. B. „Platzhalter_3“ bleibt).

Neu in 4.5 (12.11.2026)
- Löschen ist endgültig: gelöschte erkannte Objekte sind komplett entfernt (kein „Wiederherstellen“, kein Rückgängig)
  und müssen ggf. manuell neu gezeichnet werden – auch nach Wechsel zwischen automatisch und manuell.
- Manuelle Auswahl: „Nicht übernommene löschen (n)“ entfernt alle nicht übernommenen erkannten Objekte auf einmal.
- Sprachumschalter DE / EN im Header (neben Hell/Dunkel), Einstellung `riemer-lang` wie `riemer-theme`.
  Wörterbuch in Supabase, Tabelle `translations` (app = msx-builder, kind = text | phrase, Zahlen als {0}, {1} …);
  Änderungen dort wirken beim nächsten Start. Eingebauter Startstand für offline: msx-builder/i18n-de-en.json.
  Medien- und Werkstoffnamen erscheinen im Englischen mit den Originalnamen aus PROFIS MSE.

Neu in 4.4 (11.11.2026)
- Automatisch erkannte Objekte (Rohre, Kanäle, Decken/Wände, Rechtecke, Stäbe aus MSX) lassen sich löschen:
  sie verschwinden aus Modellbereich, Rohrliste (08), Bauteil-/Kanalliste (09) und Export.
  „Wiederherstellen (n)“ holt alle zurück, „Rückgängig“ den letzten Schritt. Löschen-Knopf in jeder Listenzeile.
- Auswahl-Fenster rechts im Modellbereich: Alle abwählen, Löschen, Export EIN/AUS, Wasser EIN/AUS,
  Rohr-Vorgaben anwenden, Typ (Bauteil/Kanal), Stabtyp, In der Liste zeigen. Klick ins Leere hebt die Auswahl auf.
- Erkennungsmodus: „Automatische Erkennung“ (Standard) oder „Manuelle Auswahl“ – erkannte Objekte erscheinen
  gestrichelt, Mausover zeigt die Info (z. B. Ø und passende Katalog-Größe), Klick übernimmt; „Alle übernehmen“.
- Mausover-Info für alle Objekte im Modellbereich.
- Zeichnung um 90° drehen (⟲ / ⟳); Erkennung, manuelle Objekte und Export folgen der Drehung (nicht bei MSX-Quellen).
- Texte aus DXF (TEXT, MTEXT, Attribute), DWG und PDF werden eingelesen und auf den eigenen Layer „Texte“ gelegt;
  ein-/ausblendbar im Modellbereich und unter Layer, nicht für die Erkennung verwendet.

Neu in 4.3 (09.11.2026)
- „+ Unterprojekt“ entfernt (jeder Import legt automatisch ein Unterprojekt an).
- Export & Import im Projektbereich einklappbar (Zustand bleibt gespeichert).
- Alle Anleitungen als (i) neben der Überschrift jedes Bereichs, Anzeige bei Mausover, Fokus oder Klick;
  im Modellbereich passt sich der Hinweis dem gewählten Werkzeug an.

Neu in 4.2 (09.11.2026)
- Fix .mspx-Export: Unterprojekte werden mit Unterprojekt-Nummer geschrieben (aus der Vorlage bzw. dem Original).
  PROFIS MSE lehnt Unterprojekte ohne Nummer beim Projekt-Import ab; gleiche Nummern sind erlaubt.

Neu in 4.1 (09.11.2026)
- Jeder Import wird automatisch ein neues Unterprojekt im ausgewählten Ordner (ohne „+ Unterprojekt“);
  mehrere Dateien auf einmal möglich. Ein frisches, leeres Unterprojekt bzw. das Startbeispiel wird dabei weiterverwendet.
- .mspx wird nicht mehr ersetzt, sondern als Ordner in die ausgewählte Ebene eingefügt (beim Start ersetzt sie das Beispiel).
- .mspx-Import robuster: in PROFIS MSE leere Unterprojekte (ohne Modell) und Inhalte als Text werden übernommen;
  nicht geöffnete bzw. nicht lesbare Unterprojekte werden beim Export 1:1 zurückgeschrieben.

Neu in 4.0 (09.11.2026)
- Projekt-Browser (Bereich 01): Projektstruktur wie in PROFIS MSE mit Ordnern (beliebig verschachtelt) und
  Unterprojekten; anlegen, umbenennen (Doppelklick/F2), löschen, per Ziehen verschieben; Status je Unterprojekt.
- Jedes Unterprojekt hat eigene Zeichnung, Einstellungen, Erkennung und Bearbeitung; Wechsel per Klick, nichts geht verloren.
- Export „Projekt .mspx“ (ganzes Projekt)
  und „Alle .msx (ZIP)“ in der Ordnerstruktur.
- .mspx aus PROFIS MSE öffnen (Bereich 01 oder Zeichnungsfeld): Struktur wird übernommen, Unterprojekte beim
  Anklicken als MSX-Zeichnung geöffnet; nicht geöffnete werden unverändert exportiert.
- Bereiche neu nummeriert (Projekt = 01).

Neu in 3.1 (09.11.2026)
- Layout nutzt immer die volle Breite des Browserfensters, höchstens 2048 px (vorher 1240 px):
  Header, Arbeitsbereich und Footer; darüber zentriert.
- Kontakt: Wortmarke „RIEMER Tools“ und Fußzeile verweisen auf mailto:toolbox@riemer.co (statt riemer.co).

Startseite (09.11.2026)
- Neue Startdatei als Letztstand: Anmeldung mit E-Mail-Adresse und Lizenzschlüssel RITL-XXXX-XXXX-XXXX-XXXX
  (verdeckt, Auge-Knopf, Passwortmanager), Hell/Dunkel, Anleitung. Funktioniert online und lokal per Doppelklick.
- Wichtig: Die Startdatei gehört nur nach msx-builder/index.html bzw. zum Weitergeben – NIE in die Tabelle
  tools (sonst lädt sie sich nach der Prüfung selbst neu → Endlosschleife „Lizenz wird geprüft …“).

Neu in 3.0 (08.11.2026)
- Design nach RIEMER-Farbkarte: Header mit App-Bild, Eyebrow und Wortmarke „RIEMER Tools“ (nicht rot),
  runder Hell/Dunkel-Knopf (gemeinsame Einstellung riemer-theme), nummerierte Panels, Inter/JetBrains Mono,
  Anleitung als Dialog, Footer; Header in jeder Breite einzeilig.
- In der RIEMER Toolbox als lizenzgeschütztes Tool (golfsburg.github.io/riemer-toolbox/msx-builder/).

Neu in 2.9
- Übersicht-Chips im Modellbereich reagieren alle gleich: Klick wählt die zugehörigen Objekte aus
  (Rohre gesamt, Rohrgruppen, Lüftungs-/Kabelkanäle, Stäbe, Decke/Wand), erneuter Klick wählt sie wieder ab.
  Die übrige Auswahl bleibt erhalten, mehrere Chips lassen sich kombinieren; aktive Chips sind hervorgehoben.

Neu in 2.8
- Standardvorlage (Feld 2 · Vorlage) ist jetzt „CAD - PMSE MSX-Builder.Rohrtrasse001“: 7 Rohrnormen,
  13 Medien, 3 Dämmstoffe, Decke, Wand, Lüftungskanal, Kabelkanal, Stäbe. Quellverweis dezent unter der
  Vorlage: PROFIS Modular Supports Engineering (profismse.hilti.com). Die Beispielzeichnung bleibt unverändert.
- Medien deutsch benannt (Kälte, Lüftung, Abwasser, Druckluft, Löschanlage, Trinkwasser …); Standardmedium
  Heizung; Platzhaltergruppen aus RIEMER Tools werden über Systemname/Klassifizierung dem passenden Medium zugeordnet.
- Jeder Bereich ist auf- und zuklappbar (Klick auf die Überschrift, Zustand wird gemerkt); der Modellbereich
  ist jetzt ein eigener Bereich.
- Bei freigegebenem Zoom lässt sich die Höhe des Modellbereichs am Griff unten ziehen (Doppelklick = zurücksetzen,
  Pfeiltasten möglich); die Höhe bleibt auch nach dem Sperren.
- Hell-/Dunkelmodus manuell umschaltbar (Button oben, wird gemerkt).
- „RIEMER Tools“ fett und rot rechts im Header.
- Suchfeld „Suche in allen Spalten“ entfernt (Spaltenfilter bleiben).

Neu in 2.7 – Platzhaltergruppen aus RIEMER Tools V3
- Feld 1 nimmt jetzt Platzhaltergruppen an: Datei „Projekt_Gruppe.mse.json“ aus RIEMER Tools per
  Drag & Drop. Eine Gruppe = eine Anwendung = eine MSX (wie im Framework nur einmal bearbeiten).
- Übernommen werden Rohre (Lage, Außendurchmesser, Wanddicke, Dämmung, Medium, wassergefüllt,
  Revit-ID), Lüftungskanäle, Kabeltrassen, Decken/Wände und Stäbe – Lage unverändert, ohne Maßstab.
- Rohrnorm automatisch: gemerkte Zuordnung → Normnummer im Revit-Rohrtyp → Werkstoff → Durchmesser.
  Änderungen der Norm in der Rohrliste werden je Revit-Rohrtyp gemerkt.
- Anzeige der Gruppe (Name, Befestigungstyp, Anzahl Platzhalter) unter dem Dateinamen.
- ZIP enthält zusätzlich „Gruppe_Platzhalter.csv“ (Gruppe → Platzhalter-IDs/UniqueIds).
- Beispiel zum Testen: Beispiel_Gruppe_Typ03.mse.json (27 Platzhalter, 4 Rohre, Kanal, Trasse, Decke, 3 Stäbe).
- Ordner RIEMER-Tools: Schnittstellenbeschreibung und MseGroupExporter.cs für den Einbau in
  RIEMER Tools V3 (ohne Quellcode-Zugriff geschrieben, nicht kompiliert/in Revit getestet).

Neu in 2.6
- Objekte mit deaktiviertem Export (Rohre, Decken/Wände, Lüftungs-/Kabelkanäle, Stäbe) werden im
  Modellbereich nicht mehr angezeigt und nicht mehr gefangen. Wieder einblenden: Häkchen „Export“
  in der jeweiligen Liste setzen. Die Linien der Originalzeichnung bleiben als Hintergrund sichtbar.

Neu in 2.5
- Mehrere Decken (automatisch und manuell) gleichzeitig zulässig – wie bei den Wänden.
- Erkennung unabhängig je Kategorie: Decke ODER Wand ODER Rohr ODER Lüftungskanal ODER Kabelkanal.
  Alles Erkannte wird verwendet, egal ob andere Objekte vorhanden sind (z. B. nur Decke + Wand,
  nur Rohre, Wand ohne Rohre daneben). Linienpaare (2 parallele Linien ≥ 1000 mm, Abstand
  80–800 mm) werden überall als Decke (waagrecht) bzw. Wand (senkrecht) erkannt.
  Ohne Decke/Wand: Oberkante der Objekte = eingestellte Deckenunterkante z (Hinweis im Protokoll).
  Bezug für die Lage bleibt die Decke direkt über den Objekten.
- Raster im Modellbereich in echten Millimetern (1-2-5-Stufen); unten rechts steht
  „Raster x mm“, passt sich beim Zoomen an.

Neu in 2.4
- Stäbe lassen sich immer löschen – auch eingelesene (aus MSX) und nicht nur manuell gezeichnete:
  Button „Löschen“ in jeder Zeile, „Ausgewählte löschen“ in der Stabliste oder Taste Entf.
  „Rückgängig“ holt gelöschte eingelesene Stäbe zurück.

Neu in 2.3
- Zoom ist beim Start gesperrt („Zoom gesperrt“); per Klick freigeben für Mausrad, Verschieben, +/−/Einpassen.
- Stäbe zeichnen: Umschalter Frei / Ortho (Standard: Ortho = 0°/90° zum letzten Punkt), Taste F8 schaltet um.
- Entf (Delete) löscht alle ausgewählten, manuell hinzugefügten Objekte (Rohre, Lüftungs-/Kabelkanäle,
  Decken/Wände, Stäbe). Ausgewählte Objekte aus Zeichnung oder MSX bleiben erhalten (nur Export
  ausschaltbar), das Protokoll weist darauf hin. In Eingabefeldern wirkt Entf normal.

Neu in 2.2
- Zoom sperren: Button „Zoom sperren“ neben +, −, Einpassen. Gesperrt bleiben Ausschnitt und
  Maßstab fest (kein Mausrad-Zoom, kein Verschieben, +/−/Einpassen deaktiviert); das Mausrad
  scrollt dann die Seite.
- Neue Objektkategorie Stab = Montageschiene, Stabtypen MT-40 V2 6m, MT-70 OC 6m, MT-90 OC 6m
  (Daten aus CAD - PMSE.Rohrtrasse001 mit Stäben).
  Werkzeug „+ Stab“: Polylinie anklicken, jedes Segment wird ein Stab. Abschluss per Doppelklick,
  Enter oder „Polylinie beenden“; Rücktaste entfernt den letzten Punkt; Esc bricht ab. Fang auf
  Endpunkte/Mitten vorhandener Stäbe.
  Tabelle „Stäbe (Montageschienen)“: Auswahl (auch Klick in der Zeichnung und Chip oben),
  Export an/aus, Stabtyp (synchron für alle ausgewählten), Länge, kg/m, Koordinaten, Löschen.
  Export in den Berechnungsblock: Knoten, Stab, Werkstoff, Querschnitt, Eigengewicht und
  Bauteilliste wie in PROFIS; jeder Stab hat eigene Endknoten (Verbindungen in MSE setzen).
- MSX als Zeichnung: vorhandene Stäbe werden mit Typ und Lage übernommen. Rundlauf mit der
  angefügten MSX: Stabdaten (ohne IDs) identisch mit dem Original.
- Hinweis: geprüft sind waagrechte Stäbe; senkrechte/schräge Stäbe bitte in MSE kontrollieren.

Neu in 2.1
- Alle Rohre standardmäßig wassergefüllt (Rohr-Vorgabe „Wassergefüllt“ ist voreingestellt,
  gilt für erkannte und manuell eingefügte Rohre). Bei MSX als Zeichnung gilt der Wert aus der Datei.
- Beispielzeichnung heißt jetzt „Beispiel_Schnitt.dxf“.
- „Kanal“ heißt jetzt durchgehend „Lüftungskanal“ (Werkzeug „+ Lüftungskanal“, Übersicht,
  Beschriftung, Meldungen); Liste „Bauteile, Lüftungs- und Kabelkanäle“.

Neu in 2.0
- Neue Objektkategorie „Kabelkanal“ (PROFIS-Objekt CableTray, aus CAD - PMSE.Rohrtrasse001):
  Modellobjekt mit Breite, Höhe, Gewicht kg/m; Berechnungsblock 118 + 125 (Kabelkanaldaten),
  Lastzuordnung 127 zum Lastfall „Cables“ (107). Prototyp ist eingebaut.
- Erkennung: flache Rechtecke (Höhe 20–110 mm, Breite ≥ 4 × Höhe, bis 1200 mm) werden automatisch
  als Kabelkanal vorgeschlagen; Typ in „Bauteile und Kanäle“ jederzeit änderbar.
- Werkzeug „+ Kabelkanal“, Typ-Auswahl und „Auswahl als: Kabelkanal“, eigene Farbe (violett),
  Übersicht-Chip, CSV-Zeile.
- MSX als Zeichnung: Kabelkanäle werden mit Maßen und Gewicht übernommen. Rundlauf mit der
  angefügten MSX: Modell identisch, Kabelkanaldaten und Lastfall identisch (Koordinaten < 0,01 mm).
- Kabelkanal-Gewicht ohne MSX-Vorgabe: Schätzwert aus dem Prototyp (10,6 kg/m bei 500 × 60) – bitte prüfen.

Neu in 1.9
- Wassergefüllte Rohre werden unterschieden: Innenquerschnitt (AD − 2 × Wanddicke) blau gefüllt,
  leere Rohre ohne Füllung. Legende „Rohr leer / wassergefüllt“, Hinweis auch im Tooltip.

Neu in 1.8
- Synchrones Bearbeiten: Wird ein Parameter an einem ausgewählten Objekt geändert, gilt die
  Änderung für alle ausgewählten Objekte.
  Rohrliste: Export, Rohrnorm, Größe, Dämmstoff, Dämmdicke, Wasser, Medium.
  Bauteile und Kanäle: Typ, Export, Kanal-Breite/-Höhe/-Gewicht (Maße nur bei Kanälen).
  Änderungen an einem nicht ausgewählten Objekt betreffen nur dieses.

Neu in 1.7
- Klick auf Bauteil/Kanal in der Zeichnung wählt nur aus, die Seite springt nicht mehr zur Liste.
- Löschen einheitlich: In Rohrliste und „Bauteile und Kanäle“ hat jedes manuelle Element
  in der Spalte „Quelle“ einen Button „Löschen“; beide Listen haben zusätzlich „Manuelle entfernen“
  für die Auswahl.
- Rechtecke mit Typ „nicht verwenden (auto)“ sind im Modellbereich nicht anklickbar
  (Typ bei Bedarf in der Liste ändern).

Neu in 1.6
- Version und Erscheinungsdatum dezent im Header.
- Standard-Zeichnung: Schnitt 229 (10 Rohre mit Dämmung, Decke 300 mm).
- MSX als Zeichnung: .msx-Datei in Feld 1 ziehen. Rohre (Norm, Größe, Dämmung, Medium,
  wassergefüllt), Kanäle (Breite/Höhe/Gewicht) und Decken/Wände werden mit Lage übernommen,
  können bearbeitet und wieder als MSX exportiert werden. Rohrnormen der Datei kommen in die Bibliothek.
  Geprüft: k.msx, v.msx, CTA06 und Rohrtrasse001 unverändert neu exportiert -> Geometrie und
  Eigenschaften identisch mit dem Original.
- Neue Tabelle „Bauteile und Kanäle“: jedes erkannte Rechteck ist auswählbar (Tabelle, Klick in
  der Zeichnung oder über die Übersicht oben). Typ je Rechteck: Decke, Wand, Lüftungskanal,
  nicht verwenden oder automatisch – einzeln oder für die Auswahl („Auswahl als …“).
  Export an/aus je Bauteil, Kanal-Breite/-Höhe/-Gewicht editierbar. Mehrere Decken/Wände möglich.
- Darstellung: Rohre in Katalog-Außendurchmesser, Dämmung als Ring in tatsächlicher Stärke,
  Beschriftung „Nr: DN … / ØAD + Dämmdicke“ (abwechselnd über/unter dem Rohr).
  Kanäle in Breite × Höhe aus der Tabelle, Beschriftung „Kanal B×H“.

Hinweise
- Rohre aus MSX werden nur dargestellt, wenn sie in y-Richtung verlaufen (Schnittansicht).
- Kanalgewicht ohne MSX-Vorgabe ist ein Schätzwert (Umfang-skaliert) – bitte prüfen.
