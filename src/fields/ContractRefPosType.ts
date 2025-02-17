/**
 * Additional information related to the pricing of a commodity swaps position, specifically an indicator referring to the position type.
 * tag: 1833
 * @readonly
 * @enum {number} (int)
 */
export enum ContractRefPosType {
  /** Two component intercommodity spread */
  TwoComponentIntercommoditySpread = 0,
  /** Index or basket */
  IndexOrBasket = 1,
  /** Two component locational basis */
  TwoComponentLocationBasis = 2,
  /** Other */
  Other = 99,
}
