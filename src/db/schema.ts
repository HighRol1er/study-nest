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
export const insertMovieSchema = createInsertSchema(movies);
export const selectMovieSchema = createSelectSchema(movies);

export const insertBookSchema = createInsertSchema(books);
export const selectBookSchema = createSelectSchema(books); 