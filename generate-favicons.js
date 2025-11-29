// Script para gerar favicons a partir da logomarca
import sharp from 'sharp';
import { existsSync } from 'fs';
import { join } from 'path';

const staticDir = './static';
const logoPath = join(staticDir, 'logo-upclinic.png');

// Tamanhos necessários para os favicons
const faviconSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 }
];

async function generateFavicons() {
  console.log('🎨 Gerando favicons a partir da logomarca...\n');

  // Verificar se o logo existe
  if (!existsSync(logoPath)) {
    console.error('❌ Logo não encontrado em:', logoPath);
    process.exit(1);
  }

  try {
    // Gerar cada tamanho de favicon
    for (const { name, size } of faviconSizes) {
      const outputPath = join(staticDir, name);
      
      await sharp(logoPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Criado: ${name} (${size}x${size})`);
    }

    console.log('\n✨ Todos os favicons foram gerados com sucesso!');
    console.log('\n📋 Arquivos criados:');
    faviconSizes.forEach(({ name }) => {
      console.log(`   - ${name}`);
    });
    
  } catch (error) {
    console.error('❌ Erro ao gerar favicons:', error.message);
    process.exit(1);
  }
}

generateFavicons();

