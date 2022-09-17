import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { UserModule } from '../user/user.module';
import { Account, AccountSchema } from './account.model';
import { User, UserSchema } from '../user/user.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Account.name, schema: AccountSchema },
      { name: User.name, schema: UserSchema },
    ]),
    UserModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
