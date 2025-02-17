/**
 * Type of risk limit information.
 * tag: 1760
 * @readonly
 * @enum {number} (int)
 */
export enum RiskLimitRequestType {
  /** Definitions(Default) */
  Definitions = 1,
  /** Utilization */
  Utilization = 2,
  /** Definitions and utilization */
  DefinitionsAndUtilizations = 3,
}
