/**
 * Order type. *** SOME VALUES ARE NO LONGER USED - See "Deprecated (Phased-out) Features and Supported Approach" *** (see Volume : "Glossary" for value definitions)
 * tag: 40
 * @readonly
 * @enum {string} (char)
 */
export enum OrdType {
  /** Market */
  Market = '1',
  /** Limit */
  Limit = '2',
  Stop = '3',
  StopLimit = '4',
  /** Market On Close (No longer used) */
  MarketOnClose = '5',
  /** With Or Without */
  WithOrWithout = '6',
  /** Limit Or Better */
  LimitOrBetter = '7',
  /** Limit With Or Without */
  LimitWithOrWithout = '8',
  /** On Basis */
  OnBasis = '9',
  /** On Close (No longer used) */
  OnClose = 'A',
  /** Limit On Close (No longer used) */
  LimitOnClose = 'B',
  /** Forex Market (No longer used) */
  ForexMarket = 'C',
  /** Previously Quoted */
  PreviouslyQuoted = 'D',
  /** Previously Indicated */
  PreviouslyIndicated = 'E',
  /** Forex Limit (No longer used) */
  ForexLimit = 'F',
  /** Forex Swap */
  ForexSwap = 'G',
  /** Forex Previously Quoted (No longer used) */
  ForexPreviouslyQuoted = 'H',
  /** Funari (Limit day order with unexecuted portion handles as Market On Close. E.g. Japan) */
  Funari = 'I',
  /** Market If Touched (MIT) */
  MarketIfTouched = 'J',
  /** Market With Left Over as Limit (market order with unexecuted quantity becoming limit order at last price) */
  MarketWithLeftOverAsLimit = 'K',
  /** Previous Fund Valuation Point (Historic pricing; for CIV) */
  PreviousFundValuationPoint = 'L',
  /** Next Fund Valuation Point (Forward pricing; for CIV) */
  NextFundValuationPoint = 'M',
  /** Pegged */
  Pegged = 'P',
  /** Counter-order selection */
  CounterOrderSelection = 'Q',
  StopOnBidOrOffer = 'R',
  StopLimitOnBidOrOffer = 'S',
}
