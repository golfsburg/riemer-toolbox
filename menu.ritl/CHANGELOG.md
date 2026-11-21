# CHANGELOG – MENU.ritl (RIEMER Tools)

Speisekarten- & Menü-Designer: Sets, Gänge, Speisendatenbank mit Allergenen (LMIV), 6 Druckformate, Export als PDF, PPTX und Druck in exakt einer Seite · #ritl_menu
Neueste Version oben. Versionen ≤ V1.7 nachträglich rekonstruiert (aus `tool_versions`, Quellen-ZIPs und Repo-Historie).

## V3.0.15 · 21.11.2026 · DEV
**Neu**
- **Logos beliebig oft frei platzieren:** In MAP.ritl gibt es „＋ Logo“ (auch bei Editor AUS): eigene Logos, Siegel-Vorlagen oder eine neue Datei wählen – das Logo liegt sofort frei auf der aktuellen Seite. Dasselbe Logo lässt sich so oft platzieren wie nötig; in STYLE › Logos platziert ＋ bei einem Logo es noch einmal. Weitere Platzierungen erscheinen leicht versetzt.
- **Größe mit der Maus:** Ein Griff an der rechten unteren Ecke ändert die Größe direkt in der Vorschau (Seitenverhältnis bleibt). Der Griff erscheint nur in MAP, nie im Druck oder Export.
- **Fang in der Mitte:** Beim Ziehen rastet ein Logo in der Mitte des Blatts, jeder Seite (Klappkarte, Wickelfalz) und jeder Spalte ein – waagrecht und senkrecht, mit roter Hilfslinie. Alt-Taste gedrückt halten = ohne Fang.

**Geändert**
- Neue Logos und Siegel-Vorlagen haben keine feste Zuordnung mehr (Kopf rechts usw.), sondern liegen frei mittig auf der aktuellen Seite. Feste Platzierungen sind weiter wählbar.

## V3.0.14 · 21.11.2026 · DEV
**Geändert**
- **Editor AUS:** Ein Klick auf eine Karte in SETS.ritl aktiviert das Set und öffnet es direkt in MAP.ritl. Mit Editor EIN bleibt es wie bisher (Klick aktiviert nur).

## V3.0.13 · 21.11.2026 · DEV
**Neu**
- **Weitere Farben im Designstil:** Neben der Akzentfarbe lassen sich beliebig viele eigene Farben mit Namen anlegen, ändern und entfernen (z. B. „Wein-Rot“, „Gold“). Jedes Element kann unter „Farbe“ eine dieser Farben verwenden. Eine Änderung an der Farbe gilt sofort überall, wo sie verwendet wird; die Liste zeigt, wie viele Elemente sie nutzen. Wird eine Farbe entfernt, behalten die Elemente ihren Farbton als eigene Farbe.

## V3.0.12 · 21.11.2026 · DEV
**Neu**
- **Menüs & Saison kopieren:** Jede Karte hat einen Knopf zum Kopieren. Die Kopie übernimmt alle Angaben und Speisen, heißt „… (Kopie)“, ist zunächst inaktiv und öffnet sich gleich zum Anpassen (Name, Zeitraum, Speisen).
- **Eine Speise kann in mehreren Menüs bzw. Saisonen sein.** Die Auswahl zeigt „auch in …“; Filter, „In Karte einfügen“ und Excel (Spalte „Saison-Tag“, mehrere durch Komma) berücksichtigen alle Zugehörigkeiten. Im Fenster „Speise“ ändert die Auswahl „Menü / Saison“ nur die erste Zugehörigkeit, weitere bleiben erhalten.

## V3.0.11 · 21.11.2026 · DEV
**Geändert**
- **Designstil: Schriftgröße in Punkt (pt)** statt in %: Jedes Element zeigt seine aktuelle Größe wie im Druck (z. B. Speise 9 pt, Gang-Überschrift 10,5 pt) und lässt sich direkt in pt einstellen (in 0,5-pt-Schritten). Größen, die das Format selbst anders setzt (z. B. größerer Name auf der Titelseite), wachsen im gleichen Verhältnis mit.

## V3.0.10 · 21.11.2026 · DEV
**Geändert**
- **Menüpreis-Hinweis ohne grauen Hintergrund** (z. B. „3-Gang-Menü € 58,00“) – neben der Gang-Überschrift und mittig unter dem Gang.
- **Fußzeile immer am unteren Rand des Browserfensters** (wie im Skill): bei wenig Inhalt unten am Fenster, bei langem Inhalt beim Scrollen immer sichtbar; Hinweise (Toast) erscheinen darüber. Die Vorschau rechnet die Fußzeile mit ein und wird nicht verdeckt.

