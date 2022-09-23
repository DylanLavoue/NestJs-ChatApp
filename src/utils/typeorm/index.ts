import { User } from "./entities/User";
import { Session } from './entities/Sessions';
import { Conversation } from './entities/Conversation'
import { Participants } from "./entities/Participants";


const entities = [User, Session, Conversation, Participants];

export default entities;


export {User, Session, Conversation, Participants}
