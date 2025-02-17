/**
 * Type of auction order.
 * tag: 1803
 * @readonly
 * @enum {number} (int)
 */
export enum AuctionType {
  /** None */
  None = 0,
  /** Block order auction */
  BlockOrderAuction = 1,
  /** Directed order auction */
  DirectedOrderAuction = 2,
  /** Exposure order auction */
  ExposureOrderAuction = 3,
  /** Flash order auction */
  FlashOrderAuction = 4,
  /** Facilitation order auction */
  FacilitationOrderAuction = 5,
  /** Solicitation order auction */
  SolicitationOrderAuction = 6,
  /** Price improvement mechanism (PIM) */
  PriceImprovementMechanism = 7,
  /** Directed Order price improvement mechanism (PIM) */
  DirectedOrderPriceImprovementMechanism = 8,
}
