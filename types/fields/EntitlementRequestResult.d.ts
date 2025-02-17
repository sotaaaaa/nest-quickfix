export declare enum EntitlementRequestResult {
    Successful = 0,
    InvalidParty = 1,
    InvalidRelatedParty = 2,
    InvalidEntitlementType = 3,
    InvalidEntitlementID = 4,
    InvalidEntitlementAttribute = 5,
    InvalidInstrumentScope = 6,
    InvalidMarketSegmentScope = 7,
    InvalidStartDate = 8,
    InvalidEndDate = 9,
    InstrumentScopeNotSupported = 10,
    MarketSegmentScopeNotSupported = 11,
    EntitlementNotApprovedForParty = 12,
    EntitlementAlreadyDefinedForParty = 13,
    InstrumentNotApprovedForParty = 14,
    NotAuthorized = 98,
    Other = 99
}
