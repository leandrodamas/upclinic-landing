# Script para configurar variáveis de ambiente no Vercel
# Execute este script após fazer login no Vercel CLI

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Configuração de Variáveis de Ambiente" -ForegroundColor Cyan
Write-Host "Vercel - UpClinic Landing Page" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se está logado no Vercel
Write-Host "Verificando autenticação no Vercel..." -ForegroundColor Yellow
$vercelWhoami = vercel whoami 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Você não está logado no Vercel CLI." -ForegroundColor Red
    Write-Host ""
    Write-Host "Por favor, execute primeiro:" -ForegroundColor Yellow
    Write-Host "  vercel login" -ForegroundColor White
    Write-Host ""
    Write-Host "Depois execute este script novamente." -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Autenticado como: $vercelWhoami" -ForegroundColor Green
Write-Host ""

# Solicitar informações do usuário
Write-Host "Por favor, informe as seguintes informações:" -ForegroundColor Yellow
Write-Host ""

$smtpHost = Read-Host "SMTP Host [sh00122.hostgator.com.br]"
if ([string]::IsNullOrWhiteSpace($smtpHost)) {
    $smtpHost = "sh00122.hostgator.com.br"
}

$smtpPort = Read-Host "SMTP Port [465]"
if ([string]::IsNullOrWhiteSpace($smtpPort)) {
    $smtpPort = "465"
}

$smtpUser = Read-Host "SMTP User [upclinic8@gmail.com]"
if ([string]::IsNullOrWhiteSpace($smtpUser)) {
    $smtpUser = "upclinic8@gmail.com"
}

$smtpPassword = Read-Host "SMTP Password" -AsSecureString
$smtpPasswordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($smtpPassword)
)

Write-Host ""
Write-Host "Configurando variáveis de ambiente..." -ForegroundColor Yellow
Write-Host ""

# Configurar variáveis para Production
Write-Host "📦 Configurando para Production..." -ForegroundColor Cyan
vercel env add SMTP_HOST production "$smtpHost" 2>&1 | Out-Null
vercel env add SMTP_PORT production "$smtpPort" 2>&1 | Out-Null
vercel env add SMTP_USER production "$smtpUser" 2>&1 | Out-Null
vercel env add SMTP_PASSWORD production "$smtpPasswordPlain" 2>&1 | Out-Null

# Configurar variáveis para Preview
Write-Host "📦 Configurando para Preview..." -ForegroundColor Cyan
vercel env add SMTP_HOST preview "$smtpHost" 2>&1 | Out-Null
vercel env add SMTP_PORT preview "$smtpPort" 2>&1 | Out-Null
vercel env add SMTP_USER preview "$smtpUser" 2>&1 | Out-Null
vercel env add SMTP_PASSWORD preview "$smtpPasswordPlain" 2>&1 | Out-Null

# Configurar variáveis para Development
Write-Host "📦 Configurando para Development..." -ForegroundColor Cyan
vercel env add SMTP_HOST development "$smtpHost" 2>&1 | Out-Null
vercel env add SMTP_PORT development "$smtpPort" 2>&1 | Out-Null
vercel env add SMTP_USER development "$smtpUser" 2>&1 | Out-Null
vercel env add SMTP_PASSWORD development "$smtpPasswordPlain" 2>&1 | Out-Null

Write-Host ""
Write-Host "✅ Variáveis de ambiente configuradas com sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "Variáveis configuradas:" -ForegroundColor Yellow
Write-Host "  SMTP_HOST = $smtpHost" -ForegroundColor White
Write-Host "  SMTP_PORT = $smtpPort" -ForegroundColor White
Write-Host "  SMTP_USER = $smtpUser" -ForegroundColor White
Write-Host "  SMTP_PASSWORD = ********" -ForegroundColor White
Write-Host ""
Write-Host "Ambientes: Production, Preview, Development" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  IMPORTANTE:" -ForegroundColor Yellow
Write-Host "  - Faça um novo deploy para aplicar as variáveis" -ForegroundColor White
Write-Host "  - Execute: vercel --prod" -ForegroundColor White
Write-Host ""

