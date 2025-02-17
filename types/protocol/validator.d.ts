import { Message } from "../message/message";
export declare class FIX44Validator {
    static validateRequiredFields(message: Message): void;
    static validateFieldOrder(message: Message): boolean;
    static validateFieldValues(message: Message): void;
    private static validateLogon;
}
