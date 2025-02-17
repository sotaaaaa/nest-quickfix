import { Message } from '../message/message';
import { MessageStore } from '../store/message.store';
import { Logger } from '@nestjs/common';

export class RecoveryManager {
  constructor(
    private readonly store: MessageStore,
    private readonly sessionId: string
  ) {}

  /**
   * Get messages for recovery
   */
  async getMessages(beginSeqNo: number, endSeqNo: number): Promise<Message[]> {
    try {
      const messages = await this.store.getMessages(this.sessionId, beginSeqNo, endSeqNo);
      Logger.debug(`[${this.sessionId}] Retrieved ${messages.length} messages for recovery`);
      return messages;
    } catch (error) {
      Logger.error(`[${this.sessionId}] Failed to get messages for recovery: ${error}`);
      throw error;
    }
  }

  /**
   * Store message for recovery
   */
  async storeMessage(message: Message): Promise<void> {
    try {
      await this.store.storeMessage(this.sessionId, message);
    } catch (error) {
      Logger.error(`[${this.sessionId}] Failed to store message for recovery: ${error}`);
      throw error;
    }
  }

  /**
   * Get last sequence number
   */
  async getLastSequenceNumber(): Promise<number> {
    try {
      const lastSeqNum = await this.store.getLastSequenceNumber(this.sessionId);
      Logger.debug(`[${this.sessionId}] Last sequence number: ${lastSeqNum}`);
      return lastSeqNum;
    } catch (error) {
      Logger.error(`[${this.sessionId}] Failed to get last sequence number: ${error}`);
      throw error;
    }
  }

  /**
   * Backup session data
   */
  async backup(): Promise<void> {
    try {
      await this.store.backup(this.sessionId);
      Logger.debug(`[${this.sessionId}] Session data backed up`);
    } catch (error) {
      Logger.error(`[${this.sessionId}] Failed to backup session data: ${error}`);
      throw error;
    }
  }

  /**
   * Recover session data
   */
  async recover(timestamp: string): Promise<void> {
    try {
      await this.store.recover(this.sessionId, timestamp);
      Logger.debug(`[${this.sessionId}] Session data recovered from ${timestamp}`);
    } catch (error) {
      Logger.error(`[${this.sessionId}] Failed to recover session data: ${error}`);
      throw error;
    }
  }
} 