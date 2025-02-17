export enum TradeReportingIndicator {
  NotReported = 0,
  /** Trade has been or will be reported by a trading venue as an "on-book" trade */
  OnBook = 1,
  /** Trade has or will be reported as a seller trade by the authorised reporter */
  SISeller = 2,
  /** Trade has or will be reported as a buyer trade by the authorised reporter */
  SIBuyer = 3,
  /** Trade has or will be reported as a seller trade by an entity other than the authorised reporter */
  NonSISeller = 4,
  /** Trade has been or will be reported under a sub-delegation arrangement by an investment firm to a reporting facility (e.g. APA) on behalf of another investment firm */
  SubDelegationByFirm = 5,
  Reportable = 6,
  /** Trade has been or will be reported as a buyer trade by an entity other than the authorised reporter */
  NonSIBuyer = 7,
  /** Trade has been or will be reported by a trading venue as an "off-book" trade */
  OffBook = 8,
  NotReportable = 9,
}
