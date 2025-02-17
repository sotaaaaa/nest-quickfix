/**
 * Change of ownership of an order to a specific party.
 * tag: 2679
 * @readonly
 * @enum {number} (int)
 */
export enum OrderOwnershipIndicator {
  /** No change of ownership (default) */
  NoChange = 0,
  ExecutingPartyChange = 1,
  EnteringPartyChange = 2,
  SpecifiedPartyChange = 3,
}
