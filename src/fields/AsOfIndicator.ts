/**
 * A trade that is being submitted for a trade date prior to the current trade or clearing date, e.g. in an open outcry market an out trade being submitted for the previous trading session or trading day.
 * tag: 1015
 * @readonly
 * @enum {string} (char)
 */
export enum AsOfIndicator {
  /** false - trade is not an AsOf trade */
  False = '0',
  /** true - trade is an AsOf trade */
  True = '1',
}
