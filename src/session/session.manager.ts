import { Injectable, Logger, Inject, Optional } from '@nestjs/common';
import { RoomManager } from '../services/room.manager';
import { Session } from './session';
import { SessionConfig } from './session.config';
import { Message } from '../message/message';
import { Fields } from '../fields';
import { Socket } from 'net';
import { MAX_SESSIONS } from '../constants/tokens.constant';

/**
 * Manages FIX sessions and their lifecycle
 */
@Injectable()
export class SessionManager {
  private readonly logger = new Logger(SessionManager.name);
  private readonly sessions: Map<string, Session> = new Map();
  private readonly DUPLICATE_SESSION_LOGOUT_REASON = 'Duplicate session detected - logging out existing session';

  constructor(
    @Optional() @Inject(MAX_SESSIONS) private readonly maxSessions: number = 0,
    private readonly roomManager: RoomManager,
  ) {}

  /**
   * Creates a new session for initiator connection
   */
  createSession(config: SessionConfig, socket: Socket): Session {
    const sessionId = `${config.senderCompId}->${config.targetCompId}`;

    if (this.maxSessions && this.sessions.size >= this.maxSessions) {
      throw new Error('Maximum number of sessions reached');
    }

    const session = new Session(config, socket, this.roomManager, this);
    this.sessions.set(sessionId, session);
    return session;
  }

  /**
   * Gets session by sender and target CompIDs
   */
  getSession(senderCompId: string, targetCompId: string): Session | undefined {
    const sessionId = `${senderCompId}->${targetCompId}`;
    return this.sessions.get(sessionId);
  }

  /**
   * Gets session from logon message
   */
  getSessionFromLogon(logon: Message): Session | undefined {
    const senderCompId = logon.getField(Fields.SenderCompID);
    const targetCompId = logon.getField(Fields.TargetCompID);
    return this.getSession(senderCompId, targetCompId);
  }

  /**
   * Removes a session
   */
  removeSession(sessionId: string): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      this.roomManager.leaveAllRooms(sessionId);
      this.sessions.delete(sessionId);
      this.logger.debug(`Session ${sessionId} removed`);
    }
  }

  /**
   * Closes all active sessions
   */
  async closeAll(): Promise<void> {
    const closePromises = Array.from(this.sessions.values()).map((session) =>
      session.logout(),
    );
    await Promise.all(closePromises);
    this.sessions.clear();
    this.logger.debug('All sessions closed');
  }

  /**
   * Gets number of active sessions
   */
  getSessionCount(): number {
    return this.sessions.size;
  }

  /**
   * Gets all active sessions
   */
  getAllSessions(): Session[] {
    return Array.from(this.sessions.values());
  }

  /**
   * Gets session by ID
   */
  getSessionById(sessionId: string): Session | undefined {
    const session = this.sessions.get(sessionId);
    if (!session) {
      this.logger.warn(`Session not found: ${sessionId}`);
    }
    return session;
  }

  /**
   * Registers a new session
   */
  async registerSession(session: Session): Promise<void> {
    const sessionId = session.getSessionId();
    
    // Check if session already exists
    if (this.sessions.has(sessionId)) {
      this.logger.warn(`Session ${sessionId} already exists, logging out old session...`);
      const oldSession = this.sessions.get(sessionId);
      
      try {
        // Logout old session with reason
        await oldSession.logout(this.DUPLICATE_SESSION_LOGOUT_REASON);
      } catch (error) {
        this.logger.error(`Error logging out old session ${sessionId}:`, error);
      }
    }

    // Check max sessions limit
    if (this.maxSessions && this.sessions.size >= this.maxSessions) {
      throw new Error(`Maximum number of sessions (${this.maxSessions}) reached`);
    }

    this.sessions.set(sessionId, session);
    this.logger.debug(`Session ${sessionId} registered successfully`);
  }
}
