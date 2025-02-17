/**
 * Technical event within market data feed.
 * tag: 2535
 * @readonly
 * @enum {number} (int)
 */
export enum MDReportEvent {
  StartInstrumentRefData = 1,
  EndInstrumentRefData = 2,
  StartOffMarketTrades = 3,
  EndOffMarketTrades = 4,
  StartOrderBookTrades = 5,
  EndOrderBookTrades = 6,
  StartOpenInterest = 7,
  EndOpenInterest = 8,
  StartSettlementPrices = 9,
  EndSettlementPrices = 10,
  StartStatsRefData = 11,
  EndStatsRefData = 12,
  StartStatistics = 13,
  EndStatistics = 14,
}
