import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from 'src/common/entities/book';
import { BooksRepository } from '../data/books.repository';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}

  create(payload: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll(): Promise<Book[]> {
    return this.booksRepository.findAll();
  }

  async findOne(bookId: number): Promise<Book> {
    const book = await this.booksRepository.findById(bookId);
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  update(bookId: number, payload: UpdateBookDto) {
    return `This action updates a #${bookId} book`;
  }

  remove(bookId: number) {
    return `This action removes a #${bookId} book`;
  }
}
