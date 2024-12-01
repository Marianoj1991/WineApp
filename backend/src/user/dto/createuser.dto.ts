import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(8, { message: 'The email must be at least 8 characters long.' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  @IsNotEmpty()
  password: string;

  @MinLength(3, { message: 'Name must be at least 3 characters long.' })
  @IsNotEmpty()
  name: string;

  @MinLength(3, { message: 'Last name must be at least 3 characters long.' })
  @IsNotEmpty()
  lastname?: string;

  @MinLength(3, { message: 'Username must be at least 3 characters long.' })
  @Matches(/^[^@]*$/, { message: 'Username must not contain "@"' })
  @IsNotEmpty()
  username: string;
}