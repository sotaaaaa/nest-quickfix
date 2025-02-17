/**
 * Used to specify the type of risk limit amount or position limit quantity or margin requirement amounts.
 * tag: 1530
 * @readonly
 * @enum {number} (int)
 */
export enum RiskLimitType {
  CreditLimit = 0,
  /** Gross limit */
  GrossLimit = 1,
  /** Net limit */
  NetLimit = 2,
  /** Exposure */
  Exposure = 3,
  /** Long limit */
  LongLimit = 4,
  /** Short limit */
  ShortLimit = 5,
  /** Cash margin */
  CashMargin = 6,
  /** Additional margin */
  AdditionalMargin = 7,
  /** Total margin */
  TotalMargin = 8,
  LimitConsumed = 9,
  ClipSize = 10,
  /** Maximum notional order size */
  MaxNotionalOrderSize = 11,
  DV01PV01Limit = 12,
  CS01Limit = 13,
  VolumeLimitPerTimePeriod = 14,
  VolFilledPctOrdVolTmPeriod = 15,
  NotlFilledPctNotlTmPeriod = 16,
  TransactionExecutionLimitPerTimePeriod = 17,
}
