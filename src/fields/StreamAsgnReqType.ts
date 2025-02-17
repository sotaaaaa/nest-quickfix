/**
 * Type of stream assignment request.
 * tag: 1498
 * @readonly
 * @enum {number} (int)
 */
export enum StreamAsgnReqType {
  /** Stream assignment for new customer(s) */
  StreamAssignmentForNewCustomer = 1,
  /** Stream assignment for existing customer(s) */
  StreamAssignmentForExistingCustomer = 2,
}
