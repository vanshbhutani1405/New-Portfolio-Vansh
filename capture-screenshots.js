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

  // Create target directory if it doesn't exist
  const targetDir = 'C:\\Users\\pc\\.gemini\\antigravity\\brain\\ff023adb-c2cf-4b74-94d4-6c111c6a20ab';

  for (const size of sizes) {
    console.log(`Setting viewport size: ${size.width}x${size.height}`);
    await page.setViewportSize({ width: size.width, height: size.height });
    
    console.log(`Navigating to ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait for animations/load
    await page.waitForTimeout(2000);
    
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
