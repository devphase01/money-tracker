import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { Record, RecordSchema } from './record.model';
import { Account, AccountSchema } from '../account/account.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Record.name, schema: RecordSchema },
      { name: Account.name, schema: AccountSchema },
    ]),
  ],
  providers: [RecordService],
  controllers: [RecordController],
})
export class RecordModule {}
