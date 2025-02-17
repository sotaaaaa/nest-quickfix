/**
 * Used to identify the source of the Account (1) code. This is especially useful if the account is a new account that the Respondent may not have setup yet in their system.
 * tag: 660
 * @readonly
 * @enum {number} (int)
 */
export enum AcctIDSource {
  /** BIC */
  BIC = 1,
  /** SID Code */
  SIDCode = 2,
  /** TFM (GSPTA) */
  TFM = 3,
  /** OMGEO (Alert ID) */
  OMGEO = 4,
  /** DTCC Code */
  DTCCCode = 5,
  SPSAID = 6,
  /** Other (custom or proprietary) */
  Other = 99,
}
