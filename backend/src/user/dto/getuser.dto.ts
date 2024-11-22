
import { IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class GetUserDto {
  @IsNotEmpty()
  @IsEmail()
  @MinLength(8, { message: 'El mail debe tener como mínimo 8 carácteres' })
  email: string;

  // @IsNotEmpty()
  // @MinLength(8, { message: 'El password debe tener como mínimo 8 carácteres' })
  // @IsString()
  @IsOptional()
  password?: string;

}
