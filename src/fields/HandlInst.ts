/**
 * Instructions for order handling on Broker trading floor
 * tag: 21
 * @readonly
 * @enum {string} (char)
 */
export enum HandlInst {
  /** Automated execution order, private, no Broker intervention */
  AutomatedExecutionNoIntervention = '1',
  /** Automated execution order, public, Broker intervention OK */
  AutomatedExecutionInterventionOK = '2',
  /** Manual order, best execution */
  ManualOrder = '3',
}
