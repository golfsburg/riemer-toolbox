# CHANGELOG – MESH.ritl (RIEMER Tools)

Kompakter 3D-Viewer und -Editor im Browser für den 3D-Druck · #ritl_mesh
Neueste Version oben. V1.0–V1.8 als Einzeldatei entwickelt (nicht in der Toolbox veröffentlicht).

## V2.7.3 · 20.11.2026 · DEV
**Geändert**
- **Rundungen und Fasen bleiben beim Skalieren gleich:** Wird ein Grundkörper mit abgerundeten oder gefasten Kanten skaliert (Prozent, Maßfelder X/Y/Z oder Werkzeug „Skalieren“), passt MESH seine Maße an und baut ihn neu – der Radius bzw. die Fase bleibt unverändert. Die neuen Maße stehen danach auch unter „⚙ Maße“. „Rückgängig“ stellt den alten Stand wieder her.
- Zylinder, Kegel, Rohr, Prisma und Pyramide lassen sich so nur mit gleichem Faktor in X und Y skalieren, die Halbkugel nur proportional. Sonst wird wie bisher verzerrt und ein Hinweis erscheint.

## V2.7.2 · 20.11.2026 · DEV
**Neu**
- **Kanten abrunden oder fasen:** Im Fenster „Grundkörper“ gibt es den neuen Bereich **Kanten**: scharf, abgerundet (Radius r in mm) oder gefast. Das gilt für Quader, Zylinder, Rohr, Halbkugel, Kegel, Pyramide, Prisma und Keil. Kugel und Torus sind schon rund.
- **Unterseite scharf lassen:** Auf Wunsch bleibt die Grundfläche eben und kantig, damit der Körper voll auf dem Druckbett aufliegt. Standardmäßig aus.
- Die Rundung bleibt beim Speichern, in den Favoriten und bei „⚙ Maße“ erhalten und lässt sich jederzeit ändern. Boolesche Operationen (Vereinigen, Abziehen …) übernehmen die gerundeten Kanten.

**Hinweis**
- Ist der Radius zu groß für die Maße, wird er auf den größten möglichen Wert begrenzt (Anzeige im Fenster). Breite, Tiefe und Höhe bleiben gleich; nur spitze Ecken (Kegel, Pyramide, Keil) werden durch das Runden etwas niedriger.

## V2.7.1 · 20.11.2026 · DEV
**Neu**
- **Perspektive oder Orthogonal:** Umschalter in der Ansichtsleiste über dem Modellbereich (Taste **P**). Orthogonal zeigt die Modelle maßstäblich ohne Fluchtpunkt – parallele Kanten bleiben parallel. Drehen, Zoomen, Einpassen, die Ansichten (Iso, Oben, Vorne …), Auswählen per Klick und die Werkzeuge zum Verschieben/Drehen funktionieren in beiden Projektionen. Die Wahl bleibt gespeichert.

**Behoben**
- Ist ein Fenster offen (z. B. Backup, Anleitung, Grundkörper), scrollt die Seite dahinter nicht mehr mit, wenn man im Fenster scrollt.

## V2.7 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools – gleiche Fenster und Abläufe wie in den anderen Tools.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings** (Ansicht, Hell/Dunkel, Favoriten), **2 · datenbank** (+ Szene), **3 · storage** (+ alle Geometrien) – kurz z. B. C3.
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für MESH.ritl auf allen Geräten, „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Datenquelle wechseln** mit Rückfrage – die Szene wird dabei übernommen (in den Ordner geschrieben bzw. mit dem Server abgeglichen).
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.
- **C3:** Die Geometrien gehen über den Server auf alle Geräte; ein neues Gerät baut die Szene samt Modellen ohne Rückfrage auf.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- ★ Favoriten teilen im Ordner nutzt den Ordner aus dem Backup (02 OneDrive & SharePoint) wie bisher.
- Backups bis V2.6 (auch mit Geometrien) und reine Szenen-Dateien lassen sich weiter wiederherstellen; „automatisch im Ordner sichern“ bleibt eingeschaltet.

**Behoben**
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.

## V2.6 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz:** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt auf allen Geräten und in allen RIEMER Tools – das Backup muss nicht mehr auf jedem Gerät eingerichtet werden. Mit storage werden bei „Server ist die Datenquelle“ auch die Geometrien auf jedem Gerät abgeglichen.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei B die Stufe der Lizenz (mindestens datenbank), bei A settings, ohne Server-Freigabe höchstens datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „automatisch im verknüpften Ordner sichern“ bleibt je Gerät (der Ordner muss auf jedem Gerät verknüpft werden).
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt („durch die Lizenz festgelegt“). Auch die Stufe im Backup-Dialog unter 01 Lokal ist dann fest.

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Gesperrte storage-Zeile unter 02 Zentral: „nur mit ‚Server ist die Datenquelle‘ (Freigabe im Admin)“; Hinweis bei fehlender Freigabe: „Freigabe im Admin“ statt „beim Anbieter anfragen“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“; dort wird nichts mehr zentral gesichert.

