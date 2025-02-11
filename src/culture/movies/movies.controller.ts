import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from '../../schemas/movie.schema';
import { createMovieSchema, updateMovieSchema } from '../../schemas/movie.schema';

@Controller('culture/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async getAll(): Promise<Movie[]> {
    return await this.moviesService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') movieId: string): Promise<Movie> {
    return await this.moviesService.getOne(Number(movieId));
  }

  @Post()
  async create(@Body() movieData: unknown) {
    const validatedData = createMovieSchema.parse(movieData);
    return await this.moviesService.create(validatedData);
  }

  @Delete('/:id')
  async remove(@Param('id') movieId: string) {
    return await this.moviesService.deleteOne(Number(movieId));
  }

  @Patch('/:id')
  async patch(@Param('id') movieId: string, @Body() updateData: unknown) {
    const validatedData = updateMovieSchema.parse(updateData);
    return await this.moviesService.update(Number(movieId), validatedData);
  }
} 