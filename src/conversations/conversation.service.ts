import { Injectable } from '@nestjs/common';
import { CreateConversationParams } from 'src/utils/types';
import { IConversationsService } from './conversations';

@Injectable()
export class ConversationService implements IConversationsService {


    createConversation(params : CreateConversationParams) {
        throw new Error('Method not implemented.');
    }
}