import { Schema } from 'mongoose';

export const JogoSchema = new Schema({
    fecha: { 
        type: Date,
    },
    idLocal: {
        type: Schema.Types.ObjectId, 
        ref: "Time"
    },
    idVisitante: {
        type: Schema.Types.ObjectId, 
        ref: "Time"
    },
    idCampeonato: {
        type: Schema.Types.ObjectId, 
        ref: "Campeonato"
    }
})