import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './repository/adminRepo';
import { Admin } from './entities/admin.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService,AdminRepository],
  exports:[AdminService,AdminRepository]
})
export class AdminModule {}
