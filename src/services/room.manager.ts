import { Injectable, Logger } from '@nestjs/common';

/**
 * Service for managing FIX session rooms and group messaging
 */
@Injectable()
export class RoomManager {
  private readonly logger = new Logger(RoomManager.name);
  private readonly rooms: Map<string, Set<string>> = new Map();
  private readonly sessionRooms: Map<string, Set<string>> = new Map();

  /**
   * Adds a session to a specified room
   * @param roomId Room identifier
   * @param sessionId Session identifier
   */
  join(roomId: string, sessionId: string): void {    
    this.initializeRoomIfNeeded(roomId);
    this.initializeSessionRoomsIfNeeded(sessionId);
    
    this.rooms.get(roomId).add(sessionId);
    this.sessionRooms.get(sessionId).add(roomId);
  }

  /**
   * Removes a session from a specified room
   * @param roomId Room identifier
   * @param sessionId Session identifier
   */
  leave(roomId: string, sessionId: string): void {
    this.logger.debug(`Removing session ${sessionId} from room ${roomId}`);
    
    this.removeFromRoom(roomId, sessionId);
    this.removeRoomFromSession(roomId, sessionId);
  }

  /**
   * Removes a session from all rooms it belongs to
   * @param sessionId Session identifier
   */
  leaveAllRooms(sessionId: string): void {
    this.logger.debug(`Removing session ${sessionId} from all rooms`);
    const rooms = this.sessionRooms.get(sessionId);
    
    if (rooms) {
      rooms.forEach(roomId => this.leave(roomId, sessionId));
    }
  }

  /**
   * Gets all session IDs in a specified room
   * @param roomId Room identifier
   * @returns Array of session IDs
   */
  getSessionsInRoom(roomId: string): string[] {
    return Array.from(this.rooms.get(roomId) || new Set());
  }

  /**
   * Gets all rooms a session belongs to
   * @param sessionId Session identifier
   * @returns Array of room IDs
   */
  getSessionRooms(sessionId: string): string[] {
    return Array.from(this.sessionRooms.get(sessionId) || new Set());
  }

  /**
   * Checks if a session is in a specific room
   * @param roomId Room identifier
   * @param sessionId Session identifier
   * @returns boolean indicating membership
   */
  isInRoom(roomId: string, sessionId: string): boolean {
    return this.rooms.get(roomId)?.has(sessionId) || false;
  }

  private initializeRoomIfNeeded(roomId: string): void {
    if (!this.rooms.has(roomId)) {
      this.rooms.set(roomId, new Set());
    }
  }

  private initializeSessionRoomsIfNeeded(sessionId: string): void {
    if (!this.sessionRooms.has(sessionId)) {
      this.sessionRooms.set(sessionId, new Set());
    }
  }

  private removeFromRoom(roomId: string, sessionId: string): void {
    const room = this.rooms.get(roomId);
    if (room) {
      room.delete(sessionId);
      if (room.size === 0) {
        this.rooms.delete(roomId);
      }
    }
  }

  private removeRoomFromSession(roomId: string, sessionId: string): void {
    const sessionRooms = this.sessionRooms.get(sessionId);
    if (sessionRooms) {
      sessionRooms.delete(roomId);
      if (sessionRooms.size === 0) {
        this.sessionRooms.delete(sessionId);
      }
    }
  }
}