/**
 * Final price type of the commodity as specified by the trading venue.
 * tag: 2736
 * @readonly
 * @enum {number} (int)
 */
export enum CommodityFinalPriceType {
  /** Argus McCloskey */
  ArgusMcCloskey = 0,
  /** Baltic */
  Baltic = 1,
  /** Exchange */
  Exchange = 2,
  /** Global Coal */
  GlobalCoal = 3,
  /** IHS McCloskey */
  IHSMcCloskey = 4,
  /** Platts */
  Platts = 5,
  /** Other */
  Other = 99,
}
