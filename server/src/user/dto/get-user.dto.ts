import { IsString } from 'class-validator';

export class GetUserDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}
