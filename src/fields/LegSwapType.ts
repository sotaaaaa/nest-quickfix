/**
 * For Fixed Income, used instead of LegOrderQty(685) to requests the respondent to calculate the quantity based on the quantity on the opposite side of the swap.
 * tag: 690
 * @readonly
 * @enum {number} (int)
 */
export enum LegSwapType {
  /** Par For Par */
  ParForPar = 1,
  /** Modified Duration */
  ModifiedDuration = 2,
  /** Risk */
  Risk = 4,
  /** Proceeds */
  Proceeds = 5,
}
