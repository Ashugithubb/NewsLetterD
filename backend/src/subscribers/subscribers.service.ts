import { ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';

import { Subscriber } from './entities/subscriber.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from 'src/admin/repository/adminRepo';


@Injectable()
export class SubscribersService {
  constructor(@InjectRepository(Subscriber) private readonly subscriberRepo: Repository<Subscriber>,
    private readonly adminRepo: AdminRepository
  ) { }

  async create(createSubscriberDto: CreateSubscriberDto) {
    const email = createSubscriberDto.email;
    const existing = await this.subscriberRepo.findOneBy({ email });
    if (existing) throw new ConflictException("This email is already Subscribed");

    const newSubscriber = this.subscriberRepo.create({
      email,
      subscribed: true,
    })
    return await this.subscriberRepo.save(newSubscriber);
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


    return await this.subscriberRepo.update(id,subscriber);
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
