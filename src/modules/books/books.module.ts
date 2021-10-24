import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookDao } from 'src/common/dao/book.dao';
import { BooksRepository } from './data/books.repository';
import { BooksService } from './domain/books.service';
import { BooksController } from './presenter/books.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookDao])],
  controllers: [BooksController],
  providers: [BooksService, BooksRepository],
})
export class BooksModule {}
