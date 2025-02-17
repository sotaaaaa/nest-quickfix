/**
 * Result of Trade Request
 * tag: 749
 * @readonly
 * @enum {number} (int)
 */
export enum TradeRequestResult {
  /** Successful (default) */
  Successful = 0,
  /** Invalid or unknown instrument */
  InvalidOrUnknownInstrument = 1,
  /** Invalid type of trade requested */
  InvalidTypeOfTradeRequested = 2,
  /** Invalid parties */
  InvalidParties = 3,
  /** Invalid transport type requested */
  InvalidTransportTypeRequested = 4,
  /** Invalid destination requested */
  InvalidDestinationRequested = 5,
  /** TradeRequestType not supported */
  TradeRequestTypeNotSupported = 8,
  /** Not authorized */
  NotAuthorized = 9,
  /** Other */
  Other = 99,
}
