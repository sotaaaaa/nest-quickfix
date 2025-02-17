/**
 * Specifies the funding source used to finance margin or collateralized loan.
 * tag: 2846
 * @readonly
 * @enum {number} (int)
 */
export enum FundingSource {
  Repo = 0,
  Cash = 1,
  FreeCedits = 2,
  CustomerShortSales = 3,
  BrokerShortSales = 4,
  UnsecuredBorrowing = 5,
  Other = 99,
}
