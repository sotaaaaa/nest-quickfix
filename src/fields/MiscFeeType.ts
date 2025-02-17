/**
 * Indicates type of miscellaneous fee.
 * tag: 139
 * @readonly
 * @enum {string} (String)
 */
export enum MiscFeeType {
  /** Regulatory (e.g. SEC) */
  Regulatory = '1',
  /** Tax */
  Tax = '2',
  LocalCommission = '3',
  /** Exchange Fees */
  ExchangeFees = '4',
  /** Stamp */
  Stamp = '5',
  /** Levy */
  Levy = '6',
  /** Other */
  Other = '7',
  /** Markup */
  Markup = '8',
  /** Consumption Tax */
  ConsumptionTax = '9',
  /** Per transaction */
  PerTransaction = '10',
  /** Conversion */
  Conversion = '11',
  /** Agent */
  Agent = '12',
  /** Transfer Fee */
  TransferFee = '13',
  /** Security Lending */
  SecurityLending = '14',
  TradeReporting = '15',
  /** Tax on principal amount */
  TaxOnPrincipalAmount = '16',
  /** Tax on accrued interest amount */
  TaxOnAccruedInterestAmount = '17',
  /** New issuance fee */
  NewIssuanceFee = '18',
  /** Service fee */
  ServiceFee = '19',
  /** Odd lot fee */
  OddLotFee = '20',
  /** Auction fee */
  AuctionFee = '21',
  /** Value Added tax - VAT */
  ValueAddedTax = '22',
  /** Sales tax */
  SalesTax = '23',
  /** Execution venue fee */
  ExecutionFee = '24',
  OrderEntryFee = '25',
  OrderModificationFee = '26',
  OrdersCancellationFee = '27',
  MarketDataAccessFee = '28',
  MarketDataTerminalFee = '29',
  MarketDataVolumeFee = '30',
  ClearingFee = '31',
  SettlementFee = '32',
  Rebates = '33',
  Discounts = '34',
  Payments = '35',
  NonMonetaryPayments = '36',
}
