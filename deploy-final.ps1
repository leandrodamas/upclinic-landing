# Script para garantir deploy completo
Write-Host "=== DEPLOY FINAL DA LANDING PAGE ===" -ForegroundColor Green

# 1. Remover arquivos de logo
Write-Host "`n1. Removendo arquivos de logo..." -ForegroundColor Yellow
if (Test-Path "build") { Remove-Item -Recurse -Force "build" }
if (Test-Path "src/lib/assets/logo-upclinic.png") { Remove-Item "src/lib/assets/logo-upclinic.png" -Force }
if (Test-Path "src/lib/assets/logo-upclinic.svg") { Remove-Item "src/lib/assets/logo-upclinic.svg" -Force }
if (Test-Path "static/logo-upclinic.png") { Remove-Item "static/logo-upclinic.png" -Force }
if (Test-Path "static/logo-upclinic.svg") { Remove-Item "static/logo-upclinic.svg" -Force }
Write-Host "   ✅ Arquivos removidos" -ForegroundColor Green

# 2. Verificar status do Git
Write-Host "`n2. Verificando status do Git..." -ForegroundColor Yellow
git status --short

# 3. Adicionar todas as mudanças
Write-Host "`n3. Adicionando mudanças ao Git..." -ForegroundColor Yellow
git add -A
git status --short

# 4. Fazer commit
Write-Host "`n4. Fazendo commit..." -ForegroundColor Yellow
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "fix: deploy final - remove all logo files and references - $timestamp"

# 5. Push para GitHub
Write-Host "`n5. Enviando para GitHub..." -ForegroundColor Yellow
git push origin main

# 6. Verificar último commit
Write-Host "`n6. Último commit:" -ForegroundColor Yellow
git log --oneline -1

Write-Host "`n=== DEPLOY CONCLUÍDO ===" -ForegroundColor Green
Write-Host "Aguarde o Vercel fazer o deploy automático..." -ForegroundColor Cyan

