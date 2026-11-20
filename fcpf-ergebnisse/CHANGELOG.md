# CHANGELOG – SCORE.ritl (fcpf-ergebnisse)

## V2.1 · 19.11.2026 · DEV

### Neu
- **Posting je Spiel:** Bild-Knopf in der Spieltabelle öffnet „Posting“ – Instagram-Bild 1080 × 1350 mit Runde, Wappen, Ergebnis, Mannschaftsnamen und Teamfoto im Vereinsdesign.
- Teamfoto wird **im Browser freigestellt** (nichts wird hochgeladen); bereits freigestellte PNGs werden direkt übernommen, alternativ „Foto als Bild einsetzen“.
- **Wappen** beider Mannschaften kommen automatisch von vereine.oefb.at; jedes Wappen lässt sich ersetzen.
- **Posting-Text nach Vereinsmuster:** Kopfzeile (eigene Zeile für Nachwuchs), Wettbewerb („5. Runde, Gebiet Ost U12 D“, Cup, Freundschaftsspiel), Mannschaften mit vollem Namen, Endstand, Text aus Textbausteinen (je nach Ergebnis, mit Kurzbericht), Torschützen mit Vornamen und einem ⚽️ je Tor, Hashtags (Verein, dann Mannschaft); „Anderer Vorschlag“, „Text kopieren“, „Ergebnis kopieren“; „Bild speichern“ und am Handy „Teilen“.
- **Kopfzeile und Hashtags** je Mannschaft und für den Verein: im Vereinsadmin („Verein verwalten → Mannschaften“) und im Admin-Tool.
- **Posting-Hintergründe** je Verein bzw. je Mannschaft (Admin-Tool); ohne eigenes Bild entsteht ein Hintergrund in den Vereinsfarben.

### Geändert
- **„Name in Spielen“** gilt jetzt auch für ÖFB-Mannschaften in allen Spielen und Postings und bleibt beim nächsten Import erhalten; ein leeres Feld setzt wieder den Namen laut ÖFB.
- Solange ein Fenster (Posting, Verein verwalten, Design …) offen ist, scrollt die Seite dahinter nicht mehr mit.
- Schriften werden selbst gehostet (RIEMER Toolbox `fonts/`) statt von Google Fonts geladen.
