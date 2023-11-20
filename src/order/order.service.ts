import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './orderDto/orderDto';
//import { Order } from '@prisma/client';
@Injectable()
export class OrderService {
  constructor(
    private prismaService: PrismaService,
    private productService: ProductService,
  ) {}

  async createOrder(createOrder: CreateOrderDto) {
    // const productIds = createOrder.orderItems.map((item) => item.productId);
    // const products = await this.productService.checkifProductsExist(productIds);

    // if (!products || products.length !== productIds.length) {
    //   throw new UnprocessableEntityException(
    //     'the order could not be  processed',
    //   );
    // }

    const order = await this.prismaService.order.create({
      data: {
        ...createOrder,
        items: {
          create: createOrder.items,
        },
        userId: 1,
        status: 'pending',
      },
      include: {
        items: true,
      },
    });
    return order;
  }
}
