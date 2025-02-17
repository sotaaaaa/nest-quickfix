/**
 * Identifies a specific settlement session
 * tag: 716
 * @readonly
 * @enum {string} (String)
 */
export enum SettlSessID {
  /** Intraday */
  Intraday = 'ITD',
  /** Regular Trading Hours */
  RegularTradingHours = 'RTH',
  /** Electronic Trading Hours */
  ElectronicTradingHours = 'ETH',
  /** End Of Day */
  EndOfDay = 'EOD',
}
