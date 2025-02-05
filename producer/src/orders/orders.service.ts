import { Inject, Injectable } from '@nestjs/common';
import { OrderDTO } from './dto/order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {

  constructor(
    @Inject("ORDER_SERVICE") private rabbitClient: ClientProxy
  ){}

  placeOrder(orderDTO: OrderDTO) {
    this.rabbitClient.emit("order-placed", orderDTO)

    return { message: "Order Placed" }
  }

 
}
