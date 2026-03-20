# Script Simples - Configurar Variáveis Vercel
# Execute após: vercel login

Write-Host "`n=== Configuração Vercel - Variáveis SMTP ===" -ForegroundColor Cyan
Write-Host ""

# Verificar login
$whoami = vercel whoami 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Faça login primeiro: vercel login" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Logado como: $whoami`n" -ForegroundColor Green

# Valores padrão
$host = "sh00122.hostgator.com.br"
$port = "465"
$user = "upclinic8@gmail.com"

Write-Host "Valores padrão:" -ForegroundColor Yellow
Write-Host "  SMTP_HOST: $host"
Write-Host "  SMTP_PORT: $port"
Write-Host "  SMTP_USER: $user"
Write-Host ""

$senha = Read-Host "Digite a senha do email" -AsSecureString
$senhaPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($senha)
)

Write-Host "`nConfigurando..." -ForegroundColor Yellow

$envs = @("production", "preview", "development")
foreach ($env in $envs) {
    Write-Host "  [$env]..." -ForegroundColor Cyan
    echo $host | vercel env add SMTP_HOST $env 2>&1 | Out-Null
    echo $port | vercel env add SMTP_PORT $env 2>&1 | Out-Null
    echo $user | vercel env add SMTP_USER $env 2>&1 | Out-Null
    echo $senhaPlain | vercel env add SMTP_PASSWORD $env 2>&1 | Out-Null
}

Write-Host "`n✅ Concluído! Execute: vercel --prod" -ForegroundColor Green

