/**
 * Designates the account type to be used for the order when submitted to clearing.
 * tag: 1816
 * @readonly
 * @enum {number} (int)
 */
export enum ClearingAccountType {
  /** Customer */
  Customer = 1,
  /** Firm */
  Firm = 2,
  /** Market maker */
  MarketMaker = 3,
}
