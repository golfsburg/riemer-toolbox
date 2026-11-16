# CHANGELOG – RITL-UI (zentraler Header der RIEMER Tools)

Quelle: `ritl-ui/ritl-ui.html` · verwaltet im Lizenz-Admin unter **Header · RITL-UI** · #ritl
Der Lizenzserver ersetzt in jedem Tool den Block `<!--ritl-ui:start--> … <!--ritl-ui:end-->` beim Ausliefern durch die neueste aktive Version aus dem Kanal der Lizenz (Dev sieht Dev + Beta + Stabil, Beta sieht Beta + Stabil).
Neueste Version oben.

## 1.0 · 16.11.2026 · Stabil
**Neu**
- Header wird aus `<header data-ritl-header data-name … data-eyebrow … data-tool … data-ver … data-date>` aufgebaut.
- Links: App-Bild 52 px (`[data-ritl-icon]`), darüber Eyebrow, darunter `NAME.ritl` mit Edition, DEV/BETA und Version · Datum (aus `window.RITL`, sonst `data-ver`/`data-date`).
- Mitte optional (`[data-ritl-center]`, z. B. Arbeitsschritte, ab 1700 px).
- Rechts in fester Reihenfolge: Tool-Knöpfe (`[data-ritl-actions]`, Text in `<span class="lbl">`) · `?` Anleitung · DE/EN · Hell/Dunkel · An-/Abmelden – als runde Chips (40 px) – · Toolbox-Logo · Schriftzug „RIEMER Tools“.
- Header 80 px hoch (unter 860 px 64 px, unter 620 px zweizeilig); unter 1100 px nur Icons der Tool-Knöpfe, unter 1080 px ohne Schriftzug.
- Hell/Dunkel (`riemer-theme`), Sprache (`riemer-lang`, ruft `setLang` des Tools), Abmelden (Geräteplatz freigeben) und Anmelden (zur Toolbox) erledigt das Kit selbst. Ereignisse `ritl:theme`, `ritl:lang`.
