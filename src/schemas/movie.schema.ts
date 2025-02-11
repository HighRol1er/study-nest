import { z } from 'zod';

export const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  year: z.number(),
  genres: z.array(z.string()),
});

export const createMovieSchema = movieSchema.omit({ id: true });
export const updateMovieSchema = createMovieSchema.partial();

export type Movie = z.infer<typeof movieSchema>;
export type CreateMovie = z.infer<typeof createMovieSchema>;
export type UpdateMovie = z.infer<typeof updateMovieSchema>; 