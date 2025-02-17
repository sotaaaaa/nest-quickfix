/**
 * Defines the scope of TriggerAction(1101) when it is set to "cancel" (3).
 * tag: 1628
 * @readonly
 * @enum {number} (int)
 */
export enum TriggerScope {
  /** This order (default) */
  ThisOrder = 0,
  /** Other order (use RefID) */
  OtherOrder = 1,
  /** All other orders for the given security */
  AllOtherOrdersForGivenSecurity = 2,
  /** All other orders for the given security and price */
  AllOtherOrdersForGivenSecurityAndPrice = 3,
  /** All other orders for the given security and side */
  AllOtherOrdersForGivenSecurityAndSide = 4,
  /** All other orders for the given security, price and side */
  AllOtherOrdersForGivenSecurityPriceAndSide = 5,
}
