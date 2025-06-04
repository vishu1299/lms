import { Role } from '@prisma/client';
import { IsEmail, IsEnum, Length, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @Length(8)
  @IsString()
  password: string;

  @IsEnum(Role)
  role: Role;
}
