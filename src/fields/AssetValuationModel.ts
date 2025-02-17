/**
 * Identifies the model used for asset valuation or pricing calculations.
 * tag: 2994
 * @readonly
 * @enum {number} (int)
 */
export enum AssetValuationModel {
  /** Black-Scholes */
  BlackScholes = 1,
  /** Whaley */
  Whaley = 2,
  /** Bachelier */
  Bachelier = 3,
  /** Kirk */
  Kirk = 4,
  /** Curran */
  Curran = 5,
  /** Black-76 */
  Black76 = 6,
  /** Binomial */
  Binomial = 7,
  /** Other model */
  OtherModel = 99,
}
