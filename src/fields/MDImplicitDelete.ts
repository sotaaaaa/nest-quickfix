/**
 * Defines how a server handles distribution of a truncated book. Defaults to broker option.
 * tag: 547
 * @readonly
 * @enum {string} (Boolean)
 */
export enum MDImplicitDelete {
  /** Server must send an explicit delete for bids or offers falling outside the requested MarketDepth of the request */
  No = 'N',
  /** Client has responsibility for implicitly deleting bids or offers falling outside the MarketDepth of the request */
  Yes = 'Y',
}
