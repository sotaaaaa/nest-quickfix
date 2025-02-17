/**
 * Specifies when the payout is to occur.
 * tag: 2121
 * @readonly
 * @enum {number} (int)
 */
export enum ComplexOptPayoutTime {
  /** Close */
  Close = 0,
  /** Open */
  Open = 1,
  /** Official settlement */
  OfficialSettl = 2,
  /** Valuation time */
  ValuationTime = 3,
  /** Exchange settlement time */
  ExcahgneSettlTime = 4,
  /** Derivatives close */
  DerivativesClose = 5,
  /** As specified in master confirmation */
  AsSpecified = 6,
}
