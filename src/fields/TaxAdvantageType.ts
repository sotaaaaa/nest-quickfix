/**
 * Identifies the type of tax exempt account in which purchases shares/units are to be held. Used for CIV.
 * tag: 495
 * @readonly
 * @enum {number} (int)
 */
export enum TaxAdvantageType {
  /** None/Not Applicable (default) */
  None = 0,
  /** Maxi ISA (UK) */
  MaxiISA = 1,
  /** TESSA (UK) */
  TESSA = 2,
  /** Mini Cash ISA (UK) */
  MiniCashISA = 3,
  /** Mini Stocks And Shares ISA (UK) */
  MiniStocksAndSharesISA = 4,
  /** Mini Insurance ISA (UK) */
  MiniInsuranceISA = 5,
  /** Current Year Payment (US) */
  CurrentYearPayment = 6,
  /** Prior Year Payment (US) */
  PriorYearPayment = 7,
  /** Asset Transfer (US) */
  AssetTransfer = 8,
  /** Employee - prior year (US) */
  EmployeePriorYear = 9,
  /** Employee - current year (US) */
  EmployeeCurrentYear = 10,
  /** Employer - prior year (US) */
  EmployerPriorYear = 11,
  /** Employer - current year (US) */
  EmployerCurrentYear = 12,
  /** Non-fund prototype IRA (US) */
  NonFundPrototypeIRA = 13,
  /** Non-fund qualified plan (US) */
  NonFundQualifiedPlan = 14,
  /** Defined contribution plan (US) */
  DefinedContributionPlan = 15,
  /** Individual Retirement Account (US) */
  IRA = 16,
  /** Individual Retirement Account - Rollover (US) */
  IRARollover = 17,
  /** KEOGH (US) */
  KEOGH = 18,
  /** Profit Sharing Plan (US) */
  ProfitSharingPlan = 19,
  /** 401(k) (US) */
  US401K = 20,
  /** Self-directed IRA (US) */
  SelfDirectedIRA = 21,
  /** 403(b) (US) */
  US403b = 22,
  /** 457 (US) */
  US457 = 23,
  /** Roth IRA (Fund Prototype) (US) */
  RothIRAPrototype = 24,
  /** Roth IRA (Non-prototype) (US) */
  RothIRANonPrototype = 25,
  /** Roth Conversion IRA (Fund Prototype) (US) */
  RothConversionIRAPrototype = 26,
  /** Roth Conversion IRA (Non-prototype) (US) */
  RothConversionIRANonPrototype = 27,
  /** Education IRA (Fund Prototype) (US) */
  EducationIRAPrototype = 28,
  /** Education IRA (Non-prototype) (US) */
  EducationIRANonPrototype = 29,
  /** Other */
  Other = 999,
}
