import { initBrowser, navigateToUrl, waitForNetworkIdle } from './utils/browser.js';
import { selectSeat, confirmSeatSelection } from './steps/seatSelection.js';
import { fillEmail, confirmEmail } from './steps/emailFill.js';
import { checkForReservedSeat } from './steps/accomplishReservation.js';

import { parseCommandLineArgs } from './utils/args.js';
import { SeatSelectionError } from './errors/SeatSelectionError.js';

(async () => {
  const { url, seat } = parseCommandLineArgs();
  let browser;

  try {
    // 1. Initialize the browser
    const { browser: launchedBrowser, page } = await initBrowser();
    browser = launchedBrowser;

    // 2. Navigate to the URL
    await navigateToUrl(page, url);

    // 3. Select the seat and confirm
    await selectSeat(page, seat);
    await confirmSeatSelection(page);

    // 4. Wait briefly for network
    await waitForNetworkIdle(page);

    // 5. Fill in email and confirm
    await fillEmail(page);
    await waitForNetworkIdle(page);

    await confirmEmail(page);
    await waitForNetworkIdle(page);

    // 6. Check the error modal
    await checkForReservedSeat(page, seat);
  } catch (error) {
    if (error instanceof SeatSelectionError) {
      console.log(error.message);
    } else {
      console.error('Error during execution:', error);
    }
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
