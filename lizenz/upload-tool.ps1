# RIEMER Toolbox – geschütztes Tool hochladen / neue Version veröffentlichen
# Copyright (c) 2026 Peter Riemer
#
# Aufruf (PowerShell):
#   $env:RIEMER_ADMIN_TOKEN = "RTA-…"      (derselbe Token wie für lizenz/admin.html)
#   .\upload-tool.ps1 -Id msx-builder -Version 4.5-dev -Kanal dev -Datei "C:\Pfad\msx-builder.html" -Notiz "Neuer Import"
#
# -Kanal:  dev | beta | stable   (Standard: dev)
#   dev    → nur Lizenzen im Kanal Entwicklung sehen die Version
#   beta   → Lizenzen im Kanal Beta und Entwicklung
#   stable → alle Lizenzen
# -Edition: standard (Standard) oder eine im Admin angelegte Edition, z. B. light / pro
# -Quellen: optional – Datei (am besten ZIP) mit den Quelldateien dieser Version. Wird als Sicherung
#           in Supabase abgelegt (nur für Admins lesbar), z. B. -Quellen "C:\Pfad\msx-builder-4.5-src.zip"
#           Ein Ordner wird automatisch gezippt.
# Freigeben (dev → beta → stabil) danach in admin.html → Tools → Versionen.
#
# Den Admin-Token NIEMALS in dieses Repo schreiben!

param(
  [Parameter(Mandatory)] [string] $Id,
  [Parameter(Mandatory)] [string] $Version,
  [Parameter(Mandatory)] [string] $Datei,
  [ValidateSet("dev","beta","stable")] [string] $Kanal = "dev",
  [string] $Edition = "standard",
  [string] $Name = "",
  [string] $Notiz = "",
  [string] $Quellen = ""
)

$ErrorActionPreference = "Stop"
$Url = "https://hcluxhlvshydnncprpbl.supabase.co/functions/v1/license-admin"
$Token = $env:RIEMER_ADMIN_TOKEN
if (-not $Token) { throw "Umgebungsvariable RIEMER_ADMIN_TOKEN ist nicht gesetzt." }
if (-not (Test-Path $Datei)) { throw "Datei nicht gefunden: $Datei" }

$html = [System.IO.File]::ReadAllText((Resolve-Path $Datei), [System.Text.Encoding]::UTF8)
$body = @{
  action = "upload_tool"
  data   = @{ tool_id = $Id; name = $Name; version = $Version; channel = $Kanal; edition = $Edition; notes = $Notiz; html = $html }
} | ConvertTo-Json -Compress -Depth 4
$bytes = [System.Text.Encoding]::UTF8.GetBytes($body)

$res = Invoke-RestMethod -Method Post -Uri $Url -Headers @{ "x-admin-token" = $Token } -ContentType "application/json; charset=utf-8" -Body $bytes
if (-not $res.ok) { throw "Fehler: $($res.error)" }
Write-Host "✔ $Id Version $Version im Kanal '$Kanal' (Edition '$Edition') hochgeladen – $([math]::Round($bytes.Length/1KB)) KB" -ForegroundColor Green

# Quelldateien sichern (optional)
if ($Quellen) {
  if (-not (Test-Path $Quellen)) { throw "Quellen nicht gefunden: $Quellen" }
  $src = (Resolve-Path $Quellen).Path
  if ((Get-Item $src).PSIsContainer) {
    $zip = Join-Path ([System.IO.Path]::GetTempPath()) ("$Id-$Version-src.zip")
    if (Test-Path $zip) { Remove-Item $zip }
    Compress-Archive -Path (Join-Path $src "*") -DestinationPath $zip
    $src = $zip
  }
  $b64 = [Convert]::ToBase64String([System.IO.File]::ReadAllBytes($src))
  $sbody = @{
    action = "source_upload"
    data   = @{ tool_id = $Id; version = $Version; edition = $Edition; filename = [System.IO.Path]::GetFileName($src); b64 = $b64; notes = $Notiz }
  } | ConvertTo-Json -Compress -Depth 4
  $sres = Invoke-RestMethod -Method Post -Uri $Url -Headers @{ "x-admin-token" = $Token } -ContentType "application/json; charset=utf-8" -Body ([System.Text.Encoding]::UTF8.GetBytes($sbody))
  if (-not $sres.ok) { throw "Quellen: Fehler $($sres.error)" }
  Write-Host "✔ Quellen gesichert – $($sres.kb) KB" -ForegroundColor Green
}
