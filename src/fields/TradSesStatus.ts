/**
 * State of the trading session.
 * tag: 340
 * @readonly
 * @enum {number} (int)
 */
export enum TradSesStatus {
  /** Unknown */
  Unknown = 0,
  /** Halted */
  Halted = 1,
  /** Open */
  Open = 2,
  /** Closed */
  Closed = 3,
  /** Pre-Open */
  PreOpen = 4,
  /** Pre-Close */
  PreClose = 5,
  /** Request Rejected */
  RequestRejected = 6,
}
