/**
 * The scope of the peg
 * tag: 840
 * @readonly
 * @enum {number} (int)
 */
export enum PegScope {
  /** Local (Exchange, ECN, ATS) */
  Local = 1,
  /** National */
  National = 2,
  /** Global */
  Global = 3,
  /** National excluding local */
  NationalExcludingLocal = 4,
}
