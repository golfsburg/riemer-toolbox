# Lizenzverwaltung – RIEMER Toolbox

Geschützte Tools werden **nicht** im Repo gespeichert. Im Tool-Ordner liegt nur eine
kleine Seite, die den Lizenzschlüssel abfragt. Erst nach erfolgreicher Prüfung liefert
der Server den eigentlichen Tool-Code aus.

```
Browser ──(Schlüssel + Tool + Geräte-ID)──▶ Supabase Edge Function „license-check“
                                              │ prüft: Schlüssel · aktiv · Ablauf · Tool · Geräte
        ◀────────── Tool-HTML (nur bei OK) ───┘ protokolliert jeden Zugriff
```

**Supabase-Projekt:** `RIEMER-Lizenzen` (Frankfurt) · https://supabase.com/dashboard/project/hcluxhlvshydnncprpbl

## 🖥️ Admin-Seite (empfohlen)

**`lizenz/admin.html`** – im Browser öffnen (lokal oder später unter `golfsburg.github.io/riemer-toolbox/lizenz/admin.html`),
mit dem Admin-Token (`RTA-…`) anmelden. Dort kannst du:

- alle Lizenzen sehen (Kunde, Tools, Ablauf, Geräte, letzte Nutzung, Status)
- **vollständigen Schlüssel anzeigen**: auf `RT-…XXXX` klicken (wird auch kopiert)
- neue Lizenzen erzeugen
- sperren/entsperren, Ablauf ändern, Tools ändern, Geräte zurücksetzen, löschen
- geschützte Tools hochladen/aktualisieren (HTML-Datei auswählen)
- das Zugriffsprotokoll ansehen

Admin-Token verloren? Neuen im SQL Editor erzeugen: `select create_admin_token('Peter – neu');`
Alten sperren: `update admin_tokens set active = false where label = '…';`

## Im Supabase-Dashboard

- **Table Editor** → `licenses` (Lizenzen), `license_devices` (Geräte), `license_log` (Zugriffe), `tools` (Tool-Dateien)
- **SQL Editor** → Befehle unten

Alle Befehle unten im **SQL Editor** des Projekts ausführen.

---

## Lizenz anlegen

```sql
select create_license(
  'Firma XY GmbH',                 -- Kunde
  array['pptx-manager'],           -- Tools ('*' = alle Tools)
  '2027-12-31',                    -- Ablaufdatum (null = unbefristet)
  'office@firma-xy.at',            -- E-Mail (optional)
  3,                               -- max. Geräte
  'Jahreslizenz 2027'              -- Notiz (optional)
);
```

➡️ Gibt den Schlüssel `RITL-XXXX-XXXX-XXXX-XXXX` zurück. Gespeichert werden ein Hash (für die Prüfung)
und eine verschlüsselte Kopie (Geheimnis im Supabase Vault) – abrufbar über die Admin-Seite.

## Übersicht

```sql
select * from license_overview;
```

## Lizenzprüfung einmal pro Tag (Loader 1.1)

- Der Loader fragt den Lizenzserver **einmal pro Tag und Gerät**. Danach öffnet er das Tool den Rest
  des Tages aus einer Kopie im Browser (IndexedDB `riemer-lizenz-cache`, je Tool) – ohne Serveranfrage.
- **Neu laden** (Browser-Reload, am iPhone herunterwischen) oder `?neu` an der Adresse prüft sofort
  und holt die aktuelle Version (z. B. eine neue DEV-Version).
- Ab Mitternacht (Gerätezeit), bei anderem Schlüssel oder nach `?abmelden` wird wieder geprüft.
- Folge: Sperren, Ablauf, Kanal- oder Versionswechsel wirken auf einem Gerät spätestens am
  nächsten Tag bzw. beim nächsten Neu laden; `license_log` zeigt nur noch die erste Öffnung pro Tag.
- **Ausnahme Kanal Dev** (Regel S-22): Ist die Lizenz bzw. das Tool (`tool_cfg`) im Kanal Dev, wird bei jedem
  Öffnen geprüft und keine Tageskopie angelegt – neue DEV-Versionen kommen sofort.
- Ohne gespeicherten Schlüssel (z. B. nach „Abmelden“ im Header) wird die Tageskopie verworfen.
- Die eigene Anmeldeseite `msx-builder/index.html` macht dasselbe (Tagesspeicher `riemer_lizenz`).
- Zentrales Backup, RITL-Sync und Favoriten prüfen die Lizenz weiterhin bei jedem Aufruf am Server.

## Lizenz sperren / entsperren

```sql
update licenses set active = false where customer = 'Firma XY GmbH';
```

## Verlängern · Tools ändern · Geräte erhöhen

```sql
update licenses set expires_at = '2028-12-31'                    where customer = 'Firma XY GmbH';
update licenses set tools = array['pptx-manager','trainingsmanager'] where customer = 'Firma XY GmbH';
update licenses set max_devices = 10                             where customer = 'Firma XY GmbH';
```

## Geräte zurücksetzen (z. B. neuer PC beim Kunden)

```sql
delete from license_devices
 where license_id = (select id from licenses where customer = 'Firma XY GmbH');
```

## Zugriffe ansehen

