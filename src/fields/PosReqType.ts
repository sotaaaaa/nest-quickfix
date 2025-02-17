/**
 * Used to specify the type of position request being made.
 * tag: 724
 * @readonly
 * @enum {number} (int)
 */
export enum PosReqType {
  /** Positions */
  Positions = 0,
  /** Trades */
  Trades = 1,
  /** Exercises */
  Exercises = 2,
  /** Assignments */
  Assignments = 3,
  /** Settlement Activity */
  SettlementActivity = 4,
  /** Backout Message */
  BackoutMessage = 5,
  /** Delta Positions */
  DeltaPositions = 6,
  /** Net Position */
  NetPosition = 7,
  /** Large Positions Reporting */
  LargePositionsReporting = 8,
  /** Exercise Position Reporting Submission */
  ExercisePositionReportingSubmission = 9,
  /** Position Limit Reporting Submission */
  PositionLimitReportingSubmissing = 10,
}
