import { Injectable } from '@nestjs/common';
import { RequestOtpDto } from 'src/dtos/user-otp.dto';
import { handlerSrcCliResponse } from 'src/response/http-exception.filter';
import { MainServiceClient } from 'src/services/main.service';

@Injectable()
export class UserAuthService {
  constructor(private readonly mainSrcCli: MainServiceClient) {}

  async requestOtp(body: RequestOtpDto) {
    const data = await this.mainSrcCli.callAction({
      provider: 'USERS',
      action: 'requestOtp',
      query: body,
    });
    return handlerSrcCliResponse(data);
  }
}
