import { Module } from '@nestjs/common';
import { Services } from 'src/utils/constants';
import { ConversationController } from './conversation.controller';
import { ConversationService } from './conversation.service';

@Module({
  controllers: [ConversationController],
  providers: [{
    provide :  Services.CONVERSATIONS,
    useClass : ConversationService,
  }]
})
export class ConversationsModule {}
