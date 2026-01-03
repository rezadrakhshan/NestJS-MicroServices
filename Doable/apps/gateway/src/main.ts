import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as config from 'config';
import { swaggerOptions } from './config/swagger.config';

const cfg: any = config.get('info');

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  await swaggerOptions(app, cfg);

  await app.listen(cfg.port ?? 3000);
}
bootstrap();
