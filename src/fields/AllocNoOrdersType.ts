/**
 * Indicates how the orders being booked and allocated by an AllocationInstruction or AllocationReport message are identified, e.g. by explicit definition in the OrdAllocGrp or ExecAllocGrp components, or not identified explicitly.
 * tag: 857
 * @readonly
 * @enum {number} (int)
 */
export enum AllocNoOrdersType {
  /** Not specified */
  NotSpecified = 0,
  /** Explicit list provided */
  ExplicitListProvided = 1,
}
