import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLikeDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  forumId: string;
}
