import { Message } from '../../message/message';
export declare class ChecksumValidator {
    private static SOH;
    static validate(message: Message): boolean;
    private static calculateChecksum;
}
