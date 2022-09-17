import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Account } from './account.model';
import { UpdateAccountDto } from './dto/update-account.dto';

@ApiBearerAuth()
@ApiTags('Accounts')
@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiOperation({ summary: 'Get user`s accounts' })
  @ApiResponse({
    status: 200,
    description: 'Returns User`s accounts',
    type: [Account],
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.accountService.getAll();
  }

  @ApiOperation({ summary: 'Create Account' })
  @ApiResponse({
    status: 201,
    description: 'Create User`s Account',
    type: Account,
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.createAccount(createAccountDto);
  }

  @ApiOperation({ summary: 'Delete Account' })
  @ApiResponse({
    status: 200,
    description: 'Account is successfully deleted.',
    type: Account,
  })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteAccount(@Param('id') id: string) {
    return this.accountService.deleteAccount(id);
  }

  @ApiOperation({ summary: 'Update Account' })
  @ApiResponse({
    status: 200,
    description: 'Account is successfully updated.',
    type: Account,
  })
  @ApiBody({
    description: 'Update Account',
    type: UpdateAccountDto,
  })
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateAccount(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    return this.accountService.updateAccount(id, updateAccountDto);
  }
}
