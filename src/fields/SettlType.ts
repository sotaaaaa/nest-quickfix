export enum SettlType {
  /** Regular / FX Spot settlement (T+1 or T+2 depending on currency) */
  Regular = '0',
  /** Cash (TOD / T+0) */
  Cash = '1',
  /** Next Day (TOM / T+1) */
  NextDay = '2',
  /** T+2 */
  TPlus2 = '3',
  /** T+3 */
  TPlus3 = '4',
  /** T+4 */
  TPlus4 = '5',
  /** Future */
  Future = '6',
  /** When And If Issued */
  WhenAndIfIssued = '7',
  /** Sellers Option */
  SellersOption = '8',
  /** T+5 */
  TPlus5 = '9',
  BrokenDate = 'B',
  /** FX Spot Next settlement (Spot+1, aka next day) */
  FXSpotNextSettlement = 'C',
}
