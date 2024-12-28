/**
 * All the selectors needed for the Buson automation.
 */
export const BUSON_SELECTORS = {
  seat: (seatNumber) => `#seat-${seatNumber}`,
  confirmButton: '#selectForm > footer > div > div:nth-child(6) > button.bs-btn.bs-btn-primary.srtc-btn.js-seat-confirmation',
  emailInput: '#email-inpt-dialog > div.mdc-dialog__container > div > div > div > input',
  emailConfirmButton: '#email-inpt-dialog > div.mdc-dialog__container > div > footer > button',
  errorModal: '#generic-error > div.mdc-dialog__container > div > footer > button',
};
