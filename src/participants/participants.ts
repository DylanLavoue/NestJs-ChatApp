import { Participants } from "src/utils/typeorm";
import { findParticipantParams } from "src/utils/types";

export interface IParticipantsService {
    
    // findOrCreateParticipant(params : findParticipantParams): Promise<Participants | null>;
    findParticipant(params : findParticipantParams): Promise<Participants | null>;
    createParticipant(): Promise<Participants>;
}