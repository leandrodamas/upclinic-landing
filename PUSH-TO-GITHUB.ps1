# Script para enviar landing page para GitHub
Write-Host "`n📤 ENVIANDO LANDING PAGE PARA GITHUB`n" -ForegroundColor Cyan

$repoUrl = "https://github.com/leandrodamas/upclinic-landing.git"

# Verificar se está no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Execute este script dentro da pasta landing-page-upclinic" -ForegroundColor Red
    exit 1
}

# 1. Inicializar Git se necessário
Write-Host "[1/5] Verificando repositório Git..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
    Write-Host "   Inicializando repositório Git..." -ForegroundColor Gray
    git init
    Write-Host "   ✅ Repositório inicializado" -ForegroundColor Green
} else {
    Write-Host "   ✅ Repositório Git já existe" -ForegroundColor Green
}

# 2. Configurar remote
Write-Host "`n[2/5] Configurando remote do GitHub..." -ForegroundColor Yellow
$currentRemote = git remote get-url origin 2>&1
if ($LASTEXITCODE -eq 0) {
    if ($currentRemote -ne $repoUrl) {
        Write-Host "   Atualizando remote..." -ForegroundColor Gray
        git remote set-url origin $repoUrl
    } else {
        Write-Host "   Remote já está configurado corretamente" -ForegroundColor Gray
    }
} else {
    Write-Host "   Adicionando remote..." -ForegroundColor Gray
    git remote add origin $repoUrl
}
Write-Host "   ✅ Remote configurado: $repoUrl" -ForegroundColor Green

# 3. Adicionar arquivos
Write-Host "`n[3/5] Adicionando arquivos ao Git..." -ForegroundColor Yellow
git add .
$staged = git status --short | Measure-Object | Select-Object -ExpandProperty Count
Write-Host "   ✅ $staged arquivo(s) adicionado(s)" -ForegroundColor Green

# 4. Commit
Write-Host "`n[4/5] Fazendo commit..." -ForegroundColor Yellow
$commitMessage = "feat: Landing page UpClinic completa com SvelteKit + TailwindCSS

- Páginas principais: Home, Sobre, Planos, Contato
- Páginas legais: Política de Privacidade, Termos, LGPD, Cookies, Código de Conduta
- Componentes reutilizáveis: Navbar, Footer, Forms, Modals
- Integração Stripe Pricing Table
- Firebase Analytics configurado
- SEO e acessibilidade implementados
- Design responsivo e moderno"

git commit -m $commitMessage
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✅ Commit realizado" -ForegroundColor Green
} else {
    Write-Host "   ⚠️ Nenhuma alteração para commitar ou commit já existe" -ForegroundColor Yellow
}

# 5. Push
Write-Host "`n[5/5] Enviando para GitHub..." -ForegroundColor Yellow
Write-Host "   Branch: main" -ForegroundColor Gray
Write-Host "   Repositório: $repoUrl`n" -ForegroundColor Gray

git branch -M main 2>&1 | Out-Null
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅✅✅ CÓDIGO ENVIADO COM SUCESSO! ✅✅✅`n" -ForegroundColor Green
    Write-Host "🌐 Repositório:" -ForegroundColor Cyan
    Write-Host "   $repoUrl`n" -ForegroundColor White
} else {
    Write-Host "`n❌ Erro ao enviar para GitHub!" -ForegroundColor Red
    Write-Host "Verifique:" -ForegroundColor Yellow
    Write-Host "   1. Se você tem permissão no repositório" -ForegroundColor Gray
    Write-Host "   2. Se está autenticado no GitHub (git config --global user.name)" -ForegroundColor Gray
    Write-Host "   3. Se o repositório existe no GitHub`n" -ForegroundColor Gray
}

