import { Message, Field } from '../../message/message';

export abstract class BaseMessage extends Message {
  constructor(...fields: Field[]) {
    super(...fields);
  }
} 