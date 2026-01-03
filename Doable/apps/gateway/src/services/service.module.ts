import { Module, Global } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MainServiceClient } from './main.service';
import * as config from 'config';

const serviceConfig: any = config.get('service');

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Main',
        transport: Transport.TCP,
        options: { host: `${serviceConfig.host}`, port: serviceConfig.port },
      },
    ]),
  ],
  providers: [MainServiceClient],
  exports: [MainServiceClient],
})
export class ServiceModule {}
