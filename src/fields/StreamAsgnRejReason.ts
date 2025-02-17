/**
 * Reason code for stream assignment request reject.
 * tag: 1502
 * @readonly
 * @enum {number} (int)
 */
export enum StreamAsgnRejReason {
  /** Unknown client */
  UnknownClient = 0,
  /** Exceeds maximum size */
  ExceedsMaximumSize = 1,
  /** Unknown or Invalid currency pair */
  UnknownOrInvalidCurrencyPair = 2,
  /** No available stream */
  NoAvailableStream = 3,
  /** Other */
  Other = 99,
}
