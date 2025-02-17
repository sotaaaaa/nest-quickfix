/**
 * Specifies the post-execution trade continuation or lifecycle event. Additional values may be used by mutual agreement of the counterparties.
 * tag: 1937
 * @readonly
 * @enum {number} (int)
 */
export enum TradeContinuation {
  /** Novation */
  Novation = 0,
  /** Partial novation */
  PartialNovation = 1,
  TradeUnwind = 2,
  PartialTradeUnwind = 3,
  /** Exercise */
  Exercise = 4,
  Netting = 5,
  /** Full netting */
  FullNetting = 6,
  /** Partial netting */
  PartialNetting = 7,
  Amendment = 8,
  /** Increase */
  Increase = 9,
  /** Credit event */
  CreditEvent = 10,
  /** Strategic restructuring */
  StrategicRestructuring = 11,
  /** Succession event reorganization */
  SuccessionEventReorganization = 12,
  /** Succession event renaming */
  SuccessionEventRenaming = 13,
  /** Porting */
  Porting = 14,
  Withdrawl = 15,
  Void = 16,
  /** Account transfer */
  AccountTransfer = 17,
  /** Give up */
  GiveUp = 18,
  /** TakeUp */
  TakeUp = 19,
  /** Average pricing */
  AveragePricing = 20,
  /** Reversal */
  Reversal = 21,
  /** Allocation/Trade posting */
  AllocTrdPosting = 22,
  Cascade = 23,
  /** Delivery */
  Delivery = 24,
  /** Option assignment */
  OptionAsgn = 25,
  /** Expiration */
  Expiration = 26,
  /** Maturity */
  Maturity = 27,
  /** Equal position adjustment */
  EqualPosAdj = 28,
  UnequalPosAdj = 29,
  Correction = 30,
  EarlyTermination = 31,
  Rerate = 32,
  Other = 99,
}
