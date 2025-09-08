import * as dotenv from 'dotenv';
import { Subscriber } from 'src/subscribers/entities/subscriber.entity';
import { SubscribersController } from 'src/subscribers/subscribers.controller';


import { DataSource } from 'typeorm';

import { NewsLetter } from './news-letters/entities/news-letter.entity';
import { Admin } from './admin/entities/admin.entity';
dotenv.config();
const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Subscriber,Admin,NewsLetter],
    migrations: [__dirname + '/migrations/*.{ts,js}'],
    synchronize: true,
});
export default AppDataSource;