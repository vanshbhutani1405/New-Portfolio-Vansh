const { chromium } = require('playwright');
const path = require('path');

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const url = 'http://localhost:5173/';
  const sizes = [
    { name: '375', width: 375, height: 812 },
    { name: '768', width: 768, height: 1024 },
    { name: '1440', width: 1440, height: 900 }
  ];

  const targetDir = 'C:\\Users\\pc\\.gemini\\antigravity\\brain\\ff023adb-c2cf-4b74-94d4-6c111c6a20ab';

  for (const size of sizes) {
    console.log(`Setting viewport size: ${size.width}x${size.height}`);
    await page.setViewportSize({ width: size.width, height: size.height });
    
    console.log(`Navigating to ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait for initial load
    await page.waitForTimeout(1000);

    // Scroll down in steps with pauses to allow intersection observers to trigger
    console.log('Scrolling page in steps to trigger all animations...');
    await page.evaluate(async () => {
      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      const scrollHeight = document.body.scrollHeight;
      const step = 400;
      for (let y = 0; y < scrollHeight; y += step) {
        window.scrollTo(0, y);
        await delay(150);
      }
      // Scroll to absolute bottom
      window.scrollTo(0, scrollHeight);
      await delay(200);
    });

    // Scroll back to top
    console.log('Scrolling back to top...');
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });

    // Wait for everything to settle
    await page.waitForTimeout(1500);
    
    const screenshotPath = path.join(targetDir, `screenshot-${size.name}.png`);
    console.log(`Taking screenshot for ${size.name}...`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot to ${screenshotPath}`);
  }

  await browser.close();
}

capture().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
