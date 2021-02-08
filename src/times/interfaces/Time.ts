import { Document } from 'mongoose'

export interface Time extends Document{
    nome: string;
    avatarURL: string;
    primaryColor: string;
    secondaryColor: string;
    apodo: string;
    estadio: string;
    prioridad: number;
} 