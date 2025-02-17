export enum CollInquiryResult {
  /** Successful (default) */
  Successful = 0,
  /** Invalid or unknown instrument */
  InvalidOrUnknownInstrument = 1,
  /** Invalid or unknown collateral type */
  InvalidOrUnknownCollateralType = 2,
  /** Invalid Parties */
  InvalidParties = 3,
  /** Invalid Transport Type requested */
  InvalidTransportTypeRequested = 4,
  /** Invalid Destination requested */
  InvalidDestinationRequested = 5,
  /** No collateral found for the trade specified */
  NoCollateralFoundForTheTradeSpecified = 6,
  /** No collateral found for the order specified */
  NoCollateralFoundForTheOrderSpecified = 7,
  /** Collateral inquiry type not supported */
  CollateralInquiryTypeNotSupported = 8,
  /** Unauthorized for collateral inquiry */
  UnauthorizedForCollateralInquiry = 9,
  /** Other (further information in Text (58) field) */
  Other = 99,
}
