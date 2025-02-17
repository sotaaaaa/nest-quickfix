export declare enum RiskLimitRequestResult {
    Successful = 0,
    InvalidParty = 1,
    InvalidRelatedParty = 2,
    InvalidRiskLimitType = 3,
    InvalidRiskLimitID = 4,
    InvalidRiskLimitAmount = 5,
    InvalidRiskWarningLevelAction = 6,
    InvalidRiskInstrumentScope = 7,
    RiskLimitActionsNotSupported = 8,
    WarningLevelsNotSupported = 9,
    WarningLevelActionsNotSupported = 10,
    RiskInstrumentScopeNotSupported = 11,
    RiskLimitNotApprovedForParty = 12,
    RiskLimitAlreadyDefinedForParty = 13,
    InstrumentNotApprovedForParty = 14,
    NotAuthorized = 98,
    Other = 99
}
