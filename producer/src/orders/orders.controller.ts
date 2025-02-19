import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDTO } from './dto/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post("place-order")
  placeOrder(@Body() order: OrderDTO) {
    return this.ordersService.placeOrder(order);
  }

}
