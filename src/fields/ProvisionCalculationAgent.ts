/**
 * Used to identify the calculation agent. The calculation agent may be identified in ProvisionCalculationAgent(40098) or in the ProvisionParties component.
 * tag: 40098
 * @readonly
 * @enum {number} (int)
 */
export enum ProvisionCalculationAgent {
  /** Exercising party */
  ExercisingParty = 0,
  /** Non-exercising party */
  NonExercisingParty = 1,
  /** As specified in the master agreement */
  MasterAgreeent = 2,
  /** As specified in the standard terms supplement */
  Supplement = 3,
}
