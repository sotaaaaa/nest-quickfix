/**
 * The source of the payment stream floating rate index.
 * tag: 40790
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamRateIndexSource {
  /** Bloomberg */
  Bloomberg = 0,
  /** Reuters */
  Reuters = 1,
  /** Telerate */
  Telerate = 2,
  /** Other */
  Other = 99,
}
