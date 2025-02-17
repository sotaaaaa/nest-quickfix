/**
 * Indicates mode used for Settlement Instructions message. *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features and Supported Approach" ***
 * tag: 160
 * @readonly
 * @enum {string} (char)
 */
export enum SettlInstMode {
  /** Default (Replaced) */
  Default = '0',
  /** Standing Instructions Provided */
  StandingInstructionsProvided = '1',
  /** Specific Allocation Account Overriding (Replaced) */
  SpecificAllocationAccountOverriding = '2',
  /** Specific Allocation Account Standing (Replaced) */
  SpecificAllocationAccountStanding = '3',
  /** Specific Order for a single account (for CIV) */
  SpecificOrderForASingleAccount = '4',
  /** Request reject */
  RequestReject = '5',
}
