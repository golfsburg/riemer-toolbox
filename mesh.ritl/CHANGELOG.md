# CHANGELOG – MESH.ritl (RIEMER Tools)

Kompakter 3D-Viewer und -Editor im Browser für den 3D-Druck · #ritl_mesh
Neueste Version oben. V1.0–V1.8 als Einzeldatei entwickelt (nicht in der Toolbox veröffentlicht).

## V1.9 · 19.11.2026 · DEV
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
