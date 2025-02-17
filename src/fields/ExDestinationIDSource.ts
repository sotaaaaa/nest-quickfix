/**
 * The ID source of ExDestination
 * tag: 1133
 * @readonly
 * @enum {string} (char)
 */
export enum ExDestinationIDSource {
  /** BIC (Bank Identification Code) (ISO 9362) */
  BIC = 'B',
  /** Generally accepted market participant identifier (e.g. NASD mnemonic) */
  GeneralIdentifier = 'C',
  /** Proprietary / Custom code */
  Proprietary = 'D',
  /** ISO Country Code */
  ISOCountryCode = 'E',
  /** MIC (ISO 10383 - Market Identifier Code) */
  MIC = 'G',
}
