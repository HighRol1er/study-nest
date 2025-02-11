import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '../db';
import { books } from '../db/schema';
import { eq } from 'drizzle-orm';
import { Book, CreateBook, UpdateBook } from '../schemas/book.schema';


@Injectable()
export class BooksService {
  private books: Book[] = [];

  getAll(): Book[] {
    return this.books;
  }

  getOne(id: number): Book {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  create(bookData: CreateBook) {
    this.books.push({
      id: this.books.length + 1,
      ...bookData,
    });
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.books = this.books.filter((book) => book.id !== id);
  }

  update(id: number, updateData: UpdateBook) {
    const book = this.getOne(id);
    this.deleteOne(id);
    this.books.push({ ...book, ...updateData });
  }
} 