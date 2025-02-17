/**
 * Type of matching exception.
 * tag: 2773
 * @readonly
 * @enum {number} (int)
 */
export enum MatchExceptionType {
  /** No matching confirmation */
  NoMatchingConfirmation = 0,
  /** No matching allocation */
  NoMatchingAllocation = 1,
  /** Allocation data element missing */
  AllocationDataElementMissing = 2,
  /** Confirmation data element missing */
  ConfirmationDataElementMissing = 3,
  /** Data difference not within tolerance */
  DataDifferenceNotWithinTolerance = 4,
  /** Match within tolerance */
  MatchWithinTolerance = 5,
  /** Other */
  Other = 99,
}
