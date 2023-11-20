import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './orderDto/orderDto';

@Controller('order')
export class OrderController {
  constructor(private OrderService: OrderService) {}
  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.OrderService.createOrder(createOrderDto);
  }
}
