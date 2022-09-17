import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAccountDto {
  @ApiProperty({
    type: String,
    example: 'Credit Card',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    type: String,
    example: 'credit',
  })
  @IsString()
  readonly type: string;

  @ApiProperty({
    type: String,
    example: 'UAH',
  })
  @IsString()
  readonly currency: string;

  @ApiProperty({
    type: Number,
    example: 12000,
  })
  @IsNumber()
  readonly amount: number;

  @ApiProperty({
    type: String,
    example: '#800080',
  })
  @IsString()
  readonly color: string;
}
