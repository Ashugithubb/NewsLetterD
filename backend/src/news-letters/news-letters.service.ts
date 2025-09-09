import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateNewsLetterDto } from './dto/create-news-letter.dto';
import { UpdateNewsLetterDto } from './dto/update-news-letter.dto';

import { NewsLetterRepository } from './repository/news-letter-repo';
import { Status } from './enum/news-letter.enum';
import { MailService } from 'src/mail/mail.service';
import { SubscribersService } from 'src/subscribers/subscribers.service';
import { SubscriberRepository } from 'src/subscribers/repository/subscriber-repo';
import { AdminRepository } from 'src/admin/repository/adminRepo';
import { GetNewsLetterQueryDto } from './dto/get-newsLetter.dto';


@Injectable()
export class NewsLettersService {
  constructor(
    private readonly newsLetterRepo: NewsLetterRepository,
    private readonly mailService: MailService,
    private readonly subscriberRepo: SubscriberRepository,
    private readonly adminRepo: AdminRepository
  ) { }

  async create(createNewsLetterDto: CreateNewsLetterDto, id: number) {
    const admin = await this.adminRepo.findOneBy({ id });
    if (!admin) throw new UnauthorizedException('Admin user not found');

    const newNewsLetter = this.newsLetterRepo.create({
      ...createNewsLetterDto,
      admin
    });
    await this.newsLetterRepo.save(newNewsLetter);

    const status = createNewsLetterDto.status;

    if (status === Status.PUBLISHED) {
      const { emailContent } = createNewsLetterDto;
      const users = await this.subscriberRepo.find({
        where: {
          subscribed: true
        },

      })

      users.map((u) => {
        const username = u.email.split('@')[0];
        const name = username;
        const email = u.email
        const content = emailContent;
        this.mailService.sendNewsLetterMail({ email, name, content });
      })
    }
  }



  async findAll(query: GetNewsLetterQueryDto) {
    const {
      page = 1,
      limit = 5,
      search } = query;
    const qb = this.newsLetterRepo
      .createQueryBuilder("news")

    if (search) {
      qb.andWhere(
        '(news.title ILIKE :search OR news.description ILIKE :search)',
        { search: `%${search}%` }
      );
    }
    const [newsletter, total] = await qb
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();
    return {
      total,
      page,
      limit,
      newsletter,
    };


    // return await this.newsLetterRepo.find();
  }
  // async publishNewsLetter(createNewsLetterDto: CreateNewsLetterDto) {

  //   const name = "Ashutosh";
  //   const email = "itsray650@gmail.com"
  //   const content = createNewsLetterDto.emailContent;
  //   this.mailService.sendNewsLetterMail({ email, name, content });

  // }
  findOne(id: number) {
    return `This action returns a #${id} newsLetter`;
  }

  update(id: number, updateNewsLetterDto: UpdateNewsLetterDto) {
    return `This action updates a #${id} newsLetter`;
  }

  remove(id: number) {
    return `This action removes a #${id} newsLetter`;
  }
}
