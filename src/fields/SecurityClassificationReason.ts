/**
 * Allows classification of instruments according to a set of high level reasons. Classification reasons describe the classes in which the instrument participates.
 * tag: 1583
 * @readonly
 * @enum {number} (int)
 */
export enum SecurityClassificationReason {
  /** Fee */
  Fee = 0,
  /** Credit Controls */
  CreditControls = 1,
  /** Margin */
  Margin = 2,
  /** Entitlement / Eligibility */
  EntitlementOrEligibility = 3,
  /** Market Data */
  MarketData = 4,
  /** Account Selection */
  AccountSelection = 5,
  /** Delivery Process */
  DeliveryProcess = 6,
  /** Sector */
  Sector = 7,
}
