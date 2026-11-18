# MESH.ritl – RIEMER Tools

Kompakter 3D-Viewer und -Editor im Browser für den 3D-Druck · #ritl_mesh

🔒 Teil der RIEMER Toolbox – der Tool-Code wird nach der Lizenzprüfung vom Server geladen (`index.html` ist nur der Loader). Läuft lokal im Browser, Dateien verlassen den Rechner nicht.

## Funktionen
- **Öffnen:** STL, 3MF, OBJ, PLY, GLB/GLTF (mehrere Dateien gleichzeitig), OpenSCAD (`.scad`)
- **Ansicht:** Druckbett (z. B. Anycubic Kobra S1 250 × 250), Standardansichten, Ansichtswürfel, Schnitt in Z, Drahtgitter, Kanten, PNG-Bild, Arbeitsfläche fixieren, Hell/Dunkel
- **Info:** Abmessungen, Dreiecke, Volumen, Oberfläche, Gewicht je Material, „passt aufs Bett“
- **Auswahl:** Klick, Shift/Strg+Klick, „⊕ Mehrfach“, Strg+A; Kontext-Fenster mit den wichtigsten Funktionen
- **Bearbeiten:** auf dem Bett ziehen, Achsen-Werkzeug (Verschieben/Drehen/Skalieren, Global/Objekt-Koordinaten, Maßeingabe per Klick), Größe proportional oder je Achse, Drehen, Spiegeln, Fläche aufs Bett, Auf Ebene schieben, Fläche an Fläche, Ausrichten & Verteilen, Duplizieren, Nebeneinander, Rückgängig, Zurücksetzen
- **Kombinieren (Manifold):** Vereinigen, Abziehen, Schnittmenge, Einlegen/Eingießen mit Spiel, konvexe Hülle, an Höhe teilen, in Einzelteile trennen
- **Konverter:** PNG/JPG/WEBP/GIF/BMP/SVG oder Text → 3D (Logo mit Farben als Teile: Inlay/Erhaben/Flach, Relief, Lithophane)
- **Parametrisch:** OpenSCAD-Dateien mit Customizer-Parametern laden, anpassen, rendern (openscad-wasm), Code bearbeiten, `.scad` speichern; Vorlagen in [`vorlagen/`](vorlagen/)
- **Export für den Slicer:** 3MF (Teile mit Farben, als ein Objekt), STL je Teil (ZIP), STL zusammengeführt

## Nutzung
Über die RIEMER Toolbox mit Lizenzschlüssel öffnen (Chrome, Edge, Safari, Firefox). Beim ersten Öffnen wird three.js geladen, OpenSCAD (ca. 11 MB) und Manifold (ca. 0,6 MB) erst bei Bedarf – danach aus dem Browser-Cache.

## Bibliotheken
three.js r147 (MIT) · manifold-3d 3.5.5 (Apache-2.0) · openscad-wasm-prebuilt 1.2.0 (GPL-2.0, wird zur Laufzeit geladen, nicht mitgeliefert)

## Lizenz
Proprietär – siehe [LICENSE](LICENSE).

© 2026 Peter Riemer · toolbox@riemer.co · RIEMER Tools
