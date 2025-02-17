/**
 * Indicates the seniority level of the lien in a loan.
 * tag: 1954
 * @readonly
 * @enum {number} (int)
 */
export enum LienSeniority {
  /** Unknown */
  Unknown = 0,
  /** First lien */
  FirstLien = 1,
  /** Second lien */
  SecondLien = 2,
  /** Third lien */
  ThirdLien = 3,
}