```sql
select g.created_at, l.customer, g.tool_id, g.result
  from license_log g left join licenses l on l.id = g.license_id
 order by g.created_at desc limit 50;
```

Mögliche Ergebnisse: `ok`, `invalid_key`, `revoked`, `expired`, `tool_not_licensed`, `device_limit`, `tool_not_found`

---

## Tool hochladen oder aktualisieren

**Variante A – Admin-Seite** → Tab *Tools* → *Neue Version hochladen*: Tool-ID, Version, Kanal, Notiz, Datei.

**Variante B – PowerShell** (für Skripte/große Dateien, nutzt den Admin-Token):

```powershell
$env:RIEMER_ADMIN_TOKEN = "RTA-…"
.\lizenz\upload-tool.ps1 -Id pptx-manager -Version 1.1-beta -Kanal beta -Datei "C:\Pfad\pptx-manager.html" -Notiz "Neue Vorlagen"
# Edition (optional): -Edition pro
```

**Variante C – Datei an Claude schicken** und hochladen lassen.

---

## 🗄️ Quelldateien sichern (alle Tools)

Zu **jeder Version** werden zusätzlich die Quelldateien in Supabase abgelegt – nur für Admins lesbar
(Tabelle `tool_sources`, Row Level Security ohne Freigaben; Zugriff nur über den Admin-Token).

- **Admin-Seite:** beim Hochladen einer neuen Version im Feld *Quelldateien* eine Datei (am besten ZIP) mitgeben,
  oder nachträglich unter *Tools → Versionen*, Spalte **Quellen**: `＋` lädt hoch, `⬇ … KB` lädt herunter.
- **PowerShell:** `upload-tool.ps1 … -Quellen "C:\Pfad\tool-src.zip"` (ein Ordner wird automatisch gezippt).
- **Claude-Sitzungen:** legen Quellen und Versionen über die verschlüsselte Übergabe ab (siehe unten).
- Inhalt des ZIP: alles, was man zum erneuten Bauen braucht (Module, Build-Skript, Assets, kurze `README-BUILD.md`) –
  keine Kundendaten, keine Fotos von Personen, keine Schlüssel.

SQL: `select id, tool_id, version, filename, bytes, created_at, created_by from tool_sources order by created_at desc;`

### Verschlüsselte Übergabe (für Claude)

Der Lizenzserver ist aus Claude-Sitzungen nicht direkt erreichbar, und die Repos sind öffentlich. Dateien werden daher
mit AES-256 verschlüsselt in den Branch `transfer` von `riemer-toolbox` gelegt und von der Datenbank mit
`public._transfer_decrypt(url, iv, sha256)` geholt und entschlüsselt (Schlüssel im Supabase Vault: `ritl_transfer_key`,
Erweiterung `http` dafür eingeschaltet). Ohne den Schlüssel ist der Inhalt des Branches nicht lesbar.
Schlüssel wechseln: `update vault.secrets set secret = '<64 Hex-Zeichen>' where name = 'ritl_transfer_key';`
(oder `select vault.update_secret(id, '<neu>') from vault.secrets where name = 'ritl_transfer_key';`).

## 🚦 Release-Kanäle (Entwicklung · Beta · Stabil)

Jedes Tool kann mehrere Versionen gleichzeitig haben. Jede **Lizenz** hat einen Kanal:

| Lizenz-Kanal | bekommt Versionen aus | gedacht für |
|---|---|---|
| **Stabil** (Standard) | Stabil | Kunden, Trainerteam |
| **Beta** | Beta + Stabil | Tester |
| **Entwicklung** | Entwicklung + Beta + Stabil | du selbst |

Ausgeliefert wird jeweils die **zuletzt freigegebene aktive** Version aus den erlaubten Kanälen. Gibt es z. B. keine aktive Beta, bekommt ein Beta-Tester automatisch die stabile Version.

**Ablauf einer neuen Version**
1. Hochladen mit Kanal **Entwicklung** → nur du siehst sie (Badge **DEV** im Tool-Header).
2. *Tools → Versionen → Freigeben → Beta* → Tester sehen sie (Badge **BETA**).
3. *Freigeben → Stabil* → alle Kunden bekommen sie, kein Badge.

**Weitere Aktionen** (Tools → Versionen)
- *Kanal …* – Version direkt in einen beliebigen Kanal verschieben.
- *Zurückziehen* – Version wird nicht mehr ausgeliefert, es gilt sofort wieder die vorige (Rollback). *Reaktivieren* macht das rückgängig.
- *Löschen* – Version endgültig entfernen.
- Spalte *Aufrufe* zeigt, wie oft die Version geöffnet wurde (Protokoll speichert die Version mit).

**Lizenz bearbeiten:** Lizenzen → *Bearbeiten* (oder *+ Neue Lizenz*) öffnet ein Fenster mit allen Einstellungen: Kunde, E-Mail, Ablauf (oder unbefristet), max. Geräte, Standard-Kanal, Status, Notiz – und darunter die Tool-Liste mit Häkchen, **Kanal je Tool** und **Edition je Tool**. Die Spalte *Bekommt* zeigt sofort, welche Version mit dieser Einstellung ausgeliefert wird.

