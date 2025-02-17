/**
 * Information subject to disclosure.
 * tag: 1813
 * @readonly
 * @enum {number} (int)
 */
export enum DisclosureType {
  /** Volume */
  Volume = 1,
  /** Price */
  Price = 2,
  /** Side */
  Side = 3,
  /** AON */
  AON = 4,
  General = 5,
  /** Clearing account */
  ClearingAccount = 6,
  /** CMTA account */
  CMTAAccount = 7,
}
