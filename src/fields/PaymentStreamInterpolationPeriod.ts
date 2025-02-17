/**
 * Defines applicable periods for interpolation.
 * tag: 42604
 * @readonly
 * @enum {number} (int)
 */
export enum PaymentStreamInterpolationPeriod {
  Initial = 0,
  InitialAndFinal = 1,
  Final = 2,
  AnyPeriod = 3,
}
