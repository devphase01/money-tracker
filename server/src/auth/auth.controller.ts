import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { GetUserDto } from '../user/dto/get-user.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Registration' })
  @ApiResponse({
    status: 202,
    description: 'Registration',
    type: '',
  })
  @Post('/registration')
  registration(@Body() registerDto: CreateUserDto) {
    return this.authService.register(registerDto);
  }

  @Post('/login')
  login(@Body() loginDto: GetUserDto) {
    return this.authService.login(loginDto);
  }
}
