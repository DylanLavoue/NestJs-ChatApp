import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { IParticipantsService } from 'src/participants/participants';
import { Routes, Services } from 'src/utils/constants';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/utils/typeorm';
import { IConversationsService } from './conversations';
import { CreateConversationDto } from './dtos/CreateConversation.dto';

@Controller(Routes.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationController {


    constructor(
        @Inject(Services.CONVERSATIONS) private readonly conversationsService : IConversationsService,
        @Inject(Services.PARTICIPANTS)private readonly participantsService : IParticipantsService,
        ){}

    @Post()
     createConversation(
        @AuthUser() user : User,  
        @Body() createConversationPayload: CreateConversationDto){
        const recipient =  this.participantsService.findParticipant({})
    }



}
