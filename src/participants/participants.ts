import { Participants } from "src/utils/typeorm";
import { createParticipantParams, findParticipantParams } from "src/utils/types";

export interface IParticipantsService {
    
    findOrCreateParticipant(params : findParticipantParams): Promise<Participants | null>;
    findParticipant(params : findParticipantParams): Promise<Participants | null>;
    createParticipant(params : createParticipantParams): Promise<Participants>;
}