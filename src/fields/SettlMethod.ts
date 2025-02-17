/**
 * Settlement method for a contract or instrument. Additional values may be used with bilateral agreement.
 * tag: 1193
 * @readonly
 * @enum {string} (String)
 */
export enum SettlMethod {
  /** Cash settlement required */
  CashSettlementRequired = 'C',
  /** Physical settlement required */
  PhysicalSettlementRequired = 'P',
  Election = 'E',
}
