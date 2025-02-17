/**
 * Identifies the reason a security definition request is being rejected.
 * tag: 1607
 * @readonly
 * @enum {number} (int)
 */
export enum SecurityRejectReason {
  /** Invalid instrument requested */
  InvalidInstrumentRequested = 1,
  /** Instrument already exists */
  InstrumentAlreadyExists = 2,
  /** Request type not supported */
  RequestTypeNotSupported = 3,
  /** System unavailable for instrument creation */
  SystemUnavailableForInstrumentCreation = 4,
  /** Ineligible instrument group */
  IneligibleInstrumentGroup = 5,
  /** Instrument ID unavailable */
  InstrumentIDUnavailable = 6,
  /** Invalid or missing data on option leg */
  InvalidOrMissingDataOnOptionLeg = 7,
  /** Invalid or missing data on future leg */
  InvalidOrMissingDataOnFutureLeg = 8,
  /** Invalid or missing data on FX leg */
  InvalidOrMissingDataOnFXLeg = 10,
  /** Invalid leg price specified */
  InvalidLegPriceSpecified = 11,
  /** Invalid instrument structure specified */
  InvalidInstrumentStructureSpecified = 12,
}
