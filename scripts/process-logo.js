const Jimp = require('jimp');
const path = require('path');

(async () => {
  try {
    const srcPath = path.join(__dirname, '..', 'public', 'therma-logo.png');
    const outTransparent = path.join(__dirname, '..', 'public', 'therma-logo-transparent.png');
    const outSocial = path.join(__dirname, '..', 'public', 'social-preview.png');
    const out512 = path.join(__dirname, '..', 'public', 'therma-512.png');
    const outApple = path.join(__dirname, '..', 'public', 'apple-touch-icon.png');
    const outFavicon16 = path.join(__dirname, '..', 'public', 'favicon-16.png');
    const outFavicon32 = path.join(__dirname, '..', 'public', 'favicon-32.png');

    console.log('Loading source:', srcPath);
    const image = await Jimp.read(srcPath);

    // Make near-white pixels transparent (fuzz ~12% -> threshold ~= 224)
    const threshold = 224; // 255 * (1 - 0.12)
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      // If pixel is near-white, set alpha to 0
      if (r >= threshold && g >= threshold && b >= threshold) {
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await image.writeAsync(outTransparent);
    console.log('Saved transparent PNG:', outTransparent);

    // Create social preview (1200x630) with transparent background and centered, resized logo
    const socialWidth = 1200;
    const socialHeight = 630;
    const maxLogoSize = 900; // max dimension for logo inside preview

    const logo = await Jimp.read(outTransparent);
    // Resize logo so largest side = maxLogoSize
    const scale = Math.min(maxLogoSize / logo.bitmap.width, maxLogoSize / logo.bitmap.height, 1);
    const logoW = Math.round(logo.bitmap.width * scale);
    const logoH = Math.round(logo.bitmap.height * scale);
    logo.resize(logoW, logoH, Jimp.RESIZE_BICUBIC);

    const social = new Jimp(socialWidth, socialHeight, 0x00000000); // transparent
    const x = Math.round((socialWidth - logoW) / 2);
    const y = Math.round((socialHeight - logoH) / 2);
    social.composite(logo, x, y, {
      mode: Jimp.BLEND_SOURCE_OVER,
      opacitySource: 1,
      opacityDest: 1,
    });

    await social.writeAsync(outSocial);
    console.log('Saved social preview:', outSocial);

    // Produce other icons
    await logo.clone().resize(512, 512, Jimp.RESIZE_BICUBIC).writeAsync(out512);
    console.log('Saved 512x512:', out512);

    await logo.clone().resize(180, 180, Jimp.RESIZE_BICUBIC).writeAsync(outApple);
    console.log('Saved apple-touch-icon (180x180):', outApple);

    await logo.clone().resize(16, 16, Jimp.RESIZE_NEAREST_NEIGHBOR).writeAsync(outFavicon16);
    await logo.clone().resize(32, 32, Jimp.RESIZE_BICUBIC).writeAsync(outFavicon32);
    console.log('Saved favicon PNGs (16 & 32):', outFavicon16, outFavicon32);

    console.log('All done. Please check the public/ folder for generated files.');
  } catch (err) {
    console.error('Error processing logo:', err);
    process.exit(1);
  }
})();
