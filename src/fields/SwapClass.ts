/**
 * The classification or type of swap. Additional values may be used by mutual agreement of the counterparties.
 * tag: 1941
 * @readonly
 * @enum {string} (String)
 */
export enum SwapClass {
  /** Basis swap */
  BasisSwap = 'BS',
  /** Index swap */
  IndexSwap = 'IX',
  /** Broad-based security swap */
  BroadBasedSecuritySwap = 'BB',
  /** Basket swap */
  BasketSwap = 'SK',
}
