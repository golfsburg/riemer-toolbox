# CHANGELOG – JFC.ritl (RIEMER Tools)

Engineering Navigator: Kundenvergleich, Besuchspriorisierung und Gebiets-Review aus JFC-Reports · #ritl_jfc
Neueste Version oben. Versionen ≤ V3.6 als „JFC Engineering Navigator“.

## V4.0.14 · 26.11.2026 · DEV
**Geändert**
- **Scrollen nach Ebenen (R-20, S-18):** Solange ein Dialog, Modal (Daten, PowerPoint, Bild), eine Hilfe oder ein Auswahlmenü (Filter-Dropdowns, Spaltenfilter, Spaltenauswahl, Kundenansicht) offen ist, steht die Seite im Hintergrund – Mausrad, Wischen am iPhone/Android und Bild↓. Der Inhalt des offenen Fensters scrollt in sich. Die Sperre kommt zentral aus RITL-UI 1.7; alle Overlays tragen das Merkmal `data-ritl-overlay`, die eigene Sperre im Tool ist entfernt.
- Tabellen, Listen und Leisten halten das Scrollen nicht mehr fest: Ist eine Tabelle am Ende, scrollt das Fenster weiter. Das senkrechte Mausrad über der Sprungleiste scrollt die Seite (waagrecht per Umschalt+Rad bzw. Touchpad/Wischen).
- Esc schließt zuerst ein offenes Auswahlmenü, danach erst Dialog bzw. Modal. Die Spaltenauswahl schließt auch per Klick daneben.
- Bausteine: RITL-UI 1.7, ritl-bk 2.14.

## V4.0.13 · 26.11.2026 · DEV
**Neu**
- **Monatswerte aus kumulierten Werten** (Bezug Vorjahr): Events FE, gewonnenes Business und Spec gewonnen stehen im Report kumuliert (lfd. Jahr). Verglichen wird jetzt der Monatswert = kumulierter Wert des Monats − kumulierter Wert des Vormonats desselben Jahres (Jänner = kumulierter Wert), z. B. Events 09/2026 − 08/2026 gegen 09/2025 − 08/2025. Gilt in der Rechnung von KPI-Kacheln, Top/Flop, Power-Tabelle, Heatmap, Streudiagramm, Pareto, VB-Report, Gebiets-Review, Pipeline, Steckbrief und allen Exporten.
- **„kein Monatswert“:** Ist der Vormonat nicht geladen (oder der Kunde dort nicht enthalten), wird kein Monatswert gerechnet und eigens gekennzeichnet – nicht 0.
- Pipeline: Vergleich mit dem Vorjahresmonat (offen Stichtag gegen Stichtag, gewonnen/Spec gewonnen Monatswert gegen Monatswert). Steckbrief: Zeilen „Events FE im Monat“ und „Wert gewonnene im Monat“.
- Beispieldaten: Events und gewonnenes Business/Spec kumuliert, Jänner-Monate, Monate ohne Vormonat, ein Kunde ohne Vormonat und ein Kunde ohne F&P-Vorjahreswert; F&P-VJ-Spalten R–T befüllt.

**Geändert**
- **F&P je Bezug:** Bezug „Vorjahr“ vergleicht F&P immer mit dem Vorjahreswert lt. aktuellem Report (Spalten R–T bzw. die zugeordneten F&P-VJ-Spalten) – auch ohne geladenen Vorjahres-Monatsreport; fehlt der Wert im Report, steht „kein VJ“. Bezug „Zeitraum“ vergleicht F&P BIS mit F&P VON aus den eigenen geladenen Monaten. Die Bezugszeile nennt die Quelle („F&P lt. aktuellem Report, Vorjahreswert“).
- Bezug „Zeitraum“: alle übrigen Kennzahlen wie bisher Stichtag gegen Stichtag (Events/gewonnenes Business als kumulierte Report-Werte, so beschriftet).
- Letzte „VON“-Reste im Bezug Vorjahr entfernt (Filter-Chip Partner-Wechsel, Spalte „Partner VJ“, Übergangsmatrix, Überschriften, Legende Gebiets-Review, Feld „Vorjahresmonat“). Excel-Infoblatt und Kurzbericht mit Zeile „Vergleichsart“. Anleitung an die Rechnung angepasst.

**Behoben**
- Gebiets-Review als PowerPoint: Die Bezugszeile war leer.

