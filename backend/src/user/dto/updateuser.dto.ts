import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @MinLength(8, { message: 'Mail has to be at least 8 characters long' })
  @IsOptional()
  email?: string;
  
  @MinLength(8, { message: 'Password has to be at least 8 characters long' })
  @IsOptional()
  password?: string;
  
  @MinLength(3, { message: 'Name has to be at least 3 characters long' })
  @IsOptional()
  name?: string;
  
  @MinLength(3, { message: 'LastName has to be at least 3 characters long' })
  @IsOptional()
  lastname?: string;
}
