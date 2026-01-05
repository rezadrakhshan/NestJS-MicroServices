import { Module, Global } from '@nestjs/common';
import { PostgresProviders } from './postgres/postgres.service';

@Global()
@Module({
  providers: [...PostgresProviders],
  exports: [...PostgresProviders],
})
export class DatabaseModule {}
