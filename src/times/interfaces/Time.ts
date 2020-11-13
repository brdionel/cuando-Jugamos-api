import { Document } from 'mongoose'

export interface Time extends Document{
    nome: string;
    avatarURL: string;
} 