import { User } from "./typeorm";

export type CreateUserDetails = {
    email : string;
    password : string;
    firstName : string;
    lastName : string;
}

export type ValidateUserDetails = {
    email : string;
    password : string;
};

export type FindUserParams = Partial<{
    id: number;
    email: string;
}>;

export type CreateConversationParams = {
    authorId: number;
    recipientId: number;
    message: string;
}

export type ConversationIdentitytype = 'author' | 'recipient';

export type findParticipantParams = Partial<{
    id: number;
}>;

export interface AuthenticatedRequest extends Request {
    user: User; 
}

export type createParticipantParams = {
    id : number
}