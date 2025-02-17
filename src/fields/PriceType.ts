export enum PriceType {
  /** Percentage (i.e. percent of par) (often called "dollar price" for fixed income) */
  Percentage = 1,
  /** Per unit (i.e. per share or contract) */
  PerUnit = 2,
  /** Fixed amount (absolute value) */
  FixedAmount = 3,
  /** Discount - percentage points below par */
  Discount = 4,
  /** Premium - percentage points over par */
  Premium = 5,
  Spread = 6,
  /** TED Price */
  TEDPrice = 7,
  /** TED Yield */
  TEDYield = 8,
  /** Yield */
  Yield = 9,
  /** Fixed cabinet trade price (primarily for listed futures and options) */
  FixedCabinetTradePrice = 10,
  /** Variable cabinet trade price (primarily for listed futures and options) */
  VariableCabinetTradePrice = 11,
  PriceSpread = 12,
  /** Product ticks in halves */
  ProductTicksInHalves = 13,
  /** Product ticks in fourths */
  ProductTicksInFourths = 14,
  /** Product ticks in eighths */
  ProductTicksInEighths = 15,
  /** Product ticks in sixteenths */
  ProductTicksInSixteenths = 16,
  /** Product ticks in thirty-seconds */
  ProductTicksInThirtySeconds = 17,
  /** Product ticks in sixty-fourths */
  ProductTicksInSixtyFourths = 18,
  /** Product ticks in one-twenty-eighths */
  ProductTicksInOneTwentyEighths = 19,
  /** Normal rate representation (e.g. FX rate) */
  NormalRateRepresentation = 20,
  /** Inverse rate representation (e.g. FX rate) */
  InverseRateRepresentation = 21,
  BasisPoints = 22,
  UpfrontPoints = 23,
  InterestRate = 24,
  /** Percentage of notional */
  PercentageNotional = 25,
}
