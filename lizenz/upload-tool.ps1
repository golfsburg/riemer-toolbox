# RIEMER Toolbox – geschütztes Tool hochladen / aktualisieren
# Copyright (c) 2026 Peter Riemer
#
# Aufruf (PowerShell):
#   $env:RIEMER_SERVICE_KEY = "<service_role / secret key aus Supabase>"
#   .\upload-tool.ps1 -Id pptx-manager -Name "PPTX Manager" -Version 1.0 -Datei "C:\Pfad\pptx-manager.html"
#
# Den Service-Key NIEMALS in dieses Repo schreiben!
# Zu finden unter: Supabase → Projekt RIEMER-Lizenzen → Project Settings → API Keys → secret / service_role

param(
  [Parameter(Mandatory)] [string] $Id,
  [Parameter(Mandatory)] [string] $Name,
  [Parameter(Mandatory)] [string] $Version,
  [Parameter(Mandatory)] [string] $Datei
)

$ErrorActionPreference = "Stop"
$Url = "https://hcluxhlvshydnncprpbl.supabase.co/rest/v1/tools?on_conflict=id"
$Key = $env:RIEMER_SERVICE_KEY
if (-not $Key) { throw "Umgebungsvariable RIEMER_SERVICE_KEY ist nicht gesetzt." }
if (-not (Test-Path $Datei)) { throw "Datei nicht gefunden: $Datei" }

$html = [System.IO.File]::ReadAllText((Resolve-Path $Datei), [System.Text.Encoding]::UTF8)
$body = @{ id = $Id; name = $Name; version = $Version; html = $html; updated_at = (Get-Date).ToUniversalTime().ToString("o") } | ConvertTo-Json -Compress
$bytes = [System.Text.Encoding]::UTF8.GetBytes($body)

$headers = @{
  apikey          = $Key
  Authorization   = "Bearer $Key"
  Prefer          = "resolution=merge-duplicates,return=minimal"
}

Invoke-RestMethod -Method Post -Uri $Url -Headers $headers -ContentType "application/json; charset=utf-8" -Body $bytes
Write-Host "✔ $Name ($Id) Version $Version hochgeladen – $([math]::Round($bytes.Length/1KB)) KB" -ForegroundColor Green
