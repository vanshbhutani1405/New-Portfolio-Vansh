import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:5173/')
await page.waitForTimeout(1000)

const launcher = page.getByRole('button', { name: 'Open chat' })
await launcher.click()
await page.waitForTimeout(400)
await page.screenshot({ path: '/tmp/chat-open.png' })

// Close, then simulate a drag and ensure it doesn't open
await page.getByRole('button', { name: 'Close chat' }).click()
await page.waitForTimeout(300)

const box = await launcher.boundingBox()
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
await page.mouse.down()
await page.mouse.move(box.x - 200, box.y - 100, { steps: 10 })
await page.mouse.up()
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/chat-after-drag.png' })

const panelVisible = await page.locator('text=Ask about Vansh').isVisible().catch(() => false)
console.log('Panel visible after drag (should be false):', panelVisible)

await browser.close()
