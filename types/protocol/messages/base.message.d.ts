import { Message, Field } from '../../message/message';
export declare abstract class BaseMessage extends Message {
    constructor(...fields: Field[]);
}
