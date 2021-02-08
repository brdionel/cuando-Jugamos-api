import { Schema } from 'mongoose';

export const TimeSchema = new Schema({
    nome: String,
    avatarURL: String,
    primaryColor: String,
    secondaryColor: String,
    apodo: String,
    estadio: String,
    prioridad: Number
}) 