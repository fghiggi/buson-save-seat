import { BUSON_SELECTORS } from '../utils/selectors.js';

/**
 * Checks if the error modal appears, indicating the seat is already taken.
 * @param {import('puppeteer').Page} page
 * @param {string} seat
 */
export async function checkForReservedSeat (page, seat) {
  console.log('Checking if the error modal is visible...');
  const isModalVisible = await page
    .waitForSelector(BUSON_SELECTORS.errorModal, { timeout: 5000 })
    .then(() => true)
    .catch(() => false);

  if (isModalVisible) {
    console.error(`Seat ${seat} was already selected by another user.`);
  } else {
    console.log(`Seat ${seat} reservation was successfully completed!`);
  }
}
