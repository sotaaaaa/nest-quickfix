import { Injectable, Logger } from '@nestjs/common';
import { Message } from '../message/message';
import { MessageStore } from '../store/message.store';

/**
 * Manages message recovery and session state persistence
 */
@Injectable()
export class RecoveryManager {
  private readonly logger = new Logger(RecoveryManager.name);

  constructor(
    private readonly store: MessageStore,
    private readonly sessionId: string,
  ) {}

  /**
   * Retrieves messages for recovery
   */
  async getMessages(beginSeqNo: number, endSeqNo: number): Promise<Message[]> {
    try {
      const messages = await this.store.getMessages(this.sessionId, beginSeqNo, endSeqNo);
      this.logger.debug(`Retrieved ${messages.length} messages for recovery`);
      return messages;
    } catch (error) {
      this.logger.error('Failed to get messages for recovery:', error);
      throw error;
    }
  }

  /**
   * Stores message for potential recovery
   */
  async storeMessage(message: Message): Promise<void> {
    try {
      await this.store.storeMessage(this.sessionId, message);
    } catch (error) {
      this.logger.error('Failed to store message:', error);
      throw error;
    }
  }

  /**
   * Gets last sequence number from store
   */
  async getLastSequenceNumber(): Promise<number> {
    try {
      const lastSeqNum = await this.store.getLastSequenceNumber(this.sessionId);
      this.logger.debug(`Last sequence number: ${lastSeqNum}`);
      return lastSeqNum;
    } catch (error) {
      this.logger.error('Failed to get last sequence number:', error);
      throw error;
    }
  }

  /**
   * Backs up session data
   */
  async backup(): Promise<void> {
    try {
      await this.store.backup(this.sessionId);
      this.logger.debug('Session data backed up successfully');
    } catch (error) {
      this.logger.error('Failed to backup session data:', error);
      throw error;
    }
  }

  /**
   * Recovers session data from backup
   */
  async recover(timestamp: string): Promise<void> {
    try {
      await this.store.recover(this.sessionId, timestamp);
      this.logger.debug(`Session data recovered from ${timestamp}`);
    } catch (error) {
      this.logger.error('Failed to recover session data:', error);
      throw error;
    }
  }
} 