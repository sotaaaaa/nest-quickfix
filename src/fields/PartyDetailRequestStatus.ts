/**
 * Status of party details definition request.
 * tag: 1878
 * @readonly
 * @enum {number} (int)
 */
export enum PartyDetailRequestStatus {
  /** Accepted */
  Accepted = 0,
  /** Accepted with changes */
  AcceptedWithChanges = 1,
  /** Rejected */
  Rejected = 2,
  /** Acceptance pending */
  AcceptancePending = 3,
}