## V3.0.9 · 21.11.2026 · DEV
**Geändert**
- **Designstil bearbeiten:** Statt „Standard“ zeigt jedes Feld den tatsächlich verwendeten Wert – Schrift (z. B. Playfair Display), Stärke, gerade/kursiv, Schreibung, Sperrung und Farbe (Akzent oder Farbwert). Ein neuer Grundstil aktualisiert die Anzeige sofort. Geänderte Elemente sind blau markiert; „Zurücksetzen“ holt die Werte des Grundstils zurück. Eine Farbe wählen stellt das Element direkt auf diese Farbe.

## V3.0.8 · 21.11.2026 · DEV
**Geändert**
- **Editor AUS:** Im Modellbereich (MAP.ritl) lässt sich weiter bearbeiten – Klick öffnet das Bearbeiten-Fenster, Doppelklick verschiebt, Bilder lassen sich ziehen, das Raster ist sichtbar. Editor AUS blendet nur CARD, STYLE und die Werkzeugleisten von MAP aus.
- **DISHES.ritl:** „Gänge & Kategorien“ steht jetzt als Box 03 unter „02 Menüs & Saison“.

## V3.0.7 · 21.11.2026 · DEV
**Neu**
- **Umschalter Editor EIN/AUS im Header** (Stift mit „EIN“/„AUS“): Editor EIN zeigt den vollen Umfang. Editor AUS zeigt nur SETS, MAP und DISHES; MAP ist dann eine reine Ansicht – nur Innen-/Außenseite, Zoom, Fixieren, Drucken, PDF und PPTX, die Karte füllt das Fenster, ohne Raster, Werkzeuge und Bearbeiten per Klick. Die Wahl bleibt nach dem Neuladen erhalten und gehört zu den Einstellungen im Backup.

## V3.0.6 · 21.11.2026 · DEV
**Geändert**
- **Faltmarken dezent:** Klappkarte und Wickelfalz zeigen an jedem Falz nur noch einen feinen 5-mm-Strich am oberen und unteren Blattrand – keine durchgehende gestrichelte Linie und keine Spaltenlinie mehr über die ganze Höhe. Beim Aufsteller-Druckbogen bleiben die kurzen Striche am linken und rechten Rand, die durchgehende Falzlinie entfällt; die Leiste „Falzkante“ in der Vorschau ist nur noch ein kleiner Hinweis.

## V3.0.5 · 21.11.2026 · DEV
**Neu**
- **Eigene Designstile:** In STYLE.ritl › Designstil lässt sich jeder Stil mit „anpassen …“ als eigener Stil anlegen, umbenennen, bearbeiten, duplizieren und löschen. Ein Stil umfasst Grundstil, Akzentfarbe, Rahmen und die Formatierung jedes Elements. Eigene Stile gelten in allen Sets und sind Teil des Backups.
- **Jedes Element einzeln formatieren:** Restaurantname, Kartentitel, Slogan, Datum, Gang-Überschrift, Gang-Untertitel, Menüpreis-Hinweis, Speise, Beschreibung & Beilagen, Preis, Allergenkürzel, Weinempfehlung, Text-Überschrift, Text, Fußtext, Kontakt, Allergenlegende und Seitenkopf – je Schrift, Größe (%), Stärke, kursiv, Versalien, Sperrung und Farbe (Standard, Akzent oder eigene). Das Stil-Fenster öffnet sich links, die Vorschau rechts zeigt jede Änderung sofort.
- **Neue Schriften:** Playfair Display, Cormorant Garamond, Cinzel und Lora (selbst gehostet), dazu Inter, Oswald, Syne, JetBrains Mono, Georgia und Arial. Die bisherigen Stile „Klassisch-Elegant“, „Rustikales Wirtshaus“ und „Fine Dining“ zeigen ihre Überschriften damit jetzt in der vorgesehenen Schrift statt in Georgia.
- **Menüs & Saison – Speisen direkt im Fenster:** Beim Bearbeiten eines Menüs bzw. einer Saison stehen alle Speisen mit Suche zur Auswahl (Haken = gehört dazu), ✎ öffnet die Speise zum Bearbeiten. Übernommen wird beim Speichern.

