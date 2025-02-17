export enum TargetStrategy {
  /** VWAP */
  VWAP = 1,
  /** Participate (i.e. aim to be x percent of the market volume) */
  Participate = 2,
  /** Mininize market impact */
  MininizeMarketImpact = 3,
}
