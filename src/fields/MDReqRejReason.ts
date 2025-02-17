/**
 * Reason for the rejection of a Market Data request.
 * tag: 281
 * @readonly
 * @enum {string} (char)
 */
export enum MDReqRejReason {
  /** Unknown symbol */
  UnknownSymbol = '0',
  /** Duplicate MDReqID */
  DuplicateMDReqID = '1',
  /** Insufficient Bandwidth */
  InsufficientBandwidth = '2',
  /** Insufficient Permissions */
  InsufficientPermissions = '3',
  /** Unsupported SubscriptionRequestType */
  UnsupportedSubscriptionRequestType = '4',
  /** Unsupported MarketDepth */
  UnsupportedMarketDepth = '5',
  /** Unsupported MDUpdateType */
  UnsupportedMDUpdateType = '6',
  /** Unsupported AggregatedBook */
  UnsupportedAggregatedBook = '7',
  /** Unsupported MDEntryType */
  UnsupportedMDEntryType = '8',
  /** Unsupported TradingSessionID */
  UnsupportedTradingSessionID = '9',
  /** Unsupported Scope */
  UnsupportedScope = 'A',
  /** Unsupported OpenCloseSettleFlag */
  UnsupportedOpenCloseSettleFlag = 'B',
  /** Unsupported MDImplicitDelete */
  UnsupportedMDImplicitDelete = 'C',
  /** Insufficient credit */
  InsufficientCredit = 'D',
}
