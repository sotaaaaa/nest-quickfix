import { Message } from '../../message/message';
import { Fields } from '../../fields';
import { ChecksumValidator } from './checksum.validator';
import { ParserError } from '../../common/errors';

export class FIXMessageParser {
  private static SOH = '\x01';
  private buffer: string = '';

  /**
   * Parse raw FIX message string into Message object
   */
  parse(rawMessage: string): Message {
    try {
      // Validate basic format
      if (!this.isValidMessageFormat(rawMessage)) {
        throw new ParserError('Invalid message format');
      }

      // Parse fields
      const fields = this.parseFields(rawMessage);
      
      // Create message
      const message = new Message();
      fields.forEach((value, tag) => {
        message.setField(tag, value);
      });

      // Validate checksum
      if (!ChecksumValidator.validate(message)) {
        throw new ParserError('Invalid checksum');
      }

      return message;
    } catch (error) {
      throw new ParserError(`Failed to parse message: ${error.message}`);
    }
  }

  /**
   * Handle incoming data chunks
   */
  processData(data: Buffer): Message[] {
    const messages: Message[] = [];
    
    // Add data to buffer
    this.buffer += data.toString();

    // Process complete messages
    let endIndex: number;
    while ((endIndex = this.buffer.indexOf(FIXMessageParser.SOH)) !== -1) {
      const rawMessage = this.buffer.substring(0, endIndex + 1);
      this.buffer = this.buffer.substring(endIndex + 1);

      try {
        const message = this.parse(rawMessage);
        messages.push(message);
      } catch (error) {
        // Log error but continue processing
        console.error('Failed to parse message:', error);
      }
    }

    return messages;
  }

  private isValidMessageFormat(message: string): boolean {
    // Check begin string
    if (!message.startsWith('8=FIX')) {
      return false;
    }

    // Check body length
    const bodyLengthMatch = message.match(/9=(\d+)\x01/);
    if (!bodyLengthMatch) {
      return false;
    }

    const declaredLength = parseInt(bodyLengthMatch[1]);
    const actualLength = this.calculateBodyLength(message);
    
    return declaredLength === actualLength;
  }

  private parseFields(message: string): Map<Fields, string> {
    const fields = new Map<Fields, string>();
    const pairs = message.split(FIXMessageParser.SOH);

    pairs.forEach(pair => {
      if (!pair) return;
      const [tag, value] = pair.split('=');
      fields.set(parseInt(tag) as Fields, value);
    });

    return fields;
  }

  private calculateBodyLength(message: string): number {
    const start = message.indexOf('9=') + 2;
    const end = message.lastIndexOf(FIXMessageParser.SOH);
    return end - start;
  }
} 