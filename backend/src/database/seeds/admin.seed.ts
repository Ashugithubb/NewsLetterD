import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Admin } from 'src/admin/entities/admin.entity';
import { DataSource } from 'typeorm';


export default class AdminSeeder implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const adminRepo = dataSource.getRepository(Admin);

        const admin: Admin[] = [];
        admin.push(
            adminRepo.create({
                name: 'Admin',
                email: 'admin123@gmail.com',
            }),
        );
        await adminRepo.save(admin)
    }
}


