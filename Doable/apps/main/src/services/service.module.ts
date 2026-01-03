import { Module } from '@nestjs/common';
import { SelfActionService } from './action.service';
import { ServiceController } from './service.controller';
import { UsersService } from 'src/providers/users.service';

@Module({
  imports: [],
  providers: [SelfActionService, UsersService],
  controllers: [ServiceController],
})
export class ServiceModule {}
