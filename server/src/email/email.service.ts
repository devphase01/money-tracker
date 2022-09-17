import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class EmailService {
  private readonly url = `http://localhost:${this.config.get<number>(
    'PORT',
  )}/confirmation`;

  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
    private mailService: MailerService,
    private config: ConfigService,
  ) {}

  async sendEmail(toEmail, token) {
    this.mailService
      .sendMail({
        to: toEmail,
        from: 'devphase01@gmail.com',
        subject: 'Another one',
        text: 'Welcome to Endous Money Service',
        html: `
          <h4>Hello <span style="color: black">${toEmail}</span></h4>
          to confirm email click here --> <a href="${this.url}?user_token=${token}">Confirm Email</a>
        `,
      })
      .then((response) => {
        if (response.accepted.includes(toEmail)) {
          console.log(true);
        } else {
          console.log('Rejected');
        }
      })
      .catch((err) => console.log(err));
    return 'Mail was successfully sent.';
  }

  async confirmEmail(userToken: string) {
    await this.authService.verifyToken(userToken);
  }
}
