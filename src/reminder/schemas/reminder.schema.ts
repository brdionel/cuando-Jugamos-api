import { Schema } from 'mongoose';

export const reminderSchema = new Schema({
    text: {
        type: String
    }, 
    fecha: {
        type: Date
    }
})