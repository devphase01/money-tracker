import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Account } from '../account/account.model';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({
    type: Types.ObjectId,
    example: 'ObjectId',
    description: 'Object ID',
  })
  _id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    type: String,
    example: 'devphase',
    description: 'Username',
  })
  @Prop()
  username: string;

  @ApiProperty({
    type: String,
    example: 'dev@gmail.com',
    description: 'Email address',
  })
  @Prop()
  email: string;

  @Prop()
  password: string;

  @ApiProperty({
    type: Boolean,
    example: false,
    description: 'Email status',
  })
  @Prop({ default: false })
  isConfirmed: boolean;

  @ApiProperty({
    type: [Account],
    example: '[]',
    description: 'Array of Accounts ID',
  })
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Account' }] })
  accounts: Account[];
}

export const UserSchema = SchemaFactory.createForClass(User);
