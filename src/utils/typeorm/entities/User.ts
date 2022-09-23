import { Exclude } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';
import { Participants } from './Participants';

@Entity({ name : 'users'})
export class User {
    
    @PrimaryGeneratedColumn()
    id : number;
    
    @Column({unique : true})
    email : string;

    @Column()
    firstName : string;
    
    @Column()
    lastName : string;

    @Column()
    @Exclude()
    password : string;


    @OneToOne(() => Participants)
    @JoinColumn()
    participant: Participants;

}


