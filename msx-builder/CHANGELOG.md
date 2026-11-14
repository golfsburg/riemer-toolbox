# CHANGELOG – MSX-Builder (RIEMER Tools)
============================================

Start: index.html im Browser öffnen (Chrome/Edge/Firefox) oder auf GitHub Pages ablegen.
Beim Öffnen wird die Beispielzeichnung „Beispiel_Schnitt.dxf“ geladen.

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
