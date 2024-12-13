// import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class CreateWineDto {
  @MinLength(3, { message: 'Name must be at least 3 characters long.' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  description?: string;

  // @Transform(({ value }) => parseFloat(value))
  @Min(1000)
  @IsNumber()
  @IsOptional()
  price?: number;

  @IsOptional()
  location?: string;

  @IsOptional()
  image?: string;

  @IsNotEmpty()
  userId: number;
}