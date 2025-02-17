/**
 * Type of entitlement.
 * tag: 1775
 * @readonly
 * @enum {number} (int)
 */
export enum EntitlementType {
  /** Trade */
  Trade = 0,
  /** Make markets */
  MakeMarkets = 1,
  /** Hold positions */
  HoldPositions = 2,
  /** Perform give-ups */
  PerformGiveUps = 3,
  /** Submit Indications of Interest (IOIs) */
  SubmitIOIs = 4,
  /** Subscribe to market data */
  SubscribeMarketData = 5,
  ShortWithPreBorrow = 6,
  SubmitQuoteRequests = 7,
  RespondToQuoteRequests = 8,
}
