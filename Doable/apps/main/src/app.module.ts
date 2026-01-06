import { Module } from '@nestjs/common';
import { ServiceModule } from './services/service.module';
import { DatabaseModule } from './databases/databases.module';

@Module({
  imports: [ServiceModule, DatabaseModule],
})
export class AppModule {}
