export declare enum TradeRequestResult {
    Successful = 0,
    InvalidOrUnknownInstrument = 1,
    InvalidTypeOfTradeRequested = 2,
    InvalidParties = 3,
    InvalidTransportTypeRequested = 4,
    InvalidDestinationRequested = 5,
    TradeRequestTypeNotSupported = 8,
    NotAuthorized = 9,
    Other = 99
}
