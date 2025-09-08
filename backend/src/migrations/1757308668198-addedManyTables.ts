import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedManyTables1757308668198 implements MigrationInterface {
    name = 'AddedManyTables1757308668198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subscribers" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "subscribed" boolean NOT NULL, CONSTRAINT "PK_cbe0a7a9256c826f403c0236b67" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_de87485f6489f5d0995f5841952" UNIQUE ("email"), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "news_letters" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "status" "public"."news_letters_status_enum" NOT NULL, "emailContent" character varying NOT NULL, "adminId" integer, CONSTRAINT "PK_3446ea01ab7944e651ae54f1416" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "news_letters" ADD CONSTRAINT "FK_ccd8b7ddfa5c6d8d95cfca7ac8a" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "news_letters" DROP CONSTRAINT "FK_ccd8b7ddfa5c6d8d95cfca7ac8a"`);
        await queryRunner.query(`DROP TABLE "news_letters"`);
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "subscribers"`);
    }

}
