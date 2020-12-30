import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique} from "typeorm";
import {IsNotEmpty, Length} from "class-validator";

@Entity()
@Unique(["username"])
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    @Length(4, 20)
    username: string;

    @Column()
    @Length(8, 100)
    password: string

    @Column()
    description: string;

    @Column("date")
    birthdayDate: Date;

    @Column()
    @IsNotEmpty()
    role: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
