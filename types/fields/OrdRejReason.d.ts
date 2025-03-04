export declare enum OrdRejReason {
    BrokerCredit = 0,
    UnknownSymbol = 1,
    ExchangeClosed = 2,
    OrderExceedsLimit = 3,
    TooLateToEnter = 4,
    UnknownOrder = 5,
    DuplicateOrder = 6,
    DuplicateOfAVerballyCommunicatedOrder = 7,
    StaleOrder = 8,
    TradeAlongRequired = 9,
    InvalidInvestorID = 10,
    UnsupportedOrderCharacteristic = 11,
    SurveillanceOption = 12,
    IncorrectQuantity = 13,
    IncorrectAllocatedQuantity = 14,
    UnknownAccount = 15,
    PriceExceedsCurrentPriceBand = 16,
    InvalidPriceIncrement = 18,
    ReferencePriceNotAvailable = 19,
    NotionalValueExceedsThreshold = 20,
    AlgorithmRiskThresholdBreached = 21,
    ShortSellNotPermitted = 22,
    ShortSellSecurityPreBorrowRestriction = 23,
    ShortSellAccountPreBorrowRestriction = 24,
    InsufficientCreditLimit = 25,
    ExceededClipSizeLimit = 26,
    ExceededMaxNotionalOrderAmt = 27,
    ExceededDV01PV01Limit = 28,
    ExceededCS01Limit = 29,
    LastLook = 30,
    LastLookLatency = 31,
    UnavailablePriceLiquidity = 32,
    InvalidMissingEntitlements = 33,
    Other = 99
}
