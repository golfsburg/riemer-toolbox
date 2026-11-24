# CHANGELOG – TRACK.ritl (RIEMER Tools)

GPS-Tracks (GPX) lokal im Browser in 2D und 3D darstellen, analysieren, bearbeiten und animieren · #ritl_track
Neueste Version oben. Versionen ≤ V1.9 in Google AI Studio entwickelt und nachträglich zusammengefasst (keine Einzelstände erhalten).

## V3.3.30 · 23.11.2026 · DEV
**Geändert**
- Die Herzfrequenz-Zonen (Max-/Ruhe-HF, Modul ANALYSE) gehören zu den Einstellungen im Backup.

## V3.3.29 · 22.11.2026 · DEV
**Geändert**
- **Backup intern vereinfacht** (Optionen des Bausteins ritl-bk statt eigener Umwege): Der Abgleich mit Server bzw. Ordner und das zentrale Sichern starten erst, wenn TRACK.ritl seine Tracks geladen hat.
- Ein in V3.2 oder älter verknüpfter Ordner wird beim ersten Start übernommen, ohne dass TRACK.ritl dafür einmal neu lädt.

## V3.3.28 · 22.11.2026 · DEV
**Entfernt**
- **Zurücksetzen („Neu beginnen“)** im Header entfernt – der Knopf hat alle Tracks, Markierungen und Fotos ohne Rückfrage durch die Beispiel-Tracks ersetzt. Beispiel-Tracks lassen sich weiterhin über „Beispiel laden“ öffnen.

## V3.3.27 · 22.11.2026 · DEV
**Geändert**
- **EXPORT › Video:** Die Laufzeiten „Animation“ und „Bilanz“ stehen jetzt ganz oben in der Tabelle „Einblendungen“ als eigene Gruppe „Animation & Bilanz“ (mit (i)); darunter folgen die Markierungen unter eigener Überschrift.
- **Ghost-Tempo / Zeitraffer** lässt sich auf- und zuklappen (zu beim Start, Zustand wird gemerkt); im Kopf stehen Faktor und Anzahl der Ghosts.
- **Handy:** Die (i)-Knöpfe sind kleiner (20 px), die Tippfläche bleibt groß genug.

## V3.3.26 · 22.11.2026 · DEV
**Geändert**
- **EXPORT › Video:** Beschreibungen stehen nicht mehr im Bereich, sondern in Fenstern hinter (i) – bei „Einblendungen“ (Kopf mit Erklärung und aktueller Summe der Pausen), den Zeilen Fotos, Wegpunkte, Notizen, Abschnitte und Runden (Anzahl als kleine Zahl neben dem Namen), „Tacho & Rundenanalyse“ mit Tacho, Finale und Rundenanalyse, „Fotos bei Position“ sowie „Vorspann (Intro)“ und „Abspann (Outro)“.

## V3.3.25 · 22.11.2026 · DEV
**Neu**
- **Abschnitte und Runden umbenennen:** In ANALYSE › Abschnitte & Bestzeiten ist der Name in der Tabelle direkt editierbar – hineinklicken, Namen ändern, Enter (Esc bricht ab). Ein Klick in den Namen filtert nicht; ein Klick auf die übrige Zeile filtert wie bisher. Der neue Name erscheint überall (Teilbild, Video, Rundenanalyse).

**Geändert**
- **EXPORT › Video › Einblendungen:** Die Beschreibungen von Intro TRACK.ritl, Outro TRACK.ritl und Wasserzeichen stehen nicht mehr in der Tabelle, sondern in einem Fenster hinter dem Knopf (i) – mit etwas ausführlicherer Erklärung.

