/**
 * Result returned in response to MarginRequirementInquiry.
 * tag: 1641
 * @readonly
 * @enum {number} (int)
 */
export enum MarginReqmtInqResult {
  /** Successful (default) */
  Successful = 0,
  /** Invalid or unknown instrument */
  InvalidOrUnknownInstrument = 1,
  /** Invalid or unknown margin class */
  InvalidOrUnknownMarginClass = 2,
  /** Invalid Parties */
  InvalidParties = 3,
  /** Invalid Transport Type requested */
  InvalidTransportTypeReq = 4,
  /** Invalid Destination requested */
  InvalidDestinationReq = 5,
  /** No margin requirement found */
  NoMarginReqFound = 6,
  /** Margin requirement inquiry qualifier not supported */
  MarginReqInquiryQualifierNotSupported = 7,
  /** Unauthorized for margin requirement inquiry */
  UnauthorizedForMarginReqInquiry = 8,
  /** Other (further information in Text (58) field) */
  Other = 99,
}
