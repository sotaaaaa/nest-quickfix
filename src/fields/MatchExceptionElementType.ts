/**
 * Identifies the data point used in the matching operation which resulted in an exception.
 * tag: 2774
 * @readonly
 * @enum {number} (int)
 */
export enum MatchExceptionElementType {
  /** Accrued interest */
  AccruedInterest = 1,
  /** Deal price */
  DealPrice = 2,
  TradeDate = 3,
  SettlementDate = 4,
  SideIndicator = 5,
  TradedCurrency = 6,
  AccountID = 7,
  ExecutingBrokerID = 8,
  /** Settlement currency and amount */
  SettlementCurrencyAndAmount = 9,
  InvestmentManagerID = 10,
  /** Net amount */
  NetAmount = 11,
  PlaceOfSettlement = 12,
  /** Commissions */
  Commissions = 13,
  SecurityIdentifier = 14,
  /** Quantity allocated */
  QualityAllocated = 15,
  /** Principal */
  Principal = 16,
  /** Fees */
  Fees = 17,
  /** Tax */
  Tax = 18,
}
