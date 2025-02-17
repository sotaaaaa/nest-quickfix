/**
 * The results returned to a Security Request message
 * tag: 560
 * @readonly
 * @enum {number} (int)
 */
export enum SecurityRequestResult {
  /** Valid request */
  ValidRequest = 0,
  /** Invalid or unsupported request */
  InvalidOrUnsupportedRequest = 1,
  /** No instruments found that match selection criteria */
  NoInstrumentsFound = 2,
  /** Not authorized to retrieve instrument data */
  NotAuthorizedToRetrieveInstrumentData = 3,
  /** Instrument data temporarily unavailable */
  InstrumentDataTemporarilyUnavailable = 4,
  /** Request for instrument data not supported */
  RequestForInstrumentDataNotSupported = 5,
}
