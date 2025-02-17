/**
 * Indicate whether a trade is eligible to be reported to more than one regulatory jurisdictions, e.g. due to overlapping reporting rules that require reporting to different jurisdictions.
 * tag: 2963
 * @readonly
 * @enum {number} (int)
 */
export enum MultiJurisdictionReportingIndicator {
  /** Trade not eligible for multi-jurisdiction reporting */
  NotMultiJrsdctnEligible = 0,
  /** Trade eligible for multi-jurisdiction reporting */
  MultiJrsdctnEligible = 1,
}
