/**
 * Code to represent the basis price type.
 * tag: 419
 * @readonly
 * @enum {string} (char)
 */
export enum BasisPxType {
  /** Closing price at morning session */
  ClosingPriceAtMorningSession = '2',
  /** Closing price */
  ClosingPrice = '3',
  /** Current price */
  CurrentPrice = '4',
  /** SQ */
  SQ = '5',
  /** VWAP through a day */
  VWAPThroughADay = '6',
  /** VWAP through a morning session */
  VWAPThroughAMorningSession = '7',
  /** VWAP through an afternoon session */
  VWAPThroughAnAfternoonSession = '8',
  /** VWAP through a day except "YORI" (an opening auction) */
  VWAPThroughADayExcept = '9',
  /** VWAP through a morning session except "YORI" (an opening auction) */
  VWAPThroughAMorningSessionExcept = 'A',
  /** VWAP through an afternoon session except "YORI" (an opening auction) */
  VWAPThroughAnAfternoonSessionExcept = 'B',
  /** Strike */
  Strike = 'C',
  /** Open */
  Open = 'D',
  /** Others */
  Others = 'Z',
}
