/**
 * Broker capacity in order execution
 * tag: 29
 * @readonly
 * @enum {string} (char)
 */
export enum LastCapacity {
  /** Agent */
  Agent = '1',
  /** Cross as agent */
  CrossAsAgent = '2',
  /** Cross as principal */
  CrossAsPrincipal = '3',
  /** Principal */
  Principal = '4',
  /** Riskless principal */
  RisklessPrincipal = '5',
}
