import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  @MessagePattern('getUser')
  getUser(id: number) {
    return { message: 'User details', id, name: 'Sample User' };
  }
}
