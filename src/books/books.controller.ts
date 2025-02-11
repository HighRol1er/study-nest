import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '../schemas/book.schema';
import { CreateBook, UpdateBook } from '../schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAll(): Book[] {
    return this.booksService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') bookId: number): Book {
    return this.booksService.getOne(bookId);
  }

  @Post()
  create(@Body() bookData: CreateBook) {
    return this.booksService.create(bookData);
  }

  @Delete('/:id')
  remove(@Param('id') bookId: number) {
    return this.booksService.deleteOne(bookId);
  }

  @Patch('/:id')
  patch(@Param('id') bookId: number, @Body() updateData: UpdateBook) {
    return this.booksService.update(bookId, updateData);
  }
} 