Ein Kunde kann so z. B. den MSX-Builder in **Beta** und alle anderen Tools **Stabil** bekommen (Standard-Kanal = Stabil, beim MSX-Builder Kanal = Beta).

## 🧩 Editionen (Light, Pro, …)

Editionen sind parallele Ausprägungen eines Tools – unabhängig vom Kanal. *Standard* gibt es immer.

1. Tools → *Editionen* → z. B. `light` / Light und `pro` / Pro anlegen.
2. Beim Hochladen die Edition wählen (oder in *Versionen* nachträglich umstellen). Jede Edition hat ihre eigenen Kanäle: Pro 2.1 kann in Beta liegen, während Pro 2.0 stabil ist.
3. In der Lizenz beim Tool die Edition auswählen.

Gibt es für eine Edition (im Kanal der Lizenz) noch keine Version, bekommt die Lizenz automatisch die **Standard**-Edition. Im Tool-Header erscheint ein Kennzeichen (z. B. **PRO**).

**Variante „eine Datei für alle Editionen“:** Jedes Tool bekommt beim Laden `window.RITL = { tool, version, channel, edition, edition_name, customer, email }`. Ein Tool kann damit Funktionen selbst freischalten, z. B. `if (window.RITL && RITL.edition === "pro") { … }` – dann reicht eine einzige hochgeladene Standard-Version.

Technik: `tool_editions` (Editionen je Tool), `tool_versions.edition`, `licenses.tool_cfg` = `{"msx-builder": {"channel": "beta", "edition": "pro"}}`.

Technik: Tabelle `tool_versions` (Version, Kanal, HTML, Notiz, aktiv, freigegeben am). `tools.html` spiegelt immer die aktuelle stabile Version. Das GitHub-Repo bleibt unverändert – die Loader-Dateien laden je nach Lizenz die passende Version.

## Neues geschütztes Tool anlegen

1. Ordner anlegen, z. B. `rohr-rechner/`, darin `index.html`:
   ```html
   <script src="../lizenz/loader.js" data-tool="rohr-rechner" data-name="Rohr-Rechner"></script>
   ```
   (Vorlage: `pptx-manager/index.html`)
2. Echte Tool-Datei hochladen (Admin-Seite oder `upload-tool.ps1 -Id rohr-rechner -Kanal stable …`).
3. In `README.md` und Startseite `index.html` mit 🔒 eintragen.
4. Lizenzen mit `array['rohr-rechner']` vergeben.

---

## ⚽ SCORE.ritl / FCPF-Ergebnisse (Live-Daten, je Verein)

Das Dashboard `fcpf-ergebnisse/` kommt wie jedes Tool aus Supabase. Nach erfolgreicher Prüfung setzt `license-check` den
**Datenstand des Vereins dieser Lizenz** in die Seite ein (Funktion `tool_payload_lic`, Block `<script id="fcpf-snapshot">`).
Ohne gültige Lizenz gibt es weder Code noch Daten; eine Lizenz **ohne Verein** bekommt leere Daten (die Seite zeigt
„noch kein Verein verknüpft“) – niemals Daten eines anderen Vereins. Die hochgeladene Tool-Datei enthält selbst keine Vereinsdaten.

**Verein einer Lizenz:** Tabelle `score_license_clubs` (`license_id` → `club_id`). Eigene Tabelle, weil das Admin-Tool
`licenses.tool_cfg` beim Speichern komplett neu schreibt. Mehrere Lizenzen (z. B. alle Trainer eines Vereins) können denselben
Verein haben. Edition („FCPF“ oder Standard) und Kanal werden weiterhin im Admin-Tool je Lizenz und Tool eingestellt.

**Automatischer Import** – `fcpf_import()` läuft täglich um 21:30 Uhr Wiener Zeit (pg_cron `fcpf-import`: `30 19,20 * * *` UTC, der Lauf prüft die Wiener Uhrzeit – so stimmt es in Sommer- und Winterzeit) und ruft für jeden aktiven Verein
`score_import_club(verein)` auf, das die Spielpläne von vereine.oefb.at liest:
- neue Spiele werden ergänzt (mit Runde und Zuschauern aus dem Spielbericht),
- geänderte Ergebnisse werden korrigiert, **Kurzberichte und Namen bleiben erhalten**,
- Torschützenliste, Termine (nächste 4 Wochen) und Mannschaftsliste werden neu berechnet (Tabellenplatz bleibt erhalten).

| Tabelle | Inhalt |
|---|---|
| `score_clubs` | Vereine: `id` (Kürzel, z. B. `fcpf`), Name, Kurzname, oefb-Vereinsseite, `saisonstart`, `torschuetzen_testspiele`, aktiv |
| `fcpf_data` | Datenstand je Verein (`club_id`, `doc`): `spiele`, `torschuetzen`, `termine`, `teams` |
| `fcpf_team_cfg` | Mannschaften je Verein: oefb-Spielplan-Link, Erkennung (`own_regex`), Anzeigename (`own_label`) |
| `fcpf_name_alias` | oefb-Gegnername → Anzeigename je Verein (wird aus vorhandenen Spielen gelernt) |
| `fcpf_player_alias` | oefb-Spielername → Anzeigename je Verein |
| `fcpf_import_log` | Protokoll jedes Laufs (mit `club_id`) |

