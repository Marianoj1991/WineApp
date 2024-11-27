import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class CreateWineDto {
  @MinLength(3, { message: 'Name must be at least 3 characters long.' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @MinLength(10, { message: 'Description must be at least 10 characters long.' })
  @IsOptional()
  description?: string;

  @Min(1000)
  @IsNumber()
  @IsOptional()
  price?: number;
  
  @MinLength(8, { message: 'Location must be at least 8 characters long.' })
  @IsOptional()
  location?: string;
}