/**
 * Describes the source of the identifier that RelatedTradeID(1856) represents.
 * tag: 1857
 * @readonly
 * @enum {number} (int)
 */
export enum RelatedTradeIDSource {
  /** Non-FIX source */
  NonFIXSource = 0,
  /** Trade ID */
  TradeID = 1,
  /** Secondary trade ID */
  SecondaryTradeID = 2,
  /** Trade report ID */
  TradeReportID = 3,
  /** Firm trade ID */
  FirmTradeID = 4,
  /** Secondary firm Trade ID */
  SecondaryFirmTradeID = 5,
  /** Regulatory trade ID */
  RegulatoryTradeID = 6,
}
