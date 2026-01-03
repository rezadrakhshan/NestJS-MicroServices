import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    UserModule,
    AdminModule,
    TaskModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
      },
      {
        path: 'user',
        module: UserModule,
      },
      {
        path: 'task',
        module: TaskModule,
      },
    ]),
  ],
})
export class RestModule {}
