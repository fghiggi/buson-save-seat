import { BUSON_SELECTORS } from '../utils/selectors.js';
import { generateRandomEmail } from '../utils/email.js';

/**
 * Fills the email field with a randomly generated email.
 * @param {import('puppeteer').Page} page
 */
export async function fillEmail (page) {
  console.log('Waiting for email field to appear...');
  await page.waitForSelector(BUSON_SELECTORS.emailInput, { timeout: 10000 });

  const email = generateRandomEmail();
  console.log(`Filling email field with: ${email}`);

  await page.type(BUSON_SELECTORS.emailInput, email, { delay: 100 });
}

/**
 * Waits for the email confirmation button to be enabled and clicks it.
 * @param {import('puppeteer').Page} page
 * @throws {Error} If the email confirmation button is not found.
 */
export async function confirmEmail (page) {
  console.log('Waiting for the email confirmation button to be enabled...');
  await page.waitForFunction(
    (selector) => {
      const button = document.querySelector(selector);
      return button && !button.disabled;
    },
    { timeout: 30000 },
    BUSON_SELECTORS.emailConfirmButton,
  );

  console.log('Email confirmation button is enabled!');
  const emailConfirmButton = await page.$(BUSON_SELECTORS.emailConfirmButton);

  if (!emailConfirmButton) {
    throw new Error('Email confirmation button not found.');
  }

  await page.evaluate((button) => button.click(), emailConfirmButton);
  console.log('Email confirmation button clicked successfully!');
}
