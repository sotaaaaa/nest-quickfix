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
import { FixMetadataExplorer } from './services/fix.metadata.explorer';
import { FixService } from './services/fix.service';
import { RoomManager } from './services/room.manager';
import { SessionManager } from './session/session.manager';
import { MAX_SESSIONS } from './constants/tokens.constant';
import { Logger } from '@nestjs/common';

/** Injection tokens */
export const FIX_OPTIONS = 'FIX_OPTIONS';

/** Application types */
export const APP_TYPE = {
  ACCEPTOR: 'acceptor',
  INITIATOR: 'initiator',
} as const;

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
    {
      provide: SessionManager,
      useFactory: (roomManager: RoomManager) => {
        // Create a singleton instance
        const sessionManager = new SessionManager(100, roomManager);
        return sessionManager;
      },
      inject: [RoomManager]
    },
    {
      provide: FIXAcceptor,
      useFactory: (
        discoveryService: DiscoveryService,
        metadataScanner: MetadataScanner,
        roomManager: RoomManager,
        sessionManager: SessionManager,
        fixOptions: FIXModuleOptions,
      ) => {
        if (fixOptions.config.application.type === APP_TYPE.ACCEPTOR) {
          return new FIXAcceptor(
            fixOptions.config,
            discoveryService,
            metadataScanner,
            roomManager,
            sessionManager  // Pass the singleton SessionManager
          );
        }
        return null;
      },
      inject: [
        'DISCOVERY_SERVICE', 
        'METADATA_SCANNER', 
        RoomManager, 
        SessionManager,  // Inject SessionManager
        FIX_OPTIONS
      ],
    },
    {
      provide: 'DISCOVERY_SERVICE',
      useExisting: DiscoveryService,
    },
    {
      provide: 'METADATA_SCANNER',
      useFactory: () => new MetadataScanner(),
    },
    {
      provide: MAX_SESSIONS,
      useValue: 100,
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
        {
          provide: FIX_OPTIONS,
          useValue: options,
        },
        FixMetadataExplorer,
        MessageStore,
        ProtocolManager,
        this.createAcceptorProvider(options),
        this.createInitiatorProvider(options),
        FixService,
        RoomManager,
        SessionManager,
        {
          provide: MAX_SESSIONS,
          useValue: 100,
        },
      ],
      exports: [FIXAcceptor, FIXInitiator, FixService, RoomManager, SessionManager],
    };
  }

  async onModuleInit() {
    const metadata = this.metadataExplorer.explore();

    // Register handlers with sessions
    if (this.acceptor) {
      const sessionManager = this.acceptor.getSessionManager();
      metadata.forEach((meta) => {
        if (meta.onLogon) {
          sessionManager.getAllSessions().forEach((session) => {
            session.registerLogonHandler(meta.onLogon);
          });
        }
      });
    }
  }

  /** Create provider for FIX acceptor */
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
        if (fixOptions.config.application.type === APP_TYPE.ACCEPTOR) {
          return new FIXAcceptor(
            fixOptions.config,
            discoveryService,
            metadataScanner,
            roomManager,
            sessionManager  // Pass the singleton SessionManager
          );
        }
        return null;
      },
      inject: [
        'DISCOVERY_SERVICE', 
        'METADATA_SCANNER', 
        RoomManager, 
        SessionManager,  // Inject SessionManager
        FIX_OPTIONS
      ],
    };
  }

  /** Create provider for FIX initiator */
  private static createInitiatorProvider(options: FIXModuleOptions) {
    return {
      provide: FIXInitiator,
      useFactory: (roomManager: RoomManager) => {
        if (options.config.application.type === APP_TYPE.INITIATOR) {
          return new FIXInitiator(options.config as InitiatorConfig, roomManager);
        }
        return null;
      },
      inject: [RoomManager],
    };
  }
}

export default FIXModule;
