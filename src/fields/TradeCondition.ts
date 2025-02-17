/**
 * Type of market data entry.
 * tag: 277
 * @readonly
 * @enum {string} (MultipleStringValue)
 */
export enum TradeCondition {
  /** Cash (only) Market */
  Cash = 'A',
  /** Average Price Trade */
  AveragePriceTrade = 'B',
  /** Cash Trade (same day clearing) */
  CashTrade = 'C',
  /** Next Day (only)Market */
  NextDay = 'D',
  /** Opening/Reopening Trade Detail */
  Opening = 'E',
  /** Intraday Trade Detail */
  IntradayTradeDetail = 'F',
  /** Rule 127 Trade (NYSE) */
  Rule127Trade = 'G',
  /** Rule 155 Trade (AMEX) */
  Rule155Trade = 'H',
  /** Sold Last (late reporting) */
  SoldLast = 'I',
  /** Next Day Trade (next day clearing) */
  NextDayTrade = 'J',
  /** Opened (late report of opened trade) */
  Opened = 'K',
  /** Seller */
  Seller = 'L',
  /** Sold (out of sequence) */
  Sold = 'M',
  /** Stopped Stock (guarantee of price but does not execute the order) */
  StoppedStock = 'N',
  /** Imbalance More Buyers (cannot be used in combination with Q) */
  ImbalanceMoreBuyers = 'P',
  /** Imbalance More Sellers (cannot be used in combination with P) */
  ImbalanceMoreSellers = 'Q',
  /** Opening Price */
  OpeningPrice = 'R',
  /** Bargain Condition (LSE) */
  BargainCondition = 'S',
  /** Converted Price Indicator */
  ConvertedPriceIndicator = 'T',
  /** Exchange Last */
  ExchangeLast = 'U',
  /** Final Price of Session */
  FinalPriceOfSession = 'V',
  /** Ex-pit */
  ExPit = 'W',
  /** Crossed */
  Crossed = 'X',
  /** Trades resulting from manual/slow quote */
  TradesResultingFromManual = 'Y',
  /** Trades resulting from intermarket sweep */
  TradesResultingFromIntermarketSweep = 'Z',
  /** Volume Only */
  VolumeOnly = 'a',
  /** Direct Plus */
  DirectPlus = 'b',
  /** Acquisition */
  Acquisition = 'c',
  /** Bunched */
  Bunched = 'd',
  /** Distribution */
  Distribution = 'e',
  /** Bunched Sale */
  BunchedSale = 'f',
  /** Split Trade */
  SplitTrade = 'g',
  /** Cancel Stopped */
  CancelStopped = 'h',
  /** Cancel ETH */
  CancelETH = 'i',
  /** Cancel Stopped ETH */
  CancelStoppedETH = 'j',
  /** Out of Sequence ETH */
  OutOfSequenceETH = 'k',
  /** Cancel Last ETH */
  CancelLastETH = 'l',
  /** Sold Last Sale ETH */
  SoldLastSaleETH = 'm',
  /** Cancel Last */
  CancelLast = 'n',
  /** Sold Last Sale */
  SoldLastSale = 'o',
  /** Cancel Open */
  CancelOpen = 'p',
  /** Cancel Open ETH */
  CancelOpenETH = 'q',
  /** Opened Sale ETH */
  OpenedSaleETH = 'r',
  /** Cancel Only */
  CancelOnly = 's',
  /** Cancel Only ETH */
  CancelOnlyETH = 't',
  /** Late Open ETH */
  LateOpenETH = 'u',
  /** Auto Execution ETH */
  AutoExecutionETH = 'v',
  /** Reopen */
  Reopen = 'w',
  /** Reopen ETH */
  ReopenETH = 'x',
  /** Adjusted */
  Adjusted = 'y',
  /** Adjusted ETH */
  AdjustedETH = 'z',
  /** Spread */
  Spread = 'AA',
  /** Spread ETH */
  SpreadETH = 'AB',
  /** Straddle */
  Straddle = 'AC',
  /** Straddle ETH */
  StraddleETH = 'AD',
  /** Stopped */
  Stopped = 'AE',
  /** Stopped ETH */
  StoppedETH = 'AF',
  /** Regular ETH */
  RegularETH = 'AG',
  /** Combo */
  Combo = 'AH',
  /** Combo ETH */
  ComboETH = 'AI',
  /** Official Closing Price */
  OfficialClosingPrice = 'AJ',
  /** Prior Reference Price */
  PriorReferencePrice = 'AK',
  /** Stopped Sold Last */
  StoppedSoldLast = 'AL',
  /** Stopped Out of Sequence */
  StoppedOutOfSequence = 'AM',
  /** Official Closing Price (duplicate enumeration - use 'AJ' instead) */
  OfficialClosingPriceDup = 'AN',
  /** Crossed (duplicate enumeration - use 'X' instead) */
  CrossedOld = 'AO',
  /** Fast Market */
  FastMarket = 'AP',
  /** Automatic Execution */
  AutomaticExecution = 'AQ',
  /** Form T */
  FormT = 'AR',
  /** Basket Index */
  BasketIndex = 'AS',
  /** Burst Basket */
  BurstBasket = 'AT',
  TradeThroughExempt = 'AU',
  /** Quote spread */
  QuoteSpread = 'AV',
  LastAuctionPrice = 'AW',
  HighPrice = 'AX',
  LowPrice = 'AY',
  SystematicInternaliser = 'AZ',
  AwayMarket = 'BA',
  MidpointPrice = 'BB',
  TradedBeforeIssueDate = 'BC',
  PreviousClosingPrice = 'BD',
  NationalBestBidOffer = 'BE',
  /** Cancel */
  Cancel = '0',
  /** Implied Trade */
  ImpliedTrade = '1',
  /** Marketplace entered trade */
  MarketplaceEnteredTrade = '2',
  /** Multi-asset class multileg trade */
  MultiAssetClassMultilegTrade = '3',
  /** Multileg-to-Multileg Trade */
  MultilegToMultilegTrade = '4',
  /** Short Sale Minimum Price */
  ShortSaleMinPrice = '5',
  Benchmark = '6',
}
