/**
 * Protection term event qualifier. Used to further qualify ProtectionTermEventType(40192).
 * tag: 40200
 * @readonly
 * @enum {string} (char)
 */
export enum ProtectionTermEventQualifier {
  RestructuringMultipleHoldingObligations = 'H',
  RestructuringMultipleCreditEventNotices = 'E',
  FloatingRateInterestShortfall = 'C',
}
