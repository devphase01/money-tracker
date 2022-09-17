import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find().populate({
      path: 'accounts',
      populate: 'records',
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).populate({
      path: 'accounts',
      populate: 'records',
    });
  }

  async updateEmailStatus(email: string, isConfirm: boolean) {
    const user = await this.userModel.findOneAndUpdate(
      { email },
      { isConfirmed: isConfirm },
    );
    return await user.save();
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto);
  }
}
