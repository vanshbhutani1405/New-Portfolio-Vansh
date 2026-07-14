import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5173/')
await page.waitForTimeout(1500)
await page.screenshot({ path: '/tmp/hero-desktop.png' })

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } })
await mobile.goto('http://localhost:5173/')
await mobile.waitForTimeout(1500)
await mobile.screenshot({ path: '/tmp/hero-mobile.png' })

await browser.close()
