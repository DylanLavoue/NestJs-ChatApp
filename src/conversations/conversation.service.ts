import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IParticipantsService } from 'src/participants/participants';
import { IUserService } from 'src/users/user';
import { Services } from 'src/utils/constants';
import { Conversation, User } from 'src/utils/typeorm';
import { CreateConversationParams, createParticipantParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { IConversationsService } from './conversations';

@Injectable()
export class ConversationService implements IConversationsService {

    constructor(
        @InjectRepository(Conversation) 
        private readonly conversationRepository: Repository<Conversation>,
        // invoke methods from other modules instead of each methods all the time. 
        @Inject(Services.PARTICIPANTS)
        private readonly participantsService: IParticipantsService,
        @Inject(Services.USERS)
        private readonly userService: IUserService,
    ){

    }

    async createConversation(user : User, params : CreateConversationParams) { 
        // userDB because searching for a specific Id present in the db
        const userDB = await this.userService.findUser({ id : user.id})
        if (!userDB.participant) {
            //this function replaces this one 
            await this.createParticipantAndSaveUser(userDB, params.authorId);

            // const newParticipant = await this.participantsService.createParticipant({
            //     id : params.authorId
            // });
            // //this saves it 
            // userDB.participant = newParticipant;
            // await this.userService.saveUser(userDB)
        }
        const recipient = await this.userService.findUser({ 
            id: params.recipientId
         });
         if (!recipient) 
         throw new HttpException(
            'Cannot create conversations', HttpStatus.BAD_REQUEST)
         if (!recipient.participant) {
            const newParticipant =  await this.participantsService.createParticipant({
                id: params.recipientId,});
            recipient.participant = newParticipant;
            await this.userService.saveUser(recipient)
         }
        }


        private async  createParticipantAndSaveUser(user : User, id : number ){
              const participant = await this.participantsService.createParticipant({ id });
            user.participant = participant;
            return this.userService.saveUser(user)
        }
    }
