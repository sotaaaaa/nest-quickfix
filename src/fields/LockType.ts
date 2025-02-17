/**
 * Indicates whether an order is locked and for what reason.
 * tag: 1807
 * @readonly
 * @enum {number} (int)
 */
export enum LockType {
  /** Not locked */
  NotLocked = 0,
  /** Away market better */
  AwayMarketNetter = 1,
  /** Three tick locked */
  ThreeTickLocked = 2,
  /** Locked by market maker */
  LockedByMarketMaker = 3,
  /** Directed order lock */
  DirectedOrderLock = 4,
  MultilegLock = 5,
  /** Market order lock */
  MarketOrderLock = 6,
  /** Pre-assignment lock */
  PreAssignmentLock = 7,
}
