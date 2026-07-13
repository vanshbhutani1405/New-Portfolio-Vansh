const { chromium } = require('playwright');

async function debug() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  // Scroll to bottom
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 20);
    });
  });

  // Check the images in the About section
  const imagesInfo = await page.evaluate(() => {
    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return { error: 'About section not found' };

    const images = Array.from(aboutSection.querySelectorAll('img'));
    return images.map(img => {
      // Find the FadeIn wrapper parent
      let parent = img.parentElement;
      while (parent && !parent.classList.contains('absolute')) {
        parent = parent.parentElement;
      }

      const parentStyle = parent ? window.getComputedStyle(parent) : {};
      const imgStyle = window.getComputedStyle(img);

      return {
        src: img.src,
        parentClasses: parent ? parent.className : '',
        parentDisplay: parentStyle.display,
        parentOpacity: parentStyle.opacity,
        parentVisibility: parentStyle.visibility,
        parentTransform: parentStyle.transform,
        imgWidth: imgStyle.width,
        imgHeight: imgStyle.height,
        rect: parent ? parent.getBoundingClientRect() : {}
      };
    });
  });

  console.log('Images in About Section:', JSON.stringify(imagesInfo, null, 2));
  await browser.close();
}

debug().catch(console.error);
