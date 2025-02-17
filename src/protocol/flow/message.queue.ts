import { Message } from '../../message/message';
import { PriorityQueue } from '../../common/priority.queue';
import { EventEmitter } from 'events';
import { Session } from '../../session/session';
import { SessionManager } from '../../session/session.manager';
import { Fields } from '../../fields';

export interface MessageQueueConfig {
  maxBatchSize?: number;
  processInterval?: number;
  maxRetries?: number;
  retryDelay?: number;
  maxMessagesPerSecond?: number;
}

// Thêm interface cho Message với retry count
interface QueueMessage extends Message {
  retryCount?: number;
}

export class MessageQueue extends EventEmitter {
  private queue: PriorityQueue<QueueMessage>;
  private processing: boolean = false;
  private readonly maxBatchSize: number;
  private readonly processInterval: number;
  private maxRetries: number;
  private retryDelay: number;
  private paused: boolean = false;
  private readonly maxMessagesPerSecond: number;
  private messageCount: number = 0;
  private lastResetTime: number = Date.now();

  private queueMetrics = {
    processedCount: 0,
    errorCount: 0,
    avgProcessingTime: 0,
  };

  private session: Session;

  constructor(
    config?: MessageQueueConfig,
    private readonly sessionManager?: SessionManager,
  ) {
    super();
    this.queue = new PriorityQueue<QueueMessage>();
    this.maxBatchSize = config?.maxBatchSize || 100;
    this.processInterval = config?.processInterval || 100;
    this.maxRetries = config?.maxRetries || 3;
    this.retryDelay = config?.retryDelay || 1000;
    this.maxMessagesPerSecond = config?.maxMessagesPerSecond || 1000;
    this.startProcessing();
  }

  enqueue(message: QueueMessage, priority: number = 1): void {
    const finalPriority = this.calculatePriority(message, priority);
    this.queue.enqueue(message, finalPriority);
  }

  private calculatePriority(
    message: QueueMessage,
    basePriority: number,
  ): number {
    return basePriority;
  }

  private startProcessing(): void {
    setInterval(() => {
      if (this.paused || this.processing || this.queue.isEmpty()) return;

      this.processing = true;
      this.processBatch().finally(() => {
        this.processing = false;
      });
    }, this.processInterval);
  }

  private async processBatch(): Promise<void> {
    const batch: QueueMessage[] = [];

    while (!this.queue.isEmpty() && batch.length < this.maxBatchSize) {
      const message = this.queue.dequeue();
      if (message) {
        batch.push(message);
      }
    }

    if (batch.length > 0) {
      await this.sendBatch(batch);
    }
  }

  private async sendBatch(messages: QueueMessage[]): Promise<void> {
    try {
      for (const message of messages) {
        await this.processMessage(message);
      }
    } catch (error) {
      this.handleSendError(error, messages);
    }
  }

  private async processMessage(message: QueueMessage): Promise<void> {
    const startTime = Date.now();
    try {
      // Validate message
      this.validateMessage(message);

      // Send to session
      await this.sendToSession(message);

      // Update metrics
      this.updateMetrics(Date.now() - startTime);
    } catch (error) {
      this.queueMetrics.errorCount++;
      throw error;
    }
  }

  private async handleSendError(
    error: Error,
    messages: QueueMessage[],
  ): Promise<void> {
    messages.forEach((msg) => {
      const retryCount = msg.retryCount || 0;
      if (retryCount <= this.maxRetries) {
        msg.retryCount = retryCount + 1;
        this.enqueue(msg, retryCount + 1);
      } else {
        this.handleFailedMessage(msg);
      }
    });
  }

  private handleFailedMessage(message: QueueMessage): void {
    this.emit('messageFailed', {
      message,
      retryCount: message.retryCount,
      error: new Error('Max retries exceeded'),
    });
    this.queueMetrics.errorCount++;
  }

  // Fix size() method call
  private emitQueueStatus(): void {
    this.emit('queueStatus', {
      size: this.getQueueSize(),
      processing: this.processing,
    });
  }

  private emitProcessingError(error: Error): void {
    this.emit('processingError', error);
  }

  private updateMetrics(processingTime: number): void {
    this.queueMetrics.processedCount++;
    this.queueMetrics.avgProcessingTime =
      (this.queueMetrics.avgProcessingTime + processingTime) / 2;
  }

  public pause(): void {
    this.paused = true;
  }

  public resume(): void {
    this.paused = false;
    this.startProcessing(); // Restart processing if needed
  }

  public async shutdown(): Promise<void> {
    this.paused = true;

    // Wait for current processing to complete
    while (this.processing) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    // Process remaining messages
    if (!this.queue.isEmpty()) {
      await this.processBatch();
    }
  }

  public getMetrics() {
    return {
      ...this.queueMetrics,
      currentQueueSize: this.getQueueSize(),
      isProcessing: this.processing,
      isPaused: this.paused,
    };
  }

  private getQueueSize(): number {
    return this.queue.getSize();
  }

  private validateMessage(message: QueueMessage): void {
    if (!message.hasField(Fields.MsgType)) {
      throw new Error('Missing MsgType field');
    }
  }

  private async sendToSession(message: QueueMessage): Promise<void> {
    const session = this.getSession(message);
    if (session) {
      await session.sendMessage(message);
    } else {
      throw new Error('No session available');
    }
  }

  private getSession(message: QueueMessage): Session | undefined {
    if (!this.sessionManager) return undefined;

    const senderCompId = message.getField(Fields.SenderCompID);
    const targetCompId = message.getField(Fields.TargetCompID);
    return this.sessionManager.getSession(senderCompId, targetCompId);
  }
}
