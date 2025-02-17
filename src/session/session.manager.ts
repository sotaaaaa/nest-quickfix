import { RoomManager } from './../services/room.manager';
import { Session } from './session';
import { SessionConfig } from './session.config';
import { Message } from '../message/message';
import { Fields } from '../fields';
import { Socket } from 'net';
import { Logger } from '@nestjs/common';
import { Injectable, Inject, Optional } from '@nestjs/common';
import { MAX_SESSIONS } from '../constants/tokens.constant';

@Injectable()
export class SessionManager {
  private sessions: Map<string, Session> = new Map();

  constructor(
    @Optional() @Inject(MAX_SESSIONS) private readonly maxSessions: number = 0,
    private readonly roomManager: RoomManager
  ) {
    Logger.debug('SessionManager initialized with sessions:', Array.from(this.sessions.keys()));
  }

  /**
   * Create new session for an initiator connection
   */
  createSession(config: SessionConfig, socket: Socket): Session {
    const sessionId = `${config.senderCompId}->${config.targetCompId}`;
    Logger.debug(`Creating new session with ID: ${sessionId}`);

    if (this.maxSessions && this.sessions.size >= this.maxSessions) {
      throw new Error('Maximum number of sessions reached');
    }

    const session = new Session(config, socket, this.roomManager, this);
    this.sessions.set(sessionId, session);

    Logger.debug(`Session created and stored. Current sessions: ${Array.from(this.sessions.keys())}`);
    return session;
  }

  /**
   * Get session by sender and target CompIDs
   */
  getSession(senderCompId: string, targetCompId: string): Session | undefined {
    const sessionId = `${senderCompId}->${targetCompId}`;
    return this.sessions.get(sessionId);
  }

  /**
   * Get session by logon message
   */
  getSessionFromLogon(logon: Message): Session | undefined {
    const senderCompId = logon.getField(Fields.SenderCompID);
    const targetCompId = logon.getField(Fields.TargetCompID);
    return this.getSession(senderCompId, targetCompId);
  }

  /**
   * Remove session
   */
  removeSession(sessionId: string): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      // Leave all rooms before removing
      this.roomManager.leaveAllRooms(sessionId);
      this.sessions.delete(sessionId);
    }
  }

  /**
   * Close all sessions
   */
  async closeAll(): Promise<void> {
    const closePromises = Array.from(this.sessions.values()).map((session) =>
      session.logout(),
    );
    await Promise.all(closePromises);
    this.sessions.clear();
  }

  /**
   * Get number of active sessions
   */
  getSessionCount(): number {
    return this.sessions.size;
  }

  /**
   * Get all active sessions
   */
  getAllSessions(): Session[] {
    return Array.from(this.sessions.values());
  }

  getSessionById(sessionId: string): Session | undefined {
    const session = this.sessions.get(sessionId);
    if (!session) {
      Logger.warn(`Session not found with ID: ${sessionId}`);
      Logger.debug(`Available sessions: ${Array.from(this.sessions.keys())}`);
    }
    return session;
  }

  registerSession(session: Session): void {
    const sessionId = session.getSessionId();
    Logger.debug(`Registering session with ID: ${sessionId}`);
    this.sessions.set(sessionId, session);
    Logger.debug(`Current sessions after registration: ${Array.from(this.sessions.keys())}`);
  }
}
