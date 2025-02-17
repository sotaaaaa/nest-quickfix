/**
 * Used to identify the type of quantity that is being returned.
 * tag: 703
 * @readonly
 * @enum {string} (String)
 */
export enum PosType {
  /** Allocation Trade Qty */
  AllocationTradeQty = 'ALC',
  /** Option Assignment */
  OptionAssignment = 'AS',
  /** As-of Trade Qty */
  AsOfTradeQty = 'ASF',
  /** Delivery Qty */
  DeliveryQty = 'DLV',
  /** Electronic Trade Qty */
  ElectronicTradeQty = 'ETR',
  /** Option Exercise Qty */
  OptionExerciseQty = 'EX',
  /** End-of-Day Qty */
  EndOfDayQty = 'FIN',
  /** Intra-spread Qty */
  IntraSpreadQty = 'IAS',
  /** Inter-spread Qty */
  InterSpreadQty = 'IES',
  /** Adjustment Qty */
  AdjustmentQty = 'PA',
  /** Pit Trade Qty */
  PitTradeQty = 'PIT',
  /** Start-of-Day Qty */
  StartOfDayQty = 'SOD',
  /** Integral Split */
  IntegralSplit = 'SPL',
  /** Transaction from Assignment */
  TransactionFromAssignment = 'TA',
  /** Total Transaction Qty */
  TotalTransactionQty = 'TOT',
  /** Transaction Quantity */
  TransactionQuantity = 'TQ',
  /** Transfer Trade Qty */
  TransferTradeQty = 'TRF',
  /** Transaction from Exercise */
  TransactionFromExercise = 'TX',
  /** Cross Margin Qty */
  CrossMarginQty = 'XM',
  /** Receive Quantity */
  ReceiveQuantity = 'RCV',
  /** Corporate Action Adjustment */
  CorporateActionAdjustment = 'CAA',
  /** Delivery Notice Qty */
  DeliveryNoticeQty = 'DN',
  /** Exchange for Physical Qty */
  ExchangeForPhysicalQty = 'EP',
  /** Privately negotiated Trade Qty (Non-regulated) */
  PrivatelyNegotiatedTradeQty = 'PNTN',
  /** Net Delta Qty */
  NetDeltaQty = 'DLT',
  /** Credit Event Adjustment */
  CreditEventAdjustment = 'CEA',
  /** Succession Event Adjustment */
  SuccessionEventAdjustment = 'SEA',
  /** Net Qty */
  NetQty = 'NET',
  /** Gross Qty */
  GrossQty = 'GRS',
  /** Intraday Qty */
  IntradayQty = 'ITD',
  /** Gross non-delta-adjusted swaption position */
  GrossLongNonDeltaAdjustedSwaptionPosition = 'NDAS',
  /** Delta-adjusted paired swaption position */
  LongDeltaAdjustedPairedSwaptionPosition = 'DAS',
  ExpiringQuantity = 'EXP',
  QuantityNotExercised = 'UNEX',
  RequestedExerciseQuantity = 'REQ',
  /** Cash futures equivalent quantity */
  CashFuturesEquivalentQuantity = 'CFE',
  LoanOrBorrowedQuantity = 'SECLN',
}
