/**
 * Subscription Request Type
 * tag: 263
 * @readonly
 * @enum {string} (char)
 */
export enum SubscriptionRequestType {
  /** Snapshot */
  Snapshot = '0',
  /** Snapshot + Updates (Subscribe) */
  SnapshotAndUpdates = '1',
  /** Disable previous Snapshot + Update Request (Unsubscribe) */
  DisablePreviousSnapshot = '2',
}
