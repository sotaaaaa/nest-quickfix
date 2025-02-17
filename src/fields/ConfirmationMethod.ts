/**
 * Specifies how a trade was confirmed.
 * tag: 1927
 * @readonly
 * @enum {number} (int)
 */
export enum ConfirmationMethod {
  /** Non-electronic */
  NonElectronic = 0,
  /** Electronic */
  Electronic = 1,
  /** Unconfirmed */
  Unconfirmed = 2,
}
