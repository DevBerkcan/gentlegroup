const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SIZES = [280, 640, 1200];
const QUALITY = 85;

const IMAGES_TO_OPTIMIZE = [
  'berkcan.png',
  'medin.png',
  'alanur.png',
  'emma.png',
  'nrwrealestate.png',
  'creativhairstyling.png',
  'janjacobi.png',
  'skinbloom.png',
  'hautliebe.png',
  'kabelbruecken.png',
  'gentletrack.png'
];

async function optimizeImage(filename) {
  const inputPath = path.join(PUBLIC_DIR, filename);

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${filename} (not found)`);
    return;
  }

  const basename = path.basename(filename, path.extname(filename));
  const stats = fs.statSync(inputPath);
  const originalSizeKB = (stats.size / 1024).toFixed(2);

  console.log(`\n🔄 Processing: ${filename} (${originalSizeKB} KB)`);

  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Original: ${metadata.width}x${metadata.height}`);

    let totalSaved = 0;

    for (const size of SIZES) {
      if (size <= metadata.width) {
        const outputPath = path.join(PUBLIC_DIR, `${basename}-${size}w.webp`);

        await sharp(inputPath)
          .resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: QUALITY })
          .toFile(outputPath);

        const outputStats = fs.statSync(outputPath);
        const savedKB = stats.size - outputStats.size;
        totalSaved += savedKB;

        console.log(`   ✅ Created ${basename}-${size}w.webp (${(outputStats.size / 1024).toFixed(2)} KB)`);
      }
    }

    const webpPath = path.join(PUBLIC_DIR, `${basename}.webp`);
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    totalSaved += stats.size - webpStats.size;

    console.log(`   ✅ Created ${basename}.webp (${(webpStats.size / 1024).toFixed(2)} KB)`);
    console.log(`   💾 Total saved: ${(totalSaved / 1024).toFixed(2)} KB (${((totalSaved / stats.size) * 100).toFixed(1)}%)`);

  } catch (error) {
    console.error(`   ❌ Error processing ${filename}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');
  console.log('━'.repeat(60));

  for (const filename of IMAGES_TO_OPTIMIZE) {
    await optimizeImage(filename);
  }

  console.log('\n' + '━'.repeat(60));
  console.log('\n✨ Optimization complete!\n');
}

optimizeAllImages();
