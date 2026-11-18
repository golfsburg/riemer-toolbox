# CHANGELOG – FOC.ritl (RIEMER Tools)

Fardriver-Controller einstellen und simulieren – Ströme, Gänge, Kurven und Funktionen mit Wirkung auf Tempo, Beschleunigung und Reichweite · #ritl_foc
Neueste Version oben. Versionen ≤ V1.2 waren Entwürfe im Chat und wurden nicht veröffentlicht.

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
