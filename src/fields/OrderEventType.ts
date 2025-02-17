/**
 * The type of event affecting an order. The last event type within the OrderEventGrp component indicates the ExecType(150) value resulting from the series of events (ExecType(150) values are shown in brackets).
 * tag: 1796
 * @readonly
 * @enum {number} (int)
 */
export enum OrderEventType {
  /** Added (0=New) */
  Added = 1,
  /** Modified (5=Replaced) */
  Modified = 2,
  /** Deleted (4=Canceled) */
  Deleted = 3,
  /** Partially Filled (F=Trade) */
  PartiallyFilled = 4,
  /** Filled (F=Trade) */
  Filled = 5,
  /** Suspended (9=Suspended) */
  Suspended = 6,
  /** Released (N=Released) */
  Released = 7,
  /** Restated (D=Restated) */
  Restated = 8,
  /** Locked (M=Locked) */
  Locked = 9,
  /** Triggered (L=Triggered or Activated by System) */
  Triggered = 10,
  /** Activated (L=Triggered or Activated by System) */
  Activated = 11,
}
