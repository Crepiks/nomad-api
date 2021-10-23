import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/common/entities/user';
import { UsersRepository } from '../data/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
