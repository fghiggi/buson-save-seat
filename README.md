# Seat Reservation Automation

This project automates the process of reserving a seat on a website using Puppeteer, a Node.js library for browser automation. The script interacts with the webpage to select a seat, confirm the reservation, and fill in email details for the reservation.

## Features
- Automates seat selection by interacting with web elements.
- Handles errors, such as seat unavailability.
- Fills in email information with a randomly generated email.
- Verifies reservation success or failure.

## Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Run the script with the following command:
```bash
node src/index.js --url <page_url> --seat <seat_number>
```

### Parameters
- `--url`: The URL of the webpage where the seat reservation process takes place.
- `--seat`: The seat number to be selected.

### Example
```bash
node script.js --url https://example.com/reservation --seat 15
```

## Project Structure
- **script.js**: Main automation script.
- **README.md**: Documentation for the project.

## How It Works
1. The script launches a headless browser using Puppeteer.
2. Navigates to the provided URL.
3. Waits for the desired seat to be loaded and clicks on it.
4. Confirms the reservation by interacting with the confirmation button.
5. Fills in a randomly generated email address.
6. Checks for any error modals or success messages.

## Error Handling
- Custom error class `SeatSelectionError` is used to handle seat unavailability.
- Logs detailed error messages for debugging purposes.

## Configuration
The following configurations are included in the script:
- **Headless Mode**: The browser runs in headless mode for performance.
- **Network Idle Timeout**: Ensures that all network requests are completed before proceeding.
- **Selectors**: CSS selectors are used to interact with page elements.

## Dependencies
- [puppeteer-extra](https://www.npmjs.com/package/puppeteer-extra): Puppeteer with plugin support.
- [puppeteer-extra-plugin-stealth](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth): Prevents detection of automation by the website.

## Troubleshooting
- Ensure the provided URL is correct and accessible.
- Verify that the seat number exists on the page.
- Check network and server availability.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