**Behoben**
- Datenquelle B (Server ist die Datenbank): storage ist unter 02 Zentral immer wählbar, auch wenn die Prüfung am Server gerade nicht klappt, und springt nach „Übernehmen“ nicht mehr auf datenbank zurück.

## V2.5 · 19.11.2026 · DEV
**Geändert**
- Nach „Stand aus dem Ordner übernehmen“, „Serverstand übernehmen“ und „Backup wiederherstellen“ lädt MESH.ritl die Seite nicht mehr neu, sondern baut die Szene direkt neu auf. Favoriten und Hell/Dunkel gelten sofort.
- Ein neues Gerät ohne eigene Modelle übernimmt den Stand aus dem Ordner bzw. vom Server ohne Rückfrage.

**Behoben**
- Direkt nach einer Übernahme konnten beim Neuladen die gerade gespeicherten Daten fehlen (Szene, Favoriten, Ordnerstand) – das Gerät stand dann leer da und fragte erneut. Da nicht mehr neu geladen wird, tritt das nicht mehr auf; fehlen die Daten im Browser doch einmal, holt MESH.ritl sie still aus dem Ordner bzw. vom Server zurück.

## V2.4 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A: Ändert ein Gerät nur Einstellungen, während ein anderes Gerät die Ordner-Datei neu geschrieben hat, holt es den neueren Stand, statt fälschlich ‚Neuerer Stand im Ordner‘ zu fragen.

## V2.3 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Sprache, Ansicht, Favoriten), fragt MESH.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“ und lädt nicht unnötig neu. Für den Ordner zählt nur noch die Szene samt Dateien; die Einstellungen gleicht der Server ab.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommen sie nacheinander; nach „Meinen Stand behalten“ gleicht MESH.ritl den Server neu ab, statt eine veraltete Abfrage zu zeigen.
- „Ordner verknüpfen“ in „Backup einrichten“: Der Abgleich startet erst mit „Übernehmen“, die Abfrage schiebt sich nicht mehr über das offene Fenster.

## V2.2 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (Stufe `settings`, `datenbank` oder `storage`). MESH.ritl lädt dann beim Start den Serverstand und schreibt jede Änderung nach wenigen Sekunden zurück – so arbeiten mehrere Geräte mit derselben Szene. Ein neuerer Stand wird übernommen und die Ansicht neu geladen.
- Jeder Stand am Server hat eine Nummer. Hat ein anderes Gerät inzwischen gespeichert und gibt es auch hier Änderungen, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“. Neuere Stände anderer Geräte werden beim Zurückkehren ins Fenster und jede Minute erkannt und ohne eigene Änderungen automatisch geladen.
- **storage über den Server:** Mit „Server ist die Datenquelle“ werden die Geometrien der Modelle (Dateiablage) einzeln am Server abgelegt und auf allen Geräten abgeglichen – zusammen höchstens 50 MB je Lizenz.
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_MESH-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. MESH.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“; Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt.

**Geändert**
- „Server ist die Datenquelle“ ist nur wählbar, wenn die Lizenz im Admin dafür freigegeben ist; sonst ist das Häkchen gesperrt mit Hinweis.
- Status im Backup-Dialog und am Backup-Symbol zeigt die Datenquelle mit Stand-Nummer. Ohne Netz wird gesammelt und beim Wiederverbinden abgeglichen; die 10-Tage-Historie läuft weiter.
- Bei Variante A ersetzt der Ordner-Abgleich das bisherige „automatisch im Ordner sichern“ (kein doppeltes Schreiben derselben Datei).
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog.

**Behoben**
- Ausgeblendete Häkchen in den Backup-Dialogen werden wirklich ausgeblendet.

## V2.1 · 19.11.2026 · DEV
**Neu**
- Ansicht sperren: „🔓 Ansicht“ in der Ansichtsleiste bzw. Taste V – Kamera fest (kein Drehen, Zoomen, Einpassen, Ansichtswürfel), Objekte bleiben wähl- und bearbeitbar; die gesperrte Ansicht bleibt nach dem Neuladen.
- Szene wird automatisch im Browser gespeichert (Modelle, Lage, Farben, Grundkörper, SCAD-Parameter) und beim Öffnen wiederhergestellt; Geometrien in der Dateiablage RITLF (IndexedDB `mesh_files`).
- Backup-Stufen nach RIEMER-Webapp-Design: settings · datenbank · storage. Backup-Dialog mit 01 Lokal (eine Datei `Backup_MESH-ritl.json`, wird überschrieben), 02 OneDrive & SharePoint (verknüpfter Ordner, automatisch sichern), 03 Zentral (tool-backup, Historie 10 Tage, storage gesperrt). Modal „Backup einrichten“ beim ersten Start mit komprimierten Größen.
- ★ Favoriten: Grundkörper-Vorlagen (Form, Maße, Farbe) speichern und einfügen; Export/Import und Team-Datei `MESH-ritl_Favoriten.json` im OneDrive-Ordner.

