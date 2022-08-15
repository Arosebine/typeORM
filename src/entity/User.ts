import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ nullable: true })
    age: number;

    @CreateDateColumn()
    createdAt: Date;

}