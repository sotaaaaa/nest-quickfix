/**
 * Indicates whether an ISDA price option applies, and if applicable which type of price.
 * tag: 42759
 * @readonly
 * @enum {number} (int)
 */
export enum ReturnRateValuationPriceOption {
  /** None (the default) */
  None = 0,
  FuturesPrice = 1,
  OptionsPrice = 2,
}
