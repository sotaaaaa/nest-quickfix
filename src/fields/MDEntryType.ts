/**
 * Type of market data entry.
 * tag: 269
 * @readonly
 * @enum {string} (char)
 */
export enum MDEntryType {
  /** Bid */
  Bid = '0',
  /** Offer */
  Offer = '1',
  /** Trade */
  Trade = '2',
  IndexValue = '3',
  /** Opening price */
  OpeningPrice = '4',
  /** Closing price */
  ClosingPrice = '5',
  /** Settlement price */
  SettlementPrice = '6',
  /** Trading session high price */
  TradingSessionHighPrice = '7',
  /** Trading session low price */
  TradingSessionLowPrice = '8',
  VWAP = '9',
  /** Imbalance */
  Imbalance = 'A',
  /** Trade volume */
  TradeVolume = 'B',
  /** Open interest */
  OpenInterest = 'C',
  /** Composite underlying price */
  CompositeUnderlyingPrice = 'D',
  /** Simulated sell price */
  SimulatedSellPrice = 'E',
  /** Simulated buy price */
  SimulatedBuyPrice = 'F',
  /** Margin rate */
  MarginRate = 'G',
  /** Mid-price */
  MidPrice = 'H',
  /** Empty book */
  EmptyBook = 'J',
  /** Settle high price */
  SettleHighPrice = 'K',
  /** Settle low price */
  SettleLowPrice = 'L',
  /** Prior settle price */
  PriorSettlePrice = 'M',
  /** Session high bid */
  SessionHighBid = 'N',
  /** Session low offer */
  SessionLowOffer = 'O',
  /** Early prices */
  EarlyPrices = 'P',
  /** Auction clearing price */
  AuctionClearingPrice = 'Q',
  /** Swap Value Factor (SVF) for swaps cleared through a central counterparty (CCP) */
  SwapValueFactor = 'S',
  /** Daily value adjustment for long positions */
  DailyValueAdjustmentForLongPositions = 'R',
  /** Cumulative value adjustment for long positions */
  CumulativeValueAdjustmentForLongPositions = 'T',
  /** Daily value adjustment for short positions */
  DailyValueAdjustmentForShortPositions = 'U',
  /** Cumulative value adjustment for short positions */
  CumulativeValueAdjustmentForShortPositions = 'V',
  /** Fixing price */
  FixingPrice = 'W',
  /** Cash rate */
  CashRate = 'X',
  /** Recovery rate */
  RecoveryRate = 'Y',
  /** Recovery rate for long positions */
  RecoveryRateForLong = 'Z',
  /** Recovery rate for short positions */
  RecoveryRateForShort = 'a',
  /** Market bid */
  MarketBid = 'b',
  /** Market offer */
  MarketOffer = 'c',
  /** Short sale minimum price */
  ShortSaleMinPrice = 'd',
  /** Previous closing price */
  PreviousClosingPrice = 'e',
  ThresholdLimitPriceBanding = 'g',
  DailyFinancingValue = 'h',
  AccruedFinancingValue = 'i',
  TWAP = 't',
}
