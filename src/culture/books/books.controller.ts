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
import { Book } from '../../schemas/book.schema';
import { createBookSchema, updateBookSchema } from '../../schemas/book.schema';

@Controller('culture/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAll(): Promise<Book[]> {
    return await this.booksService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') bookId: string): Promise<Book> {
    return await this.booksService.getOne(Number(bookId));
  }

  @Post()
  async create(@Body() bookData: unknown) {
    const validatedData = createBookSchema.parse(bookData);
    return await this.booksService.create(validatedData);
  }

  @Delete('/:id')
  async remove(@Param('id') bookId: string) {
    return await this.booksService.deleteOne(Number(bookId));
  }

  @Patch('/:id')
  async patch(@Param('id') bookId: string, @Body() updateData: unknown) {
    const validatedData = updateBookSchema.parse(updateData);
    return await this.booksService.update(Number(bookId), validatedData);
  }
} 