**Geändert**
- **Preise immer als „€ 24,50“:** Währung vorne, immer zwei Nachkommastellen – auf der Karte, im Export und in der App. Die Option „2 Nachkommastellen“ entfällt.
- **„Saison-Aktionen“ heißen jetzt „Menüs & Saison“** (Box, Knöpfe, Auswahl im Gericht, Einfügen in die Karte).

## V3.0.4 · 21.11.2026 · DEV
**Neu**
- **Überschrift je Gang ausrichten:** Im Gang (CARD.ritl und MAP-Fenster › Inhalt) gibt es „Überschrift ausrichten“: wie der Gang, links, mittig oder rechts – unabhängig davon, wie die Speisen stehen.
- **Kopf und Fuß je Spalte:** Bei Klappkarte, Wickelfalz (innen und außen) und Aufsteller mit 2 Spalten hat jede Spalte bzw. Seite einen eigenen Bereich „Kopf …“ und „Fuß …“ (z. B. „Kopf Seite 3“, „Fuß vorne links“). Gänge und Texte lassen sich dort einzeln hineinstellen; in MAP.ritl ist jeder dieser Bereiche einzeln anklickbar. Bisherige Kopf-Inhalte stehen im Kopf der ersten, Fuß-Inhalte im Fuß der letzten Spalte.
- **Logos, Siegel und Bilder frei platzieren:** „Bild frei auf dem Blatt …“ (STYLE › Logos oder Platzierung „Frei auf dem Blatt“ bei jedem Logo) legt PNG, JPG, SVG oder WebP auf eine Seite des Formats (Innen-/Außenseite, Vorder-/Rückseite). In MAP.ritl mit der Maus an jede Stelle ziehen; ein Klick öffnet Breite, Lage in mm, Drehung, Deckkraft, „Hinter dem Text“ (Wasserzeichen), Mittig, Duplizieren und Entfernen. Erscheint in Vorschau, Druck, PDF und PPTX.

**Geändert**
- STYLE › Logos heißt jetzt „Logos, Siegel & Bilder“.

## V3.0.3 · 21.11.2026 · DEV
**Geändert**
- **MAP.ritl:** Das Bearbeiten-Fenster eines Elements schließt jetzt auch mit einem Klick daneben in den Modellbereich – nicht nur mit Esc oder „Fertig“ (auch bei fixierter Arbeitsfläche). Markieren im Fenster und Loslassen daneben schließt nicht.

**Behoben**
- Mausrad über den Leisten (Modul-Leiste, Block-Leiste in CARD.ritl, Reiter im Bearbeiten-Fenster) scrollte die ganze Seite. Jetzt scrollt das Rad dort nur die Leiste waagrecht; passt sie ins Fenster, bleibt alles stehen.

## V3.0.2 · 21.11.2026 · DEV
**Neu**
- **Speisen duplizieren:** In DISHES.ritl hat jede Speise einen Knopf zum Duplizieren. Die Kopie öffnet sich mit allen Angaben (Preis, Allergene, Zutaten, Saison …) zum Anpassen und steht nach dem Speichern direkt hinter dem Original.
- **Gänge & Kategorien verwalten:** Neue Box „02 Gänge & Kategorien“ in DISHES.ritl (und Knopf „+ Gang / Kategorie“): Gänge anlegen, umbenennen, in der Reihenfolge verschieben und löschen. Beim Löschen wandern die Speisen in den Gang darüber. Die Reihenfolge gilt für Filter, Speisen-Auswahl in CARD.ritl, den Dialog „Speise“ und den Excel-Export. 👁 zeigt die Speisen eines Gangs.
- Gänge sind Teil des Backups (Stufe datenbank) und lassen sich mit „Rückgängig“ zurücknehmen.

**Geändert**
- „Saison-Aktionen“ ist jetzt Box 03.
- Sprungziele (z. B. „Speisen dieses Gangs anzeigen“) landen nicht mehr unter der oben klebenden Modul-Leiste.

## V3.0.1 · 21.11.2026 · DEV
**Neu**
- **Preise einzeln ausblenden:** In CARD.ritl (und im Bearbeiten-Fenster von MAP.ritl) hat jede Speise im Gang einen Knopf **€** – ein Klick blendet ihren Preis in der Karte aus, ein zweiter zeigt ihn wieder. Der Sonderpreis bleibt dabei erhalten.
- **„Preise in diesem Gang ausblenden“:** blendet alle Preise eines Gangs auf einmal aus (z. B. für Menü-Gänge mit Gesamtpreis).

