Write-Host "🔨 Building SvelteKit application..." -ForegroundColor Cyan
npm run build

if (Test-Path "build") {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host "🚀 Deploying to Firebase Hosting..." -ForegroundColor Cyan
    firebase deploy --only hosting:site-upclinic
} else {
    Write-Host "❌ Build failed - build directory not found" -ForegroundColor Red
    exit 1
}

