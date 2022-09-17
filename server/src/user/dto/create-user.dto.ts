import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class CreateUserDto {
  @ApiModelProperty({ example: 'devphase' })
  @IsString()
  readonly username: string;

  @ApiModelProperty({ example: 'dev@gmail.com' })
  @IsString()
  readonly email: string;

  @ApiModelProperty({ example: 'safaOA123871(&!@312Af' })
  @IsString()
  readonly password: string;
}
