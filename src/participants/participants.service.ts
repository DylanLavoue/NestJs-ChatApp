import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participants } from 'src/utils/typeorm';
import { findParticipantParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { IParticipantsService } from './participants';

@Injectable()
export class ParticipantsService implements IParticipantsService {

    constructor (
        @InjectRepository(Participants)
        private readonly participantRepository: Repository<Participants>
        ) {}
    findOrCreateParticipant(params: Partial<{ id: number; }>): Promise<Participants> {
        throw new Error('Method not implemented.');
    }

    findParticipant(params : findParticipantParams): Promise<Participants | null> {
        return  this.participantRepository.findOne(params)
    }
    createParticipant(): Promise<Participants> {
        throw new Error('Method not implemented.');
    }
}
