/**
 * Indicator to identify whether this fill was a result of a liquidity provider providing or liquidity taker taking the liquidity.
 * tag: 851
 * @readonly
 * @enum {number} (int)
 */
export enum LastLiquidityInd {
  NeitherAddedNorRemovedLiquidity = 0,
  /** Added Liquidity */
  AddedLiquidity = 1,
  /** Removed Liquidity */
  RemovedLiquidity = 2,
  /** Liquidity Routed Out */
  LiquidityRoutedOut = 3,
  /** Auction execution */
  Auction = 4,
  TriggeredStopOrder = 5,
  TriggeredContingencyOrder = 6,
  TriggeredMarketOrder = 7,
  RemovedLiquidityAfterFirmOrderCommitment = 8,
  AuctionExecutionAfterFirmOrderCommitment = 9,
  Unknown = 10,
  Other = 11,
}
