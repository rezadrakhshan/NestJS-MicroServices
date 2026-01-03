import { Injectable } from '@nestjs/common';
import { MainServiceClient } from 'src/services/main.service';

@Injectable()
export class UserAuthService {
  constructor(private readonly mainSrcCli: MainServiceClient) {}

  async test(body) {
    const data = await this.mainSrcCli.callAction({
      provider: 'USERS',
      action: 'test',
      query: body,
    });
    return data; 
  }
}
