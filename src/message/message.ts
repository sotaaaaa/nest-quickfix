import { Fields } from '../fields';

/**
 * Interface for JSON representation of a FIX message
 */
export interface MessageJSON {
  fields: {
    [key in FieldType]?: any;
  };
}

// Export field type
export type FieldType = Fields | string | number;

/**
 * Represents a single FIX field
 */
export class Field<T = any> {
  constructor(
    public readonly tag: FieldType,
    public readonly value: T,
  ) {}

  toJSON(): { tag: FieldType; value: T } {
    return {
      tag: this.tag,
      value: this.value,
    };
  }
}

/**
 * Base Message class cho tất cả các loại message
 */
export class Message {
  private fields: Map<FieldType, any>;
  private readonly SOH = '\x01';

  constructor(...fields: Field[]) {
    this.fields = new Map();
    fields.forEach((field) => this.setField(field.tag, field.value));
  }

  /**
   * Tạo message mới với các fields được chỉ định
   */
  static createMessage(...fields: Field[]): Message {
    return new Message(...fields);
  }

  /**
   * Set giá trị cho một field
   * @param field Field cần set
   * @param value Giá trị của field
   */
  setField(field: FieldType, value: any): void {
    this.fields.set(field, value);
  }

  /**
   * Lấy giá trị của một field
   * @param field Field cần lấy giá trị
   * @returns Giá trị của field
   */
  getField<T = any>(field: FieldType): T {
    return this.fields.get(field);
  }

  /**
   * Kiểm tra field có tồn tại không
   * @param field Field cần kiểm tra
   * @returns true nếu field tồn tại
   */
  hasField(field: FieldType): boolean {
    return this.fields.has(field);
  }

  /**
   * Lấy tất cả các fields
   */
  getAllFields(): Map<FieldType, any> {
    return new Map(this.fields);
  }

  /**
   * Thêm nhiều fields cùng lúc
   */
  setFields(...fields: Field[]): void {
    fields.forEach((field) => this.setField(field.tag, field.value));
  }

  /**
   * Chuyển message thành FIX string
   */
  toString(): string {
    // Validate required fields first
    this.validateRequiredFields();

    const SOH = '\x01';
    let fixString = '';

    // 1. Begin String luôn là trường đầu tiên
    fixString += `8=${this.getField(Fields.BeginString)}${SOH}`;

    // Tạo message body (không bao gồm BeginString và Checksum)
    let bodyString = '';

    // 2. MsgType luôn là trường thứ 3 sau BodyLength
    bodyString += `35=${this.getField(Fields.MsgType)}${SOH}`;

    // 3. Các trường còn lại theo thứ tự
    const orderedFields = [
      Fields.SenderCompID,
      Fields.TargetCompID,
      Fields.MsgSeqNum,
      Fields.SendingTime,
    ] as FieldType[];

    // Thêm các trường theo thứ tự đã định
    orderedFields.forEach((field) => {
      if (this.hasField(field)) {
        bodyString += `${field}=${this.getField(field)}${SOH}`;
      }
    });

    // Thêm các trường còn lại
    this.fields.forEach((value, tag) => {
      if (
        tag !== Fields.BeginString &&
        tag !== Fields.BodyLength &&
        tag !== Fields.CheckSum &&
        tag !== Fields.MsgType &&
        !orderedFields.includes(tag)
      ) {
        bodyString += `${tag}=${value}${SOH}`;
      }
    });

    // 2. Tính và thêm BodyLength (độ dài của phần body)
    const bodyLength = bodyString.length;
    fixString += `9=${bodyLength}${SOH}`;

    // Thêm phần body vào message
    fixString += bodyString;

    // 4. Tính và thêm CheckSum cuối cùng
    const checksum = this.calculateChecksum(fixString);
    fixString += `10=${checksum}${SOH}`;

    return fixString;
  }

  /**
   * Tính checksum
   */
  private calculateChecksum(message: string): string {
    let sum = 0;
    for (let i = 0; i < message.length; i++) {
      sum += message.charCodeAt(i);
    }
    return (sum % 256).toString().padStart(3, '0');
  }

  /**
   * Clone message
   */
  clone(): Message {
    const cloned = new Message();
    this.fields.forEach((value, tag) => {
      cloned.setField(tag, value);
    });
    return cloned;
  }

  /**
   * Xóa một field
   */
  removeField(field: FieldType): void {
    this.fields.delete(field);
  }

  /**
   * Xóa tất cả fields
   */
  clear(): void {
    this.fields.clear();
  }

  /**
   * Số lượng fields trong message
   */
  get length(): number {
    return this.fields.size;
  }

  /**
   * Kiểm tra message có rỗng không
   */
  isEmpty(): boolean {
    return this.fields.size === 0;
  }

  /**
   * Chuyển message thành JSON object
   */
  toJSON(): MessageJSON {
    const json: MessageJSON = { fields: {} };
    this.fields.forEach((value, tag) => {
      json.fields[tag] = value;
    });
    return json;
  }

  /**
   * Tạo message từ JSON object
   */
  static fromJSON(json: MessageJSON): Message {
    const message = new Message();
    Object.entries(json.fields).forEach(([tag, value]) => {
      message.setField(Number(tag) as FieldType, value);
    });
    return message;
  }

  /**
   * Chuyển message thành JSON string
   */
  stringify(): string {
    return JSON.stringify(this.toJSON());
  }

  /**
   * Tạo message từ JSON string
   */
  static parse(jsonString: string): Message {
    try {
      const json = JSON.parse(jsonString) as MessageJSON;
      return Message.fromJSON(json);
    } catch (error) {
      throw new Error(`Failed to parse message from JSON: ${error.message}`);
    }
  }

  /**
   * Chuyển message thành plain object
   */
  toObject(): Record<string, any> {
    const obj: Record<string, any> = {};
    this.fields.forEach((value, tag) => {
      obj[tag.toString()] = value;
    });
    return obj;
  }

  /**
   * Tạo message từ plain object
   */
  static fromObject(obj: Record<string, any>): Message {
    const message = new Message();
    Object.entries(obj).forEach(([tag, value]) => {
      message.setField(Number(tag) as FieldType, value);
    });
    return message;
  }

  private validateRequiredFields(): void {
    const requiredFields = [
      Fields.BeginString,
      Fields.MsgType,
      Fields.SenderCompID,
      Fields.TargetCompID,
      Fields.MsgSeqNum,
      Fields.SendingTime,
    ];

    for (const field of requiredFields) {
      if (!this.hasField(field)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
  }

  /**
   * Tạo message phản hồi với SenderCompID và TargetCompID đã đảo ngược
   */
  createReverse(): Message {
    const reversed = new Message();

    // Copy tất cả các field
    this.fields.forEach((value, tag) => {
      reversed.setField(tag, value);
    });

    // Đảo ngược SenderCompID và TargetCompID
    const originalSender = this.getField(Fields.SenderCompID);
    const originalTarget = this.getField(Fields.TargetCompID);

    reversed.setField(Fields.SenderCompID, originalTarget);
    reversed.setField(Fields.TargetCompID, originalSender);

    return reversed;
  }
}