(`fcpf_settings` wird nicht mehr verwendet – Saisonstart und Testspiel-Tore stehen jetzt in `score_clubs`.)

**Vereine im Admin-Tool** (Reiter **Vereine**):
- **+ Neuer Verein** → Name, Kurzname, Kürzel (ID, z. B. `sv-musterdorf`) und den Link irgendeiner Vereinsseite auf vereine.oefb.at eintragen.
- **Mannschaften laden** liest die Mannschaften der aktuellen Saison und prüft jeden Spielplan: eigener ÖFB-Teamname
  (über den Vereinslink im Spielplan, daraus wird die *Erkennung*), Bewerb und gespielte Spiele. Teams ohne Ergebnisse
  (Kinderfußball) werden vorgeschlagen, sind aber nicht aktiv.
- **+ Hinzufügen** übernimmt eine einzelne Mannschaft per Link – auch von einem Partnerverein (Spielgemeinschaft).
- Kürzel (Filter-Knopf), Anzeigename, Bewerb, „Name in Spielen“ und Reihenfolge sind frei änderbar.
- **Lizenzen mit diesem Verein** anhaken – oder in der Lizenz unter „Verein für SCORE.ritl“ wählen (Tabelle `score_license_clubs`).
- Nach dem ersten Speichern startet der erste Import automatisch, sonst per **↻ Import jetzt** (läuft innerhalb einer Minute
  im Hintergrund über pg_cron). Status und Protokoll stehen in der Vereinsliste und im Vereinsdialog.
- Server: Admin-Aktionen `score_*` in `license-admin` → Funktion `admin_score(token, aktion, daten)`;
  ÖFB-Hilfsfunktionen `_oefb_get`, `_oefb_mannschaften`, `_oefb_team_probe`.

**ÖFB- und manuelle Mannschaften (Spalte „Quelle“):**
- *ÖFB*: Ergebnisse und Torschützen kommen automatisch (täglich 21:30 Uhr). Nur der **Kurzbericht** ist änderbar.
- *Manuell*: der Verein pflegt Spiele, Ergebnisse, Torschützen und Kurzberichte selbst (Tabelle `score_manual_games`).
- Beides ist **streng getrennt**. Wechsel der Quelle → Warnung, beim Speichern werden alle bisherigen Daten der Mannschaft gelöscht.
- Kurzberichte für alle Spiele stehen in `score_comments` (Schlüssel Verein + Mannschaft + Datum), Änderungen im Protokoll `score_audit`.
- Die Webapp bekommt alles zusammengeführt über `_score_payload(verein)` (→ `tool_payload_lic` in `license-check`).

**Vereins-Admin (Lizenznehmer) – „Verein verwalten“ in der Webapp:**
- Im Vereinsdialog bei einer zugeordneten Lizenz **PIN vergeben** (4–12 Zeichen) und der verantwortlichen Person im Verein geben.
  Ohne PIN ist die Verwaltung für die Lizenz gesperrt; 5 falsche Eingaben → 15 Minuten Sperre.
- Der Vereins-Admin kann: Mannschaften anlegen (ÖFB nur aus dem **eigenen** ÖFB-Verein oder manuell), umbenennen, sortieren,
  aktivieren/deaktivieren, Quelle wechseln, entfernen; manuelle Spiele erfassen/ändern/löschen; Kurzberichte zu allen Spielen schreiben;
  ÖFB-Daten **einmal pro Tag** manuell laden.
- Der Vereins-Admin kann **nicht**: den ÖFB-Link des Vereins ändern, Link/Erkennung bestehender ÖFB-Mannschaften ändern,
  Mannschaften fremder ÖFB-Vereine (Spielgemeinschaft) hinzufügen, Vereine anlegen/löschen, Lizenzen zuordnen – das bleibt im Admin-Tool.
- Server: Edge Function `score-club` (Lizenzschlüssel + Gerät + PIN) → `score_club_api(…)`. Gleichzeitiges Bearbeiten wird erkannt
  (Hinweis „inzwischen von … geändert“ statt stillem Überschreiben).

**Versionsarchiv als ZIP:** Jede neue oder geänderte Version von `fcpf-ergebnisse` wird automatisch als
`fcpf-ergebnisse-<version>-src.zip` (index.html + LIESMICH.txt) in den Quelldateien des Admin-Tools abgelegt
(Trigger `tool_versions_zip` → `tool_version_archive(version_id)`, ZIP-Bausteine `_zip_store`, `_crc32`).
Für andere Tools manuell: `select tool_version_archive(<id aus tool_versions>);`

> ⚠️ `license-check` muss die Daten **je Lizenz** über `tool_payload_lic(tool, key, email)` laden. Die alte Funktion `tool_payload(tool)`
> ist stillgelegt (liefert absichtlich nichts) – wer `license-check` neu ausrollt, bitte nicht auf einen alten Stand zurückfallen.

