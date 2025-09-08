import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Admin } from "../entities/admin.entity";



@Injectable()
export class AdminRepository extends Repository<Admin> {
    constructor(private datasource: DataSource,
    ) {
        super(Admin, datasource.createEntityManager());
    }

}