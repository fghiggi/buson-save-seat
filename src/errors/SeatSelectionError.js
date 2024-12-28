export class SeatSelectionError extends Error {
  constructor (message) {
    super(message);
    this.name = 'SeatSelectionError';
  }
}
