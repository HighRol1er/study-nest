import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  /** 아래처럼 작성할 수 있지만 Partial types 사용할거임  */
  // @IsString()
  // readonly title?: string;
  // @IsNumber()
  // readonly year?: number;
  // @IsString({ each: true })
  // readonly genres?: string[];
  //
}
