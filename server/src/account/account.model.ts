import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId, Types, Document } from 'mongoose';
import { Record } from '../record/record.model';
import * as mongoose from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
  @ApiProperty({
    type: Types.ObjectId,
    example: 'ObjectId',
    description: 'Account ID',
  })
  _id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    type: String,
    example: 'Credit Card',
    description: 'Account name',
  })
  @Prop()
  name: string;

  @ApiProperty({
    type: String,
    example: 'credit',
    description: 'Account Type',
  })
  @Prop()
  type: string;

  @ApiProperty({
    type: String,
    example: 'UAH',
    description: 'Currency',
  })
  @Prop()
  currency: string;

  @ApiProperty({
    type: Number,
    example: 12000,
    description: 'Amount',
  })
  @Prop()
  amount: number;

  @ApiProperty({
    type: String,
    example: '#800080',
    description: 'Account background color',
  })
  @Prop()
  color: string;

  @ApiProperty({
    type: Types.ObjectId,
    example: 'UserID',
    description: 'User ID',
  })
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: ObjectId;

  @ApiProperty({
    type: [Types.ObjectId],
    example: '[recordID1, recordID2]',
    description: 'Array of Records ID',
  })
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Record' }] })
  records: Record[];
}

export const AccountSchema = SchemaFactory.createForClass(Account);
