import { DynamicModule } from '@nestjs/common';
import { FIXModuleOptions } from './fix.options';
export declare const FIX_OPTIONS = "FIX_OPTIONS";
export declare const APP_TYPE: {
    readonly ACCEPTOR: "acceptor";
    readonly INITIATOR: "initiator";
};
export declare class FIXModule {
    static register(options: FIXModuleOptions): DynamicModule;
    private static createAcceptorProvider;
    private static createInitiatorProvider;
}
