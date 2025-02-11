import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '../../db';
import { movies } from '../../db/schema';
import { eq } from 'drizzle-orm';
import { CreateMovie, Movie, UpdateMovie } from '../../schemas/movie.schema';

@Injectable()
export class MoviesService {
  async getAll(): Promise<Movie[]> {
    return await db.select().from(movies);
  }

  async getOne(id: number): Promise<Movie> {
    const [movie] = await db.select().from(movies).where(eq(movies.id, id));
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }

  async create(movieData: CreateMovie) {
    const [movie] = await db.insert(movies).values(movieData).returning();
    return movie;
  }

  async deleteOne(id: number) {
    const movie = await this.getOne(id);
    await db.delete(movies).where(eq(movies.id, id));
    return movie;
  }

  async update(id: number, updateData: UpdateMovie) {
    const movie = await this.getOne(id);
    const [updated] = await db
      .update(movies)
      .set(updateData)
      .where(eq(movies.id, id))
      .returning();
    return updated;
  }
} 