Per SQL geht es weiterhin so:
```sql
insert into score_clubs (id, name, kurz, oefb_url, saisonstart)
values ('sv-muster', 'SV Musterdorf', 'SVM', 'https://vereine.oefb.at/SVMusterdorf/', '2026-08-01');
insert into fcpf_team_cfg (club_id, team, team_order, name, bewerb, oefb_url, own_regex, own_label, active) values
 ('sv-muster', 'KM', 1, 'Kampfmannschaft', 'Gebietsliga', 'https://vereine.oefb.at/SVMusterdorf/Mannschaften/Saison-2026-27/KM/Spiele/', 'Musterdorf', 'SV Musterdorf', true);
insert into score_license_clubs (license_id, club_id)
select id, 'sv-muster' from licenses where customer = 'SV Musterdorf'
on conflict (license_id) do update set club_id = excluded.club_id;
select score_import_club('sv-muster');   -- erster Import sofort
```

**Kurzbericht nachtragen** (z. B. durch Claude):
```sql
update fcpf_data set rows = (select jsonb_agg(case when x->>'team'='KM' and x->>'datum'='2026-11-15'
  then x || '{"bericht":"…"}' else x end) from jsonb_array_elements(rows) x) where club_id='fcpf' and doc='spiele';
```
**Sofort aktualisieren:** `select fcpf_import();` (alle Vereine) oder `select score_import_club('fcpf');` · **Probelauf:** `select fcpf_import(true);`
**Neue Saison:** URLs in `fcpf_team_cfg` (Saison-2027-28) und `score_clubs.saisonstart` anpassen.

### 🎨 SCORE.ritl – neutral, Edition „FCPF“ und Design je Lizenz (ab 2.0)

Dieselbe Datei liefert zwei Ausprägungen, gesteuert über die **Edition der Lizenz** (`window.RITL.edition`):

| Edition | Aussehen |
|---|---|
| *Standard* | **SCORE.ritl** im RIEMER-Tools-Design (Kopfzeile, Inter, Hell/Dunkel), Kopfbereich in den Vereinsfarben |
| `fcpf` – FCPF | bisheriges Vereinsdesign: Wappen, Stadionfoto, Barlow, Sponsorenleiste, Link zur FCPF-Übersicht |

Zum Testen ohne Lizenz: `…/index.html?edition=fcpf`.

**Design-Fenster** (Knopf *Design*): Vereinsname, Kurzname, Hashtag, Wappen (Upload, wird auf 320 px verkleinert) und **jede Farbe** getrennt für Hell und Dunkel
(18 Farben + Mannschaftsfarben). Die Vorschau im Fenster zeigt jede Änderung sofort, inkl. Lesbarkeitswarnung. *Farben aus Wappen* übernimmt die
kräftigsten Farbtöne des Wappens. *Speichern* gilt für **alle Geräte der Lizenz** (jedes Gerät darf ändern).

**PowerPoint:** RIEMER-Vorlage (Titelfolie mit Farbfeld + Wappen, Inhaltsfolien mit Kopfbalken, Fußzeile „erstellt mit SCORE.ritl · RIEMER Tools“),
gefärbt mit den Hell-Farben und dem Wappen der Lizenz.

Technik: Tabelle `tool_settings` (`license_id`, `tool`, `data` jsonb), Funktion `tool_settings_api(key, email, device, tool, 'get'|'save'|'reset', data)`,
Edge Function **`tool-settings`** (gleiche Lizenzprüfung wie `license-check`, max. ~350 kB je Lizenz und Tool). Das Tool hält eine Kopie im Browser
(`riemer-design:<tool>`), damit beim Öffnen nichts aufblitzt, und gleicht sie danach mit dem Server ab.
Design zurücksetzen per SQL: `delete from tool_settings where license_id = '…' and tool = 'fcpf-ergebnisse';`

---

## 📲 Dateien zwischen den Geräten einer Lizenz (tool-transfer)

Kurzzeit-Ablage für Dateien, die ein Tool von einem Gerät zum anderen bringen will – zuerst TRACK.ritl (ab V2.6): unterwegs geladene GPX-Strecken liegen 7 Tage auf dem Server und werden von den anderen Geräten derselben Lizenz übernommen.

- Edge Function `tool-transfer` (POST `{key, email, device, tool, action: list|get|put|delete, data}`) → RPC `tool_transfer_api` → Tabelle `tool_transfers` (gzip, je Lizenz und Tool, gleiche Datei per SHA-256 nur einmal).
- Einträge verfallen nach **7 Tagen** (beim nächsten Aufruf gelöscht). Höchstens 4 MB komprimiert je Datei.
- Kontingent: **50 MB je Lizenz zusammen mit den zentralen Backups** (`tool_backups`).
- Gleiche Lizenzprüfung wie `tool-backup` (Schlüssel, E-Mail, Tool in der Lizenz, Geräteplatz). Kein Zugriff ohne Lizenz, kein Service-Role-Key im Browser.

## E-Mail-Prüfung

Jede Lizenz kann eine Login-E-Mail haben (Admin → Spalte E-Mail bzw. Knopf **E-Mail**):

| Eintrag | Wirkung |
|---|---|
| `max@firma.at` | nur diese Adresse (Groß-/Kleinschreibung egal) |
| `@firma.at` | jede Adresse dieser Domain – für Firmenlizenzen |
| leer | keine Prüfung (wie bisher) |

