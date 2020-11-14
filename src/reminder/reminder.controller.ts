import { Controller, Put, Post, Get, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { ReminderService } from './reminder.service'

@Controller('reminder')
export class ReminderController {
    
    constructor(private reminderService: ReminderService ){}
}
