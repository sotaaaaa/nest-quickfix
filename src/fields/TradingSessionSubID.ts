/**
 * Optional market assigned sub identifier for a trading phase within a trading session. Usage is determined by market or counterparties. Used by US based futures markets to identify exchange specific execution time bracket codes as required by US market regulations. Bilaterally agreed values of data type "String" that start with a character can be used for backward compatibility
 * tag: 625
 * @readonly
 * @enum {string} (String)
 */
export enum TradingSessionSubID {
  /** Pre-Trading */
  PreTrading = '1',
  /** Opening or opening auction */
  OpeningOrOpeningAuction = '2',
  /** (Continuous) Trading */
  Continuous = '3',
  /** Closing or closing auction */
  ClosingOrClosingAuction = '4',
  /** Post-Trading */
  PostTrading = '5',
  /** Scheduled intraday auction */
  ScheduledIntradayAuction = '6',
  /** Quiescent */
  Quiescent = '7',
  /** Any auction */
  AnyAuction = '8',
  UnscheduledIntradayAuction = '9',
  OutOfMainSessionTrading = '10',
  PrivateAuction = '11',
  PublicAuction = '12',
  GroupAuction = '13',
  OrderInitiatedAuction = '14',
}
