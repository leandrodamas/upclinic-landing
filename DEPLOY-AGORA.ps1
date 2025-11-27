# Script para fazer deploy da landing page
Write-Host "`n🚀 DEPLOY DA LANDING PAGE`n" -ForegroundColor Cyan

# Verificar se está no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Execute este script dentro da pasta landing-page-upclinic" -ForegroundColor Red
    exit 1
}

# 1. Limpar build anterior
Write-Host "[1/4] Limpando build anterior..." -ForegroundColor Yellow
Remove-Item "build" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item ".svelte-kit" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "   ✅ Limpeza concluída" -ForegroundColor Green

# 2. Verificar adapter
Write-Host "`n[2/4] Verificando configuração..." -ForegroundColor Yellow
$configContent = Get-Content "svelte.config.js" -Raw
if ($configContent -match "adapter-vercel") {
    Write-Host "   ⚠️ Adapter Vercel detectado" -ForegroundColor Yellow
    Write-Host "   💡 Para Firebase, precisa usar adapter-static" -ForegroundColor Gray
    Write-Host "   Continuando com build atual..." -ForegroundColor Gray
} else {
    Write-Host "   ✅ Configuração OK" -ForegroundColor Green
}

# 3. Build
Write-Host "`n[3/4] Executando build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ❌ Build falhou!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "build")) {
    Write-Host "   ❌ Build não foi criado!" -ForegroundColor Red
    exit 1
}

$fileCount = (Get-ChildItem "build" -Recurse -File).Count
Write-Host "   ✅ Build concluído: $fileCount arquivos" -ForegroundColor Green

# 4. Deploy no Firebase
Write-Host "`n[4/4] Fazendo deploy no Firebase..." -ForegroundColor Yellow
Set-Location ".."
firebase deploy --only hosting:site-upclinic

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅✅✅ DEPLOY CONCLUÍDO! ✅✅✅`n" -ForegroundColor Green
    Write-Host "🌐 Site disponível em:" -ForegroundColor Cyan
    Write-Host "   https://site-upclinic.web.app" -ForegroundColor White
    Write-Host "   https://clinicupapp.com`n" -ForegroundColor White
} else {
    Write-Host "`n❌ Erro no deploy!" -ForegroundColor Red
}

