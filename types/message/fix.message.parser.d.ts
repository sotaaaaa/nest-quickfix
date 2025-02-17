import { Message } from './message';
export declare class FIXMessageParser {
    private static SOH;
    private buffer;
    parse(rawMessage: string): Message;
    processData(data: Buffer): Message[];
    private isValidMessageFormat;
    private parseFields;
}
