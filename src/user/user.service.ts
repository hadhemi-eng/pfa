import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(user: User) {
    (await this.userModel.create(user)).save();
  }

  async findByEmail(email: string) {
    return this.userModel
      .findOne({
        email,
      })
      .exec();
  }
}
