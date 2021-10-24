import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, BooksModule],
})
export class AppModule {}
