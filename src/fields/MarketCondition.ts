/**
 * Market condition. In the context of ESMA RTS 8 it is important that trading venues communicate the condition of the market, particularly "stressed" and "exceptional", in order to provide incentives for firms contributing to liquidity.
 * tag: 2705
 * @readonly
 * @enum {number} (int)
 */
export enum MarketCondition {
  Normal = 0,
  Stressed = 1,
  Exceptional = 2,
}
