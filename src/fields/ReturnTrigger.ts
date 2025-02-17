/**
 * Indicates the type of return or payout trigger for the swap or forward.
 * tag: 2753
 * @readonly
 * @enum {number} (int)
 */
export enum ReturnTrigger {
  /** Dividend */
  Dividend = 1,
  /** Variance */
  Variance = 2,
  /** Volatility */
  Volatility = 3,
  /** Total return */
  TotalReturn = 4,
  /** Contract for difference */
  ContractForDifference = 5,
  /** Credit default */
  CreditDefault = 6,
  /** Spread bet */
  SpreadBet = 7,
  /** Price */
  Price = 8,
  /** Forward price of underlying instrument */
  ForwardPriceUnderlyingInstrument = 9,
  /** Other */
  Other = 99,
}
