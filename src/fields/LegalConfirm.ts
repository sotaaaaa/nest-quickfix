/**
 * Indicates that this message is to serve as the final and legal confirmation.
 * tag: 650
 * @readonly
 * @enum {string} (Boolean)
 */
export enum LegalConfirm {
  /** Does not consitute a Legal Confirm */
  DoesNotConsituteALegalConfirm = 'N',
  /** Legal Confirm */
  LegalConfirm = 'Y',
}
