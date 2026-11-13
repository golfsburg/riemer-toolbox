# Schnittstelle RIEMER Tools V3 → MSX-Builder

Stand 13.11.2026 · Format `riemer-mse-group`, Version 1 · Projekt-ZIP `riemer-mse-project`, Version 1

## Grundsatz

**Eine Platzhaltergruppe = eine Anwendung = eine Datei = eine MSX.**
Gleichartige Platzhalter (wie im Framework zusammengefasst) werden nur einmal in MSE bemessen.
Die Übergabe erfolgt manuell: RIEMER Tools schreibt je Gruppe eine Datei `Projekt_Gruppe.mse.json`,
diese wird per Drag & Drop (oder „Datei wählen“) in Feld 1 des MSX-Builders gezogen.

## Ablauf

1. Platzhalter setzen, Belegungsanalyse ausführen, Gruppen im Framework prüfen.
2. In RIEMER Tools „MSE-Export“ für die gewünschten Gruppen (ausgewählte / in Ansicht / Projekt).
   Ergebnis: je Gruppe eine `.mse.json` (Ordner oder Download aus der WebApp).
3. MSX-Builder öffnen, Gruppendatei in Feld 1 ziehen. Anzeige „Platzhaltergruppe Typ 03 · … · 27 Platzhalter“.
4. Prüfen/ergänzen: Rohrnormen, Stäbe (Montageschienen), Decke/Wand.
5. „ZIP herunterladen“: `Gruppe.msx`, `Gruppe_Rohre.csv`, `Gruppe_Platzhalter.csv` (Gruppe → Platzhalter-IDs).
6. MSX in PROFIS MSE öffnen und bemessen – gilt für alle Platzhalter der Gruppe.
7. Nächste Gruppe: nächste Datei in den MSX-Builder ziehen.

## Koordinaten

Schnitt quer zur Trasse durch den repräsentativen Platzhalter der Gruppe, alle Maße in **mm**:

| Achse | Bedeutung |
|---|---|
| x | quer zur Trasse, waagrecht, 0 = Mitte des Platzhalters |
| z | Höhe über der Ebene des Platzhalters |
| y | Trassenrichtung (im JSON nicht enthalten; Länge = `group.length`) |

Der MSX-Builder übernimmt die Lage unverändert (kein Maßstab, keine Spiegelung).

## Aufbau

```json
{
  "format": "riemer-mse-group", "version": 1,
  "source": { "app": "RIEMER Tools V3", "version": "1.4", "project": "…", "exported": "ISO-Datum", "units": "mm" },
  "group":  { "id": "G03", "name": "Typ 03", "befestigungstyp": "Deckenabhängung Trapez", "count": 27,
              "placeholderIds": [1203400, …], "placeholderUniqueIds": ["…"], "length": 500 },
  "pipes": [ { "elementId": 2759889, "x": -650, "z": 3215, "od": 114.3, "wall": 3.6, "dn": 100,
               "revitType": "Stahlrohr DIN EN 10255", "segment": "Stahl - DIN EN 10255", "material": "Stahl",
               "insulation": { "thickness": 40, "type": "Mineralwolle" },
               "system": "Heizung Vorlauf", "classification": "Hydronic Supply", "water": true } ],
  "ducts":      [ { "elementId": 2761200, "x": 700, "z": 3260, "w": 400, "h": 200, "weight": null } ],
  "cableTrays": [ { "elementId": 2761300, "x": -1150, "z": 3420, "w": 300, "h": 60 } ],
  "structures": [ { "kind": "Ceiling", "elementId": 110022, "source": "Link: Architektur.rvt",
                    "x0": -1600, "z0": 3500, "x1": 1600, "z1": 3800 } ],
  "bars": [ { "type": "MT-40 V2", "x0": -900, "z0": 3500, "x1": -900, "z1": 3140 } ],
  "notes": [ "…" ]
}
```

| Feld | Pflicht | Hinweis |
|---|---|---|
| `pipes[].x, z, od` | ja | Achsmittelpunkt im Schnitt, Außendurchmesser |
| `pipes[].wall` | empfohlen | verbessert die Wahl der Norm |
| `pipes[].revitType / segment / material` | empfohlen | Zuordnung zur PROFIS-Rohrnorm (Normnummer wie „10255“ im Text wird bevorzugt) |
| `pipes[].insulation` | nein | Dicke mm, Typname (Mineral-/Steinwolle, Glaswolle, Kautschuk/Armaflex) |
| `pipes[].water` | nein | Standard `true` |
| `ducts[] / cableTrays[]` | nein | Mittelpunkt + Breite/Höhe; `weight` kg/m optional, sonst Schätzung |
| `structures[]` | nein | `kind` = `Ceiling` oder `Wall`, Rechteck im Schnitt |
| `bars[]` | nein | `type` enthält 40 / 70 / 90 → MT-40 V2 / MT-70 OC / MT-90 OC |

## Zuordnung im MSX-Builder

