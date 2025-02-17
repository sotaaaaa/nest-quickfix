/**
 * The consequences of market disruption events.
 * tag: 41087
 * @readonly
 * @enum {number} (int)
 */
export enum MarketDisruptionProvision {
  /** Not applicable */
  NotApplicable = 0,
  /** Applicable */
  Applicable = 1,
  /** As specified in master agreement */
  AsInMasterAgreement = 2,
  /** As specified in confirmation */
  AsInConfirmation = 3,
}
