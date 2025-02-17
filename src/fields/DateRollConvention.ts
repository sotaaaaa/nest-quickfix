/**
 * The convention for determining a sequence of dates. It is used in conjunction with a specified frequency. The value defined here applies to all adjustable dates in the instrument unless specifically overridden. Additional values may be used by mutual agreement of the counterparties.
 * tag: 40922
 * @readonly
 * @enum {string} (String)
 */
export enum DateRollConvention {
  /** 1st day of the month */
  FirstDay = '1',
  /** 2nd day of the month */
  SecondDay = '2',
  /** 3rd day of the month */
  ThirdDay = '3',
  /** 4th day of the month */
  FourthDay = '4',
  /** 5th day of the month */
  FifthDay = '5',
  /** 6thd day of the month */
  SixthDay = '6',
  /** 7th day of the month */
  SeventhDay = '7',
  /** 8th day of the month */
  EighthDay = '8',
  /** 9th day of the month */
  NinthDay = '9',
  /** 10th day of the month */
  TenthDay = '10',
  /** 11th day of the month */
  EleventhDay = '11',
  /** 12th day of the month */
  TwelvthDay = '12',
  /** 13th day of the month */
  ThirteenthDay = '13',
  /** 14th day of the month */
  ForteenthDay = '14',
  /** 15th day of the month */
  FifteenthDay = '15',
  /** 16th day of the month */
  SixteenthDay = '16',
  /** 17th day of the month */
  SeventeenthDay = '17',
  /** 18th day of the month */
  EighteenthDay = '18',
  /** 19th day of the month */
  NineteenthDay = '19',
  /** 20th day of the month */
  TwentiethDay = '20',
  /** 21st day of the month */
  TwentyFirstDay = '21',
  /** 22nd day of the month */
  TwentySecondDay = '22',
  /** 23rd day of the month */
  TwentyThirdDay = '23',
  /** 24th day of the month */
  TwentyFourthDay = '24',
  /** 25th day of the month */
  TwentyFifthDay = '25',
  /** 26th day of the month */
  TwentySixthDay = '26',
  /** 27th day of the month */
  TwentySeventhDay = '27',
  /** 28th day of the month */
  TwentyEigthDa28y = '28',
  /** 29th day of the month */
  TwentyNinthDay = '29',
  /** 30th day of the month */
  ThirtiethDay = '30',
  EOM = 'EOM',
  /** The floating rate note convention or Eurodollar convention. */
  FRN = 'FRN',
  /** The International Money Market settlement date, i.e. the 3rd Wednesday of the month. */
  IMM = 'IMM',
  /** The last trading day/expiration day of the Canadian Derivatives Exchange. */
  IMMCAD = 'IMMCAD',
  /** The last trading day of the Sydney Futures Exchange Australian 90-day bank accepted bill futures contract. */
  IMMAUD = 'IMMAUD',
  /** The last trading day of the Sydney Futures Exchange New Zealand 90-day bank bill futures contract. */
  IMMNZD = 'IMMNZD',
  /** The Sydney Futures Exchange 90-day bank accepted bill futures settlement dates. */
  SFE = 'SFE',
  /** No adjustment */
  NONE = 'NONE',
  /** The 13-week and 26-week U.S. Treasury Bill auction dates. */
  TBILL = 'TBILL',
  /** Monday */
  MON = 'MON',
  /** Tuesday */
  TUE = 'TUE',
  /** Wednesday */
  WED = 'WED',
  /** Thursday */
  THU = 'THU',
  /** Friday */
  FRI = 'FRI',
  /** Saturday */
  SAT = 'SAT',
  /** Sunday */
  SUN = 'SUN',
}
