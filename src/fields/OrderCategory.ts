/**
 * Defines the type of interest behind a trade (fill or partial fill).
 * tag: 1115
 * @readonly
 * @enum {string} (char)
 */
export enum OrderCategory {
  /** Order */
  Order = '1',
  /** Quote */
  Quote = '2',
  /** Privately Negotiated Trade */
  PrivatelyNegotiatedTrade = '3',
  /** Multileg order */
  MultilegOrder = '4',
  /** Linked order */
  LinkedOrder = '5',
  /** Quote Request */
  QuoteRequest = '6',
  /** Implied Order */
  ImpliedOrder = '7',
  /** Cross Order */
  CrossOrder = '8',
  /** Streaming price (quote) */
  StreamingPrice = '9',
  /** Internal Cross Order */
  InternalCrossOrder = 'A',
}
