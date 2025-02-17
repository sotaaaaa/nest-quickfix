/**
 * Identifies the type of venue where a trade was executed.
 * tag: 1430
 * @readonly
 * @enum {string} (char)
 */
export enum VenueType {
  /** Electronic exchange */
  Electronic = 'E',
  /** Pit */
  Pit = 'P',
  /** Ex-pit */
  ExPit = 'X',
  /** Clearinghouse */
  ClearingHouse = 'C',
  RegisteredMarket = 'R',
  OffMarket = 'O',
  /** Central limit order book */
  CentralLimitOrderBook = 'B',
  /** Quote driven market */
  QuoteDrivenMarket = 'Q',
  /** Dark order book */
  DarkOrderBook = 'D',
  AuctionDrivenMarket = 'A',
  QuoteNegotiation = 'N',
  VoiceNegotiation = 'V',
  HybridMarket = 'H',
  OtherMarket = 'z',
}
