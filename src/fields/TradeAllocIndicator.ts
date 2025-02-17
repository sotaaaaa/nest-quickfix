/**
 * Identifies if, and how, the trade is to be allocated or split.
 * tag: 826
 * @readonly
 * @enum {number} (int)
 */
export enum TradeAllocIndicator {
  /** Allocation not required */
  AllocationNotRequired = 0,
  /** Allocation required (give-up trade) allocation information not provided (incomplete) */
  AllocationRequired = 1,
  /** Use allocation provided with the trade */
  UseAllocationProvidedWithTheTrade = 2,
  /** Allocation give-up executor */
  AllocationGiveUpExecutor = 3,
  /** Allocation from executor */
  AllocationFromExecutor = 4,
  /** Allocation to claim account */
  AllocationToClaimAccount = 5,
  /** Trade split */
  TradeSplit = 6,
}
