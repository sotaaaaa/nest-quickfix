import { RoomManager } from './../services/room.manager';
import { EventEmitter } from 'events';
import { Socket } from 'net';
import { Session, SessionConfig } from '../session/session';
import { InitiatorConfig } from './initiator.config';
import { Message } from '../message/message';
import { InitiatorEvents, SessionEvents } from '../constants/events.constant';
import { SessionManager } from '../session/session.manager';
import { Logger } from '@nestjs/common';

/**
 * FIX Initiator implementation
 * Manages connection to a FIX acceptor and the associated session
 */
export class FIXInitiator extends EventEmitter {
  private session: Session;
  private socket: Socket;
  private reconnectTimer: NodeJS.Timeout;
  private reconnectAttempts: number = 0;
  private sessionManager: SessionManager;

  constructor(
    private readonly config: InitiatorConfig,
    private readonly roomManager: RoomManager,
  ) {
    super();
    this.sessionManager = new SessionManager(
      config?.session?.maxSessions,
      roomManager,
    );
    this.setupSession();
  }

  /**
   * Starts the initiator and connects to the acceptor
   */
  async start(): Promise<void> {
    try {
      await this.connect();
      await this.session.logon();
      this.emit(InitiatorEvents.STARTED);
    } catch (error) {
      this.emit(InitiatorEvents.ERROR, error);

      if (this.config.reconnect?.enabled) {
        this.scheduleReconnect();
      } else {
        throw error;
      }
    }
  }

  /**
   * Stops the initiator and closes the connection
   */
  async stop(): Promise<void> {
    clearInterval(this.reconnectTimer);

    if (this.session) {
      await this.session.logout();
    }

    if (this.socket) {
      this.socket.destroy();
    }

    this.emit(InitiatorEvents.STOPPED);
  }

  /**
   * Sends a message through the session
   */
  async sendMessage(message: Message): Promise<void> {
    if (!this.session) {
      throw new Error('No active session');
    }
    await this.session.sendMessage(message);
  }

  private setupSession(): void {
    const sessionConfig: SessionConfig = {
      senderCompId: this.config.SenderCompID,
      targetCompId: this.config.TargetCompID,
      heartbeatInterval: this.config.HeartBtInt,
      beginString: this.config.BeginString,
      storeConfig: {
        type: 'memory',
        sessionPrefix: 'fix:session:',
      },
    };

    this.socket = new Socket();
    this.session = this.createSession(sessionConfig, this.socket);

    // Handle session events
    this.session.on(SessionEvents.MESSAGE_IN, (msg) =>
      this.emit(InitiatorEvents.MESSAGE, msg),
    );
    this.session.on(SessionEvents.ERROR, (err) =>
      this.emit(InitiatorEvents.ERROR, err),
    );
    this.session.on(SessionEvents.LOGGING_ON, () =>
      this.emit(InitiatorEvents.LOGGING_ON),
    );
    this.session.on(SessionEvents.LOGGED_ON, () =>
      this.emit(InitiatorEvents.LOGGED_ON),
    );
  }

  private async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.socket.on('connect', () => {
        resolve();
      });

      this.socket.on('error', (error) => {
        reject(error);
      });

      this.socket.on('data', (data) => {
        // Handle incoming data
        // Parse FIX messages and pass to session
      });

      this.socket.connect({
        host: this.config.application.tcp.host,
        port: this.config.application.tcp.port,
      });
    });
  }

  private scheduleReconnect(): void {
    const { interval, maxAttempts } = this.config?.reconnect || {
      interval: 5000,
      maxAttempts: 3,
    };

    if (this.reconnectAttempts >= maxAttempts) {
      this.emit(InitiatorEvents.MAX_RECONNECT_ATTEMPTS);
      return;
    }

    this.reconnectTimer = setTimeout(async () => {
      this.reconnectAttempts++;
      try {
        await this.start();
      } catch (error) {
        this.emit(InitiatorEvents.RECONNECT_FAILED, error);
      }
    }, interval);
  }

  private handleReconnect(): void {
    // Early return if reconnect is not enabled
    if (!this.config.reconnect?.enabled) return;

    // Get reconnect config with default values
    const reconnectConfig = {
      interval: this.config.reconnect?.interval || 5000,
      maxAttempts: this.config.reconnect?.maxAttempts || 3,
    };

    let attempts = 0;
    const reconnectInterval = setInterval(async () => {
      if (attempts >= reconnectConfig.maxAttempts) {
        clearInterval(reconnectInterval);
        this.emit(InitiatorEvents.MAX_RECONNECT_ATTEMPTS);
        return;
      }

      try {
        attempts++;
        await this.connect();
        clearInterval(reconnectInterval);
      } catch (error) {
        this.emit(InitiatorEvents.RECONNECT_FAILED, {
          attempt: attempts,
          error,
        });
      }
    }, reconnectConfig.interval);
  }

  private createSession(config: SessionConfig, socket: Socket): Session {
    Logger.debug(`Creating new session with config: ${JSON.stringify(config)}`);
    return new Session(config, socket, this.roomManager, this.sessionManager);
  }
}
