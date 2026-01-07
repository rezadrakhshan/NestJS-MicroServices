import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber } from 'class-validator';

export class RequestOtpDto {
  @ApiProperty({
    type: String,
    required: true,
    example: '+980000000000',
    description: 'User phone number',
  })
  @IsPhoneNumber('IR', { message: 'Pleas enter valid phone number' })
  phone: string;
}
