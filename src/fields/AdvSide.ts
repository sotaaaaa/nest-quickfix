/**
 * Broker's side of advertised trade
 * tag: 4
 * @readonly
 * @enum {string} (char)
 */
export enum AdvSide {
  /** Buy */
  Buy = 'B',
  /** Sell */
  Sell = 'S',
  /** Trade */
  Trade = 'T',
  /** Cross */
  Cross = 'X',
}
