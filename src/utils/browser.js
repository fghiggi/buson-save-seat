import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

/**
 * Opens the browser and returns the browser and page instances.
 * @returns {Promise<{ browser: import('puppeteer').Browser, page: import('puppeteer').Page }>}
 */
export async function initBrowser () {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1920, height: 1080 },
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  return { browser, page };
}

/**
 * Navigates to the specified URL and waits for the page to fully load.
 * @param {import('puppeteer').Page} page
 * @param {string} url
 */
export async function navigateToUrl (page, url) {
  console.log(`Accessing link: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle2' });
}

/**
 * Waits for the network to be idle.
 * Logs a message before and after waiting.
 * @param {import('puppeteer').Page} page
 * @param {number} idleTime
 * @param {number} timeout
 * @returns {Promise<void>}
 */
export async function waitForNetworkIdle (page, idleTime = 1000, timeout = 15000) {
  console.log(`Waiting for network to be idle (idleTime: ${idleTime}ms, timeout: ${timeout}ms)...`);
  await page.waitForNetworkIdle({ idleTime, timeout });
  console.log('Network is idle now!');
}
