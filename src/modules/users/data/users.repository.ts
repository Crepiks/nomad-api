import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDao } from 'src/common/dao/user.dao';
import { User } from 'src/common/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserDao)
    private readonly usersRepository: Repository<UserDao>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  async findById(userId: number): Promise<User> {
    const user = await this.usersRepository.findOne(userId);
    return {
      id: user.id,
      firstName: user.firstName,
    };
  }
}
