const Jimp = require('jimp');
const path = require('path');

(async () => {
  try {
    const srcPath = path.join(__dirname, '..', 'public', 'therma-logo-transparent.png');
    const outFavicon64 = path.join(__dirname, '..', 'public', 'favicon-64.png');

    console.log('Loading logo for favicon...');
    const logo = await Jimp.read(srcPath);

    // Create a larger favicon (64x64) for better visibility
    await logo.clone().resize(64, 64, Jimp.RESIZE_BICUBIC).writeAsync(outFavicon64);
    console.log('Saved 64x64 favicon:', outFavicon64);

    console.log('Done. favicon-64.png created for better tab visibility.');
  } catch (err) {
    console.error('Error processing favicon:', err);
    process.exit(1);
  }
})();
