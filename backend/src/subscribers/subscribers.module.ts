import { Module } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { SubscribersController } from './subscribers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from './entities/subscriber.entity';
import { SubscriberRepository } from './repository/subscriber-repo';
import { AdminModule } from 'src/admin/admin.module';


@Module({
 imports:[TypeOrmModule.forFeature([Subscriber]),AdminModule],
  controllers: [SubscribersController],
  providers: [SubscribersService,SubscriberRepository],
  exports:[SubscribersService,SubscriberRepository]
})
export class SubscribersModule {}
  
