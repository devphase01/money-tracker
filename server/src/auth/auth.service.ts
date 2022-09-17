import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { GetUserDto } from '../user/dto/get-user.dto';
import { UserService } from '../user/user.service';
import { UserDocument } from '../user/user.model';
import { EmailService } from '../email/email.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private jwtService: JwtService,
    private config: ConfigService,
    @Inject(forwardRef(() => EmailService))
    private emailService: EmailService,
  ) {}

  async register(registerDto: CreateUserDto) {
    const { email, password } = registerDto;
    const candidate = await this.userService.getUserByEmail(email);
    if (candidate) {
      throw new HttpException('Email is already taken', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const newUser = await this.userService.createUser({
      ...registerDto,
      password: hashPassword,
    });
    const confirmation_token = await this.signConfirmationToken(email);
    await this.emailService.sendEmail(email, confirmation_token);
    return this.signToken(newUser);
  }

  async login(loginDto: GetUserDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    return this.signToken(user._doc);
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    const passwordEquals = await bcrypt.compare(password, user.password);
    if (user && passwordEquals) {
      const { password, ...others } = user;
      return others;
    }
    throw new UnauthorizedException('Wrong Password or Email!');
  }

  private async signToken(user: UserDocument): Promise<string> {
    const payload = {
      sub: user._id,
      email: user.email,
      accounts: user.accounts,
    };
    const secret = this.config.get<string>('JWT_SECRET_KEY');
    return this.jwtService.signAsync(payload, {
      secret,
      expiresIn: '24h',
    });
  }

  private async signConfirmationToken(email: string): Promise<string> {
    const payload = { email };
    const options = {
      secret: this.config.get<string>('JWT_SECRET_KEY'),
      expiresIn: '15m',
    };
    return this.jwtService.signAsync(payload, options);
  }

  async verifyToken(userToken: string) {
    const secret = this.config.get<string>('JWT_SECRET_KEY');
    try {
      const isVerify = await this.jwtService.verify(userToken, { secret });
      if (isVerify) {
        const { email } = JSON.parse(
          Buffer.from(userToken.split('.')[1], 'base64').toString(),
        );
        await this.userService.updateEmailStatus(email, true);
        return true;
      }
    } catch (err) {
      throw new HttpException('Token expired.', HttpStatus.BAD_REQUEST);
    }
  }
}