- **Rohrnorm:** zuerst gemerkte Zuordnung (`revitType` → Norm), dann Normnummer im Revit-Text,
  dann Werkstoff (Stahl/Edelstahl/Kunststoff), dann Außendurchmesser (±1,5 mm) und Wanddicke.
  Wird die Norm in der Rohrliste geändert, merkt sich der MSX-Builder die Zuordnung je Revit-Rohrtyp
  (im Browser) und verwendet sie bei der nächsten Gruppe automatisch.
- **Dämmstoff:** über Schlüsselwörter im Typnamen.
- **Medium:** Gas/Druckluft/Vakuum → Medizinische Gase, sonst Heizung (nur diese Medien sind in der Vorlage).

## RIEMER Tools V3 – Umsetzung (ab PlatzhalterAddinV3 V0.28)

- `MseGroupExportHandler.cs`: erzeugt die Datei je Gruppe (`Hilti_design_solution`), Schnitt am Platzhalter
  mit der kleinsten ID; Koordinaten aus BasisX/BasisY des Platzhalters, Deckenunterkante = Einfügepunkt.
- `GET /api/mse-group?gruppe=Platzhalter_3&modus=2` (0 = Selektion, 1 = Ansicht, 2 = Projekt) liefert die
  Datei als Download.
- Framework-Tab: „⬇ MSE“ je Gruppenkarte, „⬇ MSE alle Gruppen“, Auswahl „MSE: Projekt / Ansicht / Auswahl“.
- Details siehe CHANGELOG.md.


## Projekt-ZIP (ab PlatzhalterAddinV3 V0.29)

Framework-Tab → „⬇ MSE-Projekt (ZIP)“ → Gruppen wählen → `<Projekt>_MSE.zip`:

```
Projekt_MSE.zip
├─ project.json            Format "riemer-mse-project", Version 1
├─ LIESMICH.txt
└─ gruppen/
   ├─ Platzhalter_1.mse.json    je Gruppe unverändert "riemer-mse-group" v1
   └─ Platzhalter_2.mse.json
```

`project.json`:

```json
{
  "format": "riemer-mse-project", "version": 1,
  "source": { "app": "RIEMER Tools V3", "project": "Projektname", "exported": "ISO-Datum", "units": "mm",
              "scope": "project | view | selection" },
  "groupFormat": { "format": "riemer-mse-group", "version": 1 },
  "groups": [
    { "name": "Platzhalter_1", "file": "gruppen/Platzhalter_1.mse.json", "ok": true,
      "id": "G01", "count": 27, "pipes": 5, "ducts": 1, "cableTrays": 0 },
    { "name": "Platzhalter_3", "file": null, "ok": false, "error": "Fehlertext" }
  ]
}
```

**Verhalten im MSX-Builder (umgesetzt ab MSX-Builder 4.6):**
1. In „02 Zeichnung“ eine `.zip` mit `project.json` (Format `riemer-mse-project`) akzeptieren (Drag & Drop / Dateiwahl).
2. In Bereich 01 einen Ordner mit `source.project` als Namen in der gewählten Ebene anlegen.
3. Für jeden Eintrag mit `ok:true` die Datei `file` aus dem ZIP lesen (bestehender Gruppen-Import) und als Unterprojekt im Ordner anlegen; Name = `group.name`.
4. Einträge mit `ok:false` überspringen und mit `error` melden.
5. Danach wie gewohnt: je Unterprojekt prüfen/ergänzen, Export als `.mspx` (ganzes Projekt) oder „Alle .msx (ZIP)“.

Details der Umsetzung (MSX-Builder 4.6):
- Erkennung am Inhalt: `project.json` im ZIP-Stamm (oder im obersten Unterordner) mit `format === "riemer-mse-project"`. Andere ZIPs: Meldung „kein Projekt-ZIP aus RIEMER Tools – nichts importiert“.
- Ordnername = `source.project`, leer → „RIEMER-Projekt“. Beim Start (nur Beispiel im Projekt) ersetzt der Ordner das Beispiel.
- Unterprojekt-Name = `groups[].name`. Dateipfad `file` relativ zu `project.json`; zur Sicherheit wird auch nach dem Dateinamen gesucht.
- Übersprungen und gemeldet: `ok:false` (mit `error`), fehlende Datei im ZIP, Datei ohne `format: "riemer-mse-group"`.
- Abschlussmeldung „X von Y Gruppen importiert“ mit allen Fehlertexten; Revit-Rohrtypen ohne gemerkte Rohrnorm werden aufgelistet. Die Zuordnung wird wie bisher beim Ändern der Norm in der Rohrliste je Revit-Rohrtyp gemerkt (`msxb.revitmap`) und für alle weiteren Gruppen verwendet.
- `project.json` mit `version` > 1: Warnung, Import wird trotzdem versucht.
- Mehrere einzelne `.mse.json` gleichzeitig bleiben möglich (je Datei ein Unterprojekt).
