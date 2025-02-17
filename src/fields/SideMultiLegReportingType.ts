/**
 * Used to indicate if the side being reported on Trade Capture Report represents a leg of a multileg instrument or a single security.
 * tag: 752
 * @readonly
 * @enum {number} (int)
 */
export enum SideMultiLegReportingType {
  /** Single Security (default if not specified) */
  SingleSecurity = 1,
  /** Individual leg of a multileg security */
  IndividualLegOfAMultilegSecurity = 2,
  /** Multileg Security */
  MultilegSecurity = 3,
}
