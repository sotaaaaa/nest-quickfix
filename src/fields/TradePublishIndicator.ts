/**
 * Indicates if a trade should be or has been published via a market publication service. The indicator governs all publication services of the recipient. Replaces PublishTrdIndicator(852).
 * tag: 1390
 * @readonly
 * @enum {number} (int)
 */
export enum TradePublishIndicator {
  /** Do Not Publish Trade */
  DoNotPublishTrade = 0,
  /** Publish Trade */
  PublishTrade = 1,
  /** Deferred Publication */
  DeferredPublication = 2,
  Published = 3,
}
