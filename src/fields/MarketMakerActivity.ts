/**
 * Indicates market maker participation in security.
 * tag: 1655
 * @readonly
 * @enum {number} (int)
 */
export enum MarketMakerActivity {
  /** No participation */
  NoParticipation = 0,
  /** Buy participation */
  BuyParticipation = 1,
  /** Sell participation */
  SellParticipation = 2,
  /** Both buy and sell participation */
  BothBuyAndSellParticipation = 3,
}
