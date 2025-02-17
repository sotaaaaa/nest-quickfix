/**
 * Code to identify the price a DiscretionOffsetValue (389) is related to and should be mathematically added to.
 * tag: 388
 * @readonly
 * @enum {string} (char)
 */
export enum DiscretionInst {
  /** Related to displayed price */
  RelatedToDisplayedPrice = '0',
  /** Related to market price */
  RelatedToMarketPrice = '1',
  /** Related to primary price */
  RelatedToPrimaryPrice = '2',
  /** Related to local primary price */
  RelatedToLocalPrimaryPrice = '3',
  /** Related to midpoint price */
  RelatedToMidpointPrice = '4',
  /** Related to last trade price */
  RelatedToLastTradePrice = '5',
  /** Related to VWAP */
  RelatedToVWAP = '6',
  /** Average Price Guarantee */
  AveragePriceGuarantee = '7',
}
