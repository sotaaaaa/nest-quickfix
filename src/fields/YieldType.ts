/**
 * Type of yield. (Note tag # was reserved in FIX 4.1, added in FIX 4.3)
 * tag: 235
 * @readonly
 * @enum {string} (String)
 */
export enum YieldType {
  /** After Tax Yield (Municipals) */
  AfterTaxYield = 'AFTERTAX',
  /** Annual Yield */
  AnnualYield = 'ANNUAL',
  /** Yield At Issue (Municipals) */
  YieldAtIssue = 'ATISSUE',
  /** Yield To Avg Maturity */
  YieldToAverageMaturity = 'AVGMATURITY',
  /** Book Yield */
  BookYield = 'BOOK',
  /** Yield to Next Call */
  YieldToNextCall = 'CALL',
  /** Yield Change Since Close */
  YieldChangeSinceClose = 'CHANGE',
  /** Closing Yield */
  ClosingYield = 'CLOSE',
  /** Compound Yield */
  CompoundYield = 'COMPOUND',
  /** Current Yield */
  CurrentYield = 'CURRENT',
  /** Gvnt Equivalent Yield */
  GvntEquivalentYield = 'GOVTEQUIV',
  /** True Gross Yield */
  TrueGrossYield = 'GROSS',
  /** Yield with Inflation Assumption */
  YieldWithInflationAssumption = 'INFLATION',
  /** Inverse Floater Bond Yield */
  InverseFloaterBondYield = 'INVERSEFLOATER',
  /** Most Recent Closing Yield */
  MostRecentClosingYield = 'LASTCLOSE',
  /** Closing Yield Most Recent Month */
  ClosingYieldMostRecentMonth = 'LASTMONTH',
  /** Closing Yield Most Recent Quarter */
  ClosingYieldMostRecentQuarter = 'LASTQUARTER',
  /** Closing Yield Most Recent Year */
  ClosingYieldMostRecentYear = 'LASTYEAR',
  /** Yield to Longest Average Life */
  YieldToLongestAverageLife = 'LONGAVGLIFE',
  /** Mark to Market Yield */
  MarkToMarketYield = 'MARK',
  /** Yield to Maturity */
  YieldToMaturity = 'MATURITY',
  /** Yield to Next Refund (Sinking Fund Bonds) */
  YieldToNextRefund = 'NEXTREFUND',
  /** Open Average Yield */
  OpenAverageYield = 'OPENAVG',
  /** Previous Close Yield */
  PreviousCloseYield = 'PREVCLOSE',
  /** Proceeds Yield */
  ProceedsYield = 'PROCEEDS',
  /** Yield to Next Put */
  YieldToNextPut = 'PUT',
  /** Semi-annual Yield */
  SemiAnnualYield = 'SEMIANNUAL',
  /** Yield to Shortest Average Life */
  YieldToShortestAverageLife = 'SHORTAVGLIFE',
  /** Simple Yield */
  SimpleYield = 'SIMPLE',
  /** Tax Equivalent Yield */
  TaxEquivalentYield = 'TAXEQUIV',
  /** Yield to Tender Date */
  YieldToTenderDate = 'TENDER',
  /** True Yield */
  TrueYield = 'TRUE',
  /** Yield Value Of 1/32 */
  YieldValueOf32nds = 'VALUE1_32',
  /** Yield To Worst */
  YieldToWorst = 'WORST',
}
