import { ApiProperty } from '@nestjs/swagger';
import {} from 'class-validator';

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
