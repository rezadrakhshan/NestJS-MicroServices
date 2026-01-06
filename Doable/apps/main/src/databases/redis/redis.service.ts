import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as config from 'config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit {
  private readonly logger = new Logger(RedisService.name);
  private readonly redisConfig = config.get('redis');
  public cacheCli!: Redis;
  public sessionCli!: Redis;
  async onModuleInit() {
    const cacheClient = new Redis({
      host: this.redisConfig.host,
      port: this.redisConfig.port,
      db: this.redisConfig.cacheDB,
    });
    cacheClient.on('error', (e) => {
      this.logger.fatal('cache Client connecting error');
      this.logger.fatal(e);
      process.exit(1);
    });
    cacheClient.on('connect', () => {
      this.logger.verbose('cache Client Connecting successfuly');
    });
    this.cacheCli = cacheClient;
    const sessionClient = new Redis({
      host: this.redisConfig.host,
      port: this.redisConfig.port,
      db: this.redisConfig.sessionDB,
    });
    sessionClient.on('error', (e) => {
      this.logger.fatal('session Client connecting error');
      this.logger.fatal(e);
      process.exit(1);
    });
    sessionClient.on('connect', () => {
      this.logger.verbose('session Client Connecting successfuly');
    });
    this.sessionCli = sessionClient;
  }
}
