import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FIXModule } from '@sotatech/nest-quickfix';

@Module({
  imports: [
    FIXModule.register({
      config: {
        application: {
          name: 'NestJS',
          dictionary: 'FIX44',
          protocol: 'ascii',
          reconnectSeconds: 30,
          tcp: {
            host: 'localhost',
            port: 9876,
          },
          type: 'acceptor',
        },
        BeginString: 'FIX.4.4',
        BodyLengthChars: 10,
        EncryptMethod: 0,
        HeartBtInt: 30,
        Password: 'password',
        ResetSeqNumFlag: true,
        SenderCompID: '*',
        TargetCompID: 'MXVGWTD',
        Username: 'username',
      },
      store: {
        type: 'memory',
        sessionPrefix: 'fix:',
      },
      auth: {
        getAllowedSenderCompIds: async () => ['TVKD017', 'TVKD020'],
        validateCredentials: async (account: string, password: string) => {
          return account === 'account' && password === 'password';
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// const accounts = [
//   { account: 'username', password: 'password', memberCode: '123' },
//   { account: 'username2', password: 'password2', memberCode: '456' },
// ]

// @OnLogon()
// async onLogon(session: Session, message: Message) {
//   session.extraData = {
//     memberCode: "123"
//   }
// session.join("memberCode:account")
// }

// @OnFixMessage()
// async onFixMessage(session: Session, message: Message) {
//   const memberCode = message.investorCode.slice(0, 3)
//   const account = message.getFields(Field.Account)
//   session.to(memberCode:account).send(
//     new Field(MsgType, "D"),
//     new Field(OrdType, "1"),
//   )
// }

// @OnDisconnected()
// @OnConnected()
// @OnLogout()
// @OnMessageIn()
// @OnMessageOut()
