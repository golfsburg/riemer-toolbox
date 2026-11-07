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

**`lizenz/admin.html`** – im Browser öffnen (lokal oder später unter `tools.riemer.co/lizenz/admin.html`),
mit dem Admin-Token (`RTA-…`) anmelden. Dort kannst du:

- alle Lizenzen sehen (Kunde, Tools, Ablauf, Geräte, letzte Nutzung, Status)
- neue Lizenzen erzeugen – der Schlüssel wird einmalig angezeigt
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
  array['cs-dashboard'],           -- Tools ('*' = alle Tools)
  '2027-12-31',                    -- Ablaufdatum (null = unbefristet)
  'office@firma-xy.at',            -- E-Mail (optional)
  3,                               -- max. Geräte
  'Jahreslizenz 2027'              -- Notiz (optional)
);
```

➡️ Gibt den Schlüssel `RT-XXXX-XXXX-XXXX-XXXX` zurück – **nur dieses eine Mal sichtbar**,
gespeichert wird nur ein Hash. Sofort an den Kunden weitergeben.

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
update licenses set tools = array['cs-dashboard','anderes-tool'] where customer = 'Firma XY GmbH';
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

**Variante A – PowerShell** (empfohlen, auch für große Dateien):

```powershell
$env:RIEMER_SERVICE_KEY = "<secret key aus Supabase → Project Settings → API Keys>"
.\lizenz\upload-tool.ps1 -Id cs-dashboard -Name "CS-Dashboard" -Version 2.4 -Datei "C:\Pfad\CS-Dashboard.html"
```

**Variante B – Datei an Claude schicken** und hochladen lassen.

## Neues geschütztes Tool anlegen

1. Ordner anlegen, z. B. `rohr-rechner/`, darin `index.html`:
   ```html
   <script src="../lizenz/loader.js" data-tool="rohr-rechner" data-name="Rohr-Rechner"></script>
   ```
   (Vorlage: `cs-dashboard/index.html`)
2. Echte Tool-Datei mit `upload-tool.ps1 -Id rohr-rechner …` hochladen.
3. In `README.md` und Startseite `index.html` mit 🔒 eintragen.
4. Lizenzen mit `array['rohr-rechner']` vergeben.

---

## Für Kunden

- Schlüssel einmal eingeben → wird im Browser gespeichert, beim nächsten Öffnen automatisch geprüft.
- Abmelden auf einem Gerät: Tool-Adresse mit `?abmelden` aufrufen, z. B. `…/cs-dashboard/?abmelden`
- Gerät = Browser auf einem PC. Browser-Daten löschen oder privater Modus zählt als neues Gerät.

## Grenzen des Schutzes

- Wer eine gültige Lizenz hat, kann das geladene Tool im Browser abspeichern. Die
  Lizenzprüfung verhindert unberechtigten Zugang, aber kein Kopieren durch Berechtigte –
  dafür gilt die proprietäre Lizenz (`LICENSE`) als rechtliche Absicherung.
- Rechenlogik, die auf keinen Fall beim Kunden landen darf, gehört später in eine eigene
  Server-Funktion (das Tool schickt Eingaben, der Server rechnet).
