import { Module } from '@nestjs/common';
import { NewsLettersService } from './news-letters.service';
import { NewsLettersController } from './news-letters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsLetter } from './entities/news-letter.entity';
import { NewsLetterRepository } from './repository/news-letter-repo';

import { MailModule } from 'src/mail/mail.module';
import { SubscribersModule } from 'src/subscribers/subscribers.module';
import { AdminModule } from 'src/admin/admin.module';


@Module({
  imports:[TypeOrmModule.forFeature([NewsLetter]),MailModule,SubscribersModule,AdminModule],
  controllers: [NewsLettersController],
  providers: [NewsLettersService,NewsLetterRepository],
  exports:[NewsLettersService,NewsLetterRepository]
})
export class NewsLettersModule {}
