import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserAuthService } from './auth.service';
import { HttpExceptionFilter } from 'src/response/http-exception.filter';
import { ResponseInterceptor } from 'src/response/response-interceptors';
import { RequestOtpDto } from 'src/dtos/user-otp.dto';

@ApiTags('User:Auth')
@Controller('Auth')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(ResponseInterceptor)
export class UserAuthController {
  constructor(private readonly service: UserAuthService) {}

  @Post('request-otp')
  @ApiOperation({ summary: 'otp sent to user phone number' })
  async requestOtp(@Body() body: RequestOtpDto) {
    return this.service.requestOtp(body);
  }
}
