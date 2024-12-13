
import { IsEmail, IsNotEmpty, MinLength, IsOptional, ValidateIf, Matches } from 'class-validator';

export class GetUserDto {
  @IsEmail()
  @MinLength(8, { message: 'El mail debe tener como mínimo 8 carácteres' })
  @IsOptional()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  @Matches(/^[^@]*$/, { message: 'Username must not contain "@"'})
  username?: string;
}
