/**
 * Status of mass order request.
 * tag: 2425
 * @readonly
 * @enum {number} (int)
 */
export enum MassOrderRequestStatus {
  /** Accepted */
  Accepted = 1,
  /** Accepted with additional events */
  AcceptedWithAdditionalEvents = 2,
  /** Rejected */
  Rejected = 3,
}
