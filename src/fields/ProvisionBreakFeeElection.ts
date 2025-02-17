/**
 * Type of fee elected for the break provision.
 * tag: 42707
 * @readonly
 * @enum {number} (int)
 */
export enum ProvisionBreakFeeElection {
  /** Flat fee */
  FlatFee = 0,
  /** Amortized fee */
  AmortizedFee = 1,
  /** Funding fee */
  FundingFee = 2,
  /** Flat fee and funding fee */
  FlatAndFundingFee = 3,
  /** Amortized fee and funding fee */
  AmortizedAndFundingFee = 4,
}
