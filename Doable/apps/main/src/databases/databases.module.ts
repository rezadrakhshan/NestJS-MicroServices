import { Module, Global } from '@nestjs/common';
import { PostgresProviders } from './postgres/postgres.service';
import { RedisService } from './redis/redis.service';

@Global()
@Module({
  providers: [...PostgresProviders, RedisService],
  exports: [...PostgresProviders, RedisService],
})
export class DatabaseModule {}
