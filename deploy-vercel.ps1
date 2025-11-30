# Script para fazer deploy na Vercel
Write-Host "🚀 Iniciando deploy para Vercel..." -ForegroundColor Cyan

# Verificar se estamos no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erro: package.json não encontrado. Execute este script no diretório do projeto." -ForegroundColor Red
    exit 1
}

# Verificar se o Vercel CLI está instalado
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "📦 Instalando Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Fazer build do projeto
Write-Host "🔨 Fazendo build do projeto..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro no build. Corrija os erros antes de fazer deploy." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build concluído com sucesso!" -ForegroundColor Green

# Verificar se há alterações no Git
Write-Host "📝 Verificando alterações no Git..." -ForegroundColor Yellow
$gitStatus = git status --porcelain

if ($gitStatus) {
    Write-Host "📦 Há alterações não commitadas. Fazendo commit..." -ForegroundColor Yellow
    git add .
    git commit -m "Fix: corrigir exibição da logomarca usando SVG diretamente"
    
    Write-Host "⬆️ Fazendo push para o repositório..." -ForegroundColor Yellow
    git push
    
    Write-Host "✅ Alterações enviadas para o GitHub!" -ForegroundColor Green
    Write-Host "⏳ O Vercel fará deploy automaticamente após o push..." -ForegroundColor Cyan
} else {
    Write-Host "ℹ️ Não há alterações para commitar." -ForegroundColor Gray
}

# Opção de deploy manual via Vercel CLI
Write-Host "`n💡 Dica: Se o deploy automático não funcionar, você pode fazer deploy manual com:" -ForegroundColor Cyan
Write-Host "   vercel --prod" -ForegroundColor White

Write-Host "`n✅ Processo concluído!" -ForegroundColor Green

