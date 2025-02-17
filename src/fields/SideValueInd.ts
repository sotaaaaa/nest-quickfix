/**
 * Code to identify which "SideValue" the value refers to. SideValue1 and SideValue2 are used as opposed to Buy or Sell so that the basket can be quoted either way as Buy or Sell.
 * tag: 401
 * @readonly
 * @enum {number} (int)
 */
export enum SideValueInd {
  /** Side Value 1 */
  SideValue1 = 1,
  /** Side Value 2 */
  SideValue2 = 2,
}
