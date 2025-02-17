export declare enum CollInquiryResult {
    Successful = 0,
    InvalidOrUnknownInstrument = 1,
    InvalidOrUnknownCollateralType = 2,
    InvalidParties = 3,
    InvalidTransportTypeRequested = 4,
    InvalidDestinationRequested = 5,
    NoCollateralFoundForTheTradeSpecified = 6,
    NoCollateralFoundForTheOrderSpecified = 7,
    CollateralInquiryTypeNotSupported = 8,
    UnauthorizedForCollateralInquiry = 9,
    Other = 99
}
