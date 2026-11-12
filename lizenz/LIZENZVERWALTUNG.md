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
