/**
 * Specifies the consequences of bullion settlement disruption events.
 * tag: 2143
 * @readonly
 * @enum {number} (int)
 */
export enum SettlDisruptionProvision {
  /** Negotiation */
  Negotiation = 1,
  /** Cancellation and payment */
  Cancellation = 2,
}
