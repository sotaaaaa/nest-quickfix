/**
 * Result of risk limit definition request.
 * tag: 1761
 * @readonly
 * @enum {number} (int)
 */
export enum RiskLimitRequestResult {
  /** Successful (default) */
  Successful = 0,
  /** Invalid party(-ies) */
  InvalidParty = 1,
  /** Invalid related party(-ies) */
  InvalidRelatedParty = 2,
  /** Invalid risk limit type(s) */
  InvalidRiskLimitType = 3,
  /** Invalid risk limit ID(s) */
  InvalidRiskLimitID = 4,
  /** Invalid risk limit amount(s) */
  InvalidRiskLimitAmount = 5,
  /** Invalid risk/warning level action(s) */
  InvalidRiskWarningLevelAction = 6,
  /** Invalid risk instrument scope(s) */
  InvalidRiskInstrumentScope = 7,
  /** Risk limit actions not supported */
  RiskLimitActionsNotSupported = 8,
  /** Warning levels not supported */
  WarningLevelsNotSupported = 9,
  /** Warning level actions not supported */
  WarningLevelActionsNotSupported = 10,
  /** Risk instrument scope not supported */
  RiskInstrumentScopeNotSupported = 11,
  /** Risk limit not approved for party(-ies) */
  RiskLimitNotApprovedForParty = 12,
  /** Risk limit already defined for party(-ies) */
  RiskLimitAlreadyDefinedForParty = 13,
  /** Instrument not approved for party(-ies) */
  InstrumentNotApprovedForParty = 14,
  /** Not authorized */
  NotAuthorized = 98,
  /** Other */
  Other = 99,
}
