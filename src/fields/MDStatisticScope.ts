/**
 * Entities used as basis for the statistics.
 * tag: 2457
 * @readonly
 * @enum {number} (int)
 */
export enum MDStatisticScope {
  /** Bid prices */
  BidPrices = 1,
  /** Offer prices */
  OfferPrices = 2,
  /** Bid depth */
  BidDepth = 3,
  /** Offer depth */
  OfferDepth = 4,
  /** Orders */
  Orders = 5,
  /** Quotes */
  Quotes = 6,
  /** Orders and Quotes */
  OrdersAndQuotes = 7,
  /** Trades */
  Trades = 8,
  /** Trade prices */
  TradePrices = 9,
  /** Auction prices */
  AuctionPrices = 10,
  /** Opening prices */
  OpeningPrices = 11,
  /** Closing prices */
  ClosingPrices = 12,
  /** Settlement prices */
  SettlementPrices = 13,
  /** Underlying prices */
  UnderlyingPrices = 14,
  /** Open interest */
  OpenInterest = 15,
  /** Index values */
  IndexValues = 16,
  /** Margin rates */
  MarginRates = 17,
  Outages = 18,
  /** Scheduled auctions */
  ScheduledAuctions = 19,
  /** Reference prices */
  ReferencePrices = 20,
  TradeValue = 21,
  MarketDataFeeItems = 22,
  Rebates = 23,
  Discounts = 24,
  Payments = 25,
  Taxes = 26,
  Levies = 27,
  Benefits = 28,
  /** Fees */
  Fees = 29,
  /** Orders and RFQs (Request for quotes) */
  OrdersRFQs = 30,
  /** Market makers */
  MarketMakers = 31,
  TradingInterruptions = 32,
  TradingSuspensions = 33,
  NoQuotes = 34,
  /** Request for quotes */
  RequestForQuotes = 35,
  TradeVolume = 36,
}
