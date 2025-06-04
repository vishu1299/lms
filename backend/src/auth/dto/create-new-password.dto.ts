import { IsEmail, Length } from 'class-validator';

export class CreateNewPasswordDto {
  @IsEmail()
  email: string;

  @Length(8, 20)
  password: string;
}
