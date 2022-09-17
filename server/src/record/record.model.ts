import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Account } from '../account/account.model';

export type RecordDocument = Record & Document;

@Schema()
export class Record {
  @Prop()
  category: string;

  @Prop()
  amount: number;

  @Prop()
  label: string;

  @Prop({ type: Types.ObjectId, ref: 'Account' })
  accountId: Account;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
