# Script de Deploy Automático - Landing Page UpClinic
# Execute: .\FAZER-DEPLOY.ps1

$ErrorActionPreference = "Stop"

Write-Host "`n🚀 INICIANDO DEPLOY AUTOMÁTICO`n" -ForegroundColor Cyan

# Passo 1: Limpar arquivos antigos
Write-Host "[1/7] Limpando arquivos antigos..." -ForegroundColor Yellow
if (Test-Path "svelte.config.mjs") { Remove-Item "svelte.config.mjs" -Force }
if (Test-Path "build") { Remove-Item "build" -Recurse -Force }
if (Test-Path ".svelte-kit") { Remove-Item ".svelte-kit" -Recurse -Force -ErrorAction SilentlyContinue }
Write-Host "✅ Limpeza concluída`n" -ForegroundColor Green

# Passo 2: Instalar dependências
Write-Host "[2/7] Instalando dependências..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) { throw "Erro ao instalar dependências" }
Write-Host "✅ Dependências instaladas`n" -ForegroundColor Green

# Passo 3: Sincronizar SvelteKit
Write-Host "[3/7] Sincronizando SvelteKit..." -ForegroundColor Yellow
npx svelte-kit sync
Write-Host "✅ Sincronização concluída`n" -ForegroundColor Green

# Passo 4: Build
Write-Host "[4/7] Executando build (isso pode levar alguns minutos)..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) { throw "Erro no build" }
Write-Host "✅ Build concluído`n" -ForegroundColor Green

# Passo 5: Verificar build
Write-Host "[5/7] Verificando build..." -ForegroundColor Yellow
if (-not (Test-Path "build")) {
    throw "Build não foi criado!"
}
$fileCount = (Get-ChildItem "build" -Recurse -File).Count
Write-Host "✅ Build verificado: $fileCount arquivos criados`n" -ForegroundColor Green

# Passo 6: Mudar para raiz do projeto
Write-Host "[6/7] Preparando para deploy..." -ForegroundColor Yellow
Set-Location ".."
Write-Host "✅ Diretório alterado para raiz do projeto`n" -ForegroundColor Green

# Passo 7: Deploy
Write-Host "[7/7] Fazendo deploy para Firebase..." -ForegroundColor Yellow
Write-Host "Target: site-upclinic`n" -ForegroundColor Gray
firebase deploy --only hosting:site-upclinic

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ DEPLOY CONCLUÍDO COM SUCESSO!`n" -ForegroundColor Green
    Write-Host "🌐 Acesse:" -ForegroundColor Cyan
    Write-Host "   https://site-upclinic.web.app" -ForegroundColor White
    Write-Host "   https://clinicupapp.com`n" -ForegroundColor White
} else {
    Write-Host "`n❌ Erro no deploy. Verifique se está logado: firebase login`n" -ForegroundColor Red
}