## V4.0.12 · 26.11.2026 · DEV
**Neu**
- **Vergleichsart je Kennzahl** (Bezug Vorjahr): „Monat gegen Vorjahresmonat“ für Summenwerte pro Monat (Events FE, gewonnene Business-/Spec-Werte), „Stichtag gegen Stichtag“ für Bestands-/Stichtagsgrößen (Partner, offenes Business, R12, Score) und die bereits kumulierten Spalten „lfd. Jahr“. Die Art steht in der Bezugszeile, in Exporten und in der Anleitung.
- Heatmap: je Zelle der Wert des Vorjahresmonats darunter („VJ …“ bzw. „kein VJ“).
- Beispieldaten: Vorjahresmonate für alle Monate des laufenden Jahres, ein Monat ohne Vorjahr (12/2025) und Kunden ohne Vorjahr.

**Geändert**
- Bezug im Format „MM/JJJJ vs. MM/JJJJ-1 (Vorjahresmonat)“ jetzt auch in PPTX-Titelfolie, Gebiets-Review (App, PPTX, PDF), Streudiagramm, Besuchsscore/Besuchsplan, Steckbrief (App/PPTX/PDF), VB-Report, Excel-Infoblatt und Kurzbericht; keine „VON“-Reste im Bezug Vorjahr.
- Gebiets-Review und Steckbrief rechnen F&P bei geladenem Vorjahresmonat aus den eigenen Daten (statt Report-Spalten R–T).
- Status „kein VJ“ wird neutral (grau) dargestellt, nicht als Verlust.

## V4.0.11 · 26.11.2026 · DEV
**Neu**
- **Bezug „Vorjahr“ (Standard):** Neuer Schalter „Bezug“ in der Filterleiste. Bei „Vorjahr“ wählst Du nur den Datenstand BIS; verglichen wird automatisch mit demselben Monat ein Jahr davor (z. B. 10/2026 vs. 10/2025). „Zeitraum“ ist das bisherige VON → BIS. Die Wahl steckt in Ansicht, Favoriten, Backup-Einstellungen und im exportierten Kunden-Tool.
- Stichtag gegen Stichtag (die Report-Spalten „lfd. Jahr“ sind bereits kumuliert). F&P rechnet bei geladenem Vorjahresmonat aus den eigenen Daten, sonst wie bisher aus den Report-Spalten R–T; die Bezugszeile nennt die Quelle.
- **„kein VJ“:** Fehlt der Vorjahresmonat oder ein Kunde darin, steht „kein VJ“ – nicht 0 und nicht Verlust; Summen und Δ beziehen sich nur auf Kunden mit Vorjahreswert.
- Alle Bezugszeilen, Spaltenüberschriften, Chips und Exporte (CSV/XLSX/PDF/PNG/PPTX, Kurzbericht) nennen den Bezug, z. B. „10/2026 vs. 10/2025 (Vorjahresmonat)“. Heatmap: Vorjahresmonat als erste Spalte, Δ-Spalte aus eigenen Daten. Steckbrief-Verlauf: Vorjahreswerte Monat für Monat.
- Besuchsscore und Partner-Wechsel rechnen im Bezug Vorjahr gegen den Vorjahresmonat. Neuer Monat geladen → BIS springt auf den neuesten Datenstand.
- Anleitung (?) um eine Erklärung ergänzt; Beispieldaten um Vorjahresmonate erweitert.

## V4.0.10 · 25.11.2026 · DEV
**Geändert**
- **Tool-Typ „Datenbank“ (Regel S-23, Rollout R-19):** Das Tool ist als Typ Datenbank gekennzeichnet – Daten bleiben wie bisher im Tool, keine Projektdateien.
- Backup-Baustein auf **ritl-bk 2.12** aktualisiert (Verhalten unverändert).

## V4.0.9 · 25.11.2026 · DEV
**Behoben**
- Über den Lizenz-Loader erschienen unter der Fußzeile weiterhin Programmtext und das große Toolbox-Logo. Eigentliche Ursache: Der Lizenzserver sucht die Einfügestelle in der Kleinschreibung des HTML; drei Zeichen „İ“ in den Export-Bibliotheken verschoben diese Stelle um drei Zeichen und zerrissen das letzte Skript. Die Zeichen sind als `\u0130` geschrieben, das Bauskript bricht bei solchen Zeichen ab.

## V4.0.8 · 25.11.2026 · DEV
**Behoben**
- Über den Lizenz-Loader erschienen unter der Fußzeile viel Programmtext und das große Toolbox-Logo. Ursache: In den eingebetteten Bibliotheken (Export) stand mehrfach `</body>` im Text; der Lizenzserver fügt Logo und „Abmelden“ vor dem ersten `</body>` ein und zerriss dabei das Skript. Die Stellen sind entschärft.

