/**
 * Identifies the reason for rejection of a New Order List message. Note that OrdRejReason(103) is used if the rejection is based on properties of an individual order part of the List.
 * tag: 1386
 * @readonly
 * @enum {number} (int)
 */
export enum ListRejectReason {
  /** Broker / Exchange option */
  BrokerCredit = 0,
  /** Exchange closed */
  ExchangeClosed = 2,
  /** Too late to enter */
  TooLateToEnter = 4,
  /** Unknown order */
  UnknownOrder = 5,
  /** Duplicate Order (e.g. dupe ClOrdID) */
  DuplicateOrder = 6,
  /** Unsupported order characteristic */
  UnsupportedOrderCharacteristic = 11,
  /** Other */
  Other = 99,
}
