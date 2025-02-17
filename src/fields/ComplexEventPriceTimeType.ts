/**
 * Specifies when the complex event outcome takes effect. The outcome of a complex event is a payout or barrier action as specified by the ComplexEventType(1484).
 * tag: 1489
 * @readonly
 * @enum {number} (int)
 */
export enum ComplexEventPriceTimeType {
  /** Expiration */
  Expiration = 1,
  /** Immediate (At Any Time) */
  Immediate = 2,
  /** Specified Date/Time */
  SpecifiedDate = 3,
  Close = 4,
  Open = 5,
  OfficialSettlPrice = 6,
  DerivativesClose = 7,
  /** As specified in Master Confirmation */
  AsSpecifiedMasterConfirmation = 8,
}
