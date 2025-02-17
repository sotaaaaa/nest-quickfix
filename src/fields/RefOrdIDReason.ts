/**
 * The reason for updating the RefOrdID
 * tag: 1431
 * @readonly
 * @enum {number} (int)
 */
export enum RefOrdIDReason {
  /** GTC from previous day */
  GTCFromPreviousDay = 0,
  /** Partial Fill Remaining */
  PartialFillRemaining = 1,
  /** Order Changed */
  OrderChanged = 2,
}
