/**
 * Code to identify reason for a session-level Reject message.
 * tag: 373
 * @readonly
 * @enum {number} (int)
 */
export enum SessionRejectReason {
  /** Invalid Tag Number */
  InvalidTagNumber = 0,
  /** Required Tag Missing */
  RequiredTagMissing = 1,
  /** Tag not defined for this message type */
  TagNotDefinedForThisMessageType = 2,
  /** Undefined tag */
  UndefinedTag = 3,
  /** Tag specified without a value */
  TagSpecifiedWithoutAValue = 4,
  /** Value is incorrect (out of range) for this tag */
  ValueIsIncorrect = 5,
  /** Incorrect data format for value */
  IncorrectDataFormatForValue = 6,
  /** Decryption problem */
  DecryptionProblem = 7,
  /** Signature problem */
  SignatureProblem = 8,
  /** CompID problem */
  CompIDProblem = 9,
  /** SendingTime Accuracy Problem */
  SendingTimeAccuracyProblem = 10,
  /** Invalid MsgType */
  InvalidMsgType = 11,
  /** XML Validation Error */
  XMLValidationError = 12,
  /** Tag appears more than once */
  TagAppearsMoreThanOnce = 13,
  /** Tag specified out of required order */
  TagSpecifiedOutOfRequiredOrder = 14,
  /** Repeating group fields out of order */
  RepeatingGroupFieldsOutOfOrder = 15,
  /** Incorrect NumInGroup count for repeating group */
  IncorrectNumInGroupCountForRepeatingGroup = 16,
  /** Non "Data" value includes field delimiter (<SOH> character) */
  NonDataValueIncludesFieldDelimiter = 17,
  /** Invalid/Unsupported Application Version */
  InvalidUnsupportedApplVer = 18,
  /** Other */
  Other = 99,
}
