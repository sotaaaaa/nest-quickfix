export declare enum RiskLimitCheckRequestResult {
    Successful = 0,
    InvalidParty = 1,
    ReqExceedsCreditLimit = 2,
    ReqExceedsClipSizeLimit = 3,
    ReqExceedsMaxNotional = 4,
    Other = 99
}
