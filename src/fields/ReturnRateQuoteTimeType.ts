/**
 * Specifies how or the timing when the quote is to be obtained.
 * tag: 42748
 * @readonly
 * @enum {number} (int)
 */
export enum ReturnRateQuoteTimeType {
  Open = 0,
  OfficialSettlPx = 1,
  Xetra = 2,
  Close = 3,
  DerivativesClose = 4,
  High = 5,
  Low = 6,
  /** As specified in the master confirmation */
  AsSpecifiedInMasterConfirmation = 7,
}
