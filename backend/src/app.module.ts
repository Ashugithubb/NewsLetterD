import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscribersModule } from './subscribers/subscribers.module';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewsLettersModule } from './news-letters/news-letters.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRootAsync(typeOrmConfig), SubscribersModule, NewsLettersModule, AuthModule,
  MailerModule.forRoot({
    transport: {
      service: 'gmail',
      port: 1025,
      ignoreTLS: true,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    },
    defaults: {
      from: `"Zenmonk" <${process.env.MAIL_USER}>`,
    },

  
    template: {
      dir: process.cwd() + '/src/mail/template',
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }),
    MailModule,
    AdminModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
