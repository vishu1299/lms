import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class GetLikedVideosDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => +value)
  page: number = 1;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => +value)
  limit: number = 10;
}
