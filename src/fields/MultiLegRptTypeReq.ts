/**
 * Indicates the method of execution reporting requested by issuer of the order.
 * tag: 563
 * @readonly
 * @enum {number} (int)
 */
export enum MultiLegRptTypeReq {
  /** Report by mulitleg security only (do not report legs) */
  ReportByMulitlegSecurityOnly = 0,
  /** Report by multileg security and by instrument legs belonging to the multileg security */
  ReportByMultilegSecurityAndInstrumentLegs = 1,
  /** Report by instrument legs belonging to the multileg security only (do not report status of multileg security) */
  ReportByInstrumentLegsOnly = 2,
}
