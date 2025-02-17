export enum ContAmtType {
  /** Commission amount (actual) */
  CommissionAmount = 1,
  /** Commission percent (actual) */
  CommissionPercent = 2,
  /** Initial Charge Amount */
  InitialChargeAmount = 3,
  /** Initial Charge Percent */
  InitialChargePercent = 4,
  /** Discount Amount */
  DiscountAmount = 5,
  /** Discount Percent */
  DiscountPercent = 6,
  /** Dilution Levy Amount */
  DilutionLevyAmount = 7,
  /** Dilution Levy Percent */
  DilutionLevyPercent = 8,
  /** Exit Charge Amount */
  ExitChargeAmount = 9,
  /** Exit Charge Percent */
  ExitChargePercent = 10,
  /** Fund-Based Renewal Commission Percent (a.k.a. Trail commission) */
  FundBasedRenewalCommissionPercent = 11,
  /** Projected Fund Value (i.e. for investments intended to realise or exceed a specific future value) */
  ProjectedFundValue = 12,
  /** Fund-Based Renewal Commission Amount (based on Order value) */
  FundBasedRenewalCommissionOnOrder = 13,
  /** Fund-Based Renewal Commission Amount (based on Projected Fund value) */
  FundBasedRenewalCommissionOnFund = 14,
  /** Net Settlement Amount */
  NetSettlementAmount = 15,
}
