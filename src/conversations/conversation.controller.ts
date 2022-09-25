import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/utils/Guards';
import { IParticipantsService } from 'src/participants/participants';
import { IUserService } from 'src/users/user';
import { Routes, Services } from 'src/utils/constants';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/utils/typeorm';
import { CustomRepositoryCannotInheritRepositoryError } from 'typeorm';
import { IConversationsService } from './conversations';
import { CreateConversationDto } from './dtos/CreateConversation.dto';

@Controller(Routes.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationController {


    constructor(
        @Inject(Services.CONVERSATIONS) 
        private readonly conversationsService : IConversationsService,
        ){}


    // call finduser, wait for findUser to call a value and will continue to executing everything afterwards
    @Post()
    async  createConversation(
        @AuthUser() user : User,  
        @Body() createConversationPayload: CreateConversationDto){
      return  this.conversationsService.createConversation(user, createConversationPayload);
    }



}
