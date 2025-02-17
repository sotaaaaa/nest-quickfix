/**
 * Specifies the basis or unit used to calculate the total commission based on the rate.
 * tag: 13
 * @readonly
 * @enum {string} (char)
 */
export enum CommType {
  PerUnit = '1',
  /** Percent */
  Percent = '2',
  Absolute = '3',
  PercentageWaivedCashDiscount = '4',
  PercentageWaivedEnhancedUnits = '5',
  PointsPerBondOrContract = '6',
  BasisPoints = '7',
  AmountPerContract = '8',
}
