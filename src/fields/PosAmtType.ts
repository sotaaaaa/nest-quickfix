/**
 * Type of Position amount
 * tag: 707
 * @readonly
 * @enum {string} (String)
 */
export enum PosAmtType {
  /** Cash amount (corporate event) */
  CashAmount = 'CASH',
  /** Cash residual amount */
  CashResidualAmount = 'CRES',
  /** Final mark-to-market amount */
  FinalMarkToMarketAmount = 'FMTM',
  /** Incremental mark-to-market */
  IncrementalMarkToMarketAmount = 'IMTM',
  /** Premium amount */
  PremiumAmount = 'PREM',
  /** Start of day mark-to-market */
  StartOfDayMarkToMarketAmount = 'SMTM',
  /** Trade variation amount */
  TradeVariationAmount = 'TVAR',
  /** Value adjusted amount */
  ValueAdjustedAmount = 'VADJ',
  /** Settlement value */
  SettlementValue = 'SETL',
  /** Initial trade coupon amount */
  InitialTradeCouponAmount = 'ICPN',
  /** Accrued coupon amount */
  AccruedCouponAmount = 'ACPN',
  /** Coupon amount */
  CouponAmount = 'CPN',
  /** Incremental accrued coupon */
  IncrementalAccruedCoupon = 'IACPN',
  /** Collateralized mark-to-market */
  CollateralizedMarkToMarket = 'CMTM',
  /** Incremental collateralized mark-to-market */
  IncrementalCollateralizedMarkToMarket = 'ICMTM',
  /** Compensation amount */
  CompensationAmount = 'DLV',
  /** Total banked amount */
  TotalBankedAmount = 'BANK',
  /** Total collateralized amount */
  TotalCollateralizedAmount = 'COLAT',
  /** Long paired swap or swaption notional value */
  LongPairedSwapNotionalValue = 'LSNV',
  /** Short paired swap or swaption notional value */
  ShortPairedSwapNotionalValue = 'SSNV',
  /** Start-of-day accrued coupon */
  StartOfDayAccruedCoupon = 'SACPN',
  /** Net present value */
  NetPresentValue = 'NPV',
  /** Start-of-day net present value */
  StartOfDayNetPresentValue = 'SNPV',
  /** Net cash flow */
  NetCashFlow = 'NCF',
  /** Present value of all fees */
  PresentValueOfFees = 'PVFEES',
  PresentValueOneBasisPoints = 'PV01',
  /** The five year equivalent notional amount */
  FiveYearEquivalentNotional = '5YREN',
  /** Undiscounted mark-to-market */
  UndiscountedMarkToMarket = 'UMTM',
  /** Mark-to-model */
  MarkToModel = 'MTD',
  /** Mark-to-market variance */
  MarkToMarketVariance = 'VMTM',
  /** Mark-to-model variance */
  MarkToModelVariance = 'VMTD',
  /** Upfront payment */
  UpfrontPayment = 'UPFRNT',
  EndVale = 'ENDV',
  OutstandingMarginLoan = 'MGNLN',
  LoanValue = 'LNVL',
}
