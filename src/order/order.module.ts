import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ProductModule } from '../product/product.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [ProductModule, PrismaModule],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
