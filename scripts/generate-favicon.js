const sharp = require('sharp');
const path = require('path');

async function generateFavicon() {
  try {
    // Create a 32x32 PNG with background
    await sharp({
      create: {
        width: 32,
        height: 32,
        channels: 4,
        background: { r: 0, g: 17, b: 6, alpha: 1 } // Dark green background
      }
    })
    .composite([{
      input: await sharp(path.join(__dirname, '../public/logo.png'))
        .resize(24, 24, { fit: 'contain' })
        .toBuffer(),
      top: 4,
      left: 4
    }])
    .png()
    .toFile(path.join(__dirname, '../public/favicon.png'));
    
    console.log('Favicon PNG generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 