/**
 * Identifies the type of Quote Response.
 * tag: 694
 * @readonly
 * @enum {number} (int)
 */
export enum QuoteRespType {
  /** Hit/Lift */
  Hit = 1,
  /** Counter */
  Counter = 2,
  /** Expired */
  Expired = 3,
  Cover = 4,
  DoneAway = 5,
  /** Pass */
  Pass = 6,
  EndTrade = 7,
  /** Timed out */
  TimedOut = 8,
  Tied = 9,
  TiedCover = 10,
  Accept = 11,
  TerminateContract = 12,
}
