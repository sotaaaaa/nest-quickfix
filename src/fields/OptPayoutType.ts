/**
 * Indicates the type of valuation method or payout trigger for an in-the-money option.
 * tag: 1482
 * @readonly
 * @enum {number} (int)
 */
export enum OptPayoutType {
  /** Vanilla */
  Vanilla = 1,
  /** Capped */
  Capped = 2,
  /** Digital (Binary) */
  Binary = 3,
  /** Asian */
  Asian = 4,
  /** Barrier */
  Barrier = 5,
  /** Digital Barrier */
  DigitalBarrier = 6,
  /** Lookback */
  Lookback = 7,
  /** Other path dependent */
  OtherPathDependent = 8,
  /** Other */
  Other = 99,
}
