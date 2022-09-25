import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IParticipantsService } from 'src/participants/participants';
import { Services } from 'src/utils/constants';
import { Conversation } from 'src/utils/typeorm';
import { CreateConversationParams } from 'src/utils/types';
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
    ){

    }

    async createConversation(params : CreateConversationParams) { 
        const recipient = await this.participantsService.findParticipant({
            id: params.recipientId,
        });
    }
}
