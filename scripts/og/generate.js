// Regenerates public/og-image.png (1200x630). Run: NODE_PATH=<global node_modules> node scripts/og/generate.js
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto("file://" + path.join(__dirname, "og.html"));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(__dirname, "../../public/og-image.png") });
  await browser.close();
})();
