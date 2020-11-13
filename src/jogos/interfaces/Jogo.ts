import { Document } from 'mongoose'

export interface Jogo extends Document{
    fecha: string;
    idLocal: string;
    idVisitante: string;
}