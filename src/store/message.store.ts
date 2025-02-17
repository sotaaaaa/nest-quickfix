import { Message } from '../message/message';
import { MessageStoreConfig } from './store.config';
import { Logger } from '@nestjs/common';
import { Fields } from '../fields';

export class MessageStore {
  private readonly sessionPrefix: string;
  private store: Map<string, any> = new Map();
  private messages: Map<string, Message[]> = new Map();
  private sequenceNumbers: Map<string, { inbound: number; outbound: number }> = new Map();

  constructor(config: MessageStoreConfig) {
    this.sessionPrefix = config?.sessionPrefix || 'fix:session:';
  }

  private getKey(sessionId: string, type: string, seqNum?: number): string {
    return seqNum 
      ? `${this.sessionPrefix}${sessionId}:${type}:${seqNum}`
      : `${this.sessionPrefix}${sessionId}:${type}`;
  }

  /**
   * Store outgoing message
   */
  async storeOutgoing(sessionId: string, seqNum: number, message: Message): Promise<void> {
    const key = this.getKey(sessionId, 'out', seqNum);
    this.store.set(key, JSON.stringify(message));
  }

  /**
   * Store incoming message
   */
  async storeIncoming(sessionId: string, seqNum: number, message: Message): Promise<void> {
    const key = this.getKey(sessionId, 'in', seqNum);
    this.store.set(key, JSON.stringify(message));
  }

  /**
   * Get stored sequence numbers for session
   */
  async getSequenceNumbers(sessionId: string): Promise<{
    incomingSeqNum: number;
    outgoingSeqNum: number;
  }> {
    const inSeq = this.store.get(this.getKey(sessionId, 'in:seq'));
    const outSeq = this.store.get(this.getKey(sessionId, 'out:seq'));

    return {
      incomingSeqNum: parseInt(inSeq) || 1,
      outgoingSeqNum: parseInt(outSeq) || 1
    };
  }

  /**
   * Update sequence numbers
   */
  async updateSequenceNumbers(
    sessionId: string,
    inbound: number,
    outbound: number
  ): Promise<void> {
    this.store.set(this.getKey(sessionId, 'in:seq'), inbound.toString());
    this.store.set(this.getKey(sessionId, 'out:seq'), outbound.toString());
    this.sequenceNumbers.set(sessionId, { inbound, outbound });
  }

  /**
   * Get messages for resend
   */
  async getMessagesForResend(
    sessionId: string,
    beginSeqNo: number,
    endSeqNo: number
  ): Promise<Message[]> {
    const messages: Message[] = [];
    
    for (let i = beginSeqNo; i <= endSeqNo; i++) {
      const key = this.getKey(sessionId, 'out', i);
      const msgStr = this.store.get(key);
      if (msgStr) {
        try {
          const msg = JSON.parse(msgStr);
          messages.push(msg);
        } catch (error) {
          Logger.error(`Failed to parse stored message: ${error}`);
        }
      }
    }
    
    return messages;
  }

  /**
   * Backup session data
   */
  async backup(sessionId: string): Promise<void> {
    const timestamp = new Date().toISOString();
    const backupKey = this.getKey(sessionId, `backup:${timestamp}`);
    const sessionData = {
      sequences: await this.getSequenceNumbers(sessionId),
      messages: this.store
    };
    this.store.set(backupKey, JSON.stringify(sessionData));
  }

  /**
   * Recover session data
   */
  async recover(sessionId: string, timestamp: string): Promise<void> {
    const backupKey = this.getKey(sessionId, `backup:${timestamp}`);
    const backupData = this.store.get(backupKey);
    if (backupData) {
      const sessionData = JSON.parse(backupData);
      this.store = new Map(sessionData.messages);
    }
  }

  /**
   * Store a message
   */
  async storeMessage(sessionId: string, message: Message): Promise<void> {
    try {
      // Get or create message array for session
      let sessionMessages = this.messages.get(sessionId);
      if (!sessionMessages) {
        sessionMessages = [];
        this.messages.set(sessionId, sessionMessages);
      }

      // Add message to array
      sessionMessages.push(message);

      // Store in the main store as well
      const seqNum = parseInt(message.getField(Fields.MsgSeqNum));
      const direction = message.getField(Fields.SenderCompID) === sessionId.split('->')[0] ? 'out' : 'in';
      await this[direction === 'out' ? 'storeOutgoing' : 'storeIncoming'](sessionId, seqNum, message);
    } catch (error) {
      Logger.error(`[${sessionId}] Failed to store message: ${error}`);
      throw error;
    }
  }

  /**
   * Get messages for a session between sequence numbers
   */
  async getMessages(sessionId: string, beginSeqNo: number, endSeqNo: number): Promise<Message[]> {
    const sessionMessages = this.messages.get(sessionId) || [];
    return sessionMessages.filter(msg => {
      const seqNum = parseInt(msg.getField(Fields.MsgSeqNum));
      return seqNum >= beginSeqNo && seqNum <= endSeqNo;
    });
  }

  /**
   * Get last sequence number for a session
   */
  async getLastSequenceNumber(sessionId: string): Promise<number> {
    const seqNums = this.sequenceNumbers.get(sessionId);
    return seqNums ? seqNums.outbound : 0;
  }
} 