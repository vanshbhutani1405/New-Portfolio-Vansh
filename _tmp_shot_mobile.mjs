import { chromium } from 'playwright'
const browser = await chromium.launch()
for (const [name, w, h] of [['mobile-375', 375, 812], ['desktop-1440', 1440, 900]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } })
  try {
    await page.goto('http://localhost:5174/', { timeout: 8000 })
  } catch {
    await page.goto('http://localhost:5173/', { timeout: 8000 })
  }
  await page.waitForTimeout(1500)
  await page.screenshot({ path: `shot-${name}.png` })
  await page.close()
}
await browser.close()
console.log('ok')
