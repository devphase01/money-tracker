import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AccountDocument, Account } from './account.model';
import { Model } from 'mongoose';
import { CreateAccountDto } from './dto/create-account.dto';
import { User, UserDocument } from '../user/user.model';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async getAll(): Promise<Account[]> {
    return this.accountModel.find().populate('records').exec();
  }

  async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
    const account = await this.accountModel.create(createAccountDto);
    const user = await this.userModel.findById(createAccountDto.userId);
    user.accounts.push(account._id);
    await user.save();
    return account;
  }

  async deleteAccount(id: string) {
    const account = await this.accountModel.findByIdAndDelete(id);
    if (!account)
      throw new HttpException('User is not exist', HttpStatus.BAD_REQUEST);
    return account;
  }

  async updateAccount(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<Account> {
    const account = await this.accountModel.findByIdAndUpdate({
      _id: id,
      ...updateAccountDto,
    });
    if (!account)
      throw new HttpException('Account is not exist', HttpStatus.BAD_REQUEST);
    return await account.save();
  }
}
