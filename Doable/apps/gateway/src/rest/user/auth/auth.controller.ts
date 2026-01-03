import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserAuthService } from './auth.service';

@ApiTags('User:Auth')
@Controller('Auth')
export class UserAuthController {
  constructor(private readonly service: UserAuthService) {}
}
