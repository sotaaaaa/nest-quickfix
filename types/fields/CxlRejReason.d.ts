export declare enum CxlRejReason {
    TooLateToCancel = 0,
    UnknownOrder = 1,
    BrokerCredit = 2,
    OrderAlreadyInPendingStatus = 3,
    UnableToProcessOrderMassCancelRequest = 4,
    OrigOrdModTime = 5,
    DuplicateClOrdID = 6,
    PriceExceedsCurrentPrice = 7,
    PriceExceedsCurrentPriceBand = 8,
    InvalidPriceIncrement = 18,
    Other = 99
}
