/**
 * Status of entitlement definition for one party.
 * tag: 1883
 * @readonly
 * @enum {number} (int)
 */
export enum EntitlementStatus {
  /** Accepted */
  Accepted = 0,
  /** Accepted with changes */
  AcceptedWithChanges = 1,
  /** Rejected */
  Rejected = 2,
  Pending = 3,
  Requested = 4,
  Deferred = 5,
}
