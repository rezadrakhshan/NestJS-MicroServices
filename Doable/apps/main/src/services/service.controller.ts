import { Controller, HttpStatus } from '@nestjs/common';
import { SelfActionService } from './action.service';
import { MessagePattern } from '@nestjs/microservices';
import {
  ServiceClientActionInputDto,
  ServiceClientOutputDto,
  ServiceResponseData,
} from './dto';

@Controller()
export class ServiceController {
  constructor(private readonly actions: SelfActionService) {}

  @MessagePattern('callAction')
  async callTestMessage(
    data: ServiceClientActionInputDto,
  ): Promise<ServiceClientOutputDto<ServiceClientActionInputDto>> {
    try {
      const res = await this.actions.findAndCall(data);
      return {
        context: data,
        status: 'SUCCEED',
        code: 200,
        message: res.message ?? 'ok',
        error: null,
        data: res.data || null,
      };
    } catch (error) {
      return {
        context: data,
        status: 'FAILED',
        code: error.code || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.msg || null,
        error: error.message || 'err_service_notHandledError',
        data: null,
      };
    }
  }
}
