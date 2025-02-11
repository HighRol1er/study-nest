import { z } from 'zod';

export const bookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  year: z.number(),
  genres: z.array(z.string()),
});

export const createBookSchema = bookSchema.omit({ id: true });
export const updateBookSchema = createBookSchema.partial();

export type Book = z.infer<typeof bookSchema>;
export type CreateBook = z.infer<typeof createBookSchema>;
export type UpdateBook = z.infer<typeof updateBookSchema>; 