/**
 * Specifies the affirmation status of the confirmation.
 * tag: 940
 * @readonly
 * @enum {number} (int)
 */
export enum AffirmStatus {
  /** Received */
  Received = 1,
  /** Confirm rejected, i.e. not affirmed */
  ConfirmRejected = 2,
  /** Affirmed */
  Affirmed = 3,
}
