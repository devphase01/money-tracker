import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RecordService } from './record.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('Records')
@Controller('records')
export class RecordController {
  constructor(private recordService: RecordService) {}

  @ApiOperation({ summary: 'Add Record' })
  @ApiResponse({
    status: 201,
    description: 'Add new record',
    type: String,
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  addRecord(@Body() createRecordDto: CreateRecordDto) {
    return this.recordService.addRecord(createRecordDto);
  }
}
