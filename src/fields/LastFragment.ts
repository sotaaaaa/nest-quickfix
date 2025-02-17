/**
 * Indicates whether this message is the last in a sequence of messages for those messages that support fragmentation, such as Allocation Instruction, Mass Quote, Security List, Derivative Security List
 * tag: 893
 * @readonly
 * @enum {string} (Boolean)
 */
export enum LastFragment {
  /** Not Last Message */
  NotLastMessage = 'N',
  /** Last Message */
  LastMessage = 'Y',
}
