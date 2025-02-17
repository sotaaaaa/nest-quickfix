export declare enum TradeReportRejectReason {
    Successful = 0,
    InvalidPartyInformation = 1,
    UnknownInstrument = 2,
    UnauthorizedToReportTrades = 3,
    InvalidTradeType = 4,
    PriceExceedsCurrentPriceBand = 5,
    ReferencePriceNotAvailable = 6,
    NotionalValueExceedsThreshold = 7,
    Other = 99
}
