/**
 * Indicates request for forex accommodation trade to be executed along with security transaction.
 * tag: 121
 * @readonly
 * @enum {string} (Boolean)
 */
export enum ForexReq {
  /** Do Not Execute Forex After Security Trade */
  DoNotExecuteForexAfterSecurityTrade = 'N',
  /** Execute Forex After Security Trade */
  ExecuteForexAfterSecurityTrade = 'Y',
}
