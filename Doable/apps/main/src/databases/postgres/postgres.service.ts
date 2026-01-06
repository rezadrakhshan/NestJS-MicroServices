import { DataSource } from 'typeorm';
import * as config from 'config';
import { Logger } from '@nestjs/common';

const dbConfig = config.get('postgres');

const logger = new Logger('PostgresService');

export const PostgresProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: dbConfig.host,
        port: dbConfig.port || 5432,
        username: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        entities: [],
        synchronize: true,
      });

      try {
        const InitializeDataSource = await dataSource.initialize();
        logger.log('Connected to PostgreSql successfuly');
        return InitializeDataSource;
      } catch (error) {
        logger.error('Failed to connect to PostgreSql', error);
        process.exit(1);
      }
    },
  },
];
