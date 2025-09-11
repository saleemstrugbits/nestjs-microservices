import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  @MessagePattern('createOrder')
  createOrder(order: any) {
    console.log('Order received:', order);
    return { message: 'Order created successfully', order };
  }
}
