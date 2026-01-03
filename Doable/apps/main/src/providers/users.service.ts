import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async test(data): Promise<String> {
    return data;
  }
}
