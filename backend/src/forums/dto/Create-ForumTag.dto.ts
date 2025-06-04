import { IsString } from 'class-validator';

export class CreateForumTagDto {
  @IsString()
  forumId: string;

  @IsString()
  tagId: string;
}
