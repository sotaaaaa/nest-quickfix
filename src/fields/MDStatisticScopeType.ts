/**
 * Scope details of the statistics to reduce the number of events being used as basis for the statistics.
 * tag: 2459
 * @readonly
 * @enum {number} (int)
 */
export enum MDStatisticScopeType {
  /** Entry rate */
  EntryRate = 1,
  /** Modification rate */
  ModificationRate = 2,
  /** Cancel rate */
  CancelRate = 3,
  /** Downward move */
  DownwardMove = 4,
  /** Upward move */
  UpwardMove = 5,
}
