/**
 * Indicates whether application level recovery is needed.
 * tag: 1744
 * @readonly
 * @enum {number} (int)
 */
export enum ApplLevelRecoveryIndicator {
  /** Application level recovery is not needed (default) */
  NoApplRecoveryNeeded = 0,
  /** Application level recovery is needed */
  ApplRecoveryNeeded = 1,
}
