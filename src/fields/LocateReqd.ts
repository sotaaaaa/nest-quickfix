/**
 * Indicates whether the broker is to locate the stock in conjunction with a short sell order.
 * tag: 114
 * @readonly
 * @enum {string} (Boolean)
 */
export enum LocateReqd {
  /** Indicates the broker is not required to locate */
  No = 'N',
  /** Indicates the broker is responsible for locating the stock */
  Yes = 'Y',
}
