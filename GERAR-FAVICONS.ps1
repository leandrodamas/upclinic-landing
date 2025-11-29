# Script PowerShell para gerar favicons a partir da logomarca
Write-Host "`n🎨 Gerando favicons a partir da logomarca...`n" -ForegroundColor Cyan

$staticDir = "static"
$logoPath = Join-Path $staticDir "logo-upclinic.png"

# Verificar se o logo existe
if (-not (Test-Path $logoPath)) {
    Write-Host "❌ Logo não encontrado em: $logoPath" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Logo encontrado: $logoPath" -ForegroundColor Green

# Verificar se System.Drawing está disponível
try {
    Add-Type -AssemblyName System.Drawing
    
    # Carregar a imagem original
    $originalImage = [System.Drawing.Image]::FromFile((Resolve-Path $logoPath))
    Write-Host "✅ Imagem carregada: $($originalImage.Width)x$($originalImage.Height)`n" -ForegroundColor Green
    
    # Tamanhos necessários
    $sizes = @(
        @{ Name = "favicon-16x16.png"; Size = 16 },
        @{ Name = "favicon-32x32.png"; Size = 32 },
        @{ Name = "apple-touch-icon.png"; Size = 180 }
    )
    
    foreach ($item in $sizes) {
        $outputPath = Join-Path $staticDir $item.Name
        
        # Criar uma nova imagem com o tamanho desejado
        $newImage = New-Object System.Drawing.Bitmap($item.Size, $item.Size)
        $graphics = [System.Drawing.Graphics]::FromImage($newImage)
        
        # Configurar qualidade
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        
        # Preencher com fundo branco
        $graphics.Clear([System.Drawing.Color]::White)
        
        # Calcular posição para centralizar
        $ratio = [Math]::Min($item.Size / $originalImage.Width, $item.Size / $originalImage.Height)
        $newWidth = [int]($originalImage.Width * $ratio)
        $newHeight = [int]($originalImage.Height * $ratio)
        $x = ($item.Size - $newWidth) / 2
        $y = ($item.Size - $newHeight) / 2
        
        # Desenhar a imagem redimensionada
        $graphics.DrawImage($originalImage, $x, $y, $newWidth, $newHeight)
        
        # Salvar como PNG
        $newImage.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        
        # Limpar recursos
        $graphics.Dispose()
        $newImage.Dispose()
        
        Write-Host "✅ Criado: $($item.Name) ($($item.Size)x$($item.Size))" -ForegroundColor Green
    }
    
    # Limpar imagem original
    $originalImage.Dispose()
    
    Write-Host "`n✨ Todos os favicons foram gerados com sucesso!`n" -ForegroundColor Green
    Write-Host "📋 Arquivos criados:" -ForegroundColor Cyan
    foreach ($item in $sizes) {
        Write-Host "   - $($item.Name)" -ForegroundColor Gray
    }
    
} catch {
    Write-Host "`n❌ Erro ao gerar favicons: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "`n💡 Alternativa: Use uma ferramenta online como:" -ForegroundColor Yellow
    Write-Host "   https://realfavicongenerator.net/" -ForegroundColor Gray
    Write-Host "   https://favicon.io/favicon-converter/" -ForegroundColor Gray
    exit 1
}

