/**
 * Identifies the type of Confirmation message being sent.
 * tag: 773
 * @readonly
 * @enum {number} (int)
 */
export enum ConfirmType {
  /** Status */
  Status = 1,
  /** Confirmation */
  Confirmation = 2,
  /** Confirmation Request Rejected (reason can be stated in Text (58) field) */
  ConfirmationRequestRejected = 3,
}
