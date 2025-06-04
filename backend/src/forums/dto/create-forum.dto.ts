import { IsNotEmpty, IsString, IsOptional, IsUUID } from 'class-validator';

export class ForumCreateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsUUID()
  authorId: string;
}
