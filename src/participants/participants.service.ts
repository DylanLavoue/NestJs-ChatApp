import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participants } from 'src/utils/typeorm';
import { createParticipantParams, findParticipantParams } from 'src/utils/types';
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
        return this.participantRepository.findOne(params)
    }
    createParticipant(params : createParticipantParams): Promise<Participants> {
        // Creates a new entity instance and copies all entity properties from this object into a new entity.
        //Note that it copies only properties that are present in entity schema.
       const participant = this.participantRepository.create(params)
       //after creating the participant and its id, we save it. 
       return this.participantRepository.save(participant)
    }
}
