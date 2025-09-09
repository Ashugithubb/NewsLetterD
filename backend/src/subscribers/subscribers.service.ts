import { ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';

import { Subscriber } from './entities/subscriber.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from 'src/admin/repository/adminRepo';
import { MailService } from 'src/mail/mail.service';


@Injectable()
export class SubscribersService {
  constructor(@InjectRepository(Subscriber) private readonly subscriberRepo: Repository<Subscriber>,
    private readonly adminRepo: AdminRepository,
    private readonly mailService: MailService
  ) { }

  async create(createSubscriberDto: CreateSubscriberDto) {
    const email = createSubscriberDto.email;
    const existing = await this.subscriberRepo.findOneBy({ email });
    if (existing?.subscribed === true) throw new ConflictException("This email is already Subscribed");
    if (existing) {
      existing.subscribed = true;
      const id = existing.id;
      this.subscriberRepo.update(id, existing);

      const username = email.split('@')[0];
      const name = username;
      const content = "WECOLME, Now YOu will Get NewsLtters Update from ZenMonk Thanks for Subscribingm 🎉🥳";
      this.mailService.sendNewsLetterMail({ email, name, content });

      return "Suscribed Succesfully";

    }

    const newSubscriber = this.subscriberRepo.create({
      email,
      subscribed: true,
    })

    this.subscriberRepo.save(newSubscriber);
    const username = email.split('@')[0];
    const name = username;
    const content = "WECOLME";
    this.mailService.sendNewsLetterMail({ email, name, content });

    return "Suscribed Succesfully";

  }

  async unSubscribe(email: string) {
    const subscriber = await this.subscriberRepo.findOne(
      {
        where: {
          email
        }
      }
    );
    if (!subscriber) throw new NotFoundException()
    subscriber!.subscribed = false;
    const id = subscriber.id

    await this.subscriberRepo.update(id, subscriber);
    return "Thanks, You are successfully unSubscribed";
  }



  findAll() {
    return `This action returns all subscribers`;
  }
  findOne(id: number) {
    return `This action returns a #${id} subscriber`;
  }

  update(id: number, updateSubscriberDto: UpdateSubscriberDto) {
    return `This action updates a #${id} subscriber`;
  }
  remove(id: number) {
    return `This action removes a #${id} subscriber`;
  }

}
