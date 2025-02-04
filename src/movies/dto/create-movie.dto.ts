import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  // DTO? : data transfer object

  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
