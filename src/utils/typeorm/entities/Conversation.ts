import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Participants } from "./Participants";

@Entity({ name : 'conversation'})
export class Conversation {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Participants, (participant) => participant.conversations)
    @JoinTable()
    participants: Participants[];
 
}