import { Module } from '@nestjs/common';
import { UserAuthController } from './auth/auth.controller';
import { UserAuthService } from './auth/auth.service';

@Module({
  controllers: [UserAuthController],
  providers: [UserAuthService],
})
export class UserModule {}
