/**
 * Indicates whether the trade or position being reported was cleared through a clearing organization.
 * tag: 1832
 * @readonly
 * @enum {number} (int)
 */
export enum ClearedIndicator {
  NotCleared = 0,
  Cleared = 1,
  Submitted = 2,
  Rejected = 3,
}
