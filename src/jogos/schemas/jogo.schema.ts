import { Schema } from 'mongoose';

export const JogoSchema = new Schema({
    fecha: String,
    idLocal: {
        type: Schema.Types.ObjectId, 
        ref: "Time"
    },
    idVisitante: {
        type: Schema.Types.ObjectId, 
        ref: "Time"
    }
})