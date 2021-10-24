import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BooksService } from '../domain/books.service';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';

@Controller('api/v1/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  async findAll() {
    return {
      books: await this.booksService.findAll(),
    };
  }

  @Get(':bookId')
  async findOne(@Param('bookId') bookId: string) {
    return {
      book: await this.booksService.findOne(+bookId),
    };
  }

  @Patch(':bookId')
  update(
    @Param('bookId') bookId: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(+bookId, updateBookDto);
  }

  @Delete(':bookId')
  remove(@Param('bookId') bookId: string) {
    return this.booksService.remove(+bookId);
  }
}
