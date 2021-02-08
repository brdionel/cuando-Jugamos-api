import { Document } from 'mongoose'

export interface Jogo extends Document{
    fecha: Date;
    idLocal: string;
    idVisitante: string;
    idCampeonato: string;
    link: string;
    golesLocal: string;
    golesVisitante: string;
    videos: string[];
}