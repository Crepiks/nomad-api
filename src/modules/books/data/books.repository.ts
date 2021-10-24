import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookDao } from 'src/common/dao/book.dao';
import { Book } from 'src/common/entities/book';
import { Repository } from 'typeorm';

@Injectable()
export class BooksRepository {
  constructor(
    @InjectRepository(BookDao)
    private readonly booksRepository: Repository<BookDao>,
  ) {}

  async findAll(): Promise<Book[]> {
    const books = await this.booksRepository.find();
    return books.map(this.mapBookDaoToEntity);
  }

  async findById(bookId: number): Promise<Book> {
    const book = await this.booksRepository.findOne(bookId);
    if (!book) {
      return null;
    }

    return this.mapBookDaoToEntity(book);
  }

  private mapBookDaoToEntity(book: BookDao): Book {
    return {
      id: book.id,
      name: book.name,
      updatedAt: book.updatedAt,
      createdAt: book.createdAt,
      deletedAt: book.deletedAt,
    };
  }
}
