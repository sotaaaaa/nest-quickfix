/**
 * Type of quantity specified in quantity field. ContractMultiplier (tag 231) is required when QtyType = 1 (Contracts). UnitOfMeasure (tag 996) and TimeUnit (tag 997) are required when QtyType = 2 (Units of Measure per Time Unit).
 * tag: 854
 * @readonly
 * @enum {number} (int)
 */
export enum QtyType {
  /** Units (shares, par, currency) */
  Units = 0,
  /** Contracts */
  Contracts = 1,
  /** Unit of Measure per Time Unit */
  UnitsOfMeasurePerTimeUnit = 2,
}
