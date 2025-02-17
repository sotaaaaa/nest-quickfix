/**
 * Specifies the type of action to take or was taken for a given party.
 * tag: 2329
 * @readonly
 * @enum {number} (int)
 */
export enum PartyActionType {
  /** Suspend */
  Suspend = 0,
  /** Halt trading */
  HaltTrading = 1,
  /** Reinstate */
  Reinstate = 2,
}
