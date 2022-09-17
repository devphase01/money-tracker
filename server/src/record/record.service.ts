import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Record, RecordDocument } from './record.model';
import { CreateRecordDto } from './dto/create-record.dto';
import { Account, AccountDocument } from '../account/account.model';

@Injectable()
export class RecordService {
  constructor(
    @InjectModel(Record.name)
    private recordModel: Model<RecordDocument>,
    @InjectModel(Account.name)
    private accountModel: Model<AccountDocument>,
  ) {}

  async addRecord(createDto: CreateRecordDto) {
    const record = await this.recordModel.create(createDto);
    const account = await this.accountModel.findById(createDto.accountId);
    account.records.push(record._id);
    await account.save();
    return record;
  }
}
