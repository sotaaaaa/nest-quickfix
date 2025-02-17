/**
 * Identifies the type of ListExecInst (69).
 * tag: 433
 * @readonly
 * @enum {string} (char)
 */
export enum ListExecInstType {
  /** Immediate */
  Immediate = '1',
  /** Wait for Execut Instruction (i.e. a List Execut message or phone call before proceeding with execution of the list) */
  WaitForInstruction = '2',
  /** Exchange/switch CIV order - Sell driven */
  SellDriven = '3',
  /** Exchange/switch CIV order - Buy driven, cash top-up (i.e. additional cash will be provided to fulfill the order) */
  BuyDrivenCashTopUp = '4',
  /** Exchange/switch CIV order - Buy driven, cash withdraw (i.e. additional cash will not be provided to fulfill the order) */
  BuyDrivenCashWithdraw = '5',
}
