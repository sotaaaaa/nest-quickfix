/**
 * Used to describe the origin of the market data entry.
 * tag: 1024
 * @readonly
 * @enum {number} (int)
 */
export enum MDOriginType {
  /** Book */
  Book = 0,
  /** Off-Book */
  OffBook = 1,
  /** Cross */
  Cross = 2,
  QuoteDrivenMarket = 3,
  /** Dark order book */
  DarkOrderBook = 4,
  AuctionDrivenMarket = 5,
  QuoteNegotiation = 6,
  VoiceNegotiation = 7,
  HybridMarket = 8,
  OtherMarket = 9,
}
