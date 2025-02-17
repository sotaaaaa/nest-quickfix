/**
 * Indicates the contingency attribute for a trade in an asset class that may be contingent on the clearing of a corresponding paired trade (for example Exchange for Physical (EFP), Exchange for Swap (EFS), Exchange for Related (EFR) or Exchange for Option (EFO), collectively called EFRPs). Once the paired trade clears or fails to clear, the related trade (the trade which carries this attribute) ceases to exist.
 * tag: 2387
 * @readonly
 * @enum {number} (int)
 */
export enum TradeContingency {
  DoesNotApply = 0,
  ContingentTrade = 1,
  NonContingentTrade = 2,
}
