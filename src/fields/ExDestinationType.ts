/**
 * Identifies the type of execution destination for the order.
 * tag: 2704
 * @readonly
 * @enum {number} (int)
 */
export enum ExDestinationType {
  NoRestriction = 0,
  TradedOnlyOnTradingVenue = 1,
  TradedOnlyOnSI = 2,
  TradedOnTradingVenueOrSI = 3,
}