Alle Schlüssel-Abfragen fragen E-Mail **und** Schlüssel ab. Die E-Mail ist für Passwortmanager der Benutzername.
Ist für eine Lizenz eine E-Mail hinterlegt, reicht der Schlüssel allein nicht mehr.

## myTOOLBOX.ritl

- Startseite der Toolbox → **Anmelden** (E-Mail + Schlüssel) → persönliche Seite `my/` („myTOOLBOX.ritl“).
- Oben: freigeschaltete Tools (farbig, anklickbar, dort automatisch angemeldet) inkl. Demo-Tools.
- Unten: nicht lizenzierte Tools grau mit Vorschau und „Lizenz anfragen“.
- Lizenzstatus: Login-E-Mail, gültig bis, Geräte.
- Die Anmeldung zählt wie ein Tool-Start als Gerät (gleicher Browser = gleiches Gerät).

### Katalog pflegen (Admin → Tools → Bearbeiten)

Name, Kategorie, Beschreibung, Link, Sortierung, „im Katalog anzeigen“, „ohne Lizenz nutzbar (Demo)“,
**Vorschaubild** (Screenshot, wird auf 960 px verkleinert) und App-Bild (SVG).
Startseite und myTOOLBOX lesen den Katalog live aus Supabase – keine Änderung im Repo nötig.
Jede Kachel zeigt unten den Tool-Typ **Dokument** bzw. **Datenbank** (aus `tools.typ`, sobald der Katalog `typ` mitliefert).
Neue Demo-/externe Tools ohne Lizenzschutz: **+ Katalogeintrag ohne Lizenzschutz**.

## Für Kunden

- Schlüsselformat: `RITL-XXXX-XXXX-XXXX-XXXX`. Ältere Schlüssel mit `RT-…` funktionieren weiter und werden automatisch auf `RITL-…` umgeschrieben (gleicher Schlüssel, neues Präfix).
- Das Eingabefeld zeigt den Schlüssel verdeckt (●●●●). Mit dem Auge-Symbol wird er sichtbar.
- Passwortmanager: Das Feld ist als Passwortfeld mit dem Benutzernamen „RIEMER Tools Lizenz“ gekennzeichnet. Chrome und Edge bieten nach dem Freischalten das Speichern an, Safari (iCloud-Schlüsselbund), Firefox, 1Password, Bitwarden & Co. erkennen das Formular ebenfalls und füllen es auf anderen Geräten aus. Lokal geöffnete Dateien (`file://`) speichern viele Passwortmanager nicht – dort hilft nur Kopieren & Einfügen.

- Schlüssel einmal eingeben → wird im Browser gespeichert, beim nächsten Öffnen automatisch geprüft.
- Abmelden auf einem Gerät: Tool-Adresse mit `?abmelden` aufrufen, z. B. `…/pptx-manager/?abmelden`
- Gerät = Browser auf einem PC. Browser-Daten löschen oder privater Modus zählt als neues Gerät.

## Grenzen des Schutzes

- Wer eine gültige Lizenz hat, kann das geladene Tool im Browser abspeichern. Die
  Lizenzprüfung verhindert unberechtigten Zugang, aber kein Kopieren durch Berechtigte –
  dafür gilt die proprietäre Lizenz (`LICENSE`) als rechtliche Absicherung.
- Rechenlogik, die auf keinen Fall beim Kunden landen darf, gehört später in eine eigene
  Server-Funktion (das Tool schickt Eingaben, der Server rechnet).

## Backup-Stufe je Lizenz (S-16)

Spalte `licenses.backup_stufe` (`settings` · `datenbank` · `storage`, Standard `datenbank`). Im Admin unter
„Backup-Stufe“. Die Tools bekommen sie mit `state_head` (Feld `backup_stufe`, auch bei `server_not_enabled`)
und übernehmen sie auf jedem Gerät; die Auswahl im Tool ist gesperrt.

```sql
-- Stufe einer Lizenz setzen (statt im Admin)
update licenses set backup_stufe = 'storage' where key_hint = 'XXXX';
```

Wirkung je Datenquelle: lokal → 01 Lokal = Stufe, 02 Zentral höchstens `datenbank` ·
A (ordner) → Ordner mindestens `datenbank`, Server `settings` · B (server) → Server mindestens `datenbank`, `storage` inkl. Dateien.

## Maximum je Lizenz, Wahl je Tool, Kontingent (S-17)

- `licenses.datenquelle` und `licenses.backup_stufe` sind das **Maximum** der Lizenz:
  Datenquelle **A** Lokal (`lokal`) < **B** Ordner (`ordner`) < **C** Server (`server`),
  Stufe **1** settings < **2** datenbank < **3** storage. Kurzform im Admin z. B. „C3“.
- Der Kunde wählt im Tool je Tool darunter (z. B. C2, B2, A1). Die Wahl liegt am Server in
  `license_tool_backup` (je Lizenz und Tool) und gilt auf allen Geräten. Über dem Maximum wird automatisch begrenzt.
- `tool-backup`: `cfg_get` / `cfg_set {datenquelle?, stufe?}` bzw. `{reset:true}`; `state_head` liefert
  `backup: {max, wahl, datenquelle, stufe, quota}` und als `datenquelle`/`backup_stufe` die **wirksamen** Werte.
