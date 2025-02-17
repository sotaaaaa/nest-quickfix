/**
 * Result returned in response to MarketDataStatisticsRequest (35=DO).
 * tag: 2473
 * @readonly
 * @enum {number} (int)
 */
export enum MDStatisticRequestResult {
  /** Successful (default) */
  Successful = 0,
  /** Invalid or unknown market */
  InvalidOrUnknownMarket = 1,
  /** Invalid or unknown market segment */
  InvalidOrUnknownMarketSegment = 2,
  /** Invalid or unknown security list */
  InvalidOrUnknownSecurityList = 3,
  /** Invalid or unknown instrument(s) */
  InvalidOrUnknownInstruments = 4,
  /** Invalid parties */
  InvalidParties = 5,
  /** Trade date out of supported range */
  TradeDateOutOfSupportedRange = 6,
  /** Statistic type not supported */
  UnsupportedStatisticType = 7,
  /** Scope or sub-scope not supported */
  UnsupportedScopeOrSubScope = 8,
  /** Scope type not supported */
  UnsupportedScopeType = 9,
  /** Market depth not supported */
  MarketDepthNotSupported = 10,
  /** Frequency not supported */
  FrequencyNotSupported = 11,
  /** Statistic interval not supported */
  UnsupportedStatisticInterval = 12,
  /** Statistic date range not supported */
  UnsupportedStatisticDateRange = 13,
  /** Statistic time range not supported */
  UnsupportedStatisticTimeRange = 14,
  /** Ratio type not supported */
  UnsupportedRatioType = 15,
  /** Invalid or unknown trade input source */
  InvalidOrUnknownTradeInputSource = 16,
  /** Invalid or unknown trading session */
  InvalidOrUnknownTradingSession = 17,
  /** Unauthorized for statistic request */
  UnauthorizedForStatisticRequest = 18,
  /** Other (further information in Text (58) field) */
  Other = 99,
}
