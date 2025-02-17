/**
 * Indicates that the order or trade originates from a computer program or algorithm requiring little-to-no human intervention.
 * tag: 2667
 * @readonly
 * @enum {number} (int)
 */
export enum AlgorithmicTradeIndicator {
  /** Non-algorithmic trade */
  NonAlgorithmicTrade = 0,
  AlgorithmicTrade = 1,
}
