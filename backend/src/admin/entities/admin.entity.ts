import { NewsLetter } from "src/news-letters/entities/news-letter.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
@Entity("admin")
export class Admin {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string


    @OneToMany(() => NewsLetter, (n) => n.admin)
    newsLetter: NewsLetter
}
