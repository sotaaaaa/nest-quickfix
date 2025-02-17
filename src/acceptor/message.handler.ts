import { RoomManager } from './../services/room.manager';
import { Socket } from 'net';
import { Logger } from '@nestjs/common';
import { Field, Message } from '../message/message';
import { Fields, MsgType } from '../fields';
import { SessionManager } from '../session/session.manager';
import { RejectMessage } from '../message/reject.message';
import { AcceptorConfig } from './acceptor.config';
import { format } from 'date-fns';
import { FixMetadataExplorer } from '../services/fix.metadata.explorer';
import { SessionConfig } from '../session/session.config';
import { Session } from '../session/session';
import { Injectable } from '@nestjs/common';

/**
 * Xử lý các message FIX trong Acceptor
 */
@Injectable()
export class AcceptorMessageHandler {
  constructor(
    private readonly sessionManager: SessionManager,
    private readonly config: AcceptorConfig,
    private readonly metadataExplorer: FixMetadataExplorer,
    private readonly roomManager: RoomManager,
  ) {}

  /**
   * Xử lý message logon
   */
  async handleLogon(socket: Socket, logon: Message): Promise<void> {
    const senderCompId = logon.getField(Fields.SenderCompID);
    const targetCompId = logon.getField(Fields.TargetCompID);

    try {
      let session = this.sessionManager.getSession(senderCompId, targetCompId);

      if (!session) {
        Logger.debug(`Creating new session for ${senderCompId}->${targetCompId}`);
        
        const sessionConfig: SessionConfig = {
          senderCompId,
          targetCompId,
          heartbeatInterval: parseInt(logon.getField(Fields.HeartBtInt)),
          beginString: this.config.BeginString,
          storeConfig: {
            type: 'memory',
            sessionPrefix: 'fix:session:',
          },
        };

        session = new Session(
          sessionConfig, 
          socket, 
          this.roomManager,
          this.sessionManager
        );

        // Đăng ký session trước khi xử lý handlers
        this.sessionManager.registerSession(session);

        // Register handlers
        const metadata = this.metadataExplorer.explore();
        for (const meta of metadata) {
          if (meta.onLogon) session.registerLogonHandler(meta.onLogon);
          if (meta.onLogout) session.registerLogoutHandler(meta.onLogout);
          if (meta.onConnected) session.registerConnectedHandler(meta.onConnected);
          if (meta.onDisconnected) session.registerDisconnectedHandler(meta.onDisconnected);
          if (meta.onMessage) {
            session.registerMessageHandler(meta.onMessage.handler, meta.onMessage.msgType);
          }
        }

        // Handle logon message
        await session.handleMessage(logon);
      }
    } catch (error) {
      Logger.error('Error handling logon:', error);
      socket.destroy();
    }
  }

  /**
   * Xử lý các message không phải logon
   */
  async handleNonLogonMessage(socket: Socket, message: Message): Promise<void> {
    if (!this.validateRequiredFields(message)) {
      Logger.error('Message missing required CompID fields');
      return;
    }

    const senderCompId = message.getField(Fields.SenderCompID);
    const targetCompId = message.getField(Fields.TargetCompID);

    const session = this.sessionManager.getSession(senderCompId, targetCompId);
    if (!session) {
      Logger.error(`No session found for ${senderCompId} -> ${targetCompId}`);
      this.sendReject(socket, message);
      return;
    }

    await session.handleMessage(message);
  }

  private validateRequiredFields(message: Message): boolean {
    return (
      message.hasField(Fields.SenderCompID) &&
      message.hasField(Fields.TargetCompID)
    );
  }

  private sendReject(socket: Socket, message: Message): void {
    const reject = new RejectMessage(
      message.getField(Fields.MsgSeqNum),
      'Session not found',
      message.getField(Fields.MsgType),
    );
    socket.write(reject.toString());
  }

  private async validateLogon(message: Message): Promise<boolean> {
    if (!this.config?.auth) return true;

    const account = message.getField(Fields.Account);
    const password = message.getField(Fields.Password);
    const senderCompId = message.getField(Fields.SenderCompID);

    // Validate credentials
    const isValid = await this.config.auth.validateCredentials(
      account,
      password,
    );
    if (!isValid) {
      Logger.error(`Invalid credentials for ${senderCompId}`);
      return false;
    }

    // Validate sender comp id is allowed for this user
    const allowedSenderCompIds =
      await this.config.auth.getAllowedSenderCompIds(account);

    if (!allowedSenderCompIds.includes(senderCompId)) {
      Logger.error(`SenderCompID ${senderCompId} not allowed for ${account}`);
      return false;
    }

    return true;
  }
}
