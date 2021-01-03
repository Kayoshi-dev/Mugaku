import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique} from "typeorm";
import {IsNotEmpty, Length} from "class-validator";
import * as bcrypt from "bcryptjs";

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

    @Column({
        nullable: true
    })
    description: string;

    @Column({
        type: "date",
        nullable: true
    })
    birthdayDate: Date;

    @Column()
    @IsNotEmpty()
    role: string;

    @Column({
        default: true
    })
    isEnabled: boolean

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkPlainPasswordValid(plainPassword: string) {
        return bcrypt.compareSync(plainPassword, this.password);
    }
}
