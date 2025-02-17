/**
 * Further qualification to the trade type defined in TrdType(828).
 * tag: 829
 * @readonly
 * @enum {number} (int)
 */
export enum TrdSubType {
  /** CMTA */
  CMTA = 0,
  /** Internal transfer or adjustment */
  InternalTransferOrAdjustment = 1,
  /** External transfer or transfer of account */
  ExternalTransferOrTransferOfAccount = 2,
  /** Reject for submitting side */
  RejectForSubmittingSide = 3,
  /** Advisory for contra side */
  AdvisoryForContraSide = 4,
  /** Offset due to an allocation */
  OffsetDueToAnAllocation = 5,
  /** Onset due to an allocation */
  OnsetDueToAnAllocation = 6,
  /** Differential spread */
  DifferentialSpread = 7,
  /** Implied spread leg executed against an outright */
  ImpliedSpreadLegExecutedAgainstAnOutright = 8,
  /** Transaction from exercise */
  TransactionFromExercise = 9,
  /** Transaction from assignment */
  TransactionFromAssignment = 10,
  /** ACATS */
  ACATS = 11,
  /** AI (Automated input facility disabled in response to an exchange request.) */
  AI = 14,
  /** B (Transaction between two member firms where neither member firm is registered as a market maker in the security in question and neither is a designated fund manager. Also used by broker dealers when dealing with another broker which is not a member firm. Non-order book securities only.) */
  B = 15,
  /** K (Transaction using block trade facility.) */
  K = 16,
  /** LC (Correction submitted more than three days after publication of the original trade report.) */
  LC = 17,
  /** M (Transaction, other than a transaction resulting from a stock swap or stock switch, between two market makers registered in that security including IDB or a public display system trades. Non-order book securities only.) */
  M = 18,
  /** N (Non-protected portfolio transaction or a fully disclosed portfolio transaction) */
  N = 19,
  NM = 20,
  /** NR (Non-risk transaction in a SEATS security other than an AIM security) */
  NR = 21,
  /** P (Protected portfolio transaction or a worked principal agreement to effect a portfolio transaction which includes order book securities) */
  P = 22,
  /** PA (Protected transaction notification) */
  PA = 23,
  /** PC (Contra trade for transaction which took place on a previous day and which was automatically executed on the Exchange trading system) */
  PC = 24,
  /** PN (Worked principal notification for a portfolio transaction which includes order book securities) */
  PN = 25,
  R = 26,
  /** RO (Transaction which resulted from the exercise of a traditional option or a stock-settled covered warrant) */
  RO = 27,
  /** RT (Risk transaction in a SEATS security, (excluding AIM security) reported by a market maker registered in that security) */
  RT = 28,
  /** SW (Transactions resulting from stock swap or a stock switch (one report is required for each line of stock)) */
  SW = 29,
  /** T (If reporting a single protected transaction) */
  T = 30,
  /** WN (Worked principal notification for a single order book security) */
  WN = 31,
  /** WT (Worked principal transaction (other than a portfolio transaction)) */
  WT = 32,
  /** Off Hours Trade */
  OffHoursTrade = 33,
  /** On Hours Trade */
  OnHoursTrade = 34,
  /** OTC Quote */
  OTCQuote = 35,
  /** Converted SWAP */
  ConvertedSWAP = 36,
  /** Crossed Trade (X) */
  CrossedTrade = 37,
  /** Interim Protected Trade (I) */
  InterimProtectedTrade = 38,
  /** Large in Scale (L) */
  LargeInScale = 39,
  /** Wash Trade */
  WashTrade = 40,
  TradeAtSettlement = 41,
  AuctionTrade = 42,
  TradeAtMarker = 43,
  /** Default (Credit Event) */
  CreditDefault = 44,
  /** Restructuring (credit event) */
  CreditRestructuring = 45,
  /** Merger (succession event) */
  Merger = 46,
  /** Spin-off (succession event) */
  SpinOff = 47,
  MultilateralCompression = 48,
  Balancing = 50,
  BasisTradeIndexClose = 51,
  TradeAtCashOpen = 52,
  TrdSubmitVenueClrSettl = 53,
  BilateralCompression = 54,
}
