import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { reminderSchema } from './schemas/Reminder.schema'
import { ReminderController } from './reminder.controller'
import { ReminderService } from './reminder.service'

@Module({
    imports: [ MongooseModule.forFeature([
        { name: 'Reminder', schema: reminderSchema}
        ])],
    controllers: [ReminderController],
    providers: [ReminderService]
})
export class ReminderModule {}
