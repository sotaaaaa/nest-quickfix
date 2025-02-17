/**
 * Identifies the status of the Confirmation.
 * tag: 665
 * @readonly
 * @enum {number} (int)
 */
export enum ConfirmStatus {
  /** Received */
  Received = 1,
  /** Mismatched Account */
  MismatchedAccount = 2,
  /** Missing Settlement Instructions */
  MissingSettlementInstructions = 3,
  /** Confirmed */
  Confirmed = 4,
  /** Request Rejected */
  RequestRejected = 5,
}
