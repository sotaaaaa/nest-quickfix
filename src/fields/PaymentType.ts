/**
 * Type of payment.
 * tag: 40213
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentType {
  /** Brokerage */
  Brokerage = 0,
  /** Upfront fee */
  UpfrontFee = 1,
  /** Independent amount / collateral */
  IndependentAmountCollateral = 2,
  /** Principal exchange */
  PrincipalExchange = 3,
  /** Novation / termination */
  NovationTermination = 4,
  /** Early termination provision */
  EarlyTerminationProvision = 5,
  /** Cancelable provision */
  CancelableProvision = 6,
  /** Extendible provision */
  ExtendibleProvision = 7,
  /** Cap rate provision */
  CapRateProvision = 8,
  /** Floor rate provision */
  FloorRateProvision = 9,
  /** Option premium */
  OptionPremium = 10,
  /** Settlement payment */
  SettlementPayment = 11,
  /** Cash settlement */
  CashSettl = 12,
  SecurityLending = 13,
  Rebate = 14,
  /** Other */
  Other = 99,
}
