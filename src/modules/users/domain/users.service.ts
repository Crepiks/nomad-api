import { Injectable } from '@nestjs/common';
import { User } from 'src/common/entities/user';
import { UsersRepository } from '../data/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }
}
