/**
 * Indicates the type of multiplier being applied to the contract. Can be optionally used to further define what unit ContractMultiplier(tag 231) is expressed in.
 * tag: 1435
 * @readonly
 * @enum {number} (int)
 */
export enum ContractMultiplierUnit {
  /** Shares */
  Shares = 0,
  /** Hours */
  Hours = 1,
  /** Days */
  Days = 2,
}
