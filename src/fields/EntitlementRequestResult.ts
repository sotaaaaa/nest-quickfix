/**
 * Result of risk limit definition request.
 * tag: 1881
 * @readonly
 * @enum {number} (int)
 */
export enum EntitlementRequestResult {
  /** Successful (default) */
  Successful = 0,
  /** Invalid party(-ies) */
  InvalidParty = 1,
  /** Invalid related party(-ies) */
  InvalidRelatedParty = 2,
  /** Invalid entitlement type(s) */
  InvalidEntitlementType = 3,
  /** Invalid entitlement ID(s) / ref ID(s) */
  InvalidEntitlementID = 4,
  /** Invalid entitlement attribute(s) */
  InvalidEntitlementAttribute = 5,
  /** Invalid instrument scope(s) */
  InvalidInstrumentScope = 6,
  /** Invalid market segment scope(s) */
  InvalidMarketSegmentScope = 7,
  /** Invalid start date */
  InvalidStartDate = 8,
  /** Invalid end date */
  InvalidEndDate = 9,
  /** Instrument scope not supported */
  InstrumentScopeNotSupported = 10,
  /** Market segment scope not supported */
  MarketSegmentScopeNotSupported = 11,
  /** Entitlement not approved for party(-ies) */
  EntitlementNotApprovedForParty = 12,
  /** Entitlement already defined for party(-ies) */
  EntitlementAlreadyDefinedForParty = 13,
  /** Instrument not approved for party(-ies) */
  InstrumentNotApprovedForParty = 14,
  /** Not authorized */
  NotAuthorized = 98,
  /** Other */
  Other = 99,
}