## V4.0.7 · 25.11.2026 · DEV
**Geändert**
- **Scrollen (R-15):** Der Kopfbereich läuft beim Scrollen aus dem Bild; die Leiste mit Sprungzielen und der Filterbereich bleiben oben stehen. Sprungziele landen darunter.
- Das Mausrad wirkt nur im Bereich unter der Maus (Auswahllisten, Tabellen, Gantt, Fenster scrollen nicht mehr die Seite mit).
- Der Hauptfilter lässt sich weiter mit „Filter“ auf- und zuklappen.

**Behoben**
- Fußzeile: bleibt bei kurzem wie bei langem Inhalt am unteren Fensterrand; geschlossene Mehrfach-Auswahllisten können nicht mehr unterhalb der Fußzeile sichtbar werden.

## V4.0.6 · 25.11.2026 · DEV
**Geändert**
- Die Leiste mit Sprungzielen, Kundenansicht und „Alle auf / Alle zu“ bleibt beim Scrollen oben am Fensterrand stehen – zusammen mit dem Filterbereich.
- Der Filterbereich lässt sich mit „Filter“ ein- und ausklappen; zugeklappt bleiben die aktiven Filter-Chips, die Anzahl, „x von y Kunden“ und „Filter löschen“ sichtbar. Der Zustand wird gemerkt (am Handy standardmäßig zugeklappt).
- Sprungziele landen unter der fixierten Leiste.

## V4.0.5 · 23.11.2026 · DEV
**Behoben**
- **Besuche:** Das Wiederherstellen eines Backups der Stufe „Einstellungen“ löschte alle Besuche. Jetzt bleiben sie erhalten.

**Geändert**
- PowerPoint-Auswahl und aktiver Favorit gehören zu den Einstellungen im Backup.

## V4.0.4 · 22.11.2026 · DEV
**Neu**
- **Teilen-Blatt beim Speichern am Handy und Tablet:** Exporte und „Backup speichern“ öffnen am Touchscreen das Teilen-Blatt („In Dateien sichern“, AirDrop, Mail) – in der Home-Bildschirm-App zeigte iOS Downloads bisher nur als Vorschau. Am Computer bleibt es beim normalen Download; lässt der Browser das Teilen nicht zu, wird ebenfalls normal geladen.

## V4.0.3 · 22.11.2026 · DEV
**Neu**
- **Eigenes App-Symbol für den Home-Bildschirm:** In Safari „Teilen → Zum Home-Bildschirm“ legt JFC.ritl jetzt mit eigenem Symbol und Namen ab (vorher ein Bildschirmfoto der Seite). Gilt für die Anmeldeseite und das Tool.

## V4.0.2 · 22.11.2026 · DEV
**Geändert**
- **Am Handy und Tablet:** Eingabefelder in 16 px – iOS zoomt beim Antippen nicht mehr hinein.
- Fenster erscheinen am Handy als Blatt von unten über die volle Breite; die Seite dahinter scrollt nicht mit.
- Platz für Notch und Home-Leiste (Safe-Area); Knöpfe reagieren ohne Verzögerung auf Tippen.

## V4.0.1 · 20.11.2026 · DEV
**Geändert**
- Backup: alle Datenquellen gleichzeitig aktiv, jede in ihrer Stufe (ritl-bk 2.7)

## V4.0 · 19.11.2026 · DEV
**Geändert**
- Neu aufgebaut nach RIEMER-Webapp-Design: Farb-Tokens, Hell/Dunkel, Schrift Inter/JetBrains Mono aus der Toolbox, volle Breite bis 2048 px, Fußzeile.
- Header über RITL-UI 1.4: App-Bild, JFC.ritl mit Edition und Version, Knöpfe Daten & Setup · Speichern · Backup, Anleitung, Hell/Dunkel.
- Hauptansicht scrollt nicht mehr hinter offenen Dialogen.
- Bereiche als klappbare Boxen, Unterbereiche als klappbare Überschriften; „Alle auf / Alle zu“ in der Leiste.
- „JFC-Daten“ heißt jetzt „Daten & Setup“; der Tool-Export (inkl. Favoriten) ist ein Reiter darin.

**Neu**
- Backup über ritl-bk 2.0 mit Stufen settings · datenbank · storage, eine Datei Backup_JFC-ritl.json, OneDrive/SharePoint-Ordner und „Backup einrichten“.
- Importierte Reports werden in der Dateiablage gemerkt (Stufe storage).

**Entfernt**
- Bisheriges „Backup & Restore“ und „Datenbank verbinden“ (ersetzt durch Backup). Alte Backups lassen sich weiter wiederherstellen.
