/**
 * Type of price used to determine upfront payment for swaps contracts.
 * tag: 1741
 * @readonly
 * @enum {number} (int)
 */
export enum UpfrontPriceType {
  /** Percentage (i.e. percent of par) (often called "dollar price" for fixed income) */
  Percentage = 1,
  /** Fixed amount (absolute value) */
  FixedAmount = 3,
}
