/**
 * Identifies role of dealer; Agent, Principal, RisklessPrincipal
 * tag: 1048
 * @readonly
 * @enum {string} (char)
 */
export enum DealingCapacity {
  /** Agent */
  Agent = 'A',
  /** Principal */
  Principal = 'P',
  /** Riskless Principal */
  RisklessPrincipal = 'R',
}
