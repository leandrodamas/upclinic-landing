Write-Host "🔨 Building SvelteKit application..." -ForegroundColor Cyan
Write-Host "Current directory: $(Get-Location)" -ForegroundColor Gray

# Executar build
$buildOutput = npm run build 2>&1
Write-Host $buildOutput

# Verificar se o build foi criado
if (Test-Path "build") {
    Write-Host "✅ Build successful! Build directory found." -ForegroundColor Green
    Write-Host "📁 Build contents:" -ForegroundColor Cyan
    Get-ChildItem build | Select-Object -First 10 | Format-Table Name, Length
    
    Write-Host "`n🚀 Deploying to Firebase Hosting..." -ForegroundColor Cyan
    firebase deploy --only hosting:site-upclinic
} else {
    Write-Host "❌ Build failed - build directory not found" -ForegroundColor Red
    Write-Host "Checking for errors above..." -ForegroundColor Yellow
    exit 1
}

