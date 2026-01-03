import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserAuthService } from './auth.service';

@ApiTags('User:Auth')
@Controller('Auth')
export class UserAuthController {
  constructor(private readonly service: UserAuthService) {}

  @Get('test')
  @ApiOperation({ summary: 'This is a test api' })
  async test() {
    return await this.service.test('Hello World');
  }
}
