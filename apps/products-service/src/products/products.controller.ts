import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  @MessagePattern('getProduct')
  getProduct(id: number) {
    return { message: 'Product details', id, name: 'Sample Product' };
  }
}
