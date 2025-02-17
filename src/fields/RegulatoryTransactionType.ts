/**
 * Specifies the regulatory mandate or rule that the transaction complies with.
 * tag: 2347
 * @readonly
 * @enum {number} (int)
 */
export enum RegulatoryTransactionType {
  None = 0,
  SEFRequiredTransaction = 1,
  SEFPermittedTransaction = 2,
}
