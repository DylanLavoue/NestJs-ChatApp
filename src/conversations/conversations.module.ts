import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantsModule } from 'src/participants/participants.module';
import { UsersModule } from 'src/users/users.module';
import { Services } from 'src/utils/constants';
import { Participants, Conversation } from 'src/utils/typeorm';
import { ConversationController } from './conversation.controller';
import { ConversationService } from './conversation.service';

@Module({
  imports : [TypeOrmModule.forFeature([Conversation, Participants]),
   ParticipantsModule,
   UsersModule
  ]
   ,
  controllers: [ConversationController],
  providers: [{
    provide :  Services.CONVERSATIONS,
    useClass : ConversationService,
  }]
})
export class ConversationsModule {}
