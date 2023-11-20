import { ApiProperty } from '@nestjs/swagger';
import { OrderItem } from '@prisma/client';
import { IsInt, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  image: string;
  @ApiProperty()
  categoryId: number;
}

export class UpdateProductDto {
  @ApiProperty()
  name?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  price?: number;
  @ApiProperty()
  quantity?: number;
  @ApiProperty()
  image?: string;
}

export class createCategoryDto {
  @ApiProperty()
  @IsString()
  name: string;
}