- Einzelne Stände der Historie löschen: `tool-backup` Aktion `delete {id}`.
- `licenses.quota_mb` (Standard 50): Kontingent am Server für Backups, Stände, Dateien und Übergaben.

### Stufe je Datenquelle – `licenses.backup_matrix` (ab 20.11.2026)

Datenquelle und Backup-Stufe sind verknüpft: Für **jede angebotene Datenquelle** gilt eine eigene höchste Stufe.
Im Admin › Lizenz › „Datenquelle · Datenhoheit & Backup-Stufe“ als Matrix: je Zeile A/B/C Häkchen „anbieten“ und Stufe 1/2/3.

- `backup_matrix` = z. B. `{"lokal":"storage","ordner":"datenbank","server":"settings"}` – Kurzform **A3 · B2 · C1**.
  Fehlt ein Schlüssel, ist die Datenquelle nicht angeboten (auch eine niedrigere, z. B. C ohne B).
- Regeln (`_clean_backup_matrix`): A ist immer dabei (Standard A2), B mindestens `datenbank`.
- `null` = alte Lizenz: die Matrix wird aus `datenquelle`/`backup_stufe` abgeleitet (`_backup_matrix`: alle Datenquellen bis zum Maximum mit derselben Stufe).
- Beim Speichern mit Matrix setzt `admin_action` `datenquelle`, `backup_stufe` und `server_quelle` automatisch auf das Maximum der Matrix (für ältere Bausteine).
- Alle angebotenen Datenquellen sind gleichzeitig aktiv (ritl-bk ab 2.7), jede mit ihrer Stufe. Der Server nimmt höchstens `_server_stufe(cfg)` an: C angeboten → Stufe von C (storage = datenbank + Dateien), sonst B angeboten → settings, sonst (nur A) → Historie bis datenbank; sonst Fehler `stufe_limit`.
- Der Kunde wählt im Tool je Datenquelle eine eigene Stufe: `license_tool_backup.stufen` (z. B. `{"lokal":"storage","ordner":"datenbank","server":"settings"}`), `datenquelle` = aktiv, `stufe` = Stufe der aktiven. `cfg_set {datenquelle, stufe, stufen}` begrenzt jede Stufe auf die Matrix.
- `_backup_cfg` liefert zusätzlich `max.matrix`, `matrix` und `stufen` (wirksam je angebotener Datenquelle); wirksam ist die Wahl des Kunden nur, wenn die Datenquelle angeboten ist,
  und die Stufe höchstens bis zur Stufe dieser Datenquelle. `cfg_set` begrenzt genauso. ritl-bk ab 2.4 zeigt die Matrix in „Backup einrichten“.

```sql
-- Matrix setzen (statt im Admin)
update licenses set backup_matrix = '{"lokal":"storage","ordner":"datenbank","server":"settings"}',
  datenquelle = 'server', backup_stufe = 'storage', server_quelle = true where key_hint = 'XXXX';
```

```sql
-- Wahl des Kunden ansehen
select l.key_hint, w.tool, w.datenquelle, w.stufe, w.updated_at
  from license_tool_backup w join licenses l on l.id = w.license_id order by 1, 2;
-- Kontingent setzen
update licenses set quota_mb = 200 where key_hint = 'XXXX';
```

## Tool-Typ „Dokument“ / „Datenbank“ – `tools.typ` (ab 25.11.2026)

Jedes Tool hat einen Typ (Spalte `tools.typ`, Pflicht, Standard `datenbank`, nur `dokument` oder `datenbank`):

| Typ | Arbeitsweise | Baustein |
| --- | --- | --- |
| `datenbank` | Daten im Browser, Sicherung über Datenquelle/Stufe (S-16/S-17) | ritl-bk (`ritl_bk_versions`) |
| `dokument` | eine Projektdatei je Vorgang: `<Projektname>.<tool>.ritl`, z. B. „Angebot Muster.pdf.ritl“ (ohne Passwortschutz in 1.0) | ritl-doc (`ritl_doc_versions`) |

- Pilot: PDF.ritl = `dokument`, DRIVE.ritl = `datenbank`; die übrigen Tools folgen über Rollout R-19.
  Stand 25.11.2026: `pdf-ritl` = `dokument`, alle übrigen Tools `datenbank`. Typen nur nach Peters OK ändern.
- Auslieferung an das Tool:
  - `tool-backup` / `tool_state_api` (`_backup_cfg`): `backup.typ` neben `backup.ordner_vorgabe`.
  - `license-check` (`verify_license`, Edge Function ab v15): Antwort mit `typ` und `backup.typ`;
    im Tool `window.RITL.typ` und `window.RITL.backup.typ`.

```sql
-- Typ eines Tools setzen (nur nach Peters OK; ab 25.11.2026 auch per Admin-Aktion typ_set, siehe unten)
update tools set typ = 'dokument' where id = 'pdf-ritl';
-- Übersicht
select id, name, typ from tools order by typ, sort;
```

### Dokument-Baustein ritl-doc – `ritl_doc_versions`

