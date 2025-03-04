import { Injectable, Logger } from '@nestjs/common';
import { Message } from '../message/message';
import { SessionManager } from '../session/session.manager';
import { RoomManager } from './room.manager';
import { Session } from '../session/session';
import { Fields } from '../fields';
import { FixDateFormat } from '../common/date/fix.date';

/**
 * Service xử lý việc gửi tin nhắn FIX đến các nhóm session
 */
@Injectable()
export class FixService {
  private readonly logger = new Logger(FixService.name);
  private targetId: string | null = null;

  constructor(
    private readonly sessionManager: SessionManager,
    private readonly roomManager: RoomManager,
  ) {}

  /**
   * Thiết lập session đích để gửi tin nhắn
   * @param targetId - ID của session đích
   * @returns instance hiện tại để chain method
   */
  to(targetId: string): this {
    this.targetId = targetId;
    return this;
  }

  /**
   * Thêm các trường bắt buộc vào tin nhắn nếu chưa có
   * @param message - Tin nhắn FIX cần bổ sung
   * @param session - Session hiện tại
   */
  private addRequiredFields(message: Message, session: Session): void {
    const [senderCompId, targetCompId] = session.getSessionId().split('->');
    const sendingTime = FixDateFormat.formatDateTime(new Date());

    const defaultFields = {
      [Fields.BeginString]: 'FIX.4.4',
      [Fields.SenderCompID]: senderCompId,
      [Fields.TargetCompID]: targetCompId,
      [Fields.SendingTime]: sendingTime,
      [Fields.MsgSeqNum]: session.getNextOutgoingSeqNum().toString(),
    };

    // Thêm các trường mặc định nếu chưa có
    Object.entries(defaultFields).forEach(([fieldStr, value]) => {
      const field = Number(fieldStr) as Fields; // Convert string to Fields enum
      if (!message.hasField(field)) {
        message.setField(field, value);
      }
    });
  }

  /**
   * Gửi tin nhắn FIX đến session đã chỉ định
   * @param message - Tin nhắn FIX cần gửi
   * @throws Error nếu chưa chỉ định session đích
   */
  async send(message: Message): Promise<void> {
    if (!this.targetId) {
      throw new Error('Target ID must be specified using to() method');
    }

    try {
      const sessionIds = this.roomManager.getSessionsInRoom(this.targetId);

      // If no sessions found in room, log warning and return
      if (sessionIds.length === 0) {
        this.logger.warn(`No sessions found in room ${this.targetId}`);
        return;
      }

      await this.sendMessageToSessions(sessionIds, message);
    } catch (error) {
      this.logger.error('Error in FixService.send:', error);
    } finally {
      this.targetId = null;
    }
  }

  /**
   * Gửi tin nhắn đến danh sách các session
   * @param sessionIds - Danh sách ID của các session
   * @param message - Tin nhắn cần gửi
   */
  private async sendMessageToSessions(
    sessionIds: string[],
    message: Message,
  ): Promise<void> {
    const sendPromises = sessionIds.map(async (sessionId) => {
      const session = this.sessionManager.getSessionById(sessionId);

      if (!session) {
        this.logger.warn(
          `Session ${sessionId} not found in SessionManager. ` +
            `Available sessions: ${Array.from(
              this.sessionManager.getAllSessions(),
            ).map((s) => s.getSessionId())}`,
        );
        return;
      }

      try {
        this.addRequiredFields(message, session);
        await session.sendMessage(message);
      } catch (err) {
        this.logger.error(
          `Failed to send message to session ${sessionId}:`,
          err,
        );
      }
    });

    await Promise.all(sendPromises);
  }
}
