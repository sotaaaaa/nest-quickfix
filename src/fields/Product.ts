/**
 * Indicates the type of product the security is associated with. See also the CFICode (461) and SecurityType (167) fields.
 * tag: 460
 * @readonly
 * @enum {number} (int)
 */
export enum Product {
  /** AGENCY */
  AGENCY = 1,
  /** COMMODITY */
  COMMODITY = 2,
  /** CORPORATE */
  CORPORATE = 3,
  /** CURRENCY */
  CURRENCY = 4,
  /** EQUITY */
  EQUITY = 5,
  /** GOVERNMENT */
  GOVERNMENT = 6,
  /** INDEX */
  INDEX = 7,
  /** LOAN */
  LOAN = 8,
  /** MONEYMARKET */
  MONEYMARKET = 9,
  /** MORTGAGE */
  MORTGAGE = 10,
  /** MUNICIPAL */
  MUNICIPAL = 11,
  /** OTHER */
  OTHER = 12,
  /** FINANCING */
  FINANCING = 13,
}
