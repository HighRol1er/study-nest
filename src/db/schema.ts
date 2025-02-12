import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const movies = pgTable('movies', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  year: integer('year').notNull(),
  genres: text('genres').array().notNull(), 
});

export const books = pgTable('books', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  year: integer('year').notNull(),
  genres: text('genres').array().notNull(),
});

// Drizzle-Zod schemas
// Validation 용도인데 지금 이걸 db/schema.ts가 대체하고 있어서 굳이 안써도 될듯 
// export const insertMovieSchema = createInsertSchema(movies);
// export const selectMovieSchema = createSelectSchema(movies);

// export const insertBookSchema = createInsertSchema(books);
// export const selectBookSchema = createSelectSchema(books); 