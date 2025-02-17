export enum AllocType {
  /** Calculated (includes MiscFees and NetMoney) */
  Calculated = 1,
  /** Preliminary (without MiscFees and NetMoney) */
  Preliminary = 2,
  /** Sellside calculated using preliminary (includes MiscFees and NetMoney) (Replaced) */
  SellsideCalculatedUsingPreliminary = 3,
  /** Sellside calculatedd without preliminary (sent unsolicited by sellside, includes MiscFees and NetMoney) (Replaced) */
  SellsideCalculatedWithoutPreliminary = 4,
  /** Ready-To-Book single order */
  ReadyToBook = 5,
  /** Buyside Ready-To-Book - combined set of orders (replaced) */
  BuysideReadyToBook = 6,
  /** Warehouse instruction */
  WarehouseInstruction = 7,
  /** Request to intermediary */
  RequestToIntermediary = 8,
  /** Accept */
  Accept = 9,
  /** Reject */
  Reject = 10,
  /** Accept Pending */
  AcceptPending = 11,
  /** Incomplete group */
  IncompleteGroup = 12,
  /** Complete group */
  CompleteGroup = 13,
  /** Reversal Pending */
  ReversalPending = 14,
  /** Reopen group */
  ReopenGroup = 15,
  /** Cancel group */
  CancelGroup = 16,
  /** Give-up */
  Giveup = 17,
  /** Take-up */
  Takeup = 18,
  /** Refuse take-up */
  RefuseTakeup = 19,
  /** Initiate reversal */
  InitiateReversal = 20,
  /** Reverse */
  Reverse = 21,
  /** Refuse reversal */
  RefuseReversal = 22,
  /** Sub-allocation give-up */
  SubAllocationGiveup = 23,
  /** Approve give-up */
  ApproveGiveup = 24,
  /** Approve take-up */
  ApproveTakeup = 25,
  NotionalValueAveragePxGroupAlloc = 26,
}
