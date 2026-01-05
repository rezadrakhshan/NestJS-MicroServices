import { Injectable } from '@nestjs/common';
import { handlerSrcCliResponse } from 'src/response/http-exception.filter';
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
    return handlerSrcCliResponse(data);
  }
}
