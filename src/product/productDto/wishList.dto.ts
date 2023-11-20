import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class wishListDto {
  products: Product[];
  userId: number;
}

export class Product implements Prisma.ProductUncheckedCreateInput {
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
