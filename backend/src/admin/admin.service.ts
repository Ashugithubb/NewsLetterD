import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminRepository } from './repository/adminRepo';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepo: AdminRepository) { }

  async create(createAdminDto: CreateAdminDto) {
    const email = createAdminDto.email;
    const admin = await this.adminRepo.findOneBy({email});
    if(admin) throw new ConflictException()
    return await this.adminRepo.save(createAdminDto);
  }

  async findOneByEmail(email:string) {
    return await this.adminRepo.findOneBy({ email })
  }
  
  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
