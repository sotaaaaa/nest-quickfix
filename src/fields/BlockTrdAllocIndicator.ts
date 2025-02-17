/**
 * Indication that a block trade will be allocated.
 * tag: 1980
 * @readonly
 * @enum {number} (int)
 */
export enum BlockTrdAllocIndicator {
  /** Block to be allocated */
  BlockToBeAllocated = 0,
  /** Block not to be allocated */
  BlockNotToBeAllocated = 1,
  AllocatedTrade = 2,
}
