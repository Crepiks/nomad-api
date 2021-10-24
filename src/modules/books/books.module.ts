import { Module } from '@nestjs/common';
import { BooksService } from './domain/books.service';
import { BooksController } from './presenter/books.controller';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
