/**
 * Side of order (see Volume : "Glossary" for value definitions)
 * tag: 54
 * @readonly
 * @enum {string} (char)
 */
export enum Side {
  Buy = '1',
  Sell = '2',
  /** Buy minus */
  BuyMinus = '3',
  /** Sell plus */
  SellPlus = '4',
  /** Sell short */
  SellShort = '5',
  /** Sell short exempt */
  SellShortExempt = '6',
  /** Undisclosed */
  Undisclosed = '7',
  /** Cross (orders where counterparty is an exchange, valid for all messages except IOIs) */
  Cross = '8',
  /** Cross short */
  CrossShort = '9',
  /** Cross short exempt */
  CrossShortExempt = 'A',
  /** "As Defined" (for use with multileg instruments) */
  AsDefined = 'B',
  /** "Opposite" (for use with multileg instruments) */
  Opposite = 'C',
  /** Subscribe (e.g. CIV) */
  Subscribe = 'D',
  /** Redeem (e.g. CIV) */
  Redeem = 'E',
  /** Lend (FINANCING - identifies direction of collateral) */
  Lend = 'F',
  /** Borrow (FINANCING - identifies direction of collateral) */
  Borrow = 'G',
  SellUndisclosed = 'H',
}
