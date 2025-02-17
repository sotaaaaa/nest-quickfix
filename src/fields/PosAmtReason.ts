/**
 * Specifies the reason for an amount type when reported on a position. Useful when multiple instances of the same amount type are reported.
 * tag: 1585
 * @readonly
 * @enum {number} (int)
 */
export enum PosAmtReason {
  /** Options settlement */
  OptionsSettlement = 0,
  /** Pending erosion adjustment */
  PendingErosionAdjustment = 1,
  /** Final erosion adjustment */
  FinalErosionAdjustment = 2,
  /** Tear-up coupon amount */
  TearUpCouponAmount = 3,
  PriceAlignmentInterest = 4,
  /** Delivery invoice charges */
  DeliveryInvoiceCharges = 5,
  /** Delivery storage charges */
  DeliveryStorageCharges = 6,
}