**Geändert**
- **Header läuft beim Scrollen aus:** Beim Scrollen nach unten verschwindet der Header, die Modul-Leiste (SETS · MAP · CARD · STYLE · DISHES) bleibt oben sichtbar – in CARD.ritl auch die Leiste mit den Inhaltsblöcken. Die Vorschau sitzt direkt darunter.
- **Scrollen nur im Bereich der Maus:** Das Mausrad scrollt nur den Bereich unter dem Mauszeiger (Vorschau, Speisenauswahl, Leisten, Fenster). Ist er am Ende, scrollt die Seite im Hintergrund nicht mehr mit. Bei offenen Fenstern steht die Seite still.
- Am Handy stehen die Knöpfe einer Speise unter dem Namen, damit der Name lesbar bleibt.

## V3.0 · 19.11.2026 · DEV
**Neu**
- **Einheitliches Backup (ritl-bk 2.0, S-17):** Das Backup kommt jetzt aus dem gemeinsamen Baustein aller RIEMER Tools. Fenster „Backup“ und „Backup einrichten“ sehen in jedem Tool gleich aus.
- **Neue Begriffe:** Datenquelle **A · Lokal**, **B · Ordner**, **C · Server** und Stufe **1 · settings** (Hell/Dunkel, Ansicht, Raster, Favoriten), **2 · datenbank** (zusätzlich Sets, Gerichte, Saison-Aktionen, Bilder), **3 · storage** (zusätzlich die hochgeladenen Logos) – kurz z. B. C3.
- **„Backup einrichten“:** zeigt oben, was die Lizenz höchstens erlaubt (z. B. „Lizenz: höchstens C3“) und das Kontingent. Du wählst Datenquelle und Stufe darunter; was über der Lizenz liegt, ist gesperrt („· durch die Lizenz begrenzt“). Die Wahl gilt für MENU.ritl auf allen Geräten. „Vorgabe der Lizenz verwenden“ setzt sie zurück.
- **Datenquelle wechseln** mit Rückfrage – der Stand wird dabei übernommen (in den Ordner geschrieben bzw. mit dem Server abgeglichen).
- **Fenster „Backup“ › 03 Zentral:** Stände der Historie lassen sich mit 🗑 löschen; darunter steht die Belegung „x von y MB“.
- Ein neues Gerät ohne eigene Sets übernimmt den Stand vom Server bzw. aus dem Ordner ohne Rückfrage; mit C3 kommen die hochgeladenen Logos mit und erscheinen sofort in Vorschau und Export.

**Geändert**
- Mit Lizenz gilt die Vorgabe sofort, ohne dass sich „Backup einrichten“ öffnet (nur bei B ohne verknüpften Ordner).
- C · Server mit Stufe 1 gleicht nur die Einstellungen über den Server ab; die Sets bleiben im Browser.
- „Speicher“ (Größen, „Bilder verkleinern“) steht jetzt als 04 im Fenster „Backup“.
- ★ Favoriten › OneDrive & SharePoint nutzt denselben Ordner wie das Backup (Verknüpfen, Zugriff erneuern, Teilen, Übernehmen).
- Alte Backups (V2.9 und älter, auch MENU.ritl V2.x ohne Kopf und Dateien mit Zeitstempel) lassen sich weiter wiederherstellen; der Ordner, der gemerkte Speicherort und die Einstellungen bleiben erhalten.

**Behoben**
- Ein neues Gerät mit Datenquelle C oder B fragt nicht mehr fälschlich „Neuerer Stand am Server/im Ordner“.

