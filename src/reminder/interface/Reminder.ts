import { Document } from 'mongoose'

export interface Reminder extends Document{
    fecha: Date
    text: string
}