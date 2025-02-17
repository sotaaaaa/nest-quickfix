import { Message } from '../../message/message';
import { Fields } from '../../fields';

export class ChecksumValidator {
  private static SOH = '\x01';

  static validate(message: Message): boolean {
    const checksum = message.getField(Fields.CheckSum);
    const calculatedChecksum = this.calculateChecksum(message);
    return checksum === calculatedChecksum;
  }

  private static calculateChecksum(message: Message): string {
    // Convert message to FIX string format without checksum field
    let messageString = '';
    message.getAllFields().forEach((value, field) => {
      if (field !== Fields.CheckSum) {
        messageString += `${field}=${value}${this.SOH}`;
      }
    });

    // Calculate checksum
    let sum = 0;
    for (let i = 0; i < messageString.length; i++) {
      sum += messageString.charCodeAt(i);
    }
    sum = sum % 256;

    // Return as 3-digit string
    return sum.toString().padStart(3, '0');
  }
} 