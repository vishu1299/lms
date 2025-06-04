import { IsEmail, Length, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Length(2, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 20)
  password: string;
}
