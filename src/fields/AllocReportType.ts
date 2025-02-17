/**
 * Describes the specific type or purpose of an Allocation Report message
 * tag: 794
 * @readonly
 * @enum {number} (int)
 */
export enum AllocReportType {
  /** Preliminary request to intermediary */
  PreliminaryRequestToIntermediary = 2,
  /** Sellside calculated using preliminary (includes MiscFees and NetMoney) */
  SellsideCalculatedUsingPreliminary = 3,
  /** Sellside calculated without preliminary (sent unsolicited by sellside, includes MiscFees and NetMoney) */
  SellsideCalculatedWithoutPreliminary = 4,
  /** Warehouse recap */
  WarehouseRecap = 5,
  /** Request to intermediary */
  RequestToIntermediary = 8,
  /** Accept */
  Accept = 9,
  /** Reject */
  Reject = 10,
  /** Accept Pending */
  AcceptPending = 11,
  /** Complete */
  Complete = 12,
  /** Reverse Pending */
  ReversePending = 14,
  /** Give-up */
  Giveup = 15,
  /** Take-up */
  Takeup = 16,
  /** Reversal */
  Reversal = 17,
  /** Alleged reversal */
  Alleged = 18,
  /** Sub-allocation give-up */
  SubAllocationGiveup = 19,
}
