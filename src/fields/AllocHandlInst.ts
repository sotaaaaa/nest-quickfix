/**
 * Indicates how the receiver (i.e. third party) of allocation information should handle/process the account details.
 * tag: 209
 * @readonly
 * @enum {number} (int)
 */
export enum AllocHandlInst {
  /** Match */
  Match = 1,
  /** Forward */
  Forward = 2,
  /** Forward and Match */
  ForwardAndMatch = 3,
  AutoClaimGiveUp = 4,
}
