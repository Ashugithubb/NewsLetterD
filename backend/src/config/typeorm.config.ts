import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Subscriber } from 'src/subscribers/entities/subscriber.entity';
import { NewsLetter } from 'src/news-letters/entities/news-letter.entity';
import { Admin } from 'src/admin/entities/admin.entity';


export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: parseInt(configService.get<string>('DB_PORT') ?? '5432', 10),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    entities:[Subscriber,NewsLetter,Admin],
    synchronize: false,
  }),
};