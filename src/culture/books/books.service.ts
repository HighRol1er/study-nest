import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '../../db';
import { books } from '../../db/schema';
import { eq } from 'drizzle-orm';
import { Book, CreateBook, UpdateBook } from '../../schemas/book.schema';

@Injectable()
export class BooksService {
  async getAll(): Promise<Book[]> {
    return await db.select().from(books);
  }

  async getOne(id: number): Promise<Book> {
    const [book] = await db.select().from(books).where(eq(books.id, id));
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  async create(bookData: CreateBook) {
    const [book] = await db.insert(books).values(bookData).returning();
    return book;
  }

  async deleteOne(id: number) {
    const book = await this.getOne(id);
    await db.delete(books).where(eq(books.id, id));
    return book;
  }

  async update(id: number, updateData: UpdateBook) {
    await this.getOne(id);  // 존재 여부만 확인
    const [updated] = await db
      .update(books)
      .set(updateData)
      .where(eq(books.id, id))
      .returning();
    return updated;
  }
} 