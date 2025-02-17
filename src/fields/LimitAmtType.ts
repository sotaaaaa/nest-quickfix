/**
 * Identifies the type of limit amount expressed in LastLimitAmt(1632) and LimitAmtRemaining(1633).
 * tag: 1631
 * @readonly
 * @enum {number} (int)
 */
export enum LimitAmtType {
  /** Credit limit */
  CreditLimit = 0,
  /** Gross position limit */
  GrossPositionLimit = 1,
  /** Net position limit */
  NetPositionLimit = 2,
  /** Risk exposure limit */
  RiskExposureLimit = 3,
  /** Long position limit */
  LongPositionLimit = 4,
  /** Short position limit */
  ShortPositionLimit = 5,
}
