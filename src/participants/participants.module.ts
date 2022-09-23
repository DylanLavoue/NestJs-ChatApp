import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Services } from 'src/utils/constants';
import { Conversation, Participants } from 'src/utils/typeorm';
import { ParticipantsService } from './participants.service';

@Module({
    imports : [TypeOrmModule.forFeature([Participants]),
    ParticipantsModule
],
    // controllers: [ConversationController],
    providers: [
    {
      provide :  Services.PARTICIPANTS,
      useClass : ParticipantsService,
    }],
    exports: [{
        provide :  Services.PARTICIPANTS,
        useClass : ParticipantsService,
      }]
  })
export class ParticipantsModule {}
