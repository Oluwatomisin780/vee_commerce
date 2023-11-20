import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateOrderDto {
  @ApiProperty()
  status: string;
  @ApiProperty()
  TotalAmount: number;
  @ApiProperty()
  userId: number;
  @ApiProperty()
  items: OrderItem[];
}

export class OrderItem implements Prisma.OrderItemUncheckedCreateInput {
  @ApiProperty()
  subtotal: number;
  @ApiProperty()
  Quantity: number;
  @ApiProperty()
  orderId: number;
  @ApiProperty()
  productId: number;
}
