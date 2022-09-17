import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './account/account.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RecordModule } from './record/record.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASSWORD,
        },
      },
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    AccountModule,
    UserModule,
    AuthModule,
    RecordModule,
    EmailModule,
  ],
  providers: [EmailService],
  controllers: [EmailController],
})
export class AppModule {}
