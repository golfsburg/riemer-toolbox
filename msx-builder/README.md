# MSX-Builder

Schnitte aus DWG, DXF, Vektor-PDF, MSX oder RIEMER-Tools-Platzhaltergruppen in Importdateien (`.msx`) für **Hilti PROFIS MSE** umwandeln – nur Rohre, Kanäle, Bauteile und Stäbe, ohne Hilti-Produkte (RIEMER Tools).

**Online:** https://tools.riemer.co/msx-builder/
**Lizenz:** `LicenseRef-Proprietary` – siehe [LICENSE](LICENSE)

> 🔒 Geschütztes Tool: `index.html` ist nur die Schlüssel-Abfrage. Der eigentliche Code wird nach
> erfolgreicher Lizenzprüfung vom Server geladen – siehe [`../lizenz/LIZENZVERWALTUNG.md`](../lizenz/LIZENZVERWALTUNG.md).

## Funktionen
- DWG (LibreDWG/WebAssembly), DXF, Vektor-PDF, MSX und Platzhaltergruppen (`.mse.json`) aus RIEMER Tools V3 einlesen
- Erkennung von Rohren (inkl. Dämmung), Decken, Wänden, Lüftungs- und Kabelkanälen – jede Kategorie unabhängig
- 7 Rohrnormen, 13 Medien, Dämmstoffe aus der PROFIS-MSE-Vorlage; wassergefüllt als Standard
- Manuell zeichnen mit Fang: Rohre, Kanäle, Decken, Wände, Stäbe (MT-40 V2 / MT-70 OC / MT-90 OC) als Polylinie, Frei/Ortho
- Auswahl über Zeichnung, Listen und Übersicht-Chips; synchrones Bearbeiten aller ausgewählten Objekte
- Export als `.msx` (Berechnungsblock ohne Hilti-Produkte) oder ZIP mit Rohr- und Platzhalterlisten

Alle Daten werden lokal im Browser verarbeitet – nichts wird hochgeladen.

Versionen: siehe [CHANGELOG.md](CHANGELOG.md) · aktuell **3.0** (08.11.2026)

© 2026 Peter Riemer
