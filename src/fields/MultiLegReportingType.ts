/**
 * Used to indicate how the multi-legged security (e.g. option strategies, spreads, etc.) is being reported.
 * tag: 442
 * @readonly
 * @enum {string} (char)
 */
export enum MultiLegReportingType {
  /** Single security (default if not specified) */
  SingleSecurity = '1',
  /** Individual leg of a multi-leg security */
  IndividualLegOfAMultiLegSecurity = '2',
  /** Multi-leg security */
  MultiLegSecurity = '3',
}
