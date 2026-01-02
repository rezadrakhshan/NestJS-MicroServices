import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as config from 'config';

const cfg: any = config.get('info');

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Doable')
    .setDescription('This is Online TodoAPP')
    .setVersion(`${cfg.version}`)
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup(`${cfg.version}/docs`, app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
