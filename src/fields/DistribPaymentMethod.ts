/**
 * Identifies the payment method for a (fractional) distribution. Used for CIV.
 * tag: 477
 * @readonly
 * @enum {number} (int)
 */
export enum DistribPaymentMethod {
  /** CREST */
  CREST = 1,
  /** NSCC */
  NSCC = 2,
  /** Euroclear */
  Euroclear = 3,
  /** Clearstream */
  Clearstream = 4,
  /** Cheque */
  Cheque = 5,
  /** Telegraphic Transfer */
  TelegraphicTransfer = 6,
  /** Fed Wire */
  FedWire = 7,
  /** Direct Credit (BECS, BACS) */
  DirectCredit = 8,
  /** ACH Credit */
  ACHCredit = 9,
  /** BPAY */
  BPAY = 10,
  /** High Value Clearing System HVACS */
  HighValueClearingSystemHVACS = 11,
  /** Reinvest In Fund */
  ReinvestInFund = 12,
  /** Other */
  Other = 999,
}
