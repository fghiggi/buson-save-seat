import { BUSON_SELECTORS } from '../utils/selectors.js';
import { SeatSelectionError } from '../errors/SeatSelectionError.js';

/**
 * Checks if the seat is available and clicks it if so.
 * @param {import('puppeteer').Page} page
 * @param {string} seat
 * @throws {SeatSelectionError} If the seat is already taken.
 */
export async function selectSeat (page, seat) {
  console.log(`Waiting for seat selector: ${BUSON_SELECTORS.seat(seat)}...`);

  const seatFound = await page
    .waitForSelector(BUSON_SELECTORS.seat(seat), { timeout: 10000 })
    .then(() => true)
    .catch(() => false);

  if (!seatFound) {
    throw new SeatSelectionError(`Seat ${seat} is already taken by another user.`);
  }

  const seatElement = await page.$(BUSON_SELECTORS.seat(seat));
  await seatElement.click();
  console.log(`Seat ${seat} selected successfully!`);
}

/**
 * Clicks the seat confirmation button.
 * @param {import('puppeteer').Page} page
 * @throws {Error} If the confirmation button is not found.
 */
export async function confirmSeatSelection (page) {
  console.log('Waiting for seat confirmation button...');
  await page.waitForSelector(BUSON_SELECTORS.confirmButton, { timeout: 10000 });

  const confirmButton = await page.$(BUSON_SELECTORS.confirmButton);
  if (!confirmButton) {
    throw new Error('Seat confirmation button not found.');
  }

  await confirmButton.click();
  console.log('Seat confirmation button clicked successfully!');
}
