/**
 * The scope of the discretion
 * tag: 846
 * @readonly
 * @enum {number} (int)
 */
export enum DiscretionScope {
  /** Local (Exchange, ECN, ATS) */
  Local = 1,
  /** National */
  National = 2,
  /** Global */
  Global = 3,
  /** National excluding local */
  NationalExcludingLocal = 4,
}
