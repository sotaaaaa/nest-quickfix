/**
 * Indicates source of Settlement Instructions
 * tag: 165
 * @readonly
 * @enum {string} (char)
 */
export enum SettlInstSource {
  /** Broker's Instructions */
  BrokerCredit = '1',
  /** Institution's Instructions */
  Institution = '2',
  /** Investor (e.g. CIV use) */
  Investor = '3',
}
