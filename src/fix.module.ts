import { DynamicModule, Module, OnModuleInit } from '@nestjs/common';
import {
  DiscoveryModule,
  DiscoveryService,
  MetadataScanner,
} from '@nestjs/core';
import { FIXAcceptor } from './acceptor/acceptor';
import { FIXInitiator } from './initiator/initiator';
import { MessageStore } from './store/message.store';
import { ProtocolManager } from './protocol/manager';
import { FIXModuleOptions } from './fix.options';
import { InitiatorConfig } from './initiator/initiator.config';
import { AcceptorConfig } from './acceptor/acceptor.config';
import { FixMetadataExplorer } from './services/fix.metadata.explorer';
import { FixService } from './services/fix.service';
import { RoomManager } from './services/room.manager';
import { SessionManager } from './session/session.manager';
import { MAX_SESSIONS } from './constants/tokens.constant';
import {
  FIX_OPTIONS,
  APP_TYPE,
  DISCOVERY_SERVICE,
  METADATA_SCANNER,
  DEFAULT_MAX_SESSIONS,
} from './constants/fix.constant';

/**
 * FIX Protocol Module
 * Provides FIX protocol functionality through NestJS DI system
 */
@Module({
  imports: [DiscoveryModule],
  providers: [
    FixMetadataExplorer,
    FixService,
    RoomManager,
    // Session Manager Provider
    {
      provide: SessionManager,
      useFactory: (roomManager: RoomManager) => {
        return new SessionManager(DEFAULT_MAX_SESSIONS, roomManager);
      },
      inject: [RoomManager],
    },
    // Discovery Service Provider
    {
      provide: DISCOVERY_SERVICE,
      useExisting: DiscoveryService,
    },
    // Metadata Scanner Provider
    {
      provide: METADATA_SCANNER,
      useFactory: () => new MetadataScanner(),
    },
    // Max Sessions Provider
    {
      provide: MAX_SESSIONS,
      useValue: DEFAULT_MAX_SESSIONS,
    },
  ],
  exports: [FIXAcceptor, FIXInitiator, FixService, RoomManager, SessionManager],
})
export class FIXModule implements OnModuleInit {
  constructor(
    private readonly metadataExplorer: FixMetadataExplorer,
    private readonly acceptor: FIXAcceptor,
    private readonly fixService: FixService,
    private readonly roomManager: RoomManager,
    private readonly sessionManager: SessionManager,
  ) {}

  /**
   * Register FIX module with configuration
   */
  static register(options: FIXModuleOptions): DynamicModule {
    return {
      module: FIXModule,
      imports: [DiscoveryModule],
      providers: [
        { provide: FIX_OPTIONS, useValue: options },
        FixMetadataExplorer,
        MessageStore,
        ProtocolManager,
        this.createAcceptorProvider(options),
        this.createInitiatorProvider(options),
        FixService,
        RoomManager,
        SessionManager,
        { provide: MAX_SESSIONS, useValue: DEFAULT_MAX_SESSIONS },
      ],
      exports: [
        FIXAcceptor,
        FIXInitiator,
        FixService,
        RoomManager,
        SessionManager,
      ],
    };
  }

  /**
   * Initialize module and register handlers with sessions
   */
  async onModuleInit() {
    if (!this.acceptor) return;

    const metadata = this.metadataExplorer.explore();
    const sessionManager = this.acceptor.getSessionManager();

    // Register logon handlers with all sessions
    metadata.forEach((meta) => {
      if (meta.onLogon) {
        sessionManager.getAllSessions().forEach((session) => {
          session.registerLogonHandler(meta.onLogon);
        });
      }
    });
  }

  /**
   * Create provider for FIX acceptor
   */
  private static createAcceptorProvider(options: FIXModuleOptions) {
    return {
      provide: FIXAcceptor,
      useFactory: (
        discoveryService: DiscoveryService,
        metadataScanner: MetadataScanner,
        roomManager: RoomManager,
        sessionManager: SessionManager,
        fixOptions: FIXModuleOptions,
      ) => {
        if (fixOptions.config.application.type !== APP_TYPE.ACCEPTOR) {
          return null;
        }

        const acceptorConfig: AcceptorConfig = {
          ...fixOptions.config,
          auth: fixOptions?.auth,
          session: fixOptions?.session,
        };

        return new FIXAcceptor(
          acceptorConfig,
          discoveryService,
          metadataScanner,
          roomManager,
          sessionManager,
        );
      },
      inject: [
        DISCOVERY_SERVICE,
        METADATA_SCANNER,
        RoomManager,
        SessionManager,
        FIX_OPTIONS,
      ],
    };
  }

  /**
   * Create provider for FIX initiator
   */
  private static createInitiatorProvider(options: FIXModuleOptions) {
    return {
      provide: FIXInitiator,
      useFactory: (roomManager: RoomManager) => {
        if (options.config.application.type !== APP_TYPE.INITIATOR) {
          return null;
        }
        return new FIXInitiator(options.config as InitiatorConfig, roomManager);
      },
      inject: [RoomManager],
    };
  }
}

export default FIXModule;
