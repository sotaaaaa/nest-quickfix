/**
 * Status of the trade give-up relative to the group identified in AllocGroupID(1730).
 * tag: 2767
 * @readonly
 * @enum {number} (int)
 */
export enum AllocGroupStatus {
  Added = 0,
  Canceled = 1,
  Replaced = 2,
  Changed = 3,
  Pending = 4,
}
