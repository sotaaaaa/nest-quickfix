/**
 * The type of reference price underlier.
 * tag: 41097
 * @readonly
 * @enum {number} (int)
 */
export enum MarketDisruptionFallbackUnderlierType {
  /** Basket */
  Basket = 0,
  /** Bond */
  Bond = 1,
  /** Cash */
  Cash = 2,
  /** Commodity */
  Commodity = 3,
  /** Convertible bond */
  ConvertibleBond = 4,
  /** Equity */
  Equity = 5,
  /** Exchange traded fund */
  ExchangeTradedFund = 6,
  /** Future */
  Future = 7,
  /** Index */
  Index = 8,
  /** Loan */
  Loan = 9,
  /** Mortgage */
  Mortgage = 10,
  /** Mutual fund */
  MutualFund = 11,
}
