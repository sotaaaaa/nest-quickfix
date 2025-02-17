/**
 * The status of this trade with respect to matching or comparison.
 * tag: 573
 * @readonly
 * @enum {string} (char)
 */
export enum MatchStatus {
  /** Compared, matched or affirmed */
  Compared = '0',
  /** Uncompared, unmatched, or unaffirmed */
  Uncompared = '1',
  /** Advisory or alert */
  AdvisoryOrAlert = '2',
  Mismatched = '3',
}
