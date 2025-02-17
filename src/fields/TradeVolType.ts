/**
 * Define the type of trade volume applicable for the MinTradeVol(562) and MaxTradeVol(1140)
 * tag: 1786
 * @readonly
 * @enum {number} (int)
 */
export enum TradeVolType {
  /** Number of units (e.g. share, par, currency, contracts) (default) */
  NumberOfUnits = 0,
  /** Number of round lots */
  NumberOfRoundLots = 1,
}