**Geändert**
- Header nach Regeln: nur ★ Favoriten (mit Zähler), Backup (mit Backup-Symbol Ordner/Wolke), Neu beginnen. „Datei öffnen“ und „Konverter“ nur noch in der Werkzeugleiste.
- „Neu beginnen“ leert Szene und gespeicherte Geometrien; Einstellungen und Favoriten bleiben.

## V2.0 · 19.11.2026
**Neu**
- Grundkörper erstellen: Quader, Zylinder, Rohr, Kugel, Halbkugel, Kegel, Pyramide, Prisma, Torus, Keil – Maße in mm, nachträglich über „⚙ Maße“ änderbar.

**Geändert**
- Objekte lassen sich erst nach dem Auswählen verschieben; Klick ins Leere hebt die Auswahl auf.
- Ansichtsknöpfe durch den Ansichtswürfel ersetzt (Tasten 1–5 bleiben).

## V1.9 · 19.11.2026
**Neu**
- Abmessungen wahlweise proportional oder einzeln: Schalter „🔗 proportional / einzeln“ im Objekt-Fenster (gekoppelt mit Box 02).
- Achsen-Werkzeug „⤢ Skalieren“ (R) mit Griffen je Achse; Klick auf einen Griff öffnet die Eingabe des Zielmaßes in mm (Schnellwerte 50/90/110/200 %).

## V1.8 · 19.11.2026
**Neu**
- „⇥ Auf Ebene schieben“ und „⊡ Fläche an Fläche“: Fläche am Objekt und Zielfläche an einem anderen Objekt anklicken.
- Ausrichten (links/rechts, vorne/hinten, unten/oben, Mitte X/Y/Z) und Verteilen in X/Y/Z, Bezug Auswahl oder Basis-Objekt.
- Ansichtswürfel unten links (Flächen, Kanten, Ecken anklickbar).

## V1.7 · 19.11.2026
**Neu**
- Achsen-Werkzeug zum Verschieben (W) und Drehen (E) mit Maßeingabe per Klick auf Pfeil/Ring, Umschalter Global/Objekt-Koordinaten (L), Einrasten mit Shift.

## V1.6 · 19.11.2026
**Neu**
- Kombinieren mit Manifold: Vereinigen, Abziehen, Schnittmenge, Einlegen/Eingießen (mit Spiel), konvexe Hülle, an Höhe teilen, in Einzelteile trennen – mit Rückgängig.

## V1.5 · 19.11.2026
**Neu**
- Objekte auf dem Druckbett ziehen (auch mehrere gemeinsam).
- ↺ Zurücksetzen an allen Bereichen mit änderbaren Werten (Objekte auf Ladezustand, Einstellungen, Konverter, SCAD-Parameter und -Code).

## V1.4 · 18.11.2026
**Neu**
- Parametrische OpenSCAD-Dateien: Customizer-Parameter, Code bearbeiten, Rendern im Browser, `.scad` speichern, Vorlagen „Box mit Deckel“ und „Rohr-Clip“.

**Behoben**
- SVG/PNG/WEBP ließen sich in Safari nicht einlesen (SVG wird jetzt selbst gezeichnet, Bilder über createImageBitmap, Fehler werden angezeigt).

## V1.3 · 18.11.2026
**Neu**
- Mehrfachauswahl (Shift/Strg+Klick, „⊕ Mehrfach“, Strg+A).
- Konverter: Bild/SVG/Text → 3D als Logo (Inlay/Erhaben/Flach mit Platte), Relief oder Lithophane.

## V1.2 · 18.11.2026
**Neu**
- Kontext-Fenster in der 3D-Ansicht bei Objektauswahl.

## V1.1 · 18.11.2026
**Neu**
- Bearbeiten (Position, Größe, Drehen, Spiegeln, Fläche aufs Bett, Duplizieren, Rückgängig) und Export für den Slicer (3MF mit Farben, STL je Teil, STL zusammengeführt).

**Behoben**
- STL-Dateien ließen sich über „klicken zum Auswählen“ nicht öffnen.

## V1.0 · 18.11.2026
**Neu**
- Erste Version: STL, 3MF, OBJ, PLY, GLB/GLTF anzeigen, Teile-Liste, Info, Druckbett, Schnitt in Z, PNG, Hell/Dunkel.
