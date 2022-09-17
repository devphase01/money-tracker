import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { EmailService } from './email.service';

@ApiTags('Email Confirmation')
@Controller('confirmation')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @ApiOperation({ summary: 'Email confirmation' })
  @Get()
  confirmEmail(@Query('user_token') userToken: string) {
    return this.emailService.confirmEmail(userToken);
  }
}
