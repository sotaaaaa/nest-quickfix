/**
 * Identifies the Standing Instruction database used
 * tag: 169
 * @readonly
 * @enum {number} (int)
 */
export enum StandInstDbType {
  /** Other */
  Other = 0,
  /** DTC SID */
  DTCSID = 1,
  /** Thomson ALERT */
  ThomsonALERT = 2,
  /** A Global Custodian (StandInstDBName (70) must be provided) */
  AGlobalCustodian = 3,
  /** AccountNet */
  AccountNet = 4,
}
