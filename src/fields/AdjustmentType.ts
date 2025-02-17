/**
 * Type of adjustment to be applied. Used for Position Change Submission (PCS), Position Adjustment (PAJ), and Customer Gross Margin (CGM).
 * tag: 718
 * @readonly
 * @enum {number} (int)
 */
export enum AdjustmentType {
  /** Process request as margin disposition */
  ProcessRequestAsMarginDisposition = 0,
  /** Delta plus */
  DeltaPlus = 1,
  /** Delta minus */
  DeltaMinus = 2,
  /** Final */
  Final = 3,
  /** Customer specific position */
  CustomerSpecificPosition = 4,
}
