/**
 * Identifies the settlement payment method.
 * tag: 492
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentMethod {
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
  /** Debit Card */
  DebitCard = 8,
  /** Direct Debit (BECS) */
  DirectDebit = 9,
  /** Direct Credit (BECS) */
  DirectCredit = 10,
  /** Credit Card */
  CreditCard = 11,
  /** ACH Debit */
  ACHDebit = 12,
  /** ACH Credit */
  ACHCredit = 13,
  /** BPAY */
  BPAY = 14,
  /** High Value Clearing System (HVACS) */
  HighValueClearingSystem = 15,
  /** CHIPS */
  CHIPS = 16,
  /** S.W.I.F.T. */
  SWIFT = 17,
  /** CHAPS */
  CHAPS = 18,
  /** SIC */
  SIC = 19,
  EuroSIC = 20,
  /** Other */
  Other = 999,
}
