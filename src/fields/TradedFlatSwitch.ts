/**
 * Driver and part of trade in the event that the Security Master file was wrong at the point of entry(Note tag # was reserved in FIX 4.1, added in FIX 4.3)
 * tag: 258
 * @readonly
 * @enum {string} (Boolean)
 */
export enum TradedFlatSwitch {
  /** Not Traded Flat */
  NotTradedFlat = 'N',
  /** Traded Flat */
  TradedFlat = 'Y',
}
