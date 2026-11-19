# CHANGELOG – FOC.ritl (RIEMER Tools)

Fardriver-Controller einstellen und simulieren – Ströme, Gänge, Kurven und Funktionen mit Wirkung auf Tempo, Beschleunigung und Reichweite · #ritl_foc
Neueste Version oben. Versionen ≤ V1.2 waren Entwürfe im Chat und wurden nicht veröffentlicht.

## V1.6 · 19.11.2026 · DEV
**Neu**
- **Backup-Stufe je Lizenz (S-16):** Die Stufe (settings, datenbank oder storage) legt der Anbieter im Lizenz-Admin fest. Sie gilt in allen RIEMER Tools und auf allen Geräten – das Backup muss nicht mehr auf jedem Gerät einzeln eingerichtet werden.
  - Lokal (01) gilt die Stufe der Lizenz (bei A mindestens datenbank). Zentral (02): bei A settings, sonst die Stufe der Lizenz – storage gilt zentral wie datenbank, weil FOC.ritl keine Dateien hochlädt.
  - Zentrales Sichern ist mit Lizenz immer eingeschaltet. Nur „Lokal in den Ordner sichern“ bleibt je Gerät, weil der Ordner auf jedem Gerät verknüpft werden muss.
- „Backup einrichten“ öffnet sich mit Lizenz nicht mehr von selbst (nur bei A, solange kein Ordner verknüpft ist) und zeigt oben die Stufe der Lizenz; die Auswahl ist gesperrt.

**Geändert**
- Von der Lizenz festgelegte Häkchen und Stufen (auch bei Datenquelle A und B) tragen den Hinweis „durch die Lizenz festgelegt“ – die Sperre ist gewollt.
- In der Admin-Vorschau steht „Admin-Vorschau – zentrale Funktionen hier nicht verfügbar“ statt einer stillen Sperre.
- Ohne Server-Freigabe heißt der Hinweis bei „Server ist die Datenquelle“ jetzt „Freigabe im Admin (Datenquelle ‚Server‘)“.

## V1.5 · 19.11.2026 · DEV
**Behoben**
- Datenquelle A: Ändert ein Gerät nur Einstellungen, während ein anderes Gerät die Ordner-Datei neu geschrieben hat, holt es den neueren Stand, statt fälschlich ‚Neuerer Stand im Ordner‘ zu fragen.

## V1.4 · 19.11.2026 · DEV
**Neu**
- **Backup einrichten:** Beim ersten Start (später über Backup › „Backup einrichten …“) wählst du, wo und wie umfangreich FOC.ritl gesichert wird – mit der Größe je Stufe:
  - `settings`: Hell/Dunkel, Ansicht, Auf/Zu und Setups (Favoriten)
  - `datenbank`: zusätzlich Setup (Änderungen), Basis (Controllerwerte), Fahrzeug, Akku & Kalibrierung
  - `storage`: datenbank + Dateiablage – nur lokal. FOC.ritl lädt keine Dateien hoch, die Ablage bleibt leer; storage entspricht daher datenbank.
- **Backup-Dialog in drei Abschnitten:** 01 Lokal (eine Datei `Backup_FOC-ritl.json`, die bei jedem Sichern überschrieben wird, mit Stufe), 02 OneDrive & SharePoint (verknüpfter Ordner, auf Wunsch automatisch), 03 Zentral · RIEMER Toolbox.
- **Zentrales Backup** je Lizenz am Lizenzserver (EU, Frankfurt): automatisch nach Änderungen, Historie 10 Tage (ein Stand je Tag und Stufe), Anklicken stellt wieder her; belegter Platz von 50 MB je Lizenz wird angezeigt.
- **Server als Datenquelle (RITL-Sync):** In „Backup einrichten“ › 02 Zentral lässt sich „Server ist die Datenquelle“ einschalten (wenn die Lizenz dafür freigegeben ist). FOC.ritl lädt dann beim Start den Serverstand und speichert Änderungen nach wenigen Sekunden – für die Arbeit auf mehreren Geräten. Haben zwei Geräte gleichzeitig geändert, fragt das Tool: „Serverstand übernehmen“ oder „Meinen Stand behalten“.
- **Datenquelle je Lizenz (Admin):**
  - **A · Ordner ist die Datenbank (Datenhoheit):** Setup, Basis und Fahrzeugdaten liegen nur in `Backup_FOC-ritl.json` im verknüpften OneDrive-/SharePoint-Ordner; Änderungen anderer Geräte werden erkannt, bei gleichzeitigen Änderungen fragt das Tool „Stand im Ordner übernehmen“ oder „Meinen Stand behalten“. Am Server liegen nur die Einstellungen samt Ordnername. Nur in Chrome oder Edge am Computer.
  - **B · Server ist die Datenbank:** „Server ist die Datenquelle“ ist automatisch eingeschaltet (Stufe datenbank).
- **Backup-Symbol am Header-Knopf:** Ordner = lokal, Wolke = Server; grün aktiv, orange Achtung, grau aus, Wolke durchgestrichen offline. Der Tooltip nennt den Zustand im Klartext.

**Geändert**
- Wiederherstellen fragt vorher nach und unterscheidet settings (nur Einstellungen) und datenbank. Ältere Sicherungen aus V1.3 und ohne Kopf lassen sich weiter laden.
- „Automatisch im Ordner sichern“ aus V1.3 wird übernommen (Lokal ein, Stufe datenbank).
- Offline-Version: kein Serverzugriff, der Abschnitt „Zentral“ entfällt.

## V1.3 · 19.11.2026 · DEV
**Neu**
- Fünf Module als Ribbon: TUNE.ritl (Abstimmung), SIM.ritl (Simulation), FUNC.ritl (Funktionen), BIKE.ritl (Fahrzeug, Akku & Kalibrierung), CHECK.ritl (Prüfen & Übertragen)
- Basis = ausgelesene Werte des Controllers YJ72V150AB (HMW FoxE) vom 17.11.2026
- Live-Simulation: Höchstgeschwindigkeit je Gang, 0–25 / 0–45 km/h, Zugkraft, Akkuleistung und -strom, Spannungseinbruch, Reichweite, Rekuperation – mit Abweichung zur Basis
- Diagramme: Zugkraft & Fahrwiderstand, Beschleunigung, Leistung & Strom, Drehmoment- und Rekuperationskurve
- Prüfung: Controller-Grenzen (150 A / 405 A), BMS, Zellspannungen, Temperatur, Gasgriff, Traktion/Wheelie, Fahrzeugklasse (Moped L1e 45 km/h)
- Änderungsliste mit Pfad in der Fardriver-App, kopierbar; „Als neue Basis übernehmen“
- Funktionen (Seitenständer, Tempomat, P, Auto-P, Rückwärts, Sitzkontakt, Schiebehilfe, Gang merken, Park, TCS) mit Erklärung und Animation
- Gangschalter-Diagnose: warum nur L ↔ M schaltet, drei Wege zu Gang H, Gangkonzept 45 km/h
- Helfer „Gang auf Geschwindigkeit begrenzen“ und Kalibrierung der Übersetzung (GPS + Drehzahl)
- Setups (Favoriten), Backup lokal und OneDrive/SharePoint, Hell/Dunkel, Header RITL-UI 1.3
