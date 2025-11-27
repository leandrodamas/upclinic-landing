Write-Host "=== DIAGNÓSTICO DE BUILD ===" -ForegroundColor Cyan
Write-Host ""

# Verificar Node e npm
Write-Host "1. Verificando Node.js e npm..." -ForegroundColor Yellow
node -v
npm -v
Write-Host ""

# Verificar se node_modules existe
Write-Host "2. Verificando dependências..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "✅ node_modules encontrado" -ForegroundColor Green
} else {
    Write-Host "❌ node_modules não encontrado - executando npm install..." -ForegroundColor Red
    npm install
}
Write-Host ""

# Verificar svelte.config
Write-Host "3. Verificando configuração do SvelteKit..." -ForegroundColor Yellow
if (Test-Path "svelte.config.mjs") {
    Write-Host "✅ svelte.config.mjs encontrado" -ForegroundColor Green
} else {
    Write-Host "❌ svelte.config.mjs não encontrado" -ForegroundColor Red
}
Write-Host ""

# Sincronizar SvelteKit
Write-Host "4. Sincronizando SvelteKit..." -ForegroundColor Yellow
npx svelte-kit sync
Write-Host ""

# Tentar build
Write-Host "5. Executando build..." -ForegroundColor Yellow
Write-Host "--- INÍCIO DO BUILD ---" -ForegroundColor Cyan
npm run build
Write-Host "--- FIM DO BUILD ---" -ForegroundColor Cyan
Write-Host ""

# Verificar resultado
Write-Host "6. Verificando resultado..." -ForegroundColor Yellow
if (Test-Path "build") {
    Write-Host "✅ BUILD SUCESSO! Diretório 'build' criado." -ForegroundColor Green
    Write-Host "Conteúdo do build:" -ForegroundColor Cyan
    Get-ChildItem build | Select-Object Name, Length | Format-Table
} else {
    Write-Host "❌ BUILD FALHOU! Diretório 'build' não foi criado." -ForegroundColor Red
    Write-Host "Verifique os erros acima." -ForegroundColor Yellow
}

