/**
 * Identifies the event which caused origination of the identifier in RegulatoryTradeID(1903). When more than one event is the cause, use the higher enumeration value. For example, if the identifier is originated due to an allocated trade which was cleared and reported, use the enumeration value 2 (Clearing).
 * tag: 1904
 * @readonly
 * @enum {number} (int)
 */
export enum RegulatoryTradeIDEvent {
  InitialBlockTrade = 0,
  Allocation = 1,
  /** Clearing */
  Clearing = 2,
  /** Compression */
  Compression = 3,
  /** Novation */
  Novation = 4,
  /** Termination */
  Termination = 5,
  /** Post-trade valuation */
  PostTrdVal = 6,
}