## V3.3.24 · 22.11.2026 · DEV
**Neu**
- **Module im Link (Regel S-21):** Jedes Modul hat einen eigenen Link mit `#name` (#track, #analyse, #editor …). Ein Link oder Lesezeichen öffnet direkt dieses Modul, Neu laden bleibt im Modul, „Zurück“/„Vor“ im Browser wechseln zwischen den zuletzt geöffneten Modulen.

## V3.3.23 · 22.11.2026 · DEV
**Neu**
- **Intro TRACK.ritl** (EXPORT › Video › Einblendungen › „Intro, Outro & Wasserzeichen“, Ein/Aus, Dauer – Standard 3 s): die drei Logo-Kacheln fliegen ein, die Spur zeichnet sich, ein Lichtschweif zieht durchs Bild, der Schriftzug „TRACK.ritl“ gleitet hoch, darunter Trackname, Datum, km und Höhenmeter; zum Schluss Zoom-Blende ins Video. Läuft vor einem eigenen Vorspann.
- **Outro TRACK.ritl** (Ein/Aus, Dauer – Standard 3 s): Logo und Schriftzug, Kurzbilanz (km · Zeit · Höhenmeter · max. Tempo) und „Erstellt mit TRACK.ritl · RIEMER Tools“, sanftes Ausblenden. Läuft nach einem eigenen Abspann.
- **Wasserzeichen** (Ein/Aus): Logo und „TRACK.ritl“ halbtransparent rechts oben – durchgehend in Animation, Rundenanalyse und Zusammenfassung. Die Legende der Geister rutscht dafür etwas nach unten.
- Intro, Outro und Wasserzeichen passen sich Farbstil und Format an und werden je Track gemerkt; der Ablauf zeigt sie unter „1. Vorspann“ und „4. Abspann“.

## V3.3.22 · 22.11.2026 · DEV
**Neu**
- **Finale mit der Höchstgeschwindigkeit ein-/ausschaltbar** (eigener Schalter, Dauer weiter einstellbar).

**Geändert**
- **EXPORT › Video › Einblendungen:** Tacho, Finale Höchstgeschwindigkeit und Rundenanalyse stehen jetzt als eigene Zeilen in der Tabelle (Teil „Tacho & Rundenanalyse“) – im selben Format wie Fotos, Wegpunkte, Notizen, Abschnitte und Runden: Name mit Hinweis, „Ein“ und „Dauer (s)“. Die bisherigen Einzelschalter darunter entfallen.
- Die Summe unter der Tabelle zählt nur die Pausen der Einblendungen (ohne Finale).

## V3.3.21 · 22.11.2026 · DEV
**Neu**
- **EXPORT › Video › „Finale (s)“:** Dauer des Tacho-Finales einstellbar (1–15 s, **Standard 5 s**; leer = kein Finale). Bei längerer Dauer baut sich das Finale ruhiger auf (Zoom und Nadel), danach bleiben Strahlen und Höchstgeschwindigkeit länger stehen. Wird je Track gemerkt.

## V3.3.20 · 22.11.2026 · DEV
**Neu**
- **Tacho-Finale im Video:** Ist „Tacho einblenden“ an, folgt nach der Track-Animation ein 2-Sekunden-Finale: Das Bild dunkelt ab, der Tacho fliegt von unten links groß in die Bildmitte, die Nadel jagt von 0 auf die Höchstgeschwindigkeit und zittert dort nach, Lichtstrahlen drehen sich, darüber „HÖCHSTGESCHWINDIGKEIT“ und darunter die Zahl groß mit Leuchten („41,7 km/h · bei km 14,4“). In allen Formaten und Farbstilen; im Ablauf als „+ 2s Tacho-Finale“.

## V3.3.19 · 22.11.2026 · DEV
**Neu**
- **Alles hängt am einzelnen Track:**
  - **Anhänge** – Wegpunkte, Notizen, Fotos, Abschnitte und Runden gehören fest zu einem Track. Die Karte (2D/3D) zeigt nur die Anhänge sichtbarer Tracks; ANALYSE, Höhenprofil, EXPORT (Teilbild, Video, GPX/KML, Touren-Report) und der GPX-Download im EDITOR nur die des ausgewählten Tracks.
  - **Einstellungen** – Fahrzeug/Sportart und Größe, Farbe nach, Karte, 2D/3D, Überhöhung, Kennzahlen-Auswahl sowie im EXPORT Teilbild (Format, Farbstil, Runden, Titel) und Video (Format, Farbstil, Auflösung, Dauern, Einblendungen, Tacho, Rundenanalyse) werden je Track gemerkt und beim Wechsel des Tracks umgeschaltet. Ein neuer Track startet mit den Einstellungen des zuletzt gewählten. Gesichert im Backup (Stufe 1 · settings).
- **Zuordnung ändern:** im Wegpunkt-/Notiz- und im Foto-Fenster „Gehört zu Track“.
- **EDITOR › Tracks verwalten:** neue Spalte „Anhänge“ (⚑ Wegpunkte, ✎ Notizen, 📷 Fotos, ⇤ Abschnitte, ⟳ Runden).

**Geändert**
- Bestehende Wegpunkte, Notizen und Fotos ohne Zuordnung werden einmalig dem nächstgelegenen Track zugeordnet.
- Wird ein Track entfernt, verschwinden seine Anhänge mit ihm; „Rückgängig“ im EDITOR bringt den Track samt Anhängen zurück.
- Der eigene Standard der Kennzahlen und die Ansichts-Favoriten gelten weiter für alle Tracks.

## V3.3.18 · 22.11.2026 · DEV
**Neu**
- **Tacho im Video: Schleppzeiger** – ein oranger Zeiger hängt an der Tachonadel, wird beim Beschleunigen auf das bisher höchste Tempo geschoben und bleibt dort stehen, wenn das Tempo wieder sinkt. Unter der Zahl steht „KM/H · MAX …“. Beim Zurückspulen oder Springen in der Vorschau stimmt der Wert immer mit der Position überein.

## V3.3.17 · 22.11.2026 · DEV
**Neu**
- **EXPORT › Video › „Tacho einblenden“:** Rundinstrument unten links über der Karte – Zeiger und Bogen (grün → gelb → rot) zeigen das aktuelle Tempo, darunter die Zahl in km/h und die Steigung. Die Skala richtet sich nach der Höchstgeschwindigkeit des Tracks. Passt sich Farbstil und Format an; während Einblendungen steht er mit der Animation. Wird je Gerät gemerkt.

## V3.3.16 · 22.11.2026 · DEV
**Neu**
- **EXPORT › Video › Einblendungen – Abschnitte und Runden ohne Dauer:** Bleibt das Feld „Dauer (s)“ leer, hält die Animation nicht an. Die Karte bleibt sichtbar, solange der Fahrer im Abschnitt bzw. in der Runde ist; der Balken unten zeigt, wie viel noch fehlt. Runde und Abschnitt erscheinen dabei übereinander (Runde oben). Mit eingetragener Dauer gilt weiter: kurz einblenden und anhalten.

## V3.3.15 · 22.11.2026 · DEV
**Neu**
- **EXPORT › Video › Einblendungen:** für **Fotos**, **Wegpunkte**, **Notizen**, **Abschnitte** und **Runden** je **Ein/Aus** und **Dauer (s)**. Erreicht die Animation eine Markierung, erscheint rechts eine Karte (Fotos wie bisher; Wegpunkt/Notiz mit Name, Notiztext, km und Höhe; Abschnitt mit Länge, Höhenmetern, Steigung, Zeit und Tempo; Runde nach dem Ende mit Rundenzeit, Tempo und Abstand zur Bestzeit, die Bestzeit mit ★).
- **Die Animation hält während jeder Einblendung an** und läuft danach weiter (auch die Geister). Das Video wird entsprechend länger; der Ablauf zeigt „Animation (… s + … s für n Einblendungen)“.

**Geändert**
- **TRACK › Karte:** Auch die Klick-Werkzeuge + Wegpunkt, + Notiz und + Foto erscheinen nur, wenn der ausgewählte Track angezeigt wird (wie die Leiste „⌖ km“). „Auswählen“ bleibt.
- Das Feld „Foto (s)“ ist in die Einblendungen gewandert.

## V3.3.14 · 22.11.2026 · DEV
**Geändert**
- **TRACK › Leiste „⌖ km“** (+ Wegpunkt, + Notiz, 📷 Foto, ⇤ Abschnitt / Runde ab hier) erscheint nur, wenn der ausgewählte Track auch angezeigt wird. Ist er ausgeblendet, verschwindet die Leiste – so landet nichts auf einem unsichtbaren Track.
- **Teilbild „Runden“:** Fußzeile und Statuszeile zeigen „Runden (n)“ statt „2D“.

## V3.3.13 · 22.11.2026 · DEV
**Neu**
- **EXPORT › Teilbild: „Runden“** neben 2D Draufsicht und 3D Raum – das Teilbild zeigt statt der Karte die Rundenanalyse: je Runde ein Balken (Länge = Ø Tempo), Zeit, Abstand zur Bestzeit, Höhenmeter und Ø Puls; die Bestzeit ist grün mit ★ markiert. Kennzahlen und Höhenprofil bleiben daneben. In allen Formaten und Farbstilen.
- **EXPORT › Video: Rundenanalyse als eigene Phase** nach der Track-Animation (vor der Zusammenfassung): Titel gleitet herein, die Balken wachsen Runde für Runde, Zeiten zählen hoch, danach erscheinen die Abstände und die Bestzeit leuchtet. Ein-/ausschaltbar („Rundenanalyse im Video“), Dauer einstellbar (Runden (s), Standard 6 s). In der Vorschau gibt es dafür den Knopf „Runden“; der Ablauf zeigt „2b. Rundenanalyse“.
- Runden kommen aus ANALYSE › Abschnitte & Bestzeiten › Runden (erkannt oder selbst angelegt).

## V3.3.12 · 22.11.2026 · DEV
**Neu**
- **Runden selbst definieren:** In ANALYSE › Abschnitte & Bestzeiten › Runden gibt es jetzt wie bei Abschnitten Name, Von (km), Bis (km) – jeweils mit ⌖ für die aktuelle Position – und „+ Runde hinzufügen“. Selbst angelegte Runden erscheinen im Bestzeit-Vergleich und bleiben erhalten, wenn „Runden erkennen“ erneut läuft.
- **TRACK › Leiste „⌖ km“:** nach „⇤ Abschnitt / Runde ab hier“ wahlweise „⇥ Abschnitt bis hier“ oder „⟳ Runde bis hier“.

## V3.3.11 · 22.11.2026 · DEV
**Neu**
- **TRACK › Karte: Leiste „⌖ km“** – setzt an der aktuellen Position der Animation auf dem ausgewählten Track: **+ Wegpunkt**, **+ Notiz**, **📷 Foto** und **Abschnitt** („⇤ Abschnitt ab hier“, dann zur Endposition fahren und „⇥ Abschnitt bis hier“). Daneben bleiben die Werkzeuge zum Setzen per Klick auf die Karte.
- **ANALYSE › Abschnitte:** neben „Von (km)“ und „Bis (km)“ übernimmt ⌖ die aktuelle Position.
- **ANALYSE › Wegpunkte:** Auswahl **Wegpunkt** oder **Notiz** beim Setzen an der Position.
- **Fotos mit Titel und Notiz/Bildtext:** im Foto-Fenster auf der Karte (auch in der fixierten Ansicht) editierbar. Der Bildtext erscheint im Video unter dem Foto statt „Foto“.

**Geändert**
- „Am Cursor“ heißt jetzt „An Position“. Die Herkunft der Foto-Position (z. B. „Position aus Foto-EXIF“) steht weiter klein unter dem Foto.

## V3.3.10 · 22.11.2026 · DEV
**Neu**
- **EXPORT › Video › Format:** **16:9 Quer** (1280 × 720 / 1920 × 1080), **1:1 Quadrat** (1080 × 1080 / 1280 × 1280) und **4:5 Hoch** (1080 × 1350 / 1280 × 1600) – passend für YouTube, Instagram-Feed und Reels-Vorschau. Bei Quadrat und Hoch nutzt die Karte die zusätzliche Höhe; in der Bilanz stehen Karte, Kennzahlen (3 Spalten) und Höhenprofil untereinander. Auch Intro/Outro und die 3D-Ansicht folgen dem Format.
- **EXPORT › Video › Farbstil:** **Kobalt**, **Alpin Dunkel** (bisheriger Stil) und **Hell** – wie beim Teilbild. Gilt für Animation, Bilanz, Höhenprofil, Hinweise und 3D-Hintergrund.
- Format und Farbstil werden je Gerät gemerkt; die Vorschau passt sich sofort an.

## V3.3.9 · 22.11.2026 · DEV
**Neu**
- **EXPORT › 02 Informationen:** Die Reihenfolge der gewählten Kennzahlen lässt sich in der Leiste per **Drag & Drop** ändern – mit der Maus und am Handy/iPad mit dem Finger (Griff ⠿, eine blaue Linie zeigt die Einfügestelle; per Tastatur Alt + ← →). Die Pfeile ‹ › entfallen.
- **Als Standard speichern:** Die aktuelle Auswahl samt Reihenfolge wird zum eigenen Standard. „Standard laden“ stellt ihn wieder her, „Werkseinstellung“ löscht den eigenen Standard. Der Standard wird gemerkt und mit den Einstellungen gesichert (gilt damit auch auf deinen anderen Geräten).

## V3.3.8 · 22.11.2026 · DEV
**Neu**
- **EXPORT › 02 Informationen für Teilbild und Video:** zentrale Auswahl der Kennzahlen (bis zu 9) – Strecke, Trackpunkte, Datum, Start/Ende, Bewegungs-, Gesamt- und Pausenzeit, Ø Tempo, max. Geschwindigkeit, Pace, Höhenmeter bergauf/bergab, höchster und tiefster Punkt, Höhendifferenz, steilster Anstieg und steilstes Gefälle, Ø/max. Puls, Ø Trittfrequenz, Fotos, Wegpunkte. Daneben steht jeweils der Wert des ausgewählten Tracks; die Reihenfolge lässt sich mit ‹ › ändern, „Standard“ setzt zurück. Die Auswahl gilt für das Teilbild (PNG) und die Bilanz im Video, wird gemerkt und mit den Einstellungen gesichert. Werte, die ein Track nicht hat, werden ausgelassen.
- **Teilen-Blatt am iPhone, iPad und Android:** GPX, KML, GeoJSON, CSV, SVG, Teilbild, Video, Touren-Report (PDF/PowerPoint), PANO-Standbild und Favoriten öffnen das Teilen-Blatt (In Dateien sichern, Video/Bild sichern, AirDrop, Mail …) statt nur einer Vorschau. Nach längerer Erzeugung (Video, PDF) erscheint unten „Teilen / Sichern …“ zum Antippen. Am Computer wird wie bisher heruntergeladen.

**Geändert**
- Bereiche im EXPORT neu nummeriert (Teilbild 03, Video 04, Touren-Report 05).
- Kennzahlen im Teilbild und im Video passen sich der Anzahl an (2 oder 3 Spalten); lange Werte werden kleiner geschrieben statt abgeschnitten.

**Behoben**
- **Zahlenfelder** (Anim. (s), Foto (s), Bilanz (s), Dauer von Intro/Outro, Max-Puls, Ruhepuls, Max Tempo im EDITOR): Beim Löschen oder Tippen sprang der Wert sofort auf 4 bzw. 10. Jetzt lässt sich frei eingeben; geprüft und auf den erlaubten Bereich gesetzt wird erst beim Verlassen des Felds oder mit Enter.

## V3.3.7 · 21.11.2026 · DEV
**Geändert**
- **Handy und iPad:** Alle Knöpfe, Auswahlfelder und Header-Symbole sind mindestens 44 px groß, Häkchen und Auswahlpunkte 24 px mit größerer Trefferfläche – leichter zu treffen. Am Computer bleibt alles wie bisher.

## V3.3.6 · 21.11.2026 · DEV
**Neu**
- **EDITOR › 01 Tracks verwalten:** alle geladenen Tracks in einer Tabelle – Aufnahme (Datum, Start bis Ende), Dauer mit Pausen, Strecke, Höhenmeter, Datenpunkte (mit Originalzahl beim Laden) und Datenmenge (Original-GPX in der Dateiablage und Größe im Browser), unten die Summe. Je Track: auswählen, ein-/ausblenden, umbenennen, Farbe ändern, als GPX herunterladen, entfernen (mit Rückgängig).
- **ANALYSE › 01 Tracks:** Auswahl des Tracks, der analysiert wird, und Ein-/Ausblenden für Vergleich und Geisterrennen.

**Geändert**
- **TRACK:** Die Track-Liste über der Karte ist ein eigener klappbarer Bereich „Tracks · n“ (auch über „Alle auf/zu“).
- **Header und Ribbon:** Der Header läuft beim Scrollen nach oben aus, die Modul-Leiste (TRACK, ANALYSE, EDITOR, EXPORT, PANO) bleibt am oberen Fensterrand. Das Mausrad über der Leiste scrollt nur die Leiste, nie die Seite; Listen und Fenster scrollen nur in sich.
- Ein offenes Fenster sperrt die Seite dahinter.
- Auswahlfelder am Handy und iPad mit 16 px – kein Hineinzoomen beim Antippen.
- Bereiche in ANALYSE (02–05) und EDITOR (02–03) sind neu nummeriert.

**Behoben**
- **Animation:** Es wird immer der **ausgewählte** Track animiert. Im Modus Zeitstempel richtet sich die Zeitleiste jetzt nach dem ausgewählten Track; andere Tracks laufen bei gemeinsamer Aufnahmezeit in echter Uhrzeit mit, sonst ab ihrem eigenen Start (wie ein Geisterrennen). Vorher bewegte sich bei Aufnahmen an verschiedenen Tagen nur der zuletzt aufgezeichnete Track.

## V3.3.5 · 20.11.2026 · DEV
**Neu**
- **Fahrzeug „EMX“ – HMW FoxE (Elektro-Motocross):** neue Sportart in 2D-Draufsicht, 3D-Raum und Video-Export. In 3D mit schwarzem Akku-Rahmen, goldener Gabel, rotem Federbein, Speichenrädern mit Stollenreifen, langer Sitzbank und Fahrer mit Helm und Brille (Trikot in Track-Farbe). Die Räder drehen sich, der Lenker schlägt in Kurven ein, die Gabel taucht beim Bremsen ein, der Fahrer geht beim Beschleunigen nach vorn; das Rücklicht leuchtet beim Bremsen. Auch im Touren-Report („EMX / HMW FoxE“).
- **Fahrzeug-Größe:** neben der Sportart **− 100 % +** (50 % bis 400 %) – vergrößert oder verkleinert das animierte Fahrzeug bzw. den Dummy in 2D, 3D und im Video. Klick auf die Prozentzahl setzt auf 100 % zurück. Die Größe wird gemerkt und mit den Einstellungen gesichert.

**Behoben**
- **Backup C3 / Stufe storage:** Hochgeladene Dateien (z. B. „HMW.gpx“) kamen aus Safari auf iPhone, iPad und Mac leer am Server an („Datei … konnte nicht hochgeladen werden“, Wolke am Backup-Knopf wurde rot). TRACK.ritl speichert Dateien jetzt als eigene Kopie und stellt bereits gespeicherte Dateien beim ersten Start einmalig um. Nicht mehr lesbare Dateien halten den Abgleich nicht mehr auf.

## V3.3.4 · 20.11.2026 · DEV
**Entfernt**
- **Fenster „Backup“ › 04 Strecken zwischen meinen Geräten** (Senden/Abholen über den Server, 7 Tage). Den Abgleich zwischen deinen Geräten übernimmt das Backup mit **Datenquelle C · Server, Stufe 3 · storage (C3)**: Tracks, Original-GPX, Fotos und Puls-Dateien kommen damit automatisch auf alle Geräte. Bereits über „Strecken zwischen meinen Geräten“ übernommene Tracks bleiben erhalten.

## V3.3.3 · 20.11.2026 · DEV
**Geändert**
- **iPhone/Handy:** Fenster (Backup, Favoriten, Anleitung …) erscheinen als Blatt von unten mit großen Knöpfen – wie in DRIVE.ritl.
- Eingabefelder sind am Handy groß genug, dass das iPhone beim Antippen nicht mehr hineinzoomt.

**Behoben**
- **Home-Bildschirm-App:** Herunterziehen lädt TRACK.ritl jetzt zuverlässig neu – auch wenn man oben am Header (Logo, Knöpfe) zu ziehen beginnt. Nur auf Karte, 3D-Ansicht und Diagrammen bleibt das Wischen für diese reserviert.

## V3.3.2 · 20.11.2026 · DEV
**Geändert**
- **iPhone/Handy:** Die Module TRACK, ANALYSE, EDITOR, EXPORT und PANO stehen als Tab-Leiste unten (wie in DRIVE.ritl) statt als Ribbon oben. Ein neues Modul startet oben auf der Seite.
- In der fixierten Vollbild-Ansicht ist die Tab-Leiste ausgeblendet; Fußzeile und Meldungen liegen über der Leiste.

## V3.3.1 · 20.11.2026 · DEV
**Neu**
- **iPhone/iPad – Zum Home-Bildschirm:** TRACK.ritl zeigt dort das eigene TRACK-Logo statt eines Buchstabens und startet als App im Vollbild (ohne Safari-Leisten), mit dem Namen „TRACK.ritl“.
- **Home-Bildschirm-App:** oben nach unten ziehen zum Aktualisieren (lädt neu und gleicht dabei mit dem Server bzw. Ordner ab). Auf Karte, 3D-Ansicht, Diagrammen und Reglern bleibt das Wischen wie gewohnt.

**Geändert**
- Header, Inhalt, Fußzeile, Fenster und fixierte Ansichten halten Abstand zu Notch, Dynamic Island und Home-Leiste.
- Fenster passen sich am iPhone der sichtbaren Höhe an (auch bei ein-/ausfahrender Safari-Leiste).
- Statusleiste und Browserfarbe folgen Hell/Dunkel; Telefonnummern werden nicht mehr automatisch verlinkt.

**Behoben**
- iPhone/iPad: GPX-/TCX-Dateien und Favoriten (JSON) lassen sich in der Dateiauswahl wählen (waren teils ausgegraut).

## V3.3 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools. Fenster „Backup“ und „Backup einrichten“ sehen in jedem Tool gleich aus.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings** (Ansichts-Favoriten, Ansicht, auf/zu), **2 · datenbank** (zusätzlich Tracks, Wegpunkte, Fotos, Abschnitte, PANO-Markierungen), **3 · storage** (zusätzlich Original-GPX, Fotos und Puls-Dateien) – kurz z. B. C3.
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für TRACK.ritl auf allen Geräten. „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Datenquelle wechseln** mit Rückfrage – der Stand wird dabei übernommen (in den Ordner geschrieben bzw. mit dem Server abgeglichen).
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.
- Ein neues Gerät ohne eigene Tracks übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage – auch wenn TRACK.ritl beim Start etwas länger lädt.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- C · Server mit Stufe 1 gleicht nur die Einstellungen über den Server ab; die Tracks bleiben im Browser.
- „Strecken zwischen meinen Geräten“ steht weiter als 04 im Fenster „Backup“.
- ★ Favoriten › OneDrive & SharePoint nutzt denselben Ordner wie das Backup (Verknüpfen, Zugriff erneuern, Teilen, Übernehmen).
- Alte Backups (V3.2 und älter, auch nur Einstellungen) lassen sich weiter wiederherstellen; Einstellungen, gemerkter Ordner und Speicherort werden übernommen (beim ersten Start lädt TRACK.ritl dafür einmal kurz neu).

**Behoben**
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.

## V3.2 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz:** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt auf allen Geräten und in allen RIEMER Tools – das Backup muss nicht mehr auf jedem Gerät eingerichtet werden. Mit storage und „Server ist die Datenquelle“ werden Original-GPX, Originalfotos und Puls-Dateien auf jedem Gerät abgeglichen.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei B die Stufe der Lizenz (mindestens datenbank), bei A settings, ohne Server-Freigabe höchstens datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Lokal in den Ordner sichern“ bleibt je Gerät (der Ordner muss auf jedem Gerät verknüpft werden).
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt („durch die Lizenz festgelegt“).

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (auch bei Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Gesperrte storage-Zeile unter 02 Zentral: „nur mit ‚Server ist die Datenquelle‘ (Freigabe im Admin)“; Hinweis „nicht freigegeben“: „Freigabe im Admin (Datenquelle ‚Server‘)“ statt „bitte beim Anbieter anfragen“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ (Backup einrichten, Backup-Dialog, Tooltip am Backup-Knopf).

## V3.1 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A: Ändert ein Gerät nur Einstellungen, während ein anderes Gerät die Ordner-Datei neu geschrieben hat, holt es den neueren Stand, statt fälschlich ‚Neuerer Stand im Ordner‘ zu fragen.

## V3.0 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Sprache, Ansicht, Ansichts-Favoriten), fragt TRACK.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten; die Einstellungen gleicht der Server ab. Beim Übernehmen aus dem Ordner bleiben die eigenen Einstellungen erhalten.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommt zuerst die für den Ordner; danach gleicht das Tool mit dem Server neu ab, statt eine veraltete Server-Abfrage zu zeigen.

## V2.9 · 19.11.2026 · DEV
**Geändert**
- Tourbericht (PDF, PPTX, Bild): Fußzeile mit `toolbox@riemer.co` statt riemer.co.

## V2.8 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings`, `datenbank` oder `storage`). TRACK.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit denselben Tracks.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“. Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen.
- **storage über den Server:** Mit „Server ist die Datenquelle“ werden hochgeladene Dateien (Original-GPX, Originalfotos, Puls-Dateien) einzeln am Server abgelegt und auf allen Geräten abgeglichen – zusammen höchstens 50 MB je Lizenz.
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_TRACK-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. TRACK.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“; Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt; der Ordner lässt sich dort direkt verknüpfen.

**Geändert**
- „Server ist die Datenquelle“ ist nur wählbar, wenn die Lizenz im Admin dafür freigegeben ist; sonst ist das Häkchen gesperrt mit Hinweis.
- Status im Backup-Dialog und am Backup-Symbol zeigt die Datenquelle mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.
- Reine Ansichtsänderungen (2D/3D, Farbe, Karte, auf/zu) lösen keinen Abgleich und keine Abfrage aus.
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog.
- Offline-Version: kein Serverzugriff, die Abschnitte „Zentral“ und „Strecken zwischen meinen Geräten“ entfallen.
- Fußzeile: „© 2026 Peter Riemer · toolbox@riemer.co · RIEMER Tools“ mit Mail-Link statt Link auf riemer.co.

## V2.7 · 18.11.2026 · DEV
**Neu**
- Backup-Stufe **storage** (nur lokal): datenbank + alle hochgeladenen Dateien. Unter Backup einrichten › 01 Lokal immer wählbar (mit Anzahl und Größe der Dateien), unter 02 Zentral gesperrt („nur lokal – zentral folgt später“).
- Dateiablage im Browser (RITLF, IndexedDB `track_files`): Original-GPX, Originalfotos und Puls-Dateien werden beim Hochladen dort abgelegt; Fotos zeigen weiter die Vorschau, „Original“ öffnet das Foto in voller Größe.
- Wiederherstellen eines storage-Backups ersetzt die Dateiablage („Enthält n Datei(en) – die Dateiablage wird ersetzt.“).

**Geändert**
- Dateien, die kein Track (auch nicht im Rückgängig-Speicher) und kein Foto mehr verwendet, werden aus der Dateiablage entfernt.
- 360°-Videos (PANO.ritl) bleiben bewusst außerhalb der Dateiablage und des Backups (mehrere GB, nur für die Sitzung).

## V2.6 · 16.11.2026 · DEV
**Neu**
- Strecken zwischen meinen Geräten: unterwegs geladene GPX-Strecken (auch aus DRIVE.ritl) gehen automatisch für 7 Tage auf den Server der RIEMER Toolbox und werden von den anderen Geräten derselben Lizenz übernommen (beim Start, beim Zurückkehren in den Tab, nach Wiederverbindung, jede Minute). Keine dauerhafte Speicherung, zählt zum Kontingent der Lizenz.
- Backup › **04 Strecken zwischen meinen Geräten**: automatisch ein/aus, aktiven Track oder alle senden, jetzt abholen, Liste auf dem Server mit Laden und Löschen.

## V2.5 · 16.11.2026 · DEV
**Neu**
- Übergabe aus DRIVE.ritl: Strecken (GPX) aus anderen RIEMER Tools werden beim Start bzw. bei `#ritl-handoff` aus der Übergabe im Browser übernommen, auch wenn TRACK.ritl schon offen ist (BroadcastChannel). Nur Übergaben an TRACK.ritl, höchstens 10 Minuten alt; danach wird die Übergabe gelöscht. Hinweis „n Strecke(n) aus DRIVE.ritl übernommen“, TRACK.ritl öffnet das Modul TRACK.ritl.

## V2.4 · 16.11.2026 · DEV
**Geändert**
- Header auf den zentralen Header RITL-UI umgestellt (Kit `ritl-ui`, Stand 1.1): App-Bild, Eyebrow, TRACK.ritl mit Edition, Kanal und Version · Datum; rechts Favoriten, Backup (mit Backup-Symbol) und Neu beginnen als eckige Chips, dann `?` · DE/EN · Hell/Dunkel · An-/Abmelden als runde Chips, Toolbox-Logo und „RIEMER Tools“
- Hell/Dunkel, Sprache und Anmelden/Abmelden übernimmt das Kit; künftige Header-Versionen kommen automatisch über den Lizenzserver

**Entfernt**
- Eigener Header-Code der App (React-Header, eigene Knöpfe für Hell/Dunkel, Sprache, Abmelden)

## V2.3 · 15.11.2026 · DEV
**Geändert**
- Header: Anleitung nur noch als runder „?“-Knopf; die Arbeitsschritte (Daten laden, Auswählen, Animieren, Exportieren) entfallen

## V2.2 · 15.11.2026 · DEV
**Geändert**
- Header rechts: RIEMER-Tools-Logo (Link zur Toolbox) vor der Wortmarke „RIEMER Tools“, links daneben dezent „Abmelden“ (angemeldet über die Toolbox) bzw. „Anmelden“ (Datei ohne Lizenz)
- Die schwebende Leiste unten links (Logo, Version, Abmelden) entfällt

## V2.1 · 15.11.2026 · DEV
**Neu**
- Modul **PANO.ritl** (5. Ribbon, #ritl_pano): 360°-Video (equirektangulares MP4/MOV, z. B. Insta360 X6 über Insta360 Studio) lokal abspielen, Blick mit der Maus drehen, Mausrad zoomt
- Kopplung über die Uhrzeit: Videostart aus den MP4-Metadaten (volle Stunden Zeitzone werden ausgeglichen) oder Trackbeginn, Versatz ±s, „Hier abgleichen“; Abgleich je Videodatei gespeichert
- Punkt und Blickfächer auf der Karte, Höhenprofil mit Wiedergabe-Strich; Klick auf Karte, Profil oder Markierung springt im Video
- Markierungen (Info, Achtung, Mangel, Fotomotiv) mit Zeit, Position und Blickrichtung; Übernahme als Wegpunkt
- Standbild der aktuellen Blickrichtung als JPG speichern oder als Foto an der Position ablegen (ANALYSE.ritl › Fotos)
- Arbeitsfläche fixieren (Esc löst)

**Geändert**
- Ribbon mit 5 Modulen: schmale Fenster blenden Hashtags und Kurzbeschreibungen aus statt über den Rand zu ragen
- Markierungen und Abgleich gehören zum Backup (Stufe datenbank); das Video selbst nicht

## V2.0 · 15.11.2026
**Neu**
- In die RIEMER Toolbox übernommen: Aufruf mit Lizenzschlüssel, Edition, Kanal (BETA/DEV) und Version kommen vom Lizenzserver
- Backup-Stufen `settings` (Theme, Sprache, Ansicht, auf/zu, Favoriten) und `datenbank` (zusätzlich Tracks, Wegpunkte, Fotos, Abschnitte)
- Zentrales Backup in der RIEMER Toolbox (EU/Frankfurt, Historie 10 Tage, automatisch nach Änderungen, offline vorgemerkt)
- Modal „Backup einrichten“ beim ersten Start mit erwarteter Größe je Stufe
- Backup-Symbol am Header-Knopf: Ordner = Lokal, Wolke = Server, Farbe zeigt den Zustand

**Geändert**
- Schrift Inter und JetBrains Mono selbst gehostet über die RIEMER Toolbox (keine Google Fonts mehr, DSGVO)
- Wiederherstellen fragt vor dem Überschreiben nach; ein settings-Backup lässt die Tracks unverändert
- Auslieferung als eine einzige HTML-Datei

**Entfernt**
- Reste aus AI Studio (Gemini-Anbindung, Server-Abhängigkeiten, Beispielbilder)

## V1.9 · 15.11.2026
Stand aus AI Studio (zusammengefasst):
- TRACK.ritl: GPX laden, 2D-Draufsicht (Relief, OpenTopoMap, OSM) und 3D-Raum (three.js mit Gelände), Zeitleiste 1×–500× nach Zeitstempel oder Strecke, Geisterrennen mehrerer Tracks, Sportart-Figuren, Kamera folgen/umkreisen
- ANALYSE.ritl: Abschnitte (Anstiege/Abfahrten), Fotos per EXIF, Puls-Zonen, Extremwerte im Höhenprofil
- EDITOR.ritl: Bereinigen, Schneiden, Glätten mit Rückgängig
- EXPORT.ritl: GPX, KML, SVG, Social Card (PNG), WebM-Video, Tour-Bericht
- Wegpunkte, Notizen, Fotos an Position, Ansicht-Favoriten, Backup lokal und OneDrive/SharePoint, Deutsch/Englisch, Hell/Dunkel, Fixieren
