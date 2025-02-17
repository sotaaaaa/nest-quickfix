/**
 * For equity swaps this specifies the conditions that govern the adjustment to the number of units of the swap.
 * tag: 42787
 * @readonly
 * @enum {number} (int)
 */
export enum StreamNotionalAdjustments {
  Execution = 0,
  PortfolioRebalancing = 1,
  Standard = 2,
}
