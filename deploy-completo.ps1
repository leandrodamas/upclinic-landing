Write-Host "🚀 DEPLOY COMPLETO - Landing Page UpClinic" -ForegroundColor Cyan
Write-Host "==========================================`n" -ForegroundColor Cyan

# 1. Verificar e corrigir arquivo de configuração
Write-Host "1️⃣ Verificando configuração do SvelteKit..." -ForegroundColor Yellow
if (Test-Path "svelte.config.mjs") {
    Write-Host "   Removendo svelte.config.mjs (usando apenas .js)" -ForegroundColor Gray
    Remove-Item "svelte.config.mjs" -Force
}
if (-not (Test-Path "svelte.config.js")) {
    Write-Host "   ❌ svelte.config.js não encontrado!" -ForegroundColor Red
    exit 1
}
Write-Host "   ✅ Configuração OK`n" -ForegroundColor Green

# 2. Instalar dependências
Write-Host "2️⃣ Instalando/Atualizando dependências..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ❌ Erro ao instalar dependências!" -ForegroundColor Red
    exit 1
}
Write-Host "   ✅ Dependências instaladas`n" -ForegroundColor Green

# 3. Sincronizar SvelteKit
Write-Host "3️⃣ Sincronizando SvelteKit..." -ForegroundColor Yellow
npx svelte-kit sync
Write-Host "   ✅ Sincronização concluída`n" -ForegroundColor Green

# 4. Limpar build anterior (se existir)
Write-Host "4️⃣ Limpando builds anteriores..." -ForegroundColor Yellow
if (Test-Path "build") {
    Remove-Item "build" -Recurse -Force
    Write-Host "   Build anterior removido" -ForegroundColor Gray
}
if (Test-Path ".svelte-kit") {
    Remove-Item ".svelte-kit" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "   Cache do SvelteKit limpo" -ForegroundColor Gray
}
Write-Host "   ✅ Limpeza concluída`n" -ForegroundColor Green

# 5. Executar build
Write-Host "5️⃣ Executando build do SvelteKit..." -ForegroundColor Yellow
Write-Host "   (Isso pode levar alguns minutos...)`n" -ForegroundColor Gray
$buildOutput = npm run build 2>&1
$buildOutput | Write-Host

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n   ❌ Build falhou!" -ForegroundColor Red
    Write-Host "   Verifique os erros acima.`n" -ForegroundColor Yellow
    exit 1
}

# 6. Verificar se o build foi criado
Write-Host "`n6️⃣ Verificando resultado do build..." -ForegroundColor Yellow
if (Test-Path "build") {
    $buildFiles = Get-ChildItem "build" -Recurse | Measure-Object
    Write-Host "   ✅ Build criado com sucesso!" -ForegroundColor Green
    Write-Host "   📁 Arquivos gerados: $($buildFiles.Count)" -ForegroundColor Cyan
    Write-Host "   📦 Tamanho total: $([math]::Round((Get-ChildItem 'build' -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB, 2)) MB`n" -ForegroundColor Cyan
} else {
    Write-Host "   ❌ Build não foi criado!" -ForegroundColor Red
    Write-Host "   Verifique os erros acima.`n" -ForegroundColor Yellow
    exit 1
}

# 7. Verificar Firebase CLI
Write-Host "7️⃣ Verificando Firebase CLI..." -ForegroundColor Yellow
$firebaseInstalled = Get-Command firebase -ErrorAction SilentlyContinue
if (-not $firebaseInstalled) {
    Write-Host "   ⚠️  Firebase CLI não encontrado. Instalando..." -ForegroundColor Yellow
    npm install -g firebase-tools
    if ($LASTEXITCODE -ne 0) {
        Write-Host "   ❌ Erro ao instalar Firebase CLI!" -ForegroundColor Red
        Write-Host "   Execute manualmente: npm install -g firebase-tools`n" -ForegroundColor Yellow
        exit 1
    }
}
Write-Host "   ✅ Firebase CLI OK`n" -ForegroundColor Green

# 8. Deploy para Firebase
Write-Host "8️⃣ Fazendo deploy para Firebase Hosting..." -ForegroundColor Yellow
Write-Host "   Target: site-upclinic" -ForegroundColor Gray
Write-Host "   Domínio: clinicupapp.com`n" -ForegroundColor Gray

firebase deploy --only hosting:site-upclinic

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ DEPLOY CONCLUÍDO COM SUCESSO!`n" -ForegroundColor Green
    Write-Host "🌐 URLs:" -ForegroundColor Cyan
    Write-Host "   - Firebase: https://site-upclinic.web.app" -ForegroundColor White
    Write-Host "   - Domínio: https://clinicupapp.com`n" -ForegroundColor White
    Write-Host "💡 Se o domínio não estiver funcionando, configure no Firebase Console:" -ForegroundColor Yellow
    Write-Host "   https://console.firebase.google.com/project/upclinic-aa025/hosting`n" -ForegroundColor Gray
} else {
    Write-Host "`n❌ Erro no deploy!" -ForegroundColor Red
    Write-Host "Verifique se você está logado: firebase login`n" -ForegroundColor Yellow
    exit 1
}