Aufbau wie `ritl_bk_versions`: `id`, `version`, `channel` (`dev`/`beta`/`stable`, Standard `dev`), `block`, `notes`,
`active`, `created_at`, `released_at`. RLS an, keine Policies – nur der Server (service_role) liest und schreibt.

- `verify_license` ersetzt im Tool den Bereich `<!--ritl-doc:start-->…<!--ritl-doc:end-->` durch den neuesten aktiven
  Block bis zum Kanal der Lizenz (`ritl_doc_block(kanal)`, Reihenfolge stable < beta < dev) und meldet die Version als `ritl_doc`.
- Ohne Marken im Tool oder ohne Eintrag in `ritl_doc_versions` bleibt das Tool unverändert.

```sql
-- Versionen ansehen
select id, version, channel, active, released_at from ritl_doc_versions order by released_at desc;
```

### Admin-Aktionen für Typ und ritl-doc (ab 25.11.2026, Edge Function `license-admin` v17)

Aufruf wie alle Admin-Aktionen: `POST { action, data }` mit Header `x-admin-token` (Prüfung in `admin_ui`).
Bedienung auf der Admin-Seite (ab 25.11.2026, A-014):
- Reiter **Tools**: Auswahl **Typ** (Dokument/Datenbank) je Tool – Änderung mit Rückfrage, speichert per `typ_set`.
- Reiter **Dokument · RITL-DOC**: Versionen wie bei RITL-BK – Liste mit ausgelieferter Version je Kanal, ⬇ Datei,
  Kanal umstellen, Zurückziehen/Reaktivieren, Löschen, neue Version hochladen (`ritl-doc/ritl-doc.html`, zuerst Dev).

| Aktion | `data` | Antwort |
| --- | --- | --- |
| `typ_list` | – | `{ ok, typ: { "<tool_id>": "dokument" \| "datenbank", … } }` |
| `typ_set` | `{ tool_id, typ }` – `typ` nur `dokument` oder `datenbank` | `{ ok, tool_id, typ }` · Fehler `invalid_typ`, `not_found` |
| `doc_list` | – | `{ ok, versions: [{ id, version, channel, active, notes, kb, released_at }], live: { stable, beta, dev } }` |
| `doc_get` | `{ id }` | `{ ok, version, block }` |
| `doc_upload` | `{ version (#.# oder #.#.#), block, channel?, notes? }` – Block beginnt mit `<!--ritl-doc:start-->`, endet mit `<!--ritl-doc:end-->`, max. 400 000 Zeichen; Kanal Standard `dev` | `{ ok, id }` · Fehler `invalid_block`, `invalid_version`, `invalid_channel` |
| `doc_set` | `{ id, channel?, active? }` – Kanalwechsel setzt `released_at` neu | `{ ok }` |
| `doc_delete` | `{ id }` | `{ ok }` |

`doc_*` arbeitet genau wie `bk_*` (ritl-bk) bzw. `ui_*` (RITL-UI). Neue ritl-doc-Versionen immer zuerst in `dev`.

### Einfügen in das ausgelieferte HTML (A-019, ab 25.11.2026)

- `license-check` (ab v16) fügt Toolbox-Logo/Abmelden vor dem **letzten echten `</body>`** ein und sucht die Stelle
  direkt im Originaltext (`inject.ts`). Früher wurde in `html.toLowerCase()` gesucht – Zeichen wie „İ“ (U+0130) werden
  kleingeschrieben länger, die Stelle verschob sich und das Skript landete mitten im Tool (JFC V4.0.6: Text + Logo nach der Fußzeile).
- `verify_license` setzt die Farbpalette der Lizenz vor `</head>` ebenso im Originaltext (`regexp_instr … 'i'` statt `strpos(lower(h), …)`).
- Tools müssen „İ“ oder `</body>` in Bibliotheken deshalb nicht mehr entschärfen (JFC V4.0.8/V4.0.9 schadet aber nicht).

## SCORE.ritl – Posting (Bild + Text)

- **Kopfzeile:** `score_clubs.posting_kopf` bzw. `posting_kopf_nw` (Nachwuchs, U-Mannschaften) – erste Zeile des Posting-Texts.
- **Hashtags:** `score_clubs.hashtags` (Verein) und `fcpf_team_cfg.hashtags` (je Mannschaft). Pflege im Admin-Tool (Verein bearbeiten) oder vom Vereins-Admin in der Webapp.
- **Hintergründe:** Tabelle `score_posting_bg` (`club_id`, `team` – leer = Vereins-Standard, `data` = Bild als data-URL oder `neutral`, `ink` dunkel/hell, `alter_xy` = Position der handschriftlichen Altersklasse `[x, y, Höhe]`). Pflege im Admin-Tool unter „Posting-Hintergründe“.
- **Abruf in der Webapp:** Edge Function `score-club`, Aktionen `posting` (Hintergrund der Mannschaft) und `logo` (ÖFB-Wappen als data-URL, nur Pfade `/netzwerk/imagedownload/…`) – Lizenz + Gerät, ohne PIN.
- Der Import speichert je Spiel `heim_logo`/`gast_logo` (Pfade auf vereine.oefb.at), `gegner_oefb` (voller ÖFB-Name des Gegners) und `tore_liste` (Torschützen mit vollem Namen und Minute, für die Vornamen im Posting).
