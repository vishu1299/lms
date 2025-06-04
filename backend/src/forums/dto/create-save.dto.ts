import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSaveDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  forumId: string;
}
