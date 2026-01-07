import { HttpStatus, Injectable } from '@nestjs/common';
import {
  ServiceClientContextDto,
  ServiceResponseData,
  SrvError,
} from 'src/services/dto';
import { RedisService } from 'src/databases/redis/redis.service';

@Injectable()
export class UsersService {
  private static readonly role = 'User';
  constructor(private readonly redisService: RedisService) {}
  async requestOtp({
    query,
  }: ServiceClientContextDto): Promise<ServiceResponseData> {
    const { phone } = query;
    const key = `${UsersService.role}:${phone}`;
    const existing = await this.redisService.cacheCli.get(key);
    if (existing)
      throw new SrvError(HttpStatus.BAD_REQUEST, 'Otp already sent');
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const ttl = 2 * 60;
    await this.redisService.cacheCli.set(key, otp, 'EX', ttl);
    return {
      message: 'Otp send successfuly',
      data: {
        success: true,
        otp,
        phone,
        expiresIn: ttl,
      },
    };
  }
}
