/**
 * Registration status as returned by the broker or (for CIV) the fund manager:
 * tag: 506
 * @readonly
 * @enum {string} (char)
 */
export enum RegistStatus {
  /** Accepted */
  Accepted = 'A',
  /** Rejected */
  Rejected = 'R',
  /** Held */
  Held = 'H',
  /** Reminder - i.e. Registration Instructions are still outstanding */
  Reminder = 'N',
}