## V2.9 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz:** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt auf allen Geräten und in allen RIEMER Tools – das Backup muss nicht mehr auf jedem Gerät eingerichtet werden. Mit storage werden die hochgeladenen Logos und Dateien auf jedem Gerät abgeglichen.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei B die Stufe der Lizenz (mindestens datenbank), bei A settings, ohne Server-Freigabe höchstens datenbank.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Lokal in den Ordner sichern“ bleibt je Gerät (der Ordner muss auf jedem Gerät verknüpft werden).
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt („durch die Lizenz festgelegt“).

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (auch bei Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- Gesperrte storage-Zeile unter 02 Zentral: „nur mit ‚Server ist die Datenquelle‘ (Freigabe im Admin)“; der Hinweis bei fehlender Freigabe nennt den Admin statt „bitte beim Anbieter anfragen“.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ (Backup einrichten, Backup-Dialog, Backup-Symbol) statt einer stillen Sperre.

**Behoben**
- Datenquelle B (Server ist die Datenbank): Die unter 02 Zentral gewählte Stufe storage sprang nach „Übernehmen“ auf datenbank zurück – sie bleibt jetzt eingestellt.

## V2.8 · 19.11.2026 · DEV
**Geändert**
- Datenquelle A: Welches Set gerade geöffnet ist, merkt sich jedes Gerät selbst – ein Wechsel des Sets löst keinen Abgleich über den Ordner mehr aus.

**Behoben**
- Datenquelle A (Ordner ist die Datenbank): Ändert ein anderes Gerät nur Einstellungen (z. B. Hell/Dunkel, Ansicht, Favoriten), fragt MENU.ritl nicht mehr fälschlich „Neuerer Stand im Ordner“. Für den Ordner zählen nur noch die Arbeitsdaten (Sets, Gerichte, Saison-Aktionen, Bilder und Dateien); die Einstellungen gleicht der Server ab.
- Gibt es gleichzeitig eine Abfrage für den Ordner und eine für den Server, kommen sie nacheinander – die zweite überschreibt die erste nicht mehr.
- „Ordner verknüpfen“ in „Backup einrichten“: Der Abgleich startet erst mit „Übernehmen“, die Abfrage schiebt sich nicht mehr über das offene Fenster.
- Lässt sich die Ordner-Verknüpfung im Browser nicht speichern, bleibt MENU.ritl nicht mehr hängen.

## V2.7 · 19.11.2026 · DEV
**Geändert**
- Fußzeile: Kontakt per Mail `toolbox@riemer.co` statt Link auf riemer.co.

## V2.6 · 19.11.2026 · DEV
**Neu**
- **Datenquelle je Lizenz (Admin):** Welche Variante gilt, legt der Anbieter im Lizenz-Admin fest – nicht mehr du selbst.
  - **A · Ordner ist die Datenbank (Datenhoheit):** Die Datei `Backup_MENU-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner ist der aktuelle Stand. MENU.ritl lädt sie beim Start, schreibt jede Änderung nach wenigen Sekunden zurück und erkennt Änderungen anderer Geräte (beim Zurückkehren ins Fenster und alle 20 s). Jeder Stand hat eine Nummer; bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“. Konfliktkopien von OneDrive werden angezeigt. Am Server liegen nur die Einstellungen (settings) samt Ordnername – Sets, Gerichte und Saison-Aktionen bleiben im Ordner.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank oder storage) – auf allen Geräten und in jedem Browser.
- „Backup einrichten“ zeigt die Variante der Lizenz und sperrt die Auswahl, die dazu nicht passt.

**Geändert**
- Variante A funktioniert nur in Chrome oder Edge am Computer. In Safari, Firefox und auf iPhone/iPad erklärt das Tool das im Backup-Dialog; Daten lassen sich dort nur per „Backup speichern“ in den Ordner legen.
- Bei Variante A ersetzt der Ordner-Abgleich das automatische Sichern in den Ordner; 03 Zentral zeigt „Am Server nur Einstellungen (Datenhoheit)“.
- Versionsangabe in Backup- und Anleitungs-Dialog aktualisiert.

## V2.5 · 19.11.2026 · DEV
**Neu**
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral gibt es das Häkchen „Server ist die Datenquelle“ (schaltet „zentral sichern“ mit ein). MENU.ritl lädt dann beim Start und beim Wiederverbinden den Serverstand und schreibt jede Änderung nach 2,5 s mit der bekannten Stand-Nummer zurück – so arbeiten mehrere Geräte mit demselben Stand.
- Neuere Stände anderer Geräte werden jede Minute und beim Zurückkehren ins Fenster erkannt und ohne eigene Änderungen automatisch geladen.
- Konfliktdialog „Neuerer Stand am Server“ mit „Meinen Stand behalten“ / „Serverstand übernehmen“, wenn auf beiden Seiten geändert wurde – es wird nie still überschrieben.
- **storage über den Server:** Mit „Server ist die Datenquelle“ ist zentral auch die Stufe `storage` wählbar. Hochgeladene Logos (Dateiablage RITLF) werden einzeln im Server-Speicher abgelegt und auf allen Geräten abgeglichen (neue hochgeladen, gelöschte entfernt); Kontingent 50 MB je Lizenz.

**Geändert**
- Das Häkchen ist nur wählbar, wenn die Lizenz im Admin „Server freigeben“ hat. Sonst ist es gesperrt mit dem Hinweis „Für diese Lizenz noch nicht freigegeben – bitte beim Anbieter anfragen.“, und ein früher gewähltes „Server ist die Datenquelle“ fällt auf das normale zentrale Backup zurück.
- Status in 03 Zentral „Server ist die Datenquelle · Stufe … · Stand n“, Tooltip am Backup-Symbol „Server (Datenquelle)“; „Jetzt zentral sichern“ heißt dann „Jetzt abgleichen“.
- Offline-Version (Admin-Build und eigene Offline-Kopie): Server als Datenquelle und zentrales Backup immer aus, Abschnitt 02 Zentral entfällt.

## V2.4 · 18.11.2026 · DEV
**Neu**
- Backup-Stufe `storage` (nur unter 01 Lokal, zentral gesperrt „folgt später“): `datenbank` + alle hochgeladenen Dateien; im Modal „Backup einrichten“ mit Anzahl und Größe der Dateien.
- Dateiablage RITLF (Baustein ritl-bk/ritl-files.js): hochgeladene Logos werden im Browser abgelegt, in den Daten steht nur der Verweis; nicht mehr verwendete Dateien werden beim Start aufgeräumt.
- Backup › Speicher zeigt die Dateiablage mit Anzahl und Größe.

**Geändert**
- Wiederherstellen eines storage-Backups ersetzt auch die Dateiablage (Hinweis in der Rückfrage).
- Offline-Kopie und Set-Export betten Logos aus der Dateiablage ein.

 · 16.11.2026 · DEV
**Geändert**
- Header auf den zentralen Header RITL-UI umgestellt (Kit RITL-UI 1.1, Vorbild MUSTER.ritl V2.8): App-Bild, Eyebrow, MENU.ritl mit Edition, DEV/BETA und Version · Datum; rechts kompakte Chips für Favoriten (mit Zähler), Backup (mit Symbol Ordner/Wolke) und Zurücksetzen, dann Anleitung, Hell/Dunkel, An-/Abmelden, Toolbox-Logo und „RIEMER Tools“. Der Header bleibt beim Scrollen oben.
- Künftige Header-Versionen kommen zentral über den Lizenzserver, ohne neue MENU.ritl-Version.

**Behoben**
- Offline-Kopie: der Header wird dort neu aufgebaut (Knöpfe funktionieren).

## V2.2 · 15.11.2026
**Neu**
- SETS.ritl: Jede Set-Karte zeigt eine kleine Vorschau der Karte (bei Klappkarte und Wickelfalz die Innenseite, mit Seitenzahl); mit dem Mauszeiger darauf erscheinen alle Seiten groß mit Seitenbezeichnung.

## V2.1 · 15.11.2026
**Neu**
- SETS.ritl: Jede Set-Karte hat den Link „MAP.ritl ›“ – aktiviert das Set und öffnet es direkt im Modellbereich zur Bearbeitung (auch als Adresse `#map=<Set>` bzw. Strg+Klick in neuem Tab).

**Geändert**
- Knopf „Laden & aktivieren“ heißt kurz „Aktivieren“; die Knöpfe der Set-Karten brechen bei schmalen Karten um.

## V2.0 · 15.11.2026
**Neu**
- Backup-Stufen: `settings` (Hell/Dunkel, auf-/zugeklappte Bereiche, Ansicht, Raster, Design-Favoriten) und `datenbank` (settings + Sets, Gerichte, Saison-Aktionen, Bilder); `storage` folgt später.
- Zentrales Backup in der RIEMER Toolbox (Supabase, EU) je Lizenz und Tool: automatisch nach Änderungen, „Jetzt zentral sichern“, Historie 10 Tage zum Wiederherstellen, Anzeige des belegten Kontingents (50 MB je Lizenz); offline wird nachgesichert, sobald wieder online.
- Modal „Backup einrichten“ beim ersten Start (später unter Backup › „Backup einrichten …“): Lokal und Zentral je mit Stufe und komprimierter Größe.
- Symbol am Backup-Knopf: Ordner = Lokal, Wolke = Server; grün aktiv, orange Achtung, grau aus, Wolke durchgestrichen = offline; Tooltip mit Klartext.

**Geändert**
- Lokales Backup und Ordner-Backup schreiben die gewählte Stufe in `Backup_MENU-ritl.json`; ein settings-Backup übernimmt beim Wiederherstellen nur Einstellungen, Daten bleiben unverändert.

## V1.8 · 15.11.2026
**Neu**
- MAP.ritl: „🔒 Fixieren“ sperrt die ganze Box „01 Modellbereich“ auf das Browserfenster – Werkzeuge (Format, + Gang, + Text, Saison, Raster), Übersicht, Vorschau-Leiste und Vorschau.
- Am Tablet: ein Finger verschiebt, zwei Finger zoomen (Pinch).

**Geändert**
- Die MAP-Werkzeuge stehen jetzt in der Box „01 Modellbereich“ statt in der Toolbar darüber.

## V1.7 · 14.11.2026
**Geändert**
- Backup ist immer genau eine Datei `Backup_MENU-ritl.json`, die bei jedem Sichern überschrieben wird – lokal (Speicherort einmal wählen, danach ohne Nachfrage) und im OneDrive-/SharePoint-Ordner, manuell und automatisch.
- Ältere Sicherungen mit Zeitstempel im Namen werden weiter angenommen und im Ordner als „Ältere Sicherungen“ gelistet.

## V1.6 · 14.11.2026
**Neu**
- MAP.ritl: Arbeitsfläche fixieren – Vorschau füllt das Browserfenster, Fit nach Breite und Höhe, Mausrad zoomt zum Mauszeiger, Ziehen verschiebt, Bearbeiten-Fenster verkleinert die Fläche, Esc löst.

## V1.5 · 14.11.2026
**Neu**
- Backup-Dialog „03 Speicher“: Aufteilung der Backup-Größe und „Bilder verkleinern“.

**Geändert**
- Jedes Bild wird nur noch einmal gespeichert, auch wenn es in mehreren Sets vorkommt (Backups deutlich kleiner).
- Logos werden beim Hochladen auf max. 1000 px (WebP, Transparenz bleibt) verkleinert.
- Backup kompakt ohne Einrückungen; Rückgängig-Schritte ohne Bilder.

**Behoben**
- Logo-Hochladen funktionierte nicht.

## V1.4 · 14.11.2026
**Neu**
- Modul MAP.ritl (Modellbereich nach MSX-Builder/MUSTER.ritl): Live-Vorschau als Arbeitsfläche, Hover zeigt das Objekt, Klick öffnet das Bearbeiten-Fenster mit allen Werkzeugen aus CARD und STYLE, Doppelklick + Pfeiltasten verschiebt im Raster bis zur Blattgrenze.

## V1.3 · 13.11.2026
**Neu**
- Ein-/Ausblenden jedes Blocks, Kopf und Fuß mit dem Auge.
- Außenseiten (Klappkarte, Wickelfalz) aus Fix-Blöcken: ein-/ausblendbar, sortierbar, verschiebbar, ausrichtbar.
- A5 Aufsteller mit 1 oder 2 Spalten je Seite; Druckbogen auf A4 mit Schnittmarke bei 210 mm und Falzmarke.
- Erstveröffentlichung in der RIEMER Toolbox (lizenzgeschützt).

**Behoben**
- Druck erzeugte eine leere zweite Seite (A4 Hoch 1-Sp.).

## V1.2 · 13.11.2026
**Geändert**
- Neue Ribbon-Reihenfolge SETS · CARD · STYLE · DISHES; CARD nur noch Bearbeiten mit Block-Ribbon (Drag & Drop), STYLE mit Format und Modellbereich (Bereiche und Gruppe: Ausrichtung, Breite, Höhe, Schrift, Abstand, Platzierung, Skalierung).

## V1.1 · 13.11.2026
**Neu**
- Auto-Fit: jeder Export exakt eine Seite bzw. Vorder- und Rückseite.
- Bearbeiten-Stift, Sortieren und Löschen in jedem Bereich; Textausrichtung und Textskalierung auf dem Blatt.

## V1.0 · 13.11.2026
**Neu**
- Umbau der Webapp auf das RIEMER-Tools-Design: Header, Ribbon, klappbare Boxen, Hell/Dunkel, Backup und Favoriten mit OneDrive/SharePoint, Export PDF/PPTX/Druck/Excel, Offline-Kopie.
