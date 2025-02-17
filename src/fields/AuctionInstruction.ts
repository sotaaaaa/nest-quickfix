/**
 * Instruction related to system generated auctions, e.g. flash order auctions.
 * tag: 1805
 * @readonly
 * @enum {number} (int)
 */
export enum AuctionInstruction {
  /** Automatic auction permitted (default) */
  AutomatedAuctionPermitted = 0,
  /** Automatic auction not permitted */
  AutomatedAuctionNotPermitted = 1,
}
