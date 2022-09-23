import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";
import { Conversation } from "./Conversation";


@Entity({ name : 'chat_participants'})
export class Participants {
     
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Conversation, (conversation) => conversation.participants)
    @JoinTable()
    conversations: Conversation[];
}
