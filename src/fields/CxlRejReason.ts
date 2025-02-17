/**
 * Code to identify reason for cancel rejection.
 * tag: 102
 * @readonly
 * @enum {number} (int)
 */
export enum CxlRejReason {
  /** Too late to cancel */
  TooLateToCancel = 0,
  /** Unknown order */
  UnknownOrder = 1,
  /** Broker / Exchange Option */
  BrokerCredit = 2,
  /** Order already in Pending Cancel or Pending Replace status */
  OrderAlreadyInPendingStatus = 3,
  /** Unable to process Order Mass Cancel Request */
  UnableToProcessOrderMassCancelRequest = 4,
  /** OrigOrdModTime (586) did not match last TransactTime (60) of order */
  OrigOrdModTime = 5,
  /** Duplicate ClOrdID (11) received */
  DuplicateClOrdID = 6,
  /** Price exceeds current price */
  PriceExceedsCurrentPrice = 7,
  /** Price exceeds current price band */
  PriceExceedsCurrentPriceBand = 8,
  /** Invalid price increment */
  InvalidPriceIncrement = 18,
  /** Other */
  Other = 99,
}
