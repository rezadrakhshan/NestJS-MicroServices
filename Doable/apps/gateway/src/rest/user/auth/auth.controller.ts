import { Controller, Get, UseFilters, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserAuthService } from './auth.service';
import { HttpExceptionFilter } from 'src/response/http-exception.filter';
import { ResponseInterceptor } from 'src/response/response-interceptors';

@ApiTags('User:Auth')
@Controller('Auth')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(ResponseInterceptor)
export class UserAuthController {
  constructor(private readonly service: UserAuthService) {}

  @Get('test')
  @ApiOperation({ summary: 'This is a test api' })
  async test() {
    return await this.service.test('Hello World');
  }
}
