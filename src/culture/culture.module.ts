import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [MoviesModule, BooksModule],
})
export class CultureModule {} 