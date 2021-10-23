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

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.find();
    return users.map((user) => this.mapUserDaoToEntity(user));
  }

  async findById(userId: string): Promise<User> {
    const user = await this.usersRepository.findOne(userId);
    if (!user) {
      return null;
    }

    return this.mapUserDaoToEntity(user);
  }

  private mapUserDaoToEntity(user: UserDao): User {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      password: user.password,
      updatedAt: user.updatedAt,
      createdAt: user.createdAt,
      deletedAt: user.deletedAt,
    };
  }
}
