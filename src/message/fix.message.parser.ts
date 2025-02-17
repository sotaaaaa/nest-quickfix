import { Message } from './message';
import { Fields } from '../fields';
import { ParserError } from '../common/errors';
import { Logger } from '@nestjs/common';

export class FIXMessageParser {
  private SOH = '\x01';

  /**
   * Parse raw FIX message string into Message object
   */
  parse(rawMessage: string): Message {
    try {
      // Parse fields
      const fields = this.parseFields(rawMessage);

      // Create message
      const message = new Message();
      fields.forEach((value, tag) => {
        message.setField(tag, value);
      });

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
    const rawData = data.toString();
    
    // Split by complete messages (8=FIX... to checksum)
    const rawMessages = rawData.split(this.SOH + '8=');
    
    for (let rawMsg of rawMessages) {
      if (!rawMsg) continue;
      
      // Add back the BeginString tag if it was removed by split
      if (!rawMsg.startsWith('8=')) {
        rawMsg = '8=' + rawMsg;
      }

      try {
        const message = new Message();
        const fields = rawMsg.split(this.SOH);
        
        // Parse each field
        fields.forEach(field => {
          if (!field) return;
          const [tag, value] = field.split('=');
          if (tag && value) {
            // Ensure BeginString is always first
            if (tag === '8') {
              message.setField(Fields.BeginString, value);
            } else {
              message.setField(parseInt(tag), value);
            }
          }
        });

        // Validate required fields before adding to messages array
        if (!message.hasField(Fields.BeginString)) {
          throw new Error('Missing BeginString (tag 8)');
        }
        if (!message.hasField(Fields.MsgType)) {
          throw new Error('Missing MsgType (tag 35)');
        }

        messages.push(message);
      } catch (error) {
        Logger.error('Error parsing message:', error);
      }
    }

    return messages;
  }

  private parseFields(message: string): Map<Fields, string> {
    const fields = new Map<Fields, string>();
    const pairs = message.split(this.SOH);

    pairs.forEach((pair) => {
      if (!pair) return;
      const [tag, value] = pair.split('=');
      fields.set(parseInt(tag) as Fields, value);
    });

    return fields;
  }
}
