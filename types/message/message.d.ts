import { Fields } from '../fields';
export interface MessageJSON {
    fields: {
        [key in Fields]?: any;
    };
}
export declare class Field<T = any> {
    readonly tag: Fields;
    readonly value: T;
    constructor(tag: Fields, value: T);
    toJSON(): {
        tag: Fields;
        value: T;
    };
}
export declare class Message {
    private fields;
    private readonly SOH;
    constructor(...fields: Field[]);
    static createMessage(...fields: Field[]): Message;
    setField(field: Fields, value: any): void;
    getField<T = any>(field: Fields): T;
    hasField(field: Fields): boolean;
    getAllFields(): Map<Fields, any>;
    setFields(...fields: Field[]): void;
    toString(): string;
    clone(): Message;
    removeField(field: Fields): void;
    clear(): void;
    get length(): number;
    isEmpty(): boolean;
    toJSON(): MessageJSON;
    static fromJSON(json: MessageJSON): Message;
    stringify(): string;
    static parse(jsonString: string): Message;
    toObject(): Record<string, any>;
    static fromObject(obj: Record<string, any>): Message;
}
