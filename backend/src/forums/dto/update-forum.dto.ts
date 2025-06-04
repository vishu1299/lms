import { IsString, IsOptional } from 'class-validator';

export class ForumUpdateDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;